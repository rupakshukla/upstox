import React from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts";
import moment from "moment";
import Loader from "react-loader-spinner";

ReactFC.fcRoot(FusionCharts, TimeSeries);
const jsonify = (res) => res.json();
const dataFetch = fetch("http://kaboom.rksv.net/api/historical?interval=").then(
  jsonify
);
const dataSource = {
  chart: {},
  caption: {
    text: "",
  },
  subcaption: {
    text: "",
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

export default class HistoricalOHLC extends React.Component {
  constructor(props) {
    super(props);
    //this.onFetchData = this.onFetchData.bind(this);
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
          format: "%Y-%m-%d",
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
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.onFetchData();
    }, 1000);
  }
  processData = (data) => {
    let dataPoints = [];
    for (let record in data) {
      let obj = [];
      let splitData = data[record].split(",");
      let date = moment.unix(splitData[0] / 1000).format("YYYY-MM-DD");
      obj.push(date);
      obj.push(splitData[1]);
      obj.push(splitData[2]);
      obj.push(splitData[3]);
      obj.push(splitData[4]);
      obj.push(splitData[5]);
      dataPoints.push(obj);
    }
    return dataPoints;
  };
  onFetchData() {
    Promise.all([dataFetch]).then((res) => {
      const data = this.processData(res[0]);
      console.log(data);
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
    });
    //console.log(this.state);
  }
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
