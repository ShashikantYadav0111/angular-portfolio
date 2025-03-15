import { Component, inject } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  phoneNumber='+91-8527094016';
  email='yadavshashikant43@gmail.com';

  contactService = inject(ContactService)

  contactForm : FormGroup
  constructor(private fb:FormBuilder,private firestore:Firestore){
    this.contactForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required,],
      message:['',Validators.required],
    })
  }

  onSubmit(){
    if(this.contactForm.invalid){
      console.log('Invalid Form');
      return;
    }

    console.log('Valid Form');
    console.log(this.contactForm.value);
    this.contactService.addQuery(this.contactForm.value)
    this.contactForm.reset()
  }
}
