import { Component, OnInit } from '@angular/core';
import { BoardService } from '../shared/board.service';
import { Task } from '../shared/task.model';

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

}
