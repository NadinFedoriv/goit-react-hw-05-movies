/*! For license information please see 916.b67b0cf9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[916],{916:function(t,r,n){n.r(r),n.d(r,{default:function(){return S}});var e,o,i,a,c,u,s=n(861),h=n(439),f=n(689),l=n(87),p=n(273),d=n(791),v=n(596),g=n(886),m=n(168),y=n(867),x=y.ZP.div(e||(e=(0,m.Z)(["\n  display: flex;\n  margin-top: 20px;\n  background-color: #f5f5f5; \n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n\n  img {\n    max-width: 300px;\n    height: auto;\n    margin-right: 20px;\n    border-radius: 8px;\n  }\n\n  h2 {\n    font-size: 28px;\n    margin-bottom: 10px;\n    color: #4caf50; \n  }\n\n  p {\n    font-size: 18px;\n    margin-bottom: 20px;\n  }\n\n  h3 {\n    font-size: 24px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    color: #4caf50; \n  }\n"]))),w=n(184),b=function(t){var r=t.movieDetails,n=r.title,e=r.vote_average,o=r.overview,i=r.poster_path,a=r.genres,c=Math.round(10*e);return(0,w.jsxs)(x,{children:[(0,w.jsx)("div",{children:(0,w.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w500/".concat(i):g,alt:n})}),(0,w.jsxs)("div",{children:[(0,w.jsx)("h2",{children:n}),(0,w.jsxs)("p",{children:["User Score: ",c,"%"]}),(0,w.jsx)("h3",{children:"Overview"}),(0,w.jsx)("p",{children:o}),(0,w.jsx)("h3",{children:"Genres"}),(0,w.jsx)("p",{children:a.map((function(t){return t.name})).join(", ")})]})]})},j=n(752),_=n(28),E=y.ZP.div(o||(o=(0,m.Z)(["\n  padding: 0 20px;\n  \n"]))),L=(0,y.ZP)(l.rU)(i||(i=(0,m.Z)(["\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  font-size: 15px;\n  color: #007acc;\n  margin-bottom: 0px;\n  transition: color 0.3s;\n\n  &:hover {\n    color: #004f7a;\n  }\n\n  svg {\n    margin-right: 8px;\n  }\n"]))),Z=y.ZP.p(a||(a=(0,m.Z)(["\n  font-size: 20px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n"]))),k=y.ZP.ul(c||(c=(0,m.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),P=y.ZP.li(u||(u=(0,m.Z)(["\n  margin-bottom: 10px;\n  font-size: 18px;\n\n  a {\n    text-decoration: none;\n    color: #007acc;\n    transition: color 0.3s;\n\n    &:hover {\n      color: #004f7a;\n    }\n  }\n"])));function O(){O=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,n){return t[r]=n}}function h(t,r,n,e){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new S(e||[]);return o(a,"_invoke",{value:L(t,n,c)}),a}function f(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var l="suspendedStart",p="executing",d="completed",v={};function g(){}function m(){}function y(){}var x={};s(x,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(G([])));b&&b!==n&&e.call(b,a)&&(x=b);var j=y.prototype=g.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function L(r,n,e){var o=l;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=Z(c,e);if(u){if(u===v)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===l)throw o=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=p;var s=f(r,n,e);if("normal"===s.type){if(o=e.done?d:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=d,e.method="throw",e.arg=s.arg)}}}function Z(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,Z(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),v;var i=f(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function G(r){if(r||""===r){var n=r[a];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=y,o(j,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:m,configurable:!0}),m.displayName=s(y,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},_(E.prototype),s(E.prototype,c,(function(){return this})),r.AsyncIterator=E,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new E(h(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=G,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:G(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),v}},r}var S=function(){var t,r,n=(0,f.UO)().movieId,e=(0,d.useState)(null),o=(0,h.Z)(e,2),i=o[0],a=o[1],c=(0,d.useState)(!1),u=(0,h.Z)(c,2),g=u[0],m=u[1],y=(0,d.useState)(null),x=(0,h.Z)(y,2),S=x[0],G=x[1],T=(0,f.TH)();(0,d.useEffect)((function(){var t=function(){var t=(0,s.Z)(O().mark((function t(){var r;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,p.TP)(n);case 4:r=t.sent,a(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),G(t.t0);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]);var z=(0,d.useRef)(null!==(t=null===T||void 0===T||null===(r=T.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/");return(0,w.jsxs)(E,{children:[g&&(0,w.jsx)(j.a,{}),S&&v.Am.error("Something go wrong. Please try again"),(0,w.jsxs)(L,{to:z.current,children:[(0,w.jsx)(_.hPZ,{}),"Go back"]}),i?(0,w.jsx)(b,{movieDetails:i}):(0,w.jsx)(j.a,{}),(0,w.jsx)(Z,{children:"Additional information"}),(0,w.jsxs)(k,{children:[(0,w.jsx)(P,{children:(0,w.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,w.jsx)(P,{children:(0,w.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]}),(0,w.jsx)(d.Suspense,{fallback:(0,w.jsx)(j.a,{}),children:(0,w.jsx)(f.j3,{})})]})}},273:function(t,r,n){n.d(r,{Hg:function(){return i},TP:function(){return c},tx:function(){return s},z1:function(){return a},zv:function(){return u}});var e=n(243);e.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="03b78576cde6fb09def3fed266aedae5",i=function(){return e.Z.get("/trending/movie/day",{params:{api_key:o}}).then((function(t){return t.data.results})).catch((function(t){throw console.error("Error fetching movies:",t),t}))},a=function(t){return e.Z.get("/search/movie",{params:{api_key:o,query:t}}).then((function(t){return t.data.results})).catch((function(t){throw console.error("Error fetching movies:",t),t}))},c=function(t){return e.Z.get("/movie/".concat(t),{params:{api_key:o}}).then((function(t){return t.data})).catch((function(t){throw console.error("Error fetching movies:",t),t}))},u=function(t){return e.Z.get("/movie/".concat(t,"/credits"),{params:{api_key:o}}).then((function(t){return t.data})).catch((function(t){throw console.error("Error fetching movies:",t),t}))},s=function(t){return e.Z.get("/movie/".concat(t,"/reviews"),{params:{api_key:o}}).then((function(t){return t.data})).catch((function(t){throw console.error("Error fetching movies:",t),t}))}},886:function(t,r,n){t.exports=n.p+"static/media/default-image.ff1d2914047167870d4c.jpg"}}]);
//# sourceMappingURL=916.b67b0cf9.chunk.js.map