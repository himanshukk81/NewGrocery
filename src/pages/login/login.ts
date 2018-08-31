import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,Events } from 'ionic-angular';
import {SessionService} from '../../providers/session-service/session-service'

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
  option:string="1";
  loginOpened:boolean=false;
  loginData:any={};
  loader:boolean=false;
  constructor(public navCtrl: NavController, public params: NavParams,
              public view:ViewController,public events:Events,public service:SessionService) {
    console.log(this.params.get('userId'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  dismiss(){
    this.view.dismiss("Login Modal closed");
  }
  login(){
    if(!this.loginData.email)
    {
      this.service.showToastMessage("Please enter your email");
      return;
    }
    if(!this.loginData.password)
    {
      this.service.showToastMessage("Please enter your password");
      return;
    } 
    this.loader=true;
    this.service.doLogin(this.loginData)
    .subscribe((response)=>{
      console.log("Data==="+JSON.stringify(response));
      this.loader=false;
      if (response.status==1) 
      {
        this.service.showToastMessage("Login Success . . .");
        this.service.setLogin(true);
        this.view.dismiss(response);
        this.service.updateDeviceToken({
          "token":localStorage.user.token,
          "notification_type":this.service.getNotificationType(),
          "device_token":this.service.getDeviceToken()
        }).subscribe((response)=>{
          console.log("err==="+JSON.stringify(response));
        }),(err)=>{
          console.log("err==="+JSON.stringify(err));
          // this.service.showToastMessage("Invalid Credentials . . .");
        }    
      }
      else
      {
        this.service.showToastMessage(response.data.message);
      }
    },(err)=>{
      // this.loader=false;
      console.log("err==="+JSON.stringify(err));
      this.service.showToastMessage("Invalid Credentials . . .");
    })  
  }
  changeOption(value)
  { 
    if(this.option==2)
    {
      this.service.setAsGuest(true);
      this.loginOpened=false;
      this.events.publish('login:successfull');
      this.view.dismiss("Login Modal closed");
    }
  }
  signUpModal(){
    this.view.dismiss(2);
  }
}
