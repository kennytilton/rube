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
var seq__12025 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__12026 = null;
var count__12027 = (0);
var i__12028 = (0);
while(true){
if((i__12028 < count__12027)){
var page = cljs.core._nth.call(null,chunk__12026,i__12028);
var qx_page_12029 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_12029);

var temp__4425__auto___12030 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___12030)){
var ept_12031 = temp__4425__auto___12030;
routing.onGet(ept_12031,shower,qx_page_12029);
} else {
}

var G__12032 = seq__12025;
var G__12033 = chunk__12026;
var G__12034 = count__12027;
var G__12035 = (i__12028 + (1));
seq__12025 = G__12032;
chunk__12026 = G__12033;
count__12027 = G__12034;
i__12028 = G__12035;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12025);
if(temp__4425__auto__){
var seq__12025__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12025__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__12025__$1);
var G__12036 = cljs.core.chunk_rest.call(null,seq__12025__$1);
var G__12037 = c__5338__auto__;
var G__12038 = cljs.core.count.call(null,c__5338__auto__);
var G__12039 = (0);
seq__12025 = G__12036;
chunk__12026 = G__12037;
count__12027 = G__12038;
i__12028 = G__12039;
continue;
} else {
var page = cljs.core.first.call(null,seq__12025__$1);
var qx_page_12040 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_12040);

var temp__4425__auto___12041__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___12041__$1)){
var ept_12042 = temp__4425__auto___12041__$1;
routing.onGet(ept_12042,shower,qx_page_12040);
} else {
}

var G__12043 = cljs.core.next.call(null,seq__12025__$1);
var G__12044 = null;
var G__12045 = (0);
var G__12046 = (0);
seq__12025 = G__12043;
chunk__12026 = G__12044;
count__12027 = G__12045;
i__12028 = G__12046;
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
var temp__4425__auto___12051 = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___12051)){
var lyo_12052 = temp__4425__auto___12051;
cljs.core.println.call(null,new cljs.core.Keyword(null,"init-setting-layo!!!!!","init-setting-layo!!!!!",-1831845380),lyo_12052,tiltontec.cell.base.ia_type.call(null,me));

tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo_12052);
} else {
}

var seq__12047 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__12048 = null;
var count__12049 = (0);
var i__12050 = (0);
while(true){
if((i__12050 < count__12049)){
var kid = cljs.core._nth.call(null,chunk__12048,i__12050);
tiltontec.qxia.base.qx_add_kid.call(null,me,kid);

var G__12053 = seq__12047;
var G__12054 = chunk__12048;
var G__12055 = count__12049;
var G__12056 = (i__12050 + (1));
seq__12047 = G__12053;
chunk__12048 = G__12054;
count__12049 = G__12055;
i__12050 = G__12056;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12047);
if(temp__4425__auto__){
var seq__12047__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12047__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__12047__$1);
var G__12057 = cljs.core.chunk_rest.call(null,seq__12047__$1);
var G__12058 = c__5338__auto__;
var G__12059 = cljs.core.count.call(null,c__5338__auto__);
var G__12060 = (0);
seq__12047 = G__12057;
chunk__12048 = G__12058;
count__12049 = G__12059;
i__12050 = G__12060;
continue;
} else {
var kid = cljs.core.first.call(null,seq__12047__$1);
tiltontec.qxia.base.qx_add_kid.call(null,me,kid);

var G__12061 = cljs.core.next.call(null,seq__12047__$1);
var G__12062 = null;
var G__12063 = (0);
var G__12064 = (0);
seq__12047 = G__12061;
chunk__12048 = G__12062;
count__12049 = G__12063;
i__12050 = G__12064;
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
var seq__12065 = cljs.core.seq.call(null,kids);
var chunk__12066 = null;
var count__12067 = (0);
var i__12068 = (0);
while(true){
if((i__12068 < count__12067)){
var k = cljs.core._nth.call(null,chunk__12066,i__12068);
var qxk_12069 = tiltontec.qxia.base.qxme.call(null,k);
var label_12070 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_12069,label_12070);

var G__12071 = seq__12065;
var G__12072 = chunk__12066;
var G__12073 = count__12067;
var G__12074 = (i__12068 + (1));
seq__12065 = G__12071;
chunk__12066 = G__12072;
count__12067 = G__12073;
i__12068 = G__12074;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__12065);
if(temp__4425__auto____$1){
var seq__12065__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12065__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__12065__$1);
var G__12075 = cljs.core.chunk_rest.call(null,seq__12065__$1);
var G__12076 = c__5338__auto__;
var G__12077 = cljs.core.count.call(null,c__5338__auto__);
var G__12078 = (0);
seq__12065 = G__12075;
chunk__12066 = G__12076;
count__12067 = G__12077;
i__12068 = G__12078;
continue;
} else {
var k = cljs.core.first.call(null,seq__12065__$1);
var qxk_12079 = tiltontec.qxia.base.qxme.call(null,k);
var label_12080 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_12079,label_12080);

