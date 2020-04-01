import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module"; // 路由模块
import { BrowserModule } from "@angular/platform-browser"; // 应用浏览器支持
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // 浏览器动画支持
import { CommonModule } from "@angular/common";

import { MatToolbarModule } from "@angular/material/toolbar"; // topBar
import { MatSidenavModule } from "@angular/material/sidenav"; // sideNav
import { MatMenuModule } from "@angular/material/menu"; // menu
import { MatProgressBarModule } from "@angular/material/progress-bar"; // progressBar
import { MatButtonModule } from "@angular/material/button"; // button
import { MatIconModule } from "@angular/material/icon"; // icons
import {
  MatListModule,
  MatInputModule,
  MatFormFieldModule
} from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";

import { FlexLayoutModule } from "@angular/flex-layout";
import { BaiduMapModule } from "angular2-baidu-map";

import { AppComponent } from "./app.component"; // 根组件
import { TopBarComponent } from "./top-bar/top-bar.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { DataChartComponent } from "./data-chart/data-chart.component";
import { MutisensorViewComponent } from "./mutisensor-view/mutisensor-view.component";
import { BaiduMapComponent } from "./baidu-map/baidu-map.component";
import { DataTableComponent } from "./data-table/data-table.component";
import { MouseEnterSetbleDirective } from "./directives/mouse-enter-setble.directive";
import { OverViewComponent } from "./over-view/over-view.component";
import { HomeLayoutComponent } from "./layouts/home-layout.component";
import { LoginLayoutComponent } from "./layouts/login-layout.component";
import { MqttModule, IMqttServiceOptions } from "ngx-mqtt";
export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: "127.0.0.1",
  port: 8888,
  path: "/mqtt" //'/mqtt'
};

import { MyMqttService } from "./services/my-mqtt.service";
import { LoginPageComponent } from "./login-page/login-page.component";
import { NavService } from "./services/nav.service";
import { AuthService } from "./services/auth.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { ReactiveFormsModule } from "@angular/forms";
import { DataPieComponent } from "./data-pie/data-pie.component";
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideMenuComponent,
    ProgressBarComponent,
    DataChartComponent,
    MutisensorViewComponent,
    BaiduMapComponent,
    DataTableComponent,
    MouseEnterSetbleDirective,
    OverViewComponent,
    LoginPageComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    DataPieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    BaiduMapModule.forRoot({ ak: "FpVG0ppOSI7TwBYGhty65bxe88fqD38v" })
  ],
  providers: [MyMqttService, NavService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
