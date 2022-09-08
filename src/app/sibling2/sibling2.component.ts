import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  constructor(public contactService: ContactService) { }

  public itemDetails:any = {}
  ngOnInit(): void {
    this.getItemDetails();
  }

  getItemDetails () {
    this.contactService.itemDetails.subscribe(item => {
      this.itemDetails = item;
    })
  }

}
