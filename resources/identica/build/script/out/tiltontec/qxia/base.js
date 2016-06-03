// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.base');
goog.require('cljs.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.util.core');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.model.base');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.qxia.base.app_routing = (function tiltontec$qxia$base$app_routing(){
var app = qx.core.Init.getApplication();
cljs.core.println.call(null,new cljs.core.Keyword(null,"app!!!","app!!!",-1265456556),app);

return app.getRouting();
});
tiltontec.qxia.base.qxia_type_to_qx_class = (function tiltontec$qxia$base$qxia_type_to_qx_class(type){
var G__83129 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__83129) {
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
var G__83132 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__83132) {
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
cljs.core._add_method.call(null,tiltontec.model.base.md_awaken_before,new cljs.core.Keyword("tiltontec.qxia.types","qx.Object","tiltontec.qxia.types/qx.Object",-1295429520),(function (me){
cljs.core.println.call(null,new cljs.core.Keyword(null,"awk-before!!!","awk-before!!!",-1278865992),tiltontec.cell.base.ia_type.call(null,me));

if(cljs.core.truth_(tiltontec.qxia.base.qxia_type_to_qx_class.call(null,tiltontec.cell.base.ia_type.call(null,me)))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"yes-qing!!!!!!!!!!!!!","yes-qing!!!!!!!!!!!!!",30032671));

return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"0-make-qx","0-make-qx",1229540278),me], null),(function (opcode,defer_info){
cljs.core.println.call(null,new cljs.core.Keyword(null,"qxia-obj-gets-its:obj!!!","qxia-obj-gets-its:obj!!!",-1573580086),tiltontec.cell.base.ia_type.call(null,me));

return cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),tiltontec.qxia.base.qx_class_new.call(null,tiltontec.cell.base.ia_type.call(null,me),new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me))));
}));
} else {
return null;
}
}));
tiltontec.qxia.base._PLUS_qxl_client_task_priority_PLUS_ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"0-make-qx","0-make-qx",1229540278),new cljs.core.Keyword(null,"1-layout","1-layout",603251836),new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),new cljs.core.Keyword(null,"3-post-assembly","3-post-assembly",-607469254)], null);
tiltontec.qxia.base.qxia_q_handler = (function tiltontec$qxia$base$qxia_q_handler(user_q){
cljs.core.println.call(null,new cljs.core.Keyword(null,"qxia-handler!!!!!!","qxia-handler!!!!!!",1462689528),cljs.core.type.call(null,tiltontec.util.core.fifo_data.call(null,user_q)));

cljs.core.println.call(null,new cljs.core.Keyword(null,"data","data",-232669377),tiltontec.util.core.fifo_data.call(null,user_q));

var seq__83148_83162 = cljs.core.seq.call(null,tiltontec.util.core.fifo_data.call(null,user_q));
var chunk__83149_83163 = null;
var count__83150_83164 = (0);
var i__83151_83165 = (0);
while(true){
if((i__83151_83165 < count__83150_83164)){
var vec__83152_83166 = cljs.core._nth.call(null,chunk__83149_83163,i__83151_83165);
var vec__83153_83167 = cljs.core.nth.call(null,vec__83152_83166,(0),null);
var qx_defer_code_83168 = cljs.core.nth.call(null,vec__83153_83167,(0),null);
var me_83169 = cljs.core.nth.call(null,vec__83153_83167,(1),null);
var task_83170 = cljs.core.nth.call(null,vec__83152_83166,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([qx_defer_code_83168], true),tiltontec.qxia.base._PLUS_qxl_client_task_priority_PLUS_))){
} else {
throw Error;
}

var G__83171 = seq__83148_83162;
var G__83172 = chunk__83149_83163;
var G__83173 = count__83150_83164;
var G__83174 = (i__83151_83165 + (1));
seq__83148_83162 = G__83171;
chunk__83149_83163 = G__83172;
count__83150_83164 = G__83173;
i__83151_83165 = G__83174;
continue;
} else {
var temp__4425__auto___83175 = cljs.core.seq.call(null,seq__83148_83162);
if(temp__4425__auto___83175){
var seq__83148_83176__$1 = temp__4425__auto___83175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83148_83176__$1)){
var c__5338__auto___83177 = cljs.core.chunk_first.call(null,seq__83148_83176__$1);
var G__83178 = cljs.core.chunk_rest.call(null,seq__83148_83176__$1);
var G__83179 = c__5338__auto___83177;
var G__83180 = cljs.core.count.call(null,c__5338__auto___83177);
var G__83181 = (0);
seq__83148_83162 = G__83178;
chunk__83149_83163 = G__83179;
count__83150_83164 = G__83180;
i__83151_83165 = G__83181;
continue;
} else {
var vec__83154_83182 = cljs.core.first.call(null,seq__83148_83176__$1);
var vec__83155_83183 = cljs.core.nth.call(null,vec__83154_83182,(0),null);
var qx_defer_code_83184 = cljs.core.nth.call(null,vec__83155_83183,(0),null);
var me_83185 = cljs.core.nth.call(null,vec__83155_83183,(1),null);
var task_83186 = cljs.core.nth.call(null,vec__83154_83182,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([qx_defer_code_83184], true),tiltontec.qxia.base._PLUS_qxl_client_task_priority_PLUS_))){
} else {
throw Error;
}

