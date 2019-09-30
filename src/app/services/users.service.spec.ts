import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('UsersService', () => {
  let service: UsersService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: []
    });
    service = TestBed.get(UsersService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get the users data when service is initialised', () => {
    const testData = [{
      photourl: '',
      id: 1,
      firstname: 'Testing',
      lastname: 'Testing',
      designation: 'Testing',
      team: 'Testing'
    }];
    const req =  httpTestingController.expectOne(
      // tslint:disable-next-line:no-shadowed-variable
      request => request.params.get('filter') === 'all');
    expect(req.request.method).toEqual('GET');
    console.log('url ' , req.request.url);
    req.flush(testData);
    httpTestingController.verify();
    service.usersInfo.subscribe(data => {
      expect(data).toEqual(testData);
    });
  });
  it('should get filtered users based on filterType', () => {
    const testData = [{
      photourl: '',
      id: 1,
      firstname: 'Testing',
      lastname: 'Testing',
      designation: 'Testing',
      team: 'Testing'
    }];
    const filterObject = { searchInput: '', filterType: 'name' };
    service.setFilteredObject(filterObject);
    const req =  httpTestingController.expectOne(
      // tslint:disable-next-line:no-shadowed-variable
      request => request.params.get('filter') === 'name'
    );
    console.log(req.request.urlWithParams);
    expect(req.request.method).toEqual('GET');
    expect(req.request.params.has('searchInput')).toEqual(false);
    req.flush(testData);
    service.usersInfo.subscribe(data => {
      expect(data).toEqual(testData);
    });
  });
  it('should get filtered users based on both searchInput and filterType as `all`', () => {
    const testData = [{
      photourl: '',
      id: 1,
      firstname: 'Testing',
      lastname: 'Testing',
      designation: 'Testing',
      team: 'Testing'
    }];
    const filterObject = { searchInput: 'testing', filterType: 'all' };
    service.setFilteredObject(filterObject);
    const req =  httpTestingController.match(
      // tslint:disable-next-line:no-shadowed-variable
      request => request.params.get('filter') === 'all'
    );
    console.log(req[1].request.urlWithParams);
    expect(req[1].request.method).toEqual('GET');
    expect(req[1].request.params.has('searchInput')).toEqual(true);
    req[1].flush(testData);
    service.usersInfo.subscribe(data => {
      expect(data).toEqual(testData);
    });
  });

  it('should get filtered users based on both searchInput and filterType', () => {
    const testData = [{
      photourl: '',
      id: 1,
      firstname: 'Testing',
      lastname: 'Testing',
      designation: 'Testing',
      team: 'Testing'
    }];
    const filterObject = { searchInput: 'testing', filterType: 'name' };
    service.setFilteredObject(filterObject);
    const req =  httpTestingController.expectOne(
      // tslint:disable-next-line:no-shadowed-variable
      request => request.params.get('filter') === 'name'
    );
    console.log(req.request.urlWithParams);
    expect(req.request.method).toEqual('GET');
    expect(req.request.params.has('searchInput')).toEqual(true);
    req.flush(testData);
    service.usersInfo.subscribe(data => {
      expect(data).toEqual(testData);
    });
  });
});
