import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BoardService } from '../shared/board.service';
import { Task } from '../shared/task.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  @ViewChild('taskForm') public taskForm: NgForm;
  boardTask: Task;
  taskIndex: number;
  constructor(private boardService: BoardService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.taskIndex = this.boardService.boardTasks.findIndex((obj => obj.taskId == this.route.snapshot.queryParams.taskId))
   this.boardTask  = this.boardService.boardTasks[this.taskIndex];
  }

  onSubmit()
  {
    let task =  this.boardService.boardTasks[this.taskIndex];
    let newTask = {...task, ...this.taskForm.value};
    this.boardService.boardTasks[this.route.snapshot.queryParams.taskId] = newTask;
    
    this.router.navigate(['/dashboard']);
  }

}
