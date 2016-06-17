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
var temp__4425__auto___14950 = new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc));
if(cljs.core.truth_(temp__4425__auto___14950)){
var me_14951 = temp__4425__auto___14950;
cljs.core.swap_BANG_.call(null,me_14951,cljs.core.assoc,new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc)),null);
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
var G__14985 = cljs.core.seq.call(null,tiltontec.cell.base.c_useds.call(null,c));
var vec__14986 = G__14985;
var seq__14987 = cljs.core.seq.call(null,vec__14986);
var first__14988 = cljs.core.first.call(null,seq__14987);
var seq__14987__$1 = cljs.core.next.call(null,seq__14987);
var used = first__14988;
var urest = seq__14987__$1;
var G__14985__$1 = G__14985;
while(true){
var vec__14989 = G__14985__$1;
var seq__14990 = cljs.core.seq.call(null,vec__14989);
var first__14991 = cljs.core.first.call(null,seq__14990);
var seq__14990__$1 = cljs.core.next.call(null,seq__14990);
var used__$1 = first__14991;
var urest__$1 = seq__14990__$1;
if(cljs.core.truth_(used__$1)){
cljs.core.println.call(null,new cljs.core.Keyword(null,"pcell","pcell",-240144130),new cljs.core.Keyword(null,"cnset-evicing","cnset-evicing",380848352),tiltontec.cell.base.c_slot.call(null,used__$1),tiltontec.cell.base.c_state.call(null,used__$1));

tiltontec$cell$evaluate$ensure_value_is_current.call(null,used__$1,new cljs.core.Keyword(null,"nested","nested",18943849),c);

var or__6210__auto____$1 = (tiltontec.cell.base.c_pulse_last_changed.call(null,used__$1) > tiltontec.cell.base.c_pulse.call(null,c));
if(or__6210__auto____$1){
return or__6210__auto____$1;
} else {
var G__14992 = urest__$1;
G__14985__$1 = G__14992;
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
var result__8295__auto__ = tiltontec.cell.integrity.call_with_integrity.call(null,null,null,(function (opcode,defer_info){
var prior_value = tiltontec.cell.base.c_value.call(null,c);
var result__8295__auto__ = tiltontec.cell.evaluate.ensure_value_is_current.call(null,c,new cljs.core.Keyword(null,"c-read","c-read",-1481921085),null);
if(((tiltontec.cell.base.c_model.call(null,c) == null)) && (cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,c),new cljs.core.Keyword(null,"nascent","nascent",443401807))) && ((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c)))){
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"cget","cget",1794378742));

tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
}

return result__8295__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.evaluate.record_dependency.call(null,c);
} else {
}

return result__8295__auto__;
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
var _STAR_call_stack_STAR_14996 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR_14997 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR_14998 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_call_stack_STAR_ = cljs.core.cons.call(null,c,tiltontec.cell.base._STAR_call_stack_STAR_);

tiltontec.cell.base._STAR_depender_STAR_ = c;

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"pre-rule-clear","pre-rule-clear",258781380));

