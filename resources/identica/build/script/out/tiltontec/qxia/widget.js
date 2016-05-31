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
var seq__27738 = cljs.core.seq.call(null,kids);
var chunk__27739 = null;
var count__27740 = (0);
var i__27741 = (0);
while(true){
if((i__27741 < count__27740)){
var kid = cljs.core._nth.call(null,chunk__27739,i__27741);
var rmk_27742 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_27742);

var G__27743 = seq__27738;
var G__27744 = chunk__27739;
var G__27745 = count__27740;
var G__27746 = (i__27741 + (1));
seq__27738 = G__27743;
chunk__27739 = G__27744;
count__27740 = G__27745;
i__27741 = G__27746;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__27738);
if(temp__4425__auto____$1){
var seq__27738__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27738__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__27738__$1);
var G__27747 = cljs.core.chunk_rest.call(null,seq__27738__$1);
var G__27748 = c__5338__auto__;
var G__27749 = cljs.core.count.call(null,c__5338__auto__);
var G__27750 = (0);
seq__27738 = G__27747;
chunk__27739 = G__27748;
count__27740 = G__27749;
i__27741 = G__27750;
continue;
} else {
var kid = cljs.core.first.call(null,seq__27738__$1);
var rmk_27751 = tiltontec.qxia.base.qxme.call(null,kid);
qx_me.add(rmk_27751);

var G__27752 = cljs.core.next.call(null,seq__27738__$1);
var G__27753 = null;
var G__27754 = (0);
var G__27755 = (0);
seq__27738 = G__27752;
chunk__27739 = G__27753;
count__27740 = G__27754;
i__27741 = G__27755;
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
var seq__27756 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__27757 = null;
var count__27758 = (0);
var i__27759 = (0);
while(true){
if((i__27759 < count__27758)){
var page = cljs.core._nth.call(null,chunk__27757,i__27759);
var qx_page_27760 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_27760]);

var temp__4425__auto___27761 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___27761)){
var ept_27762 = temp__4425__auto___27761;
routing.onGet(ept_27762,shower,qx_page_27760);
} else {
}

var G__27763 = seq__27756;
var G__27764 = chunk__27757;
var G__27765 = count__27758;
var G__27766 = (i__27759 + (1));
seq__27756 = G__27763;
chunk__27757 = G__27764;
count__27758 = G__27765;
i__27759 = G__27766;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27756);
if(temp__4425__auto__){
var seq__27756__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27756__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__27756__$1);
var G__27767 = cljs.core.chunk_rest.call(null,seq__27756__$1);
var G__27768 = c__5338__auto__;
var G__27769 = cljs.core.count.call(null,c__5338__auto__);
var G__27770 = (0);
seq__27756 = G__27767;
chunk__27757 = G__27768;
count__27758 = G__27769;
i__27759 = G__27770;
continue;
} else {
var page = cljs.core.first.call(null,seq__27756__$1);
var qx_page_27771 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail([qx_page_27771]);

var temp__4425__auto___27772__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___27772__$1)){
var ept_27773 = temp__4425__auto___27772__$1;
routing.onGet(ept_27773,shower,qx_page_27771);
} else {
}

var G__27774 = cljs.core.next.call(null,seq__27756__$1);
var G__27775 = null;
var G__27776 = (0);
var G__27777 = (0);
seq__27756 = G__27774;
chunk__27757 = G__27775;
count__27758 = G__27776;
i__27759 = G__27777;
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
var temp__4425__auto___27778 = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___27778)){
var lyo_27779 = temp__4425__auto___27778;
cljs.core.println.call(null,new cljs.core.Keyword(null,"init-setting-layo!!!!!","init-setting-layo!!!!!",-1831845380),lyo_27779,tiltontec.cell.base.ia_type.call(null,me));

tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo_27779);
} else {
}

return tiltontec.qxia.widget.qx_initialize_kids.call(null,me);
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),(function (me){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__27780 = cljs.core.seq.call(null,kids);
var chunk__27781 = null;
var count__27782 = (0);
var i__27783 = (0);
while(true){
if((i__27783 < count__27782)){
var k = cljs.core._nth.call(null,chunk__27781,i__27783);
var qxk_27784 = tiltontec.qxia.base.qxme.call(null,k);
var label_27785 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_27784,label_27785);

var G__27786 = seq__27780;
var G__27787 = chunk__27781;
var G__27788 = count__27782;
var G__27789 = (i__27783 + (1));
seq__27780 = G__27786;
chunk__27781 = G__27787;
count__27782 = G__27788;
i__27783 = G__27789;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__27780);
if(temp__4425__auto____$1){
var seq__27780__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27780__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__27780__$1);
var G__27790 = cljs.core.chunk_rest.call(null,seq__27780__$1);
var G__27791 = c__5338__auto__;
var G__27792 = cljs.core.count.call(null,c__5338__auto__);
var G__27793 = (0);
seq__27780 = G__27790;
chunk__27781 = G__27791;
count__27782 = G__27792;
i__27783 = G__27793;
continue;
} else {
var k = cljs.core.first.call(null,seq__27780__$1);
var qxk_27794 = tiltontec.qxia.base.qxme.call(null,k);
var label_27795 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_27794,label_27795);

var G__27796 = cljs.core.next.call(null,seq__27780__$1);
var G__27797 = null;
var G__27798 = (0);
var G__27799 = (0);
seq__27780 = G__27796;
chunk__27781 = G__27797;
count__27782 = G__27798;
i__27783 = G__27799;
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
var seq__27800 = cljs.core.seq.call(null,kids);
var chunk__27801 = null;
var count__27802 = (0);
var i__27803 = (0);
while(true){
if((i__27803 < count__27802)){
var k = cljs.core._nth.call(null,chunk__27801,i__27803);
var qxk_27804 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_27804);

var G__27805 = seq__27800;
var G__27806 = chunk__27801;
var G__27807 = count__27802;
var G__27808 = (i__27803 + (1));
seq__27800 = G__27805;
chunk__27801 = G__27806;
count__27802 = G__27807;
i__27803 = G__27808;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__27800);
if(temp__4425__auto____$1){
var seq__27800__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27800__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__27800__$1);
var G__27809 = cljs.core.chunk_rest.call(null,seq__27800__$1);
var G__27810 = c__5338__auto__;
var G__27811 = cljs.core.count.call(null,c__5338__auto__);
var G__27812 = (0);
seq__27800 = G__27809;
chunk__27801 = G__27810;
count__27802 = G__27811;
i__27803 = G__27812;
continue;
} else {
var k = cljs.core.first.call(null,seq__27800__$1);
var qxk_27813 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_27813);

