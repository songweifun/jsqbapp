import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApplyComponent } from './new-apply.component';

describe('NewApplyComponent', () => {
  let component: NewApplyComponent;
  let fixture: ComponentFixture<NewApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