if(cljs.core.truth_(tiltontec.cell.base.c_rule.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No rule in %s type %s"),cljs.core.str(new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str(cljs.core.type.call(null,cljs.core.deref.call(null,c)))].join('')),cljs.core.str("\n"),cljs.core.str("(c-rule c)")].join('')));
}

return tiltontec.cell.base.c_rule.call(null,c).call(null,c);
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_14998;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_14997;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_14996;
}});
if(typeof tiltontec.cell.evaluate.c_awaken !== 'undefined'){
} else {
tiltontec.cell.evaluate.c_awaken = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","c-awaken"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function (c){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,c));
});})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword(null,"default","default",-1987822328),(function (c){
if(cljs.core.coll_QMARK_.call(null,c)){
return cljs.core.doall.call(null,(function (){var iter__6990__auto__ = (function tiltontec$cell$evaluate$iter__14999(s__15000){
return (new cljs.core.LazySeq(null,(function (){
var s__15000__$1 = s__15000;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15000__$1);
if(temp__4425__auto__){
var s__15000__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15000__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__15000__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__15002 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__15001 = (0);
while(true){
if((i__15001 < size__6989__auto__)){
var ce = cljs.core._nth.call(null,c__6988__auto__,i__15001);
cljs.core.chunk_append.call(null,b__15002,tiltontec.cell.evaluate.c_awaken.call(null,ce));

var G__15003 = (i__15001 + (1));
i__15001 = G__15003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15002),tiltontec$cell$evaluate$iter__14999.call(null,cljs.core.chunk_rest.call(null,s__15000__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15002),null);
}
} else {
var ce = cljs.core.first.call(null,s__15000__$2);
return cljs.core.cons.call(null,tiltontec.cell.evaluate.c_awaken.call(null,ce),tiltontec$cell$evaluate$iter__14999.call(null,cljs.core.rest.call(null,s__15000__$2)));
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
var temp__4425__auto___15004 = tiltontec.cell.base.c_me.call(null,c);
if(cljs.core.truth_(temp__4425__auto___15004)){
var me_15005 = temp__4425__auto___15004;
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot.call(null,c),me_15005], null),tiltontec.cell.base.c_value.call(null,c));
} else {
}

tiltontec.cell.observer.c_observe.call(null,c,new cljs.core.Keyword(null,"cell-awaken","cell-awaken",2137807704));

return tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037),(function (c){
var _STAR_depender_STAR_15006 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set.call(null,c,new cljs.core.Keyword(null,"fn-c-awaken","fn-c-awaken",1597115821),null);
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_15006;
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

var result__8295__auto__ = new_value;
var _STAR_depender_STAR_15009_15011 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var prior_value_15012 = tiltontec.cell.base.c_value.call(null,c);
var prior_state_15013 = tiltontec.cell.base.c_value_state.call(null,c);
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
var or__6210__auto____$1 = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([prior_state_15013], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"uncurrent","uncurrent",-217246265)], null)));
if(or__6210__auto____$1){
return or__6210__auto____$1;
} else {
return tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_15012);
}
}
})())){
var callers_15014 = tiltontec.cell.base.c_callers.call(null,c);
var temp__4425__auto___15015 = (function (){var and__6198__auto__ = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__6198__auto__)){
return tiltontec.cell.base.c_optimize.call(null,c);
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto___15015)){
var optimize_15016 = temp__4425__auto___15015;
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"wtf","wtf",-1581114577),optimize_15016);

var G__15010_15017 = optimize_15016;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),G__15010_15017)){
if(cljs.core.truth_(tiltontec.cell.base.c_value.call(null,c))){
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),tiltontec.cell.base.c_slot.call(null,c));

tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336));
} else {
}
} else {
if(cljs.core._EQ_.call(null,true,G__15010_15017)){
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_15012);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(optimize_15016)].join('')));

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

tiltontec.cell.evaluate.propagate.call(null,c,prior_value_15012,callers_15014);
}
} else {
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_15009_15011;
}
return result__8295__auto__;
});
tiltontec.cell.evaluate.unlink_from_used = (function tiltontec$cell$evaluate$unlink_from_used(c,why){

var iter__6990__auto___15026 = (function tiltontec$cell$evaluate$unlink_from_used_$_iter__15022(s__15023){
return (new cljs.core.LazySeq(null,(function (){
var s__15023__$1 = s__15023;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15023__$1);
if(temp__4425__auto__){
var s__15023__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15023__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__15023__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__15025 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__15024 = (0);
while(true){
if((i__15024 < size__6989__auto__)){
var used = cljs.core._nth.call(null,c__6988__auto__,i__15024);
cljs.core.chunk_append.call(null,b__15025,tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),c)));

var G__15027 = (i__15024 + (1));
i__15024 = G__15027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15025),tiltontec$cell$evaluate$unlink_from_used_$_iter__15022.call(null,cljs.core.chunk_rest.call(null,s__15023__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15025),null);
}
} else {
var used = cljs.core.first.call(null,s__15023__$2);
return cljs.core.cons.call(null,tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),c)),tiltontec$cell$evaluate$unlink_from_used_$_iter__15022.call(null,cljs.core.rest.call(null,s__15023__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__6990__auto___15026.call(null,tiltontec.cell.base.c_useds.call(null,c));

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

var temp__4425__auto___15036 = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4425__auto___15036)){
var me_15037 = temp__4425__auto___15036;
tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me_15037], null),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me_15037)),tiltontec.cell.base.c_slot.call(null,c),null));

tiltontec.cell.evaluate.md_cell_flush.call(null,c);
} else {
}

