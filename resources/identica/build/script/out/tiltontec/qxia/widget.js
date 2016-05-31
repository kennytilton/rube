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
var hierarchy__5452__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return tiltontec.cell.base.ia_types;},new cljs.core.Symbol("tiltontec.cell.base","ia-types","tiltontec.cell.base/ia-types",436375603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tiltontec.cell.base","tiltontec.cell.base",-1575671422,null),new cljs.core.Symbol(null,"ia-types","ia-types",322849110,null),"src/tiltontec/cell/base.cljc",14,1,104,104,cljs.core.List.EMPTY,null,(cljs.core.truth_(tiltontec.cell.base.ia_types)?tiltontec.cell.base.ia_types.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.qxia.widget","qx-initialize-kids"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5452__auto__,method_table__5448__auto__,prefer_table__5449__auto__,method_cache__5450__auto__,cached_hierarchy__5451__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.qxia.widget.qx_initialize_kids,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
cljs.core.println.call(null,new cljs.core.Keyword(null,"fall-thru-qxfinkids!!!!!!!","fall-thru-qxfinkids!!!!!!!",-666283977),tiltontec.cell.base.ia_type.call(null,me));

var qx_me = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
var seq__30958 = cljs.core.seq.call(null,kids);
var chunk__30959 = null;
var count__30960 = (0);
var i__30961 = (0);
while(true){
if((i__30961 < count__30960)){
var kid = cljs.core._nth.call(null,chunk__30959,i__30961);
var rmk_30962 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_30962);

var G__30963 = seq__30958;
var G__30964 = chunk__30959;
var G__30965 = count__30960;
var G__30966 = (i__30961 + (1));
seq__30958 = G__30963;
chunk__30959 = G__30964;
count__30960 = G__30965;
i__30961 = G__30966;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__30958);
if(temp__4425__auto____$1){
var seq__30958__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30958__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__30958__$1);
var G__30967 = cljs.core.chunk_rest.call(null,seq__30958__$1);
var G__30968 = c__5338__auto__;
var G__30969 = cljs.core.count.call(null,c__5338__auto__);
var G__30970 = (0);
seq__30958 = G__30967;
chunk__30959 = G__30968;
count__30960 = G__30969;
i__30961 = G__30970;
continue;
} else {
var kid = cljs.core.first.call(null,seq__30958__$1);
var rmk_30971 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_30971);

var G__30972 = cljs.core.next.call(null,seq__30958__$1);
var G__30973 = null;
var G__30974 = (0);
var G__30975 = (0);
seq__30958 = G__30972;
chunk__30959 = G__30973;
count__30960 = G__30974;
i__30961 = G__30975;
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
var seq__30976 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__30977 = null;
var count__30978 = (0);
var i__30979 = (0);
while(true){
if((i__30979 < count__30978)){
var page = cljs.core._nth.call(null,chunk__30977,i__30979);
var qx_page_30980 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_30980]);

var temp__4425__auto___30981 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___30981)){
var ept_30982 = temp__4425__auto___30981;
routing.onGet(ept_30982,shower,qx_page_30980);
} else {
}

var G__30983 = seq__30976;
var G__30984 = chunk__30977;
var G__30985 = count__30978;
var G__30986 = (i__30979 + (1));
seq__30976 = G__30983;
chunk__30977 = G__30984;
count__30978 = G__30985;
i__30979 = G__30986;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30976);
if(temp__4425__auto__){
var seq__30976__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30976__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__30976__$1);
var G__30987 = cljs.core.chunk_rest.call(null,seq__30976__$1);
var G__30988 = c__5338__auto__;
var G__30989 = cljs.core.count.call(null,c__5338__auto__);
var G__30990 = (0);
seq__30976 = G__30987;
chunk__30977 = G__30988;
count__30978 = G__30989;
i__30979 = G__30990;
continue;
} else {
var page = cljs.core.first.call(null,seq__30976__$1);
var qx_page_30991 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_30991]);

var temp__4425__auto___30992__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___30992__$1)){
var ept_30993 = temp__4425__auto___30992__$1;
routing.onGet(ept_30993,shower,qx_page_30991);
} else {
}

var G__30994 = cljs.core.next.call(null,seq__30976__$1);
var G__30995 = null;
var G__30996 = (0);
var G__30997 = (0);
seq__30976 = G__30994;
chunk__30977 = G__30995;
count__30978 = G__30996;
i__30979 = G__30997;
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
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__30998 = cljs.core.seq.call(null,kids);
var chunk__30999 = null;
var count__31000 = (0);
var i__31001 = (0);
while(true){
if((i__31001 < count__31000)){
var k = cljs.core._nth.call(null,chunk__30999,i__31001);
var qxk_31002 = tiltontec.qxia.base.qxme.call(null,k);
var label_31003 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_31002,label_31003);

var G__31004 = seq__30998;
var G__31005 = chunk__30999;
var G__31006 = count__31000;
var G__31007 = (i__31001 + (1));
seq__30998 = G__31004;
chunk__30999 = G__31005;
count__31000 = G__31006;
i__31001 = G__31007;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__30998);
if(temp__4425__auto____$1){
var seq__30998__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30998__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__30998__$1);
var G__31008 = cljs.core.chunk_rest.call(null,seq__30998__$1);
var G__31009 = c__5338__auto__;
var G__31010 = cljs.core.count.call(null,c__5338__auto__);
var G__31011 = (0);
seq__30998 = G__31008;
chunk__30999 = G__31009;
count__31000 = G__31010;
i__31001 = G__31011;
continue;
} else {
var k = cljs.core.first.call(null,seq__30998__$1);
var qxk_31012 = tiltontec.qxia.base.qxme.call(null,k);
var label_31013 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_31012,label_31013);

