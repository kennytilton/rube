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
var len__5593__auto___83495 = arguments.length;
var i__5594__auto___83496 = (0);
while(true){
if((i__5594__auto___83496 < len__5593__auto___83495)){
args__5600__auto__.push((arguments[i__5594__auto___83496]));

var G__83497 = (i__5594__auto___83496 + (1));
i__5594__auto___83496 = G__83497;
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

tiltontec.qxia.core.image.cljs$lang$applyTo = (function (seq83493){
var G__83494 = cljs.core.first.call(null,seq83493);
var seq83493__$1 = cljs.core.next.call(null,seq83493);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic(G__83494,seq83493__$1);
});
tiltontec.qxia.core.button = (function tiltontec$qxia$core$button(){
var args__5600__auto__ = [];
var len__5593__auto___83500 = arguments.length;
var i__5594__auto___83501 = (0);
while(true){
if((i__5594__auto___83501 < len__5593__auto___83500)){
args__5600__auto__.push((arguments[i__5594__auto___83501]));

var G__83502 = (i__5594__auto___83501 + (1));
i__5594__auto___83501 = G__83502;
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

tiltontec.qxia.core.button.cljs$lang$applyTo = (function (seq83498){
var G__83499 = cljs.core.first.call(null,seq83498);
var seq83498__$1 = cljs.core.next.call(null,seq83498);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic(G__83499,seq83498__$1);
});
tiltontec.qxia.core.text_field = (function tiltontec$qxia$core$text_field(){
var args__5600__auto__ = [];
var len__5593__auto___83505 = arguments.length;
var i__5594__auto___83506 = (0);
while(true){
if((i__5594__auto___83506 < len__5593__auto___83505)){
args__5600__auto__.push((arguments[i__5594__auto___83506]));

var G__83507 = (i__5594__auto___83506 + (1));
i__5594__auto___83506 = G__83507;
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

tiltontec.qxia.core.text_field.cljs$lang$applyTo = (function (seq83503){
var G__83504 = cljs.core.first.call(null,seq83503);
var seq83503__$1 = cljs.core.next.call(null,seq83503);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic(G__83504,seq83503__$1);
});
