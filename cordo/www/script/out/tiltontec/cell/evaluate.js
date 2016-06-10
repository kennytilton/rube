// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.cell.evaluate');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.integrity');
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.evaluate.ephemeral_reset = (function tiltontec$cell$evaluate$ephemeral_reset(rc){
if(cljs.core.truth_(tiltontec.cell.base.c_ephemeral_QMARK_.call(null,rc))){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603),rc,(function (opcode,defer_info){
var temp__4425__auto___41477 = new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc));
if(cljs.core.truth_(temp__4425__auto___41477)){
var me_41478 = temp__4425__auto___41477;
cljs.core.swap_BANG_.call(null,me_41478,cljs.core.assoc,new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc)),null);
} else {
}

return cljs.core.swap_BANG_.call(null,rc,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),null);
}));
} else {
return null;
}
});
tiltontec.cell.evaluate.record_dependency = (function tiltontec$cell$evaluate$record_dependency(used){
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,used))){
return null;
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
} else {
throw (new Error("Assert failed: *depender*"));
}

tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"reco-dep!!!","reco-dep!!!",380319801),new cljs.core.Keyword(null,"used","used",-1414786177),tiltontec.cell.base.c_slot.call(null,used),new cljs.core.Keyword(null,"caller","caller",-1275362879),tiltontec.cell.base.c_slot.call(null,tiltontec.cell.base._STAR_depender_STAR_));

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useds","useds",621350967),tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.call(null,tiltontec.cell.base.c_useds.call(null,tiltontec.cell.base._STAR_depender_STAR_),used));

return tiltontec.cell.base.caller_ensure.call(null,used,tiltontec.cell.base._STAR_depender_STAR_);
}
});
/**
 * The key to data integrity: recursively check the known dependency
 *   graph to decide if we are current, and if not kick off recalculation
 *   and propagation.
 */
tiltontec.cell.evaluate.ensure_value_is_current = (function tiltontec$cell$evaluate$ensure_value_is_current(c,debug_id,ensurer){
if(cljs.core.truth_(tiltontec.cell.base._STAR_not_to_be_STAR_)){
if(cljs.core.truth_(tiltontec.cell.base.c_unbound_QMARK_.call(null,c))){
return tiltontec.util.core.err.call(null,"evic> unbound slot %s of model %s",tiltontec.cell.base.c_slot.call(null,c),tiltontec.cell.base.c_model.call(null,c));
} else {
if(cljs.core.truth_(tiltontec.cell.base.c_valid_QMARK_.call(null,c))){
return tiltontec.cell.base.c_value.call(null,c);
} else {
return null;
}
}
} else {
if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
return tiltontec.cell.base.c_value.call(null,c);
} else {
if(cljs.core.truth_((function (){var and__6198__auto__ = tiltontec.cell.base.c_input_QMARK_.call(null,c);
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = tiltontec.cell.base.c_valid_QMARK_.call(null,c);
if(cljs.core.truth_(and__6198__auto____$1)){
return cljs.core.not.call(null,(function (){var and__6198__auto____$2 = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__6198__auto____$2)){
return (cljs.core._EQ_.call(null,tiltontec.cell.base.c_optimize.call(null,c),new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336))) && ((tiltontec.cell.base.c_value.call(null,c) == null));
} else {
return and__6198__auto____$2;
}
})());
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return tiltontec.cell.base.c_value.call(null,c);
} else {
if(cljs.core.truth_((function (){var temp__4425__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4425__auto__)){
var md = temp__4425__auto__;
return tiltontec.cell.base.mdead_QMARK_.call(null,tiltontec.cell.base.c_model.call(null,c));
} else {
return null;
}
})())){
return tiltontec.util.core.err.call(null,cljs.core.str,"evic> model %s of cell %s is dead",tiltontec.cell.base.c_model.call(null,c),c);
} else {
if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core.not.call(null,tiltontec.cell.base.c_valid_QMARK_.call(null,c));
if(or__6210__auto__){
return or__6210__auto__;
} else {
var G__41512 = cljs.core.seq.call(null,tiltontec.cell.base.c_useds.call(null,c));
var vec__41513 = G__41512;
var seq__41514 = cljs.core.seq.call(null,vec__41513);
var first__41515 = cljs.core.first.call(null,seq__41514);
var seq__41514__$1 = cljs.core.next.call(null,seq__41514);
var used = first__41515;
var urest = seq__41514__$1;
var G__41512__$1 = G__41512;
while(true){
var vec__41516 = G__41512__$1;
var seq__41517 = cljs.core.seq.call(null,vec__41516);
var first__41518 = cljs.core.first.call(null,seq__41517);
var seq__41517__$1 = cljs.core.next.call(null,seq__41517);
var used__$1 = first__41518;
var urest__$1 = seq__41517__$1;
if(cljs.core.truth_(used__$1)){
cljs.core.println.call(null,new cljs.core.Keyword(null,"pcell","pcell",-240144130),new cljs.core.Keyword(null,"cnset-evicing","cnset-evicing",380848352),tiltontec.cell.base.c_slot.call(null,used__$1),tiltontec.cell.base.c_state.call(null,used__$1));

tiltontec$cell$evaluate$ensure_value_is_current.call(null,used__$1,new cljs.core.Keyword(null,"nested","nested",18943849),c);

var or__6210__auto____$1 = (tiltontec.cell.base.c_pulse_last_changed.call(null,used__$1) > tiltontec.cell.base.c_pulse.call(null,c));
if(or__6210__auto____$1){
return or__6210__auto____$1;
} else {
var G__41519 = urest__$1;
G__41512__$1 = G__41519;
continue;
}
} else {
return null;
}
break;
}
}
})())){
if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
} else {
tiltontec.util.base.call_trc.call(null,":not-current-so-calc",tiltontec.cell.base.c_slot.call(null,c),tiltontec.cell.base.c_state.call(null,c));

tiltontec.cell.evaluate.calculate_and_set.call(null,c,new cljs.core.Keyword(null,"evic","evic",1309656753),ensurer);
}

