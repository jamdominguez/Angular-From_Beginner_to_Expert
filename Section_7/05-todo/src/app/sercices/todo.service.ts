import { Injectable } from '@angular/core';
import { List } from '../models/list.model';
import { ListItem } from '../models/list-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  lists: List[] = [];

  constructor() {
    const list1 = new List('Get infinitive stones');
    const list2 = new List('Heroes to remove');

    list1.items = [new ListItem('Stone1'), new ListItem('Stone2'), new ListItem('Stone3'), new ListItem('Stone4'), new ListItem('Stone5')];
    list2.items = [new ListItem('Captain America'), new ListItem('Iron Man'), new ListItem('Hulk')]

    this.lists.push(list1, list2);
  }
}
