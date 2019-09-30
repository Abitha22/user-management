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
   filterObject(filterObject) {
    console.log(filterObject);
    this.userservice.setFilteredObject({ searchInput: filterObject[0], filterType: filterObject[1] });
   }
}
