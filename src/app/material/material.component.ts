import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet} from '@angular/material/bottom-sheet';
import { BottomsheetComponent } from '../bottomsheet/bottomsheet.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor(public snackbar: MatSnackBar, public bottomSheet: MatBottomSheet, public apiService: ApiService) { }

  public duration:any = "5000";
  public todo_name = "";
  public todo_desc = "";

  ngOnInit(): void {
    // this.snackbar.open("Hello");
    this.openSnackBar();
  }

  openSnackBar() {
    this.snackbar.open("Hi", "Close", {
      duration: 5000
    });
  }

  openBottomSheet () {
    this.bottomSheet.open(BottomsheetComponent, {
      data: {message: "Are you sure you want to delete?"}
    })
  }

  addTodo () {
    let todoObj = {todo_name: this.todo_name, todo_desc: this.todo_desc};
    this.apiService.addTodo(todoObj).subscribe(data => {
      console.log(data);
    })

  }
}
