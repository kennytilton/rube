// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.widget');
goog.require('cljs.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.base');
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
var seq__83238_83246 = cljs.core.seq.call(null,old);
var chunk__83239_83247 = null;
var count__83240_83248 = (0);
var i__83241_83249 = (0);
while(true){
if((i__83241_83249 < count__83240_83248)){
var page_83250 = cljs.core._nth.call(null,chunk__83239_83247,i__83241_83249);
var temp__4425__auto___83251 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_83250));
if(cljs.core.truth_(temp__4425__auto___83251)){
var ept_83252 = temp__4425__auto___83251;
routing.remove(ept_83252);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_83250));

var G__83253 = seq__83238_83246;
var G__83254 = chunk__83239_83247;
var G__83255 = count__83240_83248;
var G__83256 = (i__83241_83249 + (1));
seq__83238_83246 = G__83253;
chunk__83239_83247 = G__83254;
count__83240_83248 = G__83255;
i__83241_83249 = G__83256;
continue;
} else {
var temp__4425__auto___83257 = cljs.core.seq.call(null,seq__83238_83246);
if(temp__4425__auto___83257){
var seq__83238_83258__$1 = temp__4425__auto___83257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83238_83258__$1)){
var c__5338__auto___83259 = cljs.core.chunk_first.call(null,seq__83238_83258__$1);
var G__83260 = cljs.core.chunk_rest.call(null,seq__83238_83258__$1);
var G__83261 = c__5338__auto___83259;
var G__83262 = cljs.core.count.call(null,c__5338__auto___83259);
var G__83263 = (0);
seq__83238_83246 = G__83260;
chunk__83239_83247 = G__83261;
count__83240_83248 = G__83262;
i__83241_83249 = G__83263;
continue;
} else {
var page_83264 = cljs.core.first.call(null,seq__83238_83258__$1);
var temp__4425__auto___83265__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_83264));
if(cljs.core.truth_(temp__4425__auto___83265__$1)){
var ept_83266 = temp__4425__auto___83265__$1;
routing.remove(ept_83266);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_83264));

var G__83267 = cljs.core.next.call(null,seq__83238_83258__$1);
var G__83268 = null;
var G__83269 = (0);
var G__83270 = (0);
seq__83238_83246 = G__83267;
chunk__83239_83247 = G__83268;
count__83240_83248 = G__83269;
i__83241_83249 = G__83270;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__83242 = cljs.core.seq.call(null,new$);
var chunk__83243 = null;
var count__83244 = (0);
var i__83245 = (0);
while(true){
if((i__83245 < count__83244)){
var page = cljs.core._nth.call(null,chunk__83243,i__83245);
var qx_page_83271 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_83271);

var temp__4425__auto___83272 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___83272)){
var ept_83273 = temp__4425__auto___83272;
routing.onGet(ept_83273,shower,qx_page_83271);
} else {
}

var G__83274 = seq__83242;
var G__83275 = chunk__83243;
var G__83276 = count__83244;
var G__83277 = (i__83245 + (1));
seq__83242 = G__83274;
chunk__83243 = G__83275;
count__83244 = G__83276;
i__83245 = G__83277;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__83242);
if(temp__4425__auto__){
var seq__83242__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83242__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__83242__$1);
var G__83278 = cljs.core.chunk_rest.call(null,seq__83242__$1);
var G__83279 = c__5338__auto__;
var G__83280 = cljs.core.count.call(null,c__5338__auto__);
var G__83281 = (0);
seq__83242 = G__83278;
chunk__83243 = G__83279;
count__83244 = G__83280;
i__83245 = G__83281;
continue;
} else {
var page = cljs.core.first.call(null,seq__83242__$1);
var qx_page_83282 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_83282);

var temp__4425__auto___83283__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___83283__$1)){
var ept_83284 = temp__4425__auto___83283__$1;
routing.onGet(ept_83284,shower,qx_page_83282);
} else {
}

