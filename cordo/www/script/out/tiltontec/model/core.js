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
var len__7285__auto___11776 = arguments.length;
var i__7286__auto___11777 = (0);
while(true){
if((i__7286__auto___11777 < len__7285__auto___11776)){
args__7292__auto__.push((arguments[i__7286__auto___11777]));

var G__11778 = (i__7286__auto___11777 + (1));
i__7286__auto___11777 = G__11778;
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
return (function (p__11764){
var vec__11765 = p__11764;
var k = cljs.core.nth.call(null,vec__11765,(0),null);
var v = cljs.core.nth.call(null,vec__11765,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,v))?tiltontec.cell.base.unbound:v)],null));
});})(iargs))
,cljs.core.filter.call(null,((function (iargs){
return (function (p__11768){
var vec__11769 = p__11768;
var slot = cljs.core.nth.call(null,vec__11769,(0),null);
var v = cljs.core.nth.call(null,vec__11769,(1),null);
return !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348),slot));
});})(iargs))
,cljs.core.partition.call(null,(2),arg_list))))),new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"nascent","nascent",443401807)], null),cljs.core.select_keys.call(null,iargs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348)], null))));
if(cljs.core.truth_(cljs.core.meta.call(null,me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.filter.call(null,((function (iargs,me){
return (function (p__11772){
var vec__11773 = p__11772;
var slot = cljs.core.nth.call(null,vec__11773,(0),null);
var v = cljs.core.nth.call(null,vec__11773,(1),null);
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

tiltontec.model.core.make.cljs$lang$applyTo = (function (seq11763){
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11763));
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
var seq__11779 = cljs.core.seq.call(null,lostks);
var chunk__11780 = null;
var count__11781 = (0);
var i__11782 = (0);
while(true){
if((i__11782 < count__11781)){
var k = cljs.core._nth.call(null,chunk__11780,i__11782);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__11783 = seq__11779;
var G__11784 = chunk__11780;
var G__11785 = count__11781;
var G__11786 = (i__11782 + (1));
seq__11779 = G__11783;
chunk__11780 = G__11784;
count__11781 = G__11785;
i__11782 = G__11786;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11779);
if(temp__4425__auto__){
var seq__11779__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11779__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__11779__$1);
var G__11787 = cljs.core.chunk_rest.call(null,seq__11779__$1);
var G__11788 = c__7021__auto__;
var G__11789 = cljs.core.count.call(null,c__7021__auto__);
var G__11790 = (0);
seq__11779 = G__11787;
chunk__11780 = G__11788;
count__11781 = G__11789;
i__11782 = G__11790;
continue;
} else {
var k = cljs.core.first.call(null,seq__11779__$1);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__11791 = cljs.core.next.call(null,seq__11779__$1);
var G__11792 = null;
var G__11793 = (0);
var G__11794 = (0);
seq__11779 = G__11791;
chunk__11780 = G__11792;
count__11781 = G__11793;
i__11782 = G__11794;
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
var len__7285__auto___11800 = arguments.length;
var i__7286__auto___11801 = (0);
while(true){
if((i__7286__auto___11801 < len__7285__auto___11800)){
args__7292__auto__.push((arguments[i__7286__auto___11801]));

var G__11802 = (i__7286__auto___11801 + (1));
i__7286__auto___11801 = G__11802;
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
var _STAR_depender_STAR_11799 = tiltontec.cell.base._STAR_depender_STAR_;
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
return cljs.core.some.call(null,((function (netkids,temp__4423__auto____$1,kids,temp__4423__auto__,and__6198__auto__,or__6210__auto__,_STAR_depender_STAR_11799,options__$1){
return (function (p1__11795_SHARP_){
return tiltontec.model.core.fget.call(null,what,p1__11795_SHARP_,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});})(netkids,temp__4423__auto____$1,kids,temp__4423__auto__,and__6198__auto__,or__6210__auto__,_STAR_depender_STAR_11799,options__$1))
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
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_11799;
}} else {
return null;
}
});

tiltontec.model.core.fget.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.fget.cljs$lang$applyTo = (function (seq11796){
var G__11797 = cljs.core.first.call(null,seq11796);
var seq11796__$1 = cljs.core.next.call(null,seq11796);
var G__11798 = cljs.core.first.call(null,seq11796__$1);
var seq11796__$2 = cljs.core.next.call(null,seq11796__$1);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(G__11797,G__11798,seq11796__$2);
});

tiltontec.model.core.fm_BANG_ = (function tiltontec$model$core$fm_BANG_(what,where){
return tiltontec.model.core.fget.call(null,what,where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"must?","must?",1639898554),true,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
var args__7292__auto__ = [];
var len__7285__auto___11812 = arguments.length;
var i__7286__auto___11813 = (0);
while(true){
if((i__7286__auto___11813 < len__7285__auto___11812)){
args__7292__auto__.push((arguments[i__7286__auto___11813]));

var G__11814 = (i__7286__auto___11813 + (1));
i__7286__auto___11813 = G__11814;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,slot,p__11808){
var vec__11809 = p__11808;
var me = cljs.core.nth.call(null,vec__11809,(0),null);
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

tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq11803){
var G__11804 = cljs.core.first.call(null,seq11803);
var seq11803__$1 = cljs.core.next.call(null,seq11803);
var G__11805 = cljs.core.first.call(null,seq11803__$1);
var seq11803__$2 = cljs.core.next.call(null,seq11803__$1);
var G__11806 = cljs.core.first.call(null,seq11803__$2);
var seq11803__$3 = cljs.core.next.call(null,seq11803__$2);
var G__11807 = cljs.core.first.call(null,seq11803__$3);
var seq11803__$4 = cljs.core.next.call(null,seq11803__$3);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11804,G__11805,G__11806,G__11807,seq11803__$4);
});


tiltontec.model.core.mdv_BANG_.cljs$lang$macro = true;
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__7292__auto__ = [];
var len__7285__auto___11818 = arguments.length;
var i__7286__auto___11819 = (0);
while(true){
if((i__7286__auto___11819 < len__7285__auto___11818)){
args__7292__auto__.push((arguments[i__7286__auto___11819]));

var G__11820 = (i__7286__auto___11819 + (1));
i__7286__auto___11819 = G__11820;
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

tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq11815){
var G__11816 = cljs.core.first.call(null,seq11815);
var seq11815__$1 = cljs.core.next.call(null,seq11815);
var G__11817 = cljs.core.first.call(null,seq11815__$1);
var seq11815__$2 = cljs.core.next.call(null,seq11815__$1);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic(G__11816,G__11817,seq11815__$2);
});


tiltontec.model.core.the_kids.cljs$lang$macro = true;
tiltontec.model.core.c_QMARK_kids = (function tiltontec$model$core$c_QMARK_kids(var_args){
var args__7292__auto__ = [];
var len__7285__auto___11824 = arguments.length;
var i__7286__auto___11825 = (0);
while(true){
if((i__7286__auto___11825 < len__7285__auto___11824)){
args__7292__auto__.push((arguments[i__7286__auto___11825]));

var G__11826 = (i__7286__auto___11825 + (1));
i__7286__auto___11825 = G__11826;
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

tiltontec.model.core.c_QMARK_kids.cljs$lang$applyTo = (function (seq11821){
var G__11822 = cljs.core.first.call(null,seq11821);
var seq11821__$1 = cljs.core.next.call(null,seq11821);
var G__11823 = cljs.core.first.call(null,seq11821__$1);
var seq11821__$2 = cljs.core.next.call(null,seq11821__$1);
return tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic(G__11822,G__11823,seq11821__$2);
});


tiltontec.model.core.c_QMARK_kids.cljs$lang$macro = true;
