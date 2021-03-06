import { IUser } from 'src/app/core/classes/user.class';
import { Injectable } from '@angular/core';
import { LoggedInUserService } from './core/loggedInUser/logged-in-user.service';

export interface Theme {
  mainColor?: any;
  secundaryColor?: any;
  id?: any;
  label?: string;
  name?: string;
  className?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeConfigurationService {
  loggedInUser: IUser = null;
  selectedTheme: Theme = null;
  ListThemes: Theme[] = [
    {
      mainColor: '#0d47a1',
      secundaryColor: '#ffc107',
      id: 1,
      label: 'blueTheme', name: 'Blue',
      className: 'customThemeClass'
    },
    {
      mainColor: '#004d40',
      secundaryColor: '#fb8c00',
      id: 2,
      label: 'tealTheme', name: 'Teal',
      className: 'tealThemeClass'
    },
    {
      mainColor: '#b71c1c',
      secundaryColor: '#4db6ac',
      id: 3,
      label: 'redTheme', name: 'Red',
      className: 'redThemeClass'
    }, {
      mainColor: '#388e3c',
      secundaryColor: '#ab47bc',
      id: 4,
      label: 'greenTheme', name: 'Green',
      className: 'greenThemeClass'
    }, {
      mainColor: '#e65100',
      secundaryColor: '#1976d2',
      id: 5,
      label: 'orangeTheme', name: 'Orange',
      className: 'orangeThemeClass'
    },
    {
      mainColor: '#4a148c',
      secundaryColor: '#388e3c',
      id: 6,
      label: 'purpleTheme', name: 'Purple',
      className: 'purpleThemeClass'
    }
  ];

  constructor(private loggedInUserService: LoggedInUserService) {
    this.loggedInUser = this.loggedInUserService.getLoggedInUser();
    if (this.loggedInUser) {
      const itemId = 1;
      if (!itemId) {
        this.selectedTheme = this.ListThemes[0];
      } else {
        this.selectedTheme = this.ListThemes[itemId - 1];
      }
    } else {
      this.selectedTheme = this.ListThemes[0];
    }
    document.getElementById('BodyAppClass').className = this.selectedTheme.className;
  }

  getArrayThemes(): Theme[] {
    return this.ListThemes;
  }
}
