import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public itemDetails = new BehaviorSubject({});
  //physical class
  public baseUrl = environment.baseUrl;

  //virtual class
  public base_url = environment.baseUrlVir
  constructor(public httpClient: HttpClient) { }

  public getUsers () {
    return JSON.parse(localStorage['usersDetails']);
  } 

  public getContact () {
    // return JSON.parse(localStorage['contacts']);
    return JSON.parse(localStorage.getItem("contacts") !);
  }

  public signUp (userObj: any) {
    return this.httpClient.post<any>(`${this.base_url}/createUser.php`, userObj)
  }

  public login (userObj: any) {
    return this.httpClient.post<any>(`${this.base_url}/login.php`, userObj)
  }

  public user_dashboard () {
    return this.httpClient.get<any>(`${this.base_url}/dashboard.php`);
  }


  // For physical
  public signupUser (userObj:any) {
    return this.httpClient.post<any>(`${this.baseUrl}/signup.php`, userObj);
  }

  public loginUser (userObj:any) {
    return this.httpClient.post<any>(`${this.baseUrl}/signin.php`, userObj)
  }

  public dashboard () {
    return this.httpClient.get<any>(`${this.baseUrl}/dashboard.php`);
  }


}
