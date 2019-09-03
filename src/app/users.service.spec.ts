import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from '../../node_modules/rxjs';
describe('UsersService', () => {
  let service: UsersService;
  let http: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(UsersService);
    http = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have a getUsers()', () => {
    expect(typeof service.getUsers).toBe('function');
  });
  it('should return a Observable', () => {
    expect(service.getUsers()).toEqual(jasmine.any(Observable));
  });

  it('should use get method to get data from the url', () => {
    const apiUrl = service.apiUrl + '/users';
    service.getUsers().subscribe((data) => {
    });
    const response = http.expectOne(apiUrl);
    expect(response.request.method).toEqual('GET');
  });

  it('should have a userDetails()', () => {
    expect(typeof service.userDetails).toBe('function');
  });
});
