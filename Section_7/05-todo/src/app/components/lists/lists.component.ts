import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { TodoService } from 'src/app/sercices/todo.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() showCompleted?: boolean;
  lists: List[] = [];

  constructor(private router: Router, public todoService: TodoService) {    
  }
  
  ngOnInit() {
    this.updateLists();
  }

  navigateAddPage(newListId: number) {
    if (this.showCompleted) this.router.navigateByUrl(`/tabs/tab2/add/${newListId}`);
    else this.router.navigateByUrl(`/tabs/tab1/add/${newListId}`);
  }

  removeList(listId: number) {    
    this.todoService.removeList(listId);    
    this.updateLists();
  }

  updateLists() {
    this.todoService.load();    
    this.lists = this.todoService.lists.filter(list => list.completed === this.showCompleted);    
  }

}
