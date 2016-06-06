// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.macros');
goog.require('cljs.core');
tiltontec.qxia.macros.hbox = (function tiltontec$qxia$macros$hbox(){
var args__5600__auto__ = [];
var len__5593__auto___24114 = arguments.length;
var i__5594__auto___24115 = (0);
while(true){
if((i__5594__auto___24115 < len__5593__auto___24114)){
args__5600__auto__.push((arguments[i__5594__auto___24115]));

var G__24116 = (i__5594__auto___24115 + (1));
i__5594__auto___24115 = G__24116;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__24112,kids){
var vec__24113 = p__24112;
var hbox_args = cljs.core.nthnext.call(null,vec__24113,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"layout","layout",-2120940921)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.layout.HBox","js/qx.ui.mobile.layout.HBox",499740199,null)))))),hbox_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)))))));
});

tiltontec.qxia.macros.hbox.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.hbox.cljs$lang$applyTo = (function (seq24108){
var G__24109 = cljs.core.first.call(null,seq24108);
var seq24108__$1 = cljs.core.next.call(null,seq24108);
var G__24110 = cljs.core.first.call(null,seq24108__$1);
var seq24108__$2 = cljs.core.next.call(null,seq24108__$1);
var G__24111 = cljs.core.first.call(null,seq24108__$2);
var seq24108__$3 = cljs.core.next.call(null,seq24108__$2);
return tiltontec.qxia.macros.hbox.cljs$core$IFn$_invoke$arity$variadic(G__24109,G__24110,G__24111,seq24108__$3);
});

tiltontec.qxia.macros.hbox.cljs$lang$macro = true;
tiltontec.qxia.macros.vbox = (function tiltontec$qxia$macros$vbox(){
var args__5600__auto__ = [];
var len__5593__auto___24123 = arguments.length;
var i__5594__auto___24124 = (0);
while(true){
if((i__5594__auto___24124 < len__5593__auto___24123)){
args__5600__auto__.push((arguments[i__5594__auto___24124]));

var G__24125 = (i__5594__auto___24124 + (1));
i__5594__auto___24124 = G__24125;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__24121,kids){
var vec__24122 = p__24121;
var hbox_args = cljs.core.nthnext.call(null,vec__24122,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"layout","layout",-2120940921)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.layout.VBox","js/qx.ui.mobile.layout.VBox",-1527506437,null)))))),hbox_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)))))));
});

tiltontec.qxia.macros.vbox.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.vbox.cljs$lang$applyTo = (function (seq24117){
var G__24118 = cljs.core.first.call(null,seq24117);
var seq24117__$1 = cljs.core.next.call(null,seq24117);
var G__24119 = cljs.core.first.call(null,seq24117__$1);
var seq24117__$2 = cljs.core.next.call(null,seq24117__$1);
var G__24120 = cljs.core.first.call(null,seq24117__$2);
var seq24117__$3 = cljs.core.next.call(null,seq24117__$2);
return tiltontec.qxia.macros.vbox.cljs$core$IFn$_invoke$arity$variadic(G__24118,G__24119,G__24120,seq24117__$3);
});

tiltontec.qxia.macros.vbox.cljs$lang$macro = true;
tiltontec.qxia.macros.navigation_page = (function tiltontec$qxia$macros$navigation_page(){
var args__5600__auto__ = [];
var len__5593__auto___24135 = arguments.length;
var i__5594__auto___24136 = (0);
while(true){
if((i__5594__auto___24136 < len__5593__auto___24135)){
args__5600__auto__.push((arguments[i__5594__auto___24136]));

var G__24137 = (i__5594__auto___24136 + (1));
i__5594__auto___24136 = G__24137;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((4) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((4)),(0))):null);
return tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5601__auto__);
});

tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__24131,p__24132,kids){
var vec__24133 = p__24131;
var title = cljs.core.nth.call(null,vec__24133,(0),null);
var end_point = cljs.core.nth.call(null,vec__24133,(1),null);
var vec__24134 = p__24132;
var top_args = cljs.core.nthnext.call(null,vec__24134,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-point","end-point",-1147460885)),cljs.core._conj.call(null,cljs.core.List.EMPTY,end_point),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),cljs.core._conj.call(null,cljs.core.List.EMPTY,title),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)))))));
});

tiltontec.qxia.macros.navigation_page.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.navigation_page.cljs$lang$applyTo = (function (seq24126){
var G__24127 = cljs.core.first.call(null,seq24126);
var seq24126__$1 = cljs.core.next.call(null,seq24126);
var G__24128 = cljs.core.first.call(null,seq24126__$1);
var seq24126__$2 = cljs.core.next.call(null,seq24126__$1);
var G__24129 = cljs.core.first.call(null,seq24126__$2);
var seq24126__$3 = cljs.core.next.call(null,seq24126__$2);
var G__24130 = cljs.core.first.call(null,seq24126__$3);
var seq24126__$4 = cljs.core.next.call(null,seq24126__$3);
return tiltontec.qxia.macros.navigation_page.cljs$core$IFn$_invoke$arity$variadic(G__24127,G__24128,G__24129,G__24130,seq24126__$4);
});

tiltontec.qxia.macros.navigation_page.cljs$lang$macro = true;
tiltontec.qxia.macros.form = (function tiltontec$qxia$macros$form(){
var args__5600__auto__ = [];
var len__5593__auto___24147 = arguments.length;
var i__5594__auto___24148 = (0);
while(true){
if((i__5594__auto___24148 < len__5593__auto___24147)){
args__5600__auto__.push((arguments[i__5594__auto___24148]));

var G__24149 = (i__5594__auto___24148 + (1));
i__5594__auto___24148 = G__24149;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((4) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((4)),(0))):null);
return tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5601__auto__);
});

tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__24143,p__24144,kids){
var vec__24145 = p__24143;
var top_args = cljs.core.nthnext.call(null,vec__24145,(0));
var vec__24146 = p__24144;
var form_args = cljs.core.nthnext.call(null,vec__24146,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724)),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225)),form_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)))))))))))))));
});

