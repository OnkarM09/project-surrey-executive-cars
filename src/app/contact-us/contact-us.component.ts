import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { EditorModule } from 'primeng/editor';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, RecaptchaFormsModule, RecaptchaModule, EditorModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  captcha : string | null = '';
  email : string = 'test1@email.com';
  message: string | undefined;

  constructor(){
  }

  resolvedCaptcha(captcharesponse : string | null){
    this.captcha = captcharesponse;
    console.log(this.captcha);
  }

  sendEmail(e:Event){
    emailjs
      .sendForm('service_9za1jud', 'template_q50wuiy', e.target as HTMLFormElement, {
        publicKey: 'C7GiovA5xz-EE_JGH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }

}
