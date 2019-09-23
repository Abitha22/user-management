// import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

// import { SearchFilterComponent } from './search-filter.component';
// import { DropdownComponent } from '../dropdown/dropdown.component';
// import { FormsModule } from '@angular/forms';
// import { SearchInputComponent } from '../search-input/search-input.component';
// import { HttpClientModule } from '../../../node_modules/@angular/common/http';
// import { UsersService } from '../services/users.service';
// class MockUserService {
//   setSearchText() {

//   }
//   setFilterType() {

//   }
// }
// describe('SearchFilterComponent', () => {
//   let component: SearchFilterComponent;
//   let fixture: ComponentFixture<SearchFilterComponent>;
//   let service: UsersService;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [FormsModule, HttpClientModule],
//       declarations: [SearchFilterComponent, DropdownComponent, SearchInputComponent],
//       providers: [UsersService, {
//         provide: UsersService, useClass: MockUserService
//       }]
//     })
//       .compileComponents();
//     service = TestBed.get(UsersService);
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SearchFilterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   describe('Dropdown Selector', () => {
//     it('should have dropdown selector as an element', () => {
//       const element = fixture.debugElement.nativeElement.querySelector('app-dropdown');
//       expect(element).toBeTruthy();
//     });
//     it('searchInput() should call the UserService internally', () => {
//       // tslint:disable-next-line: variable-name
//       const user_service_setsearchinput = spyOn(service, 'setFilterType');
//       component.searchInput('abcd');
//       expect(user_service_setsearchinput).toHaveBeenCalledWith('abcd');
//     });
//   });
//   describe('SearchInput Selector', () => {
//     it('should have searchinput selector as an element', () => {
//       const element = fixture.debugElement.nativeElement.querySelector('app-search-input');
//       expect(element).toBeTruthy();
//     });
//     it('filterType() should call the UserService internally', () => {
//       // tslint:disable-next-line: variable-name
//       const user_service_setsearchstext = spyOn(service, 'setFilterType');
//       component.filterType('abcd');
//       expect(user_service_setsearchstext).toHaveBeenCalledWith('abcd');
//     });
//   });
// });
