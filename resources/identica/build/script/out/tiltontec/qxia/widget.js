// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.widget');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.base');
goog.require('tiltontec.qxia.base');
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
return new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
}));
cljs.core._add_method.call(null,tiltontec.qxia.widget.qx_render_maybe,new cljs.core.Keyword("tiltontec.qxia.base","m.Single","tiltontec.qxia.base/m.Single",1330847058),(function (me){
return (new qx.ui.mobile.form.renderer.Single(new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me))));
}));
if(typeof tiltontec.qxia.widget.qx_initialize_kids !== 'undefined'){
} else {
tiltontec.qxia.widget.qx_initialize_kids = (function (){var method_table__5448__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5449__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5452__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.widget","qx-initialize-kids"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.widget.qx_initialize_kids,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var qx_me = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
var seq__14753 = cljs.core.seq.call(null,kids);
var chunk__14754 = null;
var count__14755 = (0);
var i__14756 = (0);
while(true){
if((i__14756 < count__14755)){
var kid = cljs.core._nth.call(null,chunk__14754,i__14756);
var rmk_14757 = tiltontec.qxia.widget.qx_render_maybe.call(null,kid);
qx_me.add(rmk_14757);

var G__14758 = seq__14753;
var G__14759 = chunk__14754;
var G__14760 = count__14755;
var G__14761 = (i__14756 + (1));
seq__14753 = G__14758;
chunk__14754 = G__14759;
count__14755 = G__14760;
i__14756 = G__14761;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__14753);
if(temp__4425__auto____$1){
var seq__14753__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14753__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__14753__$1);
var G__14762 = cljs.core.chunk_rest.call(null,seq__14753__$1);
var G__14763 = c__5338__auto__;
var G__14764 = cljs.core.count.call(null,c__5338__auto__);
var G__14765 = (0);
seq__14753 = G__14762;
chunk__14754 = G__14763;
count__14755 = G__14764;
i__14756 = G__14765;
continue;
} else {
var kid = cljs.core.first.call(null,seq__14753__$1);
var rmk_14766 = tiltontec.qxia.widget.qx_render_maybe.call(null,kid);
qx_me.add(rmk_14766);

var G__14767 = cljs.core.next.call(null,seq__14753__$1);
var G__14768 = null;
var G__14769 = (0);
var G__14770 = (0);
seq__14753 = G__14767;
chunk__14754 = G__14768;
count__14755 = G__14769;
i__14756 = G__14770;
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
var seq__14771 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__14772 = null;
var count__14773 = (0);
var i__14774 = (0);
while(true){
if((i__14774 < count__14773)){
var page = cljs.core._nth.call(null,chunk__14772,i__14774);
var qx_page_14775 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
pager.addDetail([qx_page_14775]);

var temp__4425__auto___14776 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___14776)){
var ept_14777 = temp__4425__auto___14776;
routing.onGet(ept_14777,shower,qx_page_14775);
} else {
}

var G__14778 = seq__14771;
var G__14779 = chunk__14772;
var G__14780 = count__14773;
var G__14781 = (i__14774 + (1));
seq__14771 = G__14778;
chunk__14772 = G__14779;
count__14773 = G__14780;
i__14774 = G__14781;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14771);
if(temp__4425__auto__){
var seq__14771__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14771__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__14771__$1);
var G__14782 = cljs.core.chunk_rest.call(null,seq__14771__$1);
var G__14783 = c__5338__auto__;
var G__14784 = cljs.core.count.call(null,c__5338__auto__);
var G__14785 = (0);
seq__14771 = G__14782;
chunk__14772 = G__14783;
count__14773 = G__14784;
i__14774 = G__14785;
continue;
} else {
var page = cljs.core.first.call(null,seq__14771__$1);
var qx_page_14786 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
pager.addDetail([qx_page_14786]);

var temp__4425__auto___14787__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___14787__$1)){
var ept_14788 = temp__4425__auto___14787__$1;
routing.onGet(ept_14788,shower,qx_page_14786);
} else {
}

var G__14789 = cljs.core.next.call(null,seq__14771__$1);
var G__14790 = null;
var G__14791 = (0);
var G__14792 = (0);
seq__14771 = G__14789;
chunk__14772 = G__14790;
count__14773 = G__14791;
i__14774 = G__14792;
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
return tiltontec.qxia.widget.qx_initialize_kids.call(null,me);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),(function (me){
var qx_form = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__14793 = cljs.core.seq.call(null,kids);
var chunk__14794 = null;
var count__14795 = (0);
var i__14796 = (0);
while(true){
if((i__14796 < count__14795)){
var k = cljs.core._nth.call(null,chunk__14794,i__14796);
var qxk_14797 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
var label_14798 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_14797,label_14798);

var G__14799 = seq__14793;
var G__14800 = chunk__14794;
var G__14801 = count__14795;
var G__14802 = (i__14796 + (1));
seq__14793 = G__14799;
chunk__14794 = G__14800;
count__14795 = G__14801;
i__14796 = G__14802;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__14793);
if(temp__4425__auto____$1){
var seq__14793__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14793__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__14793__$1);
var G__14803 = cljs.core.chunk_rest.call(null,seq__14793__$1);
var G__14804 = c__5338__auto__;
var G__14805 = cljs.core.count.call(null,c__5338__auto__);
var G__14806 = (0);
seq__14793 = G__14803;
chunk__14794 = G__14804;
count__14795 = G__14805;
i__14796 = G__14806;
continue;
} else {
var k = cljs.core.first.call(null,seq__14793__$1);
var qxk_14807 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
var label_14808 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_14807,label_14808);

var G__14809 = cljs.core.next.call(null,seq__14793__$1);
var G__14810 = null;
var G__14811 = (0);
var G__14812 = (0);
seq__14793 = G__14809;
chunk__14794 = G__14810;
count__14795 = G__14811;
i__14796 = G__14812;
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
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),(function (page){
var qx_page = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
return qx_page.addListener("initialize",((function (kids,temp__4425__auto__,qx_page){
return (function (){
var content = qx_page.getContent();
var seq__14813 = cljs.core.seq.call(null,kids);
var chunk__14814 = null;
var count__14815 = (0);
var i__14816 = (0);
while(true){
if((i__14816 < count__14815)){
var k = cljs.core._nth.call(null,chunk__14814,i__14816);
var qxk_14817 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
cljs.core.println.call(null,new cljs.core.Keyword(null,"navadd!!!!!!","navadd!!!!!!",-538873862),qxk_14817);

content.add(qxk_14817);

var G__14818 = seq__14813;
var G__14819 = chunk__14814;
var G__14820 = count__14815;
var G__14821 = (i__14816 + (1));
seq__14813 = G__14818;
chunk__14814 = G__14819;
count__14815 = G__14820;
i__14816 = G__14821;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__14813);
if(temp__4425__auto____$1){
var seq__14813__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14813__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__14813__$1);
var G__14822 = cljs.core.chunk_rest.call(null,seq__14813__$1);
var G__14823 = c__5338__auto__;
var G__14824 = cljs.core.count.call(null,c__5338__auto__);
var G__14825 = (0);
seq__14813 = G__14822;
chunk__14814 = G__14823;
count__14815 = G__14824;
i__14816 = G__14825;
continue;
} else {
var k = cljs.core.first.call(null,seq__14813__$1);
var qxk_14826 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
cljs.core.println.call(null,new cljs.core.Keyword(null,"navadd!!!!!!","navadd!!!!!!",-538873862),qxk_14826);

content.add(qxk_14826);

var G__14827 = cljs.core.next.call(null,seq__14813__$1);
var G__14828 = null;
var G__14829 = (0);
var G__14830 = (0);
seq__14813 = G__14827;
chunk__14814 = G__14828;
count__14815 = G__14829;
i__14816 = G__14830;
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
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839)], null),(function (_,me,newk,oldk,___$1){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return null;
} else {
cljs.core.println.call(null,new cljs.core.Keyword(null,"compo-kids!!!!","compo-kids!!!!",-1779147852),tiltontec.cell.base.ia_type.call(null,me),newk);

var lostks_14839 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_14839)){
} else {
cljs.core.println.call(null,new cljs.core.Keyword(null,"zapping","zapping",363737965),lostks_14839);

var seq__14831_14840 = cljs.core.seq.call(null,lostks_14839);
var chunk__14832_14841 = null;
var count__14833_14842 = (0);
var i__14834_14843 = (0);
while(true){
if((i__14834_14843 < count__14833_14842)){
var qxk_14844 = cljs.core._nth.call(null,chunk__14832_14841,i__14834_14843);
new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)).add(qxk_14844);

qxk_14844.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,qxk_14844);

var G__14845 = seq__14831_14840;
var G__14846 = chunk__14832_14841;
var G__14847 = count__14833_14842;
var G__14848 = (i__14834_14843 + (1));
seq__14831_14840 = G__14845;
chunk__14832_14841 = G__14846;
count__14833_14842 = G__14847;
i__14834_14843 = G__14848;
continue;
} else {
var temp__4425__auto___14849 = cljs.core.seq.call(null,seq__14831_14840);
if(temp__4425__auto___14849){
var seq__14831_14850__$1 = temp__4425__auto___14849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14831_14850__$1)){
var c__5338__auto___14851 = cljs.core.chunk_first.call(null,seq__14831_14850__$1);
var G__14852 = cljs.core.chunk_rest.call(null,seq__14831_14850__$1);
var G__14853 = c__5338__auto___14851;
var G__14854 = cljs.core.count.call(null,c__5338__auto___14851);
var G__14855 = (0);
seq__14831_14840 = G__14852;
chunk__14832_14841 = G__14853;
count__14833_14842 = G__14854;
i__14834_14843 = G__14855;
continue;
} else {
var qxk_14856 = cljs.core.first.call(null,seq__14831_14850__$1);
new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)).add(qxk_14856);

qxk_14856.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,qxk_14856);

var G__14857 = cljs.core.next.call(null,seq__14831_14850__$1);
var G__14858 = null;
var G__14859 = (0);
var G__14860 = (0);
seq__14831_14840 = G__14857;
chunk__14832_14841 = G__14858;
count__14833_14842 = G__14859;
i__14834_14843 = G__14860;
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
cljs.core.println.call(null,new cljs.core.Keyword(null,"adding","adding",-192537306),new_ks);

var seq__14835 = cljs.core.seq.call(null,new_ks);
var chunk__14836 = null;
var count__14837 = (0);
var i__14838 = (0);
while(true){
if((i__14838 < count__14837)){
var k = cljs.core._nth.call(null,chunk__14836,i__14838);
var qxk_14861 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
cljs.core.println.call(null,new cljs.core.Keyword(null,"OBS-add!!!!!!","OBS-add!!!!!!",-247724408),qxk_14861);

new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)).add(qxk_14861);

var G__14862 = seq__14835;
var G__14863 = chunk__14836;
var G__14864 = count__14837;
var G__14865 = (i__14838 + (1));
seq__14835 = G__14862;
chunk__14836 = G__14863;
count__14837 = G__14864;
i__14838 = G__14865;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14835);
if(temp__4425__auto__){
var seq__14835__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14835__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__14835__$1);
var G__14866 = cljs.core.chunk_rest.call(null,seq__14835__$1);
var G__14867 = c__5338__auto__;
var G__14868 = cljs.core.count.call(null,c__5338__auto__);
var G__14869 = (0);
seq__14835 = G__14866;
chunk__14836 = G__14867;
count__14837 = G__14868;
i__14838 = G__14869;
continue;
} else {
var k = cljs.core.first.call(null,seq__14835__$1);
var qxk_14870 = tiltontec.qxia.widget.qx_render_maybe.call(null,k);
cljs.core.println.call(null,new cljs.core.Keyword(null,"OBS-add!!!!!!","OBS-add!!!!!!",-247724408),qxk_14870);

new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)).add(qxk_14870);

var G__14871 = cljs.core.next.call(null,seq__14835__$1);
var G__14872 = null;
var G__14873 = (0);
var G__14874 = (0);
seq__14835 = G__14871;
chunk__14836 = G__14872;
count__14837 = G__14873;
i__14838 = G__14874;
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
