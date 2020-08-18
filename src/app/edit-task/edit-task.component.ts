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
  taskId: number;
  constructor(private boardService: BoardService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.queryParams.taskId;
    this.boardTask = this.boardService.getBoardTask(this.taskId);
  }

  onSubmit()
  {
    debugger;
    this.boardService.updateBoardTask(this.taskForm.value, this.taskId);
    this.router.navigate(['/dashboard']);
  }

}
