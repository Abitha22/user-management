import { Component, Output } from '@angular/core';
import { Observable, combineLatest } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  @Output() filterObject: Observable<any>;
  input: string;
  type: string;
  list = [
    { value: 'All' },
    { value: 'Name' },
    { value: 'Designation' },
    { value: 'Team' }
  ];
  selectedType = this.list[0].value;
  constructor() {
    this.filterObject = combineLatest(this.searchInput(this.input), this.filterType(this.type)).pipe(
      map(([input, type]) => {
        console.log('values are', input, type);
        return { input, type };
      })
    );
    console.log(this.filterObject);
  }

  searchInput(value): Observable<string> {
    console.log(value, 'working');
    this.input = value;
    return value;
  }
  filterType(type): Observable<string> {
    console.log(type);
    this.type = type;
    return type;
  }
}
