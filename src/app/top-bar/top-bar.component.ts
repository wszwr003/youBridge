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
  public checked = false;
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
    this.intervalTick = setInterval(() => {
      console.log(this.checked);
      this.router.navigate(["/devices/env", "861011047418186"]);
      this.timeoutTick = setTimeout(() => {
        this.router.navigate(["/sys"]);
      }, 5000);
    }, 10000);
  }
  ngOnInit() {}
}
