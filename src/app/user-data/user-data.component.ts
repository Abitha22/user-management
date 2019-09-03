import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '../models/userdata';
import { UserDetails } from '../models/userdetails';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
 user = UserData;
 data: UserDetails;
 @Input()
 userInfo;
  constructor() { }

  ngOnInit() {
  }

}