var seq__15032_15038 = cljs.core.seq.call(null,cljs.core.seq.call(null,tiltontec.cell.base.c_callers.call(null,c)));
var chunk__15033_15039 = null;
var count__15034_15040 = (0);
var i__15035_15041 = (0);
while(true){
if((i__15035_15041 < count__15034_15040)){
var caller_15042 = cljs.core._nth.call(null,chunk__15033_15039,i__15035_15041);
cljs.core.swap_BANG_.call(null,caller_15042,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([c], true),tiltontec.cell.base.c_useds.call(null,caller_15042)));

tiltontec.cell.base.caller_drop.call(null,c,caller_15042);

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_15042,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

var G__15043 = seq__15032_15038;
var G__15044 = chunk__15033_15039;
var G__15045 = count__15034_15040;
var G__15046 = (i__15035_15041 + (1));
seq__15032_15038 = G__15043;
chunk__15033_15039 = G__15044;
count__15034_15040 = G__15045;
i__15035_15041 = G__15046;
continue;
} else {
var temp__4425__auto___15047 = cljs.core.seq.call(null,seq__15032_15038);
if(temp__4425__auto___15047){
var seq__15032_15048__$1 = temp__4425__auto___15047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15032_15048__$1)){
var c__7021__auto___15049 = cljs.core.chunk_first.call(null,seq__15032_15048__$1);
var G__15050 = cljs.core.chunk_rest.call(null,seq__15032_15048__$1);
var G__15051 = c__7021__auto___15049;
var G__15052 = cljs.core.count.call(null,c__7021__auto___15049);
var G__15053 = (0);
seq__15032_15038 = G__15050;
chunk__15033_15039 = G__15051;
count__15034_15040 = G__15052;
i__15035_15041 = G__15053;
continue;
} else {
var caller_15054 = cljs.core.first.call(null,seq__15032_15048__$1);
cljs.core.swap_BANG_.call(null,caller_15054,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([c], true),tiltontec.cell.base.c_useds.call(null,caller_15054)));

tiltontec.cell.base.caller_drop.call(null,c,caller_15054);

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_15054,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

