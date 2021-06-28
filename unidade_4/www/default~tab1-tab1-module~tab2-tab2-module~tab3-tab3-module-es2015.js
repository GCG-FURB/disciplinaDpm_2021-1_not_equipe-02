(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module"],{

/***/ "QQAA":
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() { return ExploreContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./explore-container.component.html */ "m1kx");
/* harmony import */ var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-container.component.scss */ "huSS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-explore-container',
        template: _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExploreContainerComponent);



/***/ }),

/***/ "huSS":
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "m1kx":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ "qkCY":
/*!************************************!*\
  !*** ./src/app/storage.service.ts ***!
  \************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "WXJz");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




//
const DOENCA_KEY = 'doencas';
const CONTATO_KEY = 'contatos';
const MEDICAM_KEY = 'medicamentos';
const ALERGIA_KEY = 'alergias';
let StorageService = class StorageService {
    constructor(storage, toastController) {
        this.storage = storage;
        this.toastController = toastController;
    }
    //Aqui é onde adiciona a doença
    cadastrarDoenca(novaDoenca) {
        return this.storage.get(DOENCA_KEY).then((listaDoencas) => {
            if (listaDoencas) {
                listaDoencas.push(novaDoenca);
                return this.storage.set(DOENCA_KEY, listaDoencas);
            }
            else {
                return this.storage.set(DOENCA_KEY, [novaDoenca]);
            }
        });
    }
    //Aqui lista as doenças
    getDoencas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let doencas = yield this.storage.get(DOENCA_KEY);
            return doencas;
        });
    }
    //Aqui atualiza uma doença cadastrada
    updateDoencas(novaDoenca) {
        return this.storage.get(DOENCA_KEY).then((listaDoencas) => {
            if (!listaDoencas || listaDoencas.length == 0) {
                //Atualizando uma doença sem ter nenhuma cadastrada
                return null;
            }
            const idUpdate = novaDoenca.id;
            const novaLista = listaDoencas.map(d => d.id === idUpdate ? novaDoenca : d);
            return this.storage.set(DOENCA_KEY, novaLista);
        });
    }
    //Aqui apaga a doenca
    deleteDoencas(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const doencas = yield this.storage.get(DOENCA_KEY);
            if (!doencas || doencas.length == 0) {
                console.log('errou');
                console.log(doencas);
                return;
            }
            const toKeep = doencas.filter(d => d.id !== id);
            this.exibir_mensagem('Excluido com sucesso.');
            this.storage.set(DOENCA_KEY, toKeep);
            return;
        });
    }
    //----------------------------------------------------------------------------
    cadastrarContato(contato) {
        return this.storage.get(CONTATO_KEY).then((contatos) => {
            if (contatos) {
                contatos.push(contato);
                return this.storage.set(CONTATO_KEY, contatos);
            }
            else {
                return this.storage.set(CONTATO_KEY, [contato]);
            }
        });
    }
    //Aqui lista os contatos
    getContatos() {
        return this.storage.get(CONTATO_KEY);
    }
    updateContatos(novoContato) {
        return this.storage.get(CONTATO_KEY).then((contatos) => {
            if (!contatos || contatos.length == 0) {
                //Atualizando uma doença sem ter nenhuma cadastrada
                return null;
            }
            const idUpdate = novoContato.id;
            const novaLista = contatos.map(c => c.id === idUpdate ? novoContato : c);
            return this.storage.set(CONTATO_KEY, novaLista);
        });
    }
    updateAlergias(novaAlergia) {
        return this.storage.get(ALERGIA_KEY).then((alergias) => {
            if (!alergias || alergias.length == 0) {
                return null;
            }
            const idUpdate = novaAlergia.id;
            const novaLista = alergias.map(c => c.id === idUpdate ? novaAlergia : c);
            return this.storage.set(ALERGIA_KEY, novaLista);
        });
    }
    //Aqui apaga o contato
    deleteContato(id) {
        return this.storage.get(CONTATO_KEY).then((contatos) => {
            if (!contatos || contatos.length == 0) {
                return null;
            }
            const toKeep = contatos.filter(c => c.id !== id);
            this.exibir_mensagem('Excluido com sucesso.');
            return this.storage.set(CONTATO_KEY, toKeep);
        });
    }
    cadastrarAlergia(alergia) {
        return this.storage.get(ALERGIA_KEY).then((alergias) => {
            if (alergias) {
                alergias.push(alergia);
                return this.storage.set(ALERGIA_KEY, alergias);
            }
            else {
                return this.storage.set(ALERGIA_KEY, [alergia]);
            }
        });
    }
    getAlergias() {
        return this.storage.get(ALERGIA_KEY);
    }
    //Aqui apaga a alergia
    deleteAlergia(id) {
        return this.storage.get(ALERGIA_KEY).then((alergias) => {
            if (!alergias || alergias.length == 0) {
                return null;
            }
            const toKeep = alergias.filter(c => c.id !== id);
            this.exibir_mensagem('Excluido com sucesso.');
            return this.storage.set(ALERGIA_KEY, toKeep);
        });
    }
    //----------------------------------------------------------------------------
    cadastrarMedicamento(novoMedicamento) {
        return this.storage.get(MEDICAM_KEY).then((listaMedicamentos) => {
            if (listaMedicamentos) {
                listaMedicamentos.push(novoMedicamento);
                return this.storage.set(MEDICAM_KEY, listaMedicamentos);
            }
            else {
                return this.storage.set(MEDICAM_KEY, [novoMedicamento]);
            }
        });
    }
    getMedicamentos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let medicamentos = yield this.storage.get(MEDICAM_KEY);
            return medicamentos;
        });
    }
    updateMedicamentos(novoMedicamento) {
        return this.storage.get(MEDICAM_KEY).then((listaMedicamentos) => {
            if (!listaMedicamentos || listaMedicamentos.length == 0) {
                return null;
            }
            const idUpdate = novoMedicamento.id;
            const novaLista = listaMedicamentos.map(d => d.id === idUpdate ?
                novoMedicamento : d);
            return this.storage.set(MEDICAM_KEY, novaLista);
        });
    }
    deleteMedicamentos(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const medicamentos = yield this.storage.get(MEDICAM_KEY);
            if (!medicamentos || medicamentos.length == 0) {
                console.log('errou');
                console.log(medicamentos);
                return;
            }
            const toKeep = medicamentos.filter(d => d.id !== id);
            this.exibir_mensagem('Excluido com sucesso.');
            this.storage.set(MEDICAM_KEY, toKeep);
            return;
        });
    }
    //----------------------------------------------------------------------------
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
StorageService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "qtYk":
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/*! exports provided: ExploreContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() { return ExploreContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-container.component */ "QQAA");






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })
], ExploreContainerComponentModule);



/***/ })

}]);
//# sourceMappingURL=default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module-es2015.js.map