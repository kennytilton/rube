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
var len__5593__auto___16047 = arguments.length;
var i__5594__auto___16048 = (0);
while(true){
if((i__5594__auto___16048 < len__5593__auto___16047)){
args__5600__auto__.push((arguments[i__5594__auto___16048]));

var G__16049 = (i__5594__auto___16048 + (1));
i__5594__auto___16048 = G__16049;
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

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq16045){
var G__16046 = cljs.core.first.call(null,seq16045);
var seq16045__$1 = cljs.core.next.call(null,seq16045);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__16046,seq16045__$1);
});
tiltontec.qxia.core.label = (function tiltontec$qxia$core$label(){
var args__5600__auto__ = [];
var len__5593__auto___16052 = arguments.length;
var i__5594__auto___16053 = (0);
while(true){
if((i__5594__auto___16053 < len__5593__auto___16052)){
args__5600__auto__.push((arguments[i__5594__auto___16053]));

var G__16054 = (i__5594__auto___16053 + (1));
i__5594__auto___16053 = G__16054;
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

tiltontec.qxia.core.label.cljs$lang$applyTo = (function (seq16050){
var G__16051 = cljs.core.first.call(null,seq16050);
var seq16050__$1 = cljs.core.next.call(null,seq16050);
return tiltontec.qxia.core.label.cljs$core$IFn$_invoke$arity$variadic(G__16051,seq16050__$1);
});
tiltontec.qxia.core.image = (function tiltontec$qxia$core$image(){
var args__5600__auto__ = [];
var len__5593__auto___16057 = arguments.length;
var i__5594__auto___16058 = (0);
while(true){
if((i__5594__auto___16058 < len__5593__auto___16057)){
args__5600__auto__.push((arguments[i__5594__auto___16058]));

var G__16059 = (i__5594__auto___16058 + (1));
i__5594__auto___16058 = G__16059;
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

tiltontec.qxia.core.image.cljs$lang$applyTo = (function (seq16055){
var G__16056 = cljs.core.first.call(null,seq16055);
var seq16055__$1 = cljs.core.next.call(null,seq16055);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic(G__16056,seq16055__$1);
});
tiltontec.qxia.core.button = (function tiltontec$qxia$core$button(){
var args__5600__auto__ = [];
var len__5593__auto___16062 = arguments.length;
var i__5594__auto___16063 = (0);
while(true){
if((i__5594__auto___16063 < len__5593__auto___16062)){
args__5600__auto__.push((arguments[i__5594__auto___16063]));

var G__16064 = (i__5594__auto___16063 + (1));
i__5594__auto___16063 = G__16064;
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

tiltontec.qxia.core.button.cljs$lang$applyTo = (function (seq16060){
var G__16061 = cljs.core.first.call(null,seq16060);
var seq16060__$1 = cljs.core.next.call(null,seq16060);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic(G__16061,seq16060__$1);
});
tiltontec.qxia.core.text_field = (function tiltontec$qxia$core$text_field(){
var args__5600__auto__ = [];
var len__5593__auto___16067 = arguments.length;
var i__5594__auto___16068 = (0);
while(true){
if((i__5594__auto___16068 < len__5593__auto___16067)){
args__5600__auto__.push((arguments[i__5594__auto___16068]));

var G__16069 = (i__5594__auto___16068 + (1));
i__5594__auto___16068 = G__16069;
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

tiltontec.qxia.core.text_field.cljs$lang$applyTo = (function (seq16065){
var G__16066 = cljs.core.first.call(null,seq16065);
var seq16065__$1 = cljs.core.next.call(null,seq16065);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic(G__16066,seq16065__$1);
});
