// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.widget');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.base');
goog.require('tiltontec.qxia.base');
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","Mobile","tiltontec.qxia.base/Mobile",1622995536),(function (me){
var app = new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var shower = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"shower","shower",-1731894586));
var pager = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"pager","pager",1850229940));
var routing = app.getRouting();
var seq__22325 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__22326 = null;
var count__22327 = (0);
var i__22328 = (0);
while(true){
if((i__22328 < count__22327)){
var page = cljs.core._nth.call(null,chunk__22326,i__22328);
var qx_page_22329 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_22329);

var temp__4425__auto___22330 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___22330)){
var ept_22331 = temp__4425__auto___22330;
routing.onGet(ept_22331,shower,qx_page_22329);
} else {
}

var G__22332 = seq__22325;
var G__22333 = chunk__22326;
var G__22334 = count__22327;
var G__22335 = (i__22328 + (1));
seq__22325 = G__22332;
chunk__22326 = G__22333;
count__22327 = G__22334;
i__22328 = G__22335;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22325);
if(temp__4425__auto__){
var seq__22325__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22325__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__22325__$1);
var G__22336 = cljs.core.chunk_rest.call(null,seq__22325__$1);
var G__22337 = c__5338__auto__;
var G__22338 = cljs.core.count.call(null,c__5338__auto__);
var G__22339 = (0);
seq__22325 = G__22336;
chunk__22326 = G__22337;
count__22327 = G__22338;
i__22328 = G__22339;
continue;
} else {
var page = cljs.core.first.call(null,seq__22325__$1);
var qx_page_22340 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_22340);

var temp__4425__auto___22341__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___22341__$1)){
var ept_22342 = temp__4425__auto___22341__$1;
routing.onGet(ept_22342,shower,qx_page_22340);
} else {
}

var G__22343 = cljs.core.next.call(null,seq__22325__$1);
var G__22344 = null;
var G__22345 = (0);
var G__22346 = (0);
seq__22325 = G__22343;
chunk__22326 = G__22344;
count__22327 = G__22345;
i__22328 = G__22346;
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
var temp__4425__auto___22351 = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___22351)){
var lyo_22352 = temp__4425__auto___22351;
cljs.core.println.call(null,new cljs.core.Keyword(null,"init-setting-layo!!!!!","init-setting-layo!!!!!",-1831845380),lyo_22352,tiltontec.cell.base.ia_type.call(null,me));

tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo_22352);
} else {
}

var seq__22347 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__22348 = null;
var count__22349 = (0);
var i__22350 = (0);
while(true){
if((i__22350 < count__22349)){
var kid = cljs.core._nth.call(null,chunk__22348,i__22350);
tiltontec.qxia.base.qx_add_kid.call(null,me,kid);

var G__22353 = seq__22347;
var G__22354 = chunk__22348;
var G__22355 = count__22349;
var G__22356 = (i__22350 + (1));
seq__22347 = G__22353;
chunk__22348 = G__22354;
count__22349 = G__22355;
i__22350 = G__22356;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22347);
if(temp__4425__auto__){
var seq__22347__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22347__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__22347__$1);
var G__22357 = cljs.core.chunk_rest.call(null,seq__22347__$1);
var G__22358 = c__5338__auto__;
var G__22359 = cljs.core.count.call(null,c__5338__auto__);
var G__22360 = (0);
seq__22347 = G__22357;
chunk__22348 = G__22358;
count__22349 = G__22359;
i__22350 = G__22360;
continue;
} else {
var kid = cljs.core.first.call(null,seq__22347__$1);
tiltontec.qxia.base.qx_add_kid.call(null,me,kid);

var G__22361 = cljs.core.next.call(null,seq__22347__$1);
var G__22362 = null;
var G__22363 = (0);
var G__22364 = (0);
seq__22347 = G__22361;
chunk__22348 = G__22362;
count__22349 = G__22363;
i__22350 = G__22364;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),(function (me){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__22365 = cljs.core.seq.call(null,kids);
var chunk__22366 = null;
var count__22367 = (0);
var i__22368 = (0);
while(true){
if((i__22368 < count__22367)){
var k = cljs.core._nth.call(null,chunk__22366,i__22368);
var qxk_22369 = tiltontec.qxia.base.qxme.call(null,k);
var label_22370 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_22369,label_22370);

var G__22371 = seq__22365;
var G__22372 = chunk__22366;
var G__22373 = count__22367;
var G__22374 = (i__22368 + (1));
seq__22365 = G__22371;
chunk__22366 = G__22372;
count__22367 = G__22373;
i__22368 = G__22374;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__22365);
if(temp__4425__auto____$1){
var seq__22365__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22365__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__22365__$1);
var G__22375 = cljs.core.chunk_rest.call(null,seq__22365__$1);
var G__22376 = c__5338__auto__;
var G__22377 = cljs.core.count.call(null,c__5338__auto__);
var G__22378 = (0);
seq__22365 = G__22375;
chunk__22366 = G__22376;
count__22367 = G__22377;
i__22368 = G__22378;
continue;
} else {
var k = cljs.core.first.call(null,seq__22365__$1);
var qxk_22379 = tiltontec.qxia.base.qxme.call(null,k);
var label_22380 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_22379,label_22380);

var G__22381 = cljs.core.next.call(null,seq__22365__$1);
var G__22382 = null;
var G__22383 = (0);
var G__22384 = (0);
seq__22365 = G__22381;
chunk__22366 = G__22382;
count__22367 = G__22383;
i__22368 = G__22384;
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
var seq__22385 = cljs.core.seq.call(null,kids);
var chunk__22386 = null;
var count__22387 = (0);
var i__22388 = (0);
while(true){
if((i__22388 < count__22387)){
var k = cljs.core._nth.call(null,chunk__22386,i__22388);
var qxk_22389 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_22389);

var G__22390 = seq__22385;
var G__22391 = chunk__22386;
var G__22392 = count__22387;
var G__22393 = (i__22388 + (1));
seq__22385 = G__22390;
chunk__22386 = G__22391;
count__22387 = G__22392;
i__22388 = G__22393;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__22385);
if(temp__4425__auto____$1){
var seq__22385__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22385__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__22385__$1);
var G__22394 = cljs.core.chunk_rest.call(null,seq__22385__$1);
var G__22395 = c__5338__auto__;
var G__22396 = cljs.core.count.call(null,c__5338__auto__);
var G__22397 = (0);
seq__22385 = G__22394;
chunk__22386 = G__22395;
count__22387 = G__22396;
i__22388 = G__22397;
continue;
} else {
var k = cljs.core.first.call(null,seq__22385__$1);
var qxk_22398 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_22398);

