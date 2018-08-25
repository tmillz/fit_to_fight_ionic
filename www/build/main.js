webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Terry/fittofight/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Timer" tabIcon="md-stopwatch"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Records" tabIcon="md-stats"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/Terry/fittofight/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tof = false;
        this.tofsu = false;
        this.tofpu = false;
        this.formData = {
            gender: 'Male',
            age: '',
            waist: '33',
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
    HomePage.prototype.onValueChange = function (event) { console.log(event); };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('formData'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "ngModule", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Terry/fittofight/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Fit to Fight</ion-title>\n	<ion-buttons end>\n	<ion-badge item-right>{{formData.waist}}</ion-badge>\n	</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n     \n	<!--Gender--> \n	<ion-item>\n	  <ion-label>Gender:</ion-label>\n	  <ion-select [(ngModel)]="formData.gender" multiple="false">\n	  <ion-option>Male</ion-option>\n	  <ion-option>Female</ion-option>\n	  </ion-select>\n	</ion-item>\n	  \n	  <!--Age-->\n	  <ion-item>\n		<ion-label>Age:</ion-label>\n		<ion-select [(ngModel)]="formData.age" multiple="false">\n		<ion-option>Less than 30</ion-option>\n		<ion-option>30 to 39</ion-option>\n		<ion-option>40 to 49</ion-option>\n		<ion-option>50 to 59</ion-option>\n		<ion-option>60 and over</ion-option>\n	  </ion-select>\n	  </ion-item>\n	  \n	  <!--waist-->\n	  <ion-item-sliding>\n	  <ion-item>\n		<ion-label fixed>Waist:</ion-label>\n		<ion-input type="number" #waist [(ngModel)]="formData.waist"></ion-input>\n		<button ion-button icon-only clear item-right (click)="toggle()">\n          <ion-icon name="md-swap"></ion-icon>\n        </button>\n		<ion-badge item-right>{{formData.waist}}</ion-badge>\n		</ion-item>\n		<ion-item-options>\n          <button ion-button color="secondary">Exempt</button>\n        </ion-item-options>  \n	  </ion-item-sliding>\n	  \n	  <!-- waist Slider -->\n	  <ion-item *ngIf="tof">\n			<!--ion-range  min="20" max="50" [(ngModel)]="formData.waist">\n		  <ion-label range-left>20</ion-label>\n		  <ion-label range-right>50</ion-label>\n		</ion-range-->\n		<float-range min="20" max="50" pin="true" step="0.5" snaps="false" [(_ngModel)]="formData.waist">\n			</float-range>\n		</ion-item>\n		\n		<!--float-range min="20" max="50" pin="true" step="0.5" snaps="false" [_ngModel]="formData.waist">\n		</float-range-->\n	  	  \n	  <!--Situps-->\n	  <ion-item>\n		<ion-label fixed>Situps:</ion-label>\n		<ion-input type="number" [(ngModel)]="formData.situps" value=""></ion-input>\n		<button ion-button icon-only clear item-right (click)="togglesu()">\n          <ion-icon name="md-swap"></ion-icon>\n        </button>\n		<ion-badge item-right>{{formData.situps}}</ion-badge>\n	  </ion-item>\n	  \n	  <!-- Situps Slider -->\n	  <ion-item *ngIf="tofsu">\n		<ion-range min="0" max="100" [(ngModel)]="formData.situps" >\n		  <ion-label range-left>0</ion-label>\n		  <ion-label range-right>100</ion-label>\n		</ion-range>\n	  </ion-item>\n	  \n	  <!-- Pushups -->\n	  <ion-item>\n		<ion-label fixed>Pushups:</ion-label>\n		<ion-input type="number" [(ngModel)]="formData.pushups" value=""></ion-input>\n		<button ion-button icon-only clear item-right (click)="togglepu()">\n          <ion-icon name="md-swap"></ion-icon>\n        </button>\n		<ion-badge item-right>{{formData.pushups}}</ion-badge>\n\n	  </ion-item>\n\n	  <!-- Pushups Slider -->\n	  <ion-item *ngIf="tofpu">\n		<ion-range min="0" max="100" [(ngModel)]="formData.pushups" >\n		  <ion-label range-left>0</ion-label>\n		  <ion-label range-right>100</ion-label>\n		</ion-range>\n	  </ion-item>\n	  \n	  <!-- Cardio Type -->\n	  <ion-item>\n	    <ion-label>Cardio Type:</ion-label>\n	      <ion-select [(ngModel)]="formData.cardioType" multiple="false">\n		    <ion-option>Walk</ion-option>\n		    <ion-option>Run</ion-option>\n	      </ion-select>\n	  </ion-item>\n	  \n	  <!-- Cardio Adjustment -->\n	  <ion-item>\n	    <ion-label>Cardio Adjustment:</ion-label>\n	      <ion-select [(ngModel)]="formData.cardioAdjust" multiple="false">\n		    <ion-option>Over 4000ft</ion-option>\n		    <ion-option>Over 6000ft</ion-option>\n		    <ion-option>Over 8000ft</ion-option>\n		    <ion-option>Over 10000ft</ion-option>\n	      </ion-select>\n	  </ion-item>\n	  \n	  <!-- Cardio Time -->\n	  <ion-item>\n		<ion-label>Cardio Time:</ion-label>\n		<ion-datetime displayFormat="HH:mm" [(ngModel)]="formData.cardioTime"></ion-datetime>\n		<ion-badge item-right>{{formData.cardioTime}}</ion-badge>\n	  </ion-item>\n</ion-list>\n<button ion-button block color="light">Save</button>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/Terry/fittofight/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/Terry/fittofight/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Terry/fittofight/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/Terry/fittofight/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Terry/fittofight/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_float_range_float_range__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_float_range_float_range__["a" /* FloatRangeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-nav [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloatRangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FloatRangeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FloatRangeComponent = /** @class */ (function () {
    function FloatRangeComponent() {
        //@Input('waist') ngModel: any;
        this.formData = { waist: '44' };
        this.onChange = function (waist) { };
        this.onTouch = function () { };
        this.disabled = false;
        console.log('Hello FloatRangeComponent Component');
        this.text = 'Hello World';
    }
    FloatRangeComponent_1 = FloatRangeComponent;
    Object.defineProperty(FloatRangeComponent.prototype, "range", {
        set: function (range) {
            var floatRange = this;
            range._ratioToValue = function (ratio) {
                this._step = Math.round(floatRange.step * 100) / 100;
                ratio = (this._max - this._min) * ratio;
                ratio = (ratio / this._step) * this._step + this._min;
                return Math.round(ratio * (1 / this._step)) / (1 / this._step);
                this.onTouch();
            };
        },
        enumerable: true,
        configurable: true
    });
    // Allow Angular to set the value on the component
    FloatRangeComponent.prototype.writeValue = function (value) {
        this.onChange(value);
        this.waist = value;
    };
    // Save a reference to the change function passed to us by
    // the Angular form control
    FloatRangeComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    // Save a reference to the touched function passed to us by
    // the Angular form control
    FloatRangeComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    // Allow the Angular form control to disable this input
    FloatRangeComponent.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], FloatRangeComponent.prototype, "max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], FloatRangeComponent.prototype, "min", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FloatRangeComponent.prototype, "pin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], FloatRangeComponent.prototype, "step", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FloatRangeComponent.prototype, "snaps", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], FloatRangeComponent.prototype, "_ngModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('range'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Range */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Range */]) === "function" && _a || Object),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Range */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Range */]) === "function" && _b || Object])
    ], FloatRangeComponent.prototype, "range", null);
    FloatRangeComponent = FloatRangeComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'float-range',
            //template:/*ion-inline-start:"/Users/Terry/fittofight/src/components/float-range/float-range.html"*/'<!-- Generated template for the FloatRangeComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/Terry/fittofight/src/components/float-range/float-range.html"*/,
            template: '<ion-item no-lines><ion-range #range [min]="min" [max]="max" [pin]="pin" [step]="step" [snaps]="snaps" [(ngModel)]="_ngModel"><ion-label range-left>20</ion-label><ion-label range-right>50</ion-label></ion-range></ion-item>',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["b" /* NG_VALUE_ACCESSOR */],
                    useExisting: FloatRangeComponent_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], FloatRangeComponent);
    return FloatRangeComponent;
    var FloatRangeComponent_1, _a, _b;
}());

//# sourceMappingURL=float-range.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map