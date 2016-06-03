// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.model.core');
goog.require('tiltontec.qxia.widget');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.model.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.qxia.base');
tiltontec.qxia.core.routing_get = (function tiltontec$qxia$core$routing_get(end_point){
return tiltontec.qxia.base.app_routing.call(null).executeGet(end_point);
});
tiltontec.qxia.core.image = (function tiltontec$qxia$core$image(){
var args__5600__auto__ = [];
var len__5593__auto___27020 = arguments.length;
var i__5594__auto___27021 = (0);
while(true){
if((i__5594__auto___27021 < len__5593__auto___27020)){
args__5600__auto__.push((arguments[i__5594__auto___27021]));

var G__27022 = (i__5594__auto___27021 + (1));
i__5594__auto___27021 = G__27022;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic = (function (source,iargs){
return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.Image","tiltontec.qxia.types/m.Image",336928926),new cljs.core.Keyword(null,"source","source",-433931539),source,iargs);
});

tiltontec.qxia.core.image.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.image.cljs$lang$applyTo = (function (seq27018){
var G__27019 = cljs.core.first.call(null,seq27018);
var seq27018__$1 = cljs.core.next.call(null,seq27018);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic(G__27019,seq27018__$1);
});
tiltontec.qxia.core.button = (function tiltontec$qxia$core$button(){
var args__5600__auto__ = [];
var len__5593__auto___27025 = arguments.length;
var i__5594__auto___27026 = (0);
while(true){
if((i__5594__auto___27026 < len__5593__auto___27025)){
args__5600__auto__.push((arguments[i__5594__auto___27026]));

var G__27027 = (i__5594__auto___27026 + (1));
i__5594__auto___27026 = G__27027;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic = (function (label_icon,iargs){
return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.Button","tiltontec.qxia.types/m.Button",-668586230),new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952),((cljs.core.coll_QMARK_.call(null,label_icon))?label_icon:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label_icon], null)),iargs);
});

tiltontec.qxia.core.button.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.button.cljs$lang$applyTo = (function (seq27023){
var G__27024 = cljs.core.first.call(null,seq27023);
var seq27023__$1 = cljs.core.next.call(null,seq27023);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic(G__27024,seq27023__$1);
});
tiltontec.qxia.core.text_field = (function tiltontec$qxia$core$text_field(){
var args__5600__auto__ = [];
var len__5593__auto___27030 = arguments.length;
var i__5594__auto___27031 = (0);
while(true){
if((i__5594__auto___27031 < len__5593__auto___27030)){
args__5600__auto__.push((arguments[i__5594__auto___27031]));

var G__27032 = (i__5594__auto___27031 + (1));
i__5594__auto___27031 = G__27032;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (label,iargs){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.TextField","tiltontec.qxia.types/m.TextField",1587442644),new cljs.core.Keyword(null,"label","label",1718410804),label);
});

tiltontec.qxia.core.text_field.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.text_field.cljs$lang$applyTo = (function (seq27028){
var G__27029 = cljs.core.first.call(null,seq27028);
var seq27028__$1 = cljs.core.next.call(null,seq27028);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic(G__27029,seq27028__$1);
});
