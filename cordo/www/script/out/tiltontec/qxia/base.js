// Compiled by ClojureScript 1.9.36 {}
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
return app.getRouting();
});
tiltontec.qxia.base.qx_data_array = (function tiltontec$qxia$base$qx_data_array(items){
return (new qx.data.Array(cljs.core.clj__GT_js.call(null,items)));
});
tiltontec.qxia.base.qxia_type_to_qx_class = (function tiltontec$qxia$base$qxia_type_to_qx_class(type){
var G__246149 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__246149) {
case "tiltontec.qxia.types/m.Picker":
return qx.ui.mobile.control.Picker;

break;
case "tiltontec.qxia.types/m.PasswordField":
return qx.ui.mobile.form.PasswordField;

break;
case "tiltontec.qxia.types/Mobile":
return qx.application.Mobile;

break;
case "tiltontec.qxia.types/m.Title":
return qx.ui.mobile.form.Title;

break;
case "tiltontec.qxia.types/m.Button":
return qx.ui.mobile.form.Button;

break;
case "tiltontec.qxia.types/m.Atom":
return qx.ui.mobile.basic.Atom;

break;
case "tiltontec.qxia.types/m.Group":
return qx.ui.mobile.form.Group;

break;
case "tiltontec.qxia.types/m.NumberField":
return qx.ui.mobile.form.NumberField;

break;
case "tiltontec.qxia.types/m.SelectBox":
return qx.ui.mobile.form.SelectBox;

break;
case "tiltontec.qxia.types/m.TextArea":
return qx.ui.mobile.form.TextArea;

break;
case "tiltontec.qxia.types/m.Slider":
return qx.ui.mobile.form.Slider;

break;
case "tiltontec.qxia.types/m.Scroll":
return qx.ui.mobile.container.Scroll;

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
case "tiltontec.qxia.types/m.ToggleButton":
return qx.ui.mobile.form.ToggleButton;

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
case "tiltontec.qxia.types/m.Row":
return qx.ui.mobile.form.Row;

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
case "tiltontec.qxia.types/m.CheckBox":
return qx.ui.mobile.form.CheckBox;

break;
case "tiltontec.qxia.types/m.RadioButton":
return qx.ui.mobile.form.RadioButton;

break;
case "tiltontec.qxia.types/m.RadioGroup":
return qx.ui.mobile.form.RadioGroup;

break;
default:
cljs.core.println.call(null,new cljs.core.Keyword(null,"throwing-type-err","throwing-type-err",983540428),type);

throw (new Error([cljs.core.str("qxia-type-to-qx-class does not know about "),cljs.core.str(type)].join('')));

}
});
tiltontec.qxia.base.qx_class_new = (function tiltontec$qxia$base$qx_class_new(type,iargs){
var G__246152 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__246152) {
case "tiltontec.qxia.types/Mobile":
return null;

break;
case "tiltontec.qxia.types/m.Single":
return null;

break;
case "tiltontec.qxia.types/m.RadioGroupStub":
return null;

break;
default:
var temp__4423__auto__ = (function (){var or__6210__auto__ = ((cljs.core.contains_QMARK_.call(null,iargs,new cljs.core.Keyword(null,"qx-class","qx-class",701821141)))?(function (){var qx_class = new cljs.core.Keyword(null,"qx-class","qx-class",701821141).cljs$core$IFn$_invoke$arity$1(iargs);
if(cljs.core.truth_(qx_class)){
} else {
cljs.core.println.call(null,[cljs.core.str("ERROR! qx-class-new> key class specified but nil "),cljs.core.str("Do we need a new qx class mention in Application.")].join(''));

throw Error;
}

return qx_class;
})():null);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return tiltontec.qxia.base.qxia_type_to_qx_class.call(null,type);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var qx_class = temp__4423__auto__;
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"making","making",-316301090),new cljs.core.Keyword(null,"qx!!!!!","qx!!!!!",1142008348),type,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(iargs),new cljs.core.Keyword(null,"finalclass","finalclass",1652107011),qx_class,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952).cljs$core$IFn$_invoke$arity$1(iargs));

var or__6210__auto__ = cljs.core.apply.call(null,MyTerop.make,qx_class,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952).cljs$core$IFn$_invoke$arity$1(iargs));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
throw (new Error([cljs.core.str("qx-class-new tried making "),cljs.core.str(qx_class),cljs.core.str(" but got back nada.")].join('')));
}
} else {
throw (new Error([cljs.core.str("qx-class-new does not know about "),cljs.core.str(type)].join('')));
}

}
});
cljs.core._add_method.call(null,tiltontec.model.base.md_awaken_before,new cljs.core.Keyword("tiltontec.qxia.types","m.RadioGroupStub","tiltontec.qxia.types/m.RadioGroupStub",-179001450),(function (me){
return null;
}));
cljs.core._add_method.call(null,tiltontec.model.base.md_awaken_before,new cljs.core.Keyword("tiltontec.qxia.types","qx.Object","tiltontec.qxia.types/qx.Object",-1295429520),(function (me){
if(cljs.core.truth_(tiltontec.qxia.base.qxia_type_to_qx_class.call(null,tiltontec.cell.base.ia_type.call(null,me)))){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"0-make-qx","0-make-qx",1229540278),me], null),(function (opcode,defer_info){
if((tiltontec.qxia.base.qxme.call(null,me) == null)){
cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),tiltontec.qxia.base.qx_class_new.call(null,tiltontec.cell.base.ia_type.call(null,me),cljs.core.deref.call(null,me)));
} else {
}

if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,me,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724)))){
} else {
if(cljs.core.truth_(tiltontec.qxia.base.qxme.call(null,me))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("md-awaken-before failed to establish qxme "),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me))].join('')),cljs.core.str("\n"),cljs.core.str("(qxme me)")].join('')));
}
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
var seq__246180_246206 = cljs.core.seq.call(null,cljs.core.reverse.call(null,tiltontec.util.core.fifo_data.call(null,user_q)));
var chunk__246181_246207 = null;
var count__246182_246208 = (0);
var i__246183_246209 = (0);
while(true){
if((i__246183_246209 < count__246182_246208)){
var vec__246184_246210 = cljs.core._nth.call(null,chunk__246181_246207,i__246183_246209);
var vec__246187_246211 = cljs.core.nth.call(null,vec__246184_246210,(0),null);
var qx_defer_code_246212 = cljs.core.nth.call(null,vec__246187_246211,(0),null);
var me_246213 = cljs.core.nth.call(null,vec__246187_246211,(1),null);
var task_246214 = cljs.core.nth.call(null,vec__246184_246210,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([qx_defer_code_246212], true),tiltontec.qxia.base._PLUS_qxl_client_task_priority_PLUS_))){
} else {
throw Error;
}

