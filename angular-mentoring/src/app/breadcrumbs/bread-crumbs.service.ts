import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbsService {
  private links = [
    {
      name: 'Courses',
      routeLink: '/courses'
    }
  ];
  constructor() { }

  getLinks() {
    return this.links;
  }
  addLink(link) {
    this.links.push(link);
  }

  removeLink() {
    return this.links.pop();
  }
}
