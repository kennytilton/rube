// Compiled by ClojureScript 1.7.48 {}
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("obs mob kids"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"app","app",1079569820,null)))].join('')));
}

var routing = app.getRouting();
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__23846_23854 = cljs.core.seq.call(null,old);
var chunk__23847_23855 = null;
var count__23848_23856 = (0);
var i__23849_23857 = (0);
while(true){
if((i__23849_23857 < count__23848_23856)){
var page_23858 = cljs.core._nth.call(null,chunk__23847_23855,i__23849_23857);
var temp__4425__auto___23859 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_23858));
if(cljs.core.truth_(temp__4425__auto___23859)){
var ept_23860 = temp__4425__auto___23859;
routing.remove(ept_23860);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_23858));

var G__23861 = seq__23846_23854;
var G__23862 = chunk__23847_23855;
var G__23863 = count__23848_23856;
var G__23864 = (i__23849_23857 + (1));
seq__23846_23854 = G__23861;
chunk__23847_23855 = G__23862;
count__23848_23856 = G__23863;
i__23849_23857 = G__23864;
continue;
} else {
var temp__4425__auto___23865 = cljs.core.seq.call(null,seq__23846_23854);
if(temp__4425__auto___23865){
var seq__23846_23866__$1 = temp__4425__auto___23865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23846_23866__$1)){
var c__5338__auto___23867 = cljs.core.chunk_first.call(null,seq__23846_23866__$1);
var G__23868 = cljs.core.chunk_rest.call(null,seq__23846_23866__$1);
var G__23869 = c__5338__auto___23867;
var G__23870 = cljs.core.count.call(null,c__5338__auto___23867);
var G__23871 = (0);
seq__23846_23854 = G__23868;
chunk__23847_23855 = G__23869;
count__23848_23856 = G__23870;
i__23849_23857 = G__23871;
continue;
} else {
var page_23872 = cljs.core.first.call(null,seq__23846_23866__$1);
var temp__4425__auto___23873__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_23872));
if(cljs.core.truth_(temp__4425__auto___23873__$1)){
var ept_23874 = temp__4425__auto___23873__$1;
routing.remove(ept_23874);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_23872));

var G__23875 = cljs.core.next.call(null,seq__23846_23866__$1);
var G__23876 = null;
var G__23877 = (0);
var G__23878 = (0);
seq__23846_23854 = G__23875;
chunk__23847_23855 = G__23876;
count__23848_23856 = G__23877;
i__23849_23857 = G__23878;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__23850 = cljs.core.seq.call(null,new$);
var chunk__23851 = null;
var count__23852 = (0);
var i__23853 = (0);
while(true){
if((i__23853 < count__23852)){
var page = cljs.core._nth.call(null,chunk__23851,i__23853);
var qx_page_23879 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_23879);

var temp__4425__auto___23880 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___23880)){
var ept_23881 = temp__4425__auto___23880;
routing.onGet(ept_23881,shower,qx_page_23879);
} else {
}

var G__23882 = seq__23850;
var G__23883 = chunk__23851;
var G__23884 = count__23852;
var G__23885 = (i__23853 + (1));
seq__23850 = G__23882;
chunk__23851 = G__23883;
count__23852 = G__23884;
i__23853 = G__23885;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23850);
if(temp__4425__auto__){
var seq__23850__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23850__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__23850__$1);
var G__23886 = cljs.core.chunk_rest.call(null,seq__23850__$1);
var G__23887 = c__5338__auto__;
var G__23888 = cljs.core.count.call(null,c__5338__auto__);
var G__23889 = (0);
seq__23850 = G__23886;
chunk__23851 = G__23887;
count__23852 = G__23888;
i__23853 = G__23889;
continue;
} else {
var page = cljs.core.first.call(null,seq__23850__$1);
var qx_page_23890 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_23890);

