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
var G__28641 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28641) {
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
var G__28644 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28644) {
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
cljs.core.println.call(null,new cljs.core.Keyword(null,"qxia-handler!!!!!!!!!!!!!!!!!!!!!!!","qxia-handler!!!!!!!!!!!!!!!!!!!!!!!",1093525573));

var seq__28660_28674 = cljs.core.seq.call(null,tiltontec.util.core.fifo_data.call(null,user_q));
var chunk__28661_28675 = null;
var count__28662_28676 = (0);
var i__28663_28677 = (0);
while(true){
if((i__28663_28677 < count__28662_28676)){
var vec__28664_28678 = cljs.core._nth.call(null,chunk__28661_28675,i__28663_28677);
var vec__28665_28679 = cljs.core.nth.call(null,vec__28664_28678,(0),null);
var qx_defer_code_28680 = cljs.core.nth.call(null,vec__28665_28679,(0),null);
var me_28681 = cljs.core.nth.call(null,vec__28665_28679,(1),null);
var task_28682 = cljs.core.nth.call(null,vec__28664_28678,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([qx_defer_code_28680], true),tiltontec.qxia.base._PLUS_qxl_client_task_priority_PLUS_))){
} else {
throw Error;
}

var G__28683 = seq__28660_28674;
var G__28684 = chunk__28661_28675;
var G__28685 = count__28662_28676;
var G__28686 = (i__28663_28677 + (1));
seq__28660_28674 = G__28683;
chunk__28661_28675 = G__28684;
count__28662_28676 = G__28685;
i__28663_28677 = G__28686;
continue;
} else {
var temp__4425__auto___28687 = cljs.core.seq.call(null,seq__28660_28674);
if(temp__4425__auto___28687){
var seq__28660_28688__$1 = temp__4425__auto___28687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28660_28688__$1)){
var c__5338__auto___28689 = cljs.core.chunk_first.call(null,seq__28660_28688__$1);
var G__28690 = cljs.core.chunk_rest.call(null,seq__28660_28688__$1);
var G__28691 = c__5338__auto___28689;
var G__28692 = cljs.core.count.call(null,c__5338__auto___28689);
var G__28693 = (0);
seq__28660_28674 = G__28690;
chunk__28661_28675 = G__28691;
count__28662_28676 = G__28692;
i__28663_28677 = G__28693;
continue;
} else {
var vec__28666_28694 = cljs.core.first.call(null,seq__28660_28688__$1);
var vec__28667_28695 = cljs.core.nth.call(null,vec__28666_28694,(0),null);
var qx_defer_code_28696 = cljs.core.nth.call(null,vec__28667_28695,(0),null);
var me_28697 = cljs.core.nth.call(null,vec__28667_28695,(1),null);
var task_28698 = cljs.core.nth.call(null,vec__28666_28694,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([qx_defer_code_28696], true),tiltontec.qxia.base._PLUS_qxl_client_task_priority_PLUS_))){
} else {
throw Error;
}

var G__28699 = cljs.core.next.call(null,seq__28660_28688__$1);
var G__28700 = null;
var G__28701 = (0);
var G__28702 = (0);
seq__28660_28674 = G__28699;
chunk__28661_28675 = G__28700;
count__28662_28676 = G__28701;
i__28663_28677 = G__28702;
continue;
}
} else {
}
}
break;
}