var G__83285 = cljs.core.next.call(null,seq__83242__$1);
var G__83286 = null;
var G__83287 = (0);
var G__83288 = (0);
seq__83242 = G__83285;
chunk__83243 = G__83286;
count__83244 = G__83287;
i__83245 = G__83288;
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
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225)], null),(function (_,me,new$,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__83289_83297 = cljs.core.seq.call(null,old);
var chunk__83290_83298 = null;
var count__83291_83299 = (0);
var i__83292_83300 = (0);
while(true){
if((i__83292_83300 < count__83291_83299)){
var k_83301 = cljs.core._nth.call(null,chunk__83290_83298,i__83292_83300);
var qxk_83302 = tiltontec.qxia.base.qxme.call(null,k_83301);
var label_83303 = tiltontec.model.base.md_get.call(null,k_83301,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_83302);

var G__83304 = seq__83289_83297;
var G__83305 = chunk__83290_83298;
var G__83306 = count__83291_83299;
var G__83307 = (i__83292_83300 + (1));
seq__83289_83297 = G__83304;
chunk__83290_83298 = G__83305;
count__83291_83299 = G__83306;
i__83292_83300 = G__83307;
continue;
} else {
var temp__4425__auto___83308 = cljs.core.seq.call(null,seq__83289_83297);
if(temp__4425__auto___83308){
var seq__83289_83309__$1 = temp__4425__auto___83308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83289_83309__$1)){
var c__5338__auto___83310 = cljs.core.chunk_first.call(null,seq__83289_83309__$1);
var G__83311 = cljs.core.chunk_rest.call(null,seq__83289_83309__$1);
var G__83312 = c__5338__auto___83310;
var G__83313 = cljs.core.count.call(null,c__5338__auto___83310);
var G__83314 = (0);
seq__83289_83297 = G__83311;
chunk__83290_83298 = G__83312;
count__83291_83299 = G__83313;
i__83292_83300 = G__83314;
continue;
} else {
var k_83315 = cljs.core.first.call(null,seq__83289_83309__$1);
var qxk_83316 = tiltontec.qxia.base.qxme.call(null,k_83315);
var label_83317 = tiltontec.model.base.md_get.call(null,k_83315,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_83316);

var G__83318 = cljs.core.next.call(null,seq__83289_83309__$1);
var G__83319 = null;
var G__83320 = (0);
var G__83321 = (0);
seq__83289_83297 = G__83318;
chunk__83290_83298 = G__83319;
count__83291_83299 = G__83320;
i__83292_83300 = G__83321;
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
var seq__83293 = cljs.core.seq.call(null,kids);
var chunk__83294 = null;
var count__83295 = (0);
var i__83296 = (0);
while(true){
if((i__83296 < count__83295)){
var k = cljs.core._nth.call(null,chunk__83294,i__83296);
var qxk_83322 = tiltontec.qxia.base.qxme.call(null,k);
var label_83323 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_83322,label_83323);

var G__83324 = seq__83293;
var G__83325 = chunk__83294;
var G__83326 = count__83295;
var G__83327 = (i__83296 + (1));
seq__83293 = G__83324;
chunk__83294 = G__83325;
count__83295 = G__83326;
i__83296 = G__83327;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__83293);
if(temp__4425__auto____$1){
var seq__83293__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83293__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__83293__$1);
var G__83328 = cljs.core.chunk_rest.call(null,seq__83293__$1);
var G__83329 = c__5338__auto__;
var G__83330 = cljs.core.count.call(null,c__5338__auto__);
var G__83331 = (0);
seq__83293 = G__83328;
chunk__83294 = G__83329;
count__83295 = G__83330;
i__83296 = G__83331;
continue;
} else {
var k = cljs.core.first.call(null,seq__83293__$1);
var qxk_83332 = tiltontec.qxia.base.qxme.call(null,k);
var label_83333 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_83332,label_83333);

var G__83334 = cljs.core.next.call(null,seq__83293__$1);
var G__83335 = null;
var G__83336 = (0);
var G__83337 = (0);
seq__83293 = G__83334;
chunk__83294 = G__83335;
count__83295 = G__83336;
i__83296 = G__83337;
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
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724)], null),(function (_,me,new$,old,___$1){
if(cljs.core._EQ_.call(null,old,tiltontec.cell.base.unbound)){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,new$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"new","new",-444906321,null)))))].join('')));
}

var form = cljs.core.first.call(null,new$);
var qx_form = tiltontec.qxia.base.qxme.call(null,form);
if(cljs.core.truth_(qx_form)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"qx-form","qx-form",231243115,null)))].join('')));
}

return cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),(new qx.ui.mobile.form.renderer.Single(qx_form)));
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),(function (page){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
return qx_page.addListener("initialize",((function (qx_page){
return (function (){
var temp__4425__auto___83342 = tiltontec.model.base.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___83342)){
var kids_83343 = temp__4425__auto___83342;
var content_83344 = qx_page.getContent();
var seq__83338_83345 = cljs.core.seq.call(null,kids_83343);
var chunk__83339_83346 = null;
var count__83340_83347 = (0);
var i__83341_83348 = (0);
while(true){
if((i__83341_83348 < count__83340_83347)){
var k_83349 = cljs.core._nth.call(null,chunk__83339_83346,i__83341_83348);
var qxk_83350 = tiltontec.qxia.base.qxme.call(null,k_83349);
content_83344.add(qxk_83350);

var G__83351 = seq__83338_83345;
var G__83352 = chunk__83339_83346;
var G__83353 = count__83340_83347;
var G__83354 = (i__83341_83348 + (1));
seq__83338_83345 = G__83351;
chunk__83339_83346 = G__83352;
count__83340_83347 = G__83353;
i__83341_83348 = G__83354;
continue;
} else {
var temp__4425__auto___83355__$1 = cljs.core.seq.call(null,seq__83338_83345);
if(temp__4425__auto___83355__$1){
var seq__83338_83356__$1 = temp__4425__auto___83355__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83338_83356__$1)){
var c__5338__auto___83357 = cljs.core.chunk_first.call(null,seq__83338_83356__$1);
var G__83358 = cljs.core.chunk_rest.call(null,seq__83338_83356__$1);
var G__83359 = c__5338__auto___83357;
var G__83360 = cljs.core.count.call(null,c__5338__auto___83357);
var G__83361 = (0);
seq__83338_83345 = G__83358;
chunk__83339_83346 = G__83359;
count__83340_83347 = G__83360;
i__83341_83348 = G__83361;
continue;
} else {
var k_83362 = cljs.core.first.call(null,seq__83338_83356__$1);
var qxk_83363 = tiltontec.qxia.base.qxme.call(null,k_83362);
content_83344.add(qxk_83363);

var G__83364 = cljs.core.next.call(null,seq__83338_83356__$1);
var G__83365 = null;
var G__83366 = (0);
var G__83367 = (0);
seq__83338_83345 = G__83364;
chunk__83339_83346 = G__83365;
count__83340_83347 = G__83366;
i__83341_83348 = G__83367;
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
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)], null),(function (_,me,newk,oldk,___$1){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"navi-page-kids-obs-blocks-compo!!!!!","navi-page-kids-obs-blocks-compo!!!!!",-986088219));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.TextField","tiltontec.qxia.types/m.TextField",1587442644),(function (me){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
return tiltontec.qxia.base.qxme.call(null,me).setValue(tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"value","value",305978217)));
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)], null),(function (_,me,newk,oldk,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
} else {
var lostks_83376 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_83376)){
} else {
var seq__83368_83377 = cljs.core.seq.call(null,lostks_83376);
var chunk__83369_83378 = null;
var count__83370_83379 = (0);
var i__83371_83380 = (0);
while(true){
if((i__83371_83380 < count__83370_83379)){
var kid_83381 = cljs.core._nth.call(null,chunk__83369_83378,i__83371_83380);
var qxk_83382 = tiltontec.qxia.base.qxme.call(null,kid_83381);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_83381,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_83382);
}

qxk_83382.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_83381);

var G__83383 = seq__83368_83377;
var G__83384 = chunk__83369_83378;
var G__83385 = count__83370_83379;
var G__83386 = (i__83371_83380 + (1));
seq__83368_83377 = G__83383;
chunk__83369_83378 = G__83384;
count__83370_83379 = G__83385;
i__83371_83380 = G__83386;
continue;
} else {
var temp__4425__auto___83387 = cljs.core.seq.call(null,seq__83368_83377);
if(temp__4425__auto___83387){
var seq__83368_83388__$1 = temp__4425__auto___83387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83368_83388__$1)){
var c__5338__auto___83389 = cljs.core.chunk_first.call(null,seq__83368_83388__$1);
var G__83390 = cljs.core.chunk_rest.call(null,seq__83368_83388__$1);
var G__83391 = c__5338__auto___83389;
var G__83392 = cljs.core.count.call(null,c__5338__auto___83389);
var G__83393 = (0);
seq__83368_83377 = G__83390;
chunk__83369_83378 = G__83391;
count__83370_83379 = G__83392;
i__83371_83380 = G__83393;
continue;
} else {
var kid_83394 = cljs.core.first.call(null,seq__83368_83388__$1);
var qxk_83395 = tiltontec.qxia.base.qxme.call(null,kid_83394);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_83394,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_83395);
}

qxk_83395.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_83394);

var G__83396 = cljs.core.next.call(null,seq__83368_83388__$1);
var G__83397 = null;
var G__83398 = (0);
var G__83399 = (0);
seq__83368_83377 = G__83396;
chunk__83369_83378 = G__83397;
count__83370_83379 = G__83398;
i__83371_83380 = G__83399;
continue;
}
} else {
}
}
break;
}
}
}