var G__15055 = cljs.core.next.call(null,seq__15032_15048__$1);
var G__15056 = null;
var G__15057 = (0);
var G__15058 = (0);
seq__15032_15038 = G__15055;
chunk__15033_15039 = G__15056;
count__15034_15040 = G__15057;
i__15035_15041 = G__15058;
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
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

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
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
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
var seq__15059_15063 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me))));
var chunk__15060_15064 = null;
var count__15061_15065 = (0);
var i__15062_15066 = (0);
while(true){
if((i__15062_15066 < count__15061_15065)){
var c_15067 = cljs.core._nth.call(null,chunk__15060_15064,i__15062_15066);
if(cljs.core.truth_(c_15067)){
tiltontec.cell.evaluate.c_quiesce.call(null,c_15067);
} else {
}

var G__15068 = seq__15059_15063;
var G__15069 = chunk__15060_15064;
var G__15070 = count__15061_15065;
var G__15071 = (i__15062_15066 + (1));
seq__15059_15063 = G__15068;
chunk__15060_15064 = G__15069;
count__15061_15065 = G__15070;
i__15062_15066 = G__15071;
continue;
} else {
var temp__4425__auto___15072 = cljs.core.seq.call(null,seq__15059_15063);
if(temp__4425__auto___15072){
var seq__15059_15073__$1 = temp__4425__auto___15072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15059_15073__$1)){
var c__7021__auto___15074 = cljs.core.chunk_first.call(null,seq__15059_15073__$1);
var G__15075 = cljs.core.chunk_rest.call(null,seq__15059_15073__$1);
var G__15076 = c__7021__auto___15074;
var G__15077 = cljs.core.count.call(null,c__7021__auto___15074);
var G__15078 = (0);
seq__15059_15063 = G__15075;
chunk__15060_15064 = G__15076;
count__15061_15065 = G__15077;
i__15062_15066 = G__15078;
continue;
} else {
var c_15079 = cljs.core.first.call(null,seq__15059_15073__$1);
if(cljs.core.truth_(c_15079)){
tiltontec.cell.evaluate.c_quiesce.call(null,c_15079);
} else {
}

var G__15080 = cljs.core.next.call(null,seq__15059_15073__$1);
var G__15081 = null;
var G__15082 = (0);
var G__15083 = (0);
seq__15059_15063 = G__15080;
chunk__15060_15064 = G__15081;
count__15061_15065 = G__15082;
i__15062_15066 = G__15083;
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
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
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

var _STAR_depender_STAR_15092 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR_15093 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR_15094 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR_15095 = tiltontec.cell.base._STAR_defer_changes_STAR_;
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
var temp__4425__auto___15100 = clojure.set.difference.call(null,tiltontec.util.core.set_ify.call(null,prior_value),tiltontec.util.core.set_ify.call(null,tiltontec.cell.base.c_value.call(null,c)));
if(cljs.core.truth_(temp__4425__auto___15100)){
var ownees_15101 = temp__4425__auto___15100;
var seq__15096_15102 = cljs.core.seq.call(null,ownees_15101);
var chunk__15097_15103 = null;
var count__15098_15104 = (0);
var i__15099_15105 = (0);
while(true){
if((i__15099_15105 < count__15098_15104)){
var ownee_15106 = cljs.core._nth.call(null,chunk__15097_15103,i__15099_15105);
tiltontec.cell.evaluate.not_to_be.call(null,ownee_15106);

var G__15107 = seq__15096_15102;
var G__15108 = chunk__15097_15103;
var G__15109 = count__15098_15104;
var G__15110 = (i__15099_15105 + (1));
seq__15096_15102 = G__15107;
chunk__15097_15103 = G__15108;
count__15098_15104 = G__15109;
i__15099_15105 = G__15110;
continue;
} else {
var temp__4425__auto___15111__$1 = cljs.core.seq.call(null,seq__15096_15102);
if(temp__4425__auto___15111__$1){
var seq__15096_15112__$1 = temp__4425__auto___15111__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15096_15112__$1)){
var c__7021__auto___15113 = cljs.core.chunk_first.call(null,seq__15096_15112__$1);
var G__15114 = cljs.core.chunk_rest.call(null,seq__15096_15112__$1);
var G__15115 = c__7021__auto___15113;
var G__15116 = cljs.core.count.call(null,c__7021__auto___15113);
var G__15117 = (0);
seq__15096_15102 = G__15114;
chunk__15097_15103 = G__15115;
count__15098_15104 = G__15116;
i__15099_15105 = G__15117;
continue;
} else {
var ownee_15118 = cljs.core.first.call(null,seq__15096_15112__$1);
tiltontec.cell.evaluate.not_to_be.call(null,ownee_15118);

var G__15119 = cljs.core.next.call(null,seq__15096_15112__$1);
var G__15120 = null;
var G__15121 = (0);
var G__15122 = (0);
seq__15096_15102 = G__15119;
chunk__15097_15103 = G__15120;
count__15098_15104 = G__15121;
i__15099_15105 = G__15122;
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
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_15095;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR_15094;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_15093;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_15092;
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
var _STAR_causation_STAR_15128 = tiltontec.cell.base._STAR_causation_STAR_;
tiltontec.cell.base._STAR_causation_STAR_ = causation;

try{var seq__15129 = cljs.core.seq.call(null,cljs.core.seq.call(null,callers));
var chunk__15130 = null;
var count__15131 = (0);
var i__15132 = (0);
while(true){
if((i__15132 < count__15131)){
var caller = cljs.core._nth.call(null,chunk__15130,i__15132);
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

var G__15133 = seq__15129;
var G__15134 = chunk__15130;
var G__15135 = count__15131;
var G__15136 = (i__15132 + (1));
seq__15129 = G__15133;
chunk__15130 = G__15134;
count__15131 = G__15135;
i__15132 = G__15136;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15129);
if(temp__4425__auto__){
var seq__15129__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15129__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__15129__$1);
var G__15137 = cljs.core.chunk_rest.call(null,seq__15129__$1);
var G__15138 = c__7021__auto__;
var G__15139 = cljs.core.count.call(null,c__7021__auto__);
var G__15140 = (0);
seq__15129 = G__15137;
chunk__15130 = G__15138;
count__15131 = G__15139;
i__15132 = G__15140;
continue;
} else {
var caller = cljs.core.first.call(null,seq__15129__$1);
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

var G__15141 = cljs.core.next.call(null,seq__15129__$1);
var G__15142 = null;
var G__15143 = (0);
var G__15144 = (0);
seq__15129 = G__15141;
chunk__15130 = G__15142;
count__15131 = G__15143;
i__15132 = G__15144;
continue;
}
} else {
return null;
}
}
break;
}
}finally {tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR_15128;
}}
});})(causation))
);
}
});
