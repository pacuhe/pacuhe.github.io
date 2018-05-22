(function(){PENGO.client.pgame={},PENGO.client.pgame.crun={};PENGO.client.pgame.crun["261137255715189"]=function(inParams,outParams,outEvents,triggers,time,deltaTime){/* PengoJS Basic Script
    Objects to use:
     Math, time, deltaTime,
     inParams, outParams & outEvents */ 
//WARNING: If you have cloned this game, we strongly recommend you to change the key "WiMi5.fb.bs" for your own one
var bs = localStorage.getItem( "WiMi5.fb.bs" );
if ( bs === null || bs === undefined ) {
  bs = 0;
}
if ( inParams.last > bs ) {
  outParams.best = inParams.last;
  localStorage.setItem( "WiMi5.fb.bs", outParams.best );
} else {
  outParams.best = bs;
}
outEvents.done();/**/
};})();