var G__27814 = cljs.core.next.call(null,seq__27800__$1);
var G__27815 = null;
var G__27816 = (0);
var G__27817 = (0);
seq__27800 = G__27814;
chunk__27801 = G__27815;
count__27802 = G__27816;
i__27803 = G__27817;
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
var lostks_27826 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_27826)){
} else {
var seq__27818_27827 = cljs.core.seq.call(null,lostks_27826);
var chunk__27819_27828 = null;
var count__27820_27829 = (0);
var i__27821_27830 = (0);
while(true){
if((i__27821_27830 < count__27820_27829)){
var kid_27831 = cljs.core._nth.call(null,chunk__27819_27828,i__27821_27830);
var qxk_27832 = tiltontec.qxia.base.qxme.call(null,kid_27831);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_27831,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_27832);
}

qxk_27832.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_27831);

var G__27833 = seq__27818_27827;
var G__27834 = chunk__27819_27828;
var G__27835 = count__27820_27829;
var G__27836 = (i__27821_27830 + (1));
seq__27818_27827 = G__27833;
chunk__27819_27828 = G__27834;
count__27820_27829 = G__27835;
i__27821_27830 = G__27836;
continue;
} else {
var temp__4425__auto___27837 = cljs.core.seq.call(null,seq__27818_27827);
if(temp__4425__auto___27837){
var seq__27818_27838__$1 = temp__4425__auto___27837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27818_27838__$1)){
var c__5338__auto___27839 = cljs.core.chunk_first.call(null,seq__27818_27838__$1);
var G__27840 = cljs.core.chunk_rest.call(null,seq__27818_27838__$1);
var G__27841 = c__5338__auto___27839;
var G__27842 = cljs.core.count.call(null,c__5338__auto___27839);
var G__27843 = (0);
seq__27818_27827 = G__27840;
chunk__27819_27828 = G__27841;
count__27820_27829 = G__27842;
i__27821_27830 = G__27843;
continue;
} else {
var kid_27844 = cljs.core.first.call(null,seq__27818_27838__$1);
var qxk_27845 = tiltontec.qxia.base.qxme.call(null,kid_27844);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_27844,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_27845);
}

qxk_27845.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_27844);

var G__27846 = cljs.core.next.call(null,seq__27818_27838__$1);
var G__27847 = null;
var G__27848 = (0);
var G__27849 = (0);
seq__27818_27827 = G__27846;
chunk__27819_27828 = G__27847;
count__27820_27829 = G__27848;
i__27821_27830 = G__27849;
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
var seq__27822 = cljs.core.seq.call(null,new_ks);
var chunk__27823 = null;
var count__27824 = (0);
var i__27825 = (0);
while(true){
if((i__27825 < count__27824)){
var k = cljs.core._nth.call(null,chunk__27823,i__27825);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_27850 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_27850);
}

var G__27851 = seq__27822;
var G__27852 = chunk__27823;
var G__27853 = count__27824;
var G__27854 = (i__27825 + (1));
seq__27822 = G__27851;
chunk__27823 = G__27852;
count__27824 = G__27853;
i__27825 = G__27854;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27822);
if(temp__4425__auto__){
var seq__27822__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27822__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__27822__$1);
var G__27855 = cljs.core.chunk_rest.call(null,seq__27822__$1);
var G__27856 = c__5338__auto__;
var G__27857 = cljs.core.count.call(null,c__5338__auto__);
var G__27858 = (0);
seq__27822 = G__27855;
chunk__27823 = G__27856;
count__27824 = G__27857;
i__27825 = G__27858;
continue;
} else {
var k = cljs.core.first.call(null,seq__27822__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
var qxk_27859 = tiltontec.qxia.base.qxme.call(null,k);
tiltontec.qxia.base.qxme.call(null,me).add(qxk_27859);
}

var G__27860 = cljs.core.next.call(null,seq__27822__$1);
var G__27861 = null;
var G__27862 = (0);
var G__27863 = (0);
seq__27822 = G__27860;
chunk__27823 = G__27861;
count__27824 = G__27862;
i__27825 = G__27863;
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
