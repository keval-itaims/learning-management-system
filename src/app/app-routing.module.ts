import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { AdminhomepageComponent } from './components/admin/adminhomepage/adminhomepage.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { MainComponent } from './components/homepage/main/main.component';
// import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AddinstructorComponent } from './components/admin/instructor/addinstructor/addinstructor.component';

const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch: 'full'},
  {path:"admin",component:AdminhomepageComponent},
  {path:"addinstructor",component:AddinstructorComponent},
  {path:'homepage', component:HomepageComponent, children:[
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component:MainComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'error', component:ErrorComponent},
    // {path:'signup', component:SignupComponent},
    {path:'login', component:LoginComponent},
  ]},
  {path:'**', redirectTo:'homepage/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
