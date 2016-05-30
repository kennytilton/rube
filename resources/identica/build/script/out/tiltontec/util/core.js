// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.util.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tiltontec.util.base');
cljs.core._STAR_print_level_STAR_ = (2);
tiltontec.util.core.type_of = (function tiltontec$util$core$type_of(x){
return cljs.core.type.call(null,x);
});
tiltontec.util.core.set_ify = (function tiltontec$util$core$set_ify(x){
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.set.call(null,x);
} else {
return cljs.core.PersistentHashSet.fromArray([x], true);

}
}
});
tiltontec.util.core.cl_find = (function tiltontec$util$core$cl_find(sought,coll){
if((sought == null)){
return null;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([sought], true),coll);
}
});
tiltontec.util.core.ia_ref = (function tiltontec$util$core$ia_ref(x){
return cljs.core.atom.call(null,x);
});
tiltontec.util.core.any_ref_QMARK_ = (function tiltontec$util$core$any_ref_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
tiltontec.util.core.rmap_setf = (function tiltontec$util$core$rmap_setf(p__16274,new_value){
var vec__16276 = p__16274;
var slot = cljs.core.nth.call(null,vec__16276,(0),null);
var ref = cljs.core.nth.call(null,vec__16276,(1),null);
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"any-ref?","any-ref?",-153183574,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))))].join('')));
}

cljs.core.swap_BANG_.call(null,ref,cljs.core.assoc,slot,new_value);

