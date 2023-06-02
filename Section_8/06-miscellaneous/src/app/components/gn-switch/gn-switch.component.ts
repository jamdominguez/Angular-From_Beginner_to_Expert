import { Component } from '@angular/core';

@Component({
  selector: 'app-gn-switch',
  templateUrl: './gn-switch.component.html',
  styleUrls: ['./gn-switch.component.css']
})
export class GnSwitchComponent {

  alertType: string = '';

  constructor() { }

  update(value: string) {
    this.alertType = value;
  }

}