return tiltontec.cell.base.c_value.call(null,c);
} else {
tiltontec.cell.integrity.c_pulse_update.call(null,c,new cljs.core.Keyword(null,"valid-uninfluenced","valid-uninfluenced",676756797));

return tiltontec.cell.base.c_value.call(null,c);

}
}
}
}
}
});
/**
 * The API for determing the value associated with a Cell.
 *   Ensures value is current, records any dependent, and
 *   notices if a standalone  cell has never been observed.
 */
tiltontec.cell.evaluate.c_get = (function tiltontec$cell$evaluate$c_get(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
var result__40974__auto__ = tiltontec.cell.integrity.call_with_integrity.call(null,null,null,(function (opcode,defer_info){
var prior_value = tiltontec.cell.base.c_value.call(null,c);
var result__40974__auto__ = tiltontec.cell.evaluate.ensure_value_is_current.call(null,c,new cljs.core.Keyword(null,"c-read","c-read",-1481921085),null);
if(((tiltontec.cell.base.c_model.call(null,c) == null)) && (cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,c),new cljs.core.Keyword(null,"nascent","nascent",443401807))) && ((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c)))){
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"cget","cget",1794378742));

tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
}

return result__40974__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.evaluate.record_dependency.call(null,c);
} else {
}

return result__40974__auto__;
} else {
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,c))){
return cljs.core.deref.call(null,c);
} else {
return c;

}
}
});

/**
 * Calculate, link, record, and propagate.
 */
tiltontec.cell.evaluate.calculate_and_set = (function tiltontec$cell$evaluate$calculate_and_set(c,dbgid,dbgdata){
var raw_value = tiltontec.cell.evaluate.calculate_and_link.call(null,c);
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c))){
return null;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("calc-n-set"),cljs.core.str("\n"),cljs.core.str("(map? (clojure.core/deref c))")].join('')));
}

return tiltontec.cell.evaluate.c_value_assume.call(null,c,raw_value,null);
}
});
/**
 * The name is accurate: we do no more than invoke the
 *   rule of a formula and return its value, but along the
 *   way the links between dependencies and dependents get
 *   determined anew.
 */
tiltontec.cell.evaluate.calculate_and_link = (function tiltontec$cell$evaluate$calculate_and_link(c){
var _STAR_call_stack_STAR_41523 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR_41524 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR_41525 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_call_stack_STAR_ = cljs.core.cons.call(null,c,tiltontec.cell.base._STAR_call_stack_STAR_);

tiltontec.cell.base._STAR_depender_STAR_ = c;

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"pre-rule-clear","pre-rule-clear",258781380));

