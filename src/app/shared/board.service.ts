import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  private name: string = "Practice Angular";

  private states: string[] = ['To Do', 'In Progress', 'Under Review', 'Done'];

  get boardName(): string
  {
    return this.name;
  }

  get boardStates(): string[]
  {
    return this.states;
  }
}
