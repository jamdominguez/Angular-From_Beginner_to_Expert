import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: UserModel;
  remember: boolean;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return

    Swal.fire({
      allowOutsideClick: false,
      text: 'Wait please...',
      type: 'info'
    });
    Swal.showLoading();

    this.auth.signUp(this.user).subscribe(
      resp => {
        console.log(resp)
        Swal.close();
        this.auth.rememberManager(this.user.email, this.remember);
        this.router.navigateByUrl('/home');
      }
      , err => {
        console.warn(err)
        Swal.fire({
          text: err.error.error.message,
          title: 'Registering error',
          type: 'error'
        });
        
      });
  }
}
