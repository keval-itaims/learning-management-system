import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/homepage/about/about.component';
import { ContactComponent } from './components/homepage/contact/contact.component';
import { ErrorComponent } from './components/homepage/error/error.component';
import { AdminhomepageComponent } from './components/admin/adminhomepage/adminhomepage.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { MainComponent } from './components/homepage/main/main.component';

const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch: 'full'},
  {path:"admin",component:AdminhomepageComponent},
  {path:'homepage', component:HomepageComponent, children:[
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component:MainComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'**', component:ErrorComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
