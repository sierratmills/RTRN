import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { StoreSitePage } from '../store-site/store-site';
import { ProductService } from '../../services/product.service';
import { Store } from '../../models/store';
import { MapPage } from '../map/map';
import { CartPage } from '../cart/cart';
import { HomePage } from '../home/home';
import { MainPage } from '../main/main';

/**
 * Generated class for the SearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {

  public stores: Array<Store>;
  public zip: String;
  public category: String; 
  public categoryUppercase: String;

  constructor(public modalCtrl: ModalController, public navParams: NavParams, public navCtrl: NavController) {
    this.zip = navParams.get('zipcode');
    this.category = navParams.get('category');
    this.categoryUppercase = navParams.get('category').toUpperCase();
  }

  presentStoreModal(store: StoreSitePage) {
    let profileModal = this.modalCtrl.create(StoreSitePage, { storeParameter: store, userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultsPage');
  }

  goToMap() {
        this.navCtrl.push(MapPage);
  }

  navigateToCart() {
        this.navCtrl.push(CartPage);
  }

  navigateToMain() {
    this.navCtrl.push(MainPage);
  }

  getStores(){

  }


}


