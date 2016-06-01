// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.widget');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.base');
goog.require('tiltontec.qxia.base');
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","Mobile","tiltontec.qxia.base/Mobile",1622995536),(function (me){
var app = new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var shower = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"shower","shower",-1731894586));
var pager = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"pager","pager",1850229940));
var routing = app.getRouting();
var seq__42854 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__42855 = null;
var count__42856 = (0);
var i__42857 = (0);
while(true){
if((i__42857 < count__42856)){
var page = cljs.core._nth.call(null,chunk__42855,i__42857);
var qx_page_42858 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_42858);

var temp__4425__auto___42859 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___42859)){
var ept_42860 = temp__4425__auto___42859;
routing.onGet(ept_42860,shower,qx_page_42858);
} else {
}

var G__42861 = seq__42854;
var G__42862 = chunk__42855;
var G__42863 = count__42856;
var G__42864 = (i__42857 + (1));
seq__42854 = G__42861;
chunk__42855 = G__42862;
count__42856 = G__42863;
i__42857 = G__42864;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__42854);
if(temp__4425__auto__){
var seq__42854__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42854__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__42854__$1);
var G__42865 = cljs.core.chunk_rest.call(null,seq__42854__$1);
var G__42866 = c__5338__auto__;
var G__42867 = cljs.core.count.call(null,c__5338__auto__);
var G__42868 = (0);
seq__42854 = G__42865;
chunk__42855 = G__42866;
count__42856 = G__42867;
i__42857 = G__42868;
continue;
} else {
var page = cljs.core.first.call(null,seq__42854__$1);
var qx_page_42869 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_42869);

var temp__4425__auto___42870__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___42870__$1)){
var ept_42871 = temp__4425__auto___42870__$1;
routing.onGet(ept_42871,shower,qx_page_42869);
} else {
}

var G__42872 = cljs.core.next.call(null,seq__42854__$1);
var G__42873 = null;
var G__42874 = (0);
var G__42875 = (0);
seq__42854 = G__42872;
chunk__42855 = G__42873;
count__42856 = G__42874;
i__42857 = G__42875;
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
var temp__4425__auto___42880 = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___42880)){
var lyo_42881 = temp__4425__auto___42880;
cljs.core.println.call(null,new cljs.core.Keyword(null,"init-setting-layo!!!!!","init-setting-layo!!!!!",-1831845380),lyo_42881,tiltontec.cell.base.ia_type.call(null,me));

tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo_42881);
} else {
}

var seq__42876 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__42877 = null;
var count__42878 = (0);
var i__42879 = (0);
while(true){
if((i__42879 < count__42878)){
var kid = cljs.core._nth.call(null,chunk__42877,i__42879);
tiltontec.qxia.base.qx_add_kid.call(null,me,kid);

var G__42882 = seq__42876;
var G__42883 = chunk__42877;
var G__42884 = count__42878;
var G__42885 = (i__42879 + (1));
seq__42876 = G__42882;
chunk__42877 = G__42883;
count__42878 = G__42884;
i__42879 = G__42885;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__42876);
if(temp__4425__auto__){
var seq__42876__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42876__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__42876__$1);
var G__42886 = cljs.core.chunk_rest.call(null,seq__42876__$1);
var G__42887 = c__5338__auto__;
var G__42888 = cljs.core.count.call(null,c__5338__auto__);
var G__42889 = (0);
seq__42876 = G__42886;
chunk__42877 = G__42887;
count__42878 = G__42888;
i__42879 = G__42889;
continue;
} else {
var kid = cljs.core.first.call(null,seq__42876__$1);
tiltontec.qxia.base.qx_add_kid.call(null,me,kid);

var G__42890 = cljs.core.next.call(null,seq__42876__$1);
var G__42891 = null;
var G__42892 = (0);
var G__42893 = (0);
seq__42876 = G__42890;
chunk__42877 = G__42891;
count__42878 = G__42892;
i__42879 = G__42893;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),(function (me){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__42894 = cljs.core.seq.call(null,kids);
var chunk__42895 = null;
var count__42896 = (0);
var i__42897 = (0);
while(true){
if((i__42897 < count__42896)){
var k = cljs.core._nth.call(null,chunk__42895,i__42897);
var qxk_42898 = tiltontec.qxia.base.qxme.call(null,k);
var label_42899 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_42898,label_42899);

var G__42900 = seq__42894;
var G__42901 = chunk__42895;
var G__42902 = count__42896;
var G__42903 = (i__42897 + (1));
seq__42894 = G__42900;
chunk__42895 = G__42901;
count__42896 = G__42902;
i__42897 = G__42903;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__42894);
if(temp__4425__auto____$1){
var seq__42894__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42894__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__42894__$1);
var G__42904 = cljs.core.chunk_rest.call(null,seq__42894__$1);
var G__42905 = c__5338__auto__;
var G__42906 = cljs.core.count.call(null,c__5338__auto__);
var G__42907 = (0);
seq__42894 = G__42904;
chunk__42895 = G__42905;
count__42896 = G__42906;
i__42897 = G__42907;
continue;
} else {
var k = cljs.core.first.call(null,seq__42894__$1);
var qxk_42908 = tiltontec.qxia.base.qxme.call(null,k);
var label_42909 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_42908,label_42909);

var G__42910 = cljs.core.next.call(null,seq__42894__$1);
var G__42911 = null;
var G__42912 = (0);
var G__42913 = (0);
seq__42894 = G__42910;
chunk__42895 = G__42911;
count__42896 = G__42912;
i__42897 = G__42913;
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
var seq__42914 = cljs.core.seq.call(null,kids);
var chunk__42915 = null;
var count__42916 = (0);
var i__42917 = (0);
while(true){
if((i__42917 < count__42916)){
var k = cljs.core._nth.call(null,chunk__42915,i__42917);
var qxk_42918 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_42918);

var G__42919 = seq__42914;
var G__42920 = chunk__42915;
var G__42921 = count__42916;
var G__42922 = (i__42917 + (1));
seq__42914 = G__42919;
chunk__42915 = G__42920;
count__42916 = G__42921;
i__42917 = G__42922;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__42914);
if(temp__4425__auto____$1){
var seq__42914__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42914__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__42914__$1);
var G__42923 = cljs.core.chunk_rest.call(null,seq__42914__$1);
var G__42924 = c__5338__auto__;
var G__42925 = cljs.core.count.call(null,c__5338__auto__);
var G__42926 = (0);
seq__42914 = G__42923;
chunk__42915 = G__42924;
count__42916 = G__42925;
i__42917 = G__42926;
continue;
} else {
var k = cljs.core.first.call(null,seq__42914__$1);
var qxk_42927 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_42927);