var G__246215 = seq__246180_246206;
var G__246216 = chunk__246181_246207;
var G__246217 = count__246182_246208;
var G__246218 = (i__246183_246209 + (1));
seq__246180_246206 = G__246215;
chunk__246181_246207 = G__246216;
count__246182_246208 = G__246217;
i__246183_246209 = G__246218;
continue;
} else {
var temp__4425__auto___246219 = cljs.core.seq.call(null,seq__246180_246206);
if(temp__4425__auto___246219){
var seq__246180_246220__$1 = temp__4425__auto___246219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__246180_246220__$1)){
var c__7021__auto___246221 = cljs.core.chunk_first.call(null,seq__246180_246220__$1);
var G__246222 = cljs.core.chunk_rest.call(null,seq__246180_246220__$1);
var G__246223 = c__7021__auto___246221;
var G__246224 = cljs.core.count.call(null,c__7021__auto___246221);
var G__246225 = (0);
seq__246180_246206 = G__246222;
chunk__246181_246207 = G__246223;
count__246182_246208 = G__246224;
i__246183_246209 = G__246225;
continue;
} else {
var vec__246190_246226 = cljs.core.first.call(null,seq__246180_246220__$1);
var vec__246193_246227 = cljs.core.nth.call(null,vec__246190_246226,(0),null);
var qx_defer_code_246228 = cljs.core.nth.call(null,vec__246193_246227,(0),null);
var me_246229 = cljs.core.nth.call(null,vec__246193_246227,(1),null);
var task_246230 = cljs.core.nth.call(null,vec__246190_246226,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([qx_defer_code_246228], true),tiltontec.qxia.base._PLUS_qxl_client_task_priority_PLUS_))){
} else {
throw Error;
}

