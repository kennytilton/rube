// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.widget');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.base');
goog.require('tiltontec.qxia.base');
if(typeof tiltontec.qxia.widget.qx_initialize_kids !== 'undefined'){
} else {
tiltontec.qxia.widget.qx_initialize_kids = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return tiltontec.cell.base.ia_types;},new cljs.core.Symbol("tiltontec.cell.base","ia-types","tiltontec.cell.base/ia-types",436375603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.cell.base","tiltontec.cell.base",-1575671422,null),new cljs.core.Symbol(null,"ia-types","ia-types",322849110,null),"/home/kenneth/rube/src/tiltontec/cell/base.cljc",14,1,104,104,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.cell.base.ia_types)?tiltontec.cell.base.ia_types.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.widget","qx-initialize-kids"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.widget.qx_initialize_kids,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
cljs.core.println.call(null,new cljs.core.Keyword(null,"fall-thru-qxfinkids!!!!!!!","fall-thru-qxfinkids!!!!!!!",-666283977),tiltontec.cell.base.ia_type.call(null,me));

var qx_me = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
var seq__14336 = cljs.core.seq.call(null,kids);
var chunk__14337 = null;
var count__14338 = (0);
var i__14339 = (0);
while(true){
if((i__14339 < count__14338)){
var kid = cljs.core._nth.call(null,chunk__14337,i__14339);
var rmk_14340 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_14340);

var G__14341 = seq__14336;
var G__14342 = chunk__14337;
var G__14343 = count__14338;
var G__14344 = (i__14339 + (1));
seq__14336 = G__14341;
chunk__14337 = G__14342;
count__14338 = G__14343;
i__14339 = G__14344;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__14336);
if(temp__4425__auto____$1){
var seq__14336__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14336__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__14336__$1);
var G__14345 = cljs.core.chunk_rest.call(null,seq__14336__$1);
var G__14346 = c__5338__auto__;
var G__14347 = cljs.core.count.call(null,c__5338__auto__);
var G__14348 = (0);
seq__14336 = G__14345;
chunk__14337 = G__14346;
count__14338 = G__14347;
i__14339 = G__14348;
continue;
} else {
var kid = cljs.core.first.call(null,seq__14336__$1);
var rmk_14349 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_14349);

var G__14350 = cljs.core.next.call(null,seq__14336__$1);
var G__14351 = null;
var G__14352 = (0);
var G__14353 = (0);
seq__14336 = G__14350;
chunk__14337 = G__14351;
count__14338 = G__14352;
i__14339 = G__14353;
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
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","Mobile","tiltontec.qxia.base/Mobile",1622995536),(function (me){
var app = new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var shower = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"shower","shower",-1731894586));
var pager = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"pager","pager",1850229940));
var routing = app.getRouting();
var seq__14354 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__14355 = null;
var count__14356 = (0);
var i__14357 = (0);
while(true){
if((i__14357 < count__14356)){
var page = cljs.core._nth.call(null,chunk__14355,i__14357);
var qx_page_14358 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_14358]);

var temp__4425__auto___14359 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___14359)){
var ept_14360 = temp__4425__auto___14359;
routing.onGet(ept_14360,shower,qx_page_14358);
} else {
}

var G__14361 = seq__14354;
var G__14362 = chunk__14355;
var G__14363 = count__14356;
var G__14364 = (i__14357 + (1));
seq__14354 = G__14361;
chunk__14355 = G__14362;
count__14356 = G__14363;
i__14357 = G__14364;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14354);
if(temp__4425__auto__){
var seq__14354__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14354__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__14354__$1);
var G__14365 = cljs.core.chunk_rest.call(null,seq__14354__$1);
var G__14366 = c__5338__auto__;
var G__14367 = cljs.core.count.call(null,c__5338__auto__);
var G__14368 = (0);
seq__14354 = G__14365;
chunk__14355 = G__14366;
count__14356 = G__14367;
i__14357 = G__14368;
continue;
} else {
var page = cljs.core.first.call(null,seq__14354__$1);
var qx_page_14369 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_14369]);

var temp__4425__auto___14370__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___14370__$1)){
var ept_14371 = temp__4425__auto___14370__$1;
routing.onGet(ept_14371,shower,qx_page_14369);
} else {
}

