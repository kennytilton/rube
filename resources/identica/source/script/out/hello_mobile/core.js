// Compiled by ClojureScript 1.7.48 {}
goog.provide('hello_mobile.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.qxia.base');
goog.require('tiltontec.qxia.core');
goog.require('tiltontec.model.base');
goog.require('tiltontec.model.family');
hello_mobile.core.this_app = cljs.core.atom.call(null,null);
hello_mobile.core.appinit = (function hello_mobile$core$appinit(this$,pager,shower){
cljs.core.reset_BANG_.call(null,hello_mobile.core.this_app,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.Mobile","tiltontec.qxia.base/m.Mobile",659048827),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/",new cljs.core.Keyword(null,"title","title",636505583),"Bingo!",new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Button","tiltontec.qxia.base/m.Button",1808800880),new cljs.core.Keyword(null,"label","label",1718410804),"Go-21!",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),cljs.core.list(new cljs.core.Symbol(null,".getRouting",".getRouting",762678758,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"gogo tap!"),cljs.core.list(new cljs.core.Symbol(null,".executeGet",".executeGet",-1616874601,null),new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),"/overview")))], null)))),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/overview",new cljs.core.Keyword(null,"title","title",636505583),"Overview",new cljs.core.Keyword(null,"showBackButton","showBackButton",632746224),true,new cljs.core.Keyword(null,"backButtonText","backButtonText",2126160537),"Back Up",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["action",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),cljs.core.list(new cljs.core.Symbol(null,".getRouting",".getRouting",762678758,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"gogo action!")))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_23491 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/overview",new cljs.core.Keyword(null,"title","title",636505583),"Overview",new cljs.core.Keyword(null,"showBackButton","showBackButton",632746224),true,new cljs.core.Keyword(null,"backButtonText","backButtonText",2126160537),"Back Up",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["action",((function (_STAR_par_STAR_23491,me,cache){
return (function (){
var rtg = this$.getRouting();
return cljs.core.println.call(null,"gogo action!");
});})(_STAR_par_STAR_23491,me,cache))
], null))),tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/",new cljs.core.Keyword(null,"title","title",636505583),"Bingo!",new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Button","tiltontec.qxia.base/m.Button",1808800880),new cljs.core.Keyword(null,"label","label",1718410804),"Go-21!",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),cljs.core.list(new cljs.core.Symbol(null,".getRouting",".getRouting",762678758,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"gogo tap!"),cljs.core.list(new cljs.core.Symbol(null,".executeGet",".executeGet",-1616874601,null),new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),"/overview")))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23491,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_par_STAR_23492 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me__$1;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.Button","tiltontec.qxia.base/m.Button",1808800880),new cljs.core.Keyword(null,"label","label",1718410804),"Go-21!",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",((function (_STAR_par_STAR_23492,me__$1,cache__$1,_STAR_par_STAR_23491,me,cache){
return (function (){
var rtg = this$.getRouting();
cljs.core.println.call(null,"gogo tap!");

return rtg.executeGet("/overview");
});})(_STAR_par_STAR_23492,me__$1,cache__$1,_STAR_par_STAR_23491,me,cache))
], null)))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_23492;
}});})(_STAR_par_STAR_23491,me,cache))
)))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_23491;
}}))));

var routing = this$.getRouting();
var seq__23493 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,cljs.core.deref.call(null,hello_mobile.core.this_app),new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__23494 = null;
var count__23495 = (0);
var i__23496 = (0);
while(true){
if((i__23496 < count__23495)){
var page = cljs.core._nth.call(null,chunk__23494,i__23496);
var qx_page_23497 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
pager.addDetail([qx_page_23497]);

var temp__4425__auto___23498 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___23498)){
var ept_23499 = temp__4425__auto___23498;
routing.onGet(ept_23499,shower,qx_page_23497);
} else {
}

var G__23500 = seq__23493;
var G__23501 = chunk__23494;
var G__23502 = count__23495;
var G__23503 = (i__23496 + (1));
seq__23493 = G__23500;
chunk__23494 = G__23501;
count__23495 = G__23502;
i__23496 = G__23503;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23493);
if(temp__4425__auto__){
var seq__23493__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23493__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__23493__$1);
var G__23504 = cljs.core.chunk_rest.call(null,seq__23493__$1);
var G__23505 = c__5338__auto__;
var G__23506 = cljs.core.count.call(null,c__5338__auto__);
var G__23507 = (0);
seq__23493 = G__23504;
chunk__23494 = G__23505;
count__23495 = G__23506;
i__23496 = G__23507;
continue;
} else {
var page = cljs.core.first.call(null,seq__23493__$1);
var qx_page_23508 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
pager.addDetail([qx_page_23508]);

var temp__4425__auto___23509__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___23509__$1)){
var ept_23510 = temp__4425__auto___23509__$1;
routing.onGet(ept_23510,shower,qx_page_23508);
} else {
}

var G__23511 = cljs.core.next.call(null,seq__23493__$1);
var G__23512 = null;
var G__23513 = (0);
var G__23514 = (0);
seq__23493 = G__23511;
chunk__23494 = G__23512;
count__23495 = G__23513;
i__23496 = G__23514;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('hello_mobile.core.appinit', hello_mobile.core.appinit);
