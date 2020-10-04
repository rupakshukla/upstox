import React from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts";
import moment from "moment";
import Loader from "react-loader-spinner";
import io from "socket.io-client";
ReactFC.fcRoot(FusionCharts, TimeSeries);
const jsonify = (res) => res.json();
const socket = io("http://kaboom.rksv.net/watch");
const dataSource = {
  chart: {},
  caption: {
    text: "",
  },
  subcaption: {
    text: "Live Chart fetching data from socket.",
  },
  yaxis: [
    {
      plot: [
        {
          value: {
            open: "Open",
            high: "High",
            low: "Low",
            close: "Close",
          },
          type: "ohlc",
        },
      ],
      title: "Price",
    },
  ],
};

export default class Live extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeseriesDs: {
        type: "timeseries",
        renderAt: "container",
        width: "100%",
        height: "500",
        dataSource,
      },
      schema: [
        {
          name: "Date",
          type: "date",
          format: "%m/%d/%Y, %I:%M:%S %p",
        },
        {
          name: "Open",
          type: "number",
        },
        {
          name: "High",
          type: "number",
        },
        {
          name: "Low",
          type: "number",
        },
        {
          name: "Close",
          type: "number",
        },
        {
          name: "Volume",
          type: "number",
        },
      ],
      dataPoints: [],
    };
  }

  componentDidMount() {
    let tempThis = this;
    socket.emit("sub", { state: true });
    socket.on("data", function (dataObj, callback) {
      var CLIENT_ACKNOWLEDGEMENT = 1;
      tempThis.processData(dataObj);
      setInterval(() => {
        callback(CLIENT_ACKNOWLEDGEMENT);
      }, 100);
    });
  }
  componentWillUnmount() {
    socket.emit("unsub", { state: false });
  }
  fd = (d) => {
    return d.toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };
  processData = (dataObj) => {
    //console.log("From WebSocket:->", dataObj);
    let obj = [];
    let splitData = dataObj.split(",");
    let date = moment.unix(splitData[0] / 1000);
    obj.push(this.fd(date._d));
    obj.push(splitData[1]);
    obj.push(splitData[2]);
    obj.push(splitData[3]);
    obj.push(splitData[4]);
    obj.push(splitData[5]);
    this.state.dataPoints.push(obj);

    // console.log("Data Given To Graph:->", obj);
    // console.log("-------------------");

    const data = this.state.dataPoints;
    const schema = this.state.schema;
    const fusionTable = new FusionCharts.DataStore().createDataTable(
      data,
      schema
    );
    const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
    timeseriesDs.dataSource.data = fusionTable;
    this.setState({
      timeseriesDs,
    });
    return this.state.dataPoints;
  };
  onFetchData() {}
  render() {
    return (
      <div>
        {this.state.timeseriesDs.dataSource.data ? (
          <ReactFC {...this.state.timeseriesDs} />
        ) : (
          <div style={{ textAlign: "center" }}>
            <Loader type="TailSpin" color="#00BFFF" height={200} width={200} />
          </div>
        )}
      </div>
    );
  }
}
