import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesComponent } from './coursesPage/courses/courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './coursesPage/search/search.component';
import { LoadMoreComponent } from './coursesPage/load-more/load-more.component';
import { CourseItemComponent } from './coursesPage/courses/course-item/course-item.component';
import { BorderDateDirective } from './coursesPage/courses/course-item/border-date.directive';
import { OrderByPipe } from './coursesPage/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CoursesComponent,
    SearchComponent,
    LoadMoreComponent,
    CourseItemComponent,
    BorderDateDirective,
    OrderByPipe,
    routingComponents
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
