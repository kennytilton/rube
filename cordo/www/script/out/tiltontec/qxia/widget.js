// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.qxia.widget');
goog.require('cljs.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
goog.require('tiltontec.model.macros');
goog.require('clojure.set');
goog.require('tiltontec.qxia.base');
goog.require('tiltontec.cell.integrity');
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","Mobile","tiltontec.qxia.types/Mobile",-143490810)], null),(function (_,me,new$,old,c){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
var app = new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var shower = new cljs.core.Keyword(null,"shower","shower",-1731894586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var pager = new cljs.core.Keyword(null,"pager","pager",1850229940).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var routing = app.getRouting();
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__246285_246293 = cljs.core.seq.call(null,old);
var chunk__246286_246294 = null;
var count__246287_246295 = (0);
var i__246288_246296 = (0);
while(true){
if((i__246288_246296 < count__246287_246295)){
var page_246297 = cljs.core._nth.call(null,chunk__246286_246294,i__246288_246296);
var temp__4425__auto___246298 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_246297));
if(cljs.core.truth_(temp__4425__auto___246298)){
var ept_246299 = temp__4425__auto___246298;
routing.remove(ept_246299);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_246297));

var G__246300 = seq__246285_246293;
var G__246301 = chunk__246286_246294;
var G__246302 = count__246287_246295;
var G__246303 = (i__246288_246296 + (1));
seq__246285_246293 = G__246300;
chunk__246286_246294 = G__246301;
count__246287_246295 = G__246302;
i__246288_246296 = G__246303;
continue;
} else {
var temp__4425__auto___246304 = cljs.core.seq.call(null,seq__246285_246293);
if(temp__4425__auto___246304){
var seq__246285_246305__$1 = temp__4425__auto___246304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__246285_246305__$1)){
var c__7021__auto___246306 = cljs.core.chunk_first.call(null,seq__246285_246305__$1);
var G__246307 = cljs.core.chunk_rest.call(null,seq__246285_246305__$1);
var G__246308 = c__7021__auto___246306;
var G__246309 = cljs.core.count.call(null,c__7021__auto___246306);
var G__246310 = (0);
seq__246285_246293 = G__246307;
chunk__246286_246294 = G__246308;
count__246287_246295 = G__246309;
i__246288_246296 = G__246310;
continue;
} else {
var page_246311 = cljs.core.first.call(null,seq__246285_246305__$1);
var temp__4425__auto___246312__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_246311));
if(cljs.core.truth_(temp__4425__auto___246312__$1)){
var ept_246313 = temp__4425__auto___246312__$1;
routing.remove(ept_246313);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_246311));

var G__246314 = cljs.core.next.call(null,seq__246285_246305__$1);
var G__246315 = null;
var G__246316 = (0);
var G__246317 = (0);
seq__246285_246293 = G__246314;
chunk__246286_246294 = G__246315;
count__246287_246295 = G__246316;
i__246288_246296 = G__246317;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__246289 = cljs.core.seq.call(null,new$);
var chunk__246290 = null;
var count__246291 = (0);
var i__246292 = (0);
while(true){
if((i__246292 < count__246291)){
var page = cljs.core._nth.call(null,chunk__246290,i__246292);
var qx_page_246318 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_246318);

var temp__4425__auto___246319 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___246319)){
var ept_246320 = temp__4425__auto___246319;
routing.onGet(ept_246320,shower,qx_page_246318);
} else {
}

var G__246321 = seq__246289;
var G__246322 = chunk__246290;
var G__246323 = count__246291;
var G__246324 = (i__246292 + (1));
seq__246289 = G__246321;
chunk__246290 = G__246322;
count__246291 = G__246323;
i__246292 = G__246324;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__246289);
if(temp__4425__auto__){
var seq__246289__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__246289__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__246289__$1);
var G__246325 = cljs.core.chunk_rest.call(null,seq__246289__$1);
var G__246326 = c__7021__auto__;
var G__246327 = cljs.core.count.call(null,c__7021__auto__);
var G__246328 = (0);
seq__246289 = G__246325;
chunk__246290 = G__246326;
count__246291 = G__246327;
i__246292 = G__246328;
continue;
} else {
var page = cljs.core.first.call(null,seq__246289__$1);
var qx_page_246329 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_246329);

