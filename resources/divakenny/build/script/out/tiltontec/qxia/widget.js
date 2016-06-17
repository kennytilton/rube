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
var seq__15537_15545 = cljs.core.seq.call(null,old);
var chunk__15538_15546 = null;
var count__15539_15547 = (0);
var i__15540_15548 = (0);
while(true){
if((i__15540_15548 < count__15539_15547)){
var page_15549 = cljs.core._nth.call(null,chunk__15538_15546,i__15540_15548);
var temp__4425__auto___15550 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_15549));
if(cljs.core.truth_(temp__4425__auto___15550)){
var ept_15551 = temp__4425__auto___15550;
routing.remove(ept_15551);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_15549));

var G__15552 = seq__15537_15545;
var G__15553 = chunk__15538_15546;
var G__15554 = count__15539_15547;
var G__15555 = (i__15540_15548 + (1));
seq__15537_15545 = G__15552;
chunk__15538_15546 = G__15553;
count__15539_15547 = G__15554;
i__15540_15548 = G__15555;
continue;
} else {
var temp__4425__auto___15556 = cljs.core.seq.call(null,seq__15537_15545);
if(temp__4425__auto___15556){
var seq__15537_15557__$1 = temp__4425__auto___15556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15537_15557__$1)){
var c__7021__auto___15558 = cljs.core.chunk_first.call(null,seq__15537_15557__$1);
var G__15559 = cljs.core.chunk_rest.call(null,seq__15537_15557__$1);
var G__15560 = c__7021__auto___15558;
var G__15561 = cljs.core.count.call(null,c__7021__auto___15558);
var G__15562 = (0);
seq__15537_15545 = G__15559;
chunk__15538_15546 = G__15560;
count__15539_15547 = G__15561;
i__15540_15548 = G__15562;
continue;
} else {
var page_15563 = cljs.core.first.call(null,seq__15537_15557__$1);
var temp__4425__auto___15564__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_15563));
if(cljs.core.truth_(temp__4425__auto___15564__$1)){
var ept_15565 = temp__4425__auto___15564__$1;
routing.remove(ept_15565);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_15563));

var G__15566 = cljs.core.next.call(null,seq__15537_15557__$1);
var G__15567 = null;
var G__15568 = (0);
var G__15569 = (0);
seq__15537_15545 = G__15566;
chunk__15538_15546 = G__15567;
count__15539_15547 = G__15568;
i__15540_15548 = G__15569;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__15541 = cljs.core.seq.call(null,new$);
var chunk__15542 = null;
var count__15543 = (0);
var i__15544 = (0);
while(true){
if((i__15544 < count__15543)){
var page = cljs.core._nth.call(null,chunk__15542,i__15544);
var qx_page_15570 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_15570);

var temp__4425__auto___15571 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___15571)){
var ept_15572 = temp__4425__auto___15571;
routing.onGet(ept_15572,shower,qx_page_15570);
} else {
}

var G__15573 = seq__15541;
var G__15574 = chunk__15542;
var G__15575 = count__15543;
var G__15576 = (i__15544 + (1));
seq__15541 = G__15573;
chunk__15542 = G__15574;
count__15543 = G__15575;
i__15544 = G__15576;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15541);
if(temp__4425__auto__){
var seq__15541__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15541__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__15541__$1);
var G__15577 = cljs.core.chunk_rest.call(null,seq__15541__$1);
var G__15578 = c__7021__auto__;
var G__15579 = cljs.core.count.call(null,c__7021__auto__);
var G__15580 = (0);
seq__15541 = G__15577;
chunk__15542 = G__15578;
count__15543 = G__15579;
i__15544 = G__15580;
continue;
} else {
var page = cljs.core.first.call(null,seq__15541__$1);
var qx_page_15581 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_15581);

var temp__4425__auto___15582__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___15582__$1)){
var ept_15583 = temp__4425__auto___15582__$1;
routing.onGet(ept_15583,shower,qx_page_15581);
} else {
}

