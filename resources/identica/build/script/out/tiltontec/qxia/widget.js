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
var seq__14776 = cljs.core.seq.call(null,kids);
var chunk__14777 = null;
var count__14778 = (0);
var i__14779 = (0);
while(true){
if((i__14779 < count__14778)){
var kid = cljs.core._nth.call(null,chunk__14777,i__14779);
var rmk_14780 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_14780);

var G__14781 = seq__14776;
var G__14782 = chunk__14777;
var G__14783 = count__14778;
var G__14784 = (i__14779 + (1));
seq__14776 = G__14781;
chunk__14777 = G__14782;
count__14778 = G__14783;
i__14779 = G__14784;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__14776);
if(temp__4425__auto____$1){
var seq__14776__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14776__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__14776__$1);
var G__14785 = cljs.core.chunk_rest.call(null,seq__14776__$1);
var G__14786 = c__5338__auto__;
var G__14787 = cljs.core.count.call(null,c__5338__auto__);
var G__14788 = (0);
seq__14776 = G__14785;
chunk__14777 = G__14786;
count__14778 = G__14787;
i__14779 = G__14788;
continue;
} else {
var kid = cljs.core.first.call(null,seq__14776__$1);
var rmk_14789 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_14789);

var G__14790 = cljs.core.next.call(null,seq__14776__$1);
var G__14791 = null;
var G__14792 = (0);
var G__14793 = (0);
seq__14776 = G__14790;
chunk__14777 = G__14791;
count__14778 = G__14792;
i__14779 = G__14793;
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
var seq__14794 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__14795 = null;
var count__14796 = (0);
var i__14797 = (0);
while(true){
if((i__14797 < count__14796)){
var page = cljs.core._nth.call(null,chunk__14795,i__14797);
var qx_page_14798 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_14798]);

var temp__4425__auto___14799 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___14799)){
var ept_14800 = temp__4425__auto___14799;
routing.onGet(ept_14800,shower,qx_page_14798);
} else {
}

var G__14801 = seq__14794;
var G__14802 = chunk__14795;
var G__14803 = count__14796;
var G__14804 = (i__14797 + (1));
seq__14794 = G__14801;
chunk__14795 = G__14802;
count__14796 = G__14803;
i__14797 = G__14804;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14794);
if(temp__4425__auto__){
var seq__14794__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14794__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__14794__$1);
var G__14805 = cljs.core.chunk_rest.call(null,seq__14794__$1);
var G__14806 = c__5338__auto__;
var G__14807 = cljs.core.count.call(null,c__5338__auto__);
var G__14808 = (0);
seq__14794 = G__14805;
chunk__14795 = G__14806;
count__14796 = G__14807;
i__14797 = G__14808;
continue;
} else {
var page = cljs.core.first.call(null,seq__14794__$1);
var qx_page_14809 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_14809]);

var temp__4425__auto___14810__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___14810__$1)){
var ept_14811 = temp__4425__auto___14810__$1;
routing.onGet(ept_14811,shower,qx_page_14809);
} else {
}

var G__14812 = cljs.core.next.call(null,seq__14794__$1);
var G__14813 = null;
var G__14814 = (0);
var G__14815 = (0);
seq__14794 = G__14812;
chunk__14795 = G__14813;
count__14796 = G__14814;
i__14797 = G__14815;
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
var temp__4425__auto___14816 = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___14816)){
var lyo_14817 = temp__4425__auto___14816;
cljs.core.println.call(null,new cljs.core.Keyword(null,"init-setting-layo!!!!!","init-setting-layo!!!!!",-1831845380),lyo_14817,tiltontec.cell.base.ia_type.call(null,me));

tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo_14817);
} else {
}

return tiltontec.qxia.widget.qx_initialize_kids.call(null,me);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),(function (me){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__14818 = cljs.core.seq.call(null,kids);
var chunk__14819 = null;
var count__14820 = (0);
var i__14821 = (0);
while(true){
if((i__14821 < count__14820)){
var k = cljs.core._nth.call(null,chunk__14819,i__14821);
var qxk_14822 = tiltontec.qxia.base.qxme.call(null,k);
var label_14823 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_14822,label_14823);

var G__14824 = seq__14818;
var G__14825 = chunk__14819;
var G__14826 = count__14820;
var G__14827 = (i__14821 + (1));
seq__14818 = G__14824;
chunk__14819 = G__14825;
count__14820 = G__14826;
i__14821 = G__14827;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__14818);
if(temp__4425__auto____$1){
var seq__14818__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14818__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__14818__$1);
var G__14828 = cljs.core.chunk_rest.call(null,seq__14818__$1);
var G__14829 = c__5338__auto__;
var G__14830 = cljs.core.count.call(null,c__5338__auto__);
var G__14831 = (0);
seq__14818 = G__14828;
chunk__14819 = G__14829;
count__14820 = G__14830;
i__14821 = G__14831;
continue;
} else {
var k = cljs.core.first.call(null,seq__14818__$1);
var qxk_14832 = tiltontec.qxia.base.qxme.call(null,k);
var label_14833 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_14832,label_14833);

var G__14834 = cljs.core.next.call(null,seq__14818__$1);
var G__14835 = null;
var G__14836 = (0);
var G__14837 = (0);
seq__14818 = G__14834;
chunk__14819 = G__14835;
count__14820 = G__14836;
i__14821 = G__14837;
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
var seq__14838 = cljs.core.seq.call(null,kids);
var chunk__14839 = null;
var count__14840 = (0);
var i__14841 = (0);
while(true){
if((i__14841 < count__14840)){
var k = cljs.core._nth.call(null,chunk__14839,i__14841);
var qxk_14842 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_14842);

var G__14843 = seq__14838;
var G__14844 = chunk__14839;
var G__14845 = count__14840;
var G__14846 = (i__14841 + (1));
seq__14838 = G__14843;
chunk__14839 = G__14844;
count__14840 = G__14845;
i__14841 = G__14846;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__14838);
if(temp__4425__auto____$1){
var seq__14838__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14838__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__14838__$1);
var G__14847 = cljs.core.chunk_rest.call(null,seq__14838__$1);
var G__14848 = c__5338__auto__;
var G__14849 = cljs.core.count.call(null,c__5338__auto__);
var G__14850 = (0);
seq__14838 = G__14847;
chunk__14839 = G__14848;
count__14840 = G__14849;
i__14841 = G__14850;
continue;
} else {
var k = cljs.core.first.call(null,seq__14838__$1);
var qxk_14851 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_14851);

