(this["webpackJsonpcrypto-converter"]=this["webpackJsonpcrypto-converter"]||[]).push([[0],{21:function(e,r,t){e.exports=t(35)},33:function(e,r,t){},35:function(e,r,t){"use strict";t.r(r);var n=t(1),a=t.n(n),c=t(12),u=t.n(c),o=t(10),i=t(7),s=(t(32),t(15)),l=(t(33),t(9)),b=function(e){return e.converter},f=function(e){return e.currencyList},d=Object(l.a)(b,(function(e){return e.availableCurrencies})),m=Object(l.a)(b,(function(e){return e.fromCurrency})),p=Object(l.a)(b,(function(e){return e.fromValue})),O=Object(l.a)(b,(function(e){return e.toCurrency})),v=Object(l.a)(b,(function(e){return e.toValue})),C=Object(l.a)([m,O],(function(e,r){return!e||!r})),E="START_WEBSOCKET_SUBSCRIPTION",y="START_WEBSOCKET_SUBSCRIPTION_SUCCESS",j="START_WEBSOCKET_SUBSCRIPTION_FAIL",h="STOP_WEBSOCKET_SUBSCRIPTION",S="UPDATE_CURRENCY_LIST_ITEM_PRICE",T="REQUEST_EXCHANGE_RATE",g="REQUEST_EXCHANGE_RATE_SUCCESS",w="SELECT_FROM_CURRENCY",_="CHANGE_FROM_VALUE",x="SELECT_TO_CURRENCY",R="CHANGE_TO_VALUE",k=function(e){return{type:g,rate:e}},U=function(e){return{type:x,currency:e}},N=function(e){var r=e.label,t=e.id,n=e.selectedCurrencyChangeHandler,c=e.selectedCurrency,u=e.availableCurrencies,o=e.currencyValue,i=e.currencyValueChangeHandler,s=e.inputFieldsShouldBeDisabled;return a.a.createElement("div",{className:"converter-item"},a.a.createElement("label",{htmlFor:t},r),a.a.createElement("select",{id:t,onChange:function(e){return n(e.target.value)},value:c},a.a.createElement("option",{key:void 0,value:void 0}),u&&u.length>0&&u.map((function(e){return a.a.createElement("option",{key:e,value:e},e)}))),a.a.createElement("input",{type:"number",step:"any",value:o,onChange:function(e){return i(Number(e.target.value))},disabled:s}))},V=function(){var e=Object(i.c)(d),r=Object(i.c)(m),t=Object(i.c)(p),n=Object(i.c)(O),c=Object(i.c)(v),u=Object(i.c)(C),o=Object(i.b)();return a.a.createElement("div",{className:"main-block"},a.a.createElement("h2",null,"Converter"),a.a.createElement(a.a.Fragment,null,a.a.createElement(N,{label:"Choose currency to convert FROM",id:"fromCurrency",selectedCurrencyChangeHandler:function(e){return o(function(e){return{type:w,currency:e}}(e))},selectedCurrency:r,availableCurrencies:e,currencyValue:t,currencyValueChangeHandler:function(e){return o(function(e){return{type:_,value:e}}(e))},inputFieldsShouldBeDisabled:u}),a.a.createElement(N,{label:"Choose currency to convert TO",id:"toCurrency",selectedCurrencyChangeHandler:function(e){return o(U(e))},selectedCurrency:n,availableCurrencies:e,currencyValue:c,currencyValueChangeHandler:function(e){return o(function(e){return{type:R,value:e}}(e))},inputFieldsShouldBeDisabled:u})))},A=Object(l.a)(f,(function(e){return e.isSubscribed})),B=Object(l.a)(f,(function(e){return e.data})),H=Object(l.a)(f,(function(e){return e.error})),P=function(){var e=Object(i.c)(A),r=Object(i.c)(H),t=Object(i.c)(B),n=Object(i.b)(),c=function(e){return function(e){switch(e){case"UP":return"green";case"DOWN":return"red";default:return"grey"}}(t[e].rate)};return a.a.createElement("div",{className:"main-block"},a.a.createElement("h2",null,"Currency List"),r?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Ooops!"),a.a.createElement("p",null,r)):e?Object.keys(t).map((function(e){return a.a.createElement("p",{onClick:function(){n(U(e))},className:"".concat(c(e),"-bgc cursor-pointer"),key:e},e,": ",t[e].price)})):a.a.createElement("p",null,"loading ... "))},D=function(){return a.a.createElement("div",{className:"container"},a.a.createElement(P,null),a.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=t(14),I=t(8),L=new Error("Exchange rate can't be equal to 0"),W=Object(o.combineReducers)({currencyList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isSubscribed:!1,data:{},error:void 0},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case y:return Object(I.a)({},e,{isSubscribed:!0});case j:return Object(I.a)({},e,{isSubscribed:!1,error:r.error});case h:return Object(I.a)({},e,{isSubscribed:!1});case S:var t=(e.data[r.item]||{}).price,n=r.price,a=t&&(n!==t?n>t?"UP":"DOWN":(e.data[r.item]||{}).rate);return Object(I.a)({},e,{data:Object(I.a)({},e.data,Object(F.a)({},r.item,Object(I.a)({},e.data[r.item],{price:n,prevPrice:t,rate:a})))});default:return e}},converter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{availableCurrencies:["BTC","ETH","XRP","LTC","BCH","USD","EUR"],fromCurrency:void 0,fromValue:0,toCurrency:void 0,toValue:0,rate:void 0},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case g:if(0===r.rate)throw L;return Object(I.a)({},e,{rate:r.rate,toValue:e.fromValue*r.rate});case w:return Object(I.a)({},e,{fromCurrency:r.currency});case _:return Object(I.a)({},e,{fromValue:r.value,toValue:e.rate?r.value*e.rate:e.toValue});case x:return Object(I.a)({},e,{toCurrency:r.currency});case R:if(0===e.rate)throw L;return Object(I.a)({},e,{toValue:r.value,fromValue:e.rate?r.value/e.rate:e.fromValue});default:return e}}}),M=t(6),K=t.n(M),Y=t(4),G=function(e){return{type:j,error:e}},J=K.a.mark(Q);function X(){return Object(s.b)((function(e){var r=new WebSocket("wss://streamer.cryptocompare.com/v2?api_key=".concat("c33196888f1a1f1e2f3668397885329ae68567f895ea19f36a6a13335af5c41d"));return r.onopen=function(){return r.send(JSON.stringify({action:"SubAdd",subs:["0~Coinbase~BTC~USD","0~Coinbase~ETH~USD","0~Coinbase~XRP~USD","0~Coinbase~LTC~USD","0~Coinbase~BCH~USD"]})),e({type:y})},r.onerror=function(r){return e(G(r))},r.onmessage=function(r){if("error"===r.type)return e(G(r.error));var t,n,a=JSON.parse(r.data);return"0"===a.TYPE?e((t=a.FSYM,n=a.P,{type:S,item:t,price:n})):void 0},r.onclose=function(){return e({type:h})},function(){}}))}function Q(){var e,r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Y.b)(X);case 2:e=t.sent;case 3:return t.next=6,Object(Y.e)(e);case 6:return r=t.sent,t.next=9,Object(Y.c)(r);case 9:t.next=3;break;case 11:case"end":return t.stop()}}),J)}var q=K.a.mark(Z),$=function(e){return e.converter.fromCurrency},z=function(e){return e.converter.toCurrency};function Z(){var e,r,t,n;return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Y.d)($);case 2:return e=a.sent,a.next=5,Object(Y.d)(z);case 5:if(r=a.sent,t="https://rest.coinapi.io/v1/exchangerate/".concat(e,"/").concat(r,"?apiKey=").concat("AA60341D-2F17-4189-AB00-107FA2013A63"),!e||!r){a.next=20;break}return a.next=10,Object(Y.c)({type:T});case 10:if(e!==r){a.next=15;break}return a.next=13,Object(Y.c)(k(1));case 13:a.next=20;break;case 15:return a.next=17,fetch(t).then((function(e){return e.json()}));case 17:return n=a.sent,a.next=20,Object(Y.c)(k(n.rate));case 20:case"end":return a.stop()}}),q)}var ee=K.a.mark(ae),re=K.a.mark(ce),te=K.a.mark(ue),ne=K.a.mark(oe);function ae(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.c)({type:E});case 2:case"end":return e.stop()}}),ee)}function ce(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.f)(E,Q);case 2:case"end":return e.stop()}}),re)}function ue(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.f)(w,Z);case 2:return e.next=4,Object(Y.f)(x,Z);case 4:case"end":return e.stop()}}),te)}function oe(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.a)([ae(),ce(),ue()]);case 2:case"end":return e.stop()}}),ne)}var ie=Object(s.a)(),se=Object(o.applyMiddleware)(ie),le=Object(o.createStore)(W,se);ie.run(oe),u.a.render(a.a.createElement(i.a,{store:le},a.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.26831979.chunk.js.map