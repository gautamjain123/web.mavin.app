import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MavinAboutComponent } from './mavin-about.component';

describe('MavinAboutComponent', () => {
  let component: MavinAboutComponent;
  let fixture: ComponentFixture<MavinAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MavinAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MavinAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
