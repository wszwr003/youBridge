import { Component, OnInit } from "@angular/core";
import { Output, EventEmitter } from "@angular/core"; //output component
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"],
})
export class TopBarComponent implements OnInit {
  @Output() sideMenuButton = new EventEmitter(); //output component
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
  constructor() {}

  ngOnInit() {}
}
