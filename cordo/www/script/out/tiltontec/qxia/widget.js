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

var seq__9656 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__9657 = null;
var count__9658 = (0);
var i__9659 = (0);
while(true){
if((i__9659 < count__9658)){
var page = cljs.core._nth.call(null,chunk__9657,i__9659);
var qx_page_9660 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_9660);

var temp__4425__auto___9661 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___9661)){
var ept_9662 = temp__4425__auto___9661;
routing.onGet(ept_9662,shower,qx_page_9660);
} else {
}

var G__9663 = seq__9656;
var G__9664 = chunk__9657;
var G__9665 = count__9658;
var G__9666 = (i__9659 + (1));
seq__9656 = G__9663;
chunk__9657 = G__9664;
count__9658 = G__9665;
i__9659 = G__9666;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9656);
if(temp__4425__auto__){
var seq__9656__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9656__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__9656__$1);
var G__9667 = cljs.core.chunk_rest.call(null,seq__9656__$1);
var G__9668 = c__5338__auto__;
var G__9669 = cljs.core.count.call(null,c__5338__auto__);
var G__9670 = (0);
seq__9656 = G__9667;
chunk__9657 = G__9668;
count__9658 = G__9669;
i__9659 = G__9670;
continue;
} else {
var page = cljs.core.first.call(null,seq__9656__$1);
var qx_page_9671 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_9671);

var temp__4425__auto___9672__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___9672__$1)){
var ept_9673 = temp__4425__auto___9672__$1;
routing.onGet(ept_9673,shower,qx_page_9671);
} else {
}

var G__9674 = cljs.core.next.call(null,seq__9656__$1);
var G__9675 = null;
var G__9676 = (0);
var G__9677 = (0);
seq__9656 = G__9674;
chunk__9657 = G__9675;
count__9658 = G__9676;
i__9659 = G__9677;
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
var temp__4425__auto___9682 = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto___9682)){
var lyo_9683 = temp__4425__auto___9682;
tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo_9683);
} else {
}

var seq__9678 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__9679 = null;
var count__9680 = (0);
var i__9681 = (0);
while(true){
if((i__9681 < count__9680)){
var kid = cljs.core._nth.call(null,chunk__9679,i__9681);
tiltontec.qxia.base.qx_add_kid.call(null,me,kid);

var G__9684 = seq__9678;
var G__9685 = chunk__9679;
var G__9686 = count__9680;
var G__9687 = (i__9681 + (1));
seq__9678 = G__9684;
chunk__9679 = G__9685;
count__9680 = G__9686;
i__9681 = G__9687;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9678);
if(temp__4425__auto__){
var seq__9678__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9678__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__9678__$1);
var G__9688 = cljs.core.chunk_rest.call(null,seq__9678__$1);
var G__9689 = c__5338__auto__;
var G__9690 = cljs.core.count.call(null,c__5338__auto__);
var G__9691 = (0);
seq__9678 = G__9688;
chunk__9679 = G__9689;
count__9680 = G__9690;
i__9681 = G__9691;
continue;
} else {
var kid = cljs.core.first.call(null,seq__9678__$1);
tiltontec.qxia.base.qx_add_kid.call(null,me,kid);

var G__9692 = cljs.core.next.call(null,seq__9678__$1);
var G__9693 = null;
var G__9694 = (0);
var G__9695 = (0);
seq__9678 = G__9692;
chunk__9679 = G__9693;
count__9680 = G__9694;
i__9681 = G__9695;
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
var seq__9696 = cljs.core.seq.call(null,kids);
var chunk__9697 = null;
var count__9698 = (0);
var i__9699 = (0);
while(true){
if((i__9699 < count__9698)){
var k = cljs.core._nth.call(null,chunk__9697,i__9699);
var qxk_9700 = tiltontec.qxia.base.qxme.call(null,k);
var label_9701 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_9700,label_9701);

var G__9702 = seq__9696;
var G__9703 = chunk__9697;
var G__9704 = count__9698;
var G__9705 = (i__9699 + (1));
seq__9696 = G__9702;
chunk__9697 = G__9703;
count__9698 = G__9704;
i__9699 = G__9705;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__9696);
if(temp__4425__auto____$1){
var seq__9696__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9696__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__9696__$1);
var G__9706 = cljs.core.chunk_rest.call(null,seq__9696__$1);
var G__9707 = c__5338__auto__;
var G__9708 = cljs.core.count.call(null,c__5338__auto__);
var G__9709 = (0);
seq__9696 = G__9706;
chunk__9697 = G__9707;
count__9698 = G__9708;
i__9699 = G__9709;
continue;
} else {
var k = cljs.core.first.call(null,seq__9696__$1);
var qxk_9710 = tiltontec.qxia.base.qxme.call(null,k);
var label_9711 = tiltontec.model.base.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_9710,label_9711);

