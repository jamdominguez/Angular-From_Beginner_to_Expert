import { Injectable } from '@angular/core';
import { List } from '../models/list.model';
import { ListItem } from '../models/list-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  lists: List[] = [];

  constructor() {
    // const list1 = new List('Get infinity stones');
    // const list2 = new List('Heroes to remove');

    // list1.items = [new ListItem('Stone1'), new ListItem('Stone2'), new ListItem('Stone3'), new ListItem('Stone4'), new ListItem('Stone5')];
    // list2.items = [new ListItem('Captain America'), new ListItem('Iron Man'), new ListItem('Hulk')]

    // this.lists.push(list1, list2);
    this.load();
  }

  createList(listTitle: string) {
    const newList = new List(listTitle);
    this.lists.push(new List(listTitle));
    this.save();
    return newList.id;
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
