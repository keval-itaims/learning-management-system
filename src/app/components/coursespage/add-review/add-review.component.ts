import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserReview } from 'src/app/classes/user-review';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  userReview: UserReview|any;
  @Input() courseId: number|any;
  user: User|any;
  reviewDescription: string = '';
  courseRating: number = 5;
  isLoading = false;

  constructor(private userService: UserService,
    private courseService: CourseService,
    private utility: UtilityService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser()
  }

  onClick(){
    if(!this.reviewDescription) return;
    this.isLoading = true;
    this.userReview = new UserReview();
  
    this.userReview.courseRating = this.courseRating;
    this.userReview.reviewDescription = this.reviewDescription;
    this.userReview.userId= this.user.user_id;
    this.userReview.courseId= this.courseId;

    this.courseService.addReview(this.userReview).subscribe(
      data => {
        this.isLoading = false;
        this.reviewDescription = '';
        this.utility.openSnackBar("Review added successfully!", "Dismiss")
      },
      error => {
        this.isLoading = false;
      } 
    )
  }

}
