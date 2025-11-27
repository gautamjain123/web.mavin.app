import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MavinContactComponent } from './mavin-contact.component';

describe('MavinContactComponent', () => {
  let component: MavinContactComponent;
  let fixture: ComponentFixture<MavinContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MavinContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MavinContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
