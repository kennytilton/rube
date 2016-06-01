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
var seq__41031 = cljs.core.seq.call(null,kids);
var chunk__41032 = null;
var count__41033 = (0);
var i__41034 = (0);
while(true){
if((i__41034 < count__41033)){
var kid = cljs.core._nth.call(null,chunk__41032,i__41034);
var rmk_41035 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_41035);

var G__41036 = seq__41031;
var G__41037 = chunk__41032;
var G__41038 = count__41033;
var G__41039 = (i__41034 + (1));
seq__41031 = G__41036;
chunk__41032 = G__41037;
count__41033 = G__41038;
i__41034 = G__41039;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__41031);
if(temp__4425__auto____$1){
var seq__41031__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41031__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__41031__$1);
var G__41040 = cljs.core.chunk_rest.call(null,seq__41031__$1);
var G__41041 = c__5338__auto__;
var G__41042 = cljs.core.count.call(null,c__5338__auto__);
var G__41043 = (0);
seq__41031 = G__41040;
chunk__41032 = G__41041;
count__41033 = G__41042;
i__41034 = G__41043;
continue;
} else {
var kid = cljs.core.first.call(null,seq__41031__$1);
var rmk_41044 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_41044);

var G__41045 = cljs.core.next.call(null,seq__41031__$1);
var G__41046 = null;
var G__41047 = (0);
var G__41048 = (0);
seq__41031 = G__41045;
chunk__41032 = G__41046;
count__41033 = G__41047;
i__41034 = G__41048;
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
var seq__41049 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__41050 = null;
var count__41051 = (0);
var i__41052 = (0);
while(true){
if((i__41052 < count__41051)){
var page = cljs.core._nth.call(null,chunk__41050,i__41052);
var qx_page_41053 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_41053);

var temp__4425__auto___41054 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___41054)){
var ept_41055 = temp__4425__auto___41054;
routing.onGet(ept_41055,shower,qx_page_41053);
} else {
}

var G__41056 = seq__41049;
var G__41057 = chunk__41050;
var G__41058 = count__41051;
var G__41059 = (i__41052 + (1));
seq__41049 = G__41056;
chunk__41050 = G__41057;
count__41051 = G__41058;
i__41052 = G__41059;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__41049);
if(temp__4425__auto__){
var seq__41049__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41049__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__41049__$1);
var G__41060 = cljs.core.chunk_rest.call(null,seq__41049__$1);
var G__41061 = c__5338__auto__;
var G__41062 = cljs.core.count.call(null,c__5338__auto__);
var G__41063 = (0);
seq__41049 = G__41060;
chunk__41050 = G__41061;
count__41051 = G__41062;
i__41052 = G__41063;
continue;
} else {
var page = cljs.core.first.call(null,seq__41049__$1);
var qx_page_41064 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_41064);

var temp__4425__auto___41065__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___41065__$1)){
var ept_41066 = temp__4425__auto___41065__$1;
routing.onGet(ept_41066,shower,qx_page_41064);
} else {
}

var G__41067 = cljs.core.next.call(null,seq__41049__$1);
var G__41068 = null;
var G__41069 = (0);
var G__41070 = (0);
seq__41049 = G__41067;
chunk__41050 = G__41068;
count__41051 = G__41069;
i__41052 = G__41070;
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
var temp__4425__auto___41071 = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___41071)){
var lyo_41072 = temp__4425__auto___41071;
cljs.core.println.call(null,new cljs.core.Keyword(null,"init-setting-layo!!!!!","init-setting-layo!!!!!",-1831845380),lyo_41072,tiltontec.cell.base.ia_type.call(null,me));

tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo_41072);
} else {
}

return tiltontec.qxia.widget.qx_initialize_kids.call(null,me);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),(function (me){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__41073 = cljs.core.seq.call(null,kids);
var chunk__41074 = null;
var count__41075 = (0);
var i__41076 = (0);
while(true){
if((i__41076 < count__41075)){
var k = cljs.core._nth.call(null,chunk__41074,i__41076);
var qxk_41077 = tiltontec.qxia.base.qxme.call(null,k);
var label_41078 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_41077,label_41078);

var G__41079 = seq__41073;
var G__41080 = chunk__41074;
var G__41081 = count__41075;
var G__41082 = (i__41076 + (1));
seq__41073 = G__41079;
chunk__41074 = G__41080;
count__41075 = G__41081;
i__41076 = G__41082;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__41073);
if(temp__4425__auto____$1){
var seq__41073__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41073__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__41073__$1);
var G__41083 = cljs.core.chunk_rest.call(null,seq__41073__$1);
var G__41084 = c__5338__auto__;
var G__41085 = cljs.core.count.call(null,c__5338__auto__);
var G__41086 = (0);
seq__41073 = G__41083;
chunk__41074 = G__41084;
count__41075 = G__41085;
i__41076 = G__41086;
continue;
} else {
var k = cljs.core.first.call(null,seq__41073__$1);
var qxk_41087 = tiltontec.qxia.base.qxme.call(null,k);
var label_41088 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_41087,label_41088);

var G__41089 = cljs.core.next.call(null,seq__41073__$1);
var G__41090 = null;
var G__41091 = (0);
var G__41092 = (0);
seq__41073 = G__41089;
chunk__41074 = G__41090;
count__41075 = G__41091;
i__41076 = G__41092;
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
var seq__41093 = cljs.core.seq.call(null,kids);
var chunk__41094 = null;
var count__41095 = (0);
var i__41096 = (0);
while(true){
if((i__41096 < count__41095)){
var k = cljs.core._nth.call(null,chunk__41094,i__41096);
var qxk_41097 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_41097);

var G__41098 = seq__41093;
var G__41099 = chunk__41094;
var G__41100 = count__41095;
var G__41101 = (i__41096 + (1));
seq__41093 = G__41098;
chunk__41094 = G__41099;
count__41095 = G__41100;
i__41096 = G__41101;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__41093);
if(temp__4425__auto____$1){
var seq__41093__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41093__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__41093__$1);
var G__41102 = cljs.core.chunk_rest.call(null,seq__41093__$1);
var G__41103 = c__5338__auto__;
var G__41104 = cljs.core.count.call(null,c__5338__auto__);
var G__41105 = (0);
seq__41093 = G__41102;
chunk__41094 = G__41103;
count__41095 = G__41104;
i__41096 = G__41105;
continue;
} else {
var k = cljs.core.first.call(null,seq__41093__$1);
var qxk_41106 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_41106);

