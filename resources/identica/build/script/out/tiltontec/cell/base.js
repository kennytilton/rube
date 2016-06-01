// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.cell.base');
goog.require('cljs.core');
goog.require('tiltontec.util.base');
goog.require('cljs.test');
goog.require('tiltontec.util.core');
tiltontec.cell.base._PLUS_pulse_PLUS_ = cljs.core.atom.call(null,(0));
tiltontec.cell.base.cells_init = (function tiltontec$cell$base$cells_init(){
return cljs.core.reset_BANG_.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_,(0));
});
tiltontec.cell.base._STAR_causation_STAR_ = cljs.core.List.EMPTY;
tiltontec.cell.base._STAR_call_stack_STAR_ = null;
/**
 * *depender* let's us differentiate between the call stack and
 * and dependency. The problem with overloading *call-stack* with both roles
 * is that we miss cyclic reentrance when we use without-c-dependency in a
 * rule to get once behavior or just when fm-traversing to find someone
 */
tiltontec.cell.base._STAR_depender_STAR_ = null;
tiltontec.cell.base._STAR_defer_changes_STAR_ = false;
tiltontec.cell.base._PLUS_client_q_handler_PLUS_ = cljs.core.atom.call(null,null);
if(typeof tiltontec.cell.base.unbound !== 'undefined'){
} else {
tiltontec.cell.base.unbound = cljs.core.gensym.call(null,"unbound-cell-value");
}
if(typeof tiltontec.cell.base.uncurrent !== 'undefined'){
} else {
tiltontec.cell.base.uncurrent = cljs.core.gensym.call(null,"uncurrent-formulaic-value");
}
tiltontec.cell.base._STAR_not_to_be_STAR_ = false;
tiltontec.cell.base._STAR_unfinished_business_STAR_ = null;
tiltontec.cell.base._STAR_within_integrity_STAR_ = false;
tiltontec.cell.base._STAR_finbiz_id_STAR_ = (0);
tiltontec.cell.base._STAR_c_prop_depth_STAR_ = (0);
tiltontec.cell.base._PLUS_c_debug_PLUS_ = cljs.core.atom.call(null,false);
tiltontec.cell.base._PLUS_stop_PLUS_ = cljs.core.atom.call(null,false);
tiltontec.cell.base.cells_reset = (function tiltontec$cell$base$cells_reset(){
var args21760 = [];
var len__5593__auto___21763 = arguments.length;
var i__5594__auto___21764 = (0);
while(true){
if((i__5594__auto___21764 < len__5593__auto___21763)){
args21760.push((arguments[i__5594__auto___21764]));

var G__21765 = (i__5594__auto___21764 + (1));
i__5594__auto___21764 = G__21765;
continue;
} else {
}
break;
}

var G__21762 = args21760.length;
switch (G__21762) {
case 0:
return tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21760.length)].join('')));

}
});

tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.cell.base.cells_reset.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$1 = (function (options){
cljs.core.reset_BANG_.call(null,tiltontec.cell.base._PLUS_c_debug_PLUS_,new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$2(options,false));

cljs.core.reset_BANG_.call(null,cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_),(0));

return cljs.core.reset_BANG_.call(null,tiltontec.cell.base._PLUS_client_q_handler_PLUS_,new cljs.core.Keyword(null,"client-queue-handler","client-queue-handler",-817174181).cljs$core$IFn$_invoke$arity$1(options));
});

tiltontec.cell.base.cells_reset.cljs$lang$maxFixedArity = 1;
tiltontec.cell.base.without_c_dependency = (function tiltontec$cell$base$without_c_dependency(){
var args__5600__auto__ = [];
var len__5593__auto___21770 = arguments.length;
var i__5594__auto___21771 = (0);
while(true){
if((i__5594__auto___21771 < len__5593__auto___21770)){
args__5600__auto__.push((arguments[i__5594__auto___21771]));

var G__21772 = (i__5594__auto___21771 + (1));
i__5594__auto___21771 = G__21772;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))))),body)));
});

tiltontec.cell.base.without_c_dependency.cljs$lang$maxFixedArity = (2);

