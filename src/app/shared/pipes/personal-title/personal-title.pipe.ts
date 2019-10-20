import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalTitle'
})
export class PersonalTitlePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let fullName = value;
    let title;
    if (args[0] === 'Female') {
      title = 'Ms. ';
    }
    else if (args[0] === 'Male') {
      title = 'Mr. ';
    }
    return title + fullName;
  }

}
