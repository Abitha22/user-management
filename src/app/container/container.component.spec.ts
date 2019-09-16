import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';
import { UserDataComponent } from '../user-data/user-data.component';
import { MaterialModule } from '../modules/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { UsersListComponent } from '../users-list/users-list.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { FormsModule } from '@angular/forms';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerComponent , SearchFilterComponent , UsersListComponent ,
         DropdownComponent , SearchInputComponent , UserDataComponent],
      imports : [MaterialModule , HttpClientTestingModule , FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have dropdown and search field to filter the users', () => {
    const element = fixture.nativeElement.querySelector('app-search-filter');
    expect(element).toBeTruthy();
  });

  it('should display all the users information on the card', () => {
    const element = fixture.nativeElement.querySelector('app-users-list');
    expect(element).toBeTruthy();
  });

});
