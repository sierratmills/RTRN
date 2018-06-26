import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewAccountPage } from '../new-account/new-account';
import { ProfilePage } from '../profile/profile';
import { MainPage } from '../main/main';
import { UserprofPage } from '../userprof/userprof';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController) { }

  navigateToUserProfile() {
    console.log("Navigating..");
    this.navCtrl.push(UserprofPage);
  }

  navigateToMain() {
    console.log("Navigating..");
    this.navCtrl.push(MainPage);
  }

  navigateToNewAccount() {
    console.log("Navigating..");
    this.navCtrl.push(NewAccountPage);
  }

}