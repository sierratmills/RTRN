import { Component, getModuleFactory, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchResultsPage } from '../Search-results/search-results';
import { Http } from '@angular/http';
import { Store } from '../../models/store';

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
  public stores: Array<Store>;
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
          console.log(lat);
          console.log(lng);
          this.searchForStore(lat, lng);
        },

        (err: any) => {
          console.log(err);
        }
      );

    //this.navigateToSearchResults();
  }

  searchForStore(latit: String, lngit: String) {
    var storeResults = [];
    console.log("here 1")
    var latlng = new google.maps.LatLng(latit, lngit);
    console.log("here 2");
    map = new google.maps.Map(document.getElementById('map'), {
      center: latlng,
      zoom: 12
    });
    console.log("here 3");
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: { lat: latit, lng: lngit },
      radius: 15000,
      type: [this.storetype]
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log("here 4");
        for (var i = 0; i < results.length; i++) {
          var name = results[i].name;
          var lat = results[i].geometry.location.lat;
          var lng = results[i].geometry.location.lng;
          var id = results[i].id;
          var address;
          var url;
          service.getDetails({
            placeId: id
          }, function(place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              address = place.formatted_address;
              url = place.website;
            }
          });
          var store = new Store(name, this.storetype, address, url, lat, lng);
          storeResults[i] = store; 
          console.log(store);
        }
      }
    }, (error: any) => {
      console.log(error);
    }, true);
  }

}

