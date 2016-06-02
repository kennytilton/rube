// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.base');
goog.require('tiltontec.model.core');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.qxia.base');
goog.require('tiltontec.qxia.widget');
tiltontec.qxia.core.routing_get = (function tiltontec$qxia$core$routing_get(end_point){
return tiltontec.qxia.base.app_routing.call(null).executeGet(end_point);
});
tiltontec.qxia.core.qx_make = (function tiltontec$qxia$core$qx_make(){
var args__5600__auto__ = [];
var len__5593__auto___28451 = arguments.length;
var i__5594__auto___28452 = (0);
while(true){
if((i__5594__auto___28452 < len__5593__auto___28451)){
args__5600__auto__.push((arguments[i__5594__auto___28452]));

var G__28453 = (i__5594__auto___28452 + (1));
i__5594__auto___28452 = G__28453;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic = (function (type,initargs){
cljs.core.println.call(null,[cljs.core.str("qx-making "),cljs.core.str(type),cljs.core.str(initargs)].join(''));

var qx_map = cljs.core.apply.call(null,cljs.core.hash_map,initargs);
var qx = tiltontec.qxia.base.qx_class_new.call(null,type,qx_map);
var me = cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),qx,initargs);
tiltontec.qxia.base.qx_initialize.call(null,me);

tiltontec.qxia.base.qx_initialize_all.call(null,me);

return me;
});

tiltontec.qxia.core.qx_make.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq28449){
var G__28450 = cljs.core.first.call(null,seq28449);
var seq28449__$1 = cljs.core.next.call(null,seq28449);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__28450,seq28449__$1);
});
tiltontec.qxia.core.label = (function tiltontec$qxia$core$label(){
var args__5600__auto__ = [];
var len__5593__auto___28456 = arguments.length;
var i__5594__auto___28457 = (0);
while(true){
if((i__5594__auto___28457 < len__5593__auto___28456)){
args__5600__auto__.push((arguments[i__5594__auto___28457]));

var G__28458 = (i__5594__auto___28457 + (1));
i__5594__auto___28457 = G__28458;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.qxia.core.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.qxia.core.label.cljs$core$IFn$_invoke$arity$variadic = (function (value,iargs){
return cljs.core.apply.call(null,tiltontec.qxia.core.qx_make,new cljs.core.Keyword("tiltontec.qxia.types","m.Label","tiltontec.qxia.types/m.Label",908319540),new cljs.core.Keyword(null,"value","value",305978217),value,iargs);
});

tiltontec.qxia.core.label.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.label.cljs$lang$applyTo = (function (seq28454){
var G__28455 = cljs.core.first.call(null,seq28454);
var seq28454__$1 = cljs.core.next.call(null,seq28454);
return tiltontec.qxia.core.label.cljs$core$IFn$_invoke$arity$variadic(G__28455,seq28454__$1);
});
tiltontec.qxia.core.image = (function tiltontec$qxia$core$image(){
var args__5600__auto__ = [];
var len__5593__auto___28461 = arguments.length;
var i__5594__auto___28462 = (0);
while(true){
if((i__5594__auto___28462 < len__5593__auto___28461)){
args__5600__auto__.push((arguments[i__5594__auto___28462]));

var G__28463 = (i__5594__auto___28462 + (1));
i__5594__auto___28462 = G__28463;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic = (function (source,iargs){
return cljs.core.apply.call(null,tiltontec.qxia.core.qx_make,new cljs.core.Keyword("tiltontec.qxia.types","m.Image","tiltontec.qxia.types/m.Image",336928926),new cljs.core.Keyword(null,"source","source",-433931539),source,iargs);
});

tiltontec.qxia.core.image.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.image.cljs$lang$applyTo = (function (seq28459){
var G__28460 = cljs.core.first.call(null,seq28459);
var seq28459__$1 = cljs.core.next.call(null,seq28459);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic(G__28460,seq28459__$1);
});
tiltontec.qxia.core.button = (function tiltontec$qxia$core$button(){
var args__5600__auto__ = [];
var len__5593__auto___28466 = arguments.length;
var i__5594__auto___28467 = (0);
while(true){
if((i__5594__auto___28467 < len__5593__auto___28466)){
args__5600__auto__.push((arguments[i__5594__auto___28467]));

var G__28468 = (i__5594__auto___28467 + (1));
i__5594__auto___28467 = G__28468;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic = (function (label_icon,iargs){
return cljs.core.apply.call(null,tiltontec.qxia.core.qx_make,new cljs.core.Keyword("tiltontec.qxia.types","m.Button","tiltontec.qxia.types/m.Button",-668586230),new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952),((cljs.core.coll_QMARK_.call(null,label_icon))?label_icon:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label_icon], null)),iargs);
});

tiltontec.qxia.core.button.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.button.cljs$lang$applyTo = (function (seq28464){
var G__28465 = cljs.core.first.call(null,seq28464);
var seq28464__$1 = cljs.core.next.call(null,seq28464);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic(G__28465,seq28464__$1);
});
tiltontec.qxia.core.text_field = (function tiltontec$qxia$core$text_field(){
var args__5600__auto__ = [];
var len__5593__auto___28471 = arguments.length;
var i__5594__auto___28472 = (0);
while(true){
if((i__5594__auto___28472 < len__5593__auto___28471)){
args__5600__auto__.push((arguments[i__5594__auto___28472]));

var G__28473 = (i__5594__auto___28472 + (1));
i__5594__auto___28472 = G__28473;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (label,iargs){
return tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.TextField","tiltontec.qxia.types/m.TextField",1587442644),new cljs.core.Keyword(null,"label","label",1718410804),label);
});

tiltontec.qxia.core.text_field.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.text_field.cljs$lang$applyTo = (function (seq28469){
var G__28470 = cljs.core.first.call(null,seq28469);
var seq28469__$1 = cljs.core.next.call(null,seq28469);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic(G__28470,seq28469__$1);
});