var temp__4425__auto___246330__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___246330__$1)){
var ept_246331 = temp__4425__auto___246330__$1;
routing.onGet(ept_246331,shower,qx_page_246329);
} else {
}

var G__246332 = cljs.core.next.call(null,seq__246289__$1);
var G__246333 = null;
var G__246334 = (0);
var G__246335 = (0);
seq__246289 = G__246332;
chunk__246290 = G__246333;
count__246291 = G__246334;
i__246292 = G__246335;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),(function (me){
var temp__4425__auto__ = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto__)){
var lyo = temp__4425__auto__;
return tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo);
} else {
return null;
}
}));
tiltontec.qxia.widget.form_build_radio_group_stub = (function tiltontec$qxia$widget$form_build_radio_group_stub(form,stub){
var qx_form = tiltontec.qxia.base.qxme.call(null,form);
var temp__4425__auto___246344 = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stub));
if(cljs.core.truth_(temp__4425__auto___246344)){
var h_246345 = temp__4425__auto___246344;
qx_form.addGroupHeader(h_246345);
} else {
}

var group = (new qx.ui.mobile.form.RadioGroup());
group.setAllowEmptySelection((function (){var or__6210__auto__ = new cljs.core.Keyword(null,"allowEmptySelection","allowEmptySelection",485851121).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stub));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return false;
}
})());

tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"3-post-assembly","3-post-assembly",-607469254),stub], null),((function (group,qx_form){
return (function (opcode,defer_info){
return group.addListener("changeSelection",((function (group,qx_form){
return (function (e){
var rb = cljs.core.first.call(null,cljs.core.js__GT_clj.call(null,e.getData()));
if(cljs.core.truth_(rb)){
return tiltontec.model.core.md_reset_BANG_.call(null,stub,new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.keyword.call(null,rb.getModel()));
} else {
return null;
}
});})(group,qx_form))
);
});})(group,qx_form))
);

var seq__246340_246346 = cljs.core.seq.call(null,tiltontec.model.core.md_get.call(null,stub,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__246341_246347 = null;
var count__246342_246348 = (0);
var i__246343_246349 = (0);
while(true){
if((i__246343_246349 < count__246342_246348)){
var rb_246350 = cljs.core._nth.call(null,chunk__246341_246347,i__246343_246349);
group.add(tiltontec.qxia.base.qxme.call(null,rb_246350));

qx_form.add(tiltontec.qxia.base.qxme.call(null,rb_246350),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rb_246350)));

var G__246351 = seq__246340_246346;
var G__246352 = chunk__246341_246347;
var G__246353 = count__246342_246348;
var G__246354 = (i__246343_246349 + (1));
seq__246340_246346 = G__246351;
chunk__246341_246347 = G__246352;
count__246342_246348 = G__246353;
i__246343_246349 = G__246354;
continue;
} else {
var temp__4425__auto___246355 = cljs.core.seq.call(null,seq__246340_246346);
if(temp__4425__auto___246355){
var seq__246340_246356__$1 = temp__4425__auto___246355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__246340_246356__$1)){
var c__7021__auto___246357 = cljs.core.chunk_first.call(null,seq__246340_246356__$1);
var G__246358 = cljs.core.chunk_rest.call(null,seq__246340_246356__$1);
var G__246359 = c__7021__auto___246357;
var G__246360 = cljs.core.count.call(null,c__7021__auto___246357);
var G__246361 = (0);
seq__246340_246346 = G__246358;
chunk__246341_246347 = G__246359;
count__246342_246348 = G__246360;
i__246343_246349 = G__246361;
continue;
} else {
var rb_246362 = cljs.core.first.call(null,seq__246340_246356__$1);
group.add(tiltontec.qxia.base.qxme.call(null,rb_246362));

qx_form.add(tiltontec.qxia.base.qxme.call(null,rb_246362),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rb_246362)));

