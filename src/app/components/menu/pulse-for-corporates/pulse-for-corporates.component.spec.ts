import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseForCorporatesComponent } from './pulse-for-corporates.component';

describe('PulseForCorporatesComponent', () => {
  let component: PulseForCorporatesComponent;
  let fixture: ComponentFixture<PulseForCorporatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulseForCorporatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseForCorporatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
