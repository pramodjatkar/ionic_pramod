import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
  results: any;

  constructor() { }

  ngOnInit() {
    fetch('./assets/inputfile/input.json').then(res => res.json()).then(json => {
      console.log('results::', json);
      this.results = json;
    })
  }

}