var G__15584 = cljs.core.next.call(null,seq__15541__$1);
var G__15585 = null;
var G__15586 = (0);
var G__15587 = (0);
seq__15541 = G__15584;
chunk__15542 = G__15585;
count__15543 = G__15586;
i__15544 = G__15587;
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
var seq__15588_15598 = cljs.core.seq.call(null,old);
var chunk__15589_15599 = null;
var count__15590_15600 = (0);
var i__15591_15601 = (0);
while(true){
if((i__15591_15601 < count__15590_15600)){
var k_15602 = cljs.core._nth.call(null,chunk__15589_15599,i__15591_15601);
var qxk_15603 = tiltontec.qxia.base.qxme.call(null,k_15602);
var label_15604 = tiltontec.model.core.md_get.call(null,k_15602,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_15603);

var G__15605 = seq__15588_15598;
var G__15606 = chunk__15589_15599;
var G__15607 = count__15590_15600;
var G__15608 = (i__15591_15601 + (1));
seq__15588_15598 = G__15605;
chunk__15589_15599 = G__15606;
count__15590_15600 = G__15607;
i__15591_15601 = G__15608;
continue;
} else {
var temp__4425__auto___15609 = cljs.core.seq.call(null,seq__15588_15598);
if(temp__4425__auto___15609){
var seq__15588_15610__$1 = temp__4425__auto___15609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15588_15610__$1)){
var c__7021__auto___15611 = cljs.core.chunk_first.call(null,seq__15588_15610__$1);
var G__15612 = cljs.core.chunk_rest.call(null,seq__15588_15610__$1);
var G__15613 = c__7021__auto___15611;
var G__15614 = cljs.core.count.call(null,c__7021__auto___15611);
var G__15615 = (0);
seq__15588_15598 = G__15612;
chunk__15589_15599 = G__15613;
count__15590_15600 = G__15614;
i__15591_15601 = G__15615;
continue;
} else {
var k_15616 = cljs.core.first.call(null,seq__15588_15610__$1);
var qxk_15617 = tiltontec.qxia.base.qxme.call(null,k_15616);
var label_15618 = tiltontec.model.core.md_get.call(null,k_15616,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_15617);

var G__15619 = cljs.core.next.call(null,seq__15588_15610__$1);
var G__15620 = null;
var G__15621 = (0);
var G__15622 = (0);
seq__15588_15598 = G__15619;
chunk__15589_15599 = G__15620;
count__15590_15600 = G__15621;
i__15591_15601 = G__15622;
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
var seq__15592 = cljs.core.seq.call(null,kids);
var chunk__15593 = null;
var count__15594 = (0);
var i__15595 = (0);
while(true){
if((i__15595 < count__15594)){
var k = cljs.core._nth.call(null,chunk__15593,i__15595);
var G__15596_15623 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__15596_15623) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_15625 = tiltontec.qxia.base.qxme.call(null,k);
var label_15626 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_15625,label_15626);

}

var G__15627 = seq__15592;
var G__15628 = chunk__15593;
var G__15629 = count__15594;
var G__15630 = (i__15595 + (1));
seq__15592 = G__15627;
chunk__15593 = G__15628;
count__15594 = G__15629;
i__15595 = G__15630;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__15592);
if(temp__4425__auto____$1){
var seq__15592__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15592__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__15592__$1);
var G__15631 = cljs.core.chunk_rest.call(null,seq__15592__$1);
var G__15632 = c__7021__auto__;
var G__15633 = cljs.core.count.call(null,c__7021__auto__);
var G__15634 = (0);
seq__15592 = G__15631;
chunk__15593 = G__15632;
count__15594 = G__15633;
i__15595 = G__15634;
continue;
} else {
var k = cljs.core.first.call(null,seq__15592__$1);
var G__15597_15635 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__15597_15635) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_15637 = tiltontec.qxia.base.qxme.call(null,k);
var label_15638 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_15637,label_15638);

}

