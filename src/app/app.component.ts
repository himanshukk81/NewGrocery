import { Component,ViewChild } from '@angular/core';
import { Platform ,Nav,NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { ProductListPage } from '../pages/product-list/product-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: Nav;

  rootPage:any;
  pages: Array<{title: string, component: any}>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   
    if(localStorage.locationCommunitySelected)
    {
      this.rootPage=ProductListPage;
    }
    else
    {
      this.rootPage=LandingPage;
    }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Product', component: ProductListPage },
      { title: 'Logout', component: LandingPage }

    ];
  }

  openPage(page)
  {
    if(page.title=='Logout')
    {
      localStorage.clear();
      this.nav.setRoot(page.component);

    }
    else
    {
      this.nav.setRoot(page.component);
    }
  }
}

