import { Component, OnInit } from '@angular/core';
import { BoardService } from '../shared/board.service';
import { Task } from '../shared/task.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public boardService: BoardService) { }
  boardStates: string[];
  boardTasks: Task[];

  ngOnInit(): void {
    this.boardStates = this.boardService.boardStates;
    this.boardTasks = this.boardService.boardTasks;
  }

  drop(event: CdkDragDrop<string[]>) {
    debugger;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        let stateId = +event.container.id.split('-')[1];
        event.item.data.stateId = stateId;

        let updatedBoardTasks = this.boardService.boardTasks.filter((task)=> {
          let newArray: Task[] = [];
          if(task.taskId === event.item.data.taskId)
          { 
              task.stateId = stateId;
          }
          newArray.push(task);
          return newArray;
        });
        this.boardService.boardTasks = updatedBoardTasks;
    }
  }

}
