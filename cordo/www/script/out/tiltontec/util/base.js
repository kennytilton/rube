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
var len__7285__auto___245455 = arguments.length;
var i__7286__auto___245456 = (0);
while(true){
if((i__7286__auto___245456 < len__7285__auto___245455)){
args__7292__auto__.push((arguments[i__7286__auto___245456]));

var G__245457 = (i__7286__auto___245456 + (1));
i__7286__auto___245456 = G__245457;
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

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq245453){
var G__245454 = cljs.core.first.call(null,seq245453);
var seq245453__$1 = cljs.core.next.call(null,seq245453);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__245454,seq245453__$1);
});

tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__7292__auto__ = [];
var len__7285__auto___245462 = arguments.length;
var i__7286__auto___245463 = (0);
while(true){
if((i__7286__auto___245463 < len__7285__auto___245462)){
args__7292__auto__.push((arguments[i__7286__auto___245463]));

var G__245464 = (i__7286__auto___245463 + (1));
i__7286__auto___245463 = G__245464;
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

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq245458){
var G__245459 = cljs.core.first.call(null,seq245458);
var seq245458__$1 = cljs.core.next.call(null,seq245458);
var G__245460 = cljs.core.first.call(null,seq245458__$1);
var seq245458__$2 = cljs.core.next.call(null,seq245458__$1);
var G__245461 = cljs.core.first.call(null,seq245458__$2);
var seq245458__$3 = cljs.core.next.call(null,seq245458__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__245459,G__245460,G__245461,seq245458__$3);
});


tiltontec.util.base.trx.cljs$lang$macro = true;
tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR_245466 = tiltontec.util.base._STAR_trxdepth_STAR_;
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
}finally {tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR_245466;
}});
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__7292__auto__ = [];
var len__7285__auto___245475 = arguments.length;
var i__7286__auto___245476 = (0);
while(true){
if((i__7286__auto___245476 < len__7285__auto___245475)){
args__7292__auto__.push((arguments[i__7286__auto___245476]));

var G__245477 = (i__7286__auto___245476 + (1));
i__7286__auto___245476 = G__245477;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__245471,body){
var vec__245472 = p__245471;
var seq__245473 = cljs.core.seq.call(null,vec__245472);
var first__245474 = cljs.core.first.call(null,seq__245473);
var seq__245473__$1 = cljs.core.next.call(null,seq__245473);
var lo = first__245474;
var first__245474__$1 = cljs.core.first.call(null,seq__245473__$1);
var seq__245473__$2 = cljs.core.next.call(null,seq__245473__$1);
var hi = first__245474__$1;
var trxargs = seq__245473__$2;
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

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq245467){
var G__245468 = cljs.core.first.call(null,seq245467);
var seq245467__$1 = cljs.core.next.call(null,seq245467);
var G__245469 = cljs.core.first.call(null,seq245467__$1);
var seq245467__$2 = cljs.core.next.call(null,seq245467__$1);
var G__245470 = cljs.core.first.call(null,seq245467__$2);
var seq245467__$3 = cljs.core.next.call(null,seq245467__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__245468,G__245469,G__245470,seq245467__$3);
});


tiltontec.util.base.wtrx.cljs$lang$macro = true;
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__7292__auto__ = [];
var len__7285__auto___245482 = arguments.length;
var i__7286__auto___245483 = (0);
while(true){
if((i__7286__auto___245483 < len__7285__auto___245482)){
args__7292__auto__.push((arguments[i__7286__auto___245483]));

var G__245484 = (i__7286__auto___245483 + (1));
i__7286__auto___245483 = G__245484;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__245478__auto__","result__245478__auto__",-710067612,null)),(function (){var x__7044__auto__ = cljs.core.first.call(null,body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core.rest.call(null,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__245478__auto__","result__245478__auto__",-710067612,null)))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq245479){
var G__245480 = cljs.core.first.call(null,seq245479);
var seq245479__$1 = cljs.core.next.call(null,seq245479);
var G__245481 = cljs.core.first.call(null,seq245479__$1);
var seq245479__$2 = cljs.core.next.call(null,seq245479__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__245480,G__245481,seq245479__$2);
});


