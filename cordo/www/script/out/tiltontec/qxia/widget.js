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
if(cljs.core.truth_(app)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("obs mob kids"),cljs.core.str("\n"),cljs.core.str("app")].join('')));
}

var routing = app.getRouting();
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__29003_29011 = cljs.core.seq.call(null,old);
var chunk__29004_29012 = null;
var count__29005_29013 = (0);
var i__29006_29014 = (0);
while(true){
if((i__29006_29014 < count__29005_29013)){
var page_29015 = cljs.core._nth.call(null,chunk__29004_29012,i__29006_29014);
var temp__4425__auto___29016 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_29015));
if(cljs.core.truth_(temp__4425__auto___29016)){
var ept_29017 = temp__4425__auto___29016;
routing.remove(ept_29017);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_29015));

var G__29018 = seq__29003_29011;
var G__29019 = chunk__29004_29012;
var G__29020 = count__29005_29013;
var G__29021 = (i__29006_29014 + (1));
seq__29003_29011 = G__29018;
chunk__29004_29012 = G__29019;
count__29005_29013 = G__29020;
i__29006_29014 = G__29021;
continue;
} else {
var temp__4425__auto___29022 = cljs.core.seq.call(null,seq__29003_29011);
if(temp__4425__auto___29022){
var seq__29003_29023__$1 = temp__4425__auto___29022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29003_29023__$1)){
var c__7021__auto___29024 = cljs.core.chunk_first.call(null,seq__29003_29023__$1);
var G__29025 = cljs.core.chunk_rest.call(null,seq__29003_29023__$1);
var G__29026 = c__7021__auto___29024;
var G__29027 = cljs.core.count.call(null,c__7021__auto___29024);
var G__29028 = (0);
seq__29003_29011 = G__29025;
chunk__29004_29012 = G__29026;
count__29005_29013 = G__29027;
i__29006_29014 = G__29028;
continue;
} else {
var page_29029 = cljs.core.first.call(null,seq__29003_29023__$1);
var temp__4425__auto___29030__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_29029));
if(cljs.core.truth_(temp__4425__auto___29030__$1)){
var ept_29031 = temp__4425__auto___29030__$1;
routing.remove(ept_29031);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_29029));

var G__29032 = cljs.core.next.call(null,seq__29003_29023__$1);
var G__29033 = null;
var G__29034 = (0);
var G__29035 = (0);
seq__29003_29011 = G__29032;
chunk__29004_29012 = G__29033;
count__29005_29013 = G__29034;
i__29006_29014 = G__29035;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__29007 = cljs.core.seq.call(null,new$);
var chunk__29008 = null;
var count__29009 = (0);
var i__29010 = (0);
while(true){
if((i__29010 < count__29009)){
var page = cljs.core._nth.call(null,chunk__29008,i__29010);
var qx_page_29036 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_29036);

var temp__4425__auto___29037 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___29037)){
var ept_29038 = temp__4425__auto___29037;
routing.onGet(ept_29038,shower,qx_page_29036);
} else {
}

var G__29039 = seq__29007;
var G__29040 = chunk__29008;
var G__29041 = count__29009;
var G__29042 = (i__29010 + (1));
seq__29007 = G__29039;
chunk__29008 = G__29040;
count__29009 = G__29041;
i__29010 = G__29042;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29007);
if(temp__4425__auto__){
var seq__29007__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29007__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__29007__$1);
var G__29043 = cljs.core.chunk_rest.call(null,seq__29007__$1);
var G__29044 = c__7021__auto__;
var G__29045 = cljs.core.count.call(null,c__7021__auto__);
var G__29046 = (0);
seq__29007 = G__29043;
chunk__29008 = G__29044;
count__29009 = G__29045;
i__29010 = G__29046;
continue;
} else {
var page = cljs.core.first.call(null,seq__29007__$1);
var qx_page_29047 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_29047);

var temp__4425__auto___29048__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___29048__$1)){
var ept_29049 = temp__4425__auto___29048__$1;
routing.onGet(ept_29049,shower,qx_page_29047);
} else {
}

