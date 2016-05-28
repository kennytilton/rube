// Compiled by ClojureScript 1.7.48 {}
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
var temp__4425__auto___21203 = new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc));
if(cljs.core.truth_(temp__4425__auto___21203)){
var me_21204 = temp__4425__auto___21203;
cljs.core.swap_BANG_.call(null,me_21204,cljs.core.assoc,new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc)),null);
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"*depender*","*depender*",1156413950,null)))].join('')));
}

tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"reco-dep!!!","reco-dep!!!",380319801),new cljs.core.Keyword(null,"used","used",-1414786177),tiltontec.cell.base.c_slot.call(null,used),new cljs.core.Keyword(null,"caller","caller",-1275362879),tiltontec.cell.base.c_slot.call(null,tiltontec.cell.base._STAR_depender_STAR_));

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useds","useds",621350967),tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.call(null,tiltontec.cell.base.c_useds.call(null,tiltontec.cell.base._STAR_depender_STAR_),used));

return tiltontec.cell.base.caller_ensure.call(null,used,tiltontec.cell.base._STAR_depender_STAR_);
}
});
/**
 * The key to data integrity: recursively check the known dependency
 * graph to decide if we are current, and if not kick off recalculation
 * and propagation.
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
if(cljs.core.truth_((function (){var and__4542__auto__ = tiltontec.cell.base.c_input_QMARK_.call(null,c);
if(cljs.core.truth_(and__4542__auto__)){
var and__4542__auto____$1 = tiltontec.cell.base.c_valid_QMARK_.call(null,c);
if(cljs.core.truth_(and__4542__auto____$1)){
return cljs.core.not.call(null,(function (){var and__4542__auto____$2 = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__4542__auto____$2)){
return (cljs.core._EQ_.call(null,tiltontec.cell.base.c_optimize.call(null,c),new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336))) && ((tiltontec.cell.base.c_value.call(null,c) == null));
} else {
return and__4542__auto____$2;
}
})());
} else {
return and__4542__auto____$1;
}
} else {
return and__4542__auto__;
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
if(cljs.core.truth_((function (){var or__4554__auto__ = cljs.core.not.call(null,tiltontec.cell.base.c_valid_QMARK_.call(null,c));
if(or__4554__auto__){
return or__4554__auto__;
} else {
var G__21218 = cljs.core.seq.call(null,tiltontec.cell.base.c_useds.call(null,c));
var vec__21219 = G__21218;
var used = cljs.core.nth.call(null,vec__21219,(0),null);
var urest = cljs.core.nthnext.call(null,vec__21219,(1));
var G__21218__$1 = G__21218;
while(true){
var vec__21220 = G__21218__$1;
var used__$1 = cljs.core.nth.call(null,vec__21220,(0),null);
var urest__$1 = cljs.core.nthnext.call(null,vec__21220,(1));
if(cljs.core.truth_(used__$1)){
tiltontec$cell$evaluate$ensure_value_is_current.call(null,used__$1,new cljs.core.Keyword(null,"nested","nested",18943849),c);

var or__4554__auto____$1 = (tiltontec.cell.base.c_pulse_last_changed.call(null,used__$1) > tiltontec.cell.base.c_pulse.call(null,c));
if(or__4554__auto____$1){
return or__4554__auto____$1;
} else {
var G__21221 = urest__$1;
G__21218__$1 = G__21221;
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
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"not-current-so-calc","not-current-so-calc",1987242617));

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
 * Ensures value is current, records any dependent, and
 * notices if a standalone  cell has never been observed.
 */
tiltontec.cell.evaluate.c_get = (function tiltontec$cell$evaluate$c_get(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
var result__20788__auto__ = tiltontec.cell.integrity.call_with_integrity.call(null,null,null,(function (opcode,defer_info){
var prior_value = tiltontec.cell.base.c_value.call(null,c);
var result__20788__auto__ = tiltontec.cell.evaluate.ensure_value_is_current.call(null,c,new cljs.core.Keyword(null,"c-read","c-read",-1481921085),null);
if(((tiltontec.cell.base.c_model.call(null,c) == null)) && (cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,c),new cljs.core.Keyword(null,"nascent","nascent",443401807))) && ((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c)))){
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"c-get","c-get",-1456818517));

tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
}

