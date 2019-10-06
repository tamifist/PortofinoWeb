import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAndInsightFromPulsesComponent } from './data-and-insight-from-pulses.component';

describe('DataAndInsightFromPulsesComponent', () => {
  let component: DataAndInsightFromPulsesComponent;
  let fixture: ComponentFixture<DataAndInsightFromPulsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAndInsightFromPulsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAndInsightFromPulsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
