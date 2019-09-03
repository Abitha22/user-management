import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
  it('should have a method getUsers()' , () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(typeof service.getUsers).toBe('function');
  });
});
