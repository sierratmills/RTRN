import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { User } from '../../models/user';

/**
 * Generated class for the UserprofPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userprof',
  templateUrl: 'userprof.html',
})
export class UserprofPage {

  public currUser: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToProfile() {
    console.log("Navigating..");
    this.navCtrl.push(ProfilePage);
  }

  navigateToHomePage() {
    console.log("Navigating..");
    this.navCtrl.push(HomePage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserprofPage');
  }

}
