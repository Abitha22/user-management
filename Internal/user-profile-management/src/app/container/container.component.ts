import { Component, OnInit } from '@angular/core';
import { users} from '../data/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
users;
  constructor(public service: UsersService) {
    this.service.getUsers().subscribe(data => {
    this.users = data;
    console.log(this.users);
  });
}

  ngOnInit() {
  }

}
