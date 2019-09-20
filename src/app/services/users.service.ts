import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterObject } from '../models/filterObject';
import {Api} from '../models/userdata';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = Api.apiUrl;
  filter: FilterObject;
  searchText;
  filterType;
  constructor(public http: HttpClient) { }
   subject = new BehaviorSubject<any>('');

  getUsers(): Observable<any> {
    let users;
    this.http.get(this.apiUrl + '/users').subscribe(data => {
      users = data;
      this.subject.next(users);
    });
    return this.subject.asObservable();
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
