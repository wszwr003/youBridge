import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  SimpleChanges,
  Input,
} from "@angular/core";
import {
  Animation,
  MapOptions,
  Point,
  MarkerOptions,
  MapTypeEnum,
  NavigationControlOptions,
  OverviewMapControlOptions,
  ScaleControlOptions,
  MapTypeControlOptions,
  ControlAnchor,
  NavigationControlType,
  MapTypeControlType,
  BMarker,
} from "angular2-baidu-map";
import { BLabel } from "angular2-baidu-map/lib/types/Label";
// import { environment } from "src/environments/environment";

@Component({
  selector: "app-baidu-map",
  templateUrl: "./baidu-map.component.html",
  styleUrls: ["./baidu-map.component.scss"],
})
export class BaiduMapComponent implements OnInit {
  public controlOpts: NavigationControlOptions;
  public overviewmapOpts: OverviewMapControlOptions;
  public scaleOpts: ScaleControlOptions;
  public mapTypeOpts: MapTypeControlOptions;
  @Input() active: string;
  @Output() notify = new EventEmitter<string>(); //output component
  options: MapOptions;
  marker: { point: Point; options?: MarkerOptions };
  markers: { point: Point; options?: MarkerOptions }[];
  public prevMark: any;
  newmark: any;
  public showWindow({ e, marker, map }: any): void {
    try {
      this.prevMark.setAnimation(null);
    } catch (error) {}
    marker.setAnimation(Animation.BMAP_ANIMATION_BOUNCE);
    //marker.getMap().setCenter(new window.BMap.Point(marker.getPosition()));
    this.prevMark = marker;
    this.notify.emit(marker.getTitle());
    var info = new window.BMap.InfoWindow("", {
      offset: new window.BMap.Size(0, -10),
      title: "多动能传感器" + marker.getTitle(),
    });

    info.addEventListener("close", function () {
      var myIcon24 = new window.BMap.Icon(
        // `${environment.baseUrl}assets/green24.png`,
        `/assets/green24.png`,
        new window.BMap.Size(24, 24),
        {
          //anchor: new window.BMap.Size(24, 24),
          //imageOffset: new window.BMap.Size(0, 0 - 25), // 设置图片偏移
        }
      );
      // marker.setIcon(myIcon24);
    });
    map.openInfoWindow(info, marker.getPosition());

    var myIcon32 = new window.BMap.Icon(
      `/assets/red32.png`,
      //`${environment.baseUrl}assets/red32.png`,
      new window.BMap.Size(32, 32),
      {
        //anchor: new window.BMap.Size(32, 32),
        //imageOffset: new window.BMap.Size(0, 0 - 25), // 设置图片偏移
      }
    );
    // marker.setIcon(myIcon32);
    //增加marker
    // this.newmark = new window.BMap.Marker(
    //   new window.BMap.Point(120.678724, 30.5771)
    // );
    // map.addOverlay(this.newmark);
  }
  public setAnimation(marker: BMarker): void {
    marker.setAnimation(Animation.BMAP_ANIMATION_BOUNCE);
    this.prevMark = marker;
  }
  constructor() {
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
      mapTypes: [MapTypeEnum.BMAP_NORMAL_MAP, MapTypeEnum.BMAP_SATELLITE_MAP],
    };
    this.marker = {
      options: {
        title: "861011047486134",
      },
      point: {
        lat: 31.168783,
        lng: 121.403351,
      },
    };
    this.markers = [
      {
        options: {
          title: "861011047486233",
          // icon: {
          //   // imageUrl: `${environment.baseUrl}assets/green24.png`,
          //   imageUrl: `/assets/green24.png`,
          //   size: {
          //     height: 24,
          //     width: 24,
          //   },
          //   imageSize: {
          //     height: 24,
          //     width: 24,
          //   },
          // },
        },
        point: {
          lat: 30.5764,
          lng: 120.678724,
        },
      },
      {
        options: {
          title: "861011047455360",
        },
        point: {
          lat: 30.5759,
          lng: 120.678724,
        },
      },
      {
        options: {
          title: "861011047485656",
        },
        point: {
          lat: 30.5761,
          lng: 120.678924,
        },
      },
      {
        options: {
          title: "861011047485565",
        },
        point: {
          lat: 30.5761,
          lng: 120.678524,
        },
      },

      {
        options: {
          title: "861011047485599",
        },
        point: {
          lat: 30.5763,
          lng: 120.678424,
        },
      },
      {
        options: {
          title: "861011047486225",
        },
        point: {
          lat: 30.5758,
          lng: 120.678424,
        },
      },
      {
        options: {
          title: "861011047418186",
        },
        point: {
          lat: 31.168783,
          lng: 121.403651,
        },
      },
      {
        options: {
          title: "861011047511899",
        },
        point: {
          lat: 30.5763,
          lng: 120.678224,
        },
      },
      {
        options: {
          title: "861011047486209",
        },
        point: {
          lat: 30.5761, //   - ^  +  V
          lng: 120.678624, // - >  +  <
        },
      },
    ];
    this.options = {
      centerAndZoom: {
        lat: 31.168783,
        lng: 121.403351,
        zoom: 18,
      },
      mapType: MapTypeEnum.BMAP_NORMAL_MAP,
      enableScrollWheelZoom: true,
      enableKeyboard: true,
    };
  }

  ngOnInit() {}
}
