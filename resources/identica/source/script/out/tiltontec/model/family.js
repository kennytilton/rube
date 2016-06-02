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
var len__5593__auto___27151 = arguments.length;
var i__5594__auto___27152 = (0);
while(true){
if((i__5594__auto___27152 < len__5593__auto___27151)){
args__5600__auto__.push((arguments[i__5594__auto___27152]));

var G__27153 = (i__5594__auto___27152 + (1));
i__5594__auto___27152 = G__27153;
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
var _STAR_depender_STAR_27150 = tiltontec.cell.base._STAR_depender_STAR_;
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
return cljs.core.some.call(null,((function (netkids,temp__4423__auto____$1,kids,temp__4423__auto__,and__4542__auto__,or__4554__auto__,_STAR_depender_STAR_27150,options__$1){
return (function (p1__27146_SHARP_){
return tiltontec.model.family.fget.call(null,what,p1__27146_SHARP_,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});})(netkids,temp__4423__auto____$1,kids,temp__4423__auto__,and__4542__auto__,or__4554__auto__,_STAR_depender_STAR_27150,options__$1))
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
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_27150;
}} else {
return null;
}
});

tiltontec.model.family.fget.cljs$lang$maxFixedArity = (2);

tiltontec.model.family.fget.cljs$lang$applyTo = (function (seq27147){
var G__27148 = cljs.core.first.call(null,seq27147);
var seq27147__$1 = cljs.core.next.call(null,seq27147);
var G__27149 = cljs.core.first.call(null,seq27147__$1);
var seq27147__$2 = cljs.core.next.call(null,seq27147__$1);
return tiltontec.model.family.fget.cljs$core$IFn$_invoke$arity$variadic(G__27148,G__27149,seq27147__$2);
});
tiltontec.model.family.fm_BANG_ = (function tiltontec$model$family$fm_BANG_(what,where){
return tiltontec.model.family.fget.call(null,what,where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"must?","must?",1639898554),true,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
tiltontec.model.family.mdv_BANG_ = (function tiltontec$model$family$mdv_BANG_(){
var args__5600__auto__ = [];
var len__5593__auto___27161 = arguments.length;
var i__5594__auto___27162 = (0);
while(true){
if((i__5594__auto___27162 < len__5593__auto___27161)){
args__5600__auto__.push((arguments[i__5594__auto___27162]));

var G__27163 = (i__5594__auto___27162 + (1));
i__5594__auto___27162 = G__27163;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((4) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((4)),(0))):null);
return tiltontec.model.family.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5601__auto__);
});

tiltontec.model.family.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,slot,p__27159){
var vec__27160 = p__27159;
var me = cljs.core.nth.call(null,vec__27160,(0),null);
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

tiltontec.model.family.mdv_BANG_.cljs$lang$applyTo = (function (seq27154){
var G__27155 = cljs.core.first.call(null,seq27154);
var seq27154__$1 = cljs.core.next.call(null,seq27154);
var G__27156 = cljs.core.first.call(null,seq27154__$1);
var seq27154__$2 = cljs.core.next.call(null,seq27154__$1);
var G__27157 = cljs.core.first.call(null,seq27154__$2);
var seq27154__$3 = cljs.core.next.call(null,seq27154__$2);
var G__27158 = cljs.core.first.call(null,seq27154__$3);
var seq27154__$4 = cljs.core.next.call(null,seq27154__$3);
return tiltontec.model.family.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27155,G__27156,G__27157,G__27158,seq27154__$4);
});

tiltontec.model.family.mdv_BANG_.cljs$lang$macro = true;
tiltontec.model.family.the_kids = (function tiltontec$model$family$the_kids(){
var args__5600__auto__ = [];
var len__5593__auto___27167 = arguments.length;
var i__5594__auto___27168 = (0);
while(true){
if((i__5594__auto___27168 < len__5593__auto___27167)){
args__5600__auto__.push((arguments[i__5594__auto___27168]));

var G__27169 = (i__5594__auto___27168 + (1));
i__5594__auto___27168 = G__27169;
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

tiltontec.model.family.the_kids.cljs$lang$applyTo = (function (seq27164){
var G__27165 = cljs.core.first.call(null,seq27164);
var seq27164__$1 = cljs.core.next.call(null,seq27164);
var G__27166 = cljs.core.first.call(null,seq27164__$1);
var seq27164__$2 = cljs.core.next.call(null,seq27164__$1);
return tiltontec.model.family.the_kids.cljs$core$IFn$_invoke$arity$variadic(G__27165,G__27166,seq27164__$2);
});

tiltontec.model.family.the_kids.cljs$lang$macro = true;
tiltontec.model.family.c_QMARK_kids = (function tiltontec$model$family$c_QMARK_kids(){
var args__5600__auto__ = [];
var len__5593__auto___27173 = arguments.length;
var i__5594__auto___27174 = (0);
while(true){
if((i__5594__auto___27174 < len__5593__auto___27173)){
args__5600__auto__.push((arguments[i__5594__auto___27174]));

var G__27175 = (i__5594__auto___27174 + (1));
i__5594__auto___27174 = G__27175;
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

tiltontec.model.family.c_QMARK_kids.cljs$lang$applyTo = (function (seq27170){
var G__27171 = cljs.core.first.call(null,seq27170);
var seq27170__$1 = cljs.core.next.call(null,seq27170);
var G__27172 = cljs.core.first.call(null,seq27170__$1);
var seq27170__$2 = cljs.core.next.call(null,seq27170__$1);
return tiltontec.model.family.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic(G__27171,G__27172,seq27170__$2);
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
var seq__27176 = cljs.core.seq.call(null,lostks);
var chunk__27177 = null;
var count__27178 = (0);
var i__27179 = (0);
while(true){
if((i__27179 < count__27178)){
var k = cljs.core._nth.call(null,chunk__27177,i__27179);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__27180 = seq__27176;
var G__27181 = chunk__27177;
var G__27182 = count__27178;
var G__27183 = (i__27179 + (1));
seq__27176 = G__27180;
chunk__27177 = G__27181;
count__27178 = G__27182;
i__27179 = G__27183;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27176);
if(temp__4425__auto__){
var seq__27176__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27176__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__27176__$1);
var G__27184 = cljs.core.chunk_rest.call(null,seq__27176__$1);
var G__27185 = c__5338__auto__;
var G__27186 = cljs.core.count.call(null,c__5338__auto__);
var G__27187 = (0);
seq__27176 = G__27184;
chunk__27177 = G__27185;
count__27178 = G__27186;
i__27179 = G__27187;
continue;
} else {
var k = cljs.core.first.call(null,seq__27176__$1);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__27188 = cljs.core.next.call(null,seq__27176__$1);
var G__27189 = null;
var G__27190 = (0);
var G__27191 = (0);
seq__27176 = G__27188;
chunk__27177 = G__27189;
count__27178 = G__27190;
i__27179 = G__27191;
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
