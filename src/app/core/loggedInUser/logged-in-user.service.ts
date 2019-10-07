import { Injectable } from '@angular/core';
import { IUser } from '../classes/user.class';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserService {
  loggedInUserUpdated = new Subject<IUser>();
  loggedInUser: IUser = null;

  constructor() {
    const data = localStorage.getItem('user');
    if (data) {
      this.loggedInUser = JSON.parse(data);
    }
  }

  public setNewAvatar(user) {
    let dataString: string;
    dataString = JSON.stringify(this.loggedInUser);
    localStorage.setItem('user', dataString);
    this.loggedInUserUpdated.next(this.loggedInUser);
  }

  public getLoggedInUser(): IUser {
    return JSON.parse(localStorage.getItem('user'));
  }

  public setLoggedInUser(user: IUser) {
    const dataString = JSON.stringify(user);
    localStorage.setItem('user', dataString);
    this.loggedInUser = Object.assign({}, user);
  }

  public updateUserProfile(user) {
    let dataString: string;
    if (user) {
      this.loggedInUser = Object.assign(this.loggedInUser, user);
    } else {
      this.loggedInUser = null;
    }
    dataString = JSON.stringify(this.loggedInUser);
    localStorage.setItem('user', dataString);
    this.loggedInUserUpdated.next(this.loggedInUser);
  }
}
