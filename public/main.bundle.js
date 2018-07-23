webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Contact.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.contacts = [];
        this.contactsRequests = [];
        this.blockedContacts = [];
    }
    return User;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(chatService) {
        this.chatService = chatService;
        this.title = 'app';
        this.messages = [];
    }
    AppComponent.prototype.sendMessage = function () {
        var mess = {
            sender: this.user,
            reciver: this.reciver,
            message: this.message
        };
        this.chatService.sendMessage(mess);
        this.message = '';
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__encryption_service__ = __webpack_require__("./src/app/encryption.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_app_main_app_component__ = __webpack_require__("./src/app/main-app/main-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contatcs_list_contatcs_list_component__ = __webpack_require__("./src/app/contatcs-list/contatcs-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__chat_boxs_chat_boxs_component__ = __webpack_require__("./src/app/chat-boxs/chat-boxs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_page_search_page_component__ = __webpack_require__("./src/app/search-page/search-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sidenav_sidenav_component__ = __webpack_require__("./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contacts_contacts_component__ = __webpack_require__("./src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__["a" /* ProfileComponent */] },
    { path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }, {
        path: 'main', component: __WEBPACK_IMPORTED_MODULE_11__main_app_main_app_component__["a" /* MainAppComponent */]
    },
    {
        path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_16__contacts_contacts_component__["a" /* ContactsComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__main_app_main_app_component__["a" /* MainAppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__contatcs_list_contatcs_list_component__["a" /* ContatcsListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__chat_boxs_chat_boxs_component__["a" /* ChatBoxsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__search_page_search_page_component__["a" /* SearchPageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_16__contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_10__encryption_service__["a" /* EncryptionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-boxs/chat-boxs.component.css":
/***/ (function(module, exports) {

module.exports = "#chat-window{\r\n    height: 116vh;\r\n    overflow: auto;\r\n    /*background-color:  rgba(163, 227, 230, 0.8);*/\r\n}\r\n\r\n#output p{\r\n    padding: 14px 0px;\r\n    margin: 0 20px;\r\n}\r\n\r\n/* Chat containers */\r\n\r\n.chat {\r\n    border: 2px solid #dedede;\r\n    background-color: #f1f1f1;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin: 15px;\r\n    width: 55%;\r\n    float: left;\r\n}\r\n\r\n.chat strong, .chat p {\r\n    color: darkslategrey;\r\n}\r\n\r\n/* Darker chat container */\r\n\r\n.darker {\r\n    border-color: #ccc;\r\n    background-color: #ddd;\r\n    float: right;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.chat::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n/* Style images */\r\n\r\n.chat .w3-hide-small {\r\n    float: left;\r\n    max-width: 40px;\r\n    width: 100%;\r\n    margin-right: 20px;\r\n    border-radius: 50%;\r\n}\r\n\r\n/* Style the right image */\r\n\r\n.chat .w3-hide-small.right {\r\n    float: right;\r\n    margin-left: 20px;\r\n    margin-right:0;\r\n}\r\n\r\n/* Style time text */\r\n\r\n.time-right {\r\n    float: right;\r\n    color: #aaa;\r\n}\r\n\r\n/* Style time text */\r\n\r\n.chatHeader{\r\n    /*background-color: rgba(61, 223, 215, 0.74);*/\r\n    color: papayawhip;\r\n}\r\n\r\n.time-left {\r\n    float: left;\r\n    color: #999;\r\n}\r\n\r\n#output::after{\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n#chat-window::-webkit-scrollbar {\r\n    width: 4px;\r\n}\r\n\r\n#chat-window::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n}\r\n\r\n#chat-window::-webkit-scrollbar-thumb {\r\n  background-color: darkgrey;\r\n  outline: 1px solid slategrey;\r\n}\r\n\r\n.center {\r\n    line-height: 132vh;\r\n    height: 132vh;\r\n    text-align: center;\r\n}\r\n\r\n/* If the text has multiple lines, add the following: */\r\n\r\n.center p {\r\n    line-height: 1.5;\r\n    display: inline-block;\r\n    vertical-align: middle;  \r\n}\r\n\r\n.imageMessage{\r\n    width: 100%;\r\n    margin: 3px auto;\r\n    float: none;\r\n}\r\n\r\n.other{\r\n    background-color: rgba(231, 215, 200, 0.726);\r\n    color: rgba(0,0,0,1);\r\n    font-size: 20px;\r\n}\r\n\r\n.hide{\r\n    display: none;\r\n}\r\n\r\n.show{\r\n    display: block;\r\n}\r\n\r\n.upload-btn-wrapper {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n  }\r\n\r\n.btnn {\r\n    border: 2px solid gray;\r\n    color: gray;\r\n    background-color: white;\r\n    padding: 8px 20px;\r\n    border-radius: 8px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n  }\r\n\r\n.upload-btn-wrapper input[type=file] {\r\n    font-size: 100px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    opacity: 0;\r\n  }\r\n\r\n.player{\r\n      width: 100%;\r\n      margin-top: 20px;\r\n  }"

/***/ }),

/***/ "./src/app/chat-boxs/chat-boxs.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chatBox\" *ngIf=\"contact;else other\">\n\n<div class=\"\">\n    <div class=\"w3-bar chatHeader w3-theme-l1\">\n\n        <div>\n            <img [src]='sanitizer.bypassSecurityTrustUrl(contact.profileImage)' class=\"w3-bar-item w3-circle w3-hide-small\" style=\"width:85px;\">\n            <div class=\"w3-bar-item\">\n                <span class=\"w3-large\">{{contact.fullname}}</span>\n                <br>\n                <span>{{getStatus(contact.username)}}</span>\n            </div>\n            <button *ngIf=\"isBlocked(contact.username)\" (click)=\"unBlockUser(contact.username)\" class=\" w3-button w3-right w3-margin-right w3-xlarge\">\n                <i class=\"fa fa-unlock-alt w3-text-green\"></i>\n            </button>\n            <button *ngIf=\"!isBlocked(contact.username)\" (click)=\"blockUser(contact.username)\" class=\" w3-button w3-right w3-margin-right w3-xlarge\">\n                <i class=\"fa fa-ban w3-text-red\"></i>\n            </button>\n\n        </div>\n\n\n\n    </div>\n    <div id=\"chat-window\" class=\"w3-theme-d3\">\n        <div id=\"output\">\n            <div *ngFor=\"let message of getMessagesFromConversations();\">\n                <div class=\"chat  w3-hover-teall \" *ngIf=\"(message.sender == contact.username);else darker\">\n                    <img [src]=\"sanitizer.bypassSecurityTrustUrl(contact.profileImage)\" alt=\"Avatar\" class=\"w3-hide-small\">\n                    <div *ngIf='(message.type == \"text\")' style=\"word-wrap: break-word;\">\n                        <p>\n                            <strong>{{message.sender}}:</strong> {{message.message}}</p>\n\n                    </div>\n                    <div *ngIf='(message.type == \"audio\")'>\n                        <p>\n                            <strong>{{message.sender}}:</strong>\n                        </p>\n                        <audio controls=\"controls\" controlsList=\"nodownload\" style=\"width: 100%;\">\n                            <source [src]=\"sanitizer.bypassSecurityTrustUrl(message.message)\" />\n                        </audio>\n                    </div>\n                    <div *ngIf='(message.type == \"video\")'>\n                        <p>\n                            <strong>{{message.sender}}:</strong>\n                        </p>\n                        <video controls=\"controls\" style=\"width: 100%;\" controlsList=\"nodownload\">\n                            <source [src]=\"sanitizer.bypassSecurityTrustUrl(message.message)\" /> Your browser does not support the video tag.\n                        </video>\n                    </div>\n\n                    <div *ngIf='(message.type == \"image\")'>\n                        <p>\n                            <strong>{{message.sender}}:</strong>\n                        </p>\n                        <img (click)=\"openModal(message.message)\" [src]=\"sanitizer.bypassSecurityTrustUrl(message.message)\" class=\"imageMessage w3-hover-opacity\">\n                    </div>\n                    <!-- Rest of Files -->\n                    <div *ngIf=\"message.type =='application' || message.type =='textfile'\">\n                        <div class=\"w3-container w3-padding-16\">\n                            <div style=\"margin: 10px auto w3-row\">\n                                <div style=\"width:60px\" class=\"w3-col\">\n                                    <p class=\"w3-center\">\n                                        <i [class]=\"iconStyle(message.type,message.message)\" style=\"position: relative;top:10px\" aria-hidden=\"true\"></i>\n                                    </p>\n                                </div>\n                                <div class=\"w3-rest\" style=\"position:relative;left:-30px\">\n                                    <p style=\"margin:33px; position: relative;top:5px;font-size: 20px\" class=\"w3-center w3-text-grey\">{{message.message.name}}</p>\n                                </div>\n                            </div>\n                            <a class=\"w3-button w3-block w3-dark-grey\" style=\"text-decoration:unset\" (click)=\"DonloadFile(message.message.src,message.message.name)\">Download</a>\n                        </div>\n                    </div>\n                    <!-- End of Rest of Files -->\n                    <span class=\"time-right w3-margin-right\">{{message.date | date:'shortTime'}}</span>\n                </div>\n\n                <ng-template #darker>\n                    <div class=\"chat darker  w3-hover-teall \">\n                        <img [src]=\"user.profileImage\" alt=\"Avatar\" class=\"right w3-hide-small\">\n                        <div *ngIf='(message.type == \"text\")' style=\"word-wrap: break-word;\">\n                            <p>\n                                <strong>{{user.username}}:</strong> {{message.message}}</p>\n                        </div>\n                        <div *ngIf='(message.type == \"audio\")'>\n                            <p>\n                                <strong>{{message.sender}}:</strong>\n                            </p>\n                            <audio controls=\"controls\" controlsList=\"nodownload\" style=\"width: 100%;\">\n                                <source [src]=\"message.message\" />\n                            </audio>\n                        </div>\n                        <div *ngIf='(message.type == \"video\")'>\n                            <p>\n                                <strong>{{message.sender}}:</strong>\n                            </p>\n                            <video controls=\"controls\" style=\"width: 100%;\" controlsList=\"nodownload\">\n                                <source [src]=\"message.message\" /> Your browser does not support the video tag.\n                            </video>\n                        </div>\n                        <div *ngIf='(message.type == \"image\")'>\n                            <p>\n                                <strong>{{user.username}}:</strong>\n                            </p>\n                            <img (click)=\"openModal(message.message)\" [src]=\"message.message\" class=\"imageMessage w3-hover-opacity\">\n                        </div>\n                        <!-- Rest of Files -->\n                        <div *ngIf=\"message.type =='application' || message.type =='textfile'\">\n                            <div class=\"w3-container w3-padding-16\" style=\"background-color: #ddd\">\n                                <div style=\"margin: 10px auto w3-row\">\n\n                                    <div style=\"width:60px\" class=\"w3-col\">\n                                        <p class=\"w3-center\">\n                                            <i [class]=\"iconStyle(message.type,message.message)\" style=\"position: relative;top:10px\" aria-hidden=\"true\"></i>\n                                        </p>\n                                    </div>\n                                    <div class=\"w3-rest\" style=\"position:relative;left:-30px\">\n                                        <p style=\"margin:33px; position: relative;top:5px;font-size: 20px\" class=\"w3-center w3-text-grey\">{{message.message.name}}</p>\n                                    </div>\n                                </div>\n                                <a class=\"w3-button w3-block w3-dark-grey\" style=\"text-decoration:unset\" (click)=\"DonloadFile(message.message.src,message.message.name)\">Download</a>\n                            </div>\n                        </div>\n                        <!-- End of Rest of Files -->\n                        <span class=\"time-left w3-margin-left\">{{message.date | date:'shortTime'}}\n                            <i class=\"fa\" [ngClass]=\"getStatusClass(message)\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                </ng-template>\n            </div>\n\n\n        </div>\n        <!-- Image Modal -->\n        <div id=\"modal01\" class=\"w3-modal\" (click)=\"hideModal()\" [ngClass]=\"isShowModal()\">\n            <span class=\"w3-button w3-hover-red w3-xlarge w3-display-topright\">&times;</span>\n            <div class=\"w3-modal-content w3-animate-zoom\">\n                <img [src]=\"sanitizer.bypassSecurityTrustUrl(modalImage)\" style=\"width:100%\">\n            </div>\n        </div>\n\n    </div>\n    <div class=\"w3-row\">\n        <input class=\"w3-input w3-col s8 m10  w3-hover-theme2\" type=\"text\" [(ngModel)]=\"message\" [ngModelOptions]=\"{standalone: true}\"\n            (keyup.enter)=\"sendMessage()\">\n        <button class=\"w3-btn w3-theme-l3 w3-col s2 m1\" (click)=\"sendMessage()\">\n            <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"w3-btn w3-ripple w3-theme-d3 w3-col s2 m1\" (click)=\"openFileModal()\">\n            <i class=\"fa fa-paperclip\" aria-hidden=\"true\"></i>\n        </button>\n        <!-- Attach Modal -->\n        <div id=\"modal02\" class=\"w3-modal\" [ngClass]=\"isShowFileModal()\">\n            <div class=\"w3-modal-content w3-card-4 w3-animate-zoom\" style=\"max-width:90%\">\n\n                <div class=\"w3-center\" *ngIf=\"file\">\n                    <img [src]=\"file\" alt=\"Avatar\" style=\"width:100%\" *ngIf=\"fileType=='image'\" class=\"w3-margin-top\">\n                    <div class=\"player\">\n                        <audio controls=\"controls\" *ngIf=\"fileType=='audio'\" controlsList=\"nodownload\" style=\"width: 100%;\">\n                            <source [src]=\"file\" />\n                        </audio>\n                        <video controls=\"controls\" style=\"width: 100%;\" controlsList=\"nodownload\" *ngIf=\"fileType=='video'\">\n                            <source [src]=\"file\" /> Your browser does not support the video tag.\n                        </video>\n                    </div>\n\n                    <!-- Rest of Files -->\n                    <div class=\"w3-card-4\" style=\"width:100%\" *ngIf=\"fileType=='application' || fileType=='textfile'\">\n                        <div class=\"w3-container\">\n                            <div style=\"margin: 10px auto w3-row\">\n\n                                <div style=\"width:60px\" class=\"w3-col\">\n                                    <p class=\"w3-center\">\n                                        <i [class]=\"iconStyle(fileType,file)\" style=\"position: relative;top:10px\" aria-hidden=\"true\"></i>\n                                    </p>\n                                </div>\n                                <div class=\"w3-rest\" style=\"position:relative;left:-30px\">\n                                    <p style=\"margin:33px; position: relative;top:5px;font-size: 20px\" class=\"w3-center w3-text-grey\">{{file.name}}</p>\n                                </div>\n                            </div>\n                        </div>\n                        <!--a class=\"w3-button w3-block w3-dark-grey\" style=\"text-decoration:unset\" (click)=\"DonloadFile(file.src,file.name)\">Download</a-->\n                    </div>\n                    <!-- End of Rest of Files -->\n                </div>\n                <div *ngIf=\"fileNotSupported\" class=\"w3-padding-16\">\n                    <h3 class=\"w3-margin-top w3-center w3-text-grey\">File type not supported yet !</h3>\n                </div>\n\n                <div *ngIf=\"fileSizeIsLarge\" class=\"w3-padding-16\">\n                    <h3 class=\"w3-margin-top w3-center w3-text-grey\">File size is larger than 25MB !</h3>\n                </div>\n\n                <form class=\"w3-container\" *ngIf=\"showUploadButton\">\n                    <div class=\"w3-section\">\n                        <div class=\"upload-btn-wrapper w3-center\">\n                            <button class=\"btnn\">Upload a file</button>\n                            <input class=\"w3-input w3-margin-bottom\" type=\"file\" (change)=\"fileUploadChanged($event)\">\n                        </div>\n                    </div>\n                </form>\n\n\n\n                <div class=\"w3-container w3-border-top w3-padding-16 w3-light-grey\">\n                    <button type=\"button\" class=\"w3-button w3-red\" (click)=\"hideFileModal()\">Cancel</button>\n                    <button type=\"button\" class=\"w3-button w3-green w3-right\" [disabled]=\"!file\" (click)=\"sendFile()\">Send</button>\n                </div>\n\n            </div>\n        </div>\n        <!-- Attach Modal -->\n    </div>\n</div>\n\n</div>\n<ng-template #other>\n    <div class=\"\">\n\n        <div class=\"other center w3-theme-l4\">\n            <p>Select chat or contact to start chatting</p>\n        </div>\n    </div>\n\n</ng-template>"

/***/ }),

/***/ "./src/app/chat-boxs/chat-boxs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBoxsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__("./src/app/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Contact__ = __webpack_require__("./src/app/Contact.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__encryption_service__ = __webpack_require__("./src/app/encryption.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_download_js__ = __webpack_require__("./src/assets/js/download.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_download_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_js_download_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatBoxsComponent = /** @class */ (function () {
    function ChatBoxsComponent(chatService, enc, sanitizer) {
        this.chatService = chatService;
        this.enc = enc;
        this.sanitizer = sanitizer;
        this.message = "";
        this.file = null;
        this.fileType = null;
        this.modalImage = "";
        this.showModal = false;
        this.showFileModal = false;
        this.showUploadButton = true;
        this.fileNotSupported = false;
        this.fileSizeIsLarge = false;
        this.conversations = chatService.conversations;
    }
    ChatBoxsComponent.prototype.ngOnInit = function () {
    };
    ChatBoxsComponent.prototype.ngAfterContentChecked = function () {
        this.scrollChatWindowDown();
    };
    ChatBoxsComponent.prototype.addMessage = function () {
        this.message = "";
        this.scrollChatWindowDown();
    };
    ChatBoxsComponent.prototype.sendMessage = function () {
        var data = {
            sender: this.user.username,
            reciver: this.contact.username,
            date: (new Date()).toString(),
            type: 'text',
            message: this.message
        };
        this.chatService.sendMessage(data);
        this.addMessage();
    };
    ChatBoxsComponent.prototype.scrollChatWindowDown = function () {
        var chatWndow = document.getElementById('chat-window');
        if (chatWndow)
            chatWndow.scrollTop = chatWndow.scrollHeight;
    };
    ChatBoxsComponent.prototype.getMessagesFromConversations = function () {
        var _this = this;
        this.conversations = this.chatService.getConversations();
        var readKeys = Object.keys(this.conversations[this.contact.username].read);
        var unReadKeys = Object.keys(this.conversations[this.contact.username].unread);
        var messages = [];
        readKeys.forEach(function (key) {
            var message = (_this.conversations[_this.contact.username].read)[key];
            message.date = key;
            messages.push(message);
        });
        unReadKeys.forEach(function (key) {
            var message = (_this.conversations[_this.contact.username].unread)[key];
            message.date = key;
            messages.push(message);
        });
        /*
                  message:{
                sender:
                status:
                type:,
                message:,
                date
              }
        
        */
        return messages;
    };
    ChatBoxsComponent.prototype.getStatusClass = function (message) {
        switch (message.status) {
            case 'wait':
                return {
                    ' fa-clock-o': true,
                    ' fa-check': false,
                    'w3-text-teal': false,
                };
            case 'sent':
                return {
                    ' fa-clock-o': false,
                    ' fa-check': true,
                    'w3-text-teal': false,
                };
            case 'read':
                return {
                    ' fa-clock-o': false,
                    ' fa-check': true,
                    'w3-text-indigo': true,
                };
        }
    };
    ChatBoxsComponent.prototype.blockUser = function (contact) {
        this.chatService.blockContact(contact);
    };
    ChatBoxsComponent.prototype.unBlockUser = function (contact) {
        this.chatService.unBlockContact(contact);
    };
    ChatBoxsComponent.prototype.isBlocked = function (contact) {
        return this.chatService.isBlocked(contact);
    };
    ChatBoxsComponent.prototype.openModal = function (message) {
        this.modalImage = message;
        this.showModal = true;
    };
    ChatBoxsComponent.prototype.openFileModal = function () {
        this.showFileModal = true;
    };
    ChatBoxsComponent.prototype.hideModal = function () {
        this.showModal = false;
    };
    ChatBoxsComponent.prototype.hideFileModal = function () {
        this.showFileModal = false;
        this.fileNotSupported = false;
        this.fileSizeIsLarge = false;
        this.file = null;
        this.fileType = null;
        this.showUploadButton = true;
    };
    ChatBoxsComponent.prototype.isShowModal = function () {
        if (this.showModal) {
            return " show";
        }
        else {
            return ' hide';
        }
    };
    ChatBoxsComponent.prototype.isShowFileModal = function () {
        if (this.showFileModal) {
            return " show";
        }
        else {
            return ' hide';
        }
    };
    ChatBoxsComponent.prototype.showImageFile = function () {
        if (this.file != null) {
            return true;
        }
        else {
            return false;
        }
    };
    ChatBoxsComponent.prototype.sendFile = function () {
        var data = {
            sender: this.user.username,
            reciver: this.contact.username,
            date: (new Date()).toString(),
            type: this.fileType,
            message: this.file
        };
        this.chatService.sendMessage(data);
        this.hideFileModal();
    };
    ChatBoxsComponent.prototype.fileUploadChanged = function (event) {
        var _this = this;
        var files = event.target.files;
        var srcData;
        this.fileNotSupported = false;
        this.fileSizeIsLarge = false;
        var callBack = function (data) {
            console.log(data);
            _this.file = data;
            _this.showUploadButton = false;
        };
        if (files.length > 0) {
            var fileToLoad = files[0];
            if (!(this.acceptedFile(fileToLoad))) {
                return;
            }
            var index = fileToLoad.type.indexOf("/");
            var type = fileToLoad.type.substr(0, index);
            if (type == 'text') {
                type = 'textfile';
            }
            this.fileType = type;
            if ((fileToLoad.name.split("."))[1] == "rar" || (fileToLoad.name.split("."))[1] == "zip") {
                this.fileType = "application";
            }
            var fileReader = new FileReader();
            fileReader.onload = function (fileLoadedEvent) {
                srcData = (fileLoadedEvent.target)['result']; // <--- data: base64      this.file = srcData;
                if (type == "application" || type == "textfile") {
                    var data = {
                        src: srcData,
                        name: fileToLoad.name,
                        ext: (fileToLoad.name.split("."))[1]
                    };
                    callBack(data);
                }
                else if ((fileToLoad.name.split("."))[1] == "rar") {
                    srcData = "data:application/x-rar" + (srcData.split(':'))[1];
                    var data = {
                        src: srcData,
                        name: fileToLoad.name,
                        ext: "rar"
                    };
                    callBack(data);
                }
                else if ((fileToLoad.name.split("."))[1] == "zip") {
                    srcData = "data:application/zip" + (srcData.split(':'))[1];
                    var data = {
                        src: srcData,
                        name: fileToLoad.name,
                        ext: "zip"
                    };
                    callBack(data);
                }
                else
                    callBack(srcData);
            };
            fileReader.readAsDataURL(fileToLoad);
            event.target.value = null;
        }
    };
    ChatBoxsComponent.prototype.getStatus = function (contact) {
        return this.chatService.getStatus(contact);
    };
    ChatBoxsComponent.prototype.iconStyle = function (type, file) {
        var ext = (file.name.split("."))[1];
        if (type == 'textfile') {
            return "fa fa-file-text-o fa-5x w3-text-grey";
        }
        if (file.ext == 'pdf')
            return "fa fa-file-pdf-o fa-5x w3-text-grey";
        if (ext == "zip" || ext == "rar")
            return "fa fa fa-file-archive-o fa-5x w3-text-grey";
        else
            return "fa fa-file-o fa-5x w3-text-grey";
    };
    ChatBoxsComponent.prototype.DonloadFile = function (src, name) {
        __WEBPACK_IMPORTED_MODULE_5__assets_js_download_js__(src, name);
    };
    ChatBoxsComponent.prototype.acceptedFile = function (fileToLoad) {
        if (fileToLoad.size > 25000000) {
            this.fileSizeIsLarge = true;
            return false;
        }
        var index = fileToLoad.type.indexOf("/");
        var type = fileToLoad.type.substr(0, index);
        var ext = (fileToLoad.name.split("."))[1];
        var acceptedTypes = ["text", "image", "video", "audio"];
        var acceptedExt = ["rar", "zip", "pdf"];
        if (ext.toLocaleLowerCase() == "mkv") {
            this.fileNotSupported = true;
            return false;
        }
        if (acceptedTypes.indexOf(type.toLocaleLowerCase()) > -1)
            return true;
        else if (acceptedExt.indexOf(ext.toLocaleLowerCase()) > -1)
            return true;
        else {
            this.fileNotSupported = true;
            return false;
        }
    };
    ChatBoxsComponent.prototype.safe = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__User__["a" /* User */])
    ], ChatBoxsComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__Contact__["a" /* Contact */])
    ], ChatBoxsComponent.prototype, "contact", void 0);
    ChatBoxsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-boxs',
            template: __webpack_require__("./src/app/chat-boxs/chat-boxs.component.html"),
            styles: [__webpack_require__("./src/app/chat-boxs/chat-boxs.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_4__encryption_service__["a" /* EncryptionService */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* DomSanitizer */]])
    ], ChatBoxsComponent);
    return ChatBoxsComponent;
}());



