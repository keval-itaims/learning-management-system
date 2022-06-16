import { Component, OnInit } from '@angular/core';
import { reviews } from './reviews';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  reviews = reviews;
  constructor() { }

  ngOnInit(): void {
  }

}
