import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, public router: Router, public contactService: ContactService) { }

  public userForm:any = this.formBuilder.group({
    full_name: [''],
    phone_no: [''],
    address: [''],
    email: [''],
    password: ['']
  })
  public usersArray:any = [];

  ngOnInit(): void {
    if (this.contactService.getUsers()) {
      this.usersArray = this.contactService.getUsers();
    } else {
      this.usersArray = [];
    }
  } 

  signUp () {
   this.usersArray.push(this.userForm.value);
   localStorage.setItem("usersDetails", JSON.stringify(this.usersArray));
   localStorage.setItem("contact_user", JSON.stringify(this.userForm.value));
   this.router.navigate(['/contacts']);
  }

}
