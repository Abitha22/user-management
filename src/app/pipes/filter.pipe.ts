import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value, args): any {
    // tslint:disable-next-line:prefer-const
    let filterData;
    for (let i = 0; i < value.length; i++) {
      if (value[i].done === false) {
        filterData.push(filterData[i]);
      }
    }

    return value;
  }

}
