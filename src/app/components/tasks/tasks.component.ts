import { TaskService } from './../../services/task.service';
import { Task } from './../../Task';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks : Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks
      });
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task)
      .subscribe(()=>{
        this.tasks = this.tasks.filter(t => {
          return t.id !== task.id;
        })
      })
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    //console.log(task.reminder);

    this.taskService.toggleReminder(task)
      .subscribe();
  }

  onAddTask(task: Task){
   this.taskService.addTask(task).subscribe(task => {
     this.tasks.push(task);
   })
  }


}
