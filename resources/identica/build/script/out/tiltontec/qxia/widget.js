// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.widget');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.base');
goog.require('tiltontec.qxia.base');
if(typeof tiltontec.qxia.widget.qx_initialize_kids !== 'undefined'){
} else {
tiltontec.qxia.widget.qx_initialize_kids = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return tiltontec.cell.base.ia_types;},new cljs.core.Symbol("tiltontec.cell.base","ia-types","tiltontec.cell.base/ia-types",436375603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.cell.base","tiltontec.cell.base",-1575671422,null),new cljs.core.Symbol(null,"ia-types","ia-types",322849110,null),"/home/kenneth/rube/src/tiltontec/cell/base.cljc",14,1,104,104,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.cell.base.ia_types)?tiltontec.cell.base.ia_types.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.widget","qx-initialize-kids"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.widget.qx_initialize_kids,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
cljs.core.println.call(null,new cljs.core.Keyword(null,"fall-thru-qxfinkids!!!!!!!","fall-thru-qxfinkids!!!!!!!",-666283977),tiltontec.cell.base.ia_type.call(null,me));

var qx_me = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
var seq__20666 = cljs.core.seq.call(null,kids);
var chunk__20667 = null;
var count__20668 = (0);
var i__20669 = (0);
while(true){
if((i__20669 < count__20668)){
var kid = cljs.core._nth.call(null,chunk__20667,i__20669);
var rmk_20670 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_20670);

var G__20671 = seq__20666;
var G__20672 = chunk__20667;
var G__20673 = count__20668;
var G__20674 = (i__20669 + (1));
seq__20666 = G__20671;
chunk__20667 = G__20672;
count__20668 = G__20673;
i__20669 = G__20674;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__20666);
if(temp__4425__auto____$1){
var seq__20666__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20666__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__20666__$1);
var G__20675 = cljs.core.chunk_rest.call(null,seq__20666__$1);
var G__20676 = c__5338__auto__;
var G__20677 = cljs.core.count.call(null,c__5338__auto__);
var G__20678 = (0);
seq__20666 = G__20675;
chunk__20667 = G__20676;
count__20668 = G__20677;
i__20669 = G__20678;
continue;
} else {
var kid = cljs.core.first.call(null,seq__20666__$1);
var rmk_20679 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_20679);

var G__20680 = cljs.core.next.call(null,seq__20666__$1);
var G__20681 = null;
var G__20682 = (0);
var G__20683 = (0);
seq__20666 = G__20680;
chunk__20667 = G__20681;
count__20668 = G__20682;
i__20669 = G__20683;
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
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","Mobile","tiltontec.qxia.base/Mobile",1622995536),(function (me){
var app = new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var shower = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"shower","shower",-1731894586));
var pager = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"pager","pager",1850229940));
var routing = app.getRouting();
var seq__20684 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__20685 = null;
var count__20686 = (0);
var i__20687 = (0);
while(true){
if((i__20687 < count__20686)){
var page = cljs.core._nth.call(null,chunk__20685,i__20687);
var qx_page_20688 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_20688]);

var temp__4425__auto___20689 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___20689)){
var ept_20690 = temp__4425__auto___20689;
routing.onGet(ept_20690,shower,qx_page_20688);
} else {
}

var G__20691 = seq__20684;
var G__20692 = chunk__20685;
var G__20693 = count__20686;
var G__20694 = (i__20687 + (1));
seq__20684 = G__20691;
chunk__20685 = G__20692;
count__20686 = G__20693;
i__20687 = G__20694;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20684);
if(temp__4425__auto__){
var seq__20684__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20684__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__20684__$1);
var G__20695 = cljs.core.chunk_rest.call(null,seq__20684__$1);
var G__20696 = c__5338__auto__;
var G__20697 = cljs.core.count.call(null,c__5338__auto__);
var G__20698 = (0);
seq__20684 = G__20695;
chunk__20685 = G__20696;
count__20686 = G__20697;
i__20687 = G__20698;
continue;
} else {
var page = cljs.core.first.call(null,seq__20684__$1);
var qx_page_20699 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_20699]);

var temp__4425__auto___20700__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___20700__$1)){
var ept_20701 = temp__4425__auto___20700__$1;
routing.onGet(ept_20701,shower,qx_page_20699);
} else {
}

