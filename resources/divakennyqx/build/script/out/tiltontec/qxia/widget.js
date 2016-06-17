// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.qxia.widget');
goog.require('cljs.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
goog.require('tiltontec.model.macros');
goog.require('clojure.set');
goog.require('tiltontec.qxia.base');
goog.require('tiltontec.cell.integrity');
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","Mobile","tiltontec.qxia.types/Mobile",-143490810)], null),(function (_,me,new$,old,c){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
var app = new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var shower = new cljs.core.Keyword(null,"shower","shower",-1731894586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var pager = new cljs.core.Keyword(null,"pager","pager",1850229940).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var routing = app.getRouting();
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__15536_15544 = cljs.core.seq.call(null,old);
var chunk__15537_15545 = null;
var count__15538_15546 = (0);
var i__15539_15547 = (0);
while(true){
if((i__15539_15547 < count__15538_15546)){
var page_15548 = cljs.core._nth.call(null,chunk__15537_15545,i__15539_15547);
var temp__4425__auto___15549 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_15548));
if(cljs.core.truth_(temp__4425__auto___15549)){
var ept_15550 = temp__4425__auto___15549;
routing.remove(ept_15550);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_15548));

var G__15551 = seq__15536_15544;
var G__15552 = chunk__15537_15545;
var G__15553 = count__15538_15546;
var G__15554 = (i__15539_15547 + (1));
seq__15536_15544 = G__15551;
chunk__15537_15545 = G__15552;
count__15538_15546 = G__15553;
i__15539_15547 = G__15554;
continue;
} else {
var temp__4425__auto___15555 = cljs.core.seq.call(null,seq__15536_15544);
if(temp__4425__auto___15555){
var seq__15536_15556__$1 = temp__4425__auto___15555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15536_15556__$1)){
var c__7021__auto___15557 = cljs.core.chunk_first.call(null,seq__15536_15556__$1);
var G__15558 = cljs.core.chunk_rest.call(null,seq__15536_15556__$1);
var G__15559 = c__7021__auto___15557;
var G__15560 = cljs.core.count.call(null,c__7021__auto___15557);
var G__15561 = (0);
seq__15536_15544 = G__15558;
chunk__15537_15545 = G__15559;
count__15538_15546 = G__15560;
i__15539_15547 = G__15561;
continue;
} else {
var page_15562 = cljs.core.first.call(null,seq__15536_15556__$1);
var temp__4425__auto___15563__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_15562));
if(cljs.core.truth_(temp__4425__auto___15563__$1)){
var ept_15564 = temp__4425__auto___15563__$1;
routing.remove(ept_15564);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_15562));

var G__15565 = cljs.core.next.call(null,seq__15536_15556__$1);
var G__15566 = null;
var G__15567 = (0);
var G__15568 = (0);
seq__15536_15544 = G__15565;
chunk__15537_15545 = G__15566;
count__15538_15546 = G__15567;
i__15539_15547 = G__15568;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__15540 = cljs.core.seq.call(null,new$);
var chunk__15541 = null;
var count__15542 = (0);
var i__15543 = (0);
while(true){
if((i__15543 < count__15542)){
var page = cljs.core._nth.call(null,chunk__15541,i__15543);
var qx_page_15569 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_15569);

var temp__4425__auto___15570 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___15570)){
var ept_15571 = temp__4425__auto___15570;
routing.onGet(ept_15571,shower,qx_page_15569);
} else {
}

var G__15572 = seq__15540;
var G__15573 = chunk__15541;
var G__15574 = count__15542;
var G__15575 = (i__15543 + (1));
seq__15540 = G__15572;
chunk__15541 = G__15573;
count__15542 = G__15574;
i__15543 = G__15575;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15540);
if(temp__4425__auto__){
var seq__15540__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15540__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__15540__$1);
var G__15576 = cljs.core.chunk_rest.call(null,seq__15540__$1);
var G__15577 = c__7021__auto__;
var G__15578 = cljs.core.count.call(null,c__7021__auto__);
var G__15579 = (0);
seq__15540 = G__15576;
chunk__15541 = G__15577;
count__15542 = G__15578;
i__15543 = G__15579;
continue;
} else {
var page = cljs.core.first.call(null,seq__15540__$1);
var qx_page_15580 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_15580);

var temp__4425__auto___15581__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___15581__$1)){
var ept_15582 = temp__4425__auto___15581__$1;
routing.onGet(ept_15582,shower,qx_page_15580);
} else {
}

