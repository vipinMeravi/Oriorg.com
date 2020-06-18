import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdPressedFlaxseedOilComponent } from './cold-pressed-flaxseed-oil.component';

describe('ColdPressedFlaxseedOilComponent', () => {
  let component: ColdPressedFlaxseedOilComponent;
  let fixture: ComponentFixture<ColdPressedFlaxseedOilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdPressedFlaxseedOilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdPressedFlaxseedOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