var G__29050 = cljs.core.next.call(null,seq__29007__$1);
var G__29051 = null;
var G__29052 = (0);
var G__29053 = (0);
seq__29007 = G__29050;
chunk__29008 = G__29051;
count__29009 = G__29052;
i__29010 = G__29053;
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
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225)], null),(function (_,me,new$,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__29054_29062 = cljs.core.seq.call(null,old);
var chunk__29055_29063 = null;
var count__29056_29064 = (0);
var i__29057_29065 = (0);
while(true){
if((i__29057_29065 < count__29056_29064)){
var k_29066 = cljs.core._nth.call(null,chunk__29055_29063,i__29057_29065);
var qxk_29067 = tiltontec.qxia.base.qxme.call(null,k_29066);
var label_29068 = tiltontec.model.core.md_get.call(null,k_29066,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_29067);

var G__29069 = seq__29054_29062;
var G__29070 = chunk__29055_29063;
var G__29071 = count__29056_29064;
var G__29072 = (i__29057_29065 + (1));
seq__29054_29062 = G__29069;
chunk__29055_29063 = G__29070;
count__29056_29064 = G__29071;
i__29057_29065 = G__29072;
continue;
} else {
var temp__4425__auto___29073 = cljs.core.seq.call(null,seq__29054_29062);
if(temp__4425__auto___29073){
var seq__29054_29074__$1 = temp__4425__auto___29073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29054_29074__$1)){
var c__7021__auto___29075 = cljs.core.chunk_first.call(null,seq__29054_29074__$1);
var G__29076 = cljs.core.chunk_rest.call(null,seq__29054_29074__$1);
var G__29077 = c__7021__auto___29075;
var G__29078 = cljs.core.count.call(null,c__7021__auto___29075);
var G__29079 = (0);
seq__29054_29062 = G__29076;
chunk__29055_29063 = G__29077;
count__29056_29064 = G__29078;
i__29057_29065 = G__29079;
continue;
} else {
var k_29080 = cljs.core.first.call(null,seq__29054_29074__$1);
var qxk_29081 = tiltontec.qxia.base.qxme.call(null,k_29080);
var label_29082 = tiltontec.model.core.md_get.call(null,k_29080,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_29081);

var G__29083 = cljs.core.next.call(null,seq__29054_29074__$1);
var G__29084 = null;
var G__29085 = (0);
var G__29086 = (0);
seq__29054_29062 = G__29083;
chunk__29055_29063 = G__29084;
count__29056_29064 = G__29085;
i__29057_29065 = G__29086;
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
var seq__29058 = cljs.core.seq.call(null,kids);
var chunk__29059 = null;
var count__29060 = (0);
var i__29061 = (0);
while(true){
if((i__29061 < count__29060)){
var k = cljs.core._nth.call(null,chunk__29059,i__29061);
var qxk_29087 = tiltontec.qxia.base.qxme.call(null,k);
var label_29088 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_29087,label_29088);

var G__29089 = seq__29058;
var G__29090 = chunk__29059;
var G__29091 = count__29060;
var G__29092 = (i__29061 + (1));
seq__29058 = G__29089;
chunk__29059 = G__29090;
count__29060 = G__29091;
i__29061 = G__29092;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__29058);
if(temp__4425__auto____$1){
var seq__29058__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29058__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__29058__$1);
var G__29093 = cljs.core.chunk_rest.call(null,seq__29058__$1);
var G__29094 = c__7021__auto__;
var G__29095 = cljs.core.count.call(null,c__7021__auto__);
var G__29096 = (0);
seq__29058 = G__29093;
chunk__29059 = G__29094;
count__29060 = G__29095;
i__29061 = G__29096;
continue;
} else {
var k = cljs.core.first.call(null,seq__29058__$1);
var qxk_29097 = tiltontec.qxia.base.qxme.call(null,k);
var label_29098 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_29097,label_29098);

var G__29099 = cljs.core.next.call(null,seq__29058__$1);
var G__29100 = null;
var G__29101 = (0);
var G__29102 = (0);
seq__29058 = G__29099;
chunk__29059 = G__29100;
count__29060 = G__29101;
i__29061 = G__29102;
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
var temp__4425__auto___29107 = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___29107)){
var kids_29108 = temp__4425__auto___29107;
var content_29109 = qx_page.getContent();
var seq__29103_29110 = cljs.core.seq.call(null,kids_29108);
var chunk__29104_29111 = null;
var count__29105_29112 = (0);
var i__29106_29113 = (0);
while(true){
if((i__29106_29113 < count__29105_29112)){
var k_29114 = cljs.core._nth.call(null,chunk__29104_29111,i__29106_29113);
var qxk_29115 = tiltontec.qxia.base.qxme.call(null,k_29114);
content_29109.add(qxk_29115);

var G__29116 = seq__29103_29110;
var G__29117 = chunk__29104_29111;
var G__29118 = count__29105_29112;
var G__29119 = (i__29106_29113 + (1));
seq__29103_29110 = G__29116;
chunk__29104_29111 = G__29117;
count__29105_29112 = G__29118;
i__29106_29113 = G__29119;
continue;
} else {
var temp__4425__auto___29120__$1 = cljs.core.seq.call(null,seq__29103_29110);
if(temp__4425__auto___29120__$1){
var seq__29103_29121__$1 = temp__4425__auto___29120__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29103_29121__$1)){
var c__7021__auto___29122 = cljs.core.chunk_first.call(null,seq__29103_29121__$1);
var G__29123 = cljs.core.chunk_rest.call(null,seq__29103_29121__$1);
var G__29124 = c__7021__auto___29122;
var G__29125 = cljs.core.count.call(null,c__7021__auto___29122);
var G__29126 = (0);
seq__29103_29110 = G__29123;
chunk__29104_29111 = G__29124;
count__29105_29112 = G__29125;
i__29106_29113 = G__29126;
continue;
} else {
var k_29127 = cljs.core.first.call(null,seq__29103_29121__$1);
var qxk_29128 = tiltontec.qxia.base.qxme.call(null,k_29127);
content_29109.add(qxk_29128);

var G__29129 = cljs.core.next.call(null,seq__29103_29121__$1);
var G__29130 = null;
var G__29131 = (0);
var G__29132 = (0);
seq__29103_29110 = G__29129;
chunk__29104_29111 = G__29130;
count__29105_29112 = G__29131;
i__29106_29113 = G__29132;
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

var seq__29133 = cljs.core.seq.call(null,newk);
var chunk__29134 = null;
var count__29135 = (0);
var i__29136 = (0);
while(true){
if((i__29136 < count__29135)){
var k = cljs.core._nth.call(null,chunk__29134,i__29136);
var qxk_29137 = tiltontec.qxia.base.qxme.call(null,k);
cljs.core.println.call(null,content.add(qxk_29137));

var G__29138 = seq__29133;
var G__29139 = chunk__29134;
var G__29140 = count__29135;
var G__29141 = (i__29136 + (1));
seq__29133 = G__29138;
chunk__29134 = G__29139;
count__29135 = G__29140;
i__29136 = G__29141;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29133);
if(temp__4425__auto__){
var seq__29133__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29133__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__29133__$1);
var G__29142 = cljs.core.chunk_rest.call(null,seq__29133__$1);
var G__29143 = c__7021__auto__;
var G__29144 = cljs.core.count.call(null,c__7021__auto__);
var G__29145 = (0);
seq__29133 = G__29142;
chunk__29134 = G__29143;
count__29135 = G__29144;
i__29136 = G__29145;
continue;
} else {
var k = cljs.core.first.call(null,seq__29133__$1);
var qxk_29146 = tiltontec.qxia.base.qxme.call(null,k);
cljs.core.println.call(null,content.add(qxk_29146));

var G__29147 = cljs.core.next.call(null,seq__29133__$1);
var G__29148 = null;
var G__29149 = (0);
var G__29150 = (0);
seq__29133 = G__29147;
chunk__29134 = G__29148;
count__29135 = G__29149;
i__29136 = G__29150;
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

cljs.core.println.call(null,new cljs.core.Keyword(null,"form!!!","form!!!",131236375),form);

var vmgr = form.getValidationManager();
cljs.core.println.call(null,new cljs.core.Keyword(null,"vmgr!!","vmgr!!",-753056786),vmgr);

return vmgr.add(tiltontec.qxia.base.qxme.call(null,me),new_fn);
} else {
return null;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.TextField","tiltontec.qxia.types/m.TextField",1587442644),(function (me){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
return tiltontec.qxia.base.qxme.call(null,me).setValue(tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"value","value",305978217)));
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)], null),(function (_,me,newk,oldk,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
return tiltontec.qxia.widget.kids_refresh.call(null,me,newk,oldk);
}));
}));
tiltontec.qxia.widget.kids_refresh = (function tiltontec$qxia$widget$kids_refresh(me,newk,oldk){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
} else {
var lostks_29167 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_29167)){
} else {
var seq__29159_29168 = cljs.core.seq.call(null,lostks_29167);
var chunk__29160_29169 = null;
var count__29161_29170 = (0);
var i__29162_29171 = (0);
while(true){
if((i__29162_29171 < count__29161_29170)){
var kid_29172 = cljs.core._nth.call(null,chunk__29160_29169,i__29162_29171);
var qxk_29173 = tiltontec.qxia.base.qxme.call(null,kid_29172);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_29172,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_29173);
}

qxk_29173.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_29172);

