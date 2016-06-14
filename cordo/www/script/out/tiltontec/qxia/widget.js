// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.qxia.widget');
goog.require('cljs.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
goog.require('tiltontec.model.macros');
goog.require('clojure.set');
goog.require('tiltontec.qxia.base');
goog.require('tiltontec.cell.integrity');
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","Mobile","tiltontec.qxia.types/Mobile",-143490810)], null),(function (_,me,new$,old,c){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
var app = new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var shower = new cljs.core.Keyword(null,"shower","shower",-1731894586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var pager = new cljs.core.Keyword(null,"pager","pager",1850229940).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var routing = app.getRouting();
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__16616_16624 = cljs.core.seq.call(null,old);
var chunk__16617_16625 = null;
var count__16618_16626 = (0);
var i__16619_16627 = (0);
while(true){
if((i__16619_16627 < count__16618_16626)){
var page_16628 = cljs.core._nth.call(null,chunk__16617_16625,i__16619_16627);
var temp__4425__auto___16629 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_16628));
if(cljs.core.truth_(temp__4425__auto___16629)){
var ept_16630 = temp__4425__auto___16629;
routing.remove(ept_16630);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_16628));

var G__16631 = seq__16616_16624;
var G__16632 = chunk__16617_16625;
var G__16633 = count__16618_16626;
var G__16634 = (i__16619_16627 + (1));
seq__16616_16624 = G__16631;
chunk__16617_16625 = G__16632;
count__16618_16626 = G__16633;
i__16619_16627 = G__16634;
continue;
} else {
var temp__4425__auto___16635 = cljs.core.seq.call(null,seq__16616_16624);
if(temp__4425__auto___16635){
var seq__16616_16636__$1 = temp__4425__auto___16635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16616_16636__$1)){
var c__7021__auto___16637 = cljs.core.chunk_first.call(null,seq__16616_16636__$1);
var G__16638 = cljs.core.chunk_rest.call(null,seq__16616_16636__$1);
var G__16639 = c__7021__auto___16637;
var G__16640 = cljs.core.count.call(null,c__7021__auto___16637);
var G__16641 = (0);
seq__16616_16624 = G__16638;
chunk__16617_16625 = G__16639;
count__16618_16626 = G__16640;
i__16619_16627 = G__16641;
continue;
} else {
var page_16642 = cljs.core.first.call(null,seq__16616_16636__$1);
var temp__4425__auto___16643__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_16642));
if(cljs.core.truth_(temp__4425__auto___16643__$1)){
var ept_16644 = temp__4425__auto___16643__$1;
routing.remove(ept_16644);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_16642));

var G__16645 = cljs.core.next.call(null,seq__16616_16636__$1);
var G__16646 = null;
var G__16647 = (0);
var G__16648 = (0);
seq__16616_16624 = G__16645;
chunk__16617_16625 = G__16646;
count__16618_16626 = G__16647;
i__16619_16627 = G__16648;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__16620 = cljs.core.seq.call(null,new$);
var chunk__16621 = null;
var count__16622 = (0);
var i__16623 = (0);
while(true){
if((i__16623 < count__16622)){
var page = cljs.core._nth.call(null,chunk__16621,i__16623);
var qx_page_16649 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_16649);

var temp__4425__auto___16650 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___16650)){
var ept_16651 = temp__4425__auto___16650;
routing.onGet(ept_16651,shower,qx_page_16649);
} else {
}

var G__16652 = seq__16620;
var G__16653 = chunk__16621;
var G__16654 = count__16622;
var G__16655 = (i__16623 + (1));
seq__16620 = G__16652;
chunk__16621 = G__16653;
count__16622 = G__16654;
i__16623 = G__16655;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16620);
if(temp__4425__auto__){
var seq__16620__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16620__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__16620__$1);
var G__16656 = cljs.core.chunk_rest.call(null,seq__16620__$1);
var G__16657 = c__7021__auto__;
var G__16658 = cljs.core.count.call(null,c__7021__auto__);
var G__16659 = (0);
seq__16620 = G__16656;
chunk__16621 = G__16657;
count__16622 = G__16658;
i__16623 = G__16659;
continue;
} else {
var page = cljs.core.first.call(null,seq__16620__$1);
var qx_page_16660 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_16660);

