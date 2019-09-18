import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SearchFilterComponent } from './search-filter.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from '../search-input/search-input.component';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

describe('SearchFilterComponent', () => {
  let component: SearchFilterComponent;
  let fixture: ComponentFixture<SearchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule , HttpClientModule],
      declarations: [ SearchFilterComponent , DropdownComponent , SearchInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Dropdown Selector', () => {
    it('should have dropdown selector as an element', () => {
      const element = fixture.debugElement.nativeElement.querySelector('app-dropdown');
      expect(element).toBeTruthy();
    });
    it('searchInput() should call the UserService internally', () => {
    });
  });
  describe('SearchInput Selector', () => {
    it('should have searchinput selector as an element', () => {
      const element = fixture.debugElement.nativeElement.querySelector('app-search-input');
      expect(element).toBeTruthy();
    });
    it('dropdown selector should emit the value', ()  => {
    });
  });
});
