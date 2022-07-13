import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserReview } from 'src/app/classes/user-review';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-review',
  templateUrl: './display-review.component.html',
  styleUrls: ['./display-review.component.css']
})
export class DisplayReviewComponent implements OnInit {
  @Input() courseReviews: any|UserReview[];
  user: User|any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

}
