import { Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  constructor() { }
outSearchInput = new EventEmitter<string>();
  enterValue(input: HTMLInputElement) {
    if (input.value !== '') {
      this.outSearchInput.emit(input.value);
      console.log(input.value);
    }
  }
  ngOnInit() {
  }

}