var G__15583 = cljs.core.next.call(null,seq__15540__$1);
var G__15584 = null;
var G__15585 = (0);
var G__15586 = (0);
seq__15540 = G__15583;
chunk__15541 = G__15584;
count__15542 = G__15585;
i__15543 = G__15586;
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
var seq__15587_15597 = cljs.core.seq.call(null,old);
var chunk__15588_15598 = null;
var count__15589_15599 = (0);
var i__15590_15600 = (0);
while(true){
if((i__15590_15600 < count__15589_15599)){
var k_15601 = cljs.core._nth.call(null,chunk__15588_15598,i__15590_15600);
var qxk_15602 = tiltontec.qxia.base.qxme.call(null,k_15601);
var label_15603 = tiltontec.model.core.md_get.call(null,k_15601,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_15602);

var G__15604 = seq__15587_15597;
var G__15605 = chunk__15588_15598;
var G__15606 = count__15589_15599;
var G__15607 = (i__15590_15600 + (1));
seq__15587_15597 = G__15604;
chunk__15588_15598 = G__15605;
count__15589_15599 = G__15606;
i__15590_15600 = G__15607;
continue;
} else {
var temp__4425__auto___15608 = cljs.core.seq.call(null,seq__15587_15597);
if(temp__4425__auto___15608){
var seq__15587_15609__$1 = temp__4425__auto___15608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15587_15609__$1)){
var c__7021__auto___15610 = cljs.core.chunk_first.call(null,seq__15587_15609__$1);
var G__15611 = cljs.core.chunk_rest.call(null,seq__15587_15609__$1);
var G__15612 = c__7021__auto___15610;
var G__15613 = cljs.core.count.call(null,c__7021__auto___15610);
var G__15614 = (0);
seq__15587_15597 = G__15611;
chunk__15588_15598 = G__15612;
count__15589_15599 = G__15613;
i__15590_15600 = G__15614;
continue;
} else {
var k_15615 = cljs.core.first.call(null,seq__15587_15609__$1);
var qxk_15616 = tiltontec.qxia.base.qxme.call(null,k_15615);
var label_15617 = tiltontec.model.core.md_get.call(null,k_15615,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_15616);

var G__15618 = cljs.core.next.call(null,seq__15587_15609__$1);
var G__15619 = null;
var G__15620 = (0);
var G__15621 = (0);
seq__15587_15597 = G__15618;
chunk__15588_15598 = G__15619;
count__15589_15599 = G__15620;
i__15590_15600 = G__15621;
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
var seq__15591 = cljs.core.seq.call(null,kids);
var chunk__15592 = null;
var count__15593 = (0);
var i__15594 = (0);
while(true){
if((i__15594 < count__15593)){
var k = cljs.core._nth.call(null,chunk__15592,i__15594);
var G__15595_15622 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__15595_15622) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_15624 = tiltontec.qxia.base.qxme.call(null,k);
var label_15625 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_15624,label_15625);

}

var G__15626 = seq__15591;
var G__15627 = chunk__15592;
var G__15628 = count__15593;
var G__15629 = (i__15594 + (1));
seq__15591 = G__15626;
chunk__15592 = G__15627;
count__15593 = G__15628;
i__15594 = G__15629;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__15591);
if(temp__4425__auto____$1){
var seq__15591__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15591__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__15591__$1);
var G__15630 = cljs.core.chunk_rest.call(null,seq__15591__$1);
var G__15631 = c__7021__auto__;
var G__15632 = cljs.core.count.call(null,c__7021__auto__);
var G__15633 = (0);
seq__15591 = G__15630;
chunk__15592 = G__15631;
count__15593 = G__15632;
i__15594 = G__15633;
continue;
} else {
var k = cljs.core.first.call(null,seq__15591__$1);
var G__15596_15634 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__15596_15634) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_15636 = tiltontec.qxia.base.qxme.call(null,k);
var label_15637 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_15636,label_15637);

}

var G__15638 = cljs.core.next.call(null,seq__15591__$1);
var G__15639 = null;
var G__15640 = (0);
var G__15641 = (0);
seq__15591 = G__15638;
chunk__15592 = G__15639;
count__15593 = G__15640;
i__15594 = G__15641;
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
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"qx-init-single-enqueues-qxme!!!!","qx-init-single-enqueues-qxme!!!!",-866757605));

return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"qx-init-single-does--qxme!!!!","qx-init-single-does--qxme!!!!",-770694528));

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

tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"qx-init-single-gets-qxme!!!!","qx-init-single-gets-qxme!!!!",-168440823));

return cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),(new qx.ui.mobile.form.renderer.Single(qx_form)));
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),(function (page){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"page-deferring","page-deferring",-18481214));

