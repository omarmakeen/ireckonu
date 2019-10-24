import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephoneCode'
})
export class TelephoneCodePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return "(+31) " + value.split('-').join('.');
  }

}