var temp__4425__auto___16661__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___16661__$1)){
var ept_16662 = temp__4425__auto___16661__$1;
routing.onGet(ept_16662,shower,qx_page_16660);
} else {
}

var G__16663 = cljs.core.next.call(null,seq__16620__$1);
var G__16664 = null;
var G__16665 = (0);
var G__16666 = (0);
seq__16620 = G__16663;
chunk__16621 = G__16664;
count__16622 = G__16665;
i__16623 = G__16666;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),(function (me){
var temp__4425__auto__ = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto__)){
var lyo = temp__4425__auto__;
return tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo);
} else {
return null;
}
}));
tiltontec.qxia.widget.form_build_radio_group_stub = (function tiltontec$qxia$widget$form_build_radio_group_stub(form,stub){
var qx_form = tiltontec.qxia.base.qxme.call(null,form);
var temp__4425__auto___16675 = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stub));
if(cljs.core.truth_(temp__4425__auto___16675)){
var h_16676 = temp__4425__auto___16675;
qx_form.addGroupHeader(h_16676);
} else {
}

var group = (new qx.ui.mobile.form.RadioGroup());
group.setAllowEmptySelection((function (){var or__6210__auto__ = new cljs.core.Keyword(null,"allowEmptySelection","allowEmptySelection",485851121).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stub));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return false;
}
})());

tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"3-post-assembly","3-post-assembly",-607469254),stub], null),((function (group,qx_form){
return (function (opcode,defer_info){
return group.addListener("changeSelection",((function (group,qx_form){
return (function (e){
var rb = cljs.core.first.call(null,cljs.core.js__GT_clj.call(null,e.getData()));
if(cljs.core.truth_(rb)){
return tiltontec.model.core.md_reset_BANG_.call(null,stub,new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.keyword.call(null,rb.getModel()));
} else {
return null;
}
});})(group,qx_form))
);
});})(group,qx_form))
);

var seq__16671_16677 = cljs.core.seq.call(null,tiltontec.model.core.md_get.call(null,stub,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__16672_16678 = null;
var count__16673_16679 = (0);
var i__16674_16680 = (0);
while(true){
if((i__16674_16680 < count__16673_16679)){
var rb_16681 = cljs.core._nth.call(null,chunk__16672_16678,i__16674_16680);
group.add(tiltontec.qxia.base.qxme.call(null,rb_16681));

qx_form.add(tiltontec.qxia.base.qxme.call(null,rb_16681),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rb_16681)));

var G__16682 = seq__16671_16677;
var G__16683 = chunk__16672_16678;
var G__16684 = count__16673_16679;
var G__16685 = (i__16674_16680 + (1));
seq__16671_16677 = G__16682;
chunk__16672_16678 = G__16683;
count__16673_16679 = G__16684;
i__16674_16680 = G__16685;
continue;
} else {
var temp__4425__auto___16686 = cljs.core.seq.call(null,seq__16671_16677);
if(temp__4425__auto___16686){
var seq__16671_16687__$1 = temp__4425__auto___16686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16671_16687__$1)){
var c__7021__auto___16688 = cljs.core.chunk_first.call(null,seq__16671_16687__$1);
var G__16689 = cljs.core.chunk_rest.call(null,seq__16671_16687__$1);
var G__16690 = c__7021__auto___16688;
var G__16691 = cljs.core.count.call(null,c__7021__auto___16688);
var G__16692 = (0);
seq__16671_16677 = G__16689;
chunk__16672_16678 = G__16690;
count__16673_16679 = G__16691;
i__16674_16680 = G__16692;
continue;
} else {
var rb_16693 = cljs.core.first.call(null,seq__16671_16687__$1);
group.add(tiltontec.qxia.base.qxme.call(null,rb_16693));

qx_form.add(tiltontec.qxia.base.qxme.call(null,rb_16693),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rb_16693)));

var G__16694 = cljs.core.next.call(null,seq__16671_16687__$1);
var G__16695 = null;
var G__16696 = (0);
var G__16697 = (0);
seq__16671_16677 = G__16694;
chunk__16672_16678 = G__16695;
count__16673_16679 = G__16696;
i__16674_16680 = G__16697;
continue;
}
} else {
}
}
break;
}