var G__246363 = cljs.core.next.call(null,seq__246340_246356__$1);
var G__246364 = null;
var G__246365 = (0);
var G__246366 = (0);
seq__246340_246346 = G__246363;
chunk__246341_246347 = G__246364;
count__246342_246348 = G__246365;
i__246343_246349 = G__246366;
continue;
}
} else {
}
}
break;
}

var temp__4423__auto__ = tiltontec.model.core.md_get.call(null,stub,new cljs.core.Keyword(null,"selection","selection",975998651));
if(cljs.core.truth_(temp__4423__auto__)){
var s = temp__4423__auto__;
var gs = cljs.core.filter.call(null,((function (s,temp__4423__auto__,group,qx_form){
return (function (rb){
return cljs.core._EQ_.call(null,s,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rb)));
});})(s,temp__4423__auto__,group,qx_form))
,tiltontec.model.core.md_get.call(null,stub,new cljs.core.Keyword(null,"kids","kids",1156670771)));
return group.setSelection(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,tiltontec.qxia.base.qxme,gs)));
} else {
return group.resetSelection();
}
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225)], null),(function (_,me,new$,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__246367_246377 = cljs.core.seq.call(null,old);
var chunk__246368_246378 = null;
var count__246369_246379 = (0);
var i__246370_246380 = (0);
while(true){
if((i__246370_246380 < count__246369_246379)){
var k_246381 = cljs.core._nth.call(null,chunk__246368_246378,i__246370_246380);
var qxk_246382 = tiltontec.qxia.base.qxme.call(null,k_246381);
var label_246383 = tiltontec.model.core.md_get.call(null,k_246381,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_246382);

var G__246384 = seq__246367_246377;
var G__246385 = chunk__246368_246378;
var G__246386 = count__246369_246379;
var G__246387 = (i__246370_246380 + (1));
seq__246367_246377 = G__246384;
chunk__246368_246378 = G__246385;
count__246369_246379 = G__246386;
i__246370_246380 = G__246387;
continue;
} else {
var temp__4425__auto___246388 = cljs.core.seq.call(null,seq__246367_246377);
if(temp__4425__auto___246388){
var seq__246367_246389__$1 = temp__4425__auto___246388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__246367_246389__$1)){
var c__7021__auto___246390 = cljs.core.chunk_first.call(null,seq__246367_246389__$1);
var G__246391 = cljs.core.chunk_rest.call(null,seq__246367_246389__$1);
var G__246392 = c__7021__auto___246390;
var G__246393 = cljs.core.count.call(null,c__7021__auto___246390);
var G__246394 = (0);
seq__246367_246377 = G__246391;
chunk__246368_246378 = G__246392;
count__246369_246379 = G__246393;
i__246370_246380 = G__246394;
continue;
} else {
var k_246395 = cljs.core.first.call(null,seq__246367_246389__$1);
var qxk_246396 = tiltontec.qxia.base.qxme.call(null,k_246395);
var label_246397 = tiltontec.model.core.md_get.call(null,k_246395,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_246396);

var G__246398 = cljs.core.next.call(null,seq__246367_246389__$1);
var G__246399 = null;
var G__246400 = (0);
var G__246401 = (0);
seq__246367_246377 = G__246398;
chunk__246368_246378 = G__246399;
count__246369_246379 = G__246400;
i__246370_246380 = G__246401;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__4425__auto__ = new$;
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__246371 = cljs.core.seq.call(null,kids);
var chunk__246372 = null;
var count__246373 = (0);
var i__246374 = (0);
while(true){
if((i__246374 < count__246373)){
var k = cljs.core._nth.call(null,chunk__246372,i__246374);
var G__246375_246402 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__246375_246402) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.widget.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_246404 = tiltontec.qxia.base.qxme.call(null,k);
var label_246405 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_246404,label_246405);

}

var G__246406 = seq__246371;
var G__246407 = chunk__246372;
var G__246408 = count__246373;
var G__246409 = (i__246374 + (1));
seq__246371 = G__246406;
chunk__246372 = G__246407;
count__246373 = G__246408;
i__246374 = G__246409;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__246371);
if(temp__4425__auto____$1){
var seq__246371__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__246371__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__246371__$1);
var G__246410 = cljs.core.chunk_rest.call(null,seq__246371__$1);
var G__246411 = c__7021__auto__;
var G__246412 = cljs.core.count.call(null,c__7021__auto__);
var G__246413 = (0);
seq__246371 = G__246410;
chunk__246372 = G__246411;
count__246373 = G__246412;
i__246374 = G__246413;
continue;
} else {
var k = cljs.core.first.call(null,seq__246371__$1);
var G__246376_246414 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__246376_246414) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.widget.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_246416 = tiltontec.qxia.base.qxme.call(null,k);
var label_246417 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_246416,label_246417);

}

