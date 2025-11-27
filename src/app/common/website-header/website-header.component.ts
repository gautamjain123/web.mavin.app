import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-website-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './website-header.component.html',
  styleUrl: './website-header.component.scss'
})
export class WebsiteHeaderComponent {
    isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 30;
  }
  
}
