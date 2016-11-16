import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tof = false;
        this.tofsu = false;
        this.tofpu = false;
        this.formData = {
            gender: 'Male',
            waist: '50',
            situps: '50',
            pushups: '50',
            cardioType: '',
            cardioTime: '',
            score: '100',
        };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        //this.formData.score = parseInt(this.formData.waist) + parseInt(this.formData.situps) + parseInt(this.formData.pushups);
    };
    HomePage.prototype.toggle = function () {
        console.log('waist slider toggled');
        if (this.tof == false) {
            this.tof = true;
        }
        else {
            this.tof = false;
        }
    };
    HomePage.prototype.togglesu = function () {
        console.log('situp slider toggled');
        if (this.tofsu == false) {
            this.tofsu = true;
        }
        else {
            this.tofsu = false;
        }
    };
    HomePage.prototype.togglepu = function () {
        console.log('push up slider toggled');
        if (this.tofpu == false) {
            this.tofpu = true;
        }
        else {
            this.tofpu = false;
        }
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
    ];
    return HomePage;
}());
//# sourceMappingURL=home.js.map