var G__246418 = cljs.core.next.call(null,seq__246371__$1);
var G__246419 = null;
var G__246420 = (0);
var G__246421 = (0);
seq__246371 = G__246418;
chunk__246372 = G__246419;
count__246373 = G__246420;
i__246374 = G__246421;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724),(function (me){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qx-init-single-enqueues-qxme!!!!","qx-init-single-enqueues-qxme!!!!",-866757605));

return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qx-init-single-does--qxme!!!!","qx-init-single-does--qxme!!!!",-770694528));

var kids = new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,kids))){
} else {
throw (new Error("Assert failed: (= 1 (count kids))"));
}

var form = cljs.core.first.call(null,kids);
var qx_form = tiltontec.qxia.base.qxme.call(null,form);
if(cljs.core.truth_(qx_form)){
} else {
throw (new Error("Assert failed: qx-form"));
}

tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qx-init-single-gets-qxme!!!!","qx-init-single-gets-qxme!!!!",-168440823));

return cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),(new qx.ui.mobile.form.renderer.Single(qx_form)));
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),(function (page){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
return qx_page.addListener("initialize",((function (qx_page){
return (function (){
var temp__4425__auto___246426 = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___246426)){
var kids_246427 = temp__4425__auto___246426;
var content_246428 = qx_page.getContent();
var seq__246422_246429 = cljs.core.seq.call(null,kids_246427);
var chunk__246423_246430 = null;
var count__246424_246431 = (0);
var i__246425_246432 = (0);
while(true){
if((i__246425_246432 < count__246424_246431)){
var k_246433 = cljs.core._nth.call(null,chunk__246423_246430,i__246425_246432);
var qxk_246434 = tiltontec.qxia.base.qxme.call(null,k_246433);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_246433));

content_246428.add(qxk_246434);

var G__246435 = seq__246422_246429;
var G__246436 = chunk__246423_246430;
var G__246437 = count__246424_246431;
var G__246438 = (i__246425_246432 + (1));
seq__246422_246429 = G__246435;
chunk__246423_246430 = G__246436;
count__246424_246431 = G__246437;
i__246425_246432 = G__246438;
continue;
} else {
var temp__4425__auto___246439__$1 = cljs.core.seq.call(null,seq__246422_246429);
if(temp__4425__auto___246439__$1){
var seq__246422_246440__$1 = temp__4425__auto___246439__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__246422_246440__$1)){
var c__7021__auto___246441 = cljs.core.chunk_first.call(null,seq__246422_246440__$1);
var G__246442 = cljs.core.chunk_rest.call(null,seq__246422_246440__$1);
var G__246443 = c__7021__auto___246441;
var G__246444 = cljs.core.count.call(null,c__7021__auto___246441);
var G__246445 = (0);
seq__246422_246429 = G__246442;
chunk__246423_246430 = G__246443;
count__246424_246431 = G__246444;
i__246425_246432 = G__246445;
continue;
} else {
var k_246446 = cljs.core.first.call(null,seq__246422_246440__$1);
var qxk_246447 = tiltontec.qxia.base.qxme.call(null,k_246446);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_246446));

content_246428.add(qxk_246447);

var G__246448 = cljs.core.next.call(null,seq__246422_246440__$1);
var G__246449 = null;
var G__246450 = (0);
var G__246451 = (0);
seq__246422_246429 = G__246448;
chunk__246423_246430 = G__246449;
count__246424_246431 = G__246450;
i__246425_246432 = G__246451;
continue;
}
} else {
}
}
break;
}
} else {
}

