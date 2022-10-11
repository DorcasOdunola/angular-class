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

  public addTodo (obj: any) {
    return this.httpClient.post<any>("http://127.0.0.1:8000/api/todo/create", obj)
  }


}
