import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
declare var require: any;
let SolidGauge = require("highcharts/modules/solid-gauge");
let More = require("highcharts/highcharts-more");
SolidGauge(Highcharts);
More(Highcharts);
@Component({
  selector: "app-new-solidgauge-chart",
  templateUrl: "./new-solidgauge-chart.component.html",
  styleUrls: ["./new-solidgauge-chart.component.scss"],
})
export class NewSolidgaugeChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any = {
    chart: {
      type: "solidgauge",
    },
    title: null,
    pane: {
      center: ["50%", "85%"],
      size: "140%",
      startAngle: -90,
      endAngle: 90,
      background: {
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc",
      },
    },
    tooltip: {
      enabled: false,
    },
    yAxis: {
      min: 0,
      max: 4,
      title: {
        text: "质量等级",
        y: 10,
      },
      stops: [
        [0.1, "#55BF3B"], // green
        [0.5, "#DDDF0D"], // yellow
        [0.9, "#DF5353"], // red
      ],
      lineWidth: 0,
      minorTickInterval: null,
      tickPixelInterval: 100,
      tickWidth: 0,
      labels: {
        y: 12,
      },
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "空气质量",
        data: [3],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:25px;">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver">级</span></div>',
        },
        tooltip: {
          valueSuffix: " 等级",
        },
      },
    ],
  };
  constructor() {}

  ngOnInit() {}
}
