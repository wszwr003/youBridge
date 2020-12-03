import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import {
  Animation,
  MapOptions,
  Point,
  MarkerOptions,
  MapTypeEnum,
  BMarker,
  NavigationControlOptions,
  OverviewMapControlOptions,
  ScaleControlOptions,
  MapTypeControlOptions,
  ControlAnchor,
  NavigationControlType,
  MapTypeControlType,
} from "angular2-baidu-map";
import { GPS } from "../services/sensor5in1";

@Component({
  selector: "app-baidu-map-single",
  templateUrl: "./baidu-map-single.component.html",
  styleUrls: ["./baidu-map-single.component.scss"],
})
export class BaiduMapSingleComponent implements OnInit, OnChanges {
  public controlOpts: NavigationControlOptions;
  public overviewmapOpts: OverviewMapControlOptions;
  public scaleOpts: ScaleControlOptions;
  public mapTypeOpts: MapTypeControlOptions;
  @Input() location: GPS;
  public prevMark: any;

  options: MapOptions;
  marker: { point: Point; options?: MarkerOptions };
  newmark: any;
  // public showWindow({ e, marker, map }: any): void {
  //   var info = new window.BMap.InfoWindow(this.location.locString, {
  //     offset: new window.BMap.Size(0, -10),
  //     title: "多动能传感器: " + this.location.deviceId,
  //   });
  //   map.openInfoWindow(info, marker.getPosition());
  // }
  public setAnimation(marker: BMarker): void {
    this.prevMark = marker;
    marker.setAnimation(Animation.BMAP_ANIMATION_BOUNCE);
  }
  constructor() {
    // console.log("map-construct");
    this.controlOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_TOP_LEFT,
      type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE,
    };

    this.overviewmapOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT,
      isOpen: false,
    };

    this.scaleOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT,
    };

    this.mapTypeOpts = {
      type: MapTypeControlType.BMAP_MAPTYPE_CONTROL_HORIZONTAL,
      mapTypes: [MapTypeEnum.BMAP_NORMAL_MAP, MapTypeEnum.BMAP_HYBRID_MAP],
    };
    this.marker = {
      options: {
        title: "",
      },
      point: {
        lat: 30.703014,
        lng: 120.891071,
      },
    };
    this.options = {
      centerAndZoom: {
        lat: 30.703014, //   - ^  +  V
        lng: 120.891071, // - >  +  <
        zoom: 18,
      },
      mapType: MapTypeEnum.BMAP_HYBRID_MAP,
      //enableScrollWheelZoom: true,
      enableKeyboard: true,
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("map-change");

    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case "location": {
            if (this.location != undefined) {
              // console.log("!!!!****:", this.location.lat, this.location.lng);
              this.marker.point.lat = this.location.lat;
              this.marker.point.lng = this.location.lng;
              this.options.centerAndZoom.lat = this.location.lat;
              this.options.centerAndZoom.lng = this.location.lng;
              try {
                var newmark = new window.BMap.Marker(
                  new window.BMap.Point(this.location.lng, this.location.lat)
                );
                this.prevMark.getMap().addOverlay(newmark);
                this.prevMark
                  .getMap()
                  .setCenter(
                    new window.BMap.Point(this.location.lng, this.location.lat)
                  );

                //FAO
                // newmark.addEventListener("click", ({ e, marker, map }: any) => {
                //   console.log("123123123");
                //   var info = new window.BMap.InfoWindow(
                //     this.location.locString,
                //     {
                //       offset: new window.BMap.Size(0, -10),
                //       title: "多动能传感器: " + this.location.deviceId,
                //     }
                //   );
                //   map.openInfoWindow(info, marker.getPosition());
                // });
                newmark.setAnimation(Animation.BMAP_ANIMATION_BOUNCE);
                this.prevMark.getMap().removeOverlay(this.prevMark); //FAO:先到add前面就不行了!
                this.prevMark = newmark;
              } catch (error) {}
            }
          }
        }
      }
    }
  }
  ngOnInit() {
    // console.log("map-init");
  }
}
