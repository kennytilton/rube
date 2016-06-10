// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.qxia.widget');
goog.require('cljs.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
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
var seq__49833_49841 = cljs.core.seq.call(null,old);
var chunk__49834_49842 = null;
var count__49835_49843 = (0);
var i__49836_49844 = (0);
while(true){
if((i__49836_49844 < count__49835_49843)){
var page_49845 = cljs.core._nth.call(null,chunk__49834_49842,i__49836_49844);
var temp__4425__auto___49846 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_49845));
if(cljs.core.truth_(temp__4425__auto___49846)){
var ept_49847 = temp__4425__auto___49846;
routing.remove(ept_49847);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_49845));

var G__49848 = seq__49833_49841;
var G__49849 = chunk__49834_49842;
var G__49850 = count__49835_49843;
var G__49851 = (i__49836_49844 + (1));
seq__49833_49841 = G__49848;
chunk__49834_49842 = G__49849;
count__49835_49843 = G__49850;
i__49836_49844 = G__49851;
continue;
} else {
var temp__4425__auto___49852 = cljs.core.seq.call(null,seq__49833_49841);
if(temp__4425__auto___49852){
var seq__49833_49853__$1 = temp__4425__auto___49852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49833_49853__$1)){
var c__7021__auto___49854 = cljs.core.chunk_first.call(null,seq__49833_49853__$1);
var G__49855 = cljs.core.chunk_rest.call(null,seq__49833_49853__$1);
var G__49856 = c__7021__auto___49854;
var G__49857 = cljs.core.count.call(null,c__7021__auto___49854);
var G__49858 = (0);
seq__49833_49841 = G__49855;
chunk__49834_49842 = G__49856;
count__49835_49843 = G__49857;
i__49836_49844 = G__49858;
continue;
} else {
var page_49859 = cljs.core.first.call(null,seq__49833_49853__$1);
var temp__4425__auto___49860__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_49859));
if(cljs.core.truth_(temp__4425__auto___49860__$1)){
var ept_49861 = temp__4425__auto___49860__$1;
routing.remove(ept_49861);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_49859));

var G__49862 = cljs.core.next.call(null,seq__49833_49853__$1);
var G__49863 = null;
var G__49864 = (0);
var G__49865 = (0);
seq__49833_49841 = G__49862;
chunk__49834_49842 = G__49863;
count__49835_49843 = G__49864;
i__49836_49844 = G__49865;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__49837 = cljs.core.seq.call(null,new$);
var chunk__49838 = null;
var count__49839 = (0);
var i__49840 = (0);
while(true){
if((i__49840 < count__49839)){
var page = cljs.core._nth.call(null,chunk__49838,i__49840);
var qx_page_49866 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_49866);

var temp__4425__auto___49867 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___49867)){
var ept_49868 = temp__4425__auto___49867;
routing.onGet(ept_49868,shower,qx_page_49866);
} else {
}

var G__49869 = seq__49837;
var G__49870 = chunk__49838;
var G__49871 = count__49839;
var G__49872 = (i__49840 + (1));
seq__49837 = G__49869;
chunk__49838 = G__49870;
count__49839 = G__49871;
i__49840 = G__49872;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__49837);
if(temp__4425__auto__){
var seq__49837__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49837__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__49837__$1);
var G__49873 = cljs.core.chunk_rest.call(null,seq__49837__$1);
var G__49874 = c__7021__auto__;
var G__49875 = cljs.core.count.call(null,c__7021__auto__);
var G__49876 = (0);
seq__49837 = G__49873;
chunk__49838 = G__49874;
count__49839 = G__49875;
i__49840 = G__49876;
continue;
} else {
var page = cljs.core.first.call(null,seq__49837__$1);
var qx_page_49877 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_49877);

var temp__4425__auto___49878__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___49878__$1)){
var ept_49879 = temp__4425__auto___49878__$1;
routing.onGet(ept_49879,shower,qx_page_49877);
} else {
}

var G__49880 = cljs.core.next.call(null,seq__49837__$1);
var G__49881 = null;
var G__49882 = (0);
var G__49883 = (0);
seq__49837 = G__49880;
chunk__49838 = G__49881;
count__49839 = G__49882;
i__49840 = G__49883;
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
var temp__4425__auto___49892 = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stub));
if(cljs.core.truth_(temp__4425__auto___49892)){
var h_49893 = temp__4425__auto___49892;
qx_form.addGroupHeader(h_49893);
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
cljs.core.println.call(null,new cljs.core.Keyword(null,"model?","model?",1502581451),cljs.core.keyword.call(null,rb.getModel()));

return tiltontec.model.core.md_reset_BANG_.call(null,stub,new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.keyword.call(null,rb.getModel()));
} else {
return null;
}
});})(group,qx_form))
);
});})(group,qx_form))
);

