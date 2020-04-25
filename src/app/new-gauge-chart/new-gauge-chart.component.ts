import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
} from "@angular/core";
import * as Highcharts from "highcharts";
import { SensorData } from "../services/sensor5in1";

@Component({
  selector: "app-new-gauge-chart",
  templateUrl: "./new-gauge-chart.component.html",
  styleUrls: ["./new-gauge-chart.component.scss"],
})
export class NewGaugeChartComponent implements OnInit, OnChanges {
  @Input() newestData: SensorData;
  public options: any;
  public optionsG: any;
  private dataChart: Highcharts.Chart = null;

  constructor() {}
  // 监测@input:data改动! //FAO:simplechanges 写法!
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case "newestData": {
            break;
          }
        }
      }
    }
  }

  ngOnInit() {
    //FAO:放到此处初始化,如果在声明的时候初始化,会出现INPUT尚未传值的情况.
    this.optionsG = {
      global: {},
    };
    Highcharts.setOptions(this.optionsG); //全局设置!

    this.options = {
      chart: {
        type: "solidgauge",
        height: 260,
      },
      title: null,
      pane: {
        center: ["50%", "85%"],
        size: "100%",
        startAngle: -180, // 仪表开始角度 -90为<--
        endAngle: 180, // 仪表结束角度 +90为-->
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
    };

    this.dataChart = Highcharts.chart("container", this.options);
  }
}
