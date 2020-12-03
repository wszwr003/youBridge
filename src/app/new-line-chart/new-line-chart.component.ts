import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import * as Highcharts from "highcharts";
import highcharts3D from "highcharts/highcharts-3d.src";
highcharts3D(Highcharts);
@Component({
  selector: "app-new-line-chart",
  templateUrl: "./new-line-chart.component.html",
  styleUrls: ["./new-line-chart.component.scss"],
})
export class NewLineChartComponent implements OnInit {
  private dataChart: Highcharts.Chart = null;
  public options: any;
  @Input() num;

  constructor() {}

  ngOnInit() {
    //FAO:放到此处初始化,如果在声明的时候初始化,会出现INPUT尚未传值的情况.
    this.options = {
      chart: {
        backgroundColor: "#e5e5e5",
        type: "column",
        options3d: {
          enabled: true,
          alpha: 0,
          beta: 0,
          depth: 10,
          viewDistance: 100,
        },
      },

      title: {
        text: "",
      },

      subtitle: {
        text: "",
      },

      legend: {
        align: "right",
        verticalAlign: "middle",
        layout: "vertical",
      },

      xAxis: {
        categories: [
          "2020年11月19日",
          "2020年11月20日",
          "2020年11月21日",
          "2020年11月22日",
          "2020年11月23日",
          "2020年11月24日",
          "2020年11月25日",
        ],
        labels: {
          x: -10,
        },
      },
      credits: {
        enabled: false, //highchart 标志取消
      },
      yAxis: {
        allowDecimals: false,
        title: {
          text: "耗电量(kW·h)",
        },
      },
      series: [
        {
          name: "超声波清洗机",
          data: [12, 21, 15, 14, 9, 10, 19],
          color: "#00BEA0",
        },
        {
          name: "真空烘干机",
          data: [4, 3, 5, 4, 4, 5, 2],
          color: "#0A96DC",
        },
        {
          name: "紫外灯",
          data: [3, 4, 3, 2, 3, 2, 2],
          color: "#435C73",
        },
        {
          name: "粉碎机",
          data: [12, 14, 10, 18, 0, 0, 12],
          color: "#7360BB",
        },
        // {
        //   name: "OTDR",
        //   data: [2, 2, 3],
        //   color: "#7360BB",
        // },
        // {
        //   name: "熔接机",
        //   data: [1, 1, 3],
        //   color: "#C0C4C8",
        // },
        // {
        //   name: "小仪器仪表",
        //   data: [2, 3, 6],
        //   color: "#E64B3F",
        // },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                align: "center",
                verticalAlign: "bottom",
                layout: "horizontal",
              },
              yAxis: {
                labels: {
                  align: "left",
                  x: 0,
                  y: -5,
                },
                title: {
                  text: null,
                },
              },
              subtitle: {
                text: null,
              },
              credits: {
                enabled: false,
              },
            },
          },
        ],
      },
    };

    this.dataChart = Highcharts.chart("container3", this.options);
    this.dataChart.setSize(750);
  }
  ngAfterViewInit() {
    this.dataChart.setSize(null);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // setTimeout(() => {
    //   for (const propName in changes) {
    //     if (changes.hasOwnProperty(propName)) {
    //       if (
    //         this.num == undefined ||
    //         this.num < 0 ||
    //         this.dataChart == undefined
    //       ) {
    //         break;
    //       }
    //       this.dataChart.series[0].setData(
    //         [
    //           {
    //             y: 2,
    //           },
    //           {
    //             y: 3,
    //           },
    //           {
    //             y: 10,
    //           },
    //         ],
    //         false
    //       );
    //       this.dataChart.series[1].setData(
    //         [
    //           {
    //             y: 1,
    //           },
    //           {
    //             y: 3,
    //           },
    //           {
    //             y: 3,
    //           },
    //         ],
    //         false
    //       );
    //       this.dataChart.series[2].setData(
    //         [
    //           {
    //             y: 1,
    //           },
    //           {
    //             y: 3,
    //           },
    //           {
    //             y: 3,
    //           },
    //         ],
    //         false
    //       );
    //       this.dataChart.series[3].setData(
    //         [
    //           {
    //             y: 1,
    //           },
    //           {
    //             y: 3,
    //           },
    //           {
    //             y: 3,
    //           },
    //         ],
    //         false
    //       );
    //       this.dataChart.series[4].setData(
    //         [
    //           {
    //             y: 1,
    //           },
    //           {
    //             y: 3,
    //           },
    //           {
    //             y: 3,
    //           },
    //         ],
    //         false
    //       );
    //       this.dataChart.series[5].setData(
    //         [
    //           {
    //             y: 1,
    //           },
    //           {
    //             y: 3,
    //           },
    //           {
    //             y: 3,
    //           },
    //         ],
    //         false
    //       );
    //       this.dataChart.series[6].setData(
    //         [
    //           {
    //             y: 1,
    //           },
    //           {
    //             y: 1,
    //           },
    //           {
    //             y: 2,
    //           },
    //         ],
    //         true
    //       );
    //       break;
    //     }
    //   }
    // }, 1500);
  }
}
