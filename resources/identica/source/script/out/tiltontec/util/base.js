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
var len__5593__auto___21894 = arguments.length;
var i__5594__auto___21895 = (0);
while(true){
if((i__5594__auto___21895 < len__5593__auto___21894)){
args__5600__auto__.push((arguments[i__5594__auto___21895]));

var G__21896 = (i__5594__auto___21895 + (1));
i__5594__auto___21895 = G__21896;
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

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq21892){
var G__21893 = cljs.core.first.call(null,seq21892);
var seq21892__$1 = cljs.core.next.call(null,seq21892);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__21893,seq21892__$1);
});
tiltontec.util.base.trx = (function tiltontec$util$base$trx(){
var args__5600__auto__ = [];
var len__5593__auto___21901 = arguments.length;
var i__5594__auto___21902 = (0);
while(true){
if((i__5594__auto___21902 < len__5593__auto___21901)){
args__5600__auto__.push((arguments[i__5594__auto___21902]));

var G__21903 = (i__5594__auto___21902 + (1));
i__5594__auto___21902 = G__21903;
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

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq21897){
var G__21898 = cljs.core.first.call(null,seq21897);
var seq21897__$1 = cljs.core.next.call(null,seq21897);
var G__21899 = cljs.core.first.call(null,seq21897__$1);
var seq21897__$2 = cljs.core.next.call(null,seq21897__$1);
var G__21900 = cljs.core.first.call(null,seq21897__$2);
var seq21897__$3 = cljs.core.next.call(null,seq21897__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__21898,G__21899,G__21900,seq21897__$3);
});

tiltontec.util.base.trx.cljs$lang$macro = true;
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(){
var args__5600__auto__ = [];
var len__5593__auto___21910 = arguments.length;
var i__5594__auto___21911 = (0);
while(true){
if((i__5594__auto___21911 < len__5593__auto___21910)){
args__5600__auto__.push((arguments[i__5594__auto___21911]));

var G__21912 = (i__5594__auto___21911 + (1));
i__5594__auto___21911 = G__21912;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__21908,body){
var vec__21909 = p__21908;
var lo = cljs.core.nth.call(null,vec__21909,(0),null);
var hi = cljs.core.nth.call(null,vec__21909,(1),null);
var trxargs = cljs.core.nthnext.call(null,vec__21909,(2));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","*trxdepth*","tiltontec.util.base/*trxdepth*",2067200500,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","*trxdepth*","tiltontec.util.base/*trxdepth*",2067200500,null))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,lo),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","*trxdepth*","tiltontec.util.base/*trxdepth*",2067200500,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,hi))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","trx","tiltontec.util.base/trx",972281126,null)),trxargs)))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","*trxdepth*","tiltontec.util.base/*trxdepth*",2067200500,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,hi))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"wtrx exceeded max depth "),cljs.core._conj.call(null,cljs.core.List.EMPTY,hi),cljs.core._conj.call(null,cljs.core.List.EMPTY,":"),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-trc$","tiltontec.util.base/call-trc$",-1682205883,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,trxargs)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),cljs.core.rest.call(null,trxargs))))))))))))))))))))))))),body)));
});

tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq21904){
var G__21905 = cljs.core.first.call(null,seq21904);
var seq21904__$1 = cljs.core.next.call(null,seq21904);
var G__21906 = cljs.core.first.call(null,seq21904__$1);
var seq21904__$2 = cljs.core.next.call(null,seq21904__$1);
var G__21907 = cljs.core.first.call(null,seq21904__$2);
var seq21904__$3 = cljs.core.next.call(null,seq21904__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__21905,G__21906,G__21907,seq21904__$3);
});

tiltontec.util.base.wtrx.cljs$lang$macro = true;
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(){
var args__5600__auto__ = [];
var len__5593__auto___21917 = arguments.length;
var i__5594__auto___21918 = (0);
while(true){
if((i__5594__auto___21918 < len__5593__auto___21917)){
args__5600__auto__.push((arguments[i__5594__auto___21918]));

var G__21919 = (i__5594__auto___21918 + (1));
i__5594__auto___21918 = G__21919;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__21913__auto__","result__21913__auto__",-1406066077,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,body))))))),cljs.core.rest.call(null,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__21913__auto__","result__21913__auto__",-1406066077,null)))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq21914){
var G__21915 = cljs.core.first.call(null,seq21914);
var seq21914__$1 = cljs.core.next.call(null,seq21914);
var G__21916 = cljs.core.first.call(null,seq21914__$1);
var seq21914__$2 = cljs.core.next.call(null,seq21914__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__21915,G__21916,seq21914__$2);
});

tiltontec.util.base.prog1.cljs$lang$macro = true;
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(){
var args__5600__auto__ = [];
var len__5593__auto___21925 = arguments.length;
var i__5594__auto___21926 = (0);
while(true){
if((i__5594__auto___21926 < len__5593__auto___21925)){
args__5600__auto__.push((arguments[i__5594__auto___21926]));

var G__21927 = (i__5594__auto___21926 + (1));
i__5594__auto___21926 = G__21927;
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

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq21920){
var G__21921 = cljs.core.first.call(null,seq21920);
var seq21920__$1 = cljs.core.next.call(null,seq21920);
var G__21922 = cljs.core.first.call(null,seq21920__$1);
var seq21920__$2 = cljs.core.next.call(null,seq21920__$1);
var G__21923 = cljs.core.first.call(null,seq21920__$2);
var seq21920__$3 = cljs.core.next.call(null,seq21920__$2);
var G__21924 = cljs.core.first.call(null,seq21920__$3);
var seq21920__$4 = cljs.core.next.call(null,seq21920__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__21921,G__21922,G__21923,G__21924,seq21920__$4);
});

tiltontec.util.base.b_when.cljs$lang$macro = true;
tiltontec.util.base.unless = (function tiltontec$util$base$unless(){
var args__5600__auto__ = [];
var len__5593__auto___21932 = arguments.length;
var i__5594__auto___21933 = (0);
while(true){
if((i__5594__auto___21933 < len__5593__auto___21932)){
args__5600__auto__.push((arguments[i__5594__auto___21933]));

var G__21934 = (i__5594__auto___21933 + (1));
i__5594__auto___21933 = G__21934;
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

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq21928){
var G__21929 = cljs.core.first.call(null,seq21928);
var seq21928__$1 = cljs.core.next.call(null,seq21928);
var G__21930 = cljs.core.first.call(null,seq21928__$1);
var seq21928__$2 = cljs.core.next.call(null,seq21928__$1);
var G__21931 = cljs.core.first.call(null,seq21928__$2);
var seq21928__$3 = cljs.core.next.call(null,seq21928__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__21929,G__21930,G__21931,seq21928__$3);
});

tiltontec.util.base.unless.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(){
var args__5600__auto__ = [];
var len__5593__auto___21939 = arguments.length;
var i__5594__auto___21940 = (0);
while(true){
if((i__5594__auto___21940 < len__5593__auto___21939)){
args__5600__auto__.push((arguments[i__5594__auto___21940]));

var G__21941 = (i__5594__auto___21940 + (1));
i__5594__auto___21940 = G__21941;
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

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq21935){
var G__21936 = cljs.core.first.call(null,seq21935);
var seq21935__$1 = cljs.core.next.call(null,seq21935);
var G__21937 = cljs.core.first.call(null,seq21935__$1);
var seq21935__$2 = cljs.core.next.call(null,seq21935__$1);
var G__21938 = cljs.core.first.call(null,seq21935__$2);
var seq21935__$3 = cljs.core.next.call(null,seq21935__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__21936,G__21937,G__21938,seq21935__$3);
});

tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(){
var args__5600__auto__ = [];
var len__5593__auto___21946 = arguments.length;
var i__5594__auto___21947 = (0);
while(true){
if((i__5594__auto___21947 < len__5593__auto___21946)){
args__5600__auto__.push((arguments[i__5594__auto___21947]));

var G__21948 = (i__5594__auto___21947 + (1));
i__5594__auto___21947 = G__21948;
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

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq21942){
var G__21943 = cljs.core.first.call(null,seq21942);
var seq21942__$1 = cljs.core.next.call(null,seq21942);
var G__21944 = cljs.core.first.call(null,seq21942__$1);
var seq21942__$2 = cljs.core.next.call(null,seq21942__$1);
var G__21945 = cljs.core.first.call(null,seq21942__$2);
var seq21942__$3 = cljs.core.next.call(null,seq21942__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__21943,G__21944,G__21945,seq21942__$3);
});

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;
