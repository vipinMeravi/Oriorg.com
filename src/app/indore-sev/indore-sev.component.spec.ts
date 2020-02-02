import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoreSevComponent } from './indore-sev.component';

describe('IndoreSevComponent', () => {
  let component: IndoreSevComponent;
  let fixture: ComponentFixture<IndoreSevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoreSevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoreSevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
