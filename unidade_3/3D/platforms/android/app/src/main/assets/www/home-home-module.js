(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Device Motion\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor=\"let provider of providers\">\n    <ion-card-header>\n      <ion-card-subtitle> {{ provider.subtitle }} </ion-card-subtitle>\n      <ion-card-title> {{ provider.title }} </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"5\">\n            Availability:\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-icon *ngIf=\"provider.availability === 0\" color=\"primary\" name=\"help-circle-outline\"></ion-icon>\n            <ion-icon *ngIf=\"provider.availability === 1\" color=\"success\" name=\"checkmark-circle-outline\"></ion-icon>\n            <ion-icon *ngIf=\"provider.availability === 2\" color=\"danger\" name=\"close-circle-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            Data:\n          </ion-col>\n          <ion-col size=\"8\">\n            <ng-container *ngIf=\"provider.value | async as value\">\n              <p>{{ value }}</p>\n            </ng-container>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <p class=\"description\">{{ provider.description }}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle> window event </ion-card-subtitle>\n      <ion-card-title> CompassNeedsCalibration </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p class=\"description\">\n        Used to inform Web sites that a compass being used to provide data for one of the above events is in need of\n        calibration.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-title {\n  font-size: 15px; }\n\nion-icon {\n  font-size: 20px; }\n\nion-card-content {\n  padding-top: 0px; }\n\n.description {\n  font-size: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2doc3BpZXNzL3Byb2dyYW1fcHJvamVjdHMvYmNjXzIwMjFfMV9wbGF0X21vdi9pb25pYzQtZGV2aWNlLW1vdGlvbi9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/device-motion/ngx */ "./node_modules/@ionic-native/device-motion/ngx/index.js");
/* harmony import */ var _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/device-orientation/ngx */ "./node_modules/@ionic-native/device-orientation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var Availability;
(function (Availability) {
    Availability[Availability["unchecked"] = 0] = "unchecked";
    Availability[Availability["available"] = 1] = "available";
    Availability[Availability["notAvailable"] = 2] = "notAvailable";
})(Availability || (Availability = {}));
var HomePage = /** @class */ (function () {
    function HomePage(deviceMotion, deviceOrientation, platform, eventManager) {
        this.deviceMotion = deviceMotion;
        this.deviceOrientation = deviceOrientation;
        this.platform = platform;
        this.eventManager = eventManager;
        this.devicemotion0 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['-']);
        this.devicemotion0$ = this.devicemotion0.asObservable();
        this.devicemotion1 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['-']);
        this.devicemotion1$ = this.devicemotion1.asObservable();
        this.devicemotion2 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['-']);
        this.devicemotion2$ = this.devicemotion2.asObservable();
        this.devicemotion3 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['-']);
        this.devicemotion3$ = this.devicemotion3.asObservable();
        this.devicemotion4 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['-']);
        this.devicemotion4$ = this.devicemotion4.asObservable();
        this.devicemotion5 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['-']);
        this.devicemotion5$ = this.devicemotion5.asObservable();
        this.devicemotion6 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['-']);
        this.devicemotion6$ = this.devicemotion6.asObservable();
        this.providers = [
            {
                index: 0,
                subtitle: 'ionic native',
                title: 'Cordova Device Orientation Plugin',
                description: 'This plugin provides access to the device’s compass which detects the '
                    + 'direction or heading that the device is pointed, typically from the top of the device.',
                availability: Availability.unchecked,
                value: this.devicemotion0$
            },
            {
                index: 1,
                subtitle: 'cordova plugin',
                title: 'Navigator Compass',
                description: 'The access to the device compass in the Cordova plugin is provided by a global navigator.compass object.',
                availability: Availability.unchecked,
                value: this.devicemotion1$
            },
            {
                index: 2,
                subtitle: 'window event',
                title: 'DeviceOrientation',
                description: 'Sent when the accelerometer detects a change to the orientation of the device.',
                availability: Availability.unchecked,
                value: this.devicemotion2$
            },
            {
                index: 3,
                subtitle: 'ionic native',
                title: 'Cordova Device Motion Plugin',
                description: 'This plugin provides access to the device’s accelerometer which detects the change (delta) in movement '
                    + 'relative to the current device orientation.',
                availability: Availability.unchecked,
                value: this.devicemotion3$
            },
            {
                index: 4,
                subtitle: 'cordova plugin',
                title: 'Navigator Accelerometer',
                description: 'The access to the device accelerometer in the Cordova plugin is obtained by a global navigator.accelerometer object.',
                availability: Availability.unchecked,
                value: this.devicemotion4$
            },
            {
                index: 5,
                subtitle: 'window event',
                title: 'DeviceMotion',
                description: 'Sent when a change in acceleration was added. It is different from the DeviceOrientationEvent because it is listening '
                    + 'for changes in acceleration as opposed to orientation.',
                availability: Availability.unchecked,
                value: this.devicemotion5$
            },
            {
                index: 6,
                subtitle: 'Web API',
                title: 'LinearAccelerationSensor',
                description: 'To use this sensor, the user must grant permission to the "accelerometer" device sensor through the Permissions API.',
                availability: Availability.unchecked,
                value: this.devicemotion6$
            }
        ];
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.checkAvailibility();
            _this.addEventListener();
        });
    };
    HomePage.prototype.checkAvailibility = function () {
        var nav;
        nav = window.navigator;
        if (nav && nav.compass) {
            this.providers[1].availability = Availability.available;
        }
        else {
            this.providers[1].availability = Availability.notAvailable;
        }
        if (nav && nav.accelerometer) {
            this.providers[4].availability = Availability.available;
        }
        else {
            this.providers[4].availability = Availability.notAvailable;
        }
        if (window.DeviceOrientationEvent) {
            this.providers[2].availability = Availability.available;
        }
        else {
            this.providers[2].availability = Availability.notAvailable;
        }
        if (window.DeviceMotionEvent) {
            this.providers[5].availability = Availability.available;
        }
        else {
            this.providers[5].availability = Availability.notAvailable;
        }
        if (this.platform.is('cordova')) {
            this.providers[0].availability = Availability.available;
            this.providers[3].availability = Availability.available;
        }
        else {
            this.providers[0].availability = Availability.notAvailable;
            this.providers[3].availability = Availability.notAvailable;
        }
        if ('LinearAccelerationSensor' in window) {
            this.providers[6].availability = Availability.available;
        }
        else {
            this.providers[6].availability = Availability.notAvailable;
        }
    };
    HomePage.prototype.addEventListener = function () {
        var _this = this;
        var nav;
        nav = window.navigator;
        /** DeviceOrientation: ionic native plugin */
        if (this.platform.is('cordova')) {
            this.deviceOrientation.watchHeading().subscribe(function (data) {
                _this.headingHandler(data, _this.devicemotion0);
            });
        }
        /** DeviceOrientation: navigator object */
        if (nav && nav.compass) {
            nav.compass.watchHeading(function (data) { _this.headingHandler(data, _this.devicemotion1); }, function () { }, { frequency: 100 });
        }
        /** DeviceOrientation: window event */
        if ('DeviceOrientationEvent' in window) {
            this.eventManager.addGlobalEventListener('window', 'deviceorientation', function (event) {
                // window.addEventListener('deviceorientation', (event: DeviceOrientationEvent) => {
                _this.rotationHandler(event, _this.devicemotion2);
            });
        }
        /** DeviceMotion: ionic native plugin */
        if (this.platform.is('cordova')) {
            this.deviceMotion.watchAcceleration({ frequency: 100 }).subscribe(function (data) {
                _this.accelerationHandler(data, _this.devicemotion3);
            });
        }
        /** DeviceMotion: navigator object */
        if (nav && nav.accelerometer) {
            nav.accelerometer.watchAcceleration(function (data) {
                _this.accelerationHandler(data, _this.devicemotion4);
            }, function () { }, { frequency: 100 });
        }
        /** DeviceMotion: window event */
        if ('DeviceMotionEvent' in window) {
            this.eventManager.addGlobalEventListener('window', 'devicemotion', function (event) {
                // window.addEventListener('devicemotion', (event: DeviceMotionEvent) => {
                _this.accelerationHandler(event.acceleration, _this.devicemotion5);
            });
        }
        /** LinearAccelerationSensor: Web API */
        if ('LinearAccelerationSensor' in window) {
            var accelerometer_1 = new LinearAccelerationSensor();
            accelerometer_1.addEventListener('reading', function (e) { _this.accelerationHandler(accelerometer_1, _this.devicemotion6); });
            accelerometer_1.start();
        }
        /** compassneedscalibration: window event */
        window.addEventListener('compassneedscalibration', function (event) { event.preventDefault(); }, true);
    };
    HomePage.prototype.accelerationHandler = function (acceleration, subject) {
        var info;
        var xyz = '[X, Y, Z]';
        info = xyz.replace('X', acceleration.x && acceleration.x.toFixed(3));
        info = info.replace('Y', acceleration.y && acceleration.y.toFixed(3));
        info = info.replace('Z', acceleration.z && acceleration.z.toFixed(3));
        subject.next(info);
    };
    HomePage.prototype.rotationHandler = function (rotation, subject) {
        var info;
        var xyz = '[X, Y, Z]';
        info = xyz.replace('X', rotation.alpha && rotation.alpha.toFixed(3));
        info = info.replace('Y', rotation.beta && rotation.beta.toFixed(3));
        info = info.replace('Z', rotation.gamma && rotation.gamma.toFixed(3));
        subject.next(info);
    };
    HomePage.prototype.headingHandler = function (heading, subject) {
        var info;
        var xyz = '[X, Y, Z]';
        info = xyz.replace('X', heading.magneticHeading && heading.magneticHeading.toFixed(3));
        info = info.replace('Y', heading.trueHeading && heading.trueHeading.toFixed(3));
        info = info.replace('Z', heading.headingAccuracy && heading.headingAccuracy.toFixed(3));
        subject.next(info);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_3__["DeviceMotion"],
            _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["DeviceOrientation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map