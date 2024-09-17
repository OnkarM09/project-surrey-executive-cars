import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaCommonModule } from 'ng-recaptcha/lib/recaptcha-common.module';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, RecaptchaFormsModule, RecaptchaModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  captcha : string | null = '';
  email : string = 'test1@email.com';

  resolvedCaptcha(captcharesponse : string | null){
    this.captcha = captcharesponse;
    console.log(this.captcha);
  }

}
