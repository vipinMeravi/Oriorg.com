import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermandcondComponent } from './termandcond.component';

describe('TermandcondComponent', () => {
  let component: TermandcondComponent;
  let fixture: ComponentFixture<TermandcondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermandcondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermandcondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
