import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SessionServiceProvider} from '../../providers/session-service/session-service'

import {ProductListPage} from '../product-list/product-list'
/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  locations:any=[];
  communities:any=[];
  loader:boolean=false;
  user:any={};
  constructor(public service:SessionServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    this.loader=true;
     // console.log('ionViewDidLoad LandingPage');
     this.service.getOperatingLocations().subscribe((locationData)=>{
       this.locations=locationData;
       this.service.getCommunities().subscribe((communitiesData)=>{
        this.communities=communitiesData;
        this.loader=false;
      },(err)=>{
        console.log("Error data===="+err);
        this.loader=false;
        this.service.showToastMessage("Please try again");
      })     
     },(err)=>{
       console.log("Error data===="+err);
       this.loader=false;
       this.service.showToastMessage("Please try again");
     })
  }

  go()
  {
    if(!this.user.location)
    {
      this.service.showToastMessage("Please Select Location");
      return;
    }

    if(!this.user.community)
    {
      this.service.showToastMessage("Please Select Community");
      return;
    }

    localStorage.locationCommunitySelected=true;
    localStorage.location=this.user.location;
    localStorage.community=this.user.community;
    localStorage.locations=this.locations;
    localStorage.communities=this.communities;
    this.navCtrl.setRoot(ProductListPage);
  }

}