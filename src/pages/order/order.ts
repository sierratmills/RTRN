import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})

export class OrderPage {

  public inputs = [
    { 
      label: 'Item 1',
      value: '',
    },
  ];

  public num;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addInputs() {
    this.num = this.inputs.length + 1;
    this.inputs.push({
      label: 'Item ' + this.num,
      value: '',
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

}
