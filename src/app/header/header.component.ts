import { Component, OnInit } from '@angular/core';
import { BoardService } from '../shared/board.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public boardService : BoardService) { }
  appName = "Kanban Board";
  boardName;
  boardTaskCount;
  ngOnInit(): void {
    this.boardName = this.boardService.boardName;
    this.boardTaskCount = this.boardService.boardTasks.length;
    
    this.boardService.taskCountChanged.subscribe((data) => {
      this.boardTaskCount = data;
    });
  }

}