var temp__4425__auto___23891__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___23891__$1)){
var ept_23892 = temp__4425__auto___23891__$1;
routing.onGet(ept_23892,shower,qx_page_23890);
} else {
}

var G__23893 = cljs.core.next.call(null,seq__23850__$1);
var G__23894 = null;
var G__23895 = (0);
var G__23896 = (0);
seq__23850 = G__23893;
chunk__23851 = G__23894;
count__23852 = G__23895;
i__23853 = G__23896;
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
var seq__23897_23905 = cljs.core.seq.call(null,old);
var chunk__23898_23906 = null;
var count__23899_23907 = (0);
var i__23900_23908 = (0);
while(true){
if((i__23900_23908 < count__23899_23907)){
var k_23909 = cljs.core._nth.call(null,chunk__23898_23906,i__23900_23908);
var qxk_23910 = tiltontec.qxia.base.qxme.call(null,k_23909);
var label_23911 = tiltontec.model.core.md_get.call(null,k_23909,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_23910);

var G__23912 = seq__23897_23905;
var G__23913 = chunk__23898_23906;
var G__23914 = count__23899_23907;
var G__23915 = (i__23900_23908 + (1));
seq__23897_23905 = G__23912;
chunk__23898_23906 = G__23913;
count__23899_23907 = G__23914;
i__23900_23908 = G__23915;
continue;
} else {
var temp__4425__auto___23916 = cljs.core.seq.call(null,seq__23897_23905);
if(temp__4425__auto___23916){
var seq__23897_23917__$1 = temp__4425__auto___23916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23897_23917__$1)){
var c__5338__auto___23918 = cljs.core.chunk_first.call(null,seq__23897_23917__$1);
var G__23919 = cljs.core.chunk_rest.call(null,seq__23897_23917__$1);
var G__23920 = c__5338__auto___23918;
var G__23921 = cljs.core.count.call(null,c__5338__auto___23918);
var G__23922 = (0);
seq__23897_23905 = G__23919;
chunk__23898_23906 = G__23920;
count__23899_23907 = G__23921;
i__23900_23908 = G__23922;
continue;
} else {
var k_23923 = cljs.core.first.call(null,seq__23897_23917__$1);
var qxk_23924 = tiltontec.qxia.base.qxme.call(null,k_23923);
var label_23925 = tiltontec.model.core.md_get.call(null,k_23923,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_23924);

var G__23926 = cljs.core.next.call(null,seq__23897_23917__$1);
var G__23927 = null;
var G__23928 = (0);
var G__23929 = (0);
seq__23897_23905 = G__23926;
chunk__23898_23906 = G__23927;
count__23899_23907 = G__23928;
i__23900_23908 = G__23929;
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
var seq__23901 = cljs.core.seq.call(null,kids);
var chunk__23902 = null;
var count__23903 = (0);
var i__23904 = (0);
while(true){
if((i__23904 < count__23903)){
var k = cljs.core._nth.call(null,chunk__23902,i__23904);
var qxk_23930 = tiltontec.qxia.base.qxme.call(null,k);
var label_23931 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_23930,label_23931);

var G__23932 = seq__23901;
var G__23933 = chunk__23902;
var G__23934 = count__23903;
var G__23935 = (i__23904 + (1));
seq__23901 = G__23932;
chunk__23902 = G__23933;
count__23903 = G__23934;
i__23904 = G__23935;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__23901);
if(temp__4425__auto____$1){
var seq__23901__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23901__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__23901__$1);
var G__23936 = cljs.core.chunk_rest.call(null,seq__23901__$1);
var G__23937 = c__5338__auto__;
var G__23938 = cljs.core.count.call(null,c__5338__auto__);
var G__23939 = (0);
seq__23901 = G__23936;
chunk__23902 = G__23937;
count__23903 = G__23938;
i__23904 = G__23939;
continue;
} else {
var k = cljs.core.first.call(null,seq__23901__$1);
var qxk_23940 = tiltontec.qxia.base.qxme.call(null,k);
var label_23941 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_23940,label_23941);

var G__23942 = cljs.core.next.call(null,seq__23901__$1);
var G__23943 = null;
var G__23944 = (0);
var G__23945 = (0);
seq__23901 = G__23942;
chunk__23902 = G__23943;
count__23903 = G__23944;
i__23904 = G__23945;
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kids","kids",-1497764998,null)))))].join('')));
}

