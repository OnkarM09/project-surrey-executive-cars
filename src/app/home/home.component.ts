import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { SafetyInfo } from '../Models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  safetyInfoArr: SafetyInfo[] = [];
  iconPath : string  = '../../assets/Images/icons/';

  constructor(private router : Router){
  }

  ngOnInit(): void {
    this.safetyInfoArr = [
      {
        imagePath : `${this.iconPath}car-insurance.png`,
        headerTxt : 'Safety First',
        infoTxt : 'Your safety is our top priority. We implement rigorous safety protocols to ensure a secure and comfortable ride every time.',
        altTxt : 'car-insurance.png'
      },
      {
        imagePath : `${this.iconPath}money.png`,
        headerTxt : 'Reasonable Rates',
        infoTxt : 'We pride ourselves on providing affordable taxi services without compromising on quality.',
        altTxt : 'money.png'
      },
      {
        imagePath : `${this.iconPath}bus.png`,
        headerTxt : 'Largest Fleet',
        infoTxt : 'We operate a large fleet of well-maintained vehicles to meet all your transportation needs.',
        altTxt : 'bus.png'
      },
      {
        imagePath : `${this.iconPath}24-7.png`,
        headerTxt : '24/7 Service',
        infoTxt : 'We are proud to offer 24/7 taxi service to ensure that you have reliable transportation whenever you need it.',
        altTxt : '24-7.png'
      },
    ];
  }

  redirectToContanctPage() :void{
    this.router.navigate(['/contact-us']);
  }
}
