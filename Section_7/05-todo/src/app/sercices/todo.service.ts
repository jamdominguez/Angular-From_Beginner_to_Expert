import { Injectable } from '@angular/core';
import { List } from '../models/list.model';
import { ListItem } from '../models/list-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  lists: List[] = [];

  constructor() {
    this.load();
  }

  createList(listTitle: string) {
    const newList = new List(listTitle);
    this.lists.push(new List(listTitle));
    this.save();
    return newList.id;
  }

  removeList(listId: number) {
    this.lists = this.lists.filter(list => list.id !== listId);
    this.save();
  }

  getList(id: string | number) { // can string or number
    return this.lists.find(list => list.id === Number(id));
  }

  save() {
    localStorage.setItem('todoLists', JSON.stringify(this.lists));
  }

  load() {
    const todoLists = localStorage.getItem('todoLists');
    if (todoLists) this.lists = JSON.parse(todoLists);
  }
}
