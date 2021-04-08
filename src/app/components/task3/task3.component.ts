import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  public text : string;
  constructor() { }

  ngOnInit() {
  }

  onChange(UpdatedValue : string) :void
  {
    this.text = UpdatedValue;
  }
}
