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
cljs.core.println.call(null,new cljs.core.Keyword(null,"app!!!!!!!!!!!","app!!!!!!!!!!!",-1475663645),app);

if(cljs.core.truth_(app)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("app touyign"),cljs.core.str("\n"),cljs.core.str("app")].join('')));
}

return app.getRouting();
});
tiltontec.qxia.base.qxia_type_to_qx_class = (function tiltontec$qxia$base$qxia_type_to_qx_class(type){
var G__28076 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28076) {
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
case "tiltontec.qxia.types/m.TextArea":
return qx.ui.mobile.form.TextArea;

break;
case "tiltontec.qxia.types/m.Slider":
return qx.ui.mobile.form.Slider;

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
case "tiltontec.qxia.types/m.RadioButtone":
return qx.ui.mobile.form.RadioButton;

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
case "tiltontec.qxia.types/m.RadioGroup":
return qx.ui.mobile.form.RadioGroup;

break;
default:
throw (new Error([cljs.core.str("qxia-type-to-qx-class does not know about "),cljs.core.str(type)].join('')));

}
});
tiltontec.qxia.base.qx_class_new = (function tiltontec$qxia$base$qx_class_new(type,iargs){
var G__28079 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28079) {
case "tiltontec.qxia.types/Mobile":
return null;

break;
case "tiltontec.qxia.types/m.Single":
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
var seq__28107_28133 = cljs.core.seq.call(null,cljs.core.reverse.call(null,tiltontec.util.core.fifo_data.call(null,user_q)));
var chunk__28108_28134 = null;
var count__28109_28135 = (0);
var i__28110_28136 = (0);
while(true){
if((i__28110_28136 < count__28109_28135)){
var vec__28111_28137 = cljs.core._nth.call(null,chunk__28108_28134,i__28110_28136);
var vec__28114_28138 = cljs.core.nth.call(null,vec__28111_28137,(0),null);
var qx_defer_code_28139 = cljs.core.nth.call(null,vec__28114_28138,(0),null);
var me_28140 = cljs.core.nth.call(null,vec__28114_28138,(1),null);
var task_28141 = cljs.core.nth.call(null,vec__28111_28137,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([qx_defer_code_28139], true),tiltontec.qxia.base._PLUS_qxl_client_task_priority_PLUS_))){
} else {
throw Error;
}

var G__28142 = seq__28107_28133;
var G__28143 = chunk__28108_28134;
var G__28144 = count__28109_28135;
var G__28145 = (i__28110_28136 + (1));
seq__28107_28133 = G__28142;
chunk__28108_28134 = G__28143;
count__28109_28135 = G__28144;
i__28110_28136 = G__28145;
continue;
} else {
var temp__4425__auto___28146 = cljs.core.seq.call(null,seq__28107_28133);
if(temp__4425__auto___28146){
var seq__28107_28147__$1 = temp__4425__auto___28146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28107_28147__$1)){
var c__7021__auto___28148 = cljs.core.chunk_first.call(null,seq__28107_28147__$1);
var G__28149 = cljs.core.chunk_rest.call(null,seq__28107_28147__$1);
var G__28150 = c__7021__auto___28148;
var G__28151 = cljs.core.count.call(null,c__7021__auto___28148);
var G__28152 = (0);
seq__28107_28133 = G__28149;
chunk__28108_28134 = G__28150;
count__28109_28135 = G__28151;
i__28110_28136 = G__28152;
continue;
} else {
var vec__28117_28153 = cljs.core.first.call(null,seq__28107_28147__$1);
var vec__28120_28154 = cljs.core.nth.call(null,vec__28117_28153,(0),null);
var qx_defer_code_28155 = cljs.core.nth.call(null,vec__28120_28154,(0),null);
var me_28156 = cljs.core.nth.call(null,vec__28120_28154,(1),null);
var task_28157 = cljs.core.nth.call(null,vec__28117_28153,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([qx_defer_code_28155], true),tiltontec.qxia.base._PLUS_qxl_client_task_priority_PLUS_))){
} else {
throw Error;
}

