import { Component, HostBinding, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Router } from "@angular/router";
import { NavService } from "../services/nav.service";
import { NavItem } from "../services/nav-item";
//参考:https://stackblitz.com/edit/dynamic-nested-sidenav-menu
@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"],
  animations: [
    trigger("indicatorRotate", [
      state("collapsed", style({ transform: "rotate(-90deg)" })),
      state("expanded", style({ transform: "rotate(0deg)" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4,0.0,0.2,1)")
      ),
    ]),
  ],
})
export class SideMenuComponent implements OnInit {
  expanded: boolean = true;
  @HostBinding("attr.aria-expanded") ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;
  constructor(public navService: NavService, public router: Router) {
    if (this.depth === undefined) {
      this.depth = 1;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }
  onItemSelected(item: NavItem) {
    console.log(item.route);

    this.router.navigate([item.route]);
    if (!item.children || !item.children.length) {
      //this.router.navigate(["/devices/env", "861011047486233"]);
      //this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
      // this.router.navigate([item.route]);
    }
  }
}
