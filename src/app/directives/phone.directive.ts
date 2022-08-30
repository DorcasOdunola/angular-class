import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPhone]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true}
  ]
})
export class PhoneDirective {

  constructor() { }
  validate(control: AbstractControl): {[key: string]: any} | null {
    if (control.value) {
      if (control.value.toString().indexOf("+234") == -1) {
        return {noCountryCode: true}
      }
    }
    return null
  }

}
