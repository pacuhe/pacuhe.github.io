/** Copyright (c) 2016 WIMI5. All rights reserved. */ (function(){var k=void 0,n=this;function s(c){c=c.split(".");var a=n;!(c[0]in a)&&a.execScript&&a.execScript("var "+c[0]);for(var b;c.length&&(b=c.shift());)a=a[b]?a[b]:a[b]={}};s("PENGO.client.shared.runEngine.howlerAudio.actuators.audioShooter");
window.PENGO.client.shared.runEngine.howlerAudio.actuators.audioShooter.resolve=function(){function c(b,c,f,h){function e(b){d.fireOutput(1,b)}var d=new a.runEngine.Blackbox(b,c,f,h,"_AudioShooter_key");d.createInParam("audio",0);d.createOutput("playShot",0);d.createOutput("allEnded",1);d.createOutput("allStopped",2);d.b=[];a.runEngine.getManager().c?(c=function(){d.inParameters.audio&&d.b.push(d.inParameters.audio.play(k,function(){b.callOnNextUpdateDraw(function(b){d.fireOutput(0,b)})},function(a){d.b.splice(d.b.indexOf(a),
1);0===d.b.length&&b.callOnNextUpdateDraw(e)}))},f=function(){if(d.inParameters.audio){for(var a=0;a<d.b.length;a++)d.inParameters.audio.stop(d.b[a],e);d.b=[];b.callOnNextUpdateDraw(function(a){d.fireOutput(2,a)})}}):(c=function(a){d.fireOutput(0,a);b.callOnNextUpdateDraw(e)},f=function(a){d.fireOutput(2,a)});d.createInput("play",0,c);d.createInput("stop",1,f);return d}var a;return{dependencies:function(b){b.runEngine.blackboxRepository.addBlackboxType("_AudioShooter_key",c);b.runEngine.blackboxRepository.setSpecificCallbacksToBlackboxType("_AudioShooter_key",
function(a){a.inParameters.audio&&(a.b=[],a.inParameters.audio.stop())},k);a=b},implementation:{i:c}}};s("PENGO.client.shared.runEngine.howlerAudio.actuators.bbMute");
window.PENGO.client.shared.runEngine.howlerAudio.actuators.bbMute.resolve=function(){function c(b,c,f,h){var e=new a.runEngine.Blackbox(b,c,f,h,"_Mute_key");e.createOutput("muted",0);e.createOutput("notMuted",1);e.createInput("on",0,function(b){a.runEngine.getManager().d(!0);e.fireOutput(0,b)});e.createInput("off",1,function(b){a.runEngine.getManager().d(!1);e.fireOutput(1,b)});return e}var a;return{dependencies:function(b){b.runEngine.blackboxRepository.addBlackboxType("_Mute_key",c);b.runEngine.blackboxRepository.setSpecificCallbacksToBlackboxType("_Mute_key",
function(){a.runEngine.getManager().d(!1)},k);a=b},implementation:{j:c}}};s("PENGO.client.shared.runEngine.howlerAudio.audio");
window.PENGO.client.shared.runEngine.howlerAudio.audio.resolve=function(){function c(a){this.a=a}c.prototype={play:function(a,b,c,f){var h;if(a!==k){try{this.a.loop(f,a)}catch(e){}try{h=this.a.play(a)}catch(d){}}else{try{this.a.loop(f)}catch(r){}try{h=this.a.play()}catch(l){}}b&&this.a.once("play",b,h);!f&&c&&this.a.on("end",c,h);return h},stop:function(a,b){b&&this.a.off("end",b,a);try{a!==k&&!this.a.playing(a)&&(this.a._soundById(a)._paused=!1),this.a.stop(a)}catch(c){}},pause:function(a,b){b&&
this.a.once("pause",b,a);try{this.a.pause(a)}catch(c){}}};return{dependencies:function(){},implementation:{Audio:c}}};s("PENGO.client.shared.runEngine.howlerAudio.manager");
window.PENGO.client.shared.runEngine.howlerAudio.manager.resolve=function(){function c(b,q,f){function h(a){a=e.indexOf(a);-1!=a&&e.splice(a,1)}var e=[];this.k=q;c.prototype.c=window.Howler!==k;window.Howler===k&&a.logger.error("Howler Audio not supported.");(b=a.resourceManager.getTypes().AUDIO)&&f.registerAssetType({type:b,callbacks:{load:function(b,f,q){var h;c.prototype.c&&(h=b?new a.runEngine.audio.Audio(b):new a.runEngine.audioDummy.AudioDummy,e.push(h));f(q,h)},unload:function(){return h}}})}
var a;c.prototype={c:!0,g:function(){if(c.prototype.c)return new a.runEngine.audioDummy.AudioDummy},d:function(a){window.Howler.mute(a)},f:k,e:k};c.prototype.beforePlayNotify=c.prototype.f;c.prototype.afterStopNotify=c.prototype.e;c.prototype.createAudioDummy=c.prototype.g;return{dependencies:function(b){a=b;b.runEngine.paramManager.addParamType("_Audio_","Audio",k)},implementation:{Manager:c,config:{}}}};s("PENGO.client.shared.runEngine.howlerAudio.actuators.audioPlayer");
window.PENGO.client.shared.runEngine.howlerAudio.actuators.audioPlayer.resolve=function(){function c(c,f,h,e){function d(){c.callOnNextUpdateDraw(r)}function r(a){l=0;g.fireOutput(3,a)}var l=0,m,p,g=new a.runEngine.Blackbox(c,f,h,e,"_AudioPlayer_key");g.createInParam("audio",0);g.createInParam("loop",1);g.createOutput("onPlay",0);g.createOutput("onPause",1);g.createOutput("onStop",2);g.createOutput("onPlayEnd",3);a.runEngine.getManager().c?(f=function(){g.inParameters.audio&&2!=l&&(b=g.inParameters.loop?
!0:!1,m=g.inParameters.audio,p=m.play(k,function(){c.callOnNextUpdateDraw(function(a){g.fireOutput(0,a)})},d,b),l=2)},h=function(){m&&2==l&&(m.pause(p,function(){c.callOnNextUpdateDraw(function(a){l=1;g.fireOutput(1,a)})}),l=1)},e=function(a){m&&(a?(m.stop(p,d),c.callOnNextUpdateDraw(function(a){l=0;g.fireOutput(2,a)})):(m.stop(p),l=0),m=k)}):(f=function(a){g.fireOutput(0,a);c.callOnNextUpdateDraw(r)},h=function(a){g.fireOutput(1,a)},e=function(a){g.fireOutput(2,a)});g.createInput("play",0,f);g.createInput("pause",
1,h);g.createInput("stop",2,e);g.stopPlay=e;return g}var a,b;return{dependencies:function(b){b.runEngine.blackboxRepository.addBlackboxType("_AudioPlayer_key",c);b.runEngine.blackboxRepository.setSpecificCallbacksToBlackboxType("_AudioPlayer_key",function(a){a.stopPlay()},k);b.runEngine.blackboxRepository.setInParamDefaultValueToBlackboxType("_AudioPlayer_key","loop",!1);a=b},implementation:{h:c}}};s("PENGO.client.shared.runEngine.howlerAudio.audioDummy");window.PENGO.client.shared.runEngine.howlerAudio.audioDummy.resolve=function(){function c(){this.l=this.m=k;Object.defineProperty(this,"maxConcurrent",{get:function(){return 0},set:function(){},enumerable:!0,configurable:!0})}c.prototype={play:function(a,b,c,f){b&&b();!f&&c&&setTimeout(c,0);return a},stop:function(a,b){b&&b()},pause:function(a,b){b&&b()}};return{dependencies:function(){},implementation:{AudioDummy:c}}};})();
