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
var seq__22686 = cljs.core.seq.call(null,kids);
var chunk__22687 = null;
var count__22688 = (0);
var i__22689 = (0);
while(true){
if((i__22689 < count__22688)){
var kid = cljs.core._nth.call(null,chunk__22687,i__22689);
var rmk_22690 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_22690);

var G__22691 = seq__22686;
var G__22692 = chunk__22687;
var G__22693 = count__22688;
var G__22694 = (i__22689 + (1));
seq__22686 = G__22691;
chunk__22687 = G__22692;
count__22688 = G__22693;
i__22689 = G__22694;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__22686);
if(temp__4425__auto____$1){
var seq__22686__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22686__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__22686__$1);
var G__22695 = cljs.core.chunk_rest.call(null,seq__22686__$1);
var G__22696 = c__5338__auto__;
var G__22697 = cljs.core.count.call(null,c__5338__auto__);
var G__22698 = (0);
seq__22686 = G__22695;
chunk__22687 = G__22696;
count__22688 = G__22697;
i__22689 = G__22698;
continue;
} else {
var kid = cljs.core.first.call(null,seq__22686__$1);
var rmk_22699 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_22699);

var G__22700 = cljs.core.next.call(null,seq__22686__$1);
var G__22701 = null;
var G__22702 = (0);
var G__22703 = (0);
seq__22686 = G__22700;
chunk__22687 = G__22701;
count__22688 = G__22702;
i__22689 = G__22703;
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
var seq__22704 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__22705 = null;
var count__22706 = (0);
var i__22707 = (0);
while(true){
if((i__22707 < count__22706)){
var page = cljs.core._nth.call(null,chunk__22705,i__22707);
var qx_page_22708 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_22708]);

var temp__4425__auto___22709 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___22709)){
var ept_22710 = temp__4425__auto___22709;
routing.onGet(ept_22710,shower,qx_page_22708);
} else {
}

var G__22711 = seq__22704;
var G__22712 = chunk__22705;
var G__22713 = count__22706;
var G__22714 = (i__22707 + (1));
seq__22704 = G__22711;
chunk__22705 = G__22712;
count__22706 = G__22713;
i__22707 = G__22714;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22704);
if(temp__4425__auto__){
var seq__22704__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22704__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__22704__$1);
var G__22715 = cljs.core.chunk_rest.call(null,seq__22704__$1);
var G__22716 = c__5338__auto__;
var G__22717 = cljs.core.count.call(null,c__5338__auto__);
var G__22718 = (0);
seq__22704 = G__22715;
chunk__22705 = G__22716;
count__22706 = G__22717;
i__22707 = G__22718;
continue;
} else {
var page = cljs.core.first.call(null,seq__22704__$1);
var qx_page_22719 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_22719]);

var temp__4425__auto___22720__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___22720__$1)){
var ept_22721 = temp__4425__auto___22720__$1;
routing.onGet(ept_22721,shower,qx_page_22719);
} else {
}

var G__22722 = cljs.core.next.call(null,seq__22704__$1);
var G__22723 = null;
var G__22724 = (0);
var G__22725 = (0);
seq__22704 = G__22722;
chunk__22705 = G__22723;
count__22706 = G__22724;
i__22707 = G__22725;
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
var temp__4425__auto___22726 = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___22726)){
var lyo_22727 = temp__4425__auto___22726;
cljs.core.println.call(null,new cljs.core.Keyword(null,"init-setting-layo!!!!!","init-setting-layo!!!!!",-1831845380),lyo_22727,tiltontec.cell.base.ia_type.call(null,me));

tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo_22727);
} else {
}

return tiltontec.qxia.widget.qx_initialize_kids.call(null,me);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),(function (me){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__22728 = cljs.core.seq.call(null,kids);
var chunk__22729 = null;
var count__22730 = (0);
var i__22731 = (0);
while(true){
if((i__22731 < count__22730)){
var k = cljs.core._nth.call(null,chunk__22729,i__22731);
var qxk_22732 = tiltontec.qxia.base.qxme.call(null,k);
var label_22733 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_22732,label_22733);

var G__22734 = seq__22728;
var G__22735 = chunk__22729;
var G__22736 = count__22730;
var G__22737 = (i__22731 + (1));
seq__22728 = G__22734;
chunk__22729 = G__22735;
count__22730 = G__22736;
i__22731 = G__22737;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__22728);
if(temp__4425__auto____$1){
var seq__22728__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22728__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__22728__$1);
var G__22738 = cljs.core.chunk_rest.call(null,seq__22728__$1);
var G__22739 = c__5338__auto__;
var G__22740 = cljs.core.count.call(null,c__5338__auto__);
var G__22741 = (0);
seq__22728 = G__22738;
chunk__22729 = G__22739;
count__22730 = G__22740;
i__22731 = G__22741;
continue;
} else {
var k = cljs.core.first.call(null,seq__22728__$1);
var qxk_22742 = tiltontec.qxia.base.qxme.call(null,k);
var label_22743 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_22742,label_22743);

var G__22744 = cljs.core.next.call(null,seq__22728__$1);
var G__22745 = null;
var G__22746 = (0);
var G__22747 = (0);
seq__22728 = G__22744;
chunk__22729 = G__22745;
count__22730 = G__22746;
i__22731 = G__22747;
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
var seq__22748 = cljs.core.seq.call(null,kids);
var chunk__22749 = null;
var count__22750 = (0);
var i__22751 = (0);
while(true){
if((i__22751 < count__22750)){
var k = cljs.core._nth.call(null,chunk__22749,i__22751);
var qxk_22752 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_22752);

var G__22753 = seq__22748;
var G__22754 = chunk__22749;
var G__22755 = count__22750;
var G__22756 = (i__22751 + (1));
seq__22748 = G__22753;
chunk__22749 = G__22754;
count__22750 = G__22755;
i__22751 = G__22756;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__22748);
if(temp__4425__auto____$1){
var seq__22748__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22748__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__22748__$1);
var G__22757 = cljs.core.chunk_rest.call(null,seq__22748__$1);
var G__22758 = c__5338__auto__;
var G__22759 = cljs.core.count.call(null,c__5338__auto__);
var G__22760 = (0);
seq__22748 = G__22757;
chunk__22749 = G__22758;
count__22750 = G__22759;
i__22751 = G__22760;
continue;
} else {
var k = cljs.core.first.call(null,seq__22748__$1);
var qxk_22761 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_22761);

