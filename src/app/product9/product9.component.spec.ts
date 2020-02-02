import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product9Component } from './product9.component';

describe('Product9Component', () => {
  let component: Product9Component;
  let fixture: ComponentFixture<Product9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
