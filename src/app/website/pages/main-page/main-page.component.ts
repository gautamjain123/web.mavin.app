import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { WebsiteHeaderComponent } from "../../../common/website-header/website-header.component";
import { WebsiteFooterComponent } from "../../../common/website-footer/website-footer.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterOutlet, WebsiteHeaderComponent, WebsiteFooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
