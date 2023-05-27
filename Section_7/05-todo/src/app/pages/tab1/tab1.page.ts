import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TodoService } from 'src/app/sercices/todo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(
    public todoService: TodoService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  async toAddListPage() {    
    // this.router.navigateByUrl('/tabs/tab1/add');
    const alert = await this.alertCtrl.create({
      header: 'New List',
      inputs:[
        {
          name: 'listTitle',
          type: 'text',
          placeholder: 'List name',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel and close promt');
          }
        },
        {
          text: 'Create',
          handler: (data) => {
            console.log(data);
            if (data.listTitle.length === 0) return;
            const newListId = this.todoService.createList(data.listTitle);
            this.router.navigateByUrl(`/tabs/tab1/add/${newListId}`);
          }
        }
      ] 
    });
    alert.present();
  }

}
