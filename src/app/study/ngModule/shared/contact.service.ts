import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable()
export class ContactService {

  getContacts(): Contact[]

}
