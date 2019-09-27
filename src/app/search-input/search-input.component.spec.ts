import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { SearchInputComponent } from './search-input.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
  it('should emit the last value', () => {
    spyOn(component, 'enterValue');
    of('a', 'ab', 'abcfgh').pipe(debounceTime(200)).subscribe(inputValue => {
      component.enterValue(inputValue);
    });
    expect(component.enterValue).toHaveBeenCalledWith('abcfgh');
  });
  it('should call the enterValue() based on the debounceTime', fakeAsync(() => {
    spyOn(component.outSearchEvent, 'emit');
    spyOn(component, 'enterValue');
    const element = fixture.nativeElement.querySelector('input');
    for (let i = 1; i <= 4; i++) {
      element.value = 'test' + i;
      element.dispatchEvent(new Event('keyup'));
      fixture.detectChanges();
     }
    tick(2000);
    expect(component.enterValue).toHaveBeenCalledTimes(1);
  }));
  it('should emit latest value entered', fakeAsync(() => {
    spyOn(component, 'enterValue').and.callThrough();
    spyOn(component.outSearchEvent, 'emit');
    const element = fixture.nativeElement.querySelector('input');
    for (let i = 1; i <= 4; i++) {
      element.value = 'test' + i;
      element.dispatchEvent(new Event('keyup'));
      fixture.detectChanges();
     }
    tick(2000);
    expect(component.outSearchEvent.emit).toHaveBeenCalledTimes(1);
    expect(component.outSearchEvent.emit).toHaveBeenCalledWith('test4');
  }));
});
