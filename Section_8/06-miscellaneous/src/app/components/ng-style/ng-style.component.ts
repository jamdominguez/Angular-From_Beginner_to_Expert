import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  <p [ngStyle]="{'font-size': size + 'px', 'color': color}"> 
    Hello world... this is a tag
  </p>


  <button class="btn btn-primary" (click)="modify(5,'blue')">
    <i class="fa fa-plus"></i>
  </button>
  
  <button class="btn btn-danger" (click)="modify(-5,'red')">
    <i class="fa fa-minus"></i>
  </button>
  `,
  styles: []
})
export class NgStyleComponent {

  size: number = 10;
  color: string = 'black';

  constructor() {}

  modify(size: number, color: string) {
    this.size += size;
    if (this.size < 5) this.size = 5;
    this.color = color;
  }
}
