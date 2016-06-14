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
tiltontec.util.core.rmap_setf = (function tiltontec$util$core$rmap_setf(p__14645,new_value){
var vec__14649 = p__14645;
var slot = cljs.core.nth.call(null,vec__14649,(0),null);
var ref = cljs.core.nth.call(null,vec__14649,(1),null);
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
tiltontec.util.core.rmap_meta_setf = (function tiltontec$util$core$rmap_meta_setf(p__14652,new_value){
var vec__14656 = p__14652;
var slot = cljs.core.nth.call(null,vec__14656,(0),null);
var ref = cljs.core.nth.call(null,vec__14656,(1),null);
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
var G__14659__delegate = function (a1,args){
return cljs.core.fn_QMARK_.call(null,a1);
};
var G__14659 = function (a1,var_args){
var args = null;
if (arguments.length > 1) {
var G__14660__i = 0, G__14660__a = new Array(arguments.length -  1);
while (G__14660__i < G__14660__a.length) {G__14660__a[G__14660__i] = arguments[G__14660__i + 1]; ++G__14660__i;}
  args = new cljs.core.IndexedSeq(G__14660__a,0);
} 
return G__14659__delegate.call(this,a1,args);};
G__14659.cljs$lang$maxFixedArity = 1;
G__14659.cljs$lang$applyTo = (function (arglist__14661){
var a1 = cljs.core.first(arglist__14661);
var args = cljs.core.rest(arglist__14661);
return G__14659__delegate(a1,args);
});
G__14659.cljs$core$IFn$_invoke$arity$variadic = G__14659__delegate;
return G__14659;
})()
;})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}

cljs.core._add_method.call(null,tiltontec.util.core.err,true,(function() { 
var G__14662__delegate = function (fn,mas){
return tiltontec.util.core.err.call(null,cljs.core.apply.call(null,fn,mas));
};
var G__14662 = function (fn,var_args){
var mas = null;
if (arguments.length > 1) {
var G__14663__i = 0, G__14663__a = new Array(arguments.length -  1);
while (G__14663__i < G__14663__a.length) {G__14663__a[G__14663__i] = arguments[G__14663__i + 1]; ++G__14663__i;}
  mas = new cljs.core.IndexedSeq(G__14663__a,0);
} 
return G__14662__delegate.call(this,fn,mas);};
G__14662.cljs$lang$maxFixedArity = 1;
G__14662.cljs$lang$applyTo = (function (arglist__14664){
var fn = cljs.core.first(arglist__14664);
var mas = cljs.core.rest(arglist__14664);
return G__14662__delegate(fn,mas);
});
G__14662.cljs$core$IFn$_invoke$arity$variadic = G__14662__delegate;
return G__14662;
})()
);

cljs.core._add_method.call(null,tiltontec.util.core.err,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__14665__delegate = function (bits){
throw (new Error(clojure.string.join.call(null," ",cljs.core.cons.call(null,"jz/err>",bits))));
};
var G__14665 = function (var_args){
var bits = null;
if (arguments.length > 0) {
var G__14666__i = 0, G__14666__a = new Array(arguments.length -  0);
while (G__14666__i < G__14666__a.length) {G__14666__a[G__14666__i] = arguments[G__14666__i + 0]; ++G__14666__i;}
  bits = new cljs.core.IndexedSeq(G__14666__a,0);
} 
return G__14665__delegate.call(this,bits);};
G__14665.cljs$lang$maxFixedArity = 0;
G__14665.cljs$lang$applyTo = (function (arglist__14667){
var bits = cljs.core.seq(arglist__14667);
return G__14665__delegate(bits);
});
G__14665.cljs$core$IFn$_invoke$arity$variadic = G__14665__delegate;
return G__14665;
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
var result__13251__auto__ = cljs.core.first.call(null,cljs.core.deref.call(null,q));
cljs.core.swap_BANG_.call(null,q,cljs.core.subvec,(1));

return result__13251__auto__;
}
});
tiltontec.util.core.ensure_vec = (function tiltontec$util$core$ensure_vec(x){
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
tiltontec.util.core.pln = (function tiltontec$util$core$pln(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14669 = arguments.length;
var i__7286__auto___14670 = (0);
while(true){
if((i__7286__auto___14670 < len__7285__auto___14669)){
args__7292__auto__.push((arguments[i__7286__auto___14670]));

var G__14671 = (i__7286__auto___14670 + (1));
i__7286__auto___14670 = G__14671;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((0) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((0)),(0),null)):null);
return tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(argseq__7293__auto__);
});

tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic = (function (r){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.first.call(null,r)], true),cljs.core.PersistentVector.EMPTY))){
return cljs.core.println.call(null,cljs.core.pr_str.call(null,r));
} else {
return null;
}
});

tiltontec.util.core.pln.cljs$lang$maxFixedArity = (0);

tiltontec.util.core.pln.cljs$lang$applyTo = (function (seq14668){
return tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14668));
});

