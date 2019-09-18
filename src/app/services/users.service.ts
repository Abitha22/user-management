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
    this.filter.searchInput = searchText;
  }
  setFilterType(type) {
    this.filter.filterType = type;
  }

    userDetails(id: number) {
      let user;
      this.http.get(this.apiUrl + '/users/' + id).subscribe(data => {
        user = data;
        console.log(user);
        return user;
      });
    }

  getFilterObject() {
    return this.filter;
  }
}
