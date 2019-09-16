import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SearchFilterComponent } from './search-filter.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from '../search-input/search-input.component';

describe('SearchFilterComponent', () => {
  let component: SearchFilterComponent;
  let fixture: ComponentFixture<SearchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule],
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
      const element = fixture.debugElement.nativeElement.querySelectorAll('app-dropdown');
      expect(element).toBeTruthy();
    });
    it('dropdown selector should take input value of type array', () => {

    });
    it('dropdown selector should emit the value', () => {

    });
  });
  describe('SearchInput Selector', () => {
    it('should have searchinput selector as an element', () => {
      const element = fixture.debugElement.nativeElement.querySelectorAll('app-search-input');
      expect(element).toBeTruthy();
    });
    it('dropdown selector should emit the value', ()  => {
    });
  });
});