if(cljs.core.truth_(tiltontec.cell.base.c_rule.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No rule in %s type %s"),cljs.core.str(new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str(cljs.core.type.call(null,cljs.core.deref.call(null,c)))].join('')),cljs.core.str("\n"),cljs.core.str("(c-rule c)")].join('')));
}

return tiltontec.cell.base.c_rule.call(null,c).call(null,c);
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_41525;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_41524;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_41523;
}});
if(typeof tiltontec.cell.evaluate.c_awaken !== 'undefined'){
} else {
tiltontec.cell.evaluate.c_awaken = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return tiltontec.cell.base.ia_types;},new cljs.core.Symbol("tiltontec.cell.base","ia-types","tiltontec.cell.base/ia-types",436375603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.cell.base","tiltontec.cell.base",-1575671422,null),new cljs.core.Symbol(null,"ia-types","ia-types",322849110,null),"src/tiltontec/cell/base.cljc",14,1,107,107,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.cell.base.ia_types)?tiltontec.cell.base.ia_types.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","c-awaken"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function (c){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,c));
});})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword(null,"default","default",-1987822328),(function (c){
if(cljs.core.coll_QMARK_.call(null,c)){
return cljs.core.doall.call(null,(function (){var iter__6990__auto__ = (function tiltontec$cell$evaluate$iter__41526(s__41527){
return (new cljs.core.LazySeq(null,(function (){
var s__41527__$1 = s__41527;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41527__$1);
if(temp__4425__auto__){
var s__41527__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41527__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__41527__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__41529 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__41528 = (0);
while(true){
if((i__41528 < size__6989__auto__)){
var ce = cljs.core._nth.call(null,c__6988__auto__,i__41528);
cljs.core.chunk_append.call(null,b__41529,tiltontec.cell.evaluate.c_awaken.call(null,ce));

var G__41530 = (i__41528 + (1));
i__41528 = G__41530;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41529),tiltontec$cell$evaluate$iter__41526.call(null,cljs.core.chunk_rest.call(null,s__41527__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41529),null);
}
} else {
var ce = cljs.core.first.call(null,s__41527__$2);
return cljs.core.cons.call(null,tiltontec.cell.evaluate.c_awaken.call(null,ce),tiltontec$cell$evaluate$iter__41526.call(null,cljs.core.rest.call(null,s__41527__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,c);
})());
} else {
return cljs.core.println.call(null,new cljs.core.Keyword(null,"c-awaken-fall-thru","c-awaken-fall-thru",-2004606871),(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,c))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref-of","ref-of",1886926194),cljs.core.type.call(null,c),cljs.core.deref.call(null,c)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unref","unref",-1884894186),c,cljs.core.type.call(null,c)], null)));

}
}));
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071),(function (c){
if(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-input? c)"));
}

if((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c))){
var temp__4425__auto___41531 = tiltontec.cell.base.c_me.call(null,c);
if(cljs.core.truth_(temp__4425__auto___41531)){
var me_41532 = temp__4425__auto___41531;
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot.call(null,c),me_41532], null),tiltontec.cell.base.c_value.call(null,c));
} else {
}

tiltontec.cell.observer.c_observe.call(null,c,new cljs.core.Keyword(null,"cell-awaken","cell-awaken",2137807704));

return tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037),(function (c){
var _STAR_depender_STAR_41533 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set.call(null,c,new cljs.core.Keyword(null,"fn-c-awaken","fn-c-awaken",1597115821),null);
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_41533;
}}));



tiltontec.cell.evaluate.md_slot_value_store = (function tiltontec$cell$evaluate$md_slot_value_store(me,slot,value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,me))){
} else {
throw (new Error("Assert failed: (any-ref? me)"));
}

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),value);
});
/**
 * The Cell assumes a new value at awakening, on c-reset!, or
 * after formula recalculation.
 * 
 *   We record the new value, set the Cell state to :awake, make
 *   its pulse current, check to see if a formula cell can be
 *   optimized away, and then propagate to any dependent formula
 *   cells.
 */
tiltontec.cell.evaluate.c_value_assume = (function tiltontec$cell$evaluate$c_value_assume(c,new_value,propagation_code){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var result__40974__auto__ = new_value;
var _STAR_depender_STAR_41536_41538 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var prior_value_41539 = tiltontec.cell.base.c_value.call(null,c);
var prior_state_41540 = tiltontec.cell.base.c_value_state.call(null,c);
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),c], null),new_value);

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

