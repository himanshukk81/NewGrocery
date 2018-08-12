webpackJsonp([0],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment_environment__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// declare var API_URL;



var SessionServiceProvider = /** @class */ (function () {
    // users:Array<{id:string,name:string}>;
    function SessionServiceProvider(httpClient, toastCtrl) {
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        console.log('Hello SessionServiceProvider Provider');
        this.API_URL = __WEBPACK_IMPORTED_MODULE_3__environment_environment__["a" /* environment */].API_URL.dev;
    }
    SessionServiceProvider.prototype.convertToParams = function (data) {
        var p = [];
        for (var key in data) {
            p.push(key + '=' + encodeURIComponent(data[key]));
        }
        return p.join('&');
    };
    SessionServiceProvider.prototype.showToastMessage = function (messageText) {
        var toast = this.toastCtrl.create({
            message: messageText,
            duration: 1500,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SessionServiceProvider.prototype.createUser = function (userInfo) {
        var data = this.convertToParams(userInfo);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        return this.httpClient.post(this.API_URL + "register", data, httpOptions).map(function (response) {
            return response;
        })
            .catch(this.handleError);
    };
    SessionServiceProvider.prototype.getOperatingLocations = function () {
        return this.httpClient.get(this.API_URL + "getOperatingLocations").map(function (response) {
            return response;
        })
            .catch(this.handleError);
    };
    SessionServiceProvider.prototype.getCommunities = function () {
        return this.httpClient.get(this.API_URL + "getCommunities").map(function (response) {
            return response;
        })
            .catch(this.handleError);
    };
    SessionServiceProvider.prototype.handleError = function (error) {
        console.log("Error==" + error);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.statusText);
    };
    SessionServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], SessionServiceProvider);
    return SessionServiceProvider;
}());

//# sourceMappingURL=session-service.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
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
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductListPage = /** @class */ (function () {
    function ProductListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductListPage');
    };
    ProductListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-list',template:/*ion-inline-start:"/Users/himanshu/cre8CommLatest/src/pages/product-list/product-list.html"*/'<!--\n  Generated template for the ProductListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Product List</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/himanshu/cre8CommLatest/src/pages/product-list/product-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProductListPage);
    return ProductListPage;
}());

//# sourceMappingURL=product-list.js.map

/***/ }),

