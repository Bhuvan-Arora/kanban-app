import { Component, OnInit, Input, Output } from '@angular/core';
import { Task } from '../shared/task.model';
import { BoardService } from '../shared/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(private boardService: BoardService, private router: Router) { }

  @Input('cdkDragData') boardTask: Task
  @Input() i: number

  ngOnInit(): void {
  }

  onEdit(e)
  {
    let taskId = e.target.closest('.board-task').id;
    this.router.navigate(['/editTask'], { queryParams: { taskId: taskId } });
  }

  onDelete(e)
  {
    let taskId = e.target.closest('.board-task').id;
    this.boardService.deleteTask(taskId);
  }

}
