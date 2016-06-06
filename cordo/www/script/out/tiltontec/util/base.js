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
var len__5593__auto___23090 = arguments.length;
var i__5594__auto___23091 = (0);
while(true){
if((i__5594__auto___23091 < len__5593__auto___23090)){
args__5600__auto__.push((arguments[i__5594__auto___23091]));

var G__23092 = (i__5594__auto___23091 + (1));
i__5594__auto___23091 = G__23092;
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

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq23088){
var G__23089 = cljs.core.first.call(null,seq23088);
var seq23088__$1 = cljs.core.next.call(null,seq23088);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__23089,seq23088__$1);
});
tiltontec.util.base.trx = (function tiltontec$util$base$trx(){
var args__5600__auto__ = [];
var len__5593__auto___23097 = arguments.length;
var i__5594__auto___23098 = (0);
while(true){
if((i__5594__auto___23098 < len__5593__auto___23097)){
args__5600__auto__.push((arguments[i__5594__auto___23098]));

var G__23099 = (i__5594__auto___23098 + (1));
i__5594__auto___23098 = G__23099;
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

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq23093){
var G__23094 = cljs.core.first.call(null,seq23093);
var seq23093__$1 = cljs.core.next.call(null,seq23093);
var G__23095 = cljs.core.first.call(null,seq23093__$1);
var seq23093__$2 = cljs.core.next.call(null,seq23093__$1);
var G__23096 = cljs.core.first.call(null,seq23093__$2);
var seq23093__$3 = cljs.core.next.call(null,seq23093__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__23094,G__23095,G__23096,seq23093__$3);
});

tiltontec.util.base.trx.cljs$lang$macro = true;
tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR_23101 = tiltontec.util.base._STAR_trxdepth_STAR_;
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
}finally {tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR_23101;
}});
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(){
var args__5600__auto__ = [];
var len__5593__auto___23108 = arguments.length;
var i__5594__auto___23109 = (0);
while(true){
if((i__5594__auto___23109 < len__5593__auto___23108)){
args__5600__auto__.push((arguments[i__5594__auto___23109]));

var G__23110 = (i__5594__auto___23109 + (1));
i__5594__auto___23109 = G__23110;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__23106,body){
var vec__23107 = p__23106;
var lo = cljs.core.nth.call(null,vec__23107,(0),null);
var hi = cljs.core.nth.call(null,vec__23107,(1),null);
var trxargs = cljs.core.nthnext.call(null,vec__23107,(2));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-wtrx","tiltontec.util.base/call-wtrx",-151750095,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))))),body)))),cljs.core._conj.call(null,cljs.core.List.EMPTY,lo),cljs.core._conj.call(null,cljs.core.List.EMPTY,hi),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),trxargs)))))));
});

tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq23102){
var G__23103 = cljs.core.first.call(null,seq23102);
var seq23102__$1 = cljs.core.next.call(null,seq23102);
var G__23104 = cljs.core.first.call(null,seq23102__$1);
var seq23102__$2 = cljs.core.next.call(null,seq23102__$1);
var G__23105 = cljs.core.first.call(null,seq23102__$2);
var seq23102__$3 = cljs.core.next.call(null,seq23102__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__23103,G__23104,G__23105,seq23102__$3);
});

tiltontec.util.base.wtrx.cljs$lang$macro = true;
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(){
var args__5600__auto__ = [];
var len__5593__auto___23115 = arguments.length;
var i__5594__auto___23116 = (0);
while(true){
if((i__5594__auto___23116 < len__5593__auto___23115)){
args__5600__auto__.push((arguments[i__5594__auto___23116]));

var G__23117 = (i__5594__auto___23116 + (1));
i__5594__auto___23116 = G__23117;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__23111__auto__","result__23111__auto__",222096476,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,body))))))),cljs.core.rest.call(null,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__23111__auto__","result__23111__auto__",222096476,null)))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq23112){
var G__23113 = cljs.core.first.call(null,seq23112);
var seq23112__$1 = cljs.core.next.call(null,seq23112);
var G__23114 = cljs.core.first.call(null,seq23112__$1);
var seq23112__$2 = cljs.core.next.call(null,seq23112__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__23113,G__23114,seq23112__$2);
});

