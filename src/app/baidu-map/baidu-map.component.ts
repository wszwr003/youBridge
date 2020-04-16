import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  ElementRef,
  ViewChild,
} from "@angular/core";
import {
  MapOptions,
  Point,
  MarkerOptions,
  MapTypeEnum,
} from "angular2-baidu-map";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-baidu-map",
  templateUrl: "./baidu-map.component.html",
  styleUrls: ["./baidu-map.component.scss"],
})
export class BaiduMapComponent implements OnInit {
  @Output() notify = new EventEmitter<string>(); //output component
  options: MapOptions;
  marker: { point: Point; options?: MarkerOptions };
  markers: { point: Point; options?: MarkerOptions }[];
  newmark: any;
  public showWindow({ e, marker, markers, map }: any): void {
    this.notify.emit(marker.getTitle());
    var info = new window.BMap.InfoWindow("地址：海宁市科技绿洲6号楼", {
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
          lat: 30.5759,
          lng: 120.678724,
        },
      },
      {
        options: {
          title: "861011047485656",
          // icon: {
          //   //imageUrl: `${environment.baseUrl}assets/green24.png`,
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
          lat: 30.5761,
          lng: 120.678924,
        },
      },
      {
        options: {
          title: "861011047485565",
          // icon: {
          //   //imageUrl: `${environment.baseUrl}assets/green24.png`,
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
          lat: 30.5761,
          lng: 120.678524,
        },
      },
      {
        options: {
          title: "861011047418186",
          // icon: {
          //   //imageUrl: `${environment.baseUrl}assets/green24.png`,
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
          lat: 30.5761,
          lng: 120.678424,
        },
      },
      {
        options: {
          title: "861011047485599",
          // icon: {
          //   //imageUrl: `${environment.baseUrl}assets/green24.png`,
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
          lat: 30.5763,
          lng: 120.678424,
        },
      },
      {
        options: {
          title: "861011047486225",
          // icon: {
          //   //imageUrl: `${environment.baseUrl}assets/green24.png`,
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
          lat: 30.5758,
          lng: 120.678424,
        },
      },
      {
        options: {
          title: "861011047486134",
          // icon: {
          //   //imageUrl: `${environment.baseUrl}assets/green24.png`,
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
          lat: 30.5761,
          lng: 120.678224,
        },
      },
      {
        options: {
          title: "861011047511899",
          // icon: {
          //   //imageUrl: `${environment.baseUrl}assets/green24.png`,
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
          lat: 30.5763,
          lng: 120.678224,
        },
      },
      {
        options: {
          title: "861011047486209",
          // icon: {
          //   //imageUrl: `${environment.baseUrl}assets/green24.png`,
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
          lat: 30.57611,
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
  ngOnInit() {}
}