return qx_page;
});})(qx_page))
);
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)], null),(function (_,page,newk,oldk,___$1){
if(cljs.core.not_EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),page], null),(function (opcode,defer_info){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
var content = qx_page.getContent();
content.removeAll();

var seq__246452 = cljs.core.seq.call(null,newk);
var chunk__246453 = null;
var count__246454 = (0);
var i__246455 = (0);
while(true){
if((i__246455 < count__246454)){
var k = cljs.core._nth.call(null,chunk__246453,i__246455);
var qxk_246456 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_246456);

var G__246457 = seq__246452;
var G__246458 = chunk__246453;
var G__246459 = count__246454;
var G__246460 = (i__246455 + (1));
seq__246452 = G__246457;
chunk__246453 = G__246458;
count__246454 = G__246459;
i__246455 = G__246460;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__246452);
if(temp__4425__auto__){
var seq__246452__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__246452__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__246452__$1);
var G__246461 = cljs.core.chunk_rest.call(null,seq__246452__$1);
var G__246462 = c__7021__auto__;
var G__246463 = cljs.core.count.call(null,c__7021__auto__);
var G__246464 = (0);
seq__246452 = G__246461;
chunk__246453 = G__246462;
count__246454 = G__246463;
i__246455 = G__246464;
continue;
} else {
var k = cljs.core.first.call(null,seq__246452__$1);
var qxk_246465 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_246465);

var G__246466 = cljs.core.next.call(null,seq__246452__$1);
var G__246467 = null;
var G__246468 = (0);
var G__246469 = (0);
seq__246452 = G__246466;
chunk__246453 = G__246467;
count__246454 = G__246468;
i__246455 = G__246469;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),new cljs.core.Keyword("tiltontec.qxia.types","m.Input","tiltontec.qxia.types/m.Input",-509810846)], null),(function (_,me,new_fn,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(new_fn)){
var form = tiltontec.qxia.base.qxme.call(null,tiltontec.model.core.qx_par.call(null,me));
if(cljs.core.truth_(form)){
} else {
throw (new Error("Assert failed: form"));
}

var vmgr = form.getValidationManager();
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"validmgr-add","validmgr-add",101529472),tiltontec.cell.base.ia_type.call(null,me));

return vmgr.add(tiltontec.qxia.base.qxme.call(null,me),new_fn);
} else {
return null;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_property_observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword("tiltontec.qxia.types","m.SelectBox","tiltontec.qxia.types/m.SelectBox",-663708114)], null),(function (_,me,new$,___$1,___$2){
if(cljs.core.truth_(new$)){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"3-post-assembly","3-post-assembly",-607469254),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(tiltontec.qxia.base.qxme.call(null,me).getModel())){
} else {
throw (new Error("Assert failed: (.getModel (qxme me))"));
}

return tiltontec.qxia.base.qxme.call(null,me).setSelection(new$);
}));
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)], null),(function (_,me,newk,oldk,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
return tiltontec.qxia.widget.kids_refresh.call(null,me,newk,oldk);
}));
}));
tiltontec.qxia.widget.kids_refresh = (function tiltontec$qxia$widget$kids_refresh(me,newk,oldk){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
} else {
var lostks_246486 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_246486)){
} else {
var seq__246478_246487 = cljs.core.seq.call(null,lostks_246486);
var chunk__246479_246488 = null;
var count__246480_246489 = (0);
var i__246481_246490 = (0);
while(true){
if((i__246481_246490 < count__246480_246489)){
var kid_246491 = cljs.core._nth.call(null,chunk__246479_246488,i__246481_246490);
var qxk_246492 = tiltontec.qxia.base.qxme.call(null,kid_246491);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_246491,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_246492);
}

qxk_246492.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_246491);

