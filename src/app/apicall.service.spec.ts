import { TestBed } from '@angular/core/testing';

import { APIcallService } from './apicall.service';

describe('APIcallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIcallService = TestBed.get(APIcallService);
    expect(service).toBeTruthy();
  });
});
