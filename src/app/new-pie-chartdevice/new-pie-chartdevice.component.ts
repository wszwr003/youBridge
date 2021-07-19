import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import * as Highcharts from "highcharts";
import highcharts3D from "highcharts/highcharts-3d.src";
highcharts3D(Highcharts);
@Component({
  selector: "app-new-pie-chartdevice",
  templateUrl: "./new-pie-chartdevice.component.html",
  styleUrls: ["./new-pie-chartdevice.component.scss"],
})
export class NewPieChartdeviceComponent implements OnInit {
  @Input() num;
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
    //legend位置
    legend: {
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
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
          { name: "超声波清洗机", y: 0, color: "#00BEA0" },
          { name: "真空烘干机", y: 0, color: "#0A96DC" },
          { name: "紫外灯", y: 0, color: "#435C73" },
          { name: "粉碎机", y: 0, color: "#7360BB" },
          { name: "其他", y: 1, color: "#C0C4C8" },
          // { name: "小仪器仪表", y: 6, color: "#E64B3F" },
        ],
      },
    ],
  };
  constructor() {}

  ngOnInit() {
    //FAO:放到此处初始化,如果在声明的时候初始化,会出现INPUT尚未传值的情况.
    this.dataChart = Highcharts.chart("container1", this.chartOptions);
  }
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      for (const propName in changes) {
        if (changes.hasOwnProperty(propName)) {
          console.log(
            "!!!!!!!!!!!!!!!!!!!",
            this.num,
            this.dataChart,
            this.dataChart == undefined
          );
          if (
            this.num == undefined ||
            this.num < 0 ||
            this.dataChart == undefined
          ) {
            break;
          }
          console.log("!!!!!!!!!!!!!!!!!!!", this.num, this.dataChart);
          this.dataChart.series[0].setData(
            [
              { name: "超声波清洗机", y: 3, color: "#00BEA0" },
              { name: "真空烘干机", y: 3, color: "#0A96DC" },
              { name: "紫外灯", y: 5, color: "#435C73" },
              { name: "粉碎机", y: 2, color: "#7360BB" },
              { name: "其他", y: 1, color: "#C0C4C8" },
            ],
            true
          );
          break;
        }
      }
    }, 1500);
  }
}
