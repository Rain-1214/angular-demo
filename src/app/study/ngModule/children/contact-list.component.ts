import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  providers: [ ContactService ]
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  deleteContact(index: number) {
    this.contactService.deleteContact(index);
  }
}
