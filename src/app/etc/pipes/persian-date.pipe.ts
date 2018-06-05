import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'persianDate'
})
export class PersianDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let format = 'YYYY/MM/DD';
    const momentDate = moment(value);
    if (args) {
      format = args;
    }
    return momentDate.locale('fa').format(format);
  }

}
