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
@Component({
  selector: "app-air-chart",
  templateUrl: "./air-chart.component.html",
  styleUrls: ["./air-chart.component.scss"],
})
export class AirChartComponent implements OnInit {
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
            console.log("line chart data change", this.data, "data-end");
            if (this.data == undefined) break;
            if (this.deviceId != this.data.device_id) break;
            if (this.data == null || this.dataChart == null) {
              return;
            }
            var time = new Date().getTime();
            var time_second = time - (time % 1000);
            var shift = false; //chart是否平移
            for (var i = 0; i < 8; i++)
              if (this.dataChart.series[i].data.length >= this.chartPoints)
                shift = true;
            this.dataChart.series[0].addPoint(
              [
                //this.data.time == undefined ? time_second : this.data.time,
                time_second,
                this.data.Air_T,
              ],
              false,
              shift,
              false
            );
            this.dataChart.series[1].addPoint(
              [
                //this.data.time == undefined ? time_second : this.data.time,
                time_second,
                this.data.Air_H,
              ],
              false,
              shift,
              false
            );
            this.dataChart.series[2].addPoint(
              [
                //this.data.time == undefined ? time_second : this.data.time,
                time_second,
                this.data.PM25,
              ],
              false,
              shift,
              false
            );
            this.dataChart.series[3].addPoint(
              [
                //this.data.time == undefined ? time_second : this.data.time,
                time_second,
                this.data.PM10,
              ],
              true, //FAO:repaint!!!!
              shift,
              false
            );
            this.dataChart.series[4].addPoint(
              [
                //this.data.time == undefined ? time_second : this.data.time,
                time_second,
                this.data.VOC,
              ],
              true, //FAO:repaint!!!!
              shift,
              false
            );
            this.dataChart.series[5].addPoint(
              [
                //this.data.time == undefined ? time_second : this.data.time,
                time_second,
                this.data.Noise,
              ],
              true, //FAO:repaint!!!!
              shift,
              false
            );
            this.dataChart.series[6].addPoint(
              [
                //this.data.time == undefined ? time_second : this.data.time,
                time_second,
                this.data.H2S,
              ],
              true, //FAO:repaint!!!!
              shift,
              false
            );
            this.dataChart.series[7].addPoint(
              [
                //this.data.time == undefined ? time_second : this.data.time,
                time_second,
                this.data.Shine,
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
        // "#888888", //pm25
        // "#e64b3f", //co2
        // "#de932e", //temp
        // "#7dcff8", //humi
        // "#888888", //pm25
        // "#e64b3f", //co2
        // "#de932e", //temp
        // "#7dcff8", //humi
        "#2f7ed8",
        "#0d233a",
        "#8bbc21",
        "#910000",
        "#1aadce",
        "#492970",
        "#f28f43",
        "#77a1e5",
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
        backgroundColor: "#e5e5e5",
        type: "spline",
        height: 550,
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
              color: "#2f7ed8", //pm25
            },
          },
          labels: {
            format: "{value}",
            style: {
              color: "#2f7ed8", //pm25
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
              color: "#0d233a", //co2
            },
          },
          labels: {
            format: "{value}",
            style: {
              color: "#0d233a", //co2
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
              color: "#8bbc21", //temp
            },
          },
          labels: {
            format: "{value}",
            style: {
              color: "#8bbc21", //temp
            },
          },
          minTickInterval: 1,
          minRange: 10,
        },
        {
          // Tertiary yAxis
          gridLineWidth: 1,
          type: "Data",
          title: {
            // text: "湿度(%)",
            text: "",
            style: {
              color: "#910000", //humi
            },
          },
          labels: {
            format: "{value}",
            style: {
              color: "#910000", //humi
            },
          },
          minTickInterval: 1,
          minRange: 10,
        },
        {
          // Secondary yAxis
          gridLineWidth: 1,
          type: "Data",
          title: {
            // text: "PM2.5浓度(μg/m3)",
            text: "",
            style: {
              color: "#1aadce", //pm25
            },
          },
          labels: {
            format: "{value}",
            style: {
              color: "#1aadce", //pm25
            },
          },
          minTickInterval: 1,
          minRange: 5,
          opposite: true,
        },
        {
          gridLineWidth: 1,
          type: "Data",
          title: {
            // text: "二氧化碳浓度(ppm)",
            text: "",
            style: {
              color: "#492970", //co2
            },
          },
          labels: {
            format: "{value}",
            style: {
              color: "#492970", //co2
            },
          },
          minTickInterval: 1,
          minRange: 5,
          opposite: true,
        },
        {
          // Primary yAxis
          gridLineWidth: 1,
          type: "Data",
          title: {
            // text: "温度(°C)",
            text: "",
            style: {
              color: "#f28f43", //temp
            },
          },
          labels: {
            format: "{value}",
            style: {
              color: "#f28f43", //temp
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
              color: "#77a1e5", //humi
            },
          },
          labels: {
            format: "{value}",
            style: {
              color: "#77a1e5", //humi
            },
          },
          minTickInterval: 1,
          minRange: 5,
          opposite: true,
        },
      ],
      series: [
        {
          name: "温度(℃)",
          turboThreshold: 50000,
          yAxis: 0,
          data: [
            // [new Date("2018-01-25 18:38:31").getTime(), 555],
          ],
        },
        {
          name: "湿度(%)",
          turboThreshold: 50000,
          yAxis: 1,
          data: [
            // [new Date("2018-01-25 18:38:31").getTime(), 423],
          ],
        },
        {
          name: "PM2.5",
          turboThreshold: 50000,
          yAxis: 2,
          data: [
            // [new Date("2018-01-25 18:38:31").getTime(), 18],
          ],
        },
        {
          name: "PM10",
          turboThreshold: 50000,
          yAxis: 3,
          data: [
            // [new Date("2018-01-25 18:38:31").getTime(), 55],
          ],
        },
        {
          name: "VOC",
          turboThreshold: 50000,
          yAxis: 4,
          data: [
            // [new Date("2018-01-25 18:38:31").getTime(), 555],
          ],
        },
        {
          name: "噪声(dB)",
          turboThreshold: 50000,
          yAxis: 5,
          data: [
            // [new Date("2018-01-25 18:38:31").getTime(), 423],
          ],
        },
        {
          name: "H2S浓度",
          turboThreshold: 50000,
          yAxis: 6,
          data: [
            // [new Date("2018-01-25 18:38:31").getTime(), 18],
          ],
        },
        {
          name: "光照强度",
          turboThreshold: 50000,
          yAxis: 7,
          data: [
            // [new Date("2018-01-25 18:38:31").getTime(), 55],
          ],
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 599,
            },
            chartOptions: {
              plotOptions: {
                spline: {
                  lineWidth: 2,
                  states: {
                    hover: {
                      lineWidth: 3,
                    },
                  },
                  marker: {
                    enabled: true,
                  },
                },
              },
              yAxis: [
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: false,
                  }, //去掉刻度数字
                },
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: false,
                  }, //去掉刻度数字
                },
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: false,
                  }, //去掉刻度数字
                },
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: false,
                  }, //去掉刻度数字
                },
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: false,
                  }, //去掉刻度数字
                },
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: false,
                  }, //去掉刻度数字
                },
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: false,
                  }, //去掉刻度数字
                },
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: false,
                  }, //去掉刻度数字
                },
              ],
            },
          },
          {
            condition: {
              minWidth: 600,
            },
            chartOptions: {
              plotOptions: {
                spline: {
                  lineWidth: 2,
                  states: {
                    hover: {
                      lineWidth: 3,
                    },
                  },
                  marker: {
                    enabled: false,
                  },
                },
              },
              yAxis: [
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: true,
                  }, //去掉刻度数字
                },
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: true,
                  }, //去掉刻度数字
                },
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: true,
                  }, //去掉刻度数字
                },
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: true,
                  }, //去掉刻度数字
                },
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: true,
                  }, //去掉刻度数字
                },
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: true,
                  }, //去掉刻度数字
                },
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: true,
                  }, //去掉刻度数字
                },
                {
                  lineWidth: 0, //去掉x轴线
                  tickWidth: 0, //去掉刻度
                  labels: {
                    enabled: true,
                  }, //去掉刻度数字
                },
              ],
            },
          },
        ],
      },
    };

    Highcharts.setOptions(this.optionsG);
    this.dataChart = Highcharts.chart("container", this.options);
  }
}
