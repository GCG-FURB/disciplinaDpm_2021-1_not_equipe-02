(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "8MT7":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function MT7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      ISA HealtInfo\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"false\">\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"cadastrarAlergia()\"><ion-icon name=\"sad-outline\"></ion-icon></ion-fab-button>\n      <ion-fab-button (click)=\"cadastrarMedicamento()\"><ion-icon name=\"bandage-outline\"></ion-icon></ion-fab-button>\n      <ion-fab-button (click)=\"cadastrarContato()\"><ion-icon name=\"call-outline\"></ion-icon></ion-fab-button>\n      <ion-fab-button (click)=\"cadastrarDoenca()\"><ion-icon name=\"heart-dislike-outline\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-list #listaDoencas>\n\n    <ion-list-header>\n      <ion-label><ion-icon name=\"heart-dislike-outline\"></ion-icon> Doenças crônicas</ion-label>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let doenca of doencas\">\n\n      <ion-item>\n        <ion-label text-wrap>\n          <h4>{{ doenca.nome }}</h4>\n          <ion-text color=\"secondary\">\n            <p>{{ doenca.desc }}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"secondary\" (click)=\"updateDoenca(doenca)\">Atualizar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"deleteDoenca(doenca)\">Excluir</ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-list #listaContatos>\n\n    <ion-list-header>\n      <ion-label><ion-icon name=\"call-outline\"></ion-icon> Contatos de emergência</ion-label>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let contato of contatos\">\n\n      <ion-item>\n        <ion-label text-wrap>\n          <h4>{{ contato.nome }}</h4>\n          <ion-text color=\"secondary\">\n            <p>{{ contato.telefone }}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"secondary\" (click)=\"updateContato(contato)\">Atualizar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"deletarContato(contato)\">Excluir</ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-list #listaMedicamentos>\n\n    <ion-list-header>\n      <ion-label><ion-icon name=\"bandage-outline\"></ion-icon> Medicamentos em uso</ion-label>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let medicamento of medicamentos\">\n\n      <ion-item>\n        <ion-label text-wrap>\n          <h4>{{ medicamento.nome }}</h4>\n          <ion-text color=\"secondary\">\n            <p>{{ medicamento.desc }}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"secondary\" (click)=\"updateMedicamento(medicamento)\">Atualizar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"deleteMedicamento(medicamento)\">Excluir</ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-list #listaAlergias>\n\n    <ion-list-header>\n      <ion-label><ion-icon name=\"sad-outline\"></ion-icon> Alergias</ion-label>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let alergia of alergias\">\n\n      <ion-item>\n        <ion-label text-wrap>\n          <h4>{{ alergia.nome }}</h4>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"secondary\" (click)=\"updateAlergia(alergia)\">Atualizar</ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"deleteAlergia(alergia)\">Excluir</ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "Mzl2":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function Mzl2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "8MT7");
      /* harmony import */


      var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab1.page.scss */
      "rWyk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(storageService, plt, alertController, toastController) {
          _classCallCheck(this, Tab1Page);

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

        _createClass(Tab1Page, [{
          key: "loadDoencas",
          value: function loadDoencas() {
            var _this = this;

            this.storageService.getDoencas().then(function (doencas) {
              _this.doencas = doencas;
            });
          }
        }, {
          key: "loadContatos",
          value: function loadContatos() {
            var _this2 = this;

            this.storageService.getContatos().then(function (contatos) {
              _this2.contatos = contatos;
            });
          }
        }, {
          key: "loadAlergias",
          value: function loadAlergias() {
            var _this3 = this;

            this.storageService.getAlergias().then(function (alergias) {
              _this3.alergias = alergias;
            });
          }
        }, {
          key: "loadMedicamentos",
          value: function loadMedicamentos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storageService.getMedicamentos();

                    case 2:
                      this.medicamentos = _context.sent;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
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

        }, {
          key: "updateDoenca",
          value: function updateDoenca(doenca) {
            var _this4 = this;

            this.alertController.create({
              header: 'Atualizar doença',
              //subHeader: 'Aqui é um cabeçalho',
              //message: 'Aqui é uma mensagem',
              inputs: [{
                name: 'Nome',
                placeholder: 'Digite o nome',
                value: doenca.nome
              }],
              buttons: [{
                text: 'Cancelar',
                handler: function handler(data) {
                  console.log('Cancelado', data);
                }
              }, {
                text: 'Atualizar',
                handler: function handler(data) {
                  console.log('Informações salvas', data);
                  doenca.nome = data.Nome;
                  doenca.modified = Date.now();

                  _this4.storageService.updateDoencas(doenca).then(function (doenca) {
                    _this4.listaDoencas.closeSlidingItems();

                    _this4.loadDoencas();

                    _this4.exibir_mensagem('Atualizada com sucesso.');
                  });
                }
              }]
            }).then(function (res) {
              res.present();
            });
          } //Atualizar alergia

        }, {
          key: "updateAlergia",
          value: function updateAlergia(alergia) {
            var _this5 = this;

            this.alertController.create({
              header: 'Atualizar alergia',
              inputs: [{
                name: 'Nome',
                placeholder: 'Digite o nome',
                value: alergia.nome
              }],
              buttons: [{
                text: 'Cancelar',
                handler: function handler(data) {
                  console.log('Cancelado', data);
                }
              }, {
                text: 'Atualizar',
                handler: function handler(data) {
                  console.log('Informações salvas', data);
                  alergia.nome = data.Nome;
                  alergia.modified = Date.now();

                  _this5.storageService.updateAlergias(alergia).then(function (alergia) {
                    _this5.listaAlergias.closeSlidingItems();

                    _this5.loadAlergias();

                    _this5.exibir_mensagem('Atualizada com sucesso.');
                  });
                }
              }]
            }).then(function (res) {
              res.present();
            });
          } //Atualizar medicamento

        }, {
          key: "updateMedicamento",
          value: function updateMedicamento(medicamento) {
            var _this6 = this;

            this.alertController.create({
              header: 'Atualizar medicamento',
              inputs: [{
                name: 'Nome',
                placeholder: 'Digite o nome',
                value: medicamento.nome
              }],
              buttons: [{
                text: 'Cancelar',
                handler: function handler(data) {
                  console.log('Cancelado', data);
                }
              }, {
                text: 'Atualizar',
                handler: function handler(data) {
                  console.log('Informações salvas', data);
                  medicamento.nome = data.Nome;
                  medicamento.modified = Date.now();

                  _this6.storageService.updateMedicamentos(medicamento).then(function (medicamento) {
                    _this6.listaMedicamentos.closeSlidingItems();

                    _this6.loadMedicamentos();

                    _this6.exibir_mensagem('Atualizado com sucesso.');
                  });
                }
              }]
            }).then(function (res) {
              res.present();
            });
          } //Atualizar contato

        }, {
          key: "updateContato",
          value: function updateContato(contato) {
            var _this7 = this;

            this.alertController.create({
              header: 'Atualizar contato',
              inputs: [{
                name: 'Nome',
                placeholder: 'Digite o nome',
                value: contato.nome
              }, {
                name: 'Email',
                placeholder: 'Digite o email',
                value: contato.email
              }, {
                name: 'Telefone',
                placeholder: 'Digite o telefone',
                value: contato.telefone
              }],
              buttons: [{
                text: 'Cancelar',
                handler: function handler(data) {
                  console.log('Cancelado', data);
                }
              }, {
                text: 'Atualizar',
                handler: function handler(data) {
                  console.log('Informações salvas', data);
                  contato.nome = data.Nome;
                  contato.email = data.Email;
                  contato.telefone = data.Telefone;
                  contato.modified = Date.now();

                  _this7.storageService.updateContatos(contato).then(function (contato) {
                    _this7.listaContatos.closeSlidingItems();

                    _this7.loadContatos();

                    _this7.exibir_mensagem('Atualizado com sucesso.');
                  });
                }
              }]
            }).then(function (res) {
              res.present();
            });
          }
        }, {
          key: "deleteDoenca",
          value: function deleteDoenca(doenca) {
            var _this8 = this;

            this.storageService.deleteDoencas(doenca.id).then(function () {
              _this8.listaDoencas.closeSlidingItems();

              _this8.loadDoencas();
            });
          }
        }, {
          key: "deletarContato",
          value: function deletarContato(contato) {
            var _this9 = this;

            this.storageService.deleteContato(contato.id).then(function (contato) {
              _this9.listaContatos.closeSlidingItems();

              _this9.loadContatos();
            });
          }
        }, {
          key: "deleteAlergia",
          value: function deleteAlergia(alergia) {
            var _this10 = this;

            this.storageService.deleteAlergia(alergia.id).then(function (alergia) {
              _this10.listaAlergias.closeSlidingItems();

              _this10.loadAlergias();
            });
          }
        }, {
          key: "deleteMedicamento",
          value: function deleteMedicamento(medicamento) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.storageService.deleteMedicamentos(medicamento.id);

                    case 2:
                      this.listaMedicamentos.closeSlidingItems();
                      this.loadMedicamentos();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.loadDoencas();
            this.loadContatos();
            this.loadMedicamentos();
            this.loadAlergias();
          } //Cadastrar doença

        }, {
          key: "cadastrarDoenca",
          value: function cadastrarDoenca() {
            var _this11 = this;

            this.alertController.create({
              header: 'Cadastrar doença',
              inputs: [{
                name: 'Nome',
                placeholder: 'Digite o nome'
              }],
              buttons: [{
                text: 'Cancelar',
                handler: function handler(data) {
                  console.log('Cancelado', data);
                }
              }, {
                text: 'Cadastrar',
                handler: function handler(data) {
                  _this11.newDoenca.nome = data.Nome;
                  _this11.newDoenca.modified = Date.now();
                  _this11.newDoenca.id = Date.now();

                  _this11.storageService.cadastrarDoenca(_this11.newDoenca).then(function (doenca) {
                    _this11.newDoenca = {};

                    _this11.loadDoencas();

                    _this11.exibir_mensagem('Doença salva com sucesso.');
                  });

                  console.log('aaaa');
                }
              }]
            }).then(function (res) {
              res.present();
            });
          } //Cadastrar contato

        }, {
          key: "cadastrarContato",
          value: function cadastrarContato() {
            var _this12 = this;

            this.alertController.create({
              header: 'Cadastrar contato',
              inputs: [{
                name: 'Nome',
                placeholder: 'Digite o nome'
              }, {
                name: 'Email',
                placeholder: 'Digite o email'
              }, {
                name: 'Telefone',
                placeholder: 'Digite o telefone'
              }],
              buttons: [{
                text: 'Cancelar',
                handler: function handler(data) {
                  console.log('Cancelado', data);
                }
              }, {
                text: 'Cadastrar',
                handler: function handler(data) {
                  _this12.newContato.nome = data.Nome;
                  _this12.newContato.email = data.Email;
                  _this12.newContato.telefone = data.Telefone;
                  _this12.newContato.id = Date.now();

                  _this12.storageService.cadastrarContato(_this12.newContato).then(function (doenca) {
                    _this12.newContato = {};

                    _this12.loadContatos();

                    _this12.exibir_mensagem('Contato salvo com sucesso.');
                  });

                  console.log('aaaa');
                }
              }]
            }).then(function (res) {
              res.present();
            });
          } //Cadastrar Medicamento

        }, {
          key: "cadastrarMedicamento",
          value: function cadastrarMedicamento() {
            var _this13 = this;

            this.alertController.create({
              header: 'Cadastrar medicamento',
              inputs: [{
                name: 'Nome',
                placeholder: 'Digite o nome'
              }],
              buttons: [{
                text: 'Cancelar',
                handler: function handler(data) {
                  console.log('Cancelado', data);
                }
              }, {
                text: 'Cadastrar',
                handler: function handler(data) {
                  _this13.newMedicamento.nome = data.Nome;
                  _this13.newMedicamento.id = Date.now();

                  _this13.storageService.cadastrarMedicamento(_this13.newMedicamento).then(function (doenca) {
                    _this13.newMedicamento = {};

                    _this13.loadMedicamentos();

                    _this13.exibir_mensagem('Medicamento salvo com sucesso.');
                  });
                }
              }]
            }).then(function (res) {
              res.present();
            });
          } //Cadastrar alergia

        }, {
          key: "cadastrarAlergia",
          value: function cadastrarAlergia() {
            var _this14 = this;

            this.alertController.create({
              header: 'Cadastrar alergia',
              inputs: [{
                name: 'Nome',
                placeholder: 'Digite o nome'
              }],
              buttons: [{
                text: 'Cancelar',
                handler: function handler(data) {
                  console.log('Cancelado', data);
                }
              }, {
                text: 'Cadastrar',
                handler: function handler(data) {
                  _this14.newAlergia.nome = data.Nome;
                  _this14.newAlergia.id = Date.now();

                  _this14.storageService.cadastrarAlergia(_this14.newAlergia).then(function (doenca) {
                    _this14.newAlergia = {};

                    _this14.loadAlergias();

                    _this14.exibir_mensagem('Alergia salva com sucesso.');
                  });
                }
              }]
            }).then(function (res) {
              res.present();
            });
          }
        }, {
          key: "exibir_mensagem",
          value: function exibir_mensagem(mensagem) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: mensagem,
                        duration: 2000
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [{
          type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }];
      };

      Tab1Page.propDecorators = {
        listaDoencas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['listaDoencas']
        }],
        listaContatos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['listaContatos']
        }],
        listaMedicamentos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['listaMedicamentos']
        }],
        listaAlergias: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['listaAlergias']
        }]
      };
      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab1Page);
      /***/
    },

    /***/
    "XOzS":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function XOzS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "Mzl2");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "rWyk":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function rWyk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "tmrb":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function tmrb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "Mzl2");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "XOzS");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
      })], Tab1PageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map