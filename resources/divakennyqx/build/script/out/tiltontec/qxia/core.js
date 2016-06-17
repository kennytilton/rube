// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.qxia.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.core');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.qxia.base');
goog.require('tiltontec.qxia.widget');
tiltontec.qxia.core.routing_get = (function tiltontec$qxia$core$routing_get(end_point){
var rtg = tiltontec.qxia.base.app_routing.call(null);
if(cljs.core.truth_(rtg)){
} else {
throw (new Error("Assert failed: rtg"));
}

return rtg.executeGet(end_point);
});
tiltontec.qxia.core.qx_make = (function tiltontec$qxia$core$qx_make(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15791 = arguments.length;
var i__7286__auto___15792 = (0);
while(true){
if((i__7286__auto___15792 < len__7285__auto___15791)){
args__7292__auto__.push((arguments[i__7286__auto___15792]));

var G__15793 = (i__7286__auto___15792 + (1));
i__7286__auto___15792 = G__15793;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((1) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((1)),(0),null)):null);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7293__auto__);
});

tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic = (function (type,iargs){
if(cljs.core.isa_QMARK_.call(null,type,new cljs.core.Keyword("tiltontec.qxia.types","qx.Object","tiltontec.qxia.types/qx.Object",-1295429520))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("First argument to qx-make "),cljs.core.str(type),cljs.core.str(" is not a descendant of qx.Object")].join('')),cljs.core.str("\n"),cljs.core.str("(isa? type :tiltontec.qxia.types/qx.Object)")].join('')));
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,iargs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("arglist after type "),cljs.core.str(type),cljs.core.str(" is not of even length: "),cljs.core.str(iargs)].join('')),cljs.core.str("\n"),cljs.core.str("(even? (count iargs))")].join('')));
}

if(cljs.core.isa_QMARK_.call(null,type,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724))){
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,tiltontec.model.core._STAR_par_STAR_,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Forms' m.Singles must be kids of NavigationPages, not "),cljs.core.str(tiltontec.cell.base.ia_type.call(null,tiltontec.model.core._STAR_par_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("(ia-type? *par* :tiltontec.qxia.types/m.NavigationPage)")].join('')));
}
} else {
}

return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),type,iargs);
});

tiltontec.qxia.core.qx_make.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq15789){
var G__15790 = cljs.core.first.call(null,seq15789);
var seq15789__$1 = cljs.core.next.call(null,seq15789);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__15790,seq15789__$1);
});

tiltontec.qxia.core.image = (function tiltontec$qxia$core$image(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15796 = arguments.length;
var i__7286__auto___15797 = (0);
while(true){
if((i__7286__auto___15797 < len__7285__auto___15796)){
args__7292__auto__.push((arguments[i__7286__auto___15797]));

var G__15798 = (i__7286__auto___15797 + (1));
i__7286__auto___15797 = G__15798;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((1) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((1)),(0),null)):null);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7293__auto__);
});

tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic = (function (source,iargs){
return cljs.core.apply.call(null,tiltontec.qxia.core.qx_make,new cljs.core.Keyword("tiltontec.qxia.types","m.Image","tiltontec.qxia.types/m.Image",336928926),new cljs.core.Keyword(null,"source","source",-433931539),source,iargs);
});

tiltontec.qxia.core.image.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.image.cljs$lang$applyTo = (function (seq15794){
var G__15795 = cljs.core.first.call(null,seq15794);
var seq15794__$1 = cljs.core.next.call(null,seq15794);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic(G__15795,seq15794__$1);
});

tiltontec.qxia.core.button = (function tiltontec$qxia$core$button(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15801 = arguments.length;
var i__7286__auto___15802 = (0);
while(true){
if((i__7286__auto___15802 < len__7285__auto___15801)){
args__7292__auto__.push((arguments[i__7286__auto___15802]));

var G__15803 = (i__7286__auto___15802 + (1));
i__7286__auto___15802 = G__15803;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((1) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((1)),(0),null)):null);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7293__auto__);
});

tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic = (function (label_icon,iargs){
return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.Button","tiltontec.qxia.types/m.Button",-668586230),new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952),((cljs.core.coll_QMARK_.call(null,label_icon))?label_icon:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label_icon], null)),iargs);
});

tiltontec.qxia.core.button.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.button.cljs$lang$applyTo = (function (seq15799){
var G__15800 = cljs.core.first.call(null,seq15799);
var seq15799__$1 = cljs.core.next.call(null,seq15799);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic(G__15800,seq15799__$1);
});

tiltontec.qxia.core.text_field = (function tiltontec$qxia$core$text_field(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15806 = arguments.length;
var i__7286__auto___15807 = (0);
while(true){
if((i__7286__auto___15807 < len__7285__auto___15806)){
args__7292__auto__.push((arguments[i__7286__auto___15807]));

var G__15808 = (i__7286__auto___15807 + (1));
i__7286__auto___15807 = G__15808;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((1) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((1)),(0),null)):null);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7293__auto__);
});

tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (label,iargs){
return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.TextField","tiltontec.qxia.types/m.TextField",1587442644),new cljs.core.Keyword(null,"label","label",1718410804),label,iargs);
});

tiltontec.qxia.core.text_field.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.text_field.cljs$lang$applyTo = (function (seq15804){
var G__15805 = cljs.core.first.call(null,seq15804);
var seq15804__$1 = cljs.core.next.call(null,seq15804);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic(G__15805,seq15804__$1);
});

tiltontec.qxia.core.number_field = (function tiltontec$qxia$core$number_field(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15811 = arguments.length;
var i__7286__auto___15812 = (0);
while(true){
if((i__7286__auto___15812 < len__7285__auto___15811)){
args__7292__auto__.push((arguments[i__7286__auto___15812]));

var G__15813 = (i__7286__auto___15812 + (1));
i__7286__auto___15812 = G__15813;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((1) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((1)),(0),null)):null);
return tiltontec.qxia.core.number_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7293__auto__);
});

tiltontec.qxia.core.number_field.cljs$core$IFn$_invoke$arity$variadic = (function (label,iargs){
return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword("tiltontec.qxia.types","m.NumberField","tiltontec.qxia.types/m.NumberField",-497385394),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qm","qm",-816906244,null),cljs.core.list(new cljs.core.Symbol(null,"qxme","qxme",352016329,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Symbol(null,"min","min",2085523049,null),cljs.core.list(new cljs.core.Symbol(null,".getMinimum",".getMinimum",2000963370,null),new cljs.core.Symbol(null,"qm","qm",-816906244,null)),new cljs.core.Symbol(null,"max","max",1701898075,null),cljs.core.list(new cljs.core.Symbol(null,".getMaximum",".getMaximum",-1881263029,null),new cljs.core.Symbol(null,"qm","qm",-816906244,null)),new cljs.core.Symbol(null,"stp","stp",975219562,null),cljs.core.list(new cljs.core.Symbol(null,".getStep",".getStep",-1335493753,null),new cljs.core.Symbol(null,"qm","qm",-816906244,null)),new cljs.core.Symbol(null,"emsg","emsg",1057202547,null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),"Too low!",cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"max","max",1701898075,null)),"Too high!",cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"stp","stp",975219562,null)))),"Out of step!")], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"emsg","emsg",1057202547,null),cljs.core.list(new cljs.core.Symbol(null,".setInvalidMessage",".setInvalidMessage",1874623209,null),new cljs.core.Symbol(null,"qm","qm",-816906244,null),new cljs.core.Symbol(null,"emsg","emsg",1057202547,null))),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"emsg","emsg",1057202547,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return ((function (me,cache){
return (function (val){
var qm = tiltontec.qxia.base.qxme.call(null,me);
var min = qm.getMinimum();
var max = qm.getMaximum();
var stp = qm.getStep();
var emsg = (((val < min))?"Too low!":(((val > max))?"Too high!":((!((cljs.core.mod.call(null,val,stp) === (0))))?"Out of step!":null)));
if(cljs.core.truth_(emsg)){
qm.setInvalidMessage(emsg);
} else {
}

return (emsg == null);
});
;})(me,cache))
})),iargs);
});

tiltontec.qxia.core.number_field.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.number_field.cljs$lang$applyTo = (function (seq15809){
var G__15810 = cljs.core.first.call(null,seq15809);
var seq15809__$1 = cljs.core.next.call(null,seq15809);
return tiltontec.qxia.core.number_field.cljs$core$IFn$_invoke$arity$variadic(G__15810,seq15809__$1);
});

tiltontec.qxia.core.label = (function tiltontec$qxia$core$label(var_args){
var args__7292__auto__ = [];
var len__7285__auto___15816 = arguments.length;
var i__7286__auto___15817 = (0);
while(true){
if((i__7286__auto___15817 < len__7285__auto___15816)){
args__7292__auto__.push((arguments[i__7286__auto___15817]));

var G__15818 = (i__7286__auto___15817 + (1));
i__7286__auto___15817 = G__15818;
continue;
} else {
}
break;
}

var argseq__7293__auto__ = ((((1) < args__7292__auto__.length))?(new cljs.core.IndexedSeq(args__7292__auto__.slice((1)),(0),null)):null);
return tiltontec.qxia.core.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7293__auto__);
});

tiltontec.qxia.core.label.cljs$core$IFn$_invoke$arity$variadic = (function (value,iargs){
return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.Label","tiltontec.qxia.types/m.Label",908319540),new cljs.core.Keyword(null,"value","value",305978217),value,iargs);
});

tiltontec.qxia.core.label.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.label.cljs$lang$applyTo = (function (seq15814){
var G__15815 = cljs.core.first.call(null,seq15814);
var seq15814__$1 = cljs.core.next.call(null,seq15814);
return tiltontec.qxia.core.label.cljs$core$IFn$_invoke$arity$variadic(G__15815,seq15814__$1);
});

