import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.model';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(values: Task[], ...args: unknown[]): number {
    return values.length;
  }

}