var G__246231 = cljs.core.next.call(null,seq__246180_246220__$1);
var G__246232 = null;
var G__246233 = (0);
var G__246234 = (0);
seq__246180_246206 = G__246231;
chunk__246181_246207 = G__246232;
count__246182_246208 = G__246233;
i__246183_246209 = G__246234;
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

var seq__246196 = cljs.core.seq.call(null,sorted);
var chunk__246197 = null;
var count__246198 = (0);
var i__246199 = (0);
while(true){
if((i__246199 < count__246198)){
var vec__246200 = cljs.core._nth.call(null,chunk__246197,i__246199);
var defer_info = cljs.core.nth.call(null,vec__246200,(0),null);
var task = cljs.core.nth.call(null,vec__246200,(1),null);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"deffo","deffo",704035049),cljs.core.first.call(null,defer_info));

task.call(null,new cljs.core.Keyword(null,"client-q","client-q",-1752740110),defer_info);

var G__246235 = seq__246196;
var G__246236 = chunk__246197;
var G__246237 = count__246198;
var G__246238 = (i__246199 + (1));
seq__246196 = G__246235;
chunk__246197 = G__246236;
count__246198 = G__246237;
i__246199 = G__246238;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__246196);
if(temp__4425__auto__){
var seq__246196__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__246196__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__246196__$1);
var G__246239 = cljs.core.chunk_rest.call(null,seq__246196__$1);
var G__246240 = c__7021__auto__;
var G__246241 = cljs.core.count.call(null,c__7021__auto__);
var G__246242 = (0);
seq__246196 = G__246239;
chunk__246197 = G__246240;
count__246198 = G__246241;
i__246199 = G__246242;
continue;
} else {
var vec__246203 = cljs.core.first.call(null,seq__246196__$1);
var defer_info = cljs.core.nth.call(null,vec__246203,(0),null);
var task = cljs.core.nth.call(null,vec__246203,(1),null);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"deffo","deffo",704035049),cljs.core.first.call(null,defer_info));

task.call(null,new cljs.core.Keyword(null,"client-q","client-q",-1752740110),defer_info);

var G__246243 = cljs.core.next.call(null,seq__246196__$1);
var G__246244 = null;
var G__246245 = (0);
var G__246246 = (0);
seq__246196 = G__246243;
chunk__246197 = G__246244;
count__246198 = G__246245;
i__246199 = G__246246;
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
tiltontec.qxia.base.qx_initialize = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.base","qx-initialize"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
return null;
}));
tiltontec.qxia.base.qx_obj_properties = (function tiltontec$qxia$base$qx_obj_properties(me){
return cljs.core.map.call(null,cljs.core.keyword,qx.Class.getProperties((function (){var or__6210__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return tiltontec.qxia.base.qxia_type_to_qx_class.call(null,tiltontec.cell.base.ia_type.call(null,me));
}
})()));
});
if(typeof tiltontec.qxia.base.qx_initialize_all !== 'undefined'){
} else {
tiltontec.qxia.base.qx_initialize_all = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.base","qx-initialize-all"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize_all,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724),(function (me){
return null;
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize_all,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
var temp__4425__auto___246261 = (function (){var iter__6990__auto__ = (function tiltontec$qxia$base$iter__246247(s__246248){
return (new cljs.core.LazySeq(null,(function (){
var s__246248__$1 = s__246248;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__246248__$1);
if(temp__4425__auto__){
var s__246248__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__246248__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__246248__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__246250 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__246249 = (0);
while(true){
if((i__246249 < size__6989__auto__)){
var k = cljs.core._nth.call(null,c__6988__auto__,i__246249);
var val = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"init-all","init-all",482505234),me,k);
if(!((val == null))){
cljs.core.chunk_append.call(null,b__246250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null));

var G__246262 = (i__246249 + (1));
i__246249 = G__246262;
continue;
} else {
var G__246263 = (i__246249 + (1));
i__246249 = G__246263;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__246250),tiltontec$qxia$base$iter__246247.call(null,cljs.core.chunk_rest.call(null,s__246248__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__246250),null);
}
} else {
var k = cljs.core.first.call(null,s__246248__$2);
var val = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"init-all","init-all",482505234),me,k);
if(!((val == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null),tiltontec$qxia$base$iter__246247.call(null,cljs.core.rest.call(null,s__246248__$2)));
} else {
var G__246264 = cljs.core.rest.call(null,s__246248__$2);
s__246248__$1 = G__246264;
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
return iter__6990__auto__.call(null,tiltontec.qxia.base.qx_obj_properties.call(null,me));
})();
if(cljs.core.truth_(temp__4425__auto___246261)){
var inits_246265 = temp__4425__auto___246261;
var qx_246266 = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.truth_(qx_246266)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("qx-initialize-all-def> no qxme "),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me))].join('')),cljs.core.str("\n"),cljs.core.str("qx")].join('')));
}

