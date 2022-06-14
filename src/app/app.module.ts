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
import { AdminsidebarComponent } from './components/admin/adminsidebar/adminsidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
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
    AdminsidebarComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