var G__15639 = cljs.core.next.call(null,seq__15592__$1);
var G__15640 = null;
var G__15641 = (0);
var G__15642 = (0);
seq__15592 = G__15639;
chunk__15593 = G__15640;
count__15594 = G__15641;
i__15595 = G__15642;
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

var temp__4425__auto___15647 = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___15647)){
var kids_15648 = temp__4425__auto___15647;
var content_15649 = qx_page.getContent();
var seq__15643_15650 = cljs.core.seq.call(null,kids_15648);
var chunk__15644_15651 = null;
var count__15645_15652 = (0);
var i__15646_15653 = (0);
while(true){
if((i__15646_15653 < count__15645_15652)){
var k_15654 = cljs.core._nth.call(null,chunk__15644_15651,i__15646_15653);
var qxk_15655 = tiltontec.qxia.base.qxme.call(null,k_15654);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_15654));

content_15649.add(qxk_15655);

var G__15656 = seq__15643_15650;
var G__15657 = chunk__15644_15651;
var G__15658 = count__15645_15652;
var G__15659 = (i__15646_15653 + (1));
seq__15643_15650 = G__15656;
chunk__15644_15651 = G__15657;
count__15645_15652 = G__15658;
i__15646_15653 = G__15659;
continue;
} else {
var temp__4425__auto___15660__$1 = cljs.core.seq.call(null,seq__15643_15650);
if(temp__4425__auto___15660__$1){
var seq__15643_15661__$1 = temp__4425__auto___15660__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15643_15661__$1)){
var c__7021__auto___15662 = cljs.core.chunk_first.call(null,seq__15643_15661__$1);
var G__15663 = cljs.core.chunk_rest.call(null,seq__15643_15661__$1);
var G__15664 = c__7021__auto___15662;
var G__15665 = cljs.core.count.call(null,c__7021__auto___15662);
var G__15666 = (0);
seq__15643_15650 = G__15663;
chunk__15644_15651 = G__15664;
count__15645_15652 = G__15665;
i__15646_15653 = G__15666;
continue;
} else {
var k_15667 = cljs.core.first.call(null,seq__15643_15661__$1);
var qxk_15668 = tiltontec.qxia.base.qxme.call(null,k_15667);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_15667));

content_15649.add(qxk_15668);

var G__15669 = cljs.core.next.call(null,seq__15643_15661__$1);
var G__15670 = null;
var G__15671 = (0);
var G__15672 = (0);
seq__15643_15650 = G__15669;
chunk__15644_15651 = G__15670;
count__15645_15652 = G__15671;
i__15646_15653 = G__15672;
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

var seq__15673 = cljs.core.seq.call(null,newk);
var chunk__15674 = null;
var count__15675 = (0);
var i__15676 = (0);
while(true){
if((i__15676 < count__15675)){
var k = cljs.core._nth.call(null,chunk__15674,i__15676);
var qxk_15677 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_15677);

var G__15678 = seq__15673;
var G__15679 = chunk__15674;
var G__15680 = count__15675;
var G__15681 = (i__15676 + (1));
seq__15673 = G__15678;
chunk__15674 = G__15679;
count__15675 = G__15680;
i__15676 = G__15681;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15673);
if(temp__4425__auto__){
var seq__15673__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15673__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__15673__$1);
var G__15682 = cljs.core.chunk_rest.call(null,seq__15673__$1);
var G__15683 = c__7021__auto__;
var G__15684 = cljs.core.count.call(null,c__7021__auto__);
var G__15685 = (0);
seq__15673 = G__15682;
chunk__15674 = G__15683;
count__15675 = G__15684;
i__15676 = G__15685;
continue;
} else {
var k = cljs.core.first.call(null,seq__15673__$1);
var qxk_15686 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_15686);

