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
var len__5593__auto___24223 = arguments.length;
var i__5594__auto___24224 = (0);
while(true){
if((i__5594__auto___24224 < len__5593__auto___24223)){
args__5600__auto__.push((arguments[i__5594__auto___24224]));

var G__24225 = (i__5594__auto___24224 + (1));
i__5594__auto___24224 = G__24225;
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

var qx_map = cljs.core.apply.call(null,cljs.core.hash_map,initargs);
var qx = tiltontec.qxia.base.qx_class_new.call(null,type,qx_map);
cljs.core.println.call(null,new cljs.core.Keyword(null,"bingo-qx","bingo-qx",-1378096700),qx);

var me = cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),qx,initargs);
tiltontec.qxia.base.qx_initialize.call(null,me);

tiltontec.qxia.base.qx_initialize_all.call(null,me);

return me;
});

tiltontec.qxia.core.qx_make.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq24221){
var G__24222 = cljs.core.first.call(null,seq24221);
var seq24221__$1 = cljs.core.next.call(null,seq24221);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__24222,seq24221__$1);
});
tiltontec.qxia.core.image = (function tiltontec$qxia$core$image(){
var args__5600__auto__ = [];
var len__5593__auto___24228 = arguments.length;
var i__5594__auto___24229 = (0);
while(true){
if((i__5594__auto___24229 < len__5593__auto___24228)){
args__5600__auto__.push((arguments[i__5594__auto___24229]));

var G__24230 = (i__5594__auto___24229 + (1));
i__5594__auto___24229 = G__24230;
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

tiltontec.qxia.core.image.cljs$lang$applyTo = (function (seq24226){
var G__24227 = cljs.core.first.call(null,seq24226);
var seq24226__$1 = cljs.core.next.call(null,seq24226);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic(G__24227,seq24226__$1);
});
tiltontec.qxia.core.button = (function tiltontec$qxia$core$button(){
var args__5600__auto__ = [];
var len__5593__auto___24233 = arguments.length;
var i__5594__auto___24234 = (0);
while(true){
if((i__5594__auto___24234 < len__5593__auto___24233)){
args__5600__auto__.push((arguments[i__5594__auto___24234]));

var G__24235 = (i__5594__auto___24234 + (1));
i__5594__auto___24234 = G__24235;
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

tiltontec.qxia.core.button.cljs$lang$applyTo = (function (seq24231){
var G__24232 = cljs.core.first.call(null,seq24231);
var seq24231__$1 = cljs.core.next.call(null,seq24231);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic(G__24232,seq24231__$1);
});
tiltontec.qxia.core.text_field = (function tiltontec$qxia$core$text_field(){
var args__5600__auto__ = [];
var len__5593__auto___24238 = arguments.length;
var i__5594__auto___24239 = (0);
while(true){
if((i__5594__auto___24239 < len__5593__auto___24238)){
args__5600__auto__.push((arguments[i__5594__auto___24239]));

var G__24240 = (i__5594__auto___24239 + (1));
i__5594__auto___24239 = G__24240;
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

tiltontec.qxia.core.text_field.cljs$lang$applyTo = (function (seq24236){
var G__24237 = cljs.core.first.call(null,seq24236);
var seq24236__$1 = cljs.core.next.call(null,seq24236);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic(G__24237,seq24236__$1);
});
