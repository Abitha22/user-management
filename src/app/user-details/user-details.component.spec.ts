import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../modules/material.module';
import { UsersService } from '../services/users.service';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let router: ActivatedRoute;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent  ],
      providers : [ UsersService],
      imports : [MaterialModule , MaterialModule , RouterTestingModule],
    })
    .compileComponents();
    router = TestBed.get(ActivatedRoute);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should take userDetails as an Input', () => {
    component.userDetails = {
      photourl: '',
      id: 1,
      firstname: 'Privus',
      lastname: 'Technologies',
      designation: 'Corporate',
      team: 'Software'
    };
    fixture.detectChanges();
    const details: HTMLDivElement = fixture.nativeElement;
    const userInfo = details.querySelector('.card');
    expect(userInfo).toBeTruthy();
  });
  it('should display all the `UserDetails` propertices', () => {
    component.userDetails = {
      photourl: '',
      id: 1,
      firstname: 'Privus',
      lastname: 'Technologies',
      designation: 'Corporate',
      team: 'Software'
    };
    fixture.detectChanges();
    const details: HTMLDivElement = fixture.nativeElement;
    const userInfo = details.querySelector('.name');
    expect(userInfo.textContent).toBe(' Privus Technologies ');
  });
});
