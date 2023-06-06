import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  template: `
    <p>
      new-user works!
    </p>
  `,
  styles: [
  ]
})
export class NewUserComponent {

  constructor(private router: ActivatedRoute) {
    router.parent?.params.subscribe((params) => {
      console.log('Child route');
      console.log(params);
    });
  }

}
