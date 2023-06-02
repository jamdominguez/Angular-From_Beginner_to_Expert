import { Component } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css Works!
    </p>
  `,
  styles: [`
    p{
      color: red;
      font-size: 30px;
    }
  `]
})
export class CssComponent {

}
