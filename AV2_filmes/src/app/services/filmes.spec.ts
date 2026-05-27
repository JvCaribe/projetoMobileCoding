import { TestBed } from '@angular/core/testing';

import { Filmes } from './filmes.service';

describe('Filmes', () => {
  let service: Filmes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Filmes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
