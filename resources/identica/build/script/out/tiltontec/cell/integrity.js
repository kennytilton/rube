// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.cell.integrity');
goog.require('cljs.core');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_ = false;
tiltontec.cell.integrity._STAR_dp_log_STAR_ = false;
tiltontec.cell.integrity.data_pulse_next = (function tiltontec$cell$integrity$data_pulse_next(){
var args28170 = [];
var len__5593__auto___28173 = arguments.length;
var i__5594__auto___28174 = (0);
while(true){
if((i__5594__auto___28174 < len__5593__auto___28173)){
args28170.push((arguments[i__5594__auto___28174]));

var G__28175 = (i__5594__auto___28174 + (1));
i__5594__auto___28174 = G__28175;
continue;
} else {
}
break;
}

var G__28172 = args28170.length;
switch (G__28172) {
case 0:
return tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28170.length)].join('')));

}
});

tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.cell.integrity.data_pulse_next.call(null,new cljs.core.Keyword(null,"anon","anon",-765650478));
});

tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1 = (function (pulse_info){
if(cljs.core.truth_(tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_)){
return null;
} else {
if(cljs.core.truth_(tiltontec.cell.integrity._STAR_dp_log_STAR_)){
tiltontec.util.base.call_trc.call(null,"dp-next> ",(cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) + (1)),pulse_info);
} else {
}

return cljs.core.swap_BANG_.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_,cljs.core.inc);
}
});

tiltontec.cell.integrity.data_pulse_next.cljs$lang$maxFixedArity = 1;
tiltontec.cell.integrity.c_current_QMARK_ = (function tiltontec$cell$integrity$c_current_QMARK_(c){
return cljs.core._EQ_.call(null,tiltontec.cell.base.c_pulse.call(null,c),cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_));
});
tiltontec.cell.integrity.c_pulse_update = (function tiltontec$cell$integrity$c_pulse_update(c,key){
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c))){
return null;
} else {
if((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) >= tiltontec.cell.base.c_pulse.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"+pulse+","+pulse+",-1092313971,null)),cljs.core.list(new cljs.core.Symbol(null,"c-pulse","c-pulse",1411117420,null),new cljs.core.Symbol(null,"c","c",-122660552,null)))))].join('')));
}