var temp__4423__auto__ = tiltontec.model.core.md_get.call(null,stub,new cljs.core.Keyword(null,"selection","selection",975998651));
if(cljs.core.truth_(temp__4423__auto__)){
var s = temp__4423__auto__;
var gs = cljs.core.filter.call(null,((function (s,temp__4423__auto__,group,qx_form){
return (function (rb){
return cljs.core._EQ_.call(null,s,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rb)));
});})(s,temp__4423__auto__,group,qx_form))
,tiltontec.model.core.md_get.call(null,stub,new cljs.core.Keyword(null,"kids","kids",1156670771)));
return group.setSelection(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,tiltontec.qxia.base.qxme,gs)));
} else {
return group.resetSelection();
}
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225)], null),(function (_,me,new$,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__16698_16708 = cljs.core.seq.call(null,old);
var chunk__16699_16709 = null;
var count__16700_16710 = (0);
var i__16701_16711 = (0);
while(true){
if((i__16701_16711 < count__16700_16710)){
var k_16712 = cljs.core._nth.call(null,chunk__16699_16709,i__16701_16711);
var qxk_16713 = tiltontec.qxia.base.qxme.call(null,k_16712);
var label_16714 = tiltontec.model.core.md_get.call(null,k_16712,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_16713);

var G__16715 = seq__16698_16708;
var G__16716 = chunk__16699_16709;
var G__16717 = count__16700_16710;
var G__16718 = (i__16701_16711 + (1));
seq__16698_16708 = G__16715;
chunk__16699_16709 = G__16716;
count__16700_16710 = G__16717;
i__16701_16711 = G__16718;
continue;
} else {
var temp__4425__auto___16719 = cljs.core.seq.call(null,seq__16698_16708);
if(temp__4425__auto___16719){
var seq__16698_16720__$1 = temp__4425__auto___16719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16698_16720__$1)){
var c__7021__auto___16721 = cljs.core.chunk_first.call(null,seq__16698_16720__$1);
var G__16722 = cljs.core.chunk_rest.call(null,seq__16698_16720__$1);
var G__16723 = c__7021__auto___16721;
var G__16724 = cljs.core.count.call(null,c__7021__auto___16721);
var G__16725 = (0);
seq__16698_16708 = G__16722;
chunk__16699_16709 = G__16723;
count__16700_16710 = G__16724;
i__16701_16711 = G__16725;
continue;
} else {
var k_16726 = cljs.core.first.call(null,seq__16698_16720__$1);
var qxk_16727 = tiltontec.qxia.base.qxme.call(null,k_16726);
var label_16728 = tiltontec.model.core.md_get.call(null,k_16726,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_16727);

var G__16729 = cljs.core.next.call(null,seq__16698_16720__$1);
var G__16730 = null;
var G__16731 = (0);
var G__16732 = (0);
seq__16698_16708 = G__16729;
chunk__16699_16709 = G__16730;
count__16700_16710 = G__16731;
i__16701_16711 = G__16732;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__4425__auto__ = new$;
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__16702 = cljs.core.seq.call(null,kids);
var chunk__16703 = null;
var count__16704 = (0);
var i__16705 = (0);
while(true){
if((i__16705 < count__16704)){
var k = cljs.core._nth.call(null,chunk__16703,i__16705);
var G__16706_16733 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__16706_16733) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.widget.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_16735 = tiltontec.qxia.base.qxme.call(null,k);
var label_16736 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_16735,label_16736);

}

var G__16737 = seq__16702;
var G__16738 = chunk__16703;
var G__16739 = count__16704;
var G__16740 = (i__16705 + (1));
seq__16702 = G__16737;
chunk__16703 = G__16738;
count__16704 = G__16739;
i__16705 = G__16740;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__16702);
if(temp__4425__auto____$1){
var seq__16702__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16702__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__16702__$1);
var G__16741 = cljs.core.chunk_rest.call(null,seq__16702__$1);
var G__16742 = c__7021__auto__;
var G__16743 = cljs.core.count.call(null,c__7021__auto__);
var G__16744 = (0);
seq__16702 = G__16741;
chunk__16703 = G__16742;
count__16704 = G__16743;
i__16705 = G__16744;
continue;
} else {
var k = cljs.core.first.call(null,seq__16702__$1);
var G__16707_16745 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__16707_16745) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.widget.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_16747 = tiltontec.qxia.base.qxme.call(null,k);
var label_16748 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_16747,label_16748);

}

