// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.widget');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.base');
goog.require('tiltontec.qxia.base');
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_type_properties,new cljs.core.Keyword("tiltontec.qxia.base","m.Atom","tiltontec.qxia.base/m.Atom",-1371579407),(function (_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"defaultCssClass","defaultCssClass",2051076547),null,new cljs.core.Keyword(null,"icon","icon",1679606541),null,new cljs.core.Keyword(null,"iconPosition","iconPosition",719536243),null,new cljs.core.Keyword(null,"label","label",1718410804),null,new cljs.core.Keyword(null,"show","show",-576705889),null], null), null);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_type_properties,new cljs.core.Keyword("tiltontec.qxia.base","m.Image","tiltontec.qxia.base/m.Image",2135364668),(function (_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),null], null), null);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_type_properties,new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),(function (_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"defaultCssClass","defaultCssClass",2051076547),null,new cljs.core.Keyword(null,"wrap","wrap",851669987),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"anonymous","anonymous",447897231),null], null), null);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_type_properties,new cljs.core.Keyword("tiltontec.qxia.base","m.Button","tiltontec.qxia.base/m.Button",1808800880),(function (_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultCssClass","defaultCssClass",2051076547),null,new cljs.core.Keyword(null,"activatable","activatable",1221753572),null], null), null);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_type_properties,new cljs.core.Keyword("tiltontec.qxia.base","m.Widget","tiltontec.qxia.base/m.Widget",-910269915),(function (_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"defaultCssClass","defaultCssClass",2051076547),null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"activatable","activatable",1221753572),null,new cljs.core.Keyword(null,"translateZ","translateZ",162539173),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"scaleY","scaleY",2067002090),null,new cljs.core.Keyword(null,"translateY","translateY",1140534123),null,new cljs.core.Keyword(null,"transformUnit","transformUnit",1486068494),null,new cljs.core.Keyword(null,"anonymous","anonymous",447897231),null,new cljs.core.Keyword(null,"translateX","translateX",319703152),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"scaleX","scaleX",2116333397),null,new cljs.core.Keyword(null,"enabled","enabled",1195909756),null,new cljs.core.Keyword(null,"visibility","visibility",1338380893),null], null), null);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_type_properties,new cljs.core.Keyword("tiltontec.qxia.base","m.Page","tiltontec.qxia.base/m.Page",-1360941549),(function (_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultCssClass","defaultCssClass",2051076547),null,new cljs.core.Keyword(null,"fireDomUpdatedOnResize","fireDomUpdatedOnResize",-1938795307),null], null), null);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_type_properties,new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),(function (_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"contentCssClass","contentCssClass",-1807691002),null,new cljs.core.Keyword(null,"buttonIcon","buttonIcon",1253122060),null,new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"buttonText","buttonText",282861744),null,new cljs.core.Keyword(null,"showButton","showButton",-1745795920),null,new cljs.core.Keyword(null,"showBackButton","showBackButton",632746224),null,new cljs.core.Keyword(null,"navigationBarHidden","navigationBarHidden",1644421714),null,new cljs.core.Keyword(null,"navigationBarToggleDuration","navigationBarToggleDuration",-977814702),null,new cljs.core.Keyword(null,"showBackButtonOnTablet","showBackButtonOnTablet",-672306155),null,new cljs.core.Keyword(null,"backButtonText","backButtonText",2126160537),null], null), null);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_type_properties,new cljs.core.Keyword("tiltontec.qxia.base","m.Input","tiltontec.qxia.base/m.Input",2096282380),(function (_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"valid","valid",155614240),null,new cljs.core.Keyword(null,"invalidMessage","invalidMessage",1256154383),null,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"model","model",331153215),null], null), null);
}));
if(typeof tiltontec.qxia.widget.qx_render_maybe !== 'undefined'){
} else {
tiltontec.qxia.widget.qx_render_maybe = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.widget","qx-render-maybe"),((function (method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__,hierarchy__5452__auto__){
return (function (me){
return tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"renderer","renderer",336841071));
});})(method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__,hierarchy__5452__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.widget.qx_render_maybe,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
cljs.core.println.call(null,new cljs.core.Keyword(null,"just-me!!!!!!!!","just-me!!!!!!!!",2051357308),tiltontec.cell.base.ia_type.call(null,me),new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));

