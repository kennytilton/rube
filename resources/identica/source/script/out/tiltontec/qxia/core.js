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
var len__5593__auto___12644 = arguments.length;
var i__5594__auto___12645 = (0);
while(true){
if((i__5594__auto___12645 < len__5593__auto___12644)){
args__5600__auto__.push((arguments[i__5594__auto___12645]));

var G__12646 = (i__5594__auto___12645 + (1));
i__5594__auto___12645 = G__12646;
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

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq12642){
var G__12643 = cljs.core.first.call(null,seq12642);
var seq12642__$1 = cljs.core.next.call(null,seq12642);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__12643,seq12642__$1);
});
tiltontec.qxia.core.label = (function tiltontec$qxia$core$label(){
var args__5600__auto__ = [];
var len__5593__auto___12649 = arguments.length;
var i__5594__auto___12650 = (0);
while(true){
if((i__5594__auto___12650 < len__5593__auto___12649)){
args__5600__auto__.push((arguments[i__5594__auto___12650]));

var G__12651 = (i__5594__auto___12650 + (1));
i__5594__auto___12650 = G__12651;
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

tiltontec.qxia.core.label.cljs$lang$applyTo = (function (seq12647){
var G__12648 = cljs.core.first.call(null,seq12647);
var seq12647__$1 = cljs.core.next.call(null,seq12647);
return tiltontec.qxia.core.label.cljs$core$IFn$_invoke$arity$variadic(G__12648,seq12647__$1);
});
tiltontec.qxia.core.image = (function tiltontec$qxia$core$image(){
var args__5600__auto__ = [];
var len__5593__auto___12654 = arguments.length;
var i__5594__auto___12655 = (0);
while(true){
if((i__5594__auto___12655 < len__5593__auto___12654)){
args__5600__auto__.push((arguments[i__5594__auto___12655]));

var G__12656 = (i__5594__auto___12655 + (1));
i__5594__auto___12655 = G__12656;
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

tiltontec.qxia.core.image.cljs$lang$applyTo = (function (seq12652){
var G__12653 = cljs.core.first.call(null,seq12652);
var seq12652__$1 = cljs.core.next.call(null,seq12652);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic(G__12653,seq12652__$1);
});
tiltontec.qxia.core.button = (function tiltontec$qxia$core$button(){
var args__5600__auto__ = [];
var len__5593__auto___12659 = arguments.length;
var i__5594__auto___12660 = (0);
while(true){
if((i__5594__auto___12660 < len__5593__auto___12659)){
args__5600__auto__.push((arguments[i__5594__auto___12660]));

var G__12661 = (i__5594__auto___12660 + (1));
i__5594__auto___12660 = G__12661;
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

tiltontec.qxia.core.button.cljs$lang$applyTo = (function (seq12657){
var G__12658 = cljs.core.first.call(null,seq12657);
var seq12657__$1 = cljs.core.next.call(null,seq12657);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic(G__12658,seq12657__$1);
});