var G__246493 = seq__246478_246487;
var G__246494 = chunk__246479_246488;
var G__246495 = count__246480_246489;
var G__246496 = (i__246481_246490 + (1));
seq__246478_246487 = G__246493;
chunk__246479_246488 = G__246494;
count__246480_246489 = G__246495;
i__246481_246490 = G__246496;
continue;
} else {
var temp__4425__auto___246497 = cljs.core.seq.call(null,seq__246478_246487);
if(temp__4425__auto___246497){
var seq__246478_246498__$1 = temp__4425__auto___246497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__246478_246498__$1)){
var c__7021__auto___246499 = cljs.core.chunk_first.call(null,seq__246478_246498__$1);
var G__246500 = cljs.core.chunk_rest.call(null,seq__246478_246498__$1);
var G__246501 = c__7021__auto___246499;
var G__246502 = cljs.core.count.call(null,c__7021__auto___246499);
var G__246503 = (0);
seq__246478_246487 = G__246500;
chunk__246479_246488 = G__246501;
count__246480_246489 = G__246502;
i__246481_246490 = G__246503;
continue;
} else {
var kid_246504 = cljs.core.first.call(null,seq__246478_246498__$1);
var qxk_246505 = tiltontec.qxia.base.qxme.call(null,kid_246504);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_246504,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_246505);
}

qxk_246505.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_246504);

var G__246506 = cljs.core.next.call(null,seq__246478_246498__$1);
var G__246507 = null;
var G__246508 = (0);
var G__246509 = (0);
seq__246478_246487 = G__246506;
chunk__246479_246488 = G__246507;
count__246480_246489 = G__246508;
i__246481_246490 = G__246509;
continue;
}
} else {
}
}
break;
}
}
}

var new_ks = ((cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound))?newk:clojure.set.difference.call(null,cljs.core.set.call(null,newk),cljs.core.set.call(null,oldk)));
if(cljs.core.empty_QMARK_.call(null,new_ks)){
return null;
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"compo-newks!!!!!!!","compo-newks!!!!!!!",1607733632),tiltontec.cell.base.ia_type.call(null,me),cljs.core.count.call(null,new_ks));

