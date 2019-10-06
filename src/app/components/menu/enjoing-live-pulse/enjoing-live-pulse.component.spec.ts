import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnjoingLivePulseComponent } from './enjoing-live-pulse.component';

describe('EnjoingLivePulseComponent', () => {
  let component: EnjoingLivePulseComponent;
  let fixture: ComponentFixture<EnjoingLivePulseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnjoingLivePulseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnjoingLivePulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
