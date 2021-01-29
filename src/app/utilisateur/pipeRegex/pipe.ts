import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'regexPseudo'})
export class regexPseudo extends
  DatePipe implements PipeTransform {
  transform(value: string): any {
    let regex =  new RegExp('[a-z A-Z \- \d]');
    // value.replace();
    return regex;
  }
}
