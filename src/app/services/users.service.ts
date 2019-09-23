import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterObject } from '../models/filterObject';
import { Api } from '../models/userdata';
import { FilterPipe } from '../pipes/filter.pipe';
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  apiUrl = Api.apiUrl;
  filterObject: FilterObject;
  searchText;
  filterType;
  usersInfo = new BehaviorSubject<any>('');
  filterdUsersList = new BehaviorSubject<any>('');
  subscribeToUsersData = this.usersInfo.asObservable();
  subscribeToFilteredUsersList = this.filterdUsersList.asObservable();
  constructor(public http: HttpClient, public filterPipe: FilterPipe) {
    this.http.get(this.apiUrl + '/users').subscribe(data => {
      this.usersInfo.next(data);
    });
  }

  get users() {
    return this.usersInfo.asObservable();
  }
  usersFilteredList(filterObject?: FilterObject): Observable<any> {
    let filteredUsers;
    this.http.get(this.apiUrl + '/users').subscribe(data => {
     filteredUsers = this.filterPipe.transform(data , filterObject);
     this.filterdUsersList.next(filteredUsers);
    });
    return this.filterdUsersList.asObservable();
  }
}
