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
var len__5593__auto___14879 = arguments.length;
var i__5594__auto___14880 = (0);
while(true){
if((i__5594__auto___14880 < len__5593__auto___14879)){
args__5600__auto__.push((arguments[i__5594__auto___14880]));

var G__14881 = (i__5594__auto___14880 + (1));
i__5594__auto___14880 = G__14881;
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

var me = cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),tiltontec.qxia.base.qx_class_new.call(null,type),initargs);
if(cljs.core.truth_(tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059)))){
tiltontec.qxia.base.qx_initialize.call(null,me);

tiltontec.qxia.base.qx_initialize_all.call(null,me);
} else {
}

return me;
});

tiltontec.qxia.core.qx_make.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq14877){
var G__14878 = cljs.core.first.call(null,seq14877);
var seq14877__$1 = cljs.core.next.call(null,seq14877);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__14878,seq14877__$1);
});
