import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  providers: [ ContactService ]
})
export class ContactFormComponent implements OnInit {

  contact: Contact;
  @Input() username: string;
  form: FormGroup;

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder
  ) { }

  get name() {
    return this.form.get('username');
  }

  ngOnInit() {
    this.form = this.fb.group({
      'username': ['', Validators.required]
    });
    // this.form = new FormGroup({
    //   'username': new FormControl(this.username, [
    //     Validators.required,
    //   ])
    // });
  }

  saveContact() {
    this.contactService.saveContact(this.username);
  }

  reset() {
    this.form.reset();
  }

}
