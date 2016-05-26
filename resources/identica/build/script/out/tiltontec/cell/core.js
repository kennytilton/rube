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
var len__5593__auto___12503 = arguments.length;
var i__5594__auto___12504 = (0);
while(true){
if((i__5594__auto___12504 < len__5593__auto___12503)){
args__5600__auto__.push((arguments[i__5594__auto___12504]));

var G__12505 = (i__5594__auto___12504 + (1));
i__5594__auto___12504 = G__12505;
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

tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq12502){
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12502));
});
tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(){
var args__5600__auto__ = [];
var len__5593__auto___12507 = arguments.length;
var i__5594__auto___12508 = (0);
while(true){
if((i__5594__auto___12508 < len__5593__auto___12507)){
args__5600__auto__.push((arguments[i__5594__auto___12508]));

var G__12509 = (i__5594__auto___12508 + (1));
i__5594__auto___12508 = G__12509;
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

tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq12506){
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12506));
});
tiltontec.cell.core.c_fn_var = (function tiltontec$cell$core$c_fn_var(){
var args__5600__auto__ = [];
var len__5593__auto___12516 = arguments.length;
var i__5594__auto___12517 = (0);
while(true){
if((i__5594__auto___12517 < len__5593__auto___12516)){
args__5600__auto__.push((arguments[i__5594__auto___12517]));

var G__12518 = (i__5594__auto___12517 + (1));
i__5594__auto___12517 = G__12518;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__12514,body){
var vec__12515 = p__12514;
var c = cljs.core.nth.call(null,vec__12515,(0),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,c)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-model","tiltontec.cell.base/c-model",566190580,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,c))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cache","cache",403508473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-value","tiltontec.cell.base/c-value",-808509395,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,c)))))))))),body)))))));
});

tiltontec.cell.core.c_fn_var.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_fn_var.cljs$lang$applyTo = (function (seq12510){
var G__12511 = cljs.core.first.call(null,seq12510);
var seq12510__$1 = cljs.core.next.call(null,seq12510);
var G__12512 = cljs.core.first.call(null,seq12510__$1);
var seq12510__$2 = cljs.core.next.call(null,seq12510__$1);
var G__12513 = cljs.core.first.call(null,seq12510__$2);
var seq12510__$3 = cljs.core.next.call(null,seq12510__$2);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic(G__12511,G__12512,G__12513,seq12510__$3);
});

tiltontec.cell.core.c_fn_var.cljs$lang$macro = true;
tiltontec.cell.core.c_fn = (function tiltontec$cell$core$c_fn(){
var args__5600__auto__ = [];
var len__5593__auto___12522 = arguments.length;
var i__5594__auto___12523 = (0);
while(true){
if((i__5594__auto___12523 < len__5593__auto___12522)){
args__5600__auto__.push((arguments[i__5594__auto___12523]));

var G__12524 = (i__5594__auto___12523 + (1));
i__5594__auto___12523 = G__12524;
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

tiltontec.cell.core.c_fn.cljs$lang$applyTo = (function (seq12519){
var G__12520 = cljs.core.first.call(null,seq12519);
var seq12519__$1 = cljs.core.next.call(null,seq12519);
var G__12521 = cljs.core.first.call(null,seq12519__$1);
var seq12519__$2 = cljs.core.next.call(null,seq12519__$1);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic(G__12520,G__12521,seq12519__$2);
});

tiltontec.cell.core.c_fn.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_ = (function tiltontec$cell$core$c_QMARK_(){
var args__5600__auto__ = [];
var len__5593__auto___12528 = arguments.length;
var i__5594__auto___12529 = (0);
while(true){
if((i__5594__auto___12529 < len__5593__auto___12528)){
args__5600__auto__.push((arguments[i__5594__auto___12529]));

var G__12530 = (i__5594__auto___12529 + (1));
i__5594__auto___12529 = G__12530;
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

tiltontec.cell.core.c_QMARK_.cljs$lang$applyTo = (function (seq12525){
var G__12526 = cljs.core.first.call(null,seq12525);
var seq12525__$1 = cljs.core.next.call(null,seq12525);
var G__12527 = cljs.core.first.call(null,seq12525__$1);
var seq12525__$2 = cljs.core.next.call(null,seq12525__$1);
return tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__12526,G__12527,seq12525__$2);
});

tiltontec.cell.core.c_QMARK_.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK__PLUS_ = (function tiltontec$cell$core$c_QMARK__PLUS_(){
var args__5600__auto__ = [];
var len__5593__auto___12537 = arguments.length;
var i__5594__auto___12538 = (0);
while(true){
if((i__5594__auto___12538 < len__5593__auto___12537)){
args__5600__auto__.push((arguments[i__5594__auto___12538]));

var G__12539 = (i__5594__auto___12538 + (1));
i__5594__auto___12538 = G__12539;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__12535,body){
var vec__12536 = p__12535;
var options = cljs.core.nthnext.call(null,vec__12536,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))))));
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$applyTo = (function (seq12531){
var G__12532 = cljs.core.first.call(null,seq12531);
var seq12531__$1 = cljs.core.next.call(null,seq12531);
var G__12533 = cljs.core.first.call(null,seq12531__$1);
var seq12531__$2 = cljs.core.next.call(null,seq12531__$1);
var G__12534 = cljs.core.first.call(null,seq12531__$2);
var seq12531__$3 = cljs.core.next.call(null,seq12531__$2);
return tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__12532,G__12533,G__12534,seq12531__$3);
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK__PLUS_n = (function tiltontec$cell$core$c_QMARK__PLUS_n(){
var args__5600__auto__ = [];
var len__5593__auto___12543 = arguments.length;
var i__5594__auto___12544 = (0);
while(true){
if((i__5594__auto___12544 < len__5593__auto___12543)){
args__5600__auto__.push((arguments[i__5594__auto___12544]));

var G__12545 = (i__5594__auto___12544 + (1));
i__5594__auto___12544 = G__12545;
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

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$applyTo = (function (seq12540){
var G__12541 = cljs.core.first.call(null,seq12540);
var seq12540__$1 = cljs.core.next.call(null,seq12540);
var G__12542 = cljs.core.first.call(null,seq12540__$1);
var seq12540__$2 = cljs.core.next.call(null,seq12540__$1);
return tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic(G__12541,G__12542,seq12540__$2);
});

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_n = (function tiltontec$cell$core$c_QMARK_n(){
var args__5600__auto__ = [];
var len__5593__auto___12549 = arguments.length;
var i__5594__auto___12550 = (0);
while(true){
if((i__5594__auto___12550 < len__5593__auto___12549)){
args__5600__auto__.push((arguments[i__5594__auto___12550]));

var G__12551 = (i__5594__auto___12550 + (1));
i__5594__auto___12550 = G__12551;
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

tiltontec.cell.core.c_QMARK_n.cljs$lang$applyTo = (function (seq12546){
var G__12547 = cljs.core.first.call(null,seq12546);
var seq12546__$1 = cljs.core.next.call(null,seq12546);
var G__12548 = cljs.core.first.call(null,seq12546__$1);
var seq12546__$2 = cljs.core.next.call(null,seq12546__$1);
return tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic(G__12547,G__12548,seq12546__$2);
});

tiltontec.cell.core.c_QMARK_n.cljs$lang$macro = true;
tiltontec.cell.core.c__QMARK_n = (function tiltontec$cell$core$c__QMARK_n(){
var args__5600__auto__ = [];
var len__5593__auto___12555 = arguments.length;
var i__5594__auto___12556 = (0);
while(true){
if((i__5594__auto___12556 < len__5593__auto___12555)){
args__5600__auto__.push((arguments[i__5594__auto___12556]));

var G__12557 = (i__5594__auto___12556 + (1));
i__5594__auto___12556 = G__12557;
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

tiltontec.cell.core.c__QMARK_n.cljs$lang$applyTo = (function (seq12552){
var G__12553 = cljs.core.first.call(null,seq12552);
var seq12552__$1 = cljs.core.next.call(null,seq12552);
var G__12554 = cljs.core.first.call(null,seq12552__$1);
var seq12552__$2 = cljs.core.next.call(null,seq12552__$1);
return tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic(G__12553,G__12554,seq12552__$2);
});

tiltontec.cell.core.c__QMARK_n.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_n_dbg = (function tiltontec$cell$core$c_QMARK_n_dbg(){
var args__5600__auto__ = [];
var len__5593__auto___12561 = arguments.length;
var i__5594__auto___12562 = (0);
while(true){
if((i__5594__auto___12562 < len__5593__auto___12561)){
args__5600__auto__.push((arguments[i__5594__auto___12562]));

var G__12563 = (i__5594__auto___12562 + (1));
i__5594__auto___12562 = G__12563;
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

tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$applyTo = (function (seq12558){
var G__12559 = cljs.core.first.call(null,seq12558);
var seq12558__$1 = cljs.core.next.call(null,seq12558);
var G__12560 = cljs.core.first.call(null,seq12558__$1);
var seq12558__$2 = cljs.core.next.call(null,seq12558__$1);
return tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic(G__12559,G__12560,seq12558__$2);
});

tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_n_until = (function tiltontec$cell$core$c_QMARK_n_until(){
var args__5600__auto__ = [];
var len__5593__auto___12568 = arguments.length;
var i__5594__auto___12569 = (0);
while(true){
if((i__5594__auto___12569 < len__5593__auto___12568)){
args__5600__auto__.push((arguments[i__5594__auto___12569]));

var G__12570 = (i__5594__auto___12569 + (1));
i__5594__auto___12569 = G__12570;
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

tiltontec.cell.core.c_QMARK_n_until.cljs$lang$applyTo = (function (seq12564){
var G__12565 = cljs.core.first.call(null,seq12564);
var seq12564__$1 = cljs.core.next.call(null,seq12564);
var G__12566 = cljs.core.first.call(null,seq12564__$1);
var seq12564__$2 = cljs.core.next.call(null,seq12564__$1);
var G__12567 = cljs.core.first.call(null,seq12564__$2);
var seq12564__$3 = cljs.core.next.call(null,seq12564__$2);
return tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic(G__12565,G__12566,G__12567,seq12564__$3);
});

tiltontec.cell.core.c_QMARK_n_until.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_once = (function tiltontec$cell$core$c_QMARK_once(){
var args__5600__auto__ = [];
var len__5593__auto___12574 = arguments.length;
var i__5594__auto___12575 = (0);
while(true){
if((i__5594__auto___12575 < len__5593__auto___12574)){
args__5600__auto__.push((arguments[i__5594__auto___12575]));

var G__12576 = (i__5594__auto___12575 + (1));
i__5594__auto___12575 = G__12576;
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

tiltontec.cell.core.c_QMARK_once.cljs$lang$applyTo = (function (seq12571){
var G__12572 = cljs.core.first.call(null,seq12571);
var seq12571__$1 = cljs.core.next.call(null,seq12571);
var G__12573 = cljs.core.first.call(null,seq12571__$1);
var seq12571__$2 = cljs.core.next.call(null,seq12571__$1);
return tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic(G__12572,G__12573,seq12571__$2);
});

tiltontec.cell.core.c_QMARK_once.cljs$lang$macro = true;
tiltontec.cell.core.c_1 = (function tiltontec$cell$core$c_1(){
var args__5600__auto__ = [];
var len__5593__auto___12580 = arguments.length;
var i__5594__auto___12581 = (0);
while(true){
if((i__5594__auto___12581 < len__5593__auto___12580)){
args__5600__auto__.push((arguments[i__5594__auto___12581]));

var G__12582 = (i__5594__auto___12581 + (1));
i__5594__auto___12581 = G__12582;
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

tiltontec.cell.core.c_1.cljs$lang$applyTo = (function (seq12577){
var G__12578 = cljs.core.first.call(null,seq12577);
var seq12577__$1 = cljs.core.next.call(null,seq12577);
var G__12579 = cljs.core.first.call(null,seq12577__$1);
var seq12577__$2 = cljs.core.next.call(null,seq12577__$1);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic(G__12578,G__12579,seq12577__$2);
});

tiltontec.cell.core.c_1.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_1 = (function tiltontec$cell$core$c_QMARK_1(){
var args__5600__auto__ = [];
var len__5593__auto___12586 = arguments.length;
var i__5594__auto___12587 = (0);
while(true){
if((i__5594__auto___12587 < len__5593__auto___12586)){
args__5600__auto__.push((arguments[i__5594__auto___12587]));

var G__12588 = (i__5594__auto___12587 + (1));
i__5594__auto___12587 = G__12588;
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

tiltontec.cell.core.c_QMARK_1.cljs$lang$applyTo = (function (seq12583){
var G__12584 = cljs.core.first.call(null,seq12583);
var seq12583__$1 = cljs.core.next.call(null,seq12583);
var G__12585 = cljs.core.first.call(null,seq12583__$1);
var seq12583__$2 = cljs.core.next.call(null,seq12583__$1);
return tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic(G__12584,G__12585,seq12583__$2);
});

tiltontec.cell.core.c_QMARK_1.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_dbg = (function tiltontec$cell$core$c_QMARK_dbg(){
var args__5600__auto__ = [];
var len__5593__auto___12592 = arguments.length;
var i__5594__auto___12593 = (0);
while(true){
if((i__5594__auto___12593 < len__5593__auto___12592)){
args__5600__auto__.push((arguments[i__5594__auto___12593]));

var G__12594 = (i__5594__auto___12593 + (1));
i__5594__auto___12593 = G__12594;
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

tiltontec.cell.core.c_QMARK_dbg.cljs$lang$applyTo = (function (seq12589){
var G__12590 = cljs.core.first.call(null,seq12589);
var seq12589__$1 = cljs.core.next.call(null,seq12589);
var G__12591 = cljs.core.first.call(null,seq12589__$1);
var seq12589__$2 = cljs.core.next.call(null,seq12589__$1);
return tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic(G__12590,G__12591,seq12589__$2);
});

tiltontec.cell.core.c_QMARK_dbg.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK__ = (function tiltontec$cell$core$c_QMARK__(){
var args__5600__auto__ = [];
var len__5593__auto___12601 = arguments.length;
var i__5594__auto___12602 = (0);
while(true){
if((i__5594__auto___12602 < len__5593__auto___12601)){
args__5600__auto__.push((arguments[i__5594__auto___12602]));

var G__12603 = (i__5594__auto___12602 + (1));
i__5594__auto___12602 = G__12603;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__12599,body){
var vec__12600 = p__12599;
var options = cljs.core.nthnext.call(null,vec__12600,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))))));
});

tiltontec.cell.core.c_QMARK__.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__.cljs$lang$applyTo = (function (seq12595){
var G__12596 = cljs.core.first.call(null,seq12595);
var seq12595__$1 = cljs.core.next.call(null,seq12595);
var G__12597 = cljs.core.first.call(null,seq12595__$1);
var seq12595__$2 = cljs.core.next.call(null,seq12595__$1);
var G__12598 = cljs.core.first.call(null,seq12595__$2);
var seq12595__$3 = cljs.core.next.call(null,seq12595__$2);
return tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic(G__12596,G__12597,G__12598,seq12595__$3);
});

tiltontec.cell.core.c_QMARK__.cljs$lang$macro = true;
tiltontec.cell.core.c__QMARK_ = (function tiltontec$cell$core$c__QMARK_(){
var args__5600__auto__ = [];
var len__5593__auto___12610 = arguments.length;
var i__5594__auto___12611 = (0);
while(true){
if((i__5594__auto___12611 < len__5593__auto___12610)){
args__5600__auto__.push((arguments[i__5594__auto___12611]));

var G__12612 = (i__5594__auto___12611 + (1));
i__5594__auto___12611 = G__12612;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__12608,body){
var vec__12609 = p__12608;
var options = cljs.core.nthnext.call(null,vec__12609,(0));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))))));
});

tiltontec.cell.core.c__QMARK_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c__QMARK_.cljs$lang$applyTo = (function (seq12604){
var G__12605 = cljs.core.first.call(null,seq12604);
var seq12604__$1 = cljs.core.next.call(null,seq12604);
var G__12606 = cljs.core.first.call(null,seq12604__$1);
var seq12604__$2 = cljs.core.next.call(null,seq12604__$1);
var G__12607 = cljs.core.first.call(null,seq12604__$2);
var seq12604__$3 = cljs.core.next.call(null,seq12604__$2);
return tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__12605,G__12606,G__12607,seq12604__$3);
});

tiltontec.cell.core.c__QMARK_.cljs$lang$macro = true;
tiltontec.cell.core.c__QMARK_dbg = (function tiltontec$cell$core$c__QMARK_dbg(){
var args__5600__auto__ = [];
var len__5593__auto___12616 = arguments.length;
var i__5594__auto___12617 = (0);
while(true){
if((i__5594__auto___12617 < len__5593__auto___12616)){
args__5600__auto__.push((arguments[i__5594__auto___12617]));

var G__12618 = (i__5594__auto___12617 + (1));
i__5594__auto___12617 = G__12618;
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

tiltontec.cell.core.c__QMARK_dbg.cljs$lang$applyTo = (function (seq12613){
var G__12614 = cljs.core.first.call(null,seq12613);
var seq12613__$1 = cljs.core.next.call(null,seq12613);
var G__12615 = cljs.core.first.call(null,seq12613__$1);
var seq12613__$2 = cljs.core.next.call(null,seq12613__$1);
return tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic(G__12614,G__12615,seq12613__$2);
});

tiltontec.cell.core.c__QMARK_dbg.cljs$lang$macro = true;
tiltontec.cell.core.c_formula = (function tiltontec$cell$core$c_formula(){
var args__5600__auto__ = [];
var len__5593__auto___12625 = arguments.length;
var i__5594__auto___12626 = (0);
while(true){
if((i__5594__auto___12626 < len__5593__auto___12625)){
args__5600__auto__.push((arguments[i__5594__auto___12626]));

var G__12627 = (i__5594__auto___12626 + (1));
i__5594__auto___12626 = G__12627;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__12623,body){
var vec__12624 = p__12623;
var kvs = cljs.core.nthnext.call(null,vec__12624,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))),cljs.core.keys)));
});

tiltontec.cell.core.c_formula.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_formula.cljs$lang$applyTo = (function (seq12619){
var G__12620 = cljs.core.first.call(null,seq12619);
var seq12619__$1 = cljs.core.next.call(null,seq12619);
var G__12621 = cljs.core.first.call(null,seq12619__$1);
var seq12619__$2 = cljs.core.next.call(null,seq12619__$1);
var G__12622 = cljs.core.first.call(null,seq12619__$2);
var seq12619__$3 = cljs.core.next.call(null,seq12619__$2);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic(G__12620,G__12621,G__12622,seq12619__$3);
});

tiltontec.cell.core.c_formula.cljs$lang$macro = true;
tiltontec.cell.core.c_in = (function tiltontec$cell$core$c_in(){
var args__5600__auto__ = [];
var len__5593__auto___12630 = arguments.length;
var i__5594__auto___12631 = (0);
while(true){
if((i__5594__auto___12631 < len__5593__auto___12630)){
args__5600__auto__.push((arguments[i__5594__auto___12631]));

var G__12632 = (i__5594__auto___12631 + (1));
i__5594__auto___12631 = G__12632;
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

tiltontec.cell.core.c_in.cljs$lang$applyTo = (function (seq12628){
var G__12629 = cljs.core.first.call(null,seq12628);
var seq12628__$1 = cljs.core.next.call(null,seq12628);
return tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic(G__12629,seq12628__$1);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","*within-integrity*","tiltontec.cell.core/*within-integrity*",1558832389,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"c-reset-next!> deferred change to %s not under WITH-INTEGRITY supervision."),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-slot","tiltontec.cell.base/c-slot",1453031347,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,f_c))))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","ufb-add","tiltontec.cell.core/ufb-add",1421793642,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"c-reset-next!","c-reset-next!",-1735615308)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opcode","opcode",311089360,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defer-info","defer-info",-446799704,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__12633__auto__","c__12633__auto__",-1048824346,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,f_c),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-value__12634__auto__","new-value__12634__auto__",-363365021,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,f_new_value)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","call-c-reset-next!","tiltontec.cell.core/call-c-reset-next!",-970475516,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__12633__auto__","c__12633__auto__",-1048824346,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-value__12634__auto__","new-value__12634__auto__",-363365021,null))))))))))))))))))))))))));
});

tiltontec.cell.core.c_reset_next_BANG_.cljs$lang$macro = true;
tiltontec.cell.core.call_c_reset_next_BANG_ = (function tiltontec$cell$core$call_c_reset_next_BANG_(c,new_value){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tiltontec.cell.base.c_lazy.call(null,c)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null)))){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
} else {
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);

}
});