var G__29174 = seq__29159_29168;
var G__29175 = chunk__29160_29169;
var G__29176 = count__29161_29170;
var G__29177 = (i__29162_29171 + (1));
seq__29159_29168 = G__29174;
chunk__29160_29169 = G__29175;
count__29161_29170 = G__29176;
i__29162_29171 = G__29177;
continue;
} else {
var temp__4425__auto___29178 = cljs.core.seq.call(null,seq__29159_29168);
if(temp__4425__auto___29178){
var seq__29159_29179__$1 = temp__4425__auto___29178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29159_29179__$1)){
var c__7021__auto___29180 = cljs.core.chunk_first.call(null,seq__29159_29179__$1);
var G__29181 = cljs.core.chunk_rest.call(null,seq__29159_29179__$1);
var G__29182 = c__7021__auto___29180;
var G__29183 = cljs.core.count.call(null,c__7021__auto___29180);
var G__29184 = (0);
seq__29159_29168 = G__29181;
chunk__29160_29169 = G__29182;
count__29161_29170 = G__29183;
i__29162_29171 = G__29184;
continue;
} else {
var kid_29185 = cljs.core.first.call(null,seq__29159_29179__$1);
var qxk_29186 = tiltontec.qxia.base.qxme.call(null,kid_29185);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_29185,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_29186);
}

