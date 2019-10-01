import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetails } from 'src/app/models/userdetails';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  userData: UserDetails;
  id;
  constructor(private router: ActivatedRoute , private userService: UsersService) {
    }
  userDetails(id): void {
      this.userService.getId(id);
      this.userService.userInfo.subscribe((data: UserDetails) => {
        this.userData = data;
        console.log(this.userData);
     });
    }
   ngOnInit() {
    this.router.paramMap.subscribe(pmap => this.userDetails(pmap.get('id')));
   }
  }
