import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTaskButton: boolean=false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTaskButton():void{
    this.showAddTaskButton = !this.showAddTaskButton;
    this.subject.next(this.showAddTaskButton);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