return cljs.core.swap_BANG_.call(null,c,cljs.core.assoc,new cljs.core.Keyword(null,"pulse","pulse",-244494476),cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_));
}
});
tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388),new cljs.core.Keyword(null,"awaken","awaken",-1899628152),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603),new cljs.core.Keyword(null,"change","change",-1163046502)], null);
tiltontec.cell.integrity.unfin_biz = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5307__auto__ = (function tiltontec$cell$integrity$iter__28177(s__28178){
return (new cljs.core.LazySeq(null,(function (){
var s__28178__$1 = s__28178;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28178__$1);
if(temp__4425__auto__){
var s__28178__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28178__$2)){
var c__5305__auto__ = cljs.core.chunk_first.call(null,s__28178__$2);
var size__5306__auto__ = cljs.core.count.call(null,c__5305__auto__);
var b__28180 = cljs.core.chunk_buffer.call(null,size__5306__auto__);
if((function (){var i__28179 = (0);
while(true){
if((i__28179 < size__5306__auto__)){
var i = cljs.core._nth.call(null,c__5305__auto__,i__28179);
cljs.core.chunk_append.call(null,b__28180,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null));

var G__28181 = (i__28179 + (1));
i__28179 = G__28181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28180),tiltontec$cell$integrity$iter__28177.call(null,cljs.core.chunk_rest.call(null,s__28178__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28180),null);
}
} else {
var i = cljs.core.first.call(null,s__28178__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null),tiltontec$cell$integrity$iter__28177.call(null,cljs.core.rest.call(null,s__28178__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5307__auto__.call(null,tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_);
})());
tiltontec.cell.integrity.ufb_queue = (function tiltontec$cell$integrity$ufb_queue(opcode){
var or__4554__auto__ = opcode.call(null,tiltontec.cell.integrity.unfin_biz);
if(cljs.core.truth_(or__4554__auto__)){
return or__4554__auto__;
} else {
return tiltontec.util.core.err.call(null,[cljs.core.str("ufb-queue> opcode unknown: "),cljs.core.str(opcode)].join(''));
}
});
tiltontec.cell.integrity.ufb_queue_ensure = (function tiltontec$cell$integrity$ufb_queue_ensure(opcode){

return tiltontec.cell.integrity.ufb_queue.call(null,opcode);
});
tiltontec.cell.integrity.ufb_add = (function tiltontec$cell$integrity$ufb_add(opcode,continuation){
return tiltontec.util.core.fifo_add.call(null,tiltontec.cell.integrity.ufb_queue_ensure.call(null,opcode),continuation);
});
tiltontec.cell.integrity.ufb_assert_q_empty = (function tiltontec$cell$integrity$ufb_assert_q_empty(opcode){
var temp__4423__auto__ = tiltontec.util.core.fifo_peek.call(null,tiltontec.cell.integrity.ufb_queue_ensure.call(null,opcode));
if(cljs.core.truth_(temp__4423__auto__)){
var uqp = temp__4423__auto__;
return tiltontec.util.core.err.call(null,[cljs.core.str("ufb queue %s not empty, viz %s"),cljs.core.str(opcode),cljs.core.str(uqp)].join(''));
} else {
return true;
}
});
tiltontec.cell.integrity._STAR_ufb_do_q_STAR_ = null;
tiltontec.cell.integrity.ufb_do = (function tiltontec$cell$integrity$ufb_do(){
var args28182 = [];
var len__5593__auto___28186 = arguments.length;
var i__5594__auto___28187 = (0);
while(true){
if((i__5594__auto___28187 < len__5593__auto___28186)){
args28182.push((arguments[i__5594__auto___28187]));

var G__28188 = (i__5594__auto___28187 + (1));
i__5594__auto___28187 = G__28188;
continue;
} else {
}
break;
}

var G__28184 = args28182.length;
switch (G__28184) {
case 1:
return tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28182.length)].join('')));

}
});

tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1 = (function (opcode){
return tiltontec.cell.integrity.ufb_do.call(null,tiltontec.cell.integrity.ufb_queue.call(null,opcode),opcode);
});

tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2 = (function (q,opcode){
while(true){
var temp__4425__auto__ = tiltontec.util.core.fifo_pop.call(null,q);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__28185 = temp__4425__auto__;
var defer_info = cljs.core.nth.call(null,vec__28185,(0),null);
var task = cljs.core.nth.call(null,vec__28185,(1),null);
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"ufb-do-yep","ufb-do-yep",-2077548937),defer_info,task);

task.call(null,opcode,defer_info);

var G__28190 = q;
var G__28191 = opcode;
q = G__28190;
opcode = G__28191;
continue;
} else {
return null;
}
break;
}
});

tiltontec.cell.integrity.ufb_do.cljs$lang$maxFixedArity = 2;
tiltontec.cell.integrity.finish_business = (function tiltontec$cell$integrity$finish_business(){
if(cljs.core.truth_(cljs.core.deref.call(null,tiltontec.cell.base._PLUS_stop_PLUS_))){
return null;
} else {
var tag = new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388);
while(true){
var G__28194 = (((tag instanceof cljs.core.Keyword))?tag.fqn:null);
switch (G__28194) {
case "tell-dependents":
tiltontec.cell.integrity.ufb_do.call(null,new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388));

tiltontec.cell.integrity.ufb_do.call(null,new cljs.core.Keyword(null,"awaken","awaken",-1899628152));

var G__28197 = (cljs.core.truth_(tiltontec.util.core.fifo_peek.call(null,tiltontec.cell.integrity.ufb_queue_ensure.call(null,new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388))))?new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388):new cljs.core.Keyword(null,"handle-clients","handle-clients",-1446571173));
tag = G__28197;
continue;

break;
case "handle-clients":
var temp__4425__auto__ = tiltontec.cell.integrity.ufb_queue.call(null,new cljs.core.Keyword(null,"client","client",-1323448117));
if(cljs.core.truth_(temp__4425__auto__)){
var clientq = temp__4425__auto__;
var temp__4423__auto___28198 = cljs.core.deref.call(null,tiltontec.cell.base._PLUS_client_q_handler_PLUS_);
if(cljs.core.truth_(temp__4423__auto___28198)){
var cqh_28199 = temp__4423__auto___28198;
cqh_28199.call(null,clientq);
} else {
tiltontec.cell.integrity.ufb_do.call(null,clientq,new cljs.core.Keyword(null,"client","client",-1323448117));
}

var G__28200 = (cljs.core.truth_(tiltontec.util.core.fifo_peek.call(null,tiltontec.cell.integrity.ufb_queue.call(null,new cljs.core.Keyword(null,"client","client",-1323448117))))?new cljs.core.Keyword(null,"handle-clients","handle-clients",-1446571173):new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603));
tag = G__28200;
continue;
} else {
return null;
}

