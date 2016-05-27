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
var len__5593__auto___10243 = arguments.length;
var i__5594__auto___10244 = (0);
while(true){
if((i__5594__auto___10244 < len__5593__auto___10243)){
args__5600__auto__.push((arguments[i__5594__auto___10244]));

var G__10245 = (i__5594__auto___10244 + (1));
i__5594__auto___10244 = G__10245;
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

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq10241){
var G__10242 = cljs.core.first.call(null,seq10241);
var seq10241__$1 = cljs.core.next.call(null,seq10241);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__10242,seq10241__$1);
});
tiltontec.util.base.trx = (function tiltontec$util$base$trx(){
var args__5600__auto__ = [];
var len__5593__auto___10250 = arguments.length;
var i__5594__auto___10251 = (0);
while(true){
if((i__5594__auto___10251 < len__5593__auto___10250)){
args__5600__auto__.push((arguments[i__5594__auto___10251]));

var G__10252 = (i__5594__auto___10251 + (1));
i__5594__auto___10251 = G__10252;
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

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq10246){
var G__10247 = cljs.core.first.call(null,seq10246);
var seq10246__$1 = cljs.core.next.call(null,seq10246);
var G__10248 = cljs.core.first.call(null,seq10246__$1);
var seq10246__$2 = cljs.core.next.call(null,seq10246__$1);
var G__10249 = cljs.core.first.call(null,seq10246__$2);
var seq10246__$3 = cljs.core.next.call(null,seq10246__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__10247,G__10248,G__10249,seq10246__$3);
});

tiltontec.util.base.trx.cljs$lang$macro = true;
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(){
var args__5600__auto__ = [];
var len__5593__auto___10259 = arguments.length;
var i__5594__auto___10260 = (0);
while(true){
if((i__5594__auto___10260 < len__5593__auto___10259)){
args__5600__auto__.push((arguments[i__5594__auto___10260]));

var G__10261 = (i__5594__auto___10260 + (1));
i__5594__auto___10260 = G__10261;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__10257,body){
var vec__10258 = p__10257;
var lo = cljs.core.nth.call(null,vec__10258,(0),null);
var hi = cljs.core.nth.call(null,vec__10258,(1),null);
var trxargs = cljs.core.nthnext.call(null,vec__10258,(2));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","*trxdepth*","tiltontec.util.base/*trxdepth*",2067200500,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","*trxdepth*","tiltontec.util.base/*trxdepth*",2067200500,null))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,lo),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","*trxdepth*","tiltontec.util.base/*trxdepth*",2067200500,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,hi))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","trx","tiltontec.util.base/trx",972281126,null)),trxargs)))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","*trxdepth*","tiltontec.util.base/*trxdepth*",2067200500,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,hi))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"wtrx exceeded max depth "),cljs.core._conj.call(null,cljs.core.List.EMPTY,hi),cljs.core._conj.call(null,cljs.core.List.EMPTY,":"),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-trc$","tiltontec.util.base/call-trc$",-1682205883,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,trxargs)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),cljs.core.rest.call(null,trxargs))))))))))))))))))))))))),body)));
});

tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq10253){
var G__10254 = cljs.core.first.call(null,seq10253);
var seq10253__$1 = cljs.core.next.call(null,seq10253);
var G__10255 = cljs.core.first.call(null,seq10253__$1);
var seq10253__$2 = cljs.core.next.call(null,seq10253__$1);
var G__10256 = cljs.core.first.call(null,seq10253__$2);
var seq10253__$3 = cljs.core.next.call(null,seq10253__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__10254,G__10255,G__10256,seq10253__$3);
});

tiltontec.util.base.wtrx.cljs$lang$macro = true;
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(){
var args__5600__auto__ = [];
var len__5593__auto___10266 = arguments.length;
var i__5594__auto___10267 = (0);
while(true){
if((i__5594__auto___10267 < len__5593__auto___10266)){
args__5600__auto__.push((arguments[i__5594__auto___10267]));

var G__10268 = (i__5594__auto___10267 + (1));
i__5594__auto___10267 = G__10268;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__10262__auto__","result__10262__auto__",-798502803,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,body))))))),cljs.core.rest.call(null,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__10262__auto__","result__10262__auto__",-798502803,null)))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq10263){
var G__10264 = cljs.core.first.call(null,seq10263);
var seq10263__$1 = cljs.core.next.call(null,seq10263);
var G__10265 = cljs.core.first.call(null,seq10263__$1);
var seq10263__$2 = cljs.core.next.call(null,seq10263__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__10264,G__10265,seq10263__$2);
});

tiltontec.util.base.prog1.cljs$lang$macro = true;
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(){
var args__5600__auto__ = [];
var len__5593__auto___10274 = arguments.length;
var i__5594__auto___10275 = (0);
while(true){
if((i__5594__auto___10275 < len__5593__auto___10274)){
args__5600__auto__.push((arguments[i__5594__auto___10275]));

var G__10276 = (i__5594__auto___10275 + (1));
i__5594__auto___10275 = G__10276;
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

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq10269){
var G__10270 = cljs.core.first.call(null,seq10269);
var seq10269__$1 = cljs.core.next.call(null,seq10269);
var G__10271 = cljs.core.first.call(null,seq10269__$1);
var seq10269__$2 = cljs.core.next.call(null,seq10269__$1);
var G__10272 = cljs.core.first.call(null,seq10269__$2);
var seq10269__$3 = cljs.core.next.call(null,seq10269__$2);
var G__10273 = cljs.core.first.call(null,seq10269__$3);
var seq10269__$4 = cljs.core.next.call(null,seq10269__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__10270,G__10271,G__10272,G__10273,seq10269__$4);
});

tiltontec.util.base.b_when.cljs$lang$macro = true;
tiltontec.util.base.unless = (function tiltontec$util$base$unless(){
var args__5600__auto__ = [];
var len__5593__auto___10281 = arguments.length;
var i__5594__auto___10282 = (0);
while(true){
if((i__5594__auto___10282 < len__5593__auto___10281)){
args__5600__auto__.push((arguments[i__5594__auto___10282]));

var G__10283 = (i__5594__auto___10282 + (1));
i__5594__auto___10282 = G__10283;
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

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq10277){
var G__10278 = cljs.core.first.call(null,seq10277);
var seq10277__$1 = cljs.core.next.call(null,seq10277);
var G__10279 = cljs.core.first.call(null,seq10277__$1);
var seq10277__$2 = cljs.core.next.call(null,seq10277__$1);
var G__10280 = cljs.core.first.call(null,seq10277__$2);
var seq10277__$3 = cljs.core.next.call(null,seq10277__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__10278,G__10279,G__10280,seq10277__$3);
});

tiltontec.util.base.unless.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(){
var args__5600__auto__ = [];
var len__5593__auto___10288 = arguments.length;
var i__5594__auto___10289 = (0);
while(true){
if((i__5594__auto___10289 < len__5593__auto___10288)){
args__5600__auto__.push((arguments[i__5594__auto___10289]));

var G__10290 = (i__5594__auto___10289 + (1));
i__5594__auto___10289 = G__10290;
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

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq10284){
var G__10285 = cljs.core.first.call(null,seq10284);
var seq10284__$1 = cljs.core.next.call(null,seq10284);
var G__10286 = cljs.core.first.call(null,seq10284__$1);
var seq10284__$2 = cljs.core.next.call(null,seq10284__$1);
var G__10287 = cljs.core.first.call(null,seq10284__$2);
var seq10284__$3 = cljs.core.next.call(null,seq10284__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__10285,G__10286,G__10287,seq10284__$3);
});

tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(){
var args__5600__auto__ = [];
var len__5593__auto___10295 = arguments.length;
var i__5594__auto___10296 = (0);
while(true){
if((i__5594__auto___10296 < len__5593__auto___10295)){
args__5600__auto__.push((arguments[i__5594__auto___10296]));

var G__10297 = (i__5594__auto___10296 + (1));
i__5594__auto___10296 = G__10297;
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

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq10291){
var G__10292 = cljs.core.first.call(null,seq10291);
var seq10291__$1 = cljs.core.next.call(null,seq10291);
var G__10293 = cljs.core.first.call(null,seq10291__$1);
var seq10291__$2 = cljs.core.next.call(null,seq10291__$1);
var G__10294 = cljs.core.first.call(null,seq10291__$2);
var seq10291__$3 = cljs.core.next.call(null,seq10291__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__10292,G__10293,G__10294,seq10291__$3);
});

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;
