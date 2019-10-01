import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoComponent } from './userinfo.component';
import { UserDetailsComponent } from 'src/app/user-details/user-details.component';
import { UsersService } from 'Internal/user-profile-management/src/app/users.service';
import { MaterialModule } from 'src/app/modules/material.module';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('UserinfoComponent', () => {
  let component: UserinfoComponent;
  let fixture: ComponentFixture<UserinfoComponent>;
  let service: UsersService;
  let route: RouterTestingModule;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinfoComponent , UserDetailsComponent],
      providers: [UsersService],
      imports : [ MaterialModule , HttpClientTestingModule , FormsModule , RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(UsersService);
    route = TestBed.get(RouterTestingModule);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should sanpshot id in the Url', () => {
  });
});
