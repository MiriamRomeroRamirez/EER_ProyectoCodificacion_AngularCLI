import { TestBed } from '@angular/core/testing';

import { NaoService } from './nao.service';

describe('NaoService', () => {
  let service: NaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
