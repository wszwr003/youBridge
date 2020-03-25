import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MutisensorViewComponent } from "./mutisensor-view/mutisensor-view.component";
import { OverViewComponent } from "./over-view/over-view.component";
const routes: Routes = [
  { path: "mutisensor/:deviceId", component: MutisensorViewComponent },
  { path: "", component: MutisensorViewComponent },
  { path: "overview", component: OverViewComponent },
  {
    path: "devices",
    children: [
      {
        path: "env",
        children: [{ path: ":deviceID", component: MutisensorViewComponent }]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
