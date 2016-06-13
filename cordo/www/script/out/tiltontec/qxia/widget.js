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
var seq__460746_460754 = cljs.core.seq.call(null,old);
var chunk__460747_460755 = null;
var count__460748_460756 = (0);
var i__460749_460757 = (0);
while(true){
if((i__460749_460757 < count__460748_460756)){
var page_460758 = cljs.core._nth.call(null,chunk__460747_460755,i__460749_460757);
var temp__4425__auto___460759 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_460758));
if(cljs.core.truth_(temp__4425__auto___460759)){
var ept_460760 = temp__4425__auto___460759;
routing.remove(ept_460760);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_460758));

var G__460761 = seq__460746_460754;
var G__460762 = chunk__460747_460755;
var G__460763 = count__460748_460756;
var G__460764 = (i__460749_460757 + (1));
seq__460746_460754 = G__460761;
chunk__460747_460755 = G__460762;
count__460748_460756 = G__460763;
i__460749_460757 = G__460764;
continue;
} else {
var temp__4425__auto___460765 = cljs.core.seq.call(null,seq__460746_460754);
if(temp__4425__auto___460765){
var seq__460746_460766__$1 = temp__4425__auto___460765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__460746_460766__$1)){
var c__7021__auto___460767 = cljs.core.chunk_first.call(null,seq__460746_460766__$1);
var G__460768 = cljs.core.chunk_rest.call(null,seq__460746_460766__$1);
var G__460769 = c__7021__auto___460767;
var G__460770 = cljs.core.count.call(null,c__7021__auto___460767);
var G__460771 = (0);
seq__460746_460754 = G__460768;
chunk__460747_460755 = G__460769;
count__460748_460756 = G__460770;
i__460749_460757 = G__460771;
continue;
} else {
var page_460772 = cljs.core.first.call(null,seq__460746_460766__$1);
var temp__4425__auto___460773__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_460772));
if(cljs.core.truth_(temp__4425__auto___460773__$1)){
var ept_460774 = temp__4425__auto___460773__$1;
routing.remove(ept_460774);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_460772));

var G__460775 = cljs.core.next.call(null,seq__460746_460766__$1);
var G__460776 = null;
var G__460777 = (0);
var G__460778 = (0);
seq__460746_460754 = G__460775;
chunk__460747_460755 = G__460776;
count__460748_460756 = G__460777;
i__460749_460757 = G__460778;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__460750 = cljs.core.seq.call(null,new$);
var chunk__460751 = null;
var count__460752 = (0);
var i__460753 = (0);
while(true){
if((i__460753 < count__460752)){
var page = cljs.core._nth.call(null,chunk__460751,i__460753);
var qx_page_460779 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_460779);

var temp__4425__auto___460780 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___460780)){
var ept_460781 = temp__4425__auto___460780;
routing.onGet(ept_460781,shower,qx_page_460779);
} else {
}

var G__460782 = seq__460750;
var G__460783 = chunk__460751;
var G__460784 = count__460752;
var G__460785 = (i__460753 + (1));
seq__460750 = G__460782;
chunk__460751 = G__460783;
count__460752 = G__460784;
i__460753 = G__460785;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__460750);
if(temp__4425__auto__){
var seq__460750__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__460750__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__460750__$1);
var G__460786 = cljs.core.chunk_rest.call(null,seq__460750__$1);
var G__460787 = c__7021__auto__;
var G__460788 = cljs.core.count.call(null,c__7021__auto__);
var G__460789 = (0);
seq__460750 = G__460786;
chunk__460751 = G__460787;
count__460752 = G__460788;
i__460753 = G__460789;
continue;
} else {
var page = cljs.core.first.call(null,seq__460750__$1);
var qx_page_460790 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_460790);

var temp__4425__auto___460791__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___460791__$1)){
var ept_460792 = temp__4425__auto___460791__$1;
routing.onGet(ept_460792,shower,qx_page_460790);
} else {
}

