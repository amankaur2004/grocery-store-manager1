import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGroceryComponent } from './app-grocery.component';

describe('AppGroceryComponent', () => {
  let component: AppGroceryComponent;
  let fixture: ComponentFixture<AppGroceryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppGroceryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
