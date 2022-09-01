import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  public usersArray:any = [];

  ngOnInit(): void {
    this.getGithubUsers();
  }

  getGithubUsers () {
    this.apiService.getGithubUsers().subscribe(data => {
        this.usersArray = data;
    }, (error) => {
      console.log(error);
    });
  }



}
