import { TestBed, inject } from '@angular/core/testing';

import { ShowresultsService } from './showresults.service';

describe('ShowresultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowresultsService]
    });
  });

  it('should be created', inject([ShowresultsService], (service: ShowresultsService) => {
    expect(service).toBeTruthy();
  }));
});
