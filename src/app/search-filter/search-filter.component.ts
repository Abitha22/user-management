import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
list = [
  { value : 'All'} ,
  { value : 'Name'},
  { value : 'Designation'},
  { value : 'Team'}
];
  selectedType = this.list[0].value;
  constructor(private userservice: UsersService) {
   }

  searchInput(value) {
    console.log('working');
  }
  filterType(type) {
    console.log(type);
    this.userservice.setFilterType(type);
  }



  ngOnInit() {
  }

}
