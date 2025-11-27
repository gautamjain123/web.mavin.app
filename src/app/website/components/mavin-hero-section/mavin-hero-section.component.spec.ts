import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MavinHeroSectionComponent } from './mavin-hero-section.component';

describe('MavinHeroSectionComponent', () => {
  let component: MavinHeroSectionComponent;
  let fixture: ComponentFixture<MavinHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MavinHeroSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MavinHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
