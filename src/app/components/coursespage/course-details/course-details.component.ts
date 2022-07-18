import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faStar, faClock, faInr} from '@fortawesome/free-solid-svg-icons';
import { CourseResponse } from 'src/app/classes/course-response';
import { User } from 'src/app/classes/user';
import { UserReview } from 'src/app/classes/user-review';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  clock = faClock;
  star = faStar;
  inr = faInr;
  isEnrolled = false;
  isLoading = false;
  course: CourseResponse | any;
  courseReviews: UserReview[] | any;
  user: User | any;
  showModal = false;
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.courseService.getSingleCourse(+this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.isLoading = false;
        this.course = data;
        this.courseReviews = this.course.courseReviews;
        this.user = this.userService.getUser();
        if(!!this.user) return;
        this.user.myCourses.forEach((item:number) => {
          if(item === this.course.courseId){
            this.isEnrolled = true;
            return;
          }
        })
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    )
  }

  rzp1:any;
  data: object|any;
  options: object|any;
  onEnroll(){
    this.showModal = !this.showModal;
    this.isLoading = true;
    this.data = {
      userId: this.user.user_id,
      courseId: this.course.coruseId,
      amount: this.course.coursePrice,
    }
    this.courseService.makePayment(this.data).subscribe(
      (response) => {
        console.log(response);
        this.options = {
          "key": "rzp_test_0OYWVJUOQXo91j",
          "amount": response.amount,
          "currency": "INR",
          "name": `${this.user.firstName} + ' ' + ${this.user.lastName}`,
          "description": "Enroll the course",
          "image": "",
          "order_id": response.id,
          "callback_url": "",
          "prefill": {
              "name": "Gaurav Kumar",
              "email": "gaurav.kumar@example.com",
              "contact": "9999999999"
          },
          "notes": {
          "address": "Razorpay Corporate Office"
          },
          "theme": {
            "color": "#3399cc"
          }
        };
        this.rzp1 = new this.courseService.nativeWindow.Razorpay(this.options);
        this.isLoading = false;
        this.rzp1.open();
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
    }
  )
  }
}