return new_value;
});
tiltontec.util.core.rmap_meta_setf = (function tiltontec$util$core$rmap_meta_setf(p__16277,new_value){
var vec__16279 = p__16277;
var slot = cljs.core.nth.call(null,vec__16279,(0),null);
var ref = cljs.core.nth.call(null,vec__16279,(1),null);
if(cljs.core.truth_(cljs.core.meta.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

cljs.core.alter_meta_BANG_.call(null,ref,cljs.core.assoc,slot,new_value);

return new_value;
});
if(typeof tiltontec.util.core.err !== 'undefined'){
} else {
tiltontec.util.core.err = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.util.core","err"),((function (method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__,hierarchy__5452__auto__){
return (function() { 
var G__16280__delegate = function (a1,args){
return cljs.core.fn_QMARK_.call(null,a1);
};
var G__16280 = function (a1,var_args){
var args = null;
if (arguments.length > 1) {
var G__16281__i = 0, G__16281__a = new Array(arguments.length -  1);
while (G__16281__i < G__16281__a.length) {G__16281__a[G__16281__i] = arguments[G__16281__i + 1]; ++G__16281__i;}
  args = new cljs.core.IndexedSeq(G__16281__a,0);
} 
return G__16280__delegate.call(this,a1,args);};
G__16280.cljs$lang$maxFixedArity = 1;
G__16280.cljs$lang$applyTo = (function (arglist__16282){
var a1 = cljs.core.first(arglist__16282);
var args = cljs.core.rest(arglist__16282);
return G__16280__delegate(a1,args);
});
G__16280.cljs$core$IFn$_invoke$arity$variadic = G__16280__delegate;
return G__16280;
})()
;})(method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__,hierarchy__5452__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}

cljs.core._add_method.call(null,tiltontec.util.core.err,true,(function() { 
var G__16283__delegate = function (fn,mas){
return tiltontec.util.core.err.call(null,cljs.core.apply.call(null,fn,mas));
};
var G__16283 = function (fn,var_args){
var mas = null;
if (arguments.length > 1) {
var G__16284__i = 0, G__16284__a = new Array(arguments.length -  1);
while (G__16284__i < G__16284__a.length) {G__16284__a[G__16284__i] = arguments[G__16284__i + 1]; ++G__16284__i;}
  mas = new cljs.core.IndexedSeq(G__16284__a,0);
} 
return G__16283__delegate.call(this,fn,mas);};
G__16283.cljs$lang$maxFixedArity = 1;
G__16283.cljs$lang$applyTo = (function (arglist__16285){
var fn = cljs.core.first(arglist__16285);
var mas = cljs.core.rest(arglist__16285);
return G__16283__delegate(fn,mas);
});
G__16283.cljs$core$IFn$_invoke$arity$variadic = G__16283__delegate;
return G__16283;
})()
);

cljs.core._add_method.call(null,tiltontec.util.core.err,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__16286__delegate = function (bits){
throw (new Error(clojure.string.join.call(null," ",cljs.core.cons.call(null,"jz/err>",bits))));
};
var G__16286 = function (var_args){
var bits = null;
if (arguments.length > 0) {
var G__16287__i = 0, G__16287__a = new Array(arguments.length -  0);
while (G__16287__i < G__16287__a.length) {G__16287__a[G__16287__i] = arguments[G__16287__i + 0]; ++G__16287__i;}
  bits = new cljs.core.IndexedSeq(G__16287__a,0);
} 
return G__16286__delegate.call(this,bits);};
G__16286.cljs$lang$maxFixedArity = 0;
G__16286.cljs$lang$applyTo = (function (arglist__16288){
var bits = cljs.core.seq(arglist__16288);
return G__16286__delegate(bits);
});
G__16286.cljs$core$IFn$_invoke$arity$variadic = G__16286__delegate;
return G__16286;
})()
);
tiltontec.util.core.flz = (function tiltontec$util$core$flz(x){
if(cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,x),cljs.core.LazySeq)){
return cljs.core.vec.call(null,cljs.core.doall.call(null,x));
} else {
return x;
}
});
tiltontec.util.core.wtrx_test = (function tiltontec$util$core$wtrx_test(n){
var _STAR_trxdepth_STAR_16290 = tiltontec.util.base._STAR_trxdepth_STAR_;
tiltontec.util.base._STAR_trxdepth_STAR_ = (tiltontec.util.base._STAR_trxdepth_STAR_ + (1));

try{if((((0) <= tiltontec.util.base._STAR_trxdepth_STAR_)) && ((tiltontec.util.base._STAR_trxdepth_STAR_ <= (10)))){
tiltontec.util.base.call_trc.call(null,"test",n);
} else {
if((tiltontec.util.base._STAR_trxdepth_STAR_ > (10))){
throw (new java.lang.Exception([cljs.core.str("wtrx exceeded max depth "),cljs.core.str((10)),cljs.core.str(":"),cljs.core.str(tiltontec.util.base.call_trc$.call(null,"test",cljs.core._conj.call(null,cljs.core.List.EMPTY,n)))].join('')));
} else {
}
}

if((n > (0))){
return tiltontec$util$core$wtrx_test.call(null,(n - (1)));
} else {
return null;
}
}finally {tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR_16290;
}});
tiltontec.util.core.slot_users = (function tiltontec$util$core$slot_users(me,slot){
return cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"slotq","slotq",1456717980),cljs.core.map.call(null,cljs.core.deref,new cljs.core.Keyword(null,"callers","callers",-1991542784).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,slot.call(null,cljs.core.deref.call(null,me))),cljs.core.PersistentHashSet.EMPTY))));
});
tiltontec.util.core.slot_useds = (function tiltontec$util$core$slot_useds(me,slot){
return cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"slot","slot",240229571),cljs.core.map.call(null,cljs.core.deref,new cljs.core.Keyword(null,"useds","useds",621350967).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,slot.call(null,cljs.core.deref.call(null,me))),cljs.core.PersistentHashSet.EMPTY))));
});
tiltontec.util.core.make_fifo_queue = (function tiltontec$util$core$make_fifo_queue(){
return cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
});
tiltontec.util.core.fifo_data = (function tiltontec$util$core$fifo_data(q){
return cljs.core.deref.call(null,q);
});
tiltontec.util.core.fifo_clear = (function tiltontec$util$core$fifo_clear(q){
return cljs.core.swap_BANG_.call(null,q,cljs.core.empty);
});
tiltontec.util.core.fifo_empty_QMARK_ = (function tiltontec$util$core$fifo_empty_QMARK_(q){
return cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,q));
});
tiltontec.util.core.fifo_peek = (function tiltontec$util$core$fifo_peek(q){
return cljs.core.first.call(null,cljs.core.deref.call(null,q));
});
tiltontec.util.core.fifo_add = (function tiltontec$util$core$fifo_add(q,new$){
return cljs.core.swap_BANG_.call(null,q,cljs.core.conj,new$);
});
tiltontec.util.core.fifo_pop = (function tiltontec$util$core$fifo_pop(q){
if(cljs.core.truth_(tiltontec.util.core.fifo_empty_QMARK_.call(null,q))){
return null;
} else {
var result__16012__auto__ = cljs.core.first.call(null,cljs.core.deref.call(null,q));
cljs.core.swap_BANG_.call(null,q,cljs.core.subvec,(1));

return result__16012__auto__;
}
});
