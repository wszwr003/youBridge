import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fake-camera",
  templateUrl: "./fake-camera.component.html",
  styleUrls: ["./fake-camera.component.scss"],
})
export class FakeCameraComponent implements OnInit {
  flipped: boolean = false;

  public sliderImages = [["../../assets/lob-camera.jpg", "", ""]];
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
