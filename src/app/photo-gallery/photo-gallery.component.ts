import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-photo-gallery",
  templateUrl: "./photo-gallery.component.html",
  styleUrls: ["./photo-gallery.component.scss"],
})
export class PhotoGalleryComponent implements OnInit {
  flipped: boolean = false;

  public sliderImages = [
    ["../../assets/lob01.jpeg", "一、超声波清洗", "使用超声波清洗龙虾壳。"],
    ["../../assets/lob02.jpeg", "二、真空烘干", "对清洗后的龙虾壳进行烘干。"],
    ["../../assets/lob03.jpeg", "三、紫外线杀菌", "使用紫外线杀死残留细菌。"],
    ["../../assets/lob04.jpeg", "四、粗粉碎", "对龙虾壳进行粗粉碎。"],
    ["../../assets/lob04.jpeg", "五、细粉碎", "对龙虾壳进行精细粉碎。"],
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
