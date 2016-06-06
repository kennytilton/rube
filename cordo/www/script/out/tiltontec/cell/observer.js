// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.cell.observer');
goog.require('cljs.core');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
tiltontec.cell.observer.type_cljc = (function tiltontec$cell$observer$type_cljc(x){
var or__4554__auto__ = (function (){var temp__4425__auto__ = cljs.core.meta.call(null,x);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4554__auto__)){
return or__4554__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
if(typeof tiltontec.cell.observer.observe !== 'undefined'){
} else {
tiltontec.cell.observer.observe = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return tiltontec.cell.base.ia_types;},new cljs.core.Symbol("tiltontec.cell.base","ia-types","tiltontec.cell.base/ia-types",436375603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.cell.base","tiltontec.cell.base",-1575671422,null),new cljs.core.Symbol(null,"ia-types","ia-types",322849110,null),"src/tiltontec/cell/base.cljc",14,1,107,107,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.cell.base.ia_types)?tiltontec.cell.base.ia_types.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.observer","observe"),((function (method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__,hierarchy__5452__auto__){
return (function (slot_name,me,new_val,old_val,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot_name,tiltontec.cell.observer.type_cljc.call(null,me)], null);
});})(method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__,hierarchy__5452__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.Keyword(null,"default","default",-1987822328),(function (slot,me,new_val,old_val,c){
return null;
}));
tiltontec.cell.observer.defobserver = (function tiltontec$cell$observer$defobserver(){
var args__5600__auto__ = [];
var len__5593__auto___23236 = arguments.length;
var i__5594__auto___23237 = (0);
while(true){
if((i__5594__auto___23237 < len__5593__auto___23236)){
args__5600__auto__.push((arguments[i__5594__auto___23237]));

var G__23238 = (i__5594__auto___23237 + (1));
i__5594__auto___23237 = G__23238;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((5) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((5)),(0))):null);
return tiltontec.cell.observer.defobserver.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5601__auto__);
});

tiltontec.cell.observer.defobserver.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,slot,types,params,body){
if((slot instanceof cljs.core.Keyword)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("defobserver> slot should be a keyword."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"slot","slot",1880761098,null))))].join('')));
}

var ftypes = cljs.core.concat.call(null,types,cljs.core.take_last.call(null,((1) - cljs.core.count.call(null,types)),cljs.core.list(new cljs.core.Keyword("tiltontec.cell.base","model","tiltontec.cell.base/model",284743830))));
var fparams = cljs.core.concat.call(null,params,cljs.core.take_last.call(null,((4) - cljs.core.count.call(null,params)),cljs.core.list(new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null),new cljs.core.Symbol(null,"old-value","old-value",-1791888974,null),new cljs.core.Symbol(null,"c","c",-122660552,null))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.observer","observe","tiltontec.cell.observer/observe",-883619497,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,slot),ftypes))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"slot","slot",1880761098,null)),fparams))))),body)));
});

tiltontec.cell.observer.defobserver.cljs$lang$maxFixedArity = (5);

tiltontec.cell.observer.defobserver.cljs$lang$applyTo = (function (seq23230){
var G__23231 = cljs.core.first.call(null,seq23230);
var seq23230__$1 = cljs.core.next.call(null,seq23230);
var G__23232 = cljs.core.first.call(null,seq23230__$1);
var seq23230__$2 = cljs.core.next.call(null,seq23230__$1);
var G__23233 = cljs.core.first.call(null,seq23230__$2);
var seq23230__$3 = cljs.core.next.call(null,seq23230__$2);
var G__23234 = cljs.core.first.call(null,seq23230__$3);
var seq23230__$4 = cljs.core.next.call(null,seq23230__$3);
var G__23235 = cljs.core.first.call(null,seq23230__$4);
var seq23230__$5 = cljs.core.next.call(null,seq23230__$4);
return tiltontec.cell.observer.defobserver.cljs$core$IFn$_invoke$arity$variadic(G__23231,G__23232,G__23233,G__23234,G__23235,seq23230__$5);
});

tiltontec.cell.observer.defobserver.cljs$lang$macro = true;
/**
 * Shortcut definer for cell-specific observers.
 * body can be multiple sexprs with access to
 * call parameters: slot, me, new, old, and c.
 */
tiltontec.cell.observer.fn_obs = (function tiltontec$cell$observer$fn_obs(){
var args__5600__auto__ = [];
var len__5593__auto___23242 = arguments.length;
var i__5594__auto___23243 = (0);
while(true){
if((i__5594__auto___23243 < len__5593__auto___23242)){
args__5600__auto__.push((arguments[i__5594__auto___23243]));

var G__23244 = (i__5594__auto___23243 + (1));
i__5594__auto___23243 = G__23244;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.cell.observer.fn_obs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.cell.observer.fn_obs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"slot","slot",1880761098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"old","old",-184691163,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c","c",-122660552,null))))))),body)));
});

tiltontec.cell.observer.fn_obs.cljs$lang$maxFixedArity = (2);

tiltontec.cell.observer.fn_obs.cljs$lang$applyTo = (function (seq23239){
var G__23240 = cljs.core.first.call(null,seq23239);
var seq23239__$1 = cljs.core.next.call(null,seq23239);
var G__23241 = cljs.core.first.call(null,seq23239__$1);
var seq23239__$2 = cljs.core.next.call(null,seq23239__$1);
return tiltontec.cell.observer.fn_obs.cljs$core$IFn$_invoke$arity$variadic(G__23240,G__23241,seq23239__$2);
});

tiltontec.cell.observer.fn_obs.cljs$lang$macro = true;
tiltontec.cell.observer.c_observe = (function tiltontec$cell$observer$c_observe(){
var args23245 = [];
var len__5593__auto___23248 = arguments.length;
var i__5594__auto___23249 = (0);
while(true){
if((i__5594__auto___23249 < len__5593__auto___23248)){
args23245.push((arguments[i__5594__auto___23249]));

var G__23250 = (i__5594__auto___23249 + (1));
i__5594__auto___23249 = G__23250;
continue;
} else {
}
break;
}

var G__23247 = args23245.length;
switch (G__23247) {
case 2:
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23245.length)].join('')));

}
});

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2 = (function (c,why){
return tiltontec.cell.observer.c_observe.call(null,c,tiltontec.cell.base.unbound,why);
});

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3 = (function (c,prior_value,why){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"c-ref?","c-ref?",794690162,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633),c], null),cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_));

return (function (){var or__4554__auto__ = new cljs.core.Keyword(null,"obs","obs",-664011444).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
if(cljs.core.truth_(or__4554__auto__)){
return or__4554__auto__;
} else {
return tiltontec.cell.observer.observe;
}
})().call(null,tiltontec.cell.base.c_slot.call(null,c),tiltontec.cell.base.c_model.call(null,c),tiltontec.cell.base.c_value.call(null,c),prior_value,c);
});

tiltontec.cell.observer.c_observe.cljs$lang$maxFixedArity = 3;
