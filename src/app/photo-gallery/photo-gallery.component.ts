import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-photo-gallery",
  templateUrl: "./photo-gallery.component.html",
  styleUrls: ["./photo-gallery.component.scss"],
})
export class PhotoGalleryComponent implements OnInit {
  flipped: boolean = false;

  public sliderImages = [
    [
      "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg",
      "green1",
      "mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131)",
    ],
    [
      "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg",
      "green2",
      "mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132)",
    ],
    [
      "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg",
      "green3",
      "mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118)",
    ],
  ];
  public sliderVideos = [
    [
      "https://mdbootstrap.com/img/video/Tropical.mp4",
      "Tropical",
      "mdbootstrap.com/img/video/Tropical",
    ],
    [
      "https://mdbootstrap.com/img/video/forest.mp4",
      "forest",
      "mdbootstrap.com/img/video/forest",
    ],
    [
      "https://mdbootstrap.com/img/video/Agua-natural.mp4",
      "Agua-natural",
      "mdbootstrap.com/img/video/Agua-natural",
    ],
  ];
  constructor() {}
  ngOnInit(): void {}
}