tiltontec.util.base.prog1.cljs$lang$macro = true;
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__7292__auto__ = [];
var len__7285__auto___245490 = arguments.length;
var i__7286__auto___245491 = (0);
while(true){
if((i__7286__auto___245491 < len__7285__auto___245490)){
args__7292__auto__.push((arguments[i__7286__auto___245491]));

var G__245492 = (i__7286__auto___245491 + (1));
i__7286__auto___245491 = G__245492;
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

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq245485){
var G__245486 = cljs.core.first.call(null,seq245485);
var seq245485__$1 = cljs.core.next.call(null,seq245485);
var G__245487 = cljs.core.first.call(null,seq245485__$1);
var seq245485__$2 = cljs.core.next.call(null,seq245485__$1);
var G__245488 = cljs.core.first.call(null,seq245485__$2);
var seq245485__$3 = cljs.core.next.call(null,seq245485__$2);
var G__245489 = cljs.core.first.call(null,seq245485__$3);
var seq245485__$4 = cljs.core.next.call(null,seq245485__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__245486,G__245487,G__245488,G__245489,seq245485__$4);
});


tiltontec.util.base.b_when.cljs$lang$macro = true;
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__7292__auto__ = [];
var len__7285__auto___245497 = arguments.length;
var i__7286__auto___245498 = (0);
while(true){
if((i__7286__auto___245498 < len__7285__auto___245497)){
args__7292__auto__.push((arguments[i__7286__auto___245498]));

var G__245499 = (i__7286__auto___245498 + (1));
i__7286__auto___245498 = G__245499;
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

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq245493){
var G__245494 = cljs.core.first.call(null,seq245493);
var seq245493__$1 = cljs.core.next.call(null,seq245493);
var G__245495 = cljs.core.first.call(null,seq245493__$1);
var seq245493__$2 = cljs.core.next.call(null,seq245493__$1);
var G__245496 = cljs.core.first.call(null,seq245493__$2);
var seq245493__$3 = cljs.core.next.call(null,seq245493__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__245494,G__245495,G__245496,seq245493__$3);
});


tiltontec.util.base.unless.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(var_args){
var args__7292__auto__ = [];
var len__7285__auto___245504 = arguments.length;
var i__7286__auto___245505 = (0);
while(true){
if((i__7286__auto___245505 < len__7285__auto___245504)){
args__7292__auto__.push((arguments[i__7286__auto___245505]));

var G__245506 = (i__7286__auto___245505 + (1));
i__7286__auto___245505 = G__245506;
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

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq245500){
var G__245501 = cljs.core.first.call(null,seq245500);
var seq245500__$1 = cljs.core.next.call(null,seq245500);
var G__245502 = cljs.core.first.call(null,seq245500__$1);
var seq245500__$2 = cljs.core.next.call(null,seq245500__$1);
var G__245503 = cljs.core.first.call(null,seq245500__$2);
var seq245500__$3 = cljs.core.next.call(null,seq245500__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__245501,G__245502,G__245503,seq245500__$3);
});


tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(var_args){
var args__7292__auto__ = [];
var len__7285__auto___245511 = arguments.length;
var i__7286__auto___245512 = (0);
while(true){
if((i__7286__auto___245512 < len__7285__auto___245511)){
args__7292__auto__.push((arguments[i__7286__auto___245512]));

var G__245513 = (i__7286__auto___245512 + (1));
i__7286__auto___245512 = G__245513;
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

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq245507){
var G__245508 = cljs.core.first.call(null,seq245507);
var seq245507__$1 = cljs.core.next.call(null,seq245507);
var G__245509 = cljs.core.first.call(null,seq245507__$1);
var seq245507__$2 = cljs.core.next.call(null,seq245507__$1);
var G__245510 = cljs.core.first.call(null,seq245507__$2);
var seq245507__$3 = cljs.core.next.call(null,seq245507__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__245508,G__245509,G__245510,seq245507__$3);
});


tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;
