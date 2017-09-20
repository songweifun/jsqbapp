import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpmapingComponent } from './ipmaping.component';

describe('IpmapingComponent', () => {
  let component: IpmapingComponent;
  let fixture: ComponentFixture<IpmapingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpmapingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpmapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
