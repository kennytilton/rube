// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.base');
goog.require('cljs.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.util.core');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.model.base');
goog.require('tiltontec.model.core');
goog.require('clojure.set');
goog.require('tiltontec.util.base');

tiltontec.qxia.base.qxme = (function tiltontec$qxia$base$qxme(me){
return new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.qxia.base.app_routing = (function tiltontec$qxia$base$app_routing(){
var app = qx.core.Init.getApplication();
cljs.core.println.call(null,new cljs.core.Keyword(null,"app!!!!!!!!!!!","app!!!!!!!!!!!",-1475663645),app);

if(cljs.core.truth_(app)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("app touyign"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"app","app",1079569820,null)))].join('')));
}

return app.getRouting();
});
tiltontec.qxia.base.qxia_type_to_qx_class = (function tiltontec$qxia$base$qxia_type_to_qx_class(type){
var G__23737 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23737) {
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
return identica.NaviBack;

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
var G__23740 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23740) {
case "tiltontec.qxia.types/Mobile":
return null;

break;
case "tiltontec.qxia.types/m.Single":
return null;

break;
default:
var temp__4423__auto__ = (function (){var or__4554__auto__ = ((cljs.core.contains_QMARK_.call(null,iargs,new cljs.core.Keyword(null,"qx-class","qx-class",701821141)))?(function (){var qx_class = new cljs.core.Keyword(null,"qx-class","qx-class",701821141).cljs$core$IFn$_invoke$arity$1(iargs);
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
cljs.core._add_method.call(null,tiltontec.model.base.md_awaken_before,new cljs.core.Keyword("tiltontec.qxia.types","qx.Object","tiltontec.qxia.types/qx.Object",-1295429520),(function (me){
if(cljs.core.truth_(tiltontec.qxia.base.qxia_type_to_qx_class.call(null,tiltontec.cell.base.ia_type.call(null,me)))){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"0-make-qx","0-make-qx",1229540278),me], null),(function (opcode,defer_info){
if((tiltontec.qxia.base.qxme.call(null,me) == null)){
cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),tiltontec.qxia.base.qx_class_new.call(null,tiltontec.cell.base.ia_type.call(null,me),cljs.core.deref.call(null,me)));
} else {
}

tiltontec.qxia.base.qx_initialize.call(null,me);

return tiltontec.qxia.base.qx_initialize_all.call(null,me);
}));
} else {
return null;
}
}));
tiltontec.qxia.base._PLUS_qxl_client_task_priority_PLUS_ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"0-make-qx","0-make-qx",1229540278),new cljs.core.Keyword(null,"1-layout","1-layout",603251836),new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),new cljs.core.Keyword(null,"3-post-assembly","3-post-assembly",-607469254)], null);
tiltontec.qxia.base.qxia_q_handler = (function tiltontec$qxia$base$qxia_q_handler(user_q){
var seq__23756_23770 = cljs.core.seq.call(null,cljs.core.reverse.call(null,tiltontec.util.core.fifo_data.call(null,user_q)));
var chunk__23757_23771 = null;
var count__23758_23772 = (0);
var i__23759_23773 = (0);
while(true){
if((i__23759_23773 < count__23758_23772)){
var vec__23760_23774 = cljs.core._nth.call(null,chunk__23757_23771,i__23759_23773);
var vec__23761_23775 = cljs.core.nth.call(null,vec__23760_23774,(0),null);
var qx_defer_code_23776 = cljs.core.nth.call(null,vec__23761_23775,(0),null);
var me_23777 = cljs.core.nth.call(null,vec__23761_23775,(1),null);
var task_23778 = cljs.core.nth.call(null,vec__23760_23774,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([qx_defer_code_23776], true),tiltontec.qxia.base._PLUS_qxl_client_task_priority_PLUS_))){
} else {
throw Error;
}

var G__23779 = seq__23756_23770;
var G__23780 = chunk__23757_23771;
var G__23781 = count__23758_23772;
var G__23782 = (i__23759_23773 + (1));
seq__23756_23770 = G__23779;
chunk__23757_23771 = G__23780;
count__23758_23772 = G__23781;
i__23759_23773 = G__23782;
continue;
} else {
var temp__4425__auto___23783 = cljs.core.seq.call(null,seq__23756_23770);
if(temp__4425__auto___23783){
var seq__23756_23784__$1 = temp__4425__auto___23783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23756_23784__$1)){
var c__5338__auto___23785 = cljs.core.chunk_first.call(null,seq__23756_23784__$1);
var G__23786 = cljs.core.chunk_rest.call(null,seq__23756_23784__$1);
var G__23787 = c__5338__auto___23785;
var G__23788 = cljs.core.count.call(null,c__5338__auto___23785);
var G__23789 = (0);
seq__23756_23770 = G__23786;
chunk__23757_23771 = G__23787;
count__23758_23772 = G__23788;
i__23759_23773 = G__23789;
continue;
} else {
var vec__23762_23790 = cljs.core.first.call(null,seq__23756_23784__$1);
var vec__23763_23791 = cljs.core.nth.call(null,vec__23762_23790,(0),null);
var qx_defer_code_23792 = cljs.core.nth.call(null,vec__23763_23791,(0),null);
var me_23793 = cljs.core.nth.call(null,vec__23763_23791,(1),null);
var task_23794 = cljs.core.nth.call(null,vec__23762_23790,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([qx_defer_code_23792], true),tiltontec.qxia.base._PLUS_qxl_client_task_priority_PLUS_))){
} else {
throw Error;
}