var seq__28668 = cljs.core.seq.call(null,tiltontec.util.base.prog1.call(null,cljs.core.sort_by.call(null,tiltontec.util.core.fifo_data.call(null,user_q),cljs.core.ffirst),tiltontec.util.core.fifo_clear.call(null,user_q)));
var chunk__28669 = null;
var count__28670 = (0);
var i__28671 = (0);
while(true){
if((i__28671 < count__28670)){
var vec__28672 = cljs.core._nth.call(null,chunk__28669,i__28671);
var defer_info = cljs.core.nth.call(null,vec__28672,(0),null);
var task = cljs.core.nth.call(null,vec__28672,(1),null);
task.call(null,new cljs.core.Keyword(null,"client-q","client-q",-1752740110),defer_info);

var G__28703 = seq__28668;
var G__28704 = chunk__28669;
var G__28705 = count__28670;
var G__28706 = (i__28671 + (1));
seq__28668 = G__28703;
chunk__28669 = G__28704;
count__28670 = G__28705;
i__28671 = G__28706;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28668);
if(temp__4425__auto__){
var seq__28668__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28668__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__28668__$1);
var G__28707 = cljs.core.chunk_rest.call(null,seq__28668__$1);
var G__28708 = c__5338__auto__;
var G__28709 = cljs.core.count.call(null,c__5338__auto__);
var G__28710 = (0);
seq__28668 = G__28707;
chunk__28669 = G__28708;
count__28670 = G__28709;
i__28671 = G__28710;
continue;
} else {
var vec__28673 = cljs.core.first.call(null,seq__28668__$1);
var defer_info = cljs.core.nth.call(null,vec__28673,(0),null);
var task = cljs.core.nth.call(null,vec__28673,(1),null);
task.call(null,new cljs.core.Keyword(null,"client-q","client-q",-1752740110),defer_info);

var G__28711 = cljs.core.next.call(null,seq__28668__$1);
var G__28712 = null;
var G__28713 = (0);
var G__28714 = (0);
seq__28668 = G__28711;
chunk__28669 = G__28712;
count__28670 = G__28713;
i__28671 = G__28714;
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
tiltontec.qxia.base.qxme = (function tiltontec$qxia$base$qxme(me){
return new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
tiltontec.qxia.base.qx_initialize_all = (function tiltontec$qxia$base$qx_initialize_all(me){
var temp__4425__auto___28723 = (function (){var iter__5307__auto__ = (function tiltontec$qxia$base$qx_initialize_all_$_iter__28719(s__28720){
return (new cljs.core.LazySeq(null,(function (){
var s__28720__$1 = s__28720;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28720__$1);
if(temp__4425__auto__){
var s__28720__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28720__$2)){
var c__5305__auto__ = cljs.core.chunk_first.call(null,s__28720__$2);
var size__5306__auto__ = cljs.core.count.call(null,c__5305__auto__);
var b__28722 = cljs.core.chunk_buffer.call(null,size__5306__auto__);
if((function (){var i__28721 = (0);
while(true){
if((i__28721 < size__5306__auto__)){
var k = cljs.core._nth.call(null,c__5305__auto__,i__28721);
var val = tiltontec.model.base.md_getx.call(null,new cljs.core.Keyword(null,"init-all","init-all",482505234),me,k);
if(!((val == null))){
cljs.core.chunk_append.call(null,b__28722,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null));

var G__28724 = (i__28721 + (1));
i__28721 = G__28724;
continue;
} else {
var G__28725 = (i__28721 + (1));
i__28721 = G__28725;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28722),tiltontec$qxia$base$qx_initialize_all_$_iter__28719.call(null,cljs.core.chunk_rest.call(null,s__28720__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28722),null);
}
} else {
var k = cljs.core.first.call(null,s__28720__$2);
var val = tiltontec.model.base.md_getx.call(null,new cljs.core.Keyword(null,"init-all","init-all",482505234),me,k);
if(!((val == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null),tiltontec$qxia$base$qx_initialize_all_$_iter__28719.call(null,cljs.core.rest.call(null,s__28720__$2)));
} else {
var G__28726 = cljs.core.rest.call(null,s__28720__$2);
s__28720__$1 = G__28726;
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
if(cljs.core.truth_(temp__4425__auto___28723)){
var inits_28727 = temp__4425__auto___28723;
tiltontec.qxia.base.qxme.call(null,me).set(cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,inits_28727)));
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

var seq__28728 = cljs.core.seq.call(null,new$);
var chunk__28729 = null;
var count__28730 = (0);
var i__28731 = (0);
while(true){
if((i__28731 < count__28730)){
var vec__28732 = cljs.core._nth.call(null,chunk__28729,i__28731);
var name = cljs.core.nth.call(null,vec__28732,(0),null);
var handler = cljs.core.nth.call(null,vec__28732,(1),null);
var qxme_28734 = tiltontec.qxia.base.qxme.call(null,me);
cljs.core.println.call(null,new cljs.core.Keyword(null,"bingo-listener!","bingo-listener!",2073722760),name,tiltontec.cell.base.ia_type.call(null,me));

qxme_28734.addListener(name,((function (seq__28728,chunk__28729,count__28730,i__28731,qxme_28734,vec__28732,name,handler){
return (function (event){
return handler.call(null,event,me);
});})(seq__28728,chunk__28729,count__28730,i__28731,qxme_28734,vec__28732,name,handler))
);

var G__28735 = seq__28728;
var G__28736 = chunk__28729;
var G__28737 = count__28730;
var G__28738 = (i__28731 + (1));
seq__28728 = G__28735;
chunk__28729 = G__28736;
count__28730 = G__28737;
i__28731 = G__28738;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28728);
if(temp__4425__auto__){
var seq__28728__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28728__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__28728__$1);
var G__28739 = cljs.core.chunk_rest.call(null,seq__28728__$1);
var G__28740 = c__5338__auto__;
var G__28741 = cljs.core.count.call(null,c__5338__auto__);
var G__28742 = (0);
seq__28728 = G__28739;
chunk__28729 = G__28740;
count__28730 = G__28741;
i__28731 = G__28742;
continue;
} else {
var vec__28733 = cljs.core.first.call(null,seq__28728__$1);
var name = cljs.core.nth.call(null,vec__28733,(0),null);
var handler = cljs.core.nth.call(null,vec__28733,(1),null);
var qxme_28743 = tiltontec.qxia.base.qxme.call(null,me);
cljs.core.println.call(null,new cljs.core.Keyword(null,"bingo-listener!","bingo-listener!",2073722760),name,tiltontec.cell.base.ia_type.call(null,me));

qxme_28743.addListener(name,((function (seq__28728,chunk__28729,count__28730,i__28731,qxme_28743,vec__28733,name,handler,seq__28728__$1,temp__4425__auto__){
return (function (event){
return handler.call(null,event,me);
});})(seq__28728,chunk__28729,count__28730,i__28731,qxme_28743,vec__28733,name,handler,seq__28728__$1,temp__4425__auto__))
);

var G__28744 = cljs.core.next.call(null,seq__28728__$1);
var G__28745 = null;
var G__28746 = (0);
var G__28747 = (0);
seq__28728 = G__28744;
chunk__28729 = G__28745;
count__28730 = G__28746;
i__28731 = G__28747;
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
