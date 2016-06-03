// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.types');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
tiltontec.qxia.types.qx_type_tree = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","Object","tiltontec.qxia.types/Object",1819242809),new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225),new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724),new cljs.core.Keyword("tiltontec.qxia.types","m.DialogManager","tiltontec.qxia.types/m.DialogManager",1877638749),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","Application","tiltontec.qxia.types/Application",1827091049),new cljs.core.Keyword("tiltontec.qxia.types","Mobile","tiltontec.qxia.types/Mobile",-143490810)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","ml.Abstract","tiltontec.qxia.types/ml.Abstract",-80525119),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","ml.AbstractBox","tiltontec.qxia.types/ml.AbstractBox",-448932332),new cljs.core.Keyword("tiltontec.qxia.types","ml.HBox","tiltontec.qxia.types/ml.HBox",-1665012713),new cljs.core.Keyword("tiltontec.qxia.types","ml.VBox","tiltontec.qxia.types/ml.VBox",-1184375499)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","mWidget","tiltontec.qxia.types/mWidget",1692474345),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","m.Atom","tiltontec.qxia.types/m.Atom",973901835),new cljs.core.Keyword("tiltontec.qxia.types","m.Image","tiltontec.qxia.types/m.Image",336928926),new cljs.core.Keyword("tiltontec.qxia.types","m.Label","tiltontec.qxia.types/m.Label",908319540),new cljs.core.Keyword("tiltontec.qxia.types","m.Button","tiltontec.qxia.types/m.Button",-668586230)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","m.Input","tiltontec.qxia.types/m.Input",-509810846),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","m.TextField","tiltontec.qxia.types/m.TextField",1587442644),new cljs.core.Keyword("tiltontec.qxia.types","m.PasswordField","tiltontec.qxia.types/m.PasswordField",-1705460348)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),new cljs.core.Keyword("tiltontec.qxia.types","m.Carousel","tiltontec.qxia.types/m.Carousel",-1672753516),new cljs.core.Keyword("tiltontec.qxia.types","m.Drawer","tiltontec.qxia.types/m.Drawer",-1699090239),new cljs.core.Keyword("tiltontec.qxia.types","m.Collapsible","tiltontec.qxia.types/m.Collapsible",-561923066),new cljs.core.Keyword("tiltontec.qxia.types","m.Picker","tiltontec.qxia.types/m.Picker",-1343372926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","m.Page","tiltontec.qxia.types/m.Page",978557493),new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)], null)], null)], null)], null);
tiltontec.qxia.types.ensure_vec = (function tiltontec$qxia$types$ensure_vec(x){
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
tiltontec.qxia.types.derive_tree = (function tiltontec$qxia$types$derive_tree(super$,tree){
var vec__9562 = tiltontec.qxia.types.ensure_vec.call(null,tree);
var class$ = cljs.core.nth.call(null,vec__9562,(0),null);
var subs = cljs.core.nthnext.call(null,vec__9562,(1));
if(cljs.core.truth_(super$)){
tiltontec.cell.base.ia_types = cljs.core.derive.call(null,tiltontec.cell.base.ia_types,class$,super$);
} else {
}

var seq__9563 = cljs.core.seq.call(null,subs);
var chunk__9564 = null;
var count__9565 = (0);
var i__9566 = (0);
while(true){
if((i__9566 < count__9565)){
var sub = cljs.core._nth.call(null,chunk__9564,i__9566);
tiltontec$qxia$types$derive_tree.call(null,class$,sub);

var G__9567 = seq__9563;
var G__9568 = chunk__9564;
var G__9569 = count__9565;
var G__9570 = (i__9566 + (1));
seq__9563 = G__9567;
chunk__9564 = G__9568;
count__9565 = G__9569;
i__9566 = G__9570;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9563);
if(temp__4425__auto__){
var seq__9563__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9563__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__9563__$1);
var G__9571 = cljs.core.chunk_rest.call(null,seq__9563__$1);
var G__9572 = c__5338__auto__;
var G__9573 = cljs.core.count.call(null,c__5338__auto__);
var G__9574 = (0);
seq__9563 = G__9571;
chunk__9564 = G__9572;
count__9565 = G__9573;
i__9566 = G__9574;
continue;
} else {
var sub = cljs.core.first.call(null,seq__9563__$1);
tiltontec$qxia$types$derive_tree.call(null,class$,sub);

var G__9575 = cljs.core.next.call(null,seq__9563__$1);
var G__9576 = null;
var G__9577 = (0);
var G__9578 = (0);
seq__9563 = G__9575;
chunk__9564 = G__9576;
count__9565 = G__9577;
i__9566 = G__9578;
continue;
}
} else {
return null;
}
}
break;
}
});
tiltontec.qxia.types.derive_tree.call(null,null,tiltontec.qxia.types.qx_type_tree);
var seq__9579_9583 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","m.Carousel","tiltontec.qxia.types/m.Carousel",-1672753516)], null));
var chunk__9580_9584 = null;
var count__9581_9585 = (0);
var i__9582_9586 = (0);
while(true){
if((i__9582_9586 < count__9581_9585)){
var ctype_9587 = cljs.core._nth.call(null,chunk__9580_9584,i__9582_9586);
tiltontec.cell.base.ia_types = cljs.core.derive.call(null,tiltontec.cell.base.ia_types,ctype_9587,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163));

var G__9588 = seq__9579_9583;
var G__9589 = chunk__9580_9584;
var G__9590 = count__9581_9585;
var G__9591 = (i__9582_9586 + (1));
seq__9579_9583 = G__9588;
chunk__9580_9584 = G__9589;
count__9581_9585 = G__9590;
i__9582_9586 = G__9591;
continue;
} else {
var temp__4425__auto___9592 = cljs.core.seq.call(null,seq__9579_9583);
if(temp__4425__auto___9592){
var seq__9579_9593__$1 = temp__4425__auto___9592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9579_9593__$1)){
var c__5338__auto___9594 = cljs.core.chunk_first.call(null,seq__9579_9593__$1);
var G__9595 = cljs.core.chunk_rest.call(null,seq__9579_9593__$1);
var G__9596 = c__5338__auto___9594;
var G__9597 = cljs.core.count.call(null,c__5338__auto___9594);
var G__9598 = (0);
seq__9579_9583 = G__9595;
chunk__9580_9584 = G__9596;
count__9581_9585 = G__9597;
i__9582_9586 = G__9598;
continue;
} else {
var ctype_9599 = cljs.core.first.call(null,seq__9579_9593__$1);
tiltontec.cell.base.ia_types = cljs.core.derive.call(null,tiltontec.cell.base.ia_types,ctype_9599,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163));

var G__9600 = cljs.core.next.call(null,seq__9579_9593__$1);
var G__9601 = null;
var G__9602 = (0);
var G__9603 = (0);
seq__9579_9583 = G__9600;
chunk__9580_9584 = G__9601;
count__9581_9585 = G__9602;
i__9582_9586 = G__9603;
continue;
}
} else {
}
}
break;
}
