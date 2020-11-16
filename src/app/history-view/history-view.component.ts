import { Component, Input, OnInit } from "@angular/core";
import { InitTable } from "../model/data-table";

@Component({
  selector: "app-history-view",
  templateUrl: "./history-view.component.html",
  styleUrls: ["./history-view.component.scss"],
})
export class HistoryViewComponent implements OnInit {
  @Input() initTable: InitTable;
  // @Input() refreshDatas;
  displayedColumns = [
    "sn",
    "time",
    "temp",
    "humi",
    "earth_temp",
    "water_height",
    "co2",
    "light",
    "ph",
    "conduct",
  ];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {
    //this.displayedColumns = this.initTable.tableItem;
    //this.dataSource = TESTSensorData;
  }
}

export interface PeriodicElement {
  sn: number;
  time: string;
  temp: number;
  humi: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { sn: 1, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 2, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 3, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 4, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 5, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 6, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 7, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 8, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 9, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 11, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 12, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 13, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 14, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 15, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 16, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 17, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 18, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 19, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 20, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 21, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 22, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 23, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 24, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 25, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 26, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 27, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 28, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 29, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
  { sn: 30, time: "2020/11/07 00:01", temp: 27.5, humi: 55 },
];
