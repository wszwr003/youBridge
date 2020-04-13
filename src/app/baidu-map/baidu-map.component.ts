import { Component } from "@angular/core";
import {
  MapOptions,
  Point,
  MarkerOptions,
  MapTypeEnum,
} from "angular2-baidu-map";

@Component({
  selector: "app-baidu-map",
  templateUrl: "./baidu-map.component.html",
  styleUrls: ["./baidu-map.component.scss"],
})
export class BaiduMapComponent {
  options: MapOptions;
  marker: { point: Point; options?: MarkerOptions };
  markers: { point: Point; options?: MarkerOptions }[];
  public showWindow({ e, marker, map }: any): void {
    map.openInfoWindow(
      new window.BMap.InfoWindow("地址：海宁市科技绿洲6号楼", {
        offset: new window.BMap.Size(0, -10),
        title: "多动能传感器" + marker.getTitle(),
      }),
      marker.getPosition()
    );
  }
  constructor() {
    // this.marker = {
    //   options: {
    //     title: "No.861011047486233",
    //   },
    //   point: {
    //     lat: 30.5761,
    //     lng: 120.678724,
    //   },
    // };
    this.markers = [
      {
        options: {
          title: "No.861011047486233",
        },
        point: {
          lat: 30.5764,
          lng: 120.678724,
        },
      },
      {
        options: {
          title: "No.861011047455360",
        },
        point: {
          lat: 30.5759,
          lng: 120.678724,
        },
      },
      {
        options: {
          title: "No.861011047485656",
        },
        point: {
          lat: 30.5761,
          lng: 120.678924,
        },
      },
      {
        options: {
          title: "No.861011047485565",
        },
        point: {
          lat: 30.5761,
          lng: 120.678524,
        },
      },
      {
        options: {
          title: "No.861011047418186",
        },
        point: {
          lat: 30.5761,
          lng: 120.678424,
        },
      },
      {
        options: {
          title: "No.861011047485599",
        },
        point: {
          lat: 30.5763,
          lng: 120.678424,
        },
      },
      {
        options: {
          title: "No.861011047486225",
        },
        point: {
          lat: 30.5758,
          lng: 120.678424,
        },
      },
      {
        options: {
          title: "No.861011047486134",
        },
        point: {
          lat: 30.5761,
          lng: 120.678224,
        },
      },
      {
        options: {
          title: "No.861011047511899",
        },
        point: {
          lat: 30.5763,
          lng: 120.678224,
        },
      },
      {
        options: {
          title: "No.861011047486209",
        },
        point: {
          lat: 30.5761,
          lng: 120.678724,
        },
      },
    ];
    this.options = {
      centerAndZoom: {
        lat: 30.5761, //   - ^  +  V
        lng: 120.678624, // - >  +  <
        zoom: 18,
      },
      mapType: MapTypeEnum.BMAP_NORMAL_MAP,
      //enableScrollWheelZoom: true,
      enableKeyboard: true,
    };
  }
}
