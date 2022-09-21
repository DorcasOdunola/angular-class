import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { FastField } from 'formik';

export interface contactInterface {
  full_name: String,
  email: String,
  phone_no: Number,
  address: String,
  relationship: String
}


export interface indexInt {
  index: number
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute) { }

  public contactArray:any = [];
  public full_name = "";
  public email = "";
  public id = "";
  public contact:contactInterface = {
      full_name: '',
      email: '',
      phone_no: 1,
      address: '',
      relationship: ''
    };
  // public checked = false;

  // 

  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id'];
    let contactArray = JSON.parse(localStorage.getItem('contacts') !);
    this.contact = contactArray.find((contact: contactInterface, index: indexInt) => index == id);
    console.log(this.contact);

  }

  edit (id: any, contact: any) {
    this.full_name = contact.full_name;
    this.email = contact.email;
    this.id = id;
  }

  update () {
    this.contactArray.map((contact: object, index: any)  => {
      if (index == this.id) {
       this.contactArray[index].full_name = this.full_name;
       this.contactArray[index].email = this.email;
      }
    })
    console.log(this.contactArray);
    localStorage.setItem("contacts", JSON.stringify(this.contactArray));
    this.ngOnInit();
  }

  delete (id:any) {

  }

}