return qx_page.addListener("initialize",((function (qx_page){
return (function (){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"page-fires","page-fires",-379326855));

var temp__4425__auto___15646 = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___15646)){
var kids_15647 = temp__4425__auto___15646;
var content_15648 = qx_page.getContent();
var seq__15642_15649 = cljs.core.seq.call(null,kids_15647);
var chunk__15643_15650 = null;
var count__15644_15651 = (0);
var i__15645_15652 = (0);
while(true){
if((i__15645_15652 < count__15644_15651)){
var k_15653 = cljs.core._nth.call(null,chunk__15643_15650,i__15645_15652);
var qxk_15654 = tiltontec.qxia.base.qxme.call(null,k_15653);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_15653));

content_15648.add(qxk_15654);

var G__15655 = seq__15642_15649;
var G__15656 = chunk__15643_15650;
var G__15657 = count__15644_15651;
var G__15658 = (i__15645_15652 + (1));
seq__15642_15649 = G__15655;
chunk__15643_15650 = G__15656;
count__15644_15651 = G__15657;
i__15645_15652 = G__15658;
continue;
} else {
var temp__4425__auto___15659__$1 = cljs.core.seq.call(null,seq__15642_15649);
if(temp__4425__auto___15659__$1){
var seq__15642_15660__$1 = temp__4425__auto___15659__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15642_15660__$1)){
var c__7021__auto___15661 = cljs.core.chunk_first.call(null,seq__15642_15660__$1);
var G__15662 = cljs.core.chunk_rest.call(null,seq__15642_15660__$1);
var G__15663 = c__7021__auto___15661;
var G__15664 = cljs.core.count.call(null,c__7021__auto___15661);
var G__15665 = (0);
seq__15642_15649 = G__15662;
chunk__15643_15650 = G__15663;
count__15644_15651 = G__15664;
i__15645_15652 = G__15665;
continue;
} else {
var k_15666 = cljs.core.first.call(null,seq__15642_15660__$1);
var qxk_15667 = tiltontec.qxia.base.qxme.call(null,k_15666);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_15666));

content_15648.add(qxk_15667);

var G__15668 = cljs.core.next.call(null,seq__15642_15660__$1);
var G__15669 = null;
var G__15670 = (0);
var G__15671 = (0);
seq__15642_15649 = G__15668;
chunk__15643_15650 = G__15669;
count__15644_15651 = G__15670;
i__15645_15652 = G__15671;
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
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"nav-page-grabs-kids-obs","nav-page-grabs-kids-obs",2045747190));

if(cljs.core.not_EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),page], null),(function (opcode,defer_info){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
var content = qx_page.getContent();
content.removeAll();

var seq__15672 = cljs.core.seq.call(null,newk);
var chunk__15673 = null;
var count__15674 = (0);
var i__15675 = (0);
while(true){
if((i__15675 < count__15674)){
var k = cljs.core._nth.call(null,chunk__15673,i__15675);
var qxk_15676 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_15676);

var G__15677 = seq__15672;
var G__15678 = chunk__15673;
var G__15679 = count__15674;
var G__15680 = (i__15675 + (1));
seq__15672 = G__15677;
chunk__15673 = G__15678;
count__15674 = G__15679;
i__15675 = G__15680;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15672);
if(temp__4425__auto__){
var seq__15672__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15672__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__15672__$1);
var G__15681 = cljs.core.chunk_rest.call(null,seq__15672__$1);
var G__15682 = c__7021__auto__;
var G__15683 = cljs.core.count.call(null,c__7021__auto__);
var G__15684 = (0);
seq__15672 = G__15681;
chunk__15673 = G__15682;
count__15674 = G__15683;
i__15675 = G__15684;
continue;
} else {
var k = cljs.core.first.call(null,seq__15672__$1);
var qxk_15685 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_15685);

var G__15686 = cljs.core.next.call(null,seq__15672__$1);
var G__15687 = null;
var G__15688 = (0);
var G__15689 = (0);
seq__15672 = G__15686;
chunk__15673 = G__15687;
count__15674 = G__15688;
i__15675 = G__15689;
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

var vmgr = form.getValidationManager();
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"validmgr-add","validmgr-add",101529472),tiltontec.cell.base.ia_type.call(null,me));

