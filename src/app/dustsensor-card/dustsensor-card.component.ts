import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dustsensor-card',
  templateUrl: './dustsensor-card.component.html',
  styleUrls: ['./dustsensor-card.component.scss']
})
export class DustsensorCardComponent implements OnInit {
  device =null;
  constructor() { }

  ngOnInit() {
  }

}
