import { Subscription } from 'rxjs';
import { UiService } from './../../services/ui.service';
import { Task } from './../../Task';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text: string;
  day: string;
  reminder: boolean = false;
  @Output() addTaskEvent : EventEmitter<Task> = new EventEmitter();
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = uiService.onToggle().subscribe(value => {
      this.showAddTask = value;
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('Please Add Task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.addTaskEvent.emit(newTask);

    this.text='';
    this.day = '';
    this.reminder= false;
  }
}