/***/ 161:
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
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 205:
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
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_session_service_session_service__ = __webpack_require__(135);
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
    function HomePage(service, navCtrl) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.loader = false;
        this.signupData = {};
    }
    HomePage.prototype.signUp = function () {
        var _this = this;
        if (!this.signupData.name) {
            this.service.showToastMessage('Please enter your first name');
            return;
        }
        if (!this.signupData.surname) {
            this.service.showToastMessage('Please enter your last name');
            return;
        }
        if (!this.signupData.gender) {
            this.service.showToastMessage('Please select your gender');
            return;
        }
        if (!this.signupData.phone) {
            this.service.showToastMessage('Please enter your mobile number');
            return;
        }
        if (!this.signupData.email) {
            this.service.showToastMessage('Please enter your email');
            return;
        }
        if (!this.signupData.password) {
            this.service.showToastMessage('Please enter your password');
            return;
        }
        // if(!this.signupData.password1)
        // {
        //   this.service.showToastMessage('Please enter your confirm password');
        //   return;
        // }
        if (!this.signupData.termAndCondition) {
            this.service.showToastMessage('Please check term and condition');
            return;
        }
        this.service.createUser(this.signupData).subscribe(function (data) {
            _this.service.showToastMessage("Successfully Add User");
            console.log("Data===" + data);
        }, function (err) {
            console.log("err===" + err);
            _this.service.showToastMessage("Please Try Again");
        });
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
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/himanshu/cre8CommLatest/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Sign Up</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content scroll="true">\n   <ion-list>\n      <ion-item>\n          <ion-label color="primary">Name</ion-label>\n          <ion-input placeholder="Enter Name" [(ngModel)]="signupData.name" type="text"></ion-input>\n      </ion-item>    \n\n      <ion-item>\n          <ion-label color="primary">Surname</ion-label>\n          <ion-input placeholder="Enter Name" [(ngModel)]="signupData.surname" type="text"></ion-input>\n      </ion-item>    \n\n      <ion-item>\n          <ion-label color="primary">Gender</ion-label>\n          <ion-input placeholder="Enter Gender" [(ngModel)]="signupData.gender" type="text"></ion-input>\n      </ion-item>    \n      <ion-item>\n          <ion-label color="primary">Phone</ion-label>\n          <ion-input placeholder="Enter Phone" [(ngModel)]="signupData.phone" type="text"></ion-input>\n      </ion-item>    \n      <ion-item>\n          <ion-label color="primary">Community</ion-label>\n          <ion-input placeholder="Enter Community" [(ngModel)]="signupData.community" type="text"></ion-input>\n      </ion-item>    \n      <ion-item>\n          <ion-label color="primary">Country Id</ion-label>\n          <ion-input placeholder="Enter Country Id" [(ngModel)]="signupData.country_id" type="text"></ion-input>\n      </ion-item>    \n      <ion-item>\n          <ion-label color="primary">State Id</ion-label>\n          <ion-input placeholder="Enter State Id" [(ngModel)]="signupData.state_id" type="text"></ion-input>\n      </ion-item>    \n      <ion-item>\n          <ion-label color="primary">District Id</ion-label>\n          <ion-input placeholder="Enter District Id" [(ngModel)]="signupData.district_id" type="text"></ion-input>\n      </ion-item>    \n      <ion-item>\n          <ion-label color="primary">Email</ion-label>\n          <ion-input placeholder="Enter Email" [(ngModel)]="signupData.email" type="text"></ion-input>\n      </ion-item>    \n      <ion-item>\n          <ion-label color="primary">Password</ion-label>\n          <ion-input placeholder="Enter Password" [(ngModel)]="signupData.password" type="text"></ion-input>\n      </ion-item> \n      \n      <ion-item>\n          <ion-label color="primary">Terms and Condition</ion-label>\n          <ion-input placeholder="Enter Condition" [(ngModel)]="signupData.termAndCondition" type="text"></ion-input>\n      </ion-item> \n\n      <ion-item>\n          <ion-label color="primary">Open</ion-label>\n          <ion-input placeholder="Enter Open" [(ngModel)]="signupData.open_to_connect" type="text"></ion-input>\n      </ion-item> \n    \n      <ion-item text-center>\n          <Button ion-button color="primary" (click)="signUp()">Submit</Button>\n      </ion-item>\n    \n   </ion-list>  \n  </ion-content>'/*ion-inline-end:"/Users/himanshu/cre8CommLatest/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_session_service_session_service__["a" /* SessionServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_session_service_session_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_list_product_list__ = __webpack_require__(150);
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
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LandingPage = /** @class */ (function () {
    function LandingPage(service, navCtrl, navParams) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.locations = [];
        this.communities = [];
        this.loader = false;
        this.user = {};
    }
    LandingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loader = true;
        // console.log('ionViewDidLoad LandingPage');
        this.service.getOperatingLocations().subscribe(function (locationData) {
            _this.locations = locationData;
            _this.service.getCommunities().subscribe(function (communitiesData) {
                _this.communities = communitiesData;
                _this.loader = false;
            }, function (err) {
                console.log("Error data====" + err);
                _this.loader = false;
                _this.service.showToastMessage("Please try again");
            });
        }, function (err) {
            console.log("Error data====" + err);
            _this.loader = false;
            _this.service.showToastMessage("Please try again");
        });
    };
    LandingPage.prototype.go = function () {
        if (!this.user.location) {
            this.service.showToastMessage("Please Select Location");
            return;
        }
        if (!this.user.community) {
            this.service.showToastMessage("Please Select Community");
            return;
        }
        localStorage.locationCommunitySelected = true;
        localStorage.location = this.user.location;
        localStorage.community = this.user.community;
        localStorage.locations = this.locations;
        localStorage.communities = this.communities;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__product_list_product_list__["a" /* ProductListPage */]);
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-landing',template:/*ion-inline-start:"/Users/himanshu/cre8CommLatest/src/pages/landing/landing.html"*/'<!--\n  Generated template for the LandingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Landing</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="loader" class="loader" style="top: 30%">\n      <ion-spinner icon="bubbles"></ion-spinner>\n  </div>\n  <ion-list [hidden]="loader"> \n    <ion-item>\n        <ion-label>Select Location</ion-label>\n        <ion-select [(ngModel)]="user.location" >\n          <ion-option *ngFor="let location of locations;let i=index">{{location.name}}</ion-option>\n        </ion-select>\n    </ion-item>    \n\n    <ion-item>\n        <ion-label>Select Community</ion-label>\n        <ion-select [(ngModel)]="user.community" >\n          <ion-option *ngFor="let community of communities;let i=index">{{community.name}}</ion-option>\n        </ion-select>\n    </ion-item> \n    <ion-item text-center>\n      <Button ion-button round outline (click)="go()">Go</Button>\n    </ion-item>\n  </ion-list>  \n</ion-content>\n'/*ion-inline-end:"/Users/himanshu/cre8CommLatest/src/pages/landing/landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_session_service_session_service__["a" /* SessionServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_landing_landing__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_product_list_product_list__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_session_service_session_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(252);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_landing_landing__["a" /* LandingPage */], __WEBPACK_IMPORTED_MODULE_8__pages_product_list_product_list__["a" /* ProductListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_product_list_product_list__["a" /* ProductListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_session_service_session_service__["a" /* SessionServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_landing_landing__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_product_list_product_list__ = __webpack_require__(150);
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
        if (localStorage.locationCommunitySelected) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_product_list_product_list__["a" /* ProductListPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_landing_landing__["a" /* LandingPage */];
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Product', component: __WEBPACK_IMPORTED_MODULE_6__pages_product_list_product_list__["a" /* ProductListPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_5__pages_landing_landing__["a" /* LandingPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        if (page.title == 'Logout') {
            localStorage.clear();
            this.nav.setRoot(page.component);
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myNav'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/himanshu/cre8CommLatest/src/app/app.html"*/'\n<ion-menu  [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" #myNav></ion-nav>'/*ion-inline-end:"/Users/himanshu/cre8CommLatest/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    API_URL: {
        dev: "https://justmyroots.com/api/cre8comm/"
    }
};
//# sourceMappingURL=environment.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map