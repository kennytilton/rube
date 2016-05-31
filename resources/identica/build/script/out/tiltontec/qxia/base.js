// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.base');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.model.base');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.cell.base.ia_types = cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,tiltontec.cell.base.ia_types,new cljs.core.Keyword("tiltontec.qxia.base","Application","tiltontec.qxia.base/Application",-514507185),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","Mobile","tiltontec.qxia.base/Mobile",1622995536),new cljs.core.Keyword("tiltontec.qxia.base","Application","tiltontec.qxia.base/Application",-514507185)),new cljs.core.Keyword("tiltontec.qxia.base","ml.Abstract","tiltontec.qxia.base/ml.Abstract",1726049563),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","ml.AbstractBox","tiltontec.qxia.base/ml.AbstractBox",2040510954),new cljs.core.Keyword("tiltontec.qxia.base","ml.Abstract","tiltontec.qxia.base/ml.Abstract",1726049563)),new cljs.core.Keyword("tiltontec.qxia.base","ml.HBox","tiltontec.qxia.base/ml.HBox",143908909),new cljs.core.Keyword("tiltontec.qxia.base","ml.AbstractBox","tiltontec.qxia.base/ml.AbstractBox",2040510954)),new cljs.core.Keyword("tiltontec.qxia.base","ml.VBox","tiltontec.qxia.base/ml.VBox",884853011),new cljs.core.Keyword("tiltontec.qxia.base","ml.AbstractBox","tiltontec.qxia.base/ml.AbstractBox",2040510954)),new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","m.Single","tiltontec.qxia.base/m.Single",1330847058),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Page","tiltontec.qxia.base/m.Page",-1360941549),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839)),new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword("tiltontec.qxia.base","m.Page","tiltontec.qxia.base/m.Page",-1360941549)),new cljs.core.Keyword("tiltontec.qxia.base","m.Atom","tiltontec.qxia.base/m.Atom",-1371579407),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Image","tiltontec.qxia.base/m.Image",2135364668),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Button","tiltontec.qxia.base/m.Button",1808800880),new cljs.core.Keyword("tiltontec.qxia.base","m.Atom","tiltontec.qxia.base/m.Atom",-1371579407)),new cljs.core.Keyword("tiltontec.qxia.base","m.Input","tiltontec.qxia.base/m.Input",2096282380),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),new cljs.core.Keyword("tiltontec.qxia.base","m.Input","tiltontec.qxia.base/m.Input",2096282380)),new cljs.core.Keyword("tiltontec.qxia.base","m.PasswordField","tiltontec.qxia.base/m.PasswordField",-559230758),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742));
tiltontec.qxia.base.qx_class_new = (function tiltontec$qxia$base$qx_class_new(type){
var G__30892 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30892) {
case "tiltontec.qxia.base/m.Form":
return (new qx.ui.mobile.form.Form());

break;
case "tiltontec.qxia.base/m.Label":
return (new qx.ui.mobile.basic.Label());

break;
case "tiltontec.qxia.base/m.TextField":
return (new qx.ui.mobile.form.TextField());

break;
case "tiltontec.qxia.base/ml.HBox":
return (new qx.ui.mobile.layout.HBox());

break;
case "tiltontec.qxia.base/m.Button":
return (new qx.ui.mobile.form.Button());

break;
case "tiltontec.qxia.base/Mobile":
return null;

break;
case "tiltontec.qxia.base/m.Atom":
return (new qx.ui.mobile.basic.Atom());

break;
case "tiltontec.qxia.base/m.Single":
return ((function (G__30892){
return (function (form){
return (new qx.ui.mobile.form.renderer.Single());
});
;})(G__30892))

break;
case "tiltontec.qxia.base/m.NavigationPage":
return (new qx.ui.mobile.page.NavigationPage());

break;
case "tiltontec.qxia.base/m.PasswordField":
return (new qx.ui.mobile.form.PasswordField());

break;
case "tiltontec.qxia.base/m.Image":
return (new qx.ui.mobile.basic.Image());

break;
default:
throw (new Error([cljs.core.str("qx-class-new does not know about "),cljs.core.str(type)].join('')));

}
});
tiltontec.qxia.base.qxia_type_to_qx_class = (function tiltontec$qxia$base$qxia_type_to_qx_class(type){
var G__30895 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30895) {
case "tiltontec.qxia.base/m.Form":
return qx.ui.mobile.form.Form;

break;
case "tiltontec.qxia.base/m.Label":
return qx.ui.mobile.basic.Label;

break;
case "tiltontec.qxia.base/m.TextField":
return qx.ui.mobile.form.TextField;

break;
case "tiltontec.qxia.base/m.VBox":
return qx.ui.mobile.layout.VBox;

break;
case "tiltontec.qxia.base/m.Button":
return qx.ui.mobile.form.Button;

break;
case "tiltontec.qxia.base/Mobile":
return qx.application.Mobile;

break;
case "tiltontec.qxia.base/m.Atom":
return qx.ui.mobile.basic.Atom;

break;
case "tiltontec.qxia.base/m.Single":
return qx.ui.mobile.form.renderer.Single;

break;
case "tiltontec.qxia.base/m.NavigationPage":
return qx.ui.mobile.page.NavigationPage;

break;
case "tiltontec.qxia.base/m.PasswordField":
return qx.ui.mobile.form.PasswordField;

break;
case "tiltontec.qxia.base/m.HBox":
return qx.ui.mobile.layout.HBox;

break;
case "tiltontec.qxia.base/m.Image":
return qx.ui.mobile.basic.Image;

break;
default:
throw (new Error([cljs.core.str("qxia-type-to-qx-class does not know about "),cljs.core.str(type)].join('')));

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
return cljs.core.println.call(null,[cljs.core.str("No initialization provided for type "),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me))].join(''));
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
tiltontec.qxia.base.qx_initialize_type = (function tiltontec$qxia$base$qx_initialize_type(me){
cljs.core.println.call(null,new cljs.core.Keyword(null,"qx-init-type","qx-init-type",-1214934166),tiltontec.cell.base.ia_type.call(null,me));

var seq__30901 = cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,tiltontec.cell.base.ia_type.call(null,me),cljs.core.ancestors.call(null,tiltontec.cell.base.ia_types,tiltontec.cell.base.ia_type.call(null,me)))));
var chunk__30902 = null;
var count__30903 = (0);
var i__30904 = (0);
while(true){
if((i__30904 < count__30903)){
var type = cljs.core._nth.call(null,chunk__30902,i__30904);
tiltontec.qxia.base.qx_initialize.call(null,type,me);

var G__30905 = seq__30901;
var G__30906 = chunk__30902;
var G__30907 = count__30903;
var G__30908 = (i__30904 + (1));
seq__30901 = G__30905;
chunk__30902 = G__30906;
count__30903 = G__30907;
i__30904 = G__30908;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30901);
if(temp__4425__auto__){
var seq__30901__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30901__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__30901__$1);
var G__30909 = cljs.core.chunk_rest.call(null,seq__30901__$1);
var G__30910 = c__5338__auto__;
var G__30911 = cljs.core.count.call(null,c__5338__auto__);
var G__30912 = (0);
seq__30901 = G__30909;
chunk__30902 = G__30910;
count__30903 = G__30911;
i__30904 = G__30912;
continue;
} else {
var type = cljs.core.first.call(null,seq__30901__$1);
tiltontec.qxia.base.qx_initialize.call(null,type,me);

var G__30913 = cljs.core.next.call(null,seq__30901__$1);
var G__30914 = null;
var G__30915 = (0);
var G__30916 = (0);
seq__30901 = G__30913;
chunk__30902 = G__30914;
count__30903 = G__30915;
i__30904 = G__30916;
continue;
}
} else {
return null;
}
}
break;
}
});
tiltontec.qxia.base.qxme = (function tiltontec$qxia$base$qxme(me){
return tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
});
tiltontec.qxia.base.qx_initialize_all = (function tiltontec$qxia$base$qx_initialize_all(me){
var temp__4425__auto___30937 = (function (){var iter__5307__auto__ = (function tiltontec$qxia$base$qx_initialize_all_$_iter__30927(s__30928){
return (new cljs.core.LazySeq(null,(function (){
var s__30928__$1 = s__30928;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30928__$1);
if(temp__4425__auto__){
var s__30928__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30928__$2)){
var c__5305__auto__ = cljs.core.chunk_first.call(null,s__30928__$2);
var size__5306__auto__ = cljs.core.count.call(null,c__5305__auto__);
var b__30930 = cljs.core.chunk_buffer.call(null,size__5306__auto__);
if((function (){var i__30929 = (0);
while(true){
if((i__30929 < size__5306__auto__)){
var k = cljs.core._nth.call(null,c__5305__auto__,i__30929);
var val = tiltontec.model.base.md_get.call(null,me,k);
if(!((val == null))){
cljs.core.chunk_append.call(null,b__30930,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null));

var G__30938 = (i__30929 + (1));
i__30929 = G__30938;
continue;
} else {
var G__30939 = (i__30929 + (1));
i__30929 = G__30939;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30930),tiltontec$qxia$base$qx_initialize_all_$_iter__30927.call(null,cljs.core.chunk_rest.call(null,s__30928__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30930),null);
}
} else {
var k = cljs.core.first.call(null,s__30928__$2);
var val = tiltontec.model.base.md_get.call(null,me,k);
if(!((val == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null),tiltontec$qxia$base$qx_initialize_all_$_iter__30927.call(null,cljs.core.rest.call(null,s__30928__$2)));
} else {
var G__30940 = cljs.core.rest.call(null,s__30928__$2);
s__30928__$1 = G__30940;
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
if(cljs.core.truth_(temp__4425__auto___30937)){
var inits_30941 = temp__4425__auto___30937;
tiltontec.qxia.base.qxme.call(null,me).set(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,inits_30941)));
} else {
}

var seq__30931 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"listeners","listeners",394544445)));
var chunk__30932 = null;
var count__30933 = (0);
var i__30934 = (0);
while(true){
if((i__30934 < count__30933)){
var vec__30935 = cljs.core._nth.call(null,chunk__30932,i__30934);
var name = cljs.core.nth.call(null,vec__30935,(0),null);
var handler = cljs.core.nth.call(null,vec__30935,(1),null);
var qxme_30942 = tiltontec.qxia.base.qxme.call(null,me);
qxme_30942.addListener(name,((function (seq__30931,chunk__30932,count__30933,i__30934,qxme_30942,vec__30935,name,handler){
return (function (event){
return handler.call(null,event,me);
});})(seq__30931,chunk__30932,count__30933,i__30934,qxme_30942,vec__30935,name,handler))
);

var G__30943 = seq__30931;
var G__30944 = chunk__30932;
var G__30945 = count__30933;
var G__30946 = (i__30934 + (1));
seq__30931 = G__30943;
chunk__30932 = G__30944;
count__30933 = G__30945;
i__30934 = G__30946;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30931);
if(temp__4425__auto__){
var seq__30931__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30931__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__30931__$1);
var G__30947 = cljs.core.chunk_rest.call(null,seq__30931__$1);
var G__30948 = c__5338__auto__;
var G__30949 = cljs.core.count.call(null,c__5338__auto__);
var G__30950 = (0);
seq__30931 = G__30947;
chunk__30932 = G__30948;
count__30933 = G__30949;
i__30934 = G__30950;
continue;
} else {
var vec__30936 = cljs.core.first.call(null,seq__30931__$1);
var name = cljs.core.nth.call(null,vec__30936,(0),null);
var handler = cljs.core.nth.call(null,vec__30936,(1),null);
var qxme_30951 = tiltontec.qxia.base.qxme.call(null,me);
qxme_30951.addListener(name,((function (seq__30931,chunk__30932,count__30933,i__30934,qxme_30951,vec__30936,name,handler,seq__30931__$1,temp__4425__auto__){
return (function (event){
return handler.call(null,event,me);
});})(seq__30931,chunk__30932,count__30933,i__30934,qxme_30951,vec__30936,name,handler,seq__30931__$1,temp__4425__auto__))
);

var G__30952 = cljs.core.next.call(null,seq__30931__$1);
var G__30953 = null;
var G__30954 = (0);
var G__30955 = (0);
seq__30931 = G__30952;
chunk__30932 = G__30953;
count__30933 = G__30954;
i__30934 = G__30955;
continue;
}
} else {
return null;
}
}
break;
}
});
