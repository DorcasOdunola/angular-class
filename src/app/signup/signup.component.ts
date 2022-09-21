import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, public router: Router, public contactService: ContactService, public snackbar: MatSnackBar) { }

  public userForm:any = this.formBuilder.group({
    first_name: [''],
    last_name: [''],
    phone_no: [''],
    address: [''],
    email: [''],
    password: ['']
  })
  public usersArray:any = [];
  public message = "";

  ngOnInit(): void {
    if (this.contactService.getUsers()) {
      this.usersArray = this.contactService.getUsers();
    } else {
      this.usersArray = [];
    }
  } 

  signUp () {
    console.log(this.userForm.value);
    this.contactService.signupUser(this.userForm.value).subscribe(data => {
      if (data.success == true) {
        this.snackbar.open("Success", "Cancel")
      }
      console.log(data);
    })
    // for backend


    /// For localstorage
    // let checkExist = this.usersArray.findIndex((contact: any) => contact.email == this.userForm.value['email']);
    // console.log(checkExist);
    // if (checkExist == -1) {
    //   this.usersArray.push(this.userForm.value);
    //   localStorage.setItem("usersDetails", JSON.stringify(this.usersArray));
    //   localStorage.setItem("contact_user", JSON.stringify(this.userForm.value));
    //   this.router.navigate(['/contacts']);
    // } else {
    //   this.message = "This email has already been used. Thanks"
    // }
  }

}
