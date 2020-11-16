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
      "一、超声波清洗",
      "使用超声波清洗龙虾壳。",
    ],
    [
      "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg",
      "二、真空烘干",
      "对清洗后的龙虾壳进行烘干。",
    ],
    [
      "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg",
      "三、紫外线杀菌",
      "使用紫外线杀死残留细菌。",
    ],
    [
      "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg",
      "四、粗粉碎",
      "对龙虾壳进行粗粉碎。",
    ],
    [
      "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg",
      "五、细粉碎",
      "对龙虾壳进行精细粉碎。",
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
