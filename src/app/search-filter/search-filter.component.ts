import { Component, OnInit } from '@angular/core';

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

  searchInput(value) {
    console.log('ok');
  }
  filterType(type) {
    console.log(type);
  }

  constructor() { }

  ngOnInit() {
  }

}
