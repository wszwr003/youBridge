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
const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "test",
        component: TestViewComponent,
      },
      {
        path: "sys",
        component: OverViewComponent,
        data: { state: "One" },
      },
      {
        path: "devices",
        component: MutisensorsViewComponent,
        data: { state: "Two" },
      },
      {
        path: "devices/env",
        component: MutisensorsViewComponent,
        data: { state: "Two" },
      },
      {
        path: "group/:group",
        component: MutisensorsViewComponent,
        data: { state: "Two" },
      },
      {
        path: "devices/env/:deviceId",
        component: MutisensorViewComponent,
        data: { state: "Three" },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
