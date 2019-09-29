import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingPulseComponent } from './creating-pulse.component';

describe('CreatingPulseComponent', () => {
  let component: CreatingPulseComponent;
  let fixture: ComponentFixture<CreatingPulseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingPulseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
