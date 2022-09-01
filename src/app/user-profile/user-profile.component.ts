import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute, public apiService: ApiService) { }

  public user:any = {};
  ngOnInit(): void {
    let login = this.actRoute.snapshot.params['name'];
    this.apiService.getUserPrf(login).subscribe(data => {
      this.user = data;
    })

  }

}