var G__12081 = cljs.core.next.call(null,seq__12065__$1);
var G__12082 = null;
var G__12083 = (0);
var G__12084 = (0);
seq__12065 = G__12081;
chunk__12066 = G__12082;
count__12067 = G__12083;
i__12068 = G__12084;
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
var seq__12085 = cljs.core.seq.call(null,kids);
var chunk__12086 = null;
var count__12087 = (0);
var i__12088 = (0);
while(true){
if((i__12088 < count__12087)){
var k = cljs.core._nth.call(null,chunk__12086,i__12088);
var qxk_12089 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_12089);

var G__12090 = seq__12085;
var G__12091 = chunk__12086;
var G__12092 = count__12087;
var G__12093 = (i__12088 + (1));
seq__12085 = G__12090;
chunk__12086 = G__12091;
count__12087 = G__12092;
i__12088 = G__12093;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__12085);
if(temp__4425__auto____$1){
var seq__12085__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12085__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__12085__$1);
var G__12094 = cljs.core.chunk_rest.call(null,seq__12085__$1);
var G__12095 = c__5338__auto__;
var G__12096 = cljs.core.count.call(null,c__5338__auto__);
var G__12097 = (0);
seq__12085 = G__12094;
chunk__12086 = G__12095;
count__12087 = G__12096;
i__12088 = G__12097;
continue;
} else {
var k = cljs.core.first.call(null,seq__12085__$1);
var qxk_12098 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_12098);

var G__12099 = cljs.core.next.call(null,seq__12085__$1);
var G__12100 = null;
var G__12101 = (0);
var G__12102 = (0);
seq__12085 = G__12099;
chunk__12086 = G__12100;
count__12087 = G__12101;
i__12088 = G__12102;
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
var lostks_12111 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_12111)){
} else {
var seq__12103_12112 = cljs.core.seq.call(null,lostks_12111);
var chunk__12104_12113 = null;
var count__12105_12114 = (0);
var i__12106_12115 = (0);
while(true){
if((i__12106_12115 < count__12105_12114)){
var kid_12116 = cljs.core._nth.call(null,chunk__12104_12113,i__12106_12115);
var qxk_12117 = tiltontec.qxia.base.qxme.call(null,kid_12116);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_12116,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_12117);
}

qxk_12117.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_12116);

var G__12118 = seq__12103_12112;
var G__12119 = chunk__12104_12113;
var G__12120 = count__12105_12114;
var G__12121 = (i__12106_12115 + (1));
seq__12103_12112 = G__12118;
chunk__12104_12113 = G__12119;
count__12105_12114 = G__12120;
i__12106_12115 = G__12121;
continue;
} else {
var temp__4425__auto___12122 = cljs.core.seq.call(null,seq__12103_12112);
if(temp__4425__auto___12122){
var seq__12103_12123__$1 = temp__4425__auto___12122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12103_12123__$1)){
var c__5338__auto___12124 = cljs.core.chunk_first.call(null,seq__12103_12123__$1);
var G__12125 = cljs.core.chunk_rest.call(null,seq__12103_12123__$1);
var G__12126 = c__5338__auto___12124;
var G__12127 = cljs.core.count.call(null,c__5338__auto___12124);
var G__12128 = (0);
seq__12103_12112 = G__12125;
chunk__12104_12113 = G__12126;
count__12105_12114 = G__12127;
i__12106_12115 = G__12128;
continue;
} else {
var kid_12129 = cljs.core.first.call(null,seq__12103_12123__$1);
var qxk_12130 = tiltontec.qxia.base.qxme.call(null,kid_12129);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_12129,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_12130);
}

qxk_12130.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_12129);

var G__12131 = cljs.core.next.call(null,seq__12103_12123__$1);
var G__12132 = null;
var G__12133 = (0);
var G__12134 = (0);
seq__12103_12112 = G__12131;
chunk__12104_12113 = G__12132;
count__12105_12114 = G__12133;
i__12106_12115 = G__12134;
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
var seq__12107 = cljs.core.seq.call(null,new_ks);
var chunk__12108 = null;
var count__12109 = (0);
var i__12110 = (0);
while(true){
if((i__12110 < count__12109)){
var k = cljs.core._nth.call(null,chunk__12108,i__12110);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__12135 = seq__12107;
var G__12136 = chunk__12108;
var G__12137 = count__12109;
var G__12138 = (i__12110 + (1));
seq__12107 = G__12135;
chunk__12108 = G__12136;
count__12109 = G__12137;
i__12110 = G__12138;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12107);
if(temp__4425__auto__){
var seq__12107__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12107__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__12107__$1);
var G__12139 = cljs.core.chunk_rest.call(null,seq__12107__$1);
var G__12140 = c__5338__auto__;
var G__12141 = cljs.core.count.call(null,c__5338__auto__);
var G__12142 = (0);
seq__12107 = G__12139;
chunk__12108 = G__12140;
count__12109 = G__12141;
i__12110 = G__12142;
continue;
} else {
var k = cljs.core.first.call(null,seq__12107__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__12143 = cljs.core.next.call(null,seq__12107__$1);
var G__12144 = null;
var G__12145 = (0);
var G__12146 = (0);
seq__12107 = G__12143;
chunk__12108 = G__12144;
count__12109 = G__12145;
i__12110 = G__12146;
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