var seq__49888_49894 = cljs.core.seq.call(null,tiltontec.model.core.md_get.call(null,stub,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__49889_49895 = null;
var count__49890_49896 = (0);
var i__49891_49897 = (0);
while(true){
if((i__49891_49897 < count__49890_49896)){
var rb_49898 = cljs.core._nth.call(null,chunk__49889_49895,i__49891_49897);
group.add(tiltontec.qxia.base.qxme.call(null,rb_49898));

qx_form.add(tiltontec.qxia.base.qxme.call(null,rb_49898),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rb_49898)));

var G__49899 = seq__49888_49894;
var G__49900 = chunk__49889_49895;
var G__49901 = count__49890_49896;
var G__49902 = (i__49891_49897 + (1));
seq__49888_49894 = G__49899;
chunk__49889_49895 = G__49900;
count__49890_49896 = G__49901;
i__49891_49897 = G__49902;
continue;
} else {
var temp__4425__auto___49903 = cljs.core.seq.call(null,seq__49888_49894);
if(temp__4425__auto___49903){
var seq__49888_49904__$1 = temp__4425__auto___49903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49888_49904__$1)){
var c__7021__auto___49905 = cljs.core.chunk_first.call(null,seq__49888_49904__$1);
var G__49906 = cljs.core.chunk_rest.call(null,seq__49888_49904__$1);
var G__49907 = c__7021__auto___49905;
var G__49908 = cljs.core.count.call(null,c__7021__auto___49905);
var G__49909 = (0);
seq__49888_49894 = G__49906;
chunk__49889_49895 = G__49907;
count__49890_49896 = G__49908;
i__49891_49897 = G__49909;
continue;
} else {
var rb_49910 = cljs.core.first.call(null,seq__49888_49904__$1);
group.add(tiltontec.qxia.base.qxme.call(null,rb_49910));

qx_form.add(tiltontec.qxia.base.qxme.call(null,rb_49910),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rb_49910)));

var G__49911 = cljs.core.next.call(null,seq__49888_49904__$1);
var G__49912 = null;
var G__49913 = (0);
var G__49914 = (0);
seq__49888_49894 = G__49911;
chunk__49889_49895 = G__49912;
count__49890_49896 = G__49913;
i__49891_49897 = G__49914;
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
var seq__49915_49925 = cljs.core.seq.call(null,old);
var chunk__49916_49926 = null;
var count__49917_49927 = (0);
var i__49918_49928 = (0);
while(true){
if((i__49918_49928 < count__49917_49927)){
var k_49929 = cljs.core._nth.call(null,chunk__49916_49926,i__49918_49928);
var qxk_49930 = tiltontec.qxia.base.qxme.call(null,k_49929);
var label_49931 = tiltontec.model.core.md_get.call(null,k_49929,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_49930);

var G__49932 = seq__49915_49925;
var G__49933 = chunk__49916_49926;
var G__49934 = count__49917_49927;
var G__49935 = (i__49918_49928 + (1));
seq__49915_49925 = G__49932;
chunk__49916_49926 = G__49933;
count__49917_49927 = G__49934;
i__49918_49928 = G__49935;
continue;
} else {
var temp__4425__auto___49936 = cljs.core.seq.call(null,seq__49915_49925);
if(temp__4425__auto___49936){
var seq__49915_49937__$1 = temp__4425__auto___49936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49915_49937__$1)){
var c__7021__auto___49938 = cljs.core.chunk_first.call(null,seq__49915_49937__$1);
var G__49939 = cljs.core.chunk_rest.call(null,seq__49915_49937__$1);
var G__49940 = c__7021__auto___49938;
var G__49941 = cljs.core.count.call(null,c__7021__auto___49938);
var G__49942 = (0);
seq__49915_49925 = G__49939;
chunk__49916_49926 = G__49940;
count__49917_49927 = G__49941;
i__49918_49928 = G__49942;
continue;
} else {
var k_49943 = cljs.core.first.call(null,seq__49915_49937__$1);
var qxk_49944 = tiltontec.qxia.base.qxme.call(null,k_49943);
var label_49945 = tiltontec.model.core.md_get.call(null,k_49943,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_49944);

var G__49946 = cljs.core.next.call(null,seq__49915_49937__$1);
var G__49947 = null;
var G__49948 = (0);
var G__49949 = (0);
seq__49915_49925 = G__49946;
chunk__49916_49926 = G__49947;
count__49917_49927 = G__49948;
i__49918_49928 = G__49949;
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
var seq__49919 = cljs.core.seq.call(null,kids);
var chunk__49920 = null;
var count__49921 = (0);
var i__49922 = (0);
while(true){
if((i__49922 < count__49921)){
var k = cljs.core._nth.call(null,chunk__49920,i__49922);
var G__49923_49950 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__49923_49950) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.widget.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_49952 = tiltontec.qxia.base.qxme.call(null,k);
var label_49953 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_49952,label_49953);

}

var G__49954 = seq__49919;
var G__49955 = chunk__49920;
var G__49956 = count__49921;
var G__49957 = (i__49922 + (1));
seq__49919 = G__49954;
chunk__49920 = G__49955;
count__49921 = G__49956;
i__49922 = G__49957;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__49919);
if(temp__4425__auto____$1){
var seq__49919__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49919__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__49919__$1);
var G__49958 = cljs.core.chunk_rest.call(null,seq__49919__$1);
var G__49959 = c__7021__auto__;
var G__49960 = cljs.core.count.call(null,c__7021__auto__);
var G__49961 = (0);
seq__49919 = G__49958;
chunk__49920 = G__49959;
count__49921 = G__49960;
i__49922 = G__49961;
continue;
} else {
var k = cljs.core.first.call(null,seq__49919__$1);
var G__49924_49962 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__49924_49962) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.widget.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_49964 = tiltontec.qxia.base.qxme.call(null,k);
var label_49965 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_49964,label_49965);

}

