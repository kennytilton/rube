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
var len__5593__auto___30874 = arguments.length;
var i__5594__auto___30875 = (0);
while(true){
if((i__5594__auto___30875 < len__5593__auto___30874)){
args__5600__auto__.push((arguments[i__5594__auto___30875]));

var G__30876 = (i__5594__auto___30875 + (1));
i__5594__auto___30875 = G__30876;
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

var qx = ((cljs.core.isa_QMARK_.call(null,tiltontec.cell.base.ia_types,type,new cljs.core.Keyword("tiltontec.qxia.core","m.Single","tiltontec.qxia.core/m.Single",1330761384)))?null:tiltontec.qxia.base.qx_class_new.call(null,type));
cljs.core.println.call(null,new cljs.core.Keyword(null,"got-qx!!!!!!!","got-qx!!!!!!!",-511655461),qx);

var me = cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),qx,initargs);
cljs.core.println.call(null,new cljs.core.Keyword(null,"post-mdmake","post-mdmake",1124996587),cljs.core.deref.call(null,me),new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(me));

if(cljs.core.truth_(new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)))){
cljs.core.println.call(null,[cljs.core.str("qx-mak-initting "),cljs.core.str(type)].join(''));

tiltontec.qxia.base.qx_initialize.call(null,me);

tiltontec.qxia.base.qx_initialize_all.call(null,me);
} else {
}

return me;
});

tiltontec.qxia.core.qx_make.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq30872){
var G__30873 = cljs.core.first.call(null,seq30872);
var seq30872__$1 = cljs.core.next.call(null,seq30872);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__30873,seq30872__$1);
});