var G__23795 = cljs.core.next.call(null,seq__23756_23784__$1);
var G__23796 = null;
var G__23797 = (0);
var G__23798 = (0);
seq__23756_23770 = G__23795;
chunk__23757_23771 = G__23796;
count__23758_23772 = G__23797;
i__23759_23773 = G__23798;
continue;
}
} else {
}
}
break;
}

var sorted = (function (){var data = tiltontec.util.core.fifo_data.call(null,user_q);
return cljs.core.sort_by.call(null,cljs.core.ffirst,data);
})();
tiltontec.util.core.fifo_clear.call(null,user_q);

var seq__23764 = cljs.core.seq.call(null,sorted);
var chunk__23765 = null;
var count__23766 = (0);
var i__23767 = (0);
while(true){
if((i__23767 < count__23766)){
var vec__23768 = cljs.core._nth.call(null,chunk__23765,i__23767);
var defer_info = cljs.core.nth.call(null,vec__23768,(0),null);
var task = cljs.core.nth.call(null,vec__23768,(1),null);
task.call(null,new cljs.core.Keyword(null,"client-q","client-q",-1752740110),defer_info);

var G__23799 = seq__23764;
var G__23800 = chunk__23765;
var G__23801 = count__23766;
var G__23802 = (i__23767 + (1));
seq__23764 = G__23799;
chunk__23765 = G__23800;
count__23766 = G__23801;
i__23767 = G__23802;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23764);
if(temp__4425__auto__){
var seq__23764__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23764__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__23764__$1);
var G__23803 = cljs.core.chunk_rest.call(null,seq__23764__$1);
var G__23804 = c__5338__auto__;
var G__23805 = cljs.core.count.call(null,c__5338__auto__);
var G__23806 = (0);
seq__23764 = G__23803;
chunk__23765 = G__23804;
count__23766 = G__23805;
i__23767 = G__23806;
continue;
} else {
var vec__23769 = cljs.core.first.call(null,seq__23764__$1);
var defer_info = cljs.core.nth.call(null,vec__23769,(0),null);
var task = cljs.core.nth.call(null,vec__23769,(1),null);
task.call(null,new cljs.core.Keyword(null,"client-q","client-q",-1752740110),defer_info);

var G__23807 = cljs.core.next.call(null,seq__23764__$1);
var G__23808 = null;
var G__23809 = (0);
var G__23810 = (0);
seq__23764 = G__23807;
chunk__23765 = G__23808;
count__23766 = G__23809;
i__23767 = G__23810;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.reset_BANG_.call(null,tiltontec.cell.base._PLUS_client_q_handler_PLUS_,tiltontec.qxia.base.qxia_q_handler);
if(typeof tiltontec.qxia.base.qx_initialize !== 'undefined'){
} else {
tiltontec.qxia.base.qx_initialize = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return tiltontec.cell.base.ia_types;},new cljs.core.Symbol("tiltontec.cell.base","ia-types","tiltontec.cell.base/ia-types",436375603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.cell.base","tiltontec.cell.base",-1575671422,null),new cljs.core.Symbol(null,"ia-types","ia-types",322849110,null),"src/tiltontec/cell/base.cljc",14,1,107,107,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.cell.base.ia_types)?tiltontec.cell.base.ia_types.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
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
if(typeof tiltontec.qxia.base.qx_initialize_all !== 'undefined'){
} else {
tiltontec.qxia.base.qx_initialize_all = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.base","qx-initialize-all"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize_all,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724),(function (me){
return null;
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize_all,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
var temp__4425__auto___23821 = (function (){var iter__5307__auto__ = (function tiltontec$qxia$base$iter__23811(s__23812){
return (new cljs.core.LazySeq(null,(function (){
var s__23812__$1 = s__23812;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23812__$1);
if(temp__4425__auto__){
var s__23812__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23812__$2)){
var c__5305__auto__ = cljs.core.chunk_first.call(null,s__23812__$2);
var size__5306__auto__ = cljs.core.count.call(null,c__5305__auto__);
var b__23814 = cljs.core.chunk_buffer.call(null,size__5306__auto__);
if((function (){var i__23813 = (0);
while(true){
if((i__23813 < size__5306__auto__)){
var k = cljs.core._nth.call(null,c__5305__auto__,i__23813);
var val = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"init-all","init-all",482505234),me,k);
if(!((val == null))){
cljs.core.chunk_append.call(null,b__23814,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null));

var G__23822 = (i__23813 + (1));
i__23813 = G__23822;
continue;
} else {
var G__23823 = (i__23813 + (1));
i__23813 = G__23823;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23814),tiltontec$qxia$base$iter__23811.call(null,cljs.core.chunk_rest.call(null,s__23812__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23814),null);
}
} else {
var k = cljs.core.first.call(null,s__23812__$2);
var val = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"init-all","init-all",482505234),me,k);
if(!((val == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null),tiltontec$qxia$base$iter__23811.call(null,cljs.core.rest.call(null,s__23812__$2)));
} else {
var G__23824 = cljs.core.rest.call(null,s__23812__$2);
s__23812__$1 = G__23824;
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
if(cljs.core.truth_(temp__4425__auto___23821)){
var inits_23825 = temp__4425__auto___23821;
var qx_23826 = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.truth_(qx_23826)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("no qxme "),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"qx","qx",876946123,null)))].join('')));
}

qx_23826.set(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,inits_23825)));
} else {
}

if(cljs.core.truth_(tiltontec.qxia.base.qxme.call(null,me))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("no qx initall "),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"qxme","qxme",352016329,null),new cljs.core.Symbol(null,"me","me",1501524834,null))))].join('')));
}

