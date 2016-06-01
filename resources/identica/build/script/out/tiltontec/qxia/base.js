// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.base');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.model.base');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.qxia.base.RTG = (function tiltontec$qxia$base$RTG(){
return qx.core.Init.getApplication().getRouting();
});
tiltontec.cell.base.ia_types = cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,tiltontec.cell.base.ia_types,new cljs.core.Keyword("tiltontec.qxia.base","Application","tiltontec.qxia.base/Application",-514507185),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","Mobile","tiltontec.qxia.base/Mobile",1622995536),new cljs.core.Keyword("tiltontec.qxia.base","Application","tiltontec.qxia.base/Application",-514507185)),new cljs.core.Keyword("tiltontec.qxia.base","ml.Abstract","tiltontec.qxia.base/ml.Abstract",1726049563),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","ml.AbstractBox","tiltontec.qxia.base/ml.AbstractBox",2040510954),new cljs.core.Keyword("tiltontec.qxia.base","ml.Abstract","tiltontec.qxia.base/ml.Abstract",1726049563)),new cljs.core.Keyword("tiltontec.qxia.base","ml.HBox","tiltontec.qxia.base/ml.HBox",143908909),new cljs.core.Keyword("tiltontec.qxia.base","ml.AbstractBox","tiltontec.qxia.base/ml.AbstractBox",2040510954)),new cljs.core.Keyword("tiltontec.qxia.base","ml.VBox","tiltontec.qxia.base/ml.VBox",884853011),new cljs.core.Keyword("tiltontec.qxia.base","ml.AbstractBox","tiltontec.qxia.base/ml.AbstractBox",2040510954)),new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","m.Single","tiltontec.qxia.base/m.Single",1330847058),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Page","tiltontec.qxia.base/m.Page",-1360941549),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839)),new cljs.core.Keyword("tiltontec.qxia.base","m.Scroll","tiltontec.qxia.base/m.Scroll",-1123790023),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839)),new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword("tiltontec.qxia.base","m.Page","tiltontec.qxia.base/m.Page",-1360941549)),new cljs.core.Keyword("tiltontec.qxia.base","m.Atom","tiltontec.qxia.base/m.Atom",-1371579407),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Image","tiltontec.qxia.base/m.Image",2135364668),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Button","tiltontec.qxia.base/m.Button",1808800880),new cljs.core.Keyword("tiltontec.qxia.base","m.Atom","tiltontec.qxia.base/m.Atom",-1371579407)),new cljs.core.Keyword("tiltontec.qxia.base","m.Input","tiltontec.qxia.base/m.Input",2096282380),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),new cljs.core.Keyword("tiltontec.qxia.base","m.Input","tiltontec.qxia.base/m.Input",2096282380)),new cljs.core.Keyword("tiltontec.qxia.base","m.PasswordField","tiltontec.qxia.base/m.PasswordField",-559230758),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742));
tiltontec.qxia.base.qxia_type_to_qx_class = (function tiltontec$qxia$base$qxia_type_to_qx_class(type){
var G__40982 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40982) {
case "tiltontec.qxia.base/m.Form":
return qx.ui.mobile.form.Form;

break;
case "tiltontec.qxia.base/m.Label":
return qx.ui.mobile.basic.Label;

break;
case "tiltontec.qxia.base/m.TextField":
return qx.ui.mobile.form.TextField;

break;
case "tiltontec.qxia.base/ml.HBox":
return qx.ui.mobile.layout.HBox;

break;
case "tiltontec.qxia.base/m.Button":
return qx.ui.mobile.form.Button;

break;
case "tiltontec.qxia.base/Mobile":
return qx.application.Mobile;

break;
case "tiltontec.qxia.base/m.Composite":
return qx.ui.mobile.container.Composite;

break;
case "tiltontec.qxia.base/m.Atom":
return qx.ui.mobile.basic.Atom;

break;
case "tiltontec.qxia.base/m.Single":
return qx.ui.mobile.form.renderer.Single;

break;
case "tiltontec.qxia.base/ml.VBox":
return qx.ui.mobile.layout.VBox;

break;
case "tiltontec.qxia.base/m.NavigationPage":
return qx.ui.mobile.page.NavigationPage;

break;
case "tiltontec.qxia.base/m.PasswordField":
return qx.ui.mobile.form.PasswordField;

break;
case "tiltontec.qxia.base/m.Image":
return qx.ui.mobile.basic.Image;

break;
default:
throw (new Error([cljs.core.str("qxia-type-to-qx-class does not know about "),cljs.core.str(type)].join('')));

}
});
tiltontec.qxia.base.qx_class_new = (function tiltontec$qxia$base$qx_class_new(type,iargs){
var G__40985 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40985) {
case "tiltontec.qxia.base/Mobile":
return null;

break;
case "tiltontec.qxia.base/m.Single":
return null;

break;
default:
var temp__4423__auto__ = (function (){var or__4554__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(iargs);
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
var hierarchy__5452__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return tiltontec.cell.base.ia_types;},new cljs.core.Symbol("tiltontec.cell.base","ia-types","tiltontec.cell.base/ia-types",436375603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.cell.base","tiltontec.cell.base",-1575671422,null),new cljs.core.Symbol(null,"ia-types","ia-types",322849110,null),"/home/kenneth/rube/src/tiltontec/cell/base.cljc",14,1,104,104,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.cell.base.ia_types)?tiltontec.cell.base.ia_types.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
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
var temp__4425__auto___41007 = (function (){var iter__5307__auto__ = (function tiltontec$qxia$base$qx_initialize_all_$_iter__40997(s__40998){
return (new cljs.core.LazySeq(null,(function (){
var s__40998__$1 = s__40998;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__40998__$1);
if(temp__4425__auto__){
var s__40998__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40998__$2)){
var c__5305__auto__ = cljs.core.chunk_first.call(null,s__40998__$2);
var size__5306__auto__ = cljs.core.count.call(null,c__5305__auto__);
var b__41000 = cljs.core.chunk_buffer.call(null,size__5306__auto__);
if((function (){var i__40999 = (0);
while(true){
if((i__40999 < size__5306__auto__)){
var k = cljs.core._nth.call(null,c__5305__auto__,i__40999);
var val = tiltontec.model.base.md_get.call(null,me,k);
if(!((val == null))){
cljs.core.chunk_append.call(null,b__41000,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null));

var G__41008 = (i__40999 + (1));
i__40999 = G__41008;
continue;
} else {
var G__41009 = (i__40999 + (1));
i__40999 = G__41009;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41000),tiltontec$qxia$base$qx_initialize_all_$_iter__40997.call(null,cljs.core.chunk_rest.call(null,s__40998__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41000),null);
}
} else {
var k = cljs.core.first.call(null,s__40998__$2);
var val = tiltontec.model.base.md_get.call(null,me,k);
if(!((val == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null),tiltontec$qxia$base$qx_initialize_all_$_iter__40997.call(null,cljs.core.rest.call(null,s__40998__$2)));
} else {
var G__41010 = cljs.core.rest.call(null,s__40998__$2);
s__40998__$1 = G__41010;
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
if(cljs.core.truth_(temp__4425__auto___41007)){
var inits_41011 = temp__4425__auto___41007;
tiltontec.qxia.base.qxme.call(null,me).set(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,inits_41011)));
} else {
}

var temp__4425__auto___41012 = new cljs.core.Keyword(null,"css-class","css-class",-919455334).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___41012)){
var c_41013 = temp__4425__auto___41012;
if(cljs.core.coll_QMARK_.call(null,c_41013)){
var cs_41014 = cljs.core.vec.call(null,c_41013);
cljs.core.println.call(null,new cljs.core.Keyword(null,"mycs","mycs",-414271655),cs_41014);

tiltontec.qxia.base.qxme.call(null,me).addCssClasses(cljs.core.clj__GT_js.call(null,cs_41014));
} else {
tiltontec.qxia.base.qxme.call(null,me).addCssClass(c_41013);
}
} else {
}

var seq__41001 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"listeners","listeners",394544445)));
var chunk__41002 = null;
var count__41003 = (0);
var i__41004 = (0);
while(true){
if((i__41004 < count__41003)){
var vec__41005 = cljs.core._nth.call(null,chunk__41002,i__41004);
var name = cljs.core.nth.call(null,vec__41005,(0),null);
var handler = cljs.core.nth.call(null,vec__41005,(1),null);
var qxme_41015 = tiltontec.qxia.base.qxme.call(null,me);
qxme_41015.addListener(name,((function (seq__41001,chunk__41002,count__41003,i__41004,qxme_41015,vec__41005,name,handler){
return (function (event){
return handler.call(null,event,me);
});})(seq__41001,chunk__41002,count__41003,i__41004,qxme_41015,vec__41005,name,handler))
);

var G__41016 = seq__41001;
var G__41017 = chunk__41002;
var G__41018 = count__41003;
var G__41019 = (i__41004 + (1));
seq__41001 = G__41016;
chunk__41002 = G__41017;
count__41003 = G__41018;
i__41004 = G__41019;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__41001);
if(temp__4425__auto__){
var seq__41001__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41001__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__41001__$1);
var G__41020 = cljs.core.chunk_rest.call(null,seq__41001__$1);
var G__41021 = c__5338__auto__;
var G__41022 = cljs.core.count.call(null,c__5338__auto__);
var G__41023 = (0);
seq__41001 = G__41020;
chunk__41002 = G__41021;
count__41003 = G__41022;
i__41004 = G__41023;
continue;
} else {
var vec__41006 = cljs.core.first.call(null,seq__41001__$1);
var name = cljs.core.nth.call(null,vec__41006,(0),null);
var handler = cljs.core.nth.call(null,vec__41006,(1),null);
var qxme_41024 = tiltontec.qxia.base.qxme.call(null,me);
qxme_41024.addListener(name,((function (seq__41001,chunk__41002,count__41003,i__41004,qxme_41024,vec__41006,name,handler,seq__41001__$1,temp__4425__auto__){
return (function (event){
return handler.call(null,event,me);
});})(seq__41001,chunk__41002,count__41003,i__41004,qxme_41024,vec__41006,name,handler,seq__41001__$1,temp__4425__auto__))
);

var G__41025 = cljs.core.next.call(null,seq__41001__$1);
var G__41026 = null;
var G__41027 = (0);
var G__41028 = (0);
seq__41001 = G__41025;
chunk__41002 = G__41026;
count__41003 = G__41027;
i__41004 = G__41028;
continue;
}
} else {
return null;
}
}
break;
}
});