var G__460793 = cljs.core.next.call(null,seq__460750__$1);
var G__460794 = null;
var G__460795 = (0);
var G__460796 = (0);
seq__460750 = G__460793;
chunk__460751 = G__460794;
count__460752 = G__460795;
i__460753 = G__460796;
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
var temp__4425__auto___460805 = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stub));
if(cljs.core.truth_(temp__4425__auto___460805)){
var h_460806 = temp__4425__auto___460805;
qx_form.addGroupHeader(h_460806);
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

var seq__460801_460807 = cljs.core.seq.call(null,tiltontec.model.core.md_get.call(null,stub,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__460802_460808 = null;
var count__460803_460809 = (0);
var i__460804_460810 = (0);
while(true){
if((i__460804_460810 < count__460803_460809)){
var rb_460811 = cljs.core._nth.call(null,chunk__460802_460808,i__460804_460810);
group.add(tiltontec.qxia.base.qxme.call(null,rb_460811));

qx_form.add(tiltontec.qxia.base.qxme.call(null,rb_460811),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rb_460811)));

var G__460812 = seq__460801_460807;
var G__460813 = chunk__460802_460808;
var G__460814 = count__460803_460809;
var G__460815 = (i__460804_460810 + (1));
seq__460801_460807 = G__460812;
chunk__460802_460808 = G__460813;
count__460803_460809 = G__460814;
i__460804_460810 = G__460815;
continue;
} else {
var temp__4425__auto___460816 = cljs.core.seq.call(null,seq__460801_460807);
if(temp__4425__auto___460816){
var seq__460801_460817__$1 = temp__4425__auto___460816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__460801_460817__$1)){
var c__7021__auto___460818 = cljs.core.chunk_first.call(null,seq__460801_460817__$1);
var G__460819 = cljs.core.chunk_rest.call(null,seq__460801_460817__$1);
var G__460820 = c__7021__auto___460818;
var G__460821 = cljs.core.count.call(null,c__7021__auto___460818);
var G__460822 = (0);
seq__460801_460807 = G__460819;
chunk__460802_460808 = G__460820;
count__460803_460809 = G__460821;
i__460804_460810 = G__460822;
continue;
} else {
var rb_460823 = cljs.core.first.call(null,seq__460801_460817__$1);
group.add(tiltontec.qxia.base.qxme.call(null,rb_460823));

qx_form.add(tiltontec.qxia.base.qxme.call(null,rb_460823),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rb_460823)));

var G__460824 = cljs.core.next.call(null,seq__460801_460817__$1);
var G__460825 = null;
var G__460826 = (0);
var G__460827 = (0);
seq__460801_460807 = G__460824;
chunk__460802_460808 = G__460825;
count__460803_460809 = G__460826;
i__460804_460810 = G__460827;
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
var seq__460828_460838 = cljs.core.seq.call(null,old);
var chunk__460829_460839 = null;
var count__460830_460840 = (0);
var i__460831_460841 = (0);
while(true){
if((i__460831_460841 < count__460830_460840)){
var k_460842 = cljs.core._nth.call(null,chunk__460829_460839,i__460831_460841);
var qxk_460843 = tiltontec.qxia.base.qxme.call(null,k_460842);
var label_460844 = tiltontec.model.core.md_get.call(null,k_460842,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_460843);

var G__460845 = seq__460828_460838;
var G__460846 = chunk__460829_460839;
var G__460847 = count__460830_460840;
var G__460848 = (i__460831_460841 + (1));
seq__460828_460838 = G__460845;
chunk__460829_460839 = G__460846;
count__460830_460840 = G__460847;
i__460831_460841 = G__460848;
continue;
} else {
var temp__4425__auto___460849 = cljs.core.seq.call(null,seq__460828_460838);
if(temp__4425__auto___460849){
var seq__460828_460850__$1 = temp__4425__auto___460849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__460828_460850__$1)){
var c__7021__auto___460851 = cljs.core.chunk_first.call(null,seq__460828_460850__$1);
var G__460852 = cljs.core.chunk_rest.call(null,seq__460828_460850__$1);
var G__460853 = c__7021__auto___460851;
var G__460854 = cljs.core.count.call(null,c__7021__auto___460851);
var G__460855 = (0);
seq__460828_460838 = G__460852;
chunk__460829_460839 = G__460853;
count__460830_460840 = G__460854;
i__460831_460841 = G__460855;
continue;
} else {
var k_460856 = cljs.core.first.call(null,seq__460828_460850__$1);
var qxk_460857 = tiltontec.qxia.base.qxme.call(null,k_460856);
var label_460858 = tiltontec.model.core.md_get.call(null,k_460856,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_460857);

var G__460859 = cljs.core.next.call(null,seq__460828_460850__$1);
var G__460860 = null;
var G__460861 = (0);
var G__460862 = (0);
seq__460828_460838 = G__460859;
chunk__460829_460839 = G__460860;
count__460830_460840 = G__460861;
i__460831_460841 = G__460862;
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
var seq__460832 = cljs.core.seq.call(null,kids);
var chunk__460833 = null;
var count__460834 = (0);
var i__460835 = (0);
while(true){
if((i__460835 < count__460834)){
var k = cljs.core._nth.call(null,chunk__460833,i__460835);
var G__460836_460863 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__460836_460863) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.widget.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_460865 = tiltontec.qxia.base.qxme.call(null,k);
var label_460866 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_460865,label_460866);

}

var G__460867 = seq__460832;
var G__460868 = chunk__460833;
var G__460869 = count__460834;
var G__460870 = (i__460835 + (1));
seq__460832 = G__460867;
chunk__460833 = G__460868;
count__460834 = G__460869;
i__460835 = G__460870;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__460832);
if(temp__4425__auto____$1){
var seq__460832__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__460832__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__460832__$1);
var G__460871 = cljs.core.chunk_rest.call(null,seq__460832__$1);
var G__460872 = c__7021__auto__;
var G__460873 = cljs.core.count.call(null,c__7021__auto__);
var G__460874 = (0);
seq__460832 = G__460871;
chunk__460833 = G__460872;
count__460834 = G__460873;
i__460835 = G__460874;
continue;
} else {
var k = cljs.core.first.call(null,seq__460832__$1);
var G__460837_460875 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__460837_460875) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.widget.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_460877 = tiltontec.qxia.base.qxme.call(null,k);
var label_460878 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_460877,label_460878);

}

