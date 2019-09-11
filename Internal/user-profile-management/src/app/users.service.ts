import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 apiUrl = 'http://localhost:3000';
 getUsers(): Observable<any> {
  let users;
  const subject = new BehaviorSubject<any>('');
  this.http.get(this.apiUrl + '/users').subscribe(data => {
    users = data;
    subject.next(users);
  });
  return subject.asObservable();
 }
  constructor(public http: HttpClient) {
    console.log(this.getUsers());
   }
}
