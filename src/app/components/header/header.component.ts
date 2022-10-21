import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker'
  constructor() { }

  // initialize lifecycle method, put things relative to initialization here
  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log('ToggleAddTask')
  }

}