var temp__4425__auto___23827 = new cljs.core.Keyword(null,"css-class","css-class",-919455334).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___23827)){
var c_23828 = temp__4425__auto___23827;
if(cljs.core.coll_QMARK_.call(null,c_23828)){
var cs_23829 = cljs.core.vec.call(null,c_23828);
tiltontec.qxia.base.qxme.call(null,me).addCssClasses(cljs.core.clj__GT_js.call(null,cs_23829));
} else {
tiltontec.qxia.base.qxme.call(null,me).addCssClass(c_23828);
}
} else {
}

var seq__23815 = cljs.core.seq.call(null,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"listeners","listeners",394544445)));
var chunk__23816 = null;
var count__23817 = (0);
var i__23818 = (0);
while(true){
if((i__23818 < count__23817)){
var vec__23819 = cljs.core._nth.call(null,chunk__23816,i__23818);
var name = cljs.core.nth.call(null,vec__23819,(0),null);
var handler = cljs.core.nth.call(null,vec__23819,(1),null);
var qxme_23830 = tiltontec.qxia.base.qxme.call(null,me);
qxme_23830.addListener(name,((function (seq__23815,chunk__23816,count__23817,i__23818,qxme_23830,vec__23819,name,handler){
return (function (event){
return handler.call(null,event,me);
});})(seq__23815,chunk__23816,count__23817,i__23818,qxme_23830,vec__23819,name,handler))
);

var G__23831 = seq__23815;
var G__23832 = chunk__23816;
var G__23833 = count__23817;
var G__23834 = (i__23818 + (1));
seq__23815 = G__23831;
chunk__23816 = G__23832;
count__23817 = G__23833;
i__23818 = G__23834;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23815);
if(temp__4425__auto__){
var seq__23815__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23815__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__23815__$1);
var G__23835 = cljs.core.chunk_rest.call(null,seq__23815__$1);
var G__23836 = c__5338__auto__;
var G__23837 = cljs.core.count.call(null,c__5338__auto__);
var G__23838 = (0);
seq__23815 = G__23835;
chunk__23816 = G__23836;
count__23817 = G__23837;
i__23818 = G__23838;
continue;
} else {
var vec__23820 = cljs.core.first.call(null,seq__23815__$1);
var name = cljs.core.nth.call(null,vec__23820,(0),null);
var handler = cljs.core.nth.call(null,vec__23820,(1),null);
var qxme_23839 = tiltontec.qxia.base.qxme.call(null,me);
qxme_23839.addListener(name,((function (seq__23815,chunk__23816,count__23817,i__23818,qxme_23839,vec__23820,name,handler,seq__23815__$1,temp__4425__auto__){
return (function (event){
return handler.call(null,event,me);
});})(seq__23815,chunk__23816,count__23817,i__23818,qxme_23839,vec__23820,name,handler,seq__23815__$1,temp__4425__auto__))
);

var G__23840 = cljs.core.next.call(null,seq__23815__$1);
var G__23841 = null;
var G__23842 = (0);
var G__23843 = (0);
seq__23815 = G__23840;
chunk__23816 = G__23841;
count__23817 = G__23842;
i__23818 = G__23843;
continue;
}
} else {
return null;
}
}
break;
}
}));
tiltontec.qxia.base.qx_add_kid = (function tiltontec$qxia$base$qx_add_kid(me,kid){
var temp__4423__auto__ = new cljs.core.Keyword(null,"flex","flex",-1425124628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kid));
if(cljs.core.truth_(temp__4423__auto__)){
var flex = temp__4423__auto__;
return tiltontec.qxia.base.qxme.call(null,me).add(tiltontec.qxia.base.qxme.call(null,kid),{"flex": flex});
} else {
return tiltontec.qxia.base.qxme.call(null,me).add(tiltontec.qxia.base.qxme.call(null,kid));
}
});
