import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { EditorModule } from 'primeng/editor';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { ButtonModule } from 'primeng/button';
import { Person } from '../Models';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, RecaptchaFormsModule, RecaptchaModule, EditorModule, ButtonModule, ToastModule, AnimateOnScrollModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  providers: [MessageService]
})
export class ContactUsComponent {

  captcha: string | null = '';
  email: string = 'test1@email.com';
  message: string | undefined;
  contactPerson: Person = {
    from_name: '',
    phone_number: null,
    from_email: '',
    message: ''
  }

  @ViewChild("contactUsForm") contactForm!: NgForm;

  constructor(private msgServie: MessageService,
    private router: Router
  ) {
  }

  resolvedCaptcha(captcharesponse: string | null) {
    this.captcha = captcharesponse;
  }

  sendEmail(e: Event) {
    emailjs
      .sendForm('service_9za1jud', 'template_q50wuiy', e.target as HTMLFormElement, {
        publicKey: 'C7GiovA5xz-EE_JGH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          this.contactForm.reset();
          grecaptcha.reset();
          this.router.navigate(['thank-you']);
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          if (error.text == "reCAPTCHA: The g-recaptcha-response parameter not found") {
            this.msgServie.add({ severity: 'contrast', summary: 'Error', detail: 'Please verify that you are not a robot!' });
          }
        },
      );
  }
}
