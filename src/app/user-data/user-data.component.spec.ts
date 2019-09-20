import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataComponent } from './user-data.component';
import {MaterialModule} from '../modules/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('UserDataComponent', () => {
  let component: UserDataComponent;
  let fixture: ComponentFixture<UserDataComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataComponent],
      imports : [MaterialModule, RouterTestingModule]
    })
    .compileComponents();
    router = TestBed.get(Router);
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
    expect(user.textContent).toBe(' Name :Testing Testing ');
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
    expect(user.textContent).toBe(' Designation :Testing ');
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
    expect(user.textContent).toBe(' Team :Testing ');
  });
  it('Should navigate User-Datails Page While click on the User-Info', () => {
    component.userInfo = {
      userphotourl: '',
      id: 1,
      firstname: 'Testing',
      lastname: 'Testing',
      designation: 'Testing',
      team: 'Testing'
  };
    fixture.detectChanges();
    spyOn(component, 'viewDetails' );
    const user = fixture.debugElement.query(By.css('.class'));
    user.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalled();
});
});
