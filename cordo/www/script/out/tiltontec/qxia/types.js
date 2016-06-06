// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.types');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
tiltontec.qxia.types.qx_type_tree = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","qx.Object","tiltontec.qxia.types/qx.Object",-1295429520),new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225),new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724),new cljs.core.Keyword("tiltontec.qxia.types","m.DialogManager","tiltontec.qxia.types/m.DialogManager",1877638749),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","Application","tiltontec.qxia.types/Application",1827091049),new cljs.core.Keyword("tiltontec.qxia.types","Mobile","tiltontec.qxia.types/Mobile",-143490810)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","ml.Abstract","tiltontec.qxia.types/ml.Abstract",-80525119),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","ml.AbstractBox","tiltontec.qxia.types/ml.AbstractBox",-448932332),new cljs.core.Keyword("tiltontec.qxia.types","ml.HBox","tiltontec.qxia.types/ml.HBox",-1665012713),new cljs.core.Keyword("tiltontec.qxia.types","ml.VBox","tiltontec.qxia.types/ml.VBox",-1184375499)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","mWidget","tiltontec.qxia.types/mWidget",1692474345),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","m.Atom","tiltontec.qxia.types/m.Atom",973901835),new cljs.core.Keyword("tiltontec.qxia.types","m.Image","tiltontec.qxia.types/m.Image",336928926),new cljs.core.Keyword("tiltontec.qxia.types","m.Label","tiltontec.qxia.types/m.Label",908319540),new cljs.core.Keyword("tiltontec.qxia.types","m.Button","tiltontec.qxia.types/m.Button",-668586230)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","m.Input","tiltontec.qxia.types/m.Input",-509810846),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","m.TextField","tiltontec.qxia.types/m.TextField",1587442644),new cljs.core.Keyword("tiltontec.qxia.types","m.PasswordField","tiltontec.qxia.types/m.PasswordField",-1705460348)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),new cljs.core.Keyword("tiltontec.qxia.types","m.Carousel","tiltontec.qxia.types/m.Carousel",-1672753516),new cljs.core.Keyword("tiltontec.qxia.types","m.Drawer","tiltontec.qxia.types/m.Drawer",-1699090239),new cljs.core.Keyword("tiltontec.qxia.types","m.Collapsible","tiltontec.qxia.types/m.Collapsible",-561923066),new cljs.core.Keyword("tiltontec.qxia.types","m.Picker","tiltontec.qxia.types/m.Picker",-1343372926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","m.Page","tiltontec.qxia.types/m.Page",978557493),new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)], null)], null)], null)], null);
tiltontec.qxia.types.ensure_vec = (function tiltontec$qxia$types$ensure_vec(x){
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
tiltontec.qxia.types.derive_tree = (function tiltontec$qxia$types$derive_tree(super$,tree){
var vec__23259 = tiltontec.qxia.types.ensure_vec.call(null,tree);
var class$ = cljs.core.nth.call(null,vec__23259,(0),null);
var subs = cljs.core.nthnext.call(null,vec__23259,(1));
if(cljs.core.truth_(super$)){
tiltontec.cell.base.ia_types = cljs.core.derive.call(null,tiltontec.cell.base.ia_types,class$,super$);
} else {
}

var seq__23260 = cljs.core.seq.call(null,subs);
var chunk__23261 = null;
var count__23262 = (0);
var i__23263 = (0);
while(true){
if((i__23263 < count__23262)){
var sub = cljs.core._nth.call(null,chunk__23261,i__23263);
tiltontec$qxia$types$derive_tree.call(null,class$,sub);

var G__23264 = seq__23260;
var G__23265 = chunk__23261;
var G__23266 = count__23262;
var G__23267 = (i__23263 + (1));
seq__23260 = G__23264;
chunk__23261 = G__23265;
count__23262 = G__23266;
i__23263 = G__23267;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23260);
if(temp__4425__auto__){
var seq__23260__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23260__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__23260__$1);
var G__23268 = cljs.core.chunk_rest.call(null,seq__23260__$1);
var G__23269 = c__5338__auto__;
var G__23270 = cljs.core.count.call(null,c__5338__auto__);
var G__23271 = (0);
seq__23260 = G__23268;
chunk__23261 = G__23269;
count__23262 = G__23270;
i__23263 = G__23271;
continue;
} else {
var sub = cljs.core.first.call(null,seq__23260__$1);
tiltontec$qxia$types$derive_tree.call(null,class$,sub);

var G__23272 = cljs.core.next.call(null,seq__23260__$1);
var G__23273 = null;
var G__23274 = (0);
var G__23275 = (0);
seq__23260 = G__23272;
chunk__23261 = G__23273;
count__23262 = G__23274;
i__23263 = G__23275;
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
var seq__23276_23280 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.qxia.types","m.Carousel","tiltontec.qxia.types/m.Carousel",-1672753516)], null));
var chunk__23277_23281 = null;
var count__23278_23282 = (0);
var i__23279_23283 = (0);
while(true){
if((i__23279_23283 < count__23278_23282)){
var ctype_23284 = cljs.core._nth.call(null,chunk__23277_23281,i__23279_23283);
tiltontec.cell.base.ia_types = cljs.core.derive.call(null,tiltontec.cell.base.ia_types,ctype_23284,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163));

var G__23285 = seq__23276_23280;
var G__23286 = chunk__23277_23281;
var G__23287 = count__23278_23282;
var G__23288 = (i__23279_23283 + (1));
seq__23276_23280 = G__23285;
chunk__23277_23281 = G__23286;
count__23278_23282 = G__23287;
i__23279_23283 = G__23288;
continue;
} else {
var temp__4425__auto___23289 = cljs.core.seq.call(null,seq__23276_23280);
if(temp__4425__auto___23289){
var seq__23276_23290__$1 = temp__4425__auto___23289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23276_23290__$1)){
var c__5338__auto___23291 = cljs.core.chunk_first.call(null,seq__23276_23290__$1);
var G__23292 = cljs.core.chunk_rest.call(null,seq__23276_23290__$1);
var G__23293 = c__5338__auto___23291;
var G__23294 = cljs.core.count.call(null,c__5338__auto___23291);
var G__23295 = (0);
seq__23276_23280 = G__23292;
chunk__23277_23281 = G__23293;
count__23278_23282 = G__23294;
i__23279_23283 = G__23295;
continue;
} else {
var ctype_23296 = cljs.core.first.call(null,seq__23276_23290__$1);
tiltontec.cell.base.ia_types = cljs.core.derive.call(null,tiltontec.cell.base.ia_types,ctype_23296,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163));

var G__23297 = cljs.core.next.call(null,seq__23276_23290__$1);
var G__23298 = null;
var G__23299 = (0);
var G__23300 = (0);
seq__23276_23280 = G__23297;
chunk__23277_23281 = G__23298;
count__23278_23282 = G__23299;
i__23279_23283 = G__23300;
continue;
}
} else {
}
}
break;
}