var G__31014 = cljs.core.next.call(null,seq__30998__$1);
var G__31015 = null;
var G__31016 = (0);
var G__31017 = (0);
seq__30998 = G__31014;
chunk__30999 = G__31015;
count__31000 = G__31016;
i__31001 = G__31017;
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
var seq__31018 = cljs.core.seq.call(null,kids);
var chunk__31019 = null;
var count__31020 = (0);
var i__31021 = (0);
while(true){
if((i__31021 < count__31020)){
var k = cljs.core._nth.call(null,chunk__31019,i__31021);
var qxk_31022 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_31022);

var G__31023 = seq__31018;
var G__31024 = chunk__31019;
var G__31025 = count__31020;
var G__31026 = (i__31021 + (1));
seq__31018 = G__31023;
chunk__31019 = G__31024;
count__31020 = G__31025;
i__31021 = G__31026;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__31018);
if(temp__4425__auto____$1){
var seq__31018__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31018__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__31018__$1);
var G__31027 = cljs.core.chunk_rest.call(null,seq__31018__$1);
var G__31028 = c__5338__auto__;
var G__31029 = cljs.core.count.call(null,c__5338__auto__);
var G__31030 = (0);
seq__31018 = G__31027;
chunk__31019 = G__31028;
count__31020 = G__31029;
i__31021 = G__31030;
continue;
} else {
var k = cljs.core.first.call(null,seq__31018__$1);
var qxk_31031 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_31031);

var G__31032 = cljs.core.next.call(null,seq__31018__$1);
var G__31033 = null;
var G__31034 = (0);
var G__31035 = (0);
seq__31018 = G__31032;
chunk__31019 = G__31033;
count__31020 = G__31034;
i__31021 = G__31035;
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
var lostks_31044 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_31044)){
} else {
var seq__31036_31045 = cljs.core.seq.call(null,lostks_31044);
var chunk__31037_31046 = null;
var count__31038_31047 = (0);
var i__31039_31048 = (0);
while(true){
if((i__31039_31048 < count__31038_31047)){
var kid_31049 = cljs.core._nth.call(null,chunk__31037_31046,i__31039_31048);
var qxk_31050 = tiltontec.qxia.base.qxme.call(null,kid_31049);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_31049,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_31050);
}

qxk_31050.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_31049);

var G__31051 = seq__31036_31045;
var G__31052 = chunk__31037_31046;
var G__31053 = count__31038_31047;
var G__31054 = (i__31039_31048 + (1));
seq__31036_31045 = G__31051;
chunk__31037_31046 = G__31052;
count__31038_31047 = G__31053;
i__31039_31048 = G__31054;
continue;
} else {
var temp__4425__auto___31055 = cljs.core.seq.call(null,seq__31036_31045);
if(temp__4425__auto___31055){
var seq__31036_31056__$1 = temp__4425__auto___31055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31036_31056__$1)){
var c__5338__auto___31057 = cljs.core.chunk_first.call(null,seq__31036_31056__$1);
var G__31058 = cljs.core.chunk_rest.call(null,seq__31036_31056__$1);
var G__31059 = c__5338__auto___31057;
var G__31060 = cljs.core.count.call(null,c__5338__auto___31057);
var G__31061 = (0);
seq__31036_31045 = G__31058;
chunk__31037_31046 = G__31059;
count__31038_31047 = G__31060;
i__31039_31048 = G__31061;
continue;
} else {
var kid_31062 = cljs.core.first.call(null,seq__31036_31056__$1);
var qxk_31063 = tiltontec.qxia.base.qxme.call(null,kid_31062);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_31062,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_31063);
}

qxk_31063.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_31062);

var G__31064 = cljs.core.next.call(null,seq__31036_31056__$1);
var G__31065 = null;
var G__31066 = (0);
var G__31067 = (0);
seq__31036_31045 = G__31064;
chunk__31037_31046 = G__31065;
count__31038_31047 = G__31066;
i__31039_31048 = G__31067;
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
var seq__31040 = cljs.core.seq.call(null,new_ks);
var chunk__31041 = null;
var count__31042 = (0);
var i__31043 = (0);
while(true){
if((i__31043 < count__31042)){
var k = cljs.core._nth.call(null,chunk__31041,i__31043);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_31068 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_31068);
}

var G__31069 = seq__31040;
var G__31070 = chunk__31041;
var G__31071 = count__31042;
var G__31072 = (i__31043 + (1));
seq__31040 = G__31069;
chunk__31041 = G__31070;
count__31042 = G__31071;
i__31043 = G__31072;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31040);
if(temp__4425__auto__){
var seq__31040__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31040__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__31040__$1);
var G__31073 = cljs.core.chunk_rest.call(null,seq__31040__$1);
var G__31074 = c__5338__auto__;
var G__31075 = cljs.core.count.call(null,c__5338__auto__);
var G__31076 = (0);
seq__31040 = G__31073;
chunk__31041 = G__31074;
count__31042 = G__31075;
i__31043 = G__31076;
continue;
} else {
var k = cljs.core.first.call(null,seq__31040__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_31077 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_31077);
}

var G__31078 = cljs.core.next.call(null,seq__31040__$1);
var G__31079 = null;
var G__31080 = (0);
var G__31081 = (0);
seq__31040 = G__31078;
chunk__31041 = G__31079;
count__31042 = G__31080;
i__31043 = G__31081;
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
