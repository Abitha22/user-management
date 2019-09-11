import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { UserDataComponent } from './user-data/user-data.component';
import { MaterialModule } from './modules/material.module';
import { HttpClientTestingModule } from '../../node_modules/@angular/common/http/testing';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '../../node_modules/@angular/forms';

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
        DropdownComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