var G__49966 = cljs.core.next.call(null,seq__49919__$1);
var G__49967 = null;
var G__49968 = (0);
var G__49969 = (0);
seq__49919 = G__49966;
chunk__49920 = G__49967;
count__49921 = G__49968;
i__49922 = G__49969;
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
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
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

return cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),(new qx.ui.mobile.form.renderer.Single(qx_form)));
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),(function (page){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
return qx_page.addListener("initialize",((function (qx_page){
return (function (){
var temp__4425__auto___49974 = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___49974)){
var kids_49975 = temp__4425__auto___49974;
var content_49976 = qx_page.getContent();
var seq__49970_49977 = cljs.core.seq.call(null,kids_49975);
var chunk__49971_49978 = null;
var count__49972_49979 = (0);
var i__49973_49980 = (0);
while(true){
if((i__49973_49980 < count__49972_49979)){
var k_49981 = cljs.core._nth.call(null,chunk__49971_49978,i__49973_49980);
var qxk_49982 = tiltontec.qxia.base.qxme.call(null,k_49981);
content_49976.add(qxk_49982);

var G__49983 = seq__49970_49977;
var G__49984 = chunk__49971_49978;
var G__49985 = count__49972_49979;
var G__49986 = (i__49973_49980 + (1));
seq__49970_49977 = G__49983;
chunk__49971_49978 = G__49984;
count__49972_49979 = G__49985;
i__49973_49980 = G__49986;
continue;
} else {
var temp__4425__auto___49987__$1 = cljs.core.seq.call(null,seq__49970_49977);
if(temp__4425__auto___49987__$1){
var seq__49970_49988__$1 = temp__4425__auto___49987__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49970_49988__$1)){
var c__7021__auto___49989 = cljs.core.chunk_first.call(null,seq__49970_49988__$1);
var G__49990 = cljs.core.chunk_rest.call(null,seq__49970_49988__$1);
var G__49991 = c__7021__auto___49989;
var G__49992 = cljs.core.count.call(null,c__7021__auto___49989);
var G__49993 = (0);
seq__49970_49977 = G__49990;
chunk__49971_49978 = G__49991;
count__49972_49979 = G__49992;
i__49973_49980 = G__49993;
continue;
} else {
var k_49994 = cljs.core.first.call(null,seq__49970_49988__$1);
var qxk_49995 = tiltontec.qxia.base.qxme.call(null,k_49994);
content_49976.add(qxk_49995);

var G__49996 = cljs.core.next.call(null,seq__49970_49988__$1);
var G__49997 = null;
var G__49998 = (0);
var G__49999 = (0);
seq__49970_49977 = G__49996;
chunk__49971_49978 = G__49997;
count__49972_49979 = G__49998;
i__49973_49980 = G__49999;
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
if(cljs.core.not_EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),page], null),(function (opcode,defer_info){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
var content = qx_page.getContent();
content.removeAll();

var seq__50000 = cljs.core.seq.call(null,newk);
var chunk__50001 = null;
var count__50002 = (0);
var i__50003 = (0);
while(true){
if((i__50003 < count__50002)){
var k = cljs.core._nth.call(null,chunk__50001,i__50003);
var qxk_50004 = tiltontec.qxia.base.qxme.call(null,k);
cljs.core.println.call(null,content.add(qxk_50004));

var G__50005 = seq__50000;
var G__50006 = chunk__50001;
var G__50007 = count__50002;
var G__50008 = (i__50003 + (1));
seq__50000 = G__50005;
chunk__50001 = G__50006;
count__50002 = G__50007;
i__50003 = G__50008;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__50000);
if(temp__4425__auto__){
var seq__50000__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50000__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__50000__$1);
var G__50009 = cljs.core.chunk_rest.call(null,seq__50000__$1);
var G__50010 = c__7021__auto__;
var G__50011 = cljs.core.count.call(null,c__7021__auto__);
var G__50012 = (0);
seq__50000 = G__50009;
chunk__50001 = G__50010;
count__50002 = G__50011;
i__50003 = G__50012;
continue;
} else {
var k = cljs.core.first.call(null,seq__50000__$1);
var qxk_50013 = tiltontec.qxia.base.qxme.call(null,k);
cljs.core.println.call(null,content.add(qxk_50013));

var G__50014 = cljs.core.next.call(null,seq__50000__$1);
var G__50015 = null;
var G__50016 = (0);
var G__50017 = (0);
seq__50000 = G__50014;
chunk__50001 = G__50015;
count__50002 = G__50016;
i__50003 = G__50017;
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
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)], null),(function (_,me,newk,oldk,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
return tiltontec.qxia.widget.kids_refresh.call(null,me,newk,oldk);
}));
}));
tiltontec.qxia.widget.kids_refresh = (function tiltontec$qxia$widget$kids_refresh(me,newk,oldk){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
} else {
var lostks_50034 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_50034)){
} else {
var seq__50026_50035 = cljs.core.seq.call(null,lostks_50034);
var chunk__50027_50036 = null;
var count__50028_50037 = (0);
var i__50029_50038 = (0);
while(true){
if((i__50029_50038 < count__50028_50037)){
var kid_50039 = cljs.core._nth.call(null,chunk__50027_50036,i__50029_50038);
var qxk_50040 = tiltontec.qxia.base.qxme.call(null,kid_50039);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_50039,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_50040);
}

qxk_50040.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_50039);

var G__50041 = seq__50026_50035;
var G__50042 = chunk__50027_50036;
var G__50043 = count__50028_50037;
var G__50044 = (i__50029_50038 + (1));
seq__50026_50035 = G__50041;
chunk__50027_50036 = G__50042;
count__50028_50037 = G__50043;
i__50029_50038 = G__50044;
continue;
} else {
var temp__4425__auto___50045 = cljs.core.seq.call(null,seq__50026_50035);
if(temp__4425__auto___50045){
var seq__50026_50046__$1 = temp__4425__auto___50045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50026_50046__$1)){
var c__7021__auto___50047 = cljs.core.chunk_first.call(null,seq__50026_50046__$1);
var G__50048 = cljs.core.chunk_rest.call(null,seq__50026_50046__$1);
var G__50049 = c__7021__auto___50047;
var G__50050 = cljs.core.count.call(null,c__7021__auto___50047);
var G__50051 = (0);
seq__50026_50035 = G__50048;
chunk__50027_50036 = G__50049;
count__50028_50037 = G__50050;
i__50029_50038 = G__50051;
continue;
} else {
var kid_50052 = cljs.core.first.call(null,seq__50026_50046__$1);
var qxk_50053 = tiltontec.qxia.base.qxme.call(null,kid_50052);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_50052,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_50053);
}

qxk_50053.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_50052);

