import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
users;
  constructor(private userservice: UsersService) {
    this.userservice.getUsers()
    .subscribe(users => {
      this.users = users;
    });
  }

  ngOnInit() {
  }

}
