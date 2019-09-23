import { TestBed, fakeAsync } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { of, Observable } from '../../../node_modules/rxjs';


describe('UsersService', () => {
  let service: UsersService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.get(UsersService);
    httpTestingController = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get the users data when service is initialised', () => {
    const testData = [{
      userphotourl: '',
      id: 1,
      firstname: 'Testing',
      lastname: 'Testing',
      designation: 'Testing',
      team: 'Testing'
    }];
    const req = httpTestingController.expectOne('http://localhost:3000/users');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
    httpClient.get('http://localhost:3000/users')
      .subscribe(data => {
        console.log(data);
        expect(data).toEqual(testData);
      });
  });
  it('should have filterdUsers()', () => {
    expect(typeof service.filterdUsers).toBe('function');
  });
  // it('filterdUsers() should return the Observable' , () => {
  //   expect(service.filterdUsers()).toEqual(jasmine.any(Observable));
  // });
  // it('filterdUsers() accept the FilterObject as an argument' , () => {
  //   expect(service.filterdUsers({ searchInput: 'abcdef', filterType: 'all' })).toBeTruthy();
  // });
});
