import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  public contactArray:any = [];
  public full_name = "";
  public email = "";
  public id = "";

  ngOnInit(): void {
    this.contactArray = JSON.parse(localStorage.getItem('contacts') !);
    if (!this.contactArray) {
      this.contactArray = [];
    }
    // this.contactArray = JSON.parse(localStorage['contacts']);
  }

  edit (id: any, contact: any) {
    this.full_name = contact.full_name;
    this.email = contact.email;
    this.id = id;
  }

  update () {
    this.contactArray.map((contact: any, index: any)  => {
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
