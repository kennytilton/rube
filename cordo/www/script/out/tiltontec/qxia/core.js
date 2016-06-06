// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.core');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.qxia.base');
goog.require('tiltontec.qxia.widget');
tiltontec.qxia.core.routing_get = (function tiltontec$qxia$core$routing_get(end_point){
return tiltontec.qxia.base.app_routing.call(null).executeGet(end_point);
});
tiltontec.qxia.core.image = (function tiltontec$qxia$core$image(){
var args__5600__auto__ = [];
var len__5593__auto___24093 = arguments.length;
var i__5594__auto___24094 = (0);
while(true){
if((i__5594__auto___24094 < len__5593__auto___24093)){
args__5600__auto__.push((arguments[i__5594__auto___24094]));

var G__24095 = (i__5594__auto___24094 + (1));
i__5594__auto___24094 = G__24095;
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

tiltontec.qxia.core.image.cljs$lang$applyTo = (function (seq24091){
var G__24092 = cljs.core.first.call(null,seq24091);
var seq24091__$1 = cljs.core.next.call(null,seq24091);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic(G__24092,seq24091__$1);
});
tiltontec.qxia.core.button = (function tiltontec$qxia$core$button(){
var args__5600__auto__ = [];
var len__5593__auto___24098 = arguments.length;
var i__5594__auto___24099 = (0);
while(true){
if((i__5594__auto___24099 < len__5593__auto___24098)){
args__5600__auto__.push((arguments[i__5594__auto___24099]));

var G__24100 = (i__5594__auto___24099 + (1));
i__5594__auto___24099 = G__24100;
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

tiltontec.qxia.core.button.cljs$lang$applyTo = (function (seq24096){
var G__24097 = cljs.core.first.call(null,seq24096);
var seq24096__$1 = cljs.core.next.call(null,seq24096);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic(G__24097,seq24096__$1);
});
tiltontec.qxia.core.text_field = (function tiltontec$qxia$core$text_field(){
var args__5600__auto__ = [];
var len__5593__auto___24103 = arguments.length;
var i__5594__auto___24104 = (0);
while(true){
if((i__5594__auto___24104 < len__5593__auto___24103)){
args__5600__auto__.push((arguments[i__5594__auto___24104]));

var G__24105 = (i__5594__auto___24104 + (1));
i__5594__auto___24104 = G__24105;
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

tiltontec.qxia.core.text_field.cljs$lang$applyTo = (function (seq24101){
var G__24102 = cljs.core.first.call(null,seq24101);
var seq24101__$1 = cljs.core.next.call(null,seq24101);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic(G__24102,seq24101__$1);
});
