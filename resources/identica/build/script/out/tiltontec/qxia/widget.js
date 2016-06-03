// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.widget');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.base');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.qxia.base');
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","Mobile","tiltontec.qxia.types/Mobile",-143490810)], null),(function (_,me,new$,old,c){
var app = new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var shower = new cljs.core.Keyword(null,"shower","shower",-1731894586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var pager = new cljs.core.Keyword(null,"pager","pager",1850229940).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var routing = app.getRouting();
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__28750_28758 = cljs.core.seq.call(null,old);
var chunk__28751_28759 = null;
var count__28752_28760 = (0);
var i__28753_28761 = (0);
while(true){
if((i__28753_28761 < count__28752_28760)){
var page_28762 = cljs.core._nth.call(null,chunk__28751_28759,i__28753_28761);
var temp__4425__auto___28763 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_28762));
if(cljs.core.truth_(temp__4425__auto___28763)){
var ept_28764 = temp__4425__auto___28763;
routing.remove(ept_28764);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_28762));

var G__28765 = seq__28750_28758;
var G__28766 = chunk__28751_28759;
var G__28767 = count__28752_28760;
var G__28768 = (i__28753_28761 + (1));
seq__28750_28758 = G__28765;
chunk__28751_28759 = G__28766;
count__28752_28760 = G__28767;
i__28753_28761 = G__28768;
continue;
} else {
var temp__4425__auto___28769 = cljs.core.seq.call(null,seq__28750_28758);
if(temp__4425__auto___28769){
var seq__28750_28770__$1 = temp__4425__auto___28769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28750_28770__$1)){
var c__5338__auto___28771 = cljs.core.chunk_first.call(null,seq__28750_28770__$1);
var G__28772 = cljs.core.chunk_rest.call(null,seq__28750_28770__$1);
var G__28773 = c__5338__auto___28771;
var G__28774 = cljs.core.count.call(null,c__5338__auto___28771);
var G__28775 = (0);
seq__28750_28758 = G__28772;
chunk__28751_28759 = G__28773;
count__28752_28760 = G__28774;
i__28753_28761 = G__28775;
continue;
} else {
var page_28776 = cljs.core.first.call(null,seq__28750_28770__$1);
var temp__4425__auto___28777__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_28776));
if(cljs.core.truth_(temp__4425__auto___28777__$1)){
var ept_28778 = temp__4425__auto___28777__$1;
routing.remove(ept_28778);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_28776));

var G__28779 = cljs.core.next.call(null,seq__28750_28770__$1);
var G__28780 = null;
var G__28781 = (0);
var G__28782 = (0);
seq__28750_28758 = G__28779;
chunk__28751_28759 = G__28780;
count__28752_28760 = G__28781;
i__28753_28761 = G__28782;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__28754 = cljs.core.seq.call(null,new$);
var chunk__28755 = null;
var count__28756 = (0);
var i__28757 = (0);
while(true){
if((i__28757 < count__28756)){
var page = cljs.core._nth.call(null,chunk__28755,i__28757);
var qx_page_28783 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_28783);

var temp__4425__auto___28784 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___28784)){
var ept_28785 = temp__4425__auto___28784;
routing.onGet(ept_28785,shower,qx_page_28783);
} else {
}

var G__28786 = seq__28754;
var G__28787 = chunk__28755;
var G__28788 = count__28756;
var G__28789 = (i__28757 + (1));
seq__28754 = G__28786;
chunk__28755 = G__28787;
count__28756 = G__28788;
i__28757 = G__28789;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28754);
if(temp__4425__auto__){
var seq__28754__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28754__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__28754__$1);
var G__28790 = cljs.core.chunk_rest.call(null,seq__28754__$1);
var G__28791 = c__5338__auto__;
var G__28792 = cljs.core.count.call(null,c__5338__auto__);
var G__28793 = (0);
seq__28754 = G__28790;
chunk__28755 = G__28791;
count__28756 = G__28792;
i__28757 = G__28793;
continue;
} else {
var page = cljs.core.first.call(null,seq__28754__$1);
var qx_page_28794 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_28794);

