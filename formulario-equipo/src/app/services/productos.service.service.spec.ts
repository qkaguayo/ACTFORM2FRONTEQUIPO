import { TestBed } from '@angular/core/testing';

import { Productos.ServiceService } from './productos.service.service';

describe('Productos.ServiceService', () => {
  let service: Productos.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productos.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
