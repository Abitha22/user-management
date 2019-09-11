import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterComponent } from './search-filter.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FormsModule } from '../../../node_modules/@angular/forms';

describe('SearchFilterComponent', () => {
  let component: SearchFilterComponent;
  let fixture: ComponentFixture<SearchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SearchFilterComponent, DropdownComponent]
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
  it('should')
  describe('Dropdown Selector', () => {
    it('should have dropdown selector as an element', () => {

    });
    it('dropdown selector should take input value of type array', () => {

    });
    it('dropdown selector should emit the value', () => {

    });
  });
  describe('SearchInput Selector', () => {
    it('should have searchinput selector as an element', () => {

    });
    it('dropdown selector should emit the value', () => {

    });
  });
});
