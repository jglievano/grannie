module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./src/main.dev.ts")}({"./src/main.dev.ts":function(e,n,t){"use strict";t.r(n);var r=t("electron");function o(e,n,t,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void t(e)}c.done?n(a):Promise.resolve(a).then(r,o)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var u=e.apply(n,t);function c(e){o(u,r,i,c,a,"next",e)}function a(e){o(u,r,i,c,a,"throw",e)}c(void 0)}))}}function u(){return c.apply(this,arguments)}function c(){return(c=i(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0,new r.BrowserWindow({show:!1,width:1024,height:728,webPreferences:{nodeIntegration:!0}}).loadURL("file://".concat(__dirname,"/app.html"));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.app.whenReady().then(u),r.app.on("window-all-closed",(function(){"darwin"!=process.platform&&r.app.quit()})),r.app.on("activate",(function(){0===r.BrowserWindow.getAllWindows().length&&u()}))},electron:function(e,n){e.exports=require("electron")}});