var G__460879 = cljs.core.next.call(null,seq__460832__$1);
var G__460880 = null;
var G__460881 = (0);
var G__460882 = (0);
seq__460832 = G__460879;
chunk__460833 = G__460880;
count__460834 = G__460881;
i__460835 = G__460882;
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

var temp__4425__auto___460887 = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___460887)){
var kids_460888 = temp__4425__auto___460887;
var content_460889 = qx_page.getContent();
var seq__460883_460890 = cljs.core.seq.call(null,kids_460888);
var chunk__460884_460891 = null;
var count__460885_460892 = (0);
var i__460886_460893 = (0);
while(true){
if((i__460886_460893 < count__460885_460892)){
var k_460894 = cljs.core._nth.call(null,chunk__460884_460891,i__460886_460893);
var qxk_460895 = tiltontec.qxia.base.qxme.call(null,k_460894);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_460894));

content_460889.add(qxk_460895);

var G__460896 = seq__460883_460890;
var G__460897 = chunk__460884_460891;
var G__460898 = count__460885_460892;
var G__460899 = (i__460886_460893 + (1));
seq__460883_460890 = G__460896;
chunk__460884_460891 = G__460897;
count__460885_460892 = G__460898;
i__460886_460893 = G__460899;
continue;
} else {
var temp__4425__auto___460900__$1 = cljs.core.seq.call(null,seq__460883_460890);
if(temp__4425__auto___460900__$1){
var seq__460883_460901__$1 = temp__4425__auto___460900__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__460883_460901__$1)){
var c__7021__auto___460902 = cljs.core.chunk_first.call(null,seq__460883_460901__$1);
var G__460903 = cljs.core.chunk_rest.call(null,seq__460883_460901__$1);
var G__460904 = c__7021__auto___460902;
var G__460905 = cljs.core.count.call(null,c__7021__auto___460902);
var G__460906 = (0);
seq__460883_460890 = G__460903;
chunk__460884_460891 = G__460904;
count__460885_460892 = G__460905;
i__460886_460893 = G__460906;
continue;
} else {
var k_460907 = cljs.core.first.call(null,seq__460883_460901__$1);
var qxk_460908 = tiltontec.qxia.base.qxme.call(null,k_460907);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_460907));

content_460889.add(qxk_460908);

var G__460909 = cljs.core.next.call(null,seq__460883_460901__$1);
var G__460910 = null;
var G__460911 = (0);
var G__460912 = (0);
seq__460883_460890 = G__460909;
chunk__460884_460891 = G__460910;
count__460885_460892 = G__460911;
i__460886_460893 = G__460912;
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

