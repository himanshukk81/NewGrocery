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

  /*
    getStates : function(countryId)
    {
      url=API_URL+ApiUrlService.getStates.replace('COUNTRY_ID',countryId);
      $http.get(url)
      .success(
      function(response)
      {
        $rootScope.$broadcast('states:fetched', response); 
      }) 
      .error(
      function(response)
      {
        console.log(JSON.stringify(response));
      });
    },
    getCities : function(stateId)
    {
      url=API_URL+ApiUrlService.getCities.replace('STATE_ID',stateId);
      $http.get(url)
      .success(
      function(response)
      {
        $rootScope.$broadcast('cities:fetch', response); 
      }) 
      .error(
      function(response)
      {
        console.log(JSON.stringify(response));
      });
    },
    getLoyalityPoints : function()
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
    login : function(loginDetail)
    {
      $http({
      method: 'POST',
      url: API_URL+"login",
      data: Utility.convertToParams(loginDetail),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(
      function(response)
      {
        console.log(JSON.stringify(response));
        $rootScope.$broadcast('login:success', response);
      })
      .error(
      function(response)
      {
        console.log(JSON.stringify(response));
        $rootScope.$broadcast('login:failed'); 
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
	private handleError(error: Response) {
		console.log("Error=="+error);
		return Observable.throw(error.statusText);
	}
}
