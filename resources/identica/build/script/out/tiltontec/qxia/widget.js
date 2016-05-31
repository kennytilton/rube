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
var hierarchy__5452__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return tiltontec.cell.base.ia_types;},new cljs.core.Symbol("tiltontec.cell.base","ia-types","tiltontec.cell.base/ia-types",436375603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.cell.base","tiltontec.cell.base",-1575671422,null),new cljs.core.Symbol(null,"ia-types","ia-types",322849110,null),"src/tiltontec/cell/base.cljc",14,1,104,104,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.cell.base.ia_types)?tiltontec.cell.base.ia_types.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.widget","qx-initialize-kids"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.widget.qx_initialize_kids,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
cljs.core.println.call(null,new cljs.core.Keyword(null,"fall-thru-qxfinkids!!!!!!!","fall-thru-qxfinkids!!!!!!!",-666283977),tiltontec.cell.base.ia_type.call(null,me));

var qx_me = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
var seq__39394 = cljs.core.seq.call(null,kids);
var chunk__39395 = null;
var count__39396 = (0);
var i__39397 = (0);
while(true){
if((i__39397 < count__39396)){
var kid = cljs.core._nth.call(null,chunk__39395,i__39397);
var rmk_39398 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_39398);

var G__39399 = seq__39394;
var G__39400 = chunk__39395;
var G__39401 = count__39396;
var G__39402 = (i__39397 + (1));
seq__39394 = G__39399;
chunk__39395 = G__39400;
count__39396 = G__39401;
i__39397 = G__39402;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__39394);
if(temp__4425__auto____$1){
var seq__39394__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39394__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__39394__$1);
var G__39403 = cljs.core.chunk_rest.call(null,seq__39394__$1);
var G__39404 = c__5338__auto__;
var G__39405 = cljs.core.count.call(null,c__5338__auto__);
var G__39406 = (0);
seq__39394 = G__39403;
chunk__39395 = G__39404;
count__39396 = G__39405;
i__39397 = G__39406;
continue;
} else {
var kid = cljs.core.first.call(null,seq__39394__$1);
var rmk_39407 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_39407);

var G__39408 = cljs.core.next.call(null,seq__39394__$1);
var G__39409 = null;
var G__39410 = (0);
var G__39411 = (0);
seq__39394 = G__39408;
chunk__39395 = G__39409;
count__39396 = G__39410;
i__39397 = G__39411;
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
var seq__39412 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__39413 = null;
var count__39414 = (0);
var i__39415 = (0);
while(true){
if((i__39415 < count__39414)){
var page = cljs.core._nth.call(null,chunk__39413,i__39415);
var qx_page_39416 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_39416]);

var temp__4425__auto___39417 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___39417)){
var ept_39418 = temp__4425__auto___39417;
routing.onGet(ept_39418,shower,qx_page_39416);
} else {
}

var G__39419 = seq__39412;
var G__39420 = chunk__39413;
var G__39421 = count__39414;
var G__39422 = (i__39415 + (1));
seq__39412 = G__39419;
chunk__39413 = G__39420;
count__39414 = G__39421;
i__39415 = G__39422;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39412);
if(temp__4425__auto__){
var seq__39412__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39412__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__39412__$1);
var G__39423 = cljs.core.chunk_rest.call(null,seq__39412__$1);
var G__39424 = c__5338__auto__;
var G__39425 = cljs.core.count.call(null,c__5338__auto__);
var G__39426 = (0);
seq__39412 = G__39423;
chunk__39413 = G__39424;
count__39414 = G__39425;
i__39415 = G__39426;
continue;
} else {
var page = cljs.core.first.call(null,seq__39412__$1);
var qx_page_39427 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_39427]);

var temp__4425__auto___39428__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___39428__$1)){
var ept_39429 = temp__4425__auto___39428__$1;
routing.onGet(ept_39429,shower,qx_page_39427);
} else {
}

var G__39430 = cljs.core.next.call(null,seq__39412__$1);
var G__39431 = null;
var G__39432 = (0);
var G__39433 = (0);
seq__39412 = G__39430;
chunk__39413 = G__39431;
count__39414 = G__39432;
i__39415 = G__39433;
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
var temp__4425__auto___39434 = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___39434)){
var lyo_39435 = temp__4425__auto___39434;
cljs.core.println.call(null,new cljs.core.Keyword(null,"init-setting-layo!!!!!","init-setting-layo!!!!!",-1831845380),lyo_39435,tiltontec.cell.base.ia_type.call(null,me));

tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo_39435);
} else {
}

