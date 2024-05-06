!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self)["config-form"]=r()}(this,(function(){"use strict";var t=Object.defineProperty,r=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(r,e,n)=>e in r?t(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,a=(t,o)=>{var a={};for(var c in t)e.call(t,c)&&o.indexOf(c)<0&&(a[c]=t[c]);if(null!=t&&r)for(var c of r(t))o.indexOf(c)<0&&n.call(t,c)&&(a[c]=t[c]);return a};const c={};var i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e(t.componentMaps.form||"el-form",t._b({ref:"form",tag:"component",staticClass:"config-form",attrs:{model:t.model,rules:t.rules}},"component",Object.assign({},t.defaultProps.form,t.$attrs),!1),[t._t("default",(function(){return[t._l(t.formItems,(function(r){var n;return[("function"==typeof r.hidden?r.hidden(t.model):r.hidden)?t._e():e(t.componentMaps.formItem||"el-form-item",t._b({key:r.prop,tag:"component",attrs:{prop:r.prop,label:r.label}},"component",Object.assign({},t.defaultProps.formItem,r.formItemProps),!1),[t.$slots["".concat(r.prop,"-label")]?e("template",{slot:"label"},[t._t("".concat(r.prop,"-label"),(function(){return[t._v(t._s(r.label))]}))],2):t._e(),t.$slots["".concat(r.prop)]?[t._t("".concat(r.prop))]:e("string"==typeof r.component?t.componentMaps[r.component]:r.component,t._g(t._b({tag:"component",attrs:{disabled:"function"==typeof r.disabled?r.disabled(t.model):!!r.disabled||(null===(n=r.componentProps)||void 0===n?void 0:n.disabled)},model:{value:t.model[r.prop],callback:function(e){t.$set(t.model,r.prop,e)},expression:"model[formItem.prop]"}},"component",Object.assign({},"string"==typeof r.component?t.defaultProps[r.component]:{},r.componentProps),!1),r.componentEvents))],2)]}))]}))],2)},u=[];function f(t,r,e,n,o,a,c,i){var u,f="function"==typeof t?t.options:t;if(r&&(f.render=r,f.staticRenderFns=e,f._compiled=!0),o&&(u=o),u)if(f.functional){f._injectStyles=u;var s=f.render;f.render=function(t,r){return u.call(r),s(t,r)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:f}}const s={};var l=f({name:"ConfigForm",provide(){return{getConfig:this.getConfig,getModel:this.getModel}},props:{model:{type:Object,default:()=>({})},fields:{type:Object,default:()=>({})}},data(){return{configFormOptions:(t="options",c[t])};var t},computed:{componentMaps(){return this.configFormOptions.componentMaps||{}},defaultProps(){return this.configFormOptions.defaultProps||{}},formItems(){return Object.keys(this.fields).map((t=>{let c=this.fields[t],{rules:i}=c;return((t,a)=>{for(var c in a||(a={}))e.call(a,c)&&o(t,c,a[c]);if(r)for(var c of r(a))n.call(a,c)&&o(t,c,a[c]);return t})({prop:t},a(c,["rules"]))}))},rules(){return Object.keys(this.fields).reduce(((t,r)=>{let e=this.fields[r],{rules:n}=e;a(e,["rules"]);return n&&(t[r]=[...n]),t}),{})}},methods:{getConfig(){return{componentMaps:this.componentMaps,defaultProps:this.defaultProps,formItems:this.formItems,rules:this.rules}},getModel(){return this.model},validate(){return this.$refs.form.validate()}}},i,u,0,p);function p(t){for(let r in s)this[r]=s[r]}const v=function(){return l.exports}();var b=function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.formItem?e(t.componentMaps.formItem,{tag:"component",attrs:{prop:t.prop,label:t.formItem.label}},[e("template",{slot:"label"},[t._t("label",(function(){return[t._v(t._s(t.formItem.label))]}))],2),t._t("default",(function(){return[e("string"==typeof t.formItem.component?t.componentMaps[t.formItem.component]:t.formItem.component,t._g(t._b({tag:"component",attrs:{disabled:"function"==typeof t.formItem.disabled?t.formItem.disabled(t.model):!!t.formItem.disabled},model:{value:t.model[t.formItem.prop],callback:function(r){t.$set(t.model,t.formItem.prop,r)},expression:"model[formItem.prop]"}},"component",Object.assign({},"string"==typeof t.formItem.component?t.defaultProps[t.formItem.component]:{},t.formItem.componentProps),!1),t.formItem.componentEvents))]}))],2):t._e()},d=[];const y={};var h=f({name:"ConfigFormItem",props:["prop"],inject:["getModel","getConfig"],data:()=>({componentMaps:{},defaultProps:{},formItems:[],model:{}}),computed:{formItem(){return this.formItems.find((t=>t.prop===this.prop))}},mounted(){let{componentMaps:t,defaultProps:r,formItems:e}=this.getConfig();this.componentMaps=t,this.defaultProps=r,this.formItems=e,this.model=this.getModel()}},b,d,0,m);function m(t){for(let r in y)this[r]=y[r]}const j=function(){return h.exports}();var _="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var O=function(){this.__data__=[],this.size=0};var w=function(t,r){return t===r||t!=t&&r!=r},A=w;var I=function(t,r){for(var e=t.length;e--;)if(A(t[e][0],r))return e;return-1},P=I,x=Array.prototype.splice;var M=I;var S=I;var F=I;var z=O,E=function(t){var r=this.__data__,e=P(r,t);return!(e<0)&&(e==r.length-1?r.pop():x.call(r,e,1),--this.size,!0)},C=function(t){var r=this.__data__,e=M(r,t);return e<0?void 0:r[e][1]},$=function(t){return S(this.__data__,t)>-1},T=function(t,r){var e=this.__data__,n=F(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function U(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}U.prototype.clear=z,U.prototype.delete=E,U.prototype.get=C,U.prototype.has=$,U.prototype.set=T;var k=U,B=k;var D=function(){this.__data__=new B,this.size=0};var R=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e};var V=function(t){return this.__data__.get(t)};var N=function(t){return this.__data__.has(t)},W="object"==typeof _&&_&&_.Object===Object&&_,L=W,q="object"==typeof self&&self&&self.Object===Object&&self,G=L||q||Function("return this")(),H=G.Symbol,J=H,K=Object.prototype,Q=K.hasOwnProperty,X=K.toString,Y=J?J.toStringTag:void 0;var Z=function(t){var r=Q.call(t,Y),e=t[Y];try{t[Y]=void 0;var n=!0}catch(a){}var o=X.call(t);return n&&(r?t[Y]=e:delete t[Y]),o},tt=Object.prototype.toString;var rt=Z,et=function(t){return tt.call(t)},nt=H?H.toStringTag:void 0;var ot=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":nt&&nt in Object(t)?rt(t):et(t)};var at=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},ct=ot,it=at;var ut,ft=function(t){if(!it(t))return!1;var r=ct(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},st=G["__core-js_shared__"],lt=(ut=/[^.]+$/.exec(st&&st.keys&&st.keys.IE_PROTO||""))?"Symbol(src)_1."+ut:"";var pt=function(t){return!!lt&&lt in t},vt=Function.prototype.toString;var bt=function(t){if(null!=t){try{return vt.call(t)}catch(r){}try{return t+""}catch(r){}}return""},dt=ft,yt=pt,ht=at,mt=bt,jt=/^\[object .+?Constructor\]$/,_t=Function.prototype,gt=Object.prototype,Ot=_t.toString,wt=gt.hasOwnProperty,At=RegExp("^"+Ot.call(wt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var It=function(t){return!(!ht(t)||yt(t))&&(dt(t)?At:jt).test(mt(t))},Pt=function(t,r){return null==t?void 0:t[r]};var xt=function(t,r){var e=Pt(t,r);return It(e)?e:void 0},Mt=xt(G,"Map"),St=xt(Object,"create"),Ft=St;var zt=function(){this.__data__=Ft?Ft(null):{},this.size=0};var Et=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},Ct=St,$t=Object.prototype.hasOwnProperty;var Tt=function(t){var r=this.__data__;if(Ct){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return $t.call(r,t)?r[t]:void 0},Ut=St,kt=Object.prototype.hasOwnProperty;var Bt=St;var Dt=zt,Rt=Et,Vt=Tt,Nt=function(t){var r=this.__data__;return Ut?void 0!==r[t]:kt.call(r,t)},Wt=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=Bt&&void 0===r?"__lodash_hash_undefined__":r,this};function Lt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Lt.prototype.clear=Dt,Lt.prototype.delete=Rt,Lt.prototype.get=Vt,Lt.prototype.has=Nt,Lt.prototype.set=Wt;var qt=Lt,Gt=k,Ht=Mt;var Jt=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var Kt=function(t,r){var e=t.__data__;return Jt(r)?e["string"==typeof r?"string":"hash"]:e.map},Qt=Kt;var Xt=Kt;var Yt=Kt;var Zt=Kt;var tr=function(){this.size=0,this.__data__={hash:new qt,map:new(Ht||Gt),string:new qt}},rr=function(t){var r=Qt(this,t).delete(t);return this.size-=r?1:0,r},er=function(t){return Xt(this,t).get(t)},nr=function(t){return Yt(this,t).has(t)},or=function(t,r){var e=Zt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function ar(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}ar.prototype.clear=tr,ar.prototype.delete=rr,ar.prototype.get=er,ar.prototype.has=nr,ar.prototype.set=or;var cr=ar,ir=k,ur=Mt,fr=cr;var sr=k,lr=D,pr=R,vr=V,br=N,dr=function(t,r){var e=this.__data__;if(e instanceof ir){var n=e.__data__;if(!ur||n.length<199)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new fr(n)}return e.set(t,r),this.size=e.size,this};function yr(t){var r=this.__data__=new sr(t);this.size=r.size}yr.prototype.clear=lr,yr.prototype.delete=pr,yr.prototype.get=vr,yr.prototype.has=br,yr.prototype.set=dr;var hr=yr;var mr=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n&&!1!==r(t[e],e,t););return t},jr=xt,_r=function(){try{var t=jr(Object,"defineProperty");return t({},"",{}),t}catch(r){}}(),gr=_r;var Or=function(t,r,e){"__proto__"==r&&gr?gr(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e},wr=Or,Ar=w,Ir=Object.prototype.hasOwnProperty;var Pr=function(t,r,e){var n=t[r];Ir.call(t,r)&&Ar(n,e)&&(void 0!==e||r in t)||wr(t,r,e)},xr=Pr,Mr=Or;var Sr=function(t,r,e,n){var o=!e;e||(e={});for(var a=-1,c=r.length;++a<c;){var i=r[a],u=n?n(e[i],t[i],i,e,t):void 0;void 0===u&&(u=t[i]),o?Mr(e,i,u):xr(e,i,u)}return e};var Fr=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n};var zr=function(t){return null!=t&&"object"==typeof t},Er=ot,Cr=zr;var $r,Tr,Ur,kr,Br,Dr,Rr,Vr,Nr=function(t){return Cr(t)&&"[object Arguments]"==Er(t)},Wr=zr,Lr=Object.prototype,qr=Lr.hasOwnProperty,Gr=Lr.propertyIsEnumerable,Hr=Nr(function(){return arguments}())?Nr:function(t){return Wr(t)&&qr.call(t,"callee")&&!Gr.call(t,"callee")},Jr=Hr,Kr=Array.isArray,Qr={exports:{}};$r=Qr,Ur=G,kr=function(){return!1},Br=(Tr=Qr.exports)&&!Tr.nodeType&&Tr,Dr=Br&&$r&&!$r.nodeType&&$r,Rr=Dr&&Dr.exports===Br?Ur.Buffer:void 0,Vr=(Rr?Rr.isBuffer:void 0)||kr,$r.exports=Vr;var Xr=Qr.exports,Yr=/^(?:0|[1-9]\d*)$/;var Zr=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&Yr.test(t))&&t>-1&&t%1==0&&t<r};var te=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},re=ot,ee=te,ne=zr,oe={};oe["[object Float32Array]"]=oe["[object Float64Array]"]=oe["[object Int8Array]"]=oe["[object Int16Array]"]=oe["[object Int32Array]"]=oe["[object Uint8Array]"]=oe["[object Uint8ClampedArray]"]=oe["[object Uint16Array]"]=oe["[object Uint32Array]"]=!0,oe["[object Arguments]"]=oe["[object Array]"]=oe["[object ArrayBuffer]"]=oe["[object Boolean]"]=oe["[object DataView]"]=oe["[object Date]"]=oe["[object Error]"]=oe["[object Function]"]=oe["[object Map]"]=oe["[object Number]"]=oe["[object Object]"]=oe["[object RegExp]"]=oe["[object Set]"]=oe["[object String]"]=oe["[object WeakMap]"]=!1;var ae=function(t){return ne(t)&&ee(t.length)&&!!oe[re(t)]};var ce=function(t){return function(r){return t(r)}},ie={exports:{}};!function(t,r){var e=W,n=r&&!r.nodeType&&r,o=n&&t&&!t.nodeType&&t,a=o&&o.exports===n&&e.process,c=function(){try{var t=o&&o.require&&o.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(r){}}();t.exports=c}(ie,ie.exports);var ue=ie.exports,fe=ae,se=ce,le=ue&&ue.isTypedArray,pe=le?se(le):fe,ve=Fr,be=Jr,de=Kr,ye=Xr,he=Zr,me=pe,je=Object.prototype.hasOwnProperty;var _e=function(t,r){var e=de(t),n=!e&&be(t),o=!e&&!n&&ye(t),a=!e&&!n&&!o&&me(t),c=e||n||o||a,i=c?ve(t.length,String):[],u=i.length;for(var f in t)!r&&!je.call(t,f)||c&&("length"==f||o&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||he(f,u))||i.push(f);return i},ge=Object.prototype;var Oe=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||ge)};var we=function(t,r){return function(e){return t(r(e))}},Ae=we(Object.keys,Object),Ie=Oe,Pe=Ae,xe=Object.prototype.hasOwnProperty;var Me=ft,Se=te;var Fe=function(t){return null!=t&&Se(t.length)&&!Me(t)},ze=_e,Ee=function(t){if(!Ie(t))return Pe(t);var r=[];for(var e in Object(t))xe.call(t,e)&&"constructor"!=e&&r.push(e);return r},Ce=Fe;var $e=function(t){return Ce(t)?ze(t):Ee(t)},Te=Sr,Ue=$e;var ke=function(t,r){return t&&Te(r,Ue(r),t)};var Be=at,De=Oe,Re=function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r},Ve=Object.prototype.hasOwnProperty;var Ne=_e,We=function(t){if(!Be(t))return Re(t);var r=De(t),e=[];for(var n in t)("constructor"!=n||!r&&Ve.call(t,n))&&e.push(n);return e},Le=Fe;var qe=function(t){return Le(t)?Ne(t,!0):We(t)},Ge=Sr,He=qe;var Je=function(t,r){return t&&Ge(r,He(r),t)},Ke={exports:{}};!function(t,r){var e=G,n=r&&!r.nodeType&&r,o=n&&t&&!t.nodeType&&t,a=o&&o.exports===n?e.Buffer:void 0,c=a?a.allocUnsafe:void 0;t.exports=function(t,r){if(r)return t.slice();var e=t.length,n=c?c(e):new t.constructor(e);return t.copy(n),n}}(Ke,Ke.exports);var Qe=Ke.exports;var Xe=function(t,r){var e=-1,n=t.length;for(r||(r=Array(n));++e<n;)r[e]=t[e];return r};var Ye=function(){return[]},Ze=function(t,r){for(var e=-1,n=null==t?0:t.length,o=0,a=[];++e<n;){var c=t[e];r(c,e,t)&&(a[o++]=c)}return a},tn=Ye,rn=Object.prototype.propertyIsEnumerable,en=Object.getOwnPropertySymbols,nn=en?function(t){return null==t?[]:(t=Object(t),Ze(en(t),(function(r){return rn.call(t,r)})))}:tn,on=Sr,an=nn;var cn=function(t,r){return on(t,an(t),r)};var un=function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t},fn=we(Object.getPrototypeOf,Object),sn=un,ln=fn,pn=nn,vn=Ye,bn=Object.getOwnPropertySymbols?function(t){for(var r=[];t;)sn(r,pn(t)),t=ln(t);return r}:vn,dn=Sr,yn=bn;var hn=function(t,r){return dn(t,yn(t),r)},mn=un,jn=Kr;var _n=function(t,r,e){var n=r(t);return jn(t)?n:mn(n,e(t))},gn=_n,On=nn,wn=$e;var An=function(t){return gn(t,wn,On)},In=_n,Pn=bn,xn=qe;var Mn=function(t){return In(t,xn,Pn)},Sn=xt(G,"DataView"),Fn=Mt,zn=xt(G,"Promise"),En=xt(G,"Set"),Cn=xt(G,"WeakMap"),$n=ot,Tn=bt,Un="[object Map]",kn="[object Promise]",Bn="[object Set]",Dn="[object WeakMap]",Rn="[object DataView]",Vn=Tn(Sn),Nn=Tn(Fn),Wn=Tn(zn),Ln=Tn(En),qn=Tn(Cn),Gn=$n;(Sn&&Gn(new Sn(new ArrayBuffer(1)))!=Rn||Fn&&Gn(new Fn)!=Un||zn&&Gn(zn.resolve())!=kn||En&&Gn(new En)!=Bn||Cn&&Gn(new Cn)!=Dn)&&(Gn=function(t){var r=$n(t),e="[object Object]"==r?t.constructor:void 0,n=e?Tn(e):"";if(n)switch(n){case Vn:return Rn;case Nn:return Un;case Wn:return kn;case Ln:return Bn;case qn:return Dn}return r});var Hn=Gn,Jn=Object.prototype.hasOwnProperty;var Kn=function(t){var r=t.length,e=new t.constructor(r);return r&&"string"==typeof t[0]&&Jn.call(t,"index")&&(e.index=t.index,e.input=t.input),e},Qn=G.Uint8Array;var Xn=function(t){var r=new t.constructor(t.byteLength);return new Qn(r).set(new Qn(t)),r},Yn=Xn;var Zn=function(t,r){var e=r?Yn(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)},to=/\w*$/;var ro=function(t){var r=new t.constructor(t.source,to.exec(t));return r.lastIndex=t.lastIndex,r},eo=H?H.prototype:void 0,no=eo?eo.valueOf:void 0;var oo=Xn;var ao=Xn,co=Zn,io=ro,uo=function(t){return no?Object(no.call(t)):{}},fo=function(t,r){var e=r?oo(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)};var so=function(t,r,e){var n=t.constructor;switch(r){case"[object ArrayBuffer]":return ao(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return co(t,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return fo(t,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return io(t);case"[object Symbol]":return uo(t)}},lo=at,po=Object.create,vo=function(){function t(){}return function(r){if(!lo(r))return{};if(po)return po(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}(),bo=fn,yo=Oe;var ho=function(t){return"function"!=typeof t.constructor||yo(t)?{}:vo(bo(t))},mo=Hn,jo=zr;var _o=function(t){return jo(t)&&"[object Map]"==mo(t)},go=ce,Oo=ue&&ue.isMap,wo=Oo?go(Oo):_o,Ao=Hn,Io=zr;var Po=function(t){return Io(t)&&"[object Set]"==Ao(t)},xo=ce,Mo=ue&&ue.isSet,So=Mo?xo(Mo):Po,Fo=hr,zo=mr,Eo=Pr,Co=ke,$o=Je,To=Qe,Uo=Xe,ko=cn,Bo=hn,Do=An,Ro=Mn,Vo=Hn,No=Kn,Wo=so,Lo=ho,qo=Kr,Go=Xr,Ho=wo,Jo=at,Ko=So,Qo=$e,Xo=qe,Yo="[object Arguments]",Zo="[object Function]",ta="[object Object]",ra={};ra[Yo]=ra["[object Array]"]=ra["[object ArrayBuffer]"]=ra["[object DataView]"]=ra["[object Boolean]"]=ra["[object Date]"]=ra["[object Float32Array]"]=ra["[object Float64Array]"]=ra["[object Int8Array]"]=ra["[object Int16Array]"]=ra["[object Int32Array]"]=ra["[object Map]"]=ra["[object Number]"]=ra[ta]=ra["[object RegExp]"]=ra["[object Set]"]=ra["[object String]"]=ra["[object Symbol]"]=ra["[object Uint8Array]"]=ra["[object Uint8ClampedArray]"]=ra["[object Uint16Array]"]=ra["[object Uint32Array]"]=!0,ra["[object Error]"]=ra[Zo]=ra["[object WeakMap]"]=!1;var ea=function t(r,e,n,o,a,c){var i,u=1&e,f=2&e,s=4&e;if(n&&(i=a?n(r,o,a,c):n(r)),void 0!==i)return i;if(!Jo(r))return r;var l=qo(r);if(l){if(i=No(r),!u)return Uo(r,i)}else{var p=Vo(r),v=p==Zo||"[object GeneratorFunction]"==p;if(Go(r))return To(r,u);if(p==ta||p==Yo||v&&!a){if(i=f||v?{}:Lo(r),!u)return f?Bo(r,$o(i,r)):ko(r,Co(i,r))}else{if(!ra[p])return a?r:{};i=Wo(r,p,u)}}c||(c=new Fo);var b=c.get(r);if(b)return b;c.set(r,i),Ko(r)?r.forEach((function(o){i.add(t(o,e,n,o,r,c))})):Ho(r)&&r.forEach((function(o,a){i.set(a,t(o,e,n,a,r,c))}));var d=l?void 0:(s?f?Ro:Do:f?Xo:Qo)(r);return zo(d||r,(function(o,a){d&&(o=r[a=o]),Eo(i,a,t(o,e,n,a,r,c))})),i},na=ea;const oa=g((function(t){return na(t,5)}));var aa=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},ca=ot,ia=zr;var ua=function(t){return"symbol"==typeof t||ia(t)&&"[object Symbol]"==ca(t)},fa=Kr,sa=ua,la=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pa=/^\w*$/;var va=function(t,r){if(fa(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!sa(t))||(pa.test(t)||!la.test(t)||null!=r&&t in Object(r))},ba=cr;function da(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],a=e.cache;if(a.has(o))return a.get(o);var c=t.apply(this,n);return e.cache=a.set(o,c)||a,c};return e.cache=new(da.Cache||ba),e}da.Cache=ba;var ya=da;var ha=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ma=/\\(\\)?/g,ja=function(t){var r=ya(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(ha,(function(t,e,n,o){r.push(n?o.replace(ma,"$1"):e||t)})),r})),_a=aa,ga=Kr,Oa=ua,wa=H?H.prototype:void 0,Aa=wa?wa.toString:void 0;var Ia=function t(r){if("string"==typeof r)return r;if(ga(r))return _a(r,t)+"";if(Oa(r))return Aa?Aa.call(r):"";var e=r+"";return"0"==e&&1/r==-1/0?"-0":e},Pa=Ia;var xa=Kr,Ma=va,Sa=ja,Fa=function(t){return null==t?"":Pa(t)};var za=function(t,r){return xa(t)?t:Ma(t,r)?[t]:Sa(Fa(t))};var Ea=ua;var Ca=function(t){if("string"==typeof t||Ea(t))return t;var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},$a=za,Ta=Ca;var Ua=function(t,r){for(var e=0,n=(r=$a(r,t)).length;null!=t&&e<n;)t=t[Ta(r[e++])];return e&&e==n?t:void 0},ka=function(t,r,e){var n=-1,o=t.length;r<0&&(r=-r>o?0:o+r),(e=e>o?o:e)<0&&(e+=o),o=r>e?0:e-r>>>0,r>>>=0;for(var a=Array(o);++n<o;)a[n]=t[n+r];return a};var Ba=za,Da=function(t){var r=null==t?0:t.length;return r?t[r-1]:void 0},Ra=function(t,r){return r.length<2?t:Ua(t,ka(r,0,-1))},Va=Ca;var Na=function(t,r){return r=Ba(r,t),null==(t=Ra(t,r))||delete t[Va(Da(r))]},Wa=ot,La=fn,qa=zr,Ga=Function.prototype,Ha=Object.prototype,Ja=Ga.toString,Ka=Ha.hasOwnProperty,Qa=Ja.call(Object);var Xa=function(t){if(!qa(t)||"[object Object]"!=Wa(t))return!1;var r=La(t);if(null===r)return!0;var e=Ka.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&Ja.call(e)==Qa};var Ya=function(t){return Xa(t)?void 0:t},Za=Jr,tc=Kr,rc=H?H.isConcatSpreadable:void 0;var ec=un,nc=function(t){return tc(t)||Za(t)||!!(rc&&t&&t[rc])};var oc=function t(r,e,n,o,a){var c=-1,i=r.length;for(n||(n=nc),a||(a=[]);++c<i;){var u=r[c];e>0&&n(u)?e>1?t(u,e-1,n,o,a):ec(a,u):o||(a[a.length]=u)}return a},ac=oc;var cc=function(t){return(null==t?0:t.length)?ac(t,1):[]};var ic=function(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)},uc=Math.max;var fc=function(t,r,e){return r=uc(void 0===r?t.length-1:r,0),function(){for(var n=arguments,o=-1,a=uc(n.length-r,0),c=Array(a);++o<a;)c[o]=n[r+o];o=-1;for(var i=Array(r+1);++o<r;)i[o]=n[o];return i[r]=e(c),ic(t,this,i)}};var sc=function(t){return function(){return t}},lc=_r,pc=lc?function(t,r){return lc(t,"toString",{configurable:!0,enumerable:!1,value:sc(r),writable:!0})}:function(t){return t},vc=Date.now;var bc=function(t){var r=0,e=0;return function(){var n=vc(),o=16-(n-e);if(e=n,o>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}},dc=bc(pc),yc=cc,hc=fc,mc=dc;var jc=aa,_c=ea,gc=Na,Oc=za,wc=Sr,Ac=Ya,Ic=Mn;const Pc=g(function(t){return mc(hc(t,void 0,yc),t+"")}((function(t,r){var e={};if(null==t)return e;var n=!1;r=jc(r,(function(r){return r=Oc(r,t),n||(n=r.length>1),r})),wc(t,Ic(t),e),n&&(e=_c(e,7,Ac));for(var o=r.length;o--;)gc(e,r[o]);return e})));function xc(t){return"object"==typeof t&&null!==t}function Mc(t,r){Object.keys(r).forEach((e=>{t.hasOwnProperty(e)&&xc(r[e])&&xc(t[e])?Mc(t[e],r[e]):t[e]=oa(r[e])}))}return v.install=function(t,r){if(!r)throw new Error("ConfigForm必须配置options");let e=r.presets||[],n={};var o;e.forEach((t=>{Mc(n,t)})),Mc(n,Pc(r,["presets"])),o=n,c["options"]=o,t.component(v.name,v),t.component(j.name,j)},v}));
