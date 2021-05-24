import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() color: string;
  @Output() buttonClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.buttonClicked.emit();
  }

}
