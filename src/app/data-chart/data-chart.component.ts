//FAO: 使用了纯highchart,没有使用angular-highcharts,notuse
import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from "@angular/core";
import * as Highcharts from "highcharts";
import { ChartInit } from "../mutisensor-view/sensor-chart";
import { SensorData } from "../services/sensor5in1";
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
  styleUrls: ["./data-chart.component.scss"],
})
export class DataChartComponent implements OnInit, OnChanges {
  @Input() chartInit: ChartInit = {
    //设置默认值
    chartType: null,
    chartHeight: null,
    dateFormat: null,
    seriesName: null,
  };
  @Input() deviceId: string;
  @Input() data: SensorData;
  @Input() datas: SensorData[];
  private chartPoints = 60; //chart最多数据点设置
  private dataChart: Highcharts.Chart = null;
  public options: any;
  public optionsG: any;
  constructor() {}
  // 监测@input:data改动! //FAO:simplechanges 写法!
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case "data": {
            // console.log("line chart data change", this.data, "data-end");
            if (this.data == undefined) break;
            if (this.deviceId != this.data.device_id) break;
            if (this.data == null || this.dataChart == null) {
              return;
            }
            var time = new Date().getTime();
            var time_second = time - (time % 1000);
            var shift = false; //chart是否平移
            for (var i = 0; i < 4; i++)
              if (this.dataChart.series[i].data.length >= this.chartPoints)
                shift = true;
            this.dataChart.series[0].addPoint(
              [
                //this.data.time == undefined ? time_second : this.data.time,
                time_second,
                this.data.pm25,
              ],
              false,
              shift,
              false
            );
            this.dataChart.series[1].addPoint(
              [
                //this.data.time == undefined ? time_second : this.data.time,
                time_second,
                this.data.co2,
              ],
              false,
              shift,
              false
            );
            this.dataChart.series[2].addPoint(
              [
                //this.data.time == undefined ? time_second : this.data.time,
                time_second,
                this.data.temp,
              ],
              false,
              shift,
              false
            );
            this.dataChart.series[3].addPoint(
              [
                //this.data.time == undefined ? time_second : this.data.time,
                time_second,
                this.data.humi,
              ],
              true, //FAO:repaint!!!!
              shift,
              false
            );
            break; //FAO: 不能丢!!
          }
          case "datas": {
            // console.log(
            //   "line chart history datas change",
            //   this.datas,
            //   "datas-end"
            // );
            if (this.dataChart == undefined) break;
            setTimeout(() => {
              this.dataChart.series[0].setData([]);
              this.dataChart.series[1].setData([]);
              this.dataChart.series[2].setData([]);
              this.dataChart.series[3].setData([]);

              for (let index = this.datas.length - 1; index >= 0; index--) {
                var element = this.datas[index];
                var time = new Date(element.time).getTime();
                var time_second = time - (time % 1000);
                var shift = false; //chart是否平移
                for (var i = 0; i < 4; i++)
                  if (this.dataChart.series[i].data.length >= this.chartPoints)
                    shift = true;
                this.dataChart.series[0].addPoint(
                  [time_second, element.pm25],
                  false,
                  shift,
                  false
                );
                this.dataChart.series[1].addPoint(
                  [time_second, element.co2],
                  false,
                  shift,
                  false
                );
                this.dataChart.series[2].addPoint(
                  [time_second, element.temp],
                  false,
                  shift,
                  false
                );
                this.dataChart.series[3].addPoint(
                  [time_second, element.humi],
                  true, //FAO:repaint!!!!
                  shift,
                  false
                );
              }
            }, 1500);
            break; //FAO: 不能丢!!
          }
        }
      }
    }
  }

  ngOnInit() {
    //FAO:放到此处初始化,如果在声明的时候初始化,会出现INPUT尚未传值的情况.
    this.optionsG = {
      global: {
        useUTC: false,
      },
    };
    this.options = {
      colors: [
        "#888888", //pm25
        "#e64b3f", //co2
        "#de932e", //temp
        "#7dcff8", //humi
      ],
      plotOptions: {
        spline: {
          lineWidth: 4,
          states: {
            hover: {
              lineWidth: 5,
            },
          },
          marker: {
            enabled: false,
          },
        },
        series: {
          marker: {},
          enableMouseTracking: true,
        },
      },
      chart: {
        type: "spline",
        height: 390,
      },
      title: {
        text: "",
      },
      credits: {
        enabled: false, //highchart 标志取消
      },
      tooltip: {
        formatter: function () {
          return this.y.toFixed(2);
        },
      },
      xAxis: {
        type: "datetime",
        labels: {
          formatter: function () {
            return Highcharts.dateFormat("%m/%d %H:%M", this.value); //TBS:this.value
          },
        },
      },
      yAxis: [
        {
          // Secondary yAxis
          gridLineWidth: 1,
          type: "Data",
          title: {
            // text: "PM2.5浓度(μg/m3)",
            text: "",
            style: {
              color: "#888888", //pm25
            },
          },
          labels: {
            format: "{value}",
            style: {
              color: "#888888", //pm25
            },
          },
          minTickInterval: 1,
          minRange: 10,
        },
        {
          gridLineWidth: 1,
          type: "Data",
          title: {
            // text: "二氧化碳浓度(ppm)",
            text: "",
            style: {
              color: "#e64b3f", //co2
            },
          },
          labels: {
            format: "{value}",
            style: {
              color: "#e64b3f", //co2
            },
          },
          minTickInterval: 1,
          minRange: 10,
        },
        {
          // Primary yAxis
          gridLineWidth: 1,
          type: "Data",
          title: {
            // text: "温度(°C)",
            text: "",
            style: {
              color: "#de932e", //temp
            },
          },
          labels: {
            format: "{value}",
            style: {
              color: "#de932e", //temp
            },
          },
          minTickInterval: 1,
          minRange: 5,
          opposite: true,
        },
        {
          // Tertiary yAxis
          gridLineWidth: 1,
          type: "Data",
          title: {
            // text: "湿度(%)",
            text: "",
            style: {
              color: "#7dcff8", //humi
            },
          },
          labels: {
            format: "{value}",
            style: {
              color: "#7dcff8", //humi
            },
          },
          minTickInterval: 1,
          minRange: 5,
          opposite: true,
        },
      ],
      series: [
        {
          name: "PM2.5浓度(μg/m3)",
          turboThreshold: 50000,
          yAxis: 0,
          data: [
            // [new Date("2018-01-25 18:38:31").getTime(), 555],
          ],
        },
        {
          name: "二氧化碳浓度(ppm)",
          turboThreshold: 50000,
          yAxis: 1,
          data: [
            // [new Date("2018-01-25 18:38:31").getTime(), 423],
          ],
        },
        {
          name: "温度(℃)",
          turboThreshold: 50000,
          yAxis: 2,
          data: [
            // [new Date("2018-01-25 18:38:31").getTime(), 18],
          ],
        },
        {
          name: "湿度(%)",
          turboThreshold: 50000,
          yAxis: 3,
          data: [
            // [new Date("2018-01-25 18:38:31").getTime(), 55],
          ],
        },
      ],
    };

    Highcharts.setOptions(this.optionsG);
    this.dataChart = Highcharts.chart("container", this.options);
  }
}
