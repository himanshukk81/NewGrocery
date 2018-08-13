import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public events:Events) {
    events.subscribe('landing:data:changed',()=>{
      console.log("landing data changed");
      console.log("comminity is :---"+JSON.parse(localStorage.community));
      console.log("location is :---"+JSON.parse(localStorage.location));
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

}