var G__14372 = cljs.core.next.call(null,seq__14354__$1);
var G__14373 = null;
var G__14374 = (0);
var G__14375 = (0);
seq__14354 = G__14372;
chunk__14355 = G__14373;
count__14356 = G__14374;
i__14357 = G__14375;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),(function (me){
var temp__4425__auto___14376 = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___14376)){
var lyo_14377 = temp__4425__auto___14376;
cljs.core.println.call(null,new cljs.core.Keyword(null,"init-setting-layo!!!!!","init-setting-layo!!!!!",-1831845380),lyo_14377,tiltontec.cell.base.ia_type.call(null,me));

tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo_14377);
} else {
}

return tiltontec.qxia.widget.qx_initialize_kids.call(null,me);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),(function (me){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__14378 = cljs.core.seq.call(null,kids);
var chunk__14379 = null;
var count__14380 = (0);
var i__14381 = (0);
while(true){
if((i__14381 < count__14380)){
var k = cljs.core._nth.call(null,chunk__14379,i__14381);
var qxk_14382 = tiltontec.qxia.base.qxme.call(null,k);
var label_14383 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_14382,label_14383);

var G__14384 = seq__14378;
var G__14385 = chunk__14379;
var G__14386 = count__14380;
var G__14387 = (i__14381 + (1));
seq__14378 = G__14384;
chunk__14379 = G__14385;
count__14380 = G__14386;
i__14381 = G__14387;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__14378);
if(temp__4425__auto____$1){
var seq__14378__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14378__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__14378__$1);
var G__14388 = cljs.core.chunk_rest.call(null,seq__14378__$1);
var G__14389 = c__5338__auto__;
var G__14390 = cljs.core.count.call(null,c__5338__auto__);
var G__14391 = (0);
seq__14378 = G__14388;
chunk__14379 = G__14389;
count__14380 = G__14390;
i__14381 = G__14391;
continue;
} else {
var k = cljs.core.first.call(null,seq__14378__$1);
var qxk_14392 = tiltontec.qxia.base.qxme.call(null,k);
var label_14393 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_14392,label_14393);

var G__14394 = cljs.core.next.call(null,seq__14378__$1);
var G__14395 = null;
var G__14396 = (0);
var G__14397 = (0);
seq__14378 = G__14394;
chunk__14379 = G__14395;
count__14380 = G__14396;
i__14381 = G__14397;
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
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.Single","tiltontec.qxia.base/m.Single",1330847058),(function (me){
var kids = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,kids))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kids","kids",-1497764998,null)))))].join('')));
}

var form = cljs.core.first.call(null,kids);
var qx_form = tiltontec.qxia.base.qxme.call(null,form);
if(cljs.core.truth_(qx_form)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"qx-form","qx-form",231243115,null)))].join('')));
}

cljs.core.println.call(null,new cljs.core.Keyword(null,"swapsingle!!!!!!!!!!!","swapsingle!!!!!!!!!!!",-1552067565),qx_form);

return cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),(new qx.ui.mobile.form.renderer.Single(qx_form)));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),(function (page){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
return qx_page.addListener("initialize",((function (kids,temp__4425__auto__,qx_page){
return (function (){
var content = qx_page.getContent();
var seq__14398 = cljs.core.seq.call(null,kids);
var chunk__14399 = null;
var count__14400 = (0);
var i__14401 = (0);
while(true){
if((i__14401 < count__14400)){
var k = cljs.core._nth.call(null,chunk__14399,i__14401);
var qxk_14402 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_14402);

var G__14403 = seq__14398;
var G__14404 = chunk__14399;
var G__14405 = count__14400;
var G__14406 = (i__14401 + (1));
seq__14398 = G__14403;
chunk__14399 = G__14404;
count__14400 = G__14405;
i__14401 = G__14406;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__14398);
if(temp__4425__auto____$1){
var seq__14398__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14398__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__14398__$1);
var G__14407 = cljs.core.chunk_rest.call(null,seq__14398__$1);
var G__14408 = c__5338__auto__;
var G__14409 = cljs.core.count.call(null,c__5338__auto__);
var G__14410 = (0);
seq__14398 = G__14407;
chunk__14399 = G__14408;
count__14400 = G__14409;
i__14401 = G__14410;
continue;
} else {
var k = cljs.core.first.call(null,seq__14398__$1);
var qxk_14411 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_14411);

var G__14412 = cljs.core.next.call(null,seq__14398__$1);
var G__14413 = null;
var G__14414 = (0);
var G__14415 = (0);
seq__14398 = G__14412;
chunk__14399 = G__14413;
count__14400 = G__14414;
i__14401 = G__14415;
continue;
}
} else {
return null;
}
}
break;
}
});})(kids,temp__4425__auto__,qx_page))
,qx_page);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),(function (me){
return tiltontec.qxia.base.qxme.call(null,me).setValue(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839)], null),(function (_,me,newk,oldk,___$1){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks_14424 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_14424)){
} else {
var seq__14416_14425 = cljs.core.seq.call(null,lostks_14424);
var chunk__14417_14426 = null;
var count__14418_14427 = (0);
var i__14419_14428 = (0);
while(true){
if((i__14419_14428 < count__14418_14427)){
var kid_14429 = cljs.core._nth.call(null,chunk__14417_14426,i__14419_14428);
var qxk_14430 = tiltontec.qxia.base.qxme.call(null,kid_14429);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_14429,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_14430);
}

qxk_14430.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_14429);

