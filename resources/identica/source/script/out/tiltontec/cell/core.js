// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.cell.core');
goog.require('cljs.core');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.evaluate');
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.core.make_cell = (function tiltontec$cell$core$make_cell(){
var args__5600__auto__ = [];
var len__5593__auto___15011 = arguments.length;
var i__5594__auto___15012 = (0);
while(true){
if((i__5594__auto___15012 < len__5593__auto___15011)){
args__5600__auto__.push((arguments[i__5594__auto___15012]));

var G__15013 = (i__5594__auto___15012 + (1));
i__5594__auto___15012 = G__15013;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((0) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((0)),(0))):null);
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__5601__auto__);
});

tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.call(null,cljs.core.hash_map,kvs);
return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"callers","callers",-1991542784),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633),new cljs.core.Keyword(null,"lazy","lazy",-424547181),new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),new cljs.core.Keyword(null,"pulse","pulse",-244494476),new cljs.core.Keyword(null,"input?","input?",-1792843173)],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,new cljs.core.Keyword(null,"nascent","nascent",443401807),(0),false,(0),(0),true]),options),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071)], null));
});

tiltontec.cell.core.make_cell.cljs$lang$maxFixedArity = (0);

tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq15010){
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15010));
});
tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(){
var args__5600__auto__ = [];
var len__5593__auto___15015 = arguments.length;
var i__5594__auto___15016 = (0);
while(true){
if((i__5594__auto___15016 < len__5593__auto___15015)){
args__5600__auto__.push((arguments[i__5594__auto___15016]));

var G__15017 = (i__5594__auto___15016 + (1));
i__5594__auto___15016 = G__15017;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((0) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((0)),(0))):null);
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(argseq__5601__auto__);
});

tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.call(null,cljs.core.hash_map,kvs);
var rule = new cljs.core.Keyword(null,"rule","rule",729973257).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(rule)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"rule","rule",-1924462512,null)))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,rule)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"rule","rule",-1924462512,null))))].join('')));
}

return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"callers","callers",-1991542784),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633),new cljs.core.Keyword(null,"lazy","lazy",-424547181),new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),new cljs.core.Keyword(null,"pulse","pulse",-244494476),new cljs.core.Keyword(null,"useds","useds",621350967),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"input?","input?",-1792843173)],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,new cljs.core.Keyword(null,"nascent","nascent",443401807),(0),false,(0),(0),cljs.core.PersistentHashSet.EMPTY,true,false]),options),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037)], null));
});

tiltontec.cell.core.make_c_formula.cljs$lang$maxFixedArity = (0);

tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq15014){
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15014));
});
tiltontec.cell.core.c_fn_var = (function tiltontec$cell$core$c_fn_var(){
var args__5600__auto__ = [];
var len__5593__auto___15024 = arguments.length;
var i__5594__auto___15025 = (0);
while(true){
if((i__5594__auto___15025 < len__5593__auto___15024)){
args__5600__auto__.push((arguments[i__5594__auto___15025]));

var G__15026 = (i__5594__auto___15025 + (1));
i__5594__auto___15025 = G__15026;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15022,body){
var vec__15023 = p__15022;
var c = cljs.core.nth.call(null,vec__15023,(0),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,c)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-model","tiltontec.cell.base/c-model",566190580,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,c))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cache","cache",403508473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-value","tiltontec.cell.base/c-value",-808509395,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,c)))))))))),body)))))));
});

tiltontec.cell.core.c_fn_var.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_fn_var.cljs$lang$applyTo = (function (seq15018){
var G__15019 = cljs.core.first.call(null,seq15018);
var seq15018__$1 = cljs.core.next.call(null,seq15018);
var G__15020 = cljs.core.first.call(null,seq15018__$1);
var seq15018__$2 = cljs.core.next.call(null,seq15018__$1);
var G__15021 = cljs.core.first.call(null,seq15018__$2);
var seq15018__$3 = cljs.core.next.call(null,seq15018__$2);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic(G__15019,G__15020,G__15021,seq15018__$3);
});

tiltontec.cell.core.c_fn_var.cljs$lang$macro = true;
tiltontec.cell.core.c_fn = (function tiltontec$cell$core$c_fn(){
var args__5600__auto__ = [];
var len__5593__auto___15030 = arguments.length;
var i__5594__auto___15031 = (0);
while(true){
if((i__5594__auto___15031 < len__5593__auto___15030)){
args__5600__auto__.push((arguments[i__5594__auto___15031]));

var G__15032 = (i__5594__auto___15031 + (1));
i__5594__auto___15031 = G__15032;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn-var","tiltontec.cell.core/c-fn-var",-1960595436,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"slot-c#","slot-c#",1084398166,null)))))),body)));
});

tiltontec.cell.core.c_fn.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_fn.cljs$lang$applyTo = (function (seq15027){
var G__15028 = cljs.core.first.call(null,seq15027);
var seq15027__$1 = cljs.core.next.call(null,seq15027);
var G__15029 = cljs.core.first.call(null,seq15027__$1);
var seq15027__$2 = cljs.core.next.call(null,seq15027__$1);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic(G__15028,G__15029,seq15027__$2);
});

tiltontec.cell.core.c_fn.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_ = (function tiltontec$cell$core$c_QMARK_(){
var args__5600__auto__ = [];
var len__5593__auto___15036 = arguments.length;
var i__5594__auto___15037 = (0);
while(true){
if((i__5594__auto___15037 < len__5593__auto___15036)){
args__5600__auto__.push((arguments[i__5594__auto___15037]));

var G__15038 = (i__5594__auto___15037 + (1));
i__5594__auto___15037 = G__15038;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))))));
});

tiltontec.cell.core.c_QMARK_.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_.cljs$lang$applyTo = (function (seq15033){
var G__15034 = cljs.core.first.call(null,seq15033);
var seq15033__$1 = cljs.core.next.call(null,seq15033);
var G__15035 = cljs.core.first.call(null,seq15033__$1);
var seq15033__$2 = cljs.core.next.call(null,seq15033__$1);
return tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__15034,G__15035,seq15033__$2);
});

tiltontec.cell.core.c_QMARK_.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK__PLUS_ = (function tiltontec$cell$core$c_QMARK__PLUS_(){
var args__5600__auto__ = [];
var len__5593__auto___15045 = arguments.length;
var i__5594__auto___15046 = (0);
while(true){
if((i__5594__auto___15046 < len__5593__auto___15045)){
args__5600__auto__.push((arguments[i__5594__auto___15046]));

var G__15047 = (i__5594__auto___15046 + (1));
i__5594__auto___15046 = G__15047;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15043,body){
var vec__15044 = p__15043;
var options = cljs.core.nthnext.call(null,vec__15044,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))))));
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$applyTo = (function (seq15039){
var G__15040 = cljs.core.first.call(null,seq15039);
var seq15039__$1 = cljs.core.next.call(null,seq15039);
var G__15041 = cljs.core.first.call(null,seq15039__$1);
var seq15039__$2 = cljs.core.next.call(null,seq15039__$1);
var G__15042 = cljs.core.first.call(null,seq15039__$2);
var seq15039__$3 = cljs.core.next.call(null,seq15039__$2);
return tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__15040,G__15041,G__15042,seq15039__$3);
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK__PLUS_n = (function tiltontec$cell$core$c_QMARK__PLUS_n(){
var args__5600__auto__ = [];
var len__5593__auto___15051 = arguments.length;
var i__5594__auto___15052 = (0);
while(true){
if((i__5594__auto___15052 < len__5593__auto___15051)){
args__5600__auto__.push((arguments[i__5594__auto___15052]));

var G__15053 = (i__5594__auto___15052 + (1));
i__5594__auto___15052 = G__15053;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))))));
});

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$applyTo = (function (seq15048){
var G__15049 = cljs.core.first.call(null,seq15048);
var seq15048__$1 = cljs.core.next.call(null,seq15048);
var G__15050 = cljs.core.first.call(null,seq15048__$1);
var seq15048__$2 = cljs.core.next.call(null,seq15048__$1);
return tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic(G__15049,G__15050,seq15048__$2);
});

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_n = (function tiltontec$cell$core$c_QMARK_n(){
var args__5600__auto__ = [];
var len__5593__auto___15057 = arguments.length;
var i__5594__auto___15058 = (0);
while(true){
if((i__5594__auto___15058 < len__5593__auto___15057)){
args__5600__auto__.push((arguments[i__5594__auto___15058]));

var G__15059 = (i__5594__auto___15058 + (1));
i__5594__auto___15058 = G__15059;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)))))))))));
});

