import { Component, EventEmitter, Output, OnInit, ViewChild, ElementRef } from '@angular/core';
import { of, interval, Observable } from '../../../node_modules/rxjs';
import { debounce, map, debounceTime } from '../../../node_modules/rxjs/operators';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  regex = new RegExp('^[a-zA-Z0-9]*$');

  @Output()
  outSearchEvent = new EventEmitter<string>();
  enterValue(inputValue: string) {
    // input.value = input.value.trim();
    if (this.regex.test(inputValue)) {
      this.outSearchEvent.emit(inputValue);
      console.log(inputValue);
     }
  }
  ngOnInit() {
    const searchInput = document.querySelector('.searchbox');
    fromEvent(searchInput, 'keyup')
      .pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(2000)
      )
      .subscribe(searchValue => {
        this.enterValue(searchValue);
      });
  }
}
