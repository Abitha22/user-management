import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { UserDataComponent } from './user-data/user-data.component';
import { MaterialModule } from './modules/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input/search-input.component';
import { UsersListComponent } from './users-list/users-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule ,
        MaterialModule ,
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent ,
        ContainerComponent ,
        UserDataComponent ,
        SearchFilterComponent ,
        DropdownComponent ,
        SearchInputComponent ,
        UsersListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