var G__83187 = cljs.core.next.call(null,seq__83148_83176__$1);
var G__83188 = null;
var G__83189 = (0);
var G__83190 = (0);
seq__83148_83162 = G__83187;
chunk__83149_83163 = G__83188;
count__83150_83164 = G__83189;
i__83151_83165 = G__83190;
continue;
}
} else {
}
}
break;
}

var sorted = (function (){var data = tiltontec.util.core.fifo_data.call(null,user_q);
cljs.core.println.call(null,new cljs.core.Keyword(null,"firstd","firstd",-1181363431),cljs.core.first.call(null,data));

cljs.core.println.call(null,new cljs.core.Keyword(null,"ffirst","ffirst",1959533769),cljs.core.ffirst.call(null,cljs.core.first.call(null,data)));

return cljs.core.sort_by.call(null,cljs.core.ffirst,data);
})();
cljs.core.println.call(null,new cljs.core.Keyword(null,"sorted!!!!!!!!!!","sorted!!!!!!!!!!",-1957715987));

cljs.core.println.call(null,new cljs.core.Keyword(null,"sorted!!!!!!!!!!","sorted!!!!!!!!!!",-1957715987),cljs.core.count.call(null,sorted));

tiltontec.util.core.fifo_clear.call(null,user_q);

cljs.core.println.call(null,new cljs.core.Keyword(null,"cleared","cleared",-1267667336));

