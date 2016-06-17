// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.model.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.base');
goog.require('tiltontec.cell.core');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
goog.require('tiltontec.cell.integrity');
tiltontec.model.core.md_name = (function tiltontec$model$core$md_name(me){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
tiltontec.model.core.md_get = (function tiltontec$model$core$md_get(me,slot){
var temp__4423__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4423__auto__)){
var c = temp__4423__auto__;
return tiltontec.cell.evaluate.c_get.call(null,c);
} else {
return slot.call(null,cljs.core.deref.call(null,me));
}
});
tiltontec.model.core.md_getx = (function tiltontec$model$core$md_getx(tag,me,slot){
return tiltontec.model.core.md_get.call(null,me,slot);
});
tiltontec.model.core._STAR_par_STAR_ = null;
tiltontec.model.core.md_reset_BANG_ = (function tiltontec$model$core$md_reset_BANG_(me,slot,new_value){
var temp__4423__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4423__auto__)){
var c = temp__4423__auto__;
return tiltontec.cell.core.c_reset_BANG_.call(null,c,new_value);
} else {
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,me),slot)){
return tiltontec.util.core.err.call(null,cljs.core.str,"change not mediated by cell ",slot,"/",tiltontec.cell.base.ia_type.call(null,me));
} else {
return tiltontec.util.core.err.call(null,cljs.core.str,"change to slot not mediated by cell and map lacks slot",slot);
}
}
});
tiltontec.model.core.make = (function tiltontec$model$core$make(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15316 = arguments.length;
var i__7286__auto___15317 = (0);
while(true){
if((i__7286__auto___15317 < len__7285__auto___15316)){
args__7292__auto__.push((arguments[i__7286__auto___15317]));

var G__15318 = (i__7286__auto___15317 + (1));
i__7286__auto___15317 = G__15318;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((0) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((0)),(0),null)):null);
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(argseq__7293__auto__);
});

tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic = (function (arg_list){
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,arg_list))){
return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),arg_list);
} else {
var iargs = cljs.core.apply.call(null,cljs.core.hash_map,arg_list);
var me = cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"par","par",-61778778),tiltontec.model.core._STAR_par_STAR_], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (iargs){
return (function (p__15304){
var vec__15305 = p__15304;
var k = cljs.core.nth.call(null,vec__15305,(0),null);
var v = cljs.core.nth.call(null,vec__15305,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,v))?tiltontec.cell.base.unbound:v)],null));
});})(iargs))
,cljs.core.filter.call(null,((function (iargs){
return (function (p__15308){
var vec__15309 = p__15308;
var slot = cljs.core.nth.call(null,vec__15309,(0),null);
var v = cljs.core.nth.call(null,vec__15309,(1),null);
return !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348),slot));
});})(iargs))
,cljs.core.partition.call(null,(2),arg_list))))),new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"nascent","nascent",443401807)], null),cljs.core.select_keys.call(null,iargs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348)], null))));
if(cljs.core.truth_(cljs.core.meta.call(null,me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.filter.call(null,((function (iargs,me){
return (function (p__15312){
var vec__15313 = p__15312;
var slot = cljs.core.nth.call(null,vec__15313,(0),null);
var v = cljs.core.nth.call(null,vec__15313,(1),null);
return tiltontec.model.base.md_install_cell.call(null,me,slot,v);
});})(iargs,me))
,cljs.core.partition.call(null,(2),arg_list)))));

tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"awaken","awaken",-1899628152),me,((function (iargs,me){
return (function (opcode,defer_info){
return tiltontec.model.base.md_awaken.call(null,me);
});})(iargs,me))
);

return me;

}
});

tiltontec.model.core.make.cljs$lang$maxFixedArity = (0);

tiltontec.model.core.make.cljs$lang$applyTo = (function (seq15303){
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15303));
});