var G__50054 = cljs.core.next.call(null,seq__50026_50046__$1);
var G__50055 = null;
var G__50056 = (0);
var G__50057 = (0);
seq__50026_50035 = G__50054;
chunk__50027_50036 = G__50055;
count__50028_50037 = G__50056;
i__50029_50038 = G__50057;
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
var seq__50030 = cljs.core.seq.call(null,new_ks);
var chunk__50031 = null;
var count__50032 = (0);
var i__50033 = (0);
while(true){
if((i__50033 < count__50032)){
var k = cljs.core._nth.call(null,chunk__50031,i__50033);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__50058 = seq__50030;
var G__50059 = chunk__50031;
var G__50060 = count__50032;
var G__50061 = (i__50033 + (1));
seq__50030 = G__50058;
chunk__50031 = G__50059;
count__50032 = G__50060;
i__50033 = G__50061;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__50030);
if(temp__4425__auto__){
var seq__50030__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50030__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__50030__$1);
var G__50062 = cljs.core.chunk_rest.call(null,seq__50030__$1);
var G__50063 = c__7021__auto__;
var G__50064 = cljs.core.count.call(null,c__7021__auto__);
var G__50065 = (0);
seq__50030 = G__50062;
chunk__50031 = G__50063;
count__50032 = G__50064;
i__50033 = G__50065;
continue;
} else {
var k = cljs.core.first.call(null,seq__50030__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__50066 = cljs.core.next.call(null,seq__50030__$1);
var G__50067 = null;
var G__50068 = (0);
var G__50069 = (0);
seq__50030 = G__50066;
chunk__50031 = G__50067;
count__50032 = G__50068;
i__50033 = G__50069;
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
var seq__50070_50078 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__50071_50079 = null;
var count__50072_50080 = (0);
var i__50073_50081 = (0);
while(true){
if((i__50073_50081 < count__50072_50080)){
var n_50082 = cljs.core._nth.call(null,chunk__50071_50079,i__50073_50081);
p.removeSlot(n_50082);

var G__50083 = seq__50070_50078;
var G__50084 = chunk__50071_50079;
var G__50085 = count__50072_50080;
var G__50086 = (i__50073_50081 + (1));
seq__50070_50078 = G__50083;
chunk__50071_50079 = G__50084;
count__50072_50080 = G__50085;
i__50073_50081 = G__50086;
continue;
} else {
var temp__4425__auto___50087 = cljs.core.seq.call(null,seq__50070_50078);
if(temp__4425__auto___50087){
var seq__50070_50088__$1 = temp__4425__auto___50087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50070_50088__$1)){
var c__7021__auto___50089 = cljs.core.chunk_first.call(null,seq__50070_50088__$1);
var G__50090 = cljs.core.chunk_rest.call(null,seq__50070_50088__$1);
var G__50091 = c__7021__auto___50089;
var G__50092 = cljs.core.count.call(null,c__7021__auto___50089);
var G__50093 = (0);
seq__50070_50078 = G__50090;
chunk__50071_50079 = G__50091;
count__50072_50080 = G__50092;
i__50073_50081 = G__50093;
continue;
} else {
var n_50094 = cljs.core.first.call(null,seq__50070_50088__$1);
p.removeSlot(n_50094);

var G__50095 = cljs.core.next.call(null,seq__50070_50088__$1);
var G__50096 = null;
var G__50097 = (0);
var G__50098 = (0);
seq__50070_50078 = G__50095;
chunk__50071_50079 = G__50096;
count__50072_50080 = G__50097;
i__50073_50081 = G__50098;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__50074 = cljs.core.seq.call(null,new$);
var chunk__50075 = null;
var count__50076 = (0);
var i__50077 = (0);
while(true){
if((i__50077 < count__50076)){
var sd = cljs.core._nth.call(null,chunk__50075,i__50077);
var da_50099 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_50099);

var G__50100 = seq__50074;
var G__50101 = chunk__50075;
var G__50102 = count__50076;
var G__50103 = (i__50077 + (1));
seq__50074 = G__50100;
chunk__50075 = G__50101;
count__50076 = G__50102;
i__50077 = G__50103;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__50074);
if(temp__4425__auto__){
var seq__50074__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50074__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__50074__$1);
var G__50104 = cljs.core.chunk_rest.call(null,seq__50074__$1);
var G__50105 = c__7021__auto__;
var G__50106 = cljs.core.count.call(null,c__7021__auto__);
var G__50107 = (0);
seq__50074 = G__50104;
chunk__50075 = G__50105;
count__50076 = G__50106;
i__50077 = G__50107;
continue;
} else {
var sd = cljs.core.first.call(null,seq__50074__$1);
var da_50108 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_50108);

var G__50109 = cljs.core.next.call(null,seq__50074__$1);
var G__50110 = null;
var G__50111 = (0);
var G__50112 = (0);
seq__50074 = G__50109;
chunk__50075 = G__50110;
count__50076 = G__50111;
i__50077 = G__50112;
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
cljs.core.println.call(null,new cljs.core.Keyword(null,"setval!!!","setval!!!",-1301466427),tiltontec.cell.base.ia_type.call(null,me),new$,old);

return tiltontec.qxia.base.qxme.call(null,me).setValue(new$);
}));
}));