var G__15687 = cljs.core.next.call(null,seq__15673__$1);
var G__15688 = null;
var G__15689 = (0);
var G__15690 = (0);
seq__15673 = G__15687;
chunk__15674 = G__15688;
count__15675 = G__15689;
i__15676 = G__15690;
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
var G__15691 = (((tiltontec.cell.base.ia_type.call(null,me) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,me).fqn:null);
switch (G__15691) {
case "tiltontec.qxia.types/m.Single":
return null;

break;
case "tiltontec.qxia.types/m.RadioGroupStub":
return null;

break;
default:


return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),((function (G__15691){
return (function (opcode,defer_info){
return tiltontec.qxia.widget.kids_refresh.call(null,me,newk,oldk);
});})(G__15691))
);

}
}));
tiltontec.qxia.widget.kids_refresh = (function tiltontec$qxia$widget$kids_refresh(me,newk,oldk){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
} else {
var lostks_15709 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_15709)){
} else {
var seq__15701_15710 = cljs.core.seq.call(null,lostks_15709);
var chunk__15702_15711 = null;
var count__15703_15712 = (0);
var i__15704_15713 = (0);
while(true){
if((i__15704_15713 < count__15703_15712)){
var kid_15714 = cljs.core._nth.call(null,chunk__15702_15711,i__15704_15713);
var qxk_15715 = tiltontec.qxia.base.qxme.call(null,kid_15714);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_15714,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_15715);
}

qxk_15715.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_15714);

var G__15716 = seq__15701_15710;
var G__15717 = chunk__15702_15711;
var G__15718 = count__15703_15712;
var G__15719 = (i__15704_15713 + (1));
seq__15701_15710 = G__15716;
chunk__15702_15711 = G__15717;
count__15703_15712 = G__15718;
i__15704_15713 = G__15719;
continue;
} else {
var temp__4425__auto___15720 = cljs.core.seq.call(null,seq__15701_15710);
if(temp__4425__auto___15720){
var seq__15701_15721__$1 = temp__4425__auto___15720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15701_15721__$1)){
var c__7021__auto___15722 = cljs.core.chunk_first.call(null,seq__15701_15721__$1);
var G__15723 = cljs.core.chunk_rest.call(null,seq__15701_15721__$1);
var G__15724 = c__7021__auto___15722;
var G__15725 = cljs.core.count.call(null,c__7021__auto___15722);
var G__15726 = (0);
seq__15701_15710 = G__15723;
chunk__15702_15711 = G__15724;
count__15703_15712 = G__15725;
i__15704_15713 = G__15726;
continue;
} else {
var kid_15727 = cljs.core.first.call(null,seq__15701_15721__$1);
var qxk_15728 = tiltontec.qxia.base.qxme.call(null,kid_15727);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_15727,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_15728);
}

qxk_15728.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_15727);

var G__15729 = cljs.core.next.call(null,seq__15701_15721__$1);
var G__15730 = null;
var G__15731 = (0);
var G__15732 = (0);
seq__15701_15710 = G__15729;
chunk__15702_15711 = G__15730;
count__15703_15712 = G__15731;
i__15704_15713 = G__15732;
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

