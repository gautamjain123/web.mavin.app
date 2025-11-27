import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MavinWebpageComponent } from './mavin-webpage.component';

describe('MavinWebpageComponent', () => {
  let component: MavinWebpageComponent;
  let fixture: ComponentFixture<MavinWebpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MavinWebpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MavinWebpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
