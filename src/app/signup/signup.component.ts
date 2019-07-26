import { Component, OnInit, NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';


@NgModule()
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private user: UserService,
    private _snackBar: MatSnackBar,
    private route: Router) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(
      message, action, {
      duration: 2000,
    });
  }

  toPage(){
    const {route} = this;
    route.navigateByUrl('/store');
  }
  async signUp() {

    try {
      const { firstName, lastName, email, password, address } = this;

      const results = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      console.log(results);

      this.afStore.doc(`user/${results.user.uid}`).set({
        firstName, lastName, email, password, address
      });

      this.user.setUser({
        email,
        password,
        uid: results.user.uid
      });

      this.openSnackBar('You have succesfully logged in', 'close');
      this.toPage();
    } catch (error) {

      console.log(error);
      if (error.code === 'auth/network-request-failed') {
        this.openSnackBar('You don\'t have an internet connection', 'close');
        console.log('No internet');
      }
      if (error.code === 'auth/invalid-email') {
        this.openSnackBar('You seemed to have typed email incorrectly', 'close');
        console.log('You seemed to have typed email incorrectly');
      }
      if (error.code === 'auth/weak-password') {
        this.openSnackBar('Weak Password', 'close');
        console.log('Weak Password');
      }
      if (error.code === 'auth/email-already-in-use') {
        this.openSnackBar('You are already a user', 'close');
        console.log('User exists');
      }
    }
  }
}
