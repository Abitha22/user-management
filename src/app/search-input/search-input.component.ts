import { Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  constructor() { }
  regex = new RegExp('^[a-zA-Z0-9_]*$');
outSearchEvent = new EventEmitter<string>();
enterValue(input: HTMLInputElement) {
  if (this.regex.test(input.value)) {
    if (input.value !== '') {
      this.outSearchEvent.emit(input.value);
      console.log(input.value);
     }
  }
}
}
