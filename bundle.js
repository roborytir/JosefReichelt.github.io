!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){e.exports={card:"ProjectCard-card--37YE_",cardTitle:"ProjectCard-cardTitle--1QAUc",cardBody:"ProjectCard-cardBody--3yD7F",cardImage:"ProjectCard-cardImage---ffnV",cardText:"ProjectCard-cardText--2t0Vy",cardTechBubble:"ProjectCard-cardTechBubble--1oIYY",cardLink:"ProjectCard-cardLink--1uKkG",cardLinks:"ProjectCard-cardLinks--35Rc7"}},function(e,t,n){e.exports={info:"Info-info--2unG4",imageSection:"Info-imageSection--9febG",textSection:"Info-textSection--1CeoA"}},function(e,t,n){e.exports={header:"Header-header--1qRCL",title:"Header-title--3Wcfe"}},function(e,t,n){e.exports={socialBar:"SocialBar-socialBar--3agcU"}},function(e,t,n){e.exports={projects:"Projects-projects--4r6BP"}},function(e,t,n){e.exports={footer:"Footer-footer--2dyxG"}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(6);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const i=new WeakMap,s=e=>"function"==typeof e&&i.has(e),r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,u=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${u}`);class h{constructor(e,t){this.parts=[],this.element=t;const n=[],i=[],s=document.createTreeWalker(t.content,133,null,!1);let r=0,o=-1,a=0;const{strings:l,values:{length:u}}=e;for(;a<u;){const e=s.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let i=0;for(let e=0;e<n;e++)p(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=l[a],n=v.exec(t)[2],i=n.toLowerCase()+"$lit$",s=e.getAttribute(i);e.removeAttribute(i);const r=s.split(d);this.parts.push({type:"attribute",index:o,name:n,strings:r}),a+=r.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(c)>=0){const i=e.parentNode,s=t.split(d),r=s.length-1;for(let t=0;t<r;t++){let n,r=s[t];if(""===r)n=f();else{const e=v.exec(r);null!==e&&p(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(r)}i.insertBefore(n,e),this.parts.push({type:"node",index:++o})}""===s[r]?(i.insertBefore(f(),e),n.push(e)):e.data=s[r],a+=r}}else if(8===e.nodeType)if(e.data===c){const t=e.parentNode;null!==e.previousSibling&&o!==r||(o++,t.insertBefore(f(),e)),r=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(n.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(c,t+1));)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=i.pop()}for(const e of n)e.parentNode.removeChild(e)}}const p=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},m=e=>-1!==e.index,f=()=>document.createComment(""),v=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let s,o=0,a=0,l=i.nextNode();for(;o<n.length;)if(s=n[o],m(s)){for(;a<s.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=t.pop(),l=i.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=` ${c} `;class x{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const e=this.strings[i],s=e.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===e.indexOf("--\x3e",s+1);const r=v.exec(e);t+=null===r?e+(n?w:u):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+c}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class _ extends x{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),((e,t,n=null,i=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,i),t=n}})(t,n.firstChild),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=e=>null===e||!("object"==typeof e||"function"==typeof e),y=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class k{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new j(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let i=0;i<t;i++){n+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(b(e)||!y(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class j{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||b(e)&&e===this.value||(this.value=e,s(e)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=f()),e.__insert(this.endNode=f())}insertAfterPart(e){e.__insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(b(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):y(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof g&&this.value.template===t)this.value.update(e.values);else{const n=new g(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const s of e)n=t[i],void 0===n&&(n=new C(this.options),t.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(s),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class L{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class N extends k{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends j{}let V=!1;(()=>{try{const e={get capture(){return V=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class M{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=P(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const P=e=>e&&(V?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const O=new class{handleAttributeExpressions(e,t,n,i){const s=t[0];if("."===s){return new N(e,t.slice(1),n).parts}return"@"===s?[new M(e,t.slice(1),i.eventContext)]:"?"===s?[new L(e,t.slice(1),n)]:new k(e,t,n).parts}handleTextExpression(e){return new C(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function S(e){let t=E.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},E.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const i=e.strings.join(c);return n=t.keyString.get(i),void 0===n&&(n=new h(e,e.getTemplateElement()),t.keyString.set(i,n)),t.stringsArray.set(e.strings,n),n}const E=new Map,B=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const A=(e,...t)=>new x(e,t,"html",O),Z=(e,...t)=>new _(e,t,"svg",O);var z,I,$,H=n(2),R=n.n(H),G="Jmenuji se Josef Reichelt, je mi ".concat((z=new Date(1992,7,27),I=Date.now()-z.getTime(),$=new Date(I),Math.abs($.getFullYear()-1970)),"let a jsem nadšenec do vývoje her a software.");function D(){var e=Q(['\n<svg width="100%" height="100%" viewBox="0 0 32 32" version="1.1" \nxmlns="http://www.w3.org/2000/svg" \nxmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" \nstyle="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <path d="M16,0C7.163,0 0,7.164 0,16C0,24.836 7.163,32 16,32C24.837,32 32,24.836 32,16C32.001,7.164 24.838,0 16,0ZM11.306,23.997L8.071,23.997L8.071,13.158L11.306,13.158L11.306,23.997ZM24.154,23.997L20.929,23.997L20.929,17.974C20.929,16.295 20.349,15.455 19.189,15.455C18.629,15.455 18.169,15.677 17.807,16.122C17.445,16.566 17.264,17.131 17.264,17.815L17.264,23.997L14.029,23.997L14.029,13.158L17.264,13.158L17.264,14.873L17.305,14.873C18.076,13.553 19.199,12.893 20.673,12.893C22.994,12.893 24.154,14.382 24.154,17.36L24.154,23.997ZM9.709,11.443C9.163,11.443 8.716,11.275 8.368,10.94C8.02,10.605 7.846,10.194 7.846,9.707C7.846,9.206 8.02,8.797 8.368,8.479C8.716,8.162 9.163,8.003 9.709,8.003C10.262,8.003 10.711,8.162 11.055,8.479C11.4,8.797 11.572,9.206 11.572,9.707C11.572,10.215 11.4,10.631 11.055,10.956C10.711,11.281 10.262,11.443 9.709,11.443Z" />\n</svg>\n\n']);return D=function(){return e},e}function F(){var e=Q(['\n<svg width="100%" height="100%" viewBox="0 0 32 32" version="1.1" \n    xmlns="http://www.w3.org/2000/svg" \n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    xml:space="preserve" \n    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n        <path d="M30.812,10.744L25.079,16.478C23.495,18.061 20.928,18.061 19.345,16.478L21.521,14.301C22.421,14.539 23.417,14.316 24.123,13.611L27.945,9.788C29.001,8.733 29.001,7.021 27.945,5.966L26.034,4.054C24.979,2.998 23.267,2.998 22.212,4.054L18.389,7.877C17.683,8.583 17.461,9.579 17.699,10.479L15.522,12.655C13.939,11.072 13.939,8.505 15.522,6.922L21.256,1.187C22.839,-0.396 25.407,-0.396 26.99,1.187L30.812,5.01C32.396,6.594 32.396,9.161 30.812,10.744ZM10.744,21.256C10.216,20.728 10.216,19.872 10.744,19.345L19.345,10.744C19.873,10.216 20.728,10.216 21.256,10.744C21.784,11.272 21.784,12.128 21.256,12.655L12.655,21.256C12.127,21.784 11.272,21.784 10.744,21.256ZM7.877,18.389L4.054,22.212C2.999,23.267 2.999,24.979 4.054,26.034L5.966,27.946C7.021,29.001 8.733,29.001 9.788,27.946L13.611,24.123C14.317,23.417 14.539,22.421 14.301,21.521L16.478,19.345C18.061,20.928 18.061,23.495 16.478,25.078L10.744,30.813C9.161,32.396 6.593,32.396 5.01,30.813L1.188,26.99C-0.396,25.406 -0.396,22.839 1.188,21.256L6.921,15.522C8.505,13.939 11.072,13.939 12.655,15.522L10.479,17.699C9.579,17.461 8.583,17.684 7.877,18.389Z" />\n</svg>\n']);return F=function(){return e},e}function J(){var e=Q(['\n    <svg width="100%" height="100%" viewBox="0 0 32 32" version="1.1" \n        xmlns="http://www.w3.org/2000/svg" \n        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" \n        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">\n            <path d="M24.464,21.787l-6.873,3.968l0,-8.258l6.873,-3.713l0,8.003Zm-8.168,-6.213l-8.161,-4.326l8.161,-4.712l8.163,4.712l-8.163,4.326Zm-1.229,10.179l-6.898,-3.981l0,-8.033l6.898,3.726l0,8.288Zm1.39,-25.521c-8.837,0 -16,7.164 -16,16c0,8.837 7.163,16 16,16c8.838,0 16,-7.163 16,-16c0.002,-8.836 -7.161,-16 -16,-16" />\n    </svg>\n']);return J=function(){return e},e}function W(){var e=Q(['\n    <svg width="100%" height="100%" viewBox="0 0 32 32" version="1.1" \n        xmlns="http://www.w3.org/2000/svg" \n        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" \n        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">\n            <path d="M16,0c8.831,0 16,7.169 16,16c0,8.831 -7.169,16 -16,16c-8.831,0 -16,-7.169 -16,-16c0,-8.831 7.169,-16 16,-16Zm4.898,25.149l-2.417,-4.191l-12.873,0l1.759,3.034c0.343,0.687 1.058,1.157 1.878,1.157l11.653,0Zm-3.524,-18.298c0.805,0.001 1.506,0.449 1.857,1.115l6.825,11.878c0.21,0.322 0.336,0.714 0.336,1.135c0,0.476 -0.084,0.715 -0.42,1.268l-1.661,2.88l-10.546,-18.276l3.609,0Zm-0.617,11.129l-4.716,-8.171l-4.716,8.171l9.432,0Z"/>\n    </svg>\n']);return W=function(){return e},e}function K(){var e=Q(['\n    <svg width="100%" height="100%" viewBox="0 0 32 32" version="1.1" \n        xmlns="http://www.w3.org/2000/svg" \n        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"\n        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">\n            <path d="M16.456,0.232c-8.835,0 -15.999,7.345 -15.999,16.406c0,7.248 4.584,13.396 10.942,15.566c0.801,0.15 1.093,-0.356 1.093,-0.791c0,-0.389 -0.014,-1.421 -0.022,-2.79c-4.45,0.991 -5.389,-2.2 -5.389,-2.2c-0.728,-1.895 -1.777,-2.399 -1.777,-2.399c-1.453,-1.018 0.11,-0.997 0.11,-0.997c1.606,0.115 2.45,1.69 2.45,1.69c1.428,2.507 3.746,1.783 4.657,1.363c0.145,-1.059 0.558,-1.783 1.016,-2.192c-3.553,-0.414 -7.288,-1.822 -7.288,-8.108c0,-1.791 0.623,-3.255 1.647,-4.402c-0.165,-0.415 -0.714,-2.083 0.156,-4.342c0,0 1.344,-0.441 4.4,1.682c1.276,-0.365 2.645,-0.546 4.006,-0.552c1.358,0.006 2.728,0.187 4.005,0.552c3.055,-2.123 4.396,-1.682 4.396,-1.682c0.873,2.259 0.324,3.927 0.159,4.342c1.025,1.147 1.645,2.611 1.645,4.402c0,6.302 -3.741,7.689 -7.306,8.094c0.575,0.507 1.087,1.508 1.087,3.039c0,2.192 -0.02,3.962 -0.02,4.5c0,0.439 0.288,0.949 1.1,0.789c6.353,-2.174 10.933,-8.318 10.933,-15.564c0,-9.061 -7.164,-16.406 -16.001,-16.406" />\n    </svg>\n']);return K=function(){return e},e}function U(){var e=Q(['\n    <svg width="100%" height="100%" viewBox="0 0 32 32" version="1.1" \n        xmlns="http://www.w3.org/2000/svg" \n        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"\n        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">\n            <path d="M16.497,0.232c8.831,0 16,7.17 16,16c0,8.831 -7.169,16 -16,16c-8.83,0 -16,-7.169 -16,-16c0,-8.83 7.17,-16 16,-16Zm12.718,23.497l0,-14.993l-25.435,0l0,14.993l25.435,0Zm-12.718,-5.1l10.99,-8.549l0.384,0l0,12.305l-22.747,0l0,-12.305l0.383,0l10.99,8.549Zm0,-1.703l-8.801,-6.846l17.603,0l-8.802,6.846Z"/>\n    </svg>\n']);return U=function(){return e},e}function Y(){var e=Q(['\n    <svg width="64" height="64" viewBox="0 0 512 513" version="1.1" \n        xmlns="http://www.w3.org/2000/svg" \n        xmlns:xlink="http://www.w3.org/1999/xlink"\n        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">\n            <rect id="bg" x="0" y="0.873" width="512" height="512" />\n            <path id="letter" d="M297.827,324.071l0,9.71c-0.058,31.302 -11.096,63.492 -35.788,83.593c-20.143,16.398 -47.685,23.134 -73.444,18.026c-29.095,-5.769 -54.464,-26.711 -66.558,-54.8c-6.31,-14.657 -9.115,-30.707 -9.176,-46.744l52.618,-0.199c0.007,1.923 0.072,3.84 0.209,5.753c0.078,1.103 0.179,2.205 0.305,3.304c1.637,14.21 7.881,28.669 20.784,36.425c14.475,8.7 34.865,6.563 46.62,-7.023c8.838,-10.214 11.762,-24.593 11.812,-38.127l0,-0.257l0,-188.124l52.618,0l0,54.02c7.591,-7.129 15.941,-13.447 25,-18.716c20.147,-11.718 43.581,-17.734 66.821,-17.876c0.392,-0.001 0.783,-0.002 1.175,-0.001c2.678,0.012 5.357,0.093 8.034,0.24l0.282,0.016l-3.023,52.531c-21.622,-1.244 -43.199,5.383 -59.952,20.029c-20.843,18.224 -33.397,44.941 -37.258,71.971c-0.76,5.32 -1.079,16.249 -1.079,16.249l0,0Zm-10.977,-194.289l-30.664,0l-15.332,-26.556l15.332,-26.556l30.664,0l15.332,26.556l-15.332,26.556Z"/>\n    </svg>\n']);return Y=function(){return e},e}function Q(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var q=Z(Y()),X=Z(U()),ee=Z(K()),te=Z(W()),ne=Z(J()),ie=Z(F()),se=Z(D());function re(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n    <header class="','">\n        <div>\n            ','\n            <span class="','">\n                <h1>Josef Reichelt</h1>\n                <h3>',"</h3>\n            </span>\n        </div>\n    </header>\n"]);return re=function(){return e},e}var oe=A(re(),R.a.header,q,R.a.title,"web developer, designer, game maker"),ae=n(1),le=n.n(ae),ce=n.p+"assets/images/foto.jpg",ue=n(3),de=n.n(ue),he=[{name:"Mail",href:"mailto:pepareichelt@gmail.com",alt:"My email link",icon:X},{name:"Github",href:"https://github.com/JosefReichelt",alt:"My email link",icon:ee},{name:"Artstation",href:"https://www.artstation.com/josefreichelt",alt:"My graphics work on artstation",icon:te},{name:"Sketchfab",href:"https://sketchfab.com/JosefReichelt",alt:"My 3D modeling work on sketchfab",icon:ne},{name:"LinkedIn",href:"https://www.linkedin.com/in/josefreichelt/",alt:"My LinkedIn profile",icon:se}];function pe(){var e=fe(['\n            <a href="','" alt=',' target="_blank">\n                ',"\n            </a>\n        "]);return pe=function(){return e},e}function me(){var e=fe(['\n    <div class="','">\n        ',"\n    </div>\n"]);return me=function(){return e},e}function fe(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var ve=A(me(),de.a.socialBar,he.map((function(e){return A(pe(),e.href,e.alt,e.icon)})));function ge(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n    <div class="','">\n        <div class=',">\n            <img src="," />\n            ","\n        </div>\n        <div class=",">\n            <span>\n                ","\n            </span>\n            <span>\n                ","\n            </span>\n        </div>\n    </div>\n"]);return ge=function(){return e},e}var we=A(ge(),le.a.info,le.a.imageSection,ce,ve,le.a.textSection,G,"V současné chvíli se specializuji na vývoj front-end aplikací, které používají React, Typescript, Next.js, Styled-Components. Zabývám se ale i jinými technologiemi jako Vue, Svelte a lit-html."),xe=n(4),_e=n.n(xe),be=[{id:0,name:"Kybernauts",desc:"Youtube kanál kde se nám podařilo nasbírat až 22 tisíc odběratelů, poté jsme se přesunuli k Indian Play.",image:n.p+"assets/projects/kybernauts.png",link:"https://www.youtube.com/channel/UCI6Q19WD34-lg0-HWPvkFXg",github:"",tech:[]},{id:1,name:"Gamedev Komunita",desc:"Discord server určený pro české a slovenské vývojáře. V současnosti okolo 200 členů.",image:n.p+"assets/projects/gdcs.png",link:"https://discord.gg/SEzzru6",github:"",tech:[]},{id:2,name:"Brick the Castle",desc:"Klon Arkanoidu  s trochou úprav vytvořený v Unity během 72 hodin pro GDL GameJam.",image:n.p+"assets/projects/brickthecastle.jpg",link:"https://protomace.itch.io/brick-the-castle",github:"https://github.com/JosefReichelt/GDLBrickBreakerJam",tech:["Unity","C#","Krita"]},{id:3,name:"Sheriff Pac",desc:"Klon klasického Pac-Mana ve westernovém duchu vytvořený v Unity během 72 hodin pro GDL GameJam.",image:n.p+"assets/projects/sheriffpac.jpg",link:"https://protomace.itch.io/sheriff-pac",github:"https://github.com/JosefReichelt/TreasurePac",tech:["Unity","C#","Krita"]}],ye=n(0),ke=n.n(ye);function je(){var e=Te(["\n                        <a class="," href="," alt=",' target="_blank">\n                            ',"\n                        </a>\n                    "]);return je=function(){return e},e}function Ce(){var e=Te(["\n                        <a class="," href="," alt=",' target="_blank">\n                            ',"\n                        </a>\n                    "]);return Ce=function(){return e},e}function Le(){var e=Te(["\n                        <span class=","> \n                            ","\n                        </span>\n                        "]);return Le=function(){return e},e}function Ne(){var e=Te(['\n    <div class="','">\n        <div class="','">\n            ','\n        </div>\n    \n        <div class="','">\n            <div class=',">\n                <img src=",' />\n            </div>\n            <div class="','">\n                <span>\n                    ',"\n                </span>\n                <div class=",">\n                    ","\n                    ","\n                    ","\n                </div>\n            </div>\n        </div>\n    </div>\n"]);return Ne=function(){return e},e}function Te(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Ve(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n    <div class="','">\n        ',"\n    </div>\n"]);return Ve=function(){return e},e}var Me=A(Ve(),_e.a.projects,be.map((function(e){return function(e){return A(Ne(),ke.a.card,ke.a.cardTitle,e.name,ke.a.cardBody,ke.a.cardImage,e.image,ke.a.cardText,e.desc,ke.a.cardLinks,e.tech.map((function(e){return A(Le(),ke.a.cardTechBubble,e)})),e.link&&A(Ce(),ke.a.cardLink,e.link,e.name,ie),e.github&&A(je(),ke.a.cardLink,e.github,e.name,ee))}(e)}))),Pe=n(5),Oe=n.n(Pe);function Se(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n    <footer class="','">\n        ',"\n    </footer>\n"]);return Se=function(){return e},e}var Ee=A(Se(),Oe.a.footer,ve);function Be(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}([" "," "," "," ",""]);return Be=function(){return e},e}var Ae=document.body;((e,t,n)=>{let i=B.get(t);void 0===i&&(o(t,t.firstChild),B.set(t,i=new C(Object.assign({templateFactory:S},n))),i.appendInto(t)),i.setValue(e),i.commit()})(A(Be(),oe,we,Me,Ee),Ae)}]);
//# sourceMappingURL=bundle.js.map