var seq__83156 = cljs.core.seq.call(null,sorted);
var chunk__83157 = null;
var count__83158 = (0);
var i__83159 = (0);
while(true){
if((i__83159 < count__83158)){
var vec__83160 = cljs.core._nth.call(null,chunk__83157,i__83159);
var defer_info = cljs.core.nth.call(null,vec__83160,(0),null);
var task = cljs.core.nth.call(null,vec__83160,(1),null);
cljs.core.println.call(null,new cljs.core.Keyword(null,"ddeffo!!!","ddeffo!!!",-1148953316),defer_info);

task.call(null,new cljs.core.Keyword(null,"client-q","client-q",-1752740110),defer_info);

var G__83191 = seq__83156;
var G__83192 = chunk__83157;
var G__83193 = count__83158;
var G__83194 = (i__83159 + (1));
seq__83156 = G__83191;
chunk__83157 = G__83192;
count__83158 = G__83193;
i__83159 = G__83194;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__83156);
if(temp__4425__auto__){
var seq__83156__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83156__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__83156__$1);
var G__83195 = cljs.core.chunk_rest.call(null,seq__83156__$1);
var G__83196 = c__5338__auto__;
var G__83197 = cljs.core.count.call(null,c__5338__auto__);
var G__83198 = (0);
seq__83156 = G__83195;
chunk__83157 = G__83196;
count__83158 = G__83197;
i__83159 = G__83198;
continue;
} else {
var vec__83161 = cljs.core.first.call(null,seq__83156__$1);
var defer_info = cljs.core.nth.call(null,vec__83161,(0),null);
var task = cljs.core.nth.call(null,vec__83161,(1),null);
cljs.core.println.call(null,new cljs.core.Keyword(null,"ddeffo!!!","ddeffo!!!",-1148953316),defer_info);

task.call(null,new cljs.core.Keyword(null,"client-q","client-q",-1752740110),defer_info);

var G__83199 = cljs.core.next.call(null,seq__83156__$1);
var G__83200 = null;
var G__83201 = (0);
var G__83202 = (0);
seq__83156 = G__83199;
chunk__83157 = G__83200;
count__83158 = G__83201;
i__83159 = G__83202;
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
cljs.core.println.call(null,new cljs.core.Keyword(null,"voila!!!!!!!!","voila!!!!!!!!",-1818511800),cljs.core.deref.call(null,tiltontec.cell.base._PLUS_client_q_handler_PLUS_));
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
tiltontec.qxia.base.qxme = (function tiltontec$qxia$base$qxme(me){
return new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
tiltontec.qxia.base.qx_initialize_all = (function tiltontec$qxia$base$qx_initialize_all(me){
var temp__4425__auto___83211 = (function (){var iter__5307__auto__ = (function tiltontec$qxia$base$qx_initialize_all_$_iter__83207(s__83208){
return (new cljs.core.LazySeq(null,(function (){
var s__83208__$1 = s__83208;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__83208__$1);
if(temp__4425__auto__){
var s__83208__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83208__$2)){
var c__5305__auto__ = cljs.core.chunk_first.call(null,s__83208__$2);
var size__5306__auto__ = cljs.core.count.call(null,c__5305__auto__);
var b__83210 = cljs.core.chunk_buffer.call(null,size__5306__auto__);
if((function (){var i__83209 = (0);
while(true){
if((i__83209 < size__5306__auto__)){
var k = cljs.core._nth.call(null,c__5305__auto__,i__83209);
var val = tiltontec.model.base.md_getx.call(null,new cljs.core.Keyword(null,"init-all","init-all",482505234),me,k);
if(!((val == null))){
cljs.core.chunk_append.call(null,b__83210,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null));

var G__83212 = (i__83209 + (1));
i__83209 = G__83212;
continue;
} else {
var G__83213 = (i__83209 + (1));
i__83209 = G__83213;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83210),tiltontec$qxia$base$qx_initialize_all_$_iter__83207.call(null,cljs.core.chunk_rest.call(null,s__83208__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83210),null);
}
} else {
var k = cljs.core.first.call(null,s__83208__$2);
var val = tiltontec.model.base.md_getx.call(null,new cljs.core.Keyword(null,"init-all","init-all",482505234),me,k);
if(!((val == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null),tiltontec$qxia$base$qx_initialize_all_$_iter__83207.call(null,cljs.core.rest.call(null,s__83208__$2)));
} else {
var G__83214 = cljs.core.rest.call(null,s__83208__$2);
s__83208__$1 = G__83214;
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
if(cljs.core.truth_(temp__4425__auto___83211)){
var inits_83215 = temp__4425__auto___83211;
tiltontec.qxia.base.qxme.call(null,me).set(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,inits_83215)));
} else {
}

var temp__4425__auto__ = new cljs.core.Keyword(null,"css-class","css-class",-919455334).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto__)){
var c = temp__4425__auto__;
if(cljs.core.coll_QMARK_.call(null,c)){
var cs = cljs.core.vec.call(null,c);
return tiltontec.qxia.base.qxme.call(null,me).addCssClasses(cljs.core.clj__GT_js.call(null,cs));
} else {
return tiltontec.qxia.base.qxme.call(null,me).addCssClass(c);
}
} else {
return null;
}
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword("tiltontec.qxia.base","qx.Object","tiltontec.qxia.base/qx.Object",922436694)], null),(function (_,me,new$,old,___$1){
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
cljs.core.println.call(null,new cljs.core.Keyword(null,"time-to-hack-remove-listeners","time-to-hack-remove-listeners",678744890));
} else {
}

var seq__83216 = cljs.core.seq.call(null,new$);
var chunk__83217 = null;
var count__83218 = (0);
var i__83219 = (0);
while(true){
if((i__83219 < count__83218)){
var vec__83220 = cljs.core._nth.call(null,chunk__83217,i__83219);
var name = cljs.core.nth.call(null,vec__83220,(0),null);
var handler = cljs.core.nth.call(null,vec__83220,(1),null);
var qxme_83222 = tiltontec.qxia.base.qxme.call(null,me);
cljs.core.println.call(null,new cljs.core.Keyword(null,"bingo-listener!","bingo-listener!",2073722760),name,tiltontec.cell.base.ia_type.call(null,me));

qxme_83222.addListener(name,((function (seq__83216,chunk__83217,count__83218,i__83219,qxme_83222,vec__83220,name,handler){
return (function (event){
return handler.call(null,event,me);
});})(seq__83216,chunk__83217,count__83218,i__83219,qxme_83222,vec__83220,name,handler))
);

var G__83223 = seq__83216;
var G__83224 = chunk__83217;
var G__83225 = count__83218;
var G__83226 = (i__83219 + (1));
seq__83216 = G__83223;
chunk__83217 = G__83224;
count__83218 = G__83225;
i__83219 = G__83226;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__83216);
if(temp__4425__auto__){
var seq__83216__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83216__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__83216__$1);
var G__83227 = cljs.core.chunk_rest.call(null,seq__83216__$1);
var G__83228 = c__5338__auto__;
var G__83229 = cljs.core.count.call(null,c__5338__auto__);
var G__83230 = (0);
seq__83216 = G__83227;
chunk__83217 = G__83228;
count__83218 = G__83229;
i__83219 = G__83230;
continue;
} else {
var vec__83221 = cljs.core.first.call(null,seq__83216__$1);
var name = cljs.core.nth.call(null,vec__83221,(0),null);
var handler = cljs.core.nth.call(null,vec__83221,(1),null);
var qxme_83231 = tiltontec.qxia.base.qxme.call(null,me);
cljs.core.println.call(null,new cljs.core.Keyword(null,"bingo-listener!","bingo-listener!",2073722760),name,tiltontec.cell.base.ia_type.call(null,me));

qxme_83231.addListener(name,((function (seq__83216,chunk__83217,count__83218,i__83219,qxme_83231,vec__83221,name,handler,seq__83216__$1,temp__4425__auto__){
return (function (event){
return handler.call(null,event,me);
});})(seq__83216,chunk__83217,count__83218,i__83219,qxme_83231,vec__83221,name,handler,seq__83216__$1,temp__4425__auto__))
);

var G__83232 = cljs.core.next.call(null,seq__83216__$1);
var G__83233 = null;
var G__83234 = (0);
var G__83235 = (0);
seq__83216 = G__83232;
chunk__83217 = G__83233;
count__83218 = G__83234;
i__83219 = G__83235;
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
cljs.core.println.call(null,new cljs.core.Keyword(null,"add-kid","add-kid",160314367),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,kid));

var temp__4423__auto__ = new cljs.core.Keyword(null,"flex","flex",-1425124628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kid));
if(cljs.core.truth_(temp__4423__auto__)){
var flex = temp__4423__auto__;
return tiltontec.qxia.base.qxme.call(null,me).add(tiltontec.qxia.base.qxme.call(null,kid),{"flex": flex});
} else {
return tiltontec.qxia.base.qxme.call(null,me).add(tiltontec.qxia.base.qxme.call(null,kid));
}
});
