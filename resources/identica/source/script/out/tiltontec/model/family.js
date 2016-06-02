// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.model.family');
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
cljs.core.derive.call(null,tiltontec.cell.base.ia_types,new cljs.core.Keyword("tiltontec.model.family","family","tiltontec.model.family/family",626272545),new cljs.core.Keyword("tiltontec.cell.base","model","tiltontec.cell.base/model",284743830));
tiltontec.model.family._STAR_par_STAR_ = null;
tiltontec.model.family.fget_EQ_ = (function tiltontec$model$family$fget_EQ_(seek,poss){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,poss))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"any-ref?","any-ref?",-153183574,null),new cljs.core.Symbol(null,"poss","poss",-265534520,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,seek)){
return seek.call(null,poss);
} else {
if((seek instanceof cljs.core.Keyword)){
return cljs.core._EQ_.call(null,seek,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,poss)));
} else {
return cljs.core._EQ_.call(null,seek,poss);

}
}
});
tiltontec.model.family.fget = (function tiltontec$model$family$fget(){
var args__5600__auto__ = [];
var len__5593__auto___15399 = arguments.length;
var i__5594__auto___15400 = (0);
while(true){
if((i__5594__auto___15400 < len__5593__auto___15399)){
args__5600__auto__.push((arguments[i__5594__auto___15400]));

var G__15401 = (i__5594__auto___15400 + (1));
i__5594__auto___15400 = G__15401;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.model.family.fget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.model.family.fget.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__4542__auto__ = where;
if(cljs.core.truth_(and__4542__auto__)){
return what;
} else {
return and__4542__auto__;
}
})())){
var options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"wocd?","wocd?",-195637516),true], null),cljs.core.apply.call(null,cljs.core.hash_map,options));
var _STAR_depender_STAR_15398 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"wocd?","wocd?",-195637516).cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);

try{var or__4554__auto__ = (function (){var and__4542__auto__ = new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__4542__auto__)){
var and__4542__auto____$1 = tiltontec.model.family.fget_EQ_.call(null,what,where);
if(cljs.core.truth_(and__4542__auto____$1)){
return where;
} else {
return and__4542__auto____$1;
}
} else {
return and__4542__auto__;
}
})();
if(cljs.core.truth_(or__4554__auto__)){
return or__4554__auto__;
} else {
var or__4554__auto____$1 = (function (){var and__4542__auto__ = new cljs.core.Keyword(null,"inside?","inside?",639243696).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__4542__auto__)){
var temp__4423__auto__ = tiltontec.model.base.md_get.call(null,where,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4423__auto__)){
var kids = temp__4423__auto__;
var temp__4423__auto____$1 = cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"skip","skip",602715391).cljs$core$IFn$_invoke$arity$1(options__$1)], true),kids);
if(cljs.core.truth_(temp__4423__auto____$1)){
var netkids = temp__4423__auto____$1;
return cljs.core.some.call(null,((function (netkids,temp__4423__auto____$1,kids,temp__4423__auto__,and__4542__auto__,or__4554__auto__,_STAR_depender_STAR_15398,options__$1){
return (function (p1__15394_SHARP_){
return tiltontec.model.family.fget.call(null,what,p1__15394_SHARP_,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});})(netkids,temp__4423__auto____$1,kids,temp__4423__auto__,and__4542__auto__,or__4554__auto__,_STAR_depender_STAR_15398,options__$1))
,netkids);
} else {
return tiltontec.util.base.call_trc.call(null,":no-net-kids");
}
} else {
return tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"inside-no-kids","inside-no-kids",-1437068961),cljs.core.deref.call(null,where));
}
} else {
return and__4542__auto__;
}
})();
if(cljs.core.truth_(or__4554__auto____$1)){
return or__4554__auto____$1;
} else {
var or__4554__auto____$2 = (function (){var and__4542__auto__ = new cljs.core.Keyword(null,"up?","up?",77854972).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__4542__auto__)){
var temp__4425__auto__ = new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where));
if(cljs.core.truth_(temp__4425__auto__)){
var par = temp__4425__auto__;
return tiltontec.model.family.fget.call(null,what,par,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"skip","skip",602715391),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true);
} else {
return null;
}
} else {
return and__4542__auto__;
}
})();
if(cljs.core.truth_(or__4554__auto____$2)){
return or__4554__auto____$2;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"must?","must?",1639898554).cljs$core$IFn$_invoke$arity$1(options__$1))){
return tiltontec.util.core.err.call(null,new cljs.core.Keyword(null,"fget-must-failed","fget-must-failed",237242954),what,where,options__$1);
} else {
return null;
}
}
}
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_15398;
}} else {
return null;
}
});

