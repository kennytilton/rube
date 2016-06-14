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
var len__7285__auto___9625 = arguments.length;
var i__7286__auto___9626 = (0);
while(true){
if((i__7286__auto___9626 < len__7285__auto___9625)){
args__7292__auto__.push((arguments[i__7286__auto___9626]));

var G__9627 = (i__7286__auto___9626 + (1));
i__7286__auto___9626 = G__9627;
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

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq9623){
var G__9624 = cljs.core.first.call(null,seq9623);
var seq9623__$1 = cljs.core.next.call(null,seq9623);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__9624,seq9623__$1);
});

tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__7292__auto__ = [];
var len__7285__auto___9632 = arguments.length;
var i__7286__auto___9633 = (0);
while(true){
if((i__7286__auto___9633 < len__7285__auto___9632)){
args__7292__auto__.push((arguments[i__7286__auto___9633]));

var G__9634 = (i__7286__auto___9633 + (1));
i__7286__auto___9633 = G__9634;
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

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq9628){
var G__9629 = cljs.core.first.call(null,seq9628);
var seq9628__$1 = cljs.core.next.call(null,seq9628);
var G__9630 = cljs.core.first.call(null,seq9628__$1);
var seq9628__$2 = cljs.core.next.call(null,seq9628__$1);
var G__9631 = cljs.core.first.call(null,seq9628__$2);
var seq9628__$3 = cljs.core.next.call(null,seq9628__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__9629,G__9630,G__9631,seq9628__$3);
});


tiltontec.util.base.trx.cljs$lang$macro = true;
tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR_9636 = tiltontec.util.base._STAR_trxdepth_STAR_;
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
}finally {tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR_9636;
}});
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__7292__auto__ = [];
var len__7285__auto___9645 = arguments.length;
var i__7286__auto___9646 = (0);
while(true){
if((i__7286__auto___9646 < len__7285__auto___9645)){
args__7292__auto__.push((arguments[i__7286__auto___9646]));

var G__9647 = (i__7286__auto___9646 + (1));
i__7286__auto___9646 = G__9647;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9641,body){
var vec__9642 = p__9641;
var seq__9643 = cljs.core.seq.call(null,vec__9642);
var first__9644 = cljs.core.first.call(null,seq__9643);
var seq__9643__$1 = cljs.core.next.call(null,seq__9643);
var lo = first__9644;
var first__9644__$1 = cljs.core.first.call(null,seq__9643__$1);
var seq__9643__$2 = cljs.core.next.call(null,seq__9643__$1);
var hi = first__9644__$1;
var trxargs = seq__9643__$2;
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

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq9637){
var G__9638 = cljs.core.first.call(null,seq9637);
var seq9637__$1 = cljs.core.next.call(null,seq9637);
var G__9639 = cljs.core.first.call(null,seq9637__$1);
var seq9637__$2 = cljs.core.next.call(null,seq9637__$1);
var G__9640 = cljs.core.first.call(null,seq9637__$2);
var seq9637__$3 = cljs.core.next.call(null,seq9637__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__9638,G__9639,G__9640,seq9637__$3);
});


tiltontec.util.base.wtrx.cljs$lang$macro = true;
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__7292__auto__ = [];
var len__7285__auto___9652 = arguments.length;
var i__7286__auto___9653 = (0);
while(true){
if((i__7286__auto___9653 < len__7285__auto___9652)){
args__7292__auto__.push((arguments[i__7286__auto___9653]));

var G__9654 = (i__7286__auto___9653 + (1));
i__7286__auto___9653 = G__9654;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__9648__auto__","result__9648__auto__",-979093593,null)),(function (){var x__7044__auto__ = cljs.core.first.call(null,body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core.rest.call(null,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__9648__auto__","result__9648__auto__",-979093593,null)))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq9649){
var G__9650 = cljs.core.first.call(null,seq9649);
var seq9649__$1 = cljs.core.next.call(null,seq9649);
var G__9651 = cljs.core.first.call(null,seq9649__$1);
var seq9649__$2 = cljs.core.next.call(null,seq9649__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__9650,G__9651,seq9649__$2);
});


