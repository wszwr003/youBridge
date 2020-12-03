import { Component, OnInit, SimpleChanges, Input } from "@angular/core";
import * as Highcharts from "highcharts";
import highcharts3D from "highcharts/highcharts-3d.src";
highcharts3D(Highcharts);
@Component({
  selector: "app-new-pie-chartlive",
  templateUrl: "./new-pie-chartlive.component.html",
  styleUrls: ["./new-pie-chartlive.component.scss"],
})
export class NewPieChartliveComponent implements OnInit {
  @Input() online = 0;
  @Input() offline = 0;
  @Input() fault = 0;
  private dataChart: Highcharts.Chart = null;
  chartOptions: any = {
    credits: {
      enabled: false,
    },
    chart: {
      backgroundColor: "#e5e5e5",
      type: "pie",
      height: 350,
      width: 300,
      options3d: {
        enabled: true,
        alpha: 30,
      },
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    plotOptions: {
      pie: {
        innerSize: 30,
        depth: 30,
        showInLegend: true, //增加legend
        //取消直接表示
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "设备数量",
        data: [
          { name: "运行中设备", y: 0, color: "#55FF00" },
          { name: "未运行设备", y: 0, color: "#435C73" },
          { name: "离线设备", y: 1, color: "#C0C4C8" },
        ],
      },
    ],
  };
  constructor() {}

  ngOnInit() {
    //FAO:放到此处初始化,如果在声明的时候初始化,会出现INPUT尚未传值的情况.

    this.dataChart = Highcharts.chart("container2", this.chartOptions);
  }
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      for (const propName in changes) {
        if (changes.hasOwnProperty(propName)) {
          if (
            this.online == undefined ||
            this.offline == undefined ||
            this.fault == undefined ||
            this.online < 0 ||
            this.offline < 0 ||
            this.fault < 0 ||
            this.dataChart == undefined
          ) {
            break;
          }
          this.dataChart.series[0].setData(
            [
              { name: "运行中设备", y: this.online, color: "#55FF00" },
              { name: "未运行设备", y: this.offline, color: "#C0C4C8" },
              { name: "未启用设备", y: 5, color: "#435C73" },
            ],
            true
          );
          break;
        }
      }
    }, 1500);
  }
}
