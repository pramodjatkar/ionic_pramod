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
        console.log(this.user);
        this.taskList.push(this.user);
    }
}
