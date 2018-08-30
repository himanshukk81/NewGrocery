webpackJsonp([3],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment_environment__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(268);
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



var SessionService = /** @class */ (function () {
    // users:Array<{id:string,name:string}>;
    function SessionService(httpClient, toastCtrl) {
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        this.user = {};
        console.log('Hello SessionServiceProvider Provider');
        this.API_URL = __WEBPACK_IMPORTED_MODULE_3__environment_environment__["a" /* environment */].API_URL.dev;
    }
    SessionService.prototype.convertToParams = function (data) {
        var p = [];
        for (var key in data) {
            p.push(key + '=' + encodeURIComponent(data[key]));
        }
        return p.join('&');
    };
    SessionService.prototype.showToastMessage = function (messageText) {
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
    SessionService.prototype.createUser = function (userInfo) {
        var data = this.convertToParams(userInfo);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        return this.httpClient.post(this.API_URL + "register", data, httpOptions)
            .map(function (response) {
            return response;
        })
            .catch(this.handleError);
    };
    SessionService.prototype.getOperatingLocations = function () {
        return this.httpClient.get(this.API_URL + "getOperatingLocations")
            .map(function (response) {
            return response;
        })
            .catch(this.handleError);
    };
    SessionService.prototype.getCommunities = function () {
        return this.httpClient.get(this.API_URL + "getCommunities")
            .map(function (response) {
            return response;
        })
            .catch(this.handleError);
    };
    SessionService.prototype.getCountries = function () {
        return this.httpClient.get(this.API_URL + "getCountries")
            .map(function (response) {
            return response;
        })
            .catch(this.handleError);
    };
    SessionService.prototype.getStates = function (id) {
        var url = this.API_URL + "getStates/country_id/" + id;
        return this.httpClient.get(url)
            .map(function (response) {
            return response;
        })
            .catch(this.handleError);
    };
    SessionService.prototype.getCities = function (id) {
        var url = this.API_URL + "getCities/state_id/" + id;
        return this.httpClient.get(url)
            .map(function (response) {
            return response;
        })
            .catch(this.handleError);
    };
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
    SessionService.prototype.getSession = function () {
        return this.user;
    };
    SessionService.prototype.setSession = function (value) {
        this.user = value;
    };
    SessionService.prototype.handleError = function (error) {
        console.log("Error==" + error);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error.statusText);
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], SessionService);
    return SessionService;
}());