var G__22399 = cljs.core.next.call(null,seq__22385__$1);
var G__22400 = null;
var G__22401 = (0);
var G__22402 = (0);
seq__22385 = G__22399;
chunk__22386 = G__22400;
count__22387 = G__22401;
i__22388 = G__22402;
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
var lostks_22411 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_22411)){
} else {
var seq__22403_22412 = cljs.core.seq.call(null,lostks_22411);
var chunk__22404_22413 = null;
var count__22405_22414 = (0);
var i__22406_22415 = (0);
while(true){
if((i__22406_22415 < count__22405_22414)){
var kid_22416 = cljs.core._nth.call(null,chunk__22404_22413,i__22406_22415);
var qxk_22417 = tiltontec.qxia.base.qxme.call(null,kid_22416);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_22416,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_22417);
}

qxk_22417.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_22416);

var G__22418 = seq__22403_22412;
var G__22419 = chunk__22404_22413;
var G__22420 = count__22405_22414;
var G__22421 = (i__22406_22415 + (1));
seq__22403_22412 = G__22418;
chunk__22404_22413 = G__22419;
count__22405_22414 = G__22420;
i__22406_22415 = G__22421;
continue;
} else {
var temp__4425__auto___22422 = cljs.core.seq.call(null,seq__22403_22412);
if(temp__4425__auto___22422){
var seq__22403_22423__$1 = temp__4425__auto___22422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22403_22423__$1)){
var c__5338__auto___22424 = cljs.core.chunk_first.call(null,seq__22403_22423__$1);
var G__22425 = cljs.core.chunk_rest.call(null,seq__22403_22423__$1);
var G__22426 = c__5338__auto___22424;
var G__22427 = cljs.core.count.call(null,c__5338__auto___22424);
var G__22428 = (0);
seq__22403_22412 = G__22425;
chunk__22404_22413 = G__22426;
count__22405_22414 = G__22427;
i__22406_22415 = G__22428;
continue;
} else {
var kid_22429 = cljs.core.first.call(null,seq__22403_22423__$1);
var qxk_22430 = tiltontec.qxia.base.qxme.call(null,kid_22429);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_22429,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_22430);
}

qxk_22430.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_22429);

var G__22431 = cljs.core.next.call(null,seq__22403_22423__$1);
var G__22432 = null;
var G__22433 = (0);
var G__22434 = (0);
seq__22403_22412 = G__22431;
chunk__22404_22413 = G__22432;
count__22405_22414 = G__22433;
i__22406_22415 = G__22434;
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
var seq__22407 = cljs.core.seq.call(null,new_ks);
var chunk__22408 = null;
var count__22409 = (0);
var i__22410 = (0);
while(true){
if((i__22410 < count__22409)){
var k = cljs.core._nth.call(null,chunk__22408,i__22410);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__22435 = seq__22407;
var G__22436 = chunk__22408;
var G__22437 = count__22409;
var G__22438 = (i__22410 + (1));
seq__22407 = G__22435;
chunk__22408 = G__22436;
count__22409 = G__22437;
i__22410 = G__22438;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22407);
if(temp__4425__auto__){
var seq__22407__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22407__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__22407__$1);
var G__22439 = cljs.core.chunk_rest.call(null,seq__22407__$1);
var G__22440 = c__5338__auto__;
var G__22441 = cljs.core.count.call(null,c__5338__auto__);
var G__22442 = (0);
seq__22407 = G__22439;
chunk__22408 = G__22440;
count__22409 = G__22441;
i__22410 = G__22442;
continue;
} else {
var k = cljs.core.first.call(null,seq__22407__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__22443 = cljs.core.next.call(null,seq__22407__$1);
var G__22444 = null;
var G__22445 = (0);
var G__22446 = (0);
seq__22407 = G__22443;
chunk__22408 = G__22444;
count__22409 = G__22445;
i__22410 = G__22446;
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