var G__42928 = cljs.core.next.call(null,seq__42914__$1);
var G__42929 = null;
var G__42930 = (0);
var G__42931 = (0);
seq__42914 = G__42928;
chunk__42915 = G__42929;
count__42916 = G__42930;
i__42917 = G__42931;
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
var lostks_42940 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_42940)){
} else {
var seq__42932_42941 = cljs.core.seq.call(null,lostks_42940);
var chunk__42933_42942 = null;
var count__42934_42943 = (0);
var i__42935_42944 = (0);
while(true){
if((i__42935_42944 < count__42934_42943)){
var kid_42945 = cljs.core._nth.call(null,chunk__42933_42942,i__42935_42944);
var qxk_42946 = tiltontec.qxia.base.qxme.call(null,kid_42945);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_42945,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_42946);
}

qxk_42946.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_42945);

var G__42947 = seq__42932_42941;
var G__42948 = chunk__42933_42942;
var G__42949 = count__42934_42943;
var G__42950 = (i__42935_42944 + (1));
seq__42932_42941 = G__42947;
chunk__42933_42942 = G__42948;
count__42934_42943 = G__42949;
i__42935_42944 = G__42950;
continue;
} else {
var temp__4425__auto___42951 = cljs.core.seq.call(null,seq__42932_42941);
if(temp__4425__auto___42951){
var seq__42932_42952__$1 = temp__4425__auto___42951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42932_42952__$1)){
var c__5338__auto___42953 = cljs.core.chunk_first.call(null,seq__42932_42952__$1);
var G__42954 = cljs.core.chunk_rest.call(null,seq__42932_42952__$1);
var G__42955 = c__5338__auto___42953;
var G__42956 = cljs.core.count.call(null,c__5338__auto___42953);
var G__42957 = (0);
seq__42932_42941 = G__42954;
chunk__42933_42942 = G__42955;
count__42934_42943 = G__42956;
i__42935_42944 = G__42957;
continue;
} else {
var kid_42958 = cljs.core.first.call(null,seq__42932_42952__$1);
var qxk_42959 = tiltontec.qxia.base.qxme.call(null,kid_42958);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_42958,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_42959);
}

qxk_42959.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_42958);

var G__42960 = cljs.core.next.call(null,seq__42932_42952__$1);
var G__42961 = null;
var G__42962 = (0);
var G__42963 = (0);
seq__42932_42941 = G__42960;
chunk__42933_42942 = G__42961;
count__42934_42943 = G__42962;
i__42935_42944 = G__42963;
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
var seq__42936 = cljs.core.seq.call(null,new_ks);
var chunk__42937 = null;
var count__42938 = (0);
var i__42939 = (0);
while(true){
if((i__42939 < count__42938)){
var k = cljs.core._nth.call(null,chunk__42937,i__42939);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__42964 = seq__42936;
var G__42965 = chunk__42937;
var G__42966 = count__42938;
var G__42967 = (i__42939 + (1));
seq__42936 = G__42964;
chunk__42937 = G__42965;
count__42938 = G__42966;
i__42939 = G__42967;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__42936);
if(temp__4425__auto__){
var seq__42936__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42936__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__42936__$1);
var G__42968 = cljs.core.chunk_rest.call(null,seq__42936__$1);
var G__42969 = c__5338__auto__;
var G__42970 = cljs.core.count.call(null,c__5338__auto__);
var G__42971 = (0);
seq__42936 = G__42968;
chunk__42937 = G__42969;
count__42938 = G__42970;
i__42939 = G__42971;
continue;
} else {
var k = cljs.core.first.call(null,seq__42936__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__42972 = cljs.core.next.call(null,seq__42936__$1);
var G__42973 = null;
var G__42974 = (0);
var G__42975 = (0);
seq__42936 = G__42972;
chunk__42937 = G__42973;
count__42938 = G__42974;
i__42939 = G__42975;
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
