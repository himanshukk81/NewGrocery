import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  option:number=1;
  constructor(public navCtrl: NavController, public params: NavParams,
              public view:ViewController) {
    console.log(this.params.get('userId'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  dismiss(){
    this.view.dismiss("Login Modal closed");
  }
  login(){

  }
  signUpModal(){
    this.view.dismiss(2);
  }
}
