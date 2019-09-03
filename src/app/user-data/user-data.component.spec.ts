import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataComponent } from './user-data.component';
import {MaterialModule} from '../modules/material.module';

describe('UserDataComponent', () => {
  let component: UserDataComponent;
  let fixture: ComponentFixture<UserDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataComponent],
      imports : [MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to pass name of the user', () => {
    component.userInfo = {
      userphotourl: '',
      id: 1,
      firstname: 'Testing',
      lastname: 'Testing',
      designation: 'Testing',
      team: 'Testing'
  };
    fixture.detectChanges();
    const element = fixture.nativeElement;
    const user: HTMLInputElement = element.querySelector('.username');
    fixture.detectChanges();
    expect(user.textContent).toBe(' Name:Testing Testing ');
  });
  it('should be able to pass designation of the user', () => {
    component.userInfo = {
      userphotourl: '',
      id: 1,
      firstname: 'Testing',
      lastname: 'Testing',
      designation: 'Testing',
      team: 'Testing'
  };
    fixture.detectChanges();
    const element = fixture.nativeElement;
    const user: HTMLInputElement = element.querySelector('.designation');
    fixture.detectChanges();
    expect(user.textContent).toBe(' Designation:Testing ');
  });
  it('should be able to pass team of the user', () => {
    component.userInfo = {
      userphotourl: '',
      id: 1,
      firstname: 'Testing',
      lastname: 'Testing',
      designation: 'Testing',
      team: 'Testing'
  };
    fixture.detectChanges();
    const element = fixture.nativeElement;
    const user: HTMLInputElement = element.querySelector('.team');
    fixture.detectChanges();
    expect(user.textContent).toBe(' Team:Testing ');
  });
});
