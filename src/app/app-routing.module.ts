import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MutisensorViewComponent } from "./mutisensor-view/mutisensor-view.component";
import { OverViewComponent } from "./over-view/over-view.component";
import { HomeLayoutComponent } from "./layouts/home-layout.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { LoginLayoutComponent } from "./layouts/login-layout.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { MutisensorsViewComponent } from "./mutisensors-view/mutisensors-view.component";
import { TestViewComponent } from "./test-view/test-view.component";
import { PlantFactoryViewComponent } from "./plant-factory-view/plant-factory-view.component";
import { LiveVideoViewComponent } from "./live-video-view/live-video-view.component";
import { PhotoGalleryViewComponent } from "./photo-gallery-view/photo-gallery-view.component";
import { LobsterResourceViewComponent } from "./lobster-resource-view/lobster-resource-view.component";
import { HistoryViewComponent } from "./history-view/history-view.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    // canActivate: [AuthGuardService],
    children: [
      {
        path: "",
        component: PlantFactoryViewComponent,
        data: { state: "One" },
      },
      {
        path: "plant",
        component: PlantFactoryViewComponent,
        data: { state: "One" },
      },
      {
        path: "env",
        component: OverViewComponent,
        data: { state: "Two" },
      },
      {
        path: "lobster",
        component: LobsterResourceViewComponent,
        data: { state: "Three" },
      },
      {
        path: "livevideo",
        component: LiveVideoViewComponent,
        data: { state: "One" },
      },
      {
        path: "gallery",
        component: PhotoGalleryViewComponent,
        data: { state: "Two" },
      },
      {
        path: "history",
        component: HistoryViewComponent,
        data: { state: "Three" },
      },
      {
        path: "devices/env/:deviceId",
        component: MutisensorViewComponent,
        data: { state: "Three" },
      },
      {
        path: "test",
        component: TestViewComponent,
      },
    ],
  },
  {
    path: "test",
    component: TestViewComponent,
  },
  {
    path: "",
    component: LoginLayoutComponent,
    children: [
      {
        path: "login",
        component: LoginPageComponent,
      },
    ],
  },
  { path: "**", redirectTo: "" },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
