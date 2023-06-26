import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_END_POINT: string = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  API_KEY: string = 'AIzaSyCge1BvnimnSoVXNZukWRPEB8-3Y-jmojk' // in project settings is provided
  SING_UP_ACTION: string = 'signUp';
  SING_IN_ACTION: string = 'signInWithPassword';

  private userToken: string;
  private expirationDate: number;

  constructor(private http: HttpClient) {
    this.getToken();
    this.getExpirationDate();
  }

  signUp(user: UserModel) {
    return this.callAPI(this.SING_UP_ACTION, 'POST', user);
  }

  signIn(user: UserModel) {
    return this.callAPI(this.SING_IN_ACTION, 'POST', user);
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    // this.router.navigate(['/login']);
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
          this.saveExpirationDate(resp['expiresIn']);
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

  private saveExpirationDate(expiresIn: number) {
    this.expirationDate = new Date().setSeconds(expiresIn);
    localStorage.setItem('expirationDate', this.expirationDate.toString());
  }

  private getToken() {
    this.userToken = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    return this.userToken;
  }

  private getExpirationDate() {
    this.expirationDate = localStorage.getItem('expirationDate') ? parseInt(localStorage.getItem('expirationDate')) : 0;
    return this.expirationDate;
  }

  isAuthenticated(): boolean {
    const hasToken = this.userToken.length > 2;
    const expired = new Date().getTime() > this.expirationDate;
    console.log(`hasToken[${hasToken}] expired[${expired}]`);
    return hasToken && !expired;
  }

  rememberManager(email: string, remember: boolean) {
    if (remember) {
      localStorage.setItem('email', email);
      localStorage.setItem('remember', JSON.stringify(remember));
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('remember');
    }
  }

  getStoredRemember() {
    return JSON.parse(localStorage.getItem('remember'));
  }

  getStoredEmail() {
    return localStorage.getItem('email');
  }
}
