import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTransmitComponent } from './my-transmit.component';

describe('MyTransmitComponent', () => {
  let component: MyTransmitComponent;
  let fixture: ComponentFixture<MyTransmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTransmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTransmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
