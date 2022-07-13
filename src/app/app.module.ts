import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/homepage/navbar/navbar.component';
import { FooterComponent } from './components/homepage/footer/footer.component';
import { TestimonialsComponent } from './components/homepage/testimonials/testimonials.component';
import { InstructorsComponent } from './components/homepage/instructors/instructors.component';
import { HeroComponent } from './components/homepage/hero/hero.component';
import { CoursesComponent } from './components/coursespage/courses/courses.component';
import { FunfactComponent } from './components/homepage/funfact/funfact.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminhomepageComponent } from './components/admin/adminhomepage/adminhomepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AdminsidebarComponent } from './components/admin/adminsidebar/adminsidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { MainComponent } from './components/homepage/main/main.component';
import { TestcoursesComponent } from './components/homepage/testcourses/testcourses.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ReviewComponent } from './components/homepage/testimonials/review/review.component';
import { InstructorComponent } from './components/homepage/instructors/instructor/instructor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddinstructorComponent } from './components/admin/instructor/addinstructor/addinstructor.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { InstructorDetailComponent } from './components/admin/instructor/instructor-detail/instructor-detail.component';
import { UpdateInstructorComponent } from './components/admin/instructor/update-instructor/update-instructor.component';
import { CourseComponent } from './components/coursespage/courses/course/course.component';
import { AccountComponent } from './components/pages/account/account.component';
import { MyaccountComponent } from './components/pages/account/myaccount/myaccount.component';
import { MycoursesComponent } from './components/pages/account/mycourses/mycourses.component';
import { EnrolledCourseComponent } from './components/pages/account/mycourses/enrolled-course/enrolled-course.component';
import { FaqsComponent } from './components/pages/faqs/faqs.component';
import { InstructorHomepageComponent } from './components/admin/instructor/instructor-homepage/instructor-homepage.component';
import { StudentComponent } from './components/admin/student/student.component';
import { ConfirmdialogComponent } from './shared/confirmdialog/confirmdialog.component';
import { CourseDetailsComponent } from './components/coursespage/course-details/course-details.component';
import { AddcontactusComponent } from './components/admin/contact-us/addcontactus/addcontactus.component';
import { ContactusDetailComponent } from './components/admin/contact-us/contactus-detail/contactus-detail.component';
import { ContactusHomepageComponent } from './components/admin/contact-us/contactus-homepage/contactus-homepage.component';
import { ChaptersComponent } from './components/coursespage/course-details/chapters/chapters.component';
import { ForgotPasswordComponent } from './components/pages/login/forgot-password/forgot-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ReplycontactmessageComponent } from './components/admin/contact-us/replycontactmessage/replycontactmessage.component';
import { AdmincoursesComponent } from './components/admin/admincourses/admincourses.component';
import { AddcoursesComponent } from './components/admin/admincourses/addcourses/addcourses.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CoursesDetailsComponent } from './components/admin/admincourses/courses-detail/courses-detail.component';
import { DisplayReviewComponent } from './components/coursespage/display-review/display-review.component';
import { AddReviewComponent } from './components/coursespage/add-review/add-review.component';
import { UpdateCourseComponent } from './components/admin/admincourses/update-course/update-course.component';
import { AdminchaptersComponent } from './components/admin/admincourses/adminchapters/adminchapters.component';
import { AddchapterComponent } from './components/admin/admincourses/adminchapters/addchapter/addchapter.component';

import { ChapterDetailsComponent } from './components/admin/admincourses/adminchapters/chapter-details/chapter-details.component';
import { ViewCourseComponent } from './components/admin/admincourses/view-course/view-course.component';
import { UpdateChapterComponent } from './components/admin/admincourses/adminchapters/update-chapter/update-chapter.component';
import { CourseReviewComponent } from './components/admin/course-review/course-review.component';
import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import { EnrollModalComponent } from './components/coursespage/enroll-modal/enroll-modal.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TestimonialsComponent,
    InstructorsComponent,
    HeroComponent,
    CoursesComponent,
    FunfactComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    AdminhomepageComponent,
    AdminsidebarComponent,
    HomepageComponent,
    MainComponent,
    TestcoursesComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ReviewComponent,
    InstructorComponent,
    AddinstructorComponent,
    SignupComponent,
    InstructorDetailComponent,
    UpdateInstructorComponent,
    CourseComponent,
    AccountComponent,
    MyaccountComponent,
    MycoursesComponent,
    EnrolledCourseComponent,
    FaqsComponent,
    InstructorHomepageComponent,
    StudentComponent,
    ConfirmdialogComponent,
    CourseDetailsComponent,
    AddcontactusComponent,
    ContactusDetailComponent,
    ContactusHomepageComponent,
    ChaptersComponent,
    ForgotPasswordComponent,
    SpinnerComponent,
    ReplycontactmessageComponent,
    AdmincoursesComponent,
    AddcoursesComponent,
    CoursesDetailsComponent,
    DisplayReviewComponent,
    AddReviewComponent,
    UpdateCourseComponent,
    AdminchaptersComponent,
    AddchapterComponent,
    ChapterDetailsComponent,
    ViewCourseComponent,
    UpdateChapterComponent,
    CourseReviewComponent,
    EnrollModalComponent,
    // ViewCourseComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgbRatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
