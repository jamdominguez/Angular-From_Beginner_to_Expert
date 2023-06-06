import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private router: ActivatedRoute) {
    router.params.subscribe((params) => {
      console.log('Parent route');
      console.log(params);
    });
  }
}
