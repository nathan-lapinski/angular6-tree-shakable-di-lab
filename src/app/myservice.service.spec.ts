import { TestBed, inject } from '@angular/core/testing';

import { MyService } from './my.service';

describe('MyserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyserviceService]
    });
  });

  it('should be created', inject([MyserviceService], (service: MyserviceService) => {
    expect(service).toBeTruthy();
  }));
});
