import { Component } from "@angular/core";
import { NavItem } from "../services/nav-item";

@Component({
  selector: "app-home-layout",
  templateUrl: "./home-layout.component.html",
  styleUrls: ["./home-layout.component.scss"],
})
export class HomeLayoutComponent {
  navItems: NavItem[] = [
    {
      displayName: "总览",
      iconName: "account_balance",
      route: "sys",
    },
    {
      displayName: "设备管理",
      iconName: "format_list_bulleted",
      route: "devices",
      children: [
        {
          displayName: "环境传感设备",
          //iconName: "blur_on",
          route: "devices/env",
          children: [
            {
              displayName: "传感器(486233)",
              //iconName: "",
              route: "devices/env/861011047486233",
            },
            {
              displayName: "传感器(455360)",
              //iconName: "",
              route: "devices/env/861011047455360",
            },
            {
              displayName: "传感器(485656)",
              //iconName: "",
              route: "devices/env/861011047485656",
            },
            {
              displayName: "传感器(485565)",
              //iconName: "",
              route: "devices/env/861011047485565",
            },
            {
              displayName: "传感器(418186)",
              //iconName: "",
              route: "devices/env/861011047418186",
            },
            {
              displayName: "传感器(485599)",
              //iconName: "",
              route: "devices/env/861011047485599",
            },
            {
              displayName: "传感器(486225)",
              //iconName: "",
              route: "devices/env/861011047486225",
            },
            {
              displayName: "传感器(486134)",
              //iconName: "",
              route: "devices/env/861011047486134",
            },
            {
              displayName: "传感器(511899)",
              //iconName: "",
              route: "devices/env/861011047511899",
            },
            {
              displayName: "传感器(486209)",
              //iconName: "",
              route: "devices/env/861011047486209",
            },
          ],
        },
        {
          displayName: "空调",
          //iconName: "wb_sunny",
          route: "devfestfl/speakers/michael-prentice",
        },
        {
          displayName: "空气净化器",
          //iconName: "cached",
          route: "devfestfl/speakers/michael-prentice",
        },
        {
          displayName: "光时域反射仪",
          //iconName: "sync_alt",
          route: "devfestfl/speakers/michael-prentice",
        },
        {
          displayName: "小仪器仪表",
          //iconName: "widgets",
          route: "devfestfl/speakers/michael-prentice",
        },
        {
          displayName: "熔接机",
          //iconName: "settings_input_component",
          route: "devfestfl/speakers/michael-prentice",
        },
      ],
    },
    {
      displayName: "设备组管理",
      iconName: "group",
      route: "group",
      children: [
        {
          displayName: "浙江光维设备组",
          //iconName: "settings_input_component",
          route: "group/group1",
          children: [
            {
              displayName: "传感器(486233)",
              //iconName: "",
              route: "devices/env/861011047486233",
            },
            {
              displayName: "传感器(455360)",
              //iconName: "",
              route: "devices/env/861011047455360",
            },
            {
              displayName: "传感器(485656)",
              //iconName: "",
              route: "devices/env/861011047485656",
            },
            {
              displayName: "传感器(485565)",
              //iconName: "",
              route: "devices/env/861011047485565",
            },
            {
              displayName: "传感器(418186)",
              //iconName: "",
              route: "devices/env/861011047418186",
            },
            {
              displayName: "传感器(485599)",
              //iconName: "",
              route: "devices/env/861011047485599",
            },
            {
              displayName: "传感器(486225)",
              //iconName: "",
              route: "devices/env/861011047486225",
            },
            {
              displayName: "传感器(486134)",
              //iconName: "",
              route: "devices/env/861011047486134",
            },
            {
              displayName: "传感器(511899)",
              //iconName: "",
              route: "devices/env/861011047511899",
            },
            {
              displayName: "传感器(486209)",
              //iconName: "",
              route: "devices/env/861011047486209",
            },
          ],
        },
      ],
    },
    {
      displayName: "用户管理",
      iconName: "group",
      route: "user",
      children: [
        {
          displayName: "用户1",
          iconName: "person",
          route: "user/person",
        },
        {
          displayName: "用户2",
          iconName: "person",
          route: "user/person",
        },
        {
          displayName: "用户3",
          iconName: "person",
          route: "user/person",
        },
        {
          displayName: "用户4",
          iconName: "person",
          route: "user/person",
        },
      ],
    },
    {
      displayName: "数据分析",
      iconName: "group",
      route: "group",
    },
    {
      displayName: "日志分析",
      iconName: "group",
      route: "group",
    },
    {
      displayName: "用户行为分析",
      iconName: "group",
      route: "group",
    },
  ];
}
