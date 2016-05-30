// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.base');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.model.base');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.qxia.base.qx_types = cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.make_hierarchy.call(null),new cljs.core.Keyword("tiltontec.qxia.base","Application","tiltontec.qxia.base/Application",-514507185),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","Mobile","tiltontec.qxia.base/Mobile",1622995536),new cljs.core.Keyword("tiltontec.qxia.base","Application","tiltontec.qxia.base/Application",-514507185)),new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Page","tiltontec.qxia.base/m.Page",-1360941549),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839)),new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword("tiltontec.qxia.base","m.Page","tiltontec.qxia.base/m.Page",-1360941549)),new cljs.core.Keyword("tiltontec.qxia.base","m.Atom","tiltontec.qxia.base/m.Atom",-1371579407),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Image","tiltontec.qxia.base/m.Image",2135364668),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Button","tiltontec.qxia.base/m.Button",1808800880),new cljs.core.Keyword("tiltontec.qxia.base","m.Atom","tiltontec.qxia.base/m.Atom",-1371579407)),new cljs.core.Keyword("tiltontec.qxia.base","m.Input","tiltontec.qxia.base/m.Input",2096282380),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),new cljs.core.Keyword("tiltontec.qxia.base","m.Input","tiltontec.qxia.base/m.Input",2096282380)),new cljs.core.Keyword("tiltontec.qxia.base","m.PasswordField","tiltontec.qxia.base/m.PasswordField",-559230758),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742));
tiltontec.qxia.base.qx_class_new = (function tiltontec$qxia$base$qx_class_new(type){
var G__12737 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12737) {
case "tiltontec.qxia.base/Mobile":
return null;

break;
case "tiltontec.qxia.base/m.Atom":
return (new qx.ui.mobile.basic.Atom());

break;
case "tiltontec.qxia.base/m.Image":
return (new qx.ui.mobile.basic.Image());

break;
case "tiltontec.qxia.base/m.Label":
return (new qx.ui.mobile.basic.Label());

break;
case "tiltontec.qxia.base/m.NavigationPage":
return (new qx.ui.mobile.page.NavigationPage());

break;
case "tiltontec.qxia.base/m.Button":
return (new qx.ui.mobile.form.Button());

break;
case "tiltontec.qxia.base/m.TextField":
return (new qx.ui.mobile.form.TextField());

break;
case "tiltontec.qxia.base/m.PasswordField":
return (new qx.ui.mobile.form.PasswordField());

break;
case "tiltontec.qxia.base/m.Form":
return (new qx.ui.mobile.form.Form());

break;
default:
throw (new Error([cljs.core.str("qx-class-new does not know about "),cljs.core.str(type)].join('')));

}
});
tiltontec.qxia.base.qxia_type_to_qx_class = (function tiltontec$qxia$base$qxia_type_to_qx_class(type){
var G__12740 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12740) {
case "tiltontec.qxia.base/Mobile":
return qx.application.Mobile;

break;
case "tiltontec.qxia.base/m.Atom":
return qx.ui.mobile.basic.Atom;

break;
case "tiltontec.qxia.base/m.Image":
return qx.ui.mobile.basic.Image;

break;
case "tiltontec.qxia.base/m.Label":
return qx.ui.mobile.basic.Label;

break;
case "tiltontec.qxia.base/m.NavigationPage":
return qx.ui.mobile.page.NavigationPage;

break;
case "tiltontec.qxia.base/m.Form":
return qx.ui.mobile.form.Form;

break;
case "tiltontec.qxia.base/m.Button":
return qx.ui.mobile.form.Button;

break;
case "tiltontec.qxia.base/m.TextField":
return qx.ui.mobile.form.TextField;

break;
case "tiltontec.qxia.base/m.PasswordField":
return qx.ui.mobile.form.PasswordField;

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
var hierarchy__5452__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
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
var seq__12746 = cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,tiltontec.cell.base.ia_type.call(null,me),cljs.core.ancestors.call(null,tiltontec.qxia.base.qx_types,tiltontec.cell.base.ia_type.call(null,me)))));
var chunk__12747 = null;
var count__12748 = (0);
var i__12749 = (0);
while(true){
if((i__12749 < count__12748)){
var type = cljs.core._nth.call(null,chunk__12747,i__12749);
tiltontec.qxia.base.qx_initialize.call(null,type,me);

var G__12750 = seq__12746;
var G__12751 = chunk__12747;
var G__12752 = count__12748;
var G__12753 = (i__12749 + (1));
seq__12746 = G__12750;
chunk__12747 = G__12751;
count__12748 = G__12752;
i__12749 = G__12753;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12746);
if(temp__4425__auto__){
var seq__12746__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12746__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__12746__$1);
var G__12754 = cljs.core.chunk_rest.call(null,seq__12746__$1);
var G__12755 = c__5338__auto__;
var G__12756 = cljs.core.count.call(null,c__5338__auto__);
var G__12757 = (0);
seq__12746 = G__12754;
chunk__12747 = G__12755;
count__12748 = G__12756;
i__12749 = G__12757;
continue;
} else {
var type = cljs.core.first.call(null,seq__12746__$1);
tiltontec.qxia.base.qx_initialize.call(null,type,me);

var G__12758 = cljs.core.next.call(null,seq__12746__$1);
var G__12759 = null;
var G__12760 = (0);
var G__12761 = (0);
seq__12746 = G__12758;
chunk__12747 = G__12759;
count__12748 = G__12760;
i__12749 = G__12761;
continue;
}
} else {
return null;
}
}
break;
}
});
tiltontec.qxia.base.qx_initialize_all = (function tiltontec$qxia$base$qx_initialize_all(me){
var temp__4425__auto___12782 = (function (){var iter__5307__auto__ = (function tiltontec$qxia$base$qx_initialize_all_$_iter__12772(s__12773){
return (new cljs.core.LazySeq(null,(function (){
var s__12773__$1 = s__12773;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12773__$1);
if(temp__4425__auto__){
var s__12773__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12773__$2)){
var c__5305__auto__ = cljs.core.chunk_first.call(null,s__12773__$2);
var size__5306__auto__ = cljs.core.count.call(null,c__5305__auto__);
var b__12775 = cljs.core.chunk_buffer.call(null,size__5306__auto__);
if((function (){var i__12774 = (0);
while(true){
if((i__12774 < size__5306__auto__)){
var k = cljs.core._nth.call(null,c__5305__auto__,i__12774);
var val = tiltontec.model.base.md_get.call(null,me,k);
if(!((val == null))){
cljs.core.chunk_append.call(null,b__12775,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null));

var G__12783 = (i__12774 + (1));
i__12774 = G__12783;
continue;
} else {
var G__12784 = (i__12774 + (1));
i__12774 = G__12784;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12775),tiltontec$qxia$base$qx_initialize_all_$_iter__12772.call(null,cljs.core.chunk_rest.call(null,s__12773__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12775),null);
}
} else {
var k = cljs.core.first.call(null,s__12773__$2);
var val = tiltontec.model.base.md_get.call(null,me,k);
if(!((val == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null),tiltontec$qxia$base$qx_initialize_all_$_iter__12772.call(null,cljs.core.rest.call(null,s__12773__$2)));
} else {
var G__12785 = cljs.core.rest.call(null,s__12773__$2);
s__12773__$1 = G__12785;
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
if(cljs.core.truth_(temp__4425__auto___12782)){
var inits_12786 = temp__4425__auto___12782;
new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)).set(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,inits_12786)));
} else {
}

var seq__12776 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"listeners","listeners",394544445)));
var chunk__12777 = null;
var count__12778 = (0);
var i__12779 = (0);
while(true){
if((i__12779 < count__12778)){
var vec__12780 = cljs.core._nth.call(null,chunk__12777,i__12779);
var name = cljs.core.nth.call(null,vec__12780,(0),null);
var handler = cljs.core.nth.call(null,vec__12780,(1),null);
var qxme_12787 = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
qxme_12787.addListener(name,((function (seq__12776,chunk__12777,count__12778,i__12779,qxme_12787,vec__12780,name,handler){
return (function (event){
return handler.call(null,event,me);
});})(seq__12776,chunk__12777,count__12778,i__12779,qxme_12787,vec__12780,name,handler))
);

var G__12788 = seq__12776;
var G__12789 = chunk__12777;
var G__12790 = count__12778;
var G__12791 = (i__12779 + (1));
seq__12776 = G__12788;
chunk__12777 = G__12789;
count__12778 = G__12790;
i__12779 = G__12791;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12776);
if(temp__4425__auto__){
var seq__12776__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12776__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__12776__$1);
var G__12792 = cljs.core.chunk_rest.call(null,seq__12776__$1);
var G__12793 = c__5338__auto__;
var G__12794 = cljs.core.count.call(null,c__5338__auto__);
var G__12795 = (0);
seq__12776 = G__12792;
chunk__12777 = G__12793;
count__12778 = G__12794;
i__12779 = G__12795;
continue;
} else {
var vec__12781 = cljs.core.first.call(null,seq__12776__$1);
var name = cljs.core.nth.call(null,vec__12781,(0),null);
var handler = cljs.core.nth.call(null,vec__12781,(1),null);
var qxme_12796 = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
qxme_12796.addListener(name,((function (seq__12776,chunk__12777,count__12778,i__12779,qxme_12796,vec__12781,name,handler,seq__12776__$1,temp__4425__auto__){
return (function (event){
return handler.call(null,event,me);
});})(seq__12776,chunk__12777,count__12778,i__12779,qxme_12796,vec__12781,name,handler,seq__12776__$1,temp__4425__auto__))
);

var G__12797 = cljs.core.next.call(null,seq__12776__$1);
var G__12798 = null;
var G__12799 = (0);
var G__12800 = (0);
seq__12776 = G__12797;
chunk__12777 = G__12798;
count__12778 = G__12799;
i__12779 = G__12800;
continue;
}
} else {
return null;
}
}
break;
}
});
