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
import { TestcourseComponent } from './components/homepage/testcourses/testcourse/testcourse.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ReviewComponent } from './components/homepage/testimonials/review/review.component';
import { InstructorComponent } from './components/homepage/instructors/instructor/instructor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddinstructorComponent } from './components/admin/instructor/addinstructor/addinstructor.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { InstructorDetailComponent } from './components/admin/instructor/instructor-detail/instructor-detail.component';
import { UpdateInstructorComponent } from './components/admin/instructor/update-instructor/update-instructor.component';
import { DeleteInstructorComponent } from './components/admin/instructor/delete-instructor/delete-instructor.component';

import { CourseComponent } from './components/coursespage/courses/course/course.component';
import { AccountComponent } from './components/pages/account/account.component';
import { MyaccountComponent } from './components/pages/account/myaccount/myaccount.component';
import { MycoursesComponent } from './components/pages/account/mycourses/mycourses.component';
import { EnrolledCourseComponent } from './components/pages/account/mycourses/enrolled-course/enrolled-course.component';
import { FaqsComponent } from './components/pages/faqs/faqs.component';
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
    TestcourseComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ReviewComponent,
    InstructorComponent,
    AddinstructorComponent,
    SignupComponent,
    InstructorDetailComponent,
    UpdateInstructorComponent,
    DeleteInstructorComponent,
    CourseComponent,
    AccountComponent,
    MyaccountComponent,
    MycoursesComponent,
    EnrolledCourseComponent,
    FaqsComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
