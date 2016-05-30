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
var seq__29587 = cljs.core.seq.call(null,kids);
var chunk__29588 = null;
var count__29589 = (0);
var i__29590 = (0);
while(true){
if((i__29590 < count__29589)){
var kid = cljs.core._nth.call(null,chunk__29588,i__29590);
var rmk_29591 = tiltontec.qxia.widget.qx_render_maybe.call(null,kid);
cljs.core.println.call(null,new cljs.core.Keyword(null,"compo-adding!!!!!!!!!","compo-adding!!!!!!!!!",-380675172),rmk_29591);

qx_me.add(rmk_29591);

var G__29592 = seq__29587;
var G__29593 = chunk__29588;
var G__29594 = count__29589;
var G__29595 = (i__29590 + (1));
seq__29587 = G__29592;
chunk__29588 = G__29593;
count__29589 = G__29594;
i__29590 = G__29595;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__29587);
if(temp__4425__auto____$1){
var seq__29587__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29587__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__29587__$1);
var G__29596 = cljs.core.chunk_rest.call(null,seq__29587__$1);
var G__29597 = c__5338__auto__;
var G__29598 = cljs.core.count.call(null,c__5338__auto__);
var G__29599 = (0);
seq__29587 = G__29596;
chunk__29588 = G__29597;
count__29589 = G__29598;
i__29590 = G__29599;
continue;
} else {
var kid = cljs.core.first.call(null,seq__29587__$1);
var rmk_29600 = tiltontec.qxia.widget.qx_render_maybe.call(null,kid);
cljs.core.println.call(null,new cljs.core.Keyword(null,"compo-adding!!!!!!!!!","compo-adding!!!!!!!!!",-380675172),rmk_29600);

qx_me.add(rmk_29600);

var G__29601 = cljs.core.next.call(null,seq__29587__$1);
var G__29602 = null;
var G__29603 = (0);
var G__29604 = (0);
seq__29587 = G__29601;
chunk__29588 = G__29602;
count__29589 = G__29603;
i__29590 = G__29604;
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
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_finalize,new cljs.core.Keyword("tiltontec.qxia.base","Mobile","tiltontec.qxia.base/Mobile",1622995536),(function (me){
var app = new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var shower = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"shower","shower",-1731894586));
var pager = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"pager","pager",1850229940));
var routing = app.getRouting();
var seq__29605 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__29606 = null;
var count__29607 = (0);
var i__29608 = (0);
while(true){
if((i__29608 < count__29607)){
var page = cljs.core._nth.call(null,chunk__29606,i__29608);
cljs.core.println.call(null,new cljs.core.Keyword(null,"adding-page!!!!!!!!!!!","adding-page!!!!!!!!!!!",520961841),page);

var qx_page_29609 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
pager.addDetail([qx_page_29609]);

var temp__4425__auto___29610 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___29610)){
var ept_29611 = temp__4425__auto___29610;
routing.onGet(ept_29611,shower,qx_page_29609);
} else {
}

var G__29612 = seq__29605;
var G__29613 = chunk__29606;
var G__29614 = count__29607;
var G__29615 = (i__29608 + (1));
seq__29605 = G__29612;
chunk__29606 = G__29613;
count__29607 = G__29614;
i__29608 = G__29615;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29605);
if(temp__4425__auto__){
var seq__29605__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29605__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__29605__$1);
var G__29616 = cljs.core.chunk_rest.call(null,seq__29605__$1);
var G__29617 = c__5338__auto__;
var G__29618 = cljs.core.count.call(null,c__5338__auto__);
var G__29619 = (0);
seq__29605 = G__29616;
chunk__29606 = G__29617;
count__29607 = G__29618;
i__29608 = G__29619;
continue;
} else {
var page = cljs.core.first.call(null,seq__29605__$1);
cljs.core.println.call(null,new cljs.core.Keyword(null,"adding-page!!!!!!!!!!!","adding-page!!!!!!!!!!!",520961841),page);

var qx_page_29620 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
pager.addDetail([qx_page_29620]);

var temp__4425__auto___29621__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___29621__$1)){
var ept_29622 = temp__4425__auto___29621__$1;
routing.onGet(ept_29622,shower,qx_page_29620);
} else {
}

