import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NewAccountPage } from '../new-account/new-account';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any;

  constructor(public navCtrl: NavController,  public http: Http) {
 
    this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
        this.posts = data.data.children;
    });
    
  }

  navigateToLogin() {
    console.log("Navigating..");
    this.navCtrl.push(LoginPage);
  }

  navigateToNewAccount() {
    console.log("Navigating..");
    this.navCtrl.push(NewAccountPage);
  }

}
