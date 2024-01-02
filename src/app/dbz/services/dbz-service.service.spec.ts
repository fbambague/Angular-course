/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DbzServiceService } from './dbz-service.service';

describe('Service: DbzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbzServiceService]
    });
  });

  it('should ...', inject([DbzServiceService], (service: DbzServiceService) => {
    expect(service).toBeTruthy();
  }));
});