var G__16749 = cljs.core.next.call(null,seq__16702__$1);
var G__16750 = null;
var G__16751 = (0);
var G__16752 = (0);
seq__16702 = G__16749;
chunk__16703 = G__16750;
count__16704 = G__16751;
i__16705 = G__16752;
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
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724),(function (me){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"qx-init-single-enqueues-qxme!!!!","qx-init-single-enqueues-qxme!!!!",-866757605));

return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"qx-init-single-does--qxme!!!!","qx-init-single-does--qxme!!!!",-770694528));

var kids = new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,kids))){
} else {
throw (new Error("Assert failed: (= 1 (count kids))"));
}

var form = cljs.core.first.call(null,kids);
var qx_form = tiltontec.qxia.base.qxme.call(null,form);
if(cljs.core.truth_(qx_form)){
} else {
throw (new Error("Assert failed: qx-form"));
}

tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"qx-init-single-gets-qxme!!!!","qx-init-single-gets-qxme!!!!",-168440823));

return cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),(new qx.ui.mobile.form.renderer.Single(qx_form)));
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),(function (page){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"page-deferring","page-deferring",-18481214));

return qx_page.addListener("initialize",((function (qx_page){
return (function (){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"page-fires","page-fires",-379326855));

var temp__4425__auto___16757 = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___16757)){
var kids_16758 = temp__4425__auto___16757;
var content_16759 = qx_page.getContent();
var seq__16753_16760 = cljs.core.seq.call(null,kids_16758);
var chunk__16754_16761 = null;
var count__16755_16762 = (0);
var i__16756_16763 = (0);
while(true){
if((i__16756_16763 < count__16755_16762)){
var k_16764 = cljs.core._nth.call(null,chunk__16754_16761,i__16756_16763);
var qxk_16765 = tiltontec.qxia.base.qxme.call(null,k_16764);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_16764));

content_16759.add(qxk_16765);

var G__16766 = seq__16753_16760;
var G__16767 = chunk__16754_16761;
var G__16768 = count__16755_16762;
var G__16769 = (i__16756_16763 + (1));
seq__16753_16760 = G__16766;
chunk__16754_16761 = G__16767;
count__16755_16762 = G__16768;
i__16756_16763 = G__16769;
continue;
} else {
var temp__4425__auto___16770__$1 = cljs.core.seq.call(null,seq__16753_16760);
if(temp__4425__auto___16770__$1){
var seq__16753_16771__$1 = temp__4425__auto___16770__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16753_16771__$1)){
var c__7021__auto___16772 = cljs.core.chunk_first.call(null,seq__16753_16771__$1);
var G__16773 = cljs.core.chunk_rest.call(null,seq__16753_16771__$1);
var G__16774 = c__7021__auto___16772;
var G__16775 = cljs.core.count.call(null,c__7021__auto___16772);
var G__16776 = (0);
seq__16753_16760 = G__16773;
chunk__16754_16761 = G__16774;
count__16755_16762 = G__16775;
i__16756_16763 = G__16776;
continue;
} else {
var k_16777 = cljs.core.first.call(null,seq__16753_16771__$1);
var qxk_16778 = tiltontec.qxia.base.qxme.call(null,k_16777);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_16777));

content_16759.add(qxk_16778);

var G__16779 = cljs.core.next.call(null,seq__16753_16771__$1);
var G__16780 = null;
var G__16781 = (0);
var G__16782 = (0);
seq__16753_16760 = G__16779;
chunk__16754_16761 = G__16780;
count__16755_16762 = G__16781;
i__16756_16763 = G__16782;
continue;
}
} else {
}
}
break;
}
} else {
}

return qx_page;
});})(qx_page))
);
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)], null),(function (_,page,newk,oldk,___$1){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"nav-page-grabs-kids-obs","nav-page-grabs-kids-obs",2045747190));

