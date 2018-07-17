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
import { Http } from '@angular/http';
import { Order } from '../../models/order';
import { OrderPage } from '../order/order';

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

  public stores = [];
  public zip: String;
  public category: String;
  public categoryUppercase: String;
  storename: string;
  storetype: string;
  url: string;
  returnurl: string;
  address: string
  lat: string;
  long: string;
  googleid: string;

  constructor(public modalCtrl: ModalController, public navParams: NavParams, public navCtrl: NavController, public http: Http) {
    this.zip = navParams.get('zipcode');
    this.category = navParams.get('category');
    this.stores = navParams.get('stores');
    this.categoryUppercase = navParams.get('category').toUpperCase();
  }

  createStore() {
    this.http
      .post("http://localhost:3000/createStore", {
        storename: this.storename,
        storetype: this.storetype,
        url: this.url,
        returnurl: this.returnurl,
        address: this.address,
        lat: this.lat,
        long: this.long,
        googleid: this.googleid,
      }).subscribe(
        result => {
          var info = result.json();
          console.log(info);
        },

        err => {
          console.log(err);
        }
      );
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

  goToPlaceOrder() {
    this.navCtrl.push(OrderPage);
  }


}


