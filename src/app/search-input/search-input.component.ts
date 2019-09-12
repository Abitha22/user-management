import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {

  constructor() { }
outSearchEvent = new EventEmitter<string>();
enterValue(input: HTMLInputElement) {
if (input.value !== '') {
  this.outSearchEvent.emit(input.value);

}

}
}
