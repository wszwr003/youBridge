import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-airsensor-card",
  templateUrl: "./airsensor-card.component.html",
  styleUrls: ["./airsensor-card.component.scss"],
})
export class AirsensorCardComponent implements OnInit {
  device = null;
  constructor() {}

  ngOnInit() {}
}
