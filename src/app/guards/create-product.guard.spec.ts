import { TestBed } from '@angular/core/testing';

import { CreateProductGuard } from './create-product.guard';

describe('CreateProductGuard', () => {
  let guard: CreateProductGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateProductGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