tiltontec.cell.base.without_c_dependency.cljs$lang$applyTo = (function (seq21767){
var G__21768 = cljs.core.first.call(null,seq21767);
var seq21767__$1 = cljs.core.next.call(null,seq21767);
var G__21769 = cljs.core.first.call(null,seq21767__$1);
var seq21767__$2 = cljs.core.next.call(null,seq21767__$1);
return tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic(G__21768,G__21769,seq21767__$2);
});

tiltontec.cell.base.without_c_dependency.cljs$lang$macro = true;
tiltontec.cell.base._PLUS_cause = (function tiltontec$cell$base$_PLUS_cause(){
return cljs.core.first.call(null,tiltontec.cell.base._STAR_causation_STAR_);
});
tiltontec.cell.base.c_stopper = (function tiltontec$cell$base$c_stopper(why){
return cljs.core.reset_BANG_.call(null,tiltontec.cell.base._PLUS_stop_PLUS_,why);
});
tiltontec.cell.base._PLUS_c_stopper_PLUS_ = cljs.core.atom.call(null,tiltontec.cell.base.c_stopper);
tiltontec.cell.base.c_stop = (function tiltontec$cell$base$c_stop(){
var args21773 = [];
var len__5593__auto___21776 = arguments.length;
var i__5594__auto___21777 = (0);
while(true){
if((i__5594__auto___21777 < len__5593__auto___21776)){
args21773.push((arguments[i__5594__auto___21777]));

var G__21778 = (i__5594__auto___21777 + (1));
i__5594__auto___21777 = G__21778;
continue;
} else {
}
break;
}

var G__21775 = args21773.length;
switch (G__21775) {
case 0:
return tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21773.length)].join('')));

}
});

tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.cell.base.c_stop.call(null,true);
});

tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$1 = (function (why){
return cljs.core.deref.call(null,tiltontec.cell.base._PLUS_c_stopper_PLUS_).call(null,why);
});

tiltontec.cell.base.c_stop.cljs$lang$maxFixedArity = 1;
tiltontec.cell.base.c_stopped = (function tiltontec$cell$base$c_stopped(){
return cljs.core.deref.call(null,tiltontec.cell.base._PLUS_stop_PLUS_);
});
tiltontec.cell.base.un_stopped = (function tiltontec$cell$base$un_stopped(){
var args__5600__auto__ = [];
var len__5593__auto___21783 = arguments.length;
var i__5594__auto___21784 = (0);
while(true){
if((i__5594__auto___21784 < len__5593__auto___21783)){
args__5600__auto__.push((arguments[i__5594__auto___21784]));

var G__21785 = (i__5594__auto___21784 + (1));
i__5594__auto___21784 = G__21785;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","+stop+","tiltontec.cell.base/+stop+",1421569483,null)))))),body)));
});

tiltontec.cell.base.un_stopped.cljs$lang$maxFixedArity = (2);

tiltontec.cell.base.un_stopped.cljs$lang$applyTo = (function (seq21780){
var G__21781 = cljs.core.first.call(null,seq21780);
var seq21780__$1 = cljs.core.next.call(null,seq21780);
var G__21782 = cljs.core.first.call(null,seq21780__$1);
var seq21780__$2 = cljs.core.next.call(null,seq21780__$1);
return tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic(G__21781,G__21782,seq21780__$2);
});

tiltontec.cell.base.un_stopped.cljs$lang$macro = true;
tiltontec.cell.base.ustack$ = (function tiltontec$cell$base$ustack$(tag){
return [cljs.core.str(tag),cljs.core.str("ustack> "),cljs.core.str(cljs.core.vec.call(null,cljs.core.map.call(null,(function (c){
return new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
}),tiltontec.cell.base._STAR_call_stack_STAR_)))].join('');
});
tiltontec.cell.base.c_assert = (function tiltontec$cell$base$c_assert(){
var args21786 = [];
var len__5593__auto___21792 = arguments.length;
var i__5594__auto___21793 = (0);
while(true){
if((i__5594__auto___21793 < len__5593__auto___21792)){
args21786.push((arguments[i__5594__auto___21793]));

var G__21794 = (i__5594__auto___21793 + (1));
i__5594__auto___21793 = G__21794;
continue;
} else {
}
break;
}

var G__21791 = args21786.length;
switch (G__21791) {
case 1:
return tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__5612__auto__ = (new cljs.core.IndexedSeq(args21786.slice((2)),(0)));
return tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5612__auto__);

}
});

tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1 = (function (assertion){
if(cljs.core.truth_(assertion)){
return null;
} else {
return tiltontec.util.core.err.call(null,"c-assert anon failed");
}
});

tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$variadic = (function (assertion,fmt$,fmt_args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
if(cljs.core.truth_(assertion)){
return null;
} else {
return cljs.core.apply.call(null,new cljs.core.Var(function(){return tiltontec.util.core.err;},new cljs.core.Symbol("tiltontec.util.core","err","tiltontec.util.core/err",-267832473,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.util.core","tiltontec.util.core",-133870969,null),new cljs.core.Symbol(null,"err","err",-448925678,null),"src/tiltontec/util/core.cljc",16,3,45,45,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.util.core.err)?tiltontec.util.core.err.cljs$lang$test:null)])),[cljs.core.str("c-assert> "),cljs.core.str(fmt$),cljs.core.str(fmt_args)].join(''));
}
}
});

tiltontec.cell.base.c_assert.cljs$lang$applyTo = (function (seq21787){
var G__21788 = cljs.core.first.call(null,seq21787);
var seq21787__$1 = cljs.core.next.call(null,seq21787);
var G__21789 = cljs.core.first.call(null,seq21787__$1);
var seq21787__$2 = cljs.core.next.call(null,seq21787__$1);
return tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$variadic(G__21788,G__21789,seq21787__$2);
});

tiltontec.cell.base.c_assert.cljs$lang$maxFixedArity = (2);
tiltontec.cell.base.c_break = (function tiltontec$cell$base$c_break(){
var args__5600__auto__ = [];
var len__5593__auto___21797 = arguments.length;
var i__5594__auto___21798 = (0);
while(true){
if((i__5594__auto___21798 < len__5593__auto___21797)){
args__5600__auto__.push((arguments[i__5594__auto___21798]));

var G__21799 = (i__5594__auto___21798 + (1));
i__5594__auto___21798 = G__21799;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((0) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((0)),(0))):null);
return tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic(argseq__5601__auto__);
});

tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
return tiltontec.util.core.err.call(null,[cljs.core.str(args)].join(''));
}
});