tiltontec.qxia.macros.form.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.form.cljs$lang$applyTo = (function (seq24138){
var G__24139 = cljs.core.first.call(null,seq24138);
var seq24138__$1 = cljs.core.next.call(null,seq24138);
var G__24140 = cljs.core.first.call(null,seq24138__$1);
var seq24138__$2 = cljs.core.next.call(null,seq24138__$1);
var G__24141 = cljs.core.first.call(null,seq24138__$2);
var seq24138__$3 = cljs.core.next.call(null,seq24138__$2);
var G__24142 = cljs.core.first.call(null,seq24138__$3);
var seq24138__$4 = cljs.core.next.call(null,seq24138__$3);
return tiltontec.qxia.macros.form.cljs$core$IFn$_invoke$arity$variadic(G__24139,G__24140,G__24141,G__24142,seq24138__$4);
});

tiltontec.qxia.macros.form.cljs$lang$macro = true;
tiltontec.qxia.macros.carousel = (function tiltontec$qxia$macros$carousel(){
var args__5600__auto__ = [];
var len__5593__auto___24156 = arguments.length;
var i__5594__auto___24157 = (0);
while(true){
if((i__5594__auto___24157 < len__5593__auto___24156)){
args__5600__auto__.push((arguments[i__5594__auto___24157]));

var G__24158 = (i__5594__auto___24157 + (1));
i__5594__auto___24157 = G__24158;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__24154,kids){
var vec__24155 = p__24154;
var top_args = cljs.core.nthnext.call(null,vec__24155,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Carousel","tiltontec.qxia.types/m.Carousel",-1672753516)),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)))))));
});

tiltontec.qxia.macros.carousel.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.carousel.cljs$lang$applyTo = (function (seq24150){
var G__24151 = cljs.core.first.call(null,seq24150);
var seq24150__$1 = cljs.core.next.call(null,seq24150);
var G__24152 = cljs.core.first.call(null,seq24150__$1);
var seq24150__$2 = cljs.core.next.call(null,seq24150__$1);
var G__24153 = cljs.core.first.call(null,seq24150__$2);
var seq24150__$3 = cljs.core.next.call(null,seq24150__$2);
return tiltontec.qxia.macros.carousel.cljs$core$IFn$_invoke$arity$variadic(G__24151,G__24152,G__24153,seq24150__$3);
});

tiltontec.qxia.macros.carousel.cljs$lang$macro = true;
tiltontec.qxia.macros.drawer = (function tiltontec$qxia$macros$drawer(){
var args__5600__auto__ = [];
var len__5593__auto___24166 = arguments.length;
var i__5594__auto___24167 = (0);
while(true){
if((i__5594__auto___24167 < len__5593__auto___24166)){
args__5600__auto__.push((arguments[i__5594__auto___24167]));

var G__24168 = (i__5594__auto___24167 + (1));
i__5594__auto___24167 = G__24168;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((4) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((4)),(0))):null);
return tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5601__auto__);
});

tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,orientation,p__24164,kids){
var vec__24165 = p__24164;
var top_args = cljs.core.nthnext.call(null,vec__24165,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-class","qx-class",701821141)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.container.Drawer","js/qx.ui.mobile.container.Drawer",-1115926667,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"orientation","orientation",623557579)),cljs.core._conj.call(null,cljs.core.List.EMPTY,orientation),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)))))));
});

