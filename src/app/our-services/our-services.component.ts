import { Component, OnInit } from '@angular/core';
import { Service } from '../Models';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule, CarouselModule, AnimateOnScrollModule, AccordionModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})

export class OurServicesComponent implements OnInit {
  imgPath: string = '../../assets/Images/services/';
  servicesArr: Service[] = [];
  products: any[] = [];
  faqsArr : any[] = [];
  responsiveOptions: any | undefined;
  ngOnInit(): void {
    this.servicesArr = [
      {
        imgPath: `${this.imgPath}corporate-taxi.jpg`,
        headerTxt: 'Corporate Transfer',
        serviceTxt: `Our Corporate Transfer Service specialises in providing reliable and professional transportation for businesses and their clients. We understand the importance of puctuality and a polished image, which is why our experienced drivers ensure timely arrivals at meetings, conferences, and events. Book your executive transport today and elevate your travel experience.`,
        iconClassName: 'bi-briefcase-fill'
      },
      {
        imgPath: `${this.imgPath}airport-transfer.jpg`,
        headerTxt: 'Airport Transfer',
        serviceTxt: `Our Airport Transfer Service specialises in providing reliable and comfortable transportation to and from the airport. We understand the importance of punctuality, which is why our professional divers ensure you arrive on time, whether you're heading to catch a flight or returning home. Let us take care of your airport transfers and focus on what truly matters. Book your ride today and travel with ease.`,
        iconClassName: 'bi-airplane-fill'
      },
      {
        imgPath: `${this.imgPath}wedding-transfer.jpg`,
        headerTxt: 'Wedding Transfer',
        serviceTxt: 'Our Wedding Transfer Service specialises in making your special day as seamless and memorable as possible. We provide elegant and comfortable transportation for you and your guests, ensuring timely arrivals at the ceremony and reception venues. With a fleet of stylish vehicles and professional drivers, we prioritise safety and luxury, allowing you to focus on celebrating your love. Book now for a stress-free experience.',
        iconClassName: 'bi-heart-fill'
      },
      {
        imgPath: `${this.imgPath}taxi-service.jpg`,
        headerTxt: 'Taxi Service',
        serviceTxt: 'Our Taxi Service speicialises in providing reliable and convenient transportation for your everyday needs. Whether you require a quick ride across town or a longer journey, our professional drivers are committed to getting you to your destination safely and on time. Trust us for all your taxi needs and enjoy hassle-free journeys at competitive rates. Book your ride today and experience the difference.',
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

    this.faqsArr = [
      {
        header : "How do I book a ride?",
        body : "You can book a ride through our website by enetering the deatails and submitting the form or calling 01252418041."
      },
      {
        header : `What payment methods do you accept?`,
        body : `We accept credit/debit cards, digital wallets, and cash, depending on your location.`
      },
      {
        header : `Can I schedule ride in advance?`,
        body : `Yes, you can schedule a ride up to 30 days in advance using our website.`
      },
      {
        header : `What should I do if I left something in the car?`,
        body : `Contact our customer service immediately with your ride details, and we'll help you retrieve your item.`
      },
      {
        header : `Are drivers insured?`,
        body : `Yes, all our drivers are insured and undergo background checks for safety.`
      },
      {
        header : `What if I need to cancel my ride?`,
        body : `You can cancel your ride through calling 01252418041 or submitting a request through contact form. Cancellation fees may apply depending on the timing.`
      }
    ];
  }

}
