import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
userId;
  constructor(public route: ActivatedRoute ) {
    // this.userId = this.route.snapshot.paramMap.get('id');
    // console.log(this.userId);
  }

  ngOnInit() {
  }

}