var G__28158 = cljs.core.next.call(null,seq__28107_28147__$1);
var G__28159 = null;
var G__28160 = (0);
var G__28161 = (0);
seq__28107_28133 = G__28158;
chunk__28108_28134 = G__28159;
count__28109_28135 = G__28160;
i__28110_28136 = G__28161;
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

var seq__28123 = cljs.core.seq.call(null,sorted);
var chunk__28124 = null;
var count__28125 = (0);
var i__28126 = (0);
while(true){
if((i__28126 < count__28125)){
var vec__28127 = cljs.core._nth.call(null,chunk__28124,i__28126);
var defer_info = cljs.core.nth.call(null,vec__28127,(0),null);
var task = cljs.core.nth.call(null,vec__28127,(1),null);
task.call(null,new cljs.core.Keyword(null,"client-q","client-q",-1752740110),defer_info);

var G__28162 = seq__28123;
var G__28163 = chunk__28124;
var G__28164 = count__28125;
var G__28165 = (i__28126 + (1));
seq__28123 = G__28162;
chunk__28124 = G__28163;
count__28125 = G__28164;
i__28126 = G__28165;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28123);
if(temp__4425__auto__){
var seq__28123__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28123__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__28123__$1);
var G__28166 = cljs.core.chunk_rest.call(null,seq__28123__$1);
var G__28167 = c__7021__auto__;
var G__28168 = cljs.core.count.call(null,c__7021__auto__);
var G__28169 = (0);
seq__28123 = G__28166;
chunk__28124 = G__28167;
count__28125 = G__28168;
i__28126 = G__28169;
continue;
} else {
var vec__28130 = cljs.core.first.call(null,seq__28123__$1);
var defer_info = cljs.core.nth.call(null,vec__28130,(0),null);
var task = cljs.core.nth.call(null,vec__28130,(1),null);
task.call(null,new cljs.core.Keyword(null,"client-q","client-q",-1752740110),defer_info);

var G__28170 = cljs.core.next.call(null,seq__28123__$1);
var G__28171 = null;
var G__28172 = (0);
var G__28173 = (0);
seq__28123 = G__28170;
chunk__28124 = G__28171;
count__28125 = G__28172;
i__28126 = G__28173;
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
var hierarchy__7139__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return tiltontec.cell.base.ia_types;},new cljs.core.Symbol("tiltontec.cell.base","ia-types","tiltontec.cell.base/ia-types",436375603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.cell.base","tiltontec.cell.base",-1575671422,null),new cljs.core.Symbol(null,"ia-types","ia-types",322849110,null),"src/tiltontec/cell/base.cljc",14,1,107,107,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.cell.base.ia_types)?tiltontec.cell.base.ia_types.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
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
var temp__4425__auto___28188 = (function (){var iter__6990__auto__ = (function tiltontec$qxia$base$iter__28174(s__28175){
return (new cljs.core.LazySeq(null,(function (){
var s__28175__$1 = s__28175;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28175__$1);
if(temp__4425__auto__){
var s__28175__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28175__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__28175__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__28177 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__28176 = (0);
while(true){
if((i__28176 < size__6989__auto__)){
var k = cljs.core._nth.call(null,c__6988__auto__,i__28176);
var val = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"init-all","init-all",482505234),me,k);
if(!((val == null))){
cljs.core.chunk_append.call(null,b__28177,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null));

var G__28189 = (i__28176 + (1));
i__28176 = G__28189;
continue;
} else {
var G__28190 = (i__28176 + (1));
i__28176 = G__28190;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28177),tiltontec$qxia$base$iter__28174.call(null,cljs.core.chunk_rest.call(null,s__28175__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28177),null);
}
} else {
var k = cljs.core.first.call(null,s__28175__$2);
var val = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"init-all","init-all",482505234),me,k);
if(!((val == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null),tiltontec$qxia$base$iter__28174.call(null,cljs.core.rest.call(null,s__28175__$2)));
} else {
var G__28191 = cljs.core.rest.call(null,s__28175__$2);
s__28175__$1 = G__28191;
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
if(cljs.core.truth_(temp__4425__auto___28188)){
var inits_28192 = temp__4425__auto___28188;
var qx_28193 = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.truth_(qx_28193)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("no qxme "),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me))].join('')),cljs.core.str("\n"),cljs.core.str("qx")].join('')));
}

