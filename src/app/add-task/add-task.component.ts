import { Component, OnInit, ViewChild } from '@angular/core';
import { BoardService } from '../shared/board.service';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(private boardService: BoardService, private router: Router) { }
  @ViewChild('taskForm') public taskForm: NgForm;
  ngOnInit(): void {
    
  }

  onSubmit()
  {
    let newTask = this.taskForm.value; 
    newTask['taskId'] = this.boardService.boardTasks.length;
    newTask['stateId'] = 0;
    
    this.boardService.boardTasks.push(newTask);
    this.boardService.taskCountChanged.next(this.boardService.boardTasks.length);
    this.router.navigate(['/dashboard']);
  }

}
