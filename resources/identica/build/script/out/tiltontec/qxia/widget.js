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
var seq__26753 = cljs.core.seq.call(null,kids);
var chunk__26754 = null;
var count__26755 = (0);
var i__26756 = (0);
while(true){
if((i__26756 < count__26755)){
var kid = cljs.core._nth.call(null,chunk__26754,i__26756);
var rmk_26757 = tiltontec.qxia.widget.qx_render_maybe.call(null,kid);
cljs.core.println.call(null,new cljs.core.Keyword(null,"compo-adding!!!!!!!!!","compo-adding!!!!!!!!!",-380675172),rmk_26757);

qx_me.add(rmk_26757);

var G__26758 = seq__26753;
var G__26759 = chunk__26754;
var G__26760 = count__26755;
var G__26761 = (i__26756 + (1));
seq__26753 = G__26758;
chunk__26754 = G__26759;
count__26755 = G__26760;
i__26756 = G__26761;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__26753);
if(temp__4425__auto____$1){
var seq__26753__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26753__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__26753__$1);
var G__26762 = cljs.core.chunk_rest.call(null,seq__26753__$1);
var G__26763 = c__5338__auto__;
var G__26764 = cljs.core.count.call(null,c__5338__auto__);
var G__26765 = (0);
seq__26753 = G__26762;
chunk__26754 = G__26763;
count__26755 = G__26764;
i__26756 = G__26765;
continue;
} else {
var kid = cljs.core.first.call(null,seq__26753__$1);
var rmk_26766 = tiltontec.qxia.widget.qx_render_maybe.call(null,kid);
cljs.core.println.call(null,new cljs.core.Keyword(null,"compo-adding!!!!!!!!!","compo-adding!!!!!!!!!",-380675172),rmk_26766);

qx_me.add(rmk_26766);

var G__26767 = cljs.core.next.call(null,seq__26753__$1);
var G__26768 = null;
var G__26769 = (0);
var G__26770 = (0);
seq__26753 = G__26767;
chunk__26754 = G__26768;
count__26755 = G__26769;
i__26756 = G__26770;
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
var seq__26771 = cljs.core.seq.call(null,kids);
var chunk__26772 = null;
var count__26773 = (0);
var i__26774 = (0);
while(true){
if((i__26774 < count__26773)){
var k = cljs.core._nth.call(null,chunk__26772,i__26774);
var qxk_26775 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
var label_26776 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.println.call(null,new cljs.core.Keyword(null,"formadd!!!!!!","formadd!!!!!!",1331926743),qxk_26775);

qx_form.add(qxk_26775,label_26776);

var G__26777 = seq__26771;
var G__26778 = chunk__26772;
var G__26779 = count__26773;
var G__26780 = (i__26774 + (1));
seq__26771 = G__26777;
chunk__26772 = G__26778;
count__26773 = G__26779;
i__26774 = G__26780;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__26771);
if(temp__4425__auto____$1){
var seq__26771__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26771__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__26771__$1);
var G__26781 = cljs.core.chunk_rest.call(null,seq__26771__$1);
var G__26782 = c__5338__auto__;
var G__26783 = cljs.core.count.call(null,c__5338__auto__);
var G__26784 = (0);
seq__26771 = G__26781;
chunk__26772 = G__26782;
count__26773 = G__26783;
i__26774 = G__26784;
continue;
} else {
var k = cljs.core.first.call(null,seq__26771__$1);
var qxk_26785 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
var label_26786 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.println.call(null,new cljs.core.Keyword(null,"formadd!!!!!!","formadd!!!!!!",1331926743),qxk_26785);

qx_form.add(qxk_26785,label_26786);

var G__26787 = cljs.core.next.call(null,seq__26771__$1);
var G__26788 = null;
var G__26789 = (0);
var G__26790 = (0);
seq__26771 = G__26787;
chunk__26772 = G__26788;
count__26773 = G__26789;
i__26774 = G__26790;
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
var seq__26791 = cljs.core.seq.call(null,kids);
var chunk__26792 = null;
var count__26793 = (0);
var i__26794 = (0);
while(true){
if((i__26794 < count__26793)){
var k = cljs.core._nth.call(null,chunk__26792,i__26794);
var qxk_26795 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
cljs.core.println.call(null,new cljs.core.Keyword(null,"navadd!!!!!!","navadd!!!!!!",-538873862),qxk_26795);

content.add(qxk_26795);

var G__26796 = seq__26791;
var G__26797 = chunk__26792;
var G__26798 = count__26793;
var G__26799 = (i__26794 + (1));
seq__26791 = G__26796;
chunk__26792 = G__26797;
count__26793 = G__26798;
i__26794 = G__26799;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__26791);
if(temp__4425__auto____$1){
var seq__26791__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26791__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__26791__$1);
var G__26800 = cljs.core.chunk_rest.call(null,seq__26791__$1);
var G__26801 = c__5338__auto__;
var G__26802 = cljs.core.count.call(null,c__5338__auto__);
var G__26803 = (0);
seq__26791 = G__26800;
chunk__26792 = G__26801;
count__26793 = G__26802;
i__26794 = G__26803;
continue;
} else {
var k = cljs.core.first.call(null,seq__26791__$1);
var qxk_26804 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
cljs.core.println.call(null,new cljs.core.Keyword(null,"navadd!!!!!!","navadd!!!!!!",-538873862),qxk_26804);

content.add(qxk_26804);

var G__26805 = cljs.core.next.call(null,seq__26791__$1);
var G__26806 = null;
var G__26807 = (0);
var G__26808 = (0);
seq__26791 = G__26805;
chunk__26792 = G__26806;
count__26793 = G__26807;
i__26794 = G__26808;
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