return result__20788__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.evaluate.record_dependency.call(null,c);
} else {
}

return result__20788__auto__;
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("calc-n-set"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)))))].join('')));
}

return tiltontec.cell.evaluate.c_value_assume.call(null,c,raw_value,null);
}
});
/**
 * The name is accurate: we do no more than invoke the
 * rule of a formula and return its value, but along the
 * way the links between dependencies and dependents get
 * determined anew.
 */
tiltontec.cell.evaluate.calculate_and_link = (function tiltontec$cell$evaluate$calculate_and_link(c){
var _STAR_call_stack_STAR_21225 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR_21226 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR_21227 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_call_stack_STAR_ = cljs.core.cons.call(null,c,tiltontec.cell.base._STAR_call_stack_STAR_);

tiltontec.cell.base._STAR_depender_STAR_ = c;

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"pre-rule-clear","pre-rule-clear",258781380));

if(cljs.core.truth_(tiltontec.cell.base.c_rule.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No rule in %s type %s"),cljs.core.str(new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str(cljs.core.type.call(null,cljs.core.deref.call(null,c)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"c-rule","c-rule",-450877289,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return tiltontec.cell.base.c_rule.call(null,c).call(null,c);
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_21227;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_21226;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_21225;
}});
if(typeof tiltontec.cell.evaluate.c_awaken !== 'undefined'){
} else {
tiltontec.cell.evaluate.c_awaken = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","c-awaken"),((function (method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__,hierarchy__5452__auto__){
return (function (c){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,c));
});})(method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__,hierarchy__5452__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword(null,"default","default",-1987822328),(function (c){
if(cljs.core.coll_QMARK_.call(null,c)){
return cljs.core.doall.call(null,(function (){var iter__5307__auto__ = (function tiltontec$cell$evaluate$iter__21228(s__21229){
return (new cljs.core.LazySeq(null,(function (){
var s__21229__$1 = s__21229;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21229__$1);
if(temp__4425__auto__){
var s__21229__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21229__$2)){
var c__5305__auto__ = cljs.core.chunk_first.call(null,s__21229__$2);
var size__5306__auto__ = cljs.core.count.call(null,c__5305__auto__);
var b__21231 = cljs.core.chunk_buffer.call(null,size__5306__auto__);
if((function (){var i__21230 = (0);
while(true){
if((i__21230 < size__5306__auto__)){
var ce = cljs.core._nth.call(null,c__5305__auto__,i__21230);
cljs.core.chunk_append.call(null,b__21231,tiltontec.cell.evaluate.c_awaken.call(null,ce));

var G__21232 = (i__21230 + (1));
i__21230 = G__21232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21231),tiltontec$cell$evaluate$iter__21228.call(null,cljs.core.chunk_rest.call(null,s__21229__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21231),null);
}
} else {
var ce = cljs.core.first.call(null,s__21229__$2);
return cljs.core.cons.call(null,tiltontec.cell.evaluate.c_awaken.call(null,ce),tiltontec$cell$evaluate$iter__21228.call(null,cljs.core.rest.call(null,s__21229__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5307__auto__.call(null,c);
})());
} else {
return cljs.core.println.call(null,new cljs.core.Keyword(null,"c-awaken-fall-thru","c-awaken-fall-thru",-2004606871),(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,c))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref-of","ref-of",1886926194),cljs.core.type.call(null,c),cljs.core.deref.call(null,c)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unref","unref",-1884894186),c,cljs.core.type.call(null,c)], null)));

}
}));
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071),(function (c){
if(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"c-input?","c-input?",1285120932,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c))){
var temp__4425__auto___21233 = tiltontec.cell.base.c_me.call(null,c);
if(cljs.core.truth_(temp__4425__auto___21233)){
var me_21234 = temp__4425__auto___21233;
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot.call(null,c),me_21234], null),tiltontec.cell.base.c_value.call(null,c));
} else {
}

tiltontec.cell.observer.c_observe.call(null,c,new cljs.core.Keyword(null,"cell-awaken","cell-awaken",2137807704));

return tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037),(function (c){
var _STAR_depender_STAR_21235 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set.call(null,c,new cljs.core.Keyword(null,"fn-c-awaken","fn-c-awaken",1597115821),null);
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_21235;
}}));



