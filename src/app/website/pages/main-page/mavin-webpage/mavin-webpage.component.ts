import { Component } from '@angular/core';
import { MavinHeroSectionComponent } from "../../../components/mavin-hero-section/mavin-hero-section.component";
import { MavinShopByCategoryComponent } from "../../../components/mavin-shop-by-category/mavin-shop-by-category.component";
import { MavinFeaturesComponent } from "../../../components/mavin-features/mavin-features.component";
import { MavinAboutComponent } from "../../../components/mavin-about/mavin-about.component";
import { MavinContactComponent } from "../../../components/mavin-contact/mavin-contact.component";

@Component({
  selector: 'app-mavin-webpage',
  standalone: true,
  imports: [MavinHeroSectionComponent, MavinShopByCategoryComponent, MavinFeaturesComponent, MavinAboutComponent, MavinContactComponent],
  templateUrl: './mavin-webpage.component.html',
  styleUrl: './mavin-webpage.component.scss'
})
export class MavinWebpageComponent {

}
