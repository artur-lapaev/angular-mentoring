import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CoursesPageComponent } from './coursesPage/courses-page.component';
import { EditorCourseComponent } from './coursesPage/editor-course/editor-course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'courses/:id',
    component: CoursesPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'courses/new',
    component: CoursesPageComponent,
    data: {
      breadcrumbLink: 'Create Course'
    }
  },
  {
    path: 'courses',
    component: CoursesPageComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginPageComponent, CoursesPageComponent, EditorCourseComponent, PageNotFoundComponent];
