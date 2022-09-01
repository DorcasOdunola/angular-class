import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient: HttpClient) { }

  public getGithubUsers () {
    return this.httpClient.get("https://api.github.com/users");
  }

  public getUserPrf (login: any) {
    return this.httpClient.get(`https://api.github.com/users/${login}`);
  }

}