return new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
}));
cljs.core._add_method.call(null,tiltontec.qxia.widget.qx_render_maybe,new cljs.core.Keyword("tiltontec.qxia.base","m.Single","tiltontec.qxia.base/m.Single",1330847058),(function (me){
cljs.core.println.call(null,new cljs.core.Keyword(null,"single!!!!!!!!!","single!!!!!!!!!",-1960839550),me);

return (new qx.ui.mobile.form.renderer.Single(new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me))));
}));
if(typeof tiltontec.qxia.widget.qx_finalize_kids !== 'undefined'){
} else {
tiltontec.qxia.widget.qx_finalize_kids = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.widget","qx-finalize-kids"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.widget.qx_finalize_kids,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
cljs.core.println.call(null,new cljs.core.Keyword(null,"qxfinkids!!!!!!!","qxfinkids!!!!!!!",72878253),tiltontec.cell.base.ia_type.call(null,me));

var qx_me = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
var seq__28005 = cljs.core.seq.call(null,kids);
var chunk__28006 = null;
var count__28007 = (0);
var i__28008 = (0);
while(true){
if((i__28008 < count__28007)){
var kid = cljs.core._nth.call(null,chunk__28006,i__28008);
var rmk_28009 = tiltontec.qxia.widget.qx_render_maybe.call(null,kid);
cljs.core.println.call(null,new cljs.core.Keyword(null,"compo-adding!!!!!!!!!","compo-adding!!!!!!!!!",-380675172),rmk_28009);

qx_me.add(rmk_28009);

var G__28010 = seq__28005;
var G__28011 = chunk__28006;
var G__28012 = count__28007;
var G__28013 = (i__28008 + (1));
seq__28005 = G__28010;
chunk__28006 = G__28011;
count__28007 = G__28012;
i__28008 = G__28013;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__28005);
if(temp__4425__auto____$1){
var seq__28005__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28005__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__28005__$1);
var G__28014 = cljs.core.chunk_rest.call(null,seq__28005__$1);
var G__28015 = c__5338__auto__;
var G__28016 = cljs.core.count.call(null,c__5338__auto__);
var G__28017 = (0);
seq__28005 = G__28014;
chunk__28006 = G__28015;
count__28007 = G__28016;
i__28008 = G__28017;
continue;
} else {
var kid = cljs.core.first.call(null,seq__28005__$1);
var rmk_28018 = tiltontec.qxia.widget.qx_render_maybe.call(null,kid);
cljs.core.println.call(null,new cljs.core.Keyword(null,"compo-adding!!!!!!!!!","compo-adding!!!!!!!!!",-380675172),rmk_28018);

qx_me.add(rmk_28018);

var G__28019 = cljs.core.next.call(null,seq__28005__$1);
var G__28020 = null;
var G__28021 = (0);
var G__28022 = (0);
seq__28005 = G__28019;
chunk__28006 = G__28020;
count__28007 = G__28021;
i__28008 = G__28022;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_finalize,new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),(function (me){
return tiltontec.qxia.widget.qx_finalize_kids.call(null,me);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_finalize,new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),(function (me){
var qx_form = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__28023 = cljs.core.seq.call(null,kids);
var chunk__28024 = null;
var count__28025 = (0);
var i__28026 = (0);
while(true){
if((i__28026 < count__28025)){
var k = cljs.core._nth.call(null,chunk__28024,i__28026);
var qxk_28027 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
var label_28028 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.println.call(null,new cljs.core.Keyword(null,"formadd!!!!!!","formadd!!!!!!",1331926743),qxk_28027);

qx_form.add(qxk_28027,label_28028);

var G__28029 = seq__28023;
var G__28030 = chunk__28024;
var G__28031 = count__28025;
var G__28032 = (i__28026 + (1));
seq__28023 = G__28029;
chunk__28024 = G__28030;
count__28025 = G__28031;
i__28026 = G__28032;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__28023);
if(temp__4425__auto____$1){
var seq__28023__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28023__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__28023__$1);
var G__28033 = cljs.core.chunk_rest.call(null,seq__28023__$1);
var G__28034 = c__5338__auto__;
var G__28035 = cljs.core.count.call(null,c__5338__auto__);
var G__28036 = (0);
seq__28023 = G__28033;
chunk__28024 = G__28034;
count__28025 = G__28035;
i__28026 = G__28036;
continue;
} else {
var k = cljs.core.first.call(null,seq__28023__$1);
var qxk_28037 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
var label_28038 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.println.call(null,new cljs.core.Keyword(null,"formadd!!!!!!","formadd!!!!!!",1331926743),qxk_28037);

qx_form.add(qxk_28037,label_28038);

var G__28039 = cljs.core.next.call(null,seq__28023__$1);
var G__28040 = null;
var G__28041 = (0);
var G__28042 = (0);
seq__28023 = G__28039;
chunk__28024 = G__28040;
count__28025 = G__28041;
i__28026 = G__28042;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_finalize,new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),(function (page){
var qx_page = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
return qx_page.addListener("initialize",((function (kids,temp__4425__auto__,qx_page){
return (function (){
var content = qx_page.getContent();
var seq__28043 = cljs.core.seq.call(null,kids);
var chunk__28044 = null;
var count__28045 = (0);
var i__28046 = (0);
while(true){
if((i__28046 < count__28045)){
var k = cljs.core._nth.call(null,chunk__28044,i__28046);
var qxk_28047 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
cljs.core.println.call(null,new cljs.core.Keyword(null,"navadd!!!!!!","navadd!!!!!!",-538873862),qxk_28047);

content.add(qxk_28047);

var G__28048 = seq__28043;
var G__28049 = chunk__28044;
var G__28050 = count__28045;
var G__28051 = (i__28046 + (1));
seq__28043 = G__28048;
chunk__28044 = G__28049;
count__28045 = G__28050;
i__28046 = G__28051;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__28043);
if(temp__4425__auto____$1){
var seq__28043__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28043__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__28043__$1);
var G__28052 = cljs.core.chunk_rest.call(null,seq__28043__$1);
var G__28053 = c__5338__auto__;
var G__28054 = cljs.core.count.call(null,c__5338__auto__);
var G__28055 = (0);
seq__28043 = G__28052;
chunk__28044 = G__28053;
count__28045 = G__28054;
i__28046 = G__28055;
continue;
} else {
var k = cljs.core.first.call(null,seq__28043__$1);
var qxk_28056 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
cljs.core.println.call(null,new cljs.core.Keyword(null,"navadd!!!!!!","navadd!!!!!!",-538873862),qxk_28056);

content.add(qxk_28056);

var G__28057 = cljs.core.next.call(null,seq__28043__$1);
var G__28058 = null;
var G__28059 = (0);
var G__28060 = (0);
seq__28043 = G__28057;
chunk__28044 = G__28058;
count__28045 = G__28059;
i__28046 = G__28060;
continue;
}
} else {
return null;
}
}
break;
}
});})(kids,temp__4425__auto__,qx_page))
,qx_page);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781)], null),(function (_,___$1,newk,oldk,___$2){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"nav-kids-obs!!!!","nav-kids-obs!!!!",563466688),newk,oldk);
}));
