import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have input field', () => {
    const element = fixture.debugElement.nativeElement.querySelectorAll('input');
    expect(element).toBeTruthy();
  });
  it('should accept input numbers', () => {

  });
  it('should accept input alphabets', () => {

  });
  it('should not accept the special symbols', () => {

  });
  it('should emit the input value', () => {
    const input = fixture.nativeElement.querySelector('input');
    spyOn(component.outSearchInput, 'emit');
    input.value = 'testing';
    component.enterValue(input);
    expect(component.outSearchInput.emit).toHaveBeenCalledWith('testing');
  });
  it('should not emit the empty value', () => {
    const input = fixture.nativeElement.querySelector('input');
    spyOn(component.outSearchInput, 'emit');
    input.value = '';
    component.enterValue(input);
    expect(component.outSearchInput.emit).toHaveBeenCalledTimes(0);
  });
  it ('emiting value should match the input value', () => {
    const input = fixture.nativeElement.querySelector('input');
    spyOn(component.outSearchInput, 'emit');
    input.value = 'testing';
    component.enterValue(input);
    expect(component.outSearchInput.emit).toHaveBeenCalledWith('testing');
  });
});
