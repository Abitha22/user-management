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

  });
  it('should accept input numbers', () => {

  });
  it('should accept input alphabets', () => {

  });
  it('should not accept the special symbols', () => {

  });
  it('should emit the input value', () => {

  });
  it('should not emit the empty value', () => {

  });
  it ('emiting value should match the input value', () => {

  });
});
