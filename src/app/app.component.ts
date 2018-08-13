import { Component,ViewChild } from '@angular/core';
import { Platform ,Nav,NavController,Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { ProductListPage } from '../pages/product-list/product-list';
import { AboutPage } from '../pages/about/about';
import { ContactUsPage } from '../pages/contact-us/contact-us';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: Nav;

  rootPage:any;
  pages:any=[];
  locations:any=[];
  communities:any=[];
  loader:boolean=false;
  user:any={};
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public events:Events) {
    events.subscribe('landing:data:fetched', (communitiesData, locations) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.communities=communitiesData;
      this.locations=locations;
    });

    if (localStorage.locationCommunitySelected) {
      if(JSON.parse(localStorage.locationCommunitySelected)){
        this.rootPage=ProductListPage;
      }
      else {
        this.rootPage=LandingPage;
      }
    } else {
      this.rootPage=LandingPage;
    }

    if (localStorage.communities) {
      this.communities=JSON.parse(localStorage.communities);
    }
    if (localStorage.locations) {
      this.locations=JSON.parse(localStorage.locations);
    }
    if (localStorage.community) {
      this.user.community=JSON.parse(localStorage.community);
    }
    if (localStorage.location) {
      this.user.location=JSON.parse(localStorage.location);
    }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { id:1,title: 'Home', component: ProductListPage,icon:"cart"},
      { id:2,title: 'Community',icon:"aperture",array:this.communities},
      { id:3,title: 'Location',icon:"pin",array:this.locations},
      { id:4,title: 'Contact Us', component: ContactUsPage,icon:"chatbubbles"},
      { id:5,title: 'About Us', component: AboutPage,icon:"document"},
      { id:6,title: 'Login',icon:"log-in" },
    ];
    if (localStorage.user) {
      if (JSON.parse(localStorage.user)) {
        this.pages[5].title='Logout';
        this.pages[5].icon='log-out';
      }
    }
  }

  openSlide(index){
    console.log(index);
    for (var i = 0; i < this.pages.length; ++i) {
      if (!(index===i)) {
        this.pages[i].toogle=false;
      }
    }
    this.pages[index].toogle=!this.pages[index].toogle;
  }
  openPage(page)
  {
    if (page.component) { 
      this.nav.setRoot(page.component);
    }
    else if (page.id==6) {
      // localStorage.user=null;
      // this.pages[5].title='Login';
      // this.pages[5].icon='log-in';
      localStorage.clear();
      this.nav.setRoot(LandingPage);
    }


    /*if(page.title=='Logout' || page.title=='Login')
    {
      localStorage.clear();
      this.nav.setRoot(page.component);
    }
    else
    {
      this.nav.setRoot(page.component);
    }*/
  }
  setCommunity(){
    
  }
  setLocation(){
    
  }
}

