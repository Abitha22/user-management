import { async, ComponentFixture, TestBed, ɵTestingCompiler } from '@angular/core/testing';

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
    const input = fixture.nativeElement.querySelector('input');
    expect(input).toBeTruthy();
  });
  it('should accept input numbers', () => {

  });
  it('should accept input alphabets', () => {

  });
  it('should not accept the special symbols', () => {

  });
  it('should emit the input value', () => {
    const input = fixture.nativeElement.querySelector('input');
    spyOn(component.outSearchEvent, 'emit');
    input.value = 'testing';
    component.enterValue(input);
    expect(component.outSearchEvent.emit).toHaveBeenCalledWith('testing');
  });
  it('should not emit the empty value', () => {
  const input = fixture.nativeElement.querySelector('input');
  spyOn(component.outSearchEvent, 'emit');
  input.value = null;
  component.enterValue(input);
  expect(component.outSearchEvent.emit).toHaveBeenCalledTimes(0);

  });
  it ('emiting value should match the input value', () => {
    const input = fixture.nativeElement.querySelector('input');
    spyOn(component.outSearchEvent, 'emit');
    input.value = 'testing';
    component.enterValue(input);
    expect(component.outSearchEvent.emit).toHaveBeenCalledWith('testing');
  });
});
