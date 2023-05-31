import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { List } from 'src/app/models/list.model';
import { TodoService } from 'src/app/sercices/todo.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() showCompleted?: boolean;
  @ViewChild(IonList) iList?: IonList;

  constructor(
    private router: Router,
    public todoService: TodoService,
    private alertCtrl: AlertController) {
  }

  ngOnInit() { }

  navigateAddPage(newListId: number) {
    if (this.showCompleted) this.router.navigateByUrl(`/tabs/tab2/add/${newListId}`);
    else this.router.navigateByUrl(`/tabs/tab1/add/${newListId}`);
  }

  removeList(listId: number) {
    this.todoService.removeList(listId);
  }

  async editListName(list: List) {
    const alert = await this.alertCtrl.create({
      header: 'Edit List Name',
      inputs: [
        {
          name: 'listTitle',
          type: 'text',
          value: list.title,
          placeholder: 'List name',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.iList?.closeSlidingItems();
          }
        },
        {
          text: 'Modify',
          handler: (data) => {
            console.log(data);
            if (data.listTitle.length === 0) return;
            list.title = data.listTitle;
            this.todoService.save();
            this.iList?.closeSlidingItems();
          }
        }
      ]
    });
    alert.present();
  }

}
