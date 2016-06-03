function gotoPin(t){var e=document.getElementsByClassName("pin");Common.addClass(e[t],"current")}var Zepto=function(){function t(t){return null==t?String(t):X[W.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function o(e){return"object"==t(e)}function r(t){return o(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function a(t){return k.call(t,function(t){return null!=t})}function u(t){return t.length>0?C.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in B?B[t]:B[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||M[c(t)]?e:e+"px"}function h(t){var e,n;return O[t]||(e=P.createElement(t),P.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),O[t]=n),O[t]}function d(t){return"children"in t?L.call(t.children):C.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function p(t,e,n){for(w in e)n&&(r(e[w])||K(e[w]))?(r(e[w])&&!r(t[w])&&(t[w]={}),K(e[w])&&!K(t[w])&&(t[w]=[]),p(t[w],e[w],n)):e[w]!==x&&(t[w]=e[w])}function m(t,e){return null==e?C(t):C(t).filter(e)}function v(t,n,i,o){return e(n)?n.call(t,i,o):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",i=n&&n.baseVal!==x;return e===x?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function b(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?C.parseJSON(t):t):t}catch(e){return t}}function E(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)E(t.childNodes[n],e)}var x,w,C,N,j,T,S=[],L=S.slice,k=S.filter,P=window.document,O={},B={},M={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},A=/^\s*<(\w+|!)[^>]*>/,$=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,I=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,D=/^(?:body|html)$/i,Z=/([A-Z])/g,_=["val","css","html","text","data","width","height","offset"],R=["after","prepend","before","append"],q=P.createElement("table"),z=P.createElement("tr"),F={tr:P.createElement("tbody"),tbody:q,thead:q,tfoot:q,td:z,th:z,"*":P.createElement("div")},H=/complete|loaded|interactive/,V=/^[\w-]*$/,X={},W=X.toString,Y={},J=P.createElement("div"),U={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},K=Array.isArray||function(t){return t instanceof Array};return Y.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,o=t.parentNode,r=!o;return r&&(o=J).appendChild(t),i=~Y.qsa(o,e).indexOf(t),r&&J.removeChild(t),i},j=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},T=function(t){return k.call(t,function(e,n){return t.indexOf(e)==n})},Y.fragment=function(t,e,n){var i,o,s;return $.test(t)&&(i=C(P.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(I,"<$1></$2>")),e===x&&(e=A.test(t)&&RegExp.$1),e in F||(e="*"),s=F[e],s.innerHTML=""+t,i=C.each(L.call(s.childNodes),function(){s.removeChild(this)})),r(n)&&(o=C(i),C.each(n,function(t,e){_.indexOf(t)>-1?o[t](e):o.attr(t,e)})),i},Y.Z=function(t,e){return t=t||[],t.__proto__=C.fn,t.selector=e||"",t},Y.isZ=function(t){return t instanceof Y.Z},Y.init=function(t,n){var i;if(!t)return Y.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&A.test(t))i=Y.fragment(t,RegExp.$1,n),t=null;else{if(n!==x)return C(n).find(t);i=Y.qsa(P,t)}else{if(e(t))return C(P).ready(t);if(Y.isZ(t))return t;if(K(t))i=a(t);else if(o(t))i=[t],t=null;else if(A.test(t))i=Y.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==x)return C(n).find(t);i=Y.qsa(P,t)}}return Y.Z(i,t)},C=function(t,e){return Y.init(t,e)},C.extend=function(t){var e,n=L.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){p(t,n,e)}),t},Y.qsa=function(t,e){var n,o="#"==e[0],r=!o&&"."==e[0],s=o||r?e.slice(1):e,a=V.test(s);return i(t)&&a&&o?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:L.call(a&&!o?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},C.contains=P.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},C.type=t,C.isFunction=e,C.isWindow=n,C.isArray=K,C.isPlainObject=r,C.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},C.inArray=function(t,e,n){return S.indexOf.call(e,t,n)},C.camelCase=j,C.trim=function(t){return null==t?"":String.prototype.trim.call(t)},C.uuid=0,C.support={},C.expr={},C.map=function(t,e){var n,i,o,r=[];if(s(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return u(r)},C.each=function(t,e){var n,i;if(s(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},C.grep=function(t,e){return k.call(t,e)},window.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){X["[object "+e+"]"]=e.toLowerCase()}),C.fn={forEach:S.forEach,reduce:S.reduce,push:S.push,sort:S.sort,indexOf:S.indexOf,concat:S.concat,map:function(t){return C(C.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return C(L.apply(this,arguments))},ready:function(t){return H.test(P.readyState)&&P.body?t(C):P.addEventListener("DOMContentLoaded",function(){t(C)},!1),this},get:function(t){return t===x?L.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return S.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):C(k.call(this,function(e){return Y.matches(e,t)}))},add:function(t,e){return C(T(this.concat(C(t,e))))},is:function(t){return this.length>0&&Y.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==x)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):s(t)&&e(t.item)?L.call(t):C(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return C(n)},has:function(t){return this.filter(function(){return o(t)?C.contains(this,t):C(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!o(t)?t:C(t)},last:function(){var t=this[this.length-1];return t&&!o(t)?t:C(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?C(t).filter(function(){var t=this;return S.some.call(n,function(e){return C.contains(e,t)})}):1==this.length?C(Y.qsa(this[0],t)):this.map(function(){return Y.qsa(this,t)}):C()},closest:function(t,e){var n=this[0],o=!1;for("object"==typeof t&&(o=C(t));n&&!(o?o.indexOf(n)>=0:Y.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return C(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=C.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(T(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return d(this)}),t)},contents:function(){return this.map(function(){return L.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return k.call(d(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return C.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=C(t).get(0),o=i.parentNode||this.length>1;return this.each(function(e){C(this).wrapAll(n?t.call(this,e):o?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){C(this[0]).before(t=C(t));for(var e;(e=t.children()).length;)t=e.first();C(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=C(this),o=i.contents(),r=n?t.call(this,e):t;o.length?o.wrapAll(r):i.append(r)})},unwrap:function(){return this.parent().each(function(){C(this).replaceWith(C(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=C(this);(t===x?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return C(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return C(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;C(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(o(t))for(w in t)g(this,w,t[w]);else g(this,t,v(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:x},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){g(this,t)},this)})},prop:function(t,e){return t=U[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(Z,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?b(i):x},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=C(this),i=v(this,t,e,n.offset()),o=n.offsetParent().offset(),r={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(r.position="relative"),n.css(r)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i,o=this[0];if(!o)return;if(i=getComputedStyle(o,""),"string"==typeof e)return o.style[j(e)]||i.getPropertyValue(e);if(K(e)){var r={};return C.each(e,function(t,e){r[e]=o.style[j(e)]||i.getPropertyValue(e)}),r}}var s="";if("string"==t(e))n||0===n?s=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(w in e)e[w]||0===e[w]?s+=c(w)+":"+f(w,e[w])+";":this.each(function(){this.style.removeProperty(c(w))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?S.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){N=[];var n=y(this),i=v(this,t,e,n);i.split(/\s+/g).forEach(function(t){C(this).hasClass(t)||N.push(t)},this),N.length&&y(this,n+(n?" ":"")+N.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===x)return y(this,"");N=y(this),v(this,t,e,N).split(/\s+/g).forEach(function(t){N=N.replace(l(t)," ")}),y(this,N.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=C(this),o=v(this,t,n,y(this));o.split(/\s+/g).forEach(function(t){(e===x?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===x?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===x?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=D.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(C(t).css("margin-top"))||0,n.left-=parseFloat(C(t).css("margin-left"))||0,i.top+=parseFloat(C(e[0]).css("border-top-width"))||0,i.left+=parseFloat(C(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||P.body;t&&!D.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;return t})}},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});C.fn[t]=function(o){var r,s=this[0];return o===x?n(s)?s["inner"+e]:i(s)?s.documentElement["scroll"+e]:(r=this.offset())&&r[t]:this.each(function(e){s=C(this),s.css(t,v(this,o,e,s[t]()))})}}),R.forEach(function(e,n){var i=n%2;C.fn[e]=function(){var e,o,r=C.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:Y.fragment(n)}),s=this.length>1;return r.length<1?this:this.each(function(t,e){o=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var a=C.contains(P.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return C(t).remove();o.insertBefore(t,e),a&&E(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},C.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return C(t)[e](this),this}}),Y.Z.prototype=C.fn,Y.uniq=T,Y.deserializeValue=b,C.zepto=Y,C}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,r,s){if(n=i(n),n.ns)var a=o(n.ns);return(v[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!a.test(t.ns)||r&&e(t.fn)!==e(r)||s&&t.sel!=s)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function o(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function r(t,e){return t.del&&!y&&t.e in b||!!e}function s(t){return E[t]||y&&b[t]||t}function a(n,o,a,u,l,h,d){var p=e(n),m=v[p]||(v[p]=[]);o.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(a);var o=i(e);o.fn=a,o.sel=l,o.e in E&&(a=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=h;var p=h||a;o.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=p.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},o.i=m.length,m.push(o),"addEventListener"in n&&n.addEventListener(s(o.e),o.proxy,r(o,d))})}function u(t,i,o,a,u){var c=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,o,a).forEach(function(e){delete v[c][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,r(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(N,function(t,i){var o=n[t];e[t]=function(){return this[i]=x,o&&o.apply(n,arguments)},e[i]=w}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function l(t){var e,n={originalEvent:t};for(e in t)C.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,d=Array.prototype.slice,p=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},E={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:a,remove:u},t.proxy=function(n,i){var o=2 in arguments&&d.call(arguments,2);if(p(n)){var r=function(){return n.apply(i,o?o.concat(d.call(arguments)):arguments)};return r._zid=e(n),r}if(m(i))return o?(o.unshift(n[i],n),t.proxy.apply(null,o)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},w=function(){return!1},C=/^([A-Z]|returnValue$|layer[XY]$)/,N={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,o,r){var s,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,r)}),h):(m(n)||p(o)||o===!1||(o=i,i=n,n=f),(p(i)||i===!1)&&(o=i,i=f),o===!1&&(o=w),h.each(function(f,h){r&&(s=function(t){return u(h,t.type,o),o.apply(this,arguments)}),n&&(c=function(e){var i,r=t(e.target).closest(n,h).get(0);return r&&r!==h?(i=t.extend(l(e),{currentTarget:r,liveFired:h}),(s||o).apply(r,[i].concat(d.call(arguments,1)))):void 0}),a(h,e,o,i,n,c||s)}))},t.fn.off=function(e,n,i){var o=this;return e&&!m(e)?(t.each(e,function(t,e){o.off(t,n,e)}),o):(m(n)||p(i)||i===!1||(i=n,n=f),i===!1&&(i=w),o.each(function(){u(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in b&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var o,r;return this.each(function(s,a){o=l(m(e)?t.Event(e):e),o._args=i,o.target=a,t.each(n(a,e.type||e),function(t,e){return r=e.proxy(o),o.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),i=!0;if(e)for(var o in e)"bubbles"==o?i=!!e[o]:n[o]=e[o];return n.initEvent(t,i,!0),c(n)}}(Zepto),function(t){function e(e,n,i){var o=t.Event(n);return t(e).trigger(o,i),!o.isDefaultPrevented()}function n(t,n,i,o){return t.global?e(n||y,i,o):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function o(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function r(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function s(t,e,i,o){var r=i.context,s="success";i.success.call(r,t,s,e),o&&o.resolveWith(r,[t,s,e]),n(i,r,"ajaxSuccess",[e,i,t]),u(s,e,i)}function a(t,e,i,o,r){var s=o.context;o.error.call(s,i,e,t),r&&r.rejectWith(s,[i,e,t]),n(o,s,"ajaxError",[i,o,t||e]),u(e,i,o)}function u(t,e,i){var r=i.context;i.complete.call(r,e,t),n(i,r,"ajaxComplete",[e,i]),o(i)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==C?"html":t==w?"json":E.test(t)?"script":x.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function d(e,n,i,o){return t.isFunction(n)&&(o=i,i=n,n=void 0),t.isFunction(i)||(o=i,i=void 0),{url:e,data:n,success:i,dataType:o}}function p(e,n,i,o){var r,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){r=t.type(u),o&&(n=i?o:o+"["+(a||"object"==r||"array"==r?n:"")+"]"),!o&&s?e.add(u.name,u.value):"array"==r||!i&&"object"==r?p(e,u,i,n):e.add(n,u)})}var m,v,g=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,E=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,w="application/json",C="text/html",N=/^\s*$/,j=y.createElement("a");j.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,o,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++g,l=y.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},d={abort:h};return n&&n.promise(d),t(l).on("load error",function(r,u){clearTimeout(o),t(l).off().remove(),"error"!=r.type&&i?s(i[0],d,e,n):a(null,u||"error",d,e,n),window[c]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),r(d,e)===!1?(h("abort"),d):(window[c]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(o=setTimeout(function(){h("timeout")},e.timeout)),d)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:w,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,o=t.extend({},e||{}),u=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===o[m]&&(o[m]=t.ajaxSettings[m]);i(o),o.crossDomain||(n=y.createElement("a"),n.href=o.url,n.href=n.href,o.crossDomain=j.protocol+"//"+j.host!=n.protocol+"//"+n.host),o.url||(o.url=window.location.toString()),h(o);var d=o.dataType,p=/\?.+=\?/.test(o.url);if(p&&(d="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=d&&"jsonp"!=d)||(o.url=f(o.url,"_="+Date.now())),"jsonp"==d)return p||(o.url=f(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,u);var g,b=o.accepts[d],E={},x=function(t,e){E[t.toLowerCase()]=[t,e]},w=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,C=o.xhr(),T=C.setRequestHeader;if(u&&u.promise(C),o.crossDomain||x("X-Requested-With","XMLHttpRequest"),x("Accept",b||"*/*"),(b=o.mimeType||b)&&(b.indexOf(",")>-1&&(b=b.split(",",2)[0]),C.overrideMimeType&&C.overrideMimeType(b)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&x("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(v in o.headers)x(v,o.headers[v]);if(C.setRequestHeader=x,C.onreadystatechange=function(){if(4==C.readyState){C.onreadystatechange=c,clearTimeout(g);var e,n=!1;if(C.status>=200&&C.status<300||304==C.status||0==C.status&&"file:"==w){d=d||l(o.mimeType||C.getResponseHeader("content-type")),e=C.responseText;try{"script"==d?(0,eval)(e):"xml"==d?e=C.responseXML:"json"==d&&(e=N.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?a(n,"parsererror",C,o,u):s(e,C,o,u)}else a(C.statusText||null,C.status?"error":"abort",C,o,u)}},r(C,o)===!1)return C.abort(),a(null,"abort",C,o,u),C;if(o.xhrFields)for(v in o.xhrFields)C[v]=o.xhrFields[v];var S="async"in o?o.async:!0;C.open(o.type,o.url,S,o.username,o.password);for(v in E)T.apply(C,E[v]);return o.timeout>0&&(g=setTimeout(function(){C.onreadystatechange=c,C.abort(),a(null,"timeout",C,o,u)},o.timeout)),C.send(o.data?o.data:null),C},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var e=d.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=d.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var o,r=this,s=e.split(/\s/),a=d(e,n,i),u=a.success;return s.length>1&&(a.url=s[0],o=s[1]),a.success=function(e){r.html(o?t("<div>").html(e.replace(b,"")).find(o):e),u&&u.apply(r,arguments)},t.ajax(a),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},p(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],o=function(t){return t.forEach?t.forEach(o):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,r){n=r.type,e=r.name,e&&"fieldset"!=r.nodeName.toLowerCase()&&!r.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||r.checked)&&o(t(r).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(){"use strict";function t(t,e){var n=[],i=this.options;return i.onProgress&&t&&i.onProgress.call(this,t,e,this.completed.length),this.completed.length+this.errors.length===this.queue.length&&(n.push(this.completed),this.errors.length&&n.push(this.errors),i.onComplete.apply(this,n)),this}var e="addEventListener"in new Image,n=function(t,e){this.options={pipeline:!1,auto:!0,prefetch:!1,onComplete:function(){}},e&&"object"==typeof e&&this.setOptions(e),this.addQueue(t),this.queue.length&&this.options.auto&&this.processQueue()};n.prototype.setOptions=function(t){var e,n=this.options;for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return this},n.prototype.addQueue=function(t){return this.queue=t.slice(),this},n.prototype.reset=function(){return this.completed=[],this.errors=[],this},n.prototype.addEvents=function(n,i,o){var r=this,s=this.options,a=function(){e?(this.removeEventListener("error",u),this.removeEventListener("abort",u),this.removeEventListener("load",c)):this.onerror=this.onabort=this.onload=null},u=function(){a.call(this),r.errors.push(i),s.onError&&s.onError.call(r,i),t.call(r,i),s.pipeline&&r.loadNext(o)},c=function(){a.call(this),r.completed.push(i),t.call(r,i,this),s.pipeline&&r.loadNext(o)};e?(n.addEventListener("error",u,!1),n.addEventListener("abort",u,!1),n.addEventListener("load",c,!1)):(n.onerror=n.onabort=u,n.onload=c)},n.prototype.load=function(t,e){var n=new Image;return this.addEvents(n,t,e),n.src=t,this},n.prototype.loadNext=function(t){return t++,this.queue[t]&&this.load(this.queue[t],t),this},n.prototype.processQueue=function(){var t=0,e=this.queue,n=e.length;if(this.reset(),this.options.pipeline)this.load(e[0],0);else for(;n>t;++t)this.load(e[t],t);return this},"function"==typeof define&&define.amd?define(function(){return n}):this.preLoader=n}.call(this),function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t,t.document)}):"undefined"!=typeof module&&module.exports?module.exports=e(t,t.document):t.Shake=e(t,t.document)}("undefined"!=typeof window?window:this,function(t,e){"use strict";function n(n){if(this.hasDeviceMotion="ondevicemotion"in t,this.options={threshold:15,timeout:1e3},"object"==typeof n)for(var i in n)n.hasOwnProperty(i)&&(this.options[i]=n[i]);if(this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null,"function"==typeof e.CustomEvent)this.event=new e.CustomEvent("shake",{bubbles:!0,cancelable:!0});else{if("function"!=typeof e.createEvent)return!1;this.event=e.createEvent("Event"),this.event.initEvent("shake",!0,!0)}}return n.prototype.reset=function(){this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null},n.prototype.start=function(){this.reset(),this.hasDeviceMotion&&t.addEventListener("devicemotion",this,!1)},n.prototype.stop=function(){this.hasDeviceMotion&&t.removeEventListener("devicemotion",this,!1),this.reset()},n.prototype.devicemotion=function(e){var n,i,o=e.accelerationIncludingGravity,r=0,s=0,a=0;return null===this.lastX&&null===this.lastY&&null===this.lastZ?(this.lastX=o.x,this.lastY=o.y,void(this.lastZ=o.z)):(r=Math.abs(this.lastX-o.x),s=Math.abs(this.lastY-o.y),a=Math.abs(this.lastZ-o.z),(r>this.options.threshold&&s>this.options.threshold||r>this.options.threshold&&a>this.options.threshold||s>this.options.threshold&&a>this.options.threshold)&&(n=new Date,i=n.getTime()-this.lastTime.getTime(),i>this.options.timeout&&(t.dispatchEvent(this.event),this.lastTime=new Date)),this.lastX=o.x,this.lastY=o.y,void(this.lastZ=o.z))},n.prototype.handleEvent=function(t){return"function"==typeof this[t.type]?this[t.type](t):void 0},n}),function(t,e){var n=t.documentElement,i="orientationchange"in window?"orientationchange":"resize",o=function(){var t=n.clientWidth;window.innerHeight;t&&(n.style.fontSize=50*(t/375)+"px")};t.addEventListener&&(e.addEventListener(i,o,!1),o())}(document,window),function(){var t=(navigator.userAgent.toLowerCase(),{hasClass:function(t,e){return e=e||"",0==e.replace(/\s/g,"").length?!1:new RegExp(" "+e+" ").test(" "+t.className+" ")},addClass:function(t,e){var n=this;n.hasClass(t,e)||(t.className=""==t.className?e:t.className+" "+e)},removeClass:function(t,e){var n=this;if(n.hasClass(t,e)){for(var i=" "+t.className.replace(/[\t\r\n]/g,"")+" ";i.indexOf(" "+e+" ")>=0;)i=i.replace(" "+e+" "," ");t.className=i.replace(/^\s+|\s+$/g,"")}},goHomepage:function(){gotoPin(0)},msgBox:function(t,e){e?$("body").append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+t+"</div></div>"):$("body").append('<div class="ajaxpop msgbox"><div class="loading"><div class="icon-loading"></div>'+t+"</div></div>")},errorMsg:{add:function(t,e){for(var n in t.childNodes){if("error"==t.childNodes[n].className)return t.childNodes[n].textContent=e,!0;if(n==t.childNodes.length-1){var i=document.createElement("div");i.textContent=e,i.className="error",t.appendChild(i)}}},remove:function(t){for(var e in t.childNodes)if("error"==t.childNodes[e].className)return void t.childNodes[e].parentNode.removeChild(t.childNodes[e])}},alertBox:{add:function(t){$("body").append('<div class="alertpop msgbox"><div class="inner"><div class="msg">'+t+'</div><div class="btn-alert-ok">关闭</div></div></div>')},remove:function(){$(".alertpop").remove()}}});this.Common=t}.call(this),Api={isLogin:function(t){$.ajax({url:"/api/islogin",type:"POST",dataType:"json",success:function(e){return t(e)}})},getKeycode:function(t,e){$.ajax({url:"/api/check",type:"POST",dataType:"json",data:t,success:function(t){return e(t)}})},submitAll:function(t,e){$.ajax({url:"/api/submit",type:"POST",dataType:"json",data:t,success:function(t){return e(t)}})},submitWithoutChecknum:function(t,e){$.ajax({url:"/api/submit2",type:"POST",dataType:"json",data:t,success:function(t){return e(t)}})},getRedpacket:function(t,e){$.ajax({url:"/api/getredpacket",type:"POST",dataType:"json",data:t,success:function(t){return e(t)}})}},function(){"use strict";var t=function(){this.isShake=!1,this.mobileVal="",this.hasLogged=!1};t.prototype={init:function(){var t=this,e="/app",n=[e+"/images/logo.png",e+"/images/p1-bg.jpg",e+"/images/p1-2.png",e+"/images/p1-3.png",e+"/images/p1-4.png",e+"/images/p2-bg.jpg",e+"/images/p2-pop-text.png",e+"/images/p3-bg.jpg",e+"/images/btn-getkeycode.png",e+"/images/btn-getmoney.png",e+"/images/button-ok.png",e+"/images/follow-text.png",e+"/images/input-border.png",e+"/images/link-privacy.png",e+"/images/money.png",e+"/images/qrcode-follow.png",e+"/images/shake-text.png",e+"/images/tips.png",e+"/images/tips-text.png",e+"/images/yuan.png"];new preLoader(n,{onProgress:function(){},onComplete:function(){document.getElementsByClassName("preloading")[0].remove(),Common.removeClass(document.getElementsByClassName("tips-pop")[0],"hide"),t.bindEvent()}})},bindEvent:function(){var t=this,e=document.getElementsByClassName("btn-tips-yes")[0];e.addEventListener("touchstart",function(){
Common.addClass(e.parentElement.parentElement,"hide"),Api.isLogin(function(e){1==e.status?(e.msg.money>0?(gotoPin(2),document.getElementById("money-value").innerHTML=parseInt(e.msg.money)/100):(gotoPin(0),t.isShake=!0),e.msg.mobile?(t.hasLogged=!0,t.mobileVal=e.msg.mobile):t.hasLogged=!1):0==e.status&&(window.location.href="http://oauth.curio.im/v1/wx/web/auth/29b95ed3-502b-4c44-9084-b978b287c1fb")})});var n=document.getElementsByClassName("btn-tips-no")[0];n.addEventListener("touchstart",function(){WeixinJSBridge.call("closeWindow")});var i=new Shake({threshold:15});i.start(),window.addEventListener("shake",function(){t.isShake&&(t.shake(),t.isShake=!1)},!1),document.getElementsByClassName("btn-open")[0].addEventListener("touchstart",function(){t.isShake&&(t.shake(),t.isShake=!1)}),"ondevicemotion"in window||alert("Not Supported"),t.SubmitKeycodeForm();var o=document.getElementById("btn-getredpacket"),r=!0;o.addEventListener("touchstart",function(){_hmt.push(["_trackEvent","buttons","click","领取红包"]),r&&(r=!1,t.getRedpacket())});var s=document.getElementsByClassName("privacy-term")[0];s.addEventListener("touchstart",function(){Common.removeClass(document.getElementsByClassName("term-pop")[0],"hide")}),document.getElementsByClassName("btn-close")[0].addEventListener("touchstart",function(){Common.addClass(document.getElementsByClassName("term-pop")[0],"hide")}),$("body").on("touchstart",".btn-alert-ok",function(){Common.alertBox.remove()})},shake:function(){var t=this,e=document.getElementById("input-phone");t.hasLogged&&(document.getElementById("input-keycode").parentNode.style.display="none",e.value=t.mobileVal,e.disabled=!0),gotoPin(1)},MobileValidate:function(){var t=!0,e=document.getElementById("input-phone");if(e.value){var n=/^1\d{10}$/;n.test(e.value)?Common.errorMsg.remove(e.parentElement):(t=!1,Common.errorMsg.add(e.parentElement,"手机号格式错误，请重新输入"))}else Common.errorMsg.add(e.parentElement,"手机号码不能为空"),t=!1;return!!t},FormKeycodeValidate:function(){var t=this,e=!0,n=document.getElementById("input-phone"),i=document.getElementById("input-keycode"),o=document.getElementById("input-coupon");if(n.value){var r=/^1\d{10}$/;r.test(n.value)?Common.errorMsg.remove(n.parentElement):(e=!1,Common.errorMsg.add(n.parentElement,"手机号格式错误，请重新输入"))}else Common.errorMsg.add(n.parentElement,"手机号码不能为空"),e=!1;return t.hasLogged||(i.value?Common.errorMsg.remove(i.parentElement):(Common.errorMsg.add(i.parentElement,"验证码不能为空"),e=!1)),o.value?Common.errorMsg.remove(o.parentElement):(Common.errorMsg.add(o.parentElement,"兑换码不能为空"),e=!1),!!e},SubmitKeycodeForm:function(){var t=this,e=!0,n=document.getElementsByClassName("btn-getkeycode")[0],i=document.getElementById("input-phone");n.addEventListener("touchstart",function(o){if(o.preventDefault(),t.MobileValidate()){if(!e)return;e=!1;var r=i.value;Common.hasClass(n,"countdown")||(t.countDown(),Api.getKeycode({mobile:r},function(t){e=!0,1==t.status?Common.alertBox.add("短信发送成功，请注意查收"):Common.alertBox.add(t.msg)}))}});var o=document.getElementsByClassName("btn-submit")[0],r=!0;o.addEventListener("touchstart",function(){if(_hmt.push(["_trackEvent","buttons","click","提交表单"]),t.FormKeycodeValidate()){if(!r)return;r=!1;var e=document.getElementById("input-phone").value,n=document.getElementById("input-keycode").value,i=document.getElementById("input-coupon").value;t.hasLogged?Api.submitWithoutChecknum({mobile:e,code:i},function(t){r=!0,1==t.status?(document.getElementById("money-value").innerHTML=parseInt(t.msg)/100,gotoPin(2)):Common.alertBox.add(t.msg)}):Api.submitAll({mobile:e,checknum:n,code:i},function(t){r=!0,1==t.status?(document.getElementById("money-value").innerHTML=parseInt(t.msg)/100,gotoPin(2)):Common.alertBox.add(t.msg)})}})},countDown:function(){var t=59,e=document.getElementsByClassName("btn-getkeycode")[0],n=setInterval(function(){t--,Common.addClass(e,"countdown"),e.innerHTML=t,0>=t&&(clearInterval(n),Common.removeClass(e,"countdown"),e.innerHTML="")},1e3)},getRedpacket:function(){Api.getRedpacket({},function(t){1==t.status?Common.removeClass(document.getElementsByClassName("qrcode-pop")[0],"hide"):Common.alertBox.add(t.msg)})},compareCommand:function(t){}},"function"==typeof define&&define.amd?define(function(){return t}):this.controller=t}.call(this),window.addEventListener("load",function(){var t=new controller;t.init()});