import { Component, OnInit } from "@angular/core";
import { Output, EventEmitter } from "@angular/core"; //output component

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit {
  @Output() sideMenuButton = new EventEmitter(); //output component

  constructor() {}

  ngOnInit() {}
}
