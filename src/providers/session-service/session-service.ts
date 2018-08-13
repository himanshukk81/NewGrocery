import { HttpClient,HttpHeaders ,HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ToastController } from 'ionic-angular';
import {environment} from '../../environment/environment'

import {Users} from "../../environment/environment";

// declare var API_URL;
import {Observable} from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SessionServiceProvider {
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
