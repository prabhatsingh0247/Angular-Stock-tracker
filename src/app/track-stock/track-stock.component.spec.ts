import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackStockComponent } from './track-stock.component';

describe('TrackStockComponent', () => {
  let component: TrackStockComponent;
  let fixture: ComponentFixture<TrackStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
