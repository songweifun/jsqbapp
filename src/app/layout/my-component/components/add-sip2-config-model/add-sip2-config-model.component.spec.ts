import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSip2ConfigModelComponent } from './add-sip2-config-model.component';

describe('AddSip2ConfigModelComponent', () => {
  let component: AddSip2ConfigModelComponent;
  let fixture: ComponentFixture<AddSip2ConfigModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSip2ConfigModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSip2ConfigModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
