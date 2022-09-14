import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.css']
})
export class BottomsheetComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data:any) { }

  ngOnInit(): void {
    
  }

}
