//FAO: 使用了纯highchart,没有使用angular-highcharts,notuse
import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input
} from "@angular/core";
import * as Highcharts from "highcharts";
import { ChartInit } from "../mutisensor-view/sensor-chart";
import { sensorData } from "../services/sensor-data";
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
export class DataChartComponent implements OnInit, OnChanges {
  @Input() chartInit: ChartInit = {
    //设置默认值
    chartType: null,
    chartHeight: null,
    dateFormat: null,
    seriesName: null
  };
  @Input() data: sensorData;
  private chartPoints = 60; //chart最多数据点设置
  private dataChart: Highcharts.Chart = null;
  public options: any;
  constructor() {}
  // 监测@input:data改动!
  ngOnChanges(changes: SimpleChanges): void {
    var time = new Date().getTime();
    var time_second = time - (time % 1000);
    var shift = false; //chart是否平移
    console.log(JSON.stringify(this.data));
    for (var i = 0; i < 5; i++)
      if (this.dataChart.series[i].data.length >= this.chartPoints)
        shift = true;
    //数据格式: {"device_id":"12345678","key":"12345678","pm25":33,"co2":33,"temp":33,"humi":33,"voc_lvl":33}
    this.dataChart.series[0].addPoint(
      [
        this.data.time == undefined ? time_second : this.data.time,
        this.data.pm25
      ],
      false,
      shift,
      false
    );
    this.dataChart.series[1].addPoint(
      [
        this.data.time == undefined ? time_second : this.data.time,
        this.data.co2
      ],
      false,
      shift,
      false
    );
    this.dataChart.series[2].addPoint(
      [
        this.data.time == undefined ? time_second : this.data.time,
        this.data.temp
      ],
      false,
      shift,
      false
    );
    this.dataChart.series[3].addPoint(
      [
        this.data.time == undefined ? time_second : this.data.time,
        this.data.humi
      ],
      false,
      shift,
      false
    );
    this.dataChart.series[4].addPoint(
      [
        this.data.time == undefined ? time_second : this.data.time,
        this.data.voc_lvl
      ],
      true,
      shift,
      false
    );
  }

  ngOnInit() {
    //FAO:放到此处初始化,如果在声明的时候初始化,会出现INPUT尚未传值的情况.
    this.options = {
      plotOptions: {
        series: {
          marker: {},
          enableMouseTracking: false
        }
      },
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
            return Highcharts.dateFormat("%H:%M:%S", this.value); //TBS:this.value
          }
        }
      },
      yAxis: [
        {
          type: "Data"
        }
      ],
      series: [
        {
          name: "PM2.5浓度",
          turboThreshold: 50000,
          data: [
            //[new Date("2018-01-25 18:38:31").getTime(), 32],
            //[new Date("2018-01-25 19:38:31").getTime(), 666]
          ]
        },
        {
          name: "二氧化碳浓度",
          turboThreshold: 50000,
          data: [
            //[new Date("2018-01-25 18:38:31").getTime(), 123],
            //[new Date("2018-01-25 19:38:31").getTime(), 480]
          ]
        },
        {
          name: "温度",
          turboThreshold: 50000,
          data: [
            //[new Date("2018-01-25 18:38:31").getTime(), 18],
            //[new Date("2018-01-25 19:38:31").getTime(), 333]
          ]
        },
        {
          name: "湿度",
          turboThreshold: 50000,
          data: [
            //[new Date("2018-01-25 18:38:31").getTime(), 68],
            //[new Date("2018-01-25 19:38:31").getTime(), 555]
          ]
        },
        {
          name: "VOC等级",
          turboThreshold: 50000,
          data: [
            //[new Date("2018-01-25 18:38:31").getTime(), 32],
            //[new Date("2018-01-25 19:38:31").getTime(), 666]
          ]
        }
      ]
    };

    this.dataChart = Highcharts.chart("container", this.options);
  }
}
