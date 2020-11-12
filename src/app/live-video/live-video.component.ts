import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-live-video",
  templateUrl: "./live-video.component.html",
  styleUrls: ["./live-video.component.scss"],
})
export class LiveVideoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public sliderVideos = [
    ["./assets/Tropical.mp4", "Tropical", "mdbootstrap.com/img/video/Tropical"],
    ["./assets/forest.mp4", "forest", "mdbootstrap.com/img/video/forest"],
    [
      "./assets/Agua-natural.mp4",
      "Agua-natural",
      "mdbootstrap.com/img/video/Agua-natural",
    ],
    // [
    //   "https://mdbootstrap.com/img/video/Agua-natural.mp4",
    //   "Agua-natural",
    //   "mdbootstrap.com/img/video/Agua-natural",
    // ],
    // [
    //   "https://mdbootstrap.com/img/video/Tropical.mp4",
    //   "Tropical",
    //   "mdbootstrap.com/img/video/Tropical",
    // ],
    // [
    //   "https://mdbootstrap.com/img/video/forest.mp4",
    //   "forest",
    //   "mdbootstrap.com/img/video/forest",
    // ],
  ];
}