var G__22762 = cljs.core.next.call(null,seq__22748__$1);
var G__22763 = null;
var G__22764 = (0);
var G__22765 = (0);
seq__22748 = G__22762;
chunk__22749 = G__22763;
count__22750 = G__22764;
i__22751 = G__22765;
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
var lostks_22774 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_22774)){
} else {
var seq__22766_22775 = cljs.core.seq.call(null,lostks_22774);
var chunk__22767_22776 = null;
var count__22768_22777 = (0);
var i__22769_22778 = (0);
while(true){
if((i__22769_22778 < count__22768_22777)){
var kid_22779 = cljs.core._nth.call(null,chunk__22767_22776,i__22769_22778);
var qxk_22780 = tiltontec.qxia.base.qxme.call(null,kid_22779);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_22779,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_22780);
}

qxk_22780.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_22779);

var G__22781 = seq__22766_22775;
var G__22782 = chunk__22767_22776;
var G__22783 = count__22768_22777;
var G__22784 = (i__22769_22778 + (1));
seq__22766_22775 = G__22781;
chunk__22767_22776 = G__22782;
count__22768_22777 = G__22783;
i__22769_22778 = G__22784;
continue;
} else {
var temp__4425__auto___22785 = cljs.core.seq.call(null,seq__22766_22775);
if(temp__4425__auto___22785){
var seq__22766_22786__$1 = temp__4425__auto___22785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22766_22786__$1)){
var c__5338__auto___22787 = cljs.core.chunk_first.call(null,seq__22766_22786__$1);
var G__22788 = cljs.core.chunk_rest.call(null,seq__22766_22786__$1);
var G__22789 = c__5338__auto___22787;
var G__22790 = cljs.core.count.call(null,c__5338__auto___22787);
var G__22791 = (0);
seq__22766_22775 = G__22788;
chunk__22767_22776 = G__22789;
count__22768_22777 = G__22790;
i__22769_22778 = G__22791;
continue;
} else {
var kid_22792 = cljs.core.first.call(null,seq__22766_22786__$1);
var qxk_22793 = tiltontec.qxia.base.qxme.call(null,kid_22792);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_22792,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_22793);
}

qxk_22793.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_22792);

var G__22794 = cljs.core.next.call(null,seq__22766_22786__$1);
var G__22795 = null;
var G__22796 = (0);
var G__22797 = (0);
seq__22766_22775 = G__22794;
chunk__22767_22776 = G__22795;
count__22768_22777 = G__22796;
i__22769_22778 = G__22797;
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
var seq__22770 = cljs.core.seq.call(null,new_ks);
var chunk__22771 = null;
var count__22772 = (0);
var i__22773 = (0);
while(true){
if((i__22773 < count__22772)){
var k = cljs.core._nth.call(null,chunk__22771,i__22773);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_22798 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_22798);
}

var G__22799 = seq__22770;
var G__22800 = chunk__22771;
var G__22801 = count__22772;
var G__22802 = (i__22773 + (1));
seq__22770 = G__22799;
chunk__22771 = G__22800;
count__22772 = G__22801;
i__22773 = G__22802;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22770);
if(temp__4425__auto__){
var seq__22770__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22770__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__22770__$1);
var G__22803 = cljs.core.chunk_rest.call(null,seq__22770__$1);
var G__22804 = c__5338__auto__;
var G__22805 = cljs.core.count.call(null,c__5338__auto__);
var G__22806 = (0);
seq__22770 = G__22803;
chunk__22771 = G__22804;
count__22772 = G__22805;
i__22773 = G__22806;
continue;
} else {
var k = cljs.core.first.call(null,seq__22770__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_22807 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_22807);
}

var G__22808 = cljs.core.next.call(null,seq__22770__$1);
var G__22809 = null;
var G__22810 = (0);
var G__22811 = (0);
seq__22770 = G__22808;
chunk__22771 = G__22809;
count__22772 = G__22810;
i__22773 = G__22811;
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
