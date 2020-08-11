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
  boardName = "";
  ngOnInit(): void {
    this.boardName = this.boardService.boardName;
  }

}
