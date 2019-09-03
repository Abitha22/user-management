import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'http://localhost:3000';
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
}
