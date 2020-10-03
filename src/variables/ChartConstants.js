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
        //   { x: new Date("2017-03-01"), y: [25.37, 25.8, 22.16, 23.59] },
        //   { x: new Date("2017-04-01"), y: [23.65, 24.35, 22.26, 23.34] },
        //   { x: new Date("2017-05-01"), y: [23.52, 24.31, 22.09, 22.41] },
        //   { x: new Date("2017-06-01"), y: [22.48, 24.67, 22.07, 24.26] },
        //   { x: new Date("2017-07-01"), y: [24.46, 25.11, 23.61, 24.12] },
        //   { x: new Date("2017-08-01"), y: [24.29, 25.35, 23.12, 23.89] },
        //   { x: new Date("2017-09-01"), y: [23.9, 25.64, 22.75, 25.34] },
        //   { x: new Date("2017-10-01"), y: [25.46, 27.98, 25.12, 27.39] },
        //   { x: new Date("2017-11-01"), y: [27.64, 28.72, 25.81, 28.17] },
        //   { x: new Date("2017-12-01"), y: [28.25, 30.03, 27.5, 29.52] },
      ],
    },
  ],
};