var G__20702 = cljs.core.next.call(null,seq__20684__$1);
var G__20703 = null;
var G__20704 = (0);
var G__20705 = (0);
seq__20684 = G__20702;
chunk__20685 = G__20703;
count__20686 = G__20704;
i__20687 = G__20705;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),(function (me){
var temp__4425__auto___20706 = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___20706)){
var lyo_20707 = temp__4425__auto___20706;
cljs.core.println.call(null,new cljs.core.Keyword(null,"init-setting-layo!!!!!","init-setting-layo!!!!!",-1831845380),lyo_20707,tiltontec.cell.base.ia_type.call(null,me));

tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo_20707);
} else {
}

return tiltontec.qxia.widget.qx_initialize_kids.call(null,me);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),(function (me){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__20708 = cljs.core.seq.call(null,kids);
var chunk__20709 = null;
var count__20710 = (0);
var i__20711 = (0);
while(true){
if((i__20711 < count__20710)){
var k = cljs.core._nth.call(null,chunk__20709,i__20711);
var qxk_20712 = tiltontec.qxia.base.qxme.call(null,k);
var label_20713 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_20712,label_20713);

var G__20714 = seq__20708;
var G__20715 = chunk__20709;
var G__20716 = count__20710;
var G__20717 = (i__20711 + (1));
seq__20708 = G__20714;
chunk__20709 = G__20715;
count__20710 = G__20716;
i__20711 = G__20717;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__20708);
if(temp__4425__auto____$1){
var seq__20708__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20708__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__20708__$1);
var G__20718 = cljs.core.chunk_rest.call(null,seq__20708__$1);
var G__20719 = c__5338__auto__;
var G__20720 = cljs.core.count.call(null,c__5338__auto__);
var G__20721 = (0);
seq__20708 = G__20718;
chunk__20709 = G__20719;
count__20710 = G__20720;
i__20711 = G__20721;
continue;
} else {
var k = cljs.core.first.call(null,seq__20708__$1);
var qxk_20722 = tiltontec.qxia.base.qxme.call(null,k);
var label_20723 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_20722,label_20723);

var G__20724 = cljs.core.next.call(null,seq__20708__$1);
var G__20725 = null;
var G__20726 = (0);
var G__20727 = (0);
seq__20708 = G__20724;
chunk__20709 = G__20725;
count__20710 = G__20726;
i__20711 = G__20727;
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
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.Single","tiltontec.qxia.base/m.Single",1330847058),(function (me){
var kids = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,kids))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kids","kids",-1497764998,null)))))].join('')));
}

var form = cljs.core.first.call(null,kids);
var qx_form = tiltontec.qxia.base.qxme.call(null,form);
if(cljs.core.truth_(qx_form)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"qx-form","qx-form",231243115,null)))].join('')));
}

cljs.core.println.call(null,new cljs.core.Keyword(null,"swapsingle!!!!!!!!!!!","swapsingle!!!!!!!!!!!",-1552067565),qx_form);

return cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),(new qx.ui.mobile.form.renderer.Single(qx_form)));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),(function (page){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
return qx_page.addListener("initialize",((function (kids,temp__4425__auto__,qx_page){
return (function (){
var content = qx_page.getContent();
var seq__20728 = cljs.core.seq.call(null,kids);
var chunk__20729 = null;
var count__20730 = (0);
var i__20731 = (0);
while(true){
if((i__20731 < count__20730)){
var k = cljs.core._nth.call(null,chunk__20729,i__20731);
var qxk_20732 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_20732);

var G__20733 = seq__20728;
var G__20734 = chunk__20729;
var G__20735 = count__20730;
var G__20736 = (i__20731 + (1));
seq__20728 = G__20733;
chunk__20729 = G__20734;
count__20730 = G__20735;
i__20731 = G__20736;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__20728);
if(temp__4425__auto____$1){
var seq__20728__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20728__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__20728__$1);
var G__20737 = cljs.core.chunk_rest.call(null,seq__20728__$1);
var G__20738 = c__5338__auto__;
var G__20739 = cljs.core.count.call(null,c__5338__auto__);
var G__20740 = (0);
seq__20728 = G__20737;
chunk__20729 = G__20738;
count__20730 = G__20739;
i__20731 = G__20740;
continue;
} else {
var k = cljs.core.first.call(null,seq__20728__$1);
var qxk_20741 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_20741);

var G__20742 = cljs.core.next.call(null,seq__20728__$1);
var G__20743 = null;
var G__20744 = (0);
var G__20745 = (0);
seq__20728 = G__20742;
chunk__20729 = G__20743;
count__20730 = G__20744;
i__20731 = G__20745;
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
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),(function (me){
return tiltontec.qxia.base.qxme.call(null,me).setValue(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839)], null),(function (_,me,newk,oldk,___$1){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks_20754 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_20754)){
} else {
var seq__20746_20755 = cljs.core.seq.call(null,lostks_20754);
var chunk__20747_20756 = null;
var count__20748_20757 = (0);
var i__20749_20758 = (0);
while(true){
if((i__20749_20758 < count__20748_20757)){
var kid_20759 = cljs.core._nth.call(null,chunk__20747_20756,i__20749_20758);
var qxk_20760 = tiltontec.qxia.base.qxme.call(null,kid_20759);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_20759,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_20760);
}

qxk_20760.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_20759);

var G__20761 = seq__20746_20755;
var G__20762 = chunk__20747_20756;
var G__20763 = count__20748_20757;
var G__20764 = (i__20749_20758 + (1));
seq__20746_20755 = G__20761;
chunk__20747_20756 = G__20762;
count__20748_20757 = G__20763;
i__20749_20758 = G__20764;
continue;
} else {
var temp__4425__auto___20765 = cljs.core.seq.call(null,seq__20746_20755);
if(temp__4425__auto___20765){
var seq__20746_20766__$1 = temp__4425__auto___20765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20746_20766__$1)){
var c__5338__auto___20767 = cljs.core.chunk_first.call(null,seq__20746_20766__$1);
var G__20768 = cljs.core.chunk_rest.call(null,seq__20746_20766__$1);
var G__20769 = c__5338__auto___20767;
var G__20770 = cljs.core.count.call(null,c__5338__auto___20767);
var G__20771 = (0);
seq__20746_20755 = G__20768;
chunk__20747_20756 = G__20769;
count__20748_20757 = G__20770;
i__20749_20758 = G__20771;
continue;
} else {
var kid_20772 = cljs.core.first.call(null,seq__20746_20766__$1);
var qxk_20773 = tiltontec.qxia.base.qxme.call(null,kid_20772);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_20772,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_20773);
}

qxk_20773.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_20772);

var G__20774 = cljs.core.next.call(null,seq__20746_20766__$1);
var G__20775 = null;
var G__20776 = (0);
var G__20777 = (0);
seq__20746_20755 = G__20774;
chunk__20747_20756 = G__20775;
count__20748_20757 = G__20776;
i__20749_20758 = G__20777;
continue;
}
} else {
}
}
break;
}
}

var new_ks = clojure.set.difference.call(null,cljs.core.set.call(null,newk),cljs.core.set.call(null,oldk));
if(cljs.core.empty_QMARK_.call(null,new_ks)){
return null;
} else {
var seq__20750 = cljs.core.seq.call(null,new_ks);
var chunk__20751 = null;
var count__20752 = (0);
var i__20753 = (0);
while(true){
if((i__20753 < count__20752)){
var k = cljs.core._nth.call(null,chunk__20751,i__20753);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_20778 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_20778);
}

var G__20779 = seq__20750;
var G__20780 = chunk__20751;
var G__20781 = count__20752;
var G__20782 = (i__20753 + (1));
seq__20750 = G__20779;
chunk__20751 = G__20780;
count__20752 = G__20781;
i__20753 = G__20782;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20750);
if(temp__4425__auto__){
var seq__20750__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20750__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__20750__$1);
var G__20783 = cljs.core.chunk_rest.call(null,seq__20750__$1);
var G__20784 = c__5338__auto__;
var G__20785 = cljs.core.count.call(null,c__5338__auto__);
var G__20786 = (0);
seq__20750 = G__20783;
chunk__20751 = G__20784;
count__20752 = G__20785;
i__20753 = G__20786;
continue;
} else {
var k = cljs.core.first.call(null,seq__20750__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_20787 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_20787);
}

var G__20788 = cljs.core.next.call(null,seq__20750__$1);
var G__20789 = null;
var G__20790 = (0);
var G__20791 = (0);
seq__20750 = G__20788;
chunk__20751 = G__20789;
count__20752 = G__20790;
i__20753 = G__20791;
continue;
}
} else {
return null;
}
}
break;
}
}
}
}));
