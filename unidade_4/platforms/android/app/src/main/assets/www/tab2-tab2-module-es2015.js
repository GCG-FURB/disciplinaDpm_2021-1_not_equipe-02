(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let Tab2Page = class Tab2Page {
    constructor(storageService, plt, toastController) {
        this.storageService = storageService;
        this.plt = plt;
        this.toastController = toastController;
        this.doenca = {};
        this.contato = {};
        this.medicamento = {};
        this.alergia = {};
        /*this.plt.ready().then(() => {
          this.loadItems
        });*/
    }
    cadastrarDoenca() {
        this.doenca.modified = Date.now();
        this.doenca.id = Date.now();
        this.storageService.cadastrarDoenca(this.doenca).then(item => {
            this.doenca = {};
        });
        this.exibir_mensagem('Doença salva com sucesso.');
    }
    cadastrarAlergia() {
        this.alergia.modified = Date.now();
        this.alergia.id = Date.now();
        this.storageService.cadastrarAlergia(this.alergia).then(item => {
            this.alergia = {};
        });
        this.exibir_mensagem('Alergia salva com sucesso.');
    }
    cadastrarContato() {
        this.contato.modified = Date.now();
        this.contato.id = Date.now();
        this.storageService.cadastrarContato(this.contato).then(item => {
            this.contato = {};
        });
        this.exibir_mensagem('Contato salvo com sucesso.');
    }
    cadastrarMedicamento() {
        this.medicamento.modified = Date.now();
        this.medicamento.id = Date.now();
        this.storageService.cadastrarMedicamento(this.medicamento).then(item => {
            this.medicamento = {};
        });
        this.exibir_mensagem('Medicamento salvo com sucesso.');
    }
    exibir_mensagem(mensagem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: mensagem,
                duration: 2000
            });
            toast.present();
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
Tab2Page.propDecorators = {
    mylist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mylist',] }]
};
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Cadastros\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  \n  <!--<ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 2</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-explore-container name=\"Tab 2 page\"></app-explore-container>-->\n\n  <ion-item>\n    <ion-label position=\"fixed\">Nome</ion-label>\n    <ion-input [(ngModel)]=\"doenca.title\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"fixed\">Descrição</ion-label>\n    <ion-input [(ngModel)]=\"doenca.desc\"></ion-input>\n  </ion-item>\n\n  <ion-button expand=\"full\" (click)=\"cadastrarDoenca()\">Cadastrar Doença</ion-button>\n\n  <ion-item>\n    <ion-label position=\"fixed\">Nome</ion-label>\n    <ion-input [(ngModel)]=\"contato.nome\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"fixed\">Email</ion-label>\n    <ion-input [(ngModel)]=\"contato.email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"fixed\">Telefone</ion-label>\n    <ion-input [(ngModel)]=\"contato.telefone\"></ion-input>\n  </ion-item>\n\n  <ion-button expand=\"full\" (click)=\"cadastrarContato()\">Cadastrar Contato</ion-button>\n\n  <ion-item>\n    <ion-label position=\"fixed\">Nome</ion-label>\n    <ion-input [(ngModel)]=\"medicamento.title\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"fixed\">Descrição</ion-label>\n    <ion-input [(ngModel)]=\"medicamento.desc\"></ion-input>\n  </ion-item>\n\n  <ion-button expand=\"full\" (click)=\"cadastrarMedicamento()\">Cadastrar Medicamento</ion-button>\n\n  <ion-item>\n    <ion-label position=\"fixed\">Nome</ion-label>\n    <ion-input [(ngModel)]=\"alergia.nome\"></ion-input>\n  </ion-item>\n\n  <ion-button expand=\"full\" (click)=\"cadastrarAlergia()\">Cadastrar Alergia</ion-button>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map