tiltontec.cell.evaluate.md_slot_value_store = (function tiltontec$cell$evaluate$md_slot_value_store(me,slot,value){
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"me","me",1501524834,null)))].join('')));
}

if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,me))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"any-ref?","any-ref?",-153183574,null),new cljs.core.Symbol(null,"me","me",1501524834,null))))].join('')));
}

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),value);
});
/**
 * The Cell assumes a new value at awakening, on c-reset!, or
 * after formula recalculation.
 * 
 * We record the new value, set the Cell state to :awake, make
 * its pulse current, check to see if a formula cell can be
 * optimized away, and then propagate to any dependent formula
 * cells.
 */
tiltontec.cell.evaluate.c_value_assume = (function tiltontec$cell$evaluate$c_value_assume(c,new_value,propagation_code){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"c-ref?","c-ref?",794690162,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var result__20788__auto__ = new_value;
var _STAR_depender_STAR_21238_21240 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var prior_value_21241 = tiltontec.cell.base.c_value.call(null,c);
var prior_state_21242 = tiltontec.cell.base.c_value_state.call(null,c);
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),c], null),new_value);

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

if(cljs.core.truth_((function (){var and__4542__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(and__4542__auto__)){
return cljs.core.not.call(null,tiltontec.cell.base.c_synaptic_QMARK_.call(null,c));
} else {
return and__4542__auto__;
}
})())){
tiltontec.cell.evaluate.md_slot_value_store.call(null,tiltontec.cell.base.c_model.call(null,c),tiltontec.cell.base.c_slot_name.call(null,c),new_value);
} else {
}

tiltontec.cell.integrity.c_pulse_update.call(null,c,new cljs.core.Keyword(null,"slotv-assume","slotv-assume",-1071260275));

if(cljs.core.truth_((function (){var or__4554__auto__ = cljs.core._EQ_.call(null,propagation_code,new cljs.core.Keyword(null,"propagate","propagate",274376905));
if(or__4554__auto__){
return or__4554__auto__;
} else {
var or__4554__auto____$1 = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([prior_state_21242], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"uncurrent","uncurrent",-217246265)], null)));
if(or__4554__auto____$1){
return or__4554__auto____$1;
} else {
return tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_21241);
}
}
})())){
var callers_21243 = tiltontec.cell.base.c_callers.call(null,c);
var temp__4425__auto___21244 = (function (){var and__4542__auto__ = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__4542__auto__)){
return tiltontec.cell.base.c_optimize.call(null,c);
} else {
return and__4542__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto___21244)){
var optimize_21245 = temp__4425__auto___21244;
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"wtf","wtf",-1581114577),optimize_21245);

var G__21239_21246 = optimize_21245;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),G__21239_21246)){
if(cljs.core.truth_(tiltontec.cell.base.c_value.call(null,c))){
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),tiltontec.cell.base.c_slot.call(null,c));

tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336));
} else {
}
} else {
if(cljs.core._EQ_.call(null,true,G__21239_21246)){
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_21241);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(optimize_21245)].join('')));

}
}
} else {
}

if(cljs.core.truth_((function (){var or__4554__auto__ = cljs.core._EQ_.call(null,propagation_code,new cljs.core.Keyword(null,"no-propagate","no-propagate",-573850970));
if(or__4554__auto__){
return or__4554__auto__;
} else {
return tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c);
}
})())){
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"c","c",-122660552,null)))))].join('')));
}

