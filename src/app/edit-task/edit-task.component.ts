import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
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
  editTaskForm: FormGroup;
  constructor(private boardService: BoardService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.queryParams.taskId;
    this.boardTask = this.boardService.getBoardTask(this.taskId);
    this.editTaskForm = new FormGroup({
      'type': new FormControl(this.boardTask.type),
      'title': new FormControl(this.boardTask.title),
      'description': new FormControl(this.boardTask.description),
      'assignee': new FormControl(this.boardTask.assignee)
    });
  }

  onSubmit()
  {
    this.boardService.updateBoardTask(this.editTaskForm.value, this.taskId);
    this.router.navigate(['/dashboard']);
  }

}