qx_246266.set(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,inits_246265)));
} else {
}

if(cljs.core.truth_(tiltontec.qxia.base.qxme.call(null,me))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("no qx initall "),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me))].join('')),cljs.core.str("\n"),cljs.core.str("(qxme me)")].join('')));
}

var seq__246251 = cljs.core.seq.call(null,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"listeners","listeners",394544445)));
var chunk__246252 = null;
var count__246253 = (0);
var i__246254 = (0);
while(true){
if((i__246254 < count__246253)){
var vec__246255 = cljs.core._nth.call(null,chunk__246252,i__246254);
var name = cljs.core.nth.call(null,vec__246255,(0),null);
var handler = cljs.core.nth.call(null,vec__246255,(1),null);
var qxme_246267 = tiltontec.qxia.base.qxme.call(null,me);
qxme_246267.addListener(name,((function (seq__246251,chunk__246252,count__246253,i__246254,qxme_246267,vec__246255,name,handler){
return (function (event){
return handler.call(null,event,me);
});})(seq__246251,chunk__246252,count__246253,i__246254,qxme_246267,vec__246255,name,handler))
);

var G__246268 = seq__246251;
var G__246269 = chunk__246252;
var G__246270 = count__246253;
var G__246271 = (i__246254 + (1));
seq__246251 = G__246268;
chunk__246252 = G__246269;
count__246253 = G__246270;
i__246254 = G__246271;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__246251);
if(temp__4425__auto__){
var seq__246251__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__246251__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__246251__$1);
var G__246272 = cljs.core.chunk_rest.call(null,seq__246251__$1);
var G__246273 = c__7021__auto__;
var G__246274 = cljs.core.count.call(null,c__7021__auto__);
var G__246275 = (0);
seq__246251 = G__246272;
chunk__246252 = G__246273;
count__246253 = G__246274;
i__246254 = G__246275;
continue;
} else {
var vec__246258 = cljs.core.first.call(null,seq__246251__$1);
var name = cljs.core.nth.call(null,vec__246258,(0),null);
var handler = cljs.core.nth.call(null,vec__246258,(1),null);
var qxme_246276 = tiltontec.qxia.base.qxme.call(null,me);
qxme_246276.addListener(name,((function (seq__246251,chunk__246252,count__246253,i__246254,qxme_246276,vec__246258,name,handler,seq__246251__$1,temp__4425__auto__){
return (function (event){
return handler.call(null,event,me);
});})(seq__246251,chunk__246252,count__246253,i__246254,qxme_246276,vec__246258,name,handler,seq__246251__$1,temp__4425__auto__))
);

var G__246277 = cljs.core.next.call(null,seq__246251__$1);
var G__246278 = null;
var G__246279 = (0);
var G__246280 = (0);
seq__246251 = G__246277;
chunk__246252 = G__246278;
count__246253 = G__246279;
i__246254 = G__246280;
continue;
}
} else {
return null;
}
}
break;
}
}));
if(typeof tiltontec.qxia.base.qx_property_observe !== 'undefined'){
} else {
tiltontec.qxia.base.qx_property_observe = (function (){var method_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7139__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.base","qx-property-observe"),((function (method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__){
return (function (slot,me,new$,old,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,tiltontec.cell.base.ia_type.call(null,me)], null);
});})(method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__,hierarchy__7139__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7139__auto__,method_table__7135__auto__,prefer_table__7136__auto__,method_cache__7137__auto__,cached_hierarchy__7138__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_property_observe,new cljs.core.Keyword(null,"default","default",-1987822328),(function (slot,me,new$,old,c){
var temp__4425__auto__ = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.truth_(temp__4425__auto__)){
var qxme = temp__4425__auto__;
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var sd = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,slot),new$], null)], null));
return qxme.set(cljs.core.clj__GT_js.call(null,sd));
} else {
return null;
}
} else {
return null;
}
}));
tiltontec.qxia.base.qx_observe_default = (function tiltontec$qxia$base$qx_observe_default(slot,me,new$,old,c){
if(cljs.core.truth_((function (){var and__6198__auto__ = !(cljs.core.isa_QMARK_.call(null,tiltontec.cell.base.ia_type.call(null,me),new cljs.core.Keyword("tiltontec.qxia.types","m.RadioGroupStub","tiltontec.qxia.types/m.RadioGroupStub",-179001450)));
if(and__6198__auto__){
var and__6198__auto____$1 = cljs.core.isa_QMARK_.call(null,tiltontec.cell.base.ia_type.call(null,me),new cljs.core.Keyword("tiltontec.qxia.types","qx.Object","tiltontec.qxia.types/qx.Object",-1295429520));
if(and__6198__auto____$1){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([slot], true),tiltontec.qxia.base.qx_obj_properties.call(null,me));
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return tiltontec.qxia.base.qx_property_observe.call(null,slot,me,new$,old,c);
} else {
return null;
}
});
cljs.core.reset_BANG_.call(null,tiltontec.cell.observer._PLUS_observe_default_handler_PLUS_,tiltontec.qxia.base.qx_observe_default);
tiltontec.qxia.base.qx_add_kid = (function tiltontec$qxia$base$qx_add_kid(me,kid){
if(cljs.core.truth_(tiltontec.qxia.base.qxme.call(null,me))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("no qxme me"),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me)),cljs.core.str(me)].join('')),cljs.core.str("\n"),cljs.core.str("(qxme me)")].join('')));
}

