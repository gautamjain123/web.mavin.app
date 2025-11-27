import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mavin-contact',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './mavin-contact.component.html',
  styleUrl: './mavin-contact.component.scss'
})
export class MavinContactComponent {

}
