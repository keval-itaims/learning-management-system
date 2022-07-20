import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() refresh = new EventEmitter();

  constructor(
    private userService: UserService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    console.log("inside ng oninit",this.course)
    this.courseReviews = this.course.courseReviews;
  }
  removeReview(id: number) {
    this.isLoading = true;
    this.courseService.removeReview(id).subscribe(
      (_) => {
        this.isLoading = false;
        this.refresh.emit();
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }
}
