// Compiled by ClojureScript 1.9.36 {}
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
tiltontec.cell.base.pcell = (function tiltontec$cell$base$pcell(_AMPERSAND_form,_AMPERSAND_env,tag,c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pcell","pcell",-240144130)),(function (){var x__7044__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-slot","tiltontec.cell.base/c-slot",1453031347,null)),(function (){var x__7044__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-state","tiltontec.cell.base/c-state",1205895034,null)),(function (){var x__7044__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.cell.base.pcell.cljs$lang$macro = true;
tiltontec.cell.base.cells_reset = (function tiltontec$cell$base$cells_reset(var_args){
var args41282 = [];
var len__7285__auto___41285 = arguments.length;
var i__7286__auto___41286 = (0);
while(true){
if((i__7286__auto___41286 < len__7285__auto___41285)){
args41282.push((arguments[i__7286__auto___41286]));

var G__41287 = (i__7286__auto___41286 + (1));
i__7286__auto___41286 = G__41287;
continue;
} else {
}
break;
}

var G__41284 = args41282.length;
switch (G__41284) {
case 0:
return tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41282.length)].join('')));

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

tiltontec.cell.base.without_c_dependency = (function tiltontec$cell$base$without_c_dependency(var_args){
var args__7292__auto__ = [];
var len__7285__auto___41292 = arguments.length;
var i__7286__auto___41293 = (0);
while(true){
if((i__7286__auto___41293 < len__7285__auto___41292)){
args__7292__auto__.push((arguments[i__7286__auto___41293]));

var G__41294 = (i__7286__auto___41293 + (1));
i__7286__auto___41293 = G__41294;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),body)));
});

tiltontec.cell.base.without_c_dependency.cljs$lang$maxFixedArity = (2);

tiltontec.cell.base.without_c_dependency.cljs$lang$applyTo = (function (seq41289){
var G__41290 = cljs.core.first.call(null,seq41289);
var seq41289__$1 = cljs.core.next.call(null,seq41289);
var G__41291 = cljs.core.first.call(null,seq41289__$1);
var seq41289__$2 = cljs.core.next.call(null,seq41289__$1);
return tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic(G__41290,G__41291,seq41289__$2);
});


