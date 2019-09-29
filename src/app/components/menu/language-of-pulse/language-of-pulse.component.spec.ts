import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageOfPulseComponent } from './language-of-pulse.component';

describe('LanguageOfPulseComponent', () => {
  let component: LanguageOfPulseComponent;
  let fixture: ComponentFixture<LanguageOfPulseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageOfPulseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageOfPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
