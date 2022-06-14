import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/homepage/navbar/navbar.component';
import { FooterComponent } from './components/homepage/footer/footer.component';
// import { AdminComponent } from './components/adminpage/admin/admin.component';
import { HomeComponent } from './components/homepage/home/home.component';
import { TestimonialsComponent } from './components/homepage/testimonials/testimonials.component';
import { InstructorsComponent } from './components/homepage/instructors/instructors.component';
import { HeroComponent } from './components/homepage/hero/hero.component';
import { AdminhomepageComponent } from './components/admin/adminhomepage/adminhomepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    // AdminComponent,
    HomeComponent,
    TestimonialsComponent,
    InstructorsComponent,
    HeroComponent,
    AdminhomepageComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
