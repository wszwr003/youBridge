import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  ElementRef,
  ViewChild,
} from "@angular/core";
import * as Highcharts from "highcharts";
import { sensorData } from "../services/sensor-data";
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
  @Input() data: sensorData;
  Highcharts: typeof Highcharts = Highcharts;
  public chart: Highcharts.Chart;
  chartOptions: any = {
    chart: {
      type: "solidgauge",
    },
    title: null,
    pane: {
      center: ["50%", "85%"],
      size: "140%",
      startAngle: -90, // 仪表开始角度 -90为<--
      endAngle: 90, // 仪表结束角度 +90为-->
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
      min: 3,
      max: 0,
      title: {
        //标题
        text: "质量等级",
        y: 10,
      },
      stops: [
        [0.1, "#DF5353"], // red
        [0.5, "#DDDF0D"], // yellow
        [0.9, "#00BEA0"], // green
      ],
      lineWidth: 0,
      minorTickInterval: null,
      tickPixelInterval: 100,
      tickWidth: 0,
      labels: {
        y: 0, //刻度位置
      },
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 0,
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
        data: [
          {
            y: 0,
          },
        ],

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
    // responsive: {
    //   rules: [
    //     {
    //       condition: {
    //         maxWidth: 500,
    //         minWidth: 100,
    //       },
    //       chartOptions: {
    //         legend: {
    //           align: "center",
    //           verticalAlign: "bottom",
    //           layout: "horizontal",
    //         },
    //         yAxis: {
    //           labels: {
    //             align: "left",
    //             x: 0,
    //             y: -5,
    //           },
    //           title: {
    //             text: null,
    //           },
    //         },
    //         subtitle: {
    //           text: null,
    //         },
    //         credits: {
    //           enabled: false,
    //         },
    //       },
    //     },
    //   ],
    // },
  };
  logChartInstance(chart: Highcharts.Chart) {
    this.chart = chart;
  }
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case "data": {
            // console.log(
            //   "line chart history datas change",
            //   this.data,
            //   "datas-end"
            // );
            if (this.chart != undefined)
              this.chart.series[0].points[0].update(this.data.voc_lvl);
          }
        }
      }
    }
  }
  ngOnInit() {
    //if (this.chart != undefined) this.chart.setSize(50);
  }
  ngAfterViewInit() {
    if (this.chart != undefined) this.chart.setSize(null);
  }
}
