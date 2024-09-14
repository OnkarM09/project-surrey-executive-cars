import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'about-us', component : AboutUsComponent
  },
  {
    path : 'our-services', component : OurServicesComponent
  },
  {
    path : 'contact-us', component : ContactUsComponent
  },
  {
    path : 'home', redirectTo: ''
  },
  {
    path : '**', component : NotFoundComponent
  }
];