//# sourceMappingURL=session-service.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
    function ProductListPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.cartValue = 0;
        events.subscribe('landing:data:changed', function () {
            console.log("landing data changed");
            console.log("comminity is :---" + JSON.parse(localStorage.community));
            console.log("location is :---" + JSON.parse(localStorage.location));
        });
    }
    ProductListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductListPage');
    };
    ProductListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-list',template:/*ion-inline-start:"D:\ionic-3\cre8comm\src\pages\product-list\product-list.html"*/'<ion-header>\n\n  <ion-navbar color="danger" align-title="left" >\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title mode="android">Product List</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only id="cart-btn">\n\n        <ion-badge color="danger" id="cart-badge" class="shake">{{cartValue}}</ion-badge>\n\n        <ion-icon name="cart" ></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="funnel"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-3\cre8comm\src\pages\product-list\product-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]) === "function" && _c || Object])
    ], ProductListPage);
    return ProductListPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=product-list.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\ionic-3\cre8comm\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title mode="android">About Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic-3\cre8comm\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactUsPage');
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-us',template:/*ion-inline-start:"D:\ionic-3\cre8comm\src\pages\contact-us\contact-us.html"*/'<!--\n  Generated template for the ContactUsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title mode="android">Contact Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic-3\cre8comm\src\pages\contact-us\contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, params, view) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.view = view;
        this.option = 1;
        console.log(this.params.get('userId'));
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.dismiss = function () {
        this.view.dismiss("Login Modal closed");
    };
    LoginPage.prototype.login = function () {
    };
    LoginPage.prototype.signUpModal = function () {
        this.view.dismiss(2);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\ionic-3\cre8comm\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar [hidden]="true" *navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item no-lines no-padding text-wrap text-center style="background-color:#D4D8D8;">\n    <img src="./assets/imgs/crea8_logo.png" style="width: 70%;">\n    <p>\n      <ion-icon name="quote"></ion-icon>\n      <span style="font-size: 16px"> For the community, By the community </span>\n      <ion-icon name="quote"></ion-icon>\n      <ion-icon name="md-close" (click)="dismiss()" style="float:right;margin-right:10px"></ion-icon>\n      <!-- <i class="ion-close" style="float: right;" ></i> -->\n    </p>\n  </ion-item>\n  <div class="button-bar" ng-if="loginOpened">\n    <button ng-class="{\'active\':option==1}" class="button button-stable button-outline" ng-click="changeOption(1)">LOG IN</button>\n    <button ng-class="{\'active\':option==2}" class="button button-stable button-outline" ng-click="changeOption(2)">Continue as Guest</button>\n  </div>\n  <ion-list padding style="border-top: none;" *ngIf="option==1">\n    <ion-item text-wrap text-center no-lines>\n      <p style="font-size: 20px;margin-bottom: 8%;padding-bottom: 1%;">Sign In</p>\n      <p>Do Not Have Account ? Click <a (click)="signUpModal()">Sign Up</a> To Registration.</p>      \n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n    <br/>\n    <button ion-button large full (click)="login()" color="twitter" >\n      <ion-icon name="log-in"></ion-icon>Log in\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic-3\cre8comm\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		679,
		2
	],
	"../pages/contact-us/contact-us.module": [
		680,
		1
	],
	"../pages/login/login.module": [
		681,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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



var RegisterPage = /** @class */ (function () {
    function RegisterPage(service, view) {
        this.service = service;
        this.view = view;
        this.loader = false;
        this.signupData = {};
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.communities = [];
        this.stateFound = false;
        this.cityFound = false;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.service.getCountries().subscribe(function (countries) {
            _this.countries = countries;
            // now fetching communities
            _this.service.getCommunities().subscribe(function (communitiesData) {
                _this.communities = communitiesData;
            }, function (err) {
                console.log("Error data====" + err);
                _this.loader = false;
                _this.service.showToastMessage("Please try again");
            });
        }, function (err) {
            console.log("Error data====" + err);
            _this.service.showToastMessage("Please try again");
        });
    };
    RegisterPage.prototype.getStates = function () {
        var _this = this;
        if (!this.signupData.country_id) {
            return false;
        }
        this.stateFound = false;
        this.cityFound = false;
        this.service.getStates(this.signupData.country_id).subscribe(function (states) {
            if (states.length > 0) {
                _this.states = states;
                _this.stateFound = true;
            }
            else {
                _this.service.showToastMessage("States not found,select another country");
            }
        }, function (err) {
            _this.service.showToastMessage("Problem in fetching states for this country");
        });
    };
    RegisterPage.prototype.getCities = function () {
        var _this = this;
        this.cityFound = false;
        this.service.getCities(this.signupData.state_id).subscribe(function (cities) {
            if (cities.length > 0) {
                _this.cities = cities;
                _this.cityFound = true;
            }
            else {
                _this.service.showToastMessage("Cities not found,select another state");
            }
        }, function (err) {
            _this.service.showToastMessage("Problem in fetching cities for this state");
        });
    };
    RegisterPage.prototype.dismiss = function () {
        this.view.dismiss("Sign up closed");
    };
    RegisterPage.prototype.signUp = function () {
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
        if (!this.signupData.community) {
            this.service.showToastMessage('Please select your community');
            return;
        }
        if (!this.signupData.country_id) {
            this.service.showToastMessage('Please select your country');
            return;
        }
        if (!this.signupData.state_id) {
            this.service.showToastMessage('Please select your state');
            return;
        }
        if (!this.signupData.district_id) {
            this.service.showToastMessage('Please select your city');
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
        if (!this.signupData.cPassword) {
            this.service.showToastMessage('Please confirm your password');
            return;
        }
        if (this.signupData.password != this.signupData.cPassword) {
            this.service.showToastMessage('Password missmatch');
            return;
        }
        if (!this.signupData.termAndCondition) {
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
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic-3\cre8comm\src\pages\register\register.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Sign Up</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="danger" (click)="dismiss()">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content scroll="true" padding>\n  <ion-list>\n    <ion-item style="border-top:none;">\n      <ion-label stacked>Name</ion-label>\n      <ion-input placeholder="Enter Name" [(ngModel)]="signupData.name" type="text"></ion-input>\n    </ion-item> \n\n    <ion-item>\n      <ion-label stacked>Last Name</ion-label>\n      <ion-input placeholder="Enter Name" [(ngModel)]="signupData.surname" type="text"></ion-input>\n    </ion-item>    \n    <ion-item>\n      <p style="font-size: medium;">\n        <span style="margin-right: 10%;">Gender</span>\n        <input type="radio" value="Male" [(ngModel)]="signupData.gender"> Male\n        <input type="radio" value="Female" [(ngModel)]="signupData.gender"> Female\n      </p>\n    </ion-item>    \n    <ion-item>\n      <ion-label stacked>Phone</ion-label>\n      <ion-input placeholder="Enter Phone" [(ngModel)]="signupData.phone" type="phone"></ion-input>\n    </ion-item> \n    <ion-item>\n      <ion-label stacked>Select Community</ion-label>\n      <ion-select [(ngModel)]="signupData.community" >\n        <ion-option *ngFor="let community of communities" [value]="community.id">{{community.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Select Country</ion-label>\n      <ion-select [(ngModel)]="signupData.country_id" (ngModelChange)="getStates($event)">\n        <ion-option *ngFor="let country of countries" [value]="country.id">{{country.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="stateFound">\n      <ion-label stacked>Select State</ion-label>\n      <ion-select [(ngModel)]="signupData.state_id" (ngModelChange)="getCities($event)">\n        <ion-option *ngFor="let state of states" [value]="state.id">{{state.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="cityFound">\n      <ion-label stacked>Select City</ion-label>\n      <ion-select [(ngModel)]="signupData.district_id">\n        <ion-option *ngFor="let city of cities" [value]="city.id">{{city.name}}</ion-option>\n      </ion-select>\n    </ion-item>   \n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input placeholder="Enter Email" [(ngModel)]="signupData.email" type="email"></ion-input>\n    </ion-item>    \n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input placeholder="Enter Password" [(ngModel)]="signupData.password" type="password"></ion-input>\n    </ion-item> \n    <ion-item>\n      <ion-label stacked>Confirm Password</ion-label>\n      <ion-input placeholder="Confirm your password" [(ngModel)]="signupData.cPassword" type="text"></ion-input>\n    </ion-item><br/>\n    <ion-item text-wrap>\n      <ion-label>I have read & agree to the T&C and Privacy Policy</ion-label>\n      <ion-checkbox color="danger" [(ngModel)]="signupData.termAndCondition"></ion-checkbox>\n    </ion-item><br/> \n    <ion-item text-wrap>\n      <ion-label>I want other communities to connect with me </ion-label>\n      <ion-checkbox color="danger" [(ngModel)]="signupData.open_to_connect"></ion-checkbox>\n    </ion-item><br/>\n    <Button ion-button full large color="danger" (click)="signUp()">Submit</Button>\n    <br/><br/>\n  </ion-list>  \n</ion-content>'/*ion-inline-end:"D:\ionic-3\cre8comm\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_session_service_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
    function LandingPage(service, navCtrl, navParams, events) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
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
        localStorage.location = JSON.stringify(this.user.location);
        localStorage.community = JSON.stringify(this.user.community);
        localStorage.locations = JSON.stringify(this.locations);
        localStorage.communities = JSON.stringify(this.communities);
        this.events.publish('landing:data:fetched', this.communities, this.locations);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__product_list_product_list__["a" /* ProductListPage */]);
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-landing',template:/*ion-inline-start:"D:\ionic-3\cre8comm\src\pages\landing\landing.html"*/'<!--\n\n  Generated template for the LandingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar [hidden]="true" *navbar>\n\n    <ion-title>Landing</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <br/><br/><br/><br/><br/><br/><br/>\n\n  <ion-item text-center no-lines [hidden]="!loader">\n\n    <ion-spinner icon="dots"></ion-spinner>\n\n  </ion-item>\n\n  <ion-list [hidden]="loader" no-lines> \n\n    <ion-item>\n\n      <ion-label>Select Location</ion-label>\n\n      <ion-select [(ngModel)]="user.location" >\n\n        <ion-option *ngFor="let location of locations" [value]="location">{{location.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>    \n\n\n\n    <ion-item>\n\n      <ion-label>Select Community</ion-label>\n\n      <ion-select [(ngModel)]="user.community" >\n\n        <ion-option *ngFor="let community of communities" [value]="community">{{community.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item> \n\n    <ion-item text-center>\n\n      <Button ion-button full color="secondary" (click)="go()">Go</Button>\n\n    </ion-item>\n\n  </ion-list>  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic-3\cre8comm\src\pages\landing\landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_session_service_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_us_contact_us__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_product_list_product_list__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_session_service_session_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(255);
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
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__["a" /* LandingPage */], __WEBPACK_IMPORTED_MODULE_11__pages_product_list_product_list__["a" /* ProductListPage */], __WEBPACK_IMPORTED_MODULE_10__pages_contact_us_contact_us__["a" /* ContactUsPage */], __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */], __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], { mode: 'ios' }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_product_list_product_list__["a" /* ProductListPage */], __WEBPACK_IMPORTED_MODULE_10__pages_contact_us_contact_us__["a" /* ContactUsPage */], __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */], __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_session_service_session_service__["a" /* SessionService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_register__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_landing_landing__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_product_list_product_list__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_us_contact_us__ = __webpack_require__(152);
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
    function MyApp(platform, statusBar, splashScreen, events, modal) {
        var _this = this;
        this.events = events;
        this.modal = modal;
        this.pages = [];
        this.locations = [];
        this.communities = [];
        this.loader = false;
        this.user = {};
        this.loginOpened = false;
        this.signupOpened = false;
        events.subscribe('landing:data:fetched', function (communitiesData, locations) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.communities = communitiesData;
            _this.locations = locations;
        });
        if (localStorage.locationCommunitySelected) {
            if (JSON.parse(localStorage.locationCommunitySelected)) {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_product_list_product_list__["a" /* ProductListPage */];
            }
            else {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_landing_landing__["a" /* LandingPage */];
            }
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_landing_landing__["a" /* LandingPage */];
        }
        if (localStorage.communities) {
            this.communities = JSON.parse(localStorage.communities);
        }
        if (localStorage.locations) {
            this.locations = JSON.parse(localStorage.locations);
        }
        if (localStorage.community) {
            this.user.community = JSON.parse(localStorage.community);
        }
        if (localStorage.location) {
            this.user.location = JSON.parse(localStorage.location);
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { id: 1, title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_product_list_product_list__["a" /* ProductListPage */], icon: "cart" },
            { id: 2, title: 'Community', icon: "aperture", array: this.communities },
            { id: 3, title: 'Location', icon: "pin", array: this.locations },
            { id: 4, title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_9__pages_contact_us_contact_us__["a" /* ContactUsPage */], icon: "chatbubbles" },
            { id: 5, title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */], icon: "document" },
            { id: 6, title: 'Login', icon: "log-in" },
        ];
        if (localStorage.user) {
            if (JSON.parse(localStorage.user)) {
                this.pages[5].title = 'Logout';
                this.pages[5].icon = 'log-out';
            }
        }
    }
    MyApp.prototype.ionViewDidLoad = function () {
        this.openLogin();
    };
    MyApp.prototype.openSlide = function (index) {
        console.log(index);
        for (var i = 0; i < this.pages.length; ++i) {
            if (!(index === i)) {
                this.pages[i].toogle = false;
            }
        }
        this.pages[index].toogle = !this.pages[index].toogle;
    };
    MyApp.prototype.openPage = function (page) {
        if (page.component) {
            this.nav.setRoot(page.component);
        }
        else if (page.id == 6) {
            // this.openLogin();
            this.openRegister();
            /*localStorage.user=null;
            this.pages[5].title='Login';
            this.pages[5].icon='log-in';*/
            // localStorage.clear();
            // this.nav.setRoot(LandingPage);
        }
    };
    MyApp.prototype.setStorage = function (pageId, item) {
        if (pageId == 2) {
            localStorage.community = JSON.stringify(item);
            this.user.community = item;
        }
        else if (pageId == 3) {
            localStorage.location = JSON.stringify(item);
            this.user.location = item;
        }
        this.events.publish('landing:data:changed');
        /*console.log("page id is :---"+pageId);
        console.log("item is :---"+item);*/
    };
    MyApp.prototype.openLogin = function () {
        var _this = this;
        var loginModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], { userId: 8675309 });
        loginModal.onDidDismiss(function (data) {
            console.log(data);
            if (data === 2) {
                _this.openRegister();
            }
        });
        loginModal.present();
    };
    MyApp.prototype.openRegister = function () {
        var registerModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__pages_register_register__["a" /* RegisterPage */], { userId: 8675309 });
        registerModal.onDidDismiss(function (data) {
            console.log(data);
        });
        registerModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic-3\cre8comm\src\app\app.html"*/'\n\n<ion-menu  [content]="content">\n\n  <ion-header>\n\n    <!-- <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar> -->\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-item no-padding text-wrap *ngFor="let p of pages;let i=index">\n\n        <button ion-item no-lines (click)="openPage(p)" detail-none style="    padding-right: 10px;" menuClose>\n\n          <ion-icon name="{{p.icon}}" item-start color="danger"></ion-icon>\n\n            <h3>{{p.title}}</h3>\n\n            <p *ngIf="p.id==2">{{user.community.name}}</p>\n\n            <p *ngIf="p.id==3">{{user.location.name}}</p>\n\n          <ion-icon [name]="p.toogle ? \'arrow-up\' : \'arrow-down\'" item-end *ngIf="p.id==2 || p.id==3" (click)="openSlide(i);$event.stopPropagation()" color="danger"></ion-icon>\n\n        </button>\n\n        <ion-list class="menu-list" *ngIf="p.toogle && p.array" no-margin style="padding-left: 37px;">\n\n          <button ion-item *ngFor="let item of p.array; let j = index" detail-none class="child-item" text-wrap (click)="setStorage(p.id,item)" menuClose>\n\n            <h2>{{ item.name }}</h2>\n\n          </button>\n\n        </ion-list>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" #myNav></ion-nav>'/*ion-inline-end:"D:\ionic-3\cre8comm\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 399:
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

},[351]);
//# sourceMappingURL=main.js.map