qx_28193.set(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,inits_28192)));
} else {
}

if(cljs.core.truth_(tiltontec.qxia.base.qxme.call(null,me))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("no qx initall "),cljs.core.str(tiltontec.cell.base.ia_type.call(null,me))].join('')),cljs.core.str("\n"),cljs.core.str("(qxme me)")].join('')));
}

var temp__4425__auto___28194 = new cljs.core.Keyword(null,"css-class","css-class",-919455334).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___28194)){
var c_28195 = temp__4425__auto___28194;
if(cljs.core.coll_QMARK_.call(null,c_28195)){
var cs_28196 = cljs.core.vec.call(null,c_28195);
tiltontec.qxia.base.qxme.call(null,me).addCssClasses(cljs.core.clj__GT_js.call(null,cs_28196));
} else {
tiltontec.qxia.base.qxme.call(null,me).addCssClass(c_28195);
}
} else {
}

var seq__28178 = cljs.core.seq.call(null,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"listeners","listeners",394544445)));
var chunk__28179 = null;
var count__28180 = (0);
var i__28181 = (0);
while(true){
if((i__28181 < count__28180)){
var vec__28182 = cljs.core._nth.call(null,chunk__28179,i__28181);
var name = cljs.core.nth.call(null,vec__28182,(0),null);
var handler = cljs.core.nth.call(null,vec__28182,(1),null);
var qxme_28197 = tiltontec.qxia.base.qxme.call(null,me);
qxme_28197.addListener(name,((function (seq__28178,chunk__28179,count__28180,i__28181,qxme_28197,vec__28182,name,handler){
return (function (event){
return handler.call(null,event,me);
});})(seq__28178,chunk__28179,count__28180,i__28181,qxme_28197,vec__28182,name,handler))
);

var G__28198 = seq__28178;
var G__28199 = chunk__28179;
var G__28200 = count__28180;
var G__28201 = (i__28181 + (1));
seq__28178 = G__28198;
chunk__28179 = G__28199;
count__28180 = G__28200;
i__28181 = G__28201;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28178);
if(temp__4425__auto__){
var seq__28178__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28178__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__28178__$1);
var G__28202 = cljs.core.chunk_rest.call(null,seq__28178__$1);
var G__28203 = c__7021__auto__;
var G__28204 = cljs.core.count.call(null,c__7021__auto__);
var G__28205 = (0);
seq__28178 = G__28202;
chunk__28179 = G__28203;
count__28180 = G__28204;
i__28181 = G__28205;
continue;
} else {
var vec__28185 = cljs.core.first.call(null,seq__28178__$1);
var name = cljs.core.nth.call(null,vec__28185,(0),null);
var handler = cljs.core.nth.call(null,vec__28185,(1),null);
var qxme_28206 = tiltontec.qxia.base.qxme.call(null,me);
qxme_28206.addListener(name,((function (seq__28178,chunk__28179,count__28180,i__28181,qxme_28206,vec__28185,name,handler,seq__28178__$1,temp__4425__auto__){
return (function (event){
return handler.call(null,event,me);
});})(seq__28178,chunk__28179,count__28180,i__28181,qxme_28206,vec__28185,name,handler,seq__28178__$1,temp__4425__auto__))
);

var G__28207 = cljs.core.next.call(null,seq__28178__$1);
var G__28208 = null;
var G__28209 = (0);
var G__28210 = (0);
seq__28178 = G__28207;
chunk__28179 = G__28208;
count__28180 = G__28209;
i__28181 = G__28210;
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
