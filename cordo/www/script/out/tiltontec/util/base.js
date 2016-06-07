// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.util.base');
goog.require('cljs.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.util.base._STAR_trx_QMARK__STAR_ = true;
tiltontec.util.base._STAR_trc_ensure_STAR_ = null;
tiltontec.util.base._STAR_trx_path_id_STAR_ = null;
tiltontec.util.base._STAR_trxdepth_STAR_ = (0);
tiltontec.util.base.last_trc = cljs.core.atom.call(null,(0));
tiltontec.util.base.call_trc$ = (function tiltontec$util$base$call_trc$(s,bits){
return [cljs.core.str(s),cljs.core.str(": "),cljs.core.str([cljs.core.str(bits)].join(''))].join('');
});
tiltontec.util.base.call_trc = (function tiltontec$util$base$call_trc(var_args){
var args__7292__auto__ = [];
var len__7285__auto___27363 = arguments.length;
var i__7286__auto___27364 = (0);
while(true){
if((i__7286__auto___27364 < len__7285__auto___27363)){
args__7292__auto__.push((arguments[i__7286__auto___27364]));

var G__27365 = (i__7286__auto___27364 + (1));
i__7286__auto___27364 = G__27365;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((1) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((1)),(0),null)):null);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7293__auto__);
});

tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic = (function (s,os){
if(cljs.core.truth_(tiltontec.util.base._STAR_trx_QMARK__STAR_)){
if(cljs.core.truth_(s)){
var path = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,tiltontec.util.base._STAR_trxdepth_STAR_,"."));
return cljs.core.println.call(null,path,tiltontec.util.base.call_trc$.call(null,s,os));
} else {
return null;
}
} else {
return null;
}
});

tiltontec.util.base.call_trc.cljs$lang$maxFixedArity = (1);

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq27361){
var G__27362 = cljs.core.first.call(null,seq27361);
var seq27361__$1 = cljs.core.next.call(null,seq27361);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__27362,seq27361__$1);
});

tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__7292__auto__ = [];
var len__7285__auto___27370 = arguments.length;
var i__7286__auto___27371 = (0);
while(true){
if((i__7286__auto___27371 < len__7285__auto___27370)){
args__7292__auto__.push((arguments[i__7286__auto___27371]));

var G__27372 = (i__7286__auto___27371 + (1));
i__7286__auto___27371 = G__27372;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,label,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-trc","tiltontec.util.base/call-trc",242817092,null)),(function (){var x__7044__auto__ = ((!((label == null)))?[cljs.core.str(label)].join(''):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),vals)));
});

tiltontec.util.base.trx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq27366){
var G__27367 = cljs.core.first.call(null,seq27366);
var seq27366__$1 = cljs.core.next.call(null,seq27366);
var G__27368 = cljs.core.first.call(null,seq27366__$1);
var seq27366__$2 = cljs.core.next.call(null,seq27366__$1);
var G__27369 = cljs.core.first.call(null,seq27366__$2);
var seq27366__$3 = cljs.core.next.call(null,seq27366__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__27367,G__27368,G__27369,seq27366__$3);
});


tiltontec.util.base.trx.cljs$lang$macro = true;
tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR_27374 = tiltontec.util.base._STAR_trxdepth_STAR_;
tiltontec.util.base._STAR_trxdepth_STAR_ = (tiltontec.util.base._STAR_trxdepth_STAR_ + (1));

try{if(((lo <= tiltontec.util.base._STAR_trxdepth_STAR_)) && ((tiltontec.util.base._STAR_trxdepth_STAR_ <= hi))){
cljs.core.apply.call(null,tiltontec.util.base.call_trc,trxargs);
} else {
if((tiltontec.util.base._STAR_trxdepth_STAR_ > hi)){
throw (new Error([cljs.core.str("wtrx exceeded max depth "),cljs.core.str(hi),cljs.core.str(":"),cljs.core.str(cljs.core.apply.call(null,tiltontec.util.base.call_trc$,cljs.core.first.call(null,trxargs),cljs.core.rest.call(null,trxargs)))].join('')));
} else {
}
}

return fn.call(null);
}finally {tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR_27374;
}});
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__7292__auto__ = [];
var len__7285__auto___27383 = arguments.length;
var i__7286__auto___27384 = (0);
while(true){
if((i__7286__auto___27384 < len__7285__auto___27383)){
args__7292__auto__.push((arguments[i__7286__auto___27384]));

var G__27385 = (i__7286__auto___27384 + (1));
i__7286__auto___27384 = G__27385;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__27379,body){
var vec__27380 = p__27379;
var seq__27381 = cljs.core.seq.call(null,vec__27380);
var first__27382 = cljs.core.first.call(null,seq__27381);
var seq__27381__$1 = cljs.core.next.call(null,seq__27381);
var lo = first__27382;
var first__27382__$1 = cljs.core.first.call(null,seq__27381__$1);
var seq__27381__$2 = cljs.core.next.call(null,seq__27381__$1);
var hi = first__27382__$1;
var trxargs = seq__27381__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-wtrx","tiltontec.util.base/call-wtrx",-151750095,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = lo;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = hi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),trxargs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq27375){
var G__27376 = cljs.core.first.call(null,seq27375);
var seq27375__$1 = cljs.core.next.call(null,seq27375);
var G__27377 = cljs.core.first.call(null,seq27375__$1);
var seq27375__$2 = cljs.core.next.call(null,seq27375__$1);
var G__27378 = cljs.core.first.call(null,seq27375__$2);
var seq27375__$3 = cljs.core.next.call(null,seq27375__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__27376,G__27377,G__27378,seq27375__$3);
});


