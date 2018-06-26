import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserprofPage } from '../userprof/userprof';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToHomePage() {
    console.log("Navigating..");
    this.navCtrl.push(HomePage);
  }

  navigateToUserProfile() {
    console.log("Navigating..");
    this.navCtrl.push(UserprofPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}