if(cljs.core.truth_((function (){var and__6198__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.not.call(null,tiltontec.cell.base.c_synaptic_QMARK_.call(null,c));
} else {
return and__6198__auto__;
}
})())){
tiltontec.cell.evaluate.md_slot_value_store.call(null,tiltontec.cell.base.c_model.call(null,c),tiltontec.cell.base.c_slot_name.call(null,c),new_value);
} else {
}

tiltontec.cell.integrity.c_pulse_update.call(null,c,new cljs.core.Keyword(null,"slotv-assume","slotv-assume",-1071260275));

if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core._EQ_.call(null,propagation_code,new cljs.core.Keyword(null,"propagate","propagate",274376905));
if(or__6210__auto__){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([prior_state_41540], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"uncurrent","uncurrent",-217246265)], null)));
if(or__6210__auto____$1){
return or__6210__auto____$1;
} else {
return tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_41539);
}
}
})())){
var callers_41541 = tiltontec.cell.base.c_callers.call(null,c);
var temp__4425__auto___41542 = (function (){var and__6198__auto__ = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__6198__auto__)){
return tiltontec.cell.base.c_optimize.call(null,c);
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto___41542)){
var optimize_41543 = temp__4425__auto___41542;
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"wtf","wtf",-1581114577),optimize_41543);

var G__41537_41544 = optimize_41543;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),G__41537_41544)){
if(cljs.core.truth_(tiltontec.cell.base.c_value.call(null,c))){
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),tiltontec.cell.base.c_slot.call(null,c));

tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336));
} else {
}
} else {
if(cljs.core._EQ_.call(null,true,G__41537_41544)){
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_41539);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(optimize_41543)].join('')));

}
}
} else {
}

if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core._EQ_.call(null,propagation_code,new cljs.core.Keyword(null,"no-propagate","no-propagate",-573850970));
if(or__6210__auto__){
return or__6210__auto__;
} else {
return tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c);
}
})())){
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c))){
} else {
throw (new Error("Assert failed: (map? (clojure.core/deref c))"));
}

tiltontec.cell.evaluate.propagate.call(null,c,prior_value_41539,callers_41541);
}
} else {
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_41536_41538;
}
return result__40974__auto__;
});
tiltontec.cell.evaluate.unlink_from_used = (function tiltontec$cell$evaluate$unlink_from_used(c,why){

var iter__6990__auto___41553 = (function tiltontec$cell$evaluate$unlink_from_used_$_iter__41549(s__41550){
return (new cljs.core.LazySeq(null,(function (){
var s__41550__$1 = s__41550;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41550__$1);
if(temp__4425__auto__){
var s__41550__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41550__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__41550__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__41552 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__41551 = (0);
while(true){
if((i__41551 < size__6989__auto__)){
var used = cljs.core._nth.call(null,c__6988__auto__,i__41551);
cljs.core.chunk_append.call(null,b__41552,tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),c)));

var G__41554 = (i__41551 + (1));
i__41551 = G__41554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41552),tiltontec$cell$evaluate$unlink_from_used_$_iter__41549.call(null,cljs.core.chunk_rest.call(null,s__41550__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41552),null);
}
} else {
var used = cljs.core.first.call(null,s__41550__$2);
return cljs.core.cons.call(null,tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),c)),tiltontec$cell$evaluate$unlink_from_used_$_iter__41549.call(null,cljs.core.rest.call(null,s__41550__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__6990__auto___41553.call(null,tiltontec.cell.base.c_useds.call(null,c));

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useds","useds",621350967),c], null),cljs.core.PersistentHashSet.EMPTY);
});
tiltontec.cell.evaluate.md_cell_flush = (function tiltontec$cell$evaluate$md_cell_flush(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__4425__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4425__auto__)){
var me = temp__4425__auto__;
return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949),me], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949).cljs$core$IFn$_invoke$arity$1(me),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot.call(null,c),tiltontec.cell.base.c_pulse_observed.call(null,c)], null)));
} else {
return null;
}
});
/**
 * Optimizes away cells who turn out not to depend on anyone, 
 *   saving a lot of work at runtime. A caller/user will not bother
 *   establishing a link, and when we get to models cget will 
 *   find a non-cell in a slot and Just Use It.
 */
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_ = (function tiltontec$cell$evaluate$optimize_away_QMARK__BANG_(c,prior_value){
if(cljs.core.truth_((function (){var and__6198__auto__ = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = cljs.core.empty_QMARK_.call(null,tiltontec.cell.base.c_useds.call(null,c));
if(and__6198__auto____$1){
var and__6198__auto____$2 = tiltontec.cell.base.c_optimize.call(null,c);
if(cljs.core.truth_(and__6198__auto____$2)){
var and__6198__auto____$3 = cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c));
if(and__6198__auto____$3){
var and__6198__auto____$4 = tiltontec.cell.base.c_valid_QMARK_.call(null,c);
if(cljs.core.truth_(and__6198__auto____$4)){
return (cljs.core.not.call(null,tiltontec.cell.base.c_synaptic_QMARK_.call(null,c))) && (cljs.core.not.call(null,tiltontec.cell.base.c_input_QMARK_.call(null,c)));
} else {
return and__6198__auto____$4;
}
} else {
return and__6198__auto____$3;
}
} else {
return and__6198__auto____$2;
}
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"optimized-away","optimized-away",876765856));

tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"opti-away","opti-away",1290785499));

var temp__4425__auto___41563 = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4425__auto___41563)){
var me_41564 = temp__4425__auto___41563;
tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me_41564], null),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me_41564)),tiltontec.cell.base.c_slot.call(null,c)));

