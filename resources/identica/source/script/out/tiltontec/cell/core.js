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
var len__5593__auto___15183 = arguments.length;
var i__5594__auto___15184 = (0);
while(true){
if((i__5594__auto___15184 < len__5593__auto___15183)){
args__5600__auto__.push((arguments[i__5594__auto___15184]));

var G__15185 = (i__5594__auto___15184 + (1));
i__5594__auto___15184 = G__15185;
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

tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq15182){
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15182));
});
tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(){
var args__5600__auto__ = [];
var len__5593__auto___15187 = arguments.length;
var i__5594__auto___15188 = (0);
while(true){
if((i__5594__auto___15188 < len__5593__auto___15187)){
args__5600__auto__.push((arguments[i__5594__auto___15188]));

var G__15189 = (i__5594__auto___15188 + (1));
i__5594__auto___15188 = G__15189;
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

tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq15186){
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15186));
});
tiltontec.cell.core.c_fn_var = (function tiltontec$cell$core$c_fn_var(){
var args__5600__auto__ = [];
var len__5593__auto___15196 = arguments.length;
var i__5594__auto___15197 = (0);
while(true){
if((i__5594__auto___15197 < len__5593__auto___15196)){
args__5600__auto__.push((arguments[i__5594__auto___15197]));

var G__15198 = (i__5594__auto___15197 + (1));
i__5594__auto___15197 = G__15198;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15194,body){
var vec__15195 = p__15194;
var c = cljs.core.nth.call(null,vec__15195,(0),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,c)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-model","tiltontec.cell.base/c-model",566190580,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,c))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cache","cache",403508473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-value","tiltontec.cell.base/c-value",-808509395,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,c)))))))))),body)))))));
});

tiltontec.cell.core.c_fn_var.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_fn_var.cljs$lang$applyTo = (function (seq15190){
var G__15191 = cljs.core.first.call(null,seq15190);
var seq15190__$1 = cljs.core.next.call(null,seq15190);
var G__15192 = cljs.core.first.call(null,seq15190__$1);
var seq15190__$2 = cljs.core.next.call(null,seq15190__$1);
var G__15193 = cljs.core.first.call(null,seq15190__$2);
var seq15190__$3 = cljs.core.next.call(null,seq15190__$2);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic(G__15191,G__15192,G__15193,seq15190__$3);
});

tiltontec.cell.core.c_fn_var.cljs$lang$macro = true;
tiltontec.cell.core.c_fn = (function tiltontec$cell$core$c_fn(){
var args__5600__auto__ = [];
var len__5593__auto___15202 = arguments.length;
var i__5594__auto___15203 = (0);
while(true){
if((i__5594__auto___15203 < len__5593__auto___15202)){
args__5600__auto__.push((arguments[i__5594__auto___15203]));

var G__15204 = (i__5594__auto___15203 + (1));
i__5594__auto___15203 = G__15204;
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

tiltontec.cell.core.c_fn.cljs$lang$applyTo = (function (seq15199){
var G__15200 = cljs.core.first.call(null,seq15199);
var seq15199__$1 = cljs.core.next.call(null,seq15199);
var G__15201 = cljs.core.first.call(null,seq15199__$1);
var seq15199__$2 = cljs.core.next.call(null,seq15199__$1);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic(G__15200,G__15201,seq15199__$2);
});

tiltontec.cell.core.c_fn.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_ = (function tiltontec$cell$core$c_QMARK_(){
var args__5600__auto__ = [];
var len__5593__auto___15208 = arguments.length;
var i__5594__auto___15209 = (0);
while(true){
if((i__5594__auto___15209 < len__5593__auto___15208)){
args__5600__auto__.push((arguments[i__5594__auto___15209]));

var G__15210 = (i__5594__auto___15209 + (1));
i__5594__auto___15209 = G__15210;
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

tiltontec.cell.core.c_QMARK_.cljs$lang$applyTo = (function (seq15205){
var G__15206 = cljs.core.first.call(null,seq15205);
var seq15205__$1 = cljs.core.next.call(null,seq15205);
var G__15207 = cljs.core.first.call(null,seq15205__$1);
var seq15205__$2 = cljs.core.next.call(null,seq15205__$1);
return tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__15206,G__15207,seq15205__$2);
});

tiltontec.cell.core.c_QMARK_.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK__PLUS_ = (function tiltontec$cell$core$c_QMARK__PLUS_(){
var args__5600__auto__ = [];
var len__5593__auto___15217 = arguments.length;
var i__5594__auto___15218 = (0);
while(true){
if((i__5594__auto___15218 < len__5593__auto___15217)){
args__5600__auto__.push((arguments[i__5594__auto___15218]));

var G__15219 = (i__5594__auto___15218 + (1));
i__5594__auto___15218 = G__15219;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15215,body){
var vec__15216 = p__15215;
var options = cljs.core.nthnext.call(null,vec__15216,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))))));
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$applyTo = (function (seq15211){
var G__15212 = cljs.core.first.call(null,seq15211);
var seq15211__$1 = cljs.core.next.call(null,seq15211);
var G__15213 = cljs.core.first.call(null,seq15211__$1);
var seq15211__$2 = cljs.core.next.call(null,seq15211__$1);
var G__15214 = cljs.core.first.call(null,seq15211__$2);
var seq15211__$3 = cljs.core.next.call(null,seq15211__$2);
return tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__15212,G__15213,G__15214,seq15211__$3);
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK__PLUS_n = (function tiltontec$cell$core$c_QMARK__PLUS_n(){
var args__5600__auto__ = [];
var len__5593__auto___15223 = arguments.length;
var i__5594__auto___15224 = (0);
while(true){
if((i__5594__auto___15224 < len__5593__auto___15223)){
args__5600__auto__.push((arguments[i__5594__auto___15224]));

var G__15225 = (i__5594__auto___15224 + (1));
i__5594__auto___15224 = G__15225;
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

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$applyTo = (function (seq15220){
var G__15221 = cljs.core.first.call(null,seq15220);
var seq15220__$1 = cljs.core.next.call(null,seq15220);
var G__15222 = cljs.core.first.call(null,seq15220__$1);
var seq15220__$2 = cljs.core.next.call(null,seq15220__$1);
return tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic(G__15221,G__15222,seq15220__$2);
});

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_n = (function tiltontec$cell$core$c_QMARK_n(){
var args__5600__auto__ = [];
var len__5593__auto___15229 = arguments.length;
var i__5594__auto___15230 = (0);
while(true){
if((i__5594__auto___15230 < len__5593__auto___15229)){
args__5600__auto__.push((arguments[i__5594__auto___15230]));

var G__15231 = (i__5594__auto___15230 + (1));
i__5594__auto___15230 = G__15231;
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

tiltontec.cell.core.c_QMARK_n.cljs$lang$applyTo = (function (seq15226){
var G__15227 = cljs.core.first.call(null,seq15226);
var seq15226__$1 = cljs.core.next.call(null,seq15226);
var G__15228 = cljs.core.first.call(null,seq15226__$1);
var seq15226__$2 = cljs.core.next.call(null,seq15226__$1);
return tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic(G__15227,G__15228,seq15226__$2);
});

tiltontec.cell.core.c_QMARK_n.cljs$lang$macro = true;
tiltontec.cell.core.c__QMARK_n = (function tiltontec$cell$core$c__QMARK_n(){
var args__5600__auto__ = [];
var len__5593__auto___15235 = arguments.length;
var i__5594__auto___15236 = (0);
while(true){
if((i__5594__auto___15236 < len__5593__auto___15235)){
args__5600__auto__.push((arguments[i__5594__auto___15236]));

var G__15237 = (i__5594__auto___15236 + (1));
i__5594__auto___15236 = G__15237;
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

tiltontec.cell.core.c__QMARK_n.cljs$lang$applyTo = (function (seq15232){
var G__15233 = cljs.core.first.call(null,seq15232);
var seq15232__$1 = cljs.core.next.call(null,seq15232);
var G__15234 = cljs.core.first.call(null,seq15232__$1);
var seq15232__$2 = cljs.core.next.call(null,seq15232__$1);
return tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic(G__15233,G__15234,seq15232__$2);
});

tiltontec.cell.core.c__QMARK_n.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_n_dbg = (function tiltontec$cell$core$c_QMARK_n_dbg(){
var args__5600__auto__ = [];
var len__5593__auto___15241 = arguments.length;
var i__5594__auto___15242 = (0);
while(true){
if((i__5594__auto___15242 < len__5593__auto___15241)){
args__5600__auto__.push((arguments[i__5594__auto___15242]));

var G__15243 = (i__5594__auto___15242 + (1));
i__5594__auto___15242 = G__15243;
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

tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$applyTo = (function (seq15238){
var G__15239 = cljs.core.first.call(null,seq15238);
var seq15238__$1 = cljs.core.next.call(null,seq15238);
var G__15240 = cljs.core.first.call(null,seq15238__$1);
var seq15238__$2 = cljs.core.next.call(null,seq15238__$1);
return tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic(G__15239,G__15240,seq15238__$2);
});

tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_n_until = (function tiltontec$cell$core$c_QMARK_n_until(){
var args__5600__auto__ = [];
var len__5593__auto___15248 = arguments.length;
var i__5594__auto___15249 = (0);
while(true){
if((i__5594__auto___15249 < len__5593__auto___15248)){
args__5600__auto__.push((arguments[i__5594__auto___15249]));

var G__15250 = (i__5594__auto___15249 + (1));
i__5594__auto___15249 = G__15250;
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

tiltontec.cell.core.c_QMARK_n_until.cljs$lang$applyTo = (function (seq15244){
var G__15245 = cljs.core.first.call(null,seq15244);
var seq15244__$1 = cljs.core.next.call(null,seq15244);
var G__15246 = cljs.core.first.call(null,seq15244__$1);
var seq15244__$2 = cljs.core.next.call(null,seq15244__$1);
var G__15247 = cljs.core.first.call(null,seq15244__$2);
var seq15244__$3 = cljs.core.next.call(null,seq15244__$2);
return tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic(G__15245,G__15246,G__15247,seq15244__$3);
});

tiltontec.cell.core.c_QMARK_n_until.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_once = (function tiltontec$cell$core$c_QMARK_once(){
var args__5600__auto__ = [];
var len__5593__auto___15254 = arguments.length;
var i__5594__auto___15255 = (0);
while(true){
if((i__5594__auto___15255 < len__5593__auto___15254)){
args__5600__auto__.push((arguments[i__5594__auto___15255]));

var G__15256 = (i__5594__auto___15255 + (1));
i__5594__auto___15255 = G__15256;
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

tiltontec.cell.core.c_QMARK_once.cljs$lang$applyTo = (function (seq15251){
var G__15252 = cljs.core.first.call(null,seq15251);
var seq15251__$1 = cljs.core.next.call(null,seq15251);
var G__15253 = cljs.core.first.call(null,seq15251__$1);
var seq15251__$2 = cljs.core.next.call(null,seq15251__$1);
return tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic(G__15252,G__15253,seq15251__$2);
});

tiltontec.cell.core.c_QMARK_once.cljs$lang$macro = true;
tiltontec.cell.core.c_1 = (function tiltontec$cell$core$c_1(){
var args__5600__auto__ = [];
var len__5593__auto___15260 = arguments.length;
var i__5594__auto___15261 = (0);
while(true){
if((i__5594__auto___15261 < len__5593__auto___15260)){
args__5600__auto__.push((arguments[i__5594__auto___15261]));

var G__15262 = (i__5594__auto___15261 + (1));
i__5594__auto___15261 = G__15262;
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

tiltontec.cell.core.c_1.cljs$lang$applyTo = (function (seq15257){
var G__15258 = cljs.core.first.call(null,seq15257);
var seq15257__$1 = cljs.core.next.call(null,seq15257);
var G__15259 = cljs.core.first.call(null,seq15257__$1);
var seq15257__$2 = cljs.core.next.call(null,seq15257__$1);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic(G__15258,G__15259,seq15257__$2);
});

tiltontec.cell.core.c_1.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_1 = (function tiltontec$cell$core$c_QMARK_1(){
var args__5600__auto__ = [];
var len__5593__auto___15266 = arguments.length;
var i__5594__auto___15267 = (0);
while(true){
if((i__5594__auto___15267 < len__5593__auto___15266)){
args__5600__auto__.push((arguments[i__5594__auto___15267]));

var G__15268 = (i__5594__auto___15267 + (1));
i__5594__auto___15267 = G__15268;
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

tiltontec.cell.core.c_QMARK_1.cljs$lang$applyTo = (function (seq15263){
var G__15264 = cljs.core.first.call(null,seq15263);
var seq15263__$1 = cljs.core.next.call(null,seq15263);
var G__15265 = cljs.core.first.call(null,seq15263__$1);
var seq15263__$2 = cljs.core.next.call(null,seq15263__$1);
return tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic(G__15264,G__15265,seq15263__$2);
});

tiltontec.cell.core.c_QMARK_1.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK_dbg = (function tiltontec$cell$core$c_QMARK_dbg(){
var args__5600__auto__ = [];
var len__5593__auto___15272 = arguments.length;
var i__5594__auto___15273 = (0);
while(true){
if((i__5594__auto___15273 < len__5593__auto___15272)){
args__5600__auto__.push((arguments[i__5594__auto___15273]));

var G__15274 = (i__5594__auto___15273 + (1));
i__5594__auto___15273 = G__15274;
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

tiltontec.cell.core.c_QMARK_dbg.cljs$lang$applyTo = (function (seq15269){
var G__15270 = cljs.core.first.call(null,seq15269);
var seq15269__$1 = cljs.core.next.call(null,seq15269);
var G__15271 = cljs.core.first.call(null,seq15269__$1);
var seq15269__$2 = cljs.core.next.call(null,seq15269__$1);
return tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic(G__15270,G__15271,seq15269__$2);
});

tiltontec.cell.core.c_QMARK_dbg.cljs$lang$macro = true;
tiltontec.cell.core.c_QMARK__ = (function tiltontec$cell$core$c_QMARK__(){
var args__5600__auto__ = [];
var len__5593__auto___15281 = arguments.length;
var i__5594__auto___15282 = (0);
while(true){
if((i__5594__auto___15282 < len__5593__auto___15281)){
args__5600__auto__.push((arguments[i__5594__auto___15282]));

var G__15283 = (i__5594__auto___15282 + (1));
i__5594__auto___15282 = G__15283;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15279,body){
var vec__15280 = p__15279;
var options = cljs.core.nthnext.call(null,vec__15280,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))))));
});

tiltontec.cell.core.c_QMARK__.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__.cljs$lang$applyTo = (function (seq15275){
var G__15276 = cljs.core.first.call(null,seq15275);
var seq15275__$1 = cljs.core.next.call(null,seq15275);
var G__15277 = cljs.core.first.call(null,seq15275__$1);
var seq15275__$2 = cljs.core.next.call(null,seq15275__$1);
var G__15278 = cljs.core.first.call(null,seq15275__$2);
var seq15275__$3 = cljs.core.next.call(null,seq15275__$2);
return tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic(G__15276,G__15277,G__15278,seq15275__$3);
});

tiltontec.cell.core.c_QMARK__.cljs$lang$macro = true;
tiltontec.cell.core.c__QMARK_ = (function tiltontec$cell$core$c__QMARK_(){
var args__5600__auto__ = [];
var len__5593__auto___15290 = arguments.length;
var i__5594__auto___15291 = (0);
while(true){
if((i__5594__auto___15291 < len__5593__auto___15290)){
args__5600__auto__.push((arguments[i__5594__auto___15291]));

var G__15292 = (i__5594__auto___15291 + (1));
i__5594__auto___15291 = G__15292;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15288,body){
var vec__15289 = p__15288;
var options = cljs.core.nthnext.call(null,vec__15289,(0));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))))));
});

tiltontec.cell.core.c__QMARK_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c__QMARK_.cljs$lang$applyTo = (function (seq15284){
var G__15285 = cljs.core.first.call(null,seq15284);
var seq15284__$1 = cljs.core.next.call(null,seq15284);
var G__15286 = cljs.core.first.call(null,seq15284__$1);
var seq15284__$2 = cljs.core.next.call(null,seq15284__$1);
var G__15287 = cljs.core.first.call(null,seq15284__$2);
var seq15284__$3 = cljs.core.next.call(null,seq15284__$2);
return tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__15285,G__15286,G__15287,seq15284__$3);
});

tiltontec.cell.core.c__QMARK_.cljs$lang$macro = true;
tiltontec.cell.core.c__QMARK_dbg = (function tiltontec$cell$core$c__QMARK_dbg(){
var args__5600__auto__ = [];
var len__5593__auto___15296 = arguments.length;
var i__5594__auto___15297 = (0);
while(true){
if((i__5594__auto___15297 < len__5593__auto___15296)){
args__5600__auto__.push((arguments[i__5594__auto___15297]));

var G__15298 = (i__5594__auto___15297 + (1));
i__5594__auto___15297 = G__15298;
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

tiltontec.cell.core.c__QMARK_dbg.cljs$lang$applyTo = (function (seq15293){
var G__15294 = cljs.core.first.call(null,seq15293);
var seq15293__$1 = cljs.core.next.call(null,seq15293);
var G__15295 = cljs.core.first.call(null,seq15293__$1);
var seq15293__$2 = cljs.core.next.call(null,seq15293__$1);
return tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic(G__15294,G__15295,seq15293__$2);
});

tiltontec.cell.core.c__QMARK_dbg.cljs$lang$macro = true;
tiltontec.cell.core.c_formula = (function tiltontec$cell$core$c_formula(){
var args__5600__auto__ = [];
var len__5593__auto___15305 = arguments.length;
var i__5594__auto___15306 = (0);
while(true){
if((i__5594__auto___15306 < len__5593__auto___15305)){
args__5600__auto__.push((arguments[i__5594__auto___15306]));

var G__15307 = (i__5594__auto___15306 + (1));
i__5594__auto___15306 = G__15307;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15303,body){
var vec__15304 = p__15303;
var kvs = cljs.core.nthnext.call(null,vec__15304,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)))),cljs.core.keys)));
});

tiltontec.cell.core.c_formula.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_formula.cljs$lang$applyTo = (function (seq15299){
var G__15300 = cljs.core.first.call(null,seq15299);
var seq15299__$1 = cljs.core.next.call(null,seq15299);
var G__15301 = cljs.core.first.call(null,seq15299__$1);
var seq15299__$2 = cljs.core.next.call(null,seq15299__$1);
var G__15302 = cljs.core.first.call(null,seq15299__$2);
var seq15299__$3 = cljs.core.next.call(null,seq15299__$2);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic(G__15300,G__15301,G__15302,seq15299__$3);
});

tiltontec.cell.core.c_formula.cljs$lang$macro = true;
tiltontec.cell.core.c_in = (function tiltontec$cell$core$c_in(){
var args__5600__auto__ = [];
var len__5593__auto___15310 = arguments.length;
var i__5594__auto___15311 = (0);
while(true){
if((i__5594__auto___15311 < len__5593__auto___15310)){
args__5600__auto__.push((arguments[i__5594__auto___15311]));

var G__15312 = (i__5594__auto___15311 + (1));
i__5594__auto___15311 = G__15312;
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

tiltontec.cell.core.c_in.cljs$lang$applyTo = (function (seq15308){
var G__15309 = cljs.core.first.call(null,seq15308);
var seq15308__$1 = cljs.core.next.call(null,seq15308);
return tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic(G__15309,seq15308__$1);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","*within-integrity*","tiltontec.cell.core/*within-integrity*",1558832389,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"c-reset-next!> deferred change to %s not under WITH-INTEGRITY supervision."),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-slot","tiltontec.cell.base/c-slot",1453031347,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,f_c))))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","ufb-add","tiltontec.cell.core/ufb-add",1421793642,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"c-reset-next!","c-reset-next!",-1735615308)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opcode","opcode",311089360,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defer-info","defer-info",-446799704,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__15313__auto__","c__15313__auto__",1207191729,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,f_c),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-value__15314__auto__","new-value__15314__auto__",610974030,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,f_new_value)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","call-c-reset-next!","tiltontec.cell.core/call-c-reset-next!",-970475516,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__15313__auto__","c__15313__auto__",1207191729,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-value__15314__auto__","new-value__15314__auto__",610974030,null))))))))))))))))))))))))));
});

tiltontec.cell.core.c_reset_next_BANG_.cljs$lang$macro = true;
tiltontec.cell.core.call_c_reset_next_BANG_ = (function tiltontec$cell$core$call_c_reset_next_BANG_(c,new_value){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tiltontec.cell.base.c_lazy.call(null,c)], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null)))){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
} else {
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);

}
});
