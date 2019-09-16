import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { By } from '@angular/platform-browser';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule],
      declarations: [ DropdownComponent ] ,
      providers: [SearchFilterComponent],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take the list values as input', () => {
    const filter = TestBed.get(SearchFilterComponent);
    component.dropdownList = filter.list;
    const dropdownComponent = new DropdownComponent();
    fixture.componentInstance = dropdownComponent;
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement.querySelectorAll('select > option');
    expect(element.length).toEqual(4);
  });
  // it('dropdown should take default value as `All` as input', () => {
  //   const filter = TestBed.get(SearchFilterComponent);
  //   component.selectedType = filter.selectedType;
  //   fixture.detectChanges();
  //   const select = fixture.debugElement.nativeElement.querySelector('select');
  //   expect(select).toBe('All');
  // });
  it('select event should trigger when user selects the filter type', () => {
    const element = fixture.nativeElement.querySelector('select');
    spyOn(component, 'onChange');
    element.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalled();
  });
  it('should emit the selected type filter value', () => {
      const filter = TestBed.get(SearchFilterComponent);
      component.dropdownList = filter.list;
      fixture.detectChanges();
      spyOn(component.outSelectedType, 'emit');
      const select = fixture.nativeElement.querySelector('select');
      select.value = select.options[1].value;
      select.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.outSelectedType.emit).toHaveBeenCalled();
      expect(component.outSelectedType.emit).toHaveBeenCalledWith('Name');
  });
});
