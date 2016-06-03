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
return [cljs.core.str(s),cljs.core.str(": "),cljs.core.str([cljs.core.str(bits)].join(''))].join('');
});
tiltontec.util.base.call_trc = (function tiltontec$util$base$call_trc(){
var args__5600__auto__ = [];
var len__5593__auto___63842 = arguments.length;
var i__5594__auto___63843 = (0);
while(true){
if((i__5594__auto___63843 < len__5593__auto___63842)){
args__5600__auto__.push((arguments[i__5594__auto___63843]));

var G__63844 = (i__5594__auto___63843 + (1));
i__5594__auto___63843 = G__63844;
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

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq63840){
var G__63841 = cljs.core.first.call(null,seq63840);
var seq63840__$1 = cljs.core.next.call(null,seq63840);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__63841,seq63840__$1);
});
tiltontec.util.base.trx = (function tiltontec$util$base$trx(){
var args__5600__auto__ = [];
var len__5593__auto___63849 = arguments.length;
var i__5594__auto___63850 = (0);
while(true){
if((i__5594__auto___63850 < len__5593__auto___63849)){
args__5600__auto__.push((arguments[i__5594__auto___63850]));

var G__63851 = (i__5594__auto___63850 + (1));
i__5594__auto___63850 = G__63851;
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

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq63845){
var G__63846 = cljs.core.first.call(null,seq63845);
var seq63845__$1 = cljs.core.next.call(null,seq63845);
var G__63847 = cljs.core.first.call(null,seq63845__$1);
var seq63845__$2 = cljs.core.next.call(null,seq63845__$1);
var G__63848 = cljs.core.first.call(null,seq63845__$2);
var seq63845__$3 = cljs.core.next.call(null,seq63845__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__63846,G__63847,G__63848,seq63845__$3);
});

tiltontec.util.base.trx.cljs$lang$macro = true;
tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR_63853 = tiltontec.util.base._STAR_trxdepth_STAR_;
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
}finally {tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR_63853;
}});
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(){
var args__5600__auto__ = [];
var len__5593__auto___63860 = arguments.length;
var i__5594__auto___63861 = (0);
while(true){
if((i__5594__auto___63861 < len__5593__auto___63860)){
args__5600__auto__.push((arguments[i__5594__auto___63861]));

var G__63862 = (i__5594__auto___63861 + (1));
i__5594__auto___63861 = G__63862;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__63858,body){
var vec__63859 = p__63858;
var lo = cljs.core.nth.call(null,vec__63859,(0),null);
var hi = cljs.core.nth.call(null,vec__63859,(1),null);
var trxargs = cljs.core.nthnext.call(null,vec__63859,(2));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-wtrx","tiltontec.util.base/call-wtrx",-151750095,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))))),body)))),cljs.core._conj.call(null,cljs.core.List.EMPTY,lo),cljs.core._conj.call(null,cljs.core.List.EMPTY,hi),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),trxargs)))))));
});

tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq63854){
var G__63855 = cljs.core.first.call(null,seq63854);
var seq63854__$1 = cljs.core.next.call(null,seq63854);
var G__63856 = cljs.core.first.call(null,seq63854__$1);
var seq63854__$2 = cljs.core.next.call(null,seq63854__$1);
var G__63857 = cljs.core.first.call(null,seq63854__$2);
var seq63854__$3 = cljs.core.next.call(null,seq63854__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__63855,G__63856,G__63857,seq63854__$3);
});

tiltontec.util.base.wtrx.cljs$lang$macro = true;
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(){
var args__5600__auto__ = [];
var len__5593__auto___63867 = arguments.length;
var i__5594__auto___63868 = (0);
while(true){
if((i__5594__auto___63868 < len__5593__auto___63867)){
args__5600__auto__.push((arguments[i__5594__auto___63868]));

var G__63869 = (i__5594__auto___63868 + (1));
i__5594__auto___63868 = G__63869;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__63863__auto__","result__63863__auto__",-595390481,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,body))))))),cljs.core.rest.call(null,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__63863__auto__","result__63863__auto__",-595390481,null)))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq63864){
var G__63865 = cljs.core.first.call(null,seq63864);
var seq63864__$1 = cljs.core.next.call(null,seq63864);
var G__63866 = cljs.core.first.call(null,seq63864__$1);
var seq63864__$2 = cljs.core.next.call(null,seq63864__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__63865,G__63866,seq63864__$2);
});

