import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel;
  remember: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = new UserModel();
    this.remember = this.auth.getStoredRemember();
    if (this.remember) this.user.email = this.auth.getStoredEmail();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return

    Swal.fire({
      allowOutsideClick: false,
      text: 'Wait please...',
      type: 'info'
    });
    Swal.showLoading();

    this.auth.signIn(this.user).subscribe(
      resp => {
        console.log(resp)
        Swal.close();
        this.auth.rememberManager(this.user.email, this.remember);
        this.router.navigateByUrl('/home');
      }
      , err => {
        console.warn(err)
        Swal.fire({
          title: 'Authentication error',
          text: err.error.error.message,
          type: 'error'
        });

      });
  }
}
