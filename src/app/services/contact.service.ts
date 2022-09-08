import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public itemDetails = new BehaviorSubject({});

  constructor() { }

  public getUsers () {
    return JSON.parse(localStorage['usersDetails']);
  } 

  public getContact () {
    // return JSON.parse(localStorage['contacts']);
    return JSON.parse(localStorage.getItem("contacts") !);
  }
}
