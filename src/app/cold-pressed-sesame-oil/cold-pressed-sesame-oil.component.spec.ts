import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdPressedSesameOilComponent } from './cold-pressed-sesame-oil.component';

describe('ColdPressedSesameOilComponent', () => {
  let component: ColdPressedSesameOilComponent;
  let fixture: ComponentFixture<ColdPressedSesameOilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdPressedSesameOilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdPressedSesameOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
