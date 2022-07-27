import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faStar, faClock, faInr } from '@fortawesome/free-solid-svg-icons';
import { CourseResponse } from 'src/app/classes/course-response';
import { User } from 'src/app/classes/user';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  clock = faClock;
  star = faStar;
  inr = faInr;
  isEnrolled = false;
  isLoading = false;
  course: CourseResponse | any;
  user: User | any;
  showModal = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private userService: UserService,
    private utility: UtilityService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.courseService
      .getSingleCourse(+this.route.snapshot.params['id'])
      .subscribe(
        (data) => {
          this.isLoading = false;
          this.course = data;
          this.user = this.userService.getUser();
          if (!this.user || !this.user.myCourses) return;
          this.user.myCourses.forEach((item: number) => {
            if (item === this.course.courseId) {
              this.isEnrolled = true;
              return;
            }
          });
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
        }
      );
  }
  options: any | object;
  rzp1: any;
  onEnroll() {
    this.showModal = !this.showModal;
    this.isLoading = true;
    this.courseService
      .createOrder({ amount: this.course.coursePrice })
      .subscribe(
        (response) => {
          this.makePayment(response);
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
        }
      );
  }
  makePayment(response: any) {
    this.options = {
      key: 'rzp_test_0OYWVJUOQXo91j',
      amount: response.amount,
      currency: 'INR',
      name: `ITAIMS`,
      description: 'Enroll the course',
      image: '../../../../assets/images/logo.png',
      order_id: response.id,
      handler: function (response: any) {
        var event = new CustomEvent('payment.success', {
          detail: response,
          bubbles: true,
          cancelable: true,
        });
        window.dispatchEvent(event);
      },
      prefill: {
        name: `${this.user.firstName} ${this.user.lastName}`,
        email: `${this.user.emailId}`,
        contact: `${this.user.phoneNum}`,
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };
    this.rzp1 = new this.courseService.nativeWindow.Razorpay(this.options);
    this.isLoading = false;
    this.rzp1.open();
  }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.isLoading = true;
    this.options.courseId = this.course.courseId;
    this.options.userId = this.user.user_id;
    this.options.payment_id = event.detail.razorpay_payment_id;
    this.courseService.enrollCourse(this.options).subscribe(
      (_) => {
        this.user.myCourses = !this.user.myCourses
          ? [this.course.courseId]
          : [...this.user.myCourses, this.course.courseId];
        this.userService.saveUser(this.user);
        this.isLoading = false;
        this.utility.openSnackBar(
          'Course enrolled! Happy learning!',
          'Dismiss'
        );
        this.refreshComponent();
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  refreshComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.route }).then(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => true;
      this.router.onSameUrlNavigation = 'ignore';
    });
  }
}