tiltontec.cell.evaluate.md_cell_flush.call(null,c);
} else {
}

var seq__41559_41565 = cljs.core.seq.call(null,cljs.core.seq.call(null,tiltontec.cell.base.c_callers.call(null,c)));
var chunk__41560_41566 = null;
var count__41561_41567 = (0);
var i__41562_41568 = (0);
while(true){
if((i__41562_41568 < count__41561_41567)){
var caller_41569 = cljs.core._nth.call(null,chunk__41560_41566,i__41562_41568);
cljs.core.swap_BANG_.call(null,caller_41569,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([c], true),tiltontec.cell.base.c_useds.call(null,caller_41569)));

tiltontec.cell.base.caller_drop.call(null,c,caller_41569);

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_41569,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

var G__41570 = seq__41559_41565;
var G__41571 = chunk__41560_41566;
var G__41572 = count__41561_41567;
var G__41573 = (i__41562_41568 + (1));
seq__41559_41565 = G__41570;
chunk__41560_41566 = G__41571;
count__41561_41567 = G__41572;
i__41562_41568 = G__41573;
continue;
} else {
var temp__4425__auto___41574 = cljs.core.seq.call(null,seq__41559_41565);
if(temp__4425__auto___41574){
var seq__41559_41575__$1 = temp__4425__auto___41574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41559_41575__$1)){
var c__7021__auto___41576 = cljs.core.chunk_first.call(null,seq__41559_41575__$1);
var G__41577 = cljs.core.chunk_rest.call(null,seq__41559_41575__$1);
var G__41578 = c__7021__auto___41576;
var G__41579 = cljs.core.count.call(null,c__7021__auto___41576);
var G__41580 = (0);
seq__41559_41565 = G__41577;
chunk__41560_41566 = G__41578;
count__41561_41567 = G__41579;
i__41562_41568 = G__41580;
continue;
} else {
var caller_41581 = cljs.core.first.call(null,seq__41559_41575__$1);
cljs.core.swap_BANG_.call(null,caller_41581,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([c], true),tiltontec.cell.base.c_useds.call(null,caller_41581)));

tiltontec.cell.base.caller_drop.call(null,c,caller_41581);

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_41581,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

var G__41582 = cljs.core.next.call(null,seq__41559_41575__$1);
var G__41583 = null;
var G__41584 = (0);
var G__41585 = (0);
seq__41559_41565 = G__41582;
chunk__41560_41566 = G__41583;
count__41561_41567 = G__41584;
i__41562_41568 = G__41585;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,c,tiltontec.cell.base.c_value.call(null,c));
} else {
return null;
}
});
tiltontec.cell.evaluate.c_quiesce = (function tiltontec$cell$evaluate$c_quiesce(c){
tiltontec.cell.base.unlink_from_callers.call(null,c);

tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"quiesce","quiesce",-798294121));