tiltontec.cell.base.c_break.cljs$lang$maxFixedArity = (0);

tiltontec.cell.base.c_break.cljs$lang$applyTo = (function (seq21796){
return tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21796));
});
tiltontec.cell.base.c_warn = (function tiltontec$cell$base$c_warn(){
var args__5600__auto__ = [];
var len__5593__auto___21801 = arguments.length;
var i__5594__auto___21802 = (0);
while(true){
if((i__5594__auto___21802 < len__5593__auto___21801)){
args__5600__auto__.push((arguments[i__5594__auto___21802]));

var G__21803 = (i__5594__auto___21802 + (1));
i__5594__auto___21802 = G__21803;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((0) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((0)),(0))):null);
return tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5601__auto__);
});

tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
return cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"WARNING: ",args));
}
});

tiltontec.cell.base.c_warn.cljs$lang$maxFixedArity = (0);

tiltontec.cell.base.c_warn.cljs$lang$applyTo = (function (seq21800){
return tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21800));
});
tiltontec.cell.base.ia_types = cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.make_hierarchy.call(null),new cljs.core.Keyword("tiltontec.cell.base","model","tiltontec.cell.base/model",284743830),new cljs.core.Keyword("tiltontec.cell.base","object","tiltontec.cell.base/object",1595927066)),new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071),new cljs.core.Keyword("tiltontec.cell.base","object","tiltontec.cell.base/object",1595927066)),new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037),new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071));
tiltontec.cell.base.ia_type = (function tiltontec$cell$base$ia_type(it){
if((it instanceof cljs.core.Atom)){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,it));
} else {
return cljs.core.type.call(null,it);

}
});
tiltontec.cell.base.ia_type_QMARK_ = (function tiltontec$cell$base$ia_type_QMARK_(it,typ){
return cljs.core.isa_QMARK_.call(null,tiltontec.cell.base.ia_types,tiltontec.cell.base.ia_type.call(null,it),typ);
});
tiltontec.cell.base.c_formula_QMARK_ = (function tiltontec$cell$base$c_formula_QMARK_(c){
return tiltontec.cell.base.ia_type_QMARK_.call(null,c,new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037));
});
tiltontec.cell.base.c_ref_QMARK_ = (function tiltontec$cell$base$c_ref_QMARK_(x){
return tiltontec.cell.base.ia_type_QMARK_.call(null,x,new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071));
});
tiltontec.cell.base.c_me = (function tiltontec$cell$base$c_me(ref){
return new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_slot = (function tiltontec$cell$base$c_slot(ref){
return new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_state = (function tiltontec$cell$base$c_state(ref){
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_input_QMARK_ = (function tiltontec$cell$base$c_input_QMARK_(ref){
return new cljs.core.Keyword(null,"input?","input?",-1792843173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_rule = (function tiltontec$cell$base$c_rule(ref){
return new cljs.core.Keyword(null,"rule","rule",729973257).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_pulse = (function tiltontec$cell$base$c_pulse(ref){
return new cljs.core.Keyword(null,"pulse","pulse",-244494476).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_pulse_last_changed = (function tiltontec$cell$base$c_pulse_last_changed(ref){
return new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_pulse_observed = (function tiltontec$cell$base$c_pulse_observed(ref){
return new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_useds = (function tiltontec$cell$base$c_useds(ref){
return new cljs.core.Keyword(null,"useds","useds",621350967).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_users = (function tiltontec$cell$base$c_users(ref){
return new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_callers = (function tiltontec$cell$base$c_callers(ref){
return new cljs.core.Keyword(null,"callers","callers",-1991542784).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_optimize = (function tiltontec$cell$base$c_optimize(ref){
return new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_ephemeral_QMARK_ = (function tiltontec$cell$base$c_ephemeral_QMARK_(ref){
return new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_lazy = (function tiltontec$cell$base$c_lazy(ref){
return new cljs.core.Keyword(null,"lazy","lazy",-424547181).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_synaptic_QMARK_ = (function tiltontec$cell$base$c_synaptic_QMARK_(ref){
return new cljs.core.Keyword(null,"synaptic?","synaptic?",-2113061248).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});
tiltontec.cell.base.c_value = (function tiltontec$cell$base$c_value(c){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"any-ref?","any-ref?",-153183574,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_((function (){var and__4542__auto__ = tiltontec.cell.base.c_ref_QMARK_.call(null,c);
if(cljs.core.truth_(and__4542__auto__)){
return cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c));
} else {
return and__4542__auto__;
}
})())){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
} else {
return cljs.core.deref.call(null,c);

}
});
tiltontec.cell.base.c_optimized_away_QMARK_ = (function tiltontec$cell$base$c_optimized_away_QMARK_(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
return (!(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c)))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimized-away","optimized-away",876765856),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c))));
} else {
return true;

}
});
tiltontec.cell.base.c_model = (function tiltontec$cell$base$c_model(rc){
return new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc));
});
tiltontec.cell.base.c_slot_name = (function tiltontec$cell$base$c_slot_name(rc){
return new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc));
});
tiltontec.cell.base.c_value_state = (function tiltontec$cell$base$c_value_state(rc){
var v = tiltontec.cell.base.c_value.call(null,rc);
if(cljs.core._EQ_.call(null,v,tiltontec.cell.base.unbound)){
return new cljs.core.Keyword(null,"unbound","unbound",-1366326654);
} else {
if(cljs.core._EQ_.call(null,v,tiltontec.cell.base.uncurrent)){
return new cljs.core.Keyword(null,"uncurrent","uncurrent",-217246265);
} else {
return new cljs.core.Keyword(null,"valid","valid",155614240);

}
}
});
tiltontec.cell.base.c_unbound_QMARK_ = (function tiltontec$cell$base$c_unbound_QMARK_(rc){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unbound","unbound",-1366326654),tiltontec.cell.base.c_value_state.call(null,rc));
});
tiltontec.cell.base.c_valid_QMARK_ = (function tiltontec$cell$base$c_valid_QMARK_(rc){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"valid","valid",155614240),tiltontec.cell.base.c_value_state.call(null,rc));
});
tiltontec.cell.base.caller_ensure = (function tiltontec$cell$base$caller_ensure(used,new_caller){
return cljs.core.swap_BANG_.call(null,used,cljs.core.assoc,new cljs.core.Keyword(null,"callers","callers",-1991542784),cljs.core.conj.call(null,tiltontec.cell.base.c_callers.call(null,used),new_caller));
});
tiltontec.cell.base.caller_drop = (function tiltontec$cell$base$caller_drop(used,caller){
return cljs.core.swap_BANG_.call(null,used,cljs.core.assoc,new cljs.core.Keyword(null,"callers","callers",-1991542784),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),caller));
});
tiltontec.cell.base.unlink_from_callers = (function tiltontec$cell$base$unlink_from_callers(c){
var iter__5307__auto___21812 = (function tiltontec$cell$base$unlink_from_callers_$_iter__21808(s__21809){
return (new cljs.core.LazySeq(null,(function (){
var s__21809__$1 = s__21809;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21809__$1);
if(temp__4425__auto__){
var s__21809__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21809__$2)){
var c__5305__auto__ = cljs.core.chunk_first.call(null,s__21809__$2);
var size__5306__auto__ = cljs.core.count.call(null,c__5305__auto__);
var b__21811 = cljs.core.chunk_buffer.call(null,size__5306__auto__);
if((function (){var i__21810 = (0);
while(true){
if((i__21810 < size__5306__auto__)){
var caller = cljs.core._nth.call(null,c__5305__auto__,i__21810);
cljs.core.chunk_append.call(null,b__21811,tiltontec.cell.base.caller_drop.call(null,c,caller));

var G__21813 = (i__21810 + (1));
i__21810 = G__21813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21811),tiltontec$cell$base$unlink_from_callers_$_iter__21808.call(null,cljs.core.chunk_rest.call(null,s__21809__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21811),null);
}
} else {
var caller = cljs.core.first.call(null,s__21809__$2);
return cljs.core.cons.call(null,tiltontec.cell.base.caller_drop.call(null,c,caller),tiltontec$cell$base$unlink_from_callers_$_iter__21808.call(null,cljs.core.rest.call(null,s__21809__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__5307__auto___21812.call(null,tiltontec.cell.base.c_callers.call(null,c));

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),c], null),null);
});
tiltontec.cell.base.c_slots = (function tiltontec$cell$base$c_slots(c,k){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"c-ref?","c-ref?",794690162,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return cljs.core.set.call(null,cljs.core.map.call(null,tiltontec.cell.base.c_slot,k.call(null,cljs.core.deref.call(null,c))));
});
tiltontec.cell.base.md_ref_QMARK_ = (function tiltontec$cell$base$md_ref_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
if(typeof tiltontec.cell.base.mdead_QMARK_ !== 'undefined'){
} else {
tiltontec.cell.base.mdead_QMARK_ = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return tiltontec.cell.base.ia_types;},new cljs.core.Symbol("tiltontec.cell.base","ia-types","tiltontec.cell.base/ia-types",436375603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.cell.base","tiltontec.cell.base",-1575671422,null),new cljs.core.Symbol(null,"ia-types","ia-types",322849110,null),"src/tiltontec/cell/base.cljc",14,1,104,104,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.cell.base.ia_types)?tiltontec.cell.base.ia_types.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.base","mdead?"),((function (method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__,hierarchy__5452__auto__){
return (function (me){
if(cljs.core.truth_((function (){var or__4554__auto__ = (me == null);
if(or__4554__auto__){
return or__4554__auto__;
} else {
return tiltontec.cell.base.md_ref_QMARK_.call(null,me);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core.list(new cljs.core.Symbol(null,"md-ref?","md-ref?",1571167727,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))))].join('')));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.type.call(null,(cljs.core.truth_(me)?cljs.core.deref.call(null,me):null))], null);
});})(method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__,hierarchy__5452__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.base.mdead_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
return false;
}));
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.base.md_slot_owning_QMARK_ = (function tiltontec$cell$base$md_slot_owning_QMARK_(class_name,slot_name){
return false;
});
