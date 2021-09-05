import { TestBed } from '@angular/core/testing';

import { HeaderAttacherInterceptor } from './header-attacher.interceptor';

describe('HeaderAttacherInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HeaderAttacherInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HeaderAttacherInterceptor = TestBed.inject(HeaderAttacherInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
