import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  constructor(public contactService: ContactService) { }
  public full_name = "";
  public email = "";
  public phone_no = "";
  public address = "";
  public relationship = "";
  public contactArray:any = [];
  public message = "";
  public searchContact = "";
  // public contactArray:Array<Object> = [];

  ngOnInit(): void {
    this.contactArray = JSON.parse(localStorage.getItem("contacts") !);
    if (!this.contactArray) {
      this.contactArray = [];
    }
  }

  createContact () {
    let contactObj = {
      full_name: this.full_name,
      email: this.email,
      phone_no: this.phone_no,
      address: this.address,
      relationship: this.relationship
    }
    this.contactArray.push(contactObj);
    localStorage.setItem("contacts", JSON.stringify(this.contactArray));
    this.message = "Contact Added! Click View Contact to check the list of your contact!"
  }
}
