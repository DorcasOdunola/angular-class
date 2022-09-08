import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactfilter'
})
export class ContactfilterPipe implements PipeTransform {

  transform(contacts: any, searchText: any): any {
    if (!searchText) return contacts;
    searchText = searchText.toLowerCase();
    let filteredContact = contacts.filter((contact: any) => contact.full_name.toLowerCase().includes(searchText) ||
    contact.email.toLowerCase().includes(searchText) || 
    contact.relationship.toLowerCase().includes(searchText));
    return filteredContact;


  }

}
