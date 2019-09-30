import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { SearchInputComponent } from './search-input.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { last } from '../../../node_modules/rxjs/operators';

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
    const element = fixture.debugElement.nativeElement.querySelector('input');
    expect(element).toBeTruthy();
  });
  it('should call the enterValue() based on the debounceTime', fakeAsync(() => {
    spyOn(component.outSearchEvent, 'emit');
    spyOn(component, 'enterValue');
    const element = fixture.nativeElement.querySelector('input');
    const observable = new Observable(subscriber => {
      subscriber.next('a');
      subscriber.next('ab');
      subscriber.next('abc');
    });

    observable.subscribe((data) => {
        element.value = data;
        element.dispatchEvent(new Event('keyup'));
        fixture.detectChanges();
    });
    tick(2000);
    expect(component.enterValue).toHaveBeenCalledTimes(1);
  }));
  it('should emit latest value entered', fakeAsync(() => {
    spyOn(component, 'enterValue').and.callThrough();
    spyOn(component.outSearchEvent, 'emit');
    const element = fixture.nativeElement.querySelector('input');

    const observable = new Observable(subscriber => {
      subscriber.next('a');
      subscriber.next('ab');
      subscriber.next('abc');
    });

    observable.subscribe((data) => {
        element.value = data;
        element.dispatchEvent(new Event('keyup'));
        fixture.detectChanges();
    });
    tick(2000);
    expect(component.outSearchEvent.emit).toHaveBeenCalledTimes(1);
    observable.pipe(last()).subscribe(value => {
      expect(component.outSearchEvent.emit).toHaveBeenCalledWith(value);
    });
  }));
});
