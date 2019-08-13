import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  // Use strong typing
  transform(array: any, ...args: []): any {

    // Sort mutates array!!!! (use slice before sort)
    array.sort((a, b) => {
      return a.time - b.time;
    });

    return array;
  }

}
