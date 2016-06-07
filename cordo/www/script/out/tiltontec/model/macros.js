// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.model.macros');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
tiltontec.model.macros.pme = (function tiltontec$model$macros$pme(var_args){
var args__7292__auto__ = [];
var len__7285__auto___27989 = arguments.length;
var i__7286__auto___27990 = (0);
while(true){
if((i__7286__auto___27990 < len__7285__auto___27989)){
args__7292__auto__.push((arguments[i__7286__auto___27990]));

var G__27991 = (i__7286__auto___27990 + (1));
i__7286__auto___27990 = G__27991;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.model.macros.pme.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.model.macros.pme.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mas){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","ia-type","tiltontec.cell.base/ia-type",699012589,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),mas)));
});

tiltontec.model.macros.pme.cljs$lang$maxFixedArity = (2);

tiltontec.model.macros.pme.cljs$lang$applyTo = (function (seq27986){
var G__27987 = cljs.core.first.call(null,seq27986);
var seq27986__$1 = cljs.core.next.call(null,seq27986);
var G__27988 = cljs.core.first.call(null,seq27986__$1);
var seq27986__$2 = cljs.core.next.call(null,seq27986__$1);
return tiltontec.model.macros.pme.cljs$core$IFn$_invoke$arity$variadic(G__27987,G__27988,seq27986__$2);
});


tiltontec.model.macros.pme.cljs$lang$macro = true;
