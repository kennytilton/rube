// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.macros');
goog.require('cljs.core');
tiltontec.qxia.macros.hbox = (function tiltontec$qxia$macros$hbox(){
var args__5600__auto__ = [];
var len__5593__auto___9902 = arguments.length;
var i__5594__auto___9903 = (0);
while(true){
if((i__5594__auto___9903 < len__5593__auto___9902)){
args__5600__auto__.push((arguments[i__5594__auto___9903]));

var G__9904 = (i__5594__auto___9903 + (1));
i__5594__auto___9903 = G__9904;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9900,kids){
var vec__9901 = p__9900;
var hbox_args = cljs.core.nthnext.call(null,vec__9901,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"layout","layout",-2120940921)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.layout.HBox","js/qx.ui.mobile.layout.HBox",499740199,null)))))),hbox_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.family","c?kids","tiltontec.model.family/c?kids",417211367,null)),kids)))))));
});

tiltontec.qxia.macros.hbox.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.hbox.cljs$lang$applyTo = (function (seq9896){
var G__9897 = cljs.core.first.call(null,seq9896);
var seq9896__$1 = cljs.core.next.call(null,seq9896);
var G__9898 = cljs.core.first.call(null,seq9896__$1);
var seq9896__$2 = cljs.core.next.call(null,seq9896__$1);
var G__9899 = cljs.core.first.call(null,seq9896__$2);
var seq9896__$3 = cljs.core.next.call(null,seq9896__$2);
return tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic(G__9897,G__9898,G__9899,seq9896__$3);
});

tiltontec.qxia.macros.hbox.cljs$lang$macro = true;
tiltontec.qxia.macros.vbox = (function tiltontec$qxia$macros$vbox(){
var args__5600__auto__ = [];
var len__5593__auto___9911 = arguments.length;
var i__5594__auto___9912 = (0);
while(true){
if((i__5594__auto___9912 < len__5593__auto___9911)){
args__5600__auto__.push((arguments[i__5594__auto___9912]));

var G__9913 = (i__5594__auto___9912 + (1));
i__5594__auto___9912 = G__9913;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9909,kids){
var vec__9910 = p__9909;
var hbox_args = cljs.core.nthnext.call(null,vec__9910,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"layout","layout",-2120940921)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.layout.VBox","js/qx.ui.mobile.layout.VBox",-1527506437,null)))))),hbox_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.family","c?kids","tiltontec.model.family/c?kids",417211367,null)),kids)))))));
});

tiltontec.qxia.macros.vbox.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.vbox.cljs$lang$applyTo = (function (seq9905){
var G__9906 = cljs.core.first.call(null,seq9905);
var seq9905__$1 = cljs.core.next.call(null,seq9905);
var G__9907 = cljs.core.first.call(null,seq9905__$1);
var seq9905__$2 = cljs.core.next.call(null,seq9905__$1);
var G__9908 = cljs.core.first.call(null,seq9905__$2);
var seq9905__$3 = cljs.core.next.call(null,seq9905__$2);
return tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic(G__9906,G__9907,G__9908,seq9905__$3);
});

tiltontec.qxia.macros.vbox.cljs$lang$macro = true;
tiltontec.qxia.macros.navigation_page = (function tiltontec$qxia$macros$navigation_page(){
var args__5600__auto__ = [];
var len__5593__auto___9923 = arguments.length;
var i__5594__auto___9924 = (0);
while(true){
if((i__5594__auto___9924 < len__5593__auto___9923)){
args__5600__auto__.push((arguments[i__5594__auto___9924]));

var G__9925 = (i__5594__auto___9924 + (1));
i__5594__auto___9924 = G__9925;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((4) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((4)),(0))):null);
return tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5601__auto__);
});

tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9919,p__9920,kids){
var vec__9921 = p__9919;
var title = cljs.core.nth.call(null,vec__9921,(0),null);
var end_point = cljs.core.nth.call(null,vec__9921,(1),null);
var vec__9922 = p__9920;
var top_args = cljs.core.nthnext.call(null,vec__9922,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-point","end-point",-1147460885)),cljs.core._conj.call(null,cljs.core.List.EMPTY,end_point),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),cljs.core._conj.call(null,cljs.core.List.EMPTY,title),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.family","c?kids","tiltontec.model.family/c?kids",417211367,null)),kids)))))));
});

