// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.cell.observer');
goog.require('cljs.core');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.model.macros');
tiltontec.cell.observer.type_cljc = (function tiltontec$cell$observer$type_cljc(x){
var or__6210__auto__ = (function (){var temp__4425__auto__ = cljs.core.meta.call(null,x);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
if(typeof tiltontec.cell.observer.observe !== 'undefined'){
} else {
tiltontec.cell.observer.observe = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.observer","observe"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function (slot_name,me,new_val,old_val,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot_name,tiltontec.cell.observer.type_cljc.call(null,me)], null);
});})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
tiltontec.cell.observer._PLUS_observe_default_handler_PLUS_ = cljs.core.atom.call(null,null);
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.Keyword(null,"default","default",-1987822328),(function (slot,me,new_val,old_val,c){
var temp__4423__auto__ = cljs.core.deref.call(null,tiltontec.cell.observer._PLUS_observe_default_handler_PLUS_);
if(cljs.core.truth_(temp__4423__auto__)){
var obs = temp__4423__auto__;
return obs.call(null,slot,me,new_val,old_val,c);
} else {
return null;
}
}));
tiltontec.cell.observer.defobserver = (function tiltontec$cell$observer$defobserver(var_args){
var args__7292__auto__ = [];
var len__7285__auto___11249 = arguments.length;
var i__7286__auto___11250 = (0);
while(true){
if((i__7286__auto___11250 < len__7285__auto___11249)){
args__7292__auto__.push((arguments[i__7286__auto___11250]));

var G__11251 = (i__7286__auto___11250 + (1));
i__7286__auto___11250 = G__11251;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((5) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((5)),(0),null)):null);
return tiltontec.cell.observer.defobserver.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7293__auto__);
});

tiltontec.cell.observer.defobserver.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,slot,types,params,body){
if((slot instanceof cljs.core.Keyword)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("defobserver> slot should be a keyword."),cljs.core.str("\n"),cljs.core.str("(keyword? slot)")].join('')));
}

var ftypes = cljs.core.concat.call(null,types,cljs.core.take_last.call(null,((1) - cljs.core.count.call(null,types)),cljs.core.list(new cljs.core.Keyword("tiltontec.cell.base","model","tiltontec.cell.base/model",284743830))));
var fparams = cljs.core.concat.call(null,params,cljs.core.take_last.call(null,((4) - cljs.core.count.call(null,params)),cljs.core.list(new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null),new cljs.core.Symbol(null,"old-value","old-value",-1791888974,null),new cljs.core.Symbol(null,"c","c",-122660552,null))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.observer","observe","tiltontec.cell.observer/observe",-883619497,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7044__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),ftypes))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"slot","slot",1880761098,null)),fparams))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),body)));
});

tiltontec.cell.observer.defobserver.cljs$lang$maxFixedArity = (5);

tiltontec.cell.observer.defobserver.cljs$lang$applyTo = (function (seq11243){
var G__11244 = cljs.core.first.call(null,seq11243);
var seq11243__$1 = cljs.core.next.call(null,seq11243);
var G__11245 = cljs.core.first.call(null,seq11243__$1);
var seq11243__$2 = cljs.core.next.call(null,seq11243__$1);
var G__11246 = cljs.core.first.call(null,seq11243__$2);
var seq11243__$3 = cljs.core.next.call(null,seq11243__$2);
var G__11247 = cljs.core.first.call(null,seq11243__$3);
var seq11243__$4 = cljs.core.next.call(null,seq11243__$3);
var G__11248 = cljs.core.first.call(null,seq11243__$4);
var seq11243__$5 = cljs.core.next.call(null,seq11243__$4);
return tiltontec.cell.observer.defobserver.cljs$core$IFn$_invoke$arity$variadic(G__11244,G__11245,G__11246,G__11247,G__11248,seq11243__$5);
});


tiltontec.cell.observer.defobserver.cljs$lang$macro = true;
/**
 * Shortcut definer for cell-specific observers.
 * body can be multiple sexprs with access to
 * call parameters: slot, me, new, old, and c.
 */
tiltontec.cell.observer.fn_obs = (function tiltontec$cell$observer$fn_obs(var_args){
var args__7292__auto__ = [];
var len__7285__auto___11255 = arguments.length;
var i__7286__auto___11256 = (0);
while(true){
if((i__7286__auto___11256 < len__7285__auto___11255)){
args__7292__auto__.push((arguments[i__7286__auto___11256]));

var G__11257 = (i__7286__auto___11256 + (1));
i__7286__auto___11256 = G__11257;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.observer.fn_obs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.cell.observer.fn_obs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"slot","slot",1880761098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"old","old",-184691163,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c","c",-122660552,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),body)));
});

tiltontec.cell.observer.fn_obs.cljs$lang$maxFixedArity = (2);

tiltontec.cell.observer.fn_obs.cljs$lang$applyTo = (function (seq11252){
var G__11253 = cljs.core.first.call(null,seq11252);
var seq11252__$1 = cljs.core.next.call(null,seq11252);
var G__11254 = cljs.core.first.call(null,seq11252__$1);
var seq11252__$2 = cljs.core.next.call(null,seq11252__$1);
return tiltontec.cell.observer.fn_obs.cljs$core$IFn$_invoke$arity$variadic(G__11253,G__11254,seq11252__$2);
});


tiltontec.cell.observer.fn_obs.cljs$lang$macro = true;
tiltontec.cell.observer.c_observe = (function tiltontec$cell$observer$c_observe(var_args){
var args11258 = [];
var len__7285__auto___11261 = arguments.length;
var i__7286__auto___11262 = (0);
while(true){
if((i__7286__auto___11262 < len__7285__auto___11261)){
args11258.push((arguments[i__7286__auto___11262]));

var G__11263 = (i__7286__auto___11262 + (1));
i__7286__auto___11262 = G__11263;
continue;
} else {
}
break;
}

var G__11260 = args11258.length;
switch (G__11260) {
case 2:
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11258.length)].join('')));

}
});

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2 = (function (c,why){
return tiltontec.cell.observer.c_observe.call(null,c,tiltontec.cell.base.unbound,why);
});

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3 = (function (c,prior_value,why){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633),c], null),cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_));

return (function (){var or__6210__auto__ = new cljs.core.Keyword(null,"obs","obs",-664011444).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return tiltontec.cell.observer.observe;
}
})().call(null,tiltontec.cell.base.c_slot.call(null,c),tiltontec.cell.base.c_model.call(null,c),tiltontec.cell.base.c_value.call(null,c),prior_value,c);
});

tiltontec.cell.observer.c_observe.cljs$lang$maxFixedArity = 3;

