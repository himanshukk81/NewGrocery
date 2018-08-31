import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ToastController } from 'ionic-angular';
import {environment} from '../../environment/environment'

import {Users} from "../../environment/environment";

// declare var API_URL;
import {Observable} from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SessionService {
	API_URL:string;
  user:any={};
  guest:boolean=false;
  login:boolean=false;
  notificationType:any;
  deviceToken:any;
	// users:Array<{id:string,name:string}>;
  constructor(public httpClient: HttpClient,public toastCtrl:ToastController) {
    console.log('Hello SessionServiceProvider Provider');
		this.API_URL=environment.API_URL.dev;
  }
	convertToParams(data){
    var p = [];
    for(var key in data){
     p.push(key + '=' + encodeURIComponent(data[key]));
    }
    return p.join('&');
  }

  showToastMessage(messageText)
  {
  	let toast = this.toastCtrl.create({
	    message: messageText,
	    duration: 1500,
	    position: 'bottom'
	  });

	  toast.onDidDismiss(() => {
	    console.log('Dismissed toast');
	  });
    toast.present();
  }	

  createUser(userInfo): Observable<Users[]> {
    let data=this.convertToParams(userInfo)
    let httpOptions={  
      headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',          
      })
    }  
    return this.httpClient.post(this.API_URL+"register",data,httpOptions)
    .map((response: Response)=>{
      return response;
    })
    .catch(this.handleError);        
  }
  updateDeviceToken(deviceTokenobj): Observable<Users[]>{
    let data=this.convertToParams(deviceTokenobj)
    let httpOptions={  
      headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',          
      })
    }  
    return this.httpClient.post(this.API_URL+"setDeviceToken",data,httpOptions)
    .map((response: Response)=>{
      return response;
    })
    .catch(this.handleError); 
  }
  doLogin(obj): Observable<Users[]> {
    let data=this.convertToParams(obj)
    let httpOptions={  
      headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',          
      })
    }  
    return this.httpClient.post(this.API_URL+"login",data,httpOptions)
    .map((response: Response)=>{
      return response;
    })
    .catch(this.handleError);        
  }

	getOperatingLocations():Observable<Users[]>{
		return this.httpClient.get(this.API_URL+"getOperatingLocations")
    .map((response: Response)=>{
			return response;
		})
		.catch(this.handleError);	
	}

	getCommunities():Observable<Users[]>{
		return this.httpClient.get(this.API_URL+"getCommunities")
    .map((response: Response)=>{
			return response;
		})
		.catch(this.handleError);	
	}

  getCountries():Observable<Users[]>{
    return this.httpClient.get(this.API_URL+"getCountries")
    .map((response: Response)=>{
      return response;
    })
    .catch(this.handleError);
  }

  getStates(id):Observable<Users[]>{
    let url=this.API_URL+"getStates/country_id/"+id;
    return this.httpClient.get(url)
    .map((response: Response)=>{
      return response;
    })
    .catch(this.handleError);
  }

  getCities(id):Observable<Users[]>{
    let url=this.API_URL+"getCities/state_id/"+id;
    return this.httpClient.get(url)
    .map((response: Response)=>{
      return response;
    })
    .catch(this.handleError);
  }

  /*getLoyalityPoints : function()
    {
      url=API_URL+ApiUrlService.getLoyalityPoints.replace('USER_ID',SessionService.getUser().id).replace('TOKEN',SessionService.getUser().token);
      $http.get(url)
      .success(
      function(response)
      {
        $rootScope.$broadcast('loyality:points:fetched', response); 
      }) 
      .error(
      function(response)
      {
        console.log(JSON.stringify(response));
        $rootScope.$broadcast('no:loyality:points:fetched'); 
      });
    },
    forgotPassword : function(loginDetail)
    {
      // var login = JSON.stringify(loginDetail);
      $http({
      method: 'POST',
      url: API_URL+"forgetPassword",
      data: Utility.convertToParams(loginDetail),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(
      function(response)
      {
        console.log(JSON.stringify(response));
        $rootScope.$broadcast('forget:password:success', response);
      })
      .error(
      function(response)
      {
        console.log(JSON.stringify(response));
      });
    },*/
  getSession(){
    return this.user;
  }

  setSession(value){
    this.user=value;
  }

  setAsGuest(value){
    this.guest=value
  }
  getAsGuest(){
    return this.guest;
  }
  setDeviceToken(token){
    this.deviceToken = token;
  }
  getDeviceToken(){
    return this.deviceToken;
  }
  setNotificationType(type){
    this.notificationType = type;
  }
  getNotificationType(){
    return this.notificationType;
  }
  setUser(obj){
    this.user = obj;
  }
  getUser(){
    return this.user;
  }
  setLogin(value){
    this.login=value;
  }
  getLogin(){
    return this.login;
  }
	private handleError(error: Response) {
		console.log("Error=="+error);
		return Observable.throw(error.statusText);
	}
}
