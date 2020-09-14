!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.antdIconClassifier=e():t.antdIconClassifier=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=64)}([function(t,e,n){"use strict";n.r(e),n.d(e,"shuffle",(function(){return a})),n.d(e,"clamp",(function(){return s})),n.d(e,"nearestLargerEven",(function(){return o})),n.d(e,"sum",(function(){return i})),n.d(e,"randUniform",(function(){return u})),n.d(e,"distSquared",(function(){return c})),n.d(e,"assert",(function(){return p})),n.d(e,"assertShapesMatch",(function(){return l})),n.d(e,"assertNonNull",(function(){return d})),n.d(e,"flatten",(function(){return h})),n.d(e,"sizeFromShape",(function(){return f})),n.d(e,"isScalarShape",(function(){return m})),n.d(e,"arraysEqual",(function(){return b})),n.d(e,"isInt",(function(){return y})),n.d(e,"tanh",(function(){return g})),n.d(e,"sizeToSquarishShape",(function(){return O})),n.d(e,"createShuffledIndices",(function(){return w})),n.d(e,"rightPad",(function(){return x})),n.d(e,"repeatedTry",(function(){return j})),n.d(e,"inferFromImplicitShape",(function(){return v})),n.d(e,"parseAxisParam",(function(){return k})),n.d(e,"squeezeShape",(function(){return N})),n.d(e,"getTypedArrayFromDType",(function(){return S})),n.d(e,"getArrayFromDType",(function(){return E})),n.d(e,"checkConversionForErrors",(function(){return T})),n.d(e,"isValidDtype",(function(){return I})),n.d(e,"hasEncodingLoss",(function(){return _})),n.d(e,"isTypedArray",(function(){return D})),n.d(e,"bytesPerElement",(function(){return A})),n.d(e,"bytesFromStringArray",(function(){return F})),n.d(e,"isString",(function(){return M})),n.d(e,"isBoolean",(function(){return $})),n.d(e,"isNumber",(function(){return C})),n.d(e,"inferDtype",(function(){return R})),n.d(e,"isFunction",(function(){return B})),n.d(e,"nearestDivisor",(function(){return P})),n.d(e,"computeStrides",(function(){return L})),n.d(e,"toTypedArray",(function(){return z})),n.d(e,"toNestedArray",(function(){return V})),n.d(e,"makeOnesTypedArray",(function(){return U})),n.d(e,"makeZerosTypedArray",(function(){return q})),n.d(e,"makeZerosNestedTypedArray",(function(){return K})),n.d(e,"now",(function(){return W})),n.d(e,"assertNonNegativeIntegerDimensions",(function(){return H})),n.d(e,"fetch",(function(){return G})),n.d(e,"encodeString",(function(){return Y})),n.d(e,"decodeString",(function(){return J})),n.d(e,"locToIndex",(function(){return Z})),n.d(e,"indexToLoc",(function(){return X}));var r=n(9);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(t){let e=t.length,n=0,r=0;for(;e>0;)r=Math.random()*e|0,e--,n=t[e],t[e]=t[r],t[r]=n}function s(t,e,n){return Math.max(t,Math.min(e,n))}function o(t){return t%2==0?t:t+1}function i(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n];return e}function u(t,e){const n=Math.random();return e*n+(1-n)*t}function c(t,e){let n=0;for(let r=0;r<t.length;r++){const a=Number(t[r])-Number(e[r]);n+=a*a}return n}function p(t,e){if(!t)throw new Error("string"==typeof e?e:e())}function l(t,e,n=""){p(b(t,e),()=>n+` Shapes ${t} and ${e} must match`)}function d(t){p(null!=t,()=>"The input to the tensor constructor must be a non-null value.")}function h(t,e=[],n=!1){if(null==e&&(e=[]),Array.isArray(t)||D(t)&&!n)for(let r=0;r<t.length;++r)h(t[r],e,n);else e.push(t);return e}function f(t){if(0===t.length)return 1;let e=t[0];for(let n=1;n<t.length;n++)e*=t[n];return e}function m(t){return 0===t.length}function b(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function y(t){return t%1==0}function g(t){if(null!=Math.tanh)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return-1;{const e=Math.exp(2*t);return(e-1)/(e+1)}}function O(t){const e=Math.ceil(Math.sqrt(t));return[e,Math.ceil(t/e)]}function w(t){const e=new Uint32Array(t);for(let n=0;n<t;++n)e[n]=n;return a(e),e}function x(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function j(t,e=(t=>0),n){return new Promise((r,a)=>{let s=0;const o=()=>{if(t())return void r();s++;const i=e(s);null!=n&&s>=n?a():setTimeout(o,i)};o()})}function v(t,e){let n=1,r=-1;for(let e=0;e<t.length;++e)if(t[e]>=0)n*=t[e];else if(-1===t[e]){if(-1!==r)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${e}`);r=e}else if(t[e]<0)throw Error(`Shapes can not be < 0. Found ${t[e]} at dim ${e}`);if(-1===r){if(e>0&&e!==n)throw Error(`Size(${e}) must match the product of shape ${t}`);return t}if(0===n)throw Error(`Cannot infer the missing size in [${t}] when there are 0 elements`);if(e%n!=0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${n}`);const a=t.slice();return a[r]=e/n,a}function k(t,e){const n=e.length;return p((t=null==t?e.map((t,e)=>e):[].concat(t)).every(t=>t>=-n&&t<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis `+t),p(t.every(t=>y(t)),()=>"All values in axis param must be integers but got axis "+t),t.map(t=>t<0?n+t:t)}function N(t,e){const n=[],r=[],a=null!=e&&Array.isArray(e)&&0===e.length,s=null==e||a?null:k(e,t).sort();let o=0;for(let e=0;e<t.length;++e){if(null!=s){if(s[o]===e&&1!==t[e])throw new Error(`Can't squeeze axis ${e} since its dim '${t[e]}' is not 1`);(null==s[o]||s[o]>e)&&1===t[e]&&(n.push(t[e]),r.push(e)),s[o]<=e&&o++}1!==t[e]&&(n.push(t[e]),r.push(e))}return{newShape:n,keptDims:r}}function S(t,e){let n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else{if("bool"!==t)throw new Error("Unknown data type "+t);n=new Uint8Array(e)}return n}function E(t,e){let n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else if("bool"===t)n=new Uint8Array(e);else{if("string"!==t)throw new Error("Unknown data type "+t);n=new Array(e)}return n}function T(t,e){for(let n=0;n<t.length;n++){const r=t[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${e} being uploaded contains ${r}.`)}}function I(t){return"bool"===t||"complex64"===t||"float32"===t||"int32"===t||"string"===t}function _(t,e){return"complex64"!==e&&(("float32"!==e||"complex64"===t)&&(("int32"!==e||"float32"===t||"complex64"===t)&&("bool"!==e||"bool"!==t)))}function D(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array}function A(t){if("float32"===t||"int32"===t)return 4;if("complex64"===t)return 8;if("bool"===t)return 1;throw new Error("Unknown dtype "+t)}function F(t){if(null==t)return 0;let e=0;return t.forEach(t=>e+=t.length),e}function M(t){return"string"==typeof t||t instanceof String}function $(t){return"boolean"==typeof t}function C(t){return"number"==typeof t}function R(t){return Array.isArray(t)?R(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array?"int32":C(t)?"float32":M(t)?"string":$(t)?"bool":"float32"}function B(t){return!!(t&&t.constructor&&t.call&&t.apply)}function P(t,e){for(let n=e;n<t;++n)if(t%n==0)return n;return t}function L(t){const e=t.length;if(e<2)return[];const n=new Array(e-1);n[e-2]=t[e-1];for(let r=e-3;r>=0;--r)n[r]=n[r+1]*t[r+1];return n}function z(t,e){if("string"===e)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=h(t)),Object(r.b)().getBool("DEBUG")&&T(t,e),function(t,e){return t instanceof Float32Array&&"float32"===e||t instanceof Int32Array&&"int32"===e||t instanceof Uint8Array&&"bool"===e}(t,e))return t;if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e){const e=new Uint8Array(t.length);for(let n=0;n<e.length;++n)0!==Math.round(t[n])&&(e[n]=1);return e}throw new Error("Unknown data type "+e)}function V(t,e){if(0===t.length)return e[0];const n=t.reduce((t,e)=>t*e);if(0===n)return[];if(n!==e.length)throw new Error(`[${t}] does not match the input size ${e.length}.`);return function t(e,n,r){const a=new Array;if(1===n.length){const t=n[0];for(let n=0;n<t;n++)a[n]=r[e+n]}else{const s=n[0],o=n.slice(1),i=o.reduce((t,e)=>t*e);for(let n=0;n<s;n++)a[n]=t(e+n*i,o,r)}return a}(0,t,e)}function U(t,e){const n=q(t,e);for(let t=0;t<n.length;t++)n[t]=1;return n}function q(t,e){if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e)return new Uint8Array(t);throw new Error("Unknown data type "+e)}function K(t,e){const n=t.reduce((t,e)=>t*e,1);if(null==e||"float32"===e)return V(t,new Float32Array(n));if("int32"===e)return V(t,new Int32Array(n));if("bool"===e)return V(t,new Uint8Array(n));throw new Error("Unknown data type "+e)}function W(){return Object(r.b)().platform.now()}function H(t){t.forEach(e=>{p(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${t}].`)})}function G(t,e){return Object(r.b)().platform.fetch(t,e)}function Y(t,e="utf-8"){return e=e||"utf-8",Object(r.b)().platform.encode(t,e)}function J(t,e="utf-8"){return e=e||"utf-8",Object(r.b)().platform.decode(t,e)}function Z(t,e,n){if(0===e)return 0;if(1===e)return t[0];let r=t[t.length-1];for(let e=0;e<t.length-1;++e)r+=n[e]*t[e];return r}function X(t,e,n){if(0===e)return[];if(1===e)return[t];const r=new Array(e);for(let e=0;e<r.length-1;++e)r[e]=Math.floor(t/n[e]),t-=r[e]*n[e];return r[r.length-1]=t,r}},function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return p}));var r=n(5),a=n(9),s=n(6),o=n(0);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function i(t,e){let n=t;if(Object(o.isTypedArray)(t))return"string"===e?[]:[t.length];if(!Array.isArray(t))return[];const r=[];for(;Array.isArray(n)||Object(o.isTypedArray)(n)&&"string"!==e;)r.push(n.length),n=n[0];return Array.isArray(t)&&Object(a.b)().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function t(e,n,r){if(r=r||[],!Array.isArray(e)&&!Object(o.isTypedArray)(e))return void Object(o.assert)(0===n.length,()=>`Element arr[${r.join("][")}] is a primitive, but should be an array/TypedArray of ${n[0]} elements`);Object(o.assert)(n.length>0,()=>`Element arr[${r.join("][")}] should be a primitive, but is an array of ${e.length} elements`),Object(o.assert)(e.length===n[0],()=>`Element arr[${r.join("][")}] should have ${n[0]} elements, but has ${e.length} elements`);const a=n.slice(1);for(let n=0;n<e.length;++n)t(e[n],a,r.concat(n))}(t,r,[]),r}function u(t,e,n,r){if(null!=t&&("numeric"!==t&&t!==e||"numeric"===t&&"string"===e))throw new Error(`Argument '${n}' passed to '${r}' must be ${t} tensor, but got ${e} tensor`)}function c(t,e,n,a="numeric"){if(t instanceof s.a)return u(a,t.dtype,e,n),t;let c=Object(o.inferDtype)(t);if("string"!==c&&["bool","int32","float32"].indexOf(a)>=0&&(c=a),u(a,c,e,n),null==t||!Object(o.isTypedArray)(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t){const r=null==t?"null":t.constructor.name;throw new Error(`Argument '${e}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}const p=i(t,c);Object(o.isTypedArray)(t)||Array.isArray(t)||(t=[t]);const l="string"!==c?Object(o.toTypedArray)(t,c):Object(o.flatten)(t,[],!0);return r.a.makeTensor(l,p,c)}function p(t,e,n,r="numeric"){if(!Array.isArray(t))throw new Error(`Argument ${e} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return t.map((t,r)=>c(t,`${e}[${r}]`,n),r)}},function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"g",(function(){return c})),n.d(e,"c",(function(){return p})),n.d(e,"a",(function(){return l}));var r=n(7);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(t,e,n,a){const o=e.inputParams[t];if(o&&void 0!==o.inputIndexStart){const t=o.inputIndexStart,i=0===o.inputIndexEnd?void 0:void 0===o.inputIndexEnd?t+1:o.inputIndexEnd;if("tensor"===o.type)return s(e.inputNames[o.inputIndexStart],n,a);if("tensors"===o.type){return e.inputNames.slice(t,i).map(t=>s(t,n,a))}const u=s(e.inputNames.slice(t)[0],n,a),c=u.dataSync();return"number"===o.type?c[0]:r.Fc.toNestedArray(u.shape,c)}const i=e.attrParams[t];return i&&i.value}function s(t,e,n){const[r,a]=c(t),s=n.currentContextIds.find(t=>!!e[u(r,t)]);return void 0!==s?e[u(r,s)][a]:void 0}function o(t,e,n){return e[u(t,n.currentContextId)]}function i(t,e){const[n,r]=c(t);return[u(n,e&&e.currentContextId),r]}function u(t,e){return e?`${t}-${e}`:t}function c(t){const e=t.split(":");if(1===e.length)return[t,0];return[e[0],Number(e[e.length-1])]}function p(t,e,n){let r=a("pad",t,e,n);if("explicit"===r){r=a("explicitPaddings",t,e,n);const s=[[0,0],[0,0],[0,0],[0,0]];for(let t=0;t<4;t++)s[t][0]=r[2*t],s[t][1]=r[2*t+1];return s}return r}function l(t){return t.kept?t:r.y(t)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return p})),n.d(e,"i",(function(){return l})),n.d(e,"j",(function(){return d})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return f})),n.d(e,"n",(function(){return m})),n.d(e,"m",(function(){return b})),n.d(e,"o",(function(){return y})),n.d(e,"r",(function(){return g})),n.d(e,"p",(function(){return O})),n.d(e,"q",(function(){return w})),n.d(e,"s",(function(){return x})),n.d(e,"t",(function(){return j})),n.d(e,"u",(function(){return v})),n.d(e,"v",(function(){return k})),n.d(e,"w",(function(){return N})),n.d(e,"x",(function(){return S})),n.d(e,"y",(function(){return E})),n.d(e,"z",(function(){return T})),n.d(e,"A",(function(){return I})),n.d(e,"B",(function(){return _})),n.d(e,"C",(function(){return D})),n.d(e,"D",(function(){return A})),n.d(e,"E",(function(){return F})),n.d(e,"F",(function(){return M})),n.d(e,"G",(function(){return $})),n.d(e,"H",(function(){return C})),n.d(e,"J",(function(){return R})),n.d(e,"I",(function(){return B})),n.d(e,"K",(function(){return P})),n.d(e,"L",(function(){return L})),n.d(e,"M",(function(){return z})),n.d(e,"N",(function(){return V})),n.d(e,"O",(function(){return U})),n.d(e,"P",(function(){return q})),n.d(e,"R",(function(){return K})),n.d(e,"Q",(function(){return W})),n.d(e,"S",(function(){return H})),n.d(e,"T",(function(){return G})),n.d(e,"U",(function(){return Y})),n.d(e,"W",(function(){return J})),n.d(e,"V",(function(){return Z})),n.d(e,"X",(function(){return X})),n.d(e,"Y",(function(){return Q})),n.d(e,"Z",(function(){return tt})),n.d(e,"ab",(function(){return et})),n.d(e,"bb",(function(){return nt})),n.d(e,"cb",(function(){return rt})),n.d(e,"db",(function(){return at})),n.d(e,"fb",(function(){return st})),n.d(e,"jb",(function(){return ot})),n.d(e,"ib",(function(){return it})),n.d(e,"kb",(function(){return ut})),n.d(e,"lb",(function(){return ct})),n.d(e,"nb",(function(){return pt})),n.d(e,"mb",(function(){return lt})),n.d(e,"ob",(function(){return dt})),n.d(e,"pb",(function(){return ht})),n.d(e,"qb",(function(){return ft})),n.d(e,"rb",(function(){return mt})),n.d(e,"ub",(function(){return bt})),n.d(e,"vb",(function(){return yt})),n.d(e,"wb",(function(){return gt})),n.d(e,"xb",(function(){return Ot})),n.d(e,"yb",(function(){return wt})),n.d(e,"Ab",(function(){return xt})),n.d(e,"Bb",(function(){return jt})),n.d(e,"Cb",(function(){return vt})),n.d(e,"zb",(function(){return kt})),n.d(e,"sb",(function(){return Nt})),n.d(e,"tb",(function(){return St})),n.d(e,"Db",(function(){return Et})),n.d(e,"Jb",(function(){return Tt})),n.d(e,"Eb",(function(){return It})),n.d(e,"Hb",(function(){return _t})),n.d(e,"Fb",(function(){return Dt})),n.d(e,"Gb",(function(){return At})),n.d(e,"Ib",(function(){return Ft})),n.d(e,"Kb",(function(){return Mt})),n.d(e,"Lb",(function(){return $t})),n.d(e,"Mb",(function(){return Ct})),n.d(e,"Nb",(function(){return Rt})),n.d(e,"Ob",(function(){return Bt})),n.d(e,"Sb",(function(){return Pt})),n.d(e,"Pb",(function(){return Lt})),n.d(e,"Qb",(function(){return zt})),n.d(e,"Rb",(function(){return Vt})),n.d(e,"Ub",(function(){return Ut})),n.d(e,"Tb",(function(){return qt})),n.d(e,"Vb",(function(){return Kt})),n.d(e,"Wb",(function(){return Wt})),n.d(e,"Xb",(function(){return Ht})),n.d(e,"Yb",(function(){return Gt})),n.d(e,"Zb",(function(){return Yt})),n.d(e,"ac",(function(){return Jt})),n.d(e,"bc",(function(){return Zt})),n.d(e,"cc",(function(){return Xt})),n.d(e,"ec",(function(){return Qt})),n.d(e,"hc",(function(){return te})),n.d(e,"ic",(function(){return ee})),n.d(e,"fc",(function(){return ne})),n.d(e,"gc",(function(){return re})),n.d(e,"dc",(function(){return ae})),n.d(e,"jc",(function(){return se})),n.d(e,"lc",(function(){return oe})),n.d(e,"mc",(function(){return ie})),n.d(e,"nc",(function(){return ue})),n.d(e,"oc",(function(){return ce})),n.d(e,"pc",(function(){return pe})),n.d(e,"uc",(function(){return le})),n.d(e,"sc",(function(){return de})),n.d(e,"tc",(function(){return he})),n.d(e,"rc",(function(){return fe})),n.d(e,"qc",(function(){return me})),n.d(e,"wc",(function(){return be})),n.d(e,"Ac",(function(){return ye})),n.d(e,"Gc",(function(){return ge})),n.d(e,"xc",(function(){return Oe})),n.d(e,"zc",(function(){return we})),n.d(e,"vc",(function(){return xe})),n.d(e,"Cc",(function(){return je})),n.d(e,"Bc",(function(){return ve})),n.d(e,"Fc",(function(){return ke})),n.d(e,"yc",(function(){return Ne})),n.d(e,"Ec",(function(){return Se})),n.d(e,"Hc",(function(){return Ee})),n.d(e,"Ic",(function(){return Te})),n.d(e,"Jc",(function(){return Ie})),n.d(e,"Kc",(function(){return _e})),n.d(e,"Lc",(function(){return De})),n.d(e,"Mc",(function(){return Ae})),n.d(e,"Nc",(function(){return Fe})),n.d(e,"Oc",(function(){return Me})),n.d(e,"Dc",(function(){return $e})),n.d(e,"eb",(function(){return Ce})),n.d(e,"kc",(function(){return Re})),n.d(e,"Pc",(function(){return Be})),n.d(e,"gb",(function(){return Pe})),n.d(e,"hb",(function(){return Le}));const r="Abs",a="Acos",s="Acosh",o="Add",i="AddN",u="All",c="Any",p="ArgMax",l="ArgMin",d="Asin",h="Asinh",f="Atan",m="Atanh",b="Atan2",y="AvgPool",g="AvgPoolBackprop",O="AvgPool3D",w="AvgPool3DBackprop",x="BatchMatMul",j="BatchToSpaceND",v="BroadcastTo",k="Cast",N="Ceil",S="ClipByValue",E="Complex",T="Concat",I="Conv2D",_="Conv2DBackpropFilter",D="Conv2DBackpropInput",A="Conv3D",F="Conv3DBackpropFilterV2",M="Conv3DBackpropInputV2",$="Cos",C="Cosh",R="Cumsum",B="CropAndResize",P="DepthToSpace",L="DepthwiseConv2dNative",z="DepthwiseConv2dNativeBackpropFilter",V="DepthwiseConv2dNativeBackpropInput",U="Diag",q="Dilation2D",K="Dilation2DBackpropInput",W="Dilation2DBackpropFilter",H="Div",G="Elu",Y="EluGrad",J="Erf",Z="Equal",X="Exp",Q="Expm1",tt="FFT",et="Fill",nt="FlipLeftRight",rt="Floor",at="FloorDiv",st="FusedBatchNorm",ot="GatherV2",it="GatherNd",ut="Greater",ct="GreaterEqual",pt="Identity",lt="IFFT",dt="Imag",ht="IsFinite",ft="IsInf",mt="IsNan",bt="Less",yt="LessEqual",gt="LinSpace",Ot="Log",wt="Log1p",xt="LogicalAnd",jt="LogicalNot",vt="LogicalOr",kt="LogSoftmax",Nt="LRN",St="LRNBackprop",Et="Max",Tt="Maximum",It="MaxPool",_t="MaxPoolBackprop",Dt="MaxPool3D",At="MaxPool3DBackprop",Ft="MaxPoolWithArgmax",Mt="Min",$t="Minimum",Ct="Mod",Rt="Multiply",Bt="Negate",Pt="NotEqual",Lt="NonMaxSuppressionV3",zt="NonMaxSuppressionV4",Vt="NonMaxSuppressionV5",Ut="OnesLike",qt="OneHot",Kt="PadV2",Wt="Pow",Ht="Prelu",Gt="Prod",Yt="Range",Jt="Real",Zt="Reciprocal",Xt="Relu",Qt="Reshape",te="ResizeNearestNeighbor",ee="ResizeNearestNeighborGrad",ne="ResizeBilinear",re="ResizeBilinearGrad",ae="Relu6",se="Reverse",oe="Round",ie="Rsqrt",ue="ScatterNd",ce="SelectV2",pe="Selu",le="Slice",de="Sin",he="Sinh",fe="Sign",me="Sigmoid",be="Softplus",ye="Sqrt",ge="Sum",Oe="SpaceToBatchND",we="SplitV",xe="Softmax",je="SquaredDifference",ve="Square",ke="Sub",Ne="SparseToDense",Se="StridedSlice",Ee="Tan",Te="Tanh",Ie="Tile",_e="TopK",De="Transpose",Ae="Unpack",Fe="UnsortedSegmentSum",Me="ZerosLike",$e="Step",Ce="FromPixels",Re="RotateWithOffset",Be="_FusedMatMul",Pe="FusedConv2D",Le="FusedDepthwiseConv2D"},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(5);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(t){const e=Object.keys(t);if(1!==e.length)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+e.length+" keys.");let n=e[0];const a=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1));const s=(...t)=>{r.a.startScope(n);try{const e=a(...t);return e instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r.a.endScope(e),e}catch(t){throw r.a.endScope(null),t}};return Object.defineProperty(s,"name",{value:n,configurable:!0}),s}},function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(9),a=n(22),s=n(3),o=n(15),i=n(0);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class u{constructor(t,e){this.backendTimer=t,this.logger=e,null==e&&(this.logger=new c)}profileKernel(t,e,n){let r;const a=this.backendTimer.time(()=>{r=n()});r.map(e=>{e.data().then(n=>{!function(t,e,n){if("float32"!==e)return!1;for(let e=0;e<t.length;e++){const r=t[e];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}}(n,e.dtype,t)})});return{kernelName:t,outputs:r,inputs:e,timeMs:a.then(t=>t.kernelMs),extraInfo:a.then(t=>null!=t.getExtraProfileInfo?t.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:n,timeMs:r,inputs:a,extraInfo:s}=t;n.forEach(t=>{Promise.all([t.data(),r,s]).then(n=>{this.logger.logKernelProfile(e,t,n[0],n[1],a,n[2])})})}}class c{logKernelProfile(t,e,n,r,a,s){const o="number"==typeof r?i.rightPad(r+"ms",9):r.error,u=i.rightPad(t,25),c=e.rank,p=e.size,l=i.rightPad(e.shape.toString(),14);let d="";for(const t in a){const n=a[t];if(null!=n){const r=n.shape||e.shape,a=r.length;d+=`${t}: ${a}D ${a>0?r:""} `}}console.log(`%c${u}\t%c${o}\t%c${c}D ${l}\t%c${p}\t%c${d}\t%c${s}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var p=n(6),l=n(8);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class d{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class h{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new d}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then(()=>{});if(null!=this.backendInstance)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const n=t[e];if(await this.initializeBackend(n).success)return void await this.setBackend(n)}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry)){if(!(t in this.registryFactory))return null;{const{asyncInit:e}=this.initializeBackend(t);if(e)return null}}return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,n=1){return t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)}async setBackend(t){if(null==this.registryFactory[t])throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,null==this.registry[t]){this.backendInstance=null;const{success:e,asyncInit:n}=this.initializeBackend(t);if(!(n?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new u(this.backendInstance),!0}setupRegisteredKernels(){Object(o.c)(this.backendName).forEach(t=>{null!=t.setupFunc&&t.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){Object(o.c)(t).forEach(e=>{null!=e.disposeFunc&&e.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(null==e)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const n=e.factory();if(Promise.resolve(n)===n){const e=++this.pendingBackendInitId,r=n.then(n=>!(e<this.pendingBackendInitId)&&(this.registry[t]=n,this.pendingBackendInit=null,!0)).catch(n=>(e<this.pendingBackendInitId||(this.pendingBackendInit=null,console.warn(`Initialization of backend ${t} failed`),console.warn(n.stack||n.message)),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}return this.registry[t]=n,{success:!0,asyncInit:!1}}catch(e){return console.warn(`Initialization of backend ${t} failed`),console.warn(e.stack||e.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const n=t[e],{success:r,asyncInit:a}=this.initializeBackend(n);if(a||r)return{name:n,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const n=this.state.tensorInfo.get(e),r=n.backend,a=this.readSync(e);r.disposeData(e),n.backend=t,t.move(e,a,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let n,r=null;if(null==e){if("function"!=typeof t)throw new Error("Please provide a function to tidy()");e=t}else{if("string"!=typeof t&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof e)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}return this.scopedRun(()=>this.startScope(r),()=>this.endScope(n),()=>(n=e(),n instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n))}scopedRun(t,e,n){t();try{const t=n();return e(),t}catch(t){throw e(),t}}nextTensorId(){return h.nextTensorId++}nextVariableId(){return h.nextVariableId++}clone(t){const e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],t=>({x:()=>{const e={x:t},n={dtype:"float32"};return f.runKernelFunc(e=>e.cast(t,"float32"),e,null,s.v,n)}}),[],{}),e}runKernel(t,e,n,r,a){return this.runKernelFunc(null,e,null,t,n,r,a)}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,n){const r=this.backend.numDataIds();let a=0;n.forEach(t=>{a+="complex64"===t.dtype?3:1});const s=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-e-a-s;if(o>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${t}'`)}runKernelFunc(t,e,n,r,a,s,i){let u,c=[];const p=this.isTapeOn();null==r&&(r=null!=this.state.activeScope?this.state.activeScope.name:"");const l=this.state.numBytes,d=this.state.numTensors;let h;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);const f=Object(o.b)(r,this.backendName);let m,b;if(null!=f)h=()=>{const t=this.backend.numDataIds();m=f.kernelFunc({inputs:e,attrs:a,backend:this.backend});const n=Array.isArray(m)?m:[m];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(r,t,n);const o=n.map(({dataId:t,shape:e,dtype:n})=>this.makeTensorFromDataId(t,e,n));if(p){let t=this.getTensorsForGradient(r,e,o);if(null==t){null==i&&(i=[]);const e=o.filter((t,e)=>i[e]);t=(s||[]).slice().concat(e)}c=this.saveTensorsForBackwardMode(t)}return o};else{const e=t=>{p&&(c=t.map(t=>this.keep(this.clone(t))))};h=()=>{const n=this.backend.numDataIds();m=this.tidy(()=>t(this.backend,e));const a=Array.isArray(m)?m:[m];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(r,n,a),a}}return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(b=this.profiler.profileKernel(r,e,()=>h()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(b),u=b.outputs):u=h()}),p&&this.addTapeNode(r,e,u,n,c,a),this.state.profiling&&this.state.activeProfile.kernels.push({name:r,bytesAdded:this.state.numBytes-l,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-d,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(t=>null!=e[t]?e[t].shape:null),outputShapes:u.map(t=>t.shape),kernelTimeMs:b.timeMs,extraInfo:b.extraInfo}),Array.isArray(m)?u:u[0]}saveTensorsForBackwardMode(t){return t.map(t=>this.keep(this.clone(t)))}getTensorsForGradient(t,e,n){const r=Object(o.a)(t);if(null!=r){const t=r.inputsToSave||[],a=r.outputsToSave||[];let s;r.saveAllInputs?(i.assert(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),s=Object.keys(e).map(t=>e[t])):s=t.map(t=>e[t]);const o=n.filter((t,e)=>a[e]);return s.concat(o)}return null}makeTensor(t,e,n,r){if(null==t)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;let a=t;"string"===n&&i.isString(t[0])&&(a=t.map(t=>i.encodeString(t)));const s=r.write(a,e,n),o=new p.a(e,n,s,this.nextTensorId());if(this.incRef(o,r),"string"===n){const t=this.state.tensorInfo.get(s),e=Object(i.bytesFromStringArray)(a);this.state.numBytes+=e-t.bytes,t.bytes=e}return o}makeTensorFromDataId(t,e,n,r){n=n||"float32";const a=new p.a(e,n,t,this.nextTensorId());return this.incRef(a,r),a}makeVariable(t,e=!0,n,r){n=n||this.nextVariableId().toString(),null!=r&&r!==t.dtype&&(t=t.cast(r));const a=new p.c(t,e,n,this.nextTensorId());if(null!=this.state.registeredVariables[a.name])throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}incRef(t,e){const n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,"string"===t.dtype&&this.state.numStringTensors++,0===n){this.state.numDataBuffers++;let n=0;"complex64"!==t.dtype&&"string"!==t.dtype&&(n=t.size*i.bytesPerElement(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:n,refCount:0}),this.state.numBytes+=n}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof p.c||this.track(t)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;this.state.numTensors--,"string"===t.dtype&&this.state.numStringTensors--;const e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?("complex64"!==t.dtype&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),null!=this.state.registeredVariables[t.name]&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,null==t.reasons&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(t=>t.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n;for(const t of this.state.activeProfile.kernels)t.kernelTimeMs=await t.kernelTimeMs,t.extraInfo=await t.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(t,e,n,r,a,s){const u={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:a},c=Object(o.a)(t);null!=c&&(r=c.gradFunc),null!=r&&(u.gradient=t=>(t=t.map((t,e)=>{if(null==t){const t=n[e],r=i.makeZerosTypedArray(t.size,t.dtype);return this.makeTensor(r,t.shape,t.dtype)}return t}),r(t.length>1?t:t[0],a,s))),this.state.activeTape.push(u)}keep(t){return t.kept=!0,t}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=Object(l.b)(t),n=new Set(e.map(t=>t.id));for(let t=0;t<this.state.activeScope.track.length;t++){const e=this.state.activeScope.track[t];e.kept||n.has(e.id)||e.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(t=>{t.kept||t.scopeId!==r.id||this.track(t)})}gradients(t,e,n,r=!1){if(i.assert(e.length>0,()=>"gradients() received an empty list of xs."),null!=n&&"float32"!==n.dtype)throw new Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);const a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));i.assert(a instanceof p.a,()=>"The result y returned by f() must be a tensor.");const s=function(t,e,n){const r={},a={};for(let t=0;t<e.length;t++)r[e[t].id]=!0;for(let n=0;n<t.length;n++){const s=t[n],o=s.inputs;for(const t in o){const n=o[t];let i=!1;for(let t=0;t<e.length;t++)if(r[n.id]){s.outputs.forEach(t=>r[t.id]=!0),i=!0,a[s.id]=!0;break}if(i)break}}const s={};s[n.id]=!0;const o={};for(let e=t.length-1;e>=0;e--){const n=t[e],r=n.inputs;for(let t=0;t<n.outputs.length;t++)if(s[n.outputs[t].id]){for(const t in r)s[r[t].id]=!0,o[n.id]=!0;break}}const i=[];for(let e=0;e<t.length;e++){const n=t[e];if(a[n.id]&&o[n.id]){const t={};for(const e in n.inputs){const a=n.inputs[e];r[a.id]&&(t[e]=a)}const e=Object.assign({},n);e.inputs=t,e.outputs=n.outputs,i.push(e)}}return i}(this.state.activeTape,e,a);if(!r&&0===s.length&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const t={};t[a.id]=null==n?function(t){const e=Object(i.makeOnesTypedArray)(Object(i.sizeFromShape)(t),"float32");return f.makeTensor(e,t,"float32")}(a.shape):n,function(t,e,n,r){for(let a=e.length-1;a>=0;a--){const s=e[a],o=[];if(s.outputs.forEach(e=>{const n=t[e.id];null!=n?o.push(n):o.push(null)}),null==s.gradient)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);const u=s.gradient(o);for(const e in s.inputs){if(!(e in u))throw new Error(`Cannot backprop through input ${e}. Available gradients found: ${Object.keys(u)}.`);const a=n(()=>u[e]());if("float32"!==a.dtype)throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${e} must have 'float32' dtype, but has '${a.dtype}'`);const o=s.inputs[e];if(!i.arraysEqual(a.shape,o.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${e}' has shape '${a.shape}', which does not match the shape of the input '${o.shape}'`);if(null==t[o.id])t[o.id]=a;else{const e=t[o.id];t[o.id]=r(e,a),e.dispose()}}}}(t,s,t=>this.tidy(t),m);const r=e.map(e=>t[e.id]);return 0===this.state.gradientDepth&&(this.state.activeTape.forEach(t=>{for(const e of t.saved)e.dispose()}),this.state.activeTape=null),{value:a,grads:r}})}customGrad(t){return i.assert(i.isFunction(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{let n;i.assert(e.every(t=>t instanceof p.a),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");const r={};return e.forEach((t,e)=>{r[e]=t}),this.runKernelFunc((r,a)=>(n=t(...e,a),i.assert(n.value instanceof p.a,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),i.assert(i.isFunction(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),r,(t,r)=>{const a=n.gradFunc(t,r),s=Array.isArray(a)?a:[a];i.assert(s.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),i.assert(s.every(t=>t instanceof p.a),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const o={};return s.forEach((t,e)=>{o[e]=()=>t}),o})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}async time(t){const e=Object(i.now)(),n=await this.backend.time(t);return n.wallMs=Object(i.now)()-e,n}track(t){return null!=this.state.activeScope&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new d;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}h.nextTensorId=0,h.nextVariableId=0;const f=function(){const t=Object(a.b)();if(null==t._tfengine){const e=new r.a(t);t._tfengine=new h(e)}return Object(r.c)(t._tfengine.ENV),Object(p.f)(()=>t._tfengine),t._tfengine}();function m(t,e){const n={a:t,b:e};return f.runKernelFunc((n,r)=>{const a=n.add(t,e);return r([t,e]),a},n,null,s.d)}},function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return h})),n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return b}));var r=n(0);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a(t,e,n,a){const u=Object(r.computeStrides)(e),c=function(t,e,n,a){const o=Object(r.sizeFromShape)(e),u=a[a.length-1],c=new Array(u).fill(0),p=e.length,l="complex64"===n?i(t):t;if(p>1)for(let t=0;t<o/u;t++){const e=t*u;for(let t=0;t<u;t++)c[t]=Math.max(c[t],s(l[e+t],0,n).length)}return c}(t,e,n,u),p=e.length,l=function t(e,n,r,a,u,c=!0){const p="complex64"===r?2:1,l=n[0],d=n.length;if(0===d){if("complex64"===r){return[s(i(e)[0],0,r)]}return"bool"===r?[o(e[0])]:[e[0].toString()]}if(1===d){if(l>20){const t=3*p;let n=Array.from(e.slice(0,t)),a=Array.from(e.slice((l-3)*p,l*p));return"complex64"===r&&(n=i(n),a=i(a)),["["+n.map((t,e)=>s(t,u[e],r)).join(", ")+", ..., "+a.map((t,e)=>s(t,u[l-3+e],r)).join(", ")+"]"]}return["["+("complex64"===r?i(e):Array.from(e)).map((t,e)=>s(t,u[e],r)).join(", ")+"]"]}const h=n.slice(1),f=a.slice(1),m=a[0]*p,b=[];if(l>20){for(let n=0;n<3;n++){const a=n*m,s=a+m;b.push(...t(e.slice(a,s),h,r,f,u,!1))}b.push("...");for(let n=l-3;n<l;n++){const a=n*m,s=a+m;b.push(...t(e.slice(a,s),h,r,f,u,n===l-1))}}else for(let n=0;n<l;n++){const a=n*m,s=a+m;b.push(...t(e.slice(a,s),h,r,f,u,n===l-1))}const y=2===d?",":"";b[0]="["+b[0]+y;for(let t=1;t<b.length-1;t++)b[t]=" "+b[t]+y;let g=",\n";for(let t=2;t<d;t++)g+="\n";return b[b.length-1]=" "+b[b.length-1]+"]"+(c?"":g),b}(t,e,n,u,c),d=["Tensor"];return a&&(d.push("  dtype: "+n),d.push("  rank: "+p),d.push(`  shape: [${e}]`),d.push("  values:")),d.push(l.map(t=>"    "+t).join("\n")),d.join("\n")}function s(t,e,n){let a;return a=Array.isArray(t)?parseFloat(t[0].toFixed(7))+" + "+parseFloat(t[1].toFixed(7))+"j":Object(r.isString)(t)?`'${t}'`:"bool"===n?o(t):parseFloat(t.toFixed(7)).toString(),Object(r.rightPad)(a,e)}function o(t){return 0===t?"false":"true"}function i(t){const e=[];for(let n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class u{constructor(t,e,n){if(this.dtype=e,this.shape=t.slice(),this.size=r.sizeFromShape(t),null!=n){const t=n.length;r.assert(t===this.size,()=>`Length of values '${t}' does not match the size inferred by the shape '${this.size}'.`)}if("complex64"===e)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||r.getArrayFromDType(e,this.size),this.strides=Object(r.computeStrides)(t)}set(t,...e){0===e.length&&(e=[0]),r.assert(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const n=this.locToIndex(e);this.values[n]=t}get(...t){0===t.length&&(t=[0]);let e=0;for(const n of t){if(n<0||n>=this.shape[e]){const e=`Requested out of range element at ${t}.   Buffer shape=`+this.shape;throw new Error(e)}e++}let n=t[t.length-1];for(let e=0;e<t.length-1;++e)n+=this.strides[e]*t[e];return this.values[n]}locToIndex(t){if(0===this.rank)return 0;if(1===this.rank)return t[0];let e=t[t.length-1];for(let n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e}indexToLoc(t){if(0===this.rank)return[];if(1===this.rank)return[t];const e=new Array(this.shape.length);for(let n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return c().makeTensor(this.values,this.shape,this.dtype)}}let c=null,p=null,l=null;function d(t){c=t}function h(t){p=t}function f(t){l=t}class m{constructor(t,e,n,a){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=r.sizeFromShape(t),this.strides=Object(r.computeStrides)(t),this.dataId=n,this.id=a,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return p.buffer(this.shape,this.dtype,t)}bufferSync(){return p.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return Object(r.toNestedArray)(this.shape,t)}arraySync(){return Object(r.toNestedArray)(this.shape,this.dataSync())}async data(){this.throwIfDisposed();const t=c().read(this.dataId);if("string"===this.dtype){const e=await t;try{return e.map(t=>r.decodeString(t))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataSync(){this.throwIfDisposed();const t=c().readSync(this.dataId);if("string"===this.dtype)try{return t.map(t=>r.decodeString(t))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await c().read(this.dataId);return"string"===this.dtype?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(c().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return p.print(this,t)}clone(){return this.throwIfDisposed(),p.clone(this)}toString(t=!1){return a(this.dataSync(),this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),p.cast(this,t)}variable(t=!0,e,n){return this.throwIfDisposed(),c().makeVariable(this,t,e,n)}}Object.defineProperty(m,Symbol.hasInstance,{value:t=>!!t&&null!=t.dataId&&null!=t.shape&&null!=t.dtype});class b extends m{constructor(t,e,n,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=e,this.name=n}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!r.arraysEqual(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);c().disposeTensor(this),this.dataId=t.dataId,c().incRef(this,null)}dispose(){c().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(b,Symbol.hasInstance,{value:t=>t instanceof m&&null!=t.assign&&t.assign instanceof Function})},function(t,e,n){"use strict";n.d(e,"a",(function(){return J.a})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return m})),n.d(e,"e",(function(){return y})),n.d(e,"f",(function(){return O})),n.d(e,"g",(function(){return E})),n.d(e,"h",(function(){return T})),n.d(e,"i",(function(){return I})),n.d(e,"j",(function(){return _})),n.d(e,"k",(function(){return D})),n.d(e,"l",(function(){return A})),n.d(e,"m",(function(){return F})),n.d(e,"n",(function(){return M})),n.d(e,"o",(function(){return $})),n.d(e,"p",(function(){return Y})),n.d(e,"q",(function(){return tt})),n.d(e,"s",(function(){return bt})),n.d(e,"r",(function(){return gt})),n.d(e,"t",(function(){return vt})),n.d(e,"v",(function(){return C})),n.d(e,"w",(function(){return Nt})),n.d(e,"x",(function(){return St})),n.d(e,"y",(function(){return jt})),n.d(e,"z",(function(){return Et.a})),n.d(e,"A",(function(){return nt})),n.d(e,"B",(function(){return Ft})),n.d(e,"C",(function(){return At})),n.d(e,"D",(function(){return $t})),n.d(e,"E",(function(){return Ct})),n.d(e,"F",(function(){return Pt})),n.d(e,"G",(function(){return Lt})),n.d(e,"H",(function(){return zt})),n.d(e,"I",(function(){return Vt})),n.d(e,"J",(function(){return Ut})),n.d(e,"K",(function(){return Kt})),n.d(e,"L",(function(){return Ht})),n.d(e,"M",(function(){return Qt})),n.d(e,"N",(function(){return ee})),n.d(e,"P",(function(){return Jt})),n.d(e,"Q",(function(){return ne})),n.d(e,"R",(function(){return re})),n.d(e,"S",(function(){return ae})),n.d(e,"T",(function(){return se})),n.d(e,"U",(function(){return ue})),n.d(e,"V",(function(){return ce})),n.d(e,"W",(function(){return pe})),n.d(e,"X",(function(){return Wt})),n.d(e,"Z",(function(){return le})),n.d(e,"bb",(function(){return de})),n.d(e,"cb",(function(){return he})),n.d(e,"db",(function(){return fe})),n.d(e,"eb",(function(){return me})),n.d(e,"hb",(function(){return we})),n.d(e,"jb",(function(){return Ne})),n.d(e,"kb",(function(){return Se})),n.d(e,"lb",(function(){return Ee})),n.d(e,"mb",(function(){return Te})),n.d(e,"nb",(function(){return Ie})),n.d(e,"ob",(function(){return _e})),n.d(e,"pb",(function(){return De})),n.d(e,"qb",(function(){return Pe})),n.d(e,"rb",(function(){return ze})),n.d(e,"sb",(function(){return Ve})),n.d(e,"tb",(function(){return Ue})),n.d(e,"ub",(function(){return rt})),n.d(e,"vb",(function(){return Ce})),n.d(e,"wb",(function(){return Ke})),n.d(e,"xb",(function(){return We})),n.d(e,"yb",(function(){return He})),n.d(e,"zb",(function(){return ke})),n.d(e,"Ab",(function(){return Je})),n.d(e,"Bb",(function(){return Ze})),n.d(e,"Cb",(function(){return Xe})),n.d(e,"Db",(function(){return Qe})),n.d(e,"Eb",(function(){return at})),n.d(e,"Fb",(function(){return rn})),n.d(e,"Gb",(function(){return Fe})),n.d(e,"Hb",(function(){return an})),n.d(e,"Ib",(function(){return sn})),n.d(e,"Jb",(function(){return Ye})),n.d(e,"Kb",(function(){return on})),n.d(e,"Lb",(function(){return cn})),n.d(e,"Mb",(function(){return bn})),n.d(e,"Nb",(function(){return yn})),n.d(e,"Ob",(function(){return On})),n.d(e,"Pb",(function(){return En})),n.d(e,"Qb",(function(){return In})),n.d(e,"Rb",(function(){return be})),n.d(e,"Sb",(function(){return _n})),n.d(e,"Tb",(function(){return Dn})),n.d(e,"Ub",(function(){return N})),n.d(e,"Vb",(function(){return ye})),n.d(e,"Wb",(function(){return Bn})),n.d(e,"Xb",(function(){return Pn})),n.d(e,"Yb",(function(){return Ln})),n.d(e,"Zb",(function(){return Oe})),n.d(e,"bc",(function(){return zn})),n.d(e,"cc",(function(){return Un})),n.d(e,"dc",(function(){return st})),n.d(e,"ec",(function(){return qn})),n.d(e,"fc",(function(){return Kn})),n.d(e,"gc",(function(){return Wn})),n.d(e,"hc",(function(){return ht})),n.d(e,"ic",(function(){return Zn})),n.d(e,"jc",(function(){return Me})),n.d(e,"kc",(function(){return fn})),n.d(e,"mc",(function(){return Rn})),n.d(e,"nc",(function(){return Xn})),n.d(e,"oc",(function(){return tn})),n.d(e,"pc",(function(){return Qn})),n.d(e,"qc",(function(){return tr})),n.d(e,"rc",(function(){return er})),n.d(e,"sc",(function(){return rr})),n.d(e,"tc",(function(){return Re})),n.d(e,"uc",(function(){return Be})),n.d(e,"vc",(function(){return ar})),n.d(e,"wc",(function(){return ft})),n.d(e,"xc",(function(){return et.a})),n.d(e,"yc",(function(){return Tn})),n.d(e,"Ac",(function(){return oe})),n.d(e,"Bc",(function(){return pr})),n.d(e,"Dc",(function(){return lr})),n.d(e,"Ec",(function(){return hr})),n.d(e,"Gc",(function(){return Zt})),n.d(e,"Hc",(function(){return mr})),n.d(e,"Ic",(function(){return Ge})),n.d(e,"Jc",(function(){return Xt})),n.d(e,"Cc",(function(){return S})),n.d(e,"ac",(function(){return $r})),n.d(e,"lc",(function(){return Cr})),n.d(e,"ab",(function(){return Rr})),n.d(e,"fb",(function(){return Ca})),n.d(e,"Y",(function(){return r})),n.d(e,"zc",(function(){return X})),n.d(e,"ib",(function(){return Q})),n.d(e,"O",(function(){return u.b})),n.d(e,"u",(function(){return o})),n.d(e,"gb",(function(){return s})),n.d(e,"Fc",(function(){return g}));var r={};n.r(r),n.d(r,"conv2d",(function(){return Hr})),n.d(r,"depthwiseConv2d",(function(){return Jr})),n.d(r,"matMul",(function(){return Zr}));var a={};n.r(a),n.d(a,"abs",(function(){return h})),n.d(a,"acos",(function(){return f})),n.d(a,"acosh",(function(){return m})),n.d(a,"add",(function(){return y})),n.d(a,"addN",(function(){return O})),n.d(a,"all",(function(){return E})),n.d(a,"any",(function(){return T})),n.d(a,"argMax",(function(){return I})),n.d(a,"argMin",(function(){return _})),n.d(a,"asin",(function(){return D})),n.d(a,"asinh",(function(){return A})),n.d(a,"atan",(function(){return F})),n.d(a,"atan2",(function(){return M})),n.d(a,"atanh",(function(){return $})),n.d(a,"avgPool",(function(){return Y})),n.d(a,"avgPool3d",(function(){return tt})),n.d(a,"basicLSTMCell",(function(){return mt})),n.d(a,"batchToSpaceND",(function(){return bt})),n.d(a,"batchNorm",(function(){return gt})),n.d(a,"batchNorm2d",(function(){return Ot})),n.d(a,"batchNorm3d",(function(){return wt})),n.d(a,"batchNorm4d",(function(){return xt})),n.d(a,"broadcastTo",(function(){return vt})),n.d(a,"buffer",(function(){return kt})),n.d(a,"cast",(function(){return C})),n.d(a,"ceil",(function(){return Nt})),n.d(a,"clipByValue",(function(){return St})),n.d(a,"clone",(function(){return jt})),n.d(a,"complex",(function(){return Et.a})),n.d(a,"concat",(function(){return nt})),n.d(a,"concat1d",(function(){return Tt})),n.d(a,"concat2d",(function(){return It})),n.d(a,"concat3d",(function(){return _t})),n.d(a,"concat4d",(function(){return Dt})),n.d(a,"conv1d",(function(){return Ft})),n.d(a,"conv2d",(function(){return At})),n.d(a,"conv2dTranspose",(function(){return $t})),n.d(a,"conv3d",(function(){return Ct})),n.d(a,"conv3dTranspose",(function(){return Bt})),n.d(a,"cos",(function(){return Pt})),n.d(a,"cosh",(function(){return Lt})),n.d(a,"cumsum",(function(){return zt})),n.d(a,"depthToSpace",(function(){return Vt})),n.d(a,"depthwiseConv2d",(function(){return Ut})),n.d(a,"diag",(function(){return qt})),n.d(a,"dilation2d",(function(){return Kt})),n.d(a,"div",(function(){return Ht})),n.d(a,"divNoNan",(function(){return Qt})),n.d(a,"dot",(function(){return te})),n.d(a,"elu",(function(){return ee})),n.d(a,"equal",(function(){return Jt})),n.d(a,"erf",(function(){return ne})),n.d(a,"exp",(function(){return re})),n.d(a,"expandDims",(function(){return ae})),n.d(a,"expm1",(function(){return se})),n.d(a,"eye",(function(){return ie})),n.d(a,"fft",(function(){return ue})),n.d(a,"fill",(function(){return ce})),n.d(a,"floor",(function(){return pe})),n.d(a,"floorDiv",(function(){return Wt})),n.d(a,"gather",(function(){return le})),n.d(a,"greater",(function(){return de})),n.d(a,"greaterEqual",(function(){return he})),n.d(a,"ifft",(function(){return fe})),n.d(a,"imag",(function(){return me})),n.d(a,"irfft",(function(){return we})),n.d(a,"isFinite",(function(){return xe})),n.d(a,"isInf",(function(){return je})),n.d(a,"isNaN",(function(){return ve})),n.d(a,"leakyRelu",(function(){return Ne})),n.d(a,"less",(function(){return Se})),n.d(a,"lessEqual",(function(){return Ee})),n.d(a,"linspace",(function(){return Te})),n.d(a,"localResponseNormalization",(function(){return Ie})),n.d(a,"log",(function(){return _e})),n.d(a,"log1p",(function(){return De})),n.d(a,"logSigmoid",(function(){return $e})),n.d(a,"logSoftmax",(function(){return Pe})),n.d(a,"logSumExp",(function(){return Le})),n.d(a,"logicalAnd",(function(){return ze})),n.d(a,"logicalNot",(function(){return Ve})),n.d(a,"logicalOr",(function(){return Ue})),n.d(a,"logicalXor",(function(){return qe})),n.d(a,"matMul",(function(){return rt})),n.d(a,"max",(function(){return Ce})),n.d(a,"maxPool",(function(){return Ke})),n.d(a,"maxPool3d",(function(){return We})),n.d(a,"maxPoolWithArgmax",(function(){return He})),n.d(a,"maximum",(function(){return ke})),n.d(a,"mean",(function(){return Je})),n.d(a,"min",(function(){return Ze})),n.d(a,"minimum",(function(){return Xe})),n.d(a,"mod",(function(){return Qe})),n.d(a,"moments",(function(){return en})),n.d(a,"mul",(function(){return at})),n.d(a,"multiRNNCell",(function(){return nn})),n.d(a,"multinomial",(function(){return rn})),n.d(a,"neg",(function(){return Fe})),n.d(a,"notEqual",(function(){return an})),n.d(a,"oneHot",(function(){return sn})),n.d(a,"ones",(function(){return Ye})),n.d(a,"onesLike",(function(){return on})),n.d(a,"outerProduct",(function(){return un})),n.d(a,"pad",(function(){return cn})),n.d(a,"pad1d",(function(){return pn})),n.d(a,"pad2d",(function(){return ln})),n.d(a,"pad3d",(function(){return dn})),n.d(a,"pad4d",(function(){return hn})),n.d(a,"pool",(function(){return mn})),n.d(a,"pow",(function(){return bn})),n.d(a,"prelu",(function(){return yn})),n.d(a,"print",(function(){return gn})),n.d(a,"prod",(function(){return On})),n.d(a,"rand",(function(){return wn})),n.d(a,"randomGamma",(function(){return Nn})),n.d(a,"randomNormal",(function(){return Sn})),n.d(a,"randomUniform",(function(){return En})),n.d(a,"range",(function(){return In})),n.d(a,"real",(function(){return be})),n.d(a,"reciprocal",(function(){return _n})),n.d(a,"relu",(function(){return Dn})),n.d(a,"relu6",(function(){return An})),n.d(a,"reshape",(function(){return N})),n.d(a,"reverse",(function(){return ye})),n.d(a,"reverse1d",(function(){return Fn})),n.d(a,"reverse2d",(function(){return Mn})),n.d(a,"reverse3d",(function(){return $n})),n.d(a,"reverse4d",(function(){return Cn})),n.d(a,"rfft",(function(){return Bn})),n.d(a,"round",(function(){return Pn})),n.d(a,"rsqrt",(function(){return Ln})),n.d(a,"scalar",(function(){return Oe})),n.d(a,"selu",(function(){return zn})),n.d(a,"separableConv2d",(function(){return Vn})),n.d(a,"setdiff1dAsync",(function(){return Un})),n.d(a,"sigmoid",(function(){return st})),n.d(a,"sign",(function(){return qn})),n.d(a,"sin",(function(){return Kn})),n.d(a,"sinh",(function(){return Wn})),n.d(a,"slice",(function(){return ht})),n.d(a,"slice1d",(function(){return Hn})),n.d(a,"slice2d",(function(){return Gn})),n.d(a,"slice3d",(function(){return Yn})),n.d(a,"slice4d",(function(){return Jn})),n.d(a,"softmax",(function(){return Zn})),n.d(a,"softplus",(function(){return Me})),n.d(a,"spaceToBatchND",(function(){return fn})),n.d(a,"split",(function(){return Rn})),n.d(a,"sqrt",(function(){return Xn})),n.d(a,"square",(function(){return tn})),n.d(a,"squaredDifference",(function(){return Qn})),n.d(a,"squeeze",(function(){return tr})),n.d(a,"stack",(function(){return er})),n.d(a,"step",(function(){return nr})),n.d(a,"stridedSlice",(function(){return rr})),n.d(a,"sub",(function(){return Re})),n.d(a,"sum",(function(){return Be})),n.d(a,"tan",(function(){return ar})),n.d(a,"tanh",(function(){return ft})),n.d(a,"tensor",(function(){return et.a})),n.d(a,"tensor1d",(function(){return Tn})),n.d(a,"tensor2d",(function(){return sr})),n.d(a,"tensor3d",(function(){return or})),n.d(a,"tensor4d",(function(){return ir})),n.d(a,"tensor5d",(function(){return ur})),n.d(a,"tensor6d",(function(){return cr})),n.d(a,"tile",(function(){return oe})),n.d(a,"topk",(function(){return pr})),n.d(a,"truncatedNormal",(function(){return lr})),n.d(a,"unsortedSegmentSum",(function(){return dr})),n.d(a,"unstack",(function(){return hr})),n.d(a,"variable",(function(){return fr})),n.d(a,"where",(function(){return Zt})),n.d(a,"whereAsync",(function(){return mr})),n.d(a,"zeros",(function(){return Ge})),n.d(a,"zerosLike",(function(){return Xt})),n.d(a,"booleanMaskAsync",(function(){return br})),n.d(a,"equalStrict",(function(){return yr})),n.d(a,"greaterEqualStrict",(function(){return gr})),n.d(a,"greaterStrict",(function(){return Or})),n.d(a,"lessEqualStrict",(function(){return wr})),n.d(a,"lessStrict",(function(){return xr})),n.d(a,"notEqualStrict",(function(){return jr})),n.d(a,"addStrict",(function(){return vr})),n.d(a,"divStrict",(function(){return kr})),n.d(a,"maximumStrict",(function(){return Nr})),n.d(a,"minimumStrict",(function(){return Sr})),n.d(a,"modStrict",(function(){return Er})),n.d(a,"mulStrict",(function(){return Tr})),n.d(a,"powStrict",(function(){return Ir})),n.d(a,"squaredDifferenceStrict",(function(){return _r})),n.d(a,"subStrict",(function(){return Dr})),n.d(a,"transpose",(function(){return S})),n.d(a,"norm",(function(){return Ar})),n.d(a,"movingAverage",(function(){return Fr})),n.d(a,"scatterND",(function(){return $r})),n.d(a,"sparseToDense",(function(){return Cr})),n.d(a,"gatherND",(function(){return Rr})),n.d(a,"dropout",(function(){return Br})),n.d(a,"enclosingPowerOfTwo",(function(){return Pr})),n.d(a,"cosineWindow",(function(){return Lr})),n.d(a,"inTopKAsync",(function(){return zr})),n.d(a,"op",(function(){return d.a})),n.d(a,"image",(function(){return Ca})),n.d(a,"linalg",(function(){return Ra})),n.d(a,"losses",(function(){return Ba})),n.d(a,"spectral",(function(){return Ma})),n.d(a,"fused",(function(){return r})),n.d(a,"signal",(function(){return $a}));var s={};n.r(s),n.d(s,"copyModel",(function(){return Ja})),n.d(s,"listModels",(function(){return Ga})),n.d(s,"moveModel",(function(){return Za})),n.d(s,"removeModel",(function(){return Ya})),n.d(s,"browserFiles",(function(){return ys})),n.d(s,"browserHTTPRequest",(function(){return Es})),n.d(s,"concatenateArrayBuffers",(function(){return Pa.d})),n.d(s,"decodeWeights",(function(){return Pa.e})),n.d(s,"encodeWeights",(function(){return Pa.f})),n.d(s,"fromMemory",(function(){return _s})),n.d(s,"getLoadHandlers",(function(){return qa})),n.d(s,"getModelArtifactsInfoForJSON",(function(){return Pa.g})),n.d(s,"getSaveHandlers",(function(){return Ua})),n.d(s,"http",(function(){return Ss})),n.d(s,"isHTTPScheme",(function(){return ks})),n.d(s,"loadWeights",(function(){return xs})),n.d(s,"registerLoadRouter",(function(){return Va})),n.d(s,"registerSaveRouter",(function(){return za})),n.d(s,"weightsLoaderFactory",(function(){return js})),n.d(s,"withSaveHandler",(function(){return Ds}));var o={};n.r(o),n.d(o,"toPixels",(function(){return Ms})),n.d(o,"fromPixels",(function(){return $s}));var i=n(5),u=(n(66),n(9));
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class c{fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Browser's encoder only supports utf-8, but got "+e);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}}Object(u.b)().get("IS_BROWSER")&&Object(u.b)().setPlatform("browser",new c);n(67);var p=n(3),l=n(1),d=n(4);const h=Object(d.a)({abs_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e=Object(l.a)(t,"x","abs"),n={x:e};return i.a.runKernelFunc((t,n)=>(n([e]),"complex64"===e.dtype?t.complexAbs(e):t.abs(e)),n,null,p.a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const f=Object(d.a)({acos_:function(t){const e=Object(l.a)(t,"x","acos"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.acos(e);return n([e]),r},n,null,p.b)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const m=Object(d.a)({acosh_:function(t){const e=Object(l.a)(t,"x","acosh"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.acosh(e);return n([e]),r},n,null,p.c)}});var b=n(8);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const y=Object(d.a)({add_:function(t,e){let n=Object(l.a)(t,"a","add"),r=Object(l.a)(e,"b","add");[n,r]=Object(b.c)(n,r);const a={a:n,b:r};return i.a.runKernelFunc((t,e)=>{const a=t.add(n,r);return e([n,r]),a},a,null,p.d)}});var g=n(0);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O=Object(d.a)({addN_:function(t){g.assert(Array.isArray(t),()=>"The argument passed to tf.addN() must be a list of tensors"),g.assert(t.length>=1,()=>"Must pass at least one tensor to tf.addN(), but got "+t.length);const e=t.map((t,e)=>Object(l.a)(t,"tensors"+e,"addN")),n=e[0];e.forEach(t=>{if(t.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(t=>{if(!g.arraysEqual(t.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=e;return i.a.runKernelFunc((t,n)=>{const r=t.addN(e);return n(e),r},r,null,p.e)}});
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w(t,e){for(let n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return!1;return!0}function x(t,e){return function(t,e,n){const r=t.length+e.length,a=[];let s=0,o=0;for(let i=0;i<r;i++)-1===n.indexOf(i)?a.push(t[s++]):a.push(e[o++]);return a}(t,e.map(t=>1),e)}function j(t,e){if(w(t,e))return null;const n=[];for(let r=0;r<e;++r)-1===t.indexOf(r)&&n.push(r);return t.forEach(t=>n.push(t)),n}function v(t){return t.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function k(t,e){const n=[];for(let r=e-t;r<e;++r)n.push(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const N=Object(d.a)({reshape_:function(t,e){const n=Object(l.a)(t,"x","reshape",null);e=g.inferFromImplicitShape(e,n.size),g.assert(n.size===g.sizeFromShape(e),()=>"new shape and old shape must have the same number of elements.");const r={x:n},a={shape:e};return i.a.runKernelFunc((t,r)=>(r([n]),t.reshape(n,e)),r,null,p.ec,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const S=Object(d.a)({transpose_:function(t,e){const n=Object(l.a)(t,"x","transpose");if(null==e&&(e=n.shape.map((t,e)=>e).reverse()),g.assert(n.rank===e.length,()=>`Error in transpose: rank of input ${n.rank} must match length of perm ${e}.`),e.forEach(t=>{g.assert(t>=0&&t<n.rank,()=>"All entries in 'perm' must be between 0 and "+(n.rank-1)+" but got "+e)}),n.rank<=1)return n.clone();const r={x:n},a={perm:e};return i.a.runKernelFunc(t=>t.transpose(n,e),r,null,p.Lc,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const E=Object(d.a)({all_:function(t,e=null,n=!1){let r=Object(l.a)(t,"x","all","bool");const a={x:r},s={axis:e,keepDims:n};return i.a.runKernelFunc(t=>{const a=Object(g.parseAxisParam)(e,r.shape);let s=a;const o=j(s,r.rank);null!=o&&(r=S(r,o),s=k(s.length,r.rank));const i=t.all(r,s);if(n){const t=x(i.shape,a);return N(i,t)}return i},a,null,p.f,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const T=Object(d.a)({any_:function(t,e=null,n=!1){let r=Object(l.a)(t,"x","any","bool");const a={x:r},s={axis:e,keepDims:n};return i.a.runKernelFunc(t=>{const a=Object(g.parseAxisParam)(e,r.shape);let s=a;const o=j(s,r.rank);null!=o&&(r=S(r,o),s=k(s.length,r.rank));const i=t.any(r,s);if(n){const t=x(i.shape,a);return N(i,t)}return i},a,null,p.g,s)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I=Object(d.a)({argMax_:function(t,e=0){let n=Object(l.a)(t,"x","argMax");const r={x:n},a={axis:e};return i.a.runKernelFunc((t,r)=>{r([n]);let a=g.parseAxisParam(e,n.shape);const s=j(a,n.rank);return null!=s&&(n=S(n,s),a=k(a.length,n.rank)),t.argMax(n,a[0])},r,null,p.h,a)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _=Object(d.a)({argMin_:function(t,e=0){let n=Object(l.a)(t,"x","argMin");const r={x:n},a={axis:e};return i.a.runKernelFunc((t,r)=>{r([n]),null==e&&(e=0);let a=g.parseAxisParam(e,n.shape);const s=j(a,n.rank);return null!=s&&(n=S(n,s),a=k(a.length,n.rank)),t.argMin(n,a[0])},r,null,p.i,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const D=Object(d.a)({asin_:function(t){const e=Object(l.a)(t,"x","asin"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.asin(e);return n([e]),r},n,null,p.j)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const A=Object(d.a)({asinh_:function(t){const e=Object(l.a)(t,"x","asinh"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.asinh(e);return n([e]),r},n,null,p.k)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const F=Object(d.a)({atan_:function(t){const e=Object(l.a)(t,"x","atan"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.atan(e);return n([e]),r},n,null,p.l)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M=Object(d.a)({atan2_:function(t,e){let n=Object(l.a)(t,"a","atan2"),r=Object(l.a)(e,"b","atan2");[n,r]=Object(b.c)(n,r);const a={a:n,b:r};return i.a.runKernelFunc((t,e)=>{const a=t.atan2(n,r);return e([n,r]),a},a,null,p.m)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $=Object(d.a)({atanh_:function(t){const e=Object(l.a)(t,"x","atanh"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.atanh(e);return n([e]),r},n,null,p.n)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const C=Object(d.a)({cast_:function(t,e){const n=Object(l.a)(t,"x","cast");if(!g.isValidDtype(e))throw new Error("Failed to cast to unknown dtype "+e);if("string"===e&&"string"!==n.dtype||"string"!==e&&"string"===n.dtype)throw new Error("Only strings can be casted to strings");const r={x:n},a={dtype:e};return i.a.runKernelFunc(t=>t.cast(n,e),r,null,p.v,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R(t,e,n,r,a,s,o="channelsLast"){const[i,u]=V(e);let c;if("channelsLast"===o)c=[i,u,t[3],t[3]];else{if("channelsFirst"!==o)throw new Error("Unknown dataFormat "+o);c=[i,u,t[1],t[1]]}return P(t,c,n,r,a,s,!1,o)}function B(t,e,n,r,a,s,o="NDHWC"){const[i,u,c]=U(e);let p,l;if("NDHWC"===o)l="channelsLast",p=[i,u,c,t[4],t[4]];else{if("NCDHW"!==o)throw new Error("Unknown dataFormat "+o);l="channelsFirst",p=[i,u,c,t[1],t[1]]}return L(t,p,n,r,a,!1,l,s)}function P(t,e,n,r,a,s,o=!1,i="channelsLast"){let[u,c,p,l]=[-1,-1,-1,-1];if("channelsLast"===i)[u,c,p,l]=t;else{if("channelsFirst"!==i)throw new Error("Unknown dataFormat "+i);[u,l,c,p]=t}const[d,h,,f]=e,[m,b]=V(n),[y,O]=V(r),w=q(d,y),x=q(h,O),{padInfo:j,outHeight:v,outWidth:k}=function(t,e,n,r,a,s,o,i,u){let c,p,l;if("number"==typeof t){c={top:t,bottom:t,left:t,right:t,type:0===t?"VALID":"NUMBER"};const a=function(t,e,n,r,a){null==r&&(r=z(t,e,n));const s=t[0],o=t[1],i=K((s-e+2*r)/n+1,a);g.assert(g.isInt(i),()=>`The output # of rows (${i}) must be an integer. Change the stride and/or zero pad parameters`);const u=K((o-e+2*r)/n+1,a);return g.assert(g.isInt(u),()=>`The output # of columns (${u}) must be an integer. Change the stride and/or zero pad parameters`),[i,u]}([e,n],s,r,t,i);p=a[0],l=a[1]}else if("same"===t){p=Math.ceil(e/r),l=Math.ceil(n/a);const t=Math.max(0,(p-1)*r+s-e),i=Math.max(0,(l-1)*a+o-n),u=Math.floor(t/2),d=t-u,h=Math.floor(i/2);c={top:u,bottom:d,left:h,right:i-h,type:"SAME"}}else if("valid"===t)c={top:0,bottom:0,left:0,right:0,type:"VALID"},p=Math.ceil((e-s+1)/r),l=Math.ceil((n-o+1)/a);else{if("object"!=typeof t)throw Error("Unknown padding parameter: "+t);{const d="channelsLast"===u?t[1][0]:t[2][0],h="channelsLast"===u?t[1][1]:t[2][1],f="channelsLast"===u?t[2][0]:t[3][0],m="channelsLast"===u?t[2][1]:t[3][1];c={top:d,bottom:h,left:f,right:m,type:0===d&&0===h&&0===f&&0===m?"VALID":"EXPLICIT"},p=K((e-s+d+h)/r+1,i),l=K((n-o+f+m)/a+1,i)}}return{padInfo:c,outHeight:p,outWidth:l}}(a,c,p,m,b,w,x,s,i),N=o?f*l:f;let S;return"channelsFirst"===i?S=[u,N,v,k]:"channelsLast"===i&&(S=[u,v,k,N]),{batchSize:u,dataFormat:i,inHeight:c,inWidth:p,inChannels:l,outHeight:v,outWidth:k,outChannels:N,padInfo:j,strideHeight:m,strideWidth:b,filterHeight:d,filterWidth:h,effectiveFilterHeight:w,effectiveFilterWidth:x,dilationHeight:y,dilationWidth:O,inShape:t,outShape:S,filterShape:e}}function L(t,e,n,r,a,s=!1,o="channelsLast",i){let[u,c,p,l,d]=[-1,-1,-1,-1,-1];if("channelsLast"===o)[u,c,p,l,d]=t;else{if("channelsFirst"!==o)throw new Error("Unknown dataFormat "+o);[u,d,c,p,l]=t}const[h,f,m,,b]=e,[y,O,w]=U(n),[x,j,v]=U(r),k=q(h,x),N=q(f,j),S=q(m,v),{padInfo:E,outDepth:T,outHeight:I,outWidth:_}=function(t,e,n,r,a,s,o,i,u,c,p){let l,d,h,f;if("number"==typeof t){l={top:t,bottom:t,left:t,right:t,front:t,back:t,type:0===t?"VALID":"NUMBER"};const s=function(t,e,n,r,a,s){null==a&&(a=z(t,e,r));const o=t[0],i=t[1],u=t[2],c=K((o-e+2*a)/r+1,s);g.assert(g.isInt(c),()=>`The output # of depths (${c}) must be an integer. Change the stride and/or zero pad parameters`);const p=K((i-e+2*a)/r+1,s);g.assert(g.isInt(p),()=>`The output # of rows (${p}) must be an integer. Change the stride and/or zero pad parameters`);const l=K((u-e+2*a)/r+1,s);return g.assert(g.isInt(l),()=>`The output # of columns (${l}) must be an integer. Change the stride and/or zero pad parameters`),[c,p,l,n]}([e,n,r,1],i,1,a,t,p);d=s[0],h=s[1],f=s[2]}else if("same"===t){d=Math.ceil(e/a),h=Math.ceil(n/s),f=Math.ceil(r/o);const t=(d-1)*a+i-e,p=(h-1)*s+u-n,m=(f-1)*o+c-r,b=Math.floor(t/2),y=t-b,g=Math.floor(p/2),O=p-g,w=Math.floor(m/2);l={top:g,bottom:O,left:w,right:m-w,front:b,back:y,type:"SAME"}}else{if("valid"!==t)throw Error("Unknown padding parameter: "+t);l={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},d=Math.ceil((e-i+1)/a),h=Math.ceil((n-u+1)/s),f=Math.ceil((r-c+1)/o)}return{padInfo:l,outDepth:d,outHeight:h,outWidth:f}}(a,c,p,l,y,O,w,k,N,S,i),D=s?b*d:b;let A;return"channelsFirst"===o?A=[u,D,T,I,_]:"channelsLast"===o&&(A=[u,T,I,_,D]),{batchSize:u,dataFormat:o,inDepth:c,inHeight:p,inWidth:l,inChannels:d,outDepth:T,outHeight:I,outWidth:_,outChannels:D,padInfo:E,strideDepth:y,strideHeight:O,strideWidth:w,filterDepth:h,filterHeight:f,filterWidth:m,effectiveFilterDepth:k,effectiveFilterHeight:N,effectiveFilterWidth:S,dilationDepth:x,dilationHeight:j,dilationWidth:v,inShape:t,outShape:A,filterShape:e}}function z(t,e,n,r=1){const a=q(e,r);return Math.floor((t[0]*(n-1)-n+a)/2)}function V(t){return"number"==typeof t?[t,t,t]:2===t.length?[t[0],t[1],1]:t}function U(t){return"number"==typeof t?[t,t,t]:t}function q(t,e){return e<=1?t:t+(t-1)*(e-1)}function K(t,e){if(!e)return t;switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error("Unknown roundingMode "+e)}}function W(t){const[e,n,r]=V(t);return 1===e&&1===n&&1===r}function H(t,e){return W(t)||W(e)}function G(t){if("NHWC"===t)return"channelsLast";if("NCHW"===t)return"channelsFirst";throw new Error("Unknown dataFormat "+t)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Y=Object(d.a)({avgPool_:function(t,e,n,r,a){const s=Object(l.a)(t,"x","avgPool","float32");g.assert(H(n,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`);let o=s,u=!1;3===s.rank&&(u=!0,o=N(s,[1,s.shape[0],s.shape[1],s.shape[2]])),g.assert(4===o.rank,()=>`Error in avgPool: x must be rank 4 but got rank ${o.rank}.`),null!=a&&g.assert(g.isInt(r),()=>`Error in avgPool: pad must be an integer when using, dimRoundingMode ${a} but got pad ${r}.`);const c={x:o},d={filterSize:e,strides:n,pad:r,dimRoundingMode:a};let h=i.a.runKernelFunc((t,s)=>{const i=R(o.shape,e,n,1,r,a);return s([o]),1===i.filterWidth&&1===i.filterHeight&&g.arraysEqual(i.inShape,i.outShape)?o.clone():t.avgPool(o,i)},c,null,p.o,d);return h=C(h,s.dtype),u?N(h,[h.shape[1],h.shape[2],h.shape[3]]):h}});var J=n(6);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z(t){Object(u.b)().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(t+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function X(t,e){return i.a.tidy(t,e)}function Q(t){return i.a.keep(t)}Object(J.d)(Z);const tt=Object(d.a)({avgPool3d_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r,a,s="NDHWC",o){null==o?o=[1,1,1]:Z("dilations is deprecated, this field will be gone in v3.0.0.");const u=Object(l.a)(t,"x","avgPool3d","float32");let c=u,d=!1;4===u.rank&&(d=!0,c=N(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]])),g.assert(5===c.rank,()=>`Error in avgPool3d: x must be rank 5 but got rank ${c.rank}.`),g.assert("NDHWC"===s,()=>"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+s),g.assert(H(n,o),()=>`Error in avgPool3d: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),null!=a&&g.assert(g.isInt(r),()=>`Error in avgPool3d: pad must be an integer when using, dimRoundingMode ${a} but got pad ${r}.`);const h={x:c},f={filterSize:e,strides:n,pad:r,dimRoundingMode:a,dataFormat:s,dilations:o};let m=i.a.runKernelFunc((t,i)=>{null==o&&(o=[1,1,1]);const u=B(c.shape,e,n,o,r,a,s);return i([c]),t.avgPool3d(c,u)},h,null,p.p,f);return m=C(m,c.dtype),d?N(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}});
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var et=n(16);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nt=Object(d.a)({concat_:function(t,e=0){Object(g.assert)(t.length>=1,()=>"Pass at least one tensor to concat");let n=Object(l.b)(t,"tensors","concat");"complex64"===n[0].dtype&&n.forEach(t=>{if("complex64"!==t.dtype)throw new Error(`Cannot concatenate complex64 tensors with a tensor\n          with dtype ${t.dtype}. `)});const r=Object(g.parseAxisParam)(e,n[0].shape)[0],a=function(t,e){const n=t[0].slice();for(let r=1;r<t.length;r++)n[e]+=t[r][e];return n}(n.map(t=>t.shape),r);if(0===Object(g.sizeFromShape)(a))return Object(et.a)([],a);if(n=n.filter(t=>t.size>0),1===n.length)return n[0];!function(t,e){const n=t[0].length;t.forEach((t,e)=>{g.assert(t.length===n,()=>`Error in concat${n}D: rank of tensors[${e}] must be the same as the rank of the rest (${n})`)}),g.assert(e>=0&&e<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);const r=t[0];t.forEach((t,a)=>{for(let s=0;s<n;s++)g.assert(s===e||t[s]===r[s],()=>`Error in concat${n}D: Shape of tensors[${a}] (${t}) does not match the shape of the rest (${r}) along the non-concatenated axis ${a}.`)})}(n.map(t=>t.shape),r);const s=n,o={axis:e};return i.a.runKernelFunc((t,e)=>{const a=t.concat(n,r);return e(n),a},s,null,p.z,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rt=Object(d.a)({matMul_:function(t,e,n=!1,r=!1){let a=Object(l.a)(t,"a","matMul"),s=Object(l.a)(e,"b","matMul");[a,s]=Object(b.c)(a,s),g.assert(a.rank>=2&&s.rank>=2&&a.rank===s.rank,()=>`Error in matMul: inputs must have the same rank of at least 2, got ranks ${a.rank} and ${s.rank}.`);const o=n?a.shape[a.rank-2]:a.shape[a.rank-1],u=r?s.shape[s.rank-1]:s.shape[s.rank-2],c=n?a.shape[a.rank-1]:a.shape[a.rank-2],d=r?s.shape[s.rank-2]:s.shape[s.rank-1],h=a.shape.slice(0,-2),f=s.shape.slice(0,-2),m=g.sizeFromShape(h),y=g.sizeFromShape(f);g.assert(g.arraysEqual(h,f),()=>`Error in matMul: outer dimensions (${h}) and (${f}) of Tensors with shapes ${a.shape} and `+s.shape+" must match."),g.assert(o===u,()=>`Error in matMul: inner shapes (${o}) and (${u}) of Tensors with shapes ${a.shape} and ${s.shape} and transposeA=${n} and transposeB=${r} must match.`);const O=a.shape.slice(0,-2).concat([c,d]),w=N(a,n?[m,o,c]:[m,c,o]),x=N(s,r?[y,d,u]:[y,u,d]),j={a:w,b:x},v={transposeA:n,transposeB:r},k=i.a.runKernelFunc((t,e)=>(e([w,x]),t.batchMatMul(w,x,n,r)),j,null,p.s,v);return N(k,O)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const at=Object(d.a)({mul_:function(t,e){let n=Object(l.a)(t,"a","mul"),r=Object(l.a)(e,"b","mul");[n,r]=Object(b.c)(n,r);const a={a:n,b:r};return i.a.runKernelFunc((t,e)=>{const a=t.multiply(n,r);return e([n,r]),a},a,null,p.Nb)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const st=Object(d.a)({sigmoid_:function(t){const e=Object(l.a)(t,"x","sigmoid"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.sigmoid(e);return n([r]),r},n,null,p.qc)}});
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ot(t){const e=[];let n=0;for(;t>0;)1&t&&e.push(n),t/=2,n++;return e}function it(t,e,n){return n<=t?n:n-(e-1)}function ut(t,e){const n=[];for(let r=0;r<t;r++)n.push(e+r);return n}function ct(t,e,n){let r=t[e];return(n&1<<e||null==r)&&(r=1),r}function pt(t,e,n,r,a,s){let o=e[a];const i=n[a]||1;(t&1<<a||s&1<<a||null==o)&&(o=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);const u=r[a];return o<0&&(o+=u),o=g.clamp(0,o,u-1),o}function lt(t,e,n,r,a,s){let o=e[a];const i=n[a]||1;(t&1<<a||s&1<<a||null==o)&&(o=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);const u=r[a];return o<0&&(o+=u),o=i>0?g.clamp(0,o,u):g.clamp(-1,o,u-1),o}function dt(t,e,n){let r,a;return r="number"==typeof e?[e,...new Array(t.rank-1).fill(0)]:e.length<t.rank?e.concat(new Array(t.rank-e.length).fill(0)):e.slice(),r.forEach(t=>{g.assert(-1!==t,()=>"slice() does not support negative begin indexing.")}),a=null==n?new Array(t.rank).fill(-1):"number"==typeof n?[n,...new Array(t.rank-1).fill(-1)]:n.length<t.rank?n.concat(new Array(t.rank-n.length).fill(-1)):n,a=a.map((e,n)=>e>=0?e:(g.assert(-1===e,()=>`Negative size values should be exactly -1 but got ${e} for the slice() size at index ${n}.`),t.shape[n]-r[n])),[r,a]}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ht=Object(d.a)({slice_:function(t,e,n){const r=Object(l.a)(t,"x","slice");if(0===r.rank)throw new Error("Slicing scalar is not possible");const[a,s]=dt(r,e,n);!function(t,e,n){g.assert(t.rank===e.length,()=>`Error in slice${t.rank}D: Length of begin ${e} must match the rank of the array (${t.rank}).`),g.assert(t.rank===n.length,()=>`Error in slice${t.rank}D: Length of size ${n} must match the rank of the array (${t.rank}).`);for(let r=0;r<t.rank;++r)g.assert(e[r]+n[r]<=t.shape[r],()=>`Error in slice${t.rank}D: begin[${r}] + size[${r}] (${e[r]+n[r]}) would overflow input.shape[${r}] (${t.shape[r]})`)}(r,a,s);const o={x:r},u={begin:e,size:n};return i.a.runKernelFunc((t,e)=>(e([r]),t.slice(r,a,s)),o,null,p.uc,u)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ft=Object(d.a)({tanh_:function(t){const e=Object(l.a)(t,"x","tanh"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.tanh(e);return n([r]),r},n,null,p.Ic)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mt=Object(d.a)({basicLSTMCell_:function(t,e,n,r,a,s){const o=Object(l.a)(t,"forgetBias","basicLSTMCell"),i=Object(l.a)(e,"lstmKernel","basicLSTMCell"),u=Object(l.a)(n,"lstmBias","basicLSTMCell"),c=Object(l.a)(r,"data","basicLSTMCell"),p=Object(l.a)(a,"c","basicLSTMCell"),d=Object(l.a)(s,"h","basicLSTMCell"),h=nt([c,d],1),f=rt(h,i),m=y(f,u),b=m.shape[0],g=m.shape[1]/4,O=[b,g],w=ht(m,[0,0],O),x=ht(m,[0,g],O),j=ht(m,[0,2*g],O),v=ht(m,[0,3*g],O),k=y(at(st(w),ft(x)),at(p,st(y(o,j))));return[k,at(ft(k),st(v))]}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bt=Object(d.a)({batchToSpaceND_:function(t,e,n){const r=Object(l.a)(t,"x","batchToSpaceND"),a=e.reduce((t,e)=>t*e);g.assert(r.rank>=1+e.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${e.length}`),g.assert(n.length===e.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${e.length}`),g.assert(r.shape[0]%a==0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${a}`);const s={x:r},o={blockShape:e,crops:n};return i.a.runKernelFunc(t=>t.batchToSpaceND(r,e,n),s,null,p.t,o)}});function yt(t){return null==t?null:0===t.rank?N(t,[t.size]):1===t.rank?t:2===t.rank?N(t,[1,1,t.shape[0],t.shape[1]]):3===t.rank?N(t,[1,t.shape[0],t.shape[1],t.shape[2]]):t}const gt=Object(d.a)({batchNorm_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r,a,s){null==s&&(s=.001);const o=Object(l.a)(t,"x","batchNorm"),u=Object(l.a)(e,"mean","batchNorm"),c=Object(l.a)(n,"variance","batchNorm");let d,h;null!=a&&(d=Object(l.a)(a,"scale","batchNorm")),null!=r&&(h=Object(l.a)(r,"offset","batchNorm")),g.assert(u.rank===c.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),g.assert(null==h||u.rank===h.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),g.assert(null==d||u.rank===d.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const f=function(t){let e;return e=0===t.rank||1===t.rank?N(t,[1,1,1,t.size]):2===t.rank?N(t,[1,1,t.shape[0],t.shape[1]]):3===t.rank?N(t,[1,t.shape[0],t.shape[1],t.shape[2]]):t,e}(o),m={x:f,scale:d,offset:h,mean:u,variance:c},b={varianceEpsilon:s},y=i.a.runKernelFunc((t,e)=>(e([f,u,c,d]),t.batchNorm(f,yt(u),yt(c),yt(h),yt(d),s)),m,null,p.fb,b);return N(y,o.shape)}});const Ot=Object(d.a)({batchNorm2d_:function(t,e,n,r,a,s){const o=Object(l.a)(t,"x","batchNorm"),i=Object(l.a)(e,"mean","batchNorm"),u=Object(l.a)(n,"variance","batchNorm");let c,p;return null!=a&&(c=Object(l.a)(a,"scale","batchNorm")),null!=r&&(p=Object(l.a)(r,"offset","batchNorm")),g.assert(2===o.rank,()=>"Error in batchNorm2D: x must be rank 2 but got rank "+o.rank+"."),g.assert(2===i.rank||1===i.rank,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),g.assert(2===u.rank||1===u.rank,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`),null!=c&&g.assert(2===c.rank||1===c.rank,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),null!=p&&g.assert(2===p.rank||1===p.rank,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${p.rank}.`),gt(o,i,u,p,c,s)}});const wt=Object(d.a)({batchNorm3d_:function(t,e,n,r,a,s){const o=Object(l.a)(t,"x","batchNorm"),i=Object(l.a)(e,"mean","batchNorm"),u=Object(l.a)(n,"variance","batchNorm");let c,p;return null!=a&&(c=Object(l.a)(a,"scale","batchNorm")),null!=r&&(p=Object(l.a)(r,"offset","batchNorm")),g.assert(3===o.rank,()=>"Error in batchNorm3D: x must be rank 3 but got rank "+o.rank+"."),g.assert(3===i.rank||1===i.rank,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),g.assert(3===u.rank||1===u.rank,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`),null!=c&&g.assert(3===c.rank||1===c.rank,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),null!=p&&g.assert(3===p.rank||1===p.rank,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${p.rank}.`),gt(o,i,u,p,c,s)}});const xt=Object(d.a)({batchNorm4d_:function(t,e,n,r,a,s){const o=Object(l.a)(t,"x","batchNorm"),i=Object(l.a)(e,"mean","batchNorm"),u=Object(l.a)(n,"variance","batchNorm");let c,p;return null!=a&&(c=Object(l.a)(a,"scale","batchNorm")),null!=r&&(p=Object(l.a)(r,"offset","batchNorm")),g.assert(4===o.rank,()=>"Error in batchNorm4D: x must be rank 4 but got rank "+o.rank+"."),g.assert(4===i.rank||1===i.rank,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),g.assert(4===u.rank||1===u.rank,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`),null!=c&&g.assert(4===c.rank||1===c.rank,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),null!=p&&g.assert(4===p.rank||1===p.rank,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${p.rank}.`),gt(o,i,u,p,c,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jt=Object(d.a)({clone_:function(t){const e=Object(l.a)(t,"x","clone",null),n={x:e};return i.a.runKernelFunc(()=>i.a.makeTensorFromDataId(e.dataId,e.shape,e.dtype),n,null,p.nb)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vt=Object(d.a)({broadcastTo_:function(t,e){let n=Object(l.a)(t,"broadcastTo","x");const r=n.shape;if(e.some(t=>!(t>0)||t%1!=0))throw new Error(`broadcastTo(): Invalid broadcast shape [${e}].`);if(e.length<n.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${n.rank}.`);if(e.length>n.rank){const t=n.shape.slice();for(;t.length<e.length;)t.unshift(1);n=N(n,t)}const a=n.shape,s=Array.from(e);for(let t=e.length-1;t>=0;t--)if(a[t]===e[t])s[t]=1;else if(1!==n.shape[t])throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${e}].`);if(0===s.map((t,e)=>t>1?e:-1).filter(t=>t>=0).length)return jt(n);const o={x:n},u={shape:e,inputShape:a};return i.a.runKernelFunc(t=>t.tile(n,s),o,null,p.u,u)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kt(t,e="float32",n){return e=e||"float32",g.assertNonNegativeIntegerDimensions(t),new J.b(t,e,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nt=Object(d.a)({ceil_:function(t){const e=Object(l.a)(t,"x","ceil"),n={x:e};return i.a.runKernelFunc(t=>t.ceil(e),n,null,p.w)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const St=Object(d.a)({clipByValue_:function(t,e,n){const r=Object(l.a)(t,"x","clipByValue");g.assert(e<=n,()=>`Error in clip: min (${e}) must be less than or equal to max (${n}).`);const a={x:r},s={clipValueMin:e,clipValueMax:n};return i.a.runKernelFunc((t,a)=>{const s=t.clip(r,e,n);return a([r]),s},a,null,p.x,s)}});var Et=n(12);const Tt=Object(d.a)({concat1d_:function(t){return nt(t,0)}});const It=Object(d.a)({concat2d_:function(t,e){return nt(t,e)}});const _t=Object(d.a)({concat3d_:function(t,e){return nt(t,e)}});const Dt=Object(d.a)({concat4d_:function(t,e){return nt(t,e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const At=Object(d.a)({conv2d_:function(t,e,n,r,a="NHWC",s=[1,1],o){const u=Object(l.a)(t,"x","conv2d"),c=Object(l.a)(e,"filter","conv2d");let d=u,h=!1;3===u.rank&&(h=!0,d=N(u,[1,u.shape[0],u.shape[1],u.shape[2]])),g.assert(4===d.rank,()=>`Error in conv2d: input must be rank 4, but got rank ${d.rank}.`),g.assert(4===c.rank,()=>"Error in conv2d: filter must be rank 4, but got rank "+c.rank+"."),null!=o&&g.assert(g.isInt(r),()=>`Error in conv2d: pad must be an integer when using, dimRoundingMode ${o} but got pad ${r}.`);const f="NHWC"===a?d.shape[3]:d.shape[1];g.assert(f===c.shape[2],()=>`Error in conv2d: depth of input (${f}) must match input depth for filter ${c.shape[2]}.`),g.assert(H(n,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`);const m={x:d,filter:c},b={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o},y=i.a.runKernelFunc((t,e)=>{const i=G(a),u=P(d.shape,c.shape,n,s,r,o,!1,i),p=t.conv2d(d,c,u);return e([d,c]),p},m,null,p.A,b);return h?N(y,[y.shape[1],y.shape[2],y.shape[3]]):y}});const Ft=Object(d.a)({conv1d_:function(t,e,n,r,a="NWC",s=1,o){const i=Object(l.a)(t,"x","conv1d"),u=Object(l.a)(e,"filter","conv1d");let c=i,p=!1;2===i.rank&&(p=!0,c=N(i,[1,i.shape[0],i.shape[1]])),g.assert(3===c.rank,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),g.assert(3===u.rank,()=>"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."),null!=o&&g.assert(g.isInt(r),()=>`Error in conv1d: pad must be an integer when using, dimRoundingMode ${o} but got pad ${r}.`),g.assert(c.shape[2]===u.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${u.shape[1]}.`),g.assert(H(n,s),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${s}'`),g.assert("NWC"===a,()=>`Error in conv1d: got dataFormat of ${a} but only NWC is currently supported.`);const d=N(u,[1,u.shape[0],u.shape[1],u.shape[2]]),h=N(c,[c.shape[0],1,c.shape[1],c.shape[2]]),f=At(h,d,[1,n],r,"NHWC",[1,s],o);return N(f,p?[f.shape[2],f.shape[3]]:[f.shape[0],f.shape[2],f.shape[3]])}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mt=Object(d.a)({conv2DBackpropInput_:function(t,e,n,r,a,s="NHWC",o){g.assert(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let u=t,c=e,l=!1;3===e.rank&&(l=!0,c=N(e,[1,e.shape[0],e.shape[1],e.shape[2]]),u=[1,t[0],t[1],t[2]]),g.assert(4===u.length,()=>"Error in conv2dDerInput: inShape must be length 4, but got length "+u.length+"."),g.assert(4===c.rank,()=>"Error in conv2dDerInput: dy must be rank 4, but got rank "+c.rank),g.assert(4===n.rank,()=>"Error in conv2dDerInput: filter must be rank 4, but got rank "+n.rank);const d="NHWC"===s?u[3]:u[1],h="NHWC"===s?c.shape[3]:c.shape[1];g.assert(d===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${d}) must match input depth for filter ${n.shape[2]}.`),g.assert(h===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${n.shape[3]}.`),null!=o&&g.assert(g.isInt(a),()=>`Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode ${o} but got pad ${a}.`);const f={dy:c,filter:n},m={strides:r,pad:a,dataFormat:s,dimRoundingMode:o,inputShape:u},b=i.a.runKernelFunc((t,e)=>{const i=G(s),p=P(u,n.shape,r,1,a,o,!1,i),l=t.conv2dDerInput(c,n,p);return e([c,n]),l},f,null,p.C,m);return l?N(b,[b.shape[1],b.shape[2],b.shape[3]]):b}});const $t=Object(d.a)({conv2dTranspose_:function(t,e,n,r,a,s){const o=Object(l.a)(t,"x","conv2dTranspose"),i=Object(l.a)(e,"filter","conv2dTranspose");return Mt(n,o,i,r,a,"NHWC",s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ct=Object(d.a)({conv3d_:function(t,e,n,r,a="NDHWC",s=[1,1,1]){const o=Object(l.a)(t,"x","conv3d"),u=Object(l.a)(e,"filter","conv3d");let c=o,d=!1;4===o.rank&&(d=!0,c=N(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),g.assert(5===c.rank,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),g.assert(5===u.rank,()=>"Error in conv3d: filter must be rank 5, but got rank "+u.rank+"."),g.assert(c.shape[4]===u.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${u.shape[3]}.`),g.assert(H(n,s),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`),g.assert("NDHWC"===a,()=>`Error in conv3d: got dataFormat of ${a} but only NDHWC is currently supported.`);const h={x:c,filter:u},f={strides:n,pad:r,dataFormat:a,dilations:s},m=i.a.runKernelFunc((t,e)=>{const a=L(c.shape,u.shape,n,s,r),o=t.conv3d(c,u,a);return e([c,u]),o},h,null,p.D,f);return d?N(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rt=Object(d.a)({conv3DBackpropInput_:function(t,e,n,r,a){g.assert(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let s=t,o=e,u=!1;4===e.rank&&(u=!0,o=N(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),s=[1,t[0],t[1],t[2],t[3]]);const c=s[4],l=o.shape[4];g.assert(5===s.length,()=>"Error in conv3dDerInput: inShape must be length 5, but got length "+s.length+"."),g.assert(5===o.rank,()=>"Error in conv3dDerInput: dy must be rank 5, but got rank "+o.rank),g.assert(5===n.rank,()=>"Error in conv3dDerInput: filter must be rank 5, but got rank "+n.rank),g.assert(c===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[3]}.`),g.assert(l===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`);const d={dy:o},h={pad:a},f=i.a.runKernelFunc(t=>{const e=L(s,n.shape,r,1,a);return t.conv3dDerInput(o,n,e)},d,null,p.F,h);return u?N(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}});const Bt=Object(d.a)({conv3dTranspose_:function(t,e,n,r,a){const s=Object(l.a)(t,"x","conv3dTranspose"),o=Object(l.a)(e,"filter","conv3dTranspose");return Rt(n,s,o,r,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pt=Object(d.a)({cos_:function(t){const e=Object(l.a)(t,"x","cos"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.cos(e);return n([e]),r},n,null,p.G)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lt=Object(d.a)({cosh_:function(t){const e=Object(l.a)(t,"x","cosh"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.cosh(e);return n([e]),r},n,null,p.H)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zt=Object(d.a)({cumsum_:function(t,e=0,n=!1,r=!1){const a=Object(l.a)(t,"x","cumsum"),s={x:a},o={axis:e,exclusive:n,reverse:r};return i.a.runKernelFunc((t,s)=>{const o=j([e],a.rank);let i=a;null!=o&&(i=S(a,o));const u=k(1,a.rank)[0];let c=t.cumsum(i,u,n,r);if(s([a]),null!=o){const t=v(o);c=S(c,t)}return c},s,null,p.J,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vt=Object(d.a)({depthToSpace_:function(t,e,n="NHWC"){const r=Object(l.a)(t,"x","depthToSpace"),a="NHWC"===n?r.shape[1]:r.shape[2],s="NHWC"===n?r.shape[2]:r.shape[3],o="NHWC"===n?r.shape[3]:r.shape[1];g.assert(a*e>=0,()=>`Negative dimension size caused by overflow when multiplying\n    ${a} and ${e}  for depthToSpace with input shape\n    ${r.shape}`),g.assert(s*e>=0,()=>`Negative dimension size caused by overflow when multiplying\n    ${s} and ${e} for depthToSpace with input shape\n        ${r.shape}`),g.assert(o%(e*e)==0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${o} for depthToSpace with input shape ${r.shape}`);const u={x:r},c={blockSize:e,dataFormat:n};return i.a.runKernelFunc(t=>t.depthToSpace(r,e,n),u,null,p.K,c)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ut=Object(d.a)({depthwiseConv2d_:function(t,e,n,r,a="NHWC",s=[1,1],o){const u=Object(l.a)(t,"x","depthwiseConv2d"),c=Object(l.a)(e,"filter","depthwiseConv2d");let d=u,h=!1;3===u.rank&&(h=!0,d=N(u,[1,u.shape[0],u.shape[1],u.shape[2]])),g.assert(4===d.rank,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${d.rank}.`),g.assert(4===c.rank,()=>"Error in depthwiseConv2d: filter must be rank 4, but got rank "+c.rank+"."),g.assert(d.shape[3]===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${d.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`),null!=o&&g.assert(g.isInt(r),()=>`Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode ${o} but got pad ${r}.`);const f={x:d,filter:c},m={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o},b=i.a.runKernelFunc((t,e)=>{null==s&&(s=[1,1]),g.assert(H(n,s),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`);const a=P(d.shape,c.shape,n,s,r,o,!0),i=t.depthwiseConv2D(d,c,a);return e([d,c]),i},f,null,p.L,m);return h?N(b,[b.shape[1],b.shape[2],b.shape[3]]):b}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qt=Object(d.a)({diag_:function(t){const e=Object(l.a)(t,"x","diag"),n={x:e};return i.a.runKernelFunc(n=>{const r=N(e,[e.size]),a=n.diag(r),s=[...t.shape,...t.shape];return N(a,s)},n,null,p.O)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kt=Object(d.a)({dilation2d_:function(t,e,n,r,a=[1,1],s="NHWC"){const o=Object(l.a)(t,"x","dilation2d"),u=Object(l.a)(e,"filter","dilation2d");g.assert(3===o.rank||4===o.rank,()=>"Error in dilation2d: input must be rank 3 or 4, but got rank "+o.rank+"."),g.assert(3===u.rank,()=>"Error in dilation2d: filter must be rank 3, but got rank "+u.rank+"."),g.assert("NHWC"===s,()=>"Error in dilation2d: Only NHWC is currently supported, but got dataFormat of "+s);let c=o,d=!1;3===o.rank&&(c=N(o,[1,o.shape[0],o.shape[1],o.shape[2]]),d=!0);const h={x:c,filter:u},f={strides:n,pad:r,dilations:a},m=i.a.runKernel(p.P,h,f);return d?N(m,[m.shape[1],m.shape[2],m.shape[3]]):m}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wt=Object(d.a)({floorDiv_:function(t,e){let n=Object(l.a)(t,"a","floorDiv"),r=Object(l.a)(e,"b","floorDiv");[n,r]=Object(b.c)(n,r);const a={a:n,b:r};return i.a.runKernelFunc((t,e)=>{const a=t.floorDiv(n,r);return e([n,r]),a},a,null,p.db)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ht=Object(d.a)({div_:function(t,e){let n=Object(l.a)(t,"a","div"),r=Object(l.a)(e,"b","div");if([n,r]=Object(b.c)(n,r),"int32"===n.dtype&&"int32"===r.dtype)return Wt(n,r);const a={a:n,b:r};return i.a.runKernelFunc((t,e)=>{const a=t.realDivide(n,r);return e([n,r]),a},a,null,p.S,{})}});
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gt(t,e){const n=[];for(let r=0;r<e.length;r++){const a=t[t.length-r-1],s=e.length-r-1,o=e[s];(null==a||1===a&&o>1)&&n.unshift(s)}return n}function Yt(t,e){const n=[],r=Math.max(t.length,e.length);for(let a=0;a<r;a++){let r=t[t.length-a-1];null==r&&(r=1);let s=e[e.length-a-1];if(null==s&&(s=1),1===r)n.unshift(s);else if(1===s)n.unshift(r);else{if(r!==s){throw Error(`Operands could not be broadcast together with shapes ${t} and ${e}.`)}n.unshift(r)}}return n}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jt=Object(d.a)({equal_:function(t,e){let n=Object(l.a)(t,"a","equal"),r=Object(l.a)(e,"b","equal");[n,r]=Object(b.c)(n,r),Yt(n.shape,r.shape);const a={a:n,b:r};return i.a.runKernelFunc(t=>t.equal(n,r),a,null,p.V)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zt=Object(d.a)({where_:function(t,e,n){const r=Object(l.a)(e,"a","where"),a=Object(l.a)(n,"b","where"),s=Object(l.a)(t,"condition","where","bool"),o=Yt(r.shape,a.shape),u=vt(r,o),c=vt(a,o);1===s.rank&&Object(g.assert)(s.shape[0]===r.shape[0],()=>"The first dimension of `a` must match the size of `condition`."),1!==s.rank&&Object(g.assertShapesMatch)(s.shape,c.shape,"Error in where: ");const d={condition:s,t:u,e:c};return i.a.runKernelFunc((t,e)=>{const n=t.select(s,u,c);return e([s]),n},d,null,p.oc)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xt=Object(d.a)({zerosLike_:function(t){const e=Object(l.a)(t,"x","zerosLike"),n={x:e};return i.a.runKernelFunc(t=>t.zerosLike(e),n,null,p.Oc)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qt=Object(d.a)({divNoNan_:function(t,e){let n=Object(l.a)(t,"a","div"),r=Object(l.a)(e,"b","div");[n,r]=Object(b.c)(n,r);const a=Ht(n,r),s=Xt(a),o=Jt(r,s);return Zt(o,s,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const te=Object(d.a)({dot_:function(t,e){const n=Object(l.a)(t,"t1","dot"),r=Object(l.a)(e,"t2","dot");g.assert(!(1!==n.rank&&2!==n.rank||1!==r.rank&&2!==r.rank),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);const a=1===n.rank?n.size:n.shape[1],s=1===r.rank?r.size:r.shape[0];if(g.assert(a===s,()=>`Error in dot: inner dimensions of inputs must match, but got ${a} and ${s}.`),1===n.rank&&1===r.rank){const t=N(n,[1,-1]),e=N(r,[-1,1]),a=rt(t,e);return N(a,[])}if(1===n.rank&&2===r.rank){const t=N(n,[1,-1]),e=N(r,[r.shape[0],r.shape[1]]),a=rt(t,e);return N(a,[a.size])}if(2===n.rank&&1===r.rank){const t=N(r,[-1,1]),e=rt(n,t);return N(e,[e.size])}{const t=N(r,[r.shape[0],r.shape[1]]);return rt(n,t)}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ee=Object(d.a)({elu_:function(t){const e=Object(l.a)(t,"x","elu"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.elu(e);return n([r]),r},n,null,p.T)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ne=Object(d.a)({erf_:function(t){let e=Object(l.a)(t,"x","erf");g.assert("int32"===e.dtype||"float32"===e.dtype,()=>"Input dtype must be `int32` or `float32`."),"int32"===e.dtype&&(e=C(e,"float32"));const n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.erf(e);return n([e]),r},n,null,p.W)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const re=Object(d.a)({exp_:function(t){const e=Object(l.a)(t,"x","exp"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.exp(e);return n([r]),r},n,null,p.X)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ae=Object(d.a)({expandDims_:function(t,e=0){const n=Object(l.a)(t,"x","expandDims",null);g.assert(e<=n.rank,()=>"Axis must be <= rank of the tensor");const r=n.shape.slice();return e<0&&(g.assert(-(n.rank+1)<=e,()=>`Axis must be in the interval [${-(n.rank+1)}, ${n.rank}]`),e=n.rank+e+1),r.splice(e,0,1),N(n,r)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const se=Object(d.a)({expm1_:function(t){const e=Object(l.a)(t,"x","expm1"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.expm1(e);return n([e]),r},n,null,p.Y)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oe=Object(d.a)({tile_:function(t,e){const n=Object(l.a)(t,"x","tile",null);g.assert(n.rank===e.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${e}.`);const r=[n],a={x:n},s={reps:e};return i.a.runKernelFunc((t,r)=>{const a=t.tile(n,e);return r([n]),a},a,null,p.Jc,s,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ie=Object(d.a)({eye_:function(t,e,n,r="float32"){null==e&&(e=t);const a=kt([t,e],r),s=t<=e?t:e;for(let t=0;t<s;++t)a.set(1,t,t);const o=N(a.toTensor(),[t,e]);if(null==n)return o;if(1===n.length)return oe(ae(o,0),[n[0],1,1]);if(2===n.length)return oe(ae(ae(o,0),0),[n[0],n[1],1,1]);if(3===n.length)return oe(ae(ae(ae(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ue=Object(d.a)({fft_:function(t){Object(g.assert)("complex64"===t.dtype,()=>`The dtype for tf.spectral.fft() must be complex64 but got ${t.dtype}.`);const e={input:t};return i.a.runKernelFunc(e=>{const n=t.shape[t.shape.length-1],r=t.size/n,a=t.as2D(r,n);return e.fft(a).reshape(t.shape)},e,null,p.Z)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ce(t,e,n){const r={shape:t,value:e,dtype:n};return i.a.runKernelFunc(r=>r.fill(t,e,n),{},null,p.ab,r)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pe=Object(d.a)({floor_:function(t){const e=Object(l.a)(t,"x","floor"),n={x:e};return i.a.runKernelFunc(t=>t.floor(e),n,null,p.cb)}});
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const le=Object(d.a)({gather_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n=0){const r=Object(l.a)(t,"x","gather"),a=Object(l.a)(e,"indices","gather","int32"),s={x:r,indices:a},o={axis:n};return i.a.runKernelFunc((t,e)=>{const s=Object(g.parseAxisParam)(n,r.shape)[0],o=function(t,e,n){const r=t.shape[n],a=[];let s=1,o=1;for(let e=0;e<n;e++)a.push(t.shape[e]),s*=t.shape[e];for(let t=0;t<e.rank;t++)a.push(e.shape[t]);for(let e=n+1;e<t.rank;e++)a.push(t.shape[e]),o*=t.shape[e];return{batchSize:s,sliceSize:o,dimSize:r,outputShape:a}}(r,a,s),i=t.gather(r,N(a,[a.size]),s);return e([r,a]),N(i,o.outputShape)},s,null,p.jb,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const de=Object(d.a)({greater_:function(t,e){let n=Object(l.a)(t,"a","greater"),r=Object(l.a)(e,"b","greater");[n,r]=Object(b.c)(n,r),Yt(n.shape,r.shape);const a={a:n,b:r};return i.a.runKernelFunc(t=>t.greater(n,r),a,null,p.kb)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const he=Object(d.a)({greaterEqual_:function(t,e){let n=Object(l.a)(t,"a","greaterEqual"),r=Object(l.a)(e,"b","greaterEqual");[n,r]=Object(b.c)(n,r),Yt(n.shape,r.shape);const a={a:n,b:r};return i.a.runKernelFunc((t,e)=>{const a=t.greaterEqual(n,r);return e([n,r]),a},a,null,p.lb)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fe=Object(d.a)({ifft_:function(t){Object(g.assert)("complex64"===t.dtype,()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${t.dtype}.`);const e={input:t};return i.a.runKernelFunc(e=>{const n=t.shape[t.shape.length-1],r=t.size/n,a=N(t,[r,n]),s=e.ifft(a);return N(s,t.shape)},e,null,p.mb)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const me=Object(d.a)({imag_:function(t){const e=Object(l.a)(t,"input","imag"),n={input:e};return i.a.runKernelFunc(t=>t.imag(e),n,null,p.ob)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const be=Object(d.a)({real_:function(t){const e=Object(l.a)(t,"input","real"),n={input:e};return i.a.runKernelFunc(t=>t.real(e),n,null,p.ac)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ye=Object(d.a)({reverse_:function(t,e){const n=Object(l.a)(t,"x","reverse"),r={x:n},a={dims:e};return i.a.runKernelFunc(t=>{const r=Object(g.parseAxisParam)(e,n.shape);if(0===n.rank)return jt(n);const a=t.reverse(n,r);return N(a,n.shape)},r,null,p.jc,a)}});var ge=n(11);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oe(t,e){if((Object(g.isTypedArray)(t)&&"string"!==e||Array.isArray(t))&&"complex64"!==e)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===e&&Object(g.isTypedArray)(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Object(ge.a)(t,[],[],e)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const we=Object(d.a)({irfft_:function(t){const e=t.shape[t.shape.length-1],n=t.size/e;let r;if(e<=2){const a=N(t,[n,e]);r=fe(a)}else{const a=[n,2*(e-1)],s=N(be(t),[n,e]),o=N(me(t),[n,e]),i=ye(ht(s,[0,1],[n,e-2]),1),u=at(ye(ht(o,[0,1],[n,e-2]),1),Oe(-1)),c=nt([s,i],1),p=nt([o,u],1),l=N(Object(Et.a)(c,p),[a[0],a[1]]);r=fe(l)}if(r=be(r),3===t.rank&&0!==t.shape[0]){const e=r,n=t.shape[0];r=N(r,[n,r.shape[0]/n,r.shape[1]]),e.dispose()}return r}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xe=Object(d.a)({isFinite_:function(t){const e=Object(l.a)(t,"x","isFinite"),n={x:e};return i.a.runKernelFunc(t=>t.isFinite(e),n,null,p.pb)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const je=Object(d.a)({isInf_:function(t){const e=Object(l.a)(t,"x","isInf"),n={x:e};return i.a.runKernelFunc(t=>t.isInf(e),n,null,p.qb)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ve=Object(d.a)({isNaN_:function(t){const e=Object(l.a)(t,"x","isNaN"),n={x:e};return i.a.runKernelFunc(t=>t.isNaN(e),n,null,p.rb)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ke=Object(d.a)({maximum_:function(t,e){let n=Object(l.a)(t,"a","maximum"),r=Object(l.a)(e,"b","maximum");[n,r]=Object(b.c)(n,r),"bool"===n.dtype&&(n=C(n,"int32"),r=C(r,"int32")),Yt(n.shape,r.shape);const a={a:n,b:r};return i.a.runKernelFunc((t,e)=>{const a=t.maximum(n,r);return e([n,r]),a},a,null,p.Jb)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ne=Object(d.a)({leakyRelu_:function(t,e=.2){const n=Object(l.a)(t,"x","leakyRelu");return ke(at(Oe(e),n),n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Se=Object(d.a)({less_:function(t,e){let n=Object(l.a)(t,"a","less"),r=Object(l.a)(e,"b","less");[n,r]=Object(b.c)(n,r),Yt(n.shape,r.shape);const a={a:n,b:r};return i.a.runKernelFunc(t=>t.less(n,r),a,null,p.ub)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ee=Object(d.a)({lessEqual_:function(t,e){let n=Object(l.a)(t,"a","lessEqual"),r=Object(l.a)(e,"b","lessEqual");[n,r]=Object(b.c)(n,r),Yt(n.shape,r.shape);const a={a:n,b:r};return i.a.runKernelFunc((t,e)=>{const a=t.lessEqual(n,r);return e([n,r]),a},a,null,p.vb)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Te(t,e,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:t,stop:e,num:n};return i.a.runKernelFunc(r=>r.linspace(t,e,n),{},null,p.wb,r)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ie=Object(d.a)({localResponseNormalization_:function(t,e=5,n=1,r=1,a=.5){const s=Object(l.a)(t,"x","localResponseNormalization");g.assert(4===s.rank||3===s.rank,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank ${s.rank}.`),g.assert(g.isInt(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let o=s,u=!1;3===s.rank&&(u=!0,o=N(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const c={x:o},d={depthRadius:e,bias:n,alpha:r,beta:a},h=i.a.runKernelFunc((t,s)=>{const i=t.localResponseNormalization4D(o,e,n,r,a);return s([o,i]),i},c,null,p.sb,d);return u?N(h,[h.shape[1],h.shape[2],h.shape[3]]):h}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _e=Object(d.a)({log_:function(t){const e=Object(l.a)(t,"x","log"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.log(e);return n([e]),r},n,null,p.xb)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const De=Object(d.a)({log1p_:function(t){const e=Object(l.a)(t,"x","log1p"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.log1p(e);return n([e]),r},n,null,p.yb)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ae(t){return i.a.customGrad(t)}const Fe=Object(d.a)({neg_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e=Object(l.a)(t,"x","neg"),n={x:e};return i.a.runKernelFunc(t=>t.neg(e),n,null,p.Ob)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Me=Object(d.a)({softplus_:function(t){const e=Object(l.a)(t,"x","softplus"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.softplus(e);return n([e]),r},n,null,p.wc)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $e=Object(d.a)({logSigmoid_:function(t){const e=Object(l.a)(t,"x","logSigmoid");return Ae(t=>({value:Fe(Me(Fe(t))),gradFunc:e=>at(e,st(Fe(t)))}))(e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ce=Object(d.a)({max_:function(t,e=null,n=!1){const r=Object(l.a)(t,"x","max"),a={x:r},s={reductionIndices:e,keepDims:n};return i.a.runKernelFunc((t,a)=>{let s=g.parseAxisParam(e,r.shape);const o=j(s,r.rank);let i=r;null!=o&&(i=S(r,o),s=k(s.length,i.rank));const u=t.max(i,s);null!=o&&i.dispose();let c=u;if(n){const t=x(c.shape,g.parseAxisParam(e,r.shape));c=N(c,t),u.dispose()}return a([r,c]),c},a,null,p.Db,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Re=Object(d.a)({sub_:function(t,e){let n=Object(l.a)(t,"a","sub"),r=Object(l.a)(e,"b","sub");[n,r]=Object(b.c)(n,r);const a={a:n,b:r};return i.a.runKernelFunc((t,e)=>{const a=t.subtract(n,r);return e([n,r]),a},a,null,p.Fc)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Be=Object(d.a)({sum_:function(t,e=null,n=!1){let r=Object(l.a)(t,"x","sum");"bool"===r.dtype&&(r=C(r,"int32"));const a={x:r},s={axis:e,keepDims:n};return i.a.runKernelFunc((t,a)=>{a([r]);const s=Object(g.parseAxisParam)(e,r.shape),o=j(s,r.rank);let i=s,u=r;null!=o&&(u=S(r,o),i=k(i.length,r.rank));let c=t.sum(u,i);if(n){const t=x(c.shape,s);c=N(c,t)}return c},a,null,p.Gc,s)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pe=Object(d.a)({logSoftmax_:function(t,e=-1){const n=Object(l.a)(t,"logits","logSoftmax");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${e}`);const r={logits:n},a={axis:e};return i.a.runKernelFunc((n,r)=>{const a=Ce(t,e,!0),s=Re(t,a),o=Re(C(s,"float32"),_e(Be(re(s),e,!0)));return r([o]),o},r,null,p.zb,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Le=Object(d.a)({logSumExp_:function(t,e=null,n=!1){const r=Object(l.a)(t,"x","logSumExp"),a=Object(g.parseAxisParam)(e,r.shape),s=Ce(r,a,!0),o=Re(r,s),i=re(o),u=Be(i,a),c=_e(u),p=y(N(s,c.shape),c);if(n){const t=x(p.shape,a);return N(p,t)}return p}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ze=Object(d.a)({logicalAnd_:function(t,e){const n=Object(l.a)(t,"a","logicalAnd","bool"),r=Object(l.a)(e,"b","logicalAnd","bool");Yt(n.shape,r.shape);const a={a:n,b:r};return i.a.runKernelFunc(t=>t.logicalAnd(n,r),a,null,p.Ab)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ve=Object(d.a)({logicalNot_:function(t){const e=Object(l.a)(t,"x","logicalNot","bool"),n={x:e};return i.a.runKernelFunc(t=>t.logicalNot(e),n,null,p.Bb)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ue=Object(d.a)({logicalOr_:function(t,e){const n=Object(l.a)(t,"a","logicalOr","bool"),r=Object(l.a)(e,"b","logicalOr","bool");Yt(n.shape,r.shape);const a={a:n,b:r};return i.a.runKernelFunc(t=>t.logicalOr(n,r),a,null,p.Cb)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qe=Object(d.a)({logicalXor_:function(t,e){const n=Object(l.a)(t,"a","logicalXor","bool"),r=Object(l.a)(e,"b","logicalXor","bool");return Yt(n.shape,r.shape),ze(Ue(t,e),Ve(ze(t,e)))}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ke=Object(d.a)({maxPool_:function(t,e,n,r,a){const s=Object(l.a)(t,"x","maxPool");let o=s,u=!1;3===s.rank&&(u=!0,o=N(s,[1,s.shape[0],s.shape[1],s.shape[2]])),g.assert(4===o.rank,()=>`Error in maxPool: input must be rank 4 but got rank ${o.rank}.`),g.assert(H(n,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`),null!=a&&g.assert(g.isInt(r),()=>`Error in maxPool: pad must be an integer when using, dimRoundingMode ${a} but got pad ${r}.`);const c={x:o},d={filterSize:e,strides:n,pad:r,dimRoundingMode:a},h=i.a.runKernelFunc((t,s)=>{const i=R(o.shape,e,n,1,r,a);let u;return u=1===i.filterWidth&&1===i.filterHeight&&g.arraysEqual(i.inShape,i.outShape)?o.clone():t.maxPool(o,i),s([o,u]),u},c,null,p.Eb,d);return u?N(h,[h.shape[1],h.shape[2],h.shape[3]]):h}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const We=Object(d.a)({maxPool3d_:function(t,e=[1,1,1],n,r,a,s="NDHWC",o){null==o?o=[1,1,1]:Z("dilations is deprecated, this field will be gone in v3.0.0.");const u=Object(l.a)(t,"x","maxPool3d");let c=u,d=!1;4===u.rank&&(d=!0,c=N(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]])),g.assert(5===c.rank,()=>`Error in maxPool3d: x must be rank 5 but got rank ${c.rank}.`),g.assert("NDHWC"===s,()=>"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+s),g.assert(H(n,o),()=>`Error in maxPool3d: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),null!=a&&g.assert(g.isInt(r),()=>`Error in maxPool3d: pad must be an integer when using, dimRoundingMode ${a} but got pad ${r}.`);const h={x:c},f={filterSize:e,strides:n,pad:r,dimRoundingMode:a,dataFormat:s,dilations:o},m=i.a.runKernelFunc((t,i)=>{null==o&&(o=[1,1,1]);const u=B(c.shape,e,n,o,r,a,s),p=t.maxPool3d(c,u);return i([c,p]),p},h,null,p.Fb,f);return d?N(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const He=Object(d.a)({maxPoolWithArgmax_:function(t,e,n,r,a=!1){const s={x:Object(l.a)(t,"x","maxPoolWithArgmax")},o={filterSize:e,strides:n,pad:r,includeBatchInIndex:a},u=i.a.runKernel(p.Ib,s,o);return{result:u[0],indexes:u[1]}}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ge(t,e="float32"){if("complex64"===e){const e=Ge(t,"float32"),n=Ge(t,"float32");return Object(Et.a)(e,n)}const n=Object(g.makeZerosTypedArray)(Object(g.sizeFromShape)(t),e);return i.a.makeTensor(n,t,e)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ye(t,e="float32"){if("complex64"===e){const e=Ye(t,"float32"),n=Ge(t,"float32");return Object(Et.a)(e,n)}const n=Object(g.makeOnesTypedArray)(Object(g.sizeFromShape)(t),e);return i.a.makeTensor(n,t,e)}
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Je=Object(d.a)({mean_:function(t,e=null,n=!1){const r=Object(l.a)(t,"x","mean"),a=Object(g.parseAxisParam)(e,r.shape),s=function(t,e){const n=[],r=t.length;for(let a=0;a<r;a++)-1===e.indexOf(a)&&n.push(t[a]);return[n,e.map(e=>t[e])]}(r.shape,a)[1],o=Object(g.sizeFromShape)(s);return Ae(t=>{const r=Oe(o),s=r.dtype===t.dtype?t:C(t,r.dtype),i=Ht(s,r);return{value:Be(i,e,n),gradFunc:e=>{const n=t.shape.slice();a.forEach(t=>{n[t]=1});const r=N(e,n);return Ht(at(r,Ye(t.shape,"float32")),o)}}})(r)}});const Ze=Object(d.a)({min_:function(t,e=null,n=!1){const r=Object(l.a)(t,"x","min"),a={x:r},s={axis:e,keepDims:n};return i.a.runKernelFunc((t,a)=>{const s=Object(g.parseAxisParam)(e,r.shape);let o=s;const i=j(o,r.rank);let u=r;null!=i&&(u=S(r,i),o=k(o.length,r.rank));const c=t.min(u,o);null!=i&&u.dispose();let p=c;if(n){const t=x(p.shape,s);p=N(c,t),c.dispose()}return a([r,p]),p},a,null,p.Kb,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xe=Object(d.a)({minimum_:function(t,e){let n=Object(l.a)(t,"a","minimum"),r=Object(l.a)(e,"b","minimum");[n,r]=Object(b.c)(n,r),"bool"===n.dtype&&(n=C(n,"int32"),r=C(r,"int32")),Yt(n.shape,r.shape);const a={a:n,b:r};return i.a.runKernelFunc((t,e)=>{const a=t.minimum(n,r);return e([n,r]),a},a,null,p.Lb)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qe=Object(d.a)({mod_:function(t,e){let n=Object(l.a)(t,"a","mod"),r=Object(l.a)(e,"b","mod");[n,r]=Object(b.c)(n,r);const a={a:n,b:r};return i.a.runKernelFunc((t,e)=>{const a=t.mod(n,r);return e([n,r]),a},a,null,p.Mb)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tn=Object(d.a)({square_:function(t){const e=Object(l.a)(t,"x","square"),n=[e];return i.a.runKernelFunc((t,n)=>(n([e]),t.square(e)),{x:e},null,"Square",{},n,[])}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const en=Object(d.a)({moments_:function(t,e=null,n=!1){t=Object(l.a)(t,"x","moments");const r=Object(g.parseAxisParam)(e,t.shape),a=Je(t,r,n);let s=a.shape;n||(s=x(a.shape,r));const o=tn(Re(C(t,"float32"),N(a,s)));return{mean:a,variance:Je(o,r,n)}}});const nn=Object(d.a)({multiRNNCell_:function(t,e,n,r){const a=Object(l.a)(e,"data","multiRNNCell"),s=Object(l.b)(n,"c","multiRNNCell"),o=Object(l.b)(r,"h","multiRNNCell");let i=a;const u=[];for(let e=0;e<t.length;e++){const n=t[e](i,s[e],o[e]);u.push(n[0]),u.push(n[1]),i=n[1]}const c=[],p=[];for(let t=0;t<u.length;t+=2)c.push(u[t]),p.push(u[t+1]);return[c,p]}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rn=Object(d.a)({multinomial_:function(t,e,n,r=!1){const a=Object(l.a)(t,"logits","multinomial"),s=a.size,o=a.rank;if(s<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+s+".");if(o>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+o);n=n||Math.random();const u=1===o?N(a,[1,-1]):a,c=i.a.runKernelFunc(t=>t.multinomial(u,r,e,n),{logits2D:u});return 1===o?N(c,[c.size]):c}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const an=Object(d.a)({notEqual_:function(t,e){let n=Object(l.a)(t,"a","notEqual"),r=Object(l.a)(e,"b","notEqual");[n,r]=Object(b.c)(n,r),Yt(n.shape,r.shape);const a={a:n,b:r};return i.a.runKernelFunc(t=>t.notEqual(n,r),a,null,p.Sb)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sn=Object(d.a)({oneHot_:function(t,e,n=1,r=0){if(e<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+e);const a=Object(l.a)(t,"indices","oneHot","int32"),s=[...a.shape,e],o={indices:a},u={depth:e,onValue:n,offValue:r};return i.a.runKernelFunc((t,o)=>(o([a]),N(t.oneHot(N(a,[a.size]),e,n,r),s)),o,null,p.Tb,u)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const on=Object(d.a)({onesLike_:function(t){const e=Object(l.a)(t,"x","onesLike"),n={x:e};return i.a.runKernelFunc((t,n)=>{if("complex64"===e.dtype){const t=on(be(e)),n=Xt(me(e));return Object(Et.a)(t,n)}return t.onesLike(e)},n,null,p.Ub)}});const un=Object(d.a)({outerProduct_:function(t,e){const n=Object(l.a)(t,"v1","outerProduct"),r=Object(l.a)(e,"v2","outerProduct");g.assert(1===n.rank&&1===r.rank,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`);const a=N(n,[-1,1]),s=N(r,[1,-1]);return rt(a,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cn=Object(d.a)({pad_:function(t,e,n=0){const r=Object(l.a)(t,"x","pad");if(0===r.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const a={paddings:e,constantValue:n},s={x:r};return i.a.runKernelFunc((t,a)=>(a([r]),t.pad(r,e,n)),s,null,p.Vb,a)}});const pn=Object(d.a)({pad1d_:function(t,e,n=0){return Object(g.assert)(2===e.length,()=>"Invalid number of paddings. Must be length of 2."),cn(t,[e],n)}});const ln=Object(d.a)({pad2d_:function(t,e,n=0){return Object(g.assert)(2===e.length&&2===e[0].length&&2===e[1].length,()=>"Invalid number of paddings. Must be length of 2 each."),cn(t,e,n)}});const dn=Object(d.a)({pad3d_:function(t,e,n=0){return Object(g.assert)(3===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length,()=>"Invalid number of paddings. Must be length of 2 each."),cn(t,e,n)}});const hn=Object(d.a)({pad4d_:function(t,e,n=0){return Object(g.assert)(4===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length&&2===e[3].length,()=>"Invalid number of paddings. Must be length of 2 each."),cn(t,e,n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fn=Object(d.a)({spaceToBatchND_:function(t,e,n){const r=Object(l.a)(t,"x","spaceToBatchND");g.assert(r.rank>=1+e.length,()=>`input rank ${r.rank} should be > than [blockShape] ${e.length}`),g.assert(n.length===e.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${e.length}`),g.assert(r.shape.reduce((t,r,a)=>a>0&&a<=e.length?t&&(r+n[a-1][0]+n[a-1][1])%e[a-1]==0:t,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${e.toString()}`);const a={x:r},s={blockShape:e,paddings:n};return i.a.runKernelFunc(t=>t.spaceToBatchND(r,e,n),a,null,p.xc,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mn=Object(d.a)({pool_:function(t,e,n,r,a,s){null==a&&(a=[1,1]),null==s&&(s=1),0===r&&(r="valid");const o=Object(l.a)(t,"x","maxPool");let i=o,u=!1;3===o.rank&&(u=!0,i=N(o,[1,o.shape[0],o.shape[1],o.shape[2]])),g.assert(H(s,a),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${s} and dilations '${a}'`);const c=R(i.shape,e,s,a,r),p=[c.dilationHeight,c.dilationWidth];let d;d="same"===r?function(t,e){const n=t.map((t,n)=>t+(t-1)*(e[n]-1)).map(t=>t-1),r=n.map(t=>Math.floor(t/2)),a=n.map((t,e)=>t-r[e]);return n.map((t,e)=>[r[e],a[e]])}([c.filterHeight,c.filterWidth],p):[[0,0],[0,0]];const h=1===p[0]&&1===p[1],[f,m]=function(t,e,n){const r=n.map(t=>t[0]),a=n.map(t=>t[1]),s=t.concat(r,a),o=e.map((t,e)=>(t-s[e]%t)%t),i=a.map((t,e)=>t+o[e]),u=e.map((t,e)=>[r[e],i[e]]),c=e.map((t,e)=>[0,o[e]]);return[u,c]}([c.inHeight,c.inWidth],p,d),b=h?r:"valid",y=h?i:fn(i,p,f),O=("avg"===n?()=>Y(y,e,s,b):()=>Ke(y,e,s,b))(),w=h?O:bt(O,p,m);return u?N(w,[w.shape[1],w.shape[2],w.shape[3]]):w}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bn=Object(d.a)({pow_:function(t,e){let n=Object(l.a)(t,"base","pow"),r=Object(l.a)(e,"exp","pow");[n,r]=Object(b.c)(n,r);const a={a:n,b:r};return i.a.runKernelFunc((t,e)=>{const a=t.pow(n,r);return e([n,r,a]),a},a,null,p.Wb)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yn=Object(d.a)({prelu_:function(t,e){const n=Object(l.a)(t,"x","prelu"),r=Object(l.a)(e,"alpha","prelu"),a={x:n,alpha:r};return i.a.runKernelFunc((t,e)=>{const a=t.prelu(n,r);return e([n,r]),a},a,null,p.Xb)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gn(t,e=!1){console.log(t.toString(e))}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const On=Object(d.a)({prod_:function(t,e=null,n=!1){let r=Object(l.a)(t,"x","prod");const a={x:r},s={axis:e,keepDims:n};return i.a.runKernelFunc(t=>{"bool"===r.dtype&&(r=C(r,"int32"));const a=Object(g.parseAxisParam)(e,r.shape),s=j(a,r.rank);let o=a,i=r;null!=s&&(i=S(r,s),o=k(o.length,r.rank));let u=t.prod(i,o);if(n){const t=x(u.shape,a);u=N(u,t)}return u},a,null,p.Yb,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wn=Object(d.a)({rand_:function(t,e,n){const r=Object(g.sizeFromShape)(t);let a=null;if(null==n||"float32"===n)a=new Float32Array(r);else if("int32"===n)a=new Int32Array(r);else{if("bool"!==n)throw new Error("Unknown data type "+n);a=new Uint8Array(r)}for(let t=0;t<r;t++)a[t]=e();return i.a.makeTensor(a,t,n)}});var xn=n(25);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class jn{constructor(t,e,n,r,a){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);const s=a||Math.random();this.random=xn.alea(s.toString())}nextValue(){if(!isNaN(this.nextVal)){const t=this.nextVal;return this.nextVal=NaN,t}let t,e,n=!1;for(;!n;){let r,a,s;do{r=2*this.random()-1,a=2*this.random()-1,s=r*r+a*a}while(s>=1||0===s);const o=Math.sqrt(-2*Math.log(s)/s);t=this.mean+this.stdDev*r*o,e=this.mean+this.stdDev*a*o,this.truncated&&!this.isValidTruncated(t)||(n=!0)}return this.truncated&&!this.isValidTruncated(e)||(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return null==this.dtype||"float32"===this.dtype?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class vn{constructor(t,e,n,r){this.alpha=t,this.beta=1/e,this.dtype=n;const a=r||Math.random();this.randu=xn.alea(a.toString()),this.randn=new jn(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,e,n,r,a,s;for(;;){do{r=this.randn.nextValue(),s=1+this.c*r}while(s<=0);if(s*=s*s,t=r*r,e=1-.331*t*t,n=.5*t+this.d*(1-s+Math.log(s)),a=this.randu(),a<e||Math.log(a)<n)break}return s=1/this.beta*this.d*s,this.alpha<1&&(s*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(s)}convertValue(t){return"float32"===this.dtype?t:Math.round(t)}}class kn{constructor(t=0,e=1,n,r){if(this.canReturnFloat=()=>null==this.dtype||"float32"===this.dtype,this.min=t,this.range=e-t,this.dtype=n,null==r&&(r=Math.random()),"number"==typeof r&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=xn.alea(r)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}const Nn=Object(d.a)({randomGamma_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n=1,r="float32",a){if(null==n&&(n=1),null==r&&(r="float32"),"float32"!==r&&"int32"!==r)throw new Error("Unsupported data type "+r);const s=new vn(e,n,r,a),o=kt(t,r);for(let t=0;t<o.values.length;t++)o.values[t]=s.nextValue();return o.toTensor()}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sn=Object(d.a)({randomNormal_:function(t,e=0,n=1,r,a){if(null!=r&&"bool"===r)throw new Error("Unsupported data type "+r);const s=new jn(e,n,r,!1,a),o=kt(t,r);for(let t=0;t<o.values.length;t++)o.values[t]=s.nextValue();return o.toTensor()}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const En=Object(d.a)({randomUniform_:function(t,e=0,n=1,r="float32",a){const s=kt(t,r),o=new kn(e,n,null,a);for(let t=0;t<s.values.length;t++)s.values[t]=o.nextValue();return s.toTensor()}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tn(t,e){Object(g.assertNonNull)(t);const n=Object(l.c)(t,e);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Object(ge.a)(t,null,n,e)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function In(t,e,n=1,r="float32"){if(0===n)throw new Error("Cannot have a step of zero");const a={start:t,stop:e,step:n,dtype:r};return i.a.runKernelFunc(()=>{if(t===e||t<e&&n<0||e<t&&n>1)return Ge([0],r);const a=Math.abs(Math.ceil((e-t)/n)),s=Object(g.makeZerosTypedArray)(a,r);e<t&&1===n&&(n=-1),s[0]=t;for(let t=1;t<s.length;t++)s[t]=s[t-1]+n;return Tn(s,r)},{},null,p.Zb,a)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _n=Object(d.a)({reciprocal_:function(t){const e=Object(l.a)(t,"x","reciprocal"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.reciprocal(e);return n([e]),r},n,null,p.bc)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dn=Object(d.a)({relu_:function(t){const e=Object(l.a)(t,"x","relu"),n={x:e};return i.a.runKernelFunc((t,n)=>(n([e]),"bool"===e.dtype?C(e,"int32"):t.relu(e)),n,null,p.cc)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const An=Object(d.a)({relu6_:function(t){const e=Object(l.a)(t,"x","relu6"),n={x:e};return i.a.runKernelFunc((t,n)=>(n([e]),"bool"===e.dtype?C(e,"int32"):t.relu6(e)),n,null,p.dc)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fn=Object(d.a)({reverse1d_:function(t){const e=Object(l.a)(t,"x","reverse");return g.assert(1===e.rank,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),ye(e,0)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mn=Object(d.a)({reverse2d_:function(t,e){const n=Object(l.a)(t,"x","reverse");return g.assert(2===n.rank,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),ye(n,e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $n=Object(d.a)({reverse3d_:function(t,e){const n=Object(l.a)(t,"x","reverse");return g.assert(3===n.rank,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),ye(n,e)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cn=Object(d.a)({reverse4d_:function(t,e){const n=Object(l.a)(t,"x","reverse");return g.assert(4===n.rank,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),ye(n,e)}});const Rn=Object(d.a)({split_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n=0){const r=Object(l.a)(t,"x","split"),a={x:r},s={numOrSizeSplits:e,axis:n};return i.a.runKernelFunc((t,a)=>{const s=Object(g.parseAxisParam)(n,r.shape)[0],o=function(t,e,n=0){let r=[];if("number"==typeof e)Object(g.assert)(t.shape[n]%e==0,()=>"Number of splits must evenly divide the axis."),r=new Array(e).fill(t.shape[n]/e);else{const a=e.reduce((t,e)=>(-1===e&&(t+=1),t),0);Object(g.assert)(a<=1,()=>"There should be only one negative value in split array.");const s=e.indexOf(-1);if(-1!==s){const r=e.reduce((t,e)=>e>0?t+e:t);e[s]=t.shape[n]-r}Object(g.assert)(t.shape[n]===e.reduce((t,e)=>t+e),()=>"The sum of sizes must match the size of the axis dimension."),r=e}return r}(r,e,s);return t.split(r,o,s)},a,null,p.zc,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bn=Object(d.a)({rfft_:function(t,e){Object(g.assert)("float32"===t.dtype,()=>"The dtype for rfft() must be real value but got "+t.dtype);let n=t.shape[t.shape.length-1];const r=t.size/n;let a;if(null!=e&&e<n){const r=t.shape.map(t=>0),s=t.shape.map(t=>t);s[t.shape.length-1]=e,a=ht(t,r,s),n=e}else if(null!=e&&e>n){const r=t.shape.map(t=>t);r[t.shape.length-1]=e-n,a=nt([t,Ge(r)],t.shape.length-1),n=e}else a=t;const s=Xt(a),o=N(Object(Et.a)(a,s),[r,n]),i=ue(o),u=Math.floor(n/2)+1,c=be(i),p=me(i),l=Rn(c,[u,n-u],c.shape.length-1),d=Rn(p,[u,n-u],p.shape.length-1),h=a.shape.slice();return h[a.shape.length-1]=u,N(Object(Et.a)(l[0],d[0]),h)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pn=Object(d.a)({round_:function(t){const e=Object(l.a)(t,"x","round"),n={x:e};return i.a.runKernelFunc(t=>t.round(e),n,null,p.lc)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ln=Object(d.a)({rsqrt_:function(t){const e=Object(l.a)(t,"x","rsqrt"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.rsqrt(e);return n([e]),r},n,null,p.mc)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zn=Object(d.a)({selu_:function(t){const e=Object(l.a)(t,"x","selu"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.selu(e);return n([e]),r},n,null,p.pc)}});const Vn=Object(d.a)({separableConv2d_:function(t,e,n,r,a,s=[1,1],o="NHWC"){const i=Object(l.a)(t,"x","separableConv2d"),u=Object(l.a)(e,"depthwiseFilter","separableConv2d"),c=Object(l.a)(n,"pointwiseFilter","separableConv2d");let p=i,d=!1;if(3===i.rank&&(d=!0,p=N(i,[1,i.shape[0],i.shape[1],i.shape[2]])),"NCHW"===o)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");g.assert(4===p.rank,()=>`Error in separableConv2d: input must be rank 4, but got rank ${p.rank}.`),g.assert(4===u.rank,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`),g.assert(4===c.rank,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`),g.assert(1===c.shape[0],()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),g.assert(1===c.shape[1],()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const h=u.shape[2],f=u.shape[3];g.assert(c.shape[2]===h*f,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${h*f}, but got ${c.shape[2]}.`);const m=Ut(p,u,r,a,o,s),b=At(m,c,1,"valid",o);return d?N(b,[b.shape[1],b.shape[2],b.shape[3]]):b}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Un=async function(t,e){const n=Object(l.a)(t,"x","setdiff1d"),r=Object(l.a)(e,"y","setdiff1d");g.assert(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),g.assert(1===n.rank,()=>`x should be 1D tensor, but got x (${n.shape}).`),g.assert(1===r.rank,()=>`y should be 1D tensor, but got y (${r.shape}).`);const a=await n.data(),s=await r.data(),o=new Set(s);let i=0;for(let t=0;t<a.length;t++)o.has(a[t])||i++;const u=new J.b([i],n.dtype),c=new J.b([i],"int32");for(let t=0,e=0;t<a.length;t++)o.has(a[t])||(u.values[e]=a[t],c.values[e]=t,e++);return[u.toTensor(),c.toTensor()]};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qn=Object(d.a)({sign_:function(t){const e=Object(l.a)(t,"x","sign"),n={x:e};return i.a.runKernelFunc(t=>t.sign(e),n,null,p.rc)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kn=Object(d.a)({sin_:function(t){const e=Object(l.a)(t,"x","sin"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.sin(e);return n([e]),r},n,null,p.sc)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wn=Object(d.a)({sinh_:function(t){const e=Object(l.a)(t,"x","sinh"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.sinh(e);return n([e]),r},n,null,p.tc)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hn=Object(d.a)({slice1d_:function(t,e,n){const r=Object(l.a)(t,"x","slice1d");return g.assert(1===r.rank,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),ht(r,[e],[n])}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gn=Object(d.a)({slice2d_:function(t,e,n){const r=Object(l.a)(t,"x","slice2d");return g.assert(2===r.rank,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),ht(r,e,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yn=Object(d.a)({slice3d_:function(t,e,n){const r=Object(l.a)(t,"x","slice3d");return g.assert(3===r.rank,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),ht(r,e,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jn=Object(d.a)({slice4d_:function(t,e,n){const r=Object(l.a)(t,"x","slice4d");return g.assert(4===r.rank,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),ht(r,e,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zn=Object(d.a)({softmax_:function(t,e=-1){const n=Object(l.a)(t,"logits","softmax","float32");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${e}`);const r={logits:n},a={dim:e};return i.a.runKernelFunc((t,r)=>{const a=t.softmax(n,e);return r([a]),a},r,null,p.vc,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xn=Object(d.a)({sqrt_:function(t){const e=Object(l.a)(t,"x","sqrt"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.sqrt(e);return n([e]),r},n,null,p.Ac)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qn=Object(d.a)({squaredDifference_:function(t,e){let n=Object(l.a)(t,"a","squaredDifference"),r=Object(l.a)(e,"b","squaredDifference");[n,r]=Object(b.c)(n,r),Yt(n.shape,r.shape);const a={a:n,b:r};return i.a.runKernelFunc((t,e)=>{const a=t.squaredDifference(n,r);return e([n,r]),a},a,null,p.Cc,{})}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tr=Object(d.a)({squeeze_:function(t,e){const n=Object(l.a)(t,"x","squeeze");return N(n,Object(g.squeezeShape)(n.shape,e).newShape)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const er=Object(d.a)({stack_:function(t,e=0){const n=Object(l.b)(t,"tensors","stack");if(g.assert(n.length>=1,()=>"Pass at least one tensor to tf.stack"),1===n.length)return ae(n[0],e);const r=n[0].rank,a=n[0].shape,s=n[0].dtype;g.assert(e<=r,()=>"Axis must be <= rank of the tensor"),n.forEach(t=>{g.assertShapesMatch(a,t.shape,"All tensors passed to stack must have matching shapes"),g.assert(s===t.dtype,()=>"All tensors passed to stack must have matching dtypes")});const o=n.map(t=>ae(t,e));return nt(o,e)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nr=Object(d.a)({step_:function(t,e=0){const n=Object(l.a)(t,"x","step"),r={x:n},a={alpha:e};return i.a.runKernelFunc(t=>t.step(n,e),r,null,p.Dc,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rr=Object(d.a)({stridedSlice_:function(t,e,n,r,a=0,s=0,o=0,u=0,c=0){null==r&&(r=new Array(e.length));let d=Object(l.a)(t,"x","stridedSlice");const h={x:d},f={begin:e,end:n,strides:r,beginMask:a,endMask:s,ellipsisMask:o,newAxisMask:u,shrinkAxisMask:c};return i.a.runKernelFunc(t=>{const i=ot(o);if(i.length>1)throw new Error("Multiple ellipses in slice is not allowed.");if(0!==o&&0!==u)throw new Error("Using both ellipsisMask and newAxisMask is not yet supported.");if(0!==o&&0!==c)throw new Error("Using both ellipsisMask and shrinkAxisMask is not yet supported.");const p=d.rank-e.length,l=ot(u),h=d.shape.slice();if(l.forEach(t=>{e[t]=0,n[t]=1,h.splice(t,0,1)}),d=N(d,h),i.length&&p>0){const t=i[0],o=p+1;e=function(t,e,n,r,a){const s=[...a],o=ut(n,e);for(let a=0;a<s.length;a++)if(o.indexOf(a)>-1)s[a]=0;else{const o=it(e,n,a);let i=r[o];t&1<<o&&(i=0),s[a]=i}return s}(a,t,o,e,d.shape),n=function(t,e,n,r,a){const s=[...a],o=ut(n,e);for(let a=0;a<s.length;a++)if(o.indexOf(a)>-1)s[a]=Number.MAX_SAFE_INTEGER;else{const o=it(e,n,a);let i=r[o];t&1<<o&&(i=Number.MAX_SAFE_INTEGER),s[a]=i}for(let t=0;t<s.length;t++){const e=a[t];s[t]<0&&(s[t]+=e),s[t]=g.clamp(0,s[t],a[t])}return s}(s,t,o,n,d.shape),r=function(t,e,n,r){const a=[...t];for(let t=a.length;t<r.length;t++)a.push(1);for(let t=0;t<n;t++)0===t?a[e]=1:(a.splice(e,0,1),a.pop());return a}(r,t,o,d.shape)}else for(let t=0;t<d.rank;t++)e[t]=pt(a,e,r,d.shape,t,o),n[t]=lt(s,n,r,d.shape,t,o),r[t]=ct(r,t,o);const f=ot(c);f.forEach(t=>{n[t]=e[t]+1,r[t]=1});const m=function(t,e,n){const r=[];for(let a=0;a<t.length;a++)r[a]=Math.ceil((e[a]-t[a])/n[a]);return r}(e,n,r),b=m.filter((t,e)=>-1===f.indexOf(e));if(r.every(t=>1===t))return N(ht(d,e,m),b);const y=t.stridedSlice(d,e,n,r);return N(y,b)},h,null,p.Ec,f)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ar=Object(d.a)({tan_:function(t){const e=Object(l.a)(t,"x","tan"),n={x:e};return i.a.runKernelFunc((t,n)=>{const r=t.tan(e);return n([e]),r},n,null,p.Hc)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sr(t,e,n){if(Object(g.assertNonNull)(t),null!=e&&2!==e.length)throw new Error("tensor2d() requires shape to have two numbers");const r=Object(l.c)(t,n);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Object(ge.a)(t,e,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function or(t,e,n){if(Object(g.assertNonNull)(t),null!=e&&3!==e.length)throw new Error("tensor3d() requires shape to have three numbers");const r=Object(l.c)(t,n);if(3!==r.length&&1!==r.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Object(ge.a)(t,e,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ir(t,e,n){if(Object(g.assertNonNull)(t),null!=e&&4!==e.length)throw new Error("tensor4d() requires shape to have four numbers");const r=Object(l.c)(t,n);if(4!==r.length&&1!==r.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Object(ge.a)(t,e,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ur(t,e,n){if(Object(g.assertNonNull)(t),null!=e&&5!==e.length)throw new Error("tensor5d() requires shape to have five numbers");const r=Object(l.c)(t,n);if(5!==r.length&&1!==r.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Object(ge.a)(t,e,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cr(t,e,n){if(Object(g.assertNonNull)(t),null!=e&&6!==e.length)throw new Error("tensor6d() requires shape to have six numbers");const r=Object(l.c)(t,n);if(6!==r.length&&1!==r.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||r,Object(ge.a)(t,e,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pr=Object(d.a)({topk_:function(t,e=1,n=!0){const r=Object(l.a)(t,"x","topk");if(0===r.rank)throw new Error("topk() expects the input to be of rank 1 or higher");const a=r.shape[r.shape.length-1];if(e>a)throw new Error(`'k' passed to topk() must be <= the last dimension (${a}) but got `+e);const s={x:r},o={k:e,sorted:n},[u,c]=i.a.runKernelFunc(t=>t.topk(r,e,n),s,null,p.Kc,o);return{values:u,indices:c}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lr=Object(d.a)({truncatedNormal_:function(t,e=0,n=1,r,a){if(null!=r&&"bool"===r)throw new Error("Unsupported data type $ { dtype }");const s=new jn(e,n,r,!0,a),o=kt(t,r);for(let t=0;t<o.values.length;t++)o.values[t]=s.nextValue();return o.toTensor()}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dr=Object(d.a)({unsortedSegmentSum_:function(t,e,n){const r=Object(l.a)(t,"x","unsortedSegmentSum"),a=Object(l.a)(e,"segmentIds","unsortedSegmentSum","int32");Object(g.assert)(Object(g.isInt)(n),()=>"numSegments must be of dtype int");const s={x:r,segmentIds:a},o={numSegments:n};return i.a.runKernelFunc((t,e)=>{const s=t.unsortedSegmentSum(r,a,n);return e([a]),s},s,null,p.Nc,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hr=Object(d.a)({unstack_:function(t,e=0){const n=Object(l.a)(t,"x","unstack");g.assert(e>=-n.shape.length&&e<n.shape.length,()=>`Axis = ${e} is not in [-${n.shape.length}, ${n.shape.length})`),e<0&&(e+=n.shape.length);const r={value:n},a={axis:e};return i.a.runKernelFunc(t=>t.unstack(n,e),r,null,p.Mc,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fr(t,e=!0,n,r){return i.a.makeVariable(t,e,n,r)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mr=
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function(t){const e=Object(l.a)(t,"condition","whereAsync","bool"),n=await e.data(),r=function(t,e){const n=[];for(let t=0;t<e.length;t++)e[t]&&n.push(t);const r=kt(t,"int32"),a=kt([n.length,t.length],"int32");for(let e=0;e<n.length;e++){const s=r.indexToLoc(n[e]),o=e*t.length;a.values.set(s,o)}return a.toTensor()}(e.shape,n);return t!==e&&e.dispose(),r};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const br=async function(t,e,n){const r=Object(l.a)(t,"tensor","boolMask"),a=Object(l.a)(e,"mask","boolMask","bool"),s=null==n?0:n,o=a.rank,i=r.shape;g.assert(o>0,()=>"mask cannot be scalar"),g.assertShapesMatch(i.slice(s,s+o),a.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let t=s;t<s+o;t++)u*=i[t];const c=i.slice(0,s).concat([u],i.slice(s+o)),p=N(r,c),d=N(a,[-1]),h=await mr(d),f=tr(h,[1]),m=le(p,f,s);return t!==r&&r.dispose(),e!==a&&a.dispose(),f.dispose(),p.dispose(),d.dispose(),h.dispose(),m};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yr=Object(d.a)({equalStrict_:function(t,e){Z("strict variants of ops have been deprecated and will be removed in future");const n=Object(l.a)(t,"a","equalStrict"),r=Object(l.a)(e,"b","equalStrict");return Object(g.assertShapesMatch)(n.shape,r.shape,"Error in equalStrict: "),Jt(n,r)}}),gr=Object(d.a)({greaterEqualStrict_:function(t,e){Z("strict variants of ops have been deprecated and will be removed in future");const n=Object(l.a)(t,"a","greaterEqualStrict"),r=Object(l.a)(e,"b","greaterEqualStrict");return Object(g.assertShapesMatch)(n.shape,r.shape,"Error in greaterEqualStrict: "),he(n,r)}}),Or=Object(d.a)({greaterStrict_:function(t,e){Z("strict variants of ops have been deprecated and will be removed in future");const n=Object(l.a)(t,"a","greaterStrict"),r=Object(l.a)(e,"b","greaterStrict");return Object(g.assertShapesMatch)(n.shape,r.shape,"Error in greaterStrict: "),de(n,r)}}),wr=Object(d.a)({lessEqualStrict_:function(t,e){Z("strict variants of ops have been deprecated and will be removed in future");const n=Object(l.a)(t,"a","lessEqualStrict"),r=Object(l.a)(e,"b","lessEqualStrict");return Object(g.assertShapesMatch)(n.shape,r.shape,"Error in lessEqualStrict: "),Ee(n,r)}}),xr=Object(d.a)({lessStrict_:function(t,e){Z("strict variants of ops have been deprecated and will be removed in future");const n=Object(l.a)(t,"a","lessStrict"),r=Object(l.a)(e,"b","lessStrict");return Object(g.assertShapesMatch)(n.shape,r.shape,"Error in lessStrict: "),Se(n,r)}}),jr=Object(d.a)({notEqualStrict_:function(t,e){Z("strict variants of ops have been deprecated and will be removed in future");const n=Object(l.a)(t,"a","notEqualStrict"),r=Object(l.a)(e,"b","notEqualStrict");return Object(g.assertShapesMatch)(n.shape,r.shape,"Error in notEqualStrict: "),an(n,r)}});const vr=Object(d.a)({addStrict_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){Z("strict variants of ops have been deprecated and will be removed in future");const n=Object(l.a)(t,"a","addStrict"),r=Object(l.a)(e,"b","addStrict");return g.assertShapesMatch(n.shape,r.shape,"Error in addStrict: "),y(n,r)}}),kr=Object(d.a)({divStrict_:function(t,e){Z("strict variants of ops have been deprecated and will be removed in future");const n=Object(l.a)(t,"a","div"),r=Object(l.a)(e,"b","div");return g.assertShapesMatch(n.shape,r.shape,"Error in divideStrict: "),Ht(n,r)}}),Nr=Object(d.a)({maximumStrict_:function(t,e){Z("strict variants of ops have been deprecated and will be removed in future");const n=Object(l.a)(t,"a","maximumStrict"),r=Object(l.a)(e,"b","maximumStrict");return g.assertShapesMatch(n.shape,r.shape,"Error in maximumStrict: "),ke(n,r)}}),Sr=Object(d.a)({minimumStrict_:function(t,e){Z("strict variants of ops have been deprecated and will be removed in future");const n=Object(l.a)(t,"a","minimumStrict"),r=Object(l.a)(e,"b","minimumStrict");return g.assertShapesMatch(n.shape,r.shape,"Error in minimumStrict: "),Xe(n,r)}}),Er=Object(d.a)({modStrict_:function(t,e){Z("strict variants of ops have been deprecated and will be removed in future");const n=Object(l.a)(t,"a","modStrict"),r=Object(l.a)(e,"b","modStrict");return g.assertShapesMatch(n.shape,r.shape,"Error in modStrict: "),Qe(n,r)}}),Tr=Object(d.a)({mulStrict_:function(t,e){Z("strict variants of ops have been deprecated and will be removed in future");const n=Object(l.a)(t,"a","mul"),r=Object(l.a)(e,"b","mul");return g.assertShapesMatch(n.shape,r.shape,"Error in multiplyStrict: "),at(n,r)}}),Ir=Object(d.a)({powStrict_:function(t,e){return Z("strict variants of ops have been deprecated and will be removed in future"),g.assertShapesMatch(t.shape,e.shape,"Error in powStrict: "),bn(t,e)}}),_r=Object(d.a)({squaredDifferenceStrict_:function(t,e){Z("strict variants of ops have been deprecated and will be removed in future");const n=Object(l.a)(t,"a","squaredDifferenceStrict"),r=Object(l.a)(e,"b","squaredDifferenceStrict");return g.assertShapesMatch(n.shape,r.shape,"Error in squaredDifferenceStrict: "),Qn(n,r)}}),Dr=Object(d.a)({subStrict_:function(t,e){Z("strict variants of ops have been deprecated and will be removed in future");const n=Object(l.a)(t,"a","subStrict"),r=Object(l.a)(e,"b","subStrict");return g.assertShapesMatch(n.shape,r.shape,"Error in subStrict: "),Re(n,r)}});const Ar=Object(d.a)({norm_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e="euclidean",n=null,r=!1){const a=function t(e,n,r=null){if(0===e.rank)return h(e);if(1!==e.rank&&null===r)return t(N(e,[-1]),n,r);if(1===e.rank||"number"==typeof r||Array.isArray(r)&&1===r.length){if(1===n)return Be(h(e),r);if(n===1/0)return Ce(h(e),r);if(n===-1/0)return Ze(h(e),r);if("euclidean"===n||2===n)return Xn(Be(bn(h(e),Oe(2,"int32")),r));throw new Error("Error in norm: invalid ord value: "+n)}if(Array.isArray(r)&&2===r.length){if(1===n)return Ce(Be(h(e),r[0]),r[1]-1);if(n===1/0)return Ce(Be(h(e),r[1]),r[0]);if(n===-1/0)return Ze(Be(h(e),r[1]),r[0]);if("fro"===n||"euclidean"===n)return Xn(Be(tn(e),r));throw new Error("Error in norm: invalid ord value: "+n)}throw new Error("Error in norm: invalid axis: "+r)}(t=Object(l.a)(t,"x","norm"),e,n);let s=a.shape;if(r){const e=Object(g.parseAxisParam)(n,t.shape);s=x(a.shape,e)}return N(a,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fr=Object(d.a)({movingAverage_:function(t,e,n,r,a=!0){const s=Object(l.a)(t,"v","movingAverage"),o=Object(l.a)(e,"x","movingAverage"),i=Object(l.a)(n,"decay","movingAverage");Object(b.a)(s,o),g.assert(g.arraysEqual(s.shape,o.shape),()=>"Shape mismatch in v and x");const u=Oe(1),c=Re(u,i);let p=at(Re(o,s),c);if(a){g.assert(null!=r,()=>"When using zeroDebias: true, step is required.");const t=Object(l.a)(r,"step","movingAverage");p=Ht(p,Re(u,bn(i,t)))}return y(s,p)}});function Mr(t,e,n){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);if("int32"!==e.dtype)throw new Error("The dtype of 'indices' should be int32, but got dtype: "+e.dtype);if(n.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+n);if(0===n.length){if(0===e.size)throw new Error("Indices specified for empty output. indices shape: "+e.shape);if(0===t.size)throw new Error("Updates specified for empty output. updates shape: "+t.shape)}!function(t,e,n){const r=e.rank>1?e.shape[e.rank-1]:1,a=e.rank>1?e.rank-1:1,s="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+n.shape+`, indices.shape: ${e.shape}, shape: ${t}`+`, sliceDim: ${r}, and batchDim: ${a}.`;if(n.rank<a)throw new Error(s+` update.rank < ${a}. `);if(t.length<r+(n.rank-a))throw new Error(s+" Output shape length < "+(r+(n.rank-a)));if(n.rank!==a+t.length-r)throw new Error(s+" update.rank != "+(a+t.length-r));for(let t=0;t<a;++t)if(n.shape[t]!==e.shape[t])throw new Error(s+` updates.shape[${t}] (${n.shape[t]}) != indices.shape[${t}] (${e.shape[t]}).`);for(let e=0;e<n.rank-a;++e)if(n.shape[e+a]!==t[e+r])throw new Error(s+` updates.shape[${e+a}] (${n.shape[e+a]}) != shape[${e+a}] (${t[e+a]})`)}(n,e,t)}const $r=Object(d.a)({scatterND_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){const r=Object(l.a)(t,"indices","scatterND","int32"),a=Object(l.a)(e,"updates","scatterND");Mr(a,r,n);const s={indices:r,updates:a},o={shape:n};return i.a.runKernelFunc(t=>t.scatterND(r,a,n),s,null,p.nc,o)}});const Cr=Object(d.a)({sparseToDense_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r=0){const a=Object(l.a)(t,"sparseIndices","sparseToDense","int32"),s=Object(l.a)(e,"sparseValues","sparseToDense"),o=Object(l.a)(r,"defaultValue","sparseToDense",s.dtype);!function(t,e,n,r){if("int32"!==t.dtype)throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${t.shape}.`);const a=t.rank>0?t.shape[0]:1,s=t.rank>1?t.shape[1]:1;if(n.length!==s)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${s}.`);const o=e.size;if(0!==e.rank&&(1!==e.rank||o!==a))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${a}]`);if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(a,s,n,o);const u={sparseIndices:a,sparseValues:s,defaultValue:o},c={outputShape:n};return i.a.runKernelFunc(t=>t.sparseToDense(a,s,n,o),u,null,p.yc,c)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rr=Object(d.a)({gatherND_:function(t,e){const n=Object(l.a)(e,"indices","gatherND","int32"),r=Object(l.a)(t,"x","gatherND"),a={params:r,indices:n};return i.a.runKernelFunc(t=>t.gatherND(r,n),a,null,p.ib)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Br=Object(d.a)({dropout_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r){const a=Object(l.a)(t,"x","dropout");if(g.assert("float32"===a.dtype,()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${a.dtype} tensor instead.`),g.assert(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),0===e)return t instanceof J.a?a.clone():a;const s=function(t,e){if(null==e)return t.shape.slice();if(g.arraysEqual(t.shape,e))return e;if(t.shape.length===e.length){const n=[];for(let r=0;r<t.shape.length;r++)null==e[r]&&null!=t.shape[r]?n.push(t.shape[r]):n.push(e[r]);return n}return e}(a,n),o=1-e,i=Ht(pe(y(En(s,0,1,"float32",r),o)),o);return at(a,i)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pr(t){return Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2))))}function Lr(t,e,n){const r=1-t%2,a=new Float32Array(t);for(let s=0;s<t;++s){const o=2*Math.PI*s/(t+r-1);a[s]=e-n*Math.cos(o)}return Tn(a,"float32")}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zr=async function(t,e,n=1){const r=Object(l.a)(t,"predictions","inTopK"),a=Object(l.a)(e,"targets","inTopK");Object(g.assert)(r.rank>1,()=>"inTopK() expects the predictions to be of rank 2 or higher, but got "+r.rank),Object(g.assert)(r.rank-1===a.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${a.rank}`),Object(g.assertShapesMatch)(r.shape.slice(0,r.shape.length-1),a.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const s=r.shape[r.shape.length-1];Object(g.assert)(n>0&&n<=s,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${s}), but got ${n}`);const o=await r.data(),i=await a.data(),[u,c]=[o.length/s,s],p=Object(g.getTypedArrayFromDType)("bool",u);for(let t=0;t<u;t++){const e=t*c,r=o.subarray(e,e+c),a=[];for(let t=0;t<r.length;t++)a.push({value:r[t],index:t});a.sort((t,e)=>e.value-t.value),p[t]=0;for(let e=0;e<n;e++)if(a[e].index===i[t]){p[t]=1;break}}return t!==r&&r.dispose(),e!==a&&a.dispose(),Object(et.a)(p,a.shape,"bool")};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vr=Object(d.a)({conv2DBackpropFilter_:function(t,e,n,r,a,s="NHWC",o){let u=t;3===t.rank&&(u=N(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let c=e;3===c.rank&&(c=N(e,[1,e.shape[0],e.shape[1],e.shape[2]])),g.assert(4===u.rank,()=>"Error in conv2dDerFilter: input must be rank 4, but got shape "+u.shape+"."),g.assert(4===c.rank,()=>"Error in conv2dDerFilter: dy must be rank 4, but got shape "+c.shape+"."),g.assert(4===n.length,()=>"Error in conv2dDerFilter: filterShape must be length 4, but got "+n+".");const l="NHWC"===s?u.shape[3]:u.shape[1],d="NHWC"===s?c.shape[3]:c.shape[1];g.assert(l===n[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`),g.assert(d===n[3],()=>`Error in conv2dDerFilter: depth of dy (${d}) must match output depth for filter (${n[3]}).`),null!=o&&g.assert(g.isInt(a),()=>`Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode ${o} but got pad ${a}.`);const h={x:u,dy:c},f={strides:r,pad:a,dataFormat:s,dimRoundingMode:o};return i.a.runKernelFunc(t=>{const e=G(s),i=P(u.shape,n,r,1,a,o,!1,e);return t.conv2dDerFilter(u,c,i)},h,null,p.B,f)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ur(t,e,n){if(null==n||"linear"===n)return t;if("relu"===n)return at(t,nr(e));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function qr(t,e){let n=e;const r=Gt(t.shape,e.shape);return r.length>0&&(n=Be(n,r)),N(n,t.shape)}function Kr(t,e,n){if("linear"===e)return t;if("relu"===e)return Dn(t);if("elu"===e)return ee(t);if("relu6"===e)return An(t);if("prelu"===e)return yn(t,n);throw new Error(`Unknown fused activation ${e}.`)}const Wr=(t,e)=>!(t>0)||"linear"===e;
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hr=Object(d.a)({fusedConv2d_:function({x:t,filter:e,strides:n,pad:r,dataFormat:a="NHWC",dilations:s=[1,1],dimRoundingMode:o,bias:u,activation:c="linear",preluActivationWeights:d}){if(c=c||"linear",!1===Wr(i.a.state.gradientDepth,c)){let i=At(t,e,n,r,a,s,o);return null!=u&&(i=y(i,u)),Kr(i,c,d)}const h=Object(l.a)(t,"x","conv2d"),f=Object(l.a)(e,"filter","conv2d");let m=h,O=!1;3===h.rank&&(O=!0,m=N(h,[1,h.shape[0],h.shape[1],h.shape[2]])),g.assert(4===m.rank,()=>"Error in fused conv2d: input must be rank 4, but got rank "+m.rank+"."),g.assert(4===f.rank,()=>"Error in fused conv2d: filter must be rank 4, but got rank "+f.rank+"."),null!=o&&g.assert(g.isInt(r),()=>`Error in fused conv2d: pad must be an integer when using, dimRoundingMode ${o} but got pad ${r}.`),g.assert(m.shape[3]===f.shape[2],()=>`Error in conv2d: depth of input (${m.shape[3]}) must match input depth for filter ${f.shape[2]}.`),g.assert(H(n,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`),g.assert("NHWC"===a,()=>`Error in conv2d: got dataFormat of ${a} but only NHWC is currently supported.`);const w=P(m.shape,f.shape,n,s,r,o);let x,j;null!=u&&(x=Object(l.a)(u,"bias","fused conv2d"),[x]=Object(b.c)(x,h),Yt(w.outShape,x.shape)),null!=d&&(j=Object(l.a)(d,"prelu weights","fused conv2d"));const v=(t,e)=>{const[a,o,i,u]=e,p=Ur(t,i,c);g.assert(W(s),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);const l=[Mt(o.shape,p,a,n,r),Vr(o,p,a.shape,n,r)];if(null!=u){const t=qr(u,p);l.push(t)}return l},k=t=>t.fusedConv2d({input:m,filter:f,convInfo:w,bias:x,activation:c,preluActivationWeights:j}),S={x:m,filter:f,bias:x,preluActivationWeights:j},E={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o,activation:c};if(null==u){return Ae((t,e,n)=>{let r=i.a.runKernelFunc(k,S,null,p.gb,E);return n([e,t,r]),O&&(r=N(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:v}})(m,f)}return Ae((t,e,n,r)=>{let a=i.a.runKernelFunc(k,S,null,p.gb,E);return r([e,t,a,n]),O&&(a=N(a,[a.shape[1],a.shape[2],a.shape[3]])),{value:a,gradFunc:v}})(m,f,x)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gr=Object(d.a)({depthwiseConv2dNativeBackpropFilter_:function(t,e,n,r){let a=t;3===t.rank&&(a=N(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let s=e;3===s.rank&&(s=N(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const o={x:a,dy:s};return i.a.runKernelFunc(t=>t.depthwiseConv2DDerFilter(a,s,r),o,null,p.M)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yr=Object(d.a)({depthwiseConv2dNativeBackpropInput_:function(t,e,n,r){let a=e,s=!1;3===e.rank&&(s=!0,a=N(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const o={dy:a},u=i.a.runKernelFunc(t=>t.depthwiseConv2DDerInput(a,n,r),o,null,p.N);return s?N(u,[u.shape[1],u.shape[2],u.shape[3]]):u}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jr=Object(d.a)({fusedDepthwiseConv2d_:function({x:t,filter:e,strides:n,pad:r,dataFormat:a="NHWC",dilations:s=[1,1],dimRoundingMode:o,bias:u,activation:c="linear",preluActivationWeights:d}){if(!1===Wr(i.a.state.gradientDepth,c)){let i=Ut(t,e,n,r,a,s,o);return null!=u&&(i=y(i,u)),Kr(i,c,d)}const h=Object(l.a)(t,"x","depthwiseConv2d"),f=Object(l.a)(e,"filter","depthwiseConv2d");let m=h,O=!1;3===h.rank&&(O=!0,m=N(h,[1,h.shape[0],h.shape[1],h.shape[2]])),g.assert(4===m.rank,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${m.rank}.`),g.assert(4===f.rank,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${f.rank}.`),g.assert(m.shape[3]===f.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${m.shape[3]}) must match the inChannels dimension in filter ${f.shape[2]}.`),null==s&&(s=[1,1]),g.assert(H(n,s),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`),null!=o&&g.assert(g.isInt(r),()=>`Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode ${o} but got pad ${r}.`);const w=P(m.shape,f.shape,n,s,r,o,!0);let x,j;null!=u&&(x=Object(l.a)(u,"bias","fused conv2d"),[x]=Object(b.c)(x,h),Yt(w.outShape,x.shape)),null!=d&&(j=Object(l.a)(d,"prelu weights","fused depthwiseConv2d"));const v=(t,e)=>{g.assert(W(s),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);const[n,r,a,o]=e,i=Ur(t,a,c),u=Yr(r.shape,i,n,w),p=Gr(r,i,n.shape,w);if(null!=o){return[u,p,qr(x,i)]}return[u,p]},k=t=>t.fusedDepthwiseConv2D({input:m,filter:f,convInfo:w,bias:x,activation:c,preluActivationWeights:j}),S={x:m,filter:f,bias:x,preluActivationWeights:j},E={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o,activation:c};if(null==u){return Ae((t,e,n)=>{let r=i.a.runKernelFunc(k,S,null,p.hb,E);return n([e,t,r]),O&&(r=N(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:v}})(m,f)}return Ae((t,e,n,r)=>{let a=i.a.runKernelFunc(k,S,null,p.hb,E);return r([e,t,a,n]),O&&(a=N(a,[a.shape[1],a.shape[2],a.shape[3]])),{value:a,gradFunc:v}})(m,f,x)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zr=Object(d.a)({fusedMatMul_:function({a:t,b:e,transposeA:n=!1,transposeB:r=!1,bias:a,activation:s="linear",preluActivationWeights:o}){if(!1===Wr(i.a.state.gradientDepth,s)){let i=rt(t,e,n,r);return null!=a&&(i=y(i,a)),Kr(i,s,o)}let u=Object(l.a)(t,"a","fused matMul"),c=Object(l.a)(e,"b","fused matMul");[u,c]=Object(b.c)(u,c);const d=n?u.shape[u.rank-2]:u.shape[u.rank-1],h=r?c.shape[c.rank-1]:c.shape[c.rank-2],f=n?u.shape[u.rank-1]:u.shape[u.rank-2],m=r?c.shape[c.rank-2]:c.shape[c.rank-1],O=u.shape.slice(0,-2),w=c.shape.slice(0,-2),x=g.sizeFromShape(O),j=g.sizeFromShape(w);g.assert(u.rank>=2&&c.rank>=2&&u.rank===c.rank,()=>`Error in fused matMul: inputs must have the same rank of at least 2, got ranks ${u.rank} and ${c.rank}.`),g.assert(g.arraysEqual(O,w),()=>`Error in fused matMul: outer dimensions (${O}) and (${w}) of Tensors with shapes ${u.shape} and `+c.shape+" must match."),g.assert(d===h,()=>`Error in fused matMul: inner shapes (${d}) and (${h}) of Tensors with shapes ${u.shape} and ${c.shape} and transposeA=${n} and transposeB=${r} must match.`);const v=u.shape.slice(0,-2).concat([f,m]),k=N(u,n?[x,d,f]:[x,f,d]),S=N(c,r?[j,m,h]:[j,h,m]);let E,T;null!=a&&(E=Object(l.a)(a,"bias","fused matMul"),[E]=Object(b.c)(E,u),Yt(v,E.shape)),null!=o&&(T=Object(l.a)(o,"prelu weights","fused matMul"));const I=(t,e)=>{const[o,i,u,c]=e,p=Ur(N(t,u.shape),u,s);let l,d;if(n||r?!n&&r?(l=rt(p,i,!1,!1),d=rt(p,o,!0,!1)):n&&!r?(l=rt(i,p,!1,!0),d=rt(o,p,!1,!1)):(l=rt(i,p,!0,!0),d=rt(p,o,!0,!0)):(l=rt(p,i,!1,!0),d=rt(o,p,!0,!1)),null!=a){return[l,d,qr(c,p)]}return[l,d]},_=t=>t.fusedBatchMatMul({a:k,b:S,transposeA:n,transposeB:r,bias:E,activation:s,preluActivationWeights:T}),D={a:k,b:S,bias:E,preluActivationWeights:T},A={transposeA:n,transposeB:r,activation:s};if(null==a){return Ae((t,e,n)=>{const r=i.a.runKernelFunc(_,D,null,p.Pc,A);return n([t,e,r]),{value:N(r,v),gradFunc:I}})(k,S)}return Ae((t,e,n,r)=>{const a=i.a.runKernelFunc(_,D,null,p.Pc,A);return r([t,e,a,n]),{value:N(a,v),gradFunc:I}})(k,S,E)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xr=Object(d.a)({hammingWindow_:function(t){return Lr(t,.54,.46)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qr=Object(d.a)({hannWindow_:function(t){return Lr(t,.5,.5)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ta=Object(d.a)({frame_:function(t,e,n,r=!1,a=0){let s=0;const o=[];for(;s+e<=t.size;)o.push(ht(t,s,e)),s+=n;if(r)for(;s<t.size;){const r=s+e-t.size,i=nt([ht(t,s,e-r),ce([r],a)]);o.push(i),s+=n}return 0===o.length?sr([],[0,e]):N(nt(o),[o.length,e])}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ea=Object(d.a)({stft_:function(t,e,n,r,a=Qr){null==r&&(r=Pr(e));const s=ta(t,e,n),o=at(s,a(e)),i=[];for(let t=0;t<s.shape[0];t++)i.push(Bn(ht(o,[t,0],[1,e]),r));return nt(i)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const na=Object(d.a)({cropAndResize_:function(t,e,n,r,a,s){const o=Object(l.a)(t,"image","cropAndResize"),u=Object(l.a)(e,"boxes","cropAndResize","float32"),c=Object(l.a)(n,"boxInd","cropAndResize","int32");a=a||"bilinear",s=s||0;const d=u.shape[0];g.assert(4===o.rank,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),g.assert(2===u.rank&&4===u.shape[1],()=>`Error in cropAndResize: boxes must be have size [${d},4] but had shape ${u.shape}.`),g.assert(1===c.rank&&c.shape[0]===d,()=>`Error in cropAndResize: boxInd must be have size [${d}] but had shape ${u.shape}.`),g.assert(2===r.length,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),g.assert(r[0]>=1&&r[1]>=1,()=>"cropSize must be atleast [1,1], but was "+r),g.assert("bilinear"===a||"nearest"===a,()=>"method must be bilinear or nearest, but was "+a);const h={image:o,boxes:u,boxInd:c},f={method:a,extrapolationValue:s,cropSize:r};return i.a.runKernelFunc(t=>t.cropAndResize(o,u,c,r,a,s),h,null,p.I,f)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ra=Object(d.a)({flipLeftRight_:function(t){const e=Object(l.a)(t,"image","flipLeftRight","float32");g.assert(4===e.rank,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const n={image:e};return i.a.runKernel(p.bb,n,{})}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aa=Object(d.a)({rotateWithOffset_:function(t,e,n=0,r=.5){const a=Object(l.a)(t,"image","rotateWithOffset","float32");g.assert(4===a.rank,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${a.rank}.`);const s={image:a},o={radians:e,fillValue:n,center:r};return i.a.runKernel(p.kc,s,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sa(t,e,n,r,a,s){null==r&&(r=.5),null==a&&(a=Number.NEGATIVE_INFINITY),null==s&&(s=0);const o=t.shape[0];return n=Math.min(n,o),g.assert(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),g.assert(2===t.rank,()=>`boxes must be a 2D tensor, but was of rank '${t.rank}'`),g.assert(4===t.shape[1],()=>"boxes must have 4 columns, but 2nd dimension was "+t.shape[1]),g.assert(1===e.rank,()=>"scores must be a 1D tensor"),g.assert(e.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was `+e.shape[0]),g.assert(0<=s&&s<=1,()=>`softNmsSigma must be in [0, 1], but was '${s}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:a,softNmsSigma:s}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oa=Object(d.a)({nonMaxSuppression_:function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY){const s=Object(l.a)(t,"boxes","nonMaxSuppression"),o=Object(l.a)(e,"scores","nonMaxSuppression"),u=sa(s,o,n,r,a);n=u.maxOutputSize,r=u.iouThreshold,a=u.scoreThreshold;const c={maxOutputSize:n,iouThreshold:r,scoreThreshold:a};return i.a.runKernelFunc(t=>t.nonMaxSuppression(s,o,n,r,a),{boxes:s,scores:o},null,p.Pb,c)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ia(t,e,n){const r=function(t,e,n){return function(t,e,n){let r=0,a=t.length,s=0,o=!1;for(;r<a;){s=r+(a-r>>>1);const i=n(e,t[s]);i>0?r=s+1:(a=s,o=!i)}return o?r:-r-1}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */(t,e,n||ua)}(t,e,n),a=r<0?-(r+1):r;t.splice(a,0,e)}function ua(t,e){return t>e?1:t<e?-1:0}function ca(t,e,n,r,a,s,o=!1,i=!1,u=!1){const c=[];for(let t=0;t<e.length;t++)e[t]>a&&c.push({score:e[t],boxIndex:t,suppressBeginIndex:0});c.sort(da);const p=s>0?-.5/s:0,l=[],d=[];for(;l.length<n&&c.length>0;){const e=c.pop(),{score:n,boxIndex:s,suppressBeginIndex:o}=e;if(n<a)break;let i=!1;for(let n=l.length-1;n>=o;--n){const o=pa(t,s,l[n]);if(o>=r){i=!0;break}if(e.score=e.score*la(r,p,o),e.score<=a)break}e.suppressBeginIndex=l.length,i||(e.score===n?(l.push(s),d.push(e.score)):e.score>a&&ia(c,e,da))}const h=l.length,f=n-h;i&&f>0&&(l.push(...new Array(f).fill(0)),d.push(...new Array(f).fill(0)));const m={selectedIndices:Tn(l,"int32")};return o&&(m.selectedScores=Tn(d,"float32")),u&&(m.validOutputs=Oe(h,"int32")),m}function pa(t,e,n){const r=t.subarray(4*e,4*e+4),a=t.subarray(4*n,4*n+4),s=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(a[0],a[2]),p=Math.min(a[1],a[3]),l=Math.max(a[0],a[2]),d=Math.max(a[1],a[3]),h=(i-s)*(u-o),f=(l-c)*(d-p);if(h<=0||f<=0)return 0;const m=Math.max(s,c),b=Math.max(o,p),y=Math.min(i,l),g=Math.min(u,d),O=Math.max(y-m,0)*Math.max(g-b,0);return O/(h+f-O)}function la(t,e,n){const r=Math.exp(e*n*n);return n<=t?r:0}function da(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ha=async function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY){const s=Object(l.a)(t,"boxes","nonMaxSuppressionAsync"),o=Object(l.a)(e,"scores","nonMaxSuppressionAsync"),i=sa(s,o,n,r,a);n=i.maxOutputSize,r=i.iouThreshold,a=i.scoreThreshold;const u=await Promise.all([s.data(),o.data()]),c=function(t,e,n,r,a){return ca(t,e,n,r,a,0).selectedIndices}(u[0],u[1],n,r,a);return s!==t&&s.dispose(),o!==e&&o.dispose(),c};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fa=Object(d.a)({nonMaxSuppressionWithScore_:function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY,s=0){const o=Object(l.a)(t,"boxes","nonMaxSuppression"),u=Object(l.a)(e,"scores","nonMaxSuppression"),c=sa(o,u,n,r,a,s),d={boxes:o,scores:u},h={maxOutputSize:n=c.maxOutputSize,iouThreshold:r=c.iouThreshold,scoreThreshold:a=c.scoreThreshold,softNmsSigma:s=c.softNmsSigma},f=i.a.runKernel(p.Rb,d,h);return{selectedIndices:f[0],selectedScores:f[1]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ma=async function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY,s=0){const o=Object(l.a)(t,"boxes","nonMaxSuppressionAsync"),i=Object(l.a)(e,"scores","nonMaxSuppressionAsync"),u=sa(o,i,n,r,a,s);n=u.maxOutputSize,r=u.iouThreshold,a=u.scoreThreshold,s=u.softNmsSigma;const c=await Promise.all([o.data(),i.data()]),p=function(t,e,n,r,a,s){return ca(t,e,n,r,a,s,!0)}(c[0],c[1],n,r,a,s);return o!==t&&o.dispose(),i!==e&&i.dispose(),p};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ba=Object(d.a)({nonMaxSuppressionPadded_:function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){const o=Object(l.a)(t,"boxes","nonMaxSuppression"),u=Object(l.a)(e,"scores","nonMaxSuppression"),c=sa(o,u,n,r,a,null),d={boxes:o,scores:u},h={maxOutputSize:c.maxOutputSize,iouThreshold:c.iouThreshold,scoreThreshold:c.scoreThreshold,padToMaxOutputSize:s},f=i.a.runKernel(p.Qb,d,h);return{selectedIndices:f[0],validOutputs:f[1]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ya=async function(t,e,n,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){const o=Object(l.a)(t,"boxes","nonMaxSuppressionAsync"),i=Object(l.a)(e,"scores","nonMaxSuppressionAsync"),u=sa(o,i,n,r,a,null),c=u.maxOutputSize,p=u.iouThreshold,d=u.scoreThreshold,[h,f]=await Promise.all([o.data(),i.data()]),m=function(t,e,n,r,a,s){return ca(t,e,n,r,a,0,!1,s,!0)}(h,f,c,p,d,s);return o!==t&&o.dispose(),i!==e&&i.dispose(),m};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ga=Object(d.a)({resizeBilinear_:function(t,e,n=!1){const r=Object(l.a)(t,"images","resizeBilinear");g.assert(3===r.rank||4===r.rank,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${r.rank}.`),g.assert(2===e.length,()=>"Error in resizeBilinear: new shape must 2D, but got shape "+e+".");let a=r,s=!1;3===r.rank&&(s=!0,a=N(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const[o,u]=e,c={images:a},d={alignCorners:n,size:e},h=i.a.runKernelFunc((t,e)=>(e([a]),t.resizeBilinear(a,o,u,n)),c,null,p.fc,d);return s?N(h,[h.shape[1],h.shape[2],h.shape[3]]):h}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Oa=Object(d.a)({resizeNearestNeighbor_:function(t,e,n=!1){const r=Object(l.a)(t,"images","resizeNearestNeighbor");g.assert(3===r.rank||4===r.rank,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${r.rank}.`),g.assert(2===e.length,()=>"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+e+"."),g.assert("float32"===r.dtype||"int32"===r.dtype,()=>"`images` must have `int32` or `float32` as dtype");let a=r,s=!1;3===r.rank&&(s=!0,a=N(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const[o,u]=e,c={images:a},d={alignCorners:n,size:e},h=i.a.runKernelFunc((t,e)=>(e([a]),t.resizeNearestNeighbor(a,o,u,n)),c,null,p.hc,d);return s?N(h,[h.shape[1],h.shape[2],h.shape[3]]):h}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wa=Object(d.a)({bandPart_:function(t,e,n){Object(g.assert)(e%1==0,()=>`bandPart(): numLower must be an integer, got ${e}.`),Object(g.assert)(n%1==0,()=>`bandPart(): numUpper must be an integer, got ${n}.`);const r=Object(l.a)(t,"a","bandPart");Object(g.assert)(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const a=r.shape,[s,o]=r.shape.slice(-2);if(!(e<=s))throw new Error(`bandPart(): numLower (${e}) must not be greater than the number of rows (${s}).`);if(!(n<=o))throw new Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`);e<0&&(e=s),n<0&&(n=o);const i=N(In(0,s,1,"int32"),[-1,1]),u=In(0,o,1,"int32"),c=Re(i,u),p=ze(Ee(c,Oe(+e,"int32")),he(c,Oe(-n,"int32"))),d=Ge([s,o],r.dtype);return N(er(hr(N(r,[-1,s,o])).map(t=>Zt(p,t,d))),a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xa=Object(d.a)({gramSchmidt_:function(t){let e;if(Array.isArray(t)){e=!1,Object(g.assert)(null!=t&&t.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const n=t[0].shape[0];for(let e=1;e<t.length;++e)Object(g.assert)(t[e].shape[0]===n,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[e].shape[0]} vs. ${n})`)}else e=!0,t=Rn(t,t.shape[0],0).map(t=>tr(t,[0]));Object(g.assert)(t.length<=t[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`);const n=[],r=t;for(let e=0;e<t.length;++e)n.push(i.a.tidy(()=>{let t=r[e];if(e>0)for(let r=0;r<e;++r){const e=at(Be(at(n[r],t)),n[r]);t=Re(t,e)}return Ht(t,Ar(t,"euclidean"))}));return e?er(n,0):n}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ja(t,e=!1){return i.a.tidy(()=>{Object(g.assert)(2===t.shape.length,()=>`qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`);const n=t.shape[0],r=t.shape[1];let a=ie(n),s=jt(t);const o=sr([[1]],[1,1]);let u=jt(o);const c=n>=r?r:n;for(let t=0;t<c;++t){const e=s,c=u,l=a;[u,s,a]=i.a.tidy(()=>{const e=ht(s,[t,t],[n-t,1]),i=Ar(e),c=ht(s,[t,t],[1,1]),p=Zt(de(c,0),sr([[-1]]),sr([[1]])),l=Re(c,at(p,i)),d=Ht(e,l);u=1===d.shape[0]?jt(o):nt([o,ht(d,[1,0],[d.shape[0]-1,d.shape[1]])],0);const h=Fe(Ht(rt(p,l),i)),f=ht(s,[t,0],[n-t,r]),m=at(h,u),b=S(u);if(0===t)s=Re(f,rt(m,rt(b,f)));else{const e=Re(f,rt(m,rt(b,f)));s=nt([ht(s,[0,0],[t,r]),e],0)}const y=S(m),g=ht(a,[0,t],[n,a.shape[1]-t]);if(0===t)a=Re(g,rt(rt(g,u),y));else{const e=Re(g,rt(rt(g,u),y));a=nt([ht(a,[0,0],[n,t]),e],1)}return[u,s,a]}),p=[e,c,l],Object(b.b)(p).forEach(t=>t.dispose())}var p;return!e&&n>r&&(a=ht(a,[0,0],[n,r]),s=ht(s,[0,0],[r,r])),[a,s]})}const va=Object(d.a)({qr_:function(t,e=!1){if(Object(g.assert)(t.rank>=2,()=>"qr() requires input tensor to have a rank >= 2, but got rank "+t.rank),2===t.rank)return ja(t,e);{const n=t.shape.slice(0,t.shape.length-2).reduce((t,e)=>t*e),r=hr(N(t,[n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),a=[],s=[];r.forEach(t=>{const[n,r]=ja(t,e);a.push(n),s.push(r)});return[N(er(a,0),t.shape),N(er(s,0),t.shape)]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var ka;!function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"}(ka||(ka={}));const Na=Object(d.a)({computeWeightedLoss_:function(t,e,n=ka.SUM_BY_NONZERO_WEIGHTS){const r=Object(l.a)(t,"losses","computeWeightedLoss");let a=null;null!=e&&(a=Object(l.a)(e,"weights","computeWeightedLoss"));const s=null==a?r:at(r,a);if(n===ka.NONE)return s;if(n===ka.SUM)return Be(s);if(n===ka.MEAN){if(null==a)return Je(s);{const t=r.size/a.size,e=Ht(Be(s),Be(a));return t>1?Ht(e,Oe(t)):e}}if(n===ka.SUM_BY_NONZERO_WEIGHTS){if(null==a)return Ht(Be(s),Oe(r.size));{const t=at(a,Ye(r.shape)),e=C(Be(an(t,Oe(0))),"float32");return Ht(Be(s),e)}}throw Error("Unknown reduction: "+n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sa=Object(d.a)({absoluteDifference_:function(t,e,n,r=ka.SUM_BY_NONZERO_WEIGHTS){const a=Object(l.a)(t,"labels","absoluteDifference"),s=Object(l.a)(e,"predictions","absoluteDifference");let o=null;null!=n&&(o=Object(l.a)(n,"weights","absoluteDifference")),Object(g.assertShapesMatch)(a.shape,s.shape,"Error in absoluteDifference: ");const i=h(Re(a,s));return Na(i,o,r)}});const Ea=Object(d.a)({cosineDistance_:function(t,e,n,r,a=ka.SUM_BY_NONZERO_WEIGHTS){const s=Object(l.a)(t,"labels","cosineDistance"),o=Object(l.a)(e,"predictions","cosineDistance");let i=null;null!=r&&(i=Object(l.a)(r,"weights","cosineDistance")),Object(g.assertShapesMatch)(s.shape,o.shape,"Error in cosineDistance: ");const u=Oe(1),c=Re(u,Be(at(s,o),n,!0));return Na(c,i,a)}});const Ta=Object(d.a)({hingeLoss_:function(t,e,n,r=ka.SUM_BY_NONZERO_WEIGHTS){let a=Object(l.a)(t,"labels","hingeLoss");const s=Object(l.a)(e,"predictions","hingeLoss");let o=null;null!=n&&(o=Object(l.a)(n,"weights","hingeLoss")),Object(g.assertShapesMatch)(a.shape,s.shape,"Error in hingeLoss: ");const i=Oe(1);a=Re(at(Oe(2),a),i);const u=Dn(Re(i,at(a,s)));return Na(u,o,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ia=Object(d.a)({huberLoss_:function(t,e,n,r=1,a=ka.SUM_BY_NONZERO_WEIGHTS){const s=Object(l.a)(t,"labels","huberLoss"),o=Object(l.a)(e,"predictions","huberLoss");let i=null;null!=n&&(i=Object(l.a)(n,"weights","huberLoss")),Object(g.assertShapesMatch)(s.shape,o.shape,"Error in huberLoss: ");const u=Oe(r),c=h(Re(o,s)),p=Xe(c,u),d=Re(c,p),f=y(at(Oe(.5),tn(p)),at(u,d));return Na(f,i,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _a=Object(d.a)({logLoss_:function(t,e,n,r=1e-7,a=ka.SUM_BY_NONZERO_WEIGHTS){const s=Object(l.a)(t,"labels","logLoss"),o=Object(l.a)(e,"predictions","logLoss");let i=null;null!=n&&(i=Object(l.a)(n,"weights","logLoss")),Object(g.assertShapesMatch)(s.shape,o.shape,"Error in logLoss: ");const u=Oe(1),c=Oe(r),p=Fe(at(s,_e(y(o,c)))),d=at(Re(u,s),_e(y(Re(u,o),c))),h=Re(p,d);return Na(h,i,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Da=Object(d.a)({meanSquaredError_:function(t,e,n,r=ka.SUM_BY_NONZERO_WEIGHTS){const a=Object(l.a)(t,"labels","meanSquaredError"),s=Object(l.a)(e,"predictions","meanSquaredError");let o=null;null!=n&&(o=Object(l.a)(n,"weights","meanSquaredError")),Object(g.assertShapesMatch)(a.shape,s.shape,"Error in meanSquaredError: ");const i=Qn(a,s);return Na(i,o,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Aa=Object(d.a)({sigmoidCrossEntropy_:function(t,e,n,r=0,a=ka.SUM_BY_NONZERO_WEIGHTS){let s=Object(l.a)(t,"multiClassLabels","sigmoidCrossEntropy");const o=Object(l.a)(e,"logits","sigmoidCrossEntropy");let i=null;if(null!=n&&(i=Object(l.a)(n,"weights","sigmoidCrossEntropy")),Object(g.assertShapesMatch)(s.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const t=Oe(r),e=Oe(1),n=Oe(.5);s=y(at(s,Re(e,t)),at(n,t))}const u=function(t,e){const n=Object(l.a)(t,"labels","sigmoidCrossEntropyWithLogits"),r=Object(l.a)(e,"logits","sigmoidCrossEntropyWithLogits");Object(g.assertShapesMatch)(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const a=Dn(r),s=at(r,n),o=De(re(Fe(h(r))));return y(Re(a,s),o)}(s,o);return Na(u,i,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fa=Object(d.a)({softmaxCrossEntropy_:function(t,e,n,r=0,a=ka.SUM_BY_NONZERO_WEIGHTS){let s=Object(l.a)(t,"onehotLabels","softmaxCrossEntropy");const o=Object(l.a)(e,"logits","softmaxCrossEntropy");let i=null;if(null!=n&&(i=Object(l.a)(n,"weights","softmaxCrossEntropy")),Object(g.assertShapesMatch)(s.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const t=Oe(r),e=Oe(1),n=Oe(s.shape[1]);s=y(at(s,Re(e,t)),Ht(t,n))}const u=function(t,e,n=-1){if(-1===n&&(n=e.rank-1),n!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was `+n);return Ae((t,e,r)=>{const a=Le(e,[n],!0),s=Re(C(e,"float32"),a);r([t,s]);const o=Fe(at(s,t));return{value:Be(o,[n]),gradFunc:(t,e)=>{const[r,a]=e,s=x(t.shape,[n]);return[at(N(t,s),Re(C(r,"float32"),re(a))),at(N(t,s),Re(re(a),C(r,"float32")))]}}})(t,e)}(s,o);return Na(u,i,a)}}),Ma={fft:ue,ifft:fe,rfft:Bn,irfft:we},$a={hammingWindow:Xr,hannWindow:Qr,frame:ta,stft:ea},Ca={flipLeftRight:ra,resizeNearestNeighbor:Oa,resizeBilinear:ga,rotateWithOffset:aa,cropAndResize:na,nonMaxSuppression:oa,nonMaxSuppressionAsync:ha,nonMaxSuppressionWithScore:fa,nonMaxSuppressionWithScoreAsync:ma,nonMaxSuppressionPadded:ba,nonMaxSuppressionPaddedAsync:ya},Ra={bandPart:wa,gramSchmidt:xa,qr:va},Ba={absoluteDifference:Sa,computeWeightedLoss:Na,cosineDistance:Ea,hingeLoss:Ta,huberLoss:Ia,logLoss:_a,meanSquaredError:Da,sigmoidCrossEntropy:Aa,softmaxCrossEntropy:Fa};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object(J.e)(a);var Pa=n(10);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class La{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==La.instance&&(La.instance=new La),La.instance}static registerSaveRouter(t){La.getInstance().saveRouters.push(t)}static registerLoadRouter(t){La.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return La.getHandlers(t,"save")}static getLoadHandlers(t,e){return La.getHandlers(t,"load",e)}static getHandlers(t,e,n){const r=[];return("load"===e?La.getInstance().loadRouters:La.getInstance().saveRouters).forEach(e=>{const a=e(t,n);null!==a&&r.push(a)}),r}}const za=t=>La.registerSaveRouter(t),Va=t=>La.registerLoadRouter(t),Ua=t=>La.getSaveHandlers(t),qa=(t,e)=>La.getLoadHandlers(t,e)
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */;class Ka{constructor(){this.managers={}}static getInstance(){return null==Ka.instance&&(Ka.instance=new Ka),Ka.instance}static registerManager(t,e){Object(g.assert)(null!=t,()=>"scheme must not be undefined or null."),t.endsWith("://")&&(t=t.slice(0,t.indexOf("://"))),Object(g.assert)(t.length>0,()=>"scheme must not be an empty string.");const n=Ka.getInstance();Object(g.assert)(null==n.managers[t],()=>`A model store manager is already registered for scheme '${t}'.`),n.managers[t]=e}static getManager(t){const e=this.getInstance().managers[t];if(null==e)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(this.getInstance().managers)}}function Wa(t){if(-1===t.indexOf("://"))throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+Ka.getSchemes().join(","));return{scheme:t.split("://")[0],path:t.split("://")[1]}}async function Ha(t,e,n=!1){Object(g.assert)(t!==e,()=>`Old path and new path are the same: '${t}'`);const r=La.getLoadHandlers(t);Object(g.assert)(r.length>0,()=>`Copying failed because no load handler is found for source URL ${t}.`),Object(g.assert)(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${t}.`);const a=r[0],s=La.getSaveHandlers(e);Object(g.assert)(s.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),Object(g.assert)(s.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${e}.`);const o=s[0],i=Wa(t).scheme,u=Wa(t).path,c=i===Wa(t).scheme,p=await a.load();n&&c&&await Ka.getManager(i).removeModel(u);const l=await o.save(p);return n&&!c&&await Ka.getManager(i).removeModel(u),l.modelArtifactsInfo}async function Ga(){const t=Ka.getSchemes(),e={};for(const n of t){const t=await Ka.getManager(n).listModels();for(const r in t){e[n+"://"+r]=t[r]}}return e}async function Ya(t){const e=Wa(t);return Ka.getManager(e.scheme).removeModel(e.path)}async function Ja(t,e){return Ha(t,e,!1)}async function Za(t,e){return Ha(t,e,!0)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xa(){if(!Object(u.b)().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const t="undefined"==typeof window?self:window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(null==e)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Qa(t){const e=t.result;e.createObjectStore("models_store",{keyPath:"modelPath"}),e.createObjectStore("model_info_store",{keyPath:"modelPath"})}class ts{constructor(t){if(this.indexedDB=Xa(),null==t||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((t,n)=>{const r=this.indexedDB.open("tensorflowjs",1);r.onupgradeneeded=()=>Qa(r),r.onsuccess=()=>{const a=r.result;if(null==e){const e=a.transaction("models_store","readonly"),r=e.objectStore("models_store").get(this.modelPath);r.onsuccess=()=>{if(null==r.result)return a.close(),n(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));t(r.result.modelArtifacts)},r.onerror=t=>(a.close(),n(r.error)),e.oncomplete=()=>a.close()}else{const r=Object(Pa.g)(e),s=a.transaction("model_info_store","readwrite");let o=s.objectStore("model_info_store");const i=o.put({modelPath:this.modelPath,modelArtifactsInfo:r});let u;i.onsuccess=()=>{u=a.transaction("models_store","readwrite");const i=u.objectStore("models_store").put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:r});i.onsuccess=()=>t({modelArtifactsInfo:r}),i.onerror=t=>{o=s.objectStore("model_info_store");const e=o.delete(this.modelPath);e.onsuccess=()=>(a.close(),n(i.error)),e.onerror=t=>(a.close(),n(i.error))}},i.onerror=t=>(a.close(),n(i.error)),s.oncomplete=()=>{null==u?a.close():u.oncomplete=()=>a.close()}}},r.onerror=t=>n(r.error)})}}ts.URL_SCHEME="indexeddb://";const es=t=>{return Object(u.b)().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(ts.URL_SCHEME)?(e=t.slice(ts.URL_SCHEME.length),new ts(e)):null;var e};La.registerSaveRouter(es),La.registerLoadRouter(es);class ns{constructor(){this.indexedDB=Xa()}async listModels(){return new Promise((t,e)=>{const n=this.indexedDB.open("tensorflowjs",1);n.onupgradeneeded=()=>Qa(n),n.onsuccess=()=>{const r=n.result,a=r.transaction("model_info_store","readonly"),s=a.objectStore("model_info_store").getAll();s.onsuccess=()=>{const e={};for(const t of s.result)e[t.modelPath]=t.modelArtifactsInfo;t(e)},s.onerror=t=>(r.close(),e(s.error)),a.oncomplete=()=>r.close()},n.onerror=t=>e(n.error)})}async removeModel(t){var e;return t=(e=t).startsWith(ts.URL_SCHEME)?e.slice(ts.URL_SCHEME.length):e,new Promise((e,n)=>{const r=this.indexedDB.open("tensorflowjs",1);r.onupgradeneeded=()=>Qa(r),r.onsuccess=()=>{const a=r.result,s=a.transaction("model_info_store","readwrite"),o=s.objectStore("model_info_store"),i=o.get(t);let u;i.onsuccess=()=>{if(null==i.result)return a.close(),n(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const r=o.delete(t),s=()=>{u=a.transaction("models_store","readwrite");const r=u.objectStore("models_store").delete(t);r.onsuccess=()=>e(i.result.modelArtifactsInfo),r.onerror=t=>n(i.error)};r.onsuccess=s,r.onerror=t=>(s(),a.close(),n(i.error))}},i.onerror=t=>(a.close(),n(i.error)),s.oncomplete=()=>{null==u?a.close():u.oncomplete=()=>a.close()}},r.onerror=t=>n(r.error)})}}if(Object(u.b)().getBool("IS_BROWSER"))try{Ka.registerManager(ts.URL_SCHEME,new ns)}catch(t){}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rs="tensorflowjs_models",as="info",ss="model_topology",os="weight_specs",is="weight_data",us="model_metadata";function cs(t){return{info:[rs,t,as].join("/"),topology:[rs,t,ss].join("/"),weightSpecs:[rs,t,os].join("/"),weightData:[rs,t,is].join("/"),modelMetadata:[rs,t,us].join("/")}}function ps(t){const e=t.split("/");if(e.length<3)throw new Error("Invalid key format: "+t);return e.slice(1,e.length-1).join("/")}class ls{constructor(t){if(!Object(u.b)().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==t||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=cs(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),r=Object(Pa.g)(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,Object(Pa.a)(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),{modelArtifactsInfo:r}}catch(t){throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(null==t)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==t.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(null==n)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=n;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==r)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=r;const a=this.LS.getItem(this.keys.modelMetadata);if(null!=a){const t=JSON.parse(a);e.format=t.format,e.generatedBy=t.generatedBy,e.convertedBy=t.convertedBy,e.userDefinedMetadata=t.userDefinedMetadata}const s=this.LS.getItem(this.keys.weightData);if(null==s)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=Object(Pa.b)(s),e}}ls.URL_SCHEME="localstorage://";const ds=t=>{return Object(u.b)().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(ls.URL_SCHEME)?(e=t.slice(ls.URL_SCHEME.length),new ls(e)):null;var e};La.registerSaveRouter(ds),La.registerLoadRouter(ds);class hs{constructor(){Object(g.assert)(Object(u.b)().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),Object(g.assert)("undefined"==typeof window||void 0!==window.localStorage,()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},e=rs+"/",n="/"+as;for(let r=0;r<this.LS.length;++r){const a=this.LS.key(r);if(a.startsWith(e)&&a.endsWith(n)){t[ps(a)]=JSON.parse(this.LS.getItem(a))}}return t}async removeModel(t){var e;const n=cs(t=(e=t).startsWith(ls.URL_SCHEME)?e.slice(ls.URL_SCHEME.length):e);if(null==this.LS.getItem(n.info))throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(n.info));return this.LS.removeItem(n.info),this.LS.removeItem(n.topology),this.LS.removeItem(n.weightSpecs),this.LS.removeItem(n.weightData),r}}if(Object(u.b)().getBool("IS_BROWSER"))try{Ka.registerManager(ls.URL_SCHEME,new hs)}catch(t){}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fs(t){return new Promise(t=>setTimeout(t)).then(t)}class ms{constructor(t){if(!Object(u.b)().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(ms.URL_SCHEME)&&(t=t.slice(ms.URL_SCHEME.length)),null!=t&&0!==t.length||(t="model"),this.modelTopologyFileName=t+".json",this.weightDataFileName=t+".weights.bin"}async save(t){if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");const e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),s=null==this.jsonAnchor?document.createElement("a"):this.jsonAnchor;if(s.download=this.modelTopologyFileName,s.href=a,await fs(()=>s.dispatchEvent(new MouseEvent("click"))),null!=t.weightData){const t=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;t.download=this.weightDataFileName,t.href=e,await fs(()=>t.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Object(Pa.g)(t)}}}}ms.URL_SCHEME="downloads://";class bs{constructor(t){if(null==t||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}async load(){const t=this.files[0],e=this.files.slice(1);return new Promise((n,r)=>{const a=new FileReader;a.onload=a=>{const s=JSON.parse(a.target.result),o=s.modelTopology;if(null==o)return void r(new Error("modelTopology field is missing from file "+t.name));0===e.length&&n({modelTopology:o});const i=s.weightsManifest;if(null==i)return void r(new Error("weightManifest field is missing from file "+t.name));let u;try{u=this.checkManifestAndWeightFiles(i,e)}catch(t){return void r(t)}const c=[],p=[],l=[];i.forEach(t=>{t.paths.forEach(t=>{p.push(t),l.push(null)}),c.push(...t.weights)}),i.forEach(t=>{t.paths.forEach(t=>{const e=new FileReader;e.onload=e=>{const r=e.target.result,a=p.indexOf(t);l[a]=r,-1===l.indexOf(null)&&n({modelTopology:o,weightSpecs:c,weightData:Object(Pa.d)(l),format:s.format,generatedBy:s.generatedBy,convertedBy:s.convertedBy,userDefinedMetadata:s.userDefinedMetadata})},e.onerror=e=>r(`Failed to weights data from file of path '${t}'.`),e.readAsArrayBuffer(u[t])})})},a.onerror=e=>r(`Failed to read model topology and weights manifest JSON from file '${t.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),a.readAsText(t)})}checkManifestAndWeightFiles(t,e){const n=[],r=e.map(t=>Object(Pa.c)(t.name)),a={};for(const s of t)s.paths.forEach(t=>{const s=Object(Pa.c)(t);if(-1!==n.indexOf(s))throw new Error(`Duplicate file basename found in weights manifest: '${s}'`);if(n.push(s),-1===r.indexOf(s))throw new Error(`Weight file with basename '${s}' is not provided.`);a[t]=e[r.indexOf(s)]});if(n.length!==e.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${e.length}).`);return a}}function ys(t){return new bs(t)}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gs(t,e,n,r){!function(t){Object(g.assert)(null!=t&&Array.isArray(t)&&t.length>0,()=>"promises must be a none empty array")}(t),function(t,e){Object(g.assert)(t>=0&&t<=1,()=>"Progress fraction must be in range [0, 1], but got startFraction "+t),Object(g.assert)(e>=0&&e<=1,()=>"Progress fraction must be in range [0, 1], but got endFraction "+e),Object(g.assert)(e>=t,()=>`startFraction must be no more than endFraction, but got startFraction ${t} and endFraction `+e)}(n=null==n?0:n,r=null==r?1:r);let a=0;return Promise.all(t.map(s=>(s.then(s=>{const o=n+ ++a/t.length*(r-n);return e(o),s}),s)))}La.registerSaveRouter(t=>Object(u.b)().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(ms.URL_SCHEME)?function(t="model"){return new ms(t)}(t.slice(ms.URL_SCHEME.length)):null);var Os=n(23);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function ws(t,e){null==e&&(e={});const n=null==e.fetchFunc?Object(u.b)().platform.fetch:e.fetchFunc,r=t.map(t=>n(t,e.requestInit,{isBinary:!0})),a=(null==e.onProgress?await Promise.all(r):await gs(r,e.onProgress,0,.5)).map(t=>t.arrayBuffer());return null==e.onProgress?await Promise.all(a):await gs(a,e.onProgress,.5,1)}async function xs(t,e="",n,r){return js(t=>ws(t,{requestInit:r}))(t,e,n)}function js(t){return async(e,n="",r)=>{const a=e.map(()=>!1),s={},o=null!=r?r.map(()=>!1):[],i=[];if(e.forEach((t,e)=>{let n=0;t.weights.forEach(t=>{const u="quantization"in t?t.quantization.dtype:t.dtype,c=Os.a[u]*g.sizeFromShape(t.shape),p=()=>{a[e]=!0,null==s[e]&&(s[e]=[]),s[e].push({manifestEntry:t,groupOffset:n,sizeBytes:c})};null!=r?r.forEach((e,n)=>{e===t.name&&(p(),o[n]=!0)}):p(),i.push(t.name),n+=c})}),!o.every(t=>t)){const t=r.filter((t,e)=>!o[e]);throw new Error("Could not find weights in manifest with names: "+t.join(", ")+". \nManifest JSON has weights with names: "+i.join(", ")+".")}const u=a.reduce((t,e,n)=>(e&&t.push(n),t),[]),c=[];u.forEach(t=>{e[t].paths.forEach(t=>{const e=n+(n.endsWith("/")?"":"/")+t;c.push(e)})});const p=await t(c),l={};let d=0;return u.forEach(t=>{const n=e[t].paths.length;let r=0;for(let t=0;t<n;t++)r+=p[d+t].byteLength;const a=new ArrayBuffer(r),o=new Uint8Array(a);let i=0;for(let t=0;t<n;t++){const e=new Uint8Array(p[d+t]);o.set(e,i),i+=e.byteLength}s[t].forEach(t=>{const e=a.slice(t.groupOffset,t.groupOffset+t.sizeBytes),n=Object(Pa.e)(e,[t.manifestEntry]);for(const t in n)l[t]=n[t]}),d+=n}),l}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vs{constructor(t,e){if(this.DEFAULT_METHOD="POST",null==e&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,null!=e.fetchFunc?(Object(g.assert)("function"==typeof e.fetchFunc,()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=Object(u.b)().platform.fetch,Object(g.assert)(null!=t&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&Object(g.assert)(2===t.length,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,null!=e.requestInit&&null!=e.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n};e.body.append("model.json",new Blob([JSON.stringify(r)],{type:"application/json"}),"model.json"),null!=t.weightData&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin");const a=await this.fetch(this.path,e);if(a.ok)return{modelArtifactsInfo:Object(Pa.g)(t),responses:[a]};throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}async load(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code `+t.status+". Please verify this URL points to the model JSON of the model to load.");let e;try{e=await t.json()}catch(t){let e=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?e+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":e+=" Please make sure the server is serving valid JSON for this request.",new Error(e)}const n=e.modelTopology,r=e.weightsManifest,a=e.generatedBy,s=e.convertedBy,o=e.format,i=e.userDefinedMetadata;if(null==n&&null==r)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);let u,c;if(null!=r){const t=await this.loadWeights(r);[u,c]=t}return{modelTopology:n,weightSpecs:u,weightData:c,userDefinedMetadata:i,generatedBy:a,convertedBy:s,format:o}}async loadWeights(t){const e=Array.isArray(this.path)?this.path[1]:this.path,[n,r]=function(t){const e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),r=t.substring(0,e),a=n>e?t.substring(n):"";return[r+"/",a]}(e),a=this.weightPathPrefix||n,s=[];for(const e of t)s.push(...e.weights);const o=[];t.forEach(t=>{t.paths.forEach(t=>{o.push(a+t+r)})});const i=await ws(o,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[s,Object(Pa.d)(i)]}}function ks(t){return null!=t.match(vs.URL_SCHEME_REGEX)}vs.URL_SCHEME_REGEX=/^https?:\/\//;const Ns=(t,e)=>{if("undefined"==typeof fetch&&(null==e||null==e.fetchFunc))return null;{let n=!0;if(n=Array.isArray(t)?t.every(t=>ks(t)):ks(t),n)return Ss(t,e)}return null};function Ss(t,e){return new vs(t,e)}function Es(t,e){return Ss(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */La.registerSaveRouter(Ns),La.registerLoadRouter(Ns);class Ts{constructor(t){this.modelArtifacts=t}async load(){return this.modelArtifacts}}class Is{constructor(t){this.saveHandler=t}async save(t){return this.saveHandler(t)}}function _s(t,e,n,r){if(1===arguments.length){return null!=t.modelTopology||null!=t.weightSpecs?new Ts(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Ts({modelTopology:t}))}return console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Ts({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:r})}function Ds(t){return new Is(t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var As=n(15);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Fs;async function Ms(t,e){let n=Object(l.a)(t,"img","toPixels");if(!(t instanceof J.a)){const t=n;n=C(t,"int32"),t.dispose()}if(2!==n.rank&&3!==n.rank)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${n.rank}.`);const[r,a]=n.shape.slice(0,2),s=2===n.rank?1:n.shape[2];if(s>4||2===s)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+s);const o=await n.data(),i=Ze(n),u=Ce(n),c=await Promise.all([i.data(),u.data()]),p=c[0],d=c[1],h=p[0],f=d[0];if(i.dispose(),u.dispose(),"float32"===n.dtype){if(h<0||f>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but got range [${h} - ${f}].`)}else{if("int32"!==n.dtype)throw new Error(`Unsupported type for toPixels: ${n.dtype}. Please use float32 or int32 tensors.`);if(h<0||f>255)throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but got range [${h} - ${f}].`)}const m="float32"===n.dtype?255:1,b=new Uint8ClampedArray(a*r*4);for(let t=0;t<r*a;++t){let e,n,r,a;1===s?(e=o[t]*m,n=o[t]*m,r=o[t]*m,a=255):3===s?(e=o[3*t]*m,n=o[3*t+1]*m,r=o[3*t+2]*m,a=255):4===s&&(e=o[4*t]*m,n=o[4*t+1]*m,r=o[4*t+2]*m,a=o[4*t+3]*m);const i=4*t;b[i+0]=Math.round(e),b[i+1]=Math.round(n),b[i+2]=Math.round(r),b[i+3]=Math.round(a)}if(null!=e){e.width=a,e.height=r;const t=e.getContext("2d"),n=new ImageData(b,a,r);t.putImageData(n,0,0)}return n!==t&&n.dispose(),b}const $s=Object(d.a)({fromPixels_:function(t,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==t)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,a=!1,s=!1,o=!1;if(t.data instanceof Uint8Array)n=!0;else if("undefined"!=typeof ImageData&&t instanceof ImageData)r=!0;else if("undefined"!=typeof HTMLVideoElement&&t instanceof HTMLVideoElement)a=!0;else if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement)s=!0;else{if(null==t.getContext)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+t.constructor.name);o=!0}if(a){const e=2;if(a&&t.readyState<e)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.")}if(null!=Object(As.b)(p.eb,i.a.backendName)){const n={pixels:t},r={numChannels:e};return i.a.runKernel(p.eb,n,r)}const[u,c]=a?[t.videoWidth,t.videoHeight]:[t.width,t.height];let l,d;if(o?l=t.getContext("2d").getImageData(0,0,u,c).data:r||n?l=t.data:(s||a)&&(null==Fs&&(Fs=document.createElement("canvas").getContext("2d")),Fs.canvas.width=u,Fs.canvas.height=c,Fs.drawImage(t,0,0,u,c),l=Fs.getImageData(0,0,u,c).data),4===e)d=new Int32Array(l);else{const t=u*c;d=new Int32Array(t*e);for(let n=0;n<t;n++)for(let t=0;t<e;++t)d[n*e+t]=l[4*n+t]}return or(d,[c,u,e],"int32")}}),Cs={kernelName:p.a,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>at(t,nr(C(n,"float32"),-1))}}},Rs={kernelName:p.b,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=tn(C(n,"float32")),r=Xn(Re(Oe(1),e));return Fe(Ht(t,r))}}}},Bs={kernelName:p.c,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=Xn(Re(tn(C(n,"float32")),1));return Ht(t,e)}}}},Ps={kernelName:p.d,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Yt(n.shape,r.shape);return{a:()=>{let e=t;const r=Gt(n.shape,a);return r.length>0&&(e=Be(e,r)),N(e,n.shape)},b:()=>{let e=t;const n=Gt(r.shape,a);return n.length>0&&(e=Be(e,n)),N(e,r.shape)}}}},Ls={kernelName:p.e,saveAllInputs:!0,gradFunc:(t,e)=>{const n={};return e.forEach((e,r)=>{n[r]=()=>t.clone()}),n}},zs={kernelName:p.h,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Xt(n)}}},Vs={kernelName:p.i,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Xt(n)}}},Us={kernelName:p.j,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Ht(t,Xn(Re(Oe(1),tn(C(n,"float32")))))}}},qs={kernelName:p.k,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=Xn(y(Oe(1),tn(C(n,"float32"))));return Ht(t,e)}}}},Ks={kernelName:p.m,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Yt(n.shape,r.shape);return{a:()=>{const e=y(tn(n),tn(r));let s=at(t,Ht(r,e));const o=Gt(n.shape,a);return o.length>0&&(s=Be(s,o)),N(s,n.shape)},b:()=>{const e=y(tn(n),tn(r));let s=Fe(at(t,Ht(n,e)));const o=Gt(r.shape,a);return o.length>0&&(s=Be(s,o)),N(s,r.shape)}}}},Ws={kernelName:p.l,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Ht(t,y(tn(C(n,"float32")),1))}}},Hs={kernelName:p.n,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Ht(t,Re(Oe(1),tn(C(n,"float32"))))}}};
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gs=Object(d.a)({avgPool3dBackprop_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r,a=[1,1,1],s,o){const u=Object(l.a)(t,"dy","avgPool3dBackprop"),c=Object(l.a)(e,"input","avgPool3dBackprop");let d=u,h=c,f=!1;4===c.rank&&(f=!0,d=N(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]]),h=N(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),g.assert(5===d.rank,()=>"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+d.rank+"."),g.assert(5===h.rank,()=>"Error in avgPool3dBackprop: input must be rank 5 but got rank "+h.rank+"."),g.assert(H(r,a),()=>`Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides ${r} and dilations '${a}'`),null!=o&&g.assert(g.isInt(s),()=>`Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode ${o} but got pad ${s}.`);const m={dy:d,input:h},b={filterSize:n,strides:r,dilations:a,pad:s,dimRoundingMode:o},y=i.a.runKernelFunc(t=>{const e=B(h.shape,n,r,a,s,o);return t.avgPool3dBackprop(d,h,e)},m,null,p.q,b);return f?N(y,[y.shape[1],y.shape[2],y.shape[3],y.shape[4]]):y}}),Ys={kernelName:p.p,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{filterSize:a,strides:s,dilations:o,pad:i,dimRoundingMode:u}=n,c=null==o?[1,1,1]:o;return{x:()=>Gs(t,r,a,s,c,i,u)}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Js=Object(d.a)({avgPoolBackprop_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r,a){const s=Object(l.a)(t,"dy","avgPoolBackprop"),o=Object(l.a)(e,"input","avgPoolBackprop");g.assert(o.rank===s.rank,()=>`Rank of input (${o.rank}) does not match rank of dy (${s.rank})`);let u=o,c=s,d=!1;3===o.rank&&(d=!0,u=N(o,[1,o.shape[0],o.shape[1],o.shape[2]]),c=N(s,[1,s.shape[0],s.shape[1],s.shape[2]])),g.assert(4===c.rank,()=>"Error in avgPoolBackprop: dy must be rank 4 but got rank "+c.rank+"."),g.assert(4===u.rank,()=>"Error in avgPoolBackprop: input must be rank 4 but got rank "+u.rank+".");const h={dy:c,input:u},f={filterSize:n,strides:r,pad:a},m=i.a.runKernelFunc(t=>{const e=R(u.shape,n,r,1,a);return t.avgPoolBackprop(c,u,e)},h,null,p.r,f);return d?N(m,[m.shape[1],m.shape[2],m.shape[3]]):m}}),Zs={kernelName:p.o,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{filterSize:a,strides:s,pad:o}=n;return{x:()=>Js(t,r,a,s,o)}}},Xs={kernelName:p.s,inputsToSave:["a","b"],gradFunc:(t,e,n)=>{const[r,a]=e,{transposeA:s,transposeB:o}=n;return s||o?!s&&o?{a:()=>rt(t,a,!1,!1),b:()=>rt(t,r,!0,!1)}:s&&!o?{a:()=>rt(a,t,!1,!0),b:()=>rt(r,t,!1,!1)}:{a:()=>rt(a,t,!0,!0),b:()=>rt(t,r,!0,!0)}:{a:()=>rt(t,a,!1,!0),b:()=>rt(r,t,!0,!1)}}},Qs={kernelName:p.t,gradFunc:(t,e,n)=>{const{blockShape:r,crops:a}=n;return{x:()=>fn(t,r,a)}}},to={kernelName:p.u,gradFunc:(t,e,n)=>{const r=n,a=r.inputShape,s=r.shape,o=Array.from(s);for(let t=a.length-1;t>=0;t--)if(a[t]===s[t])o[t]=1;else if(1!==a[t])throw new Error(`broadcastTo(): [${a}] cannot be broadcast to [${s}].`);const i=[];for(let t=0;t<o.length;t++)o[t]>1&&i.push(t);return{x:()=>Be(t,i,!0)}}},eo={kernelName:p.v,gradFunc:t=>({x:()=>t.clone()})},no={kernelName:p.w,gradFunc:t=>({x:()=>Xt(t)})},ro={kernelName:p.x,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{clipValueMin:a,clipValueMax:s}=n;return{x:()=>Zt(ze(he(r,a),Ee(r,s)),t,Xt(t))}}},ao={kernelName:p.z,saveAllInputs:!0,gradFunc:(t,e,n)=>{const r=e.map(t=>t.shape),{axis:a}=n,s=Object(g.parseAxisParam)(a,e[0].shape)[0],o=r.map(t=>t[s]);return Rn(t,o,s).map(t=>()=>t)}},so={kernelName:p.A,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const[r,a]=e,{dilations:s,strides:o,pad:i,dataFormat:u}=n;return g.assert(W(s),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`),{x:()=>Mt(r.shape,t,a,o,i,u),filter:()=>Vr(r,t,a.shape,o,i,u)}}},oo={kernelName:p.C,inputsToSave:["dy","filter"],gradFunc:(t,e,n)=>{const[r,a]=e,{strides:s,pad:o,dataFormat:i,dimRoundingMode:u}=n;return{dy:()=>At(t,a,s,o,i,1,u),filter:()=>Vr(t,r,a.shape,s,o,i,u)}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const io=Object(d.a)({conv3DBackpropFilter_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r,a){let s=t;4===t.rank&&(s=N(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]));let o=e;4===o.rank&&(o=N(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]])),g.assert(5===s.rank,()=>"Error in conv3dDerFilter: input must be rank 5, but got shape "+s.shape+"."),g.assert(5===o.rank,()=>"Error in conv3dDerFilter: dy must be rank 5, but got shape "+o.shape+"."),g.assert(5===n.length,()=>"Error in conv3dDerFilter: filterShape must be length 5, but got "+n+"."),g.assert(s.shape[4]===n[3],()=>`Error in conv3dDerFilter: depth of input ${s.shape[4]}) must match input depth in filter (${n[3]}.`),g.assert(o.shape[4]===n[4],()=>`Error in conv3dDerFilter: depth of dy (${o.shape[4]}) must match output depth for filter (${n[4]}).`);const u={x:s,y:o},c={strides:r,pad:a};return i.a.runKernelFunc(t=>{const e=L(s.shape,n,r,1,a);return t.conv3dDerFilter(s,o,e)},u,null,p.E,c)}}),uo={kernelName:p.D,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const{dilations:r,strides:a,pad:s}=n;g.assert(W(r),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);const[o,i]=e;return{x:()=>Rt(o.shape,t,i,a,s),filter:()=>io(o,t,i.shape,a,s)}}},co={kernelName:p.G,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>at(Fe(Kn(C(n,"float32"))),t)}}},po={kernelName:p.H,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>at(Wn(C(n,"float32")),t)}}},lo={kernelName:p.J,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{axis:a,exclusive:s,reverse:o}=n;return{x:()=>{const e=j([a],r.rank);let n=zt(t,a,s,!o);return null!=e&&(n=S(n,e)),n}}}},ho={kernelName:p.L,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const{dilations:r,strides:a,pad:s,dimRoundingMode:o}=n,i=null==r?[1,1]:r;g.assert(W(i),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${i}'`);const[u,c]=e;g.assert(4===u.rank,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${u.rank}.`),g.assert(4===c.rank,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${c.rank}.`),g.assert(u.shape[3]===c.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${u.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`),g.assert(H(a,i),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${a} and dilations '${i}'.`),null!=o&&g.assert(g.isInt(s),()=>`Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode ${o} but got pad ${s}.`);const p=P(u.shape,c.shape,a,i,s,o,!0);return{x:()=>Yr(u.shape,t,c,p),filter:()=>Gr(u,t,c.shape,p)}}},fo={kernelName:p.P,inputsToSave:["x","filter"],gradFunc:(t,e,n)=>{const[r,a]=e,s={x:r,filter:a,dy:t},o={x:r,filter:a,dy:t};return{x:()=>i.a.runKernel(p.R,s,n),filter:()=>i.a.runKernel(p.Q,o,n)}}},mo={kernelName:p.S,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Yt(n.shape,r.shape);return{a:()=>{const e=Ht(t,C(r,"float32")),s=Gt(n.shape,a);return s.length>0?N(Be(e,s),n.shape):e},b:()=>{let e=at(t,C(n,"float32"));const s=Gt(r.shape,a);s.length>0&&(e=N(Be(e,s),r.shape));const o=tn(r);return Fe(Ht(e,C(o,"float32")))}}}},bo={kernelName:p.T,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e,r=e=>e.eluDer(t,n),a={dy:t,y:n};return{x:()=>i.a.runKernelFunc(r,a,null,p.U)}}},yo={kernelName:p.W,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e,r=at(re(Fe(tn(n))),2/Math.sqrt(Math.PI));return{x:()=>at(t,r)}}},go={kernelName:p.X,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e;return{x:()=>at(t,n)}}},Oo={kernelName:p.Y,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>at(t,re(n))}}},wo={kernelName:p.cb,gradFunc:t=>({x:()=>Xt(t)})},xo={kernelName:p.db,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Yt(n.shape,r.shape);return{a:()=>{const e=Ht(t,C(r,"float32")),s=Gt(n.shape,a);return s.length>0?N(Be(e,s),n.shape):e},b:()=>{let e=at(t,C(n,"float32"));const s=Gt(r.shape,a);s.length>0&&(e=N(Be(e,s),r.shape));const o=tn(r);return Fe(Ht(e,C(o,"float32")))}}}},jo={kernelName:p.fb,inputsToSave:["x","mean","variance","scale"],gradFunc:(t,e,n)=>{const{varianceEpsilon:r}=n,[a,s,o,i]=e,u=null==i?Oe(1):i,c=Gt(s.shape,a.shape),p=[];if(1===s.rank){for(let t=0;t<a.shape.length-1;++t)p.push(a.shape[t]);p.push(1)}const l=Re(a,s),d=at(t,u),h=Ln(y(o,Oe(r))),f=at(at(at(h,h),h),Oe(-.5));return{x:()=>1===s.rank?N(at(at(t,oe(N(h,[1,1,1,s.shape[0]]),p)),u),a.shape):N(at(at(t,h),u),a.shape),mean:()=>{let t=at(at(h,Oe(-1)),d);return 1===s.rank&&(t=Be(t,c)),N(t,s.shape)},variance:()=>{let t=at(at(f,l),d);return 1===s.rank&&(t=Be(t,c)),N(t,s.shape)},scale:()=>{const e=at(l,h);let n=at(t,e);return 1===s.rank&&(n=Be(n,c)),N(n,s.shape)},offset:()=>{let e=t;return 1===s.rank&&(e=Be(e,c)),N(e,s.shape)}}}},vo={kernelName:p.jb,inputsToSave:["x","indices"],gradFunc:(t,e,n)=>{const[r,a]=e,{axis:s}=n,o=Object(g.parseAxisParam)(s,r.shape)[0];return{x:()=>{const e=r.shape,n=a.size,i=e.slice(0,o),u=i.length,c=e.slice(s,e.length).slice(1),p=c.length,l=ko(0,u),d=ko(u+1,u+1+p),h=No([i,[n],c]),f=N(t,h),m=N(a,[n]),b=No([[u],l,d]),y=S(f,b);let g=dr(y,m,r.shape[o]);const O=v(b);return g=S(g,O),g},indices:()=>a}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ko(t,e){const n=[];for(let r=t;r<e;++r)n.push(r);return n}function No(t){const e=[];for(let n=0;n<t.length;++n)for(let r=0;r<t[n].length;++r)e.push(t[n][r]);return e}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const So={kernelName:p.lb,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e;return{a:()=>Xt(n),b:()=>Xt(r)}}},Eo={kernelName:p.nb,gradFunc:t=>({x:()=>C(t,"float32")})},To={kernelName:p.pb,gradFunc:t=>({x:()=>Xt(t)})},Io={kernelName:p.qb,gradFunc:t=>({x:()=>Xt(t)})},_o={kernelName:p.rb,gradFunc:t=>({x:()=>Xt(t)})},Do={kernelName:p.yb,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Ht(t,y(n,1))}}},Ao={kernelName:p.xb,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Ht(t,C(n,"float32"))}}},Fo={kernelName:p.zb,inputsToSave:[],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r]=e,{axis:a}=n;return{logits:()=>{const e=re(r);return Re(t,at(Be(t,a,!0),e))}}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mo=Object(d.a)({localResponseNormalizationBackprop_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r=5,a=1,s=1,o=.5){const u={x:t,y:e,dy:n},c={depthRadius:r,bias:a,alpha:s,beta:o};return i.a.runKernelFunc(i=>i.LRNGrad(n,t,e,r,a,s,o),u,null,p.tb,c)}}),$o={kernelName:p.sb,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r,a]=e,{depthRadius:s,bias:o,alpha:i,beta:u}=n;return{x:()=>Mo(r,a,t,s,o,i,u)}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Co(t,e,n,r,a){return e.rank<n.rank&&(e=N(e,x(e.shape,r))),t.rank<n.rank&&(t=N(t,x(t.shape,r))),{x:()=>{const r=at(t,C(Jt(n,e),t.dtype));return null==a?r:S(r,a)}}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ro={kernelName:p.Db,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const r=n,{reductionIndices:a}=r,[s,o]=e,i=g.parseAxisParam(a,s.shape),u=j(i,s.rank),c=Co(t,o,s,i,u);return{x:()=>{let t=c.x();return null!=u&&(t=S(t)),t}}}},Bo={kernelName:p.Jb,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e;return{a:()=>at(t,C(he(n,r),"float32")),b:()=>at(t,C(Se(n,r),"float32"))}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Po=Object(d.a)({maxPool3dBackprop_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r,a,s=[1,1,1],o,u){const c=Object(l.a)(t,"dy","maxPool3dBackprop"),d=Object(l.a)(e,"input","maxPool3dBackprop"),h=Object(l.a)(n,"output","maxPool3dBackprop");let f=c,m=d,b=h,y=!1;4===d.rank&&(y=!0,f=N(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]]),m=N(d,[1,d.shape[0],d.shape[1],d.shape[2],d.shape[3]]),b=N(h,[1,h.shape[0],h.shape[1],h.shape[2],h.shape[3]])),g.assert(5===f.rank,()=>"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+f.rank+"."),g.assert(5===m.rank,()=>"Error in maxPool3dBackprop: input must be rank 5 but got rank "+m.rank+"."),g.assert(5===b.rank,()=>"Error in maxPool3dBackprop: output must be rank 5 but got rank "+b.rank+"."),g.assert(H(a,s),()=>`Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides ${a} and dilations '${s}'`),null!=u&&g.assert(g.isInt(o),()=>`Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode ${u} but got pad ${o}.`);const O={dy:f,input:m,output:b},w={filterSize:r,strides:a,dilations:s,pad:o,dimRoundingMode:u},x=i.a.runKernelFunc(t=>{const e=B(m.shape,r,a,s,o,u);return t.maxPool3dBackprop(f,m,b,e)},O,null,p.Gb,w);return y?N(x,[x.shape[1],x.shape[2],x.shape[3],x.shape[4]]):x}}),Lo={kernelName:p.Fb,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r,a]=e,{filterSize:s,strides:o,dilations:i,pad:u,dimRoundingMode:c}=n,p=null==i?[1,1,1]:i;return{x:()=>Po(t,r,a,s,o,p,u,c)}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zo=Object(d.a)({maxPoolBackprop_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r,a,s,o){const u=Object(l.a)(t,"dy","maxPoolBackprop"),c=Object(l.a)(e,"input","maxPoolBackprop"),d=Object(l.a)(n,"output","maxPoolBackprop");g.assert(c.rank===u.rank,()=>`Rank of input (${c.rank}) does not match rank of dy (${u.rank})`),g.assert(4===u.rank,()=>"Error in maxPoolBackprop: dy must be rank 4 but got rank "+u.rank+"."),g.assert(4===c.rank,()=>"Error in maxPoolBackprop: input must be rank 4 but got rank "+c.rank+"."),null!=o&&g.assert(g.isInt(s),()=>`Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode ${o} but got pad ${s}.`);const h={dy:u,input:c,output:d},f={filterSize:r,strides:a,pad:s,dimRoundingMode:o};return i.a.runKernelFunc(t=>{const e=R(c.shape,r,a,1,s,o);return t.maxPoolBackprop(u,c,d,e)},h,null,p.Hb,f)}}),Vo={kernelName:p.Eb,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r,a]=e,{filterSize:s,strides:o,pad:i}=n;return{x:()=>zo(t,r,a,s,o,i)}}},Uo={kernelName:p.Kb,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,e,n)=>{const r=n,{axis:a}=r,[s,o]=e,i=g.parseAxisParam(a,s.shape),u=j(i,s.rank),c=Co(t,o,s,i,u);return{x:()=>{let t=c.x();return null!=u&&(t=S(t)),t}}}},qo={kernelName:p.Lb,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e;return{a:()=>at(t,C(Ee(n,r),"float32")),b:()=>at(t,C(de(n,r),"float32"))}}},Ko={kernelName:p.Mb,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Yt(n.shape,r.shape);return{a:()=>{const e=Gt(n.shape,a);return e.length>0?N(Be(t,e),n.shape):t},b:()=>{const e=at(t,Fe(pe(Ht(n,r)))),s=Gt(r.shape,a);return s.length>0?N(Be(e,s),r.shape):e}}}},Wo={kernelName:p.Nb,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Yt(n.shape,r.shape);return{a:()=>{const e=at(t,C(r,"float32")),s=Gt(n.shape,a);return s.length>0?N(Be(e,s),n.shape):e},b:()=>{const e=at(t,C(n,"float32")),s=Gt(r.shape,a);return s.length>0?N(Be(e,s),r.shape):e}}}},Ho={kernelName:p.Ob,gradFunc:t=>({x:()=>Fe(t)})},Go={kernelName:p.Tb,inputsToSave:["indices"],gradFunc:(t,e)=>{const n=e[0];return{indices:()=>Ge(n.shape,"float32")}}},Yo={kernelName:p.Ub,gradFunc:t=>({x:()=>Xt(t)})},Jo={kernelName:p.Vb,inputsToSave:["x"],gradFunc:(t,e,n)=>{const r=e[0],{paddings:a}=n,s=a.map(t=>t[0]);return{x:()=>ht(t,s,r.shape)}}},Zo={kernelName:p.Wb,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(t,e)=>{const[n,r,a]=e,s=n,o=r,i=Yt(s.shape,o.shape);return{a:()=>{const e=C(o,"float32");let n=at(t,at(e,bn(s,Re(e,Oe(1)))));const r=Gt(s.shape,i);return r.length>0&&(n=Be(n,r)),N(n,s.shape)},b:()=>{const e=de(s,0),n=Zt(e,_e(s),Xt(s));let r=at(t,at(a,n));const u=Gt(o.shape,i);return u.length>0&&(r=Be(r,u)),N(r,o.shape)}}}},Xo={kernelName:p.Xb,inputsToSave:["x","alpha"],gradFunc:(t,e)=>{const[n,r]=e,a=de(n,0);return{x:()=>Zt(a,t,at(t,r)),alpha:()=>{let e=Zt(a,Xt(t),at(t,n));const s=Gt(r.shape,t.shape);return s.length>0&&(e=Be(e,s)),N(e,r.shape)}}}},Qo={kernelName:p.bc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Ht(t,Fe(tn(n)))}}},ti={kernelName:p.dc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e,r=at(Ee(n,6),nr(n));return{x:()=>at(t,C(r,"float32"))}}},ei={kernelName:p.cc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>at(t,C(nr(n),"float32"))}}},ni={kernelName:p.ec,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>N(t,n.shape)}}},ri={kernelName:p.fc,inputsToSave:["images"],gradFunc:(t,e,n)=>{const[r]=e,a=e=>{const{alignCorners:a}=n;return e.resizeBilinearBackprop(t,r,a)},s={images:r};return{images:()=>i.a.runKernelFunc(a,s,null,p.gc,n)}}},ai={kernelName:p.hc,inputsToSave:["images"],gradFunc:(t,e,n)=>{const[r]=e,a=e=>{const{alignCorners:a}=n;return e.resizeNearestNeighborBackprop(t,r,a)},s={images:r};return{images:()=>i.a.runKernelFunc(a,s,null,p.ic,n)}}},si={kernelName:p.jc,gradFunc:(t,e,n)=>{const{dims:r}=n,a=Object(g.parseAxisParam)(r,t.shape);return{x:()=>ye(t,a)}}},oi={kernelName:p.lc,gradFunc:t=>({x:()=>Xt(t)})},ii={kernelName:p.mc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Fe(Ht(t,at(bn(n,1.5),2)))}}},ui={kernelName:p.oc,inputsToSave:["condition"],gradFunc:(t,e)=>{const[n]=e;return{condition:()=>C(Xt(n),"float32"),t:()=>at(t,C(n,t.dtype)),e:()=>at(t,C(Ve(n),t.dtype))}}},ci={kernelName:p.pc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>{const e=de(n,Oe(0)),r=Oe(1.7580993408473768),a=Oe(1.0507009873554805),s=at(t,a),o=at(at(t,r),re(C(n,"float32")));return Zt(e,s,o)}}}},pi={kernelName:p.qc,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e;return{x:()=>at(t,at(n,Re(Oe(1),n)))}}},li={kernelName:p.rc,gradFunc:t=>({x:()=>Xt(t)})},di={kernelName:p.sc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>at(Pt(C(n,"float32")),t)}}},hi={kernelName:p.tc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>at(Lt(C(n,"float32")),t)}}},fi={kernelName:p.uc,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{begin:a,size:s}=n,o=r.shape,[i,u]=dt(r,a,s),c=[];for(let e=0;e<t.rank;e++)c.push([i[e],o[e]-i[e]-u[e]]);return{x:()=>cn(t,c)}}},mi={kernelName:p.vc,outputsToSave:[!0],gradFunc:(t,e,n)=>{const[r]=e,{dim:a}=n,s=at(t,r);return{logits:()=>Re(s,at(Be(s,[a],!0),r))}}},bi={kernelName:p.wc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>at(t,st(n))}}},yi={kernelName:p.xc,gradFunc:(t,e,n)=>{const{blockShape:r,paddings:a}=n;return{x:()=>bt(t,r,a)}}},gi={kernelName:p.zc,gradFunc:(t,e,n)=>{const{axis:r}=n;return{x:()=>nt(t,r)}}},Oi={kernelName:p.Ac,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Ht(t,at(Xn(C(n,"float32")),2))}}},wi={kernelName:p.Bc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>at(t,at(C(n,"float32"),2))}}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const xi=[Cs,Rs,Bs,Ps,Ls,zs,Vs,Us,qs,Ks,Ws,Hs,Ys,Zs,Xs,Qs,to,eo,no,ro,ao,oo,so,uo,co,po,lo,ho,fo,mo,bo,yo,go,Oo,xo,wo,jo,vo,So,Eo,To,Io,_o,Do,Ao,Fo,$o,Ro,Ro,Bo,Lo,Vo,Uo,qo,Ko,Wo,Ho,Go,Yo,Jo,Jo,Zo,Xo,Qo,ti,ei,ni,ri,ai,si,oi,ii,ui,ci,pi,li,di,hi,fi,mi,bi,yi,yi,gi,gi,Oi,{kernelName:p.Cc,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Oe(2);return{a:()=>at(t,at(a,Re(n,r))),b:()=>at(t,at(a,Re(r,n)))}}},wi,{kernelName:p.Dc,gradFunc:t=>({x:()=>Xt(t)})},{kernelName:p.Fc,inputsToSave:["a","b"],gradFunc:(t,e)=>{const[n,r]=e,a=Yt(n.shape,r.shape);return{a:()=>{let e=t;const r=Gt(n.shape,a);return r.length>0&&(e=Be(e,r)),N(e,n.shape)},b:()=>{let e=t;const n=Gt(r.shape,a);return n.length>0&&(e=Be(e,n)),N(Fe(e),r.shape)}}}},{kernelName:p.Gc,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,a=r.shape.slice(),{axis:s}=n;Object(g.parseAxisParam)(s,r.shape).forEach(t=>{a[t]=1});const o=N(t,a),i=at(o,Ye(r.shape,"float32"));return{x:()=>i}}},{kernelName:p.Hc,inputsToSave:["x"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>Ht(t,tn(Pt(n)))}}},{kernelName:p.Ic,outputsToSave:[!0],gradFunc:(t,e)=>{const[n]=e;return{x:()=>at(Re(Oe(1),tn(n)),t)}}},{kernelName:p.Jc,inputsToSave:["x"],gradFunc:(t,e,n)=>{const[r]=e,{reps:a}=n;return{x:()=>{let e=Xt(r);if(1===r.rank)for(let n=0;n<a[0];++n)e=y(e,ht(t,[n*r.shape[0]],[r.shape[0]]));else if(2===r.rank)for(let n=0;n<a[0];++n)for(let s=0;s<a[1];++s)e=y(e,ht(t,[n*r.shape[0],s*r.shape[1]],[r.shape[0],r.shape[1]]));else if(3===r.rank)for(let n=0;n<a[0];++n)for(let s=0;s<a[1];++s)for(let o=0;o<a[2];++o)e=y(e,ht(t,[n*r.shape[0],s*r.shape[1],o*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else{if(4!==r.rank)throw new Error("Gradient for tile operation is not implemented for rank-"+r.rank+" tensors yet.");for(let n=0;n<a[0];++n)for(let s=0;s<a[1];++s)for(let o=0;o<a[2];++o)for(let i=0;i<a[3];++i)e=y(e,ht(t,[n*r.shape[0],s*r.shape[1],o*r.shape[2],i*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]))}return e}}}},{kernelName:p.Lc,gradFunc:(t,e,n)=>{const r=n,{perm:a}=r,s=v(a);return{x:()=>S(t,s)}}},{kernelName:p.Mc,gradFunc:(t,e,n)=>{const r=n,{axis:a}=r;return{value:()=>er(t,a)}}},{kernelName:p.Nc,inputsToSave:["segmentIds"],gradFunc:(t,e)=>{const[n]=e;return{x:()=>function(t,e){const n=ke(e,Xt(e)),r=le(t,n);let a=he(e,Oe(0,"int32"));const s=r.rank-a.rank;for(let t=0;t<s;++t)a=ae(a,t+1);a=ze(a,Ye(r.shape,"bool"));const o=Xt(r);return Zt(a,r,o)}(t,n)}}},{kernelName:p.Oc,gradFunc:t=>({x:()=>Xt(t)})}];
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */for(const t of xi)Object(As.d)(t);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */J.a.prototype.abs=function(){return this.throwIfDisposed(),h(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.acos=function(){return this.throwIfDisposed(),f(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.acosh=function(){return this.throwIfDisposed(),m(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.addStrict=function(t){return this.throwIfDisposed(),vr(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.add=function(t){return this.throwIfDisposed(),y(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.all=function(t,e){return this.throwIfDisposed(),E(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.any=function(t,e){return this.throwIfDisposed(),T(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.argMax=function(t){return this.throwIfDisposed(),I(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.argMin=function(t){return this.throwIfDisposed(),_(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.asScalar=function(){return this.throwIfDisposed(),Object(g.assert)(1===this.size,()=>"The array must have only 1 element."),N(this,[])},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.asType=function(t){return this.throwIfDisposed(),C(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.as1D=function(){return this.throwIfDisposed(),N(this,[this.size])},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.as2D=function(t,e){return this.throwIfDisposed(),N(this,[t,e])},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),N(this,[t,e,n])},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.as4D=function(t,e,n,r){return this.throwIfDisposed(),N(this,[t,e,n,r])},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.as5D=function(t,e,n,r,a){return this.throwIfDisposed(),N(this,[t,e,n,r,a])},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.asin=function(){return this.throwIfDisposed(),D(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.asinh=function(){return this.throwIfDisposed(),A(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.atan=function(){return this.throwIfDisposed(),F(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.atan2=function(t){return this.throwIfDisposed(),M(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.atanh=function(){return this.throwIfDisposed(),$(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.avgPool=function(t,e,n,r){return this.throwIfDisposed(),Y(this,t,e,n,r)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),bt(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.batchNorm=function(t,e,n,r,a){return this.throwIfDisposed(),gt(this,t,e,n,r,a)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.broadcastTo=function(t){return this.throwIfDisposed(),vt(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.cast=function(t){return this.throwIfDisposed(),C(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.ceil=function(){return this.throwIfDisposed(),Nt(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),St(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.concat=function(t,e){return this.throwIfDisposed(),t instanceof J.a&&(t=[t]),nt([this,...t],e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.conv1d=function(t,e,n,r,a,s){return this.throwIfDisposed(),Ft(this,t,e,n,r,a,s)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.conv2dTranspose=function(t,e,n,r,a){return this.throwIfDisposed(),$t(this,t,e,n,r,a)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.conv2d=function(t,e,n,r,a,s){return this.throwIfDisposed(),At(this,t,e,n,r,a,s)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.cos=function(){return this.throwIfDisposed(),Pt(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.cosh=function(){return this.throwIfDisposed(),Lt(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.cumsum=function(t,e,n){return this.throwIfDisposed(),zt(this,t,e,n)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),Vt(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.depthwiseConv2D=function(t,e,n,r,a,s){return Z("depthwiseConv2D is deprecated, use depthwiseConv2d instead"),this.throwIfDisposed(),Ut(this,t,e,n,r,a,s)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.depthwiseConv2d=function(t,e,n,r,a,s){return this.throwIfDisposed(),Ut(this,t,e,n,r,a,s)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.dilation2d=function(t,e,n,r,a){return this.throwIfDisposed(),Kt(this,t,e,n,r,a)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.divNoNan=function(t){return this.throwIfDisposed(),Qt(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.divStrict=function(t){return this.throwIfDisposed(),kr(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.div=function(t){return this.throwIfDisposed(),Ht(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.dot=function(t){return this.throwIfDisposed(),te(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.elu=function(){return this.throwIfDisposed(),ee(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.equalStrict=function(t){return this.throwIfDisposed(),yr(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.equal=function(t){return this.throwIfDisposed(),Jt(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.erf=function(){return this.throwIfDisposed(),ne(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.exp=function(){return this.throwIfDisposed(),re(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.expandDims=function(t){return this.throwIfDisposed(),ae(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.expm1=function(){return this.throwIfDisposed(),se(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.fft=function(){return this.throwIfDisposed(),ue(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.flatten=function(){return this.throwIfDisposed(),N(this,[this.size])},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.floor=function(){return this.throwIfDisposed(),pe(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.floorDiv=function(t){return this.throwIfDisposed(),Wt(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.gather=function(t,e){return this.throwIfDisposed(),le(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),gr(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.greaterEqual=function(t){return this.throwIfDisposed(),he(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.greaterStrict=function(t){return this.throwIfDisposed(),Or(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.greater=function(t){return this.throwIfDisposed(),de(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.ifft=function(){return this.throwIfDisposed(),fe(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.irfft=function(){return this.throwIfDisposed(),we(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.isFinite=function(){return this.throwIfDisposed(),xe(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.isInf=function(){return this.throwIfDisposed(),je(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.isNaN=function(){return this.throwIfDisposed(),ve(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.leakyRelu=function(t){return this.throwIfDisposed(),Ne(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),wr(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.lessEqual=function(t){return this.throwIfDisposed(),Ee(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.lessStrict=function(t){return this.throwIfDisposed(),xr(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.less=function(t){return this.throwIfDisposed(),Se(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.localResponseNormalization=function(t,e,n,r){return this.throwIfDisposed(),Ie(this,t,e,n,r)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.logSigmoid=function(){return this.throwIfDisposed(),$e(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.logSoftmax=function(t){return this.throwIfDisposed(),Pe(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.logSumExp=function(t,e){return this.throwIfDisposed(),Le(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.log=function(){return this.throwIfDisposed(),_e(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.log1p=function(){return this.throwIfDisposed(),De(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.logicalAnd=function(t){return this.throwIfDisposed(),ze(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.logicalNot=function(){return this.throwIfDisposed(),Ve(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.logicalOr=function(t){return this.throwIfDisposed(),Ue(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.logicalXor=function(t){return this.throwIfDisposed(),qe(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.matMul=function(t,e,n){return this.throwIfDisposed(),rt(this,t,e,n)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.maxPool=function(t,e,n,r){return this.throwIfDisposed(),Ke(this,t,e,n,r)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.max=function(t,e){return this.throwIfDisposed(),Ce(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.maximumStrict=function(t){return this.throwIfDisposed(),Nr(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.maximum=function(t){return this.throwIfDisposed(),ke(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.mean=function(t,e){return this.throwIfDisposed(),Je(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.min=function(t,e){return this.throwIfDisposed(),Ze(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.minimumStrict=function(t){return this.throwIfDisposed(),Sr(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.minimum=function(t){return this.throwIfDisposed(),Xe(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.modStrict=function(t){return this.throwIfDisposed(),Er(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.mod=function(t){return this.throwIfDisposed(),Qe(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.mulStrict=function(t){return this.throwIfDisposed(),Tr(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.mul=function(t){return this.throwIfDisposed(),at(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.neg=function(){return this.throwIfDisposed(),Fe(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.norm=function(t,e,n){return this.throwIfDisposed(),Ar(this,t,e,n)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),jr(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.notEqual=function(t){return this.throwIfDisposed(),an(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.oneHot=function(t,e=1,n=0){return this.throwIfDisposed(),sn(this,t,e,n)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.onesLike=function(){return this.throwIfDisposed(),on(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.pad=function(t,e){return this.throwIfDisposed(),cn(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.pool=function(t,e,n,r,a){return this.throwIfDisposed(),mn(this,t,e,n,r,a)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.powStrict=function(t){return this.throwIfDisposed(),Ir(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.pow=function(t){return this.throwIfDisposed(),bn(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.prelu=function(t){return this.throwIfDisposed(),yn(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.prod=function(t,e){return this.throwIfDisposed(),On(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.reciprocal=function(){return this.throwIfDisposed(),_n(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.relu=function(){return this.throwIfDisposed(),Dn(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.relu6=function(){return this.throwIfDisposed(),An(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.reshapeAs=function(t){return this.throwIfDisposed(),N(this,t.shape)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.reshape=function(t){return this.throwIfDisposed(),N(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.resizeBilinear=function(t,e){return this.throwIfDisposed(),ga(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.resizeNearestNeighbor=function(t,e){return this.throwIfDisposed(),Oa(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.reverse=function(t){return this.throwIfDisposed(),ye(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.rfft=function(){return this.throwIfDisposed(),Bn(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.round=function(){return this.throwIfDisposed(),Pn(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.rsqrt=function(){return this.throwIfDisposed(),Ln(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.selu=function(){return this.throwIfDisposed(),zn(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.separableConv2d=function(t,e,n,r,a,s){return this.throwIfDisposed(),Vn(this,t,e,n,r,a,s)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.sigmoid=function(){return this.throwIfDisposed(),st(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.sign=function(){return this.throwIfDisposed(),qn(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.sin=function(){return this.throwIfDisposed(),Kn(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.sinh=function(){return this.throwIfDisposed(),Wn(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.slice=function(t,e){return this.throwIfDisposed(),ht(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.softmax=function(t){return this.throwIfDisposed(),Zn(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.softplus=function(){return this.throwIfDisposed(),Me(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),fn(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.split=function(t,e){return this.throwIfDisposed(),Rn(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.sqrt=function(){return this.throwIfDisposed(),Xn(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.square=function(){return this.throwIfDisposed(),tn(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.squaredDifference=function(t){return this.throwIfDisposed(),Qn(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),_r(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.squeeze=function(t){return this.throwIfDisposed(),tr(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.stack=function(t,e){this.throwIfDisposed();const n=t instanceof J.a?[this,t]:[this,...t];return er(n,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.step=function(t){return this.throwIfDisposed(),nr(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.stridedSlice=function(t,e,n,r,a,s,o,i){return this.throwIfDisposed(),rr(this,t,e,n,r,a,s,o,i)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.subStrict=function(t){return this.throwIfDisposed(),Dr(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.sub=function(t){return this.throwIfDisposed(),Re(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.sum=function(t,e){return this.throwIfDisposed(),Be(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.tan=function(){return this.throwIfDisposed(),ar(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.tanh=function(){return this.throwIfDisposed(),ft(this)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.tile=function(t){return this.throwIfDisposed(),oe(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.toBool=function(){return this.throwIfDisposed(),C(this,"bool")},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.toFloat=function(){return this.throwIfDisposed(),C(this,"float32")},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.toInt=function(){return this.throwIfDisposed(),C(this,"int32")},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.topk=function(t,e){return this.throwIfDisposed(),pr(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.transpose=function(t){return this.throwIfDisposed(),S(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),dr(this,t,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.unstack=function(t){return this.throwIfDisposed(),hr(this,t)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.where=function(t,e){return this.throwIfDisposed(),Zt(t,this,e)},
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
J.a.prototype.zerosLike=function(){return this.throwIfDisposed(),Xt(this)}},function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n(6),a=n(21),s=n(0);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(t,e){if(t.dtype===e.dtype)return[t,e];const n=Object(a.a)(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]}function i(t,e){Object(s.assert)(t.dtype===e.dtype,()=>`The dtypes of the first(${t.dtype}) and second(${e.dtype}) input must match`)}function u(t){const e=[];return function t(e,n,a){if(null==e)return;if(e instanceof r.a)return void n.push(e);if(s=e,!Array.isArray(s)&&"object"!=typeof s)return;var s;const o=e;for(const e in o){const r=o[e];a.has(r)||(a.add(r),t(r,n,a))}}(t,e,new Set),e}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o}));class r{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}setPlatform(t,e){null!=this.platform&&console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`),this.platformName=t,this.platform=e}registerFlag(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},null!=this.urlFlags[t]){const e=this.urlFlags[t];console.warn(`Setting feature override from URL ${t}: ${e}.`),this.set(t,e)}}async getAsync(t){return t in this.flags||(this.flags[t]=await this.evaluateFlag(t)),this.flags[t]}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(e instanceof Promise)throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(null==this.flagRegistry[t])throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,null!=this.flagRegistry[t].setHook&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(null==this.flagRegistry[t])throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;const t=function(t){const e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(t,...n)=>(function(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"")}(e,n[0],n[1]),n.join("="))),e}(this.global.location.search);if("tfjsflags"in t){t.tfjsflags.split(",").forEach(t=>{const[e,n]=t.split(":");this.urlFlags[e]=function(t,e){if("true"===(e=e.toLowerCase())||"false"===e)return"true"===e;if(""+ +e===e)return+e;throw new Error(`Could not parse value flag value ${e} for flag ${t}.`)}(e,n)})}}}function a(){return s}let s=null;function o(t){s=t}},function(t,e,n){"use strict";(function(t){n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return m})),n.d(e,"g",(function(){return b}));var r=n(12),a=n(16),s=n(0),o=n(23);async function i(t,e){const n=[],r=[],a=Array.isArray(t)?t.map(t=>t.name):Object.keys(t);for(let s=0;s<a.length;++s){const o=a[s],i=Array.isArray(t)?t[s].tensor:t[o];if("float32"!==i.dtype&&"int32"!==i.dtype&&"bool"!==i.dtype&&"string"!==i.dtype&&"complex64"!==i.dtype)throw new Error(`Unsupported dtype in weight '${o}': ${i.dtype}`);const u={name:o,shape:i.shape,dtype:i.dtype};if("string"===i.dtype){const t=new Promise(async t=>{const e=await i.bytes(),n=e.reduce((t,e)=>t+e.length,0)+4*e.length,r=new Uint8Array(n);let a=0;for(let t=0;t<e.length;t++){const n=e[t],s=new Uint8Array(new Uint32Array([n.length]).buffer);r.set(s,a),a+=4,r.set(n,a),a+=n.length}t(r)});r.push(t)}else r.push(i.data());null!=e&&(u.group=e),n.push(u)}return{data:c(await Promise.all(r)),specs:n}}function u(t,e){const n={};let i,u=0;for(const c of e){const e=c.name,p=c.dtype,l=c.shape,d=Object(s.sizeFromShape)(l);let h;if("quantization"in c){const n=c.quantization;if("uint8"===n.dtype||"uint16"===n.dtype){if(!("min"in n)||!("scale"in n))throw new Error(`Weight ${c.name} with quantization ${n.dtype} doesn't have corresponding metadata min and scale.`)}else{if("float16"!==n.dtype)throw new Error(`Weight ${c.name} has unknown quantization dtype ${n.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);if("float32"!==p)throw new Error(`Weight ${c.name} is quantized with ${n.dtype} which only supports weights of type float32 not ${p}.`)}const r=o.a[n.dtype],a=t.slice(u,u+d*r),s="uint8"===n.dtype?new Uint8Array(a):new Uint16Array(a);if("float32"===p)if("uint8"===n.dtype||"uint16"===n.dtype){h=new Float32Array(s.length);for(let t=0;t<s.length;t++){const e=s[t];h[t]=e*n.scale+n.min}}else{if("float16"!==n.dtype)throw new Error(`Unsupported quantization type ${n.dtype} for weight type float32.`);void 0===i&&(i=y()),h=i(s)}else{if("int32"!==p)throw new Error(`Unsupported dtype in weight '${e}': ${p}`);if("uint8"!==n.dtype&&"uint16"!==n.dtype)throw new Error(`Unsupported quantization type ${n.dtype} for weight type int32.`);h=new Int32Array(s.length);for(let t=0;t<s.length;t++){const e=s[t];h[t]=Math.round(e*n.scale+n.min)}}u+=d*r}else if("string"===p){const e=Object(s.sizeFromShape)(c.shape);h=[];for(let n=0;n<e;n++){const e=new Uint32Array(t.slice(u,u+4))[0];u+=4;const n=new Uint8Array(t.slice(u,u+e));h.push(n),u+=e}}else{const s=o.a[p],i=t.slice(u,u+d*s);if("float32"===p)h=new Float32Array(i);else if("int32"===p)h=new Int32Array(i);else if("bool"===p)h=new Uint8Array(i);else{if("complex64"!==p)throw new Error(`Unsupported dtype in weight '${e}': ${p}`);{h=new Float32Array(i);const t=new Float32Array(h.length/2),s=new Float32Array(h.length/2);for(let e=0;e<t.length;e++)t[e]=h[2*e],s[e]=h[2*e+1];const o=Object(a.a)(t,l,"float32"),u=Object(a.a)(s,l,"float32");n[e]=Object(r.a)(o,u)}}u+=d*s}"complex64"!==p&&(n[e]=Object(a.a)(h,l,p))}return n}function c(t){if(null===t)throw new Error("Invalid input value: "+JSON.stringify(t));let e=0;const n=[];t.forEach(t=>{if(e+=t.byteLength,n.push(t.byteLength===t.buffer.byteLength?t:new t.constructor(t)),!(t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+t.constructor.name)});const r=new Uint8Array(e);let a=0;return n.forEach(t=>{r.set(new Uint8Array(t.buffer),a),a+=t.byteLength}),r.buffer}const p=void 0!==t&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function l(e){return p?t.byteLength(e):new Blob([e]).size}function d(e){if(p)return t.from(e).toString("base64");const n=new Uint8Array(e);let r="";for(let t=0,e=n.length;t<e;t++)r+=String.fromCharCode(n[t]);return btoa(r)}function h(e){if(p){const n=t.from(e,"base64");return n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)}const n=atob(e),r=new Uint8Array(n.length);for(let t=0;t<n.length;++t)r.set([n.charCodeAt(t)],t);return r.buffer}function f(t){if(1===t.length)return t[0];let e=0;t.forEach(t=>{e+=t.byteLength});const n=new Uint8Array(e);let r=0;return t.forEach(t=>{n.set(new Uint8Array(t),r),r+=t.byteLength}),n.buffer}function m(t){for(t=t.trim();t.endsWith("/");)t=t.slice(0,t.length-1);const e=t.split("/");return e[e.length-1]}function b(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==t.modelTopology?0:l(JSON.stringify(t.modelTopology)),weightSpecsBytes:null==t.weightSpecs?0:l(JSON.stringify(t.weightSpecs)),weightDataBytes:null==t.weightData?0:t.weightData.byteLength}}function y(){const t=function(){const t=t=>{let e=t<<13,n=0;for(;0==(8388608&e);)n-=8388608,e<<=1;return e&=-8388609,n+=947912704,e|n},e=new Uint32Array(2048);e[0]=0;for(let n=1;n<1024;n++)e[n]=t(n);for(let t=1024;t<2048;t++)e[t]=939524096+(t-1024<<13);return e}(),e=function(){const t=new Uint32Array(64);t[0]=0,t[31]=1199570944,t[32]=2147483648,t[63]=3347054592;for(let e=1;e<31;e++)t[e]=e<<23;for(let e=33;e<63;e++)t[e]=2147483648+(e-32<<23);return t}(),n=function(){const t=new Uint32Array(64);for(let e=0;e<64;e++)t[e]=1024;return t[0]=t[32]=0,t}();return r=>{const a=new ArrayBuffer(4*r.length),s=new Uint32Array(a);for(let a=0;a<r.length;a++){const o=r[a],i=t[n[o>>10]+(1023&o)]+e[o>>10];s[a]=i}return new Float32Array(a)}}}).call(this,n(30).Buffer)},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(5),a=n(0);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(t,e,n,s){if(null==s&&(s=Object(a.inferDtype)(t)),"complex64"===s)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Object(a.isTypedArray)(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=e){Object(a.assertNonNegativeIntegerDimensions)(e);const t=Object(a.sizeFromShape)(e),r=Object(a.sizeFromShape)(n);Object(a.assert)(t===r,()=>`Based on the provided shape, [${e}], the tensor should have ${t} values but has ${r}`);for(let t=0;t<n.length;++t){const r=n[t],s=t!==n.length-1||r!==Object(a.sizeFromShape)(e.slice(t));Object(a.assert)(n[t]===e[t]||!s,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${e}). `)}}return Object(a.isTypedArray)(t)||Array.isArray(t)||(t=[t]),e=e||n,t="string"!==s?Object(a.toTypedArray)(t,s):Object(a.flatten)(t,[],!0),r.a.makeTensor(t,e,s)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(5),a=n(3),s=n(1),o=n(0),i=n(4);const u=Object(i.a)({complex_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e){const n=Object(s.a)(t,"real","complex"),i=Object(s.a)(e,"imag","complex");o.assertShapesMatch(n.shape,i.shape,`real and imag shapes, ${n.shape} and ${i.shape}, must match in call to tf.complex().`);const u={real:n,imag:i};return r.a.runKernelFunc(t=>t.complex(n,i),u,null,a.y)}})},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return v})),n.d(e,"i",(function(){return N})),n.d(e,"c",(function(){return S})),n.d(e,"f",(function(){return E})),n.d(e,"e",(function(){return _})),n.d(e,"d",(function(){return D})),n.d(e,"k",(function(){return F})),n.d(e,"g",(function(){return M})),n.d(e,"h",(function(){return $})),n.d(e,"j",(function(){return C})),n.d(e,"b",(function(){return R}));var r=n(7),a=n(17),s=n(18),o=n(2),i=n(32),u=n(33),c=n(34),p=n(35),l=n(36),d=n(37),h=n(38),f=n(39),m=n(40),b=n(41),y=n(42),g=n(43),O=n(44),w=n(45),x=n(46),j=n(47);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class v{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[].concat(...[i,u,c,p,l,d,h,b,m,f,y,g,O,w,x,j].map(t=>t.json));this.opMappers=t.reduce((t,e)=>(t[e.tfOpName]=e,t),{})}transformGraph(t,e={}){const n=t.node,r=[],a=[],s=n.reduce((t,e)=>(t[e.name]=this.mapNode(e),e.op.startsWith("Placeholder")&&r.push(t[e.name]),"Const"===e.op&&a.push(t[e.name]),t),{});let i=[];const u=[];let c={},p={};null!=e&&(c=this.mapSignatureEntries(e.inputs),p=this.mapSignatureEntries(e.outputs));const l=Object.keys(s);l.forEach(t=>{const e=s[t];e.inputNames.forEach(t=>{const[n]=Object(o.b)(t);e.inputs.push(s[n]),s[n].children.push(e)})}),0===Object.keys(p).length?l.forEach(t=>{const e=s[t];0===e.children.length&&u.push(e)}):Object.keys(p).forEach(t=>{const[e]=Object(o.b)(t),n=s[e];null!=n&&(n.signatureKey=p[t],u.push(n))}),Object.keys(c).length>0?Object.keys(c).forEach(t=>{const[e]=Object(o.b)(t),n=s[e];n&&(n.signatureKey=c[t],i.push(n))}):i=r;let d={};return null!=t.library&&null!=t.library.function&&(d=t.library.function.reduce((t,e)=>(t[e.signature.name]=this.mapFunction(e),t),{})),{nodes:s,inputs:i,outputs:u,weights:a,placeholders:r,signature:e,functions:d}}mapSignatureEntries(t){return Object.keys(t||{}).reduce((e,n)=>(e[t[n].name]=n,e),{})}mapNode(t){const e=Object(s.a)(t.op)||this.opMappers[t.op]||{};null==t.attr&&(t.attr={});const n={name:t.name,op:t.op,category:e.category,inputNames:(t.input||[]).map(t=>t.startsWith("^")?t.substr(1):t),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr};return null!=e.inputs&&(n.inputParams=e.inputs.reduce((t,e)=>(t[e.name]={type:e.type,inputIndexStart:e.start,inputIndexEnd:e.end},t),{})),null!=e.attrs&&(n.attrParams=e.attrs.reduce((e,n)=>{const r=n.type;let a=void 0;switch(n.type){case"string":a=N(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=N(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"string[]":a=$(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=$(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"number":a=E(t.attr,n.tfName,n.defaultValue||0),void 0===a&&n.tfDeprecatedName&&(a=E(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"number[]":a=M(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=M(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool":a=S(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=S(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool[]":a=R(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=R(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape":a=F(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=F(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape[]":a=C(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=C(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype":a=_(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=_(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype[]":a=D(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=D(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"func":a=I(t.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=I(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${n.type} for op: ${t.op}`)}return e[n.name]={value:a,type:r},e},{})),n}mapFunction(t){const e=t.nodeDef,n=[];let r={};null!=e&&(r=e.reduce((t,e)=>(t[e.name]=this.mapNode(e),"Const"===e.op&&n.push(t[e.name]),t),{}));const a=[],s=[];t.signature.inputArg.forEach(t=>{const[e]=Object(o.b)(t.name),n={name:e,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:T(t.type),type:"dtype"}},children:[]};n.signatureKey=t.name,a.push(n),r[e]=n});Object.keys(r).forEach(t=>{const e=r[t];e.inputNames.forEach(t=>{const[n]=Object(o.b)(t);e.inputs.push(r[n]),r[n].children.push(e)})});const i=t.ret;t.signature.outputArg.forEach(t=>{const[e,n]=Object(o.b)(i[t.name]),a=r[e];null!=a&&(a.defaultOutput=n,s.push(a))});const u=this.mapArgsToSignature(t);return{nodes:r,inputs:a,outputs:s,weights:n,placeholders:[],signature:u}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((t,e)=>(t[e.name]=this.mapArgToTensorInfo(e),t),{}),outputs:t.signature.outputArg.reduce((e,n)=>(e[n.name]=this.mapArgToTensorInfo(n,t.ret),e),{})}}mapArgToTensorInfo(t,e){let n=t.name;return null!=e&&(n=e[n]),{name:n,dtype:t.type}}}function k(e,n){const a=Array.isArray(e)?String.fromCharCode.apply(null,e):function(e){const n=Object(r.O)().global;if(void 0!==n.atob)return n.atob(e);if(void 0!==t)return new t(e,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}(e);return n?a:a.toLowerCase()}function N(t,e,n,r=!1){const a=t[e];return null!=a?k(a.s,r):n}function S(t,e,n){const r=t[e];return r?r.b:n}function E(t,e,n){const r=t[e]||{},a=null!=r.i?r.i:null!=r.f?r.f:n;return"number"==typeof a?a:parseInt(a,10)}function T(t){switch("string"==typeof t&&(t=a.a[t]),t){case a.a.DT_FLOAT:return"float32";case a.a.DT_INT32:case a.a.DT_INT64:case a.a.DT_INT8:case a.a.DT_UINT8:return"int32";case a.a.DT_BOOL:return"bool";case a.a.DT_DOUBLE:return"float32";case a.a.DT_STRING:return"string";default:return null}}function I(t,e,n){const r=t[e];return r&&r.func?r.func.name:n}function _(t,e,n){const r=t[e];return r&&r.type?T(r.type):n}function D(t,e,n){const r=t[e];return r&&r.list&&r.list.type?r.list.type.map(t=>T(t)):n}function A(t){if(!t.unknownRank)return null!=t.dim?t.dim.map(t=>"number"==typeof t.size?t.size:parseInt(t.size,10)):[]}function F(t,e,n){const r=t[e];return r&&r.shape?A(r.shape):n}function M(t,e,n){const r=t[e];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(t=>"number"==typeof t?t:parseInt(t,10)):n}function $(t,e,n,r=!1){const a=t[e];return a&&a.list&&a.list.s?a.list.s.map(t=>k(t,r)):n}function C(t,e,n){const r=t[e];return r&&r.list&&r.list.shape?r.list.shape.map(t=>A(t)):n}function R(t,e,n){const r=t[e];return r&&r.list&&r.list.b?r.list.b:n}}).call(this,n(30).Buffer)},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return p}));var r=n(9),a=n(22);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const s=Object(a.a)("kernelRegistry",()=>new Map),o=Object(a.a)("gradRegistry",()=>new Map);function i(t,e){const n=l(t,e);return s.get(n)}function u(t){return o.get(t)}function c(t){const e=s.entries(),n=[];for(;;){const{done:r,value:a}=e.next();if(r)break;const[s,o]=a,[i]=s.split("_");i===t&&n.push(o)}return n}function p(t){const{kernelName:e}=t;o.has(e)&&Object(r.b)().getBool("DEBUG")&&console.warn(`Overriding the gradient for '${e}'`),o.set(e,t)}function l(t,e){return`${e}_${t}`}},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(1),a=n(11);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(t,e,n){const s=Object(r.c)(t,n);return Object(a.a)(t,e,s,n)}},function(t,e,n){"use strict";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
var r,a;n.d(e,"a",(function(){return r})),function(t){t[t.DT_INVALID=0]="DT_INVALID",t[t.DT_FLOAT=1]="DT_FLOAT",t[t.DT_DOUBLE=2]="DT_DOUBLE",t[t.DT_INT32=3]="DT_INT32",t[t.DT_UINT8=4]="DT_UINT8",t[t.DT_INT16=5]="DT_INT16",t[t.DT_INT8=6]="DT_INT8",t[t.DT_STRING=7]="DT_STRING",t[t.DT_COMPLEX64=8]="DT_COMPLEX64",t[t.DT_INT64=9]="DT_INT64",t[t.DT_BOOL=10]="DT_BOOL",t[t.DT_QINT8=11]="DT_QINT8",t[t.DT_QUINT8=12]="DT_QUINT8",t[t.DT_QINT32=13]="DT_QINT32",t[t.DT_BFLOAT16=14]="DT_BFLOAT16",t[t.DT_FLOAT_REF=101]="DT_FLOAT_REF",t[t.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",t[t.DT_INT32_REF=103]="DT_INT32_REF",t[t.DT_UINT8_REF=104]="DT_UINT8_REF",t[t.DT_INT16_REF=105]="DT_INT16_REF",t[t.DT_INT8_REF=106]="DT_INT8_REF",t[t.DT_STRING_REF=107]="DT_STRING_REF",t[t.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",t[t.DT_INT64_REF=109]="DT_INT64_REF",t[t.DT_BOOL_REF=110]="DT_BOOL_REF",t[t.DT_QINT8_REF=111]="DT_QINT8_REF",t[t.DT_QUINT8_REF=112]="DT_QUINT8_REF",t[t.DT_QINT32_REF=113]="DT_QINT32_REF",t[t.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF"}(r||(r={})),function(t){let e;!function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"}(e=t.CheckpointFormatVersion||(t.CheckpointFormatVersion={}))}(a||(a={}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r={};function a(t){return r[t]}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){(function(e){t.exports=e}).call(this,{})},function(t,e,n){"use strict";
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var r,a,s,o,i;n.d(e,"a",(function(){return c})),function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6"}(r||(r={})),function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64"}(a||(a={})),function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64"}(s||(s={})),function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64"}(o||(o={})),function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64"}(i||(i={}));const u={float32:o,int32:a,bool:s,complex64:i};function c(t,e){if("string"===t||"string"===e){if("string"===t&&"string"===e)return"string";throw new Error(`Can not upcast ${t} with ${e}`)}return u[t][e]}},function(t,e,n){"use strict";(function(t,r){
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
let a;function s(){if(null==a){let e;if("undefined"!=typeof window)e=window;else if(void 0!==t)e=t;else if(void 0!==r)e=r;else{if("undefined"==typeof self)throw new Error("Could not find a global object");e=self}a=e}return a}function o(t,e){const n=function(){const t=s();return null==t._tfGlobals&&(t._tfGlobals=new Map),t._tfGlobals}();if(n.has(t))return n.get(t);{const r=e();return n.set(t,r),n.get(t)}}n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return o}))}).call(this,n(29),n(26))},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8}},function(t,e,n){"use strict";function r(){return"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}n.d(e,"a",(function(){return r}))},function(t,e,n){var r=n(70),a=n(71),s=n(72),o=n(73),i=n(74),u=n(75),c=n(76);c.alea=r,c.xor128=a,c.xorwow=s,c.xorshift7=o,c.xor4096=i,c.tychei=u,t.exports=c},function(t,e){var n,r,a=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(t){r=o}}();var u,c=[],p=!1,l=-1;function d(){p&&u&&(p=!1,u.length?c=u.concat(c):l=-1,c.length&&h())}function h(){if(!p){var t=i(d);p=!0;for(var e=c.length;e;){for(u=c,c=[];++l<e;)u&&u[l].run();l=-1,e=c.length}u=null,p=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function m(){}a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new f(t,e)),1!==c.length||p||i(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(t,e,n){t.exports=n(65)},,function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var r=n(78),a=n(79),s=n(80);function o(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(t,e){if(o()<e)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=u.prototype:(null===t&&(t=new u(e)),t.length=e),t}function u(t,e,n){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return l(this,t)}return c(this,t,e,n)}function c(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r);u.TYPED_ARRAY_SUPPORT?(t=e).__proto__=u.prototype:t=d(t,e);return t}(t,e,n,r):"string"==typeof e?function(t,e,n){"string"==typeof n&&""!==n||(n="utf8");if(!u.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|f(e,n),a=(t=i(t,r)).write(e,n);a!==r&&(t=t.slice(0,a));return t}(t,e,n):function(t,e){if(u.isBuffer(e)){var n=0|h(e.length);return 0===(t=i(t,n)).length||e.copy(t,0,0,n),t}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(r=e.length)!=r?i(t,0):d(t,e);if("Buffer"===e.type&&s(e.data))return d(t,e.data)}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function p(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function l(t,e){if(p(e),t=i(t,e<0?0:0|h(e)),!u.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function d(t,e){var n=e.length<0?0:0|h(e.length);t=i(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function h(t){if(t>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|t}function f(t,e){if(u.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return L(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return z(t).length;default:if(r)return L(t).length;e=(""+e).toLowerCase(),r=!0}}function m(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return I(this,e,n);case"utf8":case"utf-8":return S(this,e,n);case"ascii":return E(this,e,n);case"latin1":case"binary":return T(this,e,n);case"base64":return N(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function b(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function y(t,e,n,r,a){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=a?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(a)return-1;n=t.length-1}else if(n<0){if(!a)return-1;n=0}if("string"==typeof e&&(e=u.from(e,r)),u.isBuffer(e))return 0===e.length?-1:g(t,e,n,r,a);if("number"==typeof e)return e&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?a?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):g(t,[e],n,r,a);throw new TypeError("val must be string, number or Buffer")}function g(t,e,n,r,a){var s,o=1,i=t.length,u=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;o=2,i/=2,u/=2,n/=2}function c(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(a){var p=-1;for(s=n;s<i;s++)if(c(t,s)===c(e,-1===p?0:s-p)){if(-1===p&&(p=s),s-p+1===u)return p*o}else-1!==p&&(s-=s-p),p=-1}else for(n+u>i&&(n=i-u),s=n;s>=0;s--){for(var l=!0,d=0;d<u;d++)if(c(t,s+d)!==c(e,d)){l=!1;break}if(l)return s}return-1}function O(t,e,n,r){n=Number(n)||0;var a=t.length-n;r?(r=Number(r))>a&&(r=a):r=a;var s=e.length;if(s%2!=0)throw new TypeError("Invalid hex string");r>s/2&&(r=s/2);for(var o=0;o<r;++o){var i=parseInt(e.substr(2*o,2),16);if(isNaN(i))return o;t[n+o]=i}return o}function w(t,e,n,r){return V(L(e,t.length-n),t,n,r)}function x(t,e,n,r){return V(function(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function j(t,e,n,r){return x(t,e,n,r)}function v(t,e,n,r){return V(z(e),t,n,r)}function k(t,e,n,r){return V(function(t,e){for(var n,r,a,s=[],o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),r=n>>8,a=n%256,s.push(a),s.push(r);return s}(e,t.length-n),t,n,r)}function N(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function S(t,e,n){n=Math.min(t.length,n);for(var r=[],a=e;a<n;){var s,o,i,u,c=t[a],p=null,l=c>239?4:c>223?3:c>191?2:1;if(a+l<=n)switch(l){case 1:c<128&&(p=c);break;case 2:128==(192&(s=t[a+1]))&&(u=(31&c)<<6|63&s)>127&&(p=u);break;case 3:s=t[a+1],o=t[a+2],128==(192&s)&&128==(192&o)&&(u=(15&c)<<12|(63&s)<<6|63&o)>2047&&(u<55296||u>57343)&&(p=u);break;case 4:s=t[a+1],o=t[a+2],i=t[a+3],128==(192&s)&&128==(192&o)&&128==(192&i)&&(u=(15&c)<<18|(63&s)<<12|(63&o)<<6|63&i)>65535&&u<1114112&&(p=u)}null===p?(p=65533,l=1):p>65535&&(p-=65536,r.push(p>>>10&1023|55296),p=56320|1023&p),r.push(p),a+=l}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);var n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=4096));return n}(r)}e.Buffer=u,e.SlowBuffer=function(t){+t!=t&&(t=0);return u.alloc(+t)},e.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=o(),u.poolSize=8192,u._augment=function(t){return t.__proto__=u.prototype,t},u.from=function(t,e,n){return c(null,t,e,n)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(t,e,n){return function(t,e,n,r){return p(e),e<=0?i(t,e):void 0!==n?"string"==typeof r?i(t,e).fill(n,r):i(t,e).fill(n):i(t,e)}(null,t,e,n)},u.allocUnsafe=function(t){return l(null,t)},u.allocUnsafeSlow=function(t){return l(null,t)},u.isBuffer=function(t){return!(null==t||!t._isBuffer)},u.compare=function(t,e){if(!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,a=0,s=Math.min(n,r);a<s;++a)if(t[a]!==e[a]){n=t[a],r=e[a];break}return n<r?-1:r<n?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!s(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=u.allocUnsafe(e),a=0;for(n=0;n<t.length;++n){var o=t[n];if(!u.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,a),a+=o.length}return r},u.byteLength=f,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)b(this,e,e+1);return this},u.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)b(this,e,e+3),b(this,e+1,e+2);return this},u.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)b(this,e,e+7),b(this,e+1,e+6),b(this,e+2,e+5),b(this,e+3,e+4);return this},u.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?S(this,0,t):m.apply(this,arguments)},u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},u.prototype.compare=function(t,e,n,r,a){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===a&&(a=this.length),e<0||n>t.length||r<0||a>this.length)throw new RangeError("out of range index");if(r>=a&&e>=n)return 0;if(r>=a)return-1;if(e>=n)return 1;if(this===t)return 0;for(var s=(a>>>=0)-(r>>>=0),o=(n>>>=0)-(e>>>=0),i=Math.min(s,o),c=this.slice(r,a),p=t.slice(e,n),l=0;l<i;++l)if(c[l]!==p[l]){s=c[l],o=p[l];break}return s<o?-1:o<s?1:0},u.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},u.prototype.indexOf=function(t,e,n){return y(this,t,e,n,!0)},u.prototype.lastIndexOf=function(t,e,n){return y(this,t,e,n,!1)},u.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var a=this.length-e;if((void 0===n||n>a)&&(n=a),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var s=!1;;)switch(r){case"hex":return O(this,t,e,n);case"utf8":case"utf-8":return w(this,t,e,n);case"ascii":return x(this,t,e,n);case"latin1":case"binary":return j(this,t,e,n);case"base64":return v(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function E(t,e,n){var r="";n=Math.min(t.length,n);for(var a=e;a<n;++a)r+=String.fromCharCode(127&t[a]);return r}function T(t,e,n){var r="";n=Math.min(t.length,n);for(var a=e;a<n;++a)r+=String.fromCharCode(t[a]);return r}function I(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var a="",s=e;s<n;++s)a+=P(t[s]);return a}function _(t,e,n){for(var r=t.slice(e,n),a="",s=0;s<r.length;s+=2)a+=String.fromCharCode(r[s]+256*r[s+1]);return a}function D(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function A(t,e,n,r,a,s){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<s)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function F(t,e,n,r){e<0&&(e=65535+e+1);for(var a=0,s=Math.min(t.length-n,2);a<s;++a)t[n+a]=(e&255<<8*(r?a:1-a))>>>8*(r?a:1-a)}function M(t,e,n,r){e<0&&(e=4294967295+e+1);for(var a=0,s=Math.min(t.length-n,4);a<s;++a)t[n+a]=e>>>8*(r?a:3-a)&255}function $(t,e,n,r,a,s){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function C(t,e,n,r,s){return s||$(t,0,n,4),a.write(t,e,n,r,23,4),n+4}function R(t,e,n,r,s){return s||$(t,0,n,8),a.write(t,e,n,r,52,8),n+8}u.prototype.slice=function(t,e){var n,r=this.length;if((t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t),u.TYPED_ARRAY_SUPPORT)(n=this.subarray(t,e)).__proto__=u.prototype;else{var a=e-t;n=new u(a,void 0);for(var s=0;s<a;++s)n[s]=this[s+t]}return n},u.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||D(t,e,this.length);for(var r=this[t],a=1,s=0;++s<e&&(a*=256);)r+=this[t+s]*a;return r},u.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||D(t,e,this.length);for(var r=this[t+--e],a=1;e>0&&(a*=256);)r+=this[t+--e]*a;return r},u.prototype.readUInt8=function(t,e){return e||D(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,e){return e||D(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,e){return e||D(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,e){return e||D(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,e){return e||D(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||D(t,e,this.length);for(var r=this[t],a=1,s=0;++s<e&&(a*=256);)r+=this[t+s]*a;return r>=(a*=128)&&(r-=Math.pow(2,8*e)),r},u.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||D(t,e,this.length);for(var r=e,a=1,s=this[t+--r];r>0&&(a*=256);)s+=this[t+--r]*a;return s>=(a*=128)&&(s-=Math.pow(2,8*e)),s},u.prototype.readInt8=function(t,e){return e||D(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){e||D(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt16BE=function(t,e){e||D(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt32LE=function(t,e){return e||D(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return e||D(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,e){return e||D(t,4,this.length),a.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return e||D(t,4,this.length),a.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return e||D(t,8,this.length),a.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return e||D(t,8,this.length),a.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||A(this,t,e,n,Math.pow(2,8*n)-1,0);var a=1,s=0;for(this[e]=255&t;++s<n&&(a*=256);)this[e+s]=t/a&255;return e+n},u.prototype.writeUIntBE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||A(this,t,e,n,Math.pow(2,8*n)-1,0);var a=n-1,s=1;for(this[e+a]=255&t;--a>=0&&(s*=256);)this[e+a]=t/s&255;return e+n},u.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||A(this,t,e,1,255,0),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},u.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||A(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):F(this,t,e,!0),e+2},u.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||A(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):F(this,t,e,!1),e+2},u.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||A(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):M(this,t,e,!0),e+4},u.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||A(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):M(this,t,e,!1),e+4},u.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var a=Math.pow(2,8*n-1);A(this,t,e,n,a-1,-a)}var s=0,o=1,i=0;for(this[e]=255&t;++s<n&&(o*=256);)t<0&&0===i&&0!==this[e+s-1]&&(i=1),this[e+s]=(t/o>>0)-i&255;return e+n},u.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var a=Math.pow(2,8*n-1);A(this,t,e,n,a-1,-a)}var s=n-1,o=1,i=0;for(this[e+s]=255&t;--s>=0&&(o*=256);)t<0&&0===i&&0!==this[e+s+1]&&(i=1),this[e+s]=(t/o>>0)-i&255;return e+n},u.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||A(this,t,e,1,127,-128),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||A(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):F(this,t,e,!0),e+2},u.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||A(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):F(this,t,e,!1),e+2},u.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||A(this,t,e,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):M(this,t,e,!0),e+4},u.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||A(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):M(this,t,e,!1),e+4},u.prototype.writeFloatLE=function(t,e,n){return C(this,t,e,!0,n)},u.prototype.writeFloatBE=function(t,e,n){return C(this,t,e,!1,n)},u.prototype.writeDoubleLE=function(t,e,n){return R(this,t,e,!0,n)},u.prototype.writeDoubleBE=function(t,e,n){return R(this,t,e,!1,n)},u.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var a,s=r-n;if(this===t&&n<e&&e<r)for(a=s-1;a>=0;--a)t[a+e]=this[a+n];else if(s<1e3||!u.TYPED_ARRAY_SUPPORT)for(a=0;a<s;++a)t[a+e]=this[a+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+s),e);return s},u.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var a=t.charCodeAt(0);a<256&&(t=a)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var s;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(s=e;s<n;++s)this[s]=t;else{var o=u.isBuffer(t)?t:L(new u(t,r).toString()),i=o.length;for(s=0;s<n-e;++s)this[s+e]=o[s%i]}return this};var B=/[^+\/0-9A-Za-z-_]/g;function P(t){return t<16?"0"+t.toString(16):t.toString(16)}function L(t,e){var n;e=e||1/0;for(var r=t.length,a=null,s=[],o=0;o<r;++o){if((n=t.charCodeAt(o))>55295&&n<57344){if(!a){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(e-=3)>-1&&s.push(239,191,189);continue}a=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),a=n;continue}n=65536+(a-55296<<10|n-56320)}else a&&(e-=3)>-1&&s.push(239,191,189);if(a=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function z(t){return r.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(B,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function V(t,e,n,r){for(var a=0;a<r&&!(a+n>=e.length||a>=t.length);++a)e[a+n]=t[a];return a}}).call(this,n(29))},function(t,e){function n(t,e,n,r,a,s,o){try{var i=t[s](o),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,a)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(a,s){var o=t.apply(e,r);function i(t){n(o,a,s,i,u,"next",t)}function u(t){n(o,a,s,i,u,"throw",t)}i(void 0)}))}}},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"clip_value_min",name:"clipValueMin",type:"number"},{tfName:"clip_value_max",name:"clipValueMax",type:"number"}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"clipValueMin",name:"clipValueMin",type:"number",defaultValue:0},{tfName:"clipValueMax",name:"clipValueMax",type:"number",defaultValue:6}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool",notSupported:!0}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}]},function(t,e,n){"use strict";n.r(e),n.d(e,"json",(function(){return r}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]}]},,,,,,,,,,,,,,,,,function(t,e,n){t.exports=n(81)},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof l?e:l,s=Object.create(a.prototype),o=new v(r||[]);return s._invoke=function(t,e,n){var r="suspendedStart";return function(a,s){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw s;return N()}for(n.method=a,n.arg=s;;){var o=n.delegate;if(o){var i=w(o,n);if(i){if(i===p)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=c(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,o),s}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p={};function l(){}function d(){}function h(){}var f={};f[a]=function(){return this};var m=Object.getPrototypeOf,b=m&&m(m(k([])));b&&b!==e&&n.call(b,a)&&(f=b);var y=h.prototype=l.prototype=Object.create(f);function g(t){["next","throw","return"].forEach((function(e){i(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){var r;this._invoke=function(a,s){function o(){return new e((function(r,o){!function r(a,s,o,i){var u=c(t[a],t,s);if("throw"!==u.type){var p=u.arg,l=p.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,o,i)}),(function(t){r("throw",t,o,i)})):e.resolve(l).then((function(t){p.value=t,o(p)}),(function(t){return r("throw",t,o,i)}))}i(u.arg)}(a,s,r,o)}))}return r=r?r.then(o,o):o()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=c(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function v(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,s=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return s.next=s}}return{next:N}}function N(){return{value:void 0,done:!0}}return d.prototype=y.constructor=h,h.constructor=d,d.displayName=i(h,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i(t,o,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(O.prototype),O.prototype[s]=function(){return this},t.AsyncIterator=O,t.async=function(e,n,r,a,s){void 0===s&&(s=Promise);var o=new O(u(e,n,r,a),s);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},g(y),i(y,o,"Generator"),y[a]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,v.prototype={constructor:v,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],o=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var i=n.call(s,"catchLoc"),u=n.call(s,"finallyLoc");if(i&&u){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(i){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var s=a;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";(function(t){var e=n(24),r=n(9);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const a=Object(r.b)();a.registerFlag("DEBUG",()=>!1,t=>{t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),a.registerFlag("IS_BROWSER",()=>e.a()),a.registerFlag("IS_NODE",()=>void 0!==t&&void 0!==t.versions&&void 0!==t.versions.node),a.registerFlag("IS_CHROME",()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),a.registerFlag("PROD",()=>!1),a.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>a.getBool("DEBUG")),a.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),a.registerFlag("IS_TEST",()=>!1)}).call(this,n(26))},function(t,e,n){"use strict";(function(t){var e=n(9);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const r=()=>n(68);let a;class s{constructor(){this.util=n(69),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return null!=Object(e.b)().global.fetch?Object(e.b)().global.fetch(t,n):(null==a&&(a=r()),a(t,n))}now(){const e=t.hrtime();return 1e3*e[0]+e[1]/1e6}encode(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)}decode(t,e){return 0===t.length?"":new this.util.TextDecoder(e).decode(t)}}Object(e.b)().get("IS_NODE")&&Object(e.b)().setPlatform("node",new s)}).call(this,n(26))},function(t,e){},function(t,e){},function(t,e,n){(function(t){var r;!function(t,a,s){function o(t){var e,n=this,r=(e=4022871197,function(t){t=t.toString();for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)});n.next=function(){var t=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=t-(n.c=0|t)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(t),n.s0<0&&(n.s0+=1),n.s1-=r(t),n.s1<0&&(n.s1+=1),n.s2-=r(t),n.s2<0&&(n.s2+=1),r=null}function i(t,e){return e.c=t.c,e.s0=t.s0,e.s1=t.s1,e.s2=t.s2,e}function u(t,e){var n=new o(t),r=e&&e.state,a=n.next;return a.int32=function(){return 4294967296*n.next()|0},a.double=function(){return a()+11102230246251565e-32*(2097152*a()|0)},a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n(14)&&n(20)?void 0===(r=function(){return u}.call(e,n,e,a))||(a.exports=r):this.alea=u}(0,t,n(14))}).call(this,n(19)(t))},function(t,e,n){(function(t){var r;!function(t,a,s){function o(t){var e=this,n="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var t=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^t^t>>>8},t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),e.next()}function i(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e}function u(t,e){var n=new o(t),r=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n(14)&&n(20)?void 0===(r=function(){return u}.call(e,n,e,a))||(a.exports=r):this.xor128=u}(0,t,n(14))}).call(this,n(19)(t))},function(t,e,n){(function(t){var r;!function(t,a,s){function o(t){var e=this,n="";e.next=function(){var t=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^t^t<<1)|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),r==n.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function i(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e.v=t.v,e.d=t.d,e}function u(t,e){var n=new o(t),r=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n(14)&&n(20)?void 0===(r=function(){return u}.call(e,n,e,a))||(a.exports=r):this.xorwow=u}(0,t,n(14))}).call(this,n(19)(t))},function(t,e,n){(function(t){var r;!function(t,a,s){function o(t){var e=this;e.next=function(){var t,n,r=e.x,a=e.i;return t=r[a],n=(t^=t>>>7)^t<<24,n^=(t=r[a+1&7])^t>>>10,n^=(t=r[a+3&7])^t>>>3,n^=(t=r[a+4&7])^t<<7,t=r[a+7&7],n^=(t^=t<<13)^t<<9,r[a]=n,e.i=a+1&7,n},function(t,e){var n,r=[];if(e===(0|e))r[0]=e;else for(e=""+e,n=0;n<e.length;++n)r[7&n]=r[7&n]<<15^e.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],t.x=r,t.i=0,n=256;n>0;--n)t.next()}(e,t)}function i(t,e){return e.x=t.x.slice(),e.i=t.i,e}function u(t,e){null==t&&(t=+new Date);var n=new o(t),r=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},a.int32=n.next,a.quick=a,r&&(r.x&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n(14)&&n(20)?void 0===(r=function(){return u}.call(e,n,e,a))||(a.exports=r):this.xorshift7=u}(0,t,n(14))}).call(this,n(19)(t))},function(t,e,n){(function(t){var r;!function(t,a,s){function o(t){var e=this;e.next=function(){var t,n,r=e.w,a=e.X,s=e.i;return e.w=r=r+1640531527|0,n=a[s+34&127],t=a[s=s+1&127],n^=n<<13,t^=t<<17,n^=n>>>15,t^=t>>>12,n=a[s]=n^t,e.i=s,n+(r^r>>>16)|0},function(t,e){var n,r,a,s,o,i=[],u=128;for(e===(0|e)?(r=e,e=null):(e+="\0",r=0,u=Math.max(u,e.length)),a=0,s=-32;s<u;++s)e&&(r^=e.charCodeAt((s+32)%e.length)),0===s&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,s>=0&&(o=o+1640531527|0,a=0==(n=i[127&s]^=r+o)?a+1:0);for(a>=128&&(i[127&(e&&e.length||0)]=-1),a=127,s=512;s>0;--s)r=i[a+34&127],n=i[a=a+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,i[a]=r^n;t.w=o,t.X=i,t.i=a}(e,t)}function i(t,e){return e.i=t.i,e.w=t.w,e.X=t.X.slice(),e}function u(t,e){null==t&&(t=+new Date);var n=new o(t),r=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},a.int32=n.next,a.quick=a,r&&(r.X&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n(14)&&n(20)?void 0===(r=function(){return u}.call(e,n,e,a))||(a.exports=r):this.xor4096=u}(0,t,n(14))}).call(this,n(19)(t))},function(t,e,n){(function(t){var r;!function(t,a,s){function o(t){var e=this,n="";e.next=function(){var t=e.b,n=e.c,r=e.d,a=e.a;return t=t<<25^t>>>7^n,n=n-r|0,r=r<<24^r>>>8^a,a=a-t|0,e.b=t=t<<20^t>>>12^n,e.c=n=n-r|0,e.d=r<<16^n>>>16^a,e.a=a-t|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,t===Math.floor(t)?(e.a=t/4294967296|0,e.b=0|t):n+=t;for(var r=0;r<n.length+20;r++)e.b^=0|n.charCodeAt(r),e.next()}function i(t,e){return e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e}function u(t,e){var n=new o(t),r=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},a.int32=n.next,a.quick=a,r&&("object"==typeof r&&i(r,n),a.state=function(){return i(n,{})}),a}a&&a.exports?a.exports=u:n(14)&&n(20)?void 0===(r=function(){return u}.call(e,n,e,a))||(a.exports=r):this.tychei=u}(0,t,n(14))}).call(this,n(19)(t))},function(t,e,n){var r;!function(a,s){var o,i=this,u=s.pow(256,6),c=s.pow(2,52),p=2*c;function l(t,e,n){var r=[],l=f(function t(e,n){var r,a=[],s=typeof e;if(n&&"object"==s)for(r in e)try{a.push(t(e[r],n-1))}catch(t){}return a.length?a:"string"==s?e:e+"\0"}((e=1==e?{entropy:!0}:e||{}).entropy?[t,m(a)]:null==t?function(){try{var t;return o&&(t=o.randomBytes)?t=t(256):(t=new Uint8Array(256),(i.crypto||i.msCrypto).getRandomValues(t)),m(t)}catch(t){var e=i.navigator,n=e&&e.plugins;return[+new Date,i,n,i.screen,m(a)]}}():t,3),r),b=new d(r),y=function(){for(var t=b.g(6),e=u,n=0;t<c;)t=256*(t+n),e*=256,n=b.g(1);for(;t>=p;)t/=2,e/=2,n>>>=1;return(t+n)/e};return y.int32=function(){return 0|b.g(4)},y.quick=function(){return b.g(4)/4294967296},y.double=y,f(m(b.S),a),(e.pass||n||function(t,e,n,r){return r&&(r.S&&h(r,b),t.state=function(){return h(b,{})}),n?(s.random=t,e):t})(y,l,"global"in e?e.global:this==s,e.state)}function d(t){var e,n=t.length,r=this,a=0,s=r.i=r.j=0,o=r.S=[];for(n||(t=[n++]);a<256;)o[a]=a++;for(a=0;a<256;a++)o[a]=o[s=255&s+t[a%n]+(e=o[a])],o[s]=e;(r.g=function(t){for(var e,n=0,a=r.i,s=r.j,o=r.S;t--;)e=o[a=255&a+1],n=256*n+o[255&(o[a]=o[s=255&s+e])+(o[s]=e)];return r.i=a,r.j=s,n})(256)}function h(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function f(t,e){for(var n,r=t+"",a=0;a<r.length;)e[255&a]=255&(n^=19*e[255&a])+r.charCodeAt(a++);return m(e)}function m(t){return String.fromCharCode.apply(0,t)}if(s.seedrandom=l,f(s.random(),a),t.exports){t.exports=l;try{o=n(77)}catch(t){}}else void 0===(r=function(){return l}.call(e,n,e,t))||(t.exports=r)}([],Math)},function(t,e){},function(t,e,n){"use strict";e.byteLength=function(t){var e=c(t),n=e[0],r=e[1];return 3*(n+r)/4-r},e.toByteArray=function(t){var e,n,r=c(t),o=r[0],i=r[1],u=new s(function(t,e,n){return 3*(e+n)/4-n}(0,o,i)),p=0,l=i>0?o-4:o;for(n=0;n<l;n+=4)e=a[t.charCodeAt(n)]<<18|a[t.charCodeAt(n+1)]<<12|a[t.charCodeAt(n+2)]<<6|a[t.charCodeAt(n+3)],u[p++]=e>>16&255,u[p++]=e>>8&255,u[p++]=255&e;2===i&&(e=a[t.charCodeAt(n)]<<2|a[t.charCodeAt(n+1)]>>4,u[p++]=255&e);1===i&&(e=a[t.charCodeAt(n)]<<10|a[t.charCodeAt(n+1)]<<4|a[t.charCodeAt(n+2)]>>2,u[p++]=e>>8&255,u[p++]=255&e);return u},e.fromByteArray=function(t){for(var e,n=t.length,a=n%3,s=[],o=0,i=n-a;o<i;o+=16383)s.push(p(t,o,o+16383>i?i:o+16383));1===a?(e=t[n-1],s.push(r[e>>2]+r[e<<4&63]+"==")):2===a&&(e=(t[n-2]<<8)+t[n-1],s.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return s.join("")};for(var r=[],a=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,u=o.length;i<u;++i)r[i]=o[i],a[o.charCodeAt(i)]=i;function c(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function p(t,e,n){for(var a,s,o=[],i=e;i<n;i+=3)a=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]),o.push(r[(s=a)>>18&63]+r[s>>12&63]+r[s>>6&63]+r[63&s]);return o.join("")}a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,n,r,a){var s,o,i=8*a-r-1,u=(1<<i)-1,c=u>>1,p=-7,l=n?a-1:0,d=n?-1:1,h=t[e+l];for(l+=d,s=h&(1<<-p)-1,h>>=-p,p+=i;p>0;s=256*s+t[e+l],l+=d,p-=8);for(o=s&(1<<-p)-1,s>>=-p,p+=r;p>0;o=256*o+t[e+l],l+=d,p-=8);if(0===s)s=1-c;else{if(s===u)return o?NaN:1/0*(h?-1:1);o+=Math.pow(2,r),s-=c}return(h?-1:1)*o*Math.pow(2,s-r)},e.write=function(t,e,n,r,a,s){var o,i,u,c=8*s-a-1,p=(1<<c)-1,l=p>>1,d=23===a?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:s-1,f=r?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(i=isNaN(e)?1:0,o=p):(o=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),(e+=o+l>=1?d/u:d*Math.pow(2,1-l))*u>=2&&(o++,u/=2),o+l>=p?(i=0,o=p):o+l>=1?(i=(e*u-1)*Math.pow(2,a),o+=l):(i=e*Math.pow(2,l-1)*Math.pow(2,a),o=0));a>=8;t[n+h]=255&i,h+=f,i/=256,a-=8);for(o=o<<a|i,c+=a;c>0;t[n+h]=255&o,h+=f,o/=256,c-=8);t[n+h-f]|=128*m}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){"use strict";n.r(e);var r=n(27),a=n.n(r),s=n(31),o=n.n(s),i=n(7),u=n(13),c=n(2);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class p{constructor(t,e,n){this.node=t,this.tensorMap=e,this.context=n,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(t=>this.getInput(t)),null!=t.rawAttrs&&(this.attrs=Object.keys(t.rawAttrs).reduce((t,e)=>(t[e]=this.getAttr(e),t),{}))}getInput(t){return Object(c.e)(t,this.tensorMap,this.context)}getAttr(t,e){const n=this.node.rawAttrs[t];if(null!=n.tensor)return Object(c.e)(t,this.tensorMap,this.context);if(null!=n.i||null!=n.f)return Object(u.f)(this.node.rawAttrs,t,e);if(null!=n.s)return Object(u.i)(this.node.rawAttrs,t,e);if(null!=n.b)return Object(u.c)(this.node.rawAttrs,t,e);if(null!=n.shape)return Object(u.k)(this.node.rawAttrs,t,e);if(null!=n.type)return Object(u.e)(this.node.rawAttrs,t,e);if(null!=n.list){if(null!=n.list.i||null!=n.list.f)return Object(u.g)(this.node.rawAttrs,t,e);if(null!=n.list.s)return Object(u.h)(this.node.rawAttrs,t,e);if(null!=n.list.shape)return Object(u.j)(this.node.rawAttrs,t,e);if(null!=n.list.b)return Object(u.b)(this.node.rawAttrs,t,e);if(null!=n.list.type)return Object(u.d)(this.node.rawAttrs,t,e)}return e}}var l=n(18);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function d(t,e,n=""){i.Fc.assert(function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(-1!==t[n]&&-1!==e[n]&&t[n]!==e[n])return!1;return!0}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */(t,e),()=>n+` Shapes ${t} and ${e} must match`)}class h{constructor(t,e,n,r,a,s,o){this.name=t,this.dtype=e,this.maxSize=n,this.elementShape=r,this.identicalElementShapes=a,this.dynamicSize=s,this.clearAfterRead=o,this.tensors=[],this.closed_=!1,this.idTensor=Object(i.Zb)(0),Object(i.ib)(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(){this.tensors.forEach(t=>t.tensor.dispose()),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const e=this.tensors[t];if(e.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(e.cleared=!0),e.read=!0,e.tensor}readMany(t){return t.map(t=>this.read(t))}write(t,e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const n=this.tensors[t]||{};if(e.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},\n          because the value dtype is ${e.dtype}, but TensorArray dtype is ${this.dtype}.`);if(0!==this.size()||null!=this.elementShape&&0!==this.elementShape.length||(this.elementShape=e.shape),d(this.elementShape,e.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),n.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(n.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);n.tensor=e,Object(i.ib)(e),n.written=!0,this.tensors[t]=n}writeMany(t,e){if(t.length!==e.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${e.length}.`);t.forEach((t,n)=>this.write(t,e[n]))}gather(t,e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${e}`);if(t)t=t.slice(0,this.size());else{t=[];for(let e=0;e<this.size();e++)t.push(e)}if(0===t.length)return Object(i.xc)([],[0].concat(this.elementShape));const n=this.readMany(t);return d(this.elementShape,n[0].shape,"TensorArray shape mismatch: "),Object(i.rc)(n,0)}concat(t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(0===this.size())return Object(i.xc)([],[0].concat(this.elementShape));const e=[];for(let t=0;t<this.size();t++)e.push(t);const n=this.readMany(e);return d(this.elementShape,n[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${n[0].shape})`),Object(i.A)(n,0)}scatter(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const n=Math.max(...t);if(!this.dynamicSize&&n>=this.maxSize)throw new Error(`Max index must be < array size (${n}  vs. ${this.maxSize})`);this.writeMany(t,Object(i.Ec)(e,0))}split(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);let n=0;const r=t.map(t=>(n+=t,n));if(n!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${n}, and tensor's shape is: ${e.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const a=0===n?0:e.size/n,s=[];Object(i.zc)(()=>{e=e.reshape([1,n,a]);for(let n=0;n<t.length;++n){const o=[0,0===n?0:r[n-1],0],u=[1,t[n],a];s[n]=Object(i.hc)(e,o,u).reshape(this.elementShape)}return s});const o=[];for(let e=0;e<t.length;e++)o[e]=e;this.writeMany(o,s)}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class f{constructor(t,e,n,r=-1){this.tensors=t,this.elementShape=e,this.elementDtype=n,null!=t&&t.forEach(t=>{if(n!==t.dtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${t.dtype}`);d(e,t.shape,"TensorList shape mismatch: "),Object(i.ib)(t)}),this.idTensor=Object(i.Zb)(0),this.maxNumElements=r,Object(i.ib)(this.idTensor)}get id(){return this.idTensor.id}copy(){return new f([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(){this.tensors.forEach(t=>t.dispose()),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,e,n=-1){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(-1!==n&&this.tensors.length!==n)throw new Error(`Operation expected a list with ${n} elements but got a list with ${this.tensors.length} elements.`);return d(t,this.elementShape,"TensorList shape mismatch: "),Object(i.zc)(()=>{const e=this.tensors.map(e=>e.reshape(t));return Object(i.rc)(e,0)})}popBack(t,e){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(0===this.size())throw new Error("Trying to pop from an empty list.");const n=this.tensors.pop();return d(n.shape,t,"TensorList shape mismatch: "),n.reshape(t)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(d(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Object(i.ib)(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error("TensorListResize expects size to be non-negative. Got: "+t);if(-1!==this.maxNumElements&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);this.tensors.length=t}getItem(t,e,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(null==this.tensors[t])throw new Error(`element at index ${t} is null.`);return d(this.tensors[t].shape,e,"TensorList shape mismatch: "),this.tensors[t]}setItem(t,e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(t<0||-1!==this.maxNumElements&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);d(this.elementShape,e.shape,"TensorList shape mismatch: "),Object(i.ib)(e),this.tensors[t]=e}gather(t,e,n){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);return d(this.elementShape,n,"TensorList shape mismatch: "),0===(t=t.slice(0,this.size())).length?Object(i.xc)([],[0].concat(this.elementShape)):Object(i.zc)(()=>{const e=t.map(t=>this.tensors[t].reshape(n));return Object(i.rc)(e,0)})}concat(t,e){if(t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);return d(this.elementShape,e,"TensorList shape mismatch: "),0===this.size()?Object(i.xc)([],[0].concat(this.elementShape)):Object(i.zc)(()=>{const t=this.tensors.map(t=>t.reshape(e));return Object(i.A)(t,0)})}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const m=async(t,e,n)=>{switch(t.op){case"If":case"StatelessIf":{const r=Object(c.d)("thenBranch",t,e,n),a=Object(c.d)("elseBranch",t,e,n),s=Object(c.d)("cond",t,e,n),o=Object(c.d)("args",t,e,n);return(await s.data())[0]?n.functionMap[r].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap):n.functionMap[a].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const r=Object(c.d)("body",t,e,n),a=Object(c.d)("cond",t,e,n),s=Object(c.d)("args",t,e,n),o=await n.functionMap[a].executeFunctionAsync(s,n.tensorArrayMap,n.tensorListMap),i=s.map(t=>t.id);let u=await o[0].data();o.forEach(t=>{t.kept||-1!==i.indexOf(t.id)||t.dispose()});let p=s;for(;u[0];){const t=p;p=await n.functionMap[r].executeFunctionAsync(p,n.tensorArrayMap,n.tensorListMap);const e=p.map(t=>t.id);t.forEach(t=>{t.kept||-1!==i.indexOf(t.id)||-1!==e.indexOf(t.id)||t.dispose()});const s=await n.functionMap[a].executeFunctionAsync(p,n.tensorArrayMap,n.tensorListMap);u=await s[0].data(),s.forEach(t=>{t.kept||-1!==i.indexOf(t.id)||-1!==e.indexOf(t.id)||t.dispose()})}return p}case"LoopCond":{const r=Object(c.d)("pred",t,e,n);return[Object(c.a)(r)]}case"Switch":{const r=Object(c.d)("pred",t,e,n);let a=Object(c.d)("data",t,e,n);return a.kept||(a=Object(c.a)(a)),(await r.data())[0]?[void 0,a]:[a,void 0]}case"Merge":{const r=t.inputNames.find(t=>void 0!==Object(c.e)(t,e,n));if(r){const t=Object(c.e)(r,e,n);return[Object(c.a)(t)]}return}case"Enter":{const r=Object(c.d)("frameName",t,e,n),a=Object(c.d)("tensor",t,e,n);return n.enterFrame(r),[Object(c.a)(a)]}case"Exit":{const r=Object(c.d)("tensor",t,e,n);return n.exitFrame(),[Object(c.a)(r)]}case"NextIteration":{const r=Object(c.d)("tensor",t,e,n);return n.nextIteration(),[Object(c.a)(r)]}case"TensorArrayV3":{const r=Object(c.d)("size",t,e,n),a=Object(c.d)("dtype",t,e,n),s=Object(c.d)("elementShape",t,e,n),o=Object(c.d)("dynamicSize",t,e,n),u=Object(c.d)("clearAfterRead",t,e,n),p=Object(c.d)("identicalElementShapes",t,e,n),l=Object(c.d)("name",t,e,n),d=new h(l,a,r,s,p,o,u);return n.addTensorArray(d),[d.idTensor,Object(i.Zb)(1)]}case"TensorArrayWriteV3":{const r=Object(c.d)("tensorArrayId",t,e,n),a=Object(c.d)("index",t,e,n),s=Object(c.d)("tensor",t,e,n),o=n.getTensorArray(r.id);return o.write(a,s),[o.idTensor]}case"TensorArrayReadV3":{const r=Object(c.d)("tensorArrayId",t,e,n),a=Object(c.d)("index",t,e,n);return[n.getTensorArray(r.id).read(a)]}case"TensorArrayGatherV3":{const r=Object(c.d)("tensorArrayId",t,e,n),a=Object(c.d)("indices",t,e,n),s=Object(c.d)("dtype",t,e,n);return[n.getTensorArray(r.id).gather(a,s)]}case"TensorArrayScatterV3":{const r=Object(c.d)("tensorArrayId",t,e,n),a=Object(c.d)("indices",t,e,n),s=Object(c.d)("tensor",t,e,n),o=n.getTensorArray(r.id);return o.scatter(a,s),[o.idTensor]}case"TensorArrayConcatV3":{const r=Object(c.d)("tensorArrayId",t,e,n),a=n.getTensorArray(r.id),s=Object(c.d)("dtype",t,e,n);return[a.concat(s)]}case"TensorArraySplitV3":{const r=Object(c.d)("tensorArrayId",t,e,n),a=Object(c.d)("tensor",t,e,n),s=Object(c.d)("lengths",t,e,n),o=n.getTensorArray(r.id);return o.split(s,a),[o.idTensor]}case"TensorArraySizeV3":{const r=Object(c.d)("tensorArrayId",t,e,n),a=n.getTensorArray(r.id);return[Object(i.Zb)(a.size(),"int32")]}case"TensorArrayCloseV3":{const r=Object(c.d)("tensorArrayId",t,e,n),a=n.getTensorArray(r.id);return a.clearAndClose(),[a.idTensor]}case"TensorListSetItem":{const r=Object(c.d)("tensorListId",t,e,n),a=Object(c.d)("index",t,e,n),s=Object(c.d)("tensor",t,e,n),o=n.getTensorList(r.id);return o.setItem(a,s),[o.idTensor]}case"TensorListGetItem":{const r=Object(c.d)("tensorListId",t,e,n),a=Object(c.d)("index",t,e,n),s=Object(c.d)("elementShape",t,e,n),o=Object(c.d)("elementDType",t,e,n);return[n.getTensorList(r.id).getItem(a,s,o)]}case"TensorListScatterV2":case"TensorListScatter":{const r=Object(c.d)("indices",t,e,n),a=function(t,e,n,r){if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const a=Math.max(...e);if(null!=r&&-1!==r&&a>=r)throw new Error(`Max index must be < array size (${a}  vs. ${r})`);const s=new f([],n,t.dtype,r),o=Object(i.Ec)(t,0);return e.forEach((t,e)=>{s.setItem(t,o[e])}),s}(Object(c.d)("tensor",t,e,n),r,Object(c.d)("elementShape",t,e,n),Object(c.d)("numElements",t,e,n));return n.addTensorList(a),[a.idTensor]}case"TensorListReserve":{const r=function(t,e,n){return new f([],t,e,n)}(Object(c.d)("elementShape",t,e,n),Object(c.d)("elementDType",t,e,n),Object(c.d)("numElements",t,e,n));return n.addTensorList(r),[r.idTensor]}case"TensorListGather":{const r=Object(c.d)("tensorListId",t,e,n),a=Object(c.d)("indices",t,e,n),s=Object(c.d)("elementShape",t,e,n),o=Object(c.d)("elementDType",t,e,n);return[n.getTensorList(r.id).gather(a,o,s)]}case"TensorListStack":{const r=Object(c.d)("tensorListId",t,e,n),a=Object(c.d)("elementShape",t,e,n),s=Object(c.d)("elementDType",t,e,n),o=Object(c.d)("numElements",t,e,n);return[n.getTensorList(r.id).stack(a,s,o)]}case"TensorListFromTensor":{const r=function(t,e,n){const r=t.dtype;if(t.shape.length<1)throw new Error("Tensor must be at least a vector, but saw shape: "+t.shape);if(t.dtype!==n)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${n}`);d(t.shape.slice(1),e,"TensorList shape mismatch: ");const a=t.unstack();return new f(a,e,r)}(Object(c.d)("tensor",t,e,n),Object(c.d)("elementShape",t,e,n),Object(c.d)("elementDType",t,e,n));return n.addTensorList(r),[r.idTensor]}case"TensorListConcat":{const r=Object(c.d)("tensorListId",t,e,n),a=n.getTensorList(r.id),s=Object(c.d)("dtype",t,e,n),o=Object(c.d)("elementShape",t,e,n);return[a.concat(s,o)]}case"TensorListPushBack":{const r=Object(c.d)("tensorListId",t,e,n),a=Object(c.d)("tensor",t,e,n),s=n.getTensorList(r.id);return s.pushBack(a),[s.idTensor]}case"TensorListPopBack":{const r=Object(c.d)("tensorListId",t,e,n),a=Object(c.d)("elementShape",t,e,n),s=Object(c.d)("elementDType",t,e,n);return[n.getTensorList(r.id).popBack(a,s)]}case"TensorListSplit":{const r=Object(c.d)("tensor",t,e,n),a=Object(c.d)("elementShape",t,e,n),s=function(t,e,n){let r=0;const a=e.map(t=>(r+=t,r));if(r!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${r}, and tensor's shape is: ${t.shape}`);const s=0===r?0:t.size/r,o=Object(i.zc)(()=>{const o=[];t=t.reshape([1,r,s]);for(let r=0;r<e.length;++r){const u=[0,0===r?0:a[r-1],0],c=[1,e[r],s];o[r]=Object(i.hc)(t,u,c).reshape(n)}return t.dispose(),o}),u=new f([],n,t.dtype,e.length);for(let t=0;t<o.length;t++)u.setItem(t,o[t]);return u}(r,Object(c.d)("lengths",t,e,n),a);return n.addTensorList(s),[s.idTensor]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function b(t,e,n){const[r,a]=Object(c.d)("fusedOps",t,e,n),s="biasadd"===r,o="prelu"===a,i="fusedbatchnorm"===r,u=Object(c.d)("numArgs",t,e,n);if(s){if(o&&2!==u)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!o&&1!==u)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(i)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported.");const p=Object(c.d)("strides",t,e,n),l=Object(c.c)(t,e,n),d=Object(c.d)("dataFormat",t,e,n).toUpperCase(),h=Object(c.d)("dilations",t,e,n),[f,m]=Object(c.d)("args",t,e,n);return{stride:p,pad:l,dataFormat:d,dilations:h,biasArg:f,preluArg:m,activationFunc:a}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function y(t,e,n){return{boxes:Object(c.d)("boxes",t,e,n),scores:Object(c.d)("scores",t,e,n),maxOutputSize:Object(c.d)("maxOutputSize",t,e,n),iouThreshold:Object(c.d)("iouThreshold",t,e,n),scoreThreshold:Object(c.d)("scoreThreshold",t,e,n),softNmsSigma:Object(c.d)("softNmsSigma",t,e,n)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function g(t,e,n){const r=((t,e,n)=>{switch(t.category){case"arithmetic":return i.zc(()=>((t,e,n)=>{switch(t.op){case"BiasAdd":case"AddV2":case"Add":return[i.e(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"AddN":return[i.f(Object(c.d)("tensors",t,e,n))];case"FloorMod":case"Mod":return[i.Db(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"Mul":return[i.Eb(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"RealDiv":case"Div":return[i.L(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"DivNoNan":return[i.M(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"FloorDiv":return[i.X(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"Sub":return[i.tc(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"Minimum":return[i.Cb(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"Maximum":return[i.zb(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"Pow":return[i.Mb(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"SquaredDifference":return[i.pc(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"basic_math":return i.zc(()=>((t,e,n)=>{switch(t.op){case"Abs":case"ComplexAbs":return[i.b(Object(c.d)("x",t,e,n))];case"Acos":return[i.c(Object(c.d)("x",t,e,n))];case"Acosh":return[i.d(Object(c.d)("x",t,e,n))];case"Asin":return[i.k(Object(c.d)("x",t,e,n))];case"Asinh":return[i.l(Object(c.d)("x",t,e,n))];case"Atan":return[i.m(Object(c.d)("x",t,e,n))];case"Atan2":return[i.n(Object(c.d)("x",t,e,n),Object(c.d)("y",t,e,n))];case"Atanh":return[i.o(Object(c.d)("x",t,e,n))];case"Ceil":return[i.w(Object(c.d)("x",t,e,n))];case"Complex":return[i.z(Object(c.d)("real",t,e,n),Object(c.d)("imag",t,e,n))];case"Cos":return[i.F(Object(c.d)("x",t,e,n))];case"Cosh":return[i.G(Object(c.d)("x",t,e,n))];case"Elu":return[i.N(Object(c.d)("x",t,e,n))];case"Erf":return[i.Q(Object(c.d)("x",t,e,n))];case"Exp":return[i.R(Object(c.d)("x",t,e,n))];case"Expm1":return[i.T(Object(c.d)("x",t,e,n))];case"Floor":return[i.W(Object(c.d)("x",t,e,n))];case"Log":return[i.ob(Object(c.d)("x",t,e,n))];case"Log1p":return[i.pb(Object(c.d)("x",t,e,n))];case"Imag":return[i.eb(Object(c.d)("x",t,e,n))];case"Neg":return[i.Gb(Object(c.d)("x",t,e,n))];case"Reciprocal":return[i.Sb(Object(c.d)("x",t,e,n))];case"Real":return[i.Rb(Object(c.d)("x",t,e,n))];case"Relu":return[i.Tb(Object(c.d)("x",t,e,n))];case"Round":return[i.Xb(Object(c.d)("x",t,e,n))];case"Selu":return[i.bc(Object(c.d)("x",t,e,n))];case"Sigmoid":return[i.dc(Object(c.d)("x",t,e,n))];case"Sin":return[i.fc(Object(c.d)("x",t,e,n))];case"Sign":return[i.ec(Object(c.d)("x",t,e,n))];case"Sinh":return[i.gc(Object(c.d)("x",t,e,n))];case"Softplus":return[i.jc(Object(c.d)("x",t,e,n))];case"Sqrt":return[i.nc(Object(c.d)("x",t,e,n))];case"Square":return[i.oc(Object(c.d)("x",t,e,n))];case"Tanh":return[i.wc(Object(c.d)("x",t,e,n))];case"Tan":return[i.vc(Object(c.d)("x",t,e,n))];case"Relu6":case"ClipByValue":return[i.x(Object(c.d)("x",t,e,n),Object(c.d)("clipValueMin",t,e,n),Object(c.d)("clipValueMax",t,e,n))];case"Rsqrt":return[i.Yb(Object(c.e)(t.inputNames[0],e,n))];case"Prod":return[i.Ob(Object(c.d)("x",t,e,n),Object(c.d)("axes",t,e,n))];case"LeakyRelu":return[i.jb(Object(c.d)("x",t,e,n),Object(c.d)("alpha",t,e,n))];case"Prelu":return[i.Nb(Object(c.d)("x",t,e,n),Object(c.d)("alpha",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"control":return m(t,e,n);case"convolution":return i.zc(()=>((t,e,n)=>{switch(t.op){case"Conv1D":{const r=Object(c.d)("stride",t,e,n),a=Object(c.d)("pad",t,e,n),s=Object(c.d)("dataFormat",t,e,n).toUpperCase(),o=Object(c.d)("dilation",t,e,n);return[i.B(Object(c.d)("x",t,e,n),Object(c.d)("filter",t,e,n),r,a,s,o)]}case"Conv2D":{const r=Object(c.d)("strides",t,e,n),a=Object(c.c)(t,e,n),s=Object(c.d)("dataFormat",t,e,n).toUpperCase(),o=Object(c.d)("dilations",t,e,n);return[i.C(Object(c.d)("x",t,e,n),Object(c.d)("filter",t,e,n),[r[1],r[2]],a,s,[o[1],o[2]])]}case"_FusedConv2D":{const{stride:r,pad:a,dataFormat:s,dilations:o,biasArg:u,preluArg:p,activationFunc:l}=b(t,e,n);return[i.Y.conv2d({x:Object(c.d)("x",t,e,n),filter:Object(c.d)("filter",t,e,n),strides:[r[1],r[2]],pad:a,dataFormat:s,dilations:[o[1],o[2]],bias:u,activation:l,preluActivationWeights:p})]}case"FusedDepthwiseConv2dNative":{const{stride:r,pad:a,dataFormat:s,dilations:o,biasArg:u,preluArg:p,activationFunc:l}=b(t,e,n);return[i.Y.depthwiseConv2d({x:Object(c.d)("x",t,e,n),filter:Object(c.d)("filter",t,e,n),strides:[r[1],r[2]],pad:a,dataFormat:s,dilations:[o[1],o[2]],bias:u,activation:l,preluActivationWeights:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const r=Object(c.d)("outputShape",t,e,n),a=Object(c.d)("strides",t,e,n),s=Object(c.c)(t,e,n);return[i.D(Object(c.d)("x",t,e,n),Object(c.d)("filter",t,e,n),r,[a[1],a[2]],s)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const r=Object(c.d)("strides",t,e,n),a=Object(c.c)(t,e,n),s=Object(c.d)("dilations",t,e,n),o=Object(c.d)("dataFormat",t,e,n).toUpperCase();return[i.J(Object(c.d)("input",t,e,n),Object(c.d)("filter",t,e,n),[r[1],r[2]],a,o,[s[1],s[2]])]}case"Conv3D":{const r=Object(c.d)("strides",t,e,n),a=Object(c.d)("pad",t,e,n),s=Object(c.d)("dataFormat",t,e,n).toUpperCase(),o=Object(c.d)("dilations",t,e,n);return[i.E(Object(c.d)("x",t,e,n),Object(c.d)("filter",t,e,n),[r[1],r[2],r[3]],a,s,[o[1],o[2],o[3]])]}case"AvgPool":{const r=Object(c.d)("strides",t,e,n),a=Object(c.d)("pad",t,e,n),s=Object(c.d)("kernelSize",t,e,n);return[i.p(Object(c.d)("x",t,e,n),[s[1],s[2]],[r[1],r[2]],a)]}case"MaxPool":{const r=Object(c.d)("strides",t,e,n),a=Object(c.d)("pad",t,e,n),s=Object(c.d)("kernelSize",t,e,n);return[i.wb(Object(c.d)("x",t,e,n),[s[1],s[2]],[r[1],r[2]],a)]}case"MaxPoolWithArgmax":{const r=Object(c.d)("strides",t,e,n),a=Object(c.d)("pad",t,e,n),s=Object(c.d)("kernelSize",t,e,n),o=Object(c.d)("includeBatchInIndex",t,e,n),{result:u,indexes:p}=i.yb(Object(c.d)("x",t,e,n),[s[1],s[2]],[r[1],r[2]],a,o);return[u,p]}case"AvgPool3D":{const r=Object(c.d)("strides",t,e,n),a=Object(c.d)("pad",t,e,n),s=Object(c.d)("kernelSize",t,e,n);return[i.q(Object(c.d)("x",t,e,n),[s[1],s[2],s[3]],[r[1],r[2],r[3]],a)]}case"MaxPool3D":{const r=Object(c.d)("strides",t,e,n),a=Object(c.d)("pad",t,e,n),s=Object(c.d)("kernelSize",t,e,n);return[i.xb(Object(c.d)("x",t,e,n),[s[1],s[2],s[3]],[r[1],r[2],r[3]],a)]}case"Dilation2D":{const r=Object(c.d)("strides",t,e,n),a=Object(c.d)("pad",t,e,n),s=Object(c.d)("dilations",t,e,n),o=r[1],u=r[2],p=s[1],l=s[2];return[i.K(Object(c.d)("x",t,e,n),Object(c.d)("filter",t,e,n),[o,u],a,[p,l],"NHWC")]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"creation":return i.zc(()=>((t,e,n)=>{switch(t.op){case"Fill":{const r=Object(c.d)("shape",t,e,n),a=Object(c.d)("dtype",t,e,n),s=Object(c.d)("value",t,e,n);return[i.V(r,s,a)]}case"LinSpace":{const r=Object(c.d)("start",t,e,n),a=Object(c.d)("stop",t,e,n),s=Object(c.d)("num",t,e,n);return[i.mb(r,a,s)]}case"Multinomial":{const r=Object(c.d)("logits",t,e,n),a=Object(c.d)("numSamples",t,e,n),s=Object(c.d)("seed",t,e,n);return[i.Fb(r,a,s)]}case"OneHot":{const r=Object(c.d)("indices",t,e,n),a=Object(c.d)("depth",t,e,n),s=Object(c.d)("onValue",t,e,n),o=Object(c.d)("offValue",t,e,n);return[i.Ib(r,a,s,o)]}case"Ones":return[i.Jb(Object(c.d)("shape",t,e,n),Object(c.d)("dtype",t,e,n))];case"OnesLike":return[i.Kb(Object(c.d)("x",t,e,n))];case"RandomUniform":return[i.Pb(Object(c.d)("shape",t,e,n),Object(c.d)("minval",t,e,n),Object(c.d)("maxval",t,e,n),Object(c.d)("dtype",t,e,n))];case"Range":{const r=Object(c.d)("start",t,e,n),a=Object(c.d)("stop",t,e,n),s=Object(c.d)("step",t,e,n);return[i.Qb(r,a,s,Object(c.d)("dtype",t,e,n))]}case"TruncatedNormal":{const r=Object(c.d)("shape",t,e,n),a=Object(c.d)("mean",t,e,n),s=Object(c.d)("stdDev",t,e,n),o=Object(c.d)("seed",t,e,n);return[i.Dc(r,a,s,Object(c.d)("dtype",t,e,n),o)]}case"Zeros":return[i.Ic(Object(c.d)("shape",t,e,n),Object(c.d)("dtype",t,e,n))];case"ZerosLike":return[i.Jc(Object(c.d)("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"dynamic":return(async(t,e,n)=>{switch(t.op){case"NonMaxSuppressionV5":{const{boxes:r,scores:a,maxOutputSize:s,iouThreshold:o,scoreThreshold:u,softNmsSigma:c}=y(t,e,n),p=await i.fb.nonMaxSuppressionWithScoreAsync(r,a,s,o,u,c);return[p.selectedIndices,p.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:r,scores:a,maxOutputSize:s,iouThreshold:o,scoreThreshold:u}=y(t,e,n),p=Object(c.d)("padToMaxOutputSize",t,e,n),l=await i.fb.nonMaxSuppressionPaddedAsync(r,a,s,o,u,p);return[l.selectedIndices,l.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:r,scores:a,maxOutputSize:s,iouThreshold:o,scoreThreshold:u}=y(t,e,n);return[await i.fb.nonMaxSuppressionAsync(r,a,s,o,u)]}case"Where":{const r=Object(c.d)("condition",t,e,n).asType("bool"),a=[await i.Hc(r)];return r.dispose(),a}case"ListDiff":return i.cc(Object(c.d)("x",t,e,n),Object(c.d)("y",t,e,n));default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n);case"evaluation":return i.zc(()=>((t,e,n)=>{switch(t.op){case"TopKV2":{const r=Object(c.d)("x",t,e,n),a=Object(c.d)("k",t,e,n),s=Object(c.d)("sorted",t,e,n),o=i.Bc(r,a,s);return[o.values,o.indices]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"image":return i.zc(()=>((t,e,n)=>{switch(t.op){case"ResizeBilinear":{const r=Object(c.d)("images",t,e,n),a=Object(c.d)("size",t,e,n),s=Object(c.d)("alignCorners",t,e,n);return[i.fb.resizeBilinear(r,[a[0],a[1]],s)]}case"ResizeNearestNeighbor":{const r=Object(c.d)("images",t,e,n),a=Object(c.d)("size",t,e,n),s=Object(c.d)("alignCorners",t,e,n);return[i.fb.resizeNearestNeighbor(r,[a[0],a[1]],s)]}case"CropAndResize":{const r=Object(c.d)("image",t,e,n),a=Object(c.d)("boxes",t,e,n),s=Object(c.d)("boxInd",t,e,n),o=Object(c.d)("cropSize",t,e,n),u=Object(c.d)("method",t,e,n),p=Object(c.d)("extrapolationValue",t,e,n);return[i.fb.cropAndResize(r,a,s,o,u,p)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"graph":return i.zc(()=>((t,e,n)=>{switch(t.op){case"Const":return e[t.name];case"PlaceholderWithDefault":const r=Object(c.d)("default",t,e,n);return[Object(c.e)(t.name,e,n)||r];case"Placeholder":return[Object(c.e)(t.name,e,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const r=Object(c.d)("x",t,e,n);return[Object(c.a)(r)]}case"IdentityN":return Object(c.d)("x",t,e,n).map(t=>Object(c.a)(t));case"Snapshot":const a=Object(c.d)("x",t,e,n);return[Object(c.a)(a)];case"Shape":return[i.yc(Object(c.d)("x",t,e,n).shape,"int32")];case"ShapeN":return Object(c.d)("x",t,e,n).map(t=>i.yc(t.shape));case"Size":return[i.Zb(Object(c.d)("x",t,e,n).size,"int32")];case"Rank":return[i.Zb(Object(c.d)("x",t,e,n).rank,"int32")];case"NoOp":return[i.Zb(1)];case"Print":const s=Object(c.d)("x",t,e,n),o=Object(c.d)("data",t,e,n),u=Object(c.d)("message",t,e,n),p=Object(c.d)("summarize",t,e,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let t=0;t<o.length;t++)console.log(Array.prototype.slice.call(o[t].dataSync()).slice(0,p));return[s];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"logical":return i.zc(()=>((t,e,n)=>{switch(t.op){case"Equal":return[i.P(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"NotEqual":return[i.Hb(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"Greater":return[i.bb(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"GreaterEqual":return[i.cb(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"Less":return[i.kb(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"LessEqual":return[i.lb(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"LogicalAnd":return[i.rb(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"LogicalNot":return[i.sb(Object(c.d)("a",t,e,n))];case"LogicalOr":return[i.tb(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];case"Select":case"SelectV2":return[i.Gc(Object(c.d)("condition",t,e,n),Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"matrices":return i.zc(()=>((t,e,n)=>{switch(t.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[i.ub(Object(c.d)("a",t,e,n),Object(c.d)("b",t,e,n),Object(c.d)("transposeA",t,e,n),Object(c.d)("transposeB",t,e,n))];case"Transpose":return[i.Cc(Object(c.d)("x",t,e,n),Object(c.d)("perm",t,e,n))];case"_FusedMatMul":const[r,a]=Object(c.d)("fusedOps",t,e,n),s="biasadd"===r,o="prelu"===a,u=Object(c.d)("numArgs",t,e,n);if(s){if(o&&2!==u)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!o&&1!==u)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[p,l]=Object(c.d)("args",t,e,n);return[i.Y.matMul({a:Object(c.d)("a",t,e,n),b:Object(c.d)("b",t,e,n),transposeA:Object(c.d)("transposeA",t,e,n),transposeB:Object(c.d)("transposeB",t,e,n),bias:p,activation:a,preluActivationWeights:l})];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"normalization":return i.zc(()=>((t,e,n)=>{switch(t.op){case"FusedBatchNorm":case"FusedBatchNormV2":case"FusedBatchNormV3":return[i.r(Object(c.d)("x",t,e,n),Object(c.d)("mean",t,e,n),Object(c.d)("variance",t,e,n),Object(c.d)("offset",t,e,n),Object(c.d)("scale",t,e,n),Object(c.d)("epsilon",t,e,n))];case"LRN":return[i.nb(Object(c.d)("x",t,e,n),Object(c.d)("radius",t,e,n),Object(c.d)("bias",t,e,n),Object(c.d)("alpha",t,e,n),Object(c.d)("beta",t,e,n))];case"Softmax":return[i.ic(Object(c.d)("x",t,e,n))];case"LogSoftmax":return[i.qb(Object(c.d)("x",t,e,n))];case"SparseToDense":return[i.lc(Object(c.d)("sparseIndices",t,e,n),Object(c.d)("outputShape",t,e,n),Object(c.d)("sparseValues",t,e,n),Object(c.d)("defaultValue",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"reduction":return i.zc(()=>((t,e,n)=>{switch(t.op){case"Max":{const r=Object(c.d)("axis",t,e,n),a=Object(c.d)("keepDims",t,e,n);return[i.vb(Object(c.d)("x",t,e,n),r,a)]}case"Mean":{const r=Object(c.d)("axis",t,e,n),a=Object(c.d)("keepDims",t,e,n);return[i.Ab(Object(c.d)("x",t,e,n),r,a)]}case"Min":{const r=Object(c.d)("axis",t,e,n),a=Object(c.d)("keepDims",t,e,n);return[i.Bb(Object(c.d)("x",t,e,n),r,a)]}case"Sum":{const r=Object(c.d)("axis",t,e,n),a=Object(c.d)("keepDims",t,e,n);return[i.uc(Object(c.d)("x",t,e,n),r,a)]}case"All":{const r=Object(c.d)("axis",t,e,n),a=Object(c.d)("keepDims",t,e,n);return[i.g(Object(c.d)("x",t,e,n),r,a)]}case"Any":{const r=Object(c.d)("axis",t,e,n),a=Object(c.d)("keepDims",t,e,n);return[i.h(Object(c.d)("x",t,e,n),r,a)]}case"ArgMax":{const r=Object(c.d)("axis",t,e,n);return[i.i(Object(c.d)("x",t,e,n),r)]}case"ArgMin":{const r=Object(c.d)("axis",t,e,n);return[i.j(Object(c.d)("x",t,e,n),r)]}case"Prod":{const r=Object(c.d)("axis",t,e,n),a=Object(c.d)("keepDims",t,e,n);return[i.Ob(Object(c.d)("x",t,e,n),r,a)]}case"Cumsum":{const r=Object(c.d)("axis",t,e,n),a=Object(c.d)("exclusive",t,e,n),s=Object(c.d)("reverse",t,e,n);return[i.H(Object(c.d)("x",t,e,n),r,a,s)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"slice_join":return i.zc(()=>((t,e,n)=>{switch(t.op){case"ConcatV2":case"Concat":{const r=Object(c.d)("n",t,e,n),a=Object(c.d)("axis",t,e,n);let s=Object(c.d)("tensors",t,e,n);return s=s.slice(0,r),[i.A(s,a)]}case"GatherV2":case"Gather":{const r=Object(c.d)("axis",t,e,n),a=Object(c.d)("x",t,e,n),s=Object(c.d)("indices",t,e,n);return[i.Z(a,s.asType("int32"),r)]}case"ReverseV2":case"Reverse":{const r=Object(c.d)("axis",t,e,n),a=Object(c.d)("x",t,e,n);return[i.Vb(a,r)]}case"Slice":{const r=Object(c.d)("begin",t,e,n),a=Object(c.d)("size",t,e,n);return[i.hc(Object(c.d)("x",t,e,n),r,a)]}case"StridedSlice":{const r=Object(c.d)("begin",t,e,n),a=Object(c.d)("end",t,e,n),s=Object(c.d)("strides",t,e,n),o=Object(c.d)("beginMask",t,e,n),u=Object(c.d)("endMask",t,e,n),p=Object(c.d)("ellipsisMask",t,e,n),l=Object(c.d)("newAxisMask",t,e,n),d=Object(c.d)("shrinkAxisMask",t,e,n),h=Object(c.d)("x",t,e,n);return[i.sc(h,r,a,s,o,u,p,l,d)]}case"Pack":return i.zc(()=>{const r=Object(c.d)("axis",t,e,n),a=Object(c.d)("tensors",t,e,n),s=a[0].shape,o=a[0].squeeze().shape,u=a.map(t=>{const e=i.Fc.arraysEqual(t.shape,s);if(!e&&!i.Fc.arraysEqual(t.squeeze().shape,o))throw new Error("the input tensors shape does not match");return e?t:t.reshape(s)});return[i.rc(u,r)]});case"Unpack":{const r=Object(c.d)("axis",t,e,n),a=Object(c.d)("tensor",t,e,n);return i.Ec(a,r)}case"Tile":{const r=Object(c.d)("reps",t,e,n);return[i.Ac(Object(c.d)("x",t,e,n),r)]}case"Split":case"SplitV":{const r=Object(c.d)("axis",t,e,n),a=Object(c.d)("numOrSizeSplits",t,e,n),s=Object(c.d)("x",t,e,n);return i.mc(s,a,r)}case"ScatterNd":{const r=Object(c.d)("indices",t,e,n),a=Object(c.d)("values",t,e,n),s=Object(c.d)("shape",t,e,n);return[i.ac(r,a,s)]}case"GatherNd":{const r=Object(c.d)("x",t,e,n),a=Object(c.d)("indices",t,e,n);return[i.ab(r,a)]}case"SparseToDense":{const r=Object(c.d)("sparseIndices",t,e,n),a=Object(c.d)("outputShape",t,e,n),s=Object(c.d)("sparseValues",t,e,n),o=Object(c.d)("defaultValue",t,e,n);return[i.lc(r,s,a,s.dtype===o.dtype?o:o.asType(s.dtype))]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"spectral":return i.zc(()=>((t,e,n)=>{switch(t.op){case"FFT":return[i.U(Object(c.d)("x",t,e,n))];case"IFFT":return[i.db(Object(c.d)("x",t,e,n))];case"RFFT":return[i.Wb(Object(c.d)("x",t,e,n))];case"IRFFT":return[i.hb(Object(c.d)("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"transformation":return i.zc(()=>((t,e,n)=>{switch(t.op){case"Cast":return[i.v(Object(c.d)("x",t,e,n),Object(c.d)("dtype",t,e,n))];case"ExpandDims":{const r=Object(c.d)("axis",t,e,n);return[i.S(Object(c.d)("x",t,e,n),r)]}case"Squeeze":{const r=Object(c.d)("axis",t,e,n);return[i.qc(Object(c.d)("x",t,e,n),r)]}case"Reshape":return[i.Ub(Object(c.d)("x",t,e,n),Object(c.d)("shape",t,e,n))];case"PadV2":case"Pad":return[i.Lb(Object(c.d)("x",t,e,n),Object(c.d)("padding",t,e,n),Object(c.d)("constantValue",t,e,n))];case"SpaceToBatchND":{const r=Object(c.d)("blockShape",t,e,n),a=Object(c.d)("paddings",t,e,n);return[i.kc(Object(c.d)("x",t,e,n),r,a)]}case"BatchToSpaceND":{const r=Object(c.d)("blockShape",t,e,n),a=Object(c.d)("crops",t,e,n);return[i.s(Object(c.d)("x",t,e,n),r,a)]}case"DepthToSpace":{const r=Object(c.d)("blockSize",t,e,n),a=Object(c.d)("dataFormat",t,e,n).toUpperCase();return[i.I(Object(c.d)("x",t,e,n),r,a)]}case"BroadcastTo":return[i.t(Object(c.d)("x",t,e,n),Object(c.d)("shape",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n));case"custom":const r=Object(l.a)(t.op);if(r&&r.customExecutor)return r.customExecutor(new p(t,e,n));throw TypeError(`Custom op ${t.op} is not registered.`);default:throw TypeError(`Unknown op '${t.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(t,e,n);return r instanceof Promise?r.then(t=>[].concat(t)):[].concat(r)}class O{constructor(t={},e={},n={},r={}){this.weightMap=t,this.tensorArrayMap=e,this.tensorListMap=n,this.functionMap=r,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,e){return{id:t,frameName:e,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const t=[];for(let e=0;e<this.contexts.length-1;e++){const n=this.contexts.slice(0,this.contexts.length-e);t.push(this.contextIdforContexts(n))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(t=>0===t.id&&0===t.iterationId?"":`${t.frameName}-${t.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(!(this.contexts&&this.contexts.length>1))throw new Error("Cannot exit frame, the context is empty");this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift()}nextIteration(){if(!(this.contexts&&this.contexts.length>0))throw new Error("Cannot increase frame iteration, the context is empty");{this.contexts=this.contexts.slice(),this.lastId++;const t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(){for(const t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose();for(const t in this.tensorListMap)this.tensorListMap[t].clearAndClose()}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w(t,e,n){const r=new Set,a=[];let s=null,o=null;const i=new Set,u=Object.keys(t).map(t=>Object(c.g)(t)[0]),p=[...e];for(;p.length>0;){const t=p.pop();(v(t)||k(t))&&null==s&&(s=t,o=s.children.map(t=>t.name).filter(t=>r.has(t))),r.add(t.name),null==n[t.name]&&(-1===u.indexOf(t.name)&&(0!==t.inputs.length?t.inputs.forEach(t=>{i.has(t.name)||(i.add(t.name),p.push(t))}):a.push(t.name)))}return{inputs:t,outputs:e,usedNodes:r,missingInputs:a,dynamicNode:s,syncInputs:o}}const x=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],j=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"];function v(t){return x.indexOf(t.op)>=0}function k(t){return j.indexOf(t.op)>=0}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class N{constructor(t,e){this.graph=t,this.parent=e,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this._outputs=t.outputs,this._inputs=t.inputs,this._signature=t.signature,this._functions=t.functions,null!=t.functions&&Object.keys(t.functions).forEach(e=>{this._functionExecutorMap[e]=new N(t.functions[e],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){const e=Object.keys(t).map(e=>t[e].map(t=>t.id));this._weightIds=[].concat(...e),this._weightMap=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{const e=t.signatureKey||t.name;return t.defaultOutput?`${e}:${t.defaultOutput}`:e})}get functions(){return Object.keys(this._functions).reduce((t,e)=>(t[e]=this._functions[e].signature,t),{})}getCompilationKey(t,e){const n=t.map(t=>t.name).sort(),r=e.map(t=>t.name).sort();return n.join(this.SEPERATOR)+"--"+r.join(this.SEPERATOR)}compile(t,e){const n=w(t,e,this.weightMap),{missingInputs:r,dynamicNode:a,syncInputs:s}=n;if(null!=a)throw new Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${s}]`);if(r.length>0){const n=e.map(t=>t.name),a=Object.keys(t);throw new Error(`Cannot compute the outputs [${n}] from the provided inputs [${a}]. Missing the following inputs: [${r}]`)}return function(t,e,n){const{usedNodes:r,inputs:a}=n,s=[];Object.keys(a).map(t=>Object(c.g)(t)[0]).map(e=>t.nodes[e]).forEach(t=>{r.has(t.name)&&s.push(t)}),t.weights.forEach(t=>{r.has(t.name)&&s.push(t)});const o=new Set,i=[];for(;s.length>0;){const t=s.pop();o.add(t.name),e[t.name]||i.push(t),t.children.forEach(t=>{!o.has(t.name)&&r.has(t.name)&&t.inputs.every(t=>o.has(t.name))&&s.push(t)})}return i}(this.graph,this.weightMap,n)}execute(t,e){t=this.mapInputs(t);const n=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e);const r=n.map(t=>this.graph.nodes[Object(c.g)(t)[0]]),a=e.map(t=>this.graph.nodes[Object(c.g)(t)[0]]),s=this.getCompilationKey(r,a);let o=this.compiledMap.get(s);null==o&&(o=this.compile(t,a),this.compiledMap.set(s,o));const u={},p={};return Object(i.zc)(()=>{const n=new O(this.weightMap,u,p,this.functionExecutorMap),r=Object.assign({},this.weightMap);Object.keys(t).forEach(e=>{const[n,a]=Object(c.g)(e),s=[];s[a]=t[e],r[n]=s});const a=this.getFrozenTensorIds(r),s={};for(let t=0;t<o.length;t++){const i=o[t];if(!r[i.name]){const t=g(i,r,n);if(t instanceof Promise)throw new Error(`The execution of the op '${i.op}' returned a promise. Please use model.executeAsync() instead.`);r[i.name]=t,this.checkTensorForDisposal(i.name,i,r,n,a,e,s)}}return null==this.parent&&n.dispose(),e.map(t=>Object(c.e)(t,r,n))})}getFrozenTensorIds(t){const e=[].concat.apply([],Object.keys(t).map(e=>t[e]).map(t=>t.map(t=>t.id)));return new Set(e)}checkTensorForDisposal(t,e,n,r,a,s,o){"control"!==e.category&&-1===s.indexOf(t)&&(n[t].forEach(t=>{null!=t&&(o[t.id]=(o[t.id]||0)+e.children.length)}),e.inputs.forEach(t=>{if("control"!==t.category){const e=Object(c.f)(t.name,n,r);null!=e&&e.forEach(t=>{if(t&&!a.has(t.id)){const e=o[t.id];1===e?(t.dispose(),delete o[t.id]):null!=e&&o[t.id]--}})}}))}async executeAsync(t,e){return this._executeAsync(t,e)}async _executeAsync(t,e,n=!1,r={},a={}){n||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e));const s=new O(this.weightMap,r,a,this.functionExecutorMap),o=await this.executeWithControlFlow(t,s,e,n),i=e.map(t=>Object(c.e)(t,o,s)),u=new Set(i.map(t=>t.id)),p=new Set(Object.keys(t).map(e=>t[e].id));return Object.keys(o).forEach(t=>{o[t].forEach(t=>{!t||t.isDisposed||u.has(t.id)||p.has(t.id)||-1!==this.weightIds.indexOf(t.id)||t.dispose()})}),null==this.parent&&s.dispose(),i}async executeFunctionAsync(t,e,n){const r=t.reduce((t,e,n)=>(t[this.inputs[n].name]=e,t),{});return this._executeAsync(r,this.outputNodes,!0,e,n)}async executeWithControlFlow(t,e,n,r){const a=Object.keys(t),s=a.map(t=>this.graph.nodes[Object(c.g)(t)[0]]),o=n.map(t=>this.graph.nodes[Object(c.g)(t)[0]]),{usedNodes:i,missingInputs:u,dynamicNode:p,syncInputs:l}=w(t,o,this.weightMap),d=[...s,...this.graph.weights].map(t=>({node:t,contexts:e.currentContext})),h=Object.assign({},this.weightMap);Object.keys(t).forEach(e=>{const[n,r]=Object(c.g)(e),a=[];a[r]=t[e],h[n]=a});const f={},m=this.getFrozenTensorIds(h),b={};for(;d.length>0;){const t=this.processStack(s,d,e,h,b,m,n,f,i);await Promise.all(t)}null!=p||r||console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const y=o.filter(t=>!v(t)&&!Object(c.e)(t.name,h,e)).map(t=>t.name);if(y.length>0){let t="";throw null!=p&&(t=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${l}]`),new Error(`Cannot compute the outputs [${y}] from the provided inputs [${a}]. Consider providing the following inputs: [${u}]. ${t}`)}return h}processStack(t,e,n,r,a,s,o,i,u){const p=[];for(;e.length>0;){const l=e.pop();n.currentContext=l.contexts;let d="";if("Enter"===l.node.op&&Object(c.d)("isConstant",l.node,r,n)&&([d]=Object(c.b)(l.node.name,n)),-1===t.indexOf(l.node)){const t=g(l.node,r,n);d||([d]=Object(c.b)(l.node.name,n));const h=n.currentContext;t instanceof Promise?p.push(t.then(t=>(r[d]=t,n.currentContext=h,this.checkTensorForDisposal(d,l.node,r,n,s,o,i),this.processChildNodes(l.node,e,n,r,a,u),t))):(r[d]=t,this.checkTensorForDisposal(d,l.node,r,n,s,o,i),this.processChildNodes(l.node,e,n,r,a,u))}else this.processChildNodes(l.node,e,n,r,a,u)}return p}processChildNodes(t,e,n,r,a,s){t.children.forEach(t=>{const[o]=Object(c.b)(t.name,n);!a[o]&&s.has(t.name)&&("Merge"===t.op?t.inputNames.some(t=>!!Object(c.e)(t,r,n))&&(a[o]=!0,e.push({contexts:n.currentContext,node:t})):t.inputNames.every(t=>!!Object(c.e)(t,r,n))&&(a[o]=!0,e.push({contexts:n.currentContext,node:t})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(t=>t.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(e=>{const n=t[e],[r]=Object(c.g)(e),a=this.graph.nodes[r];if(a.attrParams.shape&&a.attrParams.shape.value){const t=a.attrParams.shape.value,e=t.length===n.shape.length&&n.shape.every((e,n)=>-1===t[n]||t[n]===e);i.Fc.assert(e,()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${t}], but was [${n.shape}]`)}a.attrParams.dtype&&a.attrParams.dtype.value&&i.Fc.assert(n.dtype===a.attrParams.dtype.value,()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${n.dtype}`)})}mapInputs(t){const e={};for(const n in t)if(null!=this._signature&&null!=this._signature.inputs&&null!=this._signature.inputs[n]){e[this._signature.inputs[n].name]=t[n]}else e[n]=t[n];return e}checkInputs(t){const e=Object.keys(t).filter(t=>{const[e]=Object(c.g)(t);return null==this.graph.nodes[e]});if(e.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${e}] that are not part of graph`)}mapOutputs(t){return t.map(t=>{if(null!=this._signature&&null!=this._signature.outputs&&null!=this._signature.outputs[t]){return this._signature.outputs[t].name}return t},{})}checkOutputs(t){t.forEach(t=>{const[e]=Object(c.g)(t);if(!this.graph.nodes[e])throw new Error(`The output '${t}' is not found in the graph`)})}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class S{constructor(t,e={}){this.modelUrl=t,this.loadOptions=e,this.version="n/a",null==e&&(this.loadOptions={})}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}findIOHandler(){const t=this.modelUrl;if(null!=t.load)this.handler=t;else if(null!=this.loadOptions.requestInit)this.handler=i.gb.browserHTTPRequest(t,this.loadOptions);else{const e=i.gb.getLoadHandlers(t,this.loadOptions);if(0===e.length)e.push(i.gb.browserHTTPRequest(t,this.loadOptions));else if(e.length>1)throw new Error(`Found more than one (${e.length}) load handlers for URL '${[t]}'`);this.handler=e[0]}}async load(){if(this.findIOHandler(),null==this.handler.load)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const t=await this.handler.load();return this.loadSync(t)}loadSync(t){this.artifacts=t;const e=this.artifacts.modelTopology;let n={};null!=this.artifacts.userDefinedMetadata&&(n=this.artifacts.userDefinedMetadata.signature),this.version=`${e.versions.producer}.${e.versions.minConsumer}`;const r=i.gb.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);return this.executor=new N(u.a.Instance.transformGraph(e,n)),this.executor.weightMap=this.convertTensorMapToTensorsMap(r),!0}async save(t,e){if("string"==typeof t){const e=i.gb.getSaveHandlers(t);if(0===e.length)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(e.length>1)throw new Error(`Found more than one (${e.length}) save handlers for URL '${t}'`);t=e[0]}if(null==t.save)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}predict(t,e){return this.execute(t,this.outputNodes)}normalizeInputs(t){if(!(t instanceof i.a||Array.isArray(t)))return t;if((t=Array.isArray(t)?t:[t]).length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${t.length} input tensors.`);return this.inputNodes.reduce((e,n,r)=>(e[n]=t[r],e),{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}execute(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const n=this.executor.execute(t,e);return n.length>1?n:n[0]}async executeAsync(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const n=await this.executor.executeAsync(t,e);return n.length>1?n:n[0]}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((e,n)=>(e[n]=[t[n]],e),{})}dispose(){this.executor.dispose()}}async function E(t,e={}){if(null==t)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");null==e&&(e={}),e.fromTFHub&&null==t.load&&(t.endsWith("/")||(t+="/"),t+="model.json?tfjs-format=file");const n=new S(t,e);return await n.load(),n}
/** @license See the LICENSE file. */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var T,I=["daisy","dandelion","roses","sunflowers","tulips"];var _=function(){var t=o()(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E("http://localhost:8000/flower_photos_tfjs_model/model.json");case 2:return T=t.sent,e=i.zc((function(){return T.predict(i.Ic([1,224,224,3]))})),t.next=6,e.data();case 6:e.dispose();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.default={load:_,predict:function(t){if(t&&T){(new Image).src="//gm.mmstat.com/xtracker.1.1?gmkey=OTHER&cna=71kGFSaixjsCASp4SmFO+kSL&spm-cnt=0.0.0.0.1a035a26Tlwg9f&logtype=2&gokey="+encodeURIComponent("v=1.2.4&ts=".concat(Math.round((new Date).getTime()/1e3),"&tid=XT-00213&dr=").concat(window.location.origin,"&t=event&ec=data_icon"));var e=i.zc((function(){var e=i.u.fromPixels(t).toFloat(),n=i.Zb(127.5),r=e.sub(n).div(n),a=r;if(224!==e.shape[0]||224!==e.shape[1]){a=i.fb.resizeBilinear(r,[224,224],!0)}var s=a.reshape([-1,224,224,3]);return T.predict(s).squeeze().arraySync()}));return function(t,e){for(var n=[],r=0;r<t.length;r+=1)n.push(r),n.length>e&&(n.sort((function(e,n){return t[n]-t[e]})),n.pop());return n}(e,5).map((function(t){return{className:I[t],score:e[t]}}))}}}}]).default}));