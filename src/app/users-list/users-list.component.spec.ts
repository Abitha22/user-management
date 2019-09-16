import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import { UserDataComponent } from 'Internal/user-profile-management/src/app/user-data/user-data.component';
import { MaterialModule } from '../modules/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListComponent , UserDataComponent],
      imports : [MaterialModule , HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create the same number of users', () => {
    component.users = [{
      userphotourl: '',
      id: 1,
      firstname: 'Testing',
      lastname: 'Testing',
      designation: 'Testing',
      team: 'Testing'
    }, {
      userphotourl: '',
      id: 2,
      firstname: 'Testing',
      lastname: 'Testing',
      designation: 'Testing',
      team: 'Testing'
    }
    ];
    fixture.detectChanges();
    const details: HTMLDivElement = fixture.nativeElement;
    const userInfo = details.querySelectorAll('.column');
    expect(userInfo.length).toEqual(2);
  });

  it('should be able to display the user details in a card', () => {
    component.users = [{
      userphotourl: '',
      id: 1,
      firstname: 'Testing',
      lastname: 'Testing',
      designation: 'Testing',
      team: 'Testing'
    }];
    fixture.detectChanges();
    const details: HTMLDivElement = fixture.nativeElement;
    const userInfo = details.querySelector('app-user-data');
    expect(userInfo).toBeTruthy();
  });
});