var temp__4425__auto___28795__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___28795__$1)){
var ept_28796 = temp__4425__auto___28795__$1;
routing.onGet(ept_28796,shower,qx_page_28794);
} else {
}

var G__28797 = cljs.core.next.call(null,seq__28754__$1);
var G__28798 = null;
var G__28799 = (0);
var G__28800 = (0);
seq__28754 = G__28797;
chunk__28755 = G__28798;
count__28756 = G__28799;
i__28757 = G__28800;
continue;
}
} else {
return null;
}
}
break;
}
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
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225)], null),(function (_,me,new$,old,___$1){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__28801_28809 = cljs.core.seq.call(null,old);
var chunk__28802_28810 = null;
var count__28803_28811 = (0);
var i__28804_28812 = (0);
while(true){
if((i__28804_28812 < count__28803_28811)){
var k_28813 = cljs.core._nth.call(null,chunk__28802_28810,i__28804_28812);
var qxk_28814 = tiltontec.qxia.base.qxme.call(null,k_28813);
var label_28815 = tiltontec.model.base.md_get.call(null,k_28813,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_28814);

var G__28816 = seq__28801_28809;
var G__28817 = chunk__28802_28810;
var G__28818 = count__28803_28811;
var G__28819 = (i__28804_28812 + (1));
seq__28801_28809 = G__28816;
chunk__28802_28810 = G__28817;
count__28803_28811 = G__28818;
i__28804_28812 = G__28819;
continue;
} else {
var temp__4425__auto___28820 = cljs.core.seq.call(null,seq__28801_28809);
if(temp__4425__auto___28820){
var seq__28801_28821__$1 = temp__4425__auto___28820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28801_28821__$1)){
var c__5338__auto___28822 = cljs.core.chunk_first.call(null,seq__28801_28821__$1);
var G__28823 = cljs.core.chunk_rest.call(null,seq__28801_28821__$1);
var G__28824 = c__5338__auto___28822;
var G__28825 = cljs.core.count.call(null,c__5338__auto___28822);
var G__28826 = (0);
seq__28801_28809 = G__28823;
chunk__28802_28810 = G__28824;
count__28803_28811 = G__28825;
i__28804_28812 = G__28826;
continue;
} else {
var k_28827 = cljs.core.first.call(null,seq__28801_28821__$1);
var qxk_28828 = tiltontec.qxia.base.qxme.call(null,k_28827);
var label_28829 = tiltontec.model.base.md_get.call(null,k_28827,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_28828);

var G__28830 = cljs.core.next.call(null,seq__28801_28821__$1);
var G__28831 = null;
var G__28832 = (0);
var G__28833 = (0);
seq__28801_28809 = G__28830;
chunk__28802_28810 = G__28831;
count__28803_28811 = G__28832;
i__28804_28812 = G__28833;
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
var seq__28805 = cljs.core.seq.call(null,kids);
var chunk__28806 = null;
var count__28807 = (0);
var i__28808 = (0);
while(true){
if((i__28808 < count__28807)){
var k = cljs.core._nth.call(null,chunk__28806,i__28808);
var qxk_28834 = tiltontec.qxia.base.qxme.call(null,k);
var label_28835 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_28834,label_28835);

var G__28836 = seq__28805;
var G__28837 = chunk__28806;
var G__28838 = count__28807;
var G__28839 = (i__28808 + (1));
seq__28805 = G__28836;
chunk__28806 = G__28837;
count__28807 = G__28838;
i__28808 = G__28839;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__28805);
if(temp__4425__auto____$1){
var seq__28805__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28805__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__28805__$1);
var G__28840 = cljs.core.chunk_rest.call(null,seq__28805__$1);
var G__28841 = c__5338__auto__;
var G__28842 = cljs.core.count.call(null,c__5338__auto__);
var G__28843 = (0);
seq__28805 = G__28840;
chunk__28806 = G__28841;
count__28807 = G__28842;
i__28808 = G__28843;
continue;
} else {
var k = cljs.core.first.call(null,seq__28805__$1);
var qxk_28844 = tiltontec.qxia.base.qxme.call(null,k);
var label_28845 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_28844,label_28845);

var G__28846 = cljs.core.next.call(null,seq__28805__$1);
var G__28847 = null;
var G__28848 = (0);
var G__28849 = (0);
seq__28805 = G__28846;
chunk__28806 = G__28847;
count__28807 = G__28848;
i__28808 = G__28849;
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
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724)], null),(function (_,me,new$,old,___$1){
if(cljs.core._EQ_.call(null,old,tiltontec.cell.base.unbound)){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,new$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"new","new",-444906321,null)))))].join('')));
}

