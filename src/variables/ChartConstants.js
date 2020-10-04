export const chartDefaultOptions = {
  animationEnabled: true,
  exportEnabled: true,
  theme: "light2",
  exportFileName: "Historical Chart",
  title: {
    text: "",
  },
  axisX: {
    interval: 1,
    intervalType: "year",
    valueFormatString: "YYYY",
  },
  axisY: {
    prefix: "",
    title: "Price",
  },
  data: [
    {
      type: "ohlc",
      yValueFormatString: "###0.00",
      xValueFormatString: "YYYY",
      dataPoints: [
        { x: new Date("2017-01-01"), y: [891.3, 893.3, 865.2, 868.75] },
        { x: new Date("2017-02-01"), y: [875, 875, 828.1, 833.25] },
        { x: new Date("2017-03-01"), y: [839.9, 855, 837.3, 848.65] },
      ],
    },
  ],
};
export const liveChartDefaultOptions = {
  animationEnabled: true,
  exportEnabled: true,
  theme: "light2",
  exportFileName: "Historical Chart",
  title: {
    text: "",
  },
  axisX: {
    interval: 100,
    intervalType: "millisecond",
    valueFormatString: "ff",
  },
  axisY: {
    prefix: "",
    title: "Price",
  },
  data: [
    {
      type: "ohlc",
      yValueFormatString: "###0.00",
      xValueFormatString: "ff",
      dataPoints: [
        { x: new Date("2017-01-01"), y: [891.3, 893.3, 865.2, 868.75] },
        { x: new Date("2017-02-01"), y: [875, 875, 828.1, 833.25] },
        { x: new Date("2017-03-01"), y: [839.9, 855, 837.3, 848.65] },
      ],
    },
  ],
};
