import { Component, Output, EventEmitter } from '@angular/core';
import {  combineLatest, BehaviorSubject } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  @Output() outFilterObject = new EventEmitter();
  filterObject;
  list = [
    { value: 'All' },
    { value: 'Name' },
    { value: 'Designation' },
    { value: 'Team' }
  ];
  selectedFilterType = new BehaviorSubject<any>('All');
  searchValue = new BehaviorSubject<any>('');
  selectedType = this.list[0].value;
  constructor() {
    this.filterObject = combineLatest(this.searchValue, this.selectedFilterType).subscribe((data) => {
      this.outFilterObject.emit(data);
      console.log(data);
    });
  }

  searchInput(value) {
    this.searchValue.next(value);
  }
  filterType(type) {
   this.selectedFilterType.next(type);
  }
}
