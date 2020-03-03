import { Component } from "@angular/core";
import { MapOptions, Point, MarkerOptions,MapTypeEnum } from "angular2-baidu-map";

@Component({
  selector: "app-baidu-map",
  templateUrl: "./baidu-map.component.html",
  styleUrls: ["./baidu-map.component.scss"]
})
export class BaiduMapComponent {
  options: MapOptions;
  marker: { point: Point; options?: MarkerOptions };

  public showWindow({ e, marker, map }: any): void {
    map.openInfoWindow(
      new window.BMap.InfoWindow("地址：海宁市科技绿洲6号楼", {
        offset: new window.BMap.Size(0, -10),
        title: '多动能传感器'+ marker.getTitle()
      }),
      marker.getPosition()
    );
  }
  constructor() {
    this.marker = {
      options: {
        title: "No.202000001"
      },
      point: {
        lat: 30.57610,
        lng: 120.678724
      }
    };
    this.options = {
      centerAndZoom: {
        lat: 30.57586,
        lng: 120.679124,
        zoom: 18
      },
      mapType: MapTypeEnum.BMAP_SATELLITE_MAP,
      enableKeyboard: true
    };
  }
}