tiltontec.util.base.prog1.cljs$lang$macro = true;
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__7292__auto__ = [];
var len__7285__auto___9660 = arguments.length;
var i__7286__auto___9661 = (0);
while(true){
if((i__7286__auto___9661 < len__7285__auto___9660)){
args__7292__auto__.push((arguments[i__7286__auto___9661]));

var G__9662 = (i__7286__auto___9661 + (1));
i__7286__auto___9661 = G__9662;
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

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq9655){
var G__9656 = cljs.core.first.call(null,seq9655);
var seq9655__$1 = cljs.core.next.call(null,seq9655);
var G__9657 = cljs.core.first.call(null,seq9655__$1);
var seq9655__$2 = cljs.core.next.call(null,seq9655__$1);
var G__9658 = cljs.core.first.call(null,seq9655__$2);
var seq9655__$3 = cljs.core.next.call(null,seq9655__$2);
var G__9659 = cljs.core.first.call(null,seq9655__$3);
var seq9655__$4 = cljs.core.next.call(null,seq9655__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__9656,G__9657,G__9658,G__9659,seq9655__$4);
});


tiltontec.util.base.b_when.cljs$lang$macro = true;
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__7292__auto__ = [];
var len__7285__auto___9667 = arguments.length;
var i__7286__auto___9668 = (0);
while(true){
if((i__7286__auto___9668 < len__7285__auto___9667)){
args__7292__auto__.push((arguments[i__7286__auto___9668]));

var G__9669 = (i__7286__auto___9668 + (1));
i__7286__auto___9668 = G__9669;
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

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq9663){
var G__9664 = cljs.core.first.call(null,seq9663);
var seq9663__$1 = cljs.core.next.call(null,seq9663);
var G__9665 = cljs.core.first.call(null,seq9663__$1);
var seq9663__$2 = cljs.core.next.call(null,seq9663__$1);
var G__9666 = cljs.core.first.call(null,seq9663__$2);
var seq9663__$3 = cljs.core.next.call(null,seq9663__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__9664,G__9665,G__9666,seq9663__$3);
});


tiltontec.util.base.unless.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(var_args){
var args__7292__auto__ = [];
var len__7285__auto___9674 = arguments.length;
var i__7286__auto___9675 = (0);
while(true){
if((i__7286__auto___9675 < len__7285__auto___9674)){
args__7292__auto__.push((arguments[i__7286__auto___9675]));

var G__9676 = (i__7286__auto___9675 + (1));
i__7286__auto___9675 = G__9676;
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

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq9670){
var G__9671 = cljs.core.first.call(null,seq9670);
var seq9670__$1 = cljs.core.next.call(null,seq9670);
var G__9672 = cljs.core.first.call(null,seq9670__$1);
var seq9670__$2 = cljs.core.next.call(null,seq9670__$1);
var G__9673 = cljs.core.first.call(null,seq9670__$2);
var seq9670__$3 = cljs.core.next.call(null,seq9670__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__9671,G__9672,G__9673,seq9670__$3);
});


tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(var_args){
var args__7292__auto__ = [];
var len__7285__auto___9681 = arguments.length;
var i__7286__auto___9682 = (0);
while(true){
if((i__7286__auto___9682 < len__7285__auto___9681)){
args__7292__auto__.push((arguments[i__7286__auto___9682]));

var G__9683 = (i__7286__auto___9682 + (1));
i__7286__auto___9682 = G__9683;
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

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq9677){
var G__9678 = cljs.core.first.call(null,seq9677);
var seq9677__$1 = cljs.core.next.call(null,seq9677);
var G__9679 = cljs.core.first.call(null,seq9677__$1);
var seq9677__$2 = cljs.core.next.call(null,seq9677__$1);
var G__9680 = cljs.core.first.call(null,seq9677__$2);
var seq9677__$3 = cljs.core.next.call(null,seq9677__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__9678,G__9679,G__9680,seq9677__$3);
});


tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;
