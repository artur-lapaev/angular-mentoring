import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationTransform'
})
export class DurationTransformPipe implements PipeTransform {

  // Use strong typing
  transform(value: any, ...args: any[]): any {
    if (!!value) {
      const mins = value % 60;
      const hours = (value - mins) / 60;
      return `${hours}h ${mins}min`;
    } else {
      return '';
    }

  }

}
