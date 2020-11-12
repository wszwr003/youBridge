import { Component, OnInit } from "@angular/core";
import videojs from "video.js";

declare var require: any;
require("videojs-contrib-quality-levels");
require("videojs-hls-quality-selector");
@Component({
  selector: "app-live-video",
  templateUrl: "./live-video.component.html",
  styleUrls: ["./live-video.component.scss"],
})
export class LiveVideoComponent implements OnInit {
  public player: videojs.Player;
  public sliderVideos = [
    [
      "https://mdbootstrap.com/img/video/Tropical.mp4",
      "Tropical",
      "mdbootstrap.com/img/video/Tropical",
    ],
  ];
  url =
    "https://hls01open.ys7.com/openlive/d87fa54269d34203910b00aa1198d735.m3u8";

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const options = {
      sources: [
        {
          src: this.url,
          type: "application/x-mpegURL",
        },
      ],
      // 'poster' : this.urlPoster
    };
    this.player = videojs("my-video", options, function onPlayerReady() {
      console.log("Player ready");
      var myPlayer = this,
        id = myPlayer.id();
      myPlayer.hlsQualitySelector();
    });
  }

  ngOnDestroy(): void {
    if (this.player != null) {
      this.player.dispose();
    }
  }
}
