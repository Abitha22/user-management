import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchInputComponent],
      imports: [FormsModule, HttpClientModule]
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
    spyOn(component.outSearchEvent, 'emit');
    const input = fixture.nativeElement.querySelector('input');
    input.dispatchEvent(new Event('keyup'));
    input.value = '1234567';
    component.enterValue(input);
    fixture.detectChanges();
    tick(2000);
    expect(component.outSearchEvent.emit).toHaveBeenCalledTimes(1);
    expect(component.outSearchEvent.emit).toHaveBeenCalledWith('1234567');
  }));
  it('should accept input alphabets', fakeAsync(() => {
    spyOn(component.outSearchEvent, 'emit');
    const input = fixture.nativeElement.querySelector('input');
    input.dispatchEvent(new Event('keyup'));
    input.value = 'testing';
    component.enterValue(input);
    fixture.detectChanges();
    tick(2500);
    expect(component.outSearchEvent.emit).toHaveBeenCalledTimes(1);
    expect(component.outSearchEvent.emit).toHaveBeenCalledWith('testing');
  }));
  it('should not accept the special symbols', fakeAsync(() => {
    spyOn(component.outSearchEvent, 'emit');
    const input = fixture.nativeElement.querySelector('input');
    input.dispatchEvent(new Event('keyup'));
    input.value = '@testing';
    component.enterValue(input);
    fixture.detectChanges();
    tick(2500);
    expect(component.outSearchEvent.emit).toHaveBeenCalledTimes(0);
  }));
  it('should emit the input value', fakeAsync(() => {
    spyOn(component.outSearchEvent, 'emit');
    const input = fixture.nativeElement.querySelector('input');
    input.dispatchEvent(new Event('keyup'));
    input.value = 'testing';
    component.enterValue(input);
    fixture.detectChanges();
    tick(2500);
    expect(component.outSearchEvent.emit).toHaveBeenCalledTimes(1);
    expect(component.outSearchEvent.emit).toHaveBeenCalledWith('testing');
  }));
  it('should not emit the empty value', () => {
    const input = fixture.nativeElement.querySelector('input');
    spyOn(component.outSearchEvent, 'emit');
    input.value = '';
    component.enterValue(input);
    expect(component.outSearchEvent.emit).toHaveBeenCalledTimes(0);
  });
});
