/** Copyright (c) 2016 WIMI5. All rights reserved. */ (function(){var h=void 0,l=!0,p=null,q=!1,s=this;function w(c){c=c.split(".");var b=s;!(c[0]in b)&&b.execScript&&b.execScript("var "+c[0]);for(var m;c.length&&(m=c.shift());)b=b[m]?b[m]:b[m]={}}Math.random();w("PENGO.client.plugins.game.adsManager.providers.generic");
window.PENGO.client.plugins.game.adsManager.providers.generic.resolve=function(){function c(b,c,e){this.D=b;this.Z={};this.status="initialized";this.c=c;this.g=e}c.prototype={K:function(b,c){try{if("started"===this.status){b&&b.call(c||_that);return}this.status="started"}catch(e){b&&b.call(c||this,"Unable to use ad4games ads stats due to error "+e+" "+e.stack)}b&&b.call(c||this)},finish:function(b,c){callback&&callback.call(c||this)},k:function(b){if("started"!==this.status)throw PengoError("Invalid status "+
this.status);this.D.M()?b.A(this.c.mobile):b.A(this.c.desktop);b.Q()}};c.prototype.init=c.prototype.K;c.prototype.finish=c.prototype.finish;c.prototype.showAds=c.prototype.k;return c};w("PENGO.client.plugins.game.adsManager.providers.blockerDetector");
window.PENGO.client.plugins.game.adsManager.providers.blockerDetector.resolve=function(){function c(){this.options={document:document,window:window,resetOnEnd:q,loopCheckTime:50,loopMaxNumber:5,baitClass:"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",baitStyle:"width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"};this.data={version:"3.1.1",bait:p,checking:q,loop:p,loopNumber:0,
event:{}}}c.prototype={S:function(b,c){if(c!==h){var e=b;b={};b[e]=c}for(var a in b)this.options[a]=b[a];return this},t:function(){var b=this.options.document.createElement("div");b.setAttribute("class",this.options.baitClass);b.setAttribute("style",this.options.baitStyle);this.data.a=this.options.document.body.appendChild(b);this.data.a.offsetParent;this.data.a.offsetHeight;this.data.a.offsetLeft;this.data.a.offsetTop;this.data.a.offsetWidth;this.data.a.clientHeight;this.data.a.clientWidth},u:function(){this.options.document.body.removeChild(this.data.a);
this.data.a=p},r:function(b){b&&(b=l);if(this.data.l===l)return q;this.data.l=l;this.data.a||this.t();var c=this;this.data.o=0;b&&(this.data.loop=setInterval(function(){c.s(b)},this.options.loopCheckTime));this.s(b);return l},s:function(b){var c=q;this.data.a===p&&this.t();if(this.options.document.body.getAttribute("abp")!==p||this.data.a.offsetParent===p||0==this.data.a.offsetHeight||0==this.data.a.offsetLeft||0==this.data.a.offsetTop||0==this.data.a.offsetWidth||0==this.data.a.clientHeight||0==
this.data.a.clientWidth)c=l;if(this.options.window.getComputedStyle!==h){var e=this.options.window.getComputedStyle(this.data.a,p);if("none"==e.getPropertyValue("display")||"hidden"==e.getPropertyValue("visibility"))c=l}b&&(this.data.o++,this.data.o>=this.options.loopMaxNumber&&(clearInterval(this.data.loop),this.data.loop=p,this.data.o=0));if(c)b&&(this.data.l=q),this.u(),this.v("detected");else if(this.data.loop===p||!b)b&&(this.data.l=q),this.u(),this.v("notDetected")},on:function(b,c){this.data.event[b]||
(this.data.event[b]=[]);this.data.event[b].push(c)},off:function(b,c){this.data.event[b]&&-1<this.data.event[b].indexOf(c)&&(this.data.event[b]=this.data.event[b].splice(this.data.event[b].indexOf(c),1))},v:function(b){if(this.data.event[b])return this.data.event[b].forEach(function(b){b()}),this.options.resetOnEnd===l&&this.V(),this},m:function(){var b=this;Object.keys(this.data.event).forEach(function(c){b.data.event[c]=[]})}};c.prototype.setOption=c.prototype.S;c.prototype.check=c.prototype.r;
c.prototype.on=c.prototype.on;c.prototype.off=c.prototype.off;c.prototype.clearEvents=c.prototype.m;return c};w("PENGO.client.plugins.game.adsManager.controller");
window.PENGO.client.plugins.game.adsManager.controller.resolve=function(){var c=l;return function(b){function m(){var a,b,f,g,e,k;a=document.createElement("div");a.id="adsText";a.className="loading_background";a.style.position="static";a.style.width="100%";a.style.height="100%";a.style.top="0px";a.style.left="0px";a.style.display="block";a.style.outline="none";b=document.createElement("div");b.className="tetris";f=document.createElement("div");f.className="block1";b.appendChild(f);f=document.createElement("div");
f.className="block2";b.appendChild(f);f=document.createElement("div");f.className="block3";b.appendChild(f);f=document.createElement("div");f.className="block4";b.appendChild(f);f=document.createElement("div");f.className="loading-text";f.textContent="Loading advertisement";k=document.createElement("div");k.className="wimiLogo";g=document.createElement("p");g.className="powered";g.textContent="Powered by...";a.appendChild(b);a.appendChild(f);a.appendChild(k);a.appendChild(g);0===document.getElementsByClassName("loading_background").length?
c&&document.getElementById("game").appendChild(a):e=setInterval(function(){0===document.getElementsByClassName("loading_background").length&&(clearInterval(e),c&&document.getElementById("game").appendChild(a))},1E3)}function e(){var a;c=q;(a=document.getElementById("adsText"))&&a.parentNode.removeChild(a)}return{k:function(a,c,f){var g,n,k,r=[];if(!b.enabled||b.O()||b.N()||b.L()||-1!==b.n.getGameProperty("standalone"))return c&&c.call(f||this);!a&&(a={});b.j.setPauseGameState(0,l);g=a.adsProviders||
b.f||{};Object.keys(g).forEach(function(a){function c(f){switch(f.data){case a+"/user/clicked":b.e.emit("ads","clicked");break;case a+"/user/close":b.e.emit("ads","close");break;case a+"/user/timer":case a+"/user/error":b.e.emit("ads","error")}f&&(f.data&&f.data.match(a))&&(window.removeEventListener("message",c),d.b&&d.b(h,f.data))}var d,f;window.addEventListener("message",c);d=document.createElement(b.c.containerType);d.id=a;d.width="100%";d.height="100%";d.display="none";d.setAttribute("allowtransparency",
"on");d.setAttribute("partition","persist:static");d.setAttribute("target","_blank");d.addEventListener("newwindow",function(a){a.preventDefault();window.open(a.targetUrl)});d.A=function(a){d.setAttribute("src",a)};d.Q=function(){g[a].g.on("detected",function(){g[a].g.m();b.e.emit("ads","blocked");window.removeEventListener("message",c);d.b&&d.b(h,a+"/system/blocked")});g[a].g.on("notDetected",function(){g[a].g.m()});document.getElementsByTagName("body")[0].appendChild(d);m();d.onload=function(){e();
g[a].g.r();try{if(d&&d.contentDocument){var f=d.contentDocument.getElementById(g[a].c.div);!f||0===f.clientHeight?(b.e.emit("ads","notLoaded"),window.removeEventListener("message",c),d.b&&d.b(h,a+"/system/timeout")):b.e.emit("ads","loaded")}}catch(k){b.e.emit("error","fatal","custom",JSON.stringify({iframe:d.src,document:document.URL}))}};d.addEventListener("contentload",function(){d.contentWindow.postMessage("ready","*")})};n=document.createElement("style");k=" #"+a+" { position:absolute; left: 0px; width: 100%; top: 0px; height: 100%; } ";
n.type="text/css";n.styleSheet?n.styleSheet.cssText=k:n.appendChild(document.createTextNode(k));document.head.appendChild(n);d.addEventListener("error",function(a){window.removeEventListener("message",c);d.b&&d.b(a)});r.push(function(k){d.b=function(a){d.b=h;(f=document.getElementById(d.id))&&f.parentNode.removeChild(f);e();k(a)};setTimeout(function(){window.removeEventListener("message",c);d.b&&(b.e.emit("ads","timeout"),d.b(h,a+"/user/timeout"))},g[a].c.timeout||b.c.defaultTimeout);try{g[a].showAds(d)}catch(t){window.removeEventListener("message",
c),d.b&&d.b(t)}})});async.series(r,function(a,g){b.j.setPauseGameState(0,q);return c&&c.call(f||this,a,g)})},F:function(a,b,c){b&&b.call(c||this)}}}};w("PENGO.client.plugins.game.adsManager.errors");
window.PENGO.client.plugins.game.adsManager.errors.resolve=function(c){return{U:h,G:{"md:lang#1":{msg:q,code:c.pengoError.codes.codes.NOT_FOUND},"md:conf#1":{msg:q,code:c.pengoError.codes.codes.NOT_FOUND},"md:conf#2":{msg:q,code:c.pengoError.codes.codes.NOT_FOUND},"md:conf#3":{msg:q,code:c.pengoError.codes.codes.NOT_FOUND},"md:conf#4":{msg:q,code:c.pengoError.codes.codes.NOT_FOUND},"md:conf#5":{msg:q,code:c.pengoError.codes.codes.NOT_FOUND},"md:conf#6":{msg:q,code:c.pengoError.codes.codes.NOT_FOUND},
"md:conf#7":{msg:q,code:c.pengoError.codes.codes.NOT_FOUND},"md:conf#8":{msg:q,code:c.pengoError.codes.codes.NOT_FOUND},"md:ads#1":{msg:q,code:c.pengoError.codes.codes.INVALID_DATA},"md:ads#2":{msg:q,code:c.pengoError.codes.codes.INVALID_DATA}}}};w("PENGO.client.plugins.game.adsManager.model");window.PENGO.client.plugins.game.adsManager.model.resolve=function(c){return{J:function(){return c.bbWrappers.pengoModel.PengoModel.extend({defaults:function(){return{texts:h}},X:function(b){this.set("texts",b)}})}}};w("PENGO.client.plugins.game.adsManager.module");
window.PENGO.client.plugins.game.adsManager.module.resolve=function(c,b){function m(){this.Y=this.c=this.d=h;this.f={};this.model=this.h=this.j=this.B=this.I=this.i=this.enabled=h}var e=c.pengoError.pengoError.StoredPengoError;m.prototype={R:function(a){if(!a.hasOwnProperty(["errorsStore"])||"string"!==typeof a.errorsStore)throw new e(this.d,"md:conf#2",[a.errorsStore]);this.d=a.errorsStore;if(!a.hasOwnProperty(["enabled"])||"boolean"!==typeof a.enabled)throw new e(this.d,"md:conf#1");if(!a.hasOwnProperty(["PWLDomain"])||
!Array.isArray(a.PWLDomain))throw new e(this.d,"md:conf#3",[a.PWLDomain]);if(!a.hasOwnProperty(["PWLGameID"])||!Array.isArray(a.PWLGameID))throw new e(this.d,"md:conf#4",a.PWLGameID);if(!a.hasOwnProperty(["adsProvidersInterface"])||!Array.isArray(a.adsProvidersInterface))throw new e(this.d,"md:conf#5",a.adsProvidersInterface);if(!a.hasOwnProperty(["defaultTimeout"])||"number"!==typeof a.defaultTimeout)throw new e(this.d,"md:conf#6",a.defaultTimeout);if(!a.hasOwnProperty(["containerType"])||"string"!==
typeof a.containerType)throw new e(this.d,"md:conf#7",a.containerType);if(!a.hasOwnProperty(["adsProviders"])||!Array.isArray(a.adsProviders))throw new e(this.d,"md:conf#8",[a.adsProviders]);this.c=a;this.enabled=a.enabled},C:function(a,b){var c=this;if("string"!==typeof a)throw new e(this.d,"md:ads#1",[a]);b&&this.c.adsProvidersInterface.forEach(function(a){if("function"!==typeof b[a])throw new e(c.d,"md:ads#2",[a,"function",typeof b[a]]);});this.f[a]=b},P:function(a){"string"===typeof a&&delete this.f[a]},
w:function(a){a===h?this.H!==h&&(this.I=h):this.H=a},q:function(a){this.B=a;return this.B!==h},p:function(a){this.j=a;return this.j!==h},z:function(a){this.n=a;return this.n!==a},T:function(a){this.e=a;return this.e!==a},N:function(){var a=document.createElement("a");a.href=document.referrer;return-1!==this.c.PWLDomain.indexOf(a.host)},L:function(){return-1!==this.c.PWLGameID.indexOf(this.n.getGameProperty("id"))},M:function(){var a=q,b=navigator.userAgent||navigator.vendor||window.opera;if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b)||
/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,
4)))a=l;return a},O:function(){var a=navigator.userAgent.toLowerCase();return-1!=a.indexOf("safari")&&!(-1<a.indexOf("chrome"))},start:function(a,e,f,g,n,k,m,v){var u=this,d=[];this.i=a;this.q(g);this.model=new (b.model.J(this))({_id:"PENGO.client.plugins.game.adsManager.module.Module",texts:h});this.h=b.controller(this);this.w(e);this.z(n);this.T(f);this.p(k);(this.c.adsProviders||[]).forEach(function(a){a.enabled&&u.C(a.name,new (b.providers[a.name]||b.providers.generic)(u,a.config,new b.providers.blockerDetector))});
Object.keys(this.f).forEach(function(a){d.push(function(b){u.f[a].init(b)})});async.parallel(d,function(a){a&&u.i.error("Error "+a+" starting adsManager service.");u.h.k();c.util.callback.call(m,v||this,a)})},stop:function(a,b){var f=this,e=[];this.q(h);this.w(h);this.p(h);this.W(h);Object.keys(this.f).forEach(function(a){e.push(function(b){f.f[a].finish(function(c){f.P(a);b(c)})})});async.parallel(e,function(e){e&&f.i.error("Error "+e+" stopping adsManager service.");c.util.callback.call(a,b||this,
err)});this.i=h}};return m};w("PENGO.client.plugins.game.adsManager.activator");
(function(){function c(){a.off("SERVICE_REGISTERED",c);n=a.getService("igloo.logger")[0];if(!n||!a.getService("igloo.fatal")[0]||!a.getService("igloo.eventsManager")[0]||!a.getService("game.uiManager")[0]||!a.getService("stats")[0]||!a.getService("game.gameManager")[0]||!a.getService("game.runnerManager")[0])a.on("SERVICE_REGISTERED",c);else{k||(k=new f.module(g.templates,g.textsURL));try{k.R(g.config)}catch(b){return a.getService("igloo.fatal")[0].handleFatal({Message:b.message,Source:'Setting plugin "'+
a.getPluginId()+'"'})}f.errors.U=g.config.errorsStore;k.start(n,a.getService("igloo.eventsManager")[0],a.getService("stats")[0],a.getService("game.uiManager")[0],a.getService("game.gameManager")[0],a.getService("game.runnerManager")[0],function(b){b?a.getService("igloo.fatal")[0].handleFatal({Message:'Error "'+b.message+'" while starting plugin "'+a.getPluginId()+'"',Source:'Starting plugin "'+a.getPluginId()+'"'}):(r={functions:{showAds:k.h.k,closeAds:k.h.F},properties:{}},a.register(e,r),window.atmaha4kiam=
r.functions.showAds,a.on("SERVICE_UNREGISTERED",m),a.on("SERVICE_UPDATED",v))},this)}}function b(b,d){r!==h&&a.unregister(e,r);k!==h&&k.stop();a.off("SERVICE_UNREGISTERED",m);a.off("SERVICE_UPDATED",v);if(b&&!d)a.on("SERVICE_REGISTERED",c);else a.off("SERVICE_REGISTERED",c);t.remove(g.errorsStore)}function m(c){switch(c){case "game.uiManager":if(k.q(a.getService(c)[0]))return;break;case "game.gameManager":if(k.z(a.getService(c)[0]))return;break;case "game.runnerManager":if(k.p(a.getService(c)[0]))return;
break;default:return}b(l)}var e="game.adsManager",a,t,f,g,n,k,r,v=m;window.PENGO.client.plugins.game.adsManager.activator.activator=function(e,d){t=e.pengoError.pengoError.storage;return{start:function(b,e){a=b;g=e;f=d;t.add(e.config.errorsStore,d.errors.G);c()},stop:b}}})();})();