var G__14852 = cljs.core.next.call(null,seq__14838__$1);
var G__14853 = null;
var G__14854 = (0);
var G__14855 = (0);
seq__14838 = G__14852;
chunk__14839 = G__14853;
count__14840 = G__14854;
i__14841 = G__14855;
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
var lostks_14864 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_14864)){
} else {
var seq__14856_14865 = cljs.core.seq.call(null,lostks_14864);
var chunk__14857_14866 = null;
var count__14858_14867 = (0);
var i__14859_14868 = (0);
while(true){
if((i__14859_14868 < count__14858_14867)){
var kid_14869 = cljs.core._nth.call(null,chunk__14857_14866,i__14859_14868);
var qxk_14870 = tiltontec.qxia.base.qxme.call(null,kid_14869);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_14869,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_14870);
}

qxk_14870.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_14869);

var G__14871 = seq__14856_14865;
var G__14872 = chunk__14857_14866;
var G__14873 = count__14858_14867;
var G__14874 = (i__14859_14868 + (1));
seq__14856_14865 = G__14871;
chunk__14857_14866 = G__14872;
count__14858_14867 = G__14873;
i__14859_14868 = G__14874;
continue;
} else {
var temp__4425__auto___14875 = cljs.core.seq.call(null,seq__14856_14865);
if(temp__4425__auto___14875){
var seq__14856_14876__$1 = temp__4425__auto___14875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14856_14876__$1)){
var c__5338__auto___14877 = cljs.core.chunk_first.call(null,seq__14856_14876__$1);
var G__14878 = cljs.core.chunk_rest.call(null,seq__14856_14876__$1);
var G__14879 = c__5338__auto___14877;
var G__14880 = cljs.core.count.call(null,c__5338__auto___14877);
var G__14881 = (0);
seq__14856_14865 = G__14878;
chunk__14857_14866 = G__14879;
count__14858_14867 = G__14880;
i__14859_14868 = G__14881;
continue;
} else {
var kid_14882 = cljs.core.first.call(null,seq__14856_14876__$1);
var qxk_14883 = tiltontec.qxia.base.qxme.call(null,kid_14882);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_14882,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_14883);
}

qxk_14883.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_14882);

var G__14884 = cljs.core.next.call(null,seq__14856_14876__$1);
var G__14885 = null;
var G__14886 = (0);
var G__14887 = (0);
seq__14856_14865 = G__14884;
chunk__14857_14866 = G__14885;
count__14858_14867 = G__14886;
i__14859_14868 = G__14887;
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
var seq__14860 = cljs.core.seq.call(null,new_ks);
var chunk__14861 = null;
var count__14862 = (0);
var i__14863 = (0);
while(true){
if((i__14863 < count__14862)){
var k = cljs.core._nth.call(null,chunk__14861,i__14863);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_14888 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_14888);
}

var G__14889 = seq__14860;
var G__14890 = chunk__14861;
var G__14891 = count__14862;
var G__14892 = (i__14863 + (1));
seq__14860 = G__14889;
chunk__14861 = G__14890;
count__14862 = G__14891;
i__14863 = G__14892;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14860);
if(temp__4425__auto__){
var seq__14860__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14860__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__14860__$1);
var G__14893 = cljs.core.chunk_rest.call(null,seq__14860__$1);
var G__14894 = c__5338__auto__;
var G__14895 = cljs.core.count.call(null,c__5338__auto__);
var G__14896 = (0);
seq__14860 = G__14893;
chunk__14861 = G__14894;
count__14862 = G__14895;
i__14863 = G__14896;
continue;
} else {
var k = cljs.core.first.call(null,seq__14860__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_14897 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_14897);
}

var G__14898 = cljs.core.next.call(null,seq__14860__$1);
var G__14899 = null;
var G__14900 = (0);
var G__14901 = (0);
seq__14860 = G__14898;
chunk__14861 = G__14899;
count__14862 = G__14900;
i__14863 = G__14901;
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
