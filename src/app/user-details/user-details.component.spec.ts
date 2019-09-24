import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../modules/material.module';
import { UsersService } from '../services/users.service';
/*
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
  it('should get details based on id' , () => {

  });
});*/
