import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from "./header/header.component";
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, HeaderComponent, HeaderComponent, CarouselModule, TagModule, ScrollTopModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  products: undefined;

  responsiveOptions: any[] | undefined;
}
