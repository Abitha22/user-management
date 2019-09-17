import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterObject } from '../models/filterObject';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'http://localhost:3000';
  filter: FilterObject;
  constructor(public http: HttpClient) { }

  getUsers(): Observable<any> {
    let users;
    const subject = new BehaviorSubject<any>('');
    this.http.get(this.apiUrl + '/users').subscribe(data => {
      users = data;
      subject.next(users);
    });
    return subject.asObservable();
  }
  userDetails() {

  }
  setFilterType(filterType: string) {
    this.filter.filterType = filterType;
  }
  setSearchInput(searchInput: string) {
    this.filter.searchInput = searchInput;
  }
  getFilterObject(): FilterObject {
    return this.filter;
  }
}
