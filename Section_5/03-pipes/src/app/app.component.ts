import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Capitán América';
  author: string = 'jOSe anToNiO muNoZ dOmInGUez';
  myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  myPercent: number = 0.234;
  salary: number = 1234.5;
  heroe = {
    name: 'Logan',
    key: 'Wolverine',
    age: '500',
    direction: {
      addres: 'Primera',
      number: 20
    }
  };
  language: string = 'es';
  videoLink = 'https://www.youtube.com/embed/CPUKGFVrQvE';

  valuePromiseResolve = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Data reponse!');
    }, 4000);
  });

  valuePromiseReject = new Promise<string>((resolve, reject) => {
    // setTimeout(() => {
    //   reject('Response rejected!!!');
    // }, 2000);
  });

  
  myDate = new Date();

  setLanguage = (lang : string) => {
    this.language = lang;
  }
}