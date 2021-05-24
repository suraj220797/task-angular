import { Task } from './../../Task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task : Task;
  @Output() deleteTaskEvent : EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminderEvent : EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: Task){
    this.deleteTaskEvent.emit(task);
  }

  toggleReminder(task: Task){
    this.toggleReminderEvent.emit(task);
  }

}
