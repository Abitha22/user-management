import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../services/users.service';
import {FilterPipe} from '../pipes/filter.pipe';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
users;
searchText;
filterObject;
  constructor(private userservice: UsersService) {
    this.userservice.getUsers()
    .subscribe(users => {
      this.users = users;
    });
    this.filterObject = this.userservice.getFilterObject();
    console.log(this.filterObject);
  }

  ngOnInit() {
  }

}