tiltontec.cell.base.without_c_dependency.cljs$lang$macro = true;
tiltontec.cell.base._PLUS_cause = (function tiltontec$cell$base$_PLUS_cause(){
return cljs.core.first.call(null,tiltontec.cell.base._STAR_causation_STAR_);
});
tiltontec.cell.base.c_stopper = (function tiltontec$cell$base$c_stopper(why){
return cljs.core.reset_BANG_.call(null,tiltontec.cell.base._PLUS_stop_PLUS_,why);
});
tiltontec.cell.base._PLUS_c_stopper_PLUS_ = cljs.core.atom.call(null,tiltontec.cell.base.c_stopper);
tiltontec.cell.base.c_stop = (function tiltontec$cell$base$c_stop(var_args){
var args41295 = [];
var len__7285__auto___41298 = arguments.length;
var i__7286__auto___41299 = (0);
while(true){
if((i__7286__auto___41299 < len__7285__auto___41298)){
args41295.push((arguments[i__7286__auto___41299]));

var G__41300 = (i__7286__auto___41299 + (1));
i__7286__auto___41299 = G__41300;
continue;
} else {
}
break;
}

var G__41297 = args41295.length;
switch (G__41297) {
case 0:
return tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41295.length)].join('')));

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
tiltontec.cell.base.un_stopped = (function tiltontec$cell$base$un_stopped(var_args){
var args__7292__auto__ = [];
var len__7285__auto___41305 = arguments.length;
var i__7286__auto___41306 = (0);
while(true){
if((i__7286__auto___41306 < len__7285__auto___41305)){
args__7292__auto__.push((arguments[i__7286__auto___41306]));

var G__41307 = (i__7286__auto___41306 + (1));
i__7286__auto___41306 = G__41307;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","+stop+","tiltontec.cell.base/+stop+",1421569483,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),body)));
});

tiltontec.cell.base.un_stopped.cljs$lang$maxFixedArity = (2);

tiltontec.cell.base.un_stopped.cljs$lang$applyTo = (function (seq41302){
var G__41303 = cljs.core.first.call(null,seq41302);
var seq41302__$1 = cljs.core.next.call(null,seq41302);
var G__41304 = cljs.core.first.call(null,seq41302__$1);
var seq41302__$2 = cljs.core.next.call(null,seq41302__$1);
return tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic(G__41303,G__41304,seq41302__$2);
});


tiltontec.cell.base.un_stopped.cljs$lang$macro = true;
tiltontec.cell.base.ustack$ = (function tiltontec$cell$base$ustack$(tag){
return [cljs.core.str(tag),cljs.core.str("ustack> "),cljs.core.str(cljs.core.vec.call(null,cljs.core.map.call(null,(function (c){
return new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
}),tiltontec.cell.base._STAR_call_stack_STAR_)))].join('');
});
tiltontec.cell.base.c_assert = (function tiltontec$cell$base$c_assert(var_args){
var args41308 = [];
var len__7285__auto___41314 = arguments.length;
var i__7286__auto___41315 = (0);
while(true){
if((i__7286__auto___41315 < len__7285__auto___41314)){
args41308.push((arguments[i__7286__auto___41315]));

var G__41316 = (i__7286__auto___41315 + (1));
i__7286__auto___41315 = G__41316;
continue;
} else {
}
break;
}

var G__41313 = args41308.length;
switch (G__41313) {
case 1:
return tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7304__auto__ = (new cljs.core.IndexedSeq(args41308.slice((2)),(0),null));
return tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7304__auto__);

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
return cljs.core.apply.call(null,new cljs.core.Var(function(){return tiltontec.util.core.err;},new cljs.core.Symbol("tiltontec.util.core","err","tiltontec.util.core/err",-267832473,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.util.core","tiltontec.util.core",-133870969,null),new cljs.core.Symbol(null,"err","err",-448925678,null),"/home/kenneth/rube/src/tiltontec/util/core.cljc",16,3,45,45,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.util.core.err)?tiltontec.util.core.err.cljs$lang$test:null)])),[cljs.core.str("c-assert> "),cljs.core.str(fmt$),cljs.core.str(fmt_args)].join(''));
}
}
});

tiltontec.cell.base.c_assert.cljs$lang$applyTo = (function (seq41309){
var G__41310 = cljs.core.first.call(null,seq41309);
var seq41309__$1 = cljs.core.next.call(null,seq41309);
var G__41311 = cljs.core.first.call(null,seq41309__$1);
var seq41309__$2 = cljs.core.next.call(null,seq41309__$1);
return tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$variadic(G__41310,G__41311,seq41309__$2);
});

tiltontec.cell.base.c_assert.cljs$lang$maxFixedArity = (2);

tiltontec.cell.base.c_break = (function tiltontec$cell$base$c_break(var_args){
var args__7292__auto__ = [];
var len__7285__auto___41319 = arguments.length;
var i__7286__auto___41320 = (0);
while(true){
if((i__7286__auto___41320 < len__7285__auto___41319)){
args__7292__auto__.push((arguments[i__7286__auto___41320]));

var G__41321 = (i__7286__auto___41320 + (1));
i__7286__auto___41320 = G__41321;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((0) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic(argseq__7293__auto__);
});

tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
return tiltontec.util.core.err.call(null,[cljs.core.str(args)].join(''));
}
});

tiltontec.cell.base.c_break.cljs$lang$maxFixedArity = (0);

tiltontec.cell.base.c_break.cljs$lang$applyTo = (function (seq41318){
return tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41318));
});

tiltontec.cell.base.c_warn = (function tiltontec$cell$base$c_warn(var_args){
var args__7292__auto__ = [];
var len__7285__auto___41323 = arguments.length;
var i__7286__auto___41324 = (0);
while(true){
if((i__7286__auto___41324 < len__7285__auto___41323)){
args__7292__auto__.push((arguments[i__7286__auto___41324]));

var G__41325 = (i__7286__auto___41324 + (1));
i__7286__auto___41324 = G__41325;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((0) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__7293__auto__);
});

tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
return cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"WARNING: ",args));
}
});

