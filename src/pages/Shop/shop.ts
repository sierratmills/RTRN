import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchResultsPage } from '../Search-results/search-results';
import { StoreSitePage } from '../store-site/store-site';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  public results: Array<StoreSitePage>;
  public storetype: String;
  public location: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToSearchResults() {
    console.log("Navigating..");
    this.navCtrl.push(SearchResultsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

}
