// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.model.base');
goog.require('cljs.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.util.core');
goog.require('cljs.test');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.macros');
goog.require('tiltontec.util.base');
goog.require('tiltontec.cell.integrity');
tiltontec.model.base.md_name = (function tiltontec$model$base$md_name(ref){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});
tiltontec.model.base.md_state = (function tiltontec$model$base$md_state(ref){
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ref));
});

tiltontec.model.base.md_cz = (function tiltontec$model$base$md_cz(ref){
return new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ref));
});
tiltontec.model.base.md_cell = (function tiltontec$model$base$md_cell(me,slot){
return slot.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me)));
});
tiltontec.model.base.md_install_cell = (function tiltontec$model$base$md_install_cell(me,slot,c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
cljs.core.swap_BANG_.call(null,c,cljs.core.assoc,new cljs.core.Keyword(null,"slot","slot",240229571),slot,new cljs.core.Keyword(null,"me","me",-139006693),me);

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_.call(null,c))?tiltontec.cell.base.c_value.call(null,c):null));

return true;
} else {
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),c);

return false;

}
});
if(typeof tiltontec.model.base.md_awaken_before !== 'undefined'){
} else {
tiltontec.model.base.md_awaken_before = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return tiltontec.cell.base.ia_types;},new cljs.core.Symbol("tiltontec.cell.base","ia-types","tiltontec.cell.base/ia-types",436375603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.cell.base","tiltontec.cell.base",-1575671422,null),new cljs.core.Symbol(null,"ia-types","ia-types",322849110,null),"src/tiltontec/cell/base.cljc",14,1,107,107,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.cell.base.ia_types)?tiltontec.cell.base.ia_types.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.model.base","md-awaken-before"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.model.base.md_awaken_before,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"awaken-before-default!!!!!!!!!!!!","awaken-before-default!!!!!!!!!!!!",-712874669),tiltontec.cell.base.ia_type.call(null,me));
}));
/**
 * (1) do initial evaluation of all ruled slots
 * (2) call observers of all slots
 */
tiltontec.model.base.md_awaken = (function tiltontec$model$base$md_awaken(me){
cljs.core.println.call(null,new cljs.core.Keyword(null,"md-awaken!!!!!!!!","md-awaken!!!!!!!!",893416337),tiltontec.cell.base.ia_type.call(null,me));

tiltontec.model.base.md_awaken_before.call(null,me);

cljs.core.println.call(null,tiltontec.cell.base.ia_type.call(null,me),new cljs.core.Keyword(null,"awaken","awaken",-1899628152),tiltontec.model.base.md_state.call(null,me));

tiltontec.cell.base.c_assert.call(null,cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nascent","nascent",443401807),tiltontec.model.base.md_state.call(null,me)));

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),me], null),new cljs.core.Keyword(null,"awakening","awakening",838364227));

cljs.core.doall.call(null,(function (){var iter__5307__auto__ = (function tiltontec$model$base$md_awaken_$_iter__64372(s__64373){
return (new cljs.core.LazySeq(null,(function (){
var s__64373__$1 = s__64373;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__64373__$1);
if(temp__4425__auto__){
var s__64373__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__64373__$2)){
var c__5305__auto__ = cljs.core.chunk_first.call(null,s__64373__$2);
var size__5306__auto__ = cljs.core.count.call(null,c__5305__auto__);
var b__64375 = cljs.core.chunk_buffer.call(null,size__5306__auto__);
if((function (){var i__64374 = (0);
while(true){
if((i__64374 < size__5306__auto__)){
var slot = cljs.core._nth.call(null,c__5305__auto__,i__64374);
cljs.core.chunk_append.call(null,b__64375,(function (){var c = slot.call(null,tiltontec.model.base.md_cz.call(null,me));
if(cljs.core.truth_(c)){
tiltontec.util.base.call_trc.call(null,":md-awaken-awks-cell",slot,tiltontec.cell.base.c_slot.call(null,c),tiltontec.cell.base.c_md_name.call(null,c));

return tiltontec.cell.evaluate.c_awaken.call(null,c);
} else {
return tiltontec.cell.observer.observe.call(null,slot,me,slot.call(null,cljs.core.deref.call(null,me)),tiltontec.cell.base.unbound,null);

}
})());

var G__64376 = (i__64374 + (1));
i__64374 = G__64376;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64375),tiltontec$model$base$md_awaken_$_iter__64372.call(null,cljs.core.chunk_rest.call(null,s__64373__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64375),null);
}
} else {
var slot = cljs.core.first.call(null,s__64373__$2);
return cljs.core.cons.call(null,(function (){var c = slot.call(null,tiltontec.model.base.md_cz.call(null,me));
if(cljs.core.truth_(c)){
tiltontec.util.base.call_trc.call(null,":md-awaken-awks-cell",slot,tiltontec.cell.base.c_slot.call(null,c),tiltontec.cell.base.c_md_name.call(null,c));

return tiltontec.cell.evaluate.c_awaken.call(null,c);
} else {
return tiltontec.cell.observer.observe.call(null,slot,me,slot.call(null,cljs.core.deref.call(null,me)),tiltontec.cell.base.unbound,null);

}
})(),tiltontec$model$base$md_awaken_$_iter__64372.call(null,cljs.core.rest.call(null,s__64373__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5307__auto__.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,me)));
})());

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),me], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

return me;
});
tiltontec.model.base.md_getx = (function tiltontec$model$base$md_getx(tag,me,slot){
return tiltontec.util.base.call_wtrx.call(null,(function (){
var temp__4423__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4423__auto__)){
var c = temp__4423__auto__;
return tiltontec.cell.evaluate.c_get.call(null,c);
} else {
return slot.call(null,cljs.core.deref.call(null,me));
}
}),(0),(100),cljs.core._conj.call(null,cljs.core.List.EMPTY,[cljs.core.str("md-getx "),cljs.core.str(tag),cljs.core.str(slot),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me))].join('')));
});
tiltontec.model.base.md_get = (function tiltontec$model$base$md_get(me,slot){
var temp__4423__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4423__auto__)){
var c = temp__4423__auto__;
return tiltontec.cell.evaluate.c_get.call(null,c);
} else {
return slot.call(null,cljs.core.deref.call(null,me));
}
});
