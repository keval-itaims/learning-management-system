import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { AdminhomepageComponent } from './components/admin/adminhomepage/adminhomepage.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { MainComponent } from './components/homepage/main/main.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AddinstructorComponent } from './components/admin/instructor/addinstructor/addinstructor.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { CoursesComponent } from './components/coursespage/courses/courses.component';
import { InstructorDetailComponent } from './components/admin/instructor/instructor-detail/instructor-detail.component';
import { UpdateInstructorComponent } from './components/admin/instructor/update-instructor/update-instructor.component';
import { AccountComponent } from './components/pages/account/account.component';
import { MyaccountComponent } from './components/pages/account/myaccount/myaccount.component';
import { MycoursesComponent } from './components/pages/account/mycourses/mycourses.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component'
import { InstructorHomepageComponent } from './components/admin/instructor/instructor-homepage/instructor-homepage.component';
import { StudentComponent } from './components/admin/student/student.component';
import { AddcontactusComponent } from './components/admin/contact-us/addcontactus/addcontactus.component';
import { ForgotPasswordComponent } from './components/pages/login/forgot-password/forgot-password.component';


const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch: 'full'},
  {path:'create-instructor',component:AddinstructorComponent},
  {path:'addcontactus',component:AddcontactusComponent},
  {path:'admin', component:AdminhomepageComponent, children:[
    {path:'',redirectTo: 'dashboard',pathMatch: 'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'student',component:StudentComponent},
    {path:'instructor',component:InstructorHomepageComponent,children:[
        {path:'',redirectTo: 'detail',pathMatch: 'full'},
        {path:'detail',component:InstructorDetailComponent},
        {path:'create',component:AddinstructorComponent},
        {path:'update/:id',component:UpdateInstructorComponent},
      ]},
    ]},
  {path:'homepage', component:HomepageComponent, children:[
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component:MainComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'error', component:ErrorComponent},
    {path:'signup', component:SignupComponent},
    {path:'courses', component:CoursesComponent},
    {path:'login', component:LoginComponent, children:[
      {path:'forgot-password', component:ForgotPasswordComponent}
    ]},
    {path:'account', component:AccountComponent, children:[
      {path:'', redirectTo:'myaccount', pathMatch: 'full'},
      {path:'myaccount', component:MyaccountComponent},
      {path:'mycourses', component:MycoursesComponent},
    ]},
  ]},
  {path:'**', redirectTo:'homepage/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
