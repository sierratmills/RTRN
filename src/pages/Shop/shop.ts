import { Component, getModuleFactory, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchResultsPage } from '../search-results/search-results';
import { Http } from '@angular/http';
import { Store } from '../../models/store';
import { PartialStore } from '../../models/partialStore';

declare var google;
let map: any;
let infowindow: any;
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
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
  @ViewChild('map') mapElement: ElementRef;
  public stores = [];
  public storetype = "";
  public location = "";
  public storeInfo = [];
  public addresses = [];
  public urls = []

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

  getStoreType() {
    if (this.storetype == "clothing") {
      this.storetype = "clothing_store";
    } else if (this.storetype == "furniture") {
      this.storetype = "furniture_store";
    } else if (this.storetype == "electronics") {
      this.storetype = "electronics_store";
    } else if (this.storetype == "jewelry") {
      this.storetype = "jewelry_store";
    } else if (this.storetype == "shoes") {
      this.storetype = "shoe_store";
    } else if (this.storetype == "flowers") {
      this.storetype = "florist";
    } else if (this.storetype == "books") {
      this.storetype = "book_store";
    }
  }

  getStores() {
    var lat = '';
    var lng = '';
    this.getStoreType();
    this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.location + "&key=AIzaSyDVAhL7WN1tys50EdRMj7vnOiIsfpBOImY")
      .subscribe(
        (data: any) => {
          var info = data.json();
          lat = info.results[0].geometry.location.lat;
          lng = info.results[0].geometry.location.lng;
          this.searchForStore(lat, lng);
          // this.getDetails();
          // this.addStores();
        },

        (err: any) => {
          console.log(err);
        }
      );
    //this.navigateToSearchResults();
  }

  searchForStore(latit: String, lngit: String) {
    var latlng = new google.maps.LatLng(latit, lngit);
    map = new google.maps.Map(document.getElementById('map'), {
      center: latlng,
      zoom: 12
    });
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: { lat: latit, lng: lngit },
      radius: 15000,
      type: [this.storetype]
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          var name = results[i].name;
          var lat = results[i].geometry.location.lat();
          var lng = results[i].geometry.location.lng();
          var id = results[i].place_id;
          var storet = this.storetype;
          var store = new PartialStore(name, storet, lat, lng, id);
          this.storeInfo[i] = store;
          //console.log(store);
          //console.log("1: " + i);
        }
      }
      this.getDetails();
    }, (error: any) => {
      console.log(error);
    });
  }

  async getDetails() {
    for (let i = 0; i < this.storeInfo.length; i++) {
      var latlng = new google.maps.LatLng(this.storeInfo[i].lat, this.storeInfo[i].lng);
    map = new google.maps.Map(document.getElementById('map'), {
      center: latlng,
      zoom: 12
    });
    var service = new google.maps.places.PlacesService(map);
    service.getDetails({
      placeId: this.storeInfo[i].googleid
    }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.addresses[i] = place.formatted_address;
        this.urls[i] = place.website;
        this.addStores(i);
      }
    }, (error: any) => {
      console.log(error);
    });
    }
  }


  addStores(index: number) {
    var store = new Store(this.storeInfo[index].storename, this.storeInfo[index].storetype, this.addresses[index], this.urls[index], this.storeInfo[index].lat, this.storeInfo[index].lng, this.storeInfo[index].googleid);
    this.stores[index] = store;
    console.log(store);
    }
}

