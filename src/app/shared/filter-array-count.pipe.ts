import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.model';

@Pipe({
  name: 'filterArrayCount'
})
export class FilterArrayCountPipe implements PipeTransform {

  transform(values: Task[], state: number): number{
    let newArray: Task[] = [];
    for(let value of values)
    {
      if(value.stateId === state)
      {
        newArray.push(value);
      }
    }
    return newArray.length;
  }

}
