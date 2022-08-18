import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  public getContact () {
    // return JSON.parse(localStorage['contacts']);
    return JSON.parse(localStorage.getItem("contacts") !);
  }
}