var seq__460913 = cljs.core.seq.call(null,newk);
var chunk__460914 = null;
var count__460915 = (0);
var i__460916 = (0);
while(true){
if((i__460916 < count__460915)){
var k = cljs.core._nth.call(null,chunk__460914,i__460916);
var qxk_460917 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_460917);

var G__460918 = seq__460913;
var G__460919 = chunk__460914;
var G__460920 = count__460915;
var G__460921 = (i__460916 + (1));
seq__460913 = G__460918;
chunk__460914 = G__460919;
count__460915 = G__460920;
i__460916 = G__460921;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__460913);
if(temp__4425__auto__){
var seq__460913__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__460913__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__460913__$1);
var G__460922 = cljs.core.chunk_rest.call(null,seq__460913__$1);
var G__460923 = c__7021__auto__;
var G__460924 = cljs.core.count.call(null,c__7021__auto__);
var G__460925 = (0);
seq__460913 = G__460922;
chunk__460914 = G__460923;
count__460915 = G__460924;
i__460916 = G__460925;
continue;
} else {
var k = cljs.core.first.call(null,seq__460913__$1);
var qxk_460926 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_460926);

var G__460927 = cljs.core.next.call(null,seq__460913__$1);
var G__460928 = null;
var G__460929 = (0);
var G__460930 = (0);
seq__460913 = G__460927;
chunk__460914 = G__460928;
count__460915 = G__460929;
i__460916 = G__460930;
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
var G__460931 = (((tiltontec.cell.base.ia_type.call(null,me) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,me).fqn:null);
switch (G__460931) {
case "tiltontec.qxia.types/m.Single":
return null;

break;
case "tiltontec.qxia.types/m.RadioGroupStub":
return null;

break;
default:


return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),((function (G__460931){
return (function (opcode,defer_info){
return tiltontec.qxia.widget.kids_refresh.call(null,me,newk,oldk);
});})(G__460931))
);

}
}));
tiltontec.qxia.widget.kids_refresh = (function tiltontec$qxia$widget$kids_refresh(me,newk,oldk){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
} else {
var lostks_460949 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_460949)){
} else {
var seq__460941_460950 = cljs.core.seq.call(null,lostks_460949);
var chunk__460942_460951 = null;
var count__460943_460952 = (0);
var i__460944_460953 = (0);
while(true){
if((i__460944_460953 < count__460943_460952)){
var kid_460954 = cljs.core._nth.call(null,chunk__460942_460951,i__460944_460953);
var qxk_460955 = tiltontec.qxia.base.qxme.call(null,kid_460954);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_460954,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_460955);
}

qxk_460955.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_460954);

var G__460956 = seq__460941_460950;
var G__460957 = chunk__460942_460951;
var G__460958 = count__460943_460952;
var G__460959 = (i__460944_460953 + (1));
seq__460941_460950 = G__460956;
chunk__460942_460951 = G__460957;
count__460943_460952 = G__460958;
i__460944_460953 = G__460959;
continue;
} else {
var temp__4425__auto___460960 = cljs.core.seq.call(null,seq__460941_460950);
if(temp__4425__auto___460960){
var seq__460941_460961__$1 = temp__4425__auto___460960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__460941_460961__$1)){
var c__7021__auto___460962 = cljs.core.chunk_first.call(null,seq__460941_460961__$1);
var G__460963 = cljs.core.chunk_rest.call(null,seq__460941_460961__$1);
var G__460964 = c__7021__auto___460962;
var G__460965 = cljs.core.count.call(null,c__7021__auto___460962);
var G__460966 = (0);
seq__460941_460950 = G__460963;
chunk__460942_460951 = G__460964;
count__460943_460952 = G__460965;
i__460944_460953 = G__460966;
continue;
} else {
var kid_460967 = cljs.core.first.call(null,seq__460941_460961__$1);
var qxk_460968 = tiltontec.qxia.base.qxme.call(null,kid_460967);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_460967,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_460968);
}

qxk_460968.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_460967);

var G__460969 = cljs.core.next.call(null,seq__460941_460961__$1);
var G__460970 = null;
var G__460971 = (0);
var G__460972 = (0);
seq__460941_460950 = G__460969;
chunk__460942_460951 = G__460970;
count__460943_460952 = G__460971;
i__460944_460953 = G__460972;
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