var G__14431 = seq__14416_14425;
var G__14432 = chunk__14417_14426;
var G__14433 = count__14418_14427;
var G__14434 = (i__14419_14428 + (1));
seq__14416_14425 = G__14431;
chunk__14417_14426 = G__14432;
count__14418_14427 = G__14433;
i__14419_14428 = G__14434;
continue;
} else {
var temp__4425__auto___14435 = cljs.core.seq.call(null,seq__14416_14425);
if(temp__4425__auto___14435){
var seq__14416_14436__$1 = temp__4425__auto___14435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14416_14436__$1)){
var c__5338__auto___14437 = cljs.core.chunk_first.call(null,seq__14416_14436__$1);
var G__14438 = cljs.core.chunk_rest.call(null,seq__14416_14436__$1);
var G__14439 = c__5338__auto___14437;
var G__14440 = cljs.core.count.call(null,c__5338__auto___14437);
var G__14441 = (0);
seq__14416_14425 = G__14438;
chunk__14417_14426 = G__14439;
count__14418_14427 = G__14440;
i__14419_14428 = G__14441;
continue;
} else {
var kid_14442 = cljs.core.first.call(null,seq__14416_14436__$1);
var qxk_14443 = tiltontec.qxia.base.qxme.call(null,kid_14442);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_14442,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_14443);
}

qxk_14443.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_14442);

var G__14444 = cljs.core.next.call(null,seq__14416_14436__$1);
var G__14445 = null;
var G__14446 = (0);
var G__14447 = (0);
seq__14416_14425 = G__14444;
chunk__14417_14426 = G__14445;
count__14418_14427 = G__14446;
i__14419_14428 = G__14447;
continue;
}
} else {
}
}
break;
}
}

var new_ks = clojure.set.difference.call(null,cljs.core.set.call(null,newk),cljs.core.set.call(null,oldk));
if(cljs.core.empty_QMARK_.call(null,new_ks)){
return null;
} else {
var seq__14420 = cljs.core.seq.call(null,new_ks);
var chunk__14421 = null;
var count__14422 = (0);
var i__14423 = (0);
while(true){
if((i__14423 < count__14422)){
var k = cljs.core._nth.call(null,chunk__14421,i__14423);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_14448 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_14448);
}

var G__14449 = seq__14420;
var G__14450 = chunk__14421;
var G__14451 = count__14422;
var G__14452 = (i__14423 + (1));
seq__14420 = G__14449;
chunk__14421 = G__14450;
count__14422 = G__14451;
i__14423 = G__14452;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14420);
if(temp__4425__auto__){
var seq__14420__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14420__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__14420__$1);
var G__14453 = cljs.core.chunk_rest.call(null,seq__14420__$1);
var G__14454 = c__5338__auto__;
var G__14455 = cljs.core.count.call(null,c__5338__auto__);
var G__14456 = (0);
seq__14420 = G__14453;
chunk__14421 = G__14454;
count__14422 = G__14455;
i__14423 = G__14456;
continue;
} else {
var k = cljs.core.first.call(null,seq__14420__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_14457 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_14457);
}

var G__14458 = cljs.core.next.call(null,seq__14420__$1);
var G__14459 = null;
var G__14460 = (0);
var G__14461 = (0);
seq__14420 = G__14458;
chunk__14421 = G__14459;
count__14422 = G__14460;
i__14423 = G__14461;
continue;
}
} else {
return null;
}
}
break;
}
}
}
}));
