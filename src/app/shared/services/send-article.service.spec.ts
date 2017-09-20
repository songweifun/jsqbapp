import { TestBed, inject } from '@angular/core/testing';

import { SendArticleService } from './send-article.service';

describe('SendArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendArticleService]
    });
  });

  it('should be created', inject([SendArticleService], (service: SendArticleService) => {
    expect(service).toBeTruthy();
  }));
});