qxk_29186.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_29185);

var G__29187 = cljs.core.next.call(null,seq__29159_29179__$1);
var G__29188 = null;
var G__29189 = (0);
var G__29190 = (0);
seq__29159_29168 = G__29187;
chunk__29160_29169 = G__29188;
count__29161_29170 = G__29189;
i__29162_29171 = G__29190;
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
var seq__29163 = cljs.core.seq.call(null,new_ks);
var chunk__29164 = null;
var count__29165 = (0);
var i__29166 = (0);
while(true){
if((i__29166 < count__29165)){
var k = cljs.core._nth.call(null,chunk__29164,i__29166);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__29191 = seq__29163;
var G__29192 = chunk__29164;
var G__29193 = count__29165;
var G__29194 = (i__29166 + (1));
seq__29163 = G__29191;
chunk__29164 = G__29192;
count__29165 = G__29193;
i__29166 = G__29194;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29163);
if(temp__4425__auto__){
var seq__29163__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29163__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__29163__$1);
var G__29195 = cljs.core.chunk_rest.call(null,seq__29163__$1);
var G__29196 = c__7021__auto__;
var G__29197 = cljs.core.count.call(null,c__7021__auto__);
var G__29198 = (0);
seq__29163 = G__29195;
chunk__29164 = G__29196;
count__29165 = G__29197;
i__29166 = G__29198;
continue;
} else {
var k = cljs.core.first.call(null,seq__29163__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__29199 = cljs.core.next.call(null,seq__29163__$1);
var G__29200 = null;
var G__29201 = (0);
var G__29202 = (0);
seq__29163 = G__29199;
chunk__29164 = G__29200;
count__29165 = G__29201;
i__29166 = G__29202;
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
var seq__29203_29211 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__29204_29212 = null;
var count__29205_29213 = (0);
var i__29206_29214 = (0);
while(true){
if((i__29206_29214 < count__29205_29213)){
var n_29215 = cljs.core._nth.call(null,chunk__29204_29212,i__29206_29214);
p.removeSlot(n_29215);

var G__29216 = seq__29203_29211;
var G__29217 = chunk__29204_29212;
var G__29218 = count__29205_29213;
var G__29219 = (i__29206_29214 + (1));
seq__29203_29211 = G__29216;
chunk__29204_29212 = G__29217;
count__29205_29213 = G__29218;
i__29206_29214 = G__29219;
continue;
} else {
var temp__4425__auto___29220 = cljs.core.seq.call(null,seq__29203_29211);
if(temp__4425__auto___29220){
var seq__29203_29221__$1 = temp__4425__auto___29220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29203_29221__$1)){
var c__7021__auto___29222 = cljs.core.chunk_first.call(null,seq__29203_29221__$1);
var G__29223 = cljs.core.chunk_rest.call(null,seq__29203_29221__$1);
var G__29224 = c__7021__auto___29222;
var G__29225 = cljs.core.count.call(null,c__7021__auto___29222);
var G__29226 = (0);
seq__29203_29211 = G__29223;
chunk__29204_29212 = G__29224;
count__29205_29213 = G__29225;
i__29206_29214 = G__29226;
continue;
} else {
var n_29227 = cljs.core.first.call(null,seq__29203_29221__$1);
p.removeSlot(n_29227);

var G__29228 = cljs.core.next.call(null,seq__29203_29221__$1);
var G__29229 = null;
var G__29230 = (0);
var G__29231 = (0);
seq__29203_29211 = G__29228;
chunk__29204_29212 = G__29229;
count__29205_29213 = G__29230;
i__29206_29214 = G__29231;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__29207 = cljs.core.seq.call(null,new$);
var chunk__29208 = null;
var count__29209 = (0);
var i__29210 = (0);
while(true){
if((i__29210 < count__29209)){
var sd = cljs.core._nth.call(null,chunk__29208,i__29210);
var da_29232 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_29232);

var G__29233 = seq__29207;
var G__29234 = chunk__29208;
var G__29235 = count__29209;
var G__29236 = (i__29210 + (1));
seq__29207 = G__29233;
chunk__29208 = G__29234;
count__29209 = G__29235;
i__29210 = G__29236;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29207);
if(temp__4425__auto__){
var seq__29207__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29207__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__29207__$1);
var G__29237 = cljs.core.chunk_rest.call(null,seq__29207__$1);
var G__29238 = c__7021__auto__;
var G__29239 = cljs.core.count.call(null,c__7021__auto__);
var G__29240 = (0);
seq__29207 = G__29237;
chunk__29208 = G__29238;
count__29209 = G__29239;
i__29210 = G__29240;
continue;
} else {
var sd = cljs.core.first.call(null,seq__29207__$1);
var da_29241 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_29241);

var G__29242 = cljs.core.next.call(null,seq__29207__$1);
var G__29243 = null;
var G__29244 = (0);
var G__29245 = (0);
seq__29207 = G__29242;
chunk__29208 = G__29243;
count__29209 = G__29244;
i__29210 = G__29245;
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
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),new cljs.core.Keyword("tiltontec.qxia.types","m.Input","tiltontec.qxia.types/m.Input",-509810846)], null),(function (_,me,new_value,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
return tiltontec.qxia.base.qxme.call(null,me).setEnabled(new_value);
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("tiltontec.qxia.types","m.Label","tiltontec.qxia.types/m.Label",908319540)], null),(function (_,me,new$,old,___$1){
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
return tiltontec.qxia.base.qxme.call(null,me).setValue(new$);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("tiltontec.qxia.types","m.Slider","tiltontec.qxia.types/m.Slider",1816729103)], null),(function (_,me,newval,oldval,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core._EQ_.call(null,oldval,tiltontec.cell.base.unbound)){
return tiltontec.qxia.base.qxme.call(null,me).setValue(newval);
} else {
return null;
}
}));
}));