return tiltontec.qxia.widget.qx_initialize_kids.call(null,me);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),(function (me){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__39436 = cljs.core.seq.call(null,kids);
var chunk__39437 = null;
var count__39438 = (0);
var i__39439 = (0);
while(true){
if((i__39439 < count__39438)){
var k = cljs.core._nth.call(null,chunk__39437,i__39439);
var qxk_39440 = tiltontec.qxia.base.qxme.call(null,k);
var label_39441 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_39440,label_39441);

var G__39442 = seq__39436;
var G__39443 = chunk__39437;
var G__39444 = count__39438;
var G__39445 = (i__39439 + (1));
seq__39436 = G__39442;
chunk__39437 = G__39443;
count__39438 = G__39444;
i__39439 = G__39445;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__39436);
if(temp__4425__auto____$1){
var seq__39436__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39436__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__39436__$1);
var G__39446 = cljs.core.chunk_rest.call(null,seq__39436__$1);
var G__39447 = c__5338__auto__;
var G__39448 = cljs.core.count.call(null,c__5338__auto__);
var G__39449 = (0);
seq__39436 = G__39446;
chunk__39437 = G__39447;
count__39438 = G__39448;
i__39439 = G__39449;
continue;
} else {
var k = cljs.core.first.call(null,seq__39436__$1);
var qxk_39450 = tiltontec.qxia.base.qxme.call(null,k);
var label_39451 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_39450,label_39451);

var G__39452 = cljs.core.next.call(null,seq__39436__$1);
var G__39453 = null;
var G__39454 = (0);
var G__39455 = (0);
seq__39436 = G__39452;
chunk__39437 = G__39453;
count__39438 = G__39454;
i__39439 = G__39455;
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
var seq__39456 = cljs.core.seq.call(null,kids);
var chunk__39457 = null;
var count__39458 = (0);
var i__39459 = (0);
while(true){
if((i__39459 < count__39458)){
var k = cljs.core._nth.call(null,chunk__39457,i__39459);
var qxk_39460 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_39460);

var G__39461 = seq__39456;
var G__39462 = chunk__39457;
var G__39463 = count__39458;
var G__39464 = (i__39459 + (1));
seq__39456 = G__39461;
chunk__39457 = G__39462;
count__39458 = G__39463;
i__39459 = G__39464;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__39456);
if(temp__4425__auto____$1){
var seq__39456__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39456__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__39456__$1);
var G__39465 = cljs.core.chunk_rest.call(null,seq__39456__$1);
var G__39466 = c__5338__auto__;
var G__39467 = cljs.core.count.call(null,c__5338__auto__);
var G__39468 = (0);
seq__39456 = G__39465;
chunk__39457 = G__39466;
count__39458 = G__39467;
i__39459 = G__39468;
continue;
} else {
var k = cljs.core.first.call(null,seq__39456__$1);
var qxk_39469 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_39469);

var G__39470 = cljs.core.next.call(null,seq__39456__$1);
var G__39471 = null;
var G__39472 = (0);
var G__39473 = (0);
seq__39456 = G__39470;
chunk__39457 = G__39471;
count__39458 = G__39472;
i__39459 = G__39473;
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
var lostks_39482 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_39482)){
} else {
var seq__39474_39483 = cljs.core.seq.call(null,lostks_39482);
var chunk__39475_39484 = null;
var count__39476_39485 = (0);
var i__39477_39486 = (0);
while(true){
if((i__39477_39486 < count__39476_39485)){
var kid_39487 = cljs.core._nth.call(null,chunk__39475_39484,i__39477_39486);
var qxk_39488 = tiltontec.qxia.base.qxme.call(null,kid_39487);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_39487,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_39488);
}

qxk_39488.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_39487);

var G__39489 = seq__39474_39483;
var G__39490 = chunk__39475_39484;
var G__39491 = count__39476_39485;
var G__39492 = (i__39477_39486 + (1));
seq__39474_39483 = G__39489;
chunk__39475_39484 = G__39490;
count__39476_39485 = G__39491;
i__39477_39486 = G__39492;
continue;
} else {
var temp__4425__auto___39493 = cljs.core.seq.call(null,seq__39474_39483);
if(temp__4425__auto___39493){
var seq__39474_39494__$1 = temp__4425__auto___39493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39474_39494__$1)){
var c__5338__auto___39495 = cljs.core.chunk_first.call(null,seq__39474_39494__$1);
var G__39496 = cljs.core.chunk_rest.call(null,seq__39474_39494__$1);
var G__39497 = c__5338__auto___39495;
var G__39498 = cljs.core.count.call(null,c__5338__auto___39495);
var G__39499 = (0);
seq__39474_39483 = G__39496;
chunk__39475_39484 = G__39497;
count__39476_39485 = G__39498;
i__39477_39486 = G__39499;
continue;
} else {
var kid_39500 = cljs.core.first.call(null,seq__39474_39494__$1);
var qxk_39501 = tiltontec.qxia.base.qxme.call(null,kid_39500);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_39500,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_39501);
}

qxk_39501.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_39500);

var G__39502 = cljs.core.next.call(null,seq__39474_39494__$1);
var G__39503 = null;
var G__39504 = (0);
var G__39505 = (0);
seq__39474_39483 = G__39502;
chunk__39475_39484 = G__39503;
count__39476_39485 = G__39504;
i__39477_39486 = G__39505;
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
var seq__39478 = cljs.core.seq.call(null,new_ks);
var chunk__39479 = null;
var count__39480 = (0);
var i__39481 = (0);
while(true){
if((i__39481 < count__39480)){
var k = cljs.core._nth.call(null,chunk__39479,i__39481);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_39506 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_39506);
}

var G__39507 = seq__39478;
var G__39508 = chunk__39479;
var G__39509 = count__39480;
var G__39510 = (i__39481 + (1));
seq__39478 = G__39507;
chunk__39479 = G__39508;
count__39480 = G__39509;
i__39481 = G__39510;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39478);
if(temp__4425__auto__){
var seq__39478__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39478__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__39478__$1);
var G__39511 = cljs.core.chunk_rest.call(null,seq__39478__$1);
var G__39512 = c__5338__auto__;
var G__39513 = cljs.core.count.call(null,c__5338__auto__);
var G__39514 = (0);
seq__39478 = G__39511;
chunk__39479 = G__39512;
count__39480 = G__39513;
i__39481 = G__39514;
continue;
} else {
var k = cljs.core.first.call(null,seq__39478__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_39515 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_39515);
}

var G__39516 = cljs.core.next.call(null,seq__39478__$1);
var G__39517 = null;
var G__39518 = (0);
var G__39519 = (0);
seq__39478 = G__39516;
chunk__39479 = G__39517;
count__39480 = G__39518;
i__39481 = G__39519;
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
