import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MavinFeaturesComponent } from './mavin-features.component';

describe('MavinFeaturesComponent', () => {
  let component: MavinFeaturesComponent;
  let fixture: ComponentFixture<MavinFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MavinFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MavinFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
