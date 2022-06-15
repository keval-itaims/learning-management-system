import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/homepage/about/about.component';
import { ContactComponent } from './components/homepage/contact/contact.component';
import { ErrorComponent } from './components/homepage/error/error.component';
import { HomeComponent } from './components/homepage/home/home.component';
import { AdminhomepageComponent } from './components/admin/adminhomepage/adminhomepage.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'**', component:ErrorComponent},
  {path:"admin",component:AdminhomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