tiltontec.model.family.fget.cljs$lang$maxFixedArity = (2);

tiltontec.model.family.fget.cljs$lang$applyTo = (function (seq15395){
var G__15396 = cljs.core.first.call(null,seq15395);
var seq15395__$1 = cljs.core.next.call(null,seq15395);
var G__15397 = cljs.core.first.call(null,seq15395__$1);
var seq15395__$2 = cljs.core.next.call(null,seq15395__$1);
return tiltontec.model.family.fget.cljs$core$IFn$_invoke$arity$variadic(G__15396,G__15397,seq15395__$2);
});
tiltontec.model.family.fm_BANG_ = (function tiltontec$model$family$fm_BANG_(what,where){
return tiltontec.model.family.fget.call(null,what,where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"must?","must?",1639898554),true,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
tiltontec.model.family.mdv_BANG_ = (function tiltontec$model$family$mdv_BANG_(){
var args__5600__auto__ = [];
var len__5593__auto___15409 = arguments.length;
var i__5594__auto___15410 = (0);
while(true){
if((i__5594__auto___15410 < len__5593__auto___15409)){
args__5600__auto__.push((arguments[i__5594__auto___15410]));

var G__15411 = (i__5594__auto___15410 + (1));
i__5594__auto___15410 = G__15411;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((4) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((4)),(0))):null);
return tiltontec.model.family.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5601__auto__);
});

tiltontec.model.family.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,slot,p__15407){
var vec__15408 = p__15407;
var me = cljs.core.nth.call(null,vec__15408,(0),null);
var me__$1 = (function (){var or__4554__auto__ = me;
if(cljs.core.truth_(or__4554__auto__)){
return or__4554__auto__;
} else {
return new cljs.core.Symbol(null,"me","me",1501524834,null);
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.base","md-get","tiltontec.model.base/md-get",-1259419266,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.family","fm!","tiltontec.model.family/fm!",204792444,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,what),cljs.core._conj.call(null,cljs.core.List.EMPTY,me__$1))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,slot))));
});

tiltontec.model.family.mdv_BANG_.cljs$lang$maxFixedArity = (4);

tiltontec.model.family.mdv_BANG_.cljs$lang$applyTo = (function (seq15402){
var G__15403 = cljs.core.first.call(null,seq15402);
var seq15402__$1 = cljs.core.next.call(null,seq15402);
var G__15404 = cljs.core.first.call(null,seq15402__$1);
var seq15402__$2 = cljs.core.next.call(null,seq15402__$1);
var G__15405 = cljs.core.first.call(null,seq15402__$2);
var seq15402__$3 = cljs.core.next.call(null,seq15402__$2);
var G__15406 = cljs.core.first.call(null,seq15402__$3);
var seq15402__$4 = cljs.core.next.call(null,seq15402__$3);
return tiltontec.model.family.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15403,G__15404,G__15405,G__15406,seq15402__$4);
});

