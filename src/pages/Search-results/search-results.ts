import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { StoreSitePage } from '../store-site/store-site';

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

  constructor(public modalCtrl: ModalController) {

  }
 
  presentStoreModal() {
    let profileModal = this.modalCtrl.create(StoreSitePage, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultsPage');
  }


}

