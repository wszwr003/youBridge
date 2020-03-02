import { Component } from '@angular/core';
import { Input } from "@angular/core"
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class SideMenuComponent {
  @Input() item;
  @Input() depth: number;
  constructor() {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }
}
