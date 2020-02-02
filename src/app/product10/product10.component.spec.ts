import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product10Component } from './product10.component';

describe('Product10Component', () => {
  let component: Product10Component;
  let fixture: ComponentFixture<Product10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
