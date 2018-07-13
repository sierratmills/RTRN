import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchResultsPage } from '../Search-results/search-results';
import { StoreSitePage } from '../store-site/store-site';
import { Http } from '@angular/http';


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
  public storetype = "";
  public location = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  navigateToSearchResults() {
    console.log("Navigating..");
    this.navCtrl.push(SearchResultsPage, {
      category: this.storetype,
      zipcode: this.location
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  getStoreType(){
    if (this.storetype == "clothing"){
      this.storetype = "clothing_store";
    }else if (this.storetype == "furniture"){
      this.storetype = "furniture_store";
    }else if (this.storetype == "electronics"){
      this.storetype = "electronics_store";
    }else if (this.storetype == "jewelry"){
      this.storetype = "jewelry_store";
    }else if (this.storetype == "shoes"){
      this.storetype = "shoe_store";
    }else if (this.storetype == "flowers"){
      this.storetype = "florist";
    }else if (this.storetype == "books"){
      this.storetype = "book_store";
    }
  }

  getStores() {
    var lat = '';
    var lng = '';
    console.log(this.location);
    this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.location + "&key=AIzaSyDVAhL7WN1tys50EdRMj7vnOiIsfpBOImY")
      .subscribe(
        (data: any) => {
          var info = data.json();
          lat = info.results[0].geometry.location.lat;
          lng = info.results[0].geometry.location.lng;
          console.log(lat);
          console.log(lng);
          this.makeStores(lat, lng);
        },

        (err: any) => {
          console.log(err);
        }
      );


  }



  makeStores(lat: String, lng: String) {
    this.getStoreType();
    if (this.storetype != '' && this.storetype != "any") {
      this.http.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng + "&radius=15000&type=" + this.storetype + "&key=AIzaSyDVAhL7WN1tys50EdRMj7vnOiIsfpBOImY")
        .subscribe(
          (data: any) => {
            var info = data.json();
            console.log(info);
          },

          (err: any) => {
            console.log(err);
          }
        );
    } else {
      this.http.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng + "&radius=15000&type=store&key=AIzaSyDVAhL7WN1tys50EdRMj7vnOiIsfpBOImY")
        .subscribe(
          (data: any) => {
            var info = data.json();
            console.log(info);
          },

          (err: any) => {
            console.log(err);
          }
        );
    }
  }

}
