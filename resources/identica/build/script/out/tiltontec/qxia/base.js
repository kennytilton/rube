// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.base');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.model.base');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.qxia.base.qx_types = cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.make_hierarchy.call(null),new cljs.core.Keyword("tiltontec.qxia.base","Application","tiltontec.qxia.base/Application",-514507185),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","Mobile","tiltontec.qxia.base/Mobile",1622995536),new cljs.core.Keyword("tiltontec.qxia.base","Application","tiltontec.qxia.base/Application",-514507185)),new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189)),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Page","tiltontec.qxia.base/m.Page",-1360941549),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839)),new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword("tiltontec.qxia.base","m.Page","tiltontec.qxia.base/m.Page",-1360941549)),new cljs.core.Keyword("tiltontec.qxia.base","m.Atom","tiltontec.qxia.base/m.Atom",-1371579407),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Image","tiltontec.qxia.base/m.Image",2135364668),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.Button","tiltontec.qxia.base/m.Button",1808800880),new cljs.core.Keyword("tiltontec.qxia.base","m.Atom","tiltontec.qxia.base/m.Atom",-1371579407)),new cljs.core.Keyword("tiltontec.qxia.base","m.Input","tiltontec.qxia.base/m.Input",2096282380),new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915)),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),new cljs.core.Keyword("tiltontec.qxia.base","m.Input","tiltontec.qxia.base/m.Input",2096282380)),new cljs.core.Keyword("tiltontec.qxia.base","m.PasswordField","tiltontec.qxia.base/m.PasswordField",-559230758),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742));
tiltontec.qxia.base.qx_class_new = (function tiltontec$qxia$base$qx_class_new(type){
var G__24063 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24063) {
case "tiltontec.qxia.base/m.Mobile":
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
if(typeof tiltontec.qxia.base.qx_finalize !== 'undefined'){
} else {
tiltontec.qxia.base.qx_finalize = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.base","qx-finalize"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_finalize,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
return null;
}));
if(typeof tiltontec.qxia.base.qx_type_properties !== 'undefined'){
} else {
tiltontec.qxia.base.qx_type_properties = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.base","qx-type-properties"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_type_properties,new cljs.core.Keyword(null,"default","default",-1987822328),(function (nope){
return cljs.core.PersistentHashSet.EMPTY;
}));
tiltontec.qxia.base.qx_obj_properties = (function tiltontec$qxia$base$qx_obj_properties(me){
var G__24070 = cljs.core.vec.call(null,cljs.core.list_STAR_.call(null,tiltontec.cell.base.ia_type.call(null,me),cljs.core.ancestors.call(null,tiltontec.qxia.base.qx_types,tiltontec.cell.base.ia_type.call(null,me))));
var vec__24071 = G__24070;
var type = cljs.core.nth.call(null,vec__24071,(0),null);
var more = cljs.core.nthnext.call(null,vec__24071,(1));
var properties = cljs.core.PersistentArrayMap.EMPTY;
var G__24070__$1 = G__24070;
var properties__$1 = properties;
while(true){
var vec__24072 = G__24070__$1;
var type__$1 = cljs.core.nth.call(null,vec__24072,(0),null);
var more__$1 = cljs.core.nthnext.call(null,vec__24072,(1));
var properties__$2 = properties__$1;
if(cljs.core.truth_(type__$1)){
var G__24073 = more__$1;
var G__24074 = clojure.set.union.call(null,tiltontec.qxia.base.qx_type_properties.call(null,type__$1),properties__$2);
G__24070__$1 = G__24073;
properties__$1 = G__24074;
continue;
} else {
return properties__$2;

}
break;
}
});
tiltontec.qxia.base.qx_finalize_all = (function tiltontec$qxia$base$qx_finalize_all(me){
var temp__4425__auto___24095 = (function (){var iter__5307__auto__ = (function tiltontec$qxia$base$qx_finalize_all_$_iter__24085(s__24086){
return (new cljs.core.LazySeq(null,(function (){
var s__24086__$1 = s__24086;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24086__$1);
if(temp__4425__auto__){
var s__24086__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24086__$2)){
var c__5305__auto__ = cljs.core.chunk_first.call(null,s__24086__$2);
var size__5306__auto__ = cljs.core.count.call(null,c__5305__auto__);
var b__24088 = cljs.core.chunk_buffer.call(null,size__5306__auto__);
if((function (){var i__24087 = (0);
while(true){
if((i__24087 < size__5306__auto__)){
var k = cljs.core._nth.call(null,c__5305__auto__,i__24087);
var val = tiltontec.model.base.md_get.call(null,me,k);
if(!((val == null))){
cljs.core.chunk_append.call(null,b__24088,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null));

var G__24096 = (i__24087 + (1));
i__24087 = G__24096;
continue;
} else {
var G__24097 = (i__24087 + (1));
i__24087 = G__24097;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24088),tiltontec$qxia$base$qx_finalize_all_$_iter__24085.call(null,cljs.core.chunk_rest.call(null,s__24086__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24088),null);
}
} else {
var k = cljs.core.first.call(null,s__24086__$2);
var val = tiltontec.model.base.md_get.call(null,me,k);
if(!((val == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null),tiltontec$qxia$base$qx_finalize_all_$_iter__24085.call(null,cljs.core.rest.call(null,s__24086__$2)));
} else {
var G__24098 = cljs.core.rest.call(null,s__24086__$2);
s__24086__$1 = G__24098;
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
if(cljs.core.truth_(temp__4425__auto___24095)){
var inits_24099 = temp__4425__auto___24095;
new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)).set(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,inits_24099)));
} else {
}

var seq__24089 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"listeners","listeners",394544445)));
var chunk__24090 = null;
var count__24091 = (0);
var i__24092 = (0);
while(true){
if((i__24092 < count__24091)){
var vec__24093 = cljs.core._nth.call(null,chunk__24090,i__24092);
var name = cljs.core.nth.call(null,vec__24093,(0),null);
var handler = cljs.core.nth.call(null,vec__24093,(1),null);
tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059)).addListener(name,handler);

var G__24100 = seq__24089;
var G__24101 = chunk__24090;
var G__24102 = count__24091;
var G__24103 = (i__24092 + (1));
seq__24089 = G__24100;
chunk__24090 = G__24101;
count__24091 = G__24102;
i__24092 = G__24103;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24089);
if(temp__4425__auto__){
var seq__24089__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24089__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__24089__$1);
var G__24104 = cljs.core.chunk_rest.call(null,seq__24089__$1);
var G__24105 = c__5338__auto__;
var G__24106 = cljs.core.count.call(null,c__5338__auto__);
var G__24107 = (0);
seq__24089 = G__24104;
chunk__24090 = G__24105;
count__24091 = G__24106;
i__24092 = G__24107;
continue;
} else {
var vec__24094 = cljs.core.first.call(null,seq__24089__$1);
var name = cljs.core.nth.call(null,vec__24094,(0),null);
var handler = cljs.core.nth.call(null,vec__24094,(1),null);
tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059)).addListener(name,handler);

var G__24108 = cljs.core.next.call(null,seq__24089__$1);
var G__24109 = null;
var G__24110 = (0);
var G__24111 = (0);
seq__24089 = G__24108;
chunk__24090 = G__24109;
count__24091 = G__24110;
i__24092 = G__24111;
continue;
}
} else {
return null;
}
}
break;
}
});
