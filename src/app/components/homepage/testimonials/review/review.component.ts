import { Component, Input, OnInit } from '@angular/core';
import {faStar, faQuoteRight} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() review: any;
  star = faStar;
  quote = faQuoteRight;
  constructor() { }

  ngOnInit(): void {
  }

}
