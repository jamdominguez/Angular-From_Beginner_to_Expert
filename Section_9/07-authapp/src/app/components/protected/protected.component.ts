import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent {

  constructor(public auth: AuthService) {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) this.auth.user$.subscribe(user => { console.log(user) });
    });
  }

}
