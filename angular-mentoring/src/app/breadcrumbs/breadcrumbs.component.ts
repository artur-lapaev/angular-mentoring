import { Component, OnInit } from '@angular/core';
import { BreadCrumbsService } from './bread-crumbs.service';
import { ActivatedRoute } from '@angular/router';
import { CoursesServiceService } from '../coursesPage/courses-service.service';

@Component({
  selector: 'am-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  links = [];

  constructor(
    private courses: CoursesServiceService,
    private breadLinks: BreadCrumbsService,
    private route: ActivatedRoute) {
    this.links = this.breadLinks.getLinks();
  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      if (data.id) {
        const course = this.courses.getItemById(data.id);
        if (course) {
          this.breadLinks.addLink({
            name: course.caption,
            routeLink: data.id
          });
        } else {
          this.breadLinks.addLink({
            name: data.id,
            routeLink: data.id
          });
        }
      }
    });
  }
}
