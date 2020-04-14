import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-new-line-chart",
  templateUrl: "./new-line-chart.component.html",
  styleUrls: ["./new-line-chart.component.scss"],
})
export class NewLineChartComponent implements OnInit {
  private dataChart: Highcharts.Chart = null;
  public options: any;

  constructor() {}

  ngOnInit() {
    //FAO:放到此处初始化,如果在声明的时候初始化,会出现INPUT尚未传值的情况.
    this.options = {
      chart: {
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
        categories: ["2020年2月", "2020年3月", "2020年4月"],
        labels: {
          x: -10,
        },
      },

      yAxis: {
        allowDecimals: false,
        title: {
          text: "数量",
        },
      },

      series: [
        {
          name: "5IN1传感器",
          data: [1, 5, 10],
        },
        {
          name: "空调",
          data: [1, 1, 6],
        },
        {
          name: "空气净化器",
          data: [1, 2, 4],
        },
        {
          name: "OTDR",
          data: [2, 2, 3],
        },
        {
          name: "熔接机",
          data: [1, 1, 3],
        },
        {
          name: "小仪器仪表",
          data: [2, 3, 1],
        },
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

    this.dataChart = Highcharts.chart("container", this.options);
    this.dataChart.setSize(750);
  }
  ngAfterViewInit() {
    this.dataChart.setSize(null);
  }
}