break;
case "ephemeral-reset":
tiltontec.cell.integrity.ufb_do.call(null,new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603));

var G__28201 = new cljs.core.Keyword(null,"deferred-state-change","deferred-state-change",-1362791478);
tag = G__28201;
continue;

break;
case "deferred-state-change":
var temp__4425__auto__ = tiltontec.util.core.fifo_pop.call(null,tiltontec.cell.integrity.ufb_queue.call(null,new cljs.core.Keyword(null,"change","change",-1163046502)));
if(cljs.core.truth_(temp__4425__auto__)){
var vec__28195 = temp__4425__auto__;
var defer_info = cljs.core.nth.call(null,vec__28195,(0),null);
var task_fn = cljs.core.nth.call(null,vec__28195,(1),null);
tiltontec.cell.integrity.data_pulse_next.call(null,new cljs.core.Keyword(null,"def-state-chg","def-state-chg",1797246466));

task_fn.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),defer_info);

var G__28202 = new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388);
tag = G__28202;
continue;
} else {
return null;
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(tag)].join('')));

}
break;
}
}
});
tiltontec.cell.integrity.with_integrity = (function tiltontec$cell$integrity$with_integrity(){
var args__5600__auto__ = [];
var len__5593__auto___28209 = arguments.length;
var i__5594__auto___28210 = (0);
while(true){
if((i__5594__auto___28210 < len__5593__auto___28209)){
args__5600__auto__.push((arguments[i__5594__auto___28210]));

var G__28211 = (i__5594__auto___28210 + (1));
i__5594__auto___28210 = G__28211;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__28207,body){
var vec__28208 = p__28207;
var opcode = cljs.core.nth.call(null,vec__28208,(0),null);
var info = cljs.core.nth.call(null,vec__28208,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.integrity","call-with-integrity","tiltontec.cell.integrity/call-with-integrity",-729981427,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,opcode),cljs.core._conj.call(null,cljs.core.List.EMPTY,info),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opcode","opcode",311089360,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defer-info","defer-info",-446799704,null))))))),body)))))));
});

tiltontec.cell.integrity.with_integrity.cljs$lang$maxFixedArity = (3);

tiltontec.cell.integrity.with_integrity.cljs$lang$applyTo = (function (seq28203){
var G__28204 = cljs.core.first.call(null,seq28203);
var seq28203__$1 = cljs.core.next.call(null,seq28203);
var G__28205 = cljs.core.first.call(null,seq28203__$1);
var seq28203__$2 = cljs.core.next.call(null,seq28203__$1);
var G__28206 = cljs.core.first.call(null,seq28203__$2);
var seq28203__$3 = cljs.core.next.call(null,seq28203__$2);
return tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic(G__28204,G__28205,G__28206,seq28203__$3);
});

tiltontec.cell.integrity.with_integrity.cljs$lang$macro = true;
tiltontec.cell.integrity.with_cc = (function tiltontec$cell$integrity$with_cc(_AMPERSAND_form,_AMPERSAND_env,id,_AMPERSAND_body,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.integrity","with-integrity","tiltontec.cell.integrity/with-integrity",-1374442056,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id))))),body)));
});

tiltontec.cell.integrity.with_cc.cljs$lang$macro = true;
tiltontec.cell.integrity.without_integrity = (function tiltontec$cell$integrity$without_integrity(){
var args__5600__auto__ = [];
var len__5593__auto___28215 = arguments.length;
var i__5594__auto___28216 = (0);
while(true){
if((i__5594__auto___28216 < len__5593__auto___28215)){
args__5600__auto__.push((arguments[i__5594__auto___28216]));

var G__28217 = (i__5594__auto___28216 + (1));
i__5594__auto___28216 = G__28217;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*within-integrity*","tiltontec.cell.base/*within-integrity*",1558744567,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*defer-changes*","tiltontec.cell.base/*defer-changes*",405681033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.integrity","*call-stack*","tiltontec.cell.integrity/*call-stack*",1793416916,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.List.EMPTY)))))))))),body)));
});

tiltontec.cell.integrity.without_integrity.cljs$lang$maxFixedArity = (2);

tiltontec.cell.integrity.without_integrity.cljs$lang$applyTo = (function (seq28212){
var G__28213 = cljs.core.first.call(null,seq28212);
var seq28212__$1 = cljs.core.next.call(null,seq28212);
var G__28214 = cljs.core.first.call(null,seq28212__$1);
var seq28212__$2 = cljs.core.next.call(null,seq28212__$1);
return tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic(G__28213,G__28214,seq28212__$2);
});

tiltontec.cell.integrity.without_integrity.cljs$lang$macro = true;
tiltontec.cell.integrity.call_with_integrity = (function tiltontec$cell$integrity$call_with_integrity(opcode,defer_info,action){
if(cljs.core.truth_(opcode)){
if(cljs.core.truth_(tiltontec.util.core.cl_find.call(null,opcode,tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid opcode for with-integrity: %s. Allowed values: %s"),cljs.core.str(opcode),cljs.core.str(tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cl-find","cl-find",-402244315,null),new cljs.core.Symbol(null,"opcode","opcode",311089360,null),new cljs.core.Symbol(null,"+ufb-opcodes+","+ufb-opcodes+",-1562699838,null))))].join('')));
}
} else {
}

return tiltontec.util.base.call_wtrx.call(null,(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,tiltontec.cell.base._PLUS_stop_PLUS_))){
return null;
} else {
if(cljs.core.truth_(tiltontec.cell.base.c_stopped.call(null))){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"cwi-sees-stop!!!!!!!!!!!","cwi-sees-stop!!!!!!!!!!!",-1009254623));
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_within_integrity_STAR_)){
if(cljs.core.truth_(opcode)){
var result__27772__auto__ = new cljs.core.Keyword(null,"deferred-to-ufb-1","deferred-to-ufb-1",-1094275721);
cljs.core.println.call(null,new cljs.core.Keyword(null,"cwi-defers","cwi-defers",-765324305),opcode,defer_info);

tiltontec.cell.integrity.ufb_add.call(null,opcode,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defer_info,action], null));

return result__27772__auto__;
} else {
return action.call(null,opcode,defer_info);
}
} else {
var _STAR_within_integrity_STAR_28220 = tiltontec.cell.base._STAR_within_integrity_STAR_;
var _STAR_defer_changes_STAR_28221 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_within_integrity_STAR_ = true;

tiltontec.cell.base._STAR_defer_changes_STAR_ = false;

try{if(((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) === (0))) || (cljs.core._EQ_.call(null,opcode,new cljs.core.Keyword(null,"change","change",-1163046502)))){
tiltontec.cell.integrity.data_pulse_next.call(null,new cljs.core.Keyword(null,"cwi","cwi",1748296377));
} else {
}

var result__27772__auto__ = action.call(null,opcode,defer_info);
tiltontec.cell.integrity.finish_business.call(null);

tiltontec.cell.integrity.ufb_assert_q_empty.call(null,new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388));

tiltontec.cell.integrity.ufb_assert_q_empty.call(null,new cljs.core.Keyword(null,"change","change",-1163046502));

return result__27772__auto__;
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_28221;

tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR_28220;
}
}
}
}
}),(0),(100),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.cell.base._STAR_within_integrity_STAR_),opcode),"cwi-begin"));
});
