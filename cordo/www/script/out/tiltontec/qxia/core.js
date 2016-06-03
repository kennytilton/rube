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
var len__5593__auto___9871 = arguments.length;
var i__5594__auto___9872 = (0);
while(true){
if((i__5594__auto___9872 < len__5593__auto___9871)){
args__5600__auto__.push((arguments[i__5594__auto___9872]));

var G__9873 = (i__5594__auto___9872 + (1));
i__5594__auto___9872 = G__9873;
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

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq9869){
var G__9870 = cljs.core.first.call(null,seq9869);
var seq9869__$1 = cljs.core.next.call(null,seq9869);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__9870,seq9869__$1);
});
tiltontec.qxia.core.label = (function tiltontec$qxia$core$label(){
var args__5600__auto__ = [];
var len__5593__auto___9876 = arguments.length;
var i__5594__auto___9877 = (0);
while(true){
if((i__5594__auto___9877 < len__5593__auto___9876)){
args__5600__auto__.push((arguments[i__5594__auto___9877]));

var G__9878 = (i__5594__auto___9877 + (1));
i__5594__auto___9877 = G__9878;
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

tiltontec.qxia.core.label.cljs$lang$applyTo = (function (seq9874){
var G__9875 = cljs.core.first.call(null,seq9874);
var seq9874__$1 = cljs.core.next.call(null,seq9874);
return tiltontec.qxia.core.label.cljs$core$IFn$_invoke$arity$variadic(G__9875,seq9874__$1);
});
tiltontec.qxia.core.image = (function tiltontec$qxia$core$image(){
var args__5600__auto__ = [];
var len__5593__auto___9881 = arguments.length;
var i__5594__auto___9882 = (0);
while(true){
if((i__5594__auto___9882 < len__5593__auto___9881)){
args__5600__auto__.push((arguments[i__5594__auto___9882]));

var G__9883 = (i__5594__auto___9882 + (1));
i__5594__auto___9882 = G__9883;
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

tiltontec.qxia.core.image.cljs$lang$applyTo = (function (seq9879){
var G__9880 = cljs.core.first.call(null,seq9879);
var seq9879__$1 = cljs.core.next.call(null,seq9879);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic(G__9880,seq9879__$1);
});
tiltontec.qxia.core.button = (function tiltontec$qxia$core$button(){
var args__5600__auto__ = [];
var len__5593__auto___9886 = arguments.length;
var i__5594__auto___9887 = (0);
while(true){
if((i__5594__auto___9887 < len__5593__auto___9886)){
args__5600__auto__.push((arguments[i__5594__auto___9887]));

var G__9888 = (i__5594__auto___9887 + (1));
i__5594__auto___9887 = G__9888;
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

tiltontec.qxia.core.button.cljs$lang$applyTo = (function (seq9884){
var G__9885 = cljs.core.first.call(null,seq9884);
var seq9884__$1 = cljs.core.next.call(null,seq9884);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic(G__9885,seq9884__$1);
});
tiltontec.qxia.core.text_field = (function tiltontec$qxia$core$text_field(){
var args__5600__auto__ = [];
var len__5593__auto___9891 = arguments.length;
var i__5594__auto___9892 = (0);
while(true){
if((i__5594__auto___9892 < len__5593__auto___9891)){
args__5600__auto__.push((arguments[i__5594__auto___9892]));

var G__9893 = (i__5594__auto___9892 + (1));
i__5594__auto___9892 = G__9893;
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

tiltontec.qxia.core.text_field.cljs$lang$applyTo = (function (seq9889){
var G__9890 = cljs.core.first.call(null,seq9889);
var seq9889__$1 = cljs.core.next.call(null,seq9889);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic(G__9890,seq9889__$1);
});
