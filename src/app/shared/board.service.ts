import { Injectable } from '@angular/core';
import {Task} from "./task.model";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  
  constructor() {  
    this.taskCountChanged = new Subject<string>();
  }

  public taskCountChanged;

  private name: string = "Practice Angular";

  private states: string[] = ['To Do', 'In Progress', 'Under Review', 'Done'];

  private tasks: Task[] =[{
    taskId: 0,
    type: 'Story',
    title: 'Bhuvan',
    description: 'Hello World I am your friend!',
    stateId: 0,
    assignee: 'Robert Nilson',
  },
  {
    taskId: 1,
    type: 'Epic',
    title: 'Max',
    description: 'Hello World I am your enemy!',
    stateId : 0,
    assignee: 'Ronnie Jenson'
  },
  {
    taskId: 2,
    type: 'Task',
    title: 'John',
    description: 'Hello World I am your Boss!',
    stateId : 0,
    assignee: 'Odd Fagerheim'
  }];

  get boardName(): string
  {
    return this.name;
  }

  get boardStates(): string[]
  {
    return this.states;
  }

  get boardTasks(): Task[]
  {
    return this.tasks;
  }

  set boardTasks(tasks: Task[])
  {
    this.tasks = tasks;
    this.taskCountChanged.next(this.tasks.length);
  }

  getBoardTask(taskId) : Task
  {
    let taskIndex = this.boardTasks.findIndex((obj => obj.taskId == taskId))
    return this.boardTasks[taskIndex];
  }

  deleteTask(taskId)
  {
    let taskIndex = this.boardTasks.findIndex((obj => obj.taskId == taskId));
    this.boardTasks.splice(taskIndex, 1);
    let abc = [...this.boardTasks];
    this.boardTasks = abc;
    this.taskCountChanged.next(this.boardTasks.length);
  }
  
  updateBoardTask(task: Task, taskId: number)
  {
    let taskIndex = this.boardTasks.findIndex((obj => obj.taskId == taskId));
    let oldTask = this.boardTasks[taskIndex];
    let newTask = {...oldTask, ...task};
    this.boardTasks[taskIndex] = newTask;
  }
}
