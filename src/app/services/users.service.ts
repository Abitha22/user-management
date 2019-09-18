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
  searchText;
  filterType;
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
  setSearchText(searchText) {
    this.searchText = searchText;
  }
  setFilterType(type) {
    this.filterType = type;
  }

  getFilterObject() {
    return {
      searchText: this.searchText,
      filterType: this.filterType
    };
  }
}