tiltontec.util.base.wtrx.cljs$lang$macro = true;
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__7292__auto__ = [];
var len__7285__auto___27390 = arguments.length;
var i__7286__auto___27391 = (0);
while(true){
if((i__7286__auto___27391 < len__7285__auto___27390)){
args__7292__auto__.push((arguments[i__7286__auto___27391]));

var G__27392 = (i__7286__auto___27391 + (1));
i__7286__auto___27391 = G__27392;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__27386__auto__","result__27386__auto__",-1039538784,null)),(function (){var x__7044__auto__ = cljs.core.first.call(null,body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core.rest.call(null,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__27386__auto__","result__27386__auto__",-1039538784,null)))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq27387){
var G__27388 = cljs.core.first.call(null,seq27387);
var seq27387__$1 = cljs.core.next.call(null,seq27387);
var G__27389 = cljs.core.first.call(null,seq27387__$1);
var seq27387__$2 = cljs.core.next.call(null,seq27387__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__27388,G__27389,seq27387__$2);
});


tiltontec.util.base.prog1.cljs$lang$macro = true;
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__7292__auto__ = [];
var len__7285__auto___27398 = arguments.length;
var i__7286__auto___27399 = (0);
while(true){
if((i__7286__auto___27399 < len__7285__auto___27398)){
args__7292__auto__.push((arguments[i__7286__auto___27399]));

var G__27400 = (i__7286__auto___27399 + (1));
i__7286__auto___27399 = G__27400;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7044__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),body)));
});

tiltontec.util.base.b_when.cljs$lang$maxFixedArity = (4);

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq27393){
var G__27394 = cljs.core.first.call(null,seq27393);
var seq27393__$1 = cljs.core.next.call(null,seq27393);
var G__27395 = cljs.core.first.call(null,seq27393__$1);
var seq27393__$2 = cljs.core.next.call(null,seq27393__$1);
var G__27396 = cljs.core.first.call(null,seq27393__$2);
var seq27393__$3 = cljs.core.next.call(null,seq27393__$2);
var G__27397 = cljs.core.first.call(null,seq27393__$3);
var seq27393__$4 = cljs.core.next.call(null,seq27393__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__27394,G__27395,G__27396,G__27397,seq27393__$4);
});


tiltontec.util.base.b_when.cljs$lang$macro = true;
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__7292__auto__ = [];
var len__7285__auto___27405 = arguments.length;
var i__7286__auto___27406 = (0);
while(true){
if((i__7286__auto___27406 < len__7285__auto___27405)){
args__7292__auto__.push((arguments[i__7286__auto___27406]));

var G__27407 = (i__7286__auto___27406 + (1));
i__7286__auto___27406 = G__27407;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__7044__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),body)));
});

tiltontec.util.base.unless.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq27401){
var G__27402 = cljs.core.first.call(null,seq27401);
var seq27401__$1 = cljs.core.next.call(null,seq27401);
var G__27403 = cljs.core.first.call(null,seq27401__$1);
var seq27401__$2 = cljs.core.next.call(null,seq27401__$1);
var G__27404 = cljs.core.first.call(null,seq27401__$2);
var seq27401__$3 = cljs.core.next.call(null,seq27401__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__27402,G__27403,G__27404,seq27401__$3);
});


tiltontec.util.base.unless.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(var_args){
var args__7292__auto__ = [];
var len__7285__auto___27412 = arguments.length;
var i__7286__auto___27413 = (0);
while(true){
if((i__7286__auto___27413 < len__7285__auto___27412)){
args__7292__auto__.push((arguments[i__7286__auto___27413]));

var G__27414 = (i__7286__auto___27413 + (1));
i__7286__auto___27413 = G__27414;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (slot_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__7044__auto__ = cljs.core.symbol.call(null,[cljs.core.str((function (){var or__6210__auto__ = reader_prefix;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return "";
}
})()),cljs.core.str(slot_SHARP_)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7044__auto__ = cljs.core.keyword.call(null,slot_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
}),slots))));
});

tiltontec.util.base.def_rmap_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq27408){
var G__27409 = cljs.core.first.call(null,seq27408);
var seq27408__$1 = cljs.core.next.call(null,seq27408);
var G__27410 = cljs.core.first.call(null,seq27408__$1);
var seq27408__$2 = cljs.core.next.call(null,seq27408__$1);
var G__27411 = cljs.core.first.call(null,seq27408__$2);
var seq27408__$3 = cljs.core.next.call(null,seq27408__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__27409,G__27410,G__27411,seq27408__$3);
});


tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(var_args){
var args__7292__auto__ = [];
var len__7285__auto___27419 = arguments.length;
var i__7286__auto___27420 = (0);
while(true){
if((i__7286__auto___27420 < len__7285__auto___27419)){
args__7292__auto__.push((arguments[i__7286__auto___27420]));

var G__27421 = (i__7286__auto___27420 + (1));
i__7286__auto___27420 = G__27421;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (slot_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__7044__auto__ = cljs.core.symbol.call(null,[cljs.core.str((function (){var or__6210__auto__ = reader_prefix;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return "";
}
})()),cljs.core.str(slot_SHARP_)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7044__auto__ = cljs.core.keyword.call(null,slot_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
}),slots))));
});

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq27415){
var G__27416 = cljs.core.first.call(null,seq27415);
var seq27415__$1 = cljs.core.next.call(null,seq27415);
var G__27417 = cljs.core.first.call(null,seq27415__$1);
var seq27415__$2 = cljs.core.next.call(null,seq27415__$1);
var G__27418 = cljs.core.first.call(null,seq27415__$2);
var seq27415__$3 = cljs.core.next.call(null,seq27415__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__27416,G__27417,G__27418,seq27415__$3);
});


tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;
