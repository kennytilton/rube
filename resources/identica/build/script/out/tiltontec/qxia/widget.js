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
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","Mobile","tiltontec.qxia.types/Mobile",-143490810),(function (me){
var app = new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var shower = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"shower","shower",-1731894586));
var pager = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"pager","pager",1850229940));
var routing = app.getRouting();
cljs.core.println.call(null,new cljs.core.Keyword(null,"rtgok","rtgok",-1963526748),app,routing);

var seq__12672 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__12673 = null;
var count__12674 = (0);
var i__12675 = (0);
while(true){
if((i__12675 < count__12674)){
var page = cljs.core._nth.call(null,chunk__12673,i__12675);
var qx_page_12676 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_12676);

var temp__4425__auto___12677 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___12677)){
var ept_12678 = temp__4425__auto___12677;
routing.onGet(ept_12678,shower,qx_page_12676);
} else {
}

var G__12679 = seq__12672;
var G__12680 = chunk__12673;
var G__12681 = count__12674;
var G__12682 = (i__12675 + (1));
seq__12672 = G__12679;
chunk__12673 = G__12680;
count__12674 = G__12681;
i__12675 = G__12682;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12672);
if(temp__4425__auto__){
var seq__12672__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12672__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__12672__$1);
var G__12683 = cljs.core.chunk_rest.call(null,seq__12672__$1);
var G__12684 = c__5338__auto__;
var G__12685 = cljs.core.count.call(null,c__5338__auto__);
var G__12686 = (0);
seq__12672 = G__12683;
chunk__12673 = G__12684;
count__12674 = G__12685;
i__12675 = G__12686;
continue;
} else {
var page = cljs.core.first.call(null,seq__12672__$1);
var qx_page_12687 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_12687);

var temp__4425__auto___12688__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___12688__$1)){
var ept_12689 = temp__4425__auto___12688__$1;
routing.onGet(ept_12689,shower,qx_page_12687);
} else {
}

var G__12690 = cljs.core.next.call(null,seq__12672__$1);
var G__12691 = null;
var G__12692 = (0);
var G__12693 = (0);
seq__12672 = G__12690;
chunk__12673 = G__12691;
count__12674 = G__12692;
i__12675 = G__12693;
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
var temp__4425__auto___12698 = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___12698)){
var lyo_12699 = temp__4425__auto___12698;
tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo_12699);
} else {
}