tiltontec.cell.core.c_QMARK_n.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_n.cljs$lang$applyTo = (function (seq15054){
var G__15055 = cljs.core.first.call(null,seq15054);
var seq15054__$1 = cljs.core.next.call(null,seq15054);
var G__15056 = cljs.core.first.call(null,seq15054__$1);
var seq15054__$2 = cljs.core.next.call(null,seq15054__$1);
return tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic(G__15055,G__15056,seq15054__$2);
});

tiltontec.cell.core.c_QMARK_n.cljs$lang$macro = true;
tiltontec.cell.core.c__QMARK_n = (function tiltontec$cell$core$c__QMARK_n(){
var args__5600__auto__ = [];
var len__5593__auto___15063 = arguments.length;
var i__5594__auto___15064 = (0);
while(true){
if((i__5594__auto___15064 < len__5593__auto___15063)){
args__5600__auto__.push((arguments[i__5594__auto___15064]));

var G__15065 = (i__5594__auto___15064 + (1));
i__5594__auto___15064 = G__15065;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)))))))))));
});

tiltontec.cell.core.c__QMARK_n.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c__QMARK_n.cljs$lang$applyTo = (function (seq15060){
var G__15061 = cljs.core.first.call(null,seq15060);
var seq15060__$1 = cljs.core.next.call(null,seq15060);
var G__15062 = cljs.core.first.call(null,seq15060__$1);
var seq15060__$2 = cljs.core.next.call(null,seq15060__$1);
return tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic(G__15061,G__15062,seq15060__$2);
});

tiltontec.cell.core.c__QMARK_n.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_n_dbg = (function tiltontec$cell$core$c_QMARK_n_dbg(){
var args__5600__auto__ = [];
var len__5593__auto___15069 = arguments.length;
var i__5594__auto___15070 = (0);
while(true){
if((i__5594__auto___15070 < len__5593__auto___15069)){
args__5600__auto__.push((arguments[i__5594__auto___15070]));

var G__15071 = (i__5594__auto___15070 + (1));
i__5594__auto___15070 = G__15071;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"debug","debug",-1608172596)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)))))))))));
});

tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$applyTo = (function (seq15066){
var G__15067 = cljs.core.first.call(null,seq15066);
var seq15066__$1 = cljs.core.next.call(null,seq15066);
var G__15068 = cljs.core.first.call(null,seq15066__$1);
var seq15066__$2 = cljs.core.next.call(null,seq15066__$1);
return tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic(G__15067,G__15068,seq15066__$2);
});

tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_n_until = (function tiltontec$cell$core$c_QMARK_n_until(){
var args__5600__auto__ = [];
var len__5593__auto___15076 = arguments.length;
var i__5594__auto___15077 = (0);
while(true){
if((i__5594__auto___15077 < len__5593__auto___15076)){
args__5600__auto__.push((arguments[i__5594__auto___15077]));

var G__15078 = (i__5594__auto___15077 + (1));
i__5594__auto___15077 = G__15078;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"optimize","optimize",-1912349448)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))),args)));
});

tiltontec.cell.core.c_QMARK_n_until.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK_n_until.cljs$lang$applyTo = (function (seq15072){
var G__15073 = cljs.core.first.call(null,seq15072);
var seq15072__$1 = cljs.core.next.call(null,seq15072);
var G__15074 = cljs.core.first.call(null,seq15072__$1);
var seq15072__$2 = cljs.core.next.call(null,seq15072__$1);
var G__15075 = cljs.core.first.call(null,seq15072__$2);
var seq15072__$3 = cljs.core.next.call(null,seq15072__$2);
return tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic(G__15073,G__15074,G__15075,seq15072__$3);
});

