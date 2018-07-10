import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NewAccountPage } from '../new-account/new-account';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any;

<<<<<<< HEAD
  constructor(public navCtrl: NavController,  public http: Http) {
 
    this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
        this.posts = data.data.children;
    });
    
=======
  posts: any;

  constructor(public navCtrl: NavController, public http: Http) {
    if (localStorage.getItem("TOKEN")) {
      alert("Already logged in");
    
      this.http.get("http://localhost:3000/verify?jwt=" + localStorage.getItem("TOKEN")).subscribe(
        result => {
          console.log(result.json());
        },
  
        err => {
          // Invalid, login!
        }
      );

    }
>>>>>>> 72d686b2a65d70866dbf1601b4b11524e156a602
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