var new_ks = clojure.set.difference.call(null,cljs.core.set.call(null,newk),cljs.core.set.call(null,oldk));
if(cljs.core.empty_QMARK_.call(null,new_ks)){
return null;
} else {
var seq__83372 = cljs.core.seq.call(null,new_ks);
var chunk__83373 = null;
var count__83374 = (0);
var i__83375 = (0);
while(true){
if((i__83375 < count__83374)){
var k = cljs.core._nth.call(null,chunk__83373,i__83375);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__83400 = seq__83372;
var G__83401 = chunk__83373;
var G__83402 = count__83374;
var G__83403 = (i__83375 + (1));
seq__83372 = G__83400;
chunk__83373 = G__83401;
count__83374 = G__83402;
i__83375 = G__83403;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__83372);
if(temp__4425__auto__){
var seq__83372__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83372__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__83372__$1);
var G__83404 = cljs.core.chunk_rest.call(null,seq__83372__$1);
var G__83405 = c__5338__auto__;
var G__83406 = cljs.core.count.call(null,c__5338__auto__);
var G__83407 = (0);
seq__83372 = G__83404;
chunk__83373 = G__83405;
count__83374 = G__83406;
i__83375 = G__83407;
continue;
} else {
var k = cljs.core.first.call(null,seq__83372__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__83408 = cljs.core.next.call(null,seq__83372__$1);
var G__83409 = null;
var G__83410 = (0);
var G__83411 = (0);
seq__83372 = G__83408;
chunk__83373 = G__83409;
count__83374 = G__83410;
i__83375 = G__83411;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slot-data","slot-data",1146367809),new cljs.core.Keyword("tiltontec.qxia.types","m.Picker","tiltontec.qxia.types/m.Picker",-1343372926)], null),(function (_,me,new$,old,c){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
cljs.core.println.call(null,new cljs.core.Keyword(null,"obs-sd","obs-sd",1176273322),tiltontec.cell.base.ia_type.call(null,me),new$,old);

var p = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__83412_83420 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__83413_83421 = null;
var count__83414_83422 = (0);
var i__83415_83423 = (0);
while(true){
if((i__83415_83423 < count__83414_83422)){
var n_83424 = cljs.core._nth.call(null,chunk__83413_83421,i__83415_83423);
p.removeSlot(n_83424);

var G__83425 = seq__83412_83420;
var G__83426 = chunk__83413_83421;
var G__83427 = count__83414_83422;
var G__83428 = (i__83415_83423 + (1));
seq__83412_83420 = G__83425;
chunk__83413_83421 = G__83426;
count__83414_83422 = G__83427;
i__83415_83423 = G__83428;
continue;
} else {
var temp__4425__auto___83429 = cljs.core.seq.call(null,seq__83412_83420);
if(temp__4425__auto___83429){
var seq__83412_83430__$1 = temp__4425__auto___83429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83412_83430__$1)){
var c__5338__auto___83431 = cljs.core.chunk_first.call(null,seq__83412_83430__$1);
var G__83432 = cljs.core.chunk_rest.call(null,seq__83412_83430__$1);
var G__83433 = c__5338__auto___83431;
var G__83434 = cljs.core.count.call(null,c__5338__auto___83431);
var G__83435 = (0);
seq__83412_83420 = G__83432;
chunk__83413_83421 = G__83433;
count__83414_83422 = G__83434;
i__83415_83423 = G__83435;
continue;
} else {
var n_83436 = cljs.core.first.call(null,seq__83412_83430__$1);
p.removeSlot(n_83436);

var G__83437 = cljs.core.next.call(null,seq__83412_83430__$1);
var G__83438 = null;
var G__83439 = (0);
var G__83440 = (0);
seq__83412_83420 = G__83437;
chunk__83413_83421 = G__83438;
count__83414_83422 = G__83439;
i__83415_83423 = G__83440;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__83416 = cljs.core.seq.call(null,new$);
var chunk__83417 = null;
var count__83418 = (0);
var i__83419 = (0);
while(true){
if((i__83419 < count__83418)){
var sd = cljs.core._nth.call(null,chunk__83417,i__83419);
cljs.core.println.call(null,new cljs.core.Keyword(null,"pickslot!!","pickslot!!",-645901635),sd);

var da_83441 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_83441);

var G__83442 = seq__83416;
var G__83443 = chunk__83417;
var G__83444 = count__83418;
var G__83445 = (i__83419 + (1));
seq__83416 = G__83442;
chunk__83417 = G__83443;
count__83418 = G__83444;
i__83419 = G__83445;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__83416);
if(temp__4425__auto__){
var seq__83416__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83416__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__83416__$1);
var G__83446 = cljs.core.chunk_rest.call(null,seq__83416__$1);
var G__83447 = c__5338__auto__;
var G__83448 = cljs.core.count.call(null,c__5338__auto__);
var G__83449 = (0);
seq__83416 = G__83446;
chunk__83417 = G__83447;
count__83418 = G__83448;
i__83419 = G__83449;
continue;
} else {
var sd = cljs.core.first.call(null,seq__83416__$1);
cljs.core.println.call(null,new cljs.core.Keyword(null,"pickslot!!","pickslot!!",-645901635),sd);

var da_83450 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_83450);

var G__83451 = cljs.core.next.call(null,seq__83416__$1);
var G__83452 = null;
var G__83453 = (0);
var G__83454 = (0);
seq__83416 = G__83451;
chunk__83417 = G__83452;
count__83418 = G__83453;
i__83419 = G__83454;
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
