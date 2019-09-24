import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { UsersService } from '../services/users.service';

/*
describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInputComponent ],
      imports : [FormsModule , HttpClientModule],
      providers : [ UsersService ]
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
  it('should accept input numbers', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');
    tick(2500);
    fixture.detectChanges();
    input.value = '1234567';
    spyOn(component.outSearchEvent, 'emit');
    component.enterValue(input);
    expect(component.outSearchEvent.emit).toHaveBeenCalledWith('1234567');
  }));
  it('should accept input alphabets', () => {

    const input = fixture.nativeElement.querySelector('input');
    input.value = 'abcdefgh';
    spyOn(component.outSearchEvent, 'emit');
    component.enterValue(input);
    expect(component.outSearchEvent.emit).toHaveBeenCalledWith('abcdefgh');
  });
  it('should not accept the special symbols', () => {

    const input = fixture.nativeElement.querySelector('input');
    input.value = '@%4q123';
    spyOn(component.outSearchEvent, 'emit');
    component.enterValue(input);
    expect(component.outSearchEvent.emit).toHaveBeenCalledTimes(0);
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
    input.value = '';
    component.enterValue(input);
    expect(component.outSearchEvent.emit).toHaveBeenCalledTimes(0);
  });
});*/