return vmgr.add(tiltontec.qxia.base.qxme.call(null,me),new_fn);
} else {
return null;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_property_observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword("tiltontec.qxia.types","m.SelectBox","tiltontec.qxia.types/m.SelectBox",-663708114)], null),(function (_,me,new$,___$1,___$2){
if(cljs.core.truth_(new$)){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"3-post-assembly","3-post-assembly",-607469254),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(tiltontec.qxia.base.qxme.call(null,me).getModel())){
} else {
throw (new Error("Assert failed: (.getModel (qxme me))"));
}

return tiltontec.qxia.base.qxme.call(null,me).setSelection(new$);
}));
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","qx.Object","tiltontec.qxia.types/qx.Object",-1295429520)], null),(function (_,me,newk,oldk,___$1){
var G__15690 = (((tiltontec.cell.base.ia_type.call(null,me) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,me).fqn:null);
switch (G__15690) {
case "tiltontec.qxia.types/m.Single":
return null;

break;
case "tiltontec.qxia.types/m.RadioGroupStub":
return null;

break;
default:


return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),((function (G__15690){
return (function (opcode,defer_info){
return tiltontec.qxia.widget.kids_refresh.call(null,me,newk,oldk);
});})(G__15690))
);

}
}));
tiltontec.qxia.widget.kids_refresh = (function tiltontec$qxia$widget$kids_refresh(me,newk,oldk){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
} else {
var lostks_15708 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_15708)){
} else {
var seq__15700_15709 = cljs.core.seq.call(null,lostks_15708);
var chunk__15701_15710 = null;
var count__15702_15711 = (0);
var i__15703_15712 = (0);
while(true){
if((i__15703_15712 < count__15702_15711)){
var kid_15713 = cljs.core._nth.call(null,chunk__15701_15710,i__15703_15712);
var qxk_15714 = tiltontec.qxia.base.qxme.call(null,kid_15713);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_15713,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_15714);
}

qxk_15714.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_15713);

var G__15715 = seq__15700_15709;
var G__15716 = chunk__15701_15710;
var G__15717 = count__15702_15711;
var G__15718 = (i__15703_15712 + (1));
seq__15700_15709 = G__15715;
chunk__15701_15710 = G__15716;
count__15702_15711 = G__15717;
i__15703_15712 = G__15718;
continue;
} else {
var temp__4425__auto___15719 = cljs.core.seq.call(null,seq__15700_15709);
if(temp__4425__auto___15719){
var seq__15700_15720__$1 = temp__4425__auto___15719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15700_15720__$1)){
var c__7021__auto___15721 = cljs.core.chunk_first.call(null,seq__15700_15720__$1);
var G__15722 = cljs.core.chunk_rest.call(null,seq__15700_15720__$1);
var G__15723 = c__7021__auto___15721;
var G__15724 = cljs.core.count.call(null,c__7021__auto___15721);
var G__15725 = (0);
seq__15700_15709 = G__15722;
chunk__15701_15710 = G__15723;
count__15702_15711 = G__15724;
i__15703_15712 = G__15725;
continue;
} else {
var kid_15726 = cljs.core.first.call(null,seq__15700_15720__$1);
var qxk_15727 = tiltontec.qxia.base.qxme.call(null,kid_15726);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_15726,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_15727);
}

qxk_15727.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_15726);

var G__15728 = cljs.core.next.call(null,seq__15700_15720__$1);
var G__15729 = null;
var G__15730 = (0);
var G__15731 = (0);
seq__15700_15709 = G__15728;
chunk__15701_15710 = G__15729;
count__15702_15711 = G__15730;
i__15703_15712 = G__15731;
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
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newks!!!!!!!","compo-newks!!!!!!!",1607733632),tiltontec.cell.base.ia_type.call(null,me),cljs.core.count.call(null,new_ks));

