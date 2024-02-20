import { TestBed } from '@angular/core/testing';

import { ZolozService } from './zoloz.service';

describe('ZolozService', () => {
  let service: ZolozService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZolozService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
