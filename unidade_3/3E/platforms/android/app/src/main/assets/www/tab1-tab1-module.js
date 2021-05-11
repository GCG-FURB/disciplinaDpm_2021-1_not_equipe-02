(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      ISA HealtInfo\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  \n\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-list #listaDoencas>\n\n    <ion-list-header>\n      <ion-label>Doenças crônicas</ion-label>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let doenca of doencas\">\n\n      <ion-item>\n        <ion-label text-wrap>\n          <h4>{{ doenca.title }}</h4>\n          <ion-text color=\"secondary\">\n            <p>{{ doenca.desc }}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"secondary\" (click)=\"updateDoenca(doenca)\">Atualizar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"deleteDoenca(doenca)\">Excluir</ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-list #listaContatos>\n\n    <ion-list-header>\n      <ion-label>Contatos de emergência</ion-label>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let contato of contatos\">\n\n      <ion-item>\n        <ion-label text-wrap>\n          <h4>{{ contato.nome }}</h4>\n          <ion-text color=\"secondary\">\n            <p>{{ contato.telefone }}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"secondary\" (click)=\"updateContato(contato)\">Atualizar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"deletarContato(contato)\">Excluir</ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-list #listaMedicamentos>\n\n    <ion-list-header>\n      <ion-label>Medicamentos em uso</ion-label>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let medicamento of medicamentos\">\n\n      <ion-item>\n        <ion-label text-wrap>\n          <h4>{{ medicamento.title }}</h4>\n          <ion-text color=\"secondary\">\n            <p>{{ medicamento.desc }}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"secondary\" (click)=\"updateMedicamento(medicamento)\">Atualizar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"deleteMedicamento(medicamento)\">Excluir</ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let Tab1Page = class Tab1Page {
    constructor(storageService, plt) {
        this.storageService = storageService;
        this.plt = plt;
        this.doencas = [];
        this.newDoenca = {};
        this.contatos = [];
        this.medicamentos = [];
        this.loadDoencas();
        this.loadContatos();
    }
    loadDoencas() {
        this.storageService.getDoencas().then(doencas => {
            this.doencas = doencas;
        });
    }
    loadContatos() {
        this.storageService.getContatos().then(contatos => {
            this.contatos = contatos;
        });
    }
    loadMedicamentos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.medicamentos = yield this.storageService.getMedicamentos();
        });
    }
    cadastrarDoenca() {
        this.newDoenca.modified = Date.now();
        this.newDoenca.id = Date.now();
        this.storageService.cadastrarDoenca(this.newDoenca).then(doenca => {
            this.newDoenca = {};
            this.loadDoencas();
        });
    }
    updateDoenca(doenca) {
        doenca.title = 'UPDATE: ${doenca.title}';
        doenca.modified = Date.now();
        this.storageService.updateDoencas(doenca).then(doenca => {
            this.listaDoencas.closeSlidingItems();
            this.loadDoencas();
        });
    }
    deleteDoenca(doenca) {
        this.storageService.deleteDoencas(doenca.id).then(() => {
            this.listaDoencas.closeSlidingItems();
            this.loadDoencas();
        });
    }
    deletarContato(contato) {
        this.storageService.deleteContato(contato.id).then(contato => {
            this.listaContatos.closeSlidingItems();
            this.loadContatos();
        });
    }
    deleteMedicamento(medicamento) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storageService.deleteMedicamentos(medicamento.id);
            this.listaMedicamentos.closeSlidingItems();
            this.loadMedicamentos();
        });
    }
    ionViewWillEnter() {
        this.loadDoencas();
        this.loadContatos();
        this.loadMedicamentos();
    }
};
Tab1Page.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
Tab1Page.propDecorators = {
    listaDoencas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['listaDoencas',] }],
    listaContatos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['listaContatos',] }],
    listaMedicamentos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['listaMedicamentos',] }]
};
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map