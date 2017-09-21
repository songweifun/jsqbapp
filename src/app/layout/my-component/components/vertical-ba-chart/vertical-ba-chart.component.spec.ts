import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBaChartComponent } from './vertical-ba-chart.component';

describe('VerticalBaChartComponent', () => {
  let component: VerticalBaChartComponent;
  let fixture: ComponentFixture<VerticalBaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalBaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalBaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