if(cljs.core.not_EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),page], null),(function (opcode,defer_info){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
var content = qx_page.getContent();
content.removeAll();

var seq__16783 = cljs.core.seq.call(null,newk);
var chunk__16784 = null;
var count__16785 = (0);
var i__16786 = (0);
while(true){
if((i__16786 < count__16785)){
var k = cljs.core._nth.call(null,chunk__16784,i__16786);
var qxk_16787 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_16787);

var G__16788 = seq__16783;
var G__16789 = chunk__16784;
var G__16790 = count__16785;
var G__16791 = (i__16786 + (1));
seq__16783 = G__16788;
chunk__16784 = G__16789;
count__16785 = G__16790;
i__16786 = G__16791;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16783);
if(temp__4425__auto__){
var seq__16783__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16783__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__16783__$1);
var G__16792 = cljs.core.chunk_rest.call(null,seq__16783__$1);
var G__16793 = c__7021__auto__;
var G__16794 = cljs.core.count.call(null,c__7021__auto__);
var G__16795 = (0);
seq__16783 = G__16792;
chunk__16784 = G__16793;
count__16785 = G__16794;
i__16786 = G__16795;
continue;
} else {
var k = cljs.core.first.call(null,seq__16783__$1);
var qxk_16796 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_16796);

var G__16797 = cljs.core.next.call(null,seq__16783__$1);
var G__16798 = null;
var G__16799 = (0);
var G__16800 = (0);
seq__16783 = G__16797;
chunk__16784 = G__16798;
count__16785 = G__16799;
i__16786 = G__16800;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),new cljs.core.Keyword("tiltontec.qxia.types","m.Input","tiltontec.qxia.types/m.Input",-509810846)], null),(function (_,me,new_fn,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(new_fn)){
var form = tiltontec.qxia.base.qxme.call(null,tiltontec.model.core.qx_par.call(null,me));
if(cljs.core.truth_(form)){
} else {
throw (new Error("Assert failed: form"));
}

var vmgr = form.getValidationManager();
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"validmgr-add","validmgr-add",101529472),tiltontec.cell.base.ia_type.call(null,me));

return vmgr.add(tiltontec.qxia.base.qxme.call(null,me),new_fn);
} else {
return null;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_property_observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword("tiltontec.qxia.types","m.SelectBox","tiltontec.qxia.types/m.SelectBox",-663708114)], null),(function (_,me,new$,___$1,___$2){
if(cljs.core.truth_(new$)){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"3-post-assembly","3-post-assembly",-607469254),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(tiltontec.qxia.base.qxme.call(null,me).getModel())){
} else {
throw (new Error("Assert failed: (.getModel (qxme me))"));
}

return tiltontec.qxia.base.qxme.call(null,me).setSelection(new$);
}));
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","qx.Object","tiltontec.qxia.types/qx.Object",-1295429520)], null),(function (_,me,newk,oldk,___$1){
var G__16801 = (((tiltontec.cell.base.ia_type.call(null,me) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,me).fqn:null);
switch (G__16801) {
case "tiltontec.qxia.types/m.Single":
return null;

break;
case "tiltontec.qxia.types/m.RadioGroupStub":
return null;

break;
default:


return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),((function (G__16801){
return (function (opcode,defer_info){
return tiltontec.qxia.widget.kids_refresh.call(null,me,newk,oldk);
});})(G__16801))
);

}
}));
tiltontec.qxia.widget.kids_refresh = (function tiltontec$qxia$widget$kids_refresh(me,newk,oldk){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
} else {
var lostks_16819 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_16819)){
} else {
var seq__16811_16820 = cljs.core.seq.call(null,lostks_16819);
var chunk__16812_16821 = null;
var count__16813_16822 = (0);
var i__16814_16823 = (0);
while(true){
if((i__16814_16823 < count__16813_16822)){
var kid_16824 = cljs.core._nth.call(null,chunk__16812_16821,i__16814_16823);
var qxk_16825 = tiltontec.qxia.base.qxme.call(null,kid_16824);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_16824,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_16825);
}

qxk_16825.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_16824);

