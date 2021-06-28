(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      ISA HealtInfo\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"false\">\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"cadastrarAlergia()\"><ion-icon name=\"sad-outline\"></ion-icon></ion-fab-button>\n      <ion-fab-button (click)=\"cadastrarMedicamento()\"><ion-icon name=\"bandage-outline\"></ion-icon></ion-fab-button>\n      <ion-fab-button (click)=\"cadastrarContato()\"><ion-icon name=\"call-outline\"></ion-icon></ion-fab-button>\n      <ion-fab-button (click)=\"cadastrarDoenca()\"><ion-icon name=\"heart-dislike-outline\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-list #listaDoencas>\n\n    <ion-list-header>\n      <ion-label><ion-icon name=\"heart-dislike-outline\"></ion-icon> Doenças crônicas</ion-label>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let doenca of doencas\">\n\n      <ion-item>\n        <ion-label text-wrap>\n          <h4>{{ doenca.nome }}</h4>\n          <ion-text color=\"secondary\">\n            <p>{{ doenca.desc }}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"secondary\" (click)=\"updateDoenca(doenca)\">Atualizar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"deleteDoenca(doenca)\">Excluir</ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-list #listaContatos>\n\n    <ion-list-header>\n      <ion-label><ion-icon name=\"call-outline\"></ion-icon> Contatos de emergência</ion-label>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let contato of contatos\">\n\n      <ion-item>\n        <ion-label text-wrap>\n          <h4>{{ contato.nome }}</h4>\n          <ion-text color=\"secondary\">\n            <p>{{ contato.telefone }}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"secondary\" (click)=\"updateContato(contato)\">Atualizar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"deletarContato(contato)\">Excluir</ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-list #listaMedicamentos>\n\n    <ion-list-header>\n      <ion-label><ion-icon name=\"bandage-outline\"></ion-icon> Medicamentos em uso</ion-label>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let medicamento of medicamentos\">\n\n      <ion-item>\n        <ion-label text-wrap>\n          <h4>{{ medicamento.nome }}</h4>\n          <ion-text color=\"secondary\">\n            <p>{{ medicamento.desc }}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"secondary\" (click)=\"updateMedicamento(medicamento)\">Atualizar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"deleteMedicamento(medicamento)\">Excluir</ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-list #listaAlergias>\n\n    <ion-list-header>\n      <ion-label><ion-icon name=\"sad-outline\"></ion-icon> Alergias</ion-label>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let alergia of alergias\">\n\n      <ion-item>\n        <ion-label text-wrap>\n          <h4>{{ alergia.nome }}</h4>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"secondary\" (click)=\"updateAlergia(alergia)\">Atualizar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"deleteAlergia(alergia)\">Excluir</ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n");

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
    constructor(storageService, plt, alertController, toastController) {
        this.storageService = storageService;
        this.plt = plt;
        this.alertController = alertController;
        this.toastController = toastController;
        this.doencas = [];
        this.contatos = [];
        this.medicamentos = [];
        this.alergias = [];
        this.newDoenca = {};
        this.newContato = {};
        this.newMedicamento = {};
        this.newAlergia = {};
        this.loadDoencas();
        this.loadContatos();
        this.loadAlergias();
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
    loadAlergias() {
        this.storageService.getAlergias().then(alergias => {
            this.alergias = alergias;
        });
    }
    loadMedicamentos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.medicamentos = yield this.storageService.getMedicamentos();
        });
    }
    /*cadastrarDoenca(){
      this.newDoenca.modified = Date.now();
      this.newDoenca.id = Date.now();
  
      this.storageService.cadastrarDoenca(this.newDoenca).then(doenca => {
        this.newDoenca = <Doenca>{};
        this.loadDoencas();
      });
  
    }*/
    //Atualizar doença
    updateDoenca(doenca) {
        this.alertController.create({
            header: 'Atualizar doença',
            //subHeader: 'Aqui é um cabeçalho',
            //message: 'Aqui é uma mensagem',
            inputs: [
                {
                    name: 'Nome',
                    placeholder: 'Digite o nome',
                    value: doenca.nome
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: (data) => {
                        console.log('Cancelado', data);
                    }
                },
                {
                    text: 'Atualizar',
                    handler: (data) => {
                        console.log('Informações salvas', data);
                        doenca.nome = data.Nome;
                        doenca.modified = Date.now();
                        this.storageService.updateDoencas(doenca).then(doenca => {
                            this.listaDoencas.closeSlidingItems();
                            this.loadDoencas();
                            this.exibir_mensagem('Atualizada com sucesso.');
                        });
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    //Atualizar alergia
    updateAlergia(alergia) {
        this.alertController.create({
            header: 'Atualizar alergia',
            inputs: [
                {
                    name: 'Nome',
                    placeholder: 'Digite o nome',
                    value: alergia.nome
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: (data) => {
                        console.log('Cancelado', data);
                    }
                },
                {
                    text: 'Atualizar',
                    handler: (data) => {
                        console.log('Informações salvas', data);
                        alergia.nome = data.Nome;
                        alergia.modified = Date.now();
                        this.storageService.updateAlergias(alergia).then(alergia => {
                            this.listaAlergias.closeSlidingItems();
                            this.loadAlergias();
                            this.exibir_mensagem('Atualizada com sucesso.');
                        });
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    //Atualizar medicamento
    updateMedicamento(medicamento) {
        this.alertController.create({
            header: 'Atualizar medicamento',
            inputs: [
                {
                    name: 'Nome',
                    placeholder: 'Digite o nome',
                    value: medicamento.nome
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: (data) => {
                        console.log('Cancelado', data);
                    }
                },
                {
                    text: 'Atualizar',
                    handler: (data) => {
                        console.log('Informações salvas', data);
                        medicamento.nome = data.Nome;
                        medicamento.modified = Date.now();
                        this.storageService.updateMedicamentos(medicamento).then(medicamento => {
                            this.listaMedicamentos.closeSlidingItems();
                            this.loadMedicamentos();
                            this.exibir_mensagem('Atualizado com sucesso.');
                        });
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    //Atualizar contato
    updateContato(contato) {
        this.alertController.create({
            header: 'Atualizar contato',
            inputs: [
                {
                    name: 'Nome',
                    placeholder: 'Digite o nome',
                    value: contato.nome
                },
                {
                    name: 'Email',
                    placeholder: 'Digite o email',
                    value: contato.email
                },
                {
                    name: 'Telefone',
                    placeholder: 'Digite o telefone',
                    value: contato.telefone
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: (data) => {
                        console.log('Cancelado', data);
                    }
                },
                {
                    text: 'Atualizar',
                    handler: (data) => {
                        console.log('Informações salvas', data);
                        contato.nome = data.Nome;
                        contato.email = data.Email;
                        contato.telefone = data.Telefone;
                        contato.modified = Date.now();
                        this.storageService.updateContatos(contato).then(contato => {
                            this.listaContatos.closeSlidingItems();
                            this.loadContatos();
                            this.exibir_mensagem('Atualizado com sucesso.');
                        });
                    }
                }
            ]
        }).then(res => {
            res.present();
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
    deleteAlergia(alergia) {
        this.storageService.deleteAlergia(alergia.id).then(alergia => {
            this.listaAlergias.closeSlidingItems();
            this.loadAlergias();
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
        this.loadAlergias();
    }
    //Cadastrar doença
    cadastrarDoenca() {
        this.alertController.create({
            header: 'Cadastrar doença',
            inputs: [
                {
                    name: 'Nome',
                    placeholder: 'Digite o nome'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: (data) => {
                        console.log('Cancelado', data);
                    }
                },
                {
                    text: 'Cadastrar',
                    handler: (data) => {
                        this.newDoenca.nome = data.Nome;
                        this.newDoenca.modified = Date.now();
                        this.newDoenca.id = Date.now();
                        this.storageService.cadastrarDoenca(this.newDoenca).then(doenca => {
                            this.newDoenca = {};
                            this.loadDoencas();
                            this.exibir_mensagem('Doença salva com sucesso.');
                        });
                        console.log('aaaa');
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    //Cadastrar contato
    cadastrarContato() {
        this.alertController.create({
            header: 'Cadastrar contato',
            inputs: [
                {
                    name: 'Nome',
                    placeholder: 'Digite o nome'
                },
                {
                    name: 'Email',
                    placeholder: 'Digite o email'
                },
                {
                    name: 'Telefone',
                    placeholder: 'Digite o telefone'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: (data) => {
                        console.log('Cancelado', data);
                    }
                },
                {
                    text: 'Cadastrar',
                    handler: (data) => {
                        this.newContato.nome = data.Nome;
                        this.newContato.email = data.Email;
                        this.newContato.telefone = data.Telefone;
                        this.newContato.id = Date.now();
                        this.storageService.cadastrarContato(this.newContato).then(doenca => {
                            this.newContato = {};
                            this.loadContatos();
                            this.exibir_mensagem('Contato salvo com sucesso.');
                        });
                        console.log('aaaa');
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    //Cadastrar Medicamento
    cadastrarMedicamento() {
        this.alertController.create({
            header: 'Cadastrar medicamento',
            inputs: [
                {
                    name: 'Nome',
                    placeholder: 'Digite o nome'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: (data) => {
                        console.log('Cancelado', data);
                    }
                },
                {
                    text: 'Cadastrar',
                    handler: (data) => {
                        this.newMedicamento.nome = data.Nome;
                        this.newMedicamento.id = Date.now();
                        this.storageService.cadastrarMedicamento(this.newMedicamento).then(doenca => {
                            this.newMedicamento = {};
                            this.loadMedicamentos();
                            this.exibir_mensagem('Medicamento salvo com sucesso.');
                        });
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    //Cadastrar alergia
    cadastrarAlergia() {
        this.alertController.create({
            header: 'Cadastrar alergia',
            inputs: [
                {
                    name: 'Nome',
                    placeholder: 'Digite o nome'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: (data) => {
                        console.log('Cancelado', data);
                    }
                },
                {
                    text: 'Cadastrar',
                    handler: (data) => {
                        this.newAlergia.nome = data.Nome;
                        this.newAlergia.id = Date.now();
                        this.storageService.cadastrarAlergia(this.newAlergia).then(doenca => {
                            this.newAlergia = {};
                            this.loadAlergias();
                            this.exibir_mensagem('Alergia salva com sucesso.');
                        });
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
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
Tab1Page.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
Tab1Page.propDecorators = {
    listaDoencas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['listaDoencas',] }],
    listaContatos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['listaContatos',] }],
    listaMedicamentos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['listaMedicamentos',] }],
    listaAlergias: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['listaAlergias',] }]
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
//# sourceMappingURL=tab1-tab1-module-es2015.js.map