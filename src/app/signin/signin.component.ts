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
    //For online class
    // let userObj = {email: this.email, password: this.password};
    // this.contactService.login(userObj).subscribe(data => {
    //   console.log(data);
    // })


    // for physical class
    let userObj = {email: this.email, password: this.password};
    this.contactService.loginUser(userObj).subscribe(data => {
      console.log(data);
      if (data.success == true) {
        localStorage['users_jwt'] = data.jwt;
        this.router.navigate(['/dashboard']);
      }
    })

    // let users = this.userArray.find((user:any) => user.email == this.email && user.password == this.password);
    // if (users) {
    //   localStorage.setItem("contact_user", JSON.stringify(users));
    //   this.router.navigate(['/contacts'])
    // } else {
    //   this.router.navigate(['/signup'])
    // }

  }

}