tiltontec.model.core.mm_obj = Object;
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.model.core","family","tiltontec.model.core/family",-623513184)], null),(function (_,___$1,newk,oldk,___$2){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks)){
return null;
} else {
var seq__15319 = cljs.core.seq.call(null,lostks);
var chunk__15320 = null;
var count__15321 = (0);
var i__15322 = (0);
while(true){
if((i__15322 < count__15321)){
var k = cljs.core._nth.call(null,chunk__15320,i__15322);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__15323 = seq__15319;
var G__15324 = chunk__15320;
var G__15325 = count__15321;
var G__15326 = (i__15322 + (1));
seq__15319 = G__15323;
chunk__15320 = G__15324;
count__15321 = G__15325;
i__15322 = G__15326;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15319);
if(temp__4425__auto__){
var seq__15319__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15319__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__15319__$1);
var G__15327 = cljs.core.chunk_rest.call(null,seq__15319__$1);
var G__15328 = c__7021__auto__;
var G__15329 = cljs.core.count.call(null,c__7021__auto__);
var G__15330 = (0);
seq__15319 = G__15327;
chunk__15320 = G__15328;
count__15321 = G__15329;
i__15322 = G__15330;
continue;
} else {
var k = cljs.core.first.call(null,seq__15319__$1);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__15331 = cljs.core.next.call(null,seq__15319__$1);
var G__15332 = null;
var G__15333 = (0);
var G__15334 = (0);
seq__15319 = G__15331;
chunk__15320 = G__15332;
count__15321 = G__15333;
i__15322 = G__15334;
continue;
}
} else {
return null;
}
}
break;
}
}
}
}));
tiltontec.model.core.qx_par = (function tiltontec$model$core$qx_par(me){
return new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
tiltontec.model.core.fget_EQ_ = (function tiltontec$model$core$fget_EQ_(seek,poss){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,poss))){
} else {
throw (new Error("Assert failed: (any-ref? poss)"));
}

if(cljs.core.fn_QMARK_.call(null,seek)){
return seek.call(null,poss);
} else {
if((seek instanceof cljs.core.Keyword)){
return (cljs.core._EQ_.call(null,seek,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,poss)))) || (cljs.core.isa_QMARK_.call(null,tiltontec.cell.base.ia_type.call(null,poss),seek));
} else {
return cljs.core._EQ_.call(null,seek,poss);

}
}
});
tiltontec.model.core.fget = (function tiltontec$model$core$fget(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15340 = arguments.length;
var i__7286__auto___15341 = (0);
while(true){
if((i__7286__auto___15341 < len__7285__auto___15340)){
args__7292__auto__.push((arguments[i__7286__auto___15341]));

var G__15342 = (i__7286__auto___15341 + (1));
i__7286__auto___15341 = G__15342;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__6198__auto__ = where;
if(cljs.core.truth_(and__6198__auto__)){
return what;
} else {
return and__6198__auto__;
}
})())){
var options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"wocd?","wocd?",-195637516),true], null),cljs.core.apply.call(null,cljs.core.hash_map,options));
var _STAR_depender_STAR_15339 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"wocd?","wocd?",-195637516).cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);

try{var or__6210__auto__ = (function (){var and__6198__auto__ = new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = tiltontec.model.core.fget_EQ_.call(null,what,where);
if(cljs.core.truth_(and__6198__auto____$1)){
return where;
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = (function (){var and__6198__auto__ = new cljs.core.Keyword(null,"inside?","inside?",639243696).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6198__auto__)){
var temp__4423__auto__ = tiltontec.model.core.md_get.call(null,where,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4423__auto__)){
var kids = temp__4423__auto__;
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"inside-kids!!!","inside-kids!!!",-988551250),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where)));

var temp__4423__auto____$1 = cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"skip","skip",602715391).cljs$core$IFn$_invoke$arity$1(options__$1)], true),kids);
if(cljs.core.truth_(temp__4423__auto____$1)){
var netkids = temp__4423__auto____$1;
return cljs.core.some.call(null,((function (netkids,temp__4423__auto____$1,kids,temp__4423__auto__,and__6198__auto__,or__6210__auto__,_STAR_depender_STAR_15339,options__$1){
return (function (p1__15335_SHARP_){
return tiltontec.model.core.fget.call(null,what,p1__15335_SHARP_,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});})(netkids,temp__4423__auto____$1,kids,temp__4423__auto__,and__6198__auto__,or__6210__auto__,_STAR_depender_STAR_15339,options__$1))
,netkids);
} else {
return tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"no-net-kids","no-net-kids",1963649640));
}
} else {
return tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"inside-no-kids","inside-no-kids",-1437068961),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where)));
}
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(or__6210__auto____$1)){
return or__6210__auto____$1;
} else {
var or__6210__auto____$2 = (function (){var and__6198__auto__ = new cljs.core.Keyword(null,"up?","up?",77854972).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6198__auto__)){
var temp__4425__auto__ = new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where));
if(cljs.core.truth_(temp__4425__auto__)){
var par = temp__4425__auto__;
return tiltontec.model.core.fget.call(null,what,par,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"skip","skip",602715391),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true);
} else {
return null;
}
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(or__6210__auto____$2)){
return or__6210__auto____$2;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"must?","must?",1639898554).cljs$core$IFn$_invoke$arity$1(options__$1))){
return tiltontec.util.core.err.call(null,new cljs.core.Keyword(null,"fget-must-failed","fget-must-failed",237242954),what,where,options__$1);
} else {
return null;
}
}
}
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_15339;
}} else {
return null;
}
});

