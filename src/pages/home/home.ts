import { Component, NgModule, Input } from '@angular/core';
import { NavController, IonicPageModule } from 'ionic-angular';
import { FloatRangeComponent } from '../../components/float-range/float-range';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public formData;
  public tof = false;
  public tofsu = false;
  public tofpu = false;
  //private waist = '33';

  @Input('formData') ngModule: any;
  
  constructor(public navCtrl: NavController) {
  this.formData = {
    gender: 'Male',
	  age: '',
	  waist: '33',
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

  onValueChange(event){console.log(event);}

}
