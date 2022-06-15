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
import { AboutComponent } from './components/homepage/about/about.component';
import { ContactComponent } from './components/homepage/contact/contact.component';
import { ErrorComponent } from './components/homepage/error/error.component';
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
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
