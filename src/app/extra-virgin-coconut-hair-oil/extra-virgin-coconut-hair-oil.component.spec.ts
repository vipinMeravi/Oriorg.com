import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraVirginCoconutHairOilComponent } from './extra-virgin-coconut-hair-oil.component';

describe('ExtraVirginCoconutHairOilComponent', () => {
  let component: ExtraVirginCoconutHairOilComponent;
  let fixture: ComponentFixture<ExtraVirginCoconutHairOilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraVirginCoconutHairOilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraVirginCoconutHairOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
