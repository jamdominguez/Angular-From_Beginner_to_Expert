import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'src/app/models/list-item.model';
import { List } from 'src/app/models/list.model';
import { TodoService } from 'src/app/sercices/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  itemName : string = '';

  constructor(private todoService: TodoService, private route: ActivatedRoute) {
    const listId = this.route.snapshot.paramMap.get('listId');
    this.list = this.todoService.getList(listId as string) as List;
  }

  ngOnInit() {
  }

  addItem() {
    if (this.itemName.length === 0) return;

    const newItem = new ListItem(this.itemName);
    this.list.items.push(newItem);
    this.itemName = '';

    this.todoService.save();
  }

}