var G__41107 = cljs.core.next.call(null,seq__41093__$1);
var G__41108 = null;
var G__41109 = (0);
var G__41110 = (0);
seq__41093 = G__41107;
chunk__41094 = G__41108;
count__41095 = G__41109;
i__41096 = G__41110;
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
var lostks_41119 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_41119)){
} else {
var seq__41111_41120 = cljs.core.seq.call(null,lostks_41119);
var chunk__41112_41121 = null;
var count__41113_41122 = (0);
var i__41114_41123 = (0);
while(true){
if((i__41114_41123 < count__41113_41122)){
var kid_41124 = cljs.core._nth.call(null,chunk__41112_41121,i__41114_41123);
var qxk_41125 = tiltontec.qxia.base.qxme.call(null,kid_41124);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_41124,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_41125);
}

qxk_41125.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_41124);

var G__41126 = seq__41111_41120;
var G__41127 = chunk__41112_41121;
var G__41128 = count__41113_41122;
var G__41129 = (i__41114_41123 + (1));
seq__41111_41120 = G__41126;
chunk__41112_41121 = G__41127;
count__41113_41122 = G__41128;
i__41114_41123 = G__41129;
continue;
} else {
var temp__4425__auto___41130 = cljs.core.seq.call(null,seq__41111_41120);
if(temp__4425__auto___41130){
var seq__41111_41131__$1 = temp__4425__auto___41130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41111_41131__$1)){
var c__5338__auto___41132 = cljs.core.chunk_first.call(null,seq__41111_41131__$1);
var G__41133 = cljs.core.chunk_rest.call(null,seq__41111_41131__$1);
var G__41134 = c__5338__auto___41132;
var G__41135 = cljs.core.count.call(null,c__5338__auto___41132);
var G__41136 = (0);
seq__41111_41120 = G__41133;
chunk__41112_41121 = G__41134;
count__41113_41122 = G__41135;
i__41114_41123 = G__41136;
continue;
} else {
var kid_41137 = cljs.core.first.call(null,seq__41111_41131__$1);
var qxk_41138 = tiltontec.qxia.base.qxme.call(null,kid_41137);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_41137,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_41138);
}

qxk_41138.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_41137);

var G__41139 = cljs.core.next.call(null,seq__41111_41131__$1);
var G__41140 = null;
var G__41141 = (0);
var G__41142 = (0);
seq__41111_41120 = G__41139;
chunk__41112_41121 = G__41140;
count__41113_41122 = G__41141;
i__41114_41123 = G__41142;
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
var seq__41115 = cljs.core.seq.call(null,new_ks);
var chunk__41116 = null;
var count__41117 = (0);
var i__41118 = (0);
while(true){
if((i__41118 < count__41117)){
var k = cljs.core._nth.call(null,chunk__41116,i__41118);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_41143 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_41143);
}

var G__41144 = seq__41115;
var G__41145 = chunk__41116;
var G__41146 = count__41117;
var G__41147 = (i__41118 + (1));
seq__41115 = G__41144;
chunk__41116 = G__41145;
count__41117 = G__41146;
i__41118 = G__41147;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__41115);
if(temp__4425__auto__){
var seq__41115__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41115__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__41115__$1);
var G__41148 = cljs.core.chunk_rest.call(null,seq__41115__$1);
var G__41149 = c__5338__auto__;
var G__41150 = cljs.core.count.call(null,c__5338__auto__);
var G__41151 = (0);
seq__41115 = G__41148;
chunk__41116 = G__41149;
count__41117 = G__41150;
i__41118 = G__41151;
continue;
} else {
var k = cljs.core.first.call(null,seq__41115__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_41152 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_41152);
}

var G__41153 = cljs.core.next.call(null,seq__41115__$1);
var G__41154 = null;
var G__41155 = (0);
var G__41156 = (0);
seq__41115 = G__41153;
chunk__41116 = G__41154;
count__41117 = G__41155;
i__41118 = G__41156;
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
