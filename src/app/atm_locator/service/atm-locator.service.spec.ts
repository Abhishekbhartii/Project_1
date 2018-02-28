/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AtmLocatorService } from './atm-locator.service';

describe('AtmLocatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtmLocatorService]
    });
  });

  it('should ...', inject([AtmLocatorService], (service: AtmLocatorService) => {
    expect(service).toBeTruthy();
  }));
});
