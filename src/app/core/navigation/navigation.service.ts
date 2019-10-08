import { Injectable } from '@angular/core';
import { NavItem } from './../classes/navItem.class';
@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  navItems: NavItem[] = [
    {
      displayName: 'SAMPLE',
      iconName: ['home'],
      route: 'backend/sample',
      material: true,
      children: []
    },
    {
      displayName: 'SAMPLE1',
      iconName: ['search'],
      route: 'backend/sample1',
      material: true,
      children: []
    },
    {
      displayName: 'SAMPLE2',
      iconName: ['account_box'],
      route: 'backend-hotels/hotels-tariffs-availability',
      material: true,
      children: [
        {
          displayName: 'CATEGORY',
          route: 'backend-hotels/hotels-calendar',
          iconName: ['build'],
          material: true,
          children: []
        },
      ]
    },

  ];


  constructor() { }

  public getNavArray() {
    return JSON.parse(JSON.stringify(this.navItems));
  }
}