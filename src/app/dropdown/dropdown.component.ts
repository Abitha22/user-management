import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent{

  @Input()
  dropdownList;

  @Input()
  selectedType;

  @Output()
  outSelectedType = new EventEmitter();

  select(value) {
    this.outSelectedType.emit(value);
    console.log('emitted type is' , value);
  }
  constructor() {
   }

   onChange(event) {
     this.selectedType = event.target.value;
     this.outSelectedType.emit(this.selectedType);
     console.log('selected type is' , this.selectedType);
  }
}
