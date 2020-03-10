import { Component, OnInit, Input } from "@angular/core";
import * as Highcharts from "highcharts";
import { ChartInit } from "../mutisensor-view/sensor-chart";

declare var require: any;
let Boost = require("highcharts/modules/boost");
let noData = require("highcharts/modules/no-data-to-display");
let More = require("highcharts/highcharts-more");

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
@Component({
  selector: "app-data-chart",
  templateUrl: "./data-chart.component.html",
  styleUrls: ["./data-chart.component.scss"]
})
export class DataChartComponent implements OnInit {
  @Input() chartInit: ChartInit = {
    //设置默认值
    chartType: null,
    chartHeight: null,
    dateFormat: null,
    seriesName: null
  };
  public options: any;

  constructor() {}

  ngOnInit() {
    //FAO:放到此处初始化,如果在声明的时候初始化,会出现INPUT尚未传值的情况.
    this.options = {
      chart: {
        type: this.chartInit.chartType,
        height: this.chartInit.chartHeight
      },
      title: {
        text: ""
      },
      credits: {
        enabled: false
      },
      tooltip: {
        formatter: function() {
          return this.y.toFixed(2);
        }
      },
      xAxis: {
        type: "datetime",
        labels: {
          formatter: function() {
            return Highcharts.dateFormat("%y-%m-%d %H:%M:%S", this.value);
          }
        }
      },
      yAxis: [
        {
          type: "CO2"
        }
      ],
      series: [
        {
          name: "二氧化碳浓度",
          turboThreshold: 500000,
          data: [
            [new Date("2018-01-25 18:38:31").getTime(), 480],
            [new Date("2018-01-25 19:38:31").getTime(), 480]
          ]
        },
        {
          name: "温度",
          turboThreshold: 500000,
          data: [
            [new Date("2018-01-25 18:38:31").getTime(), 18],
            [new Date("2018-01-25 19:38:31").getTime(), 480]
          ]
        },
        {
          name: "湿度",
          turboThreshold: 500000,
          data: [
            [new Date("2018-01-25 18:38:31").getTime(), 68],
            [new Date("2018-01-25 19:38:31").getTime(), 480]
          ]
        },
        {
          name: "PM2.5浓度",
          turboThreshold: 500000,
          data: [
            [new Date("2018-01-25 18:38:31").getTime(), 32],
            [new Date("2018-01-25 19:38:31").getTime(), 480]
          ]
        }
      ]
    };

    Highcharts.chart("container", this.options);
  }
}