var G__9712 = cljs.core.next.call(null,seq__9696__$1);
var G__9713 = null;
var G__9714 = (0);
var G__9715 = (0);
seq__9696 = G__9712;
chunk__9697 = G__9713;
count__9698 = G__9714;
i__9699 = G__9715;
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
var seq__9716 = cljs.core.seq.call(null,kids);
var chunk__9717 = null;
var count__9718 = (0);
var i__9719 = (0);
while(true){
if((i__9719 < count__9718)){
var k = cljs.core._nth.call(null,chunk__9717,i__9719);
var qxk_9720 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_9720);

var G__9721 = seq__9716;
var G__9722 = chunk__9717;
var G__9723 = count__9718;
var G__9724 = (i__9719 + (1));
seq__9716 = G__9721;
chunk__9717 = G__9722;
count__9718 = G__9723;
i__9719 = G__9724;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__9716);
if(temp__4425__auto____$1){
var seq__9716__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9716__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__9716__$1);
var G__9725 = cljs.core.chunk_rest.call(null,seq__9716__$1);
var G__9726 = c__5338__auto__;
var G__9727 = cljs.core.count.call(null,c__5338__auto__);
var G__9728 = (0);
seq__9716 = G__9725;
chunk__9717 = G__9726;
count__9718 = G__9727;
i__9719 = G__9728;
continue;
} else {
var k = cljs.core.first.call(null,seq__9716__$1);
var qxk_9729 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_9729);

var G__9730 = cljs.core.next.call(null,seq__9716__$1);
var G__9731 = null;
var G__9732 = (0);
var G__9733 = (0);
seq__9716 = G__9730;
chunk__9717 = G__9731;
count__9718 = G__9732;
i__9719 = G__9733;
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
var lostks_9742 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_9742)){
} else {
var seq__9734_9743 = cljs.core.seq.call(null,lostks_9742);
var chunk__9735_9744 = null;
var count__9736_9745 = (0);
var i__9737_9746 = (0);
while(true){
if((i__9737_9746 < count__9736_9745)){
var kid_9747 = cljs.core._nth.call(null,chunk__9735_9744,i__9737_9746);
var qxk_9748 = tiltontec.qxia.base.qxme.call(null,kid_9747);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_9747,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_9748);
}

qxk_9748.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_9747);

var G__9749 = seq__9734_9743;
var G__9750 = chunk__9735_9744;
var G__9751 = count__9736_9745;
var G__9752 = (i__9737_9746 + (1));
seq__9734_9743 = G__9749;
chunk__9735_9744 = G__9750;
count__9736_9745 = G__9751;
i__9737_9746 = G__9752;
continue;
} else {
var temp__4425__auto___9753 = cljs.core.seq.call(null,seq__9734_9743);
if(temp__4425__auto___9753){
var seq__9734_9754__$1 = temp__4425__auto___9753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9734_9754__$1)){
var c__5338__auto___9755 = cljs.core.chunk_first.call(null,seq__9734_9754__$1);
var G__9756 = cljs.core.chunk_rest.call(null,seq__9734_9754__$1);
var G__9757 = c__5338__auto___9755;
var G__9758 = cljs.core.count.call(null,c__5338__auto___9755);
var G__9759 = (0);
seq__9734_9743 = G__9756;
chunk__9735_9744 = G__9757;
count__9736_9745 = G__9758;
i__9737_9746 = G__9759;
continue;
} else {
var kid_9760 = cljs.core.first.call(null,seq__9734_9754__$1);
var qxk_9761 = tiltontec.qxia.base.qxme.call(null,kid_9760);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_9760,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_9761);
}

qxk_9761.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_9760);

