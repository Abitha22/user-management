import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
@Output()
filterObject: object;
list = [
  { value : 'All'} ,
  { value : 'Name'},
  { value : 'Designation'},
  { value : 'Team'}
];
  selectedType = this.list[0].value;

  searchInput(value) {
    console.log('working');
  }
  filterType(type) {
    console.log(type);
  }
}
