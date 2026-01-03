import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { WebsiteHeaderComponent } from "../../../common/website-header/website-header.component";
import { WebsiteFooterComponent } from "../../../common/website-footer/website-footer.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterOutlet, WebsiteHeaderComponent, WebsiteFooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {

    /* ================================
       SAFE: These are OK everywhere
    ================================= */
    this.title.setTitle(
      'Mavin Pharmaceuticals – Dermatology, Dry Skin & Hair Care Products'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Mavin Pharmaceuticals is a trusted dermatology company offering dry skin, anti-acne, hair care and therapeutic skincare products.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'Mavin, Mavin Pharmaceuticals, dermatology products, dry skin treatment, anti acne, hair care pharmaceutical'
    });

    this.meta.updateTag({ property: 'og:title', content: 'Mavin Pharmaceuticals' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    /* ================================
       DOM ACCESS → BROWSER ONLY
    ================================= */
    if (isPlatformBrowser(this.platformId)) {
      this.setCanonicalUrl('https://www.mavinpharma.com');
      this.addStructuredData();
    }
  }

  private setCanonicalUrl(url: string) {
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private addStructuredData() {
    // Prevent duplicate JSON-LD
    if (document.getElementById('mavin-schema')) return;

    const script = document.createElement('script');
    script.id = 'mavin-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Mavin Pharmaceuticals",
      "alternateName": "Mavin Pharma",
      "url": "https://www.mavinpharma.com",
      "logo": "https://www.mavinpharma.com/assets/logo.png",
      "description":
        "Mavin Pharmaceuticals provides dermatology, dry skin, anti-acne and hair care pharmaceutical products."
    });

    document.head.appendChild(script);
  }
}
