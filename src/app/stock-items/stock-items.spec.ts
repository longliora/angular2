import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItems } from './stock-items';

describe('StockItems', () => {
  let component: StockItems;
  let fixture: ComponentFixture<StockItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockItems],
    }).compileComponents();

    fixture = TestBed.createComponent(StockItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
