// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.model.macros');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
tiltontec.model.macros.pme = (function tiltontec$model$macros$pme(var_args){
var args__7292__auto__ = [];
var len__7285__auto___11238 = arguments.length;
var i__7286__auto___11239 = (0);
while(true){
if((i__7286__auto___11239 < len__7285__auto___11238)){
args__7292__auto__.push((arguments[i__7286__auto___11239]));

var G__11240 = (i__7286__auto___11239 + (1));
i__7286__auto___11239 = G__11240;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.model.macros.pme.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.model.macros.pme.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mas){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","ia-type","tiltontec.cell.base/ia-type",699012589,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),mas)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.model.macros.pme.cljs$lang$maxFixedArity = (2);

tiltontec.model.macros.pme.cljs$lang$applyTo = (function (seq11235){
var G__11236 = cljs.core.first.call(null,seq11235);
var seq11235__$1 = cljs.core.next.call(null,seq11235);
var G__11237 = cljs.core.first.call(null,seq11235__$1);
var seq11235__$2 = cljs.core.next.call(null,seq11235__$1);
return tiltontec.model.macros.pme.cljs$core$IFn$_invoke$arity$variadic(G__11236,G__11237,seq11235__$2);
});


tiltontec.model.macros.pme.cljs$lang$macro = true;
