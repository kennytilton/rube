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
var len__7285__auto___14584 = arguments.length;
var i__7286__auto___14585 = (0);
while(true){
if((i__7286__auto___14585 < len__7285__auto___14584)){
args__7292__auto__.push((arguments[i__7286__auto___14585]));

var G__14586 = (i__7286__auto___14585 + (1));
i__7286__auto___14585 = G__14586;
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

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq14582){
var G__14583 = cljs.core.first.call(null,seq14582);
var seq14582__$1 = cljs.core.next.call(null,seq14582);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__14583,seq14582__$1);
});

tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14591 = arguments.length;
var i__7286__auto___14592 = (0);
while(true){
if((i__7286__auto___14592 < len__7285__auto___14591)){
args__7292__auto__.push((arguments[i__7286__auto___14592]));

var G__14593 = (i__7286__auto___14592 + (1));
i__7286__auto___14592 = G__14593;
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

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq14587){
var G__14588 = cljs.core.first.call(null,seq14587);
var seq14587__$1 = cljs.core.next.call(null,seq14587);
var G__14589 = cljs.core.first.call(null,seq14587__$1);
var seq14587__$2 = cljs.core.next.call(null,seq14587__$1);
var G__14590 = cljs.core.first.call(null,seq14587__$2);
var seq14587__$3 = cljs.core.next.call(null,seq14587__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__14588,G__14589,G__14590,seq14587__$3);
});


tiltontec.util.base.trx.cljs$lang$macro = true;
tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR_14595 = tiltontec.util.base._STAR_trxdepth_STAR_;
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
}finally {tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR_14595;
}});
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14604 = arguments.length;
var i__7286__auto___14605 = (0);
while(true){
if((i__7286__auto___14605 < len__7285__auto___14604)){
args__7292__auto__.push((arguments[i__7286__auto___14605]));

var G__14606 = (i__7286__auto___14605 + (1));
i__7286__auto___14605 = G__14606;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14600,body){
var vec__14601 = p__14600;
var seq__14602 = cljs.core.seq.call(null,vec__14601);
var first__14603 = cljs.core.first.call(null,seq__14602);
var seq__14602__$1 = cljs.core.next.call(null,seq__14602);
var lo = first__14603;
var first__14603__$1 = cljs.core.first.call(null,seq__14602__$1);
var seq__14602__$2 = cljs.core.next.call(null,seq__14602__$1);
var hi = first__14603__$1;
var trxargs = seq__14602__$2;
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

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq14596){
var G__14597 = cljs.core.first.call(null,seq14596);
var seq14596__$1 = cljs.core.next.call(null,seq14596);
var G__14598 = cljs.core.first.call(null,seq14596__$1);
var seq14596__$2 = cljs.core.next.call(null,seq14596__$1);
var G__14599 = cljs.core.first.call(null,seq14596__$2);
var seq14596__$3 = cljs.core.next.call(null,seq14596__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__14597,G__14598,G__14599,seq14596__$3);
});


tiltontec.util.base.wtrx.cljs$lang$macro = true;
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14611 = arguments.length;
var i__7286__auto___14612 = (0);
while(true){
if((i__7286__auto___14612 < len__7285__auto___14611)){
args__7292__auto__.push((arguments[i__7286__auto___14612]));

var G__14613 = (i__7286__auto___14612 + (1));
i__7286__auto___14612 = G__14613;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((2) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7293__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__14607__auto__","result__14607__auto__",-1235858908,null)),(function (){var x__7044__auto__ = cljs.core.first.call(null,body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core.rest.call(null,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__14607__auto__","result__14607__auto__",-1235858908,null)))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq14608){
var G__14609 = cljs.core.first.call(null,seq14608);
var seq14608__$1 = cljs.core.next.call(null,seq14608);
var G__14610 = cljs.core.first.call(null,seq14608__$1);
var seq14608__$2 = cljs.core.next.call(null,seq14608__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__14609,G__14610,seq14608__$2);
});


tiltontec.util.base.prog1.cljs$lang$macro = true;
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14619 = arguments.length;
var i__7286__auto___14620 = (0);
while(true){
if((i__7286__auto___14620 < len__7285__auto___14619)){
args__7292__auto__.push((arguments[i__7286__auto___14620]));

var G__14621 = (i__7286__auto___14620 + (1));
i__7286__auto___14620 = G__14621;
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

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq14614){
var G__14615 = cljs.core.first.call(null,seq14614);
var seq14614__$1 = cljs.core.next.call(null,seq14614);
var G__14616 = cljs.core.first.call(null,seq14614__$1);
var seq14614__$2 = cljs.core.next.call(null,seq14614__$1);
var G__14617 = cljs.core.first.call(null,seq14614__$2);
var seq14614__$3 = cljs.core.next.call(null,seq14614__$2);
var G__14618 = cljs.core.first.call(null,seq14614__$3);
var seq14614__$4 = cljs.core.next.call(null,seq14614__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__14615,G__14616,G__14617,G__14618,seq14614__$4);
});


tiltontec.util.base.b_when.cljs$lang$macro = true;
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14626 = arguments.length;
var i__7286__auto___14627 = (0);
while(true){
if((i__7286__auto___14627 < len__7285__auto___14626)){
args__7292__auto__.push((arguments[i__7286__auto___14627]));

var G__14628 = (i__7286__auto___14627 + (1));
i__7286__auto___14627 = G__14628;
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

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq14622){
var G__14623 = cljs.core.first.call(null,seq14622);
var seq14622__$1 = cljs.core.next.call(null,seq14622);
var G__14624 = cljs.core.first.call(null,seq14622__$1);
var seq14622__$2 = cljs.core.next.call(null,seq14622__$1);
var G__14625 = cljs.core.first.call(null,seq14622__$2);
var seq14622__$3 = cljs.core.next.call(null,seq14622__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__14623,G__14624,G__14625,seq14622__$3);
});


tiltontec.util.base.unless.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14633 = arguments.length;
var i__7286__auto___14634 = (0);
while(true){
if((i__7286__auto___14634 < len__7285__auto___14633)){
args__7292__auto__.push((arguments[i__7286__auto___14634]));

var G__14635 = (i__7286__auto___14634 + (1));
i__7286__auto___14634 = G__14635;
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

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq14629){
var G__14630 = cljs.core.first.call(null,seq14629);
var seq14629__$1 = cljs.core.next.call(null,seq14629);
var G__14631 = cljs.core.first.call(null,seq14629__$1);
var seq14629__$2 = cljs.core.next.call(null,seq14629__$1);
var G__14632 = cljs.core.first.call(null,seq14629__$2);
var seq14629__$3 = cljs.core.next.call(null,seq14629__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__14630,G__14631,G__14632,seq14629__$3);
});


tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(var_args){
var args__7292__auto__ = [];
var len__7285__auto___14640 = arguments.length;
var i__7286__auto___14641 = (0);
while(true){
if((i__7286__auto___14641 < len__7285__auto___14640)){
args__7292__auto__.push((arguments[i__7286__auto___14641]));

var G__14642 = (i__7286__auto___14641 + (1));
i__7286__auto___14641 = G__14642;
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

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq14636){
var G__14637 = cljs.core.first.call(null,seq14636);
var seq14636__$1 = cljs.core.next.call(null,seq14636);
var G__14638 = cljs.core.first.call(null,seq14636__$1);
var seq14636__$2 = cljs.core.next.call(null,seq14636__$1);
var G__14639 = cljs.core.first.call(null,seq14636__$2);
var seq14636__$3 = cljs.core.next.call(null,seq14636__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__14637,G__14638,G__14639,seq14636__$3);
});


tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;
