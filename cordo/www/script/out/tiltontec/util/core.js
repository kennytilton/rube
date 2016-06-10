// Compiled by ClojureScript 1.9.36 {}
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
tiltontec.util.core.rmap_setf = (function tiltontec$util$core$rmap_setf(p__41257,new_value){
var vec__41261 = p__41257;
var slot = cljs.core.nth.call(null,vec__41261,(0),null);
var ref = cljs.core.nth.call(null,vec__41261,(1),null);
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,ref))){
} else {
throw (new Error("Assert failed: (any-ref? ref)"));
}

if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,ref))){
} else {
throw (new Error("Assert failed: (map? (clojure.core/deref ref))"));
}

cljs.core.swap_BANG_.call(null,ref,cljs.core.assoc,slot,new_value);

return new_value;
});
tiltontec.util.core.rmap_meta_setf = (function tiltontec$util$core$rmap_meta_setf(p__41264,new_value){
var vec__41268 = p__41264;
var slot = cljs.core.nth.call(null,vec__41268,(0),null);
var ref = cljs.core.nth.call(null,vec__41268,(1),null);
if(cljs.core.truth_(cljs.core.meta.call(null,ref))){
} else {
throw (new Error("Assert failed: (meta ref)"));
}

cljs.core.alter_meta_BANG_.call(null,ref,cljs.core.assoc,slot,new_value);

return new_value;
});
if(typeof tiltontec.util.core.err !== 'undefined'){
} else {
tiltontec.util.core.err = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.util.core","err"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function() { 
var G__41271__delegate = function (a1,args){
return cljs.core.fn_QMARK_.call(null,a1);
};
var G__41271 = function (a1,var_args){
var args = null;
if (arguments.length > 1) {
var G__41272__i = 0, G__41272__a = new Array(arguments.length -  1);
while (G__41272__i < G__41272__a.length) {G__41272__a[G__41272__i] = arguments[G__41272__i + 1]; ++G__41272__i;}
  args = new cljs.core.IndexedSeq(G__41272__a,0);
} 
return G__41271__delegate.call(this,a1,args);};
G__41271.cljs$lang$maxFixedArity = 1;
G__41271.cljs$lang$applyTo = (function (arglist__41273){
var a1 = cljs.core.first(arglist__41273);
var args = cljs.core.rest(arglist__41273);
return G__41271__delegate(a1,args);
});
G__41271.cljs$core$IFn$_invoke$arity$variadic = G__41271__delegate;
return G__41271;
})()
;})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}

cljs.core._add_method.call(null,tiltontec.util.core.err,true,(function() { 
var G__41274__delegate = function (fn,mas){
return tiltontec.util.core.err.call(null,cljs.core.apply.call(null,fn,mas));
};
var G__41274 = function (fn,var_args){
var mas = null;
if (arguments.length > 1) {
var G__41275__i = 0, G__41275__a = new Array(arguments.length -  1);
while (G__41275__i < G__41275__a.length) {G__41275__a[G__41275__i] = arguments[G__41275__i + 1]; ++G__41275__i;}
  mas = new cljs.core.IndexedSeq(G__41275__a,0);
} 
return G__41274__delegate.call(this,fn,mas);};
G__41274.cljs$lang$maxFixedArity = 1;
G__41274.cljs$lang$applyTo = (function (arglist__41276){
var fn = cljs.core.first(arglist__41276);
var mas = cljs.core.rest(arglist__41276);
return G__41274__delegate(fn,mas);
});
G__41274.cljs$core$IFn$_invoke$arity$variadic = G__41274__delegate;
return G__41274;
})()
);

cljs.core._add_method.call(null,tiltontec.util.core.err,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__41277__delegate = function (bits){
throw (new Error(clojure.string.join.call(null," ",cljs.core.cons.call(null,"jz/err>",bits))));
};
var G__41277 = function (var_args){
var bits = null;
if (arguments.length > 0) {
var G__41278__i = 0, G__41278__a = new Array(arguments.length -  0);
while (G__41278__i < G__41278__a.length) {G__41278__a[G__41278__i] = arguments[G__41278__i + 0]; ++G__41278__i;}
  bits = new cljs.core.IndexedSeq(G__41278__a,0);
} 
return G__41277__delegate.call(this,bits);};
G__41277.cljs$lang$maxFixedArity = 0;
G__41277.cljs$lang$applyTo = (function (arglist__41279){
var bits = cljs.core.seq(arglist__41279);
return G__41277__delegate(bits);
});
G__41277.cljs$core$IFn$_invoke$arity$variadic = G__41277__delegate;
return G__41277;
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
return tiltontec.util.base.call_wtrx.call(null,(function (){
if((n > (0))){
return tiltontec$util$core$wtrx_test.call(null,(n - (1)));
} else {
return null;
}
}),(0),(10),cljs.core._conj.call(null,(function (){var x__7044__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),"test"));
});
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
var result__40974__auto__ = cljs.core.first.call(null,cljs.core.deref.call(null,q));
cljs.core.swap_BANG_.call(null,q,cljs.core.subvec,(1));

return result__40974__auto__;
}
});
tiltontec.util.core.ensure_vec = (function tiltontec$util$core$ensure_vec(x){
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
