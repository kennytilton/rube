// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.base');
goog.require('tiltontec.model.core');
goog.require('tiltontec.qxia.base');
goog.require('tiltontec.qxia.widget');
tiltontec.qxia.core.qx_make = (function tiltontec$qxia$core$qx_make(){
var args__5600__auto__ = [];
var len__5593__auto___12708 = arguments.length;
var i__5594__auto___12709 = (0);
while(true){
if((i__5594__auto___12709 < len__5593__auto___12708)){
args__5600__auto__.push((arguments[i__5594__auto___12709]));

var G__12710 = (i__5594__auto___12709 + (1));
i__5594__auto___12709 = G__12710;
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

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq12706){
var G__12707 = cljs.core.first.call(null,seq12706);
var seq12706__$1 = cljs.core.next.call(null,seq12706);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__12707,seq12706__$1);
});
tiltontec.qxia.core.label = (function tiltontec$qxia$core$label(){
var args__5600__auto__ = [];
var len__5593__auto___12713 = arguments.length;
var i__5594__auto___12714 = (0);
while(true){
if((i__5594__auto___12714 < len__5593__auto___12713)){
args__5600__auto__.push((arguments[i__5594__auto___12714]));

var G__12715 = (i__5594__auto___12714 + (1));
i__5594__auto___12714 = G__12715;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.qxia.core.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.qxia.core.label.cljs$core$IFn$_invoke$arity$variadic = (function (value,iargs){
return cljs.core.apply.call(null,tiltontec.qxia.core.qx_make,new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"value","value",305978217),value,iargs);
});

tiltontec.qxia.core.label.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.label.cljs$lang$applyTo = (function (seq12711){
var G__12712 = cljs.core.first.call(null,seq12711);
var seq12711__$1 = cljs.core.next.call(null,seq12711);
return tiltontec.qxia.core.label.cljs$core$IFn$_invoke$arity$variadic(G__12712,seq12711__$1);
});
tiltontec.qxia.core.image = (function tiltontec$qxia$core$image(){
var args__5600__auto__ = [];
var len__5593__auto___12718 = arguments.length;
var i__5594__auto___12719 = (0);
while(true){
if((i__5594__auto___12719 < len__5593__auto___12718)){
args__5600__auto__.push((arguments[i__5594__auto___12719]));

var G__12720 = (i__5594__auto___12719 + (1));
i__5594__auto___12719 = G__12720;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic = (function (source,iargs){
return cljs.core.apply.call(null,tiltontec.qxia.core.qx_make,new cljs.core.Keyword("tiltontec.qxia.base","m.Image","tiltontec.qxia.base/m.Image",2135364668),new cljs.core.Keyword(null,"source","source",-433931539),source,iargs);
});

tiltontec.qxia.core.image.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.image.cljs$lang$applyTo = (function (seq12716){
var G__12717 = cljs.core.first.call(null,seq12716);
var seq12716__$1 = cljs.core.next.call(null,seq12716);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic(G__12717,seq12716__$1);
});
tiltontec.qxia.core.button = (function tiltontec$qxia$core$button(){
var args__5600__auto__ = [];
var len__5593__auto___12723 = arguments.length;
var i__5594__auto___12724 = (0);
while(true){
if((i__5594__auto___12724 < len__5593__auto___12723)){
args__5600__auto__.push((arguments[i__5594__auto___12724]));

var G__12725 = (i__5594__auto___12724 + (1));
i__5594__auto___12724 = G__12725;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic = (function (label_icon,iargs){
return cljs.core.apply.call(null,tiltontec.qxia.core.qx_make,new cljs.core.Keyword("tiltontec.qxia.base","m.Button","tiltontec.qxia.base/m.Button",1808800880),new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952),((cljs.core.coll_QMARK_.call(null,label_icon))?label_icon:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label_icon], null)),iargs);
});

tiltontec.qxia.core.button.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.button.cljs$lang$applyTo = (function (seq12721){
var G__12722 = cljs.core.first.call(null,seq12721);
var seq12721__$1 = cljs.core.next.call(null,seq12721);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic(G__12722,seq12721__$1);
});
