import { Component, EventEmitter, OnChanges, DoCheck, Output } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  regex = new RegExp('^[a-zA-Z0-9_]*$');
  @Output()
  outSearchEvent = new EventEmitter<string>();
  enterValue(input: HTMLInputElement) {
    if (this.regex.test(input.value)) {
      if (input.value !== '') {
        setTimeout(() => {
          this.outSearchEvent.emit(input.value);
          console.log(input.value);
        }, 2500);
      }
    }
  }
}
