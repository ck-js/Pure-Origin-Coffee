(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(601),o=t.n(a),i=t(314),r=t.n(i),c=t(417),s=t.n(c),d=new URL(t(83),t.b),l=r()(o()),p=s()(d);l.push([e.id,`:root {\n    --primary-bg-color : white;\n    --secondary-bg-color: #C0C0C0;\n    --small-mobile-spacing: 15px;\n    --regular-hero-font: hero-regular;\n}\n@font-face {\n    font-family: 'hero-regular';\n    src: url(${p}) format('truetype');\n    font-weight: normal;\n    font-stretch: 1% 100%;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n@media (max-width: 767px) {\nbody {\n    height: 8000px;\n    font-family: hero-regular;\n    max-width: 767px;\n    background-color: var(--secondary-bg-color);\nborder: 3px solid black;    \n\n    \n}\nheader {\n    background-color: white;\n}\n#wrapper {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n    \n\n}\n#nav-logo-container {\n    justify-self: center;\n    text-align: center;\n}\n.menu-icon {\nborder: none;\n\n\n}\n.menu-icon img {\n    width: 50px;\n    height: auto;\n}\n.nav-items {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    row-gap: 15px;\n    padding: 15px 0;\n    display: none;\n}\n.nav-items-open {\ndisplay: flex;\nflex-direction: column;\n    justify-content: center;\n    align-items: center;\n    row-gap: 15px;\n    padding: 15px 0;\n    \n}\n.nav-items li {\n    list-style-type: none;\n}\n.nav-items a {\n    text-decoration: none;\n}\n#nav-anchor-button {\ndisplay: none;\n\n}\n.section-parents {\n    \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\npadding: 20px 0;    \n}\n\n.mobile-image-wrappers {\nmax-width: 100%;\n\n}\n.mobile-image-wrappers img{\nmax-width: 100%;\n\n}\n.column-text-containers {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    row-gap: 20px;\n    padding: 15px 5vw;\n    /* border: 3px solid black; */\n    word-wrap: break-word;\n}\n.titles {\n    text-transform: uppercase;\n    text-align: center;\n}\n#span-2 {\nbackground-color: var(--primary-bg-color);\npadding: 0 40px;\nborder-radius: 3px 12px 3px 12px;\n\n}\n#span-3  {\n    background-color: var(--primary-bg-color);\n    padding: 0 60px;\n    border-radius: 3px 12px 3px 12px;\n    \n}\n#section-1-text-container {\n/* border: 3px solid black; */\npadding-left: 50px;\npadding-right: 50px;\n}\n#section-2-title {\n    \n    padding: 0 50px 25px;\n}\n#section-2-paragraph-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\nrow-gap: 25px;\n\n}\n.section-2-p-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    text-transform: uppercase;\n\n}\n.section-2-p-wrapper p:nth-child(1) {\nbackground-color: black;\ncolor: var(--primary-bg-color);\n\n}\n#section-3-title {\n    margin-bottom: 25px;\n}\n\n\n#section-3-card-containers {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\nalign-items: center;\n    /* border: 3px solid black; */\n    row-gap: 10px;\n}\n.section-3-card-items {\n    width: 100%;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: flex-start;\nrow-gap: 10px;\npadding: 10px 5px;\nborder: 1px solid black;\n}\n.section-3-card-items img {\nwidth: 50px;\n}\n.section-3-card-titles {\n    text-transform: uppercase;\n    margin-bottom: 15px;\n}\n#section-6-parent-container button {\n    background-color: black;\n    color: var(--primary-bg-color);\n    border: 3px solid black;\n    width: 80%;\n    height: 50px;\n}\n\n\n.socials-container {\n    display: none;\n    \n}\n.social-wrappers {\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncolumn-gap: 25px;\n\n}\n.social-wrappers img {\nwidth: 50px;\n}\n.social-wrappers a {\n    text-decoration: none;\n    color: black;\n    cursor: pointer;\n}\n.social-items-open {\n    display: flex;\n    flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        row-gap: 20px;\n        padding: 30px 0;\n        \n    }\n#section-7-text-container li {\n    list-style-type: none;\n    font-size: 24px;\n    padding: 1px 20px;\n    margin-bottom: 20px;\nbackground-color: black;\ncolor: var(--primary-bg-color);\nborder-radius: 3px 12px 3px 12px;\n\n}\n\n#section-9-parent-container {\n    outline: 4px solid black;\n}\n.mobile-forms {\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\noutline: 4px solid black;\n}\n.mobile-forms label {\n    align-self: flex-start;\n}\n\n\n}`,""]);const u=l},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},r=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=a(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var c=t(i[r]);n[c].references--}for(var s=a(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},83:(e,n,t)=>{e.exports=t.p+"e7de38fb0b59857c16cd.ttf"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"e0dc4066654f1119b417.jpg",n=t.p+"af836f08a2707c677056.png",a=t.p+"e80001a6ed6c87b7e4a0.svg",o=t.p+"e4f1650e66e36a93dcd7.jpg",i=t.p+"6f13b23cc28126d8818b.jpg";function r(e,n,t,a){const o=document.createElement("div");o.classList.add("social-wrappers");const i=document.createElement("a");i.href=n,i.target="_blank";const r=new Image;r.src=e,r.alt=t,i.appendChild(r);const c=document.createElement("a");c.href=n,c.target="_blank",c.textContent=t,o.appendChild(i),o.appendChild(c),a.appendChild(o)}let c={paragraph1:"1000 - 1350 M",paragraph2:"altitude"},s={paragraph1:"83,000 hectares+",paragraph2:"area"},d={paragraph1:"20,000 tons annual",paragraph2:"production"};function l(e,n){for(let t in e){let a=document.createElement("p");a.textContent=e[t],n.appendChild(a)}}const p=[{image:a,title:"☕️ excellent growing conditions",description:"The Bolaven Plateau is a fertile region with a temperate climate, perfect for growing coffee plants. The high altitude and volcanic soil provide the ideal conditions for coffee cultivation."},{image:a,title:"☕️ organic farming practices",description:"Many coffee farms on the Bolaven Plateau practice organic farming methods. These farmers prioritize sustainable and environmentally friendly practices, avoiding the use of synthetic fertilizers and pesticides."},{image:a,title:"☕️ Diverse Distintc Flavors",description:"Diversity of Flavors: Coffee beans from the Bolaven Plateau exhibit a diverse range of flavors. The region's unique microclimate and soil composition contribute to the distinct taste profiles of its coffee. You can find flavor notes such as chocolate, floral, fruity, and nutty in Bolaven coffee."}];function u(e){const n=document.createElement("p");return n.classList.add("paragraphs"),n.textContent=e,n}var m=t(72),h=t.n(m),f=t(825),g=t.n(f),x=t(659),v=t.n(x),b=t(56),C=t.n(b),y=t(540),w=t.n(y),E=t(113),L=t.n(E),k=t(208),j={};j.styleTagTransform=L(),j.setAttributes=C(),j.insert=v().bind(null,"head"),j.domAPI=g(),j.insertStyleElement=w(),h()(k.A,j),k.A&&k.A.locals&&k.A.locals;const S=document.getElementById("content");S.appendChild(function(){const n=document.createElement("header"),t=document.createElement("nav"),a=document.createElement("div");a.id="wrapper";const o=document.createElement("div");o.id="nav-logo-container";const i=document.createElement("h1");i.textContent="Pure Origin",o.appendChild(i);const r=document.createElement("button");r.classList.add("menu-icon"),r.ariaLabel="click to open navigation menu";const c=new Image;c.src=e,r.appendChild(c),a.appendChild(o),a.appendChild(r);const s=document.createElement("ul");s.classList.add("nav-items");const d=document.createElement("li"),l=document.createElement("a");l.href="#section-2-parent-container",l.textContent="process",d.appendChild(l);const p=document.createElement("li"),u=document.createElement("a");u.href="#section-3-parent-container",u.textContent="about",p.appendChild(u);const m=document.createElement("li"),h=document.createElement("a");h.href="#section-4-parent-container",h.textContent="team",m.appendChild(h);const f=document.createElement("li"),g=document.createElement("a");g.href="#section-6-parent-container",g.textContent="contact",f.appendChild(g),s.appendChild(d),s.appendChild(p),s.appendChild(m),s.appendChild(f),r.addEventListener("click",(e=>{const n=document.querySelector(".nav-items");n.classList.toggle("nav-items-open");const t=document.querySelector(".nav-items-open");t&&t.addEventListener("click",(()=>{n.classList.remove("nav-items-open")}))}));const x=document.createElement("a");return x.id="nav-anchor-button",x.classList.add("anchor-buttons"),x.textContent="lets connect",a.appendChild(o),a.appendChild(r),t.appendChild(a),t.appendChild(s),t.appendChild(x),n.appendChild(t),n}()),S.appendChild(function(){const e=document.createElement("div");e.id="section-1-parent-container",e.classList.add("section-parents");const t=document.createElement("div");t.id="section-1-mobile-image-wrapper",t.classList.add("mobile-image-wrappers");const a=new Image;a.src=n,a.alt="landscape image with backdrop of mountains and misty clouds with green coffee plantations",t.appendChild(a);const o=document.createElement("div");o.id="section-1-text-container",o.classList.add("column-text-containers");const i=document.createElement("h1");i.classList.add("titles"),i.textContent="connecting local coffee artisans with the world",function(e,n,t){const a=t.textContent.split(" ");for(let e=0;e<a.length;e++)if("coffee"===a[e]||"artisans"===a[e]){const n=document.createElement("span");n.textContent=a[e],n.id="span-"+e,a[e]=n.outerHTML}t.innerHTML=a.join(" ")}(0,0,i);const r=document.createElement("p");r.classList.add("paragraphs"),r.textContent="we believe in sourcing the freshest, top grade and sustainable coffee beans";const c=document.createElement("p");c.id="section-1-p2",c.classList.add("paragraphs"),c.textContent="Our mission is to provide the highest quality products to the international market";const s=document.createElement("a");return s.classList.add("anchor-buttons"),s.textContent="meet us",e.appendChild(t),o.appendChild(i),o.appendChild(r),o.appendChild(c),o.appendChild(s),e.appendChild(o),e}()),S.appendChild(function(){const e=document.createElement("div");e.id="section-2-parent-container",e.classList.add("section-parents");const n=document.createElement("h2");n.id="section-2-title",n.classList.add("titles"),n.textContent="discover the hidden gems of laos";const t=document.createElement("div");t.id="section-2-paragraph-container";const a=document.createElement("div");a.classList.add("section-2-p-wrapper"),l(c,a);const o=document.createElement("div");o.classList.add("section-2-p-wrapper"),l(s,o);const i=document.createElement("div");return i.classList.add("section-2-p-wrapper"),l(d,i),t.appendChild(a),t.appendChild(o),t.appendChild(i),e.appendChild(n),e.appendChild(t),e}()),S.appendChild(function(){const e=document.createElement("div");e.id="section-3-parent-container",e.classList.add("section-parents");const n=document.createElement("h2");n.id="section-3-title",n.classList.add("titles"),n.textContent="sustainable farming practices";const t=document.createElement("div");return t.id="section-3-card-containers",function(e,n){for(let t in e){const a=document.createElement("div");a.classList.add("section-3-card-items");const o=new Image;o.src=e[t].image,o.alt=e[t].alt,a.appendChild(o);const i=document.createElement("h3");i.classList.add("section-3-card-titles"),i.textContent=e[t].title,a.appendChild(i);const r=document.createElement("p");r.classList.add("card-paragraphs"),r.textContent=e[t].description,a.appendChild(r),n.appendChild(a)}}(p,t),e.appendChild(n),e.appendChild(t),e}()),S.appendChild(function(){const e=document.createElement("div");e.id="section-4-parent-container",e.classList.add("section-parents");const n=document.createElement("div");n.id="section-4-mobile-image-wrapper",n.classList.add("mobile-image-wrappers");const t=new Image;t.src=o,t.alt="close up of hands scooping handful of green coffee beans from brown sack",n.appendChild(t);const a=document.createElement("div");a.id="section-4-text-container",a.classList.add("column-text-containers");const i=document.createElement("h2");i.classList.add("titles"),i.textContent="Sourcing & distributing the best coffee beans from South East Asia";const r=document.createElement("p");r.classList.add("paragraphs"),r.textContent="Our sourcing methods is a meticulous process driven by a quest for exceptional quality and unique flavor profiles. With countries like Vietnam, Indonesia, Thailand, and Laos renowned for their award winning coffee production.";const c=document.createElement("p");return c.classList.add("paragraphs"),c.textContent="Are you as curious and adventurous as us?",e.appendChild(n),a.appendChild(i),a.appendChild(r),a.appendChild(c),e.appendChild(a),e}()),S.appendChild(function(){const e=document.createElement("div");e.id="section-6-parent-container",e.classList.add("section-parents");const n=document.createElement("button");n.classList.add("call-to-action-buttons"),n.textContent="Click me";const t=document.createElement("div");return t.classList.add("socials-container"),r(a,"https://www.google.com","Chat using LINE",t),r(a,"https://www.google.com","Chat using LINE",t),r(a,"https://www.google.com","Chat using LINE",t),n.addEventListener("click",(e=>{const n=document.querySelector(".socials-container");n.classList.toggle("social-items-open");const t=document.querySelector(".social-items-open");t&&t.addEventListener("click",(()=>{n.classList.remove("social-items-open")}))})),e.appendChild(n),e.appendChild(t),e}()),S.appendChild(function(){{const e=document.createElement("div");e.id="section-5-parent-container",e.classList.add("section-parents");const n=document.createElement("div");n.id="section-4-mobile-image-wrapper",n.classList.add("mobile-image-wrappers");const t=new Image;t.src=i,t.alt="close up of hands scooping handful of green coffee beans from brown sack",n.appendChild(t);const a=document.createElement("div");a.id="section-5-text-container",a.classList.add("column-text-containers");const o=document.createElement("h2");o.classList.add("titles"),o.textContent="Our dedication and passion to bring you the most value";const r=document.createElement("p");r.classList.add("paragraphs"),r.textContent="Our expert buyers and roasters embark on a year round journey to discover the finest beans.";const c=document.createElement("p");return c.classList.add("paragraphs"),c.textContent="They wonder lush mountains, visit local farms, and engage with passionate farmers and their communities that are crucial to the coffee production process.",e.appendChild(n),a.appendChild(o),a.appendChild(r),a.appendChild(c),e.appendChild(a),e}}()),S.appendChild(function(){{const e=document.createElement("div");e.id="section-7-parent-container",e.classList.add("section-parents");const n=document.createElement("div");n.id="section-7-mobile-image-wrapper",n.classList.add("mobile-image-wrappers");const t=new Image;t.src=i,t.alt="close up of hands scooping handful of green coffee beans from brown sack",n.appendChild(t);const a=document.createElement("div");a.id="section-7-text-container",a.classList.add("column-text-containers");const o=document.createElement("h2");o.classList.add("titles"),o.textContent="We provide full service from sourcing to worldwide logistics and distribution";const r=document.createElement("p");r.classList.add("paragraphs"),r.textContent="Let us know your needs";const c=document.createElement("p");c.classList.add("paragraphs"),c.textContent="We guarantee you the best quality and service";const s=function(...e){const n=document.createElement("ul");return e.forEach((e=>{const t=document.createElement("li");t.textContent=e,n.appendChild(t)})),n}("Sourcing","Roasting","Packaging","Logistics","Distribution");return e.appendChild(n),a.appendChild(o),a.appendChild(r),a.appendChild(c),a.appendChild(s),e.appendChild(a),e}}()),S.appendChild(function(){const e=document.createElement("div");e.id="section-8-parent-container",e.classList.add("section-parents");const n=document.createElement("div");n.id="section-8-mobile-image-wrapper",n.classList.add("mobile-image-wrappers");const t=new Image;t.src=i,t.alt="close up of hands scooping handful of green coffee beans from brown sack",n.appendChild(t);const a=document.createElement("div");a.id="section-8-text-container",a.classList.add("column-text-containers");const o=document.createElement("h2");o.classList.add("titles"),o.textContent="Seeing is believing";const r=u("Join us on a journey to the Bolaven Plateau in Southern Laos, where you can witness the beauty of coffee cultivation and processing first-hand. Experience the sights, sounds, and aromas of the coffee farms, and learn about the rich history and culture of the region."),c=u("We organize guided tours 4 times a year for coffee enthusiasts and industry professionals."),s=u("Private tours can be arranged upon request from any part of the world. We can also organize virtual tours for those who are unable to travel to Laos.");return e.appendChild(n),a.appendChild(o),a.appendChild(r),a.appendChild(c),a.appendChild(s),e.appendChild(a),e}()),S.appendChild(function(){const e=document.createElement("div");e.id="section-9-parent-container",e.classList.add("section-parents");const n=function(){const e=document.createElement("form");e.classList.add("mobile-forms");const n=document.createElement("label");n.textContent="Email:";const t=document.createElement("input");t.type="email",t.name="email",t.required=!0;const a=document.createElement("button");return a.type="submit",a.textContent="Submit for coffee",e.appendChild(n),e.appendChild(t),e.appendChild(a),e}();return e.appendChild(n),e}())})()})();