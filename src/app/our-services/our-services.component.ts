import { Component, OnInit } from '@angular/core';
import { Service } from '../Models';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule, CarouselModule, AnimateOnScrollModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})

export class OurServicesComponent implements OnInit {
  imgPath: string = '../../assets/Images/services/';
  servicesArr: Service[] = [];
  products: any[] = [];
  responsiveOptions: any | undefined;
  ngOnInit(): void {
    this.servicesArr = [
      {
        imgPath: `${this.imgPath}corporate-taxi.jpg`,
        headerTxt: 'Corporate Transfer',
        serviceTxt: `Our Corporate Transfer Service specialises in providing reliable and professional transportation for businesses and their clients. We understand the importance of puctuality and a polished image, which is why our experienced drivers ensure timely arrivals at meetings, conferences, and events.Book your executive transport today and elevate your trable experience.`,
        iconClassName: 'bi-briefcase-fill'
      },
      {
        imgPath: `${this.imgPath}airport-transfer.jpg`,
        headerTxt: 'Airport Transfer',
        serviceTxt: `Our Airport Transfer Service specialises in providing reliable and comforable transportation to and from the aiport. We understand the importance of punctuality, which is why our professional divers ensure you arrive on time, whther you're heading to catch a flight or returing home. Let us take care of your airport transfers and focus on what truly matters. Book your ride today and travel with ease.`,
        iconClassName: 'bi-airplane-fill'
      },
      {
        imgPath: `${this.imgPath}wedding-transfer.jpg`,
        headerTxt: 'Wedding Transfer',
        serviceTxt: 'Our Wedding Transfer Service specialises in making your special day as seamless and memorable as possible. We provide elegant and comfortable trasnportation for you and your guests, ensuring timely arrivals at the ceremony and reception venues. With a fleet of stylish vehicles and professional drivers, we priortise safety and luxury, allowing you to focus on celebrating your love. Book now for a stress-free experience.',
        iconClassName: 'bi-heart-fill'
      },
      {
        imgPath: `${this.imgPath}taxi-service.jpg`,
        headerTxt: 'Taxi Service',
        serviceTxt: 'Our Taxi Service speicialises in providing reliable and convenient transportation for your everyday needs. Whether you require a quick ride aross town or a longer journey, our professional drivers are committed to getting you to your destination safely and on time. Trust us for all your taxi needs and enjoy jussle-free journeys at competitive rates. Book your ride today and experience the difference.',
        iconClassName: 'bi-taxi-front-fill'
      }
    ];

    this.products = [
      {
      id: '1',
      name: 'Mercedes-Benz E-Class',
      image: `${this.imgPath}e-class.png`,
      peopleCount: 4,
      lugguageCount: 2,
    },
    {
      id: '3',
      name: 'Mercedes-Benz V-Class',
      image: `${this.imgPath}v-class.png`,
      peopleCount: 7,
      lugguageCount: 6,
    }];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}
