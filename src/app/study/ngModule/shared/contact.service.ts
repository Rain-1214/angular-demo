import { Injectable, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { contacts } from './contact-data';

@Injectable()
export class ContactService {

  getContacts(): Contact[] {
    return contacts;
  }

  getContact(id: (number | string)): Contact {
    return contacts.find(e => e.id === id);
  }

  saveContact(username: string): void {
    let oldId = contacts[contacts.length - 1].id;
    const newContact = new Contact(++oldId, username);
    contacts.push(newContact);
  }

  deleteContact(index: number): void {
    contacts.splice(index, 1);
  }

}
