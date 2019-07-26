import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {
         MatButtonModule,
         MatCardModule,
         MatSidenavModule,
         MatMenuModule,
         MatIconModule,
         MatBadgeModule,
         MatDividerModule,
         MatSnackBarModule,
         MatProgressBarModule
        } from '@angular/material';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, RouterLink } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { FormsModule, FormGroupDirective, FormControlName, NgForm } from '@angular/forms';

let firebaseConfig = {
  apiKey: 'AIzaSyCeVBjDkz5JnAj1HlkzadBjp7UseIFRFZA',
  authDomain: 'larny-stores.firebaseapp.com',
  databaseURL: 'https://larny-stores.firebaseio.com',
  projectId: 'larny-stores',
  storageBucket: '',
  messagingSenderId: '550994683597',
  appId: '1:550994683597:web:4dc0ea2f93df95bb'
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
    MatDividerModule,
    MatProgressBarModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    UserService,
    AngularFirestoreModule,
    MatSnackBarModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