var seq__15705 = cljs.core.seq.call(null,new_ks);
var chunk__15706 = null;
var count__15707 = (0);
var i__15708 = (0);
while(true){
if((i__15708 < count__15707)){
var k = cljs.core._nth.call(null,chunk__15706,i__15708);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__15733 = seq__15705;
var G__15734 = chunk__15706;
var G__15735 = count__15707;
var G__15736 = (i__15708 + (1));
seq__15705 = G__15733;
chunk__15706 = G__15734;
count__15707 = G__15735;
i__15708 = G__15736;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15705);
if(temp__4425__auto__){
var seq__15705__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15705__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__15705__$1);
var G__15737 = cljs.core.chunk_rest.call(null,seq__15705__$1);
var G__15738 = c__7021__auto__;
var G__15739 = cljs.core.count.call(null,c__7021__auto__);
var G__15740 = (0);
seq__15705 = G__15737;
chunk__15706 = G__15738;
count__15707 = G__15739;
i__15708 = G__15740;
continue;
} else {
var k = cljs.core.first.call(null,seq__15705__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__15741 = cljs.core.next.call(null,seq__15705__$1);
var G__15742 = null;
var G__15743 = (0);
var G__15744 = (0);
seq__15705 = G__15741;
chunk__15706 = G__15742;
count__15707 = G__15743;
i__15708 = G__15744;
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
var seq__15745_15753 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__15746_15754 = null;
var count__15747_15755 = (0);
var i__15748_15756 = (0);
while(true){
if((i__15748_15756 < count__15747_15755)){
var n_15757 = cljs.core._nth.call(null,chunk__15746_15754,i__15748_15756);
p.removeSlot(n_15757);

var G__15758 = seq__15745_15753;
var G__15759 = chunk__15746_15754;
var G__15760 = count__15747_15755;
var G__15761 = (i__15748_15756 + (1));
seq__15745_15753 = G__15758;
chunk__15746_15754 = G__15759;
count__15747_15755 = G__15760;
i__15748_15756 = G__15761;
continue;
} else {
var temp__4425__auto___15762 = cljs.core.seq.call(null,seq__15745_15753);
if(temp__4425__auto___15762){
var seq__15745_15763__$1 = temp__4425__auto___15762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15745_15763__$1)){
var c__7021__auto___15764 = cljs.core.chunk_first.call(null,seq__15745_15763__$1);
var G__15765 = cljs.core.chunk_rest.call(null,seq__15745_15763__$1);
var G__15766 = c__7021__auto___15764;
var G__15767 = cljs.core.count.call(null,c__7021__auto___15764);
var G__15768 = (0);
seq__15745_15753 = G__15765;
chunk__15746_15754 = G__15766;
count__15747_15755 = G__15767;
i__15748_15756 = G__15768;
continue;
} else {
var n_15769 = cljs.core.first.call(null,seq__15745_15763__$1);
p.removeSlot(n_15769);

var G__15770 = cljs.core.next.call(null,seq__15745_15763__$1);
var G__15771 = null;
var G__15772 = (0);
var G__15773 = (0);
seq__15745_15753 = G__15770;
chunk__15746_15754 = G__15771;
count__15747_15755 = G__15772;
i__15748_15756 = G__15773;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__15749 = cljs.core.seq.call(null,new$);
var chunk__15750 = null;
var count__15751 = (0);
var i__15752 = (0);
while(true){
if((i__15752 < count__15751)){
var sd = cljs.core._nth.call(null,chunk__15750,i__15752);
var da_15774 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_15774);

var G__15775 = seq__15749;
var G__15776 = chunk__15750;
var G__15777 = count__15751;
var G__15778 = (i__15752 + (1));
seq__15749 = G__15775;
chunk__15750 = G__15776;
count__15751 = G__15777;
i__15752 = G__15778;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15749);
if(temp__4425__auto__){
var seq__15749__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15749__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__15749__$1);
var G__15779 = cljs.core.chunk_rest.call(null,seq__15749__$1);
var G__15780 = c__7021__auto__;
var G__15781 = cljs.core.count.call(null,c__7021__auto__);
var G__15782 = (0);
seq__15749 = G__15779;
chunk__15750 = G__15780;
count__15751 = G__15781;
i__15752 = G__15782;
continue;
} else {
var sd = cljs.core.first.call(null,seq__15749__$1);
var da_15783 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_15783);

var G__15784 = cljs.core.next.call(null,seq__15749__$1);
var G__15785 = null;
var G__15786 = (0);
var G__15787 = (0);
seq__15749 = G__15784;
chunk__15750 = G__15785;
count__15751 = G__15786;
i__15752 = G__15787;
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
