import { TestBed } from '@angular/core/testing';

import { DatangService } from './datang.service';

describe('DatangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatangService = TestBed.get(DatangService);
    expect(service).toBeTruthy();
  });
});
