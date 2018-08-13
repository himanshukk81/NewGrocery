import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import {SessionService} from '../../providers/session-service/session-service'

@Component({
  selector: 'page-home',
  templateUrl: 'register.html'
})
export class RegisterPage {
  loader:boolean=false;
  signupData:any={};
  countries:any=[];    
  states:any=[];    
  cities:any=[]; 
  communities:any=[];
  stateFound:boolean=false;   
  cityFound:boolean=false;   
  constructor(public service:SessionService,public view: ViewController) {

  }
  ionViewDidLoad() {
    this.service.getCountries().subscribe((countries)=>{
      this.countries=countries;
      // now fetching communities
      this.service.getCommunities().subscribe((communitiesData)=>{
        this.communities=communitiesData;
      },(err)=>{
        console.log("Error data===="+err);
        this.loader=false;
        this.service.showToastMessage("Please try again");
      })     
    },(err)=>{
      console.log("Error data===="+err);
      this.service.showToastMessage("Please try again");
    })
  }
  getStates(){
    if (!this.signupData.country_id) {
      return false;
    }
    this.stateFound=false;
    this.cityFound=false;
    this.service.getStates(this.signupData.country_id).subscribe((states)=>{
      if (states.length>0) { 
        this.states=states;
        this.stateFound=true;
      } else {
        this.service.showToastMessage("States not found,select another country");
      }
    },(err)=>{
      this.service.showToastMessage("Problem in fetching states for this country");
    })
  }
  getCities(){
    this.cityFound=false;
    this.service.getCities(this.signupData.state_id).subscribe((cities)=>{
      if (cities.length>0) { 
        this.cities=cities;
        this.cityFound=true;
      } else {
        this.service.showToastMessage("Cities not found,select another state");
      }
    },(err)=>{
      this.service.showToastMessage("Problem in fetching cities for this state");
    })
  }
  dismiss(){
    this.view.dismiss("Sign up closed");
  }
  signUp()
  {
    if(!this.signupData.name)
    {
      this.service.showToastMessage('Please enter your first name');
      return;
    }
    if(!this.signupData.surname)
    {
      this.service.showToastMessage('Please enter your last name');
      return;
    }
    if(!this.signupData.gender)
    {
      this.service.showToastMessage('Please select your gender');
      return;
    }
    if(!this.signupData.phone)
    {
      this.service.showToastMessage('Please enter your mobile number');
      return;
    }
    if(!this.signupData.community)
    {
      this.service.showToastMessage('Please select your community');
      return;
    }
    if(!this.signupData.country_id)
    {
      this.service.showToastMessage('Please select your country');
      return;
    }
    if(!this.signupData.state_id)
    {
      this.service.showToastMessage('Please select your state');
      return;
    }
    if(!this.signupData.district_id)
    {
      this.service.showToastMessage('Please select your city');
      return;
    }
    if(!this.signupData.email)
    {
      this.service.showToastMessage('Please enter your email');
      return;
    }
    if(!this.signupData.password)
    {
      this.service.showToastMessage('Please enter your password');
      return;
    }
    if(!this.signupData.cPassword)
    {
      this.service.showToastMessage('Please confirm your password');
      return;
    }
    if(this.signupData.password != this.signupData.cPassword )
    {
      this.service.showToastMessage('Password missmatch');
      return;
    }
    
    if(!this.signupData.termAndCondition)
    {
      this.service.showToastMessage('Please check term and condition');
      return;
    }
    /*this.service.createUser(this.signupData)
    .subscribe((data)=>{
      this.service.showToastMessage("Successfully Add User");
      console.log("Data==="+data);
    },(err)=>{
      console.log("err==="+err);
      this.service.showToastMessage("Please Try Again");
    })*/  
  }

}
