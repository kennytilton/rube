// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.qxia.macros');
goog.require('cljs.core');
tiltontec.qxia.macros.hbox = (function tiltontec$qxia$macros$hbox(var_args){
var args__7292__auto__ = [];
var len__7285__auto___246607 = arguments.length;
var i__7286__auto___246608 = (0);
while(true){
if((i__7286__auto___246608 < len__7285__auto___246607)){
args__7292__auto__.push((arguments[i__7286__auto___246608]));

var G__246609 = (i__7286__auto___246608 + (1));
i__7286__auto___246608 = G__246609;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__246603,kids){
var vec__246604 = p__246603;
var seq__246605 = cljs.core.seq.call(null,vec__246604);
var hbox_args = seq__246605;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"layout","layout",-2120940921)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.layout.HBox","js/qx.ui.mobile.layout.HBox",499740199,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),hbox_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.hbox.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.hbox.cljs$lang$applyTo = (function (seq246599){
var G__246600 = cljs.core.first.call(null,seq246599);
var seq246599__$1 = cljs.core.next.call(null,seq246599);
var G__246601 = cljs.core.first.call(null,seq246599__$1);
var seq246599__$2 = cljs.core.next.call(null,seq246599__$1);
var G__246602 = cljs.core.first.call(null,seq246599__$2);
var seq246599__$3 = cljs.core.next.call(null,seq246599__$2);
return tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic(G__246600,G__246601,G__246602,seq246599__$3);
});


tiltontec.qxia.macros.hbox.cljs$lang$macro = true;
tiltontec.qxia.macros.vbox = (function tiltontec$qxia$macros$vbox(var_args){
var args__7292__auto__ = [];
var len__7285__auto___246618 = arguments.length;
var i__7286__auto___246619 = (0);
while(true){
if((i__7286__auto___246619 < len__7285__auto___246618)){
args__7292__auto__.push((arguments[i__7286__auto___246619]));

var G__246620 = (i__7286__auto___246619 + (1));
i__7286__auto___246619 = G__246620;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__246614,kids){
var vec__246615 = p__246614;
var seq__246616 = cljs.core.seq.call(null,vec__246615);
var hbox_args = seq__246616;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"layout","layout",-2120940921)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.layout.VBox","js/qx.ui.mobile.layout.VBox",-1527506437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),hbox_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.vbox.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.vbox.cljs$lang$applyTo = (function (seq246610){
var G__246611 = cljs.core.first.call(null,seq246610);
var seq246610__$1 = cljs.core.next.call(null,seq246610);
var G__246612 = cljs.core.first.call(null,seq246610__$1);
var seq246610__$2 = cljs.core.next.call(null,seq246610__$1);
var G__246613 = cljs.core.first.call(null,seq246610__$2);
var seq246610__$3 = cljs.core.next.call(null,seq246610__$2);
return tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic(G__246611,G__246612,G__246613,seq246610__$3);
});


tiltontec.qxia.macros.vbox.cljs$lang$macro = true;
tiltontec.qxia.macros.group = (function tiltontec$qxia$macros$group(var_args){
var args__7292__auto__ = [];
var len__7285__auto___246629 = arguments.length;
var i__7286__auto___246630 = (0);
while(true){
if((i__7286__auto___246630 < len__7285__auto___246629)){
args__7292__auto__.push((arguments[i__7286__auto___246630]));

var G__246631 = (i__7286__auto___246630 + (1));
i__7286__auto___246630 = G__246631;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.group.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__246625,kids){
var vec__246626 = p__246625;
var seq__246627 = cljs.core.seq.call(null,vec__246626);
var my_args = seq__246627;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Group","tiltontec.qxia.types/m.Group",1395438636)),my_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.group.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.group.cljs$lang$applyTo = (function (seq246621){
var G__246622 = cljs.core.first.call(null,seq246621);
var seq246621__$1 = cljs.core.next.call(null,seq246621);
var G__246623 = cljs.core.first.call(null,seq246621__$1);
var seq246621__$2 = cljs.core.next.call(null,seq246621__$1);
var G__246624 = cljs.core.first.call(null,seq246621__$2);
var seq246621__$3 = cljs.core.next.call(null,seq246621__$2);
return tiltontec.qxia.macros.group.cljs$core$IFn$_invoke$arity$variadic(G__246622,G__246623,G__246624,seq246621__$3);
});


tiltontec.qxia.macros.group.cljs$lang$macro = true;
tiltontec.qxia.macros.navigation_page = (function tiltontec$qxia$macros$navigation_page(var_args){
var args__7292__auto__ = [];
var len__7285__auto___246645 = arguments.length;
var i__7286__auto___246646 = (0);
while(true){
if((i__7286__auto___246646 < len__7285__auto___246645)){
args__7292__auto__.push((arguments[i__7286__auto___246646]));

var G__246647 = (i__7286__auto___246646 + (1));
i__7286__auto___246646 = G__246647;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__246637,p__246638,kids){
var vec__246639 = p__246637;
var title = cljs.core.nth.call(null,vec__246639,(0),null);
var end_point = cljs.core.nth.call(null,vec__246639,(1),null);
var vec__246642 = p__246638;
var seq__246643 = cljs.core.seq.call(null,vec__246642);
var top_args = seq__246643;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-point","end-point",-1147460885)),(function (){var x__7044__auto__ = end_point;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),(function (){var x__7044__auto__ = title;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.navigation_page.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.navigation_page.cljs$lang$applyTo = (function (seq246632){
var G__246633 = cljs.core.first.call(null,seq246632);
var seq246632__$1 = cljs.core.next.call(null,seq246632);
var G__246634 = cljs.core.first.call(null,seq246632__$1);
var seq246632__$2 = cljs.core.next.call(null,seq246632__$1);
var G__246635 = cljs.core.first.call(null,seq246632__$2);
var seq246632__$3 = cljs.core.next.call(null,seq246632__$2);
var G__246636 = cljs.core.first.call(null,seq246632__$3);
var seq246632__$4 = cljs.core.next.call(null,seq246632__$3);
return tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic(G__246633,G__246634,G__246635,G__246636,seq246632__$4);
});


tiltontec.qxia.macros.navigation_page.cljs$lang$macro = true;
tiltontec.qxia.macros.form = (function tiltontec$qxia$macros$form(var_args){
var args__7292__auto__ = [];
var len__7285__auto___246661 = arguments.length;
var i__7286__auto___246662 = (0);
while(true){
if((i__7286__auto___246662 < len__7285__auto___246661)){
args__7292__auto__.push((arguments[i__7286__auto___246662]));

var G__246663 = (i__7286__auto___246662 + (1));
i__7286__auto___246662 = G__246663;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__246653,p__246654,kids){
var vec__246655 = p__246653;
var seq__246656 = cljs.core.seq.call(null,vec__246655);
var top_args = seq__246656;
var vec__246658 = p__246654;
var seq__246659 = cljs.core.seq.call(null,vec__246658);
var form_args = seq__246659;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724)),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225)),form_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.form.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.form.cljs$lang$applyTo = (function (seq246648){
var G__246649 = cljs.core.first.call(null,seq246648);
var seq246648__$1 = cljs.core.next.call(null,seq246648);
var G__246650 = cljs.core.first.call(null,seq246648__$1);
var seq246648__$2 = cljs.core.next.call(null,seq246648__$1);
var G__246651 = cljs.core.first.call(null,seq246648__$2);
var seq246648__$3 = cljs.core.next.call(null,seq246648__$2);
var G__246652 = cljs.core.first.call(null,seq246648__$3);
var seq246648__$4 = cljs.core.next.call(null,seq246648__$3);
return tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic(G__246649,G__246650,G__246651,G__246652,seq246648__$4);
});


tiltontec.qxia.macros.form.cljs$lang$macro = true;
tiltontec.qxia.macros.carousel = (function tiltontec$qxia$macros$carousel(var_args){
var args__7292__auto__ = [];
var len__7285__auto___246672 = arguments.length;
var i__7286__auto___246673 = (0);
while(true){
if((i__7286__auto___246673 < len__7285__auto___246672)){
args__7292__auto__.push((arguments[i__7286__auto___246673]));

var G__246674 = (i__7286__auto___246673 + (1));
i__7286__auto___246673 = G__246674;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((3) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((3)),(0),null)):null);
return tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__246668,kids){
var vec__246669 = p__246668;
var seq__246670 = cljs.core.seq.call(null,vec__246669);
var top_args = seq__246670;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Carousel","tiltontec.qxia.types/m.Carousel",-1672753516)),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.carousel.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.carousel.cljs$lang$applyTo = (function (seq246664){
var G__246665 = cljs.core.first.call(null,seq246664);
var seq246664__$1 = cljs.core.next.call(null,seq246664);
var G__246666 = cljs.core.first.call(null,seq246664__$1);
var seq246664__$2 = cljs.core.next.call(null,seq246664__$1);
var G__246667 = cljs.core.first.call(null,seq246664__$2);
var seq246664__$3 = cljs.core.next.call(null,seq246664__$2);
return tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic(G__246665,G__246666,G__246667,seq246664__$3);
});


tiltontec.qxia.macros.carousel.cljs$lang$macro = true;
tiltontec.qxia.macros.drawer = (function tiltontec$qxia$macros$drawer(var_args){
var args__7292__auto__ = [];
var len__7285__auto___246684 = arguments.length;
var i__7286__auto___246685 = (0);
while(true){
if((i__7286__auto___246685 < len__7285__auto___246684)){
args__7292__auto__.push((arguments[i__7286__auto___246685]));

var G__246686 = (i__7286__auto___246685 + (1));
i__7286__auto___246685 = G__246686;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,orientation,p__246680,kids){
var vec__246681 = p__246680;
var seq__246682 = cljs.core.seq.call(null,vec__246681);
var top_args = seq__246682;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-class","qx-class",701821141)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.container.Drawer","js/qx.ui.mobile.container.Drawer",-1115926667,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"orientation","orientation",623557579)),(function (){var x__7044__auto__ = orientation;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.drawer.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.drawer.cljs$lang$applyTo = (function (seq246675){
var G__246676 = cljs.core.first.call(null,seq246675);
var seq246675__$1 = cljs.core.next.call(null,seq246675);
var G__246677 = cljs.core.first.call(null,seq246675__$1);
var seq246675__$2 = cljs.core.next.call(null,seq246675__$1);
var G__246678 = cljs.core.first.call(null,seq246675__$2);
var seq246675__$3 = cljs.core.next.call(null,seq246675__$2);
var G__246679 = cljs.core.first.call(null,seq246675__$3);
var seq246675__$4 = cljs.core.next.call(null,seq246675__$3);
return tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic(G__246676,G__246677,G__246678,G__246679,seq246675__$4);
});


tiltontec.qxia.macros.drawer.cljs$lang$macro = true;
tiltontec.qxia.macros.collapsible = (function tiltontec$qxia$macros$collapsible(var_args){
var args__7292__auto__ = [];
var len__7285__auto___246696 = arguments.length;
var i__7286__auto___246697 = (0);
while(true){
if((i__7286__auto___246697 < len__7285__auto___246696)){
args__7292__auto__.push((arguments[i__7286__auto___246697]));

var G__246698 = (i__7286__auto___246697 + (1));
i__7286__auto___246697 = G__246698;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((4) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((4)),(0),null)):null);
return tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7293__auto__);
});

tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,title,p__246692,kids){
var vec__246693 = p__246692;
var seq__246694 = cljs.core.seq.call(null,vec__246693);
var top_args = seq__246694;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-class","qx-class",701821141)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.container.Collapsible","js/qx.ui.mobile.container.Collapsible",1030659332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952)),(function (){var x__7044__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7044__auto__ = title;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),(function (){var x__7044__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})())));
});

tiltontec.qxia.macros.collapsible.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.collapsible.cljs$lang$applyTo = (function (seq246687){
var G__246688 = cljs.core.first.call(null,seq246687);
var seq246687__$1 = cljs.core.next.call(null,seq246687);
var G__246689 = cljs.core.first.call(null,seq246687__$1);
var seq246687__$2 = cljs.core.next.call(null,seq246687__$1);
var G__246690 = cljs.core.first.call(null,seq246687__$2);
var seq246687__$3 = cljs.core.next.call(null,seq246687__$2);
var G__246691 = cljs.core.first.call(null,seq246687__$3);
var seq246687__$4 = cljs.core.next.call(null,seq246687__$3);
return tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic(G__246688,G__246689,G__246690,G__246691,seq246687__$4);
});


tiltontec.qxia.macros.collapsible.cljs$lang$macro = true;