tiltontec.cell.core.c_QMARK_n_until.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_once = (function tiltontec$cell$core$c_QMARK_once(){
var args__5600__auto__ = [];
var len__5593__auto___15082 = arguments.length;
var i__5594__auto___15083 = (0);
while(true){
if((i__5594__auto___15083 < len__5593__auto___15082)){
args__5600__auto__.push((arguments[i__5594__auto___15083]));

var G__15084 = (i__5594__auto___15083 + (1));
i__5594__auto___15083 = G__15084;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)))))))))));
});

tiltontec.cell.core.c_QMARK_once.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_once.cljs$lang$applyTo = (function (seq15079){
var G__15080 = cljs.core.first.call(null,seq15079);
var seq15079__$1 = cljs.core.next.call(null,seq15079);
var G__15081 = cljs.core.first.call(null,seq15079__$1);
var seq15079__$2 = cljs.core.next.call(null,seq15079__$1);
return tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic(G__15080,G__15081,seq15079__$2);
});

tiltontec.cell.core.c_QMARK_once.cljs$lang$macro = true;
tiltontec.cell.core.c_1 = (function tiltontec$cell$core$c_1(){
var args__5600__auto__ = [];
var len__5593__auto___15088 = arguments.length;
var i__5594__auto___15089 = (0);
while(true){
if((i__5594__auto___15089 < len__5593__auto___15088)){
args__5600__auto__.push((arguments[i__5594__auto___15089]));

var G__15090 = (i__5594__auto___15089 + (1));
i__5594__auto___15089 = G__15090;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)))))))))));
});

tiltontec.cell.core.c_1.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_1.cljs$lang$applyTo = (function (seq15085){
var G__15086 = cljs.core.first.call(null,seq15085);
var seq15085__$1 = cljs.core.next.call(null,seq15085);
var G__15087 = cljs.core.first.call(null,seq15085__$1);
var seq15085__$2 = cljs.core.next.call(null,seq15085__$1);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic(G__15086,G__15087,seq15085__$2);
});

tiltontec.cell.core.c_1.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_1 = (function tiltontec$cell$core$c_QMARK_1(){
var args__5600__auto__ = [];
var len__5593__auto___15094 = arguments.length;
var i__5594__auto___15095 = (0);
while(true){
if((i__5594__auto___15095 < len__5593__auto___15094)){
args__5600__auto__.push((arguments[i__5594__auto___15095]));

var G__15096 = (i__5594__auto___15095 + (1));
i__5594__auto___15095 = G__15096;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c?once","tiltontec.cell.core/c?once",88229667,null)),body)));
});

tiltontec.cell.core.c_QMARK_1.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_1.cljs$lang$applyTo = (function (seq15091){
var G__15092 = cljs.core.first.call(null,seq15091);
var seq15091__$1 = cljs.core.next.call(null,seq15091);
var G__15093 = cljs.core.first.call(null,seq15091__$1);
var seq15091__$2 = cljs.core.next.call(null,seq15091__$1);
return tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic(G__15092,G__15093,seq15091__$2);
});

tiltontec.cell.core.c_QMARK_1.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_dbg = (function tiltontec$cell$core$c_QMARK_dbg(){
var args__5600__auto__ = [];
var len__5593__auto___15100 = arguments.length;
var i__5594__auto___15101 = (0);
while(true){
if((i__5594__auto___15101 < len__5593__auto___15100)){
args__5600__auto__.push((arguments[i__5594__auto___15101]));

var G__15102 = (i__5594__auto___15101 + (1));
i__5594__auto___15101 = G__15102;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"debug","debug",-1608172596)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))))));
});

tiltontec.cell.core.c_QMARK_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_dbg.cljs$lang$applyTo = (function (seq15097){
var G__15098 = cljs.core.first.call(null,seq15097);
var seq15097__$1 = cljs.core.next.call(null,seq15097);
var G__15099 = cljs.core.first.call(null,seq15097__$1);
var seq15097__$2 = cljs.core.next.call(null,seq15097__$1);
return tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic(G__15098,G__15099,seq15097__$2);
});

