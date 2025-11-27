import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MavinShopByCategoryComponent } from './mavin-shop-by-category.component';

describe('MavinShopByCategoryComponent', () => {
  let component: MavinShopByCategoryComponent;
  let fixture: ComponentFixture<MavinShopByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MavinShopByCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MavinShopByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
