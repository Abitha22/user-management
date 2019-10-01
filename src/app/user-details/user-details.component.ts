import { Component, Input } from '@angular/core';
import { UserDetails } from '../models/userdetails';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  {
@Input()
userDetails: UserDetails;
}
