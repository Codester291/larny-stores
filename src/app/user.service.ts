import { Injectable, NgModule } from '@angular/core';
import { observable } from 'rxjs';
interface user {
  email: string,
  password: string,
  uid: string
}

@NgModule()
@Injectable()
export class UserService {

  private user: user;

  constructor() {

  }

  setUser(user: user) {
    this.user = user;
  }

  getUid() {

  }

}