var G__16826 = seq__16811_16820;
var G__16827 = chunk__16812_16821;
var G__16828 = count__16813_16822;
var G__16829 = (i__16814_16823 + (1));
seq__16811_16820 = G__16826;
chunk__16812_16821 = G__16827;
count__16813_16822 = G__16828;
i__16814_16823 = G__16829;
continue;
} else {
var temp__4425__auto___16830 = cljs.core.seq.call(null,seq__16811_16820);
if(temp__4425__auto___16830){
var seq__16811_16831__$1 = temp__4425__auto___16830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16811_16831__$1)){
var c__7021__auto___16832 = cljs.core.chunk_first.call(null,seq__16811_16831__$1);
var G__16833 = cljs.core.chunk_rest.call(null,seq__16811_16831__$1);
var G__16834 = c__7021__auto___16832;
var G__16835 = cljs.core.count.call(null,c__7021__auto___16832);
var G__16836 = (0);
seq__16811_16820 = G__16833;
chunk__16812_16821 = G__16834;
count__16813_16822 = G__16835;
i__16814_16823 = G__16836;
continue;
} else {
var kid_16837 = cljs.core.first.call(null,seq__16811_16831__$1);
var qxk_16838 = tiltontec.qxia.base.qxme.call(null,kid_16837);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_16837,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_16838);
}

qxk_16838.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_16837);

var G__16839 = cljs.core.next.call(null,seq__16811_16831__$1);
var G__16840 = null;
var G__16841 = (0);
var G__16842 = (0);
seq__16811_16820 = G__16839;
chunk__16812_16821 = G__16840;
count__16813_16822 = G__16841;
i__16814_16823 = G__16842;
continue;
}
} else {
}
}
break;
}
}
}