var form = cljs.core.first.call(null,kids);
var qx_form = tiltontec.qxia.base.qxme.call(null,form);
if(cljs.core.truth_(qx_form)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"qx-form","qx-form",231243115,null)))].join('')));
}

return cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),(new qx.ui.mobile.form.renderer.Single(qx_form)));
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),(function (page){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
return qx_page.addListener("initialize",((function (qx_page){
return (function (){
var temp__4425__auto___23950 = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___23950)){
var kids_23951 = temp__4425__auto___23950;
var content_23952 = qx_page.getContent();
var seq__23946_23953 = cljs.core.seq.call(null,kids_23951);
var chunk__23947_23954 = null;
var count__23948_23955 = (0);
var i__23949_23956 = (0);
while(true){
if((i__23949_23956 < count__23948_23955)){
var k_23957 = cljs.core._nth.call(null,chunk__23947_23954,i__23949_23956);
var qxk_23958 = tiltontec.qxia.base.qxme.call(null,k_23957);
content_23952.add(qxk_23958);

var G__23959 = seq__23946_23953;
var G__23960 = chunk__23947_23954;
var G__23961 = count__23948_23955;
var G__23962 = (i__23949_23956 + (1));
seq__23946_23953 = G__23959;
chunk__23947_23954 = G__23960;
count__23948_23955 = G__23961;
i__23949_23956 = G__23962;
continue;
} else {
var temp__4425__auto___23963__$1 = cljs.core.seq.call(null,seq__23946_23953);
if(temp__4425__auto___23963__$1){
var seq__23946_23964__$1 = temp__4425__auto___23963__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23946_23964__$1)){
var c__5338__auto___23965 = cljs.core.chunk_first.call(null,seq__23946_23964__$1);
var G__23966 = cljs.core.chunk_rest.call(null,seq__23946_23964__$1);
var G__23967 = c__5338__auto___23965;
var G__23968 = cljs.core.count.call(null,c__5338__auto___23965);
var G__23969 = (0);
seq__23946_23953 = G__23966;
chunk__23947_23954 = G__23967;
count__23948_23955 = G__23968;
i__23949_23956 = G__23969;
continue;
} else {
var k_23970 = cljs.core.first.call(null,seq__23946_23964__$1);
var qxk_23971 = tiltontec.qxia.base.qxme.call(null,k_23970);
content_23952.add(qxk_23971);

var G__23972 = cljs.core.next.call(null,seq__23946_23964__$1);
var G__23973 = null;
var G__23974 = (0);
var G__23975 = (0);
seq__23946_23953 = G__23972;
chunk__23947_23954 = G__23973;
count__23948_23955 = G__23974;
i__23949_23956 = G__23975;
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

var seq__23976 = cljs.core.seq.call(null,newk);
var chunk__23977 = null;
var count__23978 = (0);
var i__23979 = (0);
while(true){
if((i__23979 < count__23978)){
var k = cljs.core._nth.call(null,chunk__23977,i__23979);
var qxk_23980 = tiltontec.qxia.base.qxme.call(null,k);
cljs.core.println.call(null,content.add(qxk_23980));

var G__23981 = seq__23976;
var G__23982 = chunk__23977;
var G__23983 = count__23978;
var G__23984 = (i__23979 + (1));
seq__23976 = G__23981;
chunk__23977 = G__23982;
count__23978 = G__23983;
i__23979 = G__23984;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23976);
if(temp__4425__auto__){
var seq__23976__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23976__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__23976__$1);
var G__23985 = cljs.core.chunk_rest.call(null,seq__23976__$1);
var G__23986 = c__5338__auto__;
var G__23987 = cljs.core.count.call(null,c__5338__auto__);
var G__23988 = (0);
seq__23976 = G__23985;
chunk__23977 = G__23986;
count__23978 = G__23987;
i__23979 = G__23988;
continue;
} else {
var k = cljs.core.first.call(null,seq__23976__$1);
var qxk_23989 = tiltontec.qxia.base.qxme.call(null,k);
cljs.core.println.call(null,content.add(qxk_23989));

var G__23990 = cljs.core.next.call(null,seq__23976__$1);
var G__23991 = null;
var G__23992 = (0);
var G__23993 = (0);
seq__23976 = G__23990;
chunk__23977 = G__23991;
count__23978 = G__23992;
i__23979 = G__23993;
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
var lostks_24010 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_24010)){
} else {
var seq__24002_24011 = cljs.core.seq.call(null,lostks_24010);
var chunk__24003_24012 = null;
var count__24004_24013 = (0);
var i__24005_24014 = (0);
while(true){
if((i__24005_24014 < count__24004_24013)){
var kid_24015 = cljs.core._nth.call(null,chunk__24003_24012,i__24005_24014);
var qxk_24016 = tiltontec.qxia.base.qxme.call(null,kid_24015);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_24015,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_24016);
}

qxk_24016.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_24015);

var G__24017 = seq__24002_24011;
var G__24018 = chunk__24003_24012;
var G__24019 = count__24004_24013;
var G__24020 = (i__24005_24014 + (1));
seq__24002_24011 = G__24017;
chunk__24003_24012 = G__24018;
count__24004_24013 = G__24019;
i__24005_24014 = G__24020;
continue;
} else {
var temp__4425__auto___24021 = cljs.core.seq.call(null,seq__24002_24011);
if(temp__4425__auto___24021){
var seq__24002_24022__$1 = temp__4425__auto___24021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24002_24022__$1)){
var c__5338__auto___24023 = cljs.core.chunk_first.call(null,seq__24002_24022__$1);
var G__24024 = cljs.core.chunk_rest.call(null,seq__24002_24022__$1);
var G__24025 = c__5338__auto___24023;
var G__24026 = cljs.core.count.call(null,c__5338__auto___24023);
var G__24027 = (0);
seq__24002_24011 = G__24024;
chunk__24003_24012 = G__24025;
count__24004_24013 = G__24026;
i__24005_24014 = G__24027;
continue;
} else {
var kid_24028 = cljs.core.first.call(null,seq__24002_24022__$1);
var qxk_24029 = tiltontec.qxia.base.qxme.call(null,kid_24028);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_24028,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_24029);
}

qxk_24029.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_24028);

var G__24030 = cljs.core.next.call(null,seq__24002_24022__$1);
var G__24031 = null;
var G__24032 = (0);
var G__24033 = (0);
seq__24002_24011 = G__24030;
chunk__24003_24012 = G__24031;
count__24004_24013 = G__24032;
i__24005_24014 = G__24033;
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
var seq__24006 = cljs.core.seq.call(null,new_ks);
var chunk__24007 = null;
var count__24008 = (0);
var i__24009 = (0);
while(true){
if((i__24009 < count__24008)){
var k = cljs.core._nth.call(null,chunk__24007,i__24009);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__24034 = seq__24006;
var G__24035 = chunk__24007;
var G__24036 = count__24008;
var G__24037 = (i__24009 + (1));
seq__24006 = G__24034;
chunk__24007 = G__24035;
count__24008 = G__24036;
i__24009 = G__24037;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24006);
if(temp__4425__auto__){
var seq__24006__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24006__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__24006__$1);
var G__24038 = cljs.core.chunk_rest.call(null,seq__24006__$1);
var G__24039 = c__5338__auto__;
var G__24040 = cljs.core.count.call(null,c__5338__auto__);
var G__24041 = (0);
seq__24006 = G__24038;
chunk__24007 = G__24039;
count__24008 = G__24040;
i__24009 = G__24041;
continue;
} else {
var k = cljs.core.first.call(null,seq__24006__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__24042 = cljs.core.next.call(null,seq__24006__$1);
var G__24043 = null;
var G__24044 = (0);
var G__24045 = (0);
seq__24006 = G__24042;
chunk__24007 = G__24043;
count__24008 = G__24044;
i__24009 = G__24045;
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
var seq__24046_24054 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__24047_24055 = null;
var count__24048_24056 = (0);
var i__24049_24057 = (0);
while(true){
if((i__24049_24057 < count__24048_24056)){
var n_24058 = cljs.core._nth.call(null,chunk__24047_24055,i__24049_24057);
p.removeSlot(n_24058);

var G__24059 = seq__24046_24054;
var G__24060 = chunk__24047_24055;
var G__24061 = count__24048_24056;
var G__24062 = (i__24049_24057 + (1));
seq__24046_24054 = G__24059;
chunk__24047_24055 = G__24060;
count__24048_24056 = G__24061;
i__24049_24057 = G__24062;
continue;
} else {
var temp__4425__auto___24063 = cljs.core.seq.call(null,seq__24046_24054);
if(temp__4425__auto___24063){
var seq__24046_24064__$1 = temp__4425__auto___24063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24046_24064__$1)){
var c__5338__auto___24065 = cljs.core.chunk_first.call(null,seq__24046_24064__$1);
var G__24066 = cljs.core.chunk_rest.call(null,seq__24046_24064__$1);
var G__24067 = c__5338__auto___24065;
var G__24068 = cljs.core.count.call(null,c__5338__auto___24065);
var G__24069 = (0);
seq__24046_24054 = G__24066;
chunk__24047_24055 = G__24067;
count__24048_24056 = G__24068;
i__24049_24057 = G__24069;
continue;
} else {
var n_24070 = cljs.core.first.call(null,seq__24046_24064__$1);
p.removeSlot(n_24070);

var G__24071 = cljs.core.next.call(null,seq__24046_24064__$1);
var G__24072 = null;
var G__24073 = (0);
var G__24074 = (0);
seq__24046_24054 = G__24071;
chunk__24047_24055 = G__24072;
count__24048_24056 = G__24073;
i__24049_24057 = G__24074;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__24050 = cljs.core.seq.call(null,new$);
var chunk__24051 = null;
var count__24052 = (0);
var i__24053 = (0);
while(true){
if((i__24053 < count__24052)){
var sd = cljs.core._nth.call(null,chunk__24051,i__24053);
var da_24075 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_24075);

var G__24076 = seq__24050;
var G__24077 = chunk__24051;
var G__24078 = count__24052;
var G__24079 = (i__24053 + (1));
seq__24050 = G__24076;
chunk__24051 = G__24077;
count__24052 = G__24078;
i__24053 = G__24079;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24050);
if(temp__4425__auto__){
var seq__24050__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24050__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__24050__$1);
var G__24080 = cljs.core.chunk_rest.call(null,seq__24050__$1);
var G__24081 = c__5338__auto__;
var G__24082 = cljs.core.count.call(null,c__5338__auto__);
var G__24083 = (0);
seq__24050 = G__24080;
chunk__24051 = G__24081;
count__24052 = G__24082;
i__24053 = G__24083;
continue;
} else {
var sd = cljs.core.first.call(null,seq__24050__$1);
var da_24084 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_24084);

var G__24085 = cljs.core.next.call(null,seq__24050__$1);
var G__24086 = null;
var G__24087 = (0);
var G__24088 = (0);
seq__24050 = G__24085;
chunk__24051 = G__24086;
count__24052 = G__24087;
i__24053 = G__24088;
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
