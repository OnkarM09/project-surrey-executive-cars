import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  facebookLink : string = 'https://www.facebook.com/surreyexecutivecars/';

  footerServicesArr : any[] = [
    {
      icon : 'bi-taxi-front',
      text : 'Local Taxi Services'
    },
    {
      icon : 'bi-airplane',
      text : 'Airport Transfers'
    },
    {
      icon : 'bi-person',
      text : 'Corporate Trasnsportation'
    },
    {
      icon : 'bi-calendar2-event',
      text : 'Event Transportation'
    },
  ];

}