if(cljs.core.truth_(tiltontec.qxia.base.qxme.call(null,kid))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("no qxme kid"),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me)),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me))),cljs.core.str(tiltontec.cell.base.ia_type.call(null,kid)),cljs.core.str(kid)].join('')),cljs.core.str("\n"),cljs.core.str("(qxme kid)")].join('')));
}

var temp__4423__auto__ = new cljs.core.Keyword(null,"flex","flex",-1425124628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kid));
if(cljs.core.truth_(temp__4423__auto__)){
var flex = temp__4423__auto__;
return tiltontec.qxia.base.qxme.call(null,me).add(tiltontec.qxia.base.qxme.call(null,kid),{"flex": flex});
} else {
return tiltontec.qxia.base.qxme.call(null,me).add(tiltontec.qxia.base.qxme.call(null,kid));
}
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-class","css-class",-919455334),new cljs.core.Keyword("tiltontec.qxia.types","qx.Object","tiltontec.qxia.types/qx.Object",-1295429520)], null),(function (_,me,new$,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core._EQ_.call(null,old,tiltontec.cell.base.unbound)){
} else {
var oldv_246281 = tiltontec.util.core.ensure_vec.call(null,old);
var lost_246282 = (cljs.core.truth_(new$)?clojure.set.difference.call(null,cljs.core.set.call(null,oldv_246281),cljs.core.set.call(null,tiltontec.util.core.ensure_vec.call(null,new$))):oldv_246281);
if(cljs.core.empty_QMARK_.call(null,lost_246282)){
} else {
tiltontec.qxia.base.qxme.call(null,me).removeCssClasses(cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,lost_246282)));
}
}

if(cljs.core.truth_(new$)){
var newv = tiltontec.util.core.ensure_vec.call(null,new$);
var gained = ((cljs.core._EQ_.call(null,old,tiltontec.cell.base.unbound))?newv:clojure.set.difference.call(null,cljs.core.set.call(null,newv),cljs.core.set.call(null,tiltontec.util.core.ensure_vec.call(null,old))));
if(cljs.core.empty_QMARK_.call(null,gained)){
return null;
} else {
return tiltontec.qxia.base.qxme.call(null,me).addCssClasses(cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,gained)));
}
} else {
return null;
}
}));
}));