var new_ks = ((cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound))?newk:clojure.set.difference.call(null,cljs.core.set.call(null,newk),cljs.core.set.call(null,oldk)));
if(cljs.core.empty_QMARK_.call(null,new_ks)){
return null;
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newks!!!!!!!","compo-newks!!!!!!!",1607733632),tiltontec.cell.base.ia_type.call(null,me),cljs.core.count.call(null,new_ks));

var seq__16815 = cljs.core.seq.call(null,new_ks);
var chunk__16816 = null;
var count__16817 = (0);
var i__16818 = (0);
while(true){
if((i__16818 < count__16817)){
var k = cljs.core._nth.call(null,chunk__16816,i__16818);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__16843 = seq__16815;
var G__16844 = chunk__16816;
var G__16845 = count__16817;
var G__16846 = (i__16818 + (1));
seq__16815 = G__16843;
chunk__16816 = G__16844;
count__16817 = G__16845;
i__16818 = G__16846;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16815);
if(temp__4425__auto__){
var seq__16815__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16815__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__16815__$1);
var G__16847 = cljs.core.chunk_rest.call(null,seq__16815__$1);
var G__16848 = c__7021__auto__;
var G__16849 = cljs.core.count.call(null,c__7021__auto__);
var G__16850 = (0);
seq__16815 = G__16847;
chunk__16816 = G__16848;
count__16817 = G__16849;
i__16818 = G__16850;
continue;
} else {
var k = cljs.core.first.call(null,seq__16815__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__16851 = cljs.core.next.call(null,seq__16815__$1);
var G__16852 = null;
var G__16853 = (0);
var G__16854 = (0);
seq__16815 = G__16851;
chunk__16816 = G__16852;
count__16817 = G__16853;
i__16818 = G__16854;
continue;
}
} else {
return null;
}
}
break;
}
}
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slot-data","slot-data",1146367809),new cljs.core.Keyword("tiltontec.qxia.types","m.Picker","tiltontec.qxia.types/m.Picker",-1343372926)], null),(function (_,me,new$,old,c){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
var p = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__16855_16863 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__16856_16864 = null;
var count__16857_16865 = (0);
var i__16858_16866 = (0);
while(true){
if((i__16858_16866 < count__16857_16865)){
var n_16867 = cljs.core._nth.call(null,chunk__16856_16864,i__16858_16866);
p.removeSlot(n_16867);

var G__16868 = seq__16855_16863;
var G__16869 = chunk__16856_16864;
var G__16870 = count__16857_16865;
var G__16871 = (i__16858_16866 + (1));
seq__16855_16863 = G__16868;
chunk__16856_16864 = G__16869;
count__16857_16865 = G__16870;
i__16858_16866 = G__16871;
continue;
} else {
var temp__4425__auto___16872 = cljs.core.seq.call(null,seq__16855_16863);
if(temp__4425__auto___16872){
var seq__16855_16873__$1 = temp__4425__auto___16872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16855_16873__$1)){
var c__7021__auto___16874 = cljs.core.chunk_first.call(null,seq__16855_16873__$1);
var G__16875 = cljs.core.chunk_rest.call(null,seq__16855_16873__$1);
var G__16876 = c__7021__auto___16874;
var G__16877 = cljs.core.count.call(null,c__7021__auto___16874);
var G__16878 = (0);
seq__16855_16863 = G__16875;
chunk__16856_16864 = G__16876;
count__16857_16865 = G__16877;
i__16858_16866 = G__16878;
continue;
} else {
var n_16879 = cljs.core.first.call(null,seq__16855_16873__$1);
p.removeSlot(n_16879);

var G__16880 = cljs.core.next.call(null,seq__16855_16873__$1);
var G__16881 = null;
var G__16882 = (0);
var G__16883 = (0);
seq__16855_16863 = G__16880;
chunk__16856_16864 = G__16881;
count__16857_16865 = G__16882;
i__16858_16866 = G__16883;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__16859 = cljs.core.seq.call(null,new$);
var chunk__16860 = null;
var count__16861 = (0);
var i__16862 = (0);
while(true){
if((i__16862 < count__16861)){
var sd = cljs.core._nth.call(null,chunk__16860,i__16862);
var da_16884 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_16884);

var G__16885 = seq__16859;
var G__16886 = chunk__16860;
var G__16887 = count__16861;
var G__16888 = (i__16862 + (1));
seq__16859 = G__16885;
chunk__16860 = G__16886;
count__16861 = G__16887;
i__16862 = G__16888;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16859);
if(temp__4425__auto__){
var seq__16859__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16859__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__16859__$1);
var G__16889 = cljs.core.chunk_rest.call(null,seq__16859__$1);
var G__16890 = c__7021__auto__;
var G__16891 = cljs.core.count.call(null,c__7021__auto__);
var G__16892 = (0);
seq__16859 = G__16889;
chunk__16860 = G__16890;
count__16861 = G__16891;
i__16862 = G__16892;
continue;
} else {
var sd = cljs.core.first.call(null,seq__16859__$1);
var da_16893 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_16893);

var G__16894 = cljs.core.next.call(null,seq__16859__$1);
var G__16895 = null;
var G__16896 = (0);
var G__16897 = (0);
seq__16859 = G__16894;
chunk__16860 = G__16895;
count__16861 = G__16896;
i__16862 = G__16897;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),new cljs.core.Keyword("tiltontec.qxia.types","m.Input","tiltontec.qxia.types/m.Input",-509810846)], null),(function (_,me,new_fn,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(new_fn)){
var form = tiltontec.qxia.base.qxme.call(null,tiltontec.model.core.qx_par.call(null,me));
if(cljs.core.truth_(form)){
} else {
throw (new Error("Assert failed: form"));
}

var vmgr = form.getValidationManager();
return vmgr.add(tiltontec.qxia.base.qxme.call(null,me),new_fn);
} else {
return null;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("tiltontec.qxia.types","m.MValue","tiltontec.qxia.types/m.MValue",-994870885)], null),(function (_,me,new$,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
return tiltontec.qxia.base.qxme.call(null,me).setValue(new$);
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawing","drawing",1181749528),new cljs.core.Keyword("tiltontec.qxia.types","m.Canvas","tiltontec.qxia.types/m.Canvas",-1210794783)], null),(function (_,me,new_fn,___$1,___$2){
if(cljs.core.truth_(new_fn)){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
return new_fn.call(null,me);
}));
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword("tiltontec.qxia.types","m.Widget","tiltontec.qxia.types/m.Widget",2103465403)], null),(function (_,me,new_anchor,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(new_anchor)){
return tiltontec.qxia.base.qxme.call(null,me).setAnchor(tiltontec.qxia.base.qxme.call(null,new_anchor));
} else {
return null;
}
}));
}));
