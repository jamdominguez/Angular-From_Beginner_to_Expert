import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  countries: any[] = [];

  constructor(private http: HttpClient) {
    console.log('HomeComponent - constructor')
    this.http.get('https://restcountries.com/v3.1/lang/spanish').subscribe((data: any) => {
      console.log(data);
      this.countries = data;
    });
  }
}
