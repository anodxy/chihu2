webpackJsonp([21],{220:function(n,t,l){"use strict";function e(n){return o._35(0,[(n()(),o._33(null,["\n"])),(n()(),o._12(0,null,null,10,"ion-header",[["no-border",""]],null,null,null,null,null)),o._11(16384,null,0,v.a,[O.a,o.m,o.J,[2,w.a]],null,null),(n()(),o._33(null,["\n\n    "])),(n()(),o._12(0,null,null,6,"ion-navbar",[["class","toolbar"],["color","mblue"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,k.b,k.a)),o._11(49152,null,0,x.a,[I.a,[2,w.a],[2,C.a],O.a,o.m,o.J],{color:[0,"color"]},null),(n()(),o._33(3,["\n        "])),(n()(),o._12(0,null,3,2,"ion-title",[],null,null,null,R.b,R.a)),o._11(49152,null,0,P.a,[O.a,o.m,o.J,[2,T.a],[2,x.a]],null,null),(n()(),o._33(0,["步骤详情"])),(n()(),o._33(3,["\n    "])),(n()(),o._33(null,["\n\n"])),(n()(),o._33(null,["\n\n\n"])),(n()(),o._12(0,null,null,21,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,j.b,j.a)),o._11(4374528,null,0,F.a,[O.a,S.a,A.a,o.m,o.J,I.a,E.a,o.C,[2,w.a],[2,C.a]],null,null),(n()(),o._33(1,["\n    "])),(n()(),o._12(0,null,1,9,"section",[["class","work_top"]],null,null,null,null,null)),(n()(),o._33(null,["\n        "])),(n()(),o._12(0,null,null,0,"section",[["class","work_banner"]],[[4,"background",null]],[[null,"click"]],function(n,t,l){var e=!0,o=n.component;return"click"===t&&(e=!1!==o.presentActionSheet()&&e),e},null,null)),(n()(),o._33(null,["\n        "])),(n()(),o._12(0,null,null,4,"ion-textarea",[["placeholder","输入这道美食的详细步骤"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,t,l){var e=!0,o=n.component;return"ngModelChange"===t&&(e=!1!==(o.text=l)&&e),e},B.b,B.a)),o._11(671744,null,0,p.h,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),o._30(2048,null,p.f,null,[p.h]),o._11(16384,null,0,p.g,[p.f],null,null),o._11(5423104,null,0,J.a,[O.a,S.a,N.a,I.a,o.m,o.J,[2,F.a],[2,M.a],[2,p.f],A.a],{placeholder:[0,"placeholder"]},null),(n()(),o._33(null,["\n    "])),(n()(),o._33(1,["\n    "])),(n()(),o._12(0,null,1,0,"br",[],null,null,null,null,null)),(n()(),o._33(1,["\n    "])),(n()(),o._12(0,null,1,0,"br",[],null,null,null,null,null)),(n()(),o._33(1,["\n    "])),(n()(),o._12(0,null,1,2,"button",[["class","dv_button"],["icon-left",""],["ion-button",""],["outline",""],["round",""]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;return"click"===t&&(e=!1!==o.send()&&e),e},W.b,W.a)),o._11(1097728,null,0,D.a,[[8,""],O.a,o.m,o.J],{outline:[0,"outline"],round:[1,"round"]},null),(n()(),o._33(0,["确定"])),(n()(),o._33(1,["\n"]))],function(n,t){var l=t.component;n(t,5,0,"mblue"),n(t,21,0,l.text);n(t,24,0,"输入这道美食的详细步骤");n(t,32,0,"","")},function(n,t){var l=t.component;n(t,4,0,o._25(t,5)._hidden,o._25(t,5)._sbPadding),n(t,13,0,o._25(t,14).statusbarPadding,o._25(t,14)._hasRefresher),n(t,18,0,"url("+l.banner+")"),n(t,20,0,o._25(t,23).ngClassUntouched,o._25(t,23).ngClassTouched,o._25(t,23).ngClassPristine,o._25(t,23).ngClassDirty,o._25(t,23).ngClassValid,o._25(t,23).ngClassInvalid,o._25(t,23).ngClassPending)})}Object.defineProperty(t,"__esModule",{value:!0});var o=l(0),u=(l(56),l(28)),r=l(241),a=l(232),i=l(101),c=l(38),s=function(){function n(n,t,l,e,o,u,r,a,i){this.http=n,this.transfer=t,this.navCtrl=l,this.navParams=e,this.actionSheetCtrl=o,this.camera=u,this.alertCtrl=r,this.UserService=a,this.WorkService=i,this.idx=0,this.banner="assets/icon/work_item.png",this.text="",this.idata={width:"",src:"",text:"",height:""},this.idx=this.navParams.get("idx"),this.fileTransfer=this.transfer.create(),-1!=this.idx&&(this.banner=this.WorkService._item[this.idx].src,this.text=this.WorkService._item[this.idx].text)}return n.prototype.send=function(){this.text.length&&(this.idata.text=this.text,this.WorkService._item.push(this.idata),this.navCtrl.pop())},n.prototype.presentActionSheet=function(){var n=this;this.actionSheetCtrl.create({title:"图片来源",buttons:[{text:"相册",icon:"images",handler:function(){n.seleImgType(0)}},{text:"相机",icon:"camera",handler:function(){n.seleImgType(1)}},{text:"取消",role:"cancel",handler:function(){}}]}).present()},n.prototype.seleImgType=function(n){var t=this;this.camera.getPicture({quality:80,allowEdit:!0,sourceType:n,correctOrientation:!0}).then(function(n){t.up(n)},function(n){})},n.prototype.up=function(n){var t=this;this.fileTransfer.upload(n,"http://www.devonhello.com/chihu2/upload",{}).then(function(n){var l=JSON.parse(n.response);t.idata.width=l.width,t.idata.height=l.height,t.idata.src=l.src,t.banner=t.idata.src},function(n){alert("err")})},n}(),_=function(){return function(){}}(),d=l(14),p=l(21),f=l(88),h=l(140),b=l(141),g=l(142),m=l(143),y=l(144),v=l(90),O=l(1),w=l(4),k=l(226),x=l(39),I=l(7),C=l(15),R=l(227),P=l(87),T=l(40),j=l(225),F=l(20),S=l(3),A=l(8),E=l(29),B=l(234),J=l(91),N=l(22),M=l(42),W=l(57),D=l(16),L=l(11),U=l(65),z=l(62),K=[],V=o._10({encapsulation:2,styles:K,data:{}}),Y=o._9("page-send-work-item",s,function(n){return o._35(0,[(n()(),o._12(0,null,null,1,"page-send-work-item",[],null,null,null,e,V)),o._11(49152,null,0,s,[u.e,a.a,C.a,L.a,U.a,r.a,z.a,c.a,i.a],null,null)],null,null)},{},{},[]),G=l(89);l.d(t,"SendWorkItemPageModuleNgFactory",function(){return q});var H=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var l in t)t.hasOwnProperty(l)&&(n[l]=t[l])};return function(t,l){function e(){this.constructor=t}n(t,l),t.prototype=null===l?Object.create(l):(e.prototype=l.prototype,new e)}}(),Z=function(n){function t(t){return n.call(this,t,[h.a,b.a,g.a,m.a,y.a,Y],[])||this}return H(t,n),Object.defineProperty(t.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new d.j(this.parent.get(o.x))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new p.k),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new p.c),this.__FormBuilder_9},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Camera_11",{get:function(){return null==this.__Camera_11&&(this.__Camera_11=new r.a),this.__Camera_11},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Transfer_12",{get:function(){return null==this.__Transfer_12&&(this.__Transfer_12=new a.a),this.__Transfer_12},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_TransferObject_13",{get:function(){return null==this.__TransferObject_13&&(this.__TransferObject_13=new a.b),this.__TransferObject_13},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new d.b,this._ɵba_1=new p.j,this._FormsModule_2=new p.d,this._ReactiveFormsModule_3=new p.i,this._IonicModule_4=new f.a,this._IonicPageModule_5=new f.b,this._SendWorkItemPageModule_6=new _,this._LAZY_LOADED_TOKEN_10=s,this._SendWorkItemPageModule_6},t.prototype.getInternal=function(n,t){return n===d.b?this._CommonModule_0:n===p.j?this._ɵba_1:n===p.d?this._FormsModule_2:n===p.i?this._ReactiveFormsModule_3:n===f.a?this._IonicModule_4:n===f.b?this._IonicPageModule_5:n===_?this._SendWorkItemPageModule_6:n===d.k?this._NgLocalization_7:n===p.k?this._ɵi_8:n===p.c?this._FormBuilder_9:n===G.a?this._LAZY_LOADED_TOKEN_10:n===r.a?this._Camera_11:n===a.a?this._Transfer_12:n===a.b?this._TransferObject_13:t},t.prototype.destroyInternal=function(){},t}(o._7),q=new o.z(Z,_)},225:function(n,t,l){"use strict";function e(n){return o._35(2,[o._31(402653184,1,{_fixedContent:0}),o._31(402653184,2,{_scrollContent:0}),(n()(),o._12(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),o._24(null,0),(n()(),o._12(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),o._24(null,1),o._24(null,2)],null,null)}l.d(t,"a",function(){return f}),t.b=e;var o=l(0),u=l(20),r=l(1),a=l(3),i=l(8),c=l(7),s=l(29),_=l(4),d=l(15),p=[],f=o._10({encapsulation:2,styles:p,data:{}});o._9("ion-content",u.a,function(n){return o._35(0,[(n()(),o._12(0,null,null,1,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,e,f)),o._11(4374528,null,0,u.a,[r.a,a.a,i.a,o.m,o.J,c.a,s.a,o.C,[2,_.a],[2,d.a]],null,null)],null,function(n,t){n(t,0,0,o._25(t,1).statusbarPadding,o._25(t,1)._hasRefresher)})},{color:"color",mode:"mode",fullscreen:"fullscreen",scrollDownOnLoad:"scrollDownOnLoad"},{ionScrollStart:"ionScrollStart",ionScroll:"ionScroll",ionScrollEnd:"ionScrollEnd"},["[ion-fixed],ion-fab","*","ion-refresher"])},226:function(n,t,l){"use strict";function e(n){return o._35(0,[(n()(),o._12(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),o._11(278528,null,0,u.g,[o.v,o.w,o.m,o.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),o._12(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(n,t,l){var e=!0,o=n.component;return"click"===t&&(e=!1!==o.backButtonClick(l)&&e),e},a.b,a.a)),o._11(278528,null,0,u.g,[o.v,o.w,o.m,o.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._11(1097728,null,0,i.a,[[8,"bar-button"],c.a,o.m,o.J],null,null),(n()(),o._12(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o._11(278528,null,0,u.g,[o.v,o.w,o.m,o.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._11(147456,null,0,s.a,[c.a,o.m,o.J],{name:[0,"name"]},null),(n()(),o._12(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),o._11(278528,null,0,u.g,[o.v,o.w,o.m,o.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),o._33(null,["",""])),o._24(null,0),o._24(null,1),o._24(null,2),(n()(),o._12(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),o._11(278528,null,0,u.g,[o.v,o.w,o.m,o.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._24(null,3)],function(n,t){var l=t.component;n(t,1,0,"toolbar-background","toolbar-background-"+l._mode);n(t,3,0,"back-button","back-button-"+l._mode);n(t,6,0,"back-button-icon","back-button-icon-"+l._mode),n(t,7,0,l._bbIcon);n(t,9,0,"back-button-text","back-button-text-"+l._mode);n(t,15,0,"toolbar-content","toolbar-content-"+l._mode)},function(n,t){var l=t.component;n(t,2,0,l._hideBb),n(t,5,0,o._25(t,7)._hidden),n(t,10,0,l._backText)})}l.d(t,"a",function(){return h}),t.b=e;var o=l(0),u=l(14),r=l(39),a=l(57),i=l(16),c=l(1),s=l(41),_=l(7),d=l(4),p=l(15),f=[],h=o._10({encapsulation:2,styles:f,data:{}});o._9("ion-navbar",r.a,function(n){return o._35(0,[(n()(),o._12(0,null,null,1,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,e,h)),o._11(49152,null,0,r.a,[_.a,[2,d.a],[2,p.a],c.a,o.m,o.J],null,null)],null,function(n,t){n(t,0,0,o._25(t,1)._hidden,o._25(t,1)._sbPadding)})},{color:"color",mode:"mode",hideBackButton:"hideBackButton"},{},["[menuToggle],ion-buttons[left]","ion-buttons[start]","ion-buttons[end],ion-buttons[right]","*"])},227:function(n,t,l){"use strict";function e(n){return o._35(2,[(n()(),o._12(0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),o._11(278528,null,0,u.g,[o.v,o.w,o.m,o.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._24(null,0)],function(n,t){n(t,1,0,"toolbar-title","toolbar-title-"+t.component._mode)},null)}l.d(t,"a",function(){return _}),t.b=e;var o=l(0),u=l(14),r=l(87),a=l(1),i=l(40),c=l(39),s=[],_=o._10({encapsulation:2,styles:s,data:{}});o._9("ion-title",r.a,function(n){return o._35(0,[(n()(),o._12(0,null,null,1,"ion-title",[],null,null,null,e,_)),o._11(49152,null,0,r.a,[a.a,o.m,o.J,[2,i.a],[2,c.a]],null,null)],null,null)},{color:"color",mode:"mode"},{},["*"])},232:function(n,t,l){"use strict";l.d(t,"a",function(){return i}),l.d(t,"b",function(){return c});var e=l(0),o=l(60),u=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var l in t)t.hasOwnProperty(l)&&(n[l]=t[l])};return function(t,l){function e(){this.constructor=t}n(t,l),t.prototype=null===l?Object.create(l):(e.prototype=l.prototype,new e)}}(),r=this&&this.__decorate||function(n,t,l,e){var o,u=arguments.length,r=u<3?t:null===e?e=Object.getOwnPropertyDescriptor(t,l):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(n,t,l,e);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(u<3?o(r):u>3?o(t,l,r):o(t,l))||r);return u>3&&r&&Object.defineProperty(t,l,r),r},a=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},i=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.FileTransferErrorCode={FILE_NOT_FOUND_ERR:1,INVALID_URL_ERR:2,CONNECTION_ERR:3,ABORT_ERR:4,NOT_MODIFIED_ERR:5},t}return u(t,n),t.prototype.create=function(){return new c},t}(o.f);i.decorators=[{type:e.r}],i.ctorParameters=function(){return[]},i=r([Object(o.g)({pluginName:"FileTransfer",plugin:"cordova-plugin-file-transfer",pluginRef:"FileTransfer",repo:"https://github.com/apache/cordova-plugin-file-transfer",platforms:["Amazon Fire OS","Android","Browser","iOS","Ubuntu","Windows","Windows Phone"]})],i);var c=function(){function n(){!0===Object(o.h)("FileTransfer",null,"FileTransfer")&&(this._objectInstance=new FileTransfer)}return n.prototype.upload=function(n,t,l,e){},n.prototype.download=function(n,t,l,e){},n.prototype.onProgress=function(n){this._objectInstance.onprogress=n},n.prototype.abort=function(){},n}();r([Object(o.c)({successIndex:2,errorIndex:3}),a("design:type",Function),a("design:paramtypes",[String,String,Object,Boolean]),a("design:returntype",Promise)],c.prototype,"upload",null),r([Object(o.c)({successIndex:2,errorIndex:3}),a("design:type",Function),a("design:paramtypes",[String,String,Boolean,Object]),a("design:returntype",Promise)],c.prototype,"download",null),r([Object(o.e)({sync:!0}),a("design:type",Function),a("design:paramtypes",[Function]),a("design:returntype",void 0)],c.prototype,"onProgress",null),r([Object(o.c)({sync:!0}),a("design:type",Function),a("design:paramtypes",[]),a("design:returntype",void 0)],c.prototype,"abort",null),c=r([Object(o.g)({plugin:"cordova-plugin-file-transfer",pluginName:"FileTransfer"}),a("design:paramtypes",[])],c)},234:function(n,t,l){"use strict";function e(n){return i._35(0,[(n()(),i._12(0,[[1,0],["textInput",1]],null,1,"input",[["class","text-input"]],[[8,"type",0],[1,"aria-labelledby",0],[1,"min",0],[1,"max",0],[1,"step",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(n,t,l){var e=!0,o=n.component;return"input"===t&&(e=!1!==o.onInput(l)&&e),"blur"===t&&(e=!1!==o.onBlur(l)&&e),"focus"===t&&(e=!1!==o.onFocus(l)&&e),"keydown"===t&&(e=!1!==o.onKeydown(l)&&e),e},null,null)),i._11(278528,null,0,c.g,[i.v,i.w,i.m,i.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(n,t){n(t,1,0,"text-input","text-input-"+t.component._mode)},function(n,t){var l=t.component;n(t,0,0,l._type,l._labelId,l.min,l.max,l.step,l.autocomplete,l.autocorrect,l.placeholder,l._disabled,l._readonly)})}function o(n){return i._35(0,[(n()(),i._12(0,[[1,0],["textInput",1]],null,1,"textarea",[["class","text-input"]],[[1,"aria-labelledby",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(n,t,l){var e=!0,o=n.component;return"input"===t&&(e=!1!==o.onInput(l)&&e),"blur"===t&&(e=!1!==o.onBlur(l)&&e),"focus"===t&&(e=!1!==o.onFocus(l)&&e),"keydown"===t&&(e=!1!==o.onKeydown(l)&&e),e},null,null)),i._11(278528,null,0,c.g,[i.v,i.w,i.m,i.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(n,t){n(t,1,0,"text-input","text-input-"+t.component._mode)},function(n,t){var l=t.component;n(t,0,0,l._labelId,l.autocomplete,l.autocorrect,l.placeholder,l._disabled,l._readonly)})}function u(n){return i._35(0,[(n()(),i._12(0,null,null,1,"button",[["class","text-input-clear-icon"],["clear",""],["ion-button",""],["tabindex","-1"],["type","button"]],null,[[null,"click"],[null,"mousedown"]],function(n,t,l){var e=!0,o=n.component;return"click"===t&&(e=!1!==o.clearTextInput(l)&&e),"mousedown"===t&&(e=!1!==o.clearTextInput(l)&&e),e},s.b,s.a)),i._11(1097728,null,0,_.a,[[8,""],d.a,i.m,i.J],{clear:[0,"clear"]},null)],function(n,t){n(t,1,0,"")},null)}function r(n){return i._35(0,[(n()(),i._12(0,null,null,0,"div",[["class","input-cover"]],null,[[null,"touchstart"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"]],function(n,t,l){var e=!0,o=n.component;return"touchstart"===t&&(e=!1!==o._pointerStart(l)&&e),"touchend"===t&&(e=!1!==o._pointerEnd(l)&&e),"mousedown"===t&&(e=!1!==o._pointerStart(l)&&e),"mouseup"===t&&(e=!1!==o._pointerEnd(l)&&e),e},null,null))],null,null)}function a(n){return i._35(2,[i._31(671088640,1,{_native:0}),(n()(),i._8(16777216,null,null,1,null,e)),i._11(16384,null,0,c.i,[i.W,i.R],{ngIf:[0,"ngIf"]},null),(n()(),i._8(16777216,null,null,1,null,o)),i._11(16384,null,0,c.i,[i.W,i.R],{ngIf:[0,"ngIf"]},null),(n()(),i._8(16777216,null,null,1,null,u)),i._11(16384,null,0,c.i,[i.W,i.R],{ngIf:[0,"ngIf"]},null),(n()(),i._8(16777216,null,null,1,null,r)),i._11(16384,null,0,c.i,[i.W,i.R],{ngIf:[0,"ngIf"]},null)],function(n,t){var l=t.component;n(t,2,0,!l._isTextarea),n(t,4,0,l._isTextarea),n(t,6,0,l._clearInput),n(t,8,0,l._useAssist)},null)}l.d(t,"a",function(){return w}),t.b=a;var i=l(0),c=l(14),s=l(57),_=l(16),d=l(1),p=l(91),f=l(3),h=l(22),b=l(7),g=l(20),m=l(42),y=l(21),v=l(8),O=[],w=i._10({encapsulation:2,styles:O,data:{}});i._9("ion-input,ion-textarea",p.a,function(n){return i._35(0,[(n()(),i._12(0,null,null,1,"ion-input",[],null,null,null,a,w)),i._11(5423104,null,0,p.a,[d.a,f.a,h.a,b.a,i.m,i.J,[2,g.a],[2,m.a],[2,y.f],v.a],null,null)],null,null)},{value:"value",color:"color",mode:"mode",disabled:"disabled",clearInput:"clearInput",type:"type",readonly:"readonly",clearOnEdit:"clearOnEdit",autocomplete:"autocomplete",autocorrect:"autocorrect",placeholder:"placeholder",min:"min",max:"max",step:"step"},{ionFocus:"ionFocus",ionChange:"ionChange",ionBlur:"ionBlur",input:"input",blur:"blur",focus:"focus"},[])},241:function(n,t,l){"use strict";l.d(t,"a",function(){return i});var e=l(0),o=l(60),u=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var l in t)t.hasOwnProperty(l)&&(n[l]=t[l])};return function(t,l){function e(){this.constructor=t}n(t,l),t.prototype=null===l?Object.create(l):(e.prototype=l.prototype,new e)}}(),r=this&&this.__decorate||function(n,t,l,e){var o,u=arguments.length,r=u<3?t:null===e?e=Object.getOwnPropertyDescriptor(t,l):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(n,t,l,e);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(u<3?o(r):u>3?o(t,l,r):o(t,l))||r);return u>3&&r&&Object.defineProperty(t,l,r),r},a=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},i=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.DestinationType={DATA_URL:0,FILE_URI:1,NATIVE_URI:2},t.EncodingType={JPEG:0,PNG:1},t.MediaType={PICTURE:0,VIDEO:1,ALLMEDIA:2},t.PictureSourceType={PHOTOLIBRARY:0,CAMERA:1,SAVEDPHOTOALBUM:2},t.PopoverArrowDirection={ARROW_UP:1,ARROW_DOWN:2,ARROW_LEFT:4,ARROW_RIGHT:8,ARROW_ANY:15},t.Direction={BACK:0,FRONT:1},t}return u(t,n),t.prototype.getPicture=function(n){},t.prototype.cleanup=function(){},t}(o.f);i.decorators=[{type:e.r}],i.ctorParameters=function(){return[]},r([Object(o.a)({callbackOrder:"reverse"}),a("design:type",Function),a("design:paramtypes",[Object]),a("design:returntype",Promise)],i.prototype,"getPicture",null),r([Object(o.a)({platforms:["iOS"]}),a("design:type",Function),a("design:paramtypes",[]),a("design:returntype",Promise)],i.prototype,"cleanup",null),i=r([Object(o.g)({pluginName:"Camera",plugin:"cordova-plugin-camera",pluginRef:"navigator.camera",repo:"https://github.com/apache/cordova-plugin-camera",platforms:["Android","BlackBerry 10","Browser","Firefox OS","iOS","Ubuntu","Windows","Windows Phone 8"]})],i)}});