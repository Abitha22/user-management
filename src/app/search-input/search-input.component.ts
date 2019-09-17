import { Component, EventEmitter, OnChanges, DoCheck} from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  constructor(private userservice: UsersService) {

   }
  regex = new RegExp('^[a-zA-Z0-9_]*$');
  searchText;
outSearchEvent = new EventEmitter<string>();
enterValue(input: HTMLInputElement) {
  if (this.regex.test(input.value)) {
    if (input.value !== '') {
      this.outSearchEvent.emit(input.value);
      console.log(input.value);
      this.userservice.setSearchText(input.value);
     }
  }
}
// ngDoCheck() {
//   console.log('data is', this.searchText);
//   this.userservice.setSearchText(this.searchText);
// }
}