tiltontec.qxia.macros.drawer.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.drawer.cljs$lang$applyTo = (function (seq24159){
var G__24160 = cljs.core.first.call(null,seq24159);
var seq24159__$1 = cljs.core.next.call(null,seq24159);
var G__24161 = cljs.core.first.call(null,seq24159__$1);
var seq24159__$2 = cljs.core.next.call(null,seq24159__$1);
var G__24162 = cljs.core.first.call(null,seq24159__$2);
var seq24159__$3 = cljs.core.next.call(null,seq24159__$2);
var G__24163 = cljs.core.first.call(null,seq24159__$3);
var seq24159__$4 = cljs.core.next.call(null,seq24159__$3);
return tiltontec.qxia.macros.drawer.cljs$core$IFn$_invoke$arity$variadic(G__24160,G__24161,G__24162,G__24163,seq24159__$4);
});

tiltontec.qxia.macros.drawer.cljs$lang$macro = true;
tiltontec.qxia.macros.collapsible = (function tiltontec$qxia$macros$collapsible(){
var args__5600__auto__ = [];
var len__5593__auto___24176 = arguments.length;
var i__5594__auto___24177 = (0);
while(true){
if((i__5594__auto___24177 < len__5593__auto___24176)){
args__5600__auto__.push((arguments[i__5594__auto___24177]));

var G__24178 = (i__5594__auto___24177 + (1));
i__5594__auto___24177 = G__24178;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((4) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((4)),(0))):null);
return tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5601__auto__);
});

tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,title,p__24174,kids){
var vec__24175 = p__24174;
var top_args = cljs.core.nthnext.call(null,vec__24175,(0));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-class","qx-class",701821141)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","qx.ui.mobile.container.Collapsible","js/qx.ui.mobile.container.Collapsible",1030659332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,title)))))),top_args,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kids","kids",1156670771)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null)),kids)))))));
});

tiltontec.qxia.macros.collapsible.cljs$lang$maxFixedArity = (4);

tiltontec.qxia.macros.collapsible.cljs$lang$applyTo = (function (seq24169){
var G__24170 = cljs.core.first.call(null,seq24169);
var seq24169__$1 = cljs.core.next.call(null,seq24169);
var G__24171 = cljs.core.first.call(null,seq24169__$1);
var seq24169__$2 = cljs.core.next.call(null,seq24169__$1);
var G__24172 = cljs.core.first.call(null,seq24169__$2);
var seq24169__$3 = cljs.core.next.call(null,seq24169__$2);
var G__24173 = cljs.core.first.call(null,seq24169__$3);
var seq24169__$4 = cljs.core.next.call(null,seq24169__$3);
return tiltontec.qxia.macros.collapsible.cljs$core$IFn$_invoke$arity$variadic(G__24170,G__24171,G__24172,G__24173,seq24169__$4);
});

tiltontec.qxia.macros.collapsible.cljs$lang$macro = true;
tiltontec.qxia.macros.label = (function tiltontec$qxia$macros$label(){
var args__5600__auto__ = [];
var len__5593__auto___24183 = arguments.length;
var i__5594__auto___24184 = (0);
while(true){
if((i__5594__auto___24184 < len__5593__auto___24183)){
args__5600__auto__.push((arguments[i__5594__auto___24184]));

var G__24185 = (i__5594__auto___24184 + (1));
i__5594__auto___24184 = G__24185;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((3) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((3)),(0))):null);
return tiltontec.qxia.macros.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5601__auto__);
});

tiltontec.qxia.macros.label.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,value,iargs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","make","tiltontec.model.core/make",1982859526,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("tiltontec.qxia.types","m.Label","tiltontec.qxia.types/m.Label",908319540)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,value),iargs)));
});

tiltontec.qxia.macros.label.cljs$lang$maxFixedArity = (3);

tiltontec.qxia.macros.label.cljs$lang$applyTo = (function (seq24179){
var G__24180 = cljs.core.first.call(null,seq24179);
var seq24179__$1 = cljs.core.next.call(null,seq24179);
var G__24181 = cljs.core.first.call(null,seq24179__$1);
var seq24179__$2 = cljs.core.next.call(null,seq24179__$1);
var G__24182 = cljs.core.first.call(null,seq24179__$2);
var seq24179__$3 = cljs.core.next.call(null,seq24179__$2);
return tiltontec.qxia.macros.label.cljs$core$IFn$_invoke$arity$variadic(G__24180,G__24181,G__24182,seq24179__$3);
});

tiltontec.qxia.macros.label.cljs$lang$macro = true;
