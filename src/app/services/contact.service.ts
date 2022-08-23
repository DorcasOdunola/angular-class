import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  public getUsers () {
    return JSON.parse(localStorage['usersDetails']);
  } 

  public getContact () {
    // return JSON.parse(localStorage['contacts']);
    return JSON.parse(localStorage.getItem("contacts") !);
  }
}