tiltontec.qxia.macros.navigation_page.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.navigation_page.cljs$lang$applyTo = (function (seq9914){
var G__9915 = cljs.core.first.call(null,seq9914);
var seq9914__$1 = cljs.core.next.call(null,seq9914);
var G__9916 = cljs.core.first.call(null,seq9914__$1);
var seq9914__$2 = cljs.core.next.call(null,seq9914__$1);
var G__9917 = cljs.core.first.call(null,seq9914__$2);
var seq9914__$3 = cljs.core.next.call(null,seq9914__$2);
var G__9918 = cljs.core.first.call(null,seq9914__$3);
var seq9914__$4 = cljs.core.next.call(null,seq9914__$3);
return tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic(G__9915,G__9916,G__9917,G__9918,seq9914__$4);
});

tiltontec.qxia.macros.navigation_page.cljs$lang$macro = true;
tiltontec.qxia.macros.form = (function tiltontec$qxia$macros$form(){
var args__5600__auto__ = [];
var len__5593__auto___9935 = arguments.length;
var i__5594__auto___9936 = (0);
while(true){
if((i__5594__auto___9936 < len__5593__auto___9935)){
args__5600__auto__.push((arguments[i__5594__auto___9936]));

var G__9937 = (i__5594__auto___9936 + (1));
i__5594__auto___9936 = G__9937;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((4) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((4)),(0))):null);
return tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5601__auto__);
});

tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9931,p__9932,kids){
var vec__9933 = p__9931;
var top_args = cljs.core.nthnext.call(null,vec__9933,(0));
var vec__9934 = p__9932;
var form_args = cljs.core.nthnext.call(null,vec__9934,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724)),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.family","c?kids","tiltontec.model.family/c?kids",417211367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225)),form_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.family","c?kids","tiltontec.model.family/c?kids",417211367,null)),kids)))))))))))))));
});

tiltontec.qxia.macros.form.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.form.cljs$lang$applyTo = (function (seq9926){
var G__9927 = cljs.core.first.call(null,seq9926);
var seq9926__$1 = cljs.core.next.call(null,seq9926);
var G__9928 = cljs.core.first.call(null,seq9926__$1);
var seq9926__$2 = cljs.core.next.call(null,seq9926__$1);
var G__9929 = cljs.core.first.call(null,seq9926__$2);
var seq9926__$3 = cljs.core.next.call(null,seq9926__$2);
var G__9930 = cljs.core.first.call(null,seq9926__$3);
var seq9926__$4 = cljs.core.next.call(null,seq9926__$3);
return tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic(G__9927,G__9928,G__9929,G__9930,seq9926__$4);
});

tiltontec.qxia.macros.form.cljs$lang$macro = true;
tiltontec.qxia.macros.carousel = (function tiltontec$qxia$macros$carousel(){
var args__5600__auto__ = [];
var len__5593__auto___9944 = arguments.length;
var i__5594__auto___9945 = (0);
while(true){
if((i__5594__auto___9945 < len__5593__auto___9944)){
args__5600__auto__.push((arguments[i__5594__auto___9945]));

var G__9946 = (i__5594__auto___9945 + (1));
i__5594__auto___9945 = G__9946;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9942,kids){
var vec__9943 = p__9942;
var top_args = cljs.core.nthnext.call(null,vec__9943,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Carousel","tiltontec.qxia.types/m.Carousel",-1672753516)),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.family","c?kids","tiltontec.model.family/c?kids",417211367,null)),kids)))))));
});

tiltontec.qxia.macros.carousel.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.carousel.cljs$lang$applyTo = (function (seq9938){
var G__9939 = cljs.core.first.call(null,seq9938);
var seq9938__$1 = cljs.core.next.call(null,seq9938);
var G__9940 = cljs.core.first.call(null,seq9938__$1);
var seq9938__$2 = cljs.core.next.call(null,seq9938__$1);
var G__9941 = cljs.core.first.call(null,seq9938__$2);
var seq9938__$3 = cljs.core.next.call(null,seq9938__$2);
return tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic(G__9939,G__9940,G__9941,seq9938__$3);
});

