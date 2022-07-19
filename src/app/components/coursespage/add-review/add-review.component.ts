import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserReview } from 'src/app/classes/user-review';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';
import { UtilityService } from 'src/app/services/utility.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent implements OnInit {
  star = faStar;
  userReview: UserReview | any;
  @Input() courseId: number | any;
  user: User | any;
  reviewDescription: string = '';
  courseRating: number = 5;
  isLoading = false;
  @Output() refresh = new EventEmitter();

  constructor(
    private userService: UserService,
    private courseService: CourseService,
    private utility: UtilityService
  ) {
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {}

  onClick() {
    if (!this.reviewDescription) return;
    this.isLoading = true;
    this.userReview = new UserReview();

    this.userReview.courseRating = this.courseRating;
    this.userReview.reviewDescription = this.reviewDescription;
    this.userReview.userId = this.user.user_id;
    this.userReview.courseId = this.courseId;

    this.courseService.addReview(this.userReview).subscribe(
      (data) => {
        this.isLoading = false;
        this.reviewDescription = '';
        this.courseRating = 5;
        this.utility.openSnackBar('Review submitted successfully!', 'Dismiss');
        this.refresh.emit();
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }
}
