import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() sendToChild = "";
  @Output() sendEvent = new EventEmitter();
  public msgToParent = "";


  constructor() { }

  ngOnInit(): void {

  }

  emitToParent () {
    this.sendEvent.emit(this.msgToParent)
  }

}
