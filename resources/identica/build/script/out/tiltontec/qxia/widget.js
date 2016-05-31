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
var seq__23898 = cljs.core.seq.call(null,kids);
var chunk__23899 = null;
var count__23900 = (0);
var i__23901 = (0);
while(true){
if((i__23901 < count__23900)){
var kid = cljs.core._nth.call(null,chunk__23899,i__23901);
var rmk_23902 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_23902);

var G__23903 = seq__23898;
var G__23904 = chunk__23899;
var G__23905 = count__23900;
var G__23906 = (i__23901 + (1));
seq__23898 = G__23903;
chunk__23899 = G__23904;
count__23900 = G__23905;
i__23901 = G__23906;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__23898);
if(temp__4425__auto____$1){
var seq__23898__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23898__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__23898__$1);
var G__23907 = cljs.core.chunk_rest.call(null,seq__23898__$1);
var G__23908 = c__5338__auto__;
var G__23909 = cljs.core.count.call(null,c__5338__auto__);
var G__23910 = (0);
seq__23898 = G__23907;
chunk__23899 = G__23908;
count__23900 = G__23909;
i__23901 = G__23910;
continue;
} else {
var kid = cljs.core.first.call(null,seq__23898__$1);
var rmk_23911 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_23911);

var G__23912 = cljs.core.next.call(null,seq__23898__$1);
var G__23913 = null;
var G__23914 = (0);
var G__23915 = (0);
seq__23898 = G__23912;
chunk__23899 = G__23913;
count__23900 = G__23914;
i__23901 = G__23915;
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
var seq__23916 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__23917 = null;
var count__23918 = (0);
var i__23919 = (0);
while(true){
if((i__23919 < count__23918)){
var page = cljs.core._nth.call(null,chunk__23917,i__23919);
var qx_page_23920 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_23920]);

var temp__4425__auto___23921 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___23921)){
var ept_23922 = temp__4425__auto___23921;
routing.onGet(ept_23922,shower,qx_page_23920);
} else {
}

var G__23923 = seq__23916;
var G__23924 = chunk__23917;
var G__23925 = count__23918;
var G__23926 = (i__23919 + (1));
seq__23916 = G__23923;
chunk__23917 = G__23924;
count__23918 = G__23925;
i__23919 = G__23926;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23916);
if(temp__4425__auto__){
var seq__23916__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23916__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__23916__$1);
var G__23927 = cljs.core.chunk_rest.call(null,seq__23916__$1);
var G__23928 = c__5338__auto__;
var G__23929 = cljs.core.count.call(null,c__5338__auto__);
var G__23930 = (0);
seq__23916 = G__23927;
chunk__23917 = G__23928;
count__23918 = G__23929;
i__23919 = G__23930;
continue;
} else {
var page = cljs.core.first.call(null,seq__23916__$1);
var qx_page_23931 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_23931]);

var temp__4425__auto___23932__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___23932__$1)){
var ept_23933 = temp__4425__auto___23932__$1;
routing.onGet(ept_23933,shower,qx_page_23931);
} else {
}

var G__23934 = cljs.core.next.call(null,seq__23916__$1);
var G__23935 = null;
var G__23936 = (0);
var G__23937 = (0);
seq__23916 = G__23934;
chunk__23917 = G__23935;
count__23918 = G__23936;
i__23919 = G__23937;
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
var temp__4425__auto___23938 = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___23938)){
var lyo_23939 = temp__4425__auto___23938;
cljs.core.println.call(null,new cljs.core.Keyword(null,"init-setting-layo!!!!!","init-setting-layo!!!!!",-1831845380),lyo_23939,tiltontec.cell.base.ia_type.call(null,me));

tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo_23939);
} else {
}

return tiltontec.qxia.widget.qx_initialize_kids.call(null,me);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),(function (me){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__23940 = cljs.core.seq.call(null,kids);
var chunk__23941 = null;
var count__23942 = (0);
var i__23943 = (0);
while(true){
if((i__23943 < count__23942)){
var k = cljs.core._nth.call(null,chunk__23941,i__23943);
var qxk_23944 = tiltontec.qxia.base.qxme.call(null,k);
var label_23945 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_23944,label_23945);

var G__23946 = seq__23940;
var G__23947 = chunk__23941;
var G__23948 = count__23942;
var G__23949 = (i__23943 + (1));
seq__23940 = G__23946;
chunk__23941 = G__23947;
count__23942 = G__23948;
i__23943 = G__23949;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__23940);
if(temp__4425__auto____$1){
var seq__23940__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23940__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__23940__$1);
var G__23950 = cljs.core.chunk_rest.call(null,seq__23940__$1);
var G__23951 = c__5338__auto__;
var G__23952 = cljs.core.count.call(null,c__5338__auto__);
var G__23953 = (0);
seq__23940 = G__23950;
chunk__23941 = G__23951;
count__23942 = G__23952;
i__23943 = G__23953;
continue;
} else {
var k = cljs.core.first.call(null,seq__23940__$1);
var qxk_23954 = tiltontec.qxia.base.qxme.call(null,k);
var label_23955 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_23954,label_23955);

var G__23956 = cljs.core.next.call(null,seq__23940__$1);
var G__23957 = null;
var G__23958 = (0);
var G__23959 = (0);
seq__23940 = G__23956;
chunk__23941 = G__23957;
count__23942 = G__23958;
i__23943 = G__23959;
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
var seq__23960 = cljs.core.seq.call(null,kids);
var chunk__23961 = null;
var count__23962 = (0);
var i__23963 = (0);
while(true){
if((i__23963 < count__23962)){
var k = cljs.core._nth.call(null,chunk__23961,i__23963);
var qxk_23964 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_23964);

var G__23965 = seq__23960;
var G__23966 = chunk__23961;
var G__23967 = count__23962;
var G__23968 = (i__23963 + (1));
seq__23960 = G__23965;
chunk__23961 = G__23966;
count__23962 = G__23967;
i__23963 = G__23968;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__23960);
if(temp__4425__auto____$1){
var seq__23960__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23960__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__23960__$1);
var G__23969 = cljs.core.chunk_rest.call(null,seq__23960__$1);
var G__23970 = c__5338__auto__;
var G__23971 = cljs.core.count.call(null,c__5338__auto__);
var G__23972 = (0);
seq__23960 = G__23969;
chunk__23961 = G__23970;
count__23962 = G__23971;
i__23963 = G__23972;
continue;
} else {
var k = cljs.core.first.call(null,seq__23960__$1);
var qxk_23973 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_23973);

