import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CoursesPageComponent } from './coursesPage/courses-page.component';
import { EditorCourseComponent } from './coursesPage/editor-course/editor-course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './coursesPage/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'courses/:id',
    component: CoursesPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/new',
    component: CoursesPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses',
    component: CoursesPageComponent,
    canActivate: [AuthGuard]
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
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
export const routingComponents = [LoginPageComponent, CoursesPageComponent, EditorCourseComponent, PageNotFoundComponent];
