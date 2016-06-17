// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.qxia.macros');
goog.require('cljs.core');
tiltontec.qxia.macros.hbox = (function tiltontec$qxia$macros$hbox(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15830 = arguments.length;
var i__7286__auto___15831 = (0);
while(true){
if((i__7286__auto___15831 < len__7285__auto___15830)){
args__7292__auto__.push((arguments[i__7286__auto___15831]));

var G__15832 = (i__7286__auto___15831 + (1));
i__7286__auto___15831 = G__15832;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15826,kids){
var vec__15827 = p__15826;
var seq__15828 = cljs.core.seq.call(null,vec__15827);
var hbox_args = seq__15828;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"layout","layout",-2120940921)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.layout.HBox","js/qx.ui.mobile.layout.HBox",499740199,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),hbox_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.hbox.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.hbox.cljs$lang$applyTo = (function (seq15822){
var G__15823 = cljs.core.first.call(null,seq15822);
var seq15822__$1 = cljs.core.next.call(null,seq15822);
var G__15824 = cljs.core.first.call(null,seq15822__$1);
var seq15822__$2 = cljs.core.next.call(null,seq15822__$1);
var G__15825 = cljs.core.first.call(null,seq15822__$2);
var seq15822__$3 = cljs.core.next.call(null,seq15822__$2);
return tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic(G__15823,G__15824,G__15825,seq15822__$3);
});


tiltontec.qxia.macros.hbox.cljs$lang$macro = true;
tiltontec.qxia.macros.vbox = (function tiltontec$qxia$macros$vbox(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15841 = arguments.length;
var i__7286__auto___15842 = (0);
while(true){
if((i__7286__auto___15842 < len__7285__auto___15841)){
args__7292__auto__.push((arguments[i__7286__auto___15842]));

var G__15843 = (i__7286__auto___15842 + (1));
i__7286__auto___15842 = G__15843;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15837,kids){
var vec__15838 = p__15837;
var seq__15839 = cljs.core.seq.call(null,vec__15838);
var hbox_args = seq__15839;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"layout","layout",-2120940921)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.layout.VBox","js/qx.ui.mobile.layout.VBox",-1527506437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),hbox_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.vbox.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.vbox.cljs$lang$applyTo = (function (seq15833){
var G__15834 = cljs.core.first.call(null,seq15833);
var seq15833__$1 = cljs.core.next.call(null,seq15833);
var G__15835 = cljs.core.first.call(null,seq15833__$1);
var seq15833__$2 = cljs.core.next.call(null,seq15833__$1);
var G__15836 = cljs.core.first.call(null,seq15833__$2);
var seq15833__$3 = cljs.core.next.call(null,seq15833__$2);
return tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic(G__15834,G__15835,G__15836,seq15833__$3);
});


tiltontec.qxia.macros.vbox.cljs$lang$macro = true;
tiltontec.qxia.macros.group = (function tiltontec$qxia$macros$group(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15852 = arguments.length;
var i__7286__auto___15853 = (0);
while(true){
if((i__7286__auto___15853 < len__7285__auto___15852)){
args__7292__auto__.push((arguments[i__7286__auto___15853]));

var G__15854 = (i__7286__auto___15853 + (1));
i__7286__auto___15853 = G__15854;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.group.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15848,kids){
var vec__15849 = p__15848;
var seq__15850 = cljs.core.seq.call(null,vec__15849);
var my_args = seq__15850;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Group","tiltontec.qxia.types/m.Group",1395438636)),my_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.group.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.group.cljs$lang$applyTo = (function (seq15844){
var G__15845 = cljs.core.first.call(null,seq15844);
var seq15844__$1 = cljs.core.next.call(null,seq15844);
var G__15846 = cljs.core.first.call(null,seq15844__$1);
var seq15844__$2 = cljs.core.next.call(null,seq15844__$1);
var G__15847 = cljs.core.first.call(null,seq15844__$2);
var seq15844__$3 = cljs.core.next.call(null,seq15844__$2);
return tiltontec.qxia.macros.group.cljs$core$IFn$_invoke$arity$variadic(G__15845,G__15846,G__15847,seq15844__$3);
});


tiltontec.qxia.macros.group.cljs$lang$macro = true;
tiltontec.qxia.macros.navigation_page = (function tiltontec$qxia$macros$navigation_page(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15868 = arguments.length;
var i__7286__auto___15869 = (0);
while(true){
if((i__7286__auto___15869 < len__7285__auto___15868)){
args__7292__auto__.push((arguments[i__7286__auto___15869]));

var G__15870 = (i__7286__auto___15869 + (1));
i__7286__auto___15869 = G__15870;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15860,p__15861,kids){
var vec__15862 = p__15860;
var title = cljs.core.nth.call(null,vec__15862,(0),null);
var end_point = cljs.core.nth.call(null,vec__15862,(1),null);
var vec__15865 = p__15861;
var seq__15866 = cljs.core.seq.call(null,vec__15865);
var top_args = seq__15866;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-point","end-point",-1147460885)),(function (){var x__7044__auto__ = end_point;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),(function (){var x__7044__auto__ = title;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.navigation_page.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.navigation_page.cljs$lang$applyTo = (function (seq15855){
var G__15856 = cljs.core.first.call(null,seq15855);
var seq15855__$1 = cljs.core.next.call(null,seq15855);
var G__15857 = cljs.core.first.call(null,seq15855__$1);
var seq15855__$2 = cljs.core.next.call(null,seq15855__$1);
var G__15858 = cljs.core.first.call(null,seq15855__$2);
var seq15855__$3 = cljs.core.next.call(null,seq15855__$2);
var G__15859 = cljs.core.first.call(null,seq15855__$3);
var seq15855__$4 = cljs.core.next.call(null,seq15855__$3);
return tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic(G__15856,G__15857,G__15858,G__15859,seq15855__$4);
});


tiltontec.qxia.macros.navigation_page.cljs$lang$macro = true;
tiltontec.qxia.macros.form = (function tiltontec$qxia$macros$form(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15884 = arguments.length;
var i__7286__auto___15885 = (0);
while(true){
if((i__7286__auto___15885 < len__7285__auto___15884)){
args__7292__auto__.push((arguments[i__7286__auto___15885]));

var G__15886 = (i__7286__auto___15885 + (1));
i__7286__auto___15885 = G__15886;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15876,p__15877,kids){
var vec__15878 = p__15876;
var seq__15879 = cljs.core.seq.call(null,vec__15878);
var top_args = seq__15879;
var vec__15881 = p__15877;
var seq__15882 = cljs.core.seq.call(null,vec__15881);
var form_args = seq__15882;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724)),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225)),form_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.form.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.form.cljs$lang$applyTo = (function (seq15871){
var G__15872 = cljs.core.first.call(null,seq15871);
var seq15871__$1 = cljs.core.next.call(null,seq15871);
var G__15873 = cljs.core.first.call(null,seq15871__$1);
var seq15871__$2 = cljs.core.next.call(null,seq15871__$1);
var G__15874 = cljs.core.first.call(null,seq15871__$2);
var seq15871__$3 = cljs.core.next.call(null,seq15871__$2);
var G__15875 = cljs.core.first.call(null,seq15871__$3);
var seq15871__$4 = cljs.core.next.call(null,seq15871__$3);
return tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic(G__15872,G__15873,G__15874,G__15875,seq15871__$4);
});


tiltontec.qxia.macros.form.cljs$lang$macro = true;
tiltontec.qxia.macros.carousel = (function tiltontec$qxia$macros$carousel(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15895 = arguments.length;
var i__7286__auto___15896 = (0);
while(true){
if((i__7286__auto___15896 < len__7285__auto___15895)){
args__7292__auto__.push((arguments[i__7286__auto___15896]));

var G__15897 = (i__7286__auto___15896 + (1));
i__7286__auto___15896 = G__15897;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15891,kids){
var vec__15892 = p__15891;
var seq__15893 = cljs.core.seq.call(null,vec__15892);
var top_args = seq__15893;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Carousel","tiltontec.qxia.types/m.Carousel",-1672753516)),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.carousel.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.carousel.cljs$lang$applyTo = (function (seq15887){
var G__15888 = cljs.core.first.call(null,seq15887);
var seq15887__$1 = cljs.core.next.call(null,seq15887);
var G__15889 = cljs.core.first.call(null,seq15887__$1);
var seq15887__$2 = cljs.core.next.call(null,seq15887__$1);
var G__15890 = cljs.core.first.call(null,seq15887__$2);
var seq15887__$3 = cljs.core.next.call(null,seq15887__$2);
return tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic(G__15888,G__15889,G__15890,seq15887__$3);
});


tiltontec.qxia.macros.carousel.cljs$lang$macro = true;
tiltontec.qxia.macros.drawer = (function tiltontec$qxia$macros$drawer(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15907 = arguments.length;
var i__7286__auto___15908 = (0);
while(true){
if((i__7286__auto___15908 < len__7285__auto___15907)){
args__7292__auto__.push((arguments[i__7286__auto___15908]));

var G__15909 = (i__7286__auto___15908 + (1));
i__7286__auto___15908 = G__15909;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,orientation,p__15903,kids){
var vec__15904 = p__15903;
var seq__15905 = cljs.core.seq.call(null,vec__15904);
var top_args = seq__15905;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-class","qx-class",701821141)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.container.Drawer","js/qx.ui.mobile.container.Drawer",-1115926667,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"orientation","orientation",623557579)),(function (){var x__7044__auto__ = orientation;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.drawer.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.drawer.cljs$lang$applyTo = (function (seq15898){
var G__15899 = cljs.core.first.call(null,seq15898);
var seq15898__$1 = cljs.core.next.call(null,seq15898);
var G__15900 = cljs.core.first.call(null,seq15898__$1);
var seq15898__$2 = cljs.core.next.call(null,seq15898__$1);
var G__15901 = cljs.core.first.call(null,seq15898__$2);
var seq15898__$3 = cljs.core.next.call(null,seq15898__$2);
var G__15902 = cljs.core.first.call(null,seq15898__$3);
var seq15898__$4 = cljs.core.next.call(null,seq15898__$3);
return tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic(G__15899,G__15900,G__15901,G__15902,seq15898__$4);
});


tiltontec.qxia.macros.drawer.cljs$lang$macro = true;
tiltontec.qxia.macros.collapsible = (function tiltontec$qxia$macros$collapsible(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15919 = arguments.length;
var i__7286__auto___15920 = (0);
while(true){
if((i__7286__auto___15920 < len__7285__auto___15919)){
args__7292__auto__.push((arguments[i__7286__auto___15920]));

var G__15921 = (i__7286__auto___15920 + (1));
i__7286__auto___15920 = G__15921;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,title,p__15915,kids){
var vec__15916 = p__15915;
var seq__15917 = cljs.core.seq.call(null,vec__15916);
var top_args = seq__15917;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-class","qx-class",701821141)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.container.Collapsible","js/qx.ui.mobile.container.Collapsible",1030659332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7044__auto__ = title;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.collapsible.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.collapsible.cljs$lang$applyTo = (function (seq15910){
var G__15911 = cljs.core.first.call(null,seq15910);
var seq15910__$1 = cljs.core.next.call(null,seq15910);
var G__15912 = cljs.core.first.call(null,seq15910__$1);
var seq15910__$2 = cljs.core.next.call(null,seq15910__$1);
var G__15913 = cljs.core.first.call(null,seq15910__$2);
var seq15910__$3 = cljs.core.next.call(null,seq15910__$2);
var G__15914 = cljs.core.first.call(null,seq15910__$3);
var seq15910__$4 = cljs.core.next.call(null,seq15910__$3);
return tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic(G__15911,G__15912,G__15913,G__15914,seq15910__$4);
});


tiltontec.qxia.macros.collapsible.cljs$lang$macro = true;