tiltontec.cell.evaluate.propagate.call(null,c,prior_value_21241,callers_21243);
}
} else {
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_21238_21240;
}
return result__20788__auto__;
});
tiltontec.cell.evaluate.unlink_from_used = (function tiltontec$cell$evaluate$unlink_from_used(c,why){

var iter__5307__auto___21255 = (function tiltontec$cell$evaluate$unlink_from_used_$_iter__21251(s__21252){
return (new cljs.core.LazySeq(null,(function (){
var s__21252__$1 = s__21252;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21252__$1);
if(temp__4425__auto__){
var s__21252__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21252__$2)){
var c__5305__auto__ = cljs.core.chunk_first.call(null,s__21252__$2);
var size__5306__auto__ = cljs.core.count.call(null,c__5305__auto__);
var b__21254 = cljs.core.chunk_buffer.call(null,size__5306__auto__);
if((function (){var i__21253 = (0);
while(true){
if((i__21253 < size__5306__auto__)){
var used = cljs.core._nth.call(null,c__5305__auto__,i__21253);
cljs.core.chunk_append.call(null,b__21254,tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),c)));

var G__21256 = (i__21253 + (1));
i__21253 = G__21256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21254),tiltontec$cell$evaluate$unlink_from_used_$_iter__21251.call(null,cljs.core.chunk_rest.call(null,s__21252__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21254),null);
}
} else {
var used = cljs.core.first.call(null,s__21252__$2);
return cljs.core.cons.call(null,tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),c)),tiltontec$cell$evaluate$unlink_from_used_$_iter__21251.call(null,cljs.core.rest.call(null,s__21252__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__5307__auto___21255.call(null,tiltontec.cell.base.c_useds.call(null,c));

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useds","useds",621350967),c], null),cljs.core.PersistentHashSet.EMPTY);
});
tiltontec.cell.evaluate.md_cell_flush = (function tiltontec$cell$evaluate$md_cell_flush(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"c-ref?","c-ref?",794690162,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
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
 * saving a lot of work at runtime. A caller/user will not bother
 * establishing a link, and when we get to models c-get! will
 * find a non-cell in a slot and Just Use It.
 */
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_ = (function tiltontec$cell$evaluate$optimize_away_QMARK__BANG_(c,prior_value){
if(cljs.core.truth_((function (){var and__4542__auto__ = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__4542__auto__)){
var and__4542__auto____$1 = cljs.core.empty_QMARK_.call(null,tiltontec.cell.base.c_useds.call(null,c));
if(and__4542__auto____$1){
var and__4542__auto____$2 = tiltontec.cell.base.c_optimize.call(null,c);
if(cljs.core.truth_(and__4542__auto____$2)){
var and__4542__auto____$3 = cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c));
if(and__4542__auto____$3){
var and__4542__auto____$4 = tiltontec.cell.base.c_valid_QMARK_.call(null,c);
if(cljs.core.truth_(and__4542__auto____$4)){
return (cljs.core.not.call(null,tiltontec.cell.base.c_synaptic_QMARK_.call(null,c))) && (cljs.core.not.call(null,tiltontec.cell.base.c_input_QMARK_.call(null,c)));
} else {
return and__4542__auto____$4;
}
} else {
return and__4542__auto____$3;
}
} else {
return and__4542__auto____$2;
}
} else {
return and__4542__auto____$1;
}
} else {
return and__4542__auto__;
}
})())){
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),c], null),new cljs.core.Keyword(null,"optimized-away","optimized-away",876765856));

tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"opti-away","opti-away",1290785499));

var temp__4425__auto___21265 = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4425__auto___21265)){
var me_21266 = temp__4425__auto___21265;
tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me_21266], null),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me_21266)),tiltontec.cell.base.c_slot.call(null,c)));

tiltontec.cell.evaluate.md_cell_flush.call(null,c);
} else {
}

