import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the StoreSitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-site',
  templateUrl: 'store-site.html',
})
export class StoreSitePage {

  constructor(params: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreSitePage');
  }
  
}
