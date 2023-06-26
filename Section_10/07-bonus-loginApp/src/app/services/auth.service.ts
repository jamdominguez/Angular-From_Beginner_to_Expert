import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_END_POINT: string = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  API_KEY: string = 'AIzaSyCge1BvnimnSoVXNZukWRPEB8-3Y-jmojk' // in project settings is provided
  SING_UP_ACTION: string = 'signUp';
  SING_IN_ACTION: string = 'signInWithPassword';

  private userToken: string;

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: UserModel) {
    return this.callAPI(this.SING_UP_ACTION, 'POST', user);
  }

  signIn(user: UserModel) {
    return this.callAPI(this.SING_IN_ACTION, 'POST', user);
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  private callAPI(action: string, method: string, user: UserModel) {
    const url = this.getAPIServiceURL(action);
    if ('POST' === method) {
      const body = {
        ...user,
        returnSecureToken: true
      }
      return this.http.post(url, body).pipe(
        map(resp => {
          this.saveToken(resp['idToken']);
          return resp;
        })
      );
    }
  }

  private getAPIServiceURL(action: string) {
    return `${this.API_END_POINT}${action}?key=${this.API_KEY}`;
  }

  private saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  private getToken() {
    this.userToken = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    return this.userToken;
  }
}
