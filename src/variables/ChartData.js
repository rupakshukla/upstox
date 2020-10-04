import FusionCharts from "fusioncharts";
var dataStore = new FusionCharts.DataStore();
export const schema = [
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
];
var data = [];
export const chartDefaultData = {
  type: "timeseries",
  width: "100%",
  height: "500",
  renderAt: "realtimechart-container",
  dataSource: {
    chart: {
      theme: "fusion",
    },
    extensions: {
      standardRangeSelector: {
        enabled: "0",
      },
      customRangeSelector: {
        enabled: "0",
      },
    },
    data: dataStore.createDataTable(data, schema),
    caption: {
      text: "Microsoft Corporation Stock Price",
    },
    subcaption: {
      text: "Real-time live data: NASDAQ MSFT",
    },
    yaxis: [
      {
        max: "153.6",
        min: "151.5",
        plot: {
          value: {
            open: "Open",
            high: "High",
            low: "Low",
            close: "Close",
          },
          type: "ohlc",
        },
        format: {
          prefix: "$",
        },
        title: "Stock Value",
      },
    ],
  },
};

export const dummyData = [
  ["1971-02-05", 100, 100, 100, 100, 0],
  ["1971-02-08", 100.839996, 100.839996, 100.839996, 100.839996, 0],
  ["1971-02-09", 100.760002, 100.760002, 100.760002, 100.760002, 0],
  ["1971-02-10", 100.690002, 100.690002, 100.690002, 100.690002, 0],
  ["1971-02-11", 101.449997, 101.449997, 101.449997, 101.449997, 0],
  ["1971-02-12", 102.050003, 102.050003, 102.050003, 102.050003, 0],
  ["1971-02-16", 102.190002, 102.190002, 102.190002, 102.190002, 0],
  ["1971-02-17", 101.739998, 101.739998, 101.739998, 101.739998, 0],
  ["1971-02-18", 101.419998, 101.419998, 101.419998, 101.419998, 0],
  ["1971-02-19", 100.699997, 100.699997, 100.699997, 100.699997, 0],
  ["1971-02-22", 99.68, 99.68, 99.68, 99.68, 0],
  ["1971-02-23", 99.720001, 99.720001, 99.720001, 99.720001, 0],
  ["1971-02-24", 100.639999, 100.639999, 100.639999, 100.639999, 0],
];
