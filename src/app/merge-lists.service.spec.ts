import { TestBed } from '@angular/core/testing';

import { MergeListsService } from './merge-lists.service';

describe('MergeListsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MergeListsService = TestBed.get(MergeListsService);
    expect(service).toBeTruthy();
  });
});