var G__23974 = cljs.core.next.call(null,seq__23960__$1);
var G__23975 = null;
var G__23976 = (0);
var G__23977 = (0);
seq__23960 = G__23974;
chunk__23961 = G__23975;
count__23962 = G__23976;
i__23963 = G__23977;
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
var lostks_23986 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_23986)){
} else {
var seq__23978_23987 = cljs.core.seq.call(null,lostks_23986);
var chunk__23979_23988 = null;
var count__23980_23989 = (0);
var i__23981_23990 = (0);
while(true){
if((i__23981_23990 < count__23980_23989)){
var kid_23991 = cljs.core._nth.call(null,chunk__23979_23988,i__23981_23990);
var qxk_23992 = tiltontec.qxia.base.qxme.call(null,kid_23991);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_23991,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_23992);
}

qxk_23992.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_23991);

var G__23993 = seq__23978_23987;
var G__23994 = chunk__23979_23988;
var G__23995 = count__23980_23989;
var G__23996 = (i__23981_23990 + (1));
seq__23978_23987 = G__23993;
chunk__23979_23988 = G__23994;
count__23980_23989 = G__23995;
i__23981_23990 = G__23996;
continue;
} else {
var temp__4425__auto___23997 = cljs.core.seq.call(null,seq__23978_23987);
if(temp__4425__auto___23997){
var seq__23978_23998__$1 = temp__4425__auto___23997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23978_23998__$1)){
var c__5338__auto___23999 = cljs.core.chunk_first.call(null,seq__23978_23998__$1);
var G__24000 = cljs.core.chunk_rest.call(null,seq__23978_23998__$1);
var G__24001 = c__5338__auto___23999;
var G__24002 = cljs.core.count.call(null,c__5338__auto___23999);
var G__24003 = (0);
seq__23978_23987 = G__24000;
chunk__23979_23988 = G__24001;
count__23980_23989 = G__24002;
i__23981_23990 = G__24003;
continue;
} else {
var kid_24004 = cljs.core.first.call(null,seq__23978_23998__$1);
var qxk_24005 = tiltontec.qxia.base.qxme.call(null,kid_24004);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_24004,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_24005);
}

qxk_24005.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_24004);

var G__24006 = cljs.core.next.call(null,seq__23978_23998__$1);
var G__24007 = null;
var G__24008 = (0);
var G__24009 = (0);
seq__23978_23987 = G__24006;
chunk__23979_23988 = G__24007;
count__23980_23989 = G__24008;
i__23981_23990 = G__24009;
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
var seq__23982 = cljs.core.seq.call(null,new_ks);
var chunk__23983 = null;
var count__23984 = (0);
var i__23985 = (0);
while(true){
if((i__23985 < count__23984)){
var k = cljs.core._nth.call(null,chunk__23983,i__23985);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_24010 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_24010);
}

var G__24011 = seq__23982;
var G__24012 = chunk__23983;
var G__24013 = count__23984;
var G__24014 = (i__23985 + (1));
seq__23982 = G__24011;
chunk__23983 = G__24012;
count__23984 = G__24013;
i__23985 = G__24014;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23982);
if(temp__4425__auto__){
var seq__23982__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23982__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__23982__$1);
var G__24015 = cljs.core.chunk_rest.call(null,seq__23982__$1);
var G__24016 = c__5338__auto__;
var G__24017 = cljs.core.count.call(null,c__5338__auto__);
var G__24018 = (0);
seq__23982 = G__24015;
chunk__23983 = G__24016;
count__23984 = G__24017;
i__23985 = G__24018;
continue;
} else {
var k = cljs.core.first.call(null,seq__23982__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_24019 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_24019);
}

var G__24020 = cljs.core.next.call(null,seq__23982__$1);
var G__24021 = null;
var G__24022 = (0);
var G__24023 = (0);
seq__23982 = G__24020;
chunk__23983 = G__24021;
count__23984 = G__24022;
i__23985 = G__24023;
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
