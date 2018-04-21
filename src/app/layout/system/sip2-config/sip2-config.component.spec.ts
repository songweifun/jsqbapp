import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sip2ConfigComponent } from './sip2-config.component';

describe('Sip2ConfigComponent', () => {
  let component: Sip2ConfigComponent;
  let fixture: ComponentFixture<Sip2ConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sip2ConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sip2ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
