// Compiled by ClojureScript 1.7.48 {}
goog.provide('hello_mobile.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.qxia.core');
goog.require('tiltontec.model.base');
goog.require('tiltontec.model.family');
hello_mobile.core.this_app = cljs.core.atom.call(null,null);
hello_mobile.core.appinit = (function hello_mobile$core$appinit(this$,pager,shower){
cljs.core.reset_BANG_.call(null,hello_mobile.core.this_app,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.core","Mobile","tiltontec.qxia.core/Mobile",1622948346),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.core","NavigationPage","tiltontec.qxia.core/NavigationPage",733013597),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/",new cljs.core.Keyword(null,"title","title",636505583),"Bingo!",new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.core","Button","tiltontec.qxia.core/Button",476775989),new cljs.core.Keyword(null,"label","label",1718410804),"Go!",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"this","this",1028897902,null),cljs.core.list(new cljs.core.Symbol(null,"getRouting","getRouting",-985136811,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"gogo tap!"),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),cljs.core.list(new cljs.core.Symbol(null,"executeGet","executeGet",-2044457639,null),"/overview"))))], null)))),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.core","NavigationPage","tiltontec.qxia.core/NavigationPage",733013597),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/overview",new cljs.core.Keyword(null,"title","title",636505583),"Overview",new cljs.core.Keyword(null,"showBackButton","showBackButton",632746224),true,new cljs.core.Keyword(null,"backButtonText","backButtonText",2126160537),"Back Up",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["action",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"this","this",1028897902,null),cljs.core.list(new cljs.core.Symbol(null,"getRouting","getRouting",-985136811,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"gogo action!")))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_8827 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.core","NavigationPage","tiltontec.qxia.core/NavigationPage",733013597),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/overview",new cljs.core.Keyword(null,"title","title",636505583),"Overview",new cljs.core.Keyword(null,"showBackButton","showBackButton",632746224),true,new cljs.core.Keyword(null,"backButtonText","backButtonText",2126160537),"Back Up",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["action",((function (_STAR_par_STAR_8827,me,cache){
return (function (){
var rtg = this$.getRouting();
return cljs.core.println.call(null,"gogo action!");
});})(_STAR_par_STAR_8827,me,cache))
], null))),tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.core","NavigationPage","tiltontec.qxia.core/NavigationPage",733013597),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/",new cljs.core.Keyword(null,"title","title",636505583),"Bingo!",new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.core","Button","tiltontec.qxia.core/Button",476775989),new cljs.core.Keyword(null,"label","label",1718410804),"Go!",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"this","this",1028897902,null),cljs.core.list(new cljs.core.Symbol(null,"getRouting","getRouting",-985136811,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"gogo tap!"),cljs.core.list(new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),cljs.core.list(new cljs.core.Symbol(null,"executeGet","executeGet",-2044457639,null),"/overview"))))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_8827,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_par_STAR_8828 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me__$1;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.core","Button","tiltontec.qxia.core/Button",476775989),new cljs.core.Keyword(null,"label","label",1718410804),"Go!",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",((function (_STAR_par_STAR_8828,me__$1,cache__$1,_STAR_par_STAR_8827,me,cache){
return (function (){
var rtg = this$.getRouting();
cljs.core.println.call(null,"gogo tap!");

return rtg.executeGet("/overview");
});})(_STAR_par_STAR_8828,me__$1,cache__$1,_STAR_par_STAR_8827,me,cache))
], null)))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_8828;
}});})(_STAR_par_STAR_8827,me,cache))
)))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_8827;
}}))));

var routing = this$.getRouting();
var seq__8829 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,cljs.core.deref.call(null,hello_mobile.core.this_app),new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__8830 = null;
var count__8831 = (0);
var i__8832 = (0);
while(true){
if((i__8832 < count__8831)){
var page = cljs.core._nth.call(null,chunk__8830,i__8832);
var qx_page_8833 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
pager.addDetail([qx_page_8833]);

var temp__4425__auto___8834 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___8834)){
var ept_8835 = temp__4425__auto___8834;
routing.onGet(ept_8835,shower,qx_page_8833);
} else {
}

var G__8836 = seq__8829;
var G__8837 = chunk__8830;
var G__8838 = count__8831;
var G__8839 = (i__8832 + (1));
seq__8829 = G__8836;
chunk__8830 = G__8837;
count__8831 = G__8838;
i__8832 = G__8839;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8829);
if(temp__4425__auto__){
var seq__8829__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8829__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__8829__$1);
var G__8840 = cljs.core.chunk_rest.call(null,seq__8829__$1);
var G__8841 = c__5338__auto__;
var G__8842 = cljs.core.count.call(null,c__5338__auto__);
var G__8843 = (0);
seq__8829 = G__8840;
chunk__8830 = G__8841;
count__8831 = G__8842;
i__8832 = G__8843;
continue;
} else {
var page = cljs.core.first.call(null,seq__8829__$1);
var qx_page_8844 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
pager.addDetail([qx_page_8844]);

var temp__4425__auto___8845__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___8845__$1)){
var ept_8846 = temp__4425__auto___8845__$1;
routing.onGet(ept_8846,shower,qx_page_8844);
} else {
}

var G__8847 = cljs.core.next.call(null,seq__8829__$1);
var G__8848 = null;
var G__8849 = (0);
var G__8850 = (0);
seq__8829 = G__8847;
chunk__8830 = G__8848;
count__8831 = G__8849;
i__8832 = G__8850;
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
