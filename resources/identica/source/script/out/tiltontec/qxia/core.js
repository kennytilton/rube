// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.core');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.qxia.core.qx_types = cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.make_hierarchy.call(null),new cljs.core.Keyword("tiltontec.qxia.core","Mobile","tiltontec.qxia.core/Mobile",1622948346),new cljs.core.Keyword("tiltontec.qxia.core","Object","tiltontec.qxia.core/Object",-661675451)),new cljs.core.Keyword("tiltontec.qxia.core","Widget","tiltontec.qxia.core/Widget",-618008851),new cljs.core.Keyword("tiltontec.qxia.core","Object","tiltontec.qxia.core/Object",-661675451)),new cljs.core.Keyword("tiltontec.qxia.core","Composite","tiltontec.qxia.core/Composite",-1457287647),new cljs.core.Keyword("tiltontec.qxia.core","Widget","tiltontec.qxia.core/Widget",-618008851)),new cljs.core.Keyword("tiltontec.qxia.core","NavigationPage","tiltontec.qxia.core/NavigationPage",733013597),new cljs.core.Keyword("tiltontec.qxia.core","Composite","tiltontec.qxia.core/Composite",-1457287647)),new cljs.core.Keyword("tiltontec.qxia.core","Button","tiltontec.qxia.core/Button",476775989),new cljs.core.Keyword("tiltontec.qxia.core","Widget","tiltontec.qxia.core/Widget",-618008851));
tiltontec.qxia.core.qx_class_new = (function tiltontec$qxia$core$qx_class_new(type){
cljs.core.println.call(null,[cljs.core.str(new cljs.core.Symbol(null,"seeling-type","seeling-type",219710683,null)),cljs.core.str(type)].join(''));

var G__12367 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12367) {
case "tiltontec.qxia.core/NavigationPage":
return (new qx.ui.mobile.page.NavigationPage());

break;
case "tiltontec.qxia.core/Button":
return (new qx.ui.mobile.form.Button());

break;
case "tiltontec.qxia.core/Mobile":
return null;

break;
case "default":
throw (new Error([cljs.core.str("new-qx-class does not know about "),cljs.core.str(type)].join('')));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
tiltontec.qxia.core.qx_finalize = (function tiltontec$qxia$core$qx_finalize(x){
return cljs.core.println.call(null,[cljs.core.str("Not finalizing "),cljs.core.str(x)].join(''));
});
tiltontec.qxia.core.qx_make = (function tiltontec$qxia$core$qx_make(){
var args__5600__auto__ = [];
var len__5593__auto___12371 = arguments.length;
var i__5594__auto___12372 = (0);
while(true){
if((i__5594__auto___12372 < len__5593__auto___12371)){
args__5600__auto__.push((arguments[i__5594__auto___12372]));

var G__12373 = (i__5594__auto___12372 + (1));
i__5594__auto___12372 = G__12373;
continue;
} else {
}
break;
}

var argseq__5601__auto__ = ((((1) < args__5600__auto__.length))?(new cljs.core.IndexedSeq(args__5600__auto__.slice((1)),(0))):null);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5601__auto__);
});

tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic = (function (type,initargs){
var me = cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),tiltontec.qxia.core.qx_class_new.call(null,type),initargs);
return tiltontec.qxia.core.qx_finalize.call(null,me);
});

tiltontec.qxia.core.qx_make.cljs$lang$maxFixedArity = (1);

tiltontec.qxia.core.qx_make.cljs$lang$applyTo = (function (seq12369){
var G__12370 = cljs.core.first.call(null,seq12369);
var seq12369__$1 = cljs.core.next.call(null,seq12369);
return tiltontec.qxia.core.qx_make.cljs$core$IFn$_invoke$arity$variadic(G__12370,seq12369__$1);
});
