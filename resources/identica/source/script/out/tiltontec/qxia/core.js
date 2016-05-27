// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.base');
goog.require('tiltontec.model.core');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.qxia.core.qx_types = cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.make_hierarchy.call(null),new cljs.core.Keyword("tiltontec.qxia.core","Mobile","tiltontec.qxia.core/Mobile",1622948346),new cljs.core.Keyword("tiltontec.qxia.core","Object","tiltontec.qxia.core/Object",-661675451)),new cljs.core.Keyword("tiltontec.qxia.core","Widget","tiltontec.qxia.core/Widget",-618008851),new cljs.core.Keyword("tiltontec.qxia.core","Object","tiltontec.qxia.core/Object",-661675451)),new cljs.core.Keyword("tiltontec.qxia.core","Composite","tiltontec.qxia.core/Composite",-1457287647),new cljs.core.Keyword("tiltontec.qxia.core","Widget","tiltontec.qxia.core/Widget",-618008851)),new cljs.core.Keyword("tiltontec.qxia.core","NavigationPage","tiltontec.qxia.core/NavigationPage",733013597),new cljs.core.Keyword("tiltontec.qxia.core","Composite","tiltontec.qxia.core/Composite",-1457287647)),new cljs.core.Keyword("tiltontec.qxia.core","Button","tiltontec.qxia.core/Button",476775989),new cljs.core.Keyword("tiltontec.qxia.core","Widget","tiltontec.qxia.core/Widget",-618008851));
tiltontec.qxia.core.qx_class_new = (function tiltontec$qxia$core$qx_class_new(type){
cljs.core.println.call(null,[cljs.core.str(new cljs.core.Symbol(null,"seeling-type","seeling-type",219710683,null)),cljs.core.str(type)].join(''));

var G__11254 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11254) {
case "tiltontec.qxia.core/NavigationPage":
return (new qx.ui.mobile.page.NavigationPage());

break;
case "tiltontec.qxia.core/Button":
return (new qx.ui.mobile.form.Button());

break;
case "tiltontec.qxia.core/Mobile":
return null;

break;
default:
throw (new Error([cljs.core.str("qx-class-new does not know about "),cljs.core.str(type)].join('')));

}
});
if(typeof tiltontec.qxia.core.qx_finalize !== 'undefined'){
} else {
tiltontec.qxia.core.qx_finalize = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.core","qx-finalize"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.core.qx_finalize,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
return cljs.core.println.call(null,[cljs.core.str("Not finalizing type "),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me))].join(''));
}));
cljs.core._add_method.call(null,tiltontec.qxia.core.qx_finalize,new cljs.core.Keyword("tiltontec.qxia.core","Button","tiltontec.qxia.core/Button",476775989),(function (me){
var temp__4425__auto___11262 = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(temp__4425__auto___11262)){
var lbl_11263 = temp__4425__auto___11262;
tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059)).setLabel(lbl_11263);
} else {
}

var seq__11256 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"listeners","listeners",394544445)));
var chunk__11257 = null;
var count__11258 = (0);
var i__11259 = (0);
while(true){
if((i__11259 < count__11258)){
var vec__11260 = cljs.core._nth.call(null,chunk__11257,i__11259);
var name = cljs.core.nth.call(null,vec__11260,(0),null);
var handler = cljs.core.nth.call(null,vec__11260,(1),null);
tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059)).addListener(name,handler);

var G__11264 = seq__11256;
var G__11265 = chunk__11257;
var G__11266 = count__11258;
var G__11267 = (i__11259 + (1));
seq__11256 = G__11264;
chunk__11257 = G__11265;
count__11258 = G__11266;
i__11259 = G__11267;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11256);
if(temp__4425__auto__){
var seq__11256__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11256__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__11256__$1);
var G__11268 = cljs.core.chunk_rest.call(null,seq__11256__$1);
var G__11269 = c__5338__auto__;
var G__11270 = cljs.core.count.call(null,c__5338__auto__);
var G__11271 = (0);
seq__11256 = G__11268;
chunk__11257 = G__11269;
count__11258 = G__11270;
i__11259 = G__11271;
continue;
} else {
var vec__11261 = cljs.core.first.call(null,seq__11256__$1);
var name = cljs.core.nth.call(null,vec__11261,(0),null);
var handler = cljs.core.nth.call(null,vec__11261,(1),null);
tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059)).addListener(name,handler);

