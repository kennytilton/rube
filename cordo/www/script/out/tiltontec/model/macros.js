// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.model.macros');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
tiltontec.model.macros.pme = (function tiltontec$model$macros$pme(){
var args__5600__auto__ = [];
var len__5593__auto___23225 = arguments.length;
var i__5594__auto___23226 = (0);
while(true){
if((i__5594__auto___23226 < len__5593__auto___23225)){
args__5600__auto__.push((arguments[i__5594__auto___23226]));

var G__23227 = (i__5594__auto___23226 + (1));
i__5594__auto___23226 = G__23227;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.model.macros.pme.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.model.macros.pme.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mas){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","ia-type","tiltontec.cell.base/ia-type",699012589,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)))))),mas)));
});

tiltontec.model.macros.pme.cljs$lang$maxFixedArity = (2);

tiltontec.model.macros.pme.cljs$lang$applyTo = (function (seq23222){
var G__23223 = cljs.core.first.call(null,seq23222);
var seq23222__$1 = cljs.core.next.call(null,seq23222);
var G__23224 = cljs.core.first.call(null,seq23222__$1);
var seq23222__$2 = cljs.core.next.call(null,seq23222__$1);
return tiltontec.model.macros.pme.cljs$core$IFn$_invoke$arity$variadic(G__23223,G__23224,seq23222__$2);
});

tiltontec.model.macros.pme.cljs$lang$macro = true;
