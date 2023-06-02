import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {

  alert: string = 'alert-danger';

  properties: any = {
    danger: true
  }

  loading: boolean = false;

  execute() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
