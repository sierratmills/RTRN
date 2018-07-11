import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Http } from "../../../node_modules/@angular/http";


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

  public firstName = '';
  public lastName = '';
  public username = '';
  public passwordCheck = '';
  public password = '';
  public email = '';
  private goodPassword = false;



  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private http: Http) {

  }

  createUser() {
    this.checkValidPassword();

    if (!this.goodPassword) {
      this.showToastBadPassword();
    }
    else {
      this.http
        .post("http://localhost:3000/register", {
          email: this.email,
          password: this.password,
          firstname: this.firstName,
          lastname: this.lastName,
          username: this.username
        })
        .subscribe(
          result => {
            console.log(result);

            var jwtResponse = result.json();
            var token = jwtResponse.token;

            localStorage.setItem("TOKEN", token);

            let t = localStorage.getItem("TOKEN");

            this.navigateToMain();

          },

          err => {
            var errObject = err.json();
            if (errObject.message === 'username already exists') {
              this.showToastUsernameTaken();
            } else if (errObject.message === 'user already exists') {
              this.showToastEmailTaken();
            } else if (errObject.message === 'user is missing data') {
              this.showToastMissing();
            }
            console.log(err);
          }
        );
    }
  }


  checkValidPassword() {
    var uppercase = false;
    var lowercase = false;
    var number = false;
    var matching = false;

    var loop = 0;
    for (loop = 0; loop < this.password.length; loop++) {
      if (this.password.charCodeAt(loop) >= 48 && this.password.charCodeAt(loop) <= 57) {
        number = true;
      } else if (this.password.charCodeAt(loop) >= 65 && this.password.charCodeAt(loop) <= 90) {
        uppercase = true;
      } else if (this.password.charCodeAt(loop) >= 97 && this.password.charCodeAt(loop) <= 122) {
        lowercase = true;
      }
    }

    if (this.password === this.passwordCheck) {
      matching = true;
    }

    console.log("num:" + number);
    console.log("upper:" + uppercase);
    console.log("lower:" + lowercase);
    console.log("matching:" + matching);

    if (!(uppercase && lowercase && number && matching && this.password.length <= 6)) {
      this.goodPassword = false;
    } else {
      this.goodPassword = true;
    }
  }

  navigateToMain() {
    console.log("Navigating..");
    this.navCtrl.push(MainPage);
  }

  showToastBadPassword() {
    let toast = this.toastCtrl.create({
      message: "Your password must be at least 6 characters and contain one uppercase letter, one lower case letter, and one number.",
      showCloseButton: true,
      position: "middle"
    });
    toast.present();
  }

  showToastUsernameTaken() {
    let toast = this.toastCtrl.create({
      message: "That username is already taken, please choose another username.",
      showCloseButton: true,
      position: "middle"
    });
    toast.present();
  }

  showToastEmailTaken() {
    let toast = this.toastCtrl.create({
      message: "That email is being used by another account, please choose another email.",
      showCloseButton: true,
      position: "middle"
    });
    toast.present();
  }

  showToastMissing() {
    let toast = this.toastCtrl.create({
      message: "Please make sure to fill out all required fields.",
      showCloseButton: true,
      position: "middle"
    });
    toast.present();
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

}