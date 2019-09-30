import { Component, Input } from '@angular/core';
import { UserData } from '../models/userdata';
import { UserDetails } from '../models/userdetails';
import {Router} from '@angular/router';
import { userData } from 'Internal/user-profile-management/src/app/models/userdata';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {
 user = UserData;
 data: UserDetails;
 @Input()
 userInfo: Array<userData>;
  constructor(private router: Router) {}
  viewDetails(id: number) {
    this.router.navigate(['/user/details', id]);
  }
}
