import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  public msgToChild = "";
  public msgFromChild = "";

  ngOnInit(): void {
  }

  receiveEmit(msg:any) {
    this.msgFromChild = msg;
  }

}
