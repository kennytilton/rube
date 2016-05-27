// Compiled by ClojureScript 1.7.48 {}
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
return [cljs.core.str(s),cljs.core.str(": "),cljs.core.str(clojure.string.join.call(null,", ",bits))].join('');
});
tiltontec.util.base.call_trc = (function tiltontec$util$base$call_trc(){
var args__5600__auto__ = [];
var len__5593__auto___11697 = arguments.length;
var i__5594__auto___11698 = (0);
while(true){
if((i__5594__auto___11698 < len__5593__auto___11697)){
args__5600__auto__.push((arguments[i__5594__auto___11698]));

var G__11699 = (i__5594__auto___11698 + (1));
i__5594__auto___11698 = G__11699;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
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

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq11695){
var G__11696 = cljs.core.first.call(null,seq11695);
var seq11695__$1 = cljs.core.next.call(null,seq11695);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__11696,seq11695__$1);
});
tiltontec.util.base.trx = (function tiltontec$util$base$trx(){
var args__5600__auto__ = [];
var len__5593__auto___11704 = arguments.length;
var i__5594__auto___11705 = (0);
while(true){
if((i__5594__auto___11705 < len__5593__auto___11704)){
args__5600__auto__.push((arguments[i__5594__auto___11705]));

var G__11706 = (i__5594__auto___11705 + (1));
i__5594__auto___11705 = G__11706;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,label,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-trc","tiltontec.util.base/call-trc",242817092,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,((!((label == null)))?[cljs.core.str(label)].join(''):null)),vals)));
});

tiltontec.util.base.trx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq11700){
var G__11701 = cljs.core.first.call(null,seq11700);
var seq11700__$1 = cljs.core.next.call(null,seq11700);
var G__11702 = cljs.core.first.call(null,seq11700__$1);
var seq11700__$2 = cljs.core.next.call(null,seq11700__$1);
var G__11703 = cljs.core.first.call(null,seq11700__$2);
var seq11700__$3 = cljs.core.next.call(null,seq11700__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__11701,G__11702,G__11703,seq11700__$3);
});

tiltontec.util.base.trx.cljs$lang$macro = true;
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(){
var args__5600__auto__ = [];
var len__5593__auto___11713 = arguments.length;
var i__5594__auto___11714 = (0);
while(true){
if((i__5594__auto___11714 < len__5593__auto___11713)){
args__5600__auto__.push((arguments[i__5594__auto___11714]));

var G__11715 = (i__5594__auto___11714 + (1));
i__5594__auto___11714 = G__11715;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__11711,body){
var vec__11712 = p__11711;
var lo = cljs.core.nth.call(null,vec__11712,(0),null);
var hi = cljs.core.nth.call(null,vec__11712,(1),null);
var trxargs = cljs.core.nthnext.call(null,vec__11712,(2));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","*trxdepth*","tiltontec.util.base/*trxdepth*",2067200500,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","*trxdepth*","tiltontec.util.base/*trxdepth*",2067200500,null))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,lo),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","*trxdepth*","tiltontec.util.base/*trxdepth*",2067200500,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,hi))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","trx","tiltontec.util.base/trx",972281126,null)),trxargs)))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","*trxdepth*","tiltontec.util.base/*trxdepth*",2067200500,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,hi))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"wtrx exceeded max depth "),cljs.core._conj.call(null,cljs.core.List.EMPTY,hi),cljs.core._conj.call(null,cljs.core.List.EMPTY,":"),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-trc$","tiltontec.util.base/call-trc$",-1682205883,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,trxargs)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),cljs.core.rest.call(null,trxargs))))))))))))))))))))))))),body)));
});

tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq11707){
var G__11708 = cljs.core.first.call(null,seq11707);
var seq11707__$1 = cljs.core.next.call(null,seq11707);
var G__11709 = cljs.core.first.call(null,seq11707__$1);
var seq11707__$2 = cljs.core.next.call(null,seq11707__$1);
var G__11710 = cljs.core.first.call(null,seq11707__$2);
var seq11707__$3 = cljs.core.next.call(null,seq11707__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__11708,G__11709,G__11710,seq11707__$3);
});

tiltontec.util.base.wtrx.cljs$lang$macro = true;
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(){
var args__5600__auto__ = [];
var len__5593__auto___11720 = arguments.length;
var i__5594__auto___11721 = (0);
while(true){
if((i__5594__auto___11721 < len__5593__auto___11720)){
args__5600__auto__.push((arguments[i__5594__auto___11721]));

var G__11722 = (i__5594__auto___11721 + (1));
i__5594__auto___11721 = G__11722;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__11716__auto__","result__11716__auto__",-211651636,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,body))))))),cljs.core.rest.call(null,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__11716__auto__","result__11716__auto__",-211651636,null)))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq11717){
var G__11718 = cljs.core.first.call(null,seq11717);
var seq11717__$1 = cljs.core.next.call(null,seq11717);
var G__11719 = cljs.core.first.call(null,seq11717__$1);
var seq11717__$2 = cljs.core.next.call(null,seq11717__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__11718,G__11719,seq11717__$2);
});

tiltontec.util.base.prog1.cljs$lang$macro = true;
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(){
var args__5600__auto__ = [];
var len__5593__auto___11728 = arguments.length;
var i__5594__auto___11729 = (0);
while(true){
if((i__5594__auto___11729 < len__5593__auto___11728)){
args__5600__auto__.push((arguments[i__5594__auto___11729]));

var G__11730 = (i__5594__auto___11729 + (1));
i__5594__auto___11729 = G__11730;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((4) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((4)),(0))):null);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5601__auto__);
});

tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,var$),cljs.core._conj.call(null,cljs.core.List.EMPTY,form)))))),body)));
});

tiltontec.util.base.b_when.cljs$lang$maxFixedArity = (4);

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq11723){
var G__11724 = cljs.core.first.call(null,seq11723);
var seq11723__$1 = cljs.core.next.call(null,seq11723);
var G__11725 = cljs.core.first.call(null,seq11723__$1);
var seq11723__$2 = cljs.core.next.call(null,seq11723__$1);
var G__11726 = cljs.core.first.call(null,seq11723__$2);
var seq11723__$3 = cljs.core.next.call(null,seq11723__$2);
var G__11727 = cljs.core.first.call(null,seq11723__$3);
var seq11723__$4 = cljs.core.next.call(null,seq11723__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__11724,G__11725,G__11726,G__11727,seq11723__$4);
});

tiltontec.util.base.b_when.cljs$lang$macro = true;
tiltontec.util.base.unless = (function tiltontec$util$base$unless(){
var args__5600__auto__ = [];
var len__5593__auto___11735 = arguments.length;
var i__5594__auto___11736 = (0);
while(true){
if((i__5594__auto___11736 < len__5593__auto___11735)){
args__5600__auto__.push((arguments[i__5594__auto___11736]));

var G__11737 = (i__5594__auto___11736 + (1));
i__5594__auto___11736 = G__11737;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,form),body)));
});

tiltontec.util.base.unless.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq11731){
var G__11732 = cljs.core.first.call(null,seq11731);
var seq11731__$1 = cljs.core.next.call(null,seq11731);
var G__11733 = cljs.core.first.call(null,seq11731__$1);
var seq11731__$2 = cljs.core.next.call(null,seq11731__$1);
var G__11734 = cljs.core.first.call(null,seq11731__$2);
var seq11731__$3 = cljs.core.next.call(null,seq11731__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__11732,G__11733,G__11734,seq11731__$3);
});

tiltontec.util.base.unless.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(){
var args__5600__auto__ = [];
var len__5593__auto___11742 = arguments.length;
var i__5594__auto___11743 = (0);
while(true){
if((i__5594__auto___11743 < len__5593__auto___11742)){
args__5600__auto__.push((arguments[i__5594__auto___11743]));

var G__11744 = (i__5594__auto___11743 + (1));
i__5594__auto___11743 = G__11744;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (slot_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.symbol.call(null,[cljs.core.str((function (){var or__4554__auto__ = reader_prefix;
if(cljs.core.truth_(or__4554__auto__)){
return or__4554__auto__;
} else {
return "";
}
})()),cljs.core.str(slot_SHARP_)].join(''))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keyword.call(null,slot_SHARP_)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))))))))))));
}),slots))));
});

tiltontec.util.base.def_rmap_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq11738){
var G__11739 = cljs.core.first.call(null,seq11738);
var seq11738__$1 = cljs.core.next.call(null,seq11738);
var G__11740 = cljs.core.first.call(null,seq11738__$1);
var seq11738__$2 = cljs.core.next.call(null,seq11738__$1);
var G__11741 = cljs.core.first.call(null,seq11738__$2);
var seq11738__$3 = cljs.core.next.call(null,seq11738__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__11739,G__11740,G__11741,seq11738__$3);
});

tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(){
var args__5600__auto__ = [];
var len__5593__auto___11749 = arguments.length;
var i__5594__auto___11750 = (0);
while(true){
if((i__5594__auto___11750 < len__5593__auto___11749)){
args__5600__auto__.push((arguments[i__5594__auto___11750]));

var G__11751 = (i__5594__auto___11750 + (1));
i__5594__auto___11750 = G__11751;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (slot_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.symbol.call(null,[cljs.core.str((function (){var or__4554__auto__ = reader_prefix;
if(cljs.core.truth_(or__4554__auto__)){
return or__4554__auto__;
} else {
return "";
}
})()),cljs.core.str(slot_SHARP_)].join(''))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keyword.call(null,slot_SHARP_)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))))))))))));
}),slots))));
});

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq11745){
var G__11746 = cljs.core.first.call(null,seq11745);
var seq11745__$1 = cljs.core.next.call(null,seq11745);
var G__11747 = cljs.core.first.call(null,seq11745__$1);
var seq11745__$2 = cljs.core.next.call(null,seq11745__$1);
var G__11748 = cljs.core.first.call(null,seq11745__$2);
var seq11745__$3 = cljs.core.next.call(null,seq11745__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__11746,G__11747,G__11748,seq11745__$3);
});

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;
