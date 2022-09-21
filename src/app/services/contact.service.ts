import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public itemDetails = new BehaviorSubject({});
  public baseUrl = environment.baseUrl;
  constructor(public httpClient: HttpClient) { }

  public getUsers () {
    return JSON.parse(localStorage['usersDetails']);
  } 

  public getContact () {
    // return JSON.parse(localStorage['contacts']);
    return JSON.parse(localStorage.getItem("contacts") !);
  }

  public signupUser (userObj:any) {
    return this.httpClient.post<any>(`${this.baseUrl}/signup.php`, userObj);
  }

  public loginUser (userObj:any) {
    return this.httpClient.post<any>("http://localhost/php-class/OOP/.php", userObj)
  }
}
