import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @Input()
  dropdownList;

  @Input()
  currentValue;

  @Output()
  outValue = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
