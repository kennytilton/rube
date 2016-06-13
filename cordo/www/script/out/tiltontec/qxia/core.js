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
return tiltontec.qxia.base.app_routing.call(null).executeGet(end_point);
});
tiltontec.qxia.core.qx_make = (function tiltontec$qxia$core$qx_make(var_args){
var args__7292__auto__ = [];
var len__7285__auto___461032 = arguments.length;
var i__7286__auto___461033 = (0);
while(true){
if((i__7286__auto___461033 < len__7285__auto___461032)){
args__7292__auto__.push((arguments[i__7286__auto___461033]));

var G__461034 = (i__7286__auto___461033 + (1));
i__7286__auto___461033 = G__461034;
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

return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),type,iargs);
});

tiltontec.qxia.core.qx_make.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq461030){
var G__461031 = cljs.core.first.call(null,seq461030);
var seq461030__$1 = cljs.core.next.call(null,seq461030);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__461031,seq461030__$1);
});

tiltontec.qxia.core.image = (function tiltontec$qxia$core$image(var_args){
var args__7292__auto__ = [];
var len__7285__auto___461037 = arguments.length;
var i__7286__auto___461038 = (0);
while(true){
if((i__7286__auto___461038 < len__7285__auto___461037)){
args__7292__auto__.push((arguments[i__7286__auto___461038]));

var G__461039 = (i__7286__auto___461038 + (1));
i__7286__auto___461038 = G__461039;
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

tiltontec.qxia.core.image.cljs$lang$applyTo = (function (seq461035){
var G__461036 = cljs.core.first.call(null,seq461035);
var seq461035__$1 = cljs.core.next.call(null,seq461035);
return tiltontec.qxia.core.image.cljs$core$IFn$_invoke$arity$variadic(G__461036,seq461035__$1);
});

tiltontec.qxia.core.button = (function tiltontec$qxia$core$button(var_args){
var args__7292__auto__ = [];
var len__7285__auto___461042 = arguments.length;
var i__7286__auto___461043 = (0);
while(true){
if((i__7286__auto___461043 < len__7285__auto___461042)){
args__7292__auto__.push((arguments[i__7286__auto___461043]));

var G__461044 = (i__7286__auto___461043 + (1));
i__7286__auto___461043 = G__461044;
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

tiltontec.qxia.core.button.cljs$lang$applyTo = (function (seq461040){
var G__461041 = cljs.core.first.call(null,seq461040);
var seq461040__$1 = cljs.core.next.call(null,seq461040);
return tiltontec.qxia.core.button.cljs$core$IFn$_invoke$arity$variadic(G__461041,seq461040__$1);
});

tiltontec.qxia.core.text_field = (function tiltontec$qxia$core$text_field(var_args){
var args__7292__auto__ = [];
var len__7285__auto___461047 = arguments.length;
var i__7286__auto___461048 = (0);
while(true){
if((i__7286__auto___461048 < len__7285__auto___461047)){
args__7292__auto__.push((arguments[i__7286__auto___461048]));

var G__461049 = (i__7286__auto___461048 + (1));
i__7286__auto___461048 = G__461049;
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

tiltontec.qxia.core.text_field.cljs$lang$applyTo = (function (seq461045){
var G__461046 = cljs.core.first.call(null,seq461045);
var seq461045__$1 = cljs.core.next.call(null,seq461045);
return tiltontec.qxia.core.text_field.cljs$core$IFn$_invoke$arity$variadic(G__461046,seq461045__$1);
});

tiltontec.qxia.core.number_field = (function tiltontec$qxia$core$number_field(var_args){
var args__7292__auto__ = [];
var len__7285__auto___461052 = arguments.length;
var i__7286__auto___461053 = (0);
while(true){
if((i__7286__auto___461053 < len__7285__auto___461052)){
args__7292__auto__.push((arguments[i__7286__auto___461053]));

var G__461054 = (i__7286__auto___461053 + (1));
i__7286__auto___461053 = G__461054;
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

tiltontec.qxia.core.number_field.cljs$lang$applyTo = (function (seq461050){
var G__461051 = cljs.core.first.call(null,seq461050);
var seq461050__$1 = cljs.core.next.call(null,seq461050);
return tiltontec.qxia.core.number_field.cljs$core$IFn$_invoke$arity$variadic(G__461051,seq461050__$1);
});

tiltontec.qxia.core.label = (function tiltontec$qxia$core$label(var_args){
var args__7292__auto__ = [];
var len__7285__auto___461057 = arguments.length;
var i__7286__auto___461058 = (0);
while(true){
if((i__7286__auto___461058 < len__7285__auto___461057)){
args__7292__auto__.push((arguments[i__7286__auto___461058]));

var G__461059 = (i__7286__auto___461058 + (1));
i__7286__auto___461058 = G__461059;
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

tiltontec.qxia.core.label.cljs$lang$applyTo = (function (seq461055){
var G__461056 = cljs.core.first.call(null,seq461055);
var seq461055__$1 = cljs.core.next.call(null,seq461055);
return tiltontec.qxia.core.label.cljs$core$IFn$_invoke$arity$variadic(G__461056,seq461055__$1);
});