tiltontec.cell.base.c_warn.cljs$lang$maxFixedArity = (0);

tiltontec.cell.base.c_warn.cljs$lang$applyTo = (function (seq41322){
return tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41322));
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
throw (new Error("Assert failed: (any-ref? c)"));
}

if(cljs.core.truth_((function (){var and__6198__auto__ = tiltontec.cell.base.c_ref_QMARK_.call(null,c);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c));
} else {
return and__6198__auto__;
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
tiltontec.cell.base.c_md_name = (function tiltontec$cell$base$c_md_name(c){
var temp__4423__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4423__auto__)){
var md = temp__4423__auto__;
var or__6210__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,md));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return "anon";
}
} else {
return "no-md";
}
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
var iter__6990__auto___41334 = (function tiltontec$cell$base$unlink_from_callers_$_iter__41330(s__41331){
return (new cljs.core.LazySeq(null,(function (){
var s__41331__$1 = s__41331;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41331__$1);
if(temp__4425__auto__){
var s__41331__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41331__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__41331__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__41333 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__41332 = (0);
while(true){
if((i__41332 < size__6989__auto__)){
var caller = cljs.core._nth.call(null,c__6988__auto__,i__41332);
cljs.core.chunk_append.call(null,b__41333,tiltontec.cell.base.caller_drop.call(null,c,caller));

var G__41335 = (i__41332 + (1));
i__41332 = G__41335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41333),tiltontec$cell$base$unlink_from_callers_$_iter__41330.call(null,cljs.core.chunk_rest.call(null,s__41331__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41333),null);
}
} else {
var caller = cljs.core.first.call(null,s__41331__$2);
return cljs.core.cons.call(null,tiltontec.cell.base.caller_drop.call(null,c,caller),tiltontec$cell$base$unlink_from_callers_$_iter__41330.call(null,cljs.core.rest.call(null,s__41331__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__6990__auto___41334.call(null,tiltontec.cell.base.c_callers.call(null,c));

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),c], null),null);
});
tiltontec.cell.base.c_slots = (function tiltontec$cell$base$c_slots(c,k){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

return cljs.core.set.call(null,cljs.core.map.call(null,tiltontec.cell.base.c_slot,k.call(null,cljs.core.deref.call(null,c))));
});
tiltontec.cell.base.md_ref_QMARK_ = (function tiltontec$cell$base$md_ref_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
if(typeof tiltontec.cell.base.mdead_QMARK_ !== 'undefined'){
} else {
tiltontec.cell.base.mdead_QMARK_ = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return tiltontec.cell.base.ia_types;},new cljs.core.Symbol("tiltontec.cell.base","ia-types","tiltontec.cell.base/ia-types",436375603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.cell.base","tiltontec.cell.base",-1575671422,null),new cljs.core.Symbol(null,"ia-types","ia-types",322849110,null),"src/tiltontec/cell/base.cljc",14,1,107,107,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.cell.base.ia_types)?tiltontec.cell.base.ia_types.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.base","mdead?"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function (me){
if(cljs.core.truth_((function (){var or__6210__auto__ = (me == null);
if(or__6210__auto__){
return or__6210__auto__;
} else {
return tiltontec.cell.base.md_ref_QMARK_.call(null,me);
}
})())){
} else {
throw (new Error("Assert failed: (or (nil? me) (md-ref? me))"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.type.call(null,(cljs.core.truth_(me)?cljs.core.deref.call(null,me):null))], null);
});})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.base.mdead_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
return false;
}));
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.base.md_slot_owning_QMARK_ = (function tiltontec$cell$base$md_slot_owning_QMARK_(class_name,slot_name){
return false;
});
