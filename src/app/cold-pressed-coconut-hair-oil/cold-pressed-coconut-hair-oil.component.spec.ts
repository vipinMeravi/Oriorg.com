import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdPressedCoconutHairOilComponent } from './cold-pressed-coconut-hair-oil.component';

describe('ColdPressedCoconutHairOilComponent', () => {
  let component: ColdPressedCoconutHairOilComponent;
  let fixture: ComponentFixture<ColdPressedCoconutHairOilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdPressedCoconutHairOilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdPressedCoconutHairOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
