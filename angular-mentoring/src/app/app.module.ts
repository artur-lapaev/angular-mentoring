import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesPageComponent } from './coursesPage/courses-page.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesComponent } from './coursesPage/courses/courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesPageComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
