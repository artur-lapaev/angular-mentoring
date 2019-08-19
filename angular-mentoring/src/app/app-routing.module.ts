import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CoursesPageComponent } from './coursesPage/courses-page.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'courses',
    component: CoursesPageComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginPageComponent, CoursesPageComponent];