var seq__21261_21267 = cljs.core.seq.call(null,cljs.core.seq.call(null,tiltontec.cell.base.c_callers.call(null,c)));
var chunk__21262_21268 = null;
var count__21263_21269 = (0);
var i__21264_21270 = (0);
while(true){
if((i__21264_21270 < count__21263_21269)){
var caller_21271 = cljs.core._nth.call(null,chunk__21262_21268,i__21264_21270);
cljs.core.swap_BANG_.call(null,caller_21271,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([c], true),tiltontec.cell.base.c_useds.call(null,caller_21271)));

tiltontec.cell.base.caller_drop.call(null,c,caller_21271);

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_21271,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

var G__21272 = seq__21261_21267;
var G__21273 = chunk__21262_21268;
var G__21274 = count__21263_21269;
var G__21275 = (i__21264_21270 + (1));
seq__21261_21267 = G__21272;
chunk__21262_21268 = G__21273;
count__21263_21269 = G__21274;
i__21264_21270 = G__21275;
continue;
} else {
var temp__4425__auto___21276 = cljs.core.seq.call(null,seq__21261_21267);
if(temp__4425__auto___21276){
var seq__21261_21277__$1 = temp__4425__auto___21276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21261_21277__$1)){
var c__5338__auto___21278 = cljs.core.chunk_first.call(null,seq__21261_21277__$1);
var G__21279 = cljs.core.chunk_rest.call(null,seq__21261_21277__$1);
var G__21280 = c__5338__auto___21278;
var G__21281 = cljs.core.count.call(null,c__5338__auto___21278);
var G__21282 = (0);
seq__21261_21267 = G__21279;
chunk__21262_21268 = G__21280;
count__21263_21269 = G__21281;
i__21264_21270 = G__21282;
continue;
} else {
var caller_21283 = cljs.core.first.call(null,seq__21261_21277__$1);
cljs.core.swap_BANG_.call(null,caller_21283,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([c], true),tiltontec.cell.base.c_useds.call(null,caller_21283)));

tiltontec.cell.base.caller_drop.call(null,c,caller_21283);

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_21283,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

