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
var len__5593__auto___29021 = arguments.length;
var i__5594__auto___29022 = (0);
while(true){
if((i__5594__auto___29022 < len__5593__auto___29021)){
args__5600__auto__.push((arguments[i__5594__auto___29022]));

var G__29023 = (i__5594__auto___29022 + (1));
i__5594__auto___29022 = G__29023;
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

tiltontec.qxia.core.image.cljs$lang$applyTo = (function (seq29019){
var G__29020 = cljs.core.first.call(null,seq29019);
var seq29019__$1 = cljs.core.next.call(null,seq29019);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic(G__29020,seq29019__$1);
});
tiltontec.qxia.core.button = (function tiltontec$qxia$core$button(){
var args__5600__auto__ = [];
var len__5593__auto___29026 = arguments.length;
var i__5594__auto___29027 = (0);
while(true){
if((i__5594__auto___29027 < len__5593__auto___29026)){
args__5600__auto__.push((arguments[i__5594__auto___29027]));

var G__29028 = (i__5594__auto___29027 + (1));
i__5594__auto___29027 = G__29028;
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

tiltontec.qxia.core.button.cljs$lang$applyTo = (function (seq29024){
var G__29025 = cljs.core.first.call(null,seq29024);
var seq29024__$1 = cljs.core.next.call(null,seq29024);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic(G__29025,seq29024__$1);
});
tiltontec.qxia.core.text_field = (function tiltontec$qxia$core$text_field(){
var args__5600__auto__ = [];
var len__5593__auto___29031 = arguments.length;
var i__5594__auto___29032 = (0);
while(true){
if((i__5594__auto___29032 < len__5593__auto___29031)){
args__5600__auto__.push((arguments[i__5594__auto___29032]));

var G__29033 = (i__5594__auto___29032 + (1));
i__5594__auto___29032 = G__29033;
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

tiltontec.qxia.core.text_field.cljs$lang$applyTo = (function (seq29029){
var G__29030 = cljs.core.first.call(null,seq29029);
var seq29029__$1 = cljs.core.next.call(null,seq29029);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic(G__29030,seq29029__$1);
});
