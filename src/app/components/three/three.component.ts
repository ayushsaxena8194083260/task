import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  @Input() message:string; 

  constructor() { }

  ngOnInit() {
  }

}
