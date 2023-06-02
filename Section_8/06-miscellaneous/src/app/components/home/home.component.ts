import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <app-classes></app-classes>
  
  <br><br>

  <p appHighlighted>
    Directive
  </p>

  <p [appHighlighted]="'orange'">
    Directive with input
  </p>

  <app-gn-switch></app-gn-switch>
  `,
  styles: [
  ]
})
export class HomeComponent {

}