return cljs.core.reset_BANG_.call(null,c,new cljs.core.Keyword(null,"dead-c","dead-c",385485497));
});
if(typeof tiltontec.cell.evaluate.not_to_be !== 'undefined'){
} else {
tiltontec.cell.evaluate.not_to_be = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return tiltontec.cell.base.ia_types;},new cljs.core.Symbol("tiltontec.cell.base","ia-types","tiltontec.cell.base/ia-types",436375603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.cell.base","tiltontec.cell.base",-1575671422,null),new cljs.core.Symbol(null,"ia-types","ia-types",322849110,null),"src/tiltontec/cell/base.cljc",14,1,107,107,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.cell.base.ia_types)?tiltontec.cell.base.ia_types.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","not-to-be"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function (me){
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,me))){
} else {
throw (new Error("Assert failed: (md-ref? me)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.type.call(null,(cljs.core.truth_(me)?cljs.core.deref.call(null,me):null))], null);
});})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.not_to_be,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
var seq__41586_41590 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me))));
var chunk__41587_41591 = null;
var count__41588_41592 = (0);
var i__41589_41593 = (0);
while(true){
if((i__41589_41593 < count__41588_41592)){
var c_41594 = cljs.core._nth.call(null,chunk__41587_41591,i__41589_41593);
tiltontec.cell.evaluate.c_quiesce.call(null,c_41594);

var G__41595 = seq__41586_41590;
var G__41596 = chunk__41587_41591;
var G__41597 = count__41588_41592;
var G__41598 = (i__41589_41593 + (1));
seq__41586_41590 = G__41595;
chunk__41587_41591 = G__41596;
count__41588_41592 = G__41597;
i__41589_41593 = G__41598;
continue;
} else {
var temp__4425__auto___41599 = cljs.core.seq.call(null,seq__41586_41590);
if(temp__4425__auto___41599){
var seq__41586_41600__$1 = temp__4425__auto___41599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41586_41600__$1)){
var c__7021__auto___41601 = cljs.core.chunk_first.call(null,seq__41586_41600__$1);
var G__41602 = cljs.core.chunk_rest.call(null,seq__41586_41600__$1);
var G__41603 = c__7021__auto___41601;
var G__41604 = cljs.core.count.call(null,c__7021__auto___41601);
var G__41605 = (0);
seq__41586_41590 = G__41602;
chunk__41587_41591 = G__41603;
count__41588_41592 = G__41604;
i__41589_41593 = G__41605;
continue;
} else {
var c_41606 = cljs.core.first.call(null,seq__41586_41600__$1);
tiltontec.cell.evaluate.c_quiesce.call(null,c_41606);

var G__41607 = cljs.core.next.call(null,seq__41586_41600__$1);
var G__41608 = null;
var G__41609 = (0);
var G__41610 = (0);
seq__41586_41590 = G__41607;
chunk__41587_41591 = G__41608;
count__41588_41592 = G__41609;
i__41589_41593 = G__41610;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,me,null);

return tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),me], null),new cljs.core.Keyword(null,"dead","dead",-1946604091));
}));
if(typeof tiltontec.cell.evaluate.unchanged_test !== 'undefined'){
} else {
/**
 * Cells does not propagate when nothing changes. By default, the
 *   test is =, but cells can inject a different test, and when we get
 *   to models it will be possible for a slot to have associated
 *   with it a different test.
 */
tiltontec.cell.evaluate.unchanged_test = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return tiltontec.cell.base.ia_types;},new cljs.core.Symbol("tiltontec.cell.base","ia-types","tiltontec.cell.base/ia-types",436375603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.cell.base","tiltontec.cell.base",-1575671422,null),new cljs.core.Symbol(null,"ia-types","ia-types",322849110,null),"src/tiltontec/cell/base.cljc",14,1,107,107,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.cell.base.ia_types)?tiltontec.cell.base.ia_types.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","unchanged-test"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function (me,slot){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(me)?cljs.core.type.call(null,cljs.core.deref.call(null,me)):null),slot], null);
});})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.unchanged_test,new cljs.core.Keyword(null,"default","default",-1987822328),(function (self,slotname){
return cljs.core._EQ_;
}));
tiltontec.cell.evaluate.c_value_changed_QMARK_ = (function tiltontec$cell$evaluate$c_value_changed_QMARK_(c,new_value,old_value){
return cljs.core.not.call(null,(function (){var or__6210__auto__ = new cljs.core.Keyword(null,"unchanged-if","unchanged-if",-923210106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return tiltontec.cell.evaluate.unchanged_test.call(null,tiltontec.cell.base.c_model.call(null,c),tiltontec.cell.base.c_slot.call(null,c));
}
})().call(null,new_value,old_value));
});
tiltontec.cell.evaluate._STAR_custom_propagater_STAR_ = null;

