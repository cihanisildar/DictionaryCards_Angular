import { TestBed } from '@angular/core/testing';

import { MyWordsService } from './my-words.service';

describe('MyWordsService', () => {
  let service: MyWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