tiltontec.model.core.fget.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.fget.cljs$lang$applyTo = (function (seq15336){
var G__15337 = cljs.core.first.call(null,seq15336);
var seq15336__$1 = cljs.core.next.call(null,seq15336);
var G__15338 = cljs.core.first.call(null,seq15336__$1);
var seq15336__$2 = cljs.core.next.call(null,seq15336__$1);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(G__15337,G__15338,seq15336__$2);
});

tiltontec.model.core.fm_BANG_ = (function tiltontec$model$core$fm_BANG_(what,where){
return tiltontec.model.core.fget.call(null,what,where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"must?","must?",1639898554),true,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15352 = arguments.length;
var i__7286__auto___15353 = (0);
while(true){
if((i__7286__auto___15353 < len__7285__auto___15352)){
args__7292__auto__.push((arguments[i__7286__auto___15353]));

var G__15354 = (i__7286__auto___15353 + (1));
i__7286__auto___15353 = G__15354;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,slot,p__15348){
var vec__15349 = p__15348;
var me = cljs.core.nth.call(null,vec__15349,(0),null);
var me__$1 = (function (){var or__6210__auto__ = me;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Symbol(null,"me","me",1501524834,null);
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","md-get","tiltontec.model.core/md-get",-1259532148,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","fm!","tiltontec.model.core/fm!",-726483993,null)),(function (){var x__7044__auto__ = what;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = me__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.model.core.mdv_BANG_.cljs$lang$maxFixedArity = (4);

tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq15343){
var G__15344 = cljs.core.first.call(null,seq15343);
var seq15343__$1 = cljs.core.next.call(null,seq15343);
var G__15345 = cljs.core.first.call(null,seq15343__$1);
var seq15343__$2 = cljs.core.next.call(null,seq15343__$1);
var G__15346 = cljs.core.first.call(null,seq15343__$2);
var seq15343__$3 = cljs.core.next.call(null,seq15343__$2);
var G__15347 = cljs.core.first.call(null,seq15343__$3);
var seq15343__$4 = cljs.core.next.call(null,seq15343__$3);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15344,G__15345,G__15346,G__15347,seq15343__$4);
});


tiltontec.model.core.mdv_BANG_.cljs$lang$macro = true;
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15358 = arguments.length;
var i__7286__auto___15359 = (0);
while(true){
if((i__7286__auto___15359 < len__7285__auto___15358)){
args__7292__auto__.push((arguments[i__7286__auto___15359]));

var G__15360 = (i__7286__auto___15359 + (1));
i__7286__auto___15359 = G__15360;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","remove","cljs.core/remove",20102034,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),tree)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.model.core.the_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq15355){
var G__15356 = cljs.core.first.call(null,seq15355);
var seq15355__$1 = cljs.core.next.call(null,seq15355);
var G__15357 = cljs.core.first.call(null,seq15355__$1);
var seq15355__$2 = cljs.core.next.call(null,seq15355__$1);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic(G__15356,G__15357,seq15355__$2);
});


tiltontec.model.core.the_kids.cljs$lang$macro = true;
tiltontec.model.core.c_QMARK_kids = (function tiltontec$model$core$c_QMARK_kids(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15364 = arguments.length;
var i__7286__auto___15365 = (0);
while(true){
if((i__7286__auto___15365 < len__7285__auto___15364)){
args__7292__auto__.push((arguments[i__7286__auto___15365]));

var G__15366 = (i__7286__auto___15365 + (1));
i__7286__auto___15365 = G__15366;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?","tiltontec.model.core/c?",508213181,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null)),tree)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.model.core.c_QMARK_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.c_QMARK_kids.cljs$lang$applyTo = (function (seq15361){
var G__15362 = cljs.core.first.call(null,seq15361);
var seq15361__$1 = cljs.core.next.call(null,seq15361);
var G__15363 = cljs.core.first.call(null,seq15361__$1);
var seq15361__$2 = cljs.core.next.call(null,seq15361__$1);
return tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic(G__15362,G__15363,seq15361__$2);
});


tiltontec.model.core.c_QMARK_kids.cljs$lang$macro = true;
