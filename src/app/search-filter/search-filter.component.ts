import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
// list = ['All' , 'Name' , 'Designation' , 'Team'];
list = [
  { value : 'All'} ,
  { value : 'Name'},
  { value : 'Designation'},
  { value : 'Team'}
];
currentValue = this.list[0];
  constructor() { }

  ngOnInit() {
  }

}
