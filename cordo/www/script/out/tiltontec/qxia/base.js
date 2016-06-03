// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.base');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.model.base');
goog.require('tiltontec.qxia.types');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.qxia.base.app_routing = (function tiltontec$qxia$base$app_routing(){
var app = qx.core.Init.getApplication();
cljs.core.println.call(null,new cljs.core.Keyword(null,"app!!!","app!!!",-1265456556),app);

return app.getRouting();
});
tiltontec.qxia.base.qxia_type_to_qx_class = (function tiltontec$qxia$base$qxia_type_to_qx_class(type){
var G__9607 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9607) {
case "tiltontec.qxia.types/m.Picker":
return qx.ui.mobile.control.Picker;

break;
case "tiltontec.qxia.types/m.PasswordField":
return qx.ui.mobile.form.PasswordField;

break;
case "tiltontec.qxia.types/Mobile":
return qx.application.Mobile;

break;
case "tiltontec.qxia.types/m.Button":
return qx.ui.mobile.form.Button;

break;
case "tiltontec.qxia.types/m.Atom":
return qx.ui.mobile.basic.Atom;

break;
case "tiltontec.qxia.types/m.Carousel":
return qx.ui.mobile.container.Carousel;

break;
case "tiltontec.qxia.types/m.Label":
return qx.ui.mobile.basic.Label;

break;
case "tiltontec.qxia.types/m.TextField":
return qx.ui.mobile.form.TextField;

break;
case "tiltontec.qxia.types/ml.VBox":
return qx.ui.mobile.layout.VBox;

break;
case "tiltontec.qxia.types/m.NavigationPage":
return qx.ui.mobile.page.NavigationPage;

break;
case "tiltontec.qxia.types/ml.HBox":
return qx.ui.mobile.layout.HBox;

break;
case "tiltontec.qxia.types/m.Form":
return qx.ui.mobile.form.Form;

break;
case "tiltontec.qxia.types/m.Composite":
return qx.ui.mobile.container.Composite;

break;
case "tiltontec.qxia.types/m.Single":
return qx.ui.mobile.form.renderer.Single;

break;
case "tiltontec.qxia.types/m.Image":
return qx.ui.mobile.basic.Image;

break;
default:
throw (new Error([cljs.core.str("qxia-type-to-qx-class does not know about "),cljs.core.str(type)].join('')));

}
});
tiltontec.qxia.base.qx_class_new = (function tiltontec$qxia$base$qx_class_new(type,iargs){
var G__9610 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9610) {
case "tiltontec.qxia.types/Mobile":
return null;

break;
case "tiltontec.qxia.types/m.Single":
return null;

break;
default:
var temp__4423__auto__ = (function (){var or__4554__auto__ = ((cljs.core.contains_QMARK_.call(null,iargs,new cljs.core.Keyword(null,"class","class",-2030961996)))?(function (){var qx_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(iargs);
if(cljs.core.truth_(qx_class)){
} else {
cljs.core.println.call(null,[cljs.core.str("ERROR! qx-class-new> key class specified but nil "),cljs.core.str("Do we need a new qx class mention in Application.")].join(''));

throw Error;
}

return qx_class;
})():null);
if(cljs.core.truth_(or__4554__auto__)){
return or__4554__auto__;
} else {
return tiltontec.qxia.base.qxia_type_to_qx_class.call(null,type);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var qx_class = temp__4423__auto__;
return cljs.core.apply.call(null,MyTerop.make,qx_class,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952).cljs$core$IFn$_invoke$arity$1(iargs));
} else {
throw (new Error([cljs.core.str("qx-class-new does not know about "),cljs.core.str(type)].join('')));
}

}
});
if(typeof tiltontec.qxia.base.qx_initialize !== 'undefined'){
} else {
tiltontec.qxia.base.qx_initialize = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return tiltontec.cell.base.ia_types;},new cljs.core.Symbol("tiltontec.cell.base","ia-types","tiltontec.cell.base/ia-types",436375603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.cell.base","tiltontec.cell.base",-1575671422,null),new cljs.core.Symbol(null,"ia-types","ia-types",322849110,null),"src/tiltontec/cell/base.cljc",14,1,104,104,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.cell.base.ia_types)?tiltontec.cell.base.ia_types.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.base","qx-initialize"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
return null;
}));
tiltontec.qxia.base.qx_obj_properties = (function tiltontec$qxia$base$qx_obj_properties(me){
return cljs.core.map.call(null,cljs.core.keyword,qx.Class.getProperties((function (){var or__4554__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(or__4554__auto__)){
return or__4554__auto__;
} else {
return tiltontec.qxia.base.qxia_type_to_qx_class.call(null,tiltontec.cell.base.ia_type.call(null,me));
}
})()));
});
tiltontec.qxia.base.qxme = (function tiltontec$qxia$base$qxme(me){
return tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
});
tiltontec.qxia.base.qx_initialize_all = (function tiltontec$qxia$base$qx_initialize_all(me){
var temp__4425__auto___9632 = (function (){var iter__5307__auto__ = (function tiltontec$qxia$base$qx_initialize_all_$_iter__9622(s__9623){
return (new cljs.core.LazySeq(null,(function (){
var s__9623__$1 = s__9623;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9623__$1);
if(temp__4425__auto__){
var s__9623__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9623__$2)){
var c__5305__auto__ = cljs.core.chunk_first.call(null,s__9623__$2);
var size__5306__auto__ = cljs.core.count.call(null,c__5305__auto__);
var b__9625 = cljs.core.chunk_buffer.call(null,size__5306__auto__);
if((function (){var i__9624 = (0);
while(true){
if((i__9624 < size__5306__auto__)){
var k = cljs.core._nth.call(null,c__5305__auto__,i__9624);
var val = tiltontec.model.base.md_get.call(null,me,k);
if(!((val == null))){
cljs.core.chunk_append.call(null,b__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null));

var G__9633 = (i__9624 + (1));
i__9624 = G__9633;
continue;
} else {
var G__9634 = (i__9624 + (1));
i__9624 = G__9634;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9625),tiltontec$qxia$base$qx_initialize_all_$_iter__9622.call(null,cljs.core.chunk_rest.call(null,s__9623__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9625),null);
}
} else {
var k = cljs.core.first.call(null,s__9623__$2);
var val = tiltontec.model.base.md_get.call(null,me,k);
if(!((val == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null),tiltontec$qxia$base$qx_initialize_all_$_iter__9622.call(null,cljs.core.rest.call(null,s__9623__$2)));
} else {
var G__9635 = cljs.core.rest.call(null,s__9623__$2);
s__9623__$1 = G__9635;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5307__auto__.call(null,tiltontec.qxia.base.qx_obj_properties.call(null,me));
})();
if(cljs.core.truth_(temp__4425__auto___9632)){
var inits_9636 = temp__4425__auto___9632;
tiltontec.qxia.base.qxme.call(null,me).set(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,inits_9636)));
} else {
}

var temp__4425__auto___9637 = new cljs.core.Keyword(null,"css-class","css-class",-919455334).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___9637)){
var c_9638 = temp__4425__auto___9637;
if(cljs.core.coll_QMARK_.call(null,c_9638)){
var cs_9639 = cljs.core.vec.call(null,c_9638);
tiltontec.qxia.base.qxme.call(null,me).addCssClasses(cljs.core.clj__GT_js.call(null,cs_9639));
} else {
tiltontec.qxia.base.qxme.call(null,me).addCssClass(c_9638);
}
} else {
}

var seq__9626 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"listeners","listeners",394544445)));
var chunk__9627 = null;
var count__9628 = (0);
var i__9629 = (0);
while(true){
if((i__9629 < count__9628)){
var vec__9630 = cljs.core._nth.call(null,chunk__9627,i__9629);
var name = cljs.core.nth.call(null,vec__9630,(0),null);
var handler = cljs.core.nth.call(null,vec__9630,(1),null);
var qxme_9640 = tiltontec.qxia.base.qxme.call(null,me);
qxme_9640.addListener(name,((function (seq__9626,chunk__9627,count__9628,i__9629,qxme_9640,vec__9630,name,handler){
return (function (event){
return handler.call(null,event,me);
});})(seq__9626,chunk__9627,count__9628,i__9629,qxme_9640,vec__9630,name,handler))
);

var G__9641 = seq__9626;
var G__9642 = chunk__9627;
var G__9643 = count__9628;
var G__9644 = (i__9629 + (1));
seq__9626 = G__9641;
chunk__9627 = G__9642;
count__9628 = G__9643;
i__9629 = G__9644;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9626);
if(temp__4425__auto__){
var seq__9626__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9626__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__9626__$1);
var G__9645 = cljs.core.chunk_rest.call(null,seq__9626__$1);
var G__9646 = c__5338__auto__;
var G__9647 = cljs.core.count.call(null,c__5338__auto__);
var G__9648 = (0);
seq__9626 = G__9645;
chunk__9627 = G__9646;
count__9628 = G__9647;
i__9629 = G__9648;
continue;
} else {
var vec__9631 = cljs.core.first.call(null,seq__9626__$1);
var name = cljs.core.nth.call(null,vec__9631,(0),null);
var handler = cljs.core.nth.call(null,vec__9631,(1),null);
var qxme_9649 = tiltontec.qxia.base.qxme.call(null,me);
qxme_9649.addListener(name,((function (seq__9626,chunk__9627,count__9628,i__9629,qxme_9649,vec__9631,name,handler,seq__9626__$1,temp__4425__auto__){
return (function (event){
return handler.call(null,event,me);
});})(seq__9626,chunk__9627,count__9628,i__9629,qxme_9649,vec__9631,name,handler,seq__9626__$1,temp__4425__auto__))
);

var G__9650 = cljs.core.next.call(null,seq__9626__$1);
var G__9651 = null;
var G__9652 = (0);
var G__9653 = (0);
seq__9626 = G__9650;
chunk__9627 = G__9651;
count__9628 = G__9652;
i__9629 = G__9653;
continue;
}
} else {
return null;
}
}
break;
}
});
tiltontec.qxia.base.qx_add_kid = (function tiltontec$qxia$base$qx_add_kid(me,kid){
cljs.core.println.call(null,new cljs.core.Keyword(null,"add-kid","add-kid",160314367),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,kid));

var temp__4423__auto__ = new cljs.core.Keyword(null,"flex","flex",-1425124628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kid));
if(cljs.core.truth_(temp__4423__auto__)){
var flex = temp__4423__auto__;
return tiltontec.qxia.base.qxme.call(null,me).add(tiltontec.qxia.base.qxme.call(null,kid),{"flex": flex});
} else {
return tiltontec.qxia.base.qxme.call(null,me).add(tiltontec.qxia.base.qxme.call(null,kid));
}
});