var seq__246482 = cljs.core.seq.call(null,new_ks);
var chunk__246483 = null;
var count__246484 = (0);
var i__246485 = (0);
while(true){
if((i__246485 < count__246484)){
var k = cljs.core._nth.call(null,chunk__246483,i__246485);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__246510 = seq__246482;
var G__246511 = chunk__246483;
var G__246512 = count__246484;
var G__246513 = (i__246485 + (1));
seq__246482 = G__246510;
chunk__246483 = G__246511;
count__246484 = G__246512;
i__246485 = G__246513;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__246482);
if(temp__4425__auto__){
var seq__246482__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__246482__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__246482__$1);
var G__246514 = cljs.core.chunk_rest.call(null,seq__246482__$1);
var G__246515 = c__7021__auto__;
var G__246516 = cljs.core.count.call(null,c__7021__auto__);
var G__246517 = (0);
seq__246482 = G__246514;
chunk__246483 = G__246515;
count__246484 = G__246516;
i__246485 = G__246517;
continue;
} else {
var k = cljs.core.first.call(null,seq__246482__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__246518 = cljs.core.next.call(null,seq__246482__$1);
var G__246519 = null;
var G__246520 = (0);
var G__246521 = (0);
seq__246482 = G__246518;
chunk__246483 = G__246519;
count__246484 = G__246520;
i__246485 = G__246521;
continue;
}
} else {
return null;
}
}
break;
}
}
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slot-data","slot-data",1146367809),new cljs.core.Keyword("tiltontec.qxia.types","m.Picker","tiltontec.qxia.types/m.Picker",-1343372926)], null),(function (_,me,new$,old,c){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
var p = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__246522_246530 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__246523_246531 = null;
var count__246524_246532 = (0);
var i__246525_246533 = (0);
while(true){
if((i__246525_246533 < count__246524_246532)){
var n_246534 = cljs.core._nth.call(null,chunk__246523_246531,i__246525_246533);
p.removeSlot(n_246534);

var G__246535 = seq__246522_246530;
var G__246536 = chunk__246523_246531;
var G__246537 = count__246524_246532;
var G__246538 = (i__246525_246533 + (1));
seq__246522_246530 = G__246535;
chunk__246523_246531 = G__246536;
count__246524_246532 = G__246537;
i__246525_246533 = G__246538;
continue;
} else {
var temp__4425__auto___246539 = cljs.core.seq.call(null,seq__246522_246530);
if(temp__4425__auto___246539){
var seq__246522_246540__$1 = temp__4425__auto___246539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__246522_246540__$1)){
var c__7021__auto___246541 = cljs.core.chunk_first.call(null,seq__246522_246540__$1);
var G__246542 = cljs.core.chunk_rest.call(null,seq__246522_246540__$1);
var G__246543 = c__7021__auto___246541;
var G__246544 = cljs.core.count.call(null,c__7021__auto___246541);
var G__246545 = (0);
seq__246522_246530 = G__246542;
chunk__246523_246531 = G__246543;
count__246524_246532 = G__246544;
i__246525_246533 = G__246545;
continue;
} else {
var n_246546 = cljs.core.first.call(null,seq__246522_246540__$1);
p.removeSlot(n_246546);

var G__246547 = cljs.core.next.call(null,seq__246522_246540__$1);
var G__246548 = null;
var G__246549 = (0);
var G__246550 = (0);
seq__246522_246530 = G__246547;
chunk__246523_246531 = G__246548;
count__246524_246532 = G__246549;
i__246525_246533 = G__246550;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__246526 = cljs.core.seq.call(null,new$);
var chunk__246527 = null;
var count__246528 = (0);
var i__246529 = (0);
while(true){
if((i__246529 < count__246528)){
var sd = cljs.core._nth.call(null,chunk__246527,i__246529);
var da_246551 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_246551);

var G__246552 = seq__246526;
var G__246553 = chunk__246527;
var G__246554 = count__246528;
var G__246555 = (i__246529 + (1));
seq__246526 = G__246552;
chunk__246527 = G__246553;
count__246528 = G__246554;
i__246529 = G__246555;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__246526);
if(temp__4425__auto__){
var seq__246526__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__246526__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__246526__$1);
var G__246556 = cljs.core.chunk_rest.call(null,seq__246526__$1);
var G__246557 = c__7021__auto__;
var G__246558 = cljs.core.count.call(null,c__7021__auto__);
var G__246559 = (0);
seq__246526 = G__246556;
chunk__246527 = G__246557;
count__246528 = G__246558;
i__246529 = G__246559;
continue;
} else {
var sd = cljs.core.first.call(null,seq__246526__$1);
var da_246560 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_246560);

var G__246561 = cljs.core.next.call(null,seq__246526__$1);
var G__246562 = null;
var G__246563 = (0);
var G__246564 = (0);
seq__246526 = G__246561;
chunk__246527 = G__246562;
count__246528 = G__246563;
i__246529 = G__246564;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),new cljs.core.Keyword("tiltontec.qxia.types","m.Input","tiltontec.qxia.types/m.Input",-509810846)], null),(function (_,me,new_fn,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(new_fn)){
var form = tiltontec.qxia.base.qxme.call(null,tiltontec.model.core.qx_par.call(null,me));
if(cljs.core.truth_(form)){
} else {
throw (new Error("Assert failed: form"));
}

var vmgr = form.getValidationManager();
return vmgr.add(tiltontec.qxia.base.qxme.call(null,me),new_fn);
} else {
return null;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("tiltontec.qxia.types","m.MValue","tiltontec.qxia.types/m.MValue",-994870885)], null),(function (_,me,new$,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
return tiltontec.qxia.base.qxme.call(null,me).setValue(new$);
}));
}));