var G__9762 = cljs.core.next.call(null,seq__9734_9754__$1);
var G__9763 = null;
var G__9764 = (0);
var G__9765 = (0);
seq__9734_9743 = G__9762;
chunk__9735_9744 = G__9763;
count__9736_9745 = G__9764;
i__9737_9746 = G__9765;
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
var seq__9738 = cljs.core.seq.call(null,new_ks);
var chunk__9739 = null;
var count__9740 = (0);
var i__9741 = (0);
while(true){
if((i__9741 < count__9740)){
var k = cljs.core._nth.call(null,chunk__9739,i__9741);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__9766 = seq__9738;
var G__9767 = chunk__9739;
var G__9768 = count__9740;
var G__9769 = (i__9741 + (1));
seq__9738 = G__9766;
chunk__9739 = G__9767;
count__9740 = G__9768;
i__9741 = G__9769;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9738);
if(temp__4425__auto__){
var seq__9738__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9738__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__9738__$1);
var G__9770 = cljs.core.chunk_rest.call(null,seq__9738__$1);
var G__9771 = c__5338__auto__;
var G__9772 = cljs.core.count.call(null,c__5338__auto__);
var G__9773 = (0);
seq__9738 = G__9770;
chunk__9739 = G__9771;
count__9740 = G__9772;
i__9741 = G__9773;
continue;
} else {
var k = cljs.core.first.call(null,seq__9738__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__9774 = cljs.core.next.call(null,seq__9738__$1);
var G__9775 = null;
var G__9776 = (0);
var G__9777 = (0);
seq__9738 = G__9774;
chunk__9739 = G__9775;
count__9740 = G__9776;
i__9741 = G__9777;
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
var seq__9778_9786 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__9779_9787 = null;
var count__9780_9788 = (0);
var i__9781_9789 = (0);
while(true){
if((i__9781_9789 < count__9780_9788)){
var n_9790 = cljs.core._nth.call(null,chunk__9779_9787,i__9781_9789);
p.removeSlot(n_9790);

var G__9791 = seq__9778_9786;
var G__9792 = chunk__9779_9787;
var G__9793 = count__9780_9788;
var G__9794 = (i__9781_9789 + (1));
seq__9778_9786 = G__9791;
chunk__9779_9787 = G__9792;
count__9780_9788 = G__9793;
i__9781_9789 = G__9794;
continue;
} else {
var temp__4425__auto___9795 = cljs.core.seq.call(null,seq__9778_9786);
if(temp__4425__auto___9795){
var seq__9778_9796__$1 = temp__4425__auto___9795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9778_9796__$1)){
var c__5338__auto___9797 = cljs.core.chunk_first.call(null,seq__9778_9796__$1);
var G__9798 = cljs.core.chunk_rest.call(null,seq__9778_9796__$1);
var G__9799 = c__5338__auto___9797;
var G__9800 = cljs.core.count.call(null,c__5338__auto___9797);
var G__9801 = (0);
seq__9778_9786 = G__9798;
chunk__9779_9787 = G__9799;
count__9780_9788 = G__9800;
i__9781_9789 = G__9801;
continue;
} else {
var n_9802 = cljs.core.first.call(null,seq__9778_9796__$1);
p.removeSlot(n_9802);

var G__9803 = cljs.core.next.call(null,seq__9778_9796__$1);
var G__9804 = null;
var G__9805 = (0);
var G__9806 = (0);
seq__9778_9786 = G__9803;
chunk__9779_9787 = G__9804;
count__9780_9788 = G__9805;
i__9781_9789 = G__9806;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__9782 = cljs.core.seq.call(null,new$);
var chunk__9783 = null;
var count__9784 = (0);
var i__9785 = (0);
while(true){
if((i__9785 < count__9784)){
var sd = cljs.core._nth.call(null,chunk__9783,i__9785);
cljs.core.println.call(null,new cljs.core.Keyword(null,"pickslot!!","pickslot!!",-645901635),sd);

var da_9807 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_9807);

var G__9808 = seq__9782;
var G__9809 = chunk__9783;
var G__9810 = count__9784;
var G__9811 = (i__9785 + (1));
seq__9782 = G__9808;
chunk__9783 = G__9809;
count__9784 = G__9810;
i__9785 = G__9811;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9782);
if(temp__4425__auto__){
var seq__9782__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9782__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__9782__$1);
var G__9812 = cljs.core.chunk_rest.call(null,seq__9782__$1);
var G__9813 = c__5338__auto__;
var G__9814 = cljs.core.count.call(null,c__5338__auto__);
var G__9815 = (0);
seq__9782 = G__9812;
chunk__9783 = G__9813;
count__9784 = G__9814;
i__9785 = G__9815;
continue;
} else {
var sd = cljs.core.first.call(null,seq__9782__$1);
cljs.core.println.call(null,new cljs.core.Keyword(null,"pickslot!!","pickslot!!",-645901635),sd);

var da_9816 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_9816);

var G__9817 = cljs.core.next.call(null,seq__9782__$1);
var G__9818 = null;
var G__9819 = (0);
var G__9820 = (0);
seq__9782 = G__9817;
chunk__9783 = G__9818;
count__9784 = G__9819;
i__9785 = G__9820;
continue;
}
} else {
return null;
}
}
break;
}
}));