var seq__12694 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__12695 = null;
var count__12696 = (0);
var i__12697 = (0);
while(true){
if((i__12697 < count__12696)){
var kid = cljs.core._nth.call(null,chunk__12695,i__12697);
tiltontec.qxia.base.qx_add_kid.call(null,me,kid);

var G__12700 = seq__12694;
var G__12701 = chunk__12695;
var G__12702 = count__12696;
var G__12703 = (i__12697 + (1));
seq__12694 = G__12700;
chunk__12695 = G__12701;
count__12696 = G__12702;
i__12697 = G__12703;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12694);
if(temp__4425__auto__){
var seq__12694__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12694__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__12694__$1);
var G__12704 = cljs.core.chunk_rest.call(null,seq__12694__$1);
var G__12705 = c__5338__auto__;
var G__12706 = cljs.core.count.call(null,c__5338__auto__);
var G__12707 = (0);
seq__12694 = G__12704;
chunk__12695 = G__12705;
count__12696 = G__12706;
i__12697 = G__12707;
continue;
} else {
var kid = cljs.core.first.call(null,seq__12694__$1);
tiltontec.qxia.base.qx_add_kid.call(null,me,kid);

var G__12708 = cljs.core.next.call(null,seq__12694__$1);
var G__12709 = null;
var G__12710 = (0);
var G__12711 = (0);
seq__12694 = G__12708;
chunk__12695 = G__12709;
count__12696 = G__12710;
i__12697 = G__12711;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225),(function (me){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__12712 = cljs.core.seq.call(null,kids);
var chunk__12713 = null;
var count__12714 = (0);
var i__12715 = (0);
while(true){
if((i__12715 < count__12714)){
var k = cljs.core._nth.call(null,chunk__12713,i__12715);
var qxk_12716 = tiltontec.qxia.base.qxme.call(null,k);
var label_12717 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_12716,label_12717);

var G__12718 = seq__12712;
var G__12719 = chunk__12713;
var G__12720 = count__12714;
var G__12721 = (i__12715 + (1));
seq__12712 = G__12718;
chunk__12713 = G__12719;
count__12714 = G__12720;
i__12715 = G__12721;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__12712);
if(temp__4425__auto____$1){
var seq__12712__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12712__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__12712__$1);
var G__12722 = cljs.core.chunk_rest.call(null,seq__12712__$1);
var G__12723 = c__5338__auto__;
var G__12724 = cljs.core.count.call(null,c__5338__auto__);
var G__12725 = (0);
seq__12712 = G__12722;
chunk__12713 = G__12723;
count__12714 = G__12724;
i__12715 = G__12725;
continue;
} else {
var k = cljs.core.first.call(null,seq__12712__$1);
var qxk_12726 = tiltontec.qxia.base.qxme.call(null,k);
var label_12727 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_12726,label_12727);

var G__12728 = cljs.core.next.call(null,seq__12712__$1);
var G__12729 = null;
var G__12730 = (0);
var G__12731 = (0);
seq__12712 = G__12728;
chunk__12713 = G__12729;
count__12714 = G__12730;
i__12715 = G__12731;
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
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724),(function (me){
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

return cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),(new qx.ui.mobile.form.renderer.Single(qx_form)));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),(function (page){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
var temp__4425__auto__ = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
return qx_page.addListener("initialize",((function (kids,temp__4425__auto__,qx_page){
return (function (){
var content = qx_page.getContent();
var seq__12732 = cljs.core.seq.call(null,kids);
var chunk__12733 = null;
var count__12734 = (0);
var i__12735 = (0);
while(true){
if((i__12735 < count__12734)){
var k = cljs.core._nth.call(null,chunk__12733,i__12735);
var qxk_12736 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_12736);

var G__12737 = seq__12732;
var G__12738 = chunk__12733;
var G__12739 = count__12734;
var G__12740 = (i__12735 + (1));
seq__12732 = G__12737;
chunk__12733 = G__12738;
count__12734 = G__12739;
i__12735 = G__12740;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__12732);
if(temp__4425__auto____$1){
var seq__12732__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12732__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__12732__$1);
var G__12741 = cljs.core.chunk_rest.call(null,seq__12732__$1);
var G__12742 = c__5338__auto__;
var G__12743 = cljs.core.count.call(null,c__5338__auto__);
var G__12744 = (0);
seq__12732 = G__12741;
chunk__12733 = G__12742;
count__12734 = G__12743;
i__12735 = G__12744;
continue;
} else {
var k = cljs.core.first.call(null,seq__12732__$1);
var qxk_12745 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_12745);

var G__12746 = cljs.core.next.call(null,seq__12732__$1);
var G__12747 = null;
var G__12748 = (0);
var G__12749 = (0);
seq__12732 = G__12746;
chunk__12733 = G__12747;
count__12734 = G__12748;
i__12735 = G__12749;
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
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.TextField","tiltontec.qxia.types/m.TextField",1587442644),(function (me){
return tiltontec.qxia.base.qxme.call(null,me).setValue(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163)], null),(function (_,me,newk,oldk,___$1){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks_12758 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_12758)){
} else {
var seq__12750_12759 = cljs.core.seq.call(null,lostks_12758);
var chunk__12751_12760 = null;
var count__12752_12761 = (0);
var i__12753_12762 = (0);
while(true){
if((i__12753_12762 < count__12752_12761)){
var kid_12763 = cljs.core._nth.call(null,chunk__12751_12760,i__12753_12762);
var qxk_12764 = tiltontec.qxia.base.qxme.call(null,kid_12763);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_12763,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_12764);
}

qxk_12764.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_12763);

var G__12765 = seq__12750_12759;
var G__12766 = chunk__12751_12760;
var G__12767 = count__12752_12761;
var G__12768 = (i__12753_12762 + (1));
seq__12750_12759 = G__12765;
chunk__12751_12760 = G__12766;
count__12752_12761 = G__12767;
i__12753_12762 = G__12768;
continue;
} else {
var temp__4425__auto___12769 = cljs.core.seq.call(null,seq__12750_12759);
if(temp__4425__auto___12769){
var seq__12750_12770__$1 = temp__4425__auto___12769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12750_12770__$1)){
var c__5338__auto___12771 = cljs.core.chunk_first.call(null,seq__12750_12770__$1);
var G__12772 = cljs.core.chunk_rest.call(null,seq__12750_12770__$1);
var G__12773 = c__5338__auto___12771;
var G__12774 = cljs.core.count.call(null,c__5338__auto___12771);
var G__12775 = (0);
seq__12750_12759 = G__12772;
chunk__12751_12760 = G__12773;
count__12752_12761 = G__12774;
i__12753_12762 = G__12775;
continue;
} else {
var kid_12776 = cljs.core.first.call(null,seq__12750_12770__$1);
var qxk_12777 = tiltontec.qxia.base.qxme.call(null,kid_12776);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_12776,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_12777);
}

qxk_12777.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_12776);

var G__12778 = cljs.core.next.call(null,seq__12750_12770__$1);
var G__12779 = null;
var G__12780 = (0);
var G__12781 = (0);
seq__12750_12759 = G__12778;
chunk__12751_12760 = G__12779;
count__12752_12761 = G__12780;
i__12753_12762 = G__12781;
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
var seq__12754 = cljs.core.seq.call(null,new_ks);
var chunk__12755 = null;
var count__12756 = (0);
var i__12757 = (0);
while(true){
if((i__12757 < count__12756)){
var k = cljs.core._nth.call(null,chunk__12755,i__12757);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__12782 = seq__12754;
var G__12783 = chunk__12755;
var G__12784 = count__12756;
var G__12785 = (i__12757 + (1));
seq__12754 = G__12782;
chunk__12755 = G__12783;
count__12756 = G__12784;
i__12757 = G__12785;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12754);
if(temp__4425__auto__){
var seq__12754__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12754__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__12754__$1);
var G__12786 = cljs.core.chunk_rest.call(null,seq__12754__$1);
var G__12787 = c__5338__auto__;
var G__12788 = cljs.core.count.call(null,c__5338__auto__);
var G__12789 = (0);
seq__12754 = G__12786;
chunk__12755 = G__12787;
count__12756 = G__12788;
i__12757 = G__12789;
continue;
} else {
var k = cljs.core.first.call(null,seq__12754__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__12790 = cljs.core.next.call(null,seq__12754__$1);
var G__12791 = null;
var G__12792 = (0);
var G__12793 = (0);
seq__12754 = G__12790;
chunk__12755 = G__12791;
count__12756 = G__12792;
i__12757 = G__12793;
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
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slot-data","slot-data",1146367809),new cljs.core.Keyword("tiltontec.qxia.types","m.Picker","tiltontec.qxia.types/m.Picker",-1343372926)], null),(function (_,me,new$,old,c){
cljs.core.println.call(null,new cljs.core.Keyword(null,"obs-sd","obs-sd",1176273322),tiltontec.cell.base.ia_type.call(null,me),new$,old);

var p = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__12794_12802 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__12795_12803 = null;
var count__12796_12804 = (0);
var i__12797_12805 = (0);
while(true){
if((i__12797_12805 < count__12796_12804)){
var n_12806 = cljs.core._nth.call(null,chunk__12795_12803,i__12797_12805);
p.removeSlot(n_12806);

var G__12807 = seq__12794_12802;
var G__12808 = chunk__12795_12803;
var G__12809 = count__12796_12804;
var G__12810 = (i__12797_12805 + (1));
seq__12794_12802 = G__12807;
chunk__12795_12803 = G__12808;
count__12796_12804 = G__12809;
i__12797_12805 = G__12810;
continue;
} else {
var temp__4425__auto___12811 = cljs.core.seq.call(null,seq__12794_12802);
if(temp__4425__auto___12811){
var seq__12794_12812__$1 = temp__4425__auto___12811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12794_12812__$1)){
var c__5338__auto___12813 = cljs.core.chunk_first.call(null,seq__12794_12812__$1);
var G__12814 = cljs.core.chunk_rest.call(null,seq__12794_12812__$1);
var G__12815 = c__5338__auto___12813;
var G__12816 = cljs.core.count.call(null,c__5338__auto___12813);
var G__12817 = (0);
seq__12794_12802 = G__12814;
chunk__12795_12803 = G__12815;
count__12796_12804 = G__12816;
i__12797_12805 = G__12817;
continue;
} else {
var n_12818 = cljs.core.first.call(null,seq__12794_12812__$1);
p.removeSlot(n_12818);

var G__12819 = cljs.core.next.call(null,seq__12794_12812__$1);
var G__12820 = null;
var G__12821 = (0);
var G__12822 = (0);
seq__12794_12802 = G__12819;
chunk__12795_12803 = G__12820;
count__12796_12804 = G__12821;
i__12797_12805 = G__12822;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__12798 = cljs.core.seq.call(null,new$);
var chunk__12799 = null;
var count__12800 = (0);
var i__12801 = (0);
while(true){
if((i__12801 < count__12800)){
var sd = cljs.core._nth.call(null,chunk__12799,i__12801);
cljs.core.println.call(null,new cljs.core.Keyword(null,"pickslot!!","pickslot!!",-645901635),sd);

var da_12823 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_12823);

var G__12824 = seq__12798;
var G__12825 = chunk__12799;
var G__12826 = count__12800;
var G__12827 = (i__12801 + (1));
seq__12798 = G__12824;
chunk__12799 = G__12825;
count__12800 = G__12826;
i__12801 = G__12827;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12798);
if(temp__4425__auto__){
var seq__12798__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12798__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__12798__$1);
var G__12828 = cljs.core.chunk_rest.call(null,seq__12798__$1);
var G__12829 = c__5338__auto__;
var G__12830 = cljs.core.count.call(null,c__5338__auto__);
var G__12831 = (0);
seq__12798 = G__12828;
chunk__12799 = G__12829;
count__12800 = G__12830;
i__12801 = G__12831;
continue;
} else {
var sd = cljs.core.first.call(null,seq__12798__$1);
cljs.core.println.call(null,new cljs.core.Keyword(null,"pickslot!!","pickslot!!",-645901635),sd);

var da_12832 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_12832);

var G__12833 = cljs.core.next.call(null,seq__12798__$1);
var G__12834 = null;
var G__12835 = (0);
var G__12836 = (0);
seq__12798 = G__12833;
chunk__12799 = G__12834;
count__12800 = G__12835;
i__12801 = G__12836;
continue;
}
} else {
return null;
}
}
break;
}
}));