tiltontec.model.family.mdv_BANG_.cljs$lang$macro = true;
tiltontec.model.family.the_kids = (function tiltontec$model$family$the_kids(){
var args__5600__auto__ = [];
var len__5593__auto___15415 = arguments.length;
var i__5594__auto___15416 = (0);
while(true){
if((i__5594__auto___15416 < len__5593__auto___15415)){
args__5600__auto__.push((arguments[i__5594__auto___15416]));

var G__15417 = (i__5594__auto___15416 + (1));
i__5594__auto___15416 = G__15417;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.model.family.the_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.model.family.the_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.family","*par*","tiltontec.model.family/*par*",-208021890,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","remove","cljs.core/remove",20102034,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),tree)))))))))))))));
});

tiltontec.model.family.the_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.family.the_kids.cljs$lang$applyTo = (function (seq15412){
var G__15413 = cljs.core.first.call(null,seq15412);
var seq15412__$1 = cljs.core.next.call(null,seq15412);
var G__15414 = cljs.core.first.call(null,seq15412__$1);
var seq15412__$2 = cljs.core.next.call(null,seq15412__$1);
return tiltontec.model.family.the_kids.cljs$core$IFn$_invoke$arity$variadic(G__15413,G__15414,seq15412__$2);
});

tiltontec.model.family.the_kids.cljs$lang$macro = true;
tiltontec.model.family.c_QMARK_kids = (function tiltontec$model$family$c_QMARK_kids(){
var args__5600__auto__ = [];
var len__5593__auto___15421 = arguments.length;
var i__5594__auto___15422 = (0);
while(true){
if((i__5594__auto___15422 < len__5593__auto___15421)){
args__5600__auto__.push((arguments[i__5594__auto___15422]));

var G__15423 = (i__5594__auto___15422 + (1));
i__5594__auto___15422 = G__15423;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.model.family.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.model.family.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.family","c?","tiltontec.model.family/c?",-423067848,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null)),tree)))))));
});

tiltontec.model.family.c_QMARK_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.family.c_QMARK_kids.cljs$lang$applyTo = (function (seq15418){
var G__15419 = cljs.core.first.call(null,seq15418);
var seq15418__$1 = cljs.core.next.call(null,seq15418);
var G__15420 = cljs.core.first.call(null,seq15418__$1);
var seq15418__$2 = cljs.core.next.call(null,seq15418__$1);
return tiltontec.model.family.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic(G__15419,G__15420,seq15418__$2);
});

tiltontec.model.family.c_QMARK_kids.cljs$lang$macro = true;
tiltontec.model.family.mm_obj = Object;
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.model.family","family","tiltontec.model.family/family",626272545)], null),(function (_,___$1,newk,oldk,___$2){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks)){
return null;
} else {
var seq__15424 = cljs.core.seq.call(null,lostks);
var chunk__15425 = null;
var count__15426 = (0);
var i__15427 = (0);
while(true){
if((i__15427 < count__15426)){
var k = cljs.core._nth.call(null,chunk__15425,i__15427);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__15428 = seq__15424;
var G__15429 = chunk__15425;
var G__15430 = count__15426;
var G__15431 = (i__15427 + (1));
seq__15424 = G__15428;
chunk__15425 = G__15429;
count__15426 = G__15430;
i__15427 = G__15431;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15424);
if(temp__4425__auto__){
var seq__15424__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15424__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__15424__$1);
var G__15432 = cljs.core.chunk_rest.call(null,seq__15424__$1);
var G__15433 = c__5338__auto__;
var G__15434 = cljs.core.count.call(null,c__5338__auto__);
var G__15435 = (0);
seq__15424 = G__15432;
chunk__15425 = G__15433;
count__15426 = G__15434;
i__15427 = G__15435;
continue;
} else {
var k = cljs.core.first.call(null,seq__15424__$1);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__15436 = cljs.core.next.call(null,seq__15424__$1);
var G__15437 = null;
var G__15438 = (0);
var G__15439 = (0);
seq__15424 = G__15436;
chunk__15425 = G__15437;
count__15426 = G__15438;
i__15427 = G__15439;
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
