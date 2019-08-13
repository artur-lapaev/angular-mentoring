import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: any, ...args: []): any {

    array.sort((a, b) => {
      return a.time - b.time;
    });

    return array;
  }

}
