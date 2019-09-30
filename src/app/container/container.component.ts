import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent  {
  users;
  constructor(private userservice: UsersService) {
  this.userservice.usersInfo
    .subscribe(users => {
      this.users = users;
    });
   }
}
