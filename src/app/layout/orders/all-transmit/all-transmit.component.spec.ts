import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTransmitComponent } from './all-transmit.component';

describe('AllTransmitComponent', () => {
  let component: AllTransmitComponent;
  let fixture: ComponentFixture<AllTransmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTransmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTransmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
