import { Component } from '@angular/core';

@Component({
  selector: 'app-mavin-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './mavin-hero-section.component.html',
  styleUrl: './mavin-hero-section.component.scss'
})
export class MavinHeroSectionComponent {
  scrollToCategory() {
  const section = document.getElementById('shop-category');
  const yOffset = -80; // Adjust based on your header height

  const y = section!.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });
}

}
