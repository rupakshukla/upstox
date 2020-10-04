import React, { useState, useEffect } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import io from "socket.io-client";
import moment from "moment";
import Loader from "react-loader-spinner";
import { liveChartDefaultOptions } from "../../variables/ChartConstants.js";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function Live() {
  let dataPoints = [];
  const [showFlag, setShowFlag] = React.useState(false);
  const [chartData, setChartData] = React.useState(liveChartDefaultOptions);
  useEffect(() => {
    subscribeLive();
  }, []);
  const subscribeLive = () => {
    const socket = io("http://kaboom.rksv.net/watch");
    socket.emit("sub", { state: true });
    socket.on("data", function (data, callback) {
      var CLIENT_ACKNOWLEDGEMENT = 1;
      processData(data);
      setInterval(() => {
        callback(CLIENT_ACKNOWLEDGEMENT);
      }, 3000);
    });
  };
  const processData = (data) => {
    console.log(data);
    let tempChartOptions = { ...chartData };
    let obj = {};
    let splitData = data.split(",");
    let date = moment.unix(splitData[0] / 1000).format("YYYY-MM-DD");
    obj["x"] = new Date(date);
    obj["y"] = [
      parseFloat(splitData[1]),
      parseFloat(splitData[2]),
      parseFloat(splitData[3]),
      parseFloat(splitData[4]),
    ];
    dataPoints.push(obj);
    tempChartOptions.data[0].dataPoints = dataPoints;
    setChartData(tempChartOptions);
    //console.log(chartData);
    setTimeout(() => {
      setShowFlag(true);
    }, 1);
  };
  return (
    <div>
      {showFlag && (
        <div>
          <CanvasJSChart options={chartData} />
        </div>
      )}
      {!showFlag && (
        <div style={{ textAlign: "center" }}>
          <Loader type="TailSpin" color="#00BFFF" height={200} width={200} />
        </div>
      )}
    </div>
  );
}