var form = cljs.core.first.call(null,new$);
var qx_form = tiltontec.qxia.base.qxme.call(null,form);
if(cljs.core.truth_(qx_form)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"qx-form","qx-form",231243115,null)))].join('')));
}

return cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),(new qx.ui.mobile.form.renderer.Single(qx_form)));
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),(function (page){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
return qx_page.addListener("initialize",((function (qx_page){
return (function (){
var temp__4425__auto___28854 = tiltontec.model.base.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___28854)){
var kids_28855 = temp__4425__auto___28854;
var content_28856 = qx_page.getContent();
var seq__28850_28857 = cljs.core.seq.call(null,kids_28855);
var chunk__28851_28858 = null;
var count__28852_28859 = (0);
var i__28853_28860 = (0);
while(true){
if((i__28853_28860 < count__28852_28859)){
var k_28861 = cljs.core._nth.call(null,chunk__28851_28858,i__28853_28860);
var qxk_28862 = tiltontec.qxia.base.qxme.call(null,k_28861);
content_28856.add(qxk_28862);

var G__28863 = seq__28850_28857;
var G__28864 = chunk__28851_28858;
var G__28865 = count__28852_28859;
var G__28866 = (i__28853_28860 + (1));
seq__28850_28857 = G__28863;
chunk__28851_28858 = G__28864;
count__28852_28859 = G__28865;
i__28853_28860 = G__28866;
continue;
} else {
var temp__4425__auto___28867__$1 = cljs.core.seq.call(null,seq__28850_28857);
if(temp__4425__auto___28867__$1){
var seq__28850_28868__$1 = temp__4425__auto___28867__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28850_28868__$1)){
var c__5338__auto___28869 = cljs.core.chunk_first.call(null,seq__28850_28868__$1);
var G__28870 = cljs.core.chunk_rest.call(null,seq__28850_28868__$1);
var G__28871 = c__5338__auto___28869;
var G__28872 = cljs.core.count.call(null,c__5338__auto___28869);
var G__28873 = (0);
seq__28850_28857 = G__28870;
chunk__28851_28858 = G__28871;
count__28852_28859 = G__28872;
i__28853_28860 = G__28873;
continue;
} else {
var k_28874 = cljs.core.first.call(null,seq__28850_28868__$1);
var qxk_28875 = tiltontec.qxia.base.qxme.call(null,k_28874);
content_28856.add(qxk_28875);

var G__28876 = cljs.core.next.call(null,seq__28850_28868__$1);
var G__28877 = null;
var G__28878 = (0);
var G__28879 = (0);
seq__28850_28857 = G__28876;
chunk__28851_28858 = G__28877;
count__28852_28859 = G__28878;
i__28853_28860 = G__28879;
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
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)], null),(function (_,me,newk,oldk,___$1){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"navi-page-kids-obs-blocks-compo!!!!!","navi-page-kids-obs-blocks-compo!!!!!",-986088219));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.TextField","tiltontec.qxia.types/m.TextField",1587442644),(function (me){
return tiltontec.qxia.base.qxme.call(null,me).setValue(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)], null),(function (_,me,newk,oldk,___$1){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
} else {
var lostks_28888 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_28888)){
} else {
var seq__28880_28889 = cljs.core.seq.call(null,lostks_28888);
var chunk__28881_28890 = null;
var count__28882_28891 = (0);
var i__28883_28892 = (0);
while(true){
if((i__28883_28892 < count__28882_28891)){
var kid_28893 = cljs.core._nth.call(null,chunk__28881_28890,i__28883_28892);
var qxk_28894 = tiltontec.qxia.base.qxme.call(null,kid_28893);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_28893,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_28894);
}

qxk_28894.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_28893);

var G__28895 = seq__28880_28889;
var G__28896 = chunk__28881_28890;
var G__28897 = count__28882_28891;
var G__28898 = (i__28883_28892 + (1));
seq__28880_28889 = G__28895;
chunk__28881_28890 = G__28896;
count__28882_28891 = G__28897;
i__28883_28892 = G__28898;
continue;
} else {
var temp__4425__auto___28899 = cljs.core.seq.call(null,seq__28880_28889);
if(temp__4425__auto___28899){
var seq__28880_28900__$1 = temp__4425__auto___28899;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28880_28900__$1)){
var c__5338__auto___28901 = cljs.core.chunk_first.call(null,seq__28880_28900__$1);
var G__28902 = cljs.core.chunk_rest.call(null,seq__28880_28900__$1);
var G__28903 = c__5338__auto___28901;
var G__28904 = cljs.core.count.call(null,c__5338__auto___28901);
var G__28905 = (0);
seq__28880_28889 = G__28902;
chunk__28881_28890 = G__28903;
count__28882_28891 = G__28904;
i__28883_28892 = G__28905;
continue;
} else {
var kid_28906 = cljs.core.first.call(null,seq__28880_28900__$1);
var qxk_28907 = tiltontec.qxia.base.qxme.call(null,kid_28906);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_28906,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_28907);
}

qxk_28907.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_28906);

var G__28908 = cljs.core.next.call(null,seq__28880_28900__$1);
var G__28909 = null;
var G__28910 = (0);
var G__28911 = (0);
seq__28880_28889 = G__28908;
chunk__28881_28890 = G__28909;
count__28882_28891 = G__28910;
i__28883_28892 = G__28911;
continue;
}
} else {
}
}
break;
}
}
}

