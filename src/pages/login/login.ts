import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { NewAccountPage } from '../new-account/new-account';
import { MainPage } from '../main/main';
import { UserprofPage } from '../userprof/userprof';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  constructor(public navCtrl: NavController, public toastCtrl:ToastController) { }

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

  login() {
    if (!this.checkUserExists()) {
      this.showToastCreateProfile();
      //if user enters new info check it again
    } else {
      while (!this.correctPassword()) {
        this.showToastIncorrectPassword();
        //get new input
      }
    }
    //if user exists then make a user and call profile.setInfo() and navigateToMain()
    this.navigateToMain();
  }

  checkUserExists(): boolean {
    //check to see if user is in database
    return true;
  }

  correctPassword(): boolean {
    //check if password is correct
    return true;
  }

  showToastCreateProfile() {
    let toast = this.toastCtrl.create({
      message: "We don't recognize that username. Please try again or create a new account",
      showCloseButton: true,
      position: "middle"
    });
    toast.present();
  }

  showToastIncorrectPassword() {
    let toast = this.toastCtrl.create({
      message: "The password you entered doesn't match your username. Please try again",
      showCloseButton: true,
      position: "middle"
    });
    toast.present();
  }

}