var seq__15704 = cljs.core.seq.call(null,new_ks);
var chunk__15705 = null;
var count__15706 = (0);
var i__15707 = (0);
while(true){
if((i__15707 < count__15706)){
var k = cljs.core._nth.call(null,chunk__15705,i__15707);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__15732 = seq__15704;
var G__15733 = chunk__15705;
var G__15734 = count__15706;
var G__15735 = (i__15707 + (1));
seq__15704 = G__15732;
chunk__15705 = G__15733;
count__15706 = G__15734;
i__15707 = G__15735;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15704);
if(temp__4425__auto__){
var seq__15704__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15704__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__15704__$1);
var G__15736 = cljs.core.chunk_rest.call(null,seq__15704__$1);
var G__15737 = c__7021__auto__;
var G__15738 = cljs.core.count.call(null,c__7021__auto__);
var G__15739 = (0);
seq__15704 = G__15736;
chunk__15705 = G__15737;
count__15706 = G__15738;
i__15707 = G__15739;
continue;
} else {
var k = cljs.core.first.call(null,seq__15704__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__15740 = cljs.core.next.call(null,seq__15704__$1);
var G__15741 = null;
var G__15742 = (0);
var G__15743 = (0);
seq__15704 = G__15740;
chunk__15705 = G__15741;
count__15706 = G__15742;
i__15707 = G__15743;
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
var seq__15744_15752 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__15745_15753 = null;
var count__15746_15754 = (0);
var i__15747_15755 = (0);
while(true){
if((i__15747_15755 < count__15746_15754)){
var n_15756 = cljs.core._nth.call(null,chunk__15745_15753,i__15747_15755);
p.removeSlot(n_15756);

var G__15757 = seq__15744_15752;
var G__15758 = chunk__15745_15753;
var G__15759 = count__15746_15754;
var G__15760 = (i__15747_15755 + (1));
seq__15744_15752 = G__15757;
chunk__15745_15753 = G__15758;
count__15746_15754 = G__15759;
i__15747_15755 = G__15760;
continue;
} else {
var temp__4425__auto___15761 = cljs.core.seq.call(null,seq__15744_15752);
if(temp__4425__auto___15761){
var seq__15744_15762__$1 = temp__4425__auto___15761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15744_15762__$1)){
var c__7021__auto___15763 = cljs.core.chunk_first.call(null,seq__15744_15762__$1);
var G__15764 = cljs.core.chunk_rest.call(null,seq__15744_15762__$1);
var G__15765 = c__7021__auto___15763;
var G__15766 = cljs.core.count.call(null,c__7021__auto___15763);
var G__15767 = (0);
seq__15744_15752 = G__15764;
chunk__15745_15753 = G__15765;
count__15746_15754 = G__15766;
i__15747_15755 = G__15767;
continue;
} else {
var n_15768 = cljs.core.first.call(null,seq__15744_15762__$1);
p.removeSlot(n_15768);

var G__15769 = cljs.core.next.call(null,seq__15744_15762__$1);
var G__15770 = null;
var G__15771 = (0);
var G__15772 = (0);
seq__15744_15752 = G__15769;
chunk__15745_15753 = G__15770;
count__15746_15754 = G__15771;
i__15747_15755 = G__15772;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__15748 = cljs.core.seq.call(null,new$);
var chunk__15749 = null;
var count__15750 = (0);
var i__15751 = (0);
while(true){
if((i__15751 < count__15750)){
var sd = cljs.core._nth.call(null,chunk__15749,i__15751);
var da_15773 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_15773);

var G__15774 = seq__15748;
var G__15775 = chunk__15749;
var G__15776 = count__15750;
var G__15777 = (i__15751 + (1));
seq__15748 = G__15774;
chunk__15749 = G__15775;
count__15750 = G__15776;
i__15751 = G__15777;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15748);
if(temp__4425__auto__){
var seq__15748__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15748__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__15748__$1);
var G__15778 = cljs.core.chunk_rest.call(null,seq__15748__$1);
var G__15779 = c__7021__auto__;
var G__15780 = cljs.core.count.call(null,c__7021__auto__);
var G__15781 = (0);
seq__15748 = G__15778;
chunk__15749 = G__15779;
count__15750 = G__15780;
i__15751 = G__15781;
continue;
} else {
var sd = cljs.core.first.call(null,seq__15748__$1);
var da_15782 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_15782);

var G__15783 = cljs.core.next.call(null,seq__15748__$1);
var G__15784 = null;
var G__15785 = (0);
var G__15786 = (0);
seq__15748 = G__15783;
chunk__15749 = G__15784;
count__15750 = G__15785;
i__15751 = G__15786;
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
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("tiltontec.qxia.types","m.MValue","tiltontec.qxia.types/m.MValue",-994870885)], null),(function (_,me,new$,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
return tiltontec.qxia.base.qxme.call(null,me).setValue(new$);
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawing","drawing",1181749528),new cljs.core.Keyword("tiltontec.qxia.types","m.Canvas","tiltontec.qxia.types/m.Canvas",-1210794783)], null),(function (_,me,new_fn,___$1,___$2){
if(cljs.core.truth_(new_fn)){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
return new_fn.call(null,me);
}));
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword("tiltontec.qxia.types","m.Widget","tiltontec.qxia.types/m.Widget",2103465403)], null),(function (_,me,new_anchor,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(new_anchor)){
return tiltontec.qxia.base.qxme.call(null,me).setAnchor(tiltontec.qxia.base.qxme.call(null,new_anchor));
} else {
return null;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("tiltontec.qxia.types","TextField","tiltontec.qxia.types/TextField",953963089)], null),(function (_,me,new$,___$1,___$2){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-make-qx","post-make-qx",-332979639),me], null),(function (opcode,defer_info){
return tiltontec.qxia.base.qxme.call(null,me).setValue(new$);
}));
}));
