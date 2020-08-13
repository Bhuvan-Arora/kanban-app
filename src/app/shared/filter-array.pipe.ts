import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.model';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {
  transform(values: Task[], state: number): unknown {
    let newArray: Task[] = [];
    for(let value of values)
    {
      if(value.stateId === state)
      {
        newArray.push(value);
      }
    }
    return newArray;
  }

}