var seq__460945 = cljs.core.seq.call(null,new_ks);
var chunk__460946 = null;
var count__460947 = (0);
var i__460948 = (0);
while(true){
if((i__460948 < count__460947)){
var k = cljs.core._nth.call(null,chunk__460946,i__460948);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__460973 = seq__460945;
var G__460974 = chunk__460946;
var G__460975 = count__460947;
var G__460976 = (i__460948 + (1));
seq__460945 = G__460973;
chunk__460946 = G__460974;
count__460947 = G__460975;
i__460948 = G__460976;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__460945);
if(temp__4425__auto__){
var seq__460945__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__460945__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__460945__$1);
var G__460977 = cljs.core.chunk_rest.call(null,seq__460945__$1);
var G__460978 = c__7021__auto__;
var G__460979 = cljs.core.count.call(null,c__7021__auto__);
var G__460980 = (0);
seq__460945 = G__460977;
chunk__460946 = G__460978;
count__460947 = G__460979;
i__460948 = G__460980;
continue;
} else {
var k = cljs.core.first.call(null,seq__460945__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__460981 = cljs.core.next.call(null,seq__460945__$1);
var G__460982 = null;
var G__460983 = (0);
var G__460984 = (0);
seq__460945 = G__460981;
chunk__460946 = G__460982;
count__460947 = G__460983;
i__460948 = G__460984;
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
var seq__460985_460993 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__460986_460994 = null;
var count__460987_460995 = (0);
var i__460988_460996 = (0);
while(true){
if((i__460988_460996 < count__460987_460995)){
var n_460997 = cljs.core._nth.call(null,chunk__460986_460994,i__460988_460996);
p.removeSlot(n_460997);

var G__460998 = seq__460985_460993;
var G__460999 = chunk__460986_460994;
var G__461000 = count__460987_460995;
var G__461001 = (i__460988_460996 + (1));
seq__460985_460993 = G__460998;
chunk__460986_460994 = G__460999;
count__460987_460995 = G__461000;
i__460988_460996 = G__461001;
continue;
} else {
var temp__4425__auto___461002 = cljs.core.seq.call(null,seq__460985_460993);
if(temp__4425__auto___461002){
var seq__460985_461003__$1 = temp__4425__auto___461002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__460985_461003__$1)){
var c__7021__auto___461004 = cljs.core.chunk_first.call(null,seq__460985_461003__$1);
var G__461005 = cljs.core.chunk_rest.call(null,seq__460985_461003__$1);
var G__461006 = c__7021__auto___461004;
var G__461007 = cljs.core.count.call(null,c__7021__auto___461004);
var G__461008 = (0);
seq__460985_460993 = G__461005;
chunk__460986_460994 = G__461006;
count__460987_460995 = G__461007;
i__460988_460996 = G__461008;
continue;
} else {
var n_461009 = cljs.core.first.call(null,seq__460985_461003__$1);
p.removeSlot(n_461009);

var G__461010 = cljs.core.next.call(null,seq__460985_461003__$1);
var G__461011 = null;
var G__461012 = (0);
var G__461013 = (0);
seq__460985_460993 = G__461010;
chunk__460986_460994 = G__461011;
count__460987_460995 = G__461012;
i__460988_460996 = G__461013;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__460989 = cljs.core.seq.call(null,new$);
var chunk__460990 = null;
var count__460991 = (0);
var i__460992 = (0);
while(true){
if((i__460992 < count__460991)){
var sd = cljs.core._nth.call(null,chunk__460990,i__460992);
var da_461014 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_461014);

var G__461015 = seq__460989;
var G__461016 = chunk__460990;
var G__461017 = count__460991;
var G__461018 = (i__460992 + (1));
seq__460989 = G__461015;
chunk__460990 = G__461016;
count__460991 = G__461017;
i__460992 = G__461018;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__460989);
if(temp__4425__auto__){
var seq__460989__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__460989__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__460989__$1);
var G__461019 = cljs.core.chunk_rest.call(null,seq__460989__$1);
var G__461020 = c__7021__auto__;
var G__461021 = cljs.core.count.call(null,c__7021__auto__);
var G__461022 = (0);
seq__460989 = G__461019;
chunk__460990 = G__461020;
count__460991 = G__461021;
i__460992 = G__461022;
continue;
} else {
var sd = cljs.core.first.call(null,seq__460989__$1);
var da_461023 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_461023);

var G__461024 = cljs.core.next.call(null,seq__460989__$1);
var G__461025 = null;
var G__461026 = (0);
var G__461027 = (0);
seq__460989 = G__461024;
chunk__460990 = G__461025;
count__460991 = G__461026;
i__460992 = G__461027;
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