var new_ks = clojure.set.difference.call(null,cljs.core.set.call(null,newk),cljs.core.set.call(null,oldk));
if(cljs.core.empty_QMARK_.call(null,new_ks)){
return null;
} else {
var seq__28884 = cljs.core.seq.call(null,new_ks);
var chunk__28885 = null;
var count__28886 = (0);
var i__28887 = (0);
while(true){
if((i__28887 < count__28886)){
var k = cljs.core._nth.call(null,chunk__28885,i__28887);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__28912 = seq__28884;
var G__28913 = chunk__28885;
var G__28914 = count__28886;
var G__28915 = (i__28887 + (1));
seq__28884 = G__28912;
chunk__28885 = G__28913;
count__28886 = G__28914;
i__28887 = G__28915;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28884);
if(temp__4425__auto__){
var seq__28884__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28884__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__28884__$1);
var G__28916 = cljs.core.chunk_rest.call(null,seq__28884__$1);
var G__28917 = c__5338__auto__;
var G__28918 = cljs.core.count.call(null,c__5338__auto__);
var G__28919 = (0);
seq__28884 = G__28916;
chunk__28885 = G__28917;
count__28886 = G__28918;
i__28887 = G__28919;
continue;
} else {
var k = cljs.core.first.call(null,seq__28884__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__28920 = cljs.core.next.call(null,seq__28884__$1);
var G__28921 = null;
var G__28922 = (0);
var G__28923 = (0);
seq__28884 = G__28920;
chunk__28885 = G__28921;
count__28886 = G__28922;
i__28887 = G__28923;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slot-data","slot-data",1146367809),new cljs.core.Keyword("tiltontec.qxia.types","m.Picker","tiltontec.qxia.types/m.Picker",-1343372926)], null),(function (_,me,new$,old,c){
cljs.core.println.call(null,new cljs.core.Keyword(null,"obs-sd","obs-sd",1176273322),tiltontec.cell.base.ia_type.call(null,me),new$,old);

var p = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__28924_28932 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__28925_28933 = null;
var count__28926_28934 = (0);
var i__28927_28935 = (0);
while(true){
if((i__28927_28935 < count__28926_28934)){
var n_28936 = cljs.core._nth.call(null,chunk__28925_28933,i__28927_28935);
p.removeSlot(n_28936);

var G__28937 = seq__28924_28932;
var G__28938 = chunk__28925_28933;
var G__28939 = count__28926_28934;
var G__28940 = (i__28927_28935 + (1));
seq__28924_28932 = G__28937;
chunk__28925_28933 = G__28938;
count__28926_28934 = G__28939;
i__28927_28935 = G__28940;
continue;
} else {
var temp__4425__auto___28941 = cljs.core.seq.call(null,seq__28924_28932);
if(temp__4425__auto___28941){
var seq__28924_28942__$1 = temp__4425__auto___28941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28924_28942__$1)){
var c__5338__auto___28943 = cljs.core.chunk_first.call(null,seq__28924_28942__$1);
var G__28944 = cljs.core.chunk_rest.call(null,seq__28924_28942__$1);
var G__28945 = c__5338__auto___28943;
var G__28946 = cljs.core.count.call(null,c__5338__auto___28943);
var G__28947 = (0);
seq__28924_28932 = G__28944;
chunk__28925_28933 = G__28945;
count__28926_28934 = G__28946;
i__28927_28935 = G__28947;
continue;
} else {
var n_28948 = cljs.core.first.call(null,seq__28924_28942__$1);
p.removeSlot(n_28948);

var G__28949 = cljs.core.next.call(null,seq__28924_28942__$1);
var G__28950 = null;
var G__28951 = (0);
var G__28952 = (0);
seq__28924_28932 = G__28949;
chunk__28925_28933 = G__28950;
count__28926_28934 = G__28951;
i__28927_28935 = G__28952;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__28928 = cljs.core.seq.call(null,new$);
var chunk__28929 = null;
var count__28930 = (0);
var i__28931 = (0);
while(true){
if((i__28931 < count__28930)){
var sd = cljs.core._nth.call(null,chunk__28929,i__28931);
cljs.core.println.call(null,new cljs.core.Keyword(null,"pickslot!!","pickslot!!",-645901635),sd);

var da_28953 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_28953);

var G__28954 = seq__28928;
var G__28955 = chunk__28929;
var G__28956 = count__28930;
var G__28957 = (i__28931 + (1));
seq__28928 = G__28954;
chunk__28929 = G__28955;
count__28930 = G__28956;
i__28931 = G__28957;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28928);
if(temp__4425__auto__){
var seq__28928__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28928__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__28928__$1);
var G__28958 = cljs.core.chunk_rest.call(null,seq__28928__$1);
var G__28959 = c__5338__auto__;
var G__28960 = cljs.core.count.call(null,c__5338__auto__);
var G__28961 = (0);
seq__28928 = G__28958;
chunk__28929 = G__28959;
count__28930 = G__28960;
i__28931 = G__28961;
continue;
} else {
var sd = cljs.core.first.call(null,seq__28928__$1);
cljs.core.println.call(null,new cljs.core.Keyword(null,"pickslot!!","pickslot!!",-645901635),sd);

var da_28962 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_28962);

var G__28963 = cljs.core.next.call(null,seq__28928__$1);
var G__28964 = null;
var G__28965 = (0);
var G__28966 = (0);
seq__28928 = G__28963;
chunk__28929 = G__28964;
count__28930 = G__28965;
i__28931 = G__28966;
continue;
}
} else {
return null;
}
}
break;
}
}));
