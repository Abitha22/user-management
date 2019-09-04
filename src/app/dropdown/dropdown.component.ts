import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
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
