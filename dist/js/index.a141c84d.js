!function(t){function n(n){for(var o,a,c=n[0],i=n[1],s=n[2],f=0,p=[];f<c.length;f++)a=c[f],r[a]&&p.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);for(l&&l(n);p.length;)p.shift()();return u.push.apply(u,s||[]),e()}function e(){for(var t,n=0;n<u.length;n++){for(var e=u[n],o=!0,c=1;c<e.length;c++){var i=e[c];0!==r[i]&&(o=!1)}o&&(u.splice(n--,1),t=a(a.s=e[0]))}return t}var o={},r={2:0},u=[];function a(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=o,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)a.d(e,o,function(n){return t[n]}.bind(null,o));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="//abc.com/static/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var l=i;u.push([55,0]),e()}({19:function(t,n){t.exports="//abc.com/static/logo.82b9c7a5.png"},2:function(t,n,e){"use strict";var o=e(0),r=e(1),u={state:{count:0},mutations:{ADD_COUNT:function(t,n){t.count+=n.amount}},actions:{addCount:function(t,n){(0,t.commit)("ADD_COUNT",{amount:n.num})}}},a={state:{name:"hellp world!"},mutations:{CHANGE_NAME:function(t){t.name="hello webpack4-vue2-vuex!"}},actions:{changeName:function(t){(0,t.commit)("CHANGE_NAME")}}},c={count:function(t){return t.app.count},name:function(t){return t.user.name}};o.a.use(r.a);var i=new r.a.Store({modules:{app:u,user:a},getters:c});n.a=i},48:function(t,n,e){"use strict";var o=e(6);e.n(o).a},55:function(t,n,e){"use strict";e.r(n);var o=e(0),r=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"index"},[o("p",[t._v("Index Page")]),t._v(" "),o("div",{staticClass:"count"},[o("span",{domProps:{textContent:t._s(t.count)}}),t._v(" "),o("button",{on:{click:t.add}},[t._v("add count")])]),t._v(" "),o("img",{attrs:{src:e(19),alt:""}})])};r._withStripped=!0;var u=e(13),a=e.n(u),c=e(1),i={name:"index",computed:a()({},Object(c.c)(["count"])),methods:a()({},Object(c.b)(["addCount"]),{add:function(){this.addCount({num:10})}})},s=(e(48),e(3)),l=Object(s.a)(i,r,[],!1,null,null,null);l.options.__file="src/pages/index/index.vue";var f=l.exports,p=e(2);new o.a({store:p.a,render:function(t){return t(f)}}).$mount("#app")},6:function(t,n,e){}});