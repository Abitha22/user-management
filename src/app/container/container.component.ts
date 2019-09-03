import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  users;
  constructor(private userservice: UsersService) {
  this.userservice.getUsers()
    .subscribe(users => {
      this.users = users;
    });
   }
  //  details(id: number) {
  //   this.router.navigateByUrl('/details/' + id);
  //  }
  ngOnInit() {
  }

}