tiltontec.cell.core.c_QMARK_dbg.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK__ = (function tiltontec$cell$core$c_QMARK__(){
var args__5600__auto__ = [];
var len__5593__auto___15109 = arguments.length;
var i__5594__auto___15110 = (0);
while(true){
if((i__5594__auto___15110 < len__5593__auto___15109)){
args__5600__auto__.push((arguments[i__5594__auto___15110]));

var G__15111 = (i__5594__auto___15110 + (1));
i__5594__auto___15110 = G__15111;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15107,body){
var vec__15108 = p__15107;
var options = cljs.core.nthnext.call(null,vec__15108,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))))));
});

tiltontec.cell.core.c_QMARK__.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__.cljs$lang$applyTo = (function (seq15103){
var G__15104 = cljs.core.first.call(null,seq15103);
var seq15103__$1 = cljs.core.next.call(null,seq15103);
var G__15105 = cljs.core.first.call(null,seq15103__$1);
var seq15103__$2 = cljs.core.next.call(null,seq15103__$1);
var G__15106 = cljs.core.first.call(null,seq15103__$2);
var seq15103__$3 = cljs.core.next.call(null,seq15103__$2);
return tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic(G__15104,G__15105,G__15106,seq15103__$3);
});

tiltontec.cell.core.c_QMARK__.cljs$lang$macro = true;
tiltontec.cell.core.c__QMARK_ = (function tiltontec$cell$core$c__QMARK_(){
var args__5600__auto__ = [];
var len__5593__auto___15118 = arguments.length;
var i__5594__auto___15119 = (0);
while(true){
if((i__5594__auto___15119 < len__5593__auto___15118)){
args__5600__auto__.push((arguments[i__5594__auto___15119]));

var G__15120 = (i__5594__auto___15119 + (1));
i__5594__auto___15119 = G__15120;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15116,body){
var vec__15117 = p__15116;
var options = cljs.core.nthnext.call(null,vec__15117,(0));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))))));
});

tiltontec.cell.core.c__QMARK_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c__QMARK_.cljs$lang$applyTo = (function (seq15112){
var G__15113 = cljs.core.first.call(null,seq15112);
var seq15112__$1 = cljs.core.next.call(null,seq15112);
var G__15114 = cljs.core.first.call(null,seq15112__$1);
var seq15112__$2 = cljs.core.next.call(null,seq15112__$1);
var G__15115 = cljs.core.first.call(null,seq15112__$2);
var seq15112__$3 = cljs.core.next.call(null,seq15112__$2);
return tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__15113,G__15114,G__15115,seq15112__$3);
});

tiltontec.cell.core.c__QMARK_.cljs$lang$macro = true;
tiltontec.cell.core.c__QMARK_dbg = (function tiltontec$cell$core$c__QMARK_dbg(){
var args__5600__auto__ = [];
var len__5593__auto___15124 = arguments.length;
var i__5594__auto___15125 = (0);
while(true){
if((i__5594__auto___15125 < len__5593__auto___15124)){
args__5600__auto__.push((arguments[i__5594__auto___15125]));

var G__15126 = (i__5594__auto___15125 + (1));
i__5594__auto___15125 = G__15126;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((2) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((2)),(0))):null);
return tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5601__auto__);
});

tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"debug","debug",-1608172596)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
});

tiltontec.cell.core.c__QMARK_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c__QMARK_dbg.cljs$lang$applyTo = (function (seq15121){
var G__15122 = cljs.core.first.call(null,seq15121);
var seq15121__$1 = cljs.core.next.call(null,seq15121);
var G__15123 = cljs.core.first.call(null,seq15121__$1);
var seq15121__$2 = cljs.core.next.call(null,seq15121__$1);
return tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic(G__15122,G__15123,seq15121__$2);
});

tiltontec.cell.core.c__QMARK_dbg.cljs$lang$macro = true;
tiltontec.cell.core.c_formula = (function tiltontec$cell$core$c_formula(){
var args__5600__auto__ = [];
var len__5593__auto___15133 = arguments.length;
var i__5594__auto___15134 = (0);
while(true){
if((i__5594__auto___15134 < len__5593__auto___15133)){
args__5600__auto__.push((arguments[i__5594__auto___15134]));

var G__15135 = (i__5594__auto___15134 + (1));
i__5594__auto___15134 = G__15135;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15131,body){
var vec__15132 = p__15131;
var kvs = cljs.core.nthnext.call(null,vec__15132,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))),cljs.core.keys)));
});

