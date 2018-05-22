import { TestBed, inject } from '@angular/core/testing';

import { Posts\postsService } from './posts\posts.service';

describe('Posts\postsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Posts\postsService]
    });
  });

  it('should be created', inject([Posts\postsService], (service: Posts\postsService) => {
    expect(service).toBeTruthy();
  }));
});
