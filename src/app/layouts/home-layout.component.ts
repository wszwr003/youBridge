import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavItem } from "../services/nav-item";
import { NavService } from "../services/nav.service";
import { trigger, transition, useAnimation } from "@angular/animations";
import { rotateFlipToRight } from "ngx-router-animations";

@Component({
  selector: "app-home-layout",
  templateUrl: "./home-layout.component.html",
  styleUrls: ["./home-layout.component.scss"],
  animations: [
    trigger("rotateCubeToLeft", [
      transition(
        "One <=> Three,Three <=> Two,One<=>Two",
        useAnimation(rotateFlipToRight, {
          params: {
            enterTiming: "0.5",
            leaveTiming: "0.5",
            enterDelay: "0",
            leaveDelay: "0",
          },
        })
      ),
    ]),
  ],
})
export class HomeLayoutComponent {
  public screenWidth: number; //当前屏幕宽度
  @ViewChild("sidenav", null) sidenav: ElementRef;

  constructor(private navService: NavService) {
    this.screenWidth = window.innerWidth; //获取当前屏幕宽度
    window.onresize = () => {
      //TBS:本函数未起作用
      //web窗口宽度resize回调函数
      console.log("resize");
      this.screenWidth = window.innerWidth;
    };
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.sidenav;
  }

  public navItems: NavItem[] = [
    {
      displayName: "总览",
      iconName: "view_quilt",
      route: "sys",
    },
    {
      displayName: "设备管理",
      iconName: "list",
      route: "devices",
      children: [
        {
          displayName: "环境传感设备",
          //iconName: "blur_on",
          route: "devices",
          children: [
            {
              displayName: "传感器(光维上海总部)",
              //iconName: "",
              route: "devices/env/861011047485599",
            },
            {
              displayName: "传感器(光维上海总部)",
              //iconName: "",
              route: "devices/env/861011047486209",
            },
            {
              displayName: "传感器(一楼前台)",
              //iconName: "",
              route: "devices/env/861011047486233",
            },
            {
              displayName: "传感器(二楼30M2仓外)",
              //iconName: "",
              route: "devices/env/861011047455360",
            },
            {
              displayName: "传感器(三楼会议室)",
              //iconName: "",
              route: "devices/env/861011047418186",
            },
            {
              displayName: "传感器(三楼测试部)",
              //iconName: "",
              route: "devices/env/861011047485565",
            },
            {
              displayName: "传感器(三楼实验室一)",
              //iconName: "",
              route: "devices/env/861011047486134",
            },
            {
              displayName: "传感器(三楼实验室二)",
              //iconName: "",
              route: "devices/env/861011047485656",
            },
            {
              displayName: "传感器(三楼实验室三)",
              //iconName: "",
              route: "devices/env/861011047511899",
            },
            {
              displayName: "传感器(四楼展厅)",
              //iconName: "",
              route: "devices/env/861011047486225",
            },
          ],
        },
        {
          displayName: "空调",
          //iconName: "wb_sunny",
          route: "test",
        },
        {
          displayName: "空气净化器",
          //iconName: "cached",
          route: "test",
        },
        // {
        //   displayName: "光时域反射仪",
        //   //iconName: "sync_alt",
        //   route: "devfestfl/speakers/michael-prentice",
        // },
        // {
        //   displayName: "小仪器仪表",
        //   //iconName: "widgets",
        //   route: "devfestfl/speakers/michael-prentice",
        // },
        // {
        //   displayName: "熔接机",
        //   //iconName: "settings_input_component",
        //   route: "devfestfl/speakers/michael-prentice",
        // },
      ],
    },
    {
      displayName: "设备组管理",
      iconName: "list_alt",
      route: "group",
      children: [
        {
          displayName: "上海光维设备组",
          //iconName: "settings_input_component",
          route: "group",
          children: [
            {
              displayName: "传感器(光维上海总部)",
              //iconName: "",
              route: "group/env/861011047486209",
            },
            {
              displayName: "传感器(光维上海总部)",
              //iconName: "",
              route: "group/env/861011047485599",
            },
          ],
        },
        {
          displayName: "浙江光维设备组",
          //iconName: "settings_input_component",
          route: "group",
          children: [
            {
              displayName: "传感器(一楼前台)",
              //iconName: "",
              route: "group/env/861011047486233",
            },
            {
              displayName: "传感器(二楼30M2仓外)",
              //iconName: "",
              route: "group/env/861011047455360",
            },
            {
              displayName: "传感器(三楼会议室)",
              //iconName: "",
              route: "group/env/861011047486134",
            },
            {
              displayName: "传感器(三楼测试部)",
              //iconName: "",
              route: "group/env/861011047485565",
            },
            {
              displayName: "传感器(三楼实验室一)",
              //iconName: "",
              route: "group/env/861011047418186",
            },
            {
              displayName: "传感器(三楼实验室二)",
              //iconName: "",
              route: "group/env/861011047485656",
            },
            {
              displayName: "传感器(三楼实验室三)",
              //iconName: "",
              route: "group/env/861011047511899",
            },
            {
              displayName: "传感器(四楼展厅)",
              //iconName: "",
              route: "group/env/861011047486225",
            },
          ],
        },
      ],
    },
    {
      displayName: "用户管理",
      iconName: "group",
      route: "test",
      children: [
        {
          displayName: "用户1",
          iconName: "person",
          route: "test",
        },
        {
          displayName: "用户2",
          iconName: "person",
          route: "test",
        },
        {
          displayName: "用户3",
          iconName: "person",
          route: "test",
        },
        {
          displayName: "用户4",
          iconName: "person",
          route: "test",
        },
      ],
    },
    {
      displayName: "数据分析",
      iconName: "bar_chart",
      route: "test",
    },
    {
      displayName: "日志分析",
      iconName: "assignment",
      route: "test",
    },
    {
      displayName: "用户行为分析",
      iconName: "assignment_ind",
      route: "test",
    },
  ];
}