tiltontec.qxia.macros.carousel.cljs$lang$macro = true;
tiltontec.qxia.macros.drawer = (function tiltontec$qxia$macros$drawer(){
var args__5600__auto__ = [];
var len__5593__auto___9954 = arguments.length;
var i__5594__auto___9955 = (0);
while(true){
if((i__5594__auto___9955 < len__5593__auto___9954)){
args__5600__auto__.push((arguments[i__5594__auto___9955]));

var G__9956 = (i__5594__auto___9955 + (1));
i__5594__auto___9955 = G__9956;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((4) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((4)),(0))):null);
return tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5601__auto__);
});

tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,orientation,p__9952,kids){
var vec__9953 = p__9952;
var top_args = cljs.core.nthnext.call(null,vec__9953,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"class","class",-2030961996)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.container.Drawer","js/qx.ui.mobile.container.Drawer",-1115926667,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.family","*par*","tiltontec.model.family/*par*",-208021890,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"orientation","orientation",623557579)),cljs.core._conj.call(null,cljs.core.List.EMPTY,orientation),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.family","c?kids","tiltontec.model.family/c?kids",417211367,null)),kids)))))));
});

tiltontec.qxia.macros.drawer.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.drawer.cljs$lang$applyTo = (function (seq9947){
var G__9948 = cljs.core.first.call(null,seq9947);
var seq9947__$1 = cljs.core.next.call(null,seq9947);
var G__9949 = cljs.core.first.call(null,seq9947__$1);
var seq9947__$2 = cljs.core.next.call(null,seq9947__$1);
var G__9950 = cljs.core.first.call(null,seq9947__$2);
var seq9947__$3 = cljs.core.next.call(null,seq9947__$2);
var G__9951 = cljs.core.first.call(null,seq9947__$3);
var seq9947__$4 = cljs.core.next.call(null,seq9947__$3);
return tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic(G__9948,G__9949,G__9950,G__9951,seq9947__$4);
});

tiltontec.qxia.macros.drawer.cljs$lang$macro = true;
tiltontec.qxia.macros.collapsible = (function tiltontec$qxia$macros$collapsible(){
var args__5600__auto__ = [];
var len__5593__auto___9964 = arguments.length;
var i__5594__auto___9965 = (0);
while(true){
if((i__5594__auto___9965 < len__5593__auto___9964)){
args__5600__auto__.push((arguments[i__5594__auto___9965]));

var G__9966 = (i__5594__auto___9965 + (1));
i__5594__auto___9965 = G__9966;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((4) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((4)),(0))):null);
return tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5601__auto__);
});

tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,title,p__9962,kids){
var vec__9963 = p__9962;
var top_args = cljs.core.nthnext.call(null,vec__9963,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"class","class",-2030961996)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.container.Collapsible","js/qx.ui.mobile.container.Collapsible",1030659332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,title)))))),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.family","c?kids","tiltontec.model.family/c?kids",417211367,null)),kids)))))));
});

tiltontec.qxia.macros.collapsible.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.collapsible.cljs$lang$applyTo = (function (seq9957){
var G__9958 = cljs.core.first.call(null,seq9957);
var seq9957__$1 = cljs.core.next.call(null,seq9957);
var G__9959 = cljs.core.first.call(null,seq9957__$1);
var seq9957__$2 = cljs.core.next.call(null,seq9957__$1);
var G__9960 = cljs.core.first.call(null,seq9957__$2);
var seq9957__$3 = cljs.core.next.call(null,seq9957__$2);
var G__9961 = cljs.core.first.call(null,seq9957__$3);
var seq9957__$4 = cljs.core.next.call(null,seq9957__$3);
return tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic(G__9958,G__9959,G__9960,G__9961,seq9957__$4);
});

tiltontec.qxia.macros.collapsible.cljs$lang$macro = true;
