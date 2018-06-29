import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../models/store';


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
  public store: Store;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.store = this.navParams.get("storeParameter");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreSitePage');
  }
  
}
