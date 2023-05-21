import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/sercices/todo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(public todoService: TodoService, private router: Router) {

  }

  toAddListPage() {
    console.log('toAddListPage');
    this.router.navigateByUrl('/tabs/tab1/add');
  }

}
