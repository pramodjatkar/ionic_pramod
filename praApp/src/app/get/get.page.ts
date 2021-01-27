import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service'
@Component({
  selector: 'app-get',
  templateUrl: './get.page.html',
  styleUrls: ['./get.page.scss'],
})
export class GetPage implements OnInit {
  userDetails: any=[];
  constructor(public userService:ApiService) { }
  GetUserDetails()
  {
    this.userService.GetUsers().subscribe((data)=>{
      var anyData = <any>data;
      this.userDetails = anyData.data;
    })
  }

  ngOnInit() {
  }

}
