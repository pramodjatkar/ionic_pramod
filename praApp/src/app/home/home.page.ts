import { Component } from '@angular/core';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any = {};
  constructor() {}

  submit(){
    console.log(this.user);
  }
  taskList = [];

    addTask() {
        if (this.user.name.length > 0) {
            let task = this.user.name;
            this.taskList.push(task);
            this.user.name = "";
        }
    }
}
