import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changecase'
})
export class ChangecasePipe implements PipeTransform {

  transform(allNames: any, ...args: unknown[]): unknown {
    console.log(allNames);
    let getNames = "";
    for (let i = 0; i < allNames.length; i++) {
      if (i % 2 == 0) {
        getNames += allNames[i].toUpperCase();
      } else {
        getNames += allNames[i].toLowerCase();
      }
    }
    return getNames
  }

}
