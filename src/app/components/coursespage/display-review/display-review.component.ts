import { Component, OnInit, Input } from '@angular/core';
import { CourseResponse } from 'src/app/classes/course-response';
import { User } from 'src/app/classes/user';
import { UserReview } from 'src/app/classes/user-review';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-review',
  templateUrl: './display-review.component.html',
  styleUrls: ['./display-review.component.css'],
})
export class DisplayReviewComponent implements OnInit {
  isLoading = false;
  @Input() course: any | CourseResponse;
  courseReviews: UserReview[] | any;
  user: User | any;
  constructor(
    private userService: UserService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.courseReviews = this.course.courseReviews;
    console.log(this.courseReviews);
  }
  removeReview(id: number) {
    this.isLoading = true;
    this.courseService.removeReview(id).subscribe(
      (_) => {
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }
}
