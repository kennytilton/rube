// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.model.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.model.family');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.base');
goog.require('tiltontec.cell.core');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
goog.require('tiltontec.cell.integrity');
tiltontec.model.core.md_reset_BANG_ = (function tiltontec$model$core$md_reset_BANG_(me,slot,new_value){
var temp__4423__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4423__auto__)){
var c = temp__4423__auto__;
return tiltontec.cell.core.c_reset_BANG_.call(null,c,new_value);
} else {
tiltontec.util.core.err.call(null,cljs.core.str,"change to slot %s not mediated by cell",slot);

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
}
});
tiltontec.model.core.make = (function tiltontec$model$core$make(){
var args__5600__auto__ = [];
var len__5593__auto___12699 = arguments.length;
var i__5594__auto___12700 = (0);
while(true){
if((i__5594__auto___12700 < len__5593__auto___12699)){
args__5600__auto__.push((arguments[i__5594__auto___12700]));

var G__12701 = (i__5594__auto___12700 + (1));
i__5594__auto___12700 = G__12701;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((0) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((0)),(0))):null);
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(argseq__5601__auto__);
});

tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic = (function (iargs){
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,iargs))){
return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),iargs);
} else {
var me = cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"par","par",-61778778),tiltontec.model.family._STAR_par_STAR_], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12691){
var vec__12692 = p__12691;
var k = cljs.core.nth.call(null,vec__12692,(0),null);
var v = cljs.core.nth.call(null,vec__12692,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,v))?tiltontec.cell.base.unbound:v)],null));
}),cljs.core.filter.call(null,(function (p__12693){
var vec__12694 = p__12693;
var slot = cljs.core.nth.call(null,vec__12694,(0),null);
var v = cljs.core.nth.call(null,vec__12694,(1),null);
return !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348),slot));
}),cljs.core.partition.call(null,(2),iargs))))),new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"nascent","nascent",443401807)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.filter.call(null,(function (p__12695){
var vec__12696 = p__12695;
var slot = cljs.core.nth.call(null,vec__12696,(0),null);
var v = cljs.core.nth.call(null,vec__12696,(1),null);
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348),slot);
}),cljs.core.partition.call(null,(2),iargs))))));
if(cljs.core.truth_(cljs.core.meta.call(null,me))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"me","me",1501524834,null))))].join('')));
}

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.filter.call(null,((function (me){
return (function (p__12697){
var vec__12698 = p__12697;
var slot = cljs.core.nth.call(null,vec__12698,(0),null);
var v = cljs.core.nth.call(null,vec__12698,(1),null);
return tiltontec.model.base.md_install_cell.call(null,me,slot,v);
});})(me))
,cljs.core.partition.call(null,(2),iargs)))));

tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"awaken","awaken",-1899628152),me,((function (me){
return (function (opcode,defer_info){
return tiltontec.model.base.md_awaken.call(null,me);
});})(me))
);

return me;

}
});

tiltontec.model.core.make.cljs$lang$maxFixedArity = (0);

tiltontec.model.core.make.cljs$lang$applyTo = (function (seq12690){
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12690));
});