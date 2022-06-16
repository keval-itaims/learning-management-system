import { Component, OnInit } from '@angular/core';
import { instructors } from './instructors';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {
  instructors = instructors;
  constructor() { }

  ngOnInit(): void {
  }

}