var G__11272 = cljs.core.next.call(null,seq__11256__$1);
var G__11273 = null;
var G__11274 = (0);
var G__11275 = (0);
seq__11256 = G__11272;
chunk__11257 = G__11273;
count__11258 = G__11274;
i__11259 = G__11275;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tiltontec.qxia.core.qx_finalize,new cljs.core.Keyword("tiltontec.qxia.core","NavigationPage","tiltontec.qxia.core/NavigationPage",733013597),(function (page){
cljs.core.println.call(null,new cljs.core.Keyword(null,"qx-final-page!!!","qx-final-page!!!",1703994364),page);

var qx_page = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
var temp__4425__auto___11280 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.truth_(temp__4425__auto___11280)){
var x_11281 = temp__4425__auto___11280;
cljs.core.println.call(null,new cljs.core.Keyword(null,"page-title!!!","page-title!!!",1772781916),x_11281);

qx_page.setTitle(x_11281);
} else {
}

var temp__4425__auto___11282 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"showBackButton","showBackButton",632746224));
if(cljs.core.truth_(temp__4425__auto___11282)){
var x_11283 = temp__4425__auto___11282;
qx_page.setShowBackButton(x_11283);
} else {
}

var temp__4425__auto___11284 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"backButtonText","backButtonText",2126160537));
if(cljs.core.truth_(temp__4425__auto___11284)){
var x_11285 = temp__4425__auto___11284;
qx_page.setBackButtonText(x_11285);
} else {
}

var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
cljs.core.println.call(null,new cljs.core.Keyword(null,"nav-page-kids!!!","nav-page-kids!!!",-2112974536),kids);

return qx_page.addListener("initialize",((function (kids,temp__4425__auto__,qx_page){
return (function (){
var content = qx_page.getContent();
var seq__11276 = cljs.core.seq.call(null,kids);
var chunk__11277 = null;
var count__11278 = (0);
var i__11279 = (0);
while(true){
if((i__11279 < count__11278)){
var k = cljs.core._nth.call(null,chunk__11277,i__11279);
var qxk_11286 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
if(cljs.core.truth_(qxk_11286)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"qxk","qxk",-1104406778,null)))].join('')));
}

content.add(qxk_11286);

var G__11287 = seq__11276;
var G__11288 = chunk__11277;
var G__11289 = count__11278;
var G__11290 = (i__11279 + (1));
seq__11276 = G__11287;
chunk__11277 = G__11288;
count__11278 = G__11289;
i__11279 = G__11290;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__11276);
if(temp__4425__auto____$1){
var seq__11276__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11276__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__11276__$1);
var G__11291 = cljs.core.chunk_rest.call(null,seq__11276__$1);
var G__11292 = c__5338__auto__;
var G__11293 = cljs.core.count.call(null,c__5338__auto__);
var G__11294 = (0);
seq__11276 = G__11291;
chunk__11277 = G__11292;
count__11278 = G__11293;
i__11279 = G__11294;
continue;
} else {
var k = cljs.core.first.call(null,seq__11276__$1);
var qxk_11295 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
if(cljs.core.truth_(qxk_11295)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"qxk","qxk",-1104406778,null)))].join('')));
}

content.add(qxk_11295);

var G__11296 = cljs.core.next.call(null,seq__11276__$1);
var G__11297 = null;
var G__11298 = (0);
var G__11299 = (0);
seq__11276 = G__11296;
chunk__11277 = G__11297;
count__11278 = G__11298;
i__11279 = G__11299;
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
tiltontec.qxia.core.qx_make = (function tiltontec$qxia$core$qx_make(){
var args__5600__auto__ = [];
var len__5593__auto___11302 = arguments.length;
var i__5594__auto___11303 = (0);
while(true){
if((i__5594__auto___11303 < len__5593__auto___11302)){
args__5600__auto__.push((arguments[i__5594__auto___11303]));

var G__11304 = (i__5594__auto___11303 + (1));
i__5594__auto___11303 = G__11304;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic = (function (type,initargs){
var me = cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),tiltontec.qxia.core.qx_class_new.call(null,type),initargs);
if(cljs.core.truth_(tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059)))){
tiltontec.qxia.core.qx_finalize.call(null,me);
} else {
}

return me;
});

tiltontec.qxia.core.qx_make.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq11300){
var G__11301 = cljs.core.first.call(null,seq11300);
var seq11300__$1 = cljs.core.next.call(null,seq11300);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__11301,seq11300__$1);
});
