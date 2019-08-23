import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesComponent } from './coursesPage/courses/courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './coursesPage/search/search.component';
import { LoadMoreComponent } from './coursesPage/load-more/load-more.component';
import { CourseItemComponent } from './coursesPage/courses/course-item/course-item.component';
import { BorderDateDirective } from './coursesPage/courses/course-item/border-date.directive';
import { OrderByPipe } from './coursesPage/order-by.pipe';
import { DeleteModalComponent } from './coursesPage/courses/delete-modal/delete-modal.component';

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
    routingComponents,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    OverlayModule
  ],
  entryComponents: [
    DeleteModalComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
