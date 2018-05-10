import { TestBed, inject } from '@angular/core/testing';

import { DialogPrivateService } from './dialog-private.service';

describe('DialogPrivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogPrivateService]
    });
  });

  it('should be created', inject([DialogPrivateService], (service: DialogPrivateService) => {
    expect(service).toBeTruthy();
  }));
});
