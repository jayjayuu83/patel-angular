import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatdate',
  standalone: false
})
export class FormatdatePipe implements PipeTransform {

  transform(value: string) {
    var datePipe = new DatePipe("en-US");
    value = datePipe.transform(value, 'dd-MMM-yyyy');
    return value;
  }
}
