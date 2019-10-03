import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PespondingToPulseWithBeatComponent } from './pesponding-to-pulse-with-beat.component';

describe('PespondingToPulseWithBeatComponent', () => {
  let component: PespondingToPulseWithBeatComponent;
  let fixture: ComponentFixture<PespondingToPulseWithBeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PespondingToPulseWithBeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PespondingToPulseWithBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
