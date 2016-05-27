// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.model.base');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.evaluate');
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
/**
 * (1) do initial evaluation of all ruled slots
 * (2) call observers of all slots
 */
tiltontec.model.base.md_awaken = (function tiltontec$model$base$md_awaken(me){
tiltontec.cell.base.c_assert.call(null,cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nascent","nascent",443401807),tiltontec.model.base.md_state.call(null,me)));

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),me], null),new cljs.core.Keyword(null,"awakening","awakening",838364227));

cljs.core.doall.call(null,(function (){var iter__5307__auto__ = (function tiltontec$model$base$md_awaken_$_iter__10765(s__10766){
return (new cljs.core.LazySeq(null,(function (){
var s__10766__$1 = s__10766;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10766__$1);
if(temp__4425__auto__){
var s__10766__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10766__$2)){
var c__5305__auto__ = cljs.core.chunk_first.call(null,s__10766__$2);
var size__5306__auto__ = cljs.core.count.call(null,c__5305__auto__);
var b__10768 = cljs.core.chunk_buffer.call(null,size__5306__auto__);
if((function (){var i__10767 = (0);
while(true){
if((i__10767 < size__5306__auto__)){
var slot = cljs.core._nth.call(null,c__5305__auto__,i__10767);
cljs.core.chunk_append.call(null,b__10768,(function (){var c = slot.call(null,tiltontec.model.base.md_cz.call(null,me));
if(cljs.core.truth_(c)){
return tiltontec.cell.evaluate.c_awaken.call(null,c);
} else {
return tiltontec.cell.observer.observe.call(null,slot,me,slot.call(null,cljs.core.deref.call(null,me)),tiltontec.cell.base.unbound,null);

}
})());

var G__10769 = (i__10767 + (1));
i__10767 = G__10769;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10768),tiltontec$model$base$md_awaken_$_iter__10765.call(null,cljs.core.chunk_rest.call(null,s__10766__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10768),null);
}
} else {
var slot = cljs.core.first.call(null,s__10766__$2);
return cljs.core.cons.call(null,(function (){var c = slot.call(null,tiltontec.model.base.md_cz.call(null,me));
if(cljs.core.truth_(c)){
return tiltontec.cell.evaluate.c_awaken.call(null,c);
} else {
return tiltontec.cell.observer.observe.call(null,slot,me,slot.call(null,cljs.core.deref.call(null,me)),tiltontec.cell.base.unbound,null);

}
})(),tiltontec$model$base$md_awaken_$_iter__10765.call(null,cljs.core.rest.call(null,s__10766__$2)));
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
tiltontec.model.base.md_get = (function tiltontec$model$base$md_get(me,slot){
var temp__4423__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4423__auto__)){
var c = temp__4423__auto__;
return tiltontec.cell.evaluate.c_get.call(null,c);
} else {
return slot.call(null,cljs.core.deref.call(null,me));
}
});
