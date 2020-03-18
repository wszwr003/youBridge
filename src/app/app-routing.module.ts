import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MutisensorViewComponent } from "./mutisensor-view/mutisensor-view.component";
import { OverViewComponent } from "./over-view/over-view.component";
import { OverviewD3Component } from "./over-view/overview-d3/overview-d3.component";
const routes: Routes = [
  { path: "", component: OverviewD3Component },
  { path: "mutisensor", component: MutisensorViewComponent },
  { path: "overview", component: OverviewD3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
