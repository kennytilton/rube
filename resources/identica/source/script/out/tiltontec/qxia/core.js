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
var len__5593__auto___38569 = arguments.length;
var i__5594__auto___38570 = (0);
while(true){
if((i__5594__auto___38570 < len__5593__auto___38569)){
args__5600__auto__.push((arguments[i__5594__auto___38570]));

var G__38571 = (i__5594__auto___38570 + (1));
i__5594__auto___38570 = G__38571;
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

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq38567){
var G__38568 = cljs.core.first.call(null,seq38567);
var seq38567__$1 = cljs.core.next.call(null,seq38567);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__38568,seq38567__$1);
});
tiltontec.qxia.core.label = (function tiltontec$qxia$core$label(){
var args__5600__auto__ = [];
var len__5593__auto___38574 = arguments.length;
var i__5594__auto___38575 = (0);
while(true){
if((i__5594__auto___38575 < len__5593__auto___38574)){
args__5600__auto__.push((arguments[i__5594__auto___38575]));

var G__38576 = (i__5594__auto___38575 + (1));
i__5594__auto___38575 = G__38576;
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

tiltontec.qxia.core.label.cljs$lang$applyTo = (function (seq38572){
var G__38573 = cljs.core.first.call(null,seq38572);
var seq38572__$1 = cljs.core.next.call(null,seq38572);
return tiltontec.qxia.core.label.cljs$core$IFn$_invoke$arity$variadic(G__38573,seq38572__$1);
});
tiltontec.qxia.core.image = (function tiltontec$qxia$core$image(){
var args__5600__auto__ = [];
var len__5593__auto___38579 = arguments.length;
var i__5594__auto___38580 = (0);
while(true){
if((i__5594__auto___38580 < len__5593__auto___38579)){
args__5600__auto__.push((arguments[i__5594__auto___38580]));

var G__38581 = (i__5594__auto___38580 + (1));
i__5594__auto___38580 = G__38581;
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

tiltontec.qxia.core.image.cljs$lang$applyTo = (function (seq38577){
var G__38578 = cljs.core.first.call(null,seq38577);
var seq38577__$1 = cljs.core.next.call(null,seq38577);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic(G__38578,seq38577__$1);
});
tiltontec.qxia.core.button = (function tiltontec$qxia$core$button(){
var args__5600__auto__ = [];
var len__5593__auto___38584 = arguments.length;
var i__5594__auto___38585 = (0);
while(true){
if((i__5594__auto___38585 < len__5593__auto___38584)){
args__5600__auto__.push((arguments[i__5594__auto___38585]));

var G__38586 = (i__5594__auto___38585 + (1));
i__5594__auto___38585 = G__38586;
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

tiltontec.qxia.core.button.cljs$lang$applyTo = (function (seq38582){
var G__38583 = cljs.core.first.call(null,seq38582);
var seq38582__$1 = cljs.core.next.call(null,seq38582);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic(G__38583,seq38582__$1);
});
tiltontec.qxia.core.text_field = (function tiltontec$qxia$core$text_field(){
var args__5600__auto__ = [];
var len__5593__auto___38589 = arguments.length;
var i__5594__auto___38590 = (0);
while(true){
if((i__5594__auto___38590 < len__5593__auto___38589)){
args__5600__auto__.push((arguments[i__5594__auto___38590]));

var G__38591 = (i__5594__auto___38590 + (1));
i__5594__auto___38590 = G__38591;
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

tiltontec.qxia.core.text_field.cljs$lang$applyTo = (function (seq38587){
var G__38588 = cljs.core.first.call(null,seq38587);
var seq38587__$1 = cljs.core.next.call(null,seq38587);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic(G__38588,seq38587__$1);
});
