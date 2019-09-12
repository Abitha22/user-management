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

  constructor() {
   }

   onChange(event) {
     this.selectedType = event.target.value;
     this.outSelectedType.emit(this.selectedType);
     console.log('selected type is' , this.selectedType);
  }
}
