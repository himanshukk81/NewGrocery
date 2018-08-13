import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {SessionService} from '../../providers/session-service/session-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loader:boolean=false;
  signupData:any={};		
  constructor(public service:SessionService,public navCtrl: NavController) {

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
    // if(!this.signupData.password1)
    // {
    //   this.service.showToastMessage('Please enter your confirm password');
    //   return;
    // }
    if(!this.signupData.termAndCondition)
    {
      this.service.showToastMessage('Please check term and condition');
      return;
    }


    this.service.createUser(this.signupData).subscribe((data)=>{
      this.service.showToastMessage("Successfully Add User");
      console.log("Data==="+data);
    },(err)=>{
      console.log("err==="+err);
      this.service.showToastMessage("Please Try Again");
    })
    // if (this.signupData.password==this.signupData.password1) 
    // {
    //   this.loader=true;
    //   // this.service.signUpUser(this.signupData).then((data)=>{
    //   //   console.log(data);
    //   //   this.service.showToastMessage("Successfully Add User");
    //   // },(err)=>{
    //   //    console.log("Error"+err);
    //   //    this.service.showToastMessage("Please Try Again");
    //   // })




    //   this.service.createUser(this.signupData).subscribe((data)=>{
    //     this.service.showToastMessage("Successfully Add User");
    //   },(err)=>{
    //     console.log("err==="+err);
    //     this.service.showToastMessage("Please Try Again");
    //   })
    // }
    // else
    // {
    //   this.service.showToastMessage('Please enter same password')
    // } 
   }
}
