import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) { }

  public first_name = "";
  public last_name = "";
  public email = "";
  public phone_no = "";

  public userForm:any = this.formBuilder.group({
    first_name: ['', [Validators.required, Validators.minLength(5)]],
    last_name: [''],
    phone_no: ['', this.validate],
    email: [''],
  })

  validate(control: AbstractControl): {[key: string]: any} | null {
    if (control.value) {
      if (control.value.indexOf("+234") == -1) {
        return {noCountryCode: true}
      }
    }
    console.log(control.value.indexOf("+234"))
    return null
  }


  ngOnInit(): void {
  }

}
