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

var G__21585 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21585) {
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
var temp__4425__auto___21593 = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(temp__4425__auto___21593)){
var lbl_21594 = temp__4425__auto___21593;
tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059)).setLabel(lbl_21594);
} else {
}

var seq__21587 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"listeners","listeners",394544445)));
var chunk__21588 = null;
var count__21589 = (0);
var i__21590 = (0);
while(true){
if((i__21590 < count__21589)){
var vec__21591 = cljs.core._nth.call(null,chunk__21588,i__21590);
var name = cljs.core.nth.call(null,vec__21591,(0),null);
var handler = cljs.core.nth.call(null,vec__21591,(1),null);
tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059)).addListener(name,handler);

var G__21595 = seq__21587;
var G__21596 = chunk__21588;
var G__21597 = count__21589;
var G__21598 = (i__21590 + (1));
seq__21587 = G__21595;
chunk__21588 = G__21596;
count__21589 = G__21597;
i__21590 = G__21598;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21587);
if(temp__4425__auto__){
var seq__21587__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21587__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__21587__$1);
var G__21599 = cljs.core.chunk_rest.call(null,seq__21587__$1);
var G__21600 = c__5338__auto__;
var G__21601 = cljs.core.count.call(null,c__5338__auto__);
var G__21602 = (0);
seq__21587 = G__21599;
chunk__21588 = G__21600;
count__21589 = G__21601;
i__21590 = G__21602;
continue;
} else {
var vec__21592 = cljs.core.first.call(null,seq__21587__$1);
var name = cljs.core.nth.call(null,vec__21592,(0),null);
var handler = cljs.core.nth.call(null,vec__21592,(1),null);
tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059)).addListener(name,handler);

var G__21603 = cljs.core.next.call(null,seq__21587__$1);
var G__21604 = null;
var G__21605 = (0);
var G__21606 = (0);
seq__21587 = G__21603;
chunk__21588 = G__21604;
count__21589 = G__21605;
i__21590 = G__21606;
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
var temp__4425__auto___21611 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.truth_(temp__4425__auto___21611)){
var x_21612 = temp__4425__auto___21611;
cljs.core.println.call(null,new cljs.core.Keyword(null,"page-title!!!","page-title!!!",1772781916),x_21612);

qx_page.setTitle(x_21612);
} else {
}

var temp__4425__auto___21613 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"showBackButton","showBackButton",632746224));
if(cljs.core.truth_(temp__4425__auto___21613)){
var x_21614 = temp__4425__auto___21613;
qx_page.setShowBackButton(x_21614);
} else {
}

var temp__4425__auto___21615 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"backButtonText","backButtonText",2126160537));
if(cljs.core.truth_(temp__4425__auto___21615)){
var x_21616 = temp__4425__auto___21615;
qx_page.setBackButtonText(x_21616);
} else {
}

var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
cljs.core.println.call(null,new cljs.core.Keyword(null,"nav-page-kids!!!","nav-page-kids!!!",-2112974536),kids);

return qx_page.addListener("initialize",((function (kids,temp__4425__auto__,qx_page){
return (function (){
var content = qx_page.getContent();
var seq__21607 = cljs.core.seq.call(null,kids);
var chunk__21608 = null;
var count__21609 = (0);
var i__21610 = (0);
while(true){
if((i__21610 < count__21609)){
var k = cljs.core._nth.call(null,chunk__21608,i__21610);
var qxk_21617 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
if(cljs.core.truth_(qxk_21617)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"qxk","qxk",-1104406778,null)))].join('')));
}

content.add(qxk_21617);

var G__21618 = seq__21607;
var G__21619 = chunk__21608;
var G__21620 = count__21609;
var G__21621 = (i__21610 + (1));
seq__21607 = G__21618;
chunk__21608 = G__21619;
count__21609 = G__21620;
i__21610 = G__21621;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__21607);
if(temp__4425__auto____$1){
var seq__21607__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21607__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__21607__$1);
var G__21622 = cljs.core.chunk_rest.call(null,seq__21607__$1);
var G__21623 = c__5338__auto__;
var G__21624 = cljs.core.count.call(null,c__5338__auto__);
var G__21625 = (0);
seq__21607 = G__21622;
chunk__21608 = G__21623;
count__21609 = G__21624;
i__21610 = G__21625;
continue;
} else {
var k = cljs.core.first.call(null,seq__21607__$1);
var qxk_21626 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
if(cljs.core.truth_(qxk_21626)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"qxk","qxk",-1104406778,null)))].join('')));
}

content.add(qxk_21626);

var G__21627 = cljs.core.next.call(null,seq__21607__$1);
var G__21628 = null;
var G__21629 = (0);
var G__21630 = (0);
seq__21607 = G__21627;
chunk__21608 = G__21628;
count__21609 = G__21629;
i__21610 = G__21630;
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
var len__5593__auto___21633 = arguments.length;
var i__5594__auto___21634 = (0);
while(true){
if((i__5594__auto___21634 < len__5593__auto___21633)){
args__5600__auto__.push((arguments[i__5594__auto___21634]));

var G__21635 = (i__5594__auto___21634 + (1));
i__5594__auto___21634 = G__21635;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic = (function (type,initargs){
cljs.core.println.call(null,[cljs.core.str("qx-making "),cljs.core.str(type)].join(''));

var me = cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),tiltontec.qxia.core.qx_class_new.call(null,type),initargs);
if(cljs.core.truth_(tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059)))){
tiltontec.qxia.core.qx_finalize.call(null,me);
} else {
}

return me;
});

tiltontec.qxia.core.qx_make.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq21631){
var G__21632 = cljs.core.first.call(null,seq21631);
var seq21631__$1 = cljs.core.next.call(null,seq21631);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__21632,seq21631__$1);
});
