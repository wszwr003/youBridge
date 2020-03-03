import { Component, OnInit } from "@angular/core";

export interface PeriodicElement {
  id: number;
  time: string;
  temp: number;
  hum: number;
  co2: number;
  hcho: number;
  tvoc: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    time: "2020年03月03日13时",
    temp: 23,
    hum: 87,
    co2: 456,
    hcho: 456,
    tvoc: 456
  },
  {
    id: 2,
    time: "2020年03月03日13时",
    temp: 23,
    hum: 87,
    co2: 456,
    hcho: 456,
    tvoc: 456
  },
  {
    id: 3,
    time: "2020年03月03日13时",
    temp: 23,
    hum: 87,
    co2: 456,
    hcho: 456,
    tvoc: 456
  },
  {
    id: 4,
    time: "2020年03月03日13时",
    temp: 23,
    hum: 87,
    co2: 456,
    hcho: 456,
    tvoc: 456
  },
  {
    id: 5,
    time: "2020年03月03日13时",
    temp: 23,
    hum: 87,
    co2: 456,
    hcho: 456,
    tvoc: 456
  },
  {
    id: 6,
    time: "2020年03月03日13时",
    temp: 23,
    hum: 87,
    co2: 456,
    hcho: 456,
    tvoc: 456
  },
  {
    id: 7,
    time: "2020年03月03日13时",
    temp: 23,
    hum: 87,
    co2: 456,
    hcho: 456,
    tvoc: 456
  },
  {
    id: 8,
    time: "2020年03月03日13时",
    temp: 23,
    hum: 87,
    co2: 456,
    hcho: 456,
    tvoc: 456
  },
  {
    id: 9,
    time: "2020年03月03日13时",
    temp: 23,
    hum: 87,
    co2: 456,
    hcho: 456,
    tvoc: 456
  },
  {
    id: 10,
    time: "2020年03月03日13时",
    temp: 23,
    hum: 87,
    co2: 456,
    hcho: 456,
    tvoc: 456
  },
  {
    id: 11,
    time: "2020年03月03日13时",
    temp: 23,
    hum: 87,
    co2: 456,
    hcho: 456,
    tvoc: 456
  }
];

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"]
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ["id", "time", "temp", "hum", "co2", "hcho", "tvoc"];
  dataSource = ELEMENT_DATA;
  constructor() { }
  ngOnInit() { }
}