tiltontec.util.base.prog1.cljs$lang$macro = true;
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(){
var args__5600__auto__ = [];
var len__5593__auto___63875 = arguments.length;
var i__5594__auto___63876 = (0);
while(true){
if((i__5594__auto___63876 < len__5593__auto___63875)){
args__5600__auto__.push((arguments[i__5594__auto___63876]));

var G__63877 = (i__5594__auto___63876 + (1));
i__5594__auto___63876 = G__63877;
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

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq63870){
var G__63871 = cljs.core.first.call(null,seq63870);
var seq63870__$1 = cljs.core.next.call(null,seq63870);
var G__63872 = cljs.core.first.call(null,seq63870__$1);
var seq63870__$2 = cljs.core.next.call(null,seq63870__$1);
var G__63873 = cljs.core.first.call(null,seq63870__$2);
var seq63870__$3 = cljs.core.next.call(null,seq63870__$2);
var G__63874 = cljs.core.first.call(null,seq63870__$3);
var seq63870__$4 = cljs.core.next.call(null,seq63870__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__63871,G__63872,G__63873,G__63874,seq63870__$4);
});

tiltontec.util.base.b_when.cljs$lang$macro = true;
tiltontec.util.base.unless = (function tiltontec$util$base$unless(){
var args__5600__auto__ = [];
var len__5593__auto___63882 = arguments.length;
var i__5594__auto___63883 = (0);
while(true){
if((i__5594__auto___63883 < len__5593__auto___63882)){
args__5600__auto__.push((arguments[i__5594__auto___63883]));

var G__63884 = (i__5594__auto___63883 + (1));
i__5594__auto___63883 = G__63884;
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

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq63878){
var G__63879 = cljs.core.first.call(null,seq63878);
var seq63878__$1 = cljs.core.next.call(null,seq63878);
var G__63880 = cljs.core.first.call(null,seq63878__$1);
var seq63878__$2 = cljs.core.next.call(null,seq63878__$1);
var G__63881 = cljs.core.first.call(null,seq63878__$2);
var seq63878__$3 = cljs.core.next.call(null,seq63878__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__63879,G__63880,G__63881,seq63878__$3);
});

tiltontec.util.base.unless.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(){
var args__5600__auto__ = [];
var len__5593__auto___63889 = arguments.length;
var i__5594__auto___63890 = (0);
while(true){
if((i__5594__auto___63890 < len__5593__auto___63889)){
args__5600__auto__.push((arguments[i__5594__auto___63890]));

var G__63891 = (i__5594__auto___63890 + (1));
i__5594__auto___63890 = G__63891;
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

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq63885){
var G__63886 = cljs.core.first.call(null,seq63885);
var seq63885__$1 = cljs.core.next.call(null,seq63885);
var G__63887 = cljs.core.first.call(null,seq63885__$1);
var seq63885__$2 = cljs.core.next.call(null,seq63885__$1);
var G__63888 = cljs.core.first.call(null,seq63885__$2);
var seq63885__$3 = cljs.core.next.call(null,seq63885__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__63886,G__63887,G__63888,seq63885__$3);
});

tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(){
var args__5600__auto__ = [];
var len__5593__auto___63896 = arguments.length;
var i__5594__auto___63897 = (0);
while(true){
if((i__5594__auto___63897 < len__5593__auto___63896)){
args__5600__auto__.push((arguments[i__5594__auto___63897]));

var G__63898 = (i__5594__auto___63897 + (1));
i__5594__auto___63897 = G__63898;
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

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq63892){
var G__63893 = cljs.core.first.call(null,seq63892);
var seq63892__$1 = cljs.core.next.call(null,seq63892);
var G__63894 = cljs.core.first.call(null,seq63892__$1);
var seq63892__$2 = cljs.core.next.call(null,seq63892__$1);
var G__63895 = cljs.core.first.call(null,seq63892__$2);
var seq63892__$3 = cljs.core.next.call(null,seq63892__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__63893,G__63894,G__63895,seq63892__$3);
});

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;
