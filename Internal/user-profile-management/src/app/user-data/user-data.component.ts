import { Component, OnInit, Input } from '@angular/core';
import { userData } from '../models/userdata';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  @Input() userInfo;
 user = userData;
  constructor() {
    console.log(this.userInfo);
  }

  ngOnInit() {
  }

}
