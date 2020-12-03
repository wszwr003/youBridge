import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module"; // 路由模块
import { BrowserModule } from "@angular/platform-browser"; // 应用浏览器支持
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // 浏览器动画支持
import { CommonModule } from "@angular/common"; // NgIF和NgFor
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar"; // topBar
import { MatSidenavModule } from "@angular/material/sidenav"; // sideNav
import { MatMenuModule } from "@angular/material/menu"; // menu
import { MatProgressBarModule } from "@angular/material/progress-bar"; // progressBar
import { MatButtonModule } from "@angular/material/button"; // button
import { MatIconModule } from "@angular/material/icon"; // icons
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { ReactiveFormsModule } from "@angular/forms";
import { BaiduMapModule } from "angular2-baidu-map";
import { MqttModule, IMqttServiceOptions } from "ngx-mqtt";
import { HighchartsChartModule } from "highcharts-angular";
import { AppComponent } from "./app.component"; // 根组件
import { TopBarComponent } from "./top-bar/top-bar.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { DataChartComponent } from "./data-chart/data-chart.component";
import { MutisensorViewComponent } from "./mutisensor-view/mutisensor-view.component";
import { BaiduMapComponent } from "./baidu-map/baidu-map.component";
import { BaiduMapSingleComponent } from "./baidu-map-single/baidu-map-single.component";
import { DataTableComponent } from "./data-table/data-table.component";
import { MouseEnterSetbleDirective } from "./directives/mouse-enter-setble.directive";
import { OverViewComponent } from "./over-view/over-view.component";
import { HomeLayoutComponent } from "./layouts/home-layout.component";
import { LoginLayoutComponent } from "./layouts/login-layout.component";
import { LoginPageComponent } from "./login-page/login-page.component";

import { NavService } from "./services/nav.service";
import { AuthService } from "./services/auth.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { NewLineChartComponent } from "./new-line-chart/new-line-chart.component";
import { NewPieChartComponent } from "./new-pie-chart/new-pie-chart.component";
import { NewSolidgaugeChartComponent } from "./new-solidgauge-chart/new-solidgauge-chart.component";
import { NewPieChart2Component } from "./new-pie-chart2/new-pie-chart2.component";
import { HttpClientModule } from "@angular/common/http";
import { MutisensorsViewComponent } from "./mutisensors-view/mutisensors-view.component";
import { MutisensorCardComponent } from "./mutisensor-card/mutisensor-card.component";
import { NewGaugeChartComponent } from "./new-gauge-chart/new-gauge-chart.component";
import { NewPieChartliveComponent } from "./new-pie-chartlive/new-pie-chartlive.component";
import { NewPieChartdeviceComponent } from "./new-pie-chartdevice/new-pie-chartdevice.component";
import { TestViewComponent } from "./test-view/test-view.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTooltipModule } from "@angular/material/tooltip";
import { LiveVideoComponent } from "./live-video/live-video.component";
import { PlantFactoryViewComponent } from "./plant-factory-view/plant-factory-view.component";
import { LiveVideoViewComponent } from "./live-video-view/live-video-view.component";
import { PhotoGalleryComponent } from "./photo-gallery/photo-gallery.component";
import { PhotoGalleryViewComponent } from "./photo-gallery-view/photo-gallery-view.component";
import { LobsterResourceViewComponent } from "./lobster-resource-view/lobster-resource-view.component";
import { AirsensorCardComponent } from "./airsensor-card/airsensor-card.component";
import { DustsensorCardComponent } from "./dustsensor-card/dustsensor-card.component";
import { HistoryViewComponent } from "./history-view/history-view.component";
import { AirChartComponent } from './air-chart/air-chart.component';
import { FakeCameraComponent } from './fake-camera/fake-camera.component';
import { FakeCamera2Component } from './fake-camera2/fake-camera2.component';

// export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
//   // hostname: "127.0.0.1",
//   hostname: "116.62.151.59",
//   port: 8888,
//   path: "/mqtt", //'/mqtt'
// };
export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: "47.101.57.243",
  port: 8888,
  path: "/mqtt", //'/mqtt'
};
@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    LoginPageComponent,
    OverViewComponent,
    MutisensorsViewComponent,
    MutisensorViewComponent,
    TopBarComponent,
    SideMenuComponent,
    ProgressBarComponent,
    DataChartComponent,
    BaiduMapComponent,
    BaiduMapSingleComponent,
    DataTableComponent,
    MouseEnterSetbleDirective,
    NewLineChartComponent,
    NewPieChartComponent,
    NewSolidgaugeChartComponent,
    NewPieChart2Component,
    MutisensorCardComponent,
    NewGaugeChartComponent,
    NewPieChartliveComponent,
    NewPieChartdeviceComponent,
    TestViewComponent,
    LiveVideoComponent,
    PlantFactoryViewComponent,
    LiveVideoViewComponent,
    PhotoGalleryComponent,
    PhotoGalleryViewComponent,
    LobsterResourceViewComponent,
    AirsensorCardComponent,
    DustsensorCardComponent,
    HistoryViewComponent,
    AirChartComponent,
    FakeCameraComponent,
    FakeCamera2Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
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
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    FormsModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    BaiduMapModule.forRoot({ ak: "YCnnACvK3BtUHdCbVanZFsFUazer9Shj" }),
    HighchartsChartModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [NavService, AuthService, AuthGuardService],
  bootstrap: [AppComponent], //TBS:为什么增加http功能后需要加这个才正常?
})
export class AppModule {}
