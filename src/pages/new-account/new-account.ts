import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { MainPage } from '../main/main';

/**
 * Generated class for the NewAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-account',
  templateUrl: 'new-account.html',
})
export class NewAccountPage {

  private firstName = '';
  private lastName = '';
  private username = '';
  public passwordCheck = '';
  private password = '';
  private email = '';
  private newEmail = false;
  private goodPassword = false;
  private newUsername = false;



  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'How to use this app: ...',
      showCloseButton: true,
      position: "middle"
    });
    toast.present().then(() => {
      toast.onDidDismiss(() => {
        this.navigateToMain();
      });
    });
  }

  checkValidPassword() {
    var uppercase = false;
    var lowercase = false;
    var specialcharacter = false;
    var number = false;
    var matching = false;

    var loop = 0;
    for (loop = 0; loop < this.password.length; loop++) {
      if ((this.password.charCodeAt(loop) >= 33 && this.password.charCodeAt(loop) <= 47)
        || (this.password.charCodeAt(loop) >= 58 && this.password.charCodeAt(loop) <= 64)
        || (this.password.charCodeAt(loop) >= 91 && this.password.charCodeAt(loop) <= 96)
        || (this.password.charCodeAt(loop) >= 123 && this.password.charCodeAt(loop) <= 126)) {
        specialcharacter = true;
      } else if (this.password.charCodeAt(loop) >= 48 && this.password.charCodeAt(loop) <= 57) {
        number = true;
      } else if (this.password.charCodeAt(loop) >= 65 && this.password.charCodeAt(loop) <= 90) {
        uppercase = true;
      } else if (this.password.charCodeAt(loop) >= 97 && this.password.charCodeAt(loop) <= 122) {
        lowercase = true;
      } else if (this.password === this.passwordCheck) {
        matching = true;
      }
    }

    if (!(uppercase && lowercase && number && matching && specialcharacter && this.password.length < 6)) {
      this.goodPassword = false;
    }

    this.goodPassword = true;;
  }

  checkEmailIsNew() {
    //see if email has been used before
    this.newEmail = true;
  }

  checkUsername() {
    //check to see if username exists, if it does, prompt user to choose a different username
    this.newUsername = true;
  }

  checkAll() {
    this.checkEmailIsNew();
    this.checkUsername();
    this.checkValidPassword();

    if (this.newUsername && this.newEmail && this.goodPassword) {
      this.addInfoToDatabase();
      this.showToast();
    } else if (!this.newUsername) {
      //toast 
      //checkAll();
    }
  }

  addInfoToDatabase() {
    //add user info to a database
  }

  navigateToProfile() {
    console.log("Navigating..");
    this.navCtrl.push(ProfilePage);
  }

  navigateToMain() {
    console.log("Navigating..");
    this.navCtrl.push(MainPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAccountPage');
  }

}