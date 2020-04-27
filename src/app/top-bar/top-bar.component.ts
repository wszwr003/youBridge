import { Component, OnInit } from "@angular/core";
import { Output, EventEmitter } from "@angular/core"; //output component
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"],
})
export class TopBarComponent implements OnInit {
  @Output() sideMenuButton = new EventEmitter(); //output component
  screenWidth: number;
  private secondInterval = 90;
  public checked = true;
  public intervalTick;
  public timeoutTick;
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  constructor(private router: Router) {
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
    if (this.checked) {
      this.viewChange();
    }
  }
  notify(event) {
    if (event.checked == true) {
      this.viewChange();
    } else {
      clearInterval(this.intervalTick);
      clearTimeout(this.timeoutTick);
    }
  }
  viewChange() {
    this.router.navigate(["/sys"]);
    this.timeoutTick = setTimeout(() => {
      this.router.navigate(["/devices"]);
    }, this.secondInterval * 1000);
    this.timeoutTick = setTimeout(() => {
      this.router.navigate(["/devices/env", "861011047418186"]);
    }, this.secondInterval * 2000);
    this.intervalTick = setInterval(() => {
      this.router.navigate(["/sys"]);
      this.timeoutTick = setTimeout(() => {
        this.router.navigate(["/devices"]);
      }, this.secondInterval * 1000);
      this.timeoutTick = setTimeout(() => {
        this.router.navigate(["/devices/env", "861011047418186"]);
      }, this.secondInterval * 2000);
    }, this.secondInterval * 3000);
  }
  ngOnInit() {}
}
