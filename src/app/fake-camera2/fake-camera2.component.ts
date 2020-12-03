import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fake-camera2",
  templateUrl: "./fake-camera2.component.html",
  styleUrls: ["./fake-camera2.component.scss"],
})
export class FakeCamera2Component implements OnInit {
  flipped: boolean = false;

  public sliderImages = [["../../assets/lob-camera2.png", "", ""]];
  public sliderVideos = [
    [
      "https://mdbootstrap.com/img/video/Tropical.mp4",
      "Tropical",
      "mdbootstrap.com/img/video/Tropical",
    ],
  ];
  constructor() {}
  ngOnInit(): void {}
}