tiltontec.cell.core.c_formula.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_formula.cljs$lang$applyTo = (function (seq15127){
var G__15128 = cljs.core.first.call(null,seq15127);
var seq15127__$1 = cljs.core.next.call(null,seq15127);
var G__15129 = cljs.core.first.call(null,seq15127__$1);
var seq15127__$2 = cljs.core.next.call(null,seq15127__$1);
var G__15130 = cljs.core.first.call(null,seq15127__$2);
var seq15127__$3 = cljs.core.next.call(null,seq15127__$2);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic(G__15128,G__15129,G__15130,seq15127__$3);
});

tiltontec.cell.core.c_formula.cljs$lang$macro = true;
tiltontec.cell.core.c_in = (function tiltontec$cell$core$c_in(){
var args__5600__auto__ = [];
var len__5593__auto___15138 = arguments.length;
var i__5594__auto___15139 = (0);
while(true){
if((i__5594__auto___15139 < len__5593__auto___15138)){
args__5600__auto__.push((arguments[i__5594__auto___15139]));

var G__15140 = (i__5594__auto___15139 + (1));
i__5594__auto___15139 = G__15140;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic = (function (value,option_kvs){
return cljs.core.apply.call(null,tiltontec.cell.core.make_cell,cljs.core.list_STAR_.call(null,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"input?","input?",-1792843173),true,option_kvs));
});

tiltontec.cell.core.c_in.cljs$lang$maxFixedArity = (1);

tiltontec.cell.core.c_in.cljs$lang$applyTo = (function (seq15136){
var G__15137 = cljs.core.first.call(null,seq15136);
var seq15136__$1 = cljs.core.next.call(null,seq15136);
return tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic(G__15137,seq15136__$1);
});
tiltontec.cell.core.c_reset_BANG_ = (function tiltontec$cell$core$c_reset_BANG_(c,new_value){

if(cljs.core.truth_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"c","c",-122660552,null)))].join('')));
}

if(cljs.core.truth_(tiltontec.cell.base._STAR_defer_changes_STAR_)){
throw (new Error("c-reset!> change to %s must be deferred by wrapping it in WITH-INTEGRITY",tiltontec.cell.base.c_slot.call(null,c)));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tiltontec.cell.base.c_lazy.call(null,c)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null)))){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
} else {
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),tiltontec.cell.base.c_slot.call(null,c),(function (opcode,defer_info){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
}));

}
}
});
tiltontec.cell.core.c_reset_next_BANG_ = (function tiltontec$cell$core$c_reset_next_BANG_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","*within-integrity*","tiltontec.cell.core/*within-integrity*",1558832389,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"c-reset-next!> deferred change to %s not under WITH-INTEGRITY supervision."),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-slot","tiltontec.cell.base/c-slot",1453031347,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,f_c))))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","ufb-add","tiltontec.cell.core/ufb-add",1421793642,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"c-reset-next!","c-reset-next!",-1735615308)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opcode","opcode",311089360,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defer-info","defer-info",-446799704,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__15141__auto__","c__15141__auto__",1799305720,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,f_c),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-value__15142__auto__","new-value__15142__auto__",1392208551,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,f_new_value)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","call-c-reset-next!","tiltontec.cell.core/call-c-reset-next!",-970475516,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__15141__auto__","c__15141__auto__",1799305720,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-value__15142__auto__","new-value__15142__auto__",1392208551,null))))))))))))))))))))))))));
});

tiltontec.cell.core.c_reset_next_BANG_.cljs$lang$macro = true;
tiltontec.cell.core.call_c_reset_next_BANG_ = (function tiltontec$cell$core$call_c_reset_next_BANG_(c,new_value){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tiltontec.cell.base.c_lazy.call(null,c)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null)))){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
} else {
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);

}
});
