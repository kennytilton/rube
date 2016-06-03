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
var len__5593__auto___24135 = arguments.length;
var i__5594__auto___24136 = (0);
while(true){
if((i__5594__auto___24136 < len__5593__auto___24135)){
args__5600__auto__.push((arguments[i__5594__auto___24136]));

var G__24137 = (i__5594__auto___24136 + (1));
i__5594__auto___24136 = G__24137;
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

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq24133){
var G__24134 = cljs.core.first.call(null,seq24133);
var seq24133__$1 = cljs.core.next.call(null,seq24133);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__24134,seq24133__$1);
});
tiltontec.qxia.core.image = (function tiltontec$qxia$core$image(){
var args__5600__auto__ = [];
var len__5593__auto___24140 = arguments.length;
var i__5594__auto___24141 = (0);
while(true){
if((i__5594__auto___24141 < len__5593__auto___24140)){
args__5600__auto__.push((arguments[i__5594__auto___24141]));

var G__24142 = (i__5594__auto___24141 + (1));
i__5594__auto___24141 = G__24142;
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

tiltontec.qxia.core.image.cljs$lang$applyTo = (function (seq24138){
var G__24139 = cljs.core.first.call(null,seq24138);
var seq24138__$1 = cljs.core.next.call(null,seq24138);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic(G__24139,seq24138__$1);
});
tiltontec.qxia.core.button = (function tiltontec$qxia$core$button(){
var args__5600__auto__ = [];
var len__5593__auto___24145 = arguments.length;
var i__5594__auto___24146 = (0);
while(true){
if((i__5594__auto___24146 < len__5593__auto___24145)){
args__5600__auto__.push((arguments[i__5594__auto___24146]));

var G__24147 = (i__5594__auto___24146 + (1));
i__5594__auto___24146 = G__24147;
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

tiltontec.qxia.core.button.cljs$lang$applyTo = (function (seq24143){
var G__24144 = cljs.core.first.call(null,seq24143);
var seq24143__$1 = cljs.core.next.call(null,seq24143);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic(G__24144,seq24143__$1);
});
tiltontec.qxia.core.text_field = (function tiltontec$qxia$core$text_field(){
var args__5600__auto__ = [];
var len__5593__auto___24150 = arguments.length;
var i__5594__auto___24151 = (0);
while(true){
if((i__5594__auto___24151 < len__5593__auto___24150)){
args__5600__auto__.push((arguments[i__5594__auto___24151]));

var G__24152 = (i__5594__auto___24151 + (1));
i__5594__auto___24151 = G__24152;
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

tiltontec.qxia.core.text_field.cljs$lang$applyTo = (function (seq24148){
var G__24149 = cljs.core.first.call(null,seq24148);
var seq24148__$1 = cljs.core.next.call(null,seq24148);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic(G__24149,seq24148__$1);
});