var G__21284 = cljs.core.next.call(null,seq__21261_21277__$1);
var G__21285 = null;
var G__21286 = (0);
var G__21287 = (0);
seq__21261_21267 = G__21284;
chunk__21262_21268 = G__21285;
count__21263_21269 = G__21286;
i__21264_21270 = G__21287;
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
tiltontec.cell.evaluate.not_to_be = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","not-to-be"),((function (method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__,hierarchy__5452__auto__){
return (function (me){
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,me))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"md-ref?","md-ref?",1571167727,null),new cljs.core.Symbol(null,"me","me",1501524834,null))))].join('')));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.type.call(null,(cljs.core.truth_(me)?cljs.core.deref.call(null,me):null))], null);
});})(method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__,hierarchy__5452__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.not_to_be,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
var seq__21288_21292 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me))));
var chunk__21289_21293 = null;
var count__21290_21294 = (0);
var i__21291_21295 = (0);
while(true){
if((i__21291_21295 < count__21290_21294)){
var c_21296 = cljs.core._nth.call(null,chunk__21289_21293,i__21291_21295);
tiltontec.cell.evaluate.c_quiesce.call(null,c_21296);

var G__21297 = seq__21288_21292;
var G__21298 = chunk__21289_21293;
var G__21299 = count__21290_21294;
var G__21300 = (i__21291_21295 + (1));
seq__21288_21292 = G__21297;
chunk__21289_21293 = G__21298;
count__21290_21294 = G__21299;
i__21291_21295 = G__21300;
continue;
} else {
var temp__4425__auto___21301 = cljs.core.seq.call(null,seq__21288_21292);
if(temp__4425__auto___21301){
var seq__21288_21302__$1 = temp__4425__auto___21301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21288_21302__$1)){
var c__5338__auto___21303 = cljs.core.chunk_first.call(null,seq__21288_21302__$1);
var G__21304 = cljs.core.chunk_rest.call(null,seq__21288_21302__$1);
var G__21305 = c__5338__auto___21303;
var G__21306 = cljs.core.count.call(null,c__5338__auto___21303);
var G__21307 = (0);
seq__21288_21292 = G__21304;
chunk__21289_21293 = G__21305;
count__21290_21294 = G__21306;
i__21291_21295 = G__21307;
continue;
} else {
var c_21308 = cljs.core.first.call(null,seq__21288_21302__$1);
tiltontec.cell.evaluate.c_quiesce.call(null,c_21308);

var G__21309 = cljs.core.next.call(null,seq__21288_21302__$1);
var G__21310 = null;
var G__21311 = (0);
var G__21312 = (0);
seq__21288_21292 = G__21309;
chunk__21289_21293 = G__21310;
count__21290_21294 = G__21311;
i__21291_21295 = G__21312;
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
 * test is =, but cells can inject a different test, and when we get
 * to models it will be possible for a slot to have associated
 * with it a different test.
 */
tiltontec.cell.evaluate.unchanged_test = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","unchanged-test"),((function (method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__,hierarchy__5452__auto__){
return (function (me,slot){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(me)?cljs.core.type.call(null,cljs.core.deref.call(null,me)):null),slot], null);
});})(method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__,hierarchy__5452__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.unchanged_test,new cljs.core.Keyword(null,"default","default",-1987822328),(function (self,slotname){
return cljs.core._EQ_;
}));
tiltontec.cell.evaluate.c_value_changed_QMARK_ = (function tiltontec$cell$evaluate$c_value_changed_QMARK_(c,new_value,old_value){
return cljs.core.not.call(null,(function (){var or__4554__auto__ = new cljs.core.Keyword(null,"unchanged-if","unchanged-if",-923210106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
if(cljs.core.truth_(or__4554__auto__)){
return or__4554__auto__;
} else {
return tiltontec.cell.evaluate.unchanged_test.call(null,tiltontec.cell.base.c_model.call(null,c),tiltontec.cell.base.c_slot.call(null,c));
}
})().call(null,new_value,old_value));
});
tiltontec.cell.evaluate._STAR_custom_propagater_STAR_ = null;

/**
 * A cell:
 * - notifies its callers of its change;
 * - calls any observer; and
 * - if ephemeral, silently reverts to nil.
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

var _STAR_depender_STAR_21321 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR_21322 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR_21323 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR_21324 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

tiltontec.cell.base._STAR_call_stack_STAR_ = null;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{if(cljs.core.truth_((function (){var and__4542__auto__ = prior_value;
if(cljs.core.truth_(and__4542__auto__)){
var and__4542__auto____$1 = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(and__4542__auto____$1)){
return tiltontec.cell.base.md_slot_owning_QMARK_.call(null,cljs.core.type.call(null,tiltontec.cell.base.c_model.call(null,c)),tiltontec.cell.base.c_slot_name.call(null,c));
} else {
return and__4542__auto____$1;
}
} else {
return and__4542__auto__;
}
})())){
var temp__4425__auto___21329 = clojure.set.difference.call(null,tiltontec.util.core.set_ify.call(null,prior_value),tiltontec.util.core.set_ify.call(null,tiltontec.cell.base.c_value.call(null,c)));
if(cljs.core.truth_(temp__4425__auto___21329)){
var ownees_21330 = temp__4425__auto___21329;
var seq__21325_21331 = cljs.core.seq.call(null,ownees_21330);
var chunk__21326_21332 = null;
var count__21327_21333 = (0);
var i__21328_21334 = (0);
while(true){
if((i__21328_21334 < count__21327_21333)){
var ownee_21335 = cljs.core._nth.call(null,chunk__21326_21332,i__21328_21334);
tiltontec.cell.evaluate.not_to_be.call(null,ownee_21335);

var G__21336 = seq__21325_21331;
var G__21337 = chunk__21326_21332;
var G__21338 = count__21327_21333;
var G__21339 = (i__21328_21334 + (1));
seq__21325_21331 = G__21336;
chunk__21326_21332 = G__21337;
count__21327_21333 = G__21338;
i__21328_21334 = G__21339;
continue;
} else {
var temp__4425__auto___21340__$1 = cljs.core.seq.call(null,seq__21325_21331);
if(temp__4425__auto___21340__$1){
var seq__21325_21341__$1 = temp__4425__auto___21340__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21325_21341__$1)){
var c__5338__auto___21342 = cljs.core.chunk_first.call(null,seq__21325_21341__$1);
var G__21343 = cljs.core.chunk_rest.call(null,seq__21325_21341__$1);
var G__21344 = c__5338__auto___21342;
var G__21345 = cljs.core.count.call(null,c__5338__auto___21342);
var G__21346 = (0);
seq__21325_21331 = G__21343;
chunk__21326_21332 = G__21344;
count__21327_21333 = G__21345;
i__21328_21334 = G__21346;
continue;
} else {
var ownee_21347 = cljs.core.first.call(null,seq__21325_21341__$1);
tiltontec.cell.evaluate.not_to_be.call(null,ownee_21347);

var G__21348 = cljs.core.next.call(null,seq__21325_21341__$1);
var G__21349 = null;
var G__21350 = (0);
var G__21351 = (0);
seq__21325_21331 = G__21348;
chunk__21326_21332 = G__21349;
count__21327_21333 = G__21350;
i__21328_21334 = G__21351;
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

if(cljs.core.truth_((function (){var or__4554__auto__ = (cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c));
if(or__4554__auto__){
return or__4554__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tiltontec.cell.base.c_lazy.call(null,c)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null));
}
})())){
tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"propagate","propagate",274376905));
} else {
}

return tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_21324;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR_21323;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_21322;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_21321;
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
var _STAR_causation_STAR_21357 = tiltontec.cell.base._STAR_causation_STAR_;
tiltontec.cell.base._STAR_causation_STAR_ = causation;

try{var seq__21358 = cljs.core.seq.call(null,cljs.core.seq.call(null,callers));
var chunk__21359 = null;
var count__21360 = (0);
var i__21361 = (0);
while(true){
if((i__21361 < count__21360)){
var caller = cljs.core._nth.call(null,chunk__21359,i__21361);
if(cljs.core.truth_((function (){var or__4554__auto__ = cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__4554__auto__){
return or__4554__auto__;
} else {
var or__4554__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_.call(null,caller);
if(cljs.core.truth_(or__4554__auto____$1)){
return or__4554__auto____$1;
} else {
var or__4554__auto____$2 = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tiltontec.cell.base.c_lazy.call(null,caller)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__4554__auto____$2)){
return or__4554__auto____$2;
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

var G__21362 = seq__21358;
var G__21363 = chunk__21359;
var G__21364 = count__21360;
var G__21365 = (i__21361 + (1));
seq__21358 = G__21362;
chunk__21359 = G__21363;
count__21360 = G__21364;
i__21361 = G__21365;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21358);
if(temp__4425__auto__){
var seq__21358__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21358__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__21358__$1);
var G__21366 = cljs.core.chunk_rest.call(null,seq__21358__$1);
var G__21367 = c__5338__auto__;
var G__21368 = cljs.core.count.call(null,c__5338__auto__);
var G__21369 = (0);
seq__21358 = G__21366;
chunk__21359 = G__21367;
count__21360 = G__21368;
i__21361 = G__21369;
continue;
} else {
var caller = cljs.core.first.call(null,seq__21358__$1);
if(cljs.core.truth_((function (){var or__4554__auto__ = cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__4554__auto__){
return or__4554__auto__;
} else {
var or__4554__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_.call(null,caller);
if(cljs.core.truth_(or__4554__auto____$1)){
return or__4554__auto____$1;
} else {
var or__4554__auto____$2 = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tiltontec.cell.base.c_lazy.call(null,caller)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__4554__auto____$2)){
return or__4554__auto____$2;
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

var G__21370 = cljs.core.next.call(null,seq__21358__$1);
var G__21371 = null;
var G__21372 = (0);
var G__21373 = (0);
seq__21358 = G__21370;
chunk__21359 = G__21371;
count__21360 = G__21372;
i__21361 = G__21373;
continue;
}
} else {
return null;
}
}
break;
}
}finally {tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR_21357;
}}
});})(causation))
);
}
});
