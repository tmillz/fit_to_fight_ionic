import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public formData;
  public tof = false;
  public tofsu = false;
  public tofpu = false;
  
  constructor(public navCtrl: NavController) {
  this.formData = {
    gender: 'Male',
	waist: '50',
    situps: '50',
	pushups: '50',
	cardioType: '',
	cardioTime: '',
	score:  '100',
	}
  
  }
  
  ionViewDidLoad() {
     //this.formData.score = parseInt(this.formData.waist) + parseInt(this.formData.situps) + parseInt(this.formData.pushups);
  }
  
  toggle(){
    console.log('waist slider toggled');
	if (this.tof == false) {
	  this.tof = true;
	} else {
      this.tof = false;
    }	
  }
  
  togglesu(){
    console.log('situp slider toggled');
	if (this.tofsu == false) {
	  this.tofsu = true;
	} else {
      this.tofsu = false;
    }	
  }
  
  togglepu(){
    console.log('push up slider toggled');
	if (this.tofpu == false) {
	  this.tofpu = true;
	} else {
      this.tofpu = false;
    }	
  }

}
