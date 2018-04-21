import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sip2ConfigListComponent } from './sip2-config-list.component';

describe('Sip2ConfigListComponent', () => {
  let component: Sip2ConfigListComponent;
  let fixture: ComponentFixture<Sip2ConfigListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sip2ConfigListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sip2ConfigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
