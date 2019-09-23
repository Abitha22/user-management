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
  selectedType;

  @Output()
  outSelectedType = new EventEmitter();

  constructor() {
   }

   onChange(event) {
     this.selectedType = event;
     this.outSelectedType.emit(this.selectedType);
     console.log('selected type is' , this.selectedType);
  }
  ngOnInit() {
    this.outSelectedType.emit(this.selectedType);
  }
}