var G__29623 = cljs.core.next.call(null,seq__29605__$1);
var G__29624 = null;
var G__29625 = (0);
var G__29626 = (0);
seq__29605 = G__29623;
chunk__29606 = G__29624;
count__29607 = G__29625;
i__29608 = G__29626;
continue;
}
} else {
return null;
}
}
break;
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
var seq__29627 = cljs.core.seq.call(null,kids);
var chunk__29628 = null;
var count__29629 = (0);
var i__29630 = (0);
while(true){
if((i__29630 < count__29629)){
var k = cljs.core._nth.call(null,chunk__29628,i__29630);
var qxk_29631 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
var label_29632 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.println.call(null,new cljs.core.Keyword(null,"formadd!!!!!!","formadd!!!!!!",1331926743),qxk_29631);

qx_form.add(qxk_29631,label_29632);

var G__29633 = seq__29627;
var G__29634 = chunk__29628;
var G__29635 = count__29629;
var G__29636 = (i__29630 + (1));
seq__29627 = G__29633;
chunk__29628 = G__29634;
count__29629 = G__29635;
i__29630 = G__29636;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__29627);
if(temp__4425__auto____$1){
var seq__29627__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29627__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__29627__$1);
var G__29637 = cljs.core.chunk_rest.call(null,seq__29627__$1);
var G__29638 = c__5338__auto__;
var G__29639 = cljs.core.count.call(null,c__5338__auto__);
var G__29640 = (0);
seq__29627 = G__29637;
chunk__29628 = G__29638;
count__29629 = G__29639;
i__29630 = G__29640;
continue;
} else {
var k = cljs.core.first.call(null,seq__29627__$1);
var qxk_29641 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
var label_29642 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.println.call(null,new cljs.core.Keyword(null,"formadd!!!!!!","formadd!!!!!!",1331926743),qxk_29641);

qx_form.add(qxk_29641,label_29642);

var G__29643 = cljs.core.next.call(null,seq__29627__$1);
var G__29644 = null;
var G__29645 = (0);
var G__29646 = (0);
seq__29627 = G__29643;
chunk__29628 = G__29644;
count__29629 = G__29645;
i__29630 = G__29646;
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
var seq__29647 = cljs.core.seq.call(null,kids);
var chunk__29648 = null;
var count__29649 = (0);
var i__29650 = (0);
while(true){
if((i__29650 < count__29649)){
var k = cljs.core._nth.call(null,chunk__29648,i__29650);
var qxk_29651 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
cljs.core.println.call(null,new cljs.core.Keyword(null,"navadd!!!!!!","navadd!!!!!!",-538873862),qxk_29651);

content.add(qxk_29651);

var G__29652 = seq__29647;
var G__29653 = chunk__29648;
var G__29654 = count__29649;
var G__29655 = (i__29650 + (1));
seq__29647 = G__29652;
chunk__29648 = G__29653;
count__29649 = G__29654;
i__29650 = G__29655;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__29647);
if(temp__4425__auto____$1){
var seq__29647__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29647__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__29647__$1);
var G__29656 = cljs.core.chunk_rest.call(null,seq__29647__$1);
var G__29657 = c__5338__auto__;
var G__29658 = cljs.core.count.call(null,c__5338__auto__);
var G__29659 = (0);
seq__29647 = G__29656;
chunk__29648 = G__29657;
count__29649 = G__29658;
i__29650 = G__29659;
continue;
} else {
var k = cljs.core.first.call(null,seq__29647__$1);
var qxk_29660 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
cljs.core.println.call(null,new cljs.core.Keyword(null,"navadd!!!!!!","navadd!!!!!!",-538873862),qxk_29660);

content.add(qxk_29660);

var G__29661 = cljs.core.next.call(null,seq__29647__$1);
var G__29662 = null;
var G__29663 = (0);
var G__29664 = (0);
seq__29647 = G__29661;
chunk__29648 = G__29662;
count__29649 = G__29663;
i__29650 = G__29664;
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
