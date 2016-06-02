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
var len__5593__auto___22657 = arguments.length;
var i__5594__auto___22658 = (0);
while(true){
if((i__5594__auto___22658 < len__5593__auto___22657)){
args__5600__auto__.push((arguments[i__5594__auto___22658]));

var G__22659 = (i__5594__auto___22658 + (1));
i__5594__auto___22658 = G__22659;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic = (function (type,initargs){
var qx_map = cljs.core.apply.call(null,cljs.core.hash_map,initargs);
var qx = tiltontec.qxia.base.qx_class_new.call(null,type,qx_map);
var me = cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),qx,initargs);
tiltontec.qxia.base.qx_initialize.call(null,me);

tiltontec.qxia.base.qx_initialize_all.call(null,me);

return me;
});

tiltontec.qxia.core.qx_make.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq22655){
var G__22656 = cljs.core.first.call(null,seq22655);
var seq22655__$1 = cljs.core.next.call(null,seq22655);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__22656,seq22655__$1);
});
tiltontec.qxia.core.label = (function tiltontec$qxia$core$label(){
var args__5600__auto__ = [];
var len__5593__auto___22662 = arguments.length;
var i__5594__auto___22663 = (0);
while(true){
if((i__5594__auto___22663 < len__5593__auto___22662)){
args__5600__auto__.push((arguments[i__5594__auto___22663]));

var G__22664 = (i__5594__auto___22663 + (1));
i__5594__auto___22663 = G__22664;
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

tiltontec.qxia.core.label.cljs$lang$applyTo = (function (seq22660){
var G__22661 = cljs.core.first.call(null,seq22660);
var seq22660__$1 = cljs.core.next.call(null,seq22660);
return tiltontec.qxia.core.label.cljs$core$IFn$_invoke$arity$variadic(G__22661,seq22660__$1);
});
tiltontec.qxia.core.image = (function tiltontec$qxia$core$image(){
var args__5600__auto__ = [];
var len__5593__auto___22667 = arguments.length;
var i__5594__auto___22668 = (0);
while(true){
if((i__5594__auto___22668 < len__5593__auto___22667)){
args__5600__auto__.push((arguments[i__5594__auto___22668]));

var G__22669 = (i__5594__auto___22668 + (1));
i__5594__auto___22668 = G__22669;
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

tiltontec.qxia.core.image.cljs$lang$applyTo = (function (seq22665){
var G__22666 = cljs.core.first.call(null,seq22665);
var seq22665__$1 = cljs.core.next.call(null,seq22665);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic(G__22666,seq22665__$1);
});
tiltontec.qxia.core.button = (function tiltontec$qxia$core$button(){
var args__5600__auto__ = [];
var len__5593__auto___22672 = arguments.length;
var i__5594__auto___22673 = (0);
while(true){
if((i__5594__auto___22673 < len__5593__auto___22672)){
args__5600__auto__.push((arguments[i__5594__auto___22673]));

var G__22674 = (i__5594__auto___22673 + (1));
i__5594__auto___22673 = G__22674;
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

tiltontec.qxia.core.button.cljs$lang$applyTo = (function (seq22670){
var G__22671 = cljs.core.first.call(null,seq22670);
var seq22670__$1 = cljs.core.next.call(null,seq22670);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic(G__22671,seq22670__$1);
});
tiltontec.qxia.core.text_field = (function tiltontec$qxia$core$text_field(){
var args__5600__auto__ = [];
var len__5593__auto___22677 = arguments.length;
var i__5594__auto___22678 = (0);
while(true){
if((i__5594__auto___22678 < len__5593__auto___22677)){
args__5600__auto__.push((arguments[i__5594__auto___22678]));

var G__22679 = (i__5594__auto___22678 + (1));
i__5594__auto___22678 = G__22679;
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

tiltontec.qxia.core.text_field.cljs$lang$applyTo = (function (seq22675){
var G__22676 = cljs.core.first.call(null,seq22675);
var seq22675__$1 = cljs.core.next.call(null,seq22675);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic(G__22676,seq22675__$1);
});
