"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[497],{27156:function(e,t,r){r.d(t,{Uy:function(){return $}});var n,i=Symbol.for("immer-nothing"),o=Symbol.for("immer-draftable"),a=Symbol.for("immer-state");function c(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var s=Object.getPrototypeOf;function u(e){return!!e&&!!e[a]}function l(e){return!!e&&(_(e)||Array.isArray(e)||!!e[o]||!!e.constructor?.[o]||b(e)||m(e))}var f=Object.prototype.constructor.toString();function _(e){if(!e||"object"!=typeof e)return!1;let t=s(e);if(null===t)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===f}function p(e,t){0===y(e)?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function y(e){let t=e[a];return t?t.type_:Array.isArray(e)?1:b(e)?2:m(e)?3:0}function d(e,t){return 2===y(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function h(e,t,r){let n=y(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function b(e){return e instanceof Map}function m(e){return e instanceof Set}function v(e){return e.copy_||e.base_}function P(e,t){if(b(e))return new Map(e);if(m(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=_(e);if(!0!==t&&("class_only"!==t||r)){let t=s(e);return null!==t&&r?{...e}:Object.assign(Object.create(t),e)}{let t=Object.getOwnPropertyDescriptors(e);delete t[a];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){let i=r[n],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(s(e),t)}}function S(e,t=!1){return w(e)||u(e)||!l(e)||(y(e)>1&&(e.set=e.add=e.clear=e.delete=g),Object.freeze(e),t&&Object.entries(e).forEach(([e,t])=>S(t,!0))),e}function g(){c(2)}function w(e){return Object.isFrozen(e)}var z={};function O(e){let t=z[e];return t||c(0,e),t}function j(e,t){t&&(O("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function F(e){A(e),e.drafts_.forEach(C),e.drafts_=null}function A(e){e===n&&(n=e.parent_)}function D(e){return n={drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function C(e){let t=e[a];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function k(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return void 0!==e&&e!==r?(r[a].modified_&&(F(t),c(4)),l(e)&&(e=E(t,e),t.parent_||N(t,e)),t.patches_&&O("Patches").generateReplacementPatches_(r[a].base_,e,t.patches_,t.inversePatches_)):e=E(t,r,[]),F(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==i?e:void 0}function E(e,t,r){if(w(t))return t;let n=t[a];if(!n)return p(t,(i,o)=>M(e,n,t,i,o,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return N(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let t=n.copy_,i=t,o=!1;3===n.type_&&(i=new Set(t),t.clear(),o=!0),p(i,(i,a)=>M(e,n,t,i,a,r,o)),N(e,t,!1),r&&e.patches_&&O("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function M(e,t,r,n,i,o,a){if(u(i)){let a=E(e,i,o&&t&&3!==t.type_&&!d(t.assigned_,n)?o.concat(n):void 0);if(h(r,n,a),!u(a))return;e.canAutoFreeze_=!1}else a&&r.add(i);if(l(i)&&!w(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;E(e,i),(!t||!t.scope_.parent_)&&"symbol"!=typeof n&&Object.prototype.propertyIsEnumerable.call(r,n)&&N(e,i)}}function N(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&S(t,r)}var R={get(e,t){if(t===a)return e;let r=v(e);if(!d(r,t))return function(e,t,r){let n=W(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);let n=r[t];return e.finalized_||!l(n)?n:n===U(e.base_,t)?(I(e),e.copy_[t]=L(n,e)):n},has:(e,t)=>t in v(e),ownKeys:e=>Reflect.ownKeys(v(e)),set(e,t,r){let n=W(v(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let n=U(v(e),t),i=n?.[a];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if((r===n?0!==r||1/r==1/n:r!=r&&n!=n)&&(void 0!==r||d(e.base_,t)))return!0;I(e),x(e)}return!!(e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t]))||(e.copy_[t]=r,e.assigned_[t]=!0,!0)},deleteProperty:(e,t)=>(void 0!==U(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,I(e),x(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){let r=v(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){c(11)},getPrototypeOf:e=>s(e.base_),setPrototypeOf(){c(12)}},K={};function U(e,t){let r=e[a];return(r?v(r):e)[t]}function W(e,t){if(!(t in e))return;let r=s(e);for(;r;){let e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=s(r)}}function x(e){!e.modified_&&(e.modified_=!0,e.parent_&&x(e.parent_))}function I(e){e.copy_||(e.copy_=P(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function L(e,t){let r=b(e)?O("MapSet").proxyMap_(e,t):m(e)?O("MapSet").proxySet_(e,t):function(e,t){let r=Array.isArray(e),i={type_:r?1:0,scope_:t?t.scope_:n,modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},o=i,a=R;r&&(o=[i],a=K);let{revoke:c,proxy:s}=Proxy.revocable(o,a);return i.draft_=s,i.revoke_=c,s}(e,t);return(t?t.scope_:n).drafts_.push(r),r}p(R,(e,t)=>{K[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),K.deleteProperty=function(e,t){return K.set.call(this,e,t,void 0)},K.set=function(e,t,r){return R.set.call(this,e[0],t,r,e[0])};var X=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{let n;if("function"==typeof e&&"function"!=typeof t){let r=t;t=e;let n=this;return function(e=r,...i){return n.produce(e,e=>t.call(this,e,...i))}}if("function"!=typeof t&&c(6),void 0!==r&&"function"!=typeof r&&c(7),l(e)){let i=D(this),o=L(e,void 0),a=!0;try{n=t(o),a=!1}finally{a?F(i):A(i)}return j(i,r),k(n,i)}if(e&&"object"==typeof e)c(1,e);else{if(void 0===(n=t(e))&&(n=e),n===i&&(n=void 0),this.autoFreeze_&&S(n,!0),r){let t=[],i=[];O("Patches").generateReplacementPatches_(e,n,t,i),r(t,i)}return n}},this.produceWithPatches=(e,t)=>{let r,n;return"function"==typeof e?(t,...r)=>this.produceWithPatches(t,t=>e(t,...r)):[this.produce(e,t,(e,t)=>{r=e,n=t}),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){var t;l(e)||c(8),u(e)&&(u(t=e)||c(10,t),e=function e(t){let r;if(!l(t)||w(t))return t;let n=t[a];if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=P(t,n.scope_.immer_.useStrictShallowCopy_)}else r=P(t,!0);return p(r,(t,n)=>{h(r,t,e(n))}),n&&(n.finalized_=!1),r}(t));let r=D(this),n=L(e,void 0);return n[a].isManual_=!0,A(r),n}finishDraft(e,t){let r=e&&e[a];r&&r.isManual_||c(9);let{scope_:n}=r;return j(n,t),k(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));let n=O("Patches").applyPatches_;return u(e)?n(e,t):this.produce(e,e=>n(e,t))}},$=X.produce;X.produceWithPatches.bind(X),X.setAutoFreeze.bind(X),X.setUseStrictShallowCopy.bind(X),X.applyPatches.bind(X),X.createDraft.bind(X),X.finishDraft.bind(X)},80497:function(e,t,r){r.d(t,{n:function(){return i}});var n=r(27156);let i=e=>(t,r,i)=>(i.setState=(e,r,...i)=>t("function"==typeof e?(0,n.Uy)(e):e,r,...i),e(i.setState,r,i))}}]);