/**
 * A cell:
 *   - notifies its callers of its change;
 *   - calls any observer; and
 *   - if ephemeral, silently reverts to nil.
 */
tiltontec.cell.evaluate.propagate = (function tiltontec$cell$evaluate$propagate(c,prior_value,callers){
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"propagate","propagate",274376905),new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c)));

if(cljs.core.truth_(tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_)){
if(cljs.core.truth_(tiltontec.cell.evaluate._STAR_custom_propagater_STAR_)){
return tiltontec.cell.evaluate._STAR_custom_propagater_STAR_.call(null,c,prior_value);
} else {
return null;
}
} else {
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),c], null),cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_));

var _STAR_depender_STAR_41619 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR_41620 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR_41621 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR_41622 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

tiltontec.cell.base._STAR_call_stack_STAR_ = null;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{if(cljs.core.truth_((function (){var and__6198__auto__ = prior_value;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(and__6198__auto____$1)){
return tiltontec.cell.base.md_slot_owning_QMARK_.call(null,cljs.core.type.call(null,tiltontec.cell.base.c_model.call(null,c)),tiltontec.cell.base.c_slot_name.call(null,c));
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
var temp__4425__auto___41627 = clojure.set.difference.call(null,tiltontec.util.core.set_ify.call(null,prior_value),tiltontec.util.core.set_ify.call(null,tiltontec.cell.base.c_value.call(null,c)));
if(cljs.core.truth_(temp__4425__auto___41627)){
var ownees_41628 = temp__4425__auto___41627;
var seq__41623_41629 = cljs.core.seq.call(null,ownees_41628);
var chunk__41624_41630 = null;
var count__41625_41631 = (0);
var i__41626_41632 = (0);
while(true){
if((i__41626_41632 < count__41625_41631)){
var ownee_41633 = cljs.core._nth.call(null,chunk__41624_41630,i__41626_41632);
tiltontec.cell.evaluate.not_to_be.call(null,ownee_41633);

var G__41634 = seq__41623_41629;
var G__41635 = chunk__41624_41630;
var G__41636 = count__41625_41631;
var G__41637 = (i__41626_41632 + (1));
seq__41623_41629 = G__41634;
chunk__41624_41630 = G__41635;
count__41625_41631 = G__41636;
i__41626_41632 = G__41637;
continue;
} else {
var temp__4425__auto___41638__$1 = cljs.core.seq.call(null,seq__41623_41629);
if(temp__4425__auto___41638__$1){
var seq__41623_41639__$1 = temp__4425__auto___41638__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41623_41639__$1)){
var c__7021__auto___41640 = cljs.core.chunk_first.call(null,seq__41623_41639__$1);
var G__41641 = cljs.core.chunk_rest.call(null,seq__41623_41639__$1);
var G__41642 = c__7021__auto___41640;
var G__41643 = cljs.core.count.call(null,c__7021__auto___41640);
var G__41644 = (0);
seq__41623_41629 = G__41641;
chunk__41624_41630 = G__41642;
count__41625_41631 = G__41643;
i__41626_41632 = G__41644;
continue;
} else {
var ownee_41645 = cljs.core.first.call(null,seq__41623_41639__$1);
tiltontec.cell.evaluate.not_to_be.call(null,ownee_41645);

var G__41646 = cljs.core.next.call(null,seq__41623_41639__$1);
var G__41647 = null;
var G__41648 = (0);
var G__41649 = (0);
seq__41623_41629 = G__41646;
chunk__41624_41630 = G__41647;
count__41625_41631 = G__41648;
i__41626_41632 = G__41649;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

tiltontec.cell.evaluate.propagate_to_callers.call(null,c,callers);

tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"obs-chkpulse!!!!!!!!","obs-chkpulse!!!!!!!!",498932923),cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_),tiltontec.cell.base.c_pulse_observed.call(null,c));

if(cljs.core.truth_((function (){var or__6210__auto__ = (cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c));
if(or__6210__auto__){
return or__6210__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tiltontec.cell.base.c_lazy.call(null,c)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null));
}
})())){
tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"propagate","propagate",274376905));
} else {
}

return tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_41622;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR_41621;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_41620;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_41619;
}
}
});
tiltontec.cell.evaluate.propagate_to_callers = (function tiltontec$cell$evaluate$propagate_to_callers(c,callers){
if(cljs.core.empty_QMARK_.call(null,callers)){
return null;
} else {
var causation = cljs.core.cons.call(null,c,tiltontec.cell.base._STAR_causation_STAR_);
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388),c,((function (causation){
return (function (opcode,defer_info){
if(cljs.core.truth_(tiltontec.cell.base.mdead_QMARK_.call(null,tiltontec.cell.base.c_model.call(null,c)))){
return tiltontec.util.base.call_trc.call(null,"WHOAA!!!! dead by time :tell-deps dispatched; bailing",c);
} else {
var _STAR_causation_STAR_41655 = tiltontec.cell.base._STAR_causation_STAR_;
tiltontec.cell.base._STAR_causation_STAR_ = causation;

try{var seq__41656 = cljs.core.seq.call(null,cljs.core.seq.call(null,callers));
var chunk__41657 = null;
var count__41658 = (0);
var i__41659 = (0);
while(true){
if((i__41659 < count__41658)){
var caller = cljs.core._nth.call(null,chunk__41657,i__41659);
if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__6210__auto__){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_.call(null,caller);
if(cljs.core.truth_(or__6210__auto____$1)){
return or__6210__auto____$1;
} else {
var or__6210__auto____$2 = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tiltontec.cell.base.c_lazy.call(null,caller)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__6210__auto____$2)){
return or__6210__auto____$2;
} else {
return (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([c], true),tiltontec.cell.base.c_useds.call(null,caller)))) && (cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)));
}
}
}
})())){
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"not-propping","not-propping",438111539),tiltontec.cell.base.c_slot.call(null,c),new cljs.core.Keyword(null,"to","to",192099007),tiltontec.cell.base.c_slot.call(null,caller));
} else {
tiltontec.cell.evaluate.calculate_and_set.call(null,caller,new cljs.core.Keyword(null,"propagate","propagate",274376905),c);

}

var G__41660 = seq__41656;
var G__41661 = chunk__41657;
var G__41662 = count__41658;
var G__41663 = (i__41659 + (1));
seq__41656 = G__41660;
chunk__41657 = G__41661;
count__41658 = G__41662;
i__41659 = G__41663;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__41656);
if(temp__4425__auto__){
var seq__41656__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41656__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__41656__$1);
var G__41664 = cljs.core.chunk_rest.call(null,seq__41656__$1);
var G__41665 = c__7021__auto__;
var G__41666 = cljs.core.count.call(null,c__7021__auto__);
var G__41667 = (0);
seq__41656 = G__41664;
chunk__41657 = G__41665;
count__41658 = G__41666;
i__41659 = G__41667;
continue;
} else {
var caller = cljs.core.first.call(null,seq__41656__$1);
if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__6210__auto__){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_.call(null,caller);
if(cljs.core.truth_(or__6210__auto____$1)){
return or__6210__auto____$1;
} else {
var or__6210__auto____$2 = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tiltontec.cell.base.c_lazy.call(null,caller)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__6210__auto____$2)){
return or__6210__auto____$2;
} else {
return (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([c], true),tiltontec.cell.base.c_useds.call(null,caller)))) && (cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)));
}
}
}
})())){
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"not-propping","not-propping",438111539),tiltontec.cell.base.c_slot.call(null,c),new cljs.core.Keyword(null,"to","to",192099007),tiltontec.cell.base.c_slot.call(null,caller));
} else {
tiltontec.cell.evaluate.calculate_and_set.call(null,caller,new cljs.core.Keyword(null,"propagate","propagate",274376905),c);

}

var G__41668 = cljs.core.next.call(null,seq__41656__$1);
var G__41669 = null;
var G__41670 = (0);
var G__41671 = (0);
seq__41656 = G__41668;
chunk__41657 = G__41669;
count__41658 = G__41670;
i__41659 = G__41671;
continue;
}
} else {
return null;
}
}
break;
}
}finally {tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR_41655;
}}
});})(causation))
);
}
});
