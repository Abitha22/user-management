import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterObject } from '../models/filterObject';
import { UserDetails } from '../models/userdetails';
import { environment } from '../../environments/environment.dev';
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  apiUrl = environment.apiUrl;
  url;
  currentFilterObservable = new BehaviorSubject<FilterObject>({ searchInput: '', filterType: 'all' });
  usersInfo = new BehaviorSubject<Array<UserDetails>>(null);
  constructor(public http: HttpClient) {
    this.currentFilterObservable.subscribe((filterObject: FilterObject) => {
      this.getUsers(filterObject);
    });
  }

  get users(): Observable<Array<UserDetails>> {
    return this.usersInfo.asObservable();
  }

  setFilteredObject(filterObject?: FilterObject): void {
    this.currentFilterObservable.next(filterObject);
  }

  getUsers(filterObject: FilterObject = {} as FilterObject): void {

    const url = this.apiUrl + '/users';
    let params = new HttpParams();

    const {filterType, searchInput} = filterObject;
    if (filterType) {
      params = params.set('filter', filterType);
    }

    if (searchInput) {
      params = params.set('searchInput', searchInput);
    }

    if (filterType && searchInput) {
      params = params.set('filter', filterType);
      params = params.set('searchInput', searchInput);
    }
    this.http.get(
    url , {params} ).subscribe((data: UserDetails[]) => {
        this.usersInfo.next(data);
      });
    }
}