tiltontec.util.base.prog1.cljs$lang$macro = true;
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(){
var args__5600__auto__ = [];
var len__5593__auto___23123 = arguments.length;
var i__5594__auto___23124 = (0);
while(true){
if((i__5594__auto___23124 < len__5593__auto___23123)){
args__5600__auto__.push((arguments[i__5594__auto___23124]));

var G__23125 = (i__5594__auto___23124 + (1));
i__5594__auto___23124 = G__23125;
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

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq23118){
var G__23119 = cljs.core.first.call(null,seq23118);
var seq23118__$1 = cljs.core.next.call(null,seq23118);
var G__23120 = cljs.core.first.call(null,seq23118__$1);
var seq23118__$2 = cljs.core.next.call(null,seq23118__$1);
var G__23121 = cljs.core.first.call(null,seq23118__$2);
var seq23118__$3 = cljs.core.next.call(null,seq23118__$2);
var G__23122 = cljs.core.first.call(null,seq23118__$3);
var seq23118__$4 = cljs.core.next.call(null,seq23118__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__23119,G__23120,G__23121,G__23122,seq23118__$4);
});

tiltontec.util.base.b_when.cljs$lang$macro = true;
tiltontec.util.base.unless = (function tiltontec$util$base$unless(){
var args__5600__auto__ = [];
var len__5593__auto___23130 = arguments.length;
var i__5594__auto___23131 = (0);
while(true){
if((i__5594__auto___23131 < len__5593__auto___23130)){
args__5600__auto__.push((arguments[i__5594__auto___23131]));

var G__23132 = (i__5594__auto___23131 + (1));
i__5594__auto___23131 = G__23132;
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

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq23126){
var G__23127 = cljs.core.first.call(null,seq23126);
var seq23126__$1 = cljs.core.next.call(null,seq23126);
var G__23128 = cljs.core.first.call(null,seq23126__$1);
var seq23126__$2 = cljs.core.next.call(null,seq23126__$1);
var G__23129 = cljs.core.first.call(null,seq23126__$2);
var seq23126__$3 = cljs.core.next.call(null,seq23126__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__23127,G__23128,G__23129,seq23126__$3);
});

tiltontec.util.base.unless.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(){
var args__5600__auto__ = [];
var len__5593__auto___23137 = arguments.length;
var i__5594__auto___23138 = (0);
while(true){
if((i__5594__auto___23138 < len__5593__auto___23137)){
args__5600__auto__.push((arguments[i__5594__auto___23138]));

var G__23139 = (i__5594__auto___23138 + (1));
i__5594__auto___23138 = G__23139;
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

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq23133){
var G__23134 = cljs.core.first.call(null,seq23133);
var seq23133__$1 = cljs.core.next.call(null,seq23133);
var G__23135 = cljs.core.first.call(null,seq23133__$1);
var seq23133__$2 = cljs.core.next.call(null,seq23133__$1);
var G__23136 = cljs.core.first.call(null,seq23133__$2);
var seq23133__$3 = cljs.core.next.call(null,seq23133__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__23134,G__23135,G__23136,seq23133__$3);
});

tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(){
var args__5600__auto__ = [];
var len__5593__auto___23144 = arguments.length;
var i__5594__auto___23145 = (0);
while(true){
if((i__5594__auto___23145 < len__5593__auto___23144)){
args__5600__auto__.push((arguments[i__5594__auto___23145]));

var G__23146 = (i__5594__auto___23145 + (1));
i__5594__auto___23145 = G__23146;
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

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq23140){
var G__23141 = cljs.core.first.call(null,seq23140);
var seq23140__$1 = cljs.core.next.call(null,seq23140);
var G__23142 = cljs.core.first.call(null,seq23140__$1);
var seq23140__$2 = cljs.core.next.call(null,seq23140__$1);
var G__23143 = cljs.core.first.call(null,seq23140__$2);
var seq23140__$3 = cljs.core.next.call(null,seq23140__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__23141,G__23142,G__23143,seq23140__$3);
});

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;
