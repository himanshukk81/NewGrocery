import { Component,ViewChild } from '@angular/core';
import { Platform,Nav,Events,ModalController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { LandingPage } from '../pages/landing/landing';
import { ProductListPage } from '../pages/product-list/product-list';
import { AboutPage } from '../pages/about/about';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import {SessionService} from '../providers/session-service/session-service'

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
  loginOpened:boolean=false;
  signupOpened:boolean=false;
  signup:boolean=false;
  constructor(platform: Platform, statusBar: StatusBar,public service:SessionService,
    splashScreen: SplashScreen,public events:Events,public modal:ModalController) {
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
    if (JSON.parse(localStorage.user)) {
      localStorage.user=JSON.parse(localStorage.user);
      this.user=localStorage.user;
    }
    // this.openRegister();
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

  ionViewDidLoad() {
    this.openLogin();
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
    } else if ((page.id==6) && !(localStorage.user)) {
      // this.openRegister();
      this.openLogin();
    } else {
      this.openLogin();
      localStorage.user=null;
      this.pages[5].title='Login';
      this.pages[5].icon='log-in';
      // localStorage.clear();
      // this.nav.setRoot(LandingPage);
    }
  }
  setStorage(pageId,item){
    if (pageId==2) {
      localStorage.community=JSON.stringify(item);
      this.user.community=item;
    }
    else if (pageId==3) {
      localStorage.location=JSON.stringify(item);
      this.user.location=item;
    }
    this.events.publish('landing:data:changed');
  }
  openLogin(){
    let loginModal=this.modal.create(LoginPage,{ userId: 8675309 });
    loginModal.onDidDismiss((response) => {
      console.log(response);
      if (response===2) {
        this.openRegister();
      } else {
        this.user=response.data;
        localStorage.user=response.data;
        localStorage.user.token=response.token;
        this.service.setUser(localStorage.user);
        if (!this.signup) 
        {
          this.service.showToastMessage(response.data.message);
        }
        this.events.publish('get:login');
      }
    });
    loginModal.present();
  }
  openRegister(){
    let registerModal=this.modal.create(RegisterPage,{ userId: 8675309 });
    registerModal.onDidDismiss((data) => {
      if (data==="success") {
        this.openLogin();
      }
      console.log(data);
    });
    registerModal.present();
  }
}

