import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesComponent } from './coursesPage/courses/courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './coursesPage/search/search.component';
import { LoadMoreComponent } from './coursesPage/load-more/load-more.component';
import { CourseItemComponent } from './coursesPage/courses/course-item/course-item.component';
import { BorderDateDirective } from './coursesPage/courses/course-item/border-date.directive';
import { OrderByPipe } from './coursesPage/order-by.pipe';
import { DeleteModalComponent } from './coursesPage/courses/delete-modal/delete-modal.component';
import { EditorCourseComponent } from './coursesPage/editor-course/editor-course.component';
import { DateComponent } from './coursesPage/date/date.component';
import { DurationComponent } from './coursesPage/duration/duration.component';
import { DurationTransformPipe } from './coursesPage/duration/duration-transform.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthInterceptor } from './header/auth-interceptor';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/reducers/auth.reducer';
import { coursesReducer } from './store/reducers/course.reducer';

export function HttpLoaderFactor(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    DeleteModalComponent,
    EditorCourseComponent,
    DateComponent,
    DurationComponent,
    DurationTransformPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    OverlayModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactor,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({
      login: authReducer,
      courses: coursesReducer
    })
  ],
  entryComponents: [
    DeleteModalComponent,
    EditorCourseComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