/***/ }),

/***/ "./src/app/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__User__ = __webpack_require__("./src/app/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Contact__ = __webpack_require__("./src/app/Contact.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dateformat__ = __webpack_require__("./node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dateformat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_dateformat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_localforage__ = __webpack_require__("./node_modules/localforage/dist/localforage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_localforage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__encryption_service__ = __webpack_require__("./src/app/encryption.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ChatService = /** @class */ (function () {
    function ChatService(http, router, enc) {
        this.http = http;
        this.router = router;
        this.enc = enc;
        this.url = "http://192.168.1.254/";
        this.userInfo = {};
        this.user = new __WEBPACK_IMPORTED_MODULE_4__User__["a" /* User */]();
        this.contact = new __WEBPACK_IMPORTED_MODULE_5__Contact__["a" /* Contact */]();
        this.isloged = false;
        this.searchResult = [];
        this.conversations = {};
        this.convReady = false;
        this.messageQueue = [];
        this.stateQueue = [];
        this.readMarkQueue = [];
        //localforage.clear()
    }
    ChatService.prototype.logIn = function (userInfo) {
        this.userInfo = userInfo;
        return this.http.post(this.url + "login", userInfo);
    };
    ChatService.prototype.loginSeuccsess = function (responce) {
        this.user.username = responce['username'];
        this.user.fullname = responce['fullname'];
        this.user.email = responce['email'];
        this.user.contacts = responce['contacts'];
        this.user.pin = responce['pin'],
            this.user.privacy = responce['privacy'];
        this.user.blockedContacts = responce['blockedContacts'];
        this.user.yearOfBirth = responce['yearOfBirth'];
        this.user.profileImage = responce['profileImage'];
        this.user.privateKey = responce['privateKey'];
        this.user.contactsRequests = responce['contactsRequests'];
        this.isloged = true;
        this.connect();
        this.router.navigate(['/main']);
    };
    ChatService.prototype.signup = function (userInfo) {
        return this.http.post(this.url + "signup", userInfo);
    };
    ChatService.prototype.search = function (data) {
        var _this = this;
        if (data.username != "") {
            this.http.post(this.url + "search2", data).subscribe(function (responce) {
                _this.searchResult = responce;
            });
        }
        else {
            this.searchResult = [];
        }
    };
    ChatService.prototype.webSafe64 = function (base64) {
        return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    };
    ChatService.prototype.connect = function () {
        var _this = this;
        //this.user = user;
        this.searchResult = [];
        this.socketUrl = this.url + "?username=" + this.user.username;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.socketUrl);
        this.initConversations();
        this.socket.on('chat', function (data) {
            /*var mes = data.message;
            if(data.type != "text"){
              data.message = this.webSafe64(mes);
              var res = mes.substring(0,7);
              console.log(res);
              if(res == "unsafe:"){
                res.splice(7,res.length);
                data.message = res;
              }
            }*/
            if (data.type == 'text') {
                data.message = _this.enc.decrypt(data.message, _this.user.privateKey);
            }
            _this.addMessageToConversation(data.sender, data.date, data);
        });
        this.socket.on('sent', function (data) {
            _this.markStatus(data, "sent");
        });
        this.socket.on('read', function (data) {
            _this.markStatus(data, 'read');
        });
        this.socket.on('readNotes', function (notes) {
            var arr = Array.from(notes);
            arr.forEach(function (note) {
                _this.markStatus(note, 'read');
            });
        });
        this.socket.on('messages', function (messages) {
            messages.forEach(function (data) {
                if (data.type == 'text') {
                    data.message = _this.enc.decrypt(data.message, _this.user.privateKey);
                }
                _this.addMessageToConversation(data.sender, data.date, data);
            });
        });
        this.socket.on('status', function (data) {
            var index = _this.findIndexOfContact(data.username);
            _this.user.contacts[index].status = data.status;
            _this.user.contacts[index].lastSeen = data.lastSeen;
        });
        this.socket.on('addContact2', function (data) {
            _this.user.contactsRequests.push(data);
        });
        this.socket.on('deleteContact', function (data) {
            var index = _this.findIndexOfContact(data.username);
            _this.user.contacts.splice(index, 1);
            delete _this.conversations[data.username];
            _this.saveConv();
        });
        this.socket.on('deleteContactAKN', function (data) {
            var index = _this.findIndexOfContact(data.deletedContact);
            _this.user.contacts.splice(index, 1);
            delete _this.conversations[data.deletedContact];
            _this.saveConv();
        });
        this.socket.on('acceptContact', function (data) {
            ///a tooast should go here!
            _this.user.contacts.push(data);
            _this.conversations[data.username] = {
                read: {},
                unread: {},
                lastMessage: "no nessages yet",
                unreadCount: 0
            };
            _this.saveConv();
        });
        this.socket.on('acceptContactAKN', function (data) {
            var index = _this.findIndexOfRequest(data.username);
            _this.user.contactsRequests.splice(index, 1);
            _this.user.contacts.push(data);
            _this.conversations[data.username] = {
                read: {},
                unread: {},
                lastMessage: "no nessages yet",
                unreadCount: 0
            };
            _this.saveConv();
        });
        this.socket.on('declineContactAKM', function (data) {
            var index = _this.findIndexOfRequest(data.username);
            _this.user.contactsRequests.splice(index, 1);
        });
        this.socket.on('blockContactAKM', function (data) {
            _this.user.blockedContacts.push(data.blockedContact);
        });
        this.socket.on('unBlockContactAKM', function (data) {
            var index = _this.user.blockedContacts.indexOf(data.unBlockedContact);
            _this.user.blockedContacts.splice(index, 1);
        });
        this.socket.on('profileImage', function (data) {
            var index = _this.findIndexOfContact(data.username);
            _this.user.contacts[index].profileImage = data.profileImage;
        });
        this.socket.on('userProfileImage', function (data) {
            _this.user.profileImage = data.profileImage;
        });
        this.socket.on('resetPINAKN', function (data) {
            if (data.ok) {
                _this.user.pin = data.PIN;
            }
        });
        this.socket.on('setPrivacyAKN', function (data) {
            if (data.ok) {
                _this.user.privacy = data.privacy;
            }
        });
    };
    ChatService.prototype.sendMessage = function (message) {
        var encMessage = JSON.parse(JSON.stringify(message));
        if (message.type == 'text') {
            if (message.message == "") {
                return;
            }
            encMessage.message = this.enc.encrypt(encMessage.message, this.user.contacts[this.findIndexOfContact(message.reciver)].publicKey);
        }
        this.socket.emit('chat', encMessage);
        this.socket.send();
        this.addMessageToConversation(message.reciver, message.date, message);
    };
    ChatService.prototype.sendReadNotes = function (message) {
        this.socket.emit('read', message);
    };
    ChatService.prototype.setProfileImage = function (profileImage) {
        var data = {
            username: this.user.username,
            profileImage: profileImage
        };
        this.socket.emit('profileImage', data);
    };
    ChatService.prototype.addMessageToConversation = function (sender, date, data) {
        if (this.convReady) {
            if (data.type == "text") {
                this.conversations[sender].lastMessage = data.sender + ": " + data.message;
            }
            else if (data.type == "image") {
                this.conversations[sender].lastMessage = data.sender + ": image";
            }
            else if (data.type == "video") {
                this.conversations[sender].lastMessage = data.sender + ": video";
            }
            else if (data.type == "audio") {
                this.conversations[sender].lastMessage = data.sender + ": audio";
            }
            else if (data.type == "application" || data.type == "textfile") {
                this.conversations[sender].lastMessage = data.sender + ": file";
            }
            if (sender == this.user.username || sender == this.contact.username) {
                if (data.sender == this.contact.username) {
                    this.sendReadNotes(data);
                }
                this.conversations[sender].read[date] = {
                    sender: data.sender,
                    message: data.message,
                    type: data.type,
                    status: 'wait'
                };
            }
            else {
                this.conversations[sender].unreadCount = parseInt(this.conversations[sender].unreadCount) + 1;
                this.conversations[sender].unread[date] = {
                    sender: sender,
                    message: data.message,
                    type: data.type
                };
            }
            this.saveConv();
        }
        else {
            var obj = {
                sender: sender,
                date: date,
                data: data
            };
            this.messageQueue.push(obj);
        }
    };
    ChatService.prototype.saveConv = function () {
        this.conv[this.user.username] = this.conversations;
        __WEBPACK_IMPORTED_MODULE_7_localforage__["setItem"]('conversations', this.conv);
    };
    ChatService.prototype.emptyConv = function () {
        var _this = this;
        var arr = this.user.contacts;
        arr.forEach(function (contact) {
            _this.conversations[contact.username] = {
                read: {},
                unread: {},
                lastMessage: "no nessages yet",
                unreadCount: 0
            };
        });
    };
    ChatService.prototype.cheqNewCntacts = function () {
        var _this = this;
        var arr = this.user.contacts;
        arr.forEach(function (contact) {
            if (!_this.conversations.hasOwnProperty(contact.username)) {
                console.log(contact.username);
                _this.conversations[contact.username] = {
                    read: {},
                    unread: {},
                    lastMessage: "no nessages yet",
                    unreadCount: 0
                };
            }
        });
        this.saveConv();
    };
    ChatService.prototype.emptyConv2 = function () {
        var arr = this.user.contacts;
        var con = {};
        arr.forEach(function (contact) {
            con[contact.username] = {
                read: {},
                unread: {},
                lastMessage: "no nessages yet",
                unreadCount: 0
            };
        });
        this.conversations = con;
    };
    ChatService.prototype.Ready = function () {
        var _this = this;
        this.cheqNewCntacts();
        this.convReady = true;
        this.messageQueue.forEach(function (message) {
            _this.addMessageToConversation(message.sender, message.date, message.data);
        });
        this.readMarkQueue.forEach(function (contact) {
            _this.markRead(contact);
        });
        this.stateQueue.forEach(function (state) {
            _this.markStatus(state.data, state.status);
        });
    };
    ChatService.prototype.isReady = function () {
        return this.convReady;
    };
    ChatService.prototype.getConversations = function () {
        return this.conversations;
    };
    ChatService.prototype.initConversations = function () {
        var _this = this;
        this.emptyConv();
        __WEBPACK_IMPORTED_MODULE_7_localforage__["getItem"]('conversations', function (err, conv) {
            if (err) {
                _this.emptyConv2();
                _this.conv = {};
                _this.saveConv();
                _this.Ready();
            }
            else {
                _this.conv = conv;
                if (_this.conv == null) {
                    _this.emptyConv2();
                    _this.conv = {};
                    _this.saveConv();
                    _this.Ready();
                }
                else {
                    try {
                        _this.conversations = conv[_this.user.username];
                        if (_this.conversations == undefined) {
                            throw err;
                        }
                        _this.Ready();
                    }
                    catch (e) {
                        _this.emptyConv2();
                        _this.saveConv();
                        _this.Ready();
                    }
                }
            }
        });
    };
    ChatService.prototype.markRead = function (contact) {
        var _this = this;
        if (this.convReady) {
            var unReadKeys = Object.keys(this.conversations[contact].unread);
            this.conversations[contact].unreadCount = 0;
            unReadKeys.forEach(function (key) {
                var message = (_this.conversations[contact].unread)[key];
                (_this.conversations[contact].read)[key] = (_this.conversations[contact].unread)[key];
                message.reciver = _this.user.username;
                message.date = key;
                _this.sendReadNotes(message);
                delete (_this.conversations[contact].unread)[key];
            });
            this.saveConv();
        }
        else {
            this.readMarkQueue.push(contact);
        }
    };
    ChatService.prototype.markStatus = function (data, status) {
        if (this.convReady) {
            ((this.conversations[data.reciver].read)[data.date]).status = status;
            this.saveConv();
        }
        else {
            var state = {
                data: data,
                status: status
            };
            this.stateQueue.push(state);
        }
    };
    ChatService.prototype.blockContact = function (contact) {
        var data = {
            username: this.user.username,
            blockedContact: contact
        };
        this.socket.emit('blockContact', data);
    };
    ChatService.prototype.isBlocked = function (user) {
        var bool = false;
        var arr = this.user.blockedContacts;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == user) {
                bool = true;
                break;
            }
        }
        return bool;
    };
    ChatService.prototype.unBlockContact = function (contact) {
        var data = {
            username: this.user.username,
            unBlockedContact: contact
        };
        this.socket.emit('unblock', data);
    };
    ChatService.prototype.getSearchResult = function () {
        return this.searchResult;
    };
    ChatService.prototype.addContact = function (data) {
        this.socket.emit('addContact2', data);
    };
    ChatService.prototype.addContactByPIN = function (pin) {
        var data = {
            username: this.user.username,
            pin: pin
        };
        this.socket.emit('addContactByPIN', data);
    };
    ChatService.prototype.deleteContact = function (contact) {
        var data = {
            username: this.user.username,
            deletedContact: contact,
        };
        this.socket.emit('deleteContact', data);
    };
    ChatService.prototype.acceptContact = function (contact) {
        var data = {
            username: contact,
            addedContact: this.user.username
        };
        this.socket.emit("acceptContact", data);
    };
    ChatService.prototype.declineContact = function (contact) {
        var data = {
            username: contact,
            addedContact: this.user.username
        };
        this.socket.emit("declineContact", data);
    };
    ChatService.prototype.updateInfo = function () {
        this.logIn(this.userInfo);
    };
    ChatService.prototype.findIndexOfContact = function (contact) {
        for (var i = 0; i < this.user.contacts.length; i++) {
            if (this.user.contacts[i].username == contact)
                return i;
        }
        return -1;
    };
    ChatService.prototype.findIndexOfRequest = function (username) {
        for (var i = 0; i < this.user.contactsRequests.length; i++) {
            if (this.user.contactsRequests[i].username == username)
                return i;
        }
        return -1;
    };
    ChatService.prototype.isOnline = function (contact) {
        var index = this.findIndexOfContact(contact);
        switch (this.user.contacts[index].status) {
            case 'online':
                return true;
            case 'offline':
                return false;
            default:
                return false;
        }
    };
    ChatService.prototype.getContact = function (contact) {
        var index = this.findIndexOfContact(contact);
        return this.user.contacts[index];
    };
    ChatService.prototype.getStatus = function (contact) {
        var con = this.getContact(contact);
        if (con.status == 'online') {
            return 'Online';
        }
        else {
            return 'Last seen on ' + __WEBPACK_IMPORTED_MODULE_6_dateformat__(con.lastSeen, "dddd, h:MM TT");
        }
    };
    ChatService.prototype.setPrivacy = function (privacy) {
        var data = {
            username: this.user.username,
            privacy: privacy
        };
        this.socket.emit("setPrivacy", data);
    };
    ChatService.prototype.setPassword = function (oldPassword, newPassword) {
        var data = {
            username: this.user.username,
            oldPassword: oldPassword,
            newPassword: newPassword
        };
        this.socket.emit("setPassword", data);
    };
    ChatService.prototype.resetPIN = function () {
        var data = {
            username: this.user.username,
        };
        this.socket.emit("resetPIN", data);
    };
    ChatService.prototype.logout = function () {
        localStorage.clear();
        this.socket.disconnect();
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_8__encryption_service__["a" /* EncryptionService */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/***/ (function(module, exports) {

module.exports = ".tabs{\r\n    width: 85%;\r\n    margin: 50px auto;\r\n}\r\n*{\r\n    text-align: center;\r\n}\r\n.hid{\r\n    display: none;\r\n}\r\n.showin{\r\n    display: block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav [user]='user'></app-sidenav>\n<div class=\"w3-container w3-margin-left w3-margin-rigth\">\n  <h2 style=\"margin-top: 30px\">Contacts Control</h2>\n\n  <div class=\"tabs\">\n    <div class=\"w3-row\">\n      <a (click)=\"openTab('Contacts');\">\n        <div class=\"w3-third tablink w3-bottombar w3-hover-light-grey w3-padding\" [ngClass]=\"ifSelected('Contacts')\">Contacts</div>\n      </a>\n      <a (click)=\"openTab('Search');\">\n        <div class=\"w3-third tablink w3-bottombar w3-hover-light-grey w3-padding \" [ngClass]=\"ifSelected('Search')\">Search</div>\n      </a>\n      <a (click)=\"openTab('Requests');\">\n        <div class=\"w3-third tablink w3-bottombar w3-hover-light-grey w3-padding\" [ngClass]=\"ifSelected('Requests')\">Requests  <span class=\"w3-badge w3-red\" *ngIf=\"hasRequests()\">{{getRequestsLength()}}</span> </div>\n      </a>\n    </div>\n\n    <div id=\"Contacts\" class=\"w3-container\" [ngClass]=\"isActive('Contacts')\">\n      <div class=\"w3-row  w3-margin\" style=\"overflow: auto;\">\n        <div class=\"w3-card-4 w3-margin w3-theme-l4 w3-center\" style=\"width:400px;display:inline-block\" *ngFor=\"let contact of contacts\">\n          <h3 class=\"w3-margin\">{{contact.fullname}}</h3>\n          <img [src]=\"sanitizer.bypassSecurityTrustUrl(contact.profileImage)\" class=\"w3-circle\" [alt]=\"contact.username\" width=\"90%\">\n          <h4 class=\"w3-margin\">@{{contact.username}}</h4>\n          <button class=\"w3-button w3-theme-l3 w3-margin\" *ngIf=\"isBlocked(contact.username);else block\" (click)=\"unBlockUser(contact.username)\">Unblock</button>\n          <ng-template #block>\n            <button class=\"w3-button w3-theme-l3 w3-margin\" (click)=\"blockUser(contact.username)\">Block</button>\n          </ng-template>\n          <button class=\"w3-button w3-theme-d3 w3-margin\" (click)=\"deleteContact(contact.username)\">Delete</button>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"Search\" [ngClass]=\"isActive('Search')\">\n      <h3 class=\"w3-margin-top w3-margin-bottom\">Input username for searching</h3>\n      <div class=\"w3-panel\">\n        <div class=\"row\">\n          <div class=\"w3-col s0 m2\"></div>\n\n          <div class=\"input-group w3-col s12 m5\">\n            <input class=\"form-control\" (keyup)=\"search()\" [(ngModel)]=\"searchString\">\n          </div>\n\n          <div class=\"input-group w3-col s12 m3\">\n            <input class=\"form-control\" [(ngModel)]=\"searchPIN\" placeholder=\"Input PIN for private accounts\">\n            <button class=\"input-group-addon\" (click)=\"addUserByPIN()\">\n              <i class=\"fa fa-slack\"></i>\n            </button>\n          </div>\n\n          <div class=\"w3-col s0 m2\"></div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"w3-col s0 m3\"></div>\n          <ul class=\"w3-ul w3-card-4 w3-col s12 m6 w3-margin-top w3-theme-l4\">\n            <li class=\"w3-bar\" *ngFor=\"let result of getSearchResult()\">\n              <span class=\"w3-bar-item w3-button w3-xxxlarge w3-right\" (click)=\"addContact(result.username)\">\n                <i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i>\n              </span>\n              <img [src]=\"sanitizer.bypassSecurityTrustUrl(result.profileImage)\" class=\"w3-bar-item w3-circle w3-hide-small\" style=\"width:100px\">\n              <div class=\"w3-bar-item\">\n                <h2 class=\"w3-large\">{{result.fullname}}</h2>\n                <h4>@{{result.username}}</h4>\n              </div>\n            </li>\n          </ul>\n          <div class=\"w3-col s0 m3\"></div>\n        </div>\n\n      </div>\n    </div>\n\n    <div id=\"Requests\" class=\"w3-container\" [ngClass]=\"isActive('Requests')\" width=\"50%\">\n      <div class=\"w3-row  w3-margin\" style=\"overflow: auto;\">\n        <div class=\"w3-card-4 w3-margin w3-dark-grey\" style=\"width:400px;display:inline-block\" *ngFor=\"let request of getRequests()\">\n          <div class=\"w3-container w3-center w3-margin\">\n            <h2 class=\"w3-margin\">Friend request</h2>\n            <img [src]=\"sanitizer.bypassSecurityTrustUrl(request.profileImage)\" alt=\"Avatar\" style=\"width:100%\">\n            <h4 class=\"w3-margin\">{{request.fullname}}</h4>\n            <h3 class=\"w3-margin\">@{{request.username}}</h3>\n            <button class=\"w3-button w3-green\" (click)=\"acceptContact(request.username)\">Accept</button>\n            <button class=\"w3-button w3-red\" (click)=\"declineContact(request.username)\">Decline</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(chatService, router, sanitizer) {
        this.chatService = chatService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.selected = "Contacts";
        this.searchString = '';
        this.searchPIN = '';
        this.user = this.chatService.user;
        this.contacts = this.user.contacts;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        if (this.chatService.isloged == false) {
            this.router.navigate(['/login']);
        }
    };
    ContactsComponent.prototype.openTab = function (tabName) {
        this.selected = tabName;
        this.searchString = '';
    };
    ContactsComponent.prototype.isActive = function (tab) {
        if (this.selected === tab) {
            return "showin";
        }
        else {
            return "hid";
        }
    };
    ContactsComponent.prototype.ifSelected = function (tab) {
        if (this.selected == tab) {
            return "w3-border-theme2";
        }
        else {
            return "w3-border-theme3";
        }
    };
    ContactsComponent.prototype.search = function () {
        var data = {
            username: this.searchString,
            user: this.user.username
        };
        this.chatService.search(data);
    };
    ContactsComponent.prototype.getSearchResult = function () {
        if (this.searchString == "") {
            this.chatService.getSearchResult();
            return [];
        }
        return this.chatService.getSearchResult();
    };
    ContactsComponent.prototype.addContact = function (addedContact) {
        var data = {
            username: this.user.username,
            addedContact: addedContact
        };
        this.chatService.addContact(data);
        this.searchString = "";
    };
    ContactsComponent.prototype.addUserByPIN = function () {
        if (this.searchPIN !== this.user.pin) {
            this.chatService.addContactByPIN(this.searchPIN);
        }
        this.searchPIN = "";
    };
    ContactsComponent.prototype.getRequests = function () {
        return this.user.contactsRequests;
    };
    ContactsComponent.prototype.getRequestsLength = function () {
        return this.user.contactsRequests.length;
    };
    ContactsComponent.prototype.hasRequests = function () {
        if (this.getRequestsLength() > 0)
            return true;
        return false;
    };
    ContactsComponent.prototype.acceptContact = function (username) {
        this.chatService.acceptContact(username);
    };
    ContactsComponent.prototype.declineContact = function (username) {
        this.chatService.declineContact(username);
    };
    ContactsComponent.prototype.deleteContact = function (username) {
        this.chatService.deleteContact(username);
    };
    ContactsComponent.prototype.isBlocked = function (contact) {
        return this.chatService.isBlocked(contact);
    };
    ContactsComponent.prototype.blockUser = function (contact) {
        this.chatService.blockContact(contact);
    };
    ContactsComponent.prototype.unBlockUser = function (contact) {
        this.chatService.unBlockContact(contact);
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__("./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__("./src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/contatcs-list/contatcs-list.component.css":
/***/ (function(module, exports) {

module.exports = "h2{\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n    margin-top: 20px;\r\n}\r\n.w3-container{\r\n    margin-bottom: 30px;\r\n}\r\n.back{\r\n    height: 805px;\r\n    overflow: auto;\r\n}\r\n.selected{\r\n    background-color: darkblue\r\n    ;\r\n    border: blue;\r\n}\r\n.lis{\r\n    border-bottom:none; \r\n}\r\n.back::-webkit-scrollbar {\r\n    width: 4px;\r\n}\r\n.back::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n}\r\n.back::-webkit-scrollbar-thumb {\r\n  background-color: darkgrey;\r\n  outline: 1px solid slategrey;\r\n}\r\n.loader {\r\n    border: 16px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 16px solid #444444;\r\n    width: 300px;\r\n    height: 300px;\r\n    margin: 190px auto;\r\n    -webkit-animation: spin 2s linear infinite; /* Safari */\r\n    animation: spin 2s linear infinite;\r\n  }\r\n/* Safari */\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n@keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n  }"

/***/ }),

/***/ "./src/app/contatcs-list/contatcs-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"back w3-theme\" style=\"height: 132vh;\">\n  <h2 >Conversations</h2>\n  <div *ngIf=\"isReady(); else loading\">\n    <ul class=\"w3-ul win\">\n      <li class=\"w3-bar w3-hover-theme2 w3-leftbar lis\" [ngClass]=\"stateClass(contact.username)\" *ngFor=\"let contact of user.contacts\" (click)=\"selectContact(contact)\">\n        <span class=\"w3-badge w3-green w3-right w3-margin-right\" *ngIf=\"conversations[contact.username].unreadCount > 0\">{{conversations[contact.username].unreadCount}}</span>\n        <img [src]=\"sanitizer.bypassSecurityTrustUrl(contact.profileImage)\" class=\"w3-bar-item w3-circle w3-hide-small\" style=\"width:85px;\">\n        <div class=\"w3-bar-item\">\n          <span class=\"w3-large\">{{contact.fullname}}</span>\n          <br>\n          <span style=\"font-weight: bold\">{{getLMSender(contact)}}</span>\n          <span *ngIf=\"isText(getLM(contact))\">{{getLM(contact)}}</span>\n          <span *ngIf=\"isImage(getLM(contact))\"><i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i></span>\n          <span *ngIf=\"isVideo(getLM(contact))\"><i class=\"fa fa-video-camera\" aria-hidden=\"true\"></i></span>\n          <span *ngIf=\"isAudio(getLM(contact))\"><i class=\"fa fa-volume-up\" aria-hidden=\"true\"></i></span>\n          <span *ngIf=\"isFile(getLM(contact))\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i></span>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <ng-template #loading>\n    <div class=\"loader\"></div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/contatcs-list/contatcs-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatcsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContatcsListComponent = /** @class */ (function () {
    function ContatcsListComponent(chatService, sanitizer) {
        this.chatService = chatService;
        this.sanitizer = sanitizer;
        this.onSelectContact = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.conversations = {};
        this.conversations = chatService.conversations;
    }
    ContatcsListComponent.prototype.ngOnInit = function () {
    };
    ContatcsListComponent.prototype.selectContact = function (contact) {
        this.onSelectContact.emit(contact);
        this.chatService.markRead(contact.username);
    };
    ContatcsListComponent.prototype.isBlocked = function (contact) {
        return this.chatService.isBlocked(contact);
    };
    ContatcsListComponent.prototype.stateClass = function (contact) {
        var colorClass = "";
        if (this.isBlocked(contact))
            colorClass += "w3-border-red";
        else if (this.isOnline(contact)) {
            colorClass += "w3-border-green";
        }
        else
            colorClass += "w3-border-theme2";
        if (contact == this.chatService.contact.username) {
            colorClass += " w3-gray";
        }
        return colorClass;
    };
    ContatcsListComponent.prototype.isOnline = function (contact) {
        return this.chatService.isOnline(contact);
    };
    ContatcsListComponent.prototype.isReady = function () {
        this.conversations = this.chatService.getConversations();
        return this.chatService.isReady();
    };
    ContatcsListComponent.prototype.getConversations = function () {
        return this.chatService.getConversations();
    };
    ContatcsListComponent.prototype.getLMSender = function (contact) {
        var lastMessage = this.conversations[contact.username].lastMessage;
        if (lastMessage == "no nessages yet")
            return "";
        var arr = lastMessage.split(": ");
        return arr[0] + ":";
    };
    ContatcsListComponent.prototype.getLM = function (contact) {
        var lastMessage = this.conversations[contact.username].lastMessage;
        if (lastMessage == "no nessages yet")
            return "no nessages yet";
        var arr = lastMessage.split(": ");
        if (arr[1].length > 27) {
            return arr[1].substring(0, 27) + "..";
        }
        return arr[1];
    };
    ContatcsListComponent.prototype.isText = function (string) {
        if (string == "file" || string == "image" || string == "video" || string == "audio")
            return false;
        return true;
    };
    ContatcsListComponent.prototype.isImage = function (string) {
        if (string == "image")
            return true;
        return false;
    };
    ContatcsListComponent.prototype.isVideo = function (string) {
        if (string == "video")
            return true;
        return false;
    };
    ContatcsListComponent.prototype.isAudio = function (string) {
        if (string == "audio")
            return true;
        return false;
    };
    ContatcsListComponent.prototype.isFile = function (string) {
        if (string == "file")
            return true;
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContatcsListComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ContatcsListComponent.prototype, "onSelectContact", void 0);
    ContatcsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contatcs-list',
            template: __webpack_require__("./src/app/contatcs-list/contatcs-list.component.html"),
            styles: [__webpack_require__("./src/app/contatcs-list/contatcs-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], ContatcsListComponent);
    return ContatcsListComponent;
}());



/***/ }),

/***/ "./src/app/encryption.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncryptionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_big_integer__ = __webpack_require__("./node_modules/big-integer/BigInteger.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_big_integer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_big_integer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EncryptionService = /** @class */ (function () {
    function EncryptionService() {
    }
    EncryptionService.prototype.encrypt = function (message, key) {
        var StringBuilder = [];
        var messArr = message.split("");
        messArr.forEach(function (char) {
            var value = __WEBPACK_IMPORTED_MODULE_1_big_integer__(char.charCodeAt(0));
            var cipher = value.modPow(key.e, key.n);
            StringBuilder.push(cipher);
        });
        return StringBuilder.join(" ");
    };
    EncryptionService.prototype.decrypt = function (message, key) {
        var result = [];
        var scanner = message.split(" ");
        scanner.forEach(function (element) {
            var plainValue = (__WEBPACK_IMPORTED_MODULE_1_big_integer__(element)).modPow(key.d, key.n);
            result.push(String.fromCharCode(plainValue.valueOf()));
        });
        return result.join("");
    };
    EncryptionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EncryptionService);
    return EncryptionService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".form{\r\n    max-width: 700px;\r\n    margin: 60px auto;\r\n    zoom: 140%;\r\n    \r\n}\r\nform{\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n}\r\nhr{\r\n    border-color: wheat;\r\n}\r\n.buttons{\r\n    max-width: 320px;\r\n    margin: 10px auto;\r\n    \r\n}\r\n.mainComponent{\r\n    /*background-color: rgba(44, 44, 44, 0.8);*/\r\n    color: white;\r\n}\r\n.padd{\r\n    padding: 13px 10px 1px 10px; \r\n    margin-bottom: 3px;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- login component -->\n<div class=\"w3-container form  mainComponent w3-theme-d2\">\n\n  <!-- Form -->\n  <div class=\"w3-padding-32 w3-margin-top\" id=\"contact\">\n    <div class=\"w3-center w3-container\">\n      <h1>Welcome to ezChat</h1>\n      <p>please login or signup to start using ezchat services</p>\n      <div class=\"buttons\">\n        <button type=\"button\" class=\"w3-button w3-block  w3-light-gray\" style=\"width: 50%;margin: 0 auto\" routerLink=\"/signup\">SIGN UP</button>\n      </div>\n    </div>\n\n\n    <form>\n      <hr>\n      <!-- validations -->\n      <div class=\"w3-container\">\n        <div class=\"padd w3-pale-red w3-leftbar w3-border-red\" *ngIf=\"username_err\">\n          <p>Username is empty or typed wrong</p>\n        </div>\n        <div class=\"padd w3-pale-red w3-leftbar w3-border-red\" *ngIf=\"password_err\">\n          <p>Password is empty or typed wrong</p>\n        </div>\n        <div class=\"padd w3-pale-red w3-leftbar w3-border-red\" *ngIf=\"exist_err\">\n          <p>{{errorMessage}}</p>\n        </div>\n        <!-- validations end -->\n\n      </div>\n      <div class=\"w3-section\">\n        <label>Username</label>\n        <input class=\"w3-input w3-border\" type=\"text\" required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"username\">\n      </div>\n      <div class=\"w3-section\">\n        <label>Password</label>\n        <input class=\"w3-input w3-border\" type=\"password\" required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"password\">\n      </div>\n      <br>\n      <button type=\"submit\" class=\"w3-button w3-block w3-theme-l2\" (click)=\"logIn()\">Login</button>\n    </form>\n    <br>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__encryption_service__ = __webpack_require__("./src/app/encryption.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(chatService, encryption, router) {
        this.chatService = chatService;
        this.encryption = encryption;
        this.router = router;
        this.username = "";
        this.password = "";
        this.username_err = false;
        this.password_err = false;
        this.exist_err = false;
        this.errorMessage = "";
    }
    LoginComponent.prototype.validate = function () {
        this.username_err = false;
        this.password_err = false;
        this.usernameVal();
        this.passwordVal();
        if (this.username_err || this.password_err)
            return false;
        return true;
    };
    LoginComponent.prototype.usernameVal = function () {
        if (this.username == "") {
            this.username_err = true;
            return;
        }
        var arr = this.username.split('');
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == " " || arr[i] == "\\" || arr[i] == "`" || arr[i] == "/" || arr[i] == "'" || arr[i] == '"') {
                this.username_err = true;
                return;
            }
        }
    };
    LoginComponent.prototype.passwordVal = function () {
        if (this.password == "") {
            this.password_err = true;
            return;
        }
        var arr = this.password.split('');
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == " ") {
                this.password_err = true;
                return;
            }
        }
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        if (this.validate()) {
            var object = {
                username: this.username,
                password: this.password
            };
            this.chatService.logIn(object).subscribe(function (responce) {
                if (responce['ok']) {
                    _this.chatService.loginSeuccsess(responce);
                    var login = {
                        username: _this.username,
                        password: _this.password
                    };
                    localStorage.setItem('login', JSON.stringify(login));
                }
                else {
                    _this.exist_err = true;
                    _this.errorMessage = responce['message'];
                }
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loadToken();
    };
    LoginComponent.prototype.loadToken = function () {
        var _this = this;
        var login = localStorage.getItem('login');
        if (login != null) {
            login = JSON.parse(login);
            if (login.hasOwnProperty('username') && login.hasOwnProperty('password')) {
                this.chatService.logIn(login).subscribe(function (responce) {
                    if (responce['ok']) {
                        _this.chatService.loginSeuccsess(responce);
                    }
                    else {
                        _this.exist_err = true;
                        _this.errorMessage = responce['message'];
                    }
                });
            }
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_2__encryption_service__["a" /* EncryptionService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-app/main-app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-app/main-app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav [user]='user'></app-sidenav>\n<div class=\"w3-row\" >\n    <div class=\"w3-col m3\" *ngIf=\"user\">\n        <app-contatcs-list [user]='user' (onSelectContact)=\"selectContact($event)\"></app-contatcs-list>\n    </div>\n    <div class=\"w3-col m9\" *ngIf=\"user\">\n        <app-chat-boxs [user]='user' [contact]='selectedContact'></app-chat-boxs>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main-app/main-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainAppComponent = /** @class */ (function () {
    function MainAppComponent(chatService, router) {
        this.chatService = chatService;
        this.router = router;
        this.user = this.chatService.user;
    }
    MainAppComponent.prototype.ngOnInit = function () {
        if (this.chatService.isloged == false) {
            this.router.navigate(['/login']);
        }
    };
    MainAppComponent.prototype.selectContact = function (contact) {
        this.selectedContact = contact;
        this.chatService.contact = contact;
    };
    MainAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-app',
            template: __webpack_require__("./src/app/main-app/main-app.component.html"),
            styles: [__webpack_require__("./src/app/main-app/main-app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], MainAppComponent);
    return MainAppComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".fullname{\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    font-size: 40px;\r\n    margin-left: 5px;\r\n}\r\n.info{\r\n    font-size: 25px;\r\n}\r\n.marginThis{\r\n    margin-top: 37px;\r\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav [user]='user'></app-sidenav>\n<div class=\"w3-container w3-margin\">\n\n  <div class=\"w3-row\">\n    <div class=\"w3-third marginThis\">\n\n      <div class=\"w3-theme-l5 w3-card-4\">\n        <div class=\"w3-display-container w3-margin-bottom\">\n          <img [src]=\"user.profileImage\" style=\"width:100%\" alt=\"Avatar\">\n          <div class=\"w3-display-bottomleft w3-container w3-text-black\">\n            <h2 class=\"fullname\">{{user.fullname}}</h2>\n          </div>\n        </div>\n        <div class=\"w3-container\">\n          <p class=\"info\">\n            <i class=\"fa fa-user-circle-o fa-fw w3-margin-right w3-large w3-text-theme\"></i>{{user.username}}</p>\n          <p class=\"info\">\n            <i class=\"fa fa-key fa-fw w3-margin-right w3-large w3-text-theme\"></i>{{user.pin}}</p>\n          <p class=\"info\">\n            <i class=\"fa fa-envelope fa-fw w3-margin-right w3-large w3-text-theme\"></i>{{user.email}}</p>\n          <p class=\"info\">\n            <i class=\"fa fa-birthday-cake fa-fw w3-margin-right w3-large w3-text-theme\"></i>{{user.yearOfBirth}}</p>\n        </div>\n      </div>\n    </div>\n    <br>\n\n    <div class=\"w3-twothird\">\n      <div class=\"w3-theme-l5 w3-container w3-margin\">\n        <h1 class=\"w3-margin\">Edit Your Profile</h1>\n\n        <div class=\"w3-container w3-theme-l5 w3-padding-16\">\n          <h3>Profile image</h3>\n          <p> if you want to change your profile image!</p>\n          <form class=\"w3-container\">\n            <div class=\"w3-section\">\n              <div class=\"upload-btn-wrapper w3-center\">\n                <button class=\"btnn\">Select Image</button>\n                <input class=\"w3-input w3-margin-bottom\" type=\"file\" (change)=\"fileUploadChanged($event)\" accept=\"image/*\">\n              </div>\n            </div>\n            <p *ngIf=\"isProfileImage()\" style=\"color:green\">Image Selected\n              <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n            </p>\n            <p *ngIf=\"fileNotSupported\" style=\"color:red\">File type not supported\n              <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n            </p>\n          </form>\n          <p>\n            <br>\n            <button class=\"w3-button w3-dark-grey\" (click)=\"pofileImageUplaod()\">Upload</button>\n          </p>\n        </div>\n\n        <div class=\"w3-container w3-theme-l5 w3-padding-16\">\n          <h3>Set new password</h3>\n          <div class=\"w3-row-padding\" style=\"margin:0 -16px;\">\n            <div class=\"w3-half\">\n              <label>Old password</label>\n              <input class=\"w3-input w3-border\" type=\"password\" placeholder=\"Old password\" [(ngModel)]=\"oldPassword\">\n            </div>\n            <div class=\"w3-half\">\n              <label>New password</label>\n              <input class=\"w3-input w3-border\" type=\"password\" placeholder=\"New password\" [(ngModel)]=\"newPassword\">\n            </div>\n          </div>\n          <p>\n            <br>\n            <button class=\"w3-button w3-dark-grey\" (click)=\"setPassword()\">Set</button>\n          </p>\n        </div>\n\n        <div class=\"w3-container w3-theme-l5 w3-padding-16\">\n          <h3>Account privacy</h3>\n          <p>If you want to change your account privacy.</p>\n          <select class=\"w3-select w3-half\" style=\"font-size: 20px;\" [(ngModel)]=\"privacy\">\n            <option value=\"private\">Private</option>\n            <option value=\"public\">Public</option>\n          </select>\n          <br>\n          <p>\n            <br>\n            <br>\n            <button class=\"w3-button w3-dark-grey\" (click)=\"setPrivacy()\">Update</button>\n          </p>\n        </div>\n\n        <div class=\"w3-container w3-theme-l5 w3-padding-16\">\n          <h3>Regenerate PIN</h3>\n          <p>If you want to regenerate the PIN.</p>\n          <p>\n            <br>\n            <button class=\"w3-button w3-dark-grey\" (click)=\"resetPIN()\">Regenerate</button>\n          </p>\n        </div>\n\n        <!--div class=\"w3-container w3-white w3-padding-16\">\n          <h3>Change Email</h3>\n          <p> if you want to change your email, put it and check it!</p>\n          <input class=\"w3-input w3-border\" type=\"email\" placeholder=\"email@service.dom\">\n          <p>\n            <br>\n            <button class=\"w3-button w3-dark-grey\">Change</button>\n          </p>\n        </div-->\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(chatService, router) {
        this.chatService = chatService;
        this.router = router;
        this.profileImage = null;
        this.oldPassword = "";
        this.newPassword = "";
        this.fileNotSupported = false;
        this.user = chatService.user;
        this.privacy = this.user.privacy;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        if (this.chatService.isloged == false) {
            this.router.navigate(['/login']);
        }
    };
    ProfileComponent.prototype.setPassword = function () {
        this.chatService.setPassword(this.oldPassword, this.newPassword);
    };
    ProfileComponent.prototype.setPrivacy = function () {
        this.chatService.setPrivacy(this.privacy);
    };
    ProfileComponent.prototype.resetPIN = function () {
        this.chatService.resetPIN();
    };
    ProfileComponent.prototype.pofileImageUplaod = function () {
        if (this.profileImage != null) {
            this.chatService.setProfileImage(this.profileImage);
            this.profileImage = null;
        }
    };
    ProfileComponent.prototype.fileUploadChanged = function (event) {
        var _this = this;
        var files = event.target.files;
        var srcData;
        this.fileNotSupported = false;
        var callBack = function (data) {
            _this.profileImage = data;
        };
        if (files.length > 0) {
            var fileToLoad = files[0];
            if (!this.acceptedFile(fileToLoad)) {
                return;
            }
            var fileReader = new FileReader();
            fileReader.onload = function (fileLoadedEvent) {
                srcData = (fileLoadedEvent.target)['result']; // <--- data: base64      this.profileImage = srcData;
                callBack(srcData);
            };
            fileReader.readAsDataURL(fileToLoad);
            event.target.value = null;
        }
    };
    ProfileComponent.prototype.isProfileImage = function () {
        if (this.profileImage != null) {
            return true;
        }
        return false;
    };
    ProfileComponent.prototype.acceptedFile = function (fileToLoad) {
        var index = fileToLoad.type.indexOf("/");
        var type = fileToLoad.type.substr(0, index);
        if (type == "image")
            return true;
        else {
            this.fileNotSupported = true;
            return false;
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/search-page/search-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search-page/search-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  search-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/search-page/search-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchPageComponent = /** @class */ (function () {
    function SearchPageComponent() {
    }
    SearchPageComponent.prototype.ngOnInit = function () {
    };
    SearchPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-page',
            template: __webpack_require__("./src/app/search-page/search-page.component.html"),
            styles: [__webpack_require__("./src/app/search-page/search-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchPageComponent);
    return SearchPageComponent;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/***/ (function(module, exports) {

module.exports = "ul{\r\n    background-color: rgba(40, 73, 78, 0.6)\r\n}"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<ul class=\"w3-bar w3-xxlarge w3-theme-d4\" style=\"margin-bottom: 0\">\n    <img [src]=\"user.profileImage\" class=\"w3-bar-item w3-right w3-margin-right w3-hide-small\" style=\"width:86px;border-radius:100%\">\n    <a routerLink=\"/main\" class=\"w3-bar-item w3-button \"><i class=\"fa fa-comments-o\"></i><span *ngIf=\"getUnreadCount()>0\" style=\"font-size: 15px !important\" class=\"w3-badge w3-right w3-small w3-green\">{{getUnreadCount()}}</span></a>\n    <a routerLink=\"/contacts\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-users\"></i><span style=\"font-size: 15px !important\" class=\"w3-badge w3-right w3-small w3-green\" *ngIf=\"getReqestsCount()>0\">{{getReqestsCount()}}</span></a>\n    <a routerLink=\"/profile\" class=\"w3-bar-item w3-button\"><i class=\"fa fa-user\"></i></a>\n    <a href=\"/\" class=\"w3-bar-item w3-button\" (click)=\"logout()\"><i class=\"fa fa-sign-in\"></i></a>\n</ul>"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__("./src/app/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(chatService) {
        this.chatService = chatService;
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.logout = function () {
        this.chatService.logout();
    };
    SidenavComponent.prototype.getReqestsCount = function () {
        //return this.user.contactsRequests.length;
        return this.chatService.user.contactsRequests.length;
    };
    SidenavComponent.prototype.getUnreadCount = function () {
        //{{conversations[contact.username].unreadCount}}
        var contacts = this.chatService.user.contacts;
        var conv = this.chatService.conversations;
        var count = 0;
        contacts.forEach(function (contact) {
            count += conv[contact.username].unreadCount;
        });
        return count;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__User__["a" /* User */])
    ], SidenavComponent.prototype, "user", void 0);
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav',
            template: __webpack_require__("./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("./src/app/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ".form{\r\n    max-width: 700px;\r\n    margin: 60px auto;\r\n    zoom: 140%;\r\n    \r\n}\r\nform{\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n}\r\nhr{\r\n    border-color: wheat;\r\n}\r\n.buttons{\r\n    max-width: 200px;\r\n    margin: 10px auto;\r\n    \r\n}\r\n.mainComponent{\r\n    /*background-color: rgba(61, 223, 215, 0.80);*/\r\n    color: white;\r\n}\r\n.padd{\r\n    padding: 13px 10px 1px 10px; \r\n    margin-bottom: 3px;\r\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Signup component -->\n<div class=\"w3-container form  mainComponent  mainComponent w3-theme-d2\">\n\n  <!-- Form -->\n  <div class=\"w3-padding-32 w3-margin-top\" id=\"contact\">\n    <div class=\"w3-center w3-container\">\n      <h1>Sign Up</h1>\n      <p>pleas fill blew information to sign up, if you already have an account you can login</p>\n      <div class=\"buttons\">\n        <div class=\"w3-row w3-padding\" style=\"width: 100%;margin: 0 auto\">\n          <button type=\"button\"  class=\"w3-button w3-block  w3-light-gray\" routerLink=\"/login\">Login</button>\n        </div>\n      </div>\n    </div>\n\n\n    <form>\n      <hr>\n      <!-- validations -->\n      <div class=\"w3-container\">\n        <div class=\"padd w3-pale-red w3-leftbar w3-border-red\" *ngIf=\"username_err\">\n          <p>Username is empty or typed wrong</p>\n        </div>\n        <div class=\"padd w3-pale-red w3-leftbar w3-border-red\" *ngIf=\"exist_err\">\n          <p>{{errorMessage}}</p>\n        </div>\n        <div class=\"padd w3-pale-red w3-leftbar w3-border-red\" *ngIf=\"fullname_err\">\n          <p>Full name is empty or typed wrong</p>\n        </div>\n        <div class=\"padd w3-pale-red w3-leftbar w3-border-red\" *ngIf=\"password_err\">\n          <p>Password is empty or typed wrong</p>\n        </div>\n        <div class=\"padd w3-pale-red w3-leftbar w3-border-red\" *ngIf=\"email_err\">\n          <p>Email is empty or typed wrong</p>\n        </div>\n        <div class=\"padd w3-pale-red w3-leftbar w3-border-red\" *ngIf=\"yearOfBirth_err\">\n          <p>Year of birth is empty or typed wrong</p>\n        </div>\n        <!-- validations end -->\n\n      </div>\n      <div class=\"w3-section\">\n        <label>Username</label>\n        <input class=\"w3-input w3-border\" type=\"text\" required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"username\">\n      </div>\n      <div class=\"w3-section\">\n        <label>Full Name</label>\n        <input class=\"w3-input w3-border\" type=\"text\" required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"fullname\">\n      </div>\n      <div class=\"w3-section\">\n        <label>Password</label>\n        <input class=\"w3-input w3-border\" type=\"password\" required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"password\">\n      </div>\n      <div class=\"w3-section\">\n        <label>Email</label>\n        <input class=\"w3-input w3-border\" type=\"email\" required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"email\">\n      </div>\n      <div class=\"w3-section\">\n        <label>YEAR OF BIRTH</label>\n        <input class=\"w3-input w3-border\" type=\"number\" required [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"yearOfBirth\">\n      </div>\n      <br>\n      <button type=\"submit\" class=\"w3-button w3-block  mainComponent w3-theme-l2\" (click)=\"signup()\">Signup</button>\n      <br>\n      <!--button type=\"button\" class=\"btn btn-danger\" (click)=\"fakeUsers()\">fake</button-->\n    </form>\n    <br>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(chatService, http, router) {
        this.chatService = chatService;
        this.http = http;
        this.router = router;
        this.username = "";
        this.password = "";
        this.email = "";
        this.fullname = "";
        this.username_err = false;
        this.fullname_err = false;
        this.password_err = false;
        this.email_err = false;
        this.yearOfBirth_err = false;
        this.exist_err = false;
        this.errorMessage = "";
    }
    SignupComponent.prototype.validate = function () {
        this.username_err = false;
        this.fullname_err = false;
        this.password_err = false;
        this.email_err = false;
        this.yearOfBirth_err = false;
        this.usernameVal();
        this.fullnameVal();
        this.passwordVal();
        this.emailVal();
        this.yearOfBirthVal();
        if (this.username_err || this.fullname_err || this.password_err || this.email_err || this.yearOfBirth_err)
            return false;
        return true;
    };
    SignupComponent.prototype.usernameVal = function () {
        if (this.username == "") {
            this.username_err = true;
            return;
        }
        var arr = this.username.split('');
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == " " || arr[i] == "\\" || arr[i] == "`" || arr[i] == "/" || arr[i] == "'" || arr[i] == '"') {
                this.username_err = true;
                return;
            }
        }
    };
    SignupComponent.prototype.fullnameVal = function () {
        if (this.fullname == "") {
            this.fullname_err = true;
            return;
        }
        var arr = this.fullname.split('');
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == "\\" || arr[i] == "`" || arr[i] == "/" || arr[i] == "'" || arr[i] == '"') {
                this.fullname_err = true;
                return;
            }
        }
    };
    SignupComponent.prototype.emailVal = function () {
        if (this.email == "") {
            this.email_err = true;
            return;
        }
        var x = this.email;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            this.email_err = true;
        }
    };
    SignupComponent.prototype.yearOfBirthVal = function () {
        if (this.yearOfBirth == undefined) {
            this.yearOfBirth_err = true;
            return;
        }
        if (this.yearOfBirth > 2018 || this.yearOfBirth < 1900) {
            this.yearOfBirth_err = true;
            return;
        }
    };
    SignupComponent.prototype.passwordVal = function () {
        if (this.password == "") {
            this.password_err = true;
            return;
        }
        var arr = this.password.split('');
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == " ") {
                this.password_err = true;
                return;
            }
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        if (this.validate()) {
            var data = {
                username: this.username,
                password: this.password,
                email: this.email,
                yearOfBirth: this.yearOfBirth,
                fullname: this.fullname
            };
            this.chatService.signup(data).subscribe(function (respnce) {
                if (respnce['ok']) {
                    var obj = {
                        username: _this.username,
                        password: _this.password
                    };
                    _this.chatService.loginSeuccsess(respnce.login);
                }
                else {
                    _this.exist_err = true;
                    _this.errorMessage = respnce['message'];
                }
            });
        }
    };
    SignupComponent.prototype.fakeUsers = function () {
        var _this = this;
        this.http.get('https://randomuser.me/api/?results=100').subscribe(function (res) {
            var results = res.results;
            for (var i = 0; i < results.length; i++) {
                var data = {
                    fullname: results[i].name.first + " " + results[i].name.last,
                    username: results[i].login.username,
                    password: 12345,
                    email: results[i].email,
                    yearOfBirth: results[i].dob
                };
                _this.chatService.signup(data);
            }
        });
    };
    SignupComponent.prototype.cb = function (profileImage, data) {
        data.profileImage = profileImage;
        this.chatService.signup(data);
    };
    SignupComponent.prototype.toDataUrl = function (url, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result, data);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/assets/js/download.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//download.js v4.2, by dandavis; 2008-2016. [CCBY2] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.download = factory();
  }
}(this, function () {

	return function download(data, strFileName, strMimeType) {

		var self = window, // this script is only for browsers anyway...
			defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
			mimeType = strMimeType || defaultMime,
			payload = data,
			url = !strFileName && !strMimeType && payload,
			anchor = document.createElement("a"),
			toString = function(a){return String(a);},
			myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
			fileName = strFileName || "download",
			blob,
			reader;
			myBlob= myBlob.call ? myBlob.bind(self) : Blob ;
	  
		if(String(this)==="true"){ //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload=[payload, mimeType];
			mimeType=payload[0];
			payload=payload[1];
		}


		if(url && url.length< 2048){ // if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split("/").pop().split("?")[0];
			anchor.href = url; // assign href prop to temp anchor
		  	if(anchor.href.indexOf(url) !== -1){ // if the browser determines that it's a potentially valid url path:
        		var ajax=new XMLHttpRequest();
        		ajax.open( "GET", url, true);
        		ajax.responseType = 'blob';
        		ajax.onload= function(e){ 
				  download(e.target.response, fileName, defaultMime);
				};
        		setTimeout(function(){ ajax.send();}, 0); // allows setting custom ajax headers using the return:
			    return ajax;
			} // end if valid url?
		} // end if url?


		//go ahead and download dataURLs right away
		if(/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(payload)){
		
			if(payload.length > (1024*1024*1.999) && myBlob !== toString ){
				payload=dataUrlToBlob(payload);
				mimeType=payload.type || defaultMime;
			}else{			
				return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
					navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
					saver(payload) ; // everyone else can save dataURLs un-processed
			}
			
		}//end if dataURL passed?

		blob = payload instanceof myBlob ?
			payload :
			new myBlob([payload], {type: mimeType}) ;


		function dataUrlToBlob(strUrl) {
			var parts= strUrl.split(/[:;,]/),
			type= parts[1],
			decoder= parts[2] == "base64" ? atob : decodeURIComponent,
			binData= decoder( parts.pop() ),
			mx= binData.length,
			i= 0,
			uiArr= new Uint8Array(mx);

			for(i;i<mx;++i) uiArr[i]= binData.charCodeAt(i);

			return new myBlob([uiArr], {type: type});
		 }

		function saver(url, winMode){

			if ('download' in anchor) { //html5 A[download]
				anchor.href = url;
				anchor.setAttribute("download", fileName);
				anchor.className = "download-js-link";
				anchor.innerHTML = "downloading...";
				anchor.style.display = "none";
				document.body.appendChild(anchor);
				setTimeout(function() {
					anchor.click();
					document.body.removeChild(anchor);
					if(winMode===true){setTimeout(function(){ self.URL.revokeObjectURL(anchor.href);}, 250 );}
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
				url=url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if(!window.open(url)){ // popup blocked, offer direct download:
					if(confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")){ location.href=url; }
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement("iframe");
			document.body.appendChild(f);

			if(!winMode){ // force a mime that will download:
				url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src=url;
			setTimeout(function(){ document.body.removeChild(f); }, 333);

		}//end saver




		if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if(self.URL){ // simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		}else{
			// handle non-Blob()+non-URL browsers:
			if(typeof blob === "string" || blob.constructor===toString ){
				try{
					return saver( "data:" +  mimeType   + ";base64,"  +  self.btoa(blob)  );
				}catch(y){
					return saver( "data:" +  mimeType   + "," + encodeURIComponent(blob)  );
				}
			}

			// Blob but not URL support:
			reader=new FileReader();
			reader.onload=function(e){
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
	}; /* end download() */
}));

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map