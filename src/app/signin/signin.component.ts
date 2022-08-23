import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public contactService: ContactService, public router: Router) { }

  public email = "";
  public password = "";
  public userArray = []

  ngOnInit(): void {
    this.userArray = this.contactService.getUsers();
    
  }
  
  login() {
    let users = this.userArray.find((user:any) => user.email == this.email && user.password == this.password);
    if (users) {
      this.router.navigate(['/contacts'])
    } else {
      this.router.navigate(['/signup'])
    }

  }

}
