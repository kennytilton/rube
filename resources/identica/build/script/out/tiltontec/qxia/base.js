// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.base');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.model.base');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.cell.base.ia_types = cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,tiltontec.cell.base.ia_types,new cljs.core.Keyword("tiltontec.qxia.base","Application","tiltontec.qxia.base/Application",-514507185),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","Mobile","tiltontec.qxia.base/Mobile",1622995536),new cljs.core.Keyword("tiltontec.qxia.base","Application","tiltontec.qxia.base/Application",-514507185)),new cljs.core.Keyword("tiltontec.qxia.base","ml.Abstract","tiltontec.qxia.base/ml.Abstract",1726049563),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","ml.AbstractBox","tiltontec.qxia.base/ml.AbstractBox",2040510954),new cljs.core.Keyword("tiltontec.qxia.base","ml.Abstract","tiltontec.qxia.base/ml.Abstract",1726049563)),new cljs.core.Keyword("tiltontec.qxia.base","ml.HBox","tiltontec.qxia.base/ml.HBox",143908909),new cljs.core.Keyword("tiltontec.qxia.base","ml.AbstractBox","tiltontec.qxia.base/ml.AbstractBox",2040510954)),new cljs.core.Keyword("tiltontec.qxia.base","ml.VBox","tiltontec.qxia.base/ml.VBox",884853011),new cljs.core.Keyword("tiltontec.qxia.base","ml.AbstractBox","tiltontec.qxia.base/ml.AbstractBox",2040510954)),new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","m.Single","tiltontec.qxia.base/m.Single",1330847058),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Page","tiltontec.qxia.base/m.Page",-1360941549),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839)),new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword("tiltontec.qxia.base","m.Page","tiltontec.qxia.base/m.Page",-1360941549)),new cljs.core.Keyword("tiltontec.qxia.base","m.Atom","tiltontec.qxia.base/m.Atom",-1371579407),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Image","tiltontec.qxia.base/m.Image",2135364668),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Button","tiltontec.qxia.base/m.Button",1808800880),new cljs.core.Keyword("tiltontec.qxia.base","m.Atom","tiltontec.qxia.base/m.Atom",-1371579407)),new cljs.core.Keyword("tiltontec.qxia.base","m.Input","tiltontec.qxia.base/m.Input",2096282380),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),new cljs.core.Keyword("tiltontec.qxia.base","m.Input","tiltontec.qxia.base/m.Input",2096282380)),new cljs.core.Keyword("tiltontec.qxia.base","m.PasswordField","tiltontec.qxia.base/m.PasswordField",-559230758),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742));
tiltontec.qxia.base.qxia_type_to_qx_class = (function tiltontec$qxia$base$qxia_type_to_qx_class(type){
var G__23850 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23850) {
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
tiltontec.qxia.base.qx_class_new = (function tiltontec$qxia$base$qx_class_new(type){
var G__23853 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23853) {
case "tiltontec.qxia.base/Mobile":
return null;

break;
case "tiltontec.qxia.base/m.Single":
return null;

break;
default:
var temp__4423__auto__ = tiltontec.qxia.base.qxia_type_to_qx_class.call(null,type);
if(cljs.core.truth_(temp__4423__auto__)){
var qx_class = temp__4423__auto__;
return cljs.core.apply.call(null,MyTerop.make,qx_class,cljs.core.PersistentVector.EMPTY);
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
var temp__4425__auto___23875 = (function (){var iter__5307__auto__ = (function tiltontec$qxia$base$qx_initialize_all_$_iter__23865(s__23866){
return (new cljs.core.LazySeq(null,(function (){
var s__23866__$1 = s__23866;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23866__$1);
if(temp__4425__auto__){
var s__23866__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23866__$2)){
var c__5305__auto__ = cljs.core.chunk_first.call(null,s__23866__$2);
var size__5306__auto__ = cljs.core.count.call(null,c__5305__auto__);
var b__23868 = cljs.core.chunk_buffer.call(null,size__5306__auto__);
if((function (){var i__23867 = (0);
while(true){
if((i__23867 < size__5306__auto__)){
var k = cljs.core._nth.call(null,c__5305__auto__,i__23867);
var val = tiltontec.model.base.md_get.call(null,me,k);
if(!((val == null))){
cljs.core.chunk_append.call(null,b__23868,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null));

var G__23876 = (i__23867 + (1));
i__23867 = G__23876;
continue;
} else {
var G__23877 = (i__23867 + (1));
i__23867 = G__23877;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23868),tiltontec$qxia$base$qx_initialize_all_$_iter__23865.call(null,cljs.core.chunk_rest.call(null,s__23866__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23868),null);
}
} else {
var k = cljs.core.first.call(null,s__23866__$2);
var val = tiltontec.model.base.md_get.call(null,me,k);
if(!((val == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null),tiltontec$qxia$base$qx_initialize_all_$_iter__23865.call(null,cljs.core.rest.call(null,s__23866__$2)));
} else {
var G__23878 = cljs.core.rest.call(null,s__23866__$2);
s__23866__$1 = G__23878;
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
if(cljs.core.truth_(temp__4425__auto___23875)){
var inits_23879 = temp__4425__auto___23875;
tiltontec.qxia.base.qxme.call(null,me).set(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,inits_23879)));
} else {
}

var temp__4425__auto___23880 = new cljs.core.Keyword(null,"css-class","css-class",-919455334).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___23880)){
var c_23881 = temp__4425__auto___23880;
cljs.core.println.call(null,new cljs.core.Keyword(null,"bingo-css","bingo-css",-1390327273),c_23881,tiltontec.cell.base.ia_type.call(null,me));

tiltontec.qxia.base.qxme.call(null,me).addCssClass(c_23881);
} else {
}

var seq__23869 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"listeners","listeners",394544445)));
var chunk__23870 = null;
var count__23871 = (0);
var i__23872 = (0);
while(true){
if((i__23872 < count__23871)){
var vec__23873 = cljs.core._nth.call(null,chunk__23870,i__23872);
var name = cljs.core.nth.call(null,vec__23873,(0),null);
var handler = cljs.core.nth.call(null,vec__23873,(1),null);
var qxme_23882 = tiltontec.qxia.base.qxme.call(null,me);
qxme_23882.addListener(name,((function (seq__23869,chunk__23870,count__23871,i__23872,qxme_23882,vec__23873,name,handler){
return (function (event){
return handler.call(null,event,me);
});})(seq__23869,chunk__23870,count__23871,i__23872,qxme_23882,vec__23873,name,handler))
);

var G__23883 = seq__23869;
var G__23884 = chunk__23870;
var G__23885 = count__23871;
var G__23886 = (i__23872 + (1));
seq__23869 = G__23883;
chunk__23870 = G__23884;
count__23871 = G__23885;
i__23872 = G__23886;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23869);
if(temp__4425__auto__){
var seq__23869__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23869__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__23869__$1);
var G__23887 = cljs.core.chunk_rest.call(null,seq__23869__$1);
var G__23888 = c__5338__auto__;
var G__23889 = cljs.core.count.call(null,c__5338__auto__);
var G__23890 = (0);
seq__23869 = G__23887;
chunk__23870 = G__23888;
count__23871 = G__23889;
i__23872 = G__23890;
continue;
} else {
var vec__23874 = cljs.core.first.call(null,seq__23869__$1);
var name = cljs.core.nth.call(null,vec__23874,(0),null);
var handler = cljs.core.nth.call(null,vec__23874,(1),null);
var qxme_23891 = tiltontec.qxia.base.qxme.call(null,me);
qxme_23891.addListener(name,((function (seq__23869,chunk__23870,count__23871,i__23872,qxme_23891,vec__23874,name,handler,seq__23869__$1,temp__4425__auto__){
return (function (event){
return handler.call(null,event,me);
});})(seq__23869,chunk__23870,count__23871,i__23872,qxme_23891,vec__23874,name,handler,seq__23869__$1,temp__4425__auto__))
);

var G__23892 = cljs.core.next.call(null,seq__23869__$1);
var G__23893 = null;
var G__23894 = (0);
var G__23895 = (0);
seq__23869 = G__23892;
chunk__23870 = G__23893;
count__23871 = G__23894;
i__23872 = G__23895;
continue;
}
} else {
return null;
}
}
break;
}
});
