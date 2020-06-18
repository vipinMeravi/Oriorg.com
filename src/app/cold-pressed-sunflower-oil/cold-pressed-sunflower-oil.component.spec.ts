import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdPressedSunflowerOilComponent } from './cold-pressed-sunflower-oil.component';

describe('ColdPressedSunflowerOilComponent', () => {
  let component: ColdPressedSunflowerOilComponent;
  let fixture: ComponentFixture<ColdPressedSunflowerOilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdPressedSunflowerOilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdPressedSunflowerOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
