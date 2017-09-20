import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpsMapComponent } from './ips-map.component';

describe('IpsMapComponent', () => {
  let component: IpsMapComponent;
  let fixture: ComponentFixture<IpsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
