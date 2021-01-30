import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';

declare var google: any;
@Component({
  selector: 'app-get',
  templateUrl: './get.page.html',
  styleUrls: ['./get.page.scss'],
})
export class GetPage implements OnInit {
  map: any;
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
  IonViewDidEnter(){
    this.map = new google.maps.Map(document.getElementById("map"), {
      center : {lat : -34.397, lng: 150.644},
      zoom: 8
    })
  }

}
