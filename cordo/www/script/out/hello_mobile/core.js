// Compiled by ClojureScript 1.9.36 {}
goog.provide('hello_mobile.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.model.core');
goog.require('tiltontec.util.core');
goog.require('tiltontec.qxia.core');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.cell.core');
goog.require('hello_mobile.dialog_demos');
goog.require('tiltontec.qxia.base');
goog.require('hello_mobile.login_form');
goog.require('tiltontec.cell.integrity');
goog.require('clojure.string');
goog.require('tiltontec.qxia.macros');
hello_mobile.core.this_app = cljs.core.atom.call(null,null);




hello_mobile.core.appinit = (function hello_mobile$core$appinit(this$,pager,shower){
return cljs.core.reset_BANG_.call(null,hello_mobile.core.this_app,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","Mobile","tiltontec.qxia.types/Mobile",-143490810),new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),this$,new cljs.core.Keyword(null,"pager","pager",1850229940),pager,new cljs.core.Keyword(null,"shower","shower",-1731894586),shower,new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"make-login","make-login",2012461006,null)),cljs.core.list(new cljs.core.Symbol(null,"make-overview","make-overview",-827027252,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_17176 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto__ = hello_mobile.core.make_login.call(null);
return cljs.core._conj.call(null,(function (){var x__7044__auto____$1 = hello_mobile.core.make_overview.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$1);
})(),x__7044__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_17176;
}}))));
});
goog.exportSymbol('hello_mobile.core.appinit', hello_mobile.core.appinit);
hello_mobile.core.make_login = (function hello_mobile$core$make_login(){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/",new cljs.core.Keyword(null,"title","title",636505583),"Login",new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"make-login-form","make-login-form",1069109923,null)),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),"Login",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"login","login",1695749046,null),cljs.core.list(new cljs.core.Symbol(null,"qxme","qxme",352016329,null),cljs.core.list(new cljs.core.Symbol(null,"fm!","fm!",-1177678085,null),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Symbol(null,"me","me",1501524834,null))),new cljs.core.Symbol(null,"vmgr","vmgr",-1333727675,null),cljs.core.list(new cljs.core.Symbol(null,".getValidationManager",".getValidationManager",862968873,null),new cljs.core.Symbol(null,"login","login",1695749046,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),new cljs.core.Symbol(null,"vmgr","vmgr",-1333727675,null)),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ok","ok",-1686650533,null),cljs.core.list(new cljs.core.Symbol(null,".validate",".validate",1492446340,null),new cljs.core.Symbol(null,"login","login",1695749046,null))], null),cljs.core.list(new cljs.core.Symbol(null,"routing-get","routing-get",877560304,null),"/overview"))))], null)),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.types","m.Row","tiltontec.qxia.types/m.Row",1369168505),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-me","row-me",-1623025996),new cljs.core.Keyword(null,"label","label",1718410804),"Voila",new cljs.core.Keyword(null,"css-class","css-class",-919455334),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rg","rg",-1798044346,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Keyword(null,"fav-css","fav-css",1193141481),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"css","css",-1519390606,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"rg","rg",-1798044346,null),new cljs.core.Keyword(null,"selection","selection",975998651))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"css","css",-1519390606,null))], null)))),new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"Hi Mom",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-me-label","row-me-label",642861331)))),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),cljs.core.list(new cljs.core.Symbol(null,"make-picker-test","make-picker-test",929225279,null)),cljs.core.list(new cljs.core.Symbol(null,"carousel","carousel",1521582614,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"carousel","carousel",-118948913),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"carousel"], null),cljs.core.list(new cljs.core.Symbol(null,"make-dialog-demos","make-dialog-demos",1643099356,null)),cljs.core.list(new cljs.core.Symbol(null,"group","group",-2071839637,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showBorder","showBorder",1740360318),true], null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"<h4>Tell me a story.</>"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.types","m.TextArea","tiltontec.qxia.types/m.TextArea",738759823),new cljs.core.Keyword(null,"label","label",1718410804),"Tell me a story.",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your story here.",new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),(300),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"c-in","c-in",517820292,null),null),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["changeValue",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"me","me",1501524834,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),cljs.core.list(new cljs.core.Symbol(null,".getData",".getData",661342228,null),new cljs.core.Symbol(null,"evt","evt",388964660,null)),new cljs.core.Symbol(null,"jd","jd",-1112503864,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"data","data",1407862150,null))], null),cljs.core.list(new cljs.core.Symbol(null,"md-reset!","md-reset!",1664918226,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"jd","jd",-1112503864,null))))], null))),cljs.core.list(new cljs.core.Symbol(null,"group","group",-2071839637,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showBorder","showBorder",1740360318),true], null),cljs.core.list(new cljs.core.Symbol(null,"collapsible","collapsible",-36525456,null),"Click for a surprise",cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"Surprise."))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_17216 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto__ = hello_mobile.login_form.make_login_form.call(null);
return cljs.core._conj.call(null,(function (){var x__7044__auto____$1 = tiltontec.qxia.core.button.call(null,"Login",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",((function (x__7044__auto__,_STAR_par_STAR_17216,me,cache){
return (function (){
var login = tiltontec.qxia.base.qxme.call(null,tiltontec.model.core.fm_BANG_.call(null,new cljs.core.Keyword(null,"login","login",55217519),me));
var vmgr = login.getValidationManager();
if(cljs.core.truth_(vmgr)){
} else {
throw (new Error("Assert failed: vmgr"));
}

var temp__4425__auto__ = login.validate();
if(cljs.core.truth_(temp__4425__auto__)){
var ok = temp__4425__auto__;
return tiltontec.qxia.core.routing_get.call(null,"/overview");
} else {
return null;
}
});})(x__7044__auto__,_STAR_par_STAR_17216,me,cache))
], null));
return cljs.core._conj.call(null,(function (){var x__7044__auto____$2 = tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.Row","tiltontec.qxia.types/m.Row",1369168505),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-me","row-me",-1623025996),new cljs.core.Keyword(null,"label","label",1718410804),"Voila",new cljs.core.Keyword(null,"css-class","css-class",-919455334),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rg","rg",-1798044346,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Keyword(null,"fav-css","fav-css",1193141481),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"css","css",-1519390606,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"rg","rg",-1798044346,null),new cljs.core.Keyword(null,"selection","selection",975998651))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"css","css",-1519390606,null))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_17216,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var rg = tiltontec.model.core.fget.call(null,new cljs.core.Keyword(null,"fav-css","fav-css",1193141481),me__$1);
var temp__4425__auto__ = tiltontec.model.core.md_get.call(null,rg,new cljs.core.Keyword(null,"selection","selection",975998651));
if(cljs.core.truth_(temp__4425__auto__)){
var css = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,css)], null);
} else {
return null;
}
});})(x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_17216,me,cache))
),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"Hi Mom",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-me-label","row-me-label",642861331)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_17216,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_par_STAR_17218 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto____$2 = tiltontec.qxia.core.label.call(null,"Hi Mom",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-me-label","row-me-label",642861331));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$2);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_17218;
}});})(x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_17216,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7044__auto____$3 = (function (){var x__7044__auto____$3 = hello_mobile.core.make_picker_test.call(null);
return cljs.core._conj.call(null,(function (){var x__7044__auto____$4 = tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.Carousel","tiltontec.qxia.types/m.Carousel",-1672753516),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"carousel","carousel",-118948913),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"carousel",new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"make-dialog-demos","make-dialog-demos",1643099356,null)),cljs.core.list(new cljs.core.Symbol(null,"group","group",-2071839637,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showBorder","showBorder",1740360318),true], null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"<h4>Tell me a story.</>"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.types","m.TextArea","tiltontec.qxia.types/m.TextArea",738759823),new cljs.core.Keyword(null,"label","label",1718410804),"Tell me a story.",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your story here.",new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),(300),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"c-in","c-in",517820292,null),null),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["changeValue",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"me","me",1501524834,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),cljs.core.list(new cljs.core.Symbol(null,".getData",".getData",661342228,null),new cljs.core.Symbol(null,"evt","evt",388964660,null)),new cljs.core.Symbol(null,"jd","jd",-1112503864,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"data","data",1407862150,null))], null),cljs.core.list(new cljs.core.Symbol(null,"md-reset!","md-reset!",1664918226,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"jd","jd",-1112503864,null))))], null))),cljs.core.list(new cljs.core.Symbol(null,"group","group",-2071839637,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showBorder","showBorder",1740360318),true], null),cljs.core.list(new cljs.core.Symbol(null,"collapsible","collapsible",-36525456,null),"Click for a surprise",cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"Surprise."))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7044__auto____$3,x__7044__auto____$2,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_17216,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_par_STAR_17246 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto____$4 = hello_mobile.dialog_demos.make_dialog_demos.call(null);
return cljs.core._conj.call(null,(function (){var x__7044__auto____$5 = tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.Group","tiltontec.qxia.types/m.Group",1395438636),new cljs.core.Keyword(null,"showBorder","showBorder",1740360318),true,new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"<h4>Tell me a story.</>"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.types","m.TextArea","tiltontec.qxia.types/m.TextArea",738759823),new cljs.core.Keyword(null,"label","label",1718410804),"Tell me a story.",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your story here.",new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),(300),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"c-in","c-in",517820292,null),null),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["changeValue",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"me","me",1501524834,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),cljs.core.list(new cljs.core.Symbol(null,".getData",".getData",661342228,null),new cljs.core.Symbol(null,"evt","evt",388964660,null)),new cljs.core.Symbol(null,"jd","jd",-1112503864,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"data","data",1407862150,null))], null),cljs.core.list(new cljs.core.Symbol(null,"md-reset!","md-reset!",1664918226,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"jd","jd",-1112503864,null))))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7044__auto____$4,_STAR_par_STAR_17246,me__$1,cache__$1,x__7044__auto____$3,x__7044__auto____$2,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_17216,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
var _STAR_par_STAR_17248 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto____$5 = tiltontec.qxia.core.label.call(null,"<h4>Tell me a story.</>");
return cljs.core._conj.call(null,(function (){var x__7044__auto____$6 = tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.TextArea","tiltontec.qxia.types/m.TextArea",738759823),new cljs.core.Keyword(null,"label","label",1718410804),"Tell me a story.",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your story here.",new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),(300),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.core.c_in.call(null,null),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["changeValue",((function (x__7044__auto____$5,_STAR_par_STAR_17248,me__$2,cache__$2,x__7044__auto____$4,_STAR_par_STAR_17246,me__$1,cache__$1,x__7044__auto____$3,x__7044__auto____$2,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_17216,me,cache){
return (function (evt,me__$3){
var data = evt.getData();
var jd = cljs.core.js__GT_clj.call(null,data);
return tiltontec.model.core.md_reset_BANG_.call(null,me__$3,new cljs.core.Keyword(null,"value","value",305978217),jd);
});})(x__7044__auto____$5,_STAR_par_STAR_17248,me__$2,cache__$2,x__7044__auto____$4,_STAR_par_STAR_17246,me__$1,cache__$1,x__7044__auto____$3,x__7044__auto____$2,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_17216,me,cache))
], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$6);
})(),x__7044__auto____$5);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_17248;
}});})(x__7044__auto____$4,_STAR_par_STAR_17246,me__$1,cache__$1,x__7044__auto____$3,x__7044__auto____$2,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_17216,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7044__auto____$6 = tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.Group","tiltontec.qxia.types/m.Group",1395438636),new cljs.core.Keyword(null,"showBorder","showBorder",1740360318),true,new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"collapsible","collapsible",-36525456,null),"Click for a surprise",cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"Surprise.")))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7044__auto____$5,x__7044__auto____$4,_STAR_par_STAR_17246,me__$1,cache__$1,x__7044__auto____$3,x__7044__auto____$2,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_17216,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
var _STAR_par_STAR_17252 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto____$6 = tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),new cljs.core.Keyword(null,"qx-class","qx-class",701821141),qx.ui.mobile.container.Collapsible,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Click for a surprise"], null),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"Surprise."))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_17252,me__$2,cache__$2,x__7044__auto____$5,x__7044__auto____$4,_STAR_par_STAR_17246,me__$1,cache__$1,x__7044__auto____$3,x__7044__auto____$2,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_17216,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
var _STAR_par_STAR_17254 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto____$6 = tiltontec.qxia.core.label.call(null,"Surprise.");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$6);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_17254;
}});})(_STAR_par_STAR_17252,me__$2,cache__$2,x__7044__auto____$5,x__7044__auto____$4,_STAR_par_STAR_17246,me__$1,cache__$1,x__7044__auto____$3,x__7044__auto____$2,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_17216,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$6);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_17252;
}});})(x__7044__auto____$5,x__7044__auto____$4,_STAR_par_STAR_17246,me__$1,cache__$1,x__7044__auto____$3,x__7044__auto____$2,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_17216,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$6);
})(),x__7044__auto____$5);
})(),x__7044__auto____$4);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_17246;
}});})(x__7044__auto____$3,x__7044__auto____$2,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_17216,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$4);
})(),x__7044__auto____$3);
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$3);
})(),x__7044__auto____$2);
})(),x__7044__auto____$1);
})(),x__7044__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_17216;
}})));
});
hello_mobile.core.make_picker_test = (function hello_mobile$core$make_picker_test(){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),new cljs.core.Keyword(null,"layout","layout",-2120940921),(new qx.ui.mobile.layout.VBox()),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"picker-vbox","picker-vbox",1597167133),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"myp","myp",-299765765,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Keyword(null,"my-pick","my-pick",1133502620),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Latest pick ",cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"myp","myp",-299765765,null),new cljs.core.Keyword(null,"value","value",305978217)))))),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.types","m.Picker","tiltontec.qxia.types/m.Picker",-1343372926),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"my-pick","my-pick",1133502620),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"visibleItems","visibleItems",1968268852),(3),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"c-in","c-in",517820292,null),"booya"),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["changeSelection",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"me","me",1501524834,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),cljs.core.list(new cljs.core.Symbol(null,".getData",".getData",661342228,null),new cljs.core.Symbol(null,"evt","evt",388964660,null)),new cljs.core.Symbol(null,"jd","jd",-1112503864,null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"data","data",1407862150,null))], null),cljs.core.list(new cljs.core.Symbol(null,"md-reset!","md-reset!",1664918226,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"jd","jd",-1112503864,null),"item"),"title"))))], null),new cljs.core.Keyword(null,"slot-data","slot-data",1146367809),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Windows Phone",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"R.I.P.",new cljs.core.Keyword(null,"image","image",-58725096),"identica/mmedia/games.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"iOS",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"Version 7.1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Android"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Tablet"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Smartphone"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Phablet"], null)], null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_17256 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto__ = tiltontec.qxia.core.label.call(null,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"myp","myp",-299765765,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Keyword(null,"my-pick","my-pick",1133502620),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Latest pick ",cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"myp","myp",-299765765,null),new cljs.core.Keyword(null,"value","value",305978217))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_17256,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var myp = tiltontec.model.core.fget.call(null,new cljs.core.Keyword(null,"my-pick","my-pick",1133502620),me__$1);
return [cljs.core.str("Latest pick "),cljs.core.str(tiltontec.model.core.md_get.call(null,myp,new cljs.core.Keyword(null,"value","value",305978217)))].join('');
});})(_STAR_par_STAR_17256,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7044__auto____$1 = tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.Picker","tiltontec.qxia.types/m.Picker",-1343372926),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"my-pick","my-pick",1133502620),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"visibleItems","visibleItems",1968268852),(3),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.core.c_in.call(null,"booya"),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["changeSelection",((function (x__7044__auto__,_STAR_par_STAR_17256,me,cache){
return (function (evt,me__$1){
var data = evt.getData();
var jd = cljs.core.js__GT_clj.call(null,data);
return tiltontec.model.core.md_reset_BANG_.call(null,me__$1,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.get.call(null,jd,"item"),"title"));
});})(x__7044__auto__,_STAR_par_STAR_17256,me,cache))
], null),new cljs.core.Keyword(null,"slot-data","slot-data",1146367809),(function (){var x__7044__auto____$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Windows Phone",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"R.I.P.",new cljs.core.Keyword(null,"image","image",-58725096),"identica/mmedia/games.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"iOS",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"Version 7.1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Android"], null)], null);
return cljs.core._conj.call(null,(function (){var x__7044__auto____$2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Tablet"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Smartphone"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Phablet"], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$2);
})(),x__7044__auto____$1);
})());
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$1);
})(),x__7044__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_17256;
}})));
});
hello_mobile.core.make_overview = (function hello_mobile$core$make_overview(){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/overview",new cljs.core.Keyword(null,"title","title",636505583),"Overview",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"oview","oview",559018138),new cljs.core.Keyword(null,"showButton","showButton",-1745795920),true,new cljs.core.Keyword(null,"buttonText","buttonText",282861744),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"greet?","greet?",1363328291)),"Who's there?","Knock-Knock")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"greet?","greet?",1363328291)))){
return "Who's there?";
} else {
return "Knock-Knock";
}
})),new cljs.core.Keyword(null,"buttonIcon","buttonIcon",1253122060),"identica/mmedia/games.png",new cljs.core.Keyword(null,"showBackButton","showBackButton",632746224),true,new cljs.core.Keyword(null,"backButtonText","backButtonText",2126160537),"Back",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["action",(function (event,me){
return tiltontec.model.core.md_reset_BANG_.call(null,me,new cljs.core.Keyword(null,"greet?","greet?",1363328291),cljs.core.not.call(null,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"greet?","greet?",1363328291))));
})], null),new cljs.core.Keyword(null,"greet?","greet?",1363328291),tiltontec.cell.core.c_in.call(null,false),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"hbox","hbox",1014079882,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"stuff","stuff",-2051563643)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"qx-par","qx-par",29810498,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"greet?","greet?",1363328291)),cljs.core.list(new cljs.core.Symbol(null,"vbox","vbox",1147743762,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool"], null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"Hello"),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"World")),cljs.core.list(new cljs.core.Symbol(null,"image","image",1581806431,null),"identica/mmedia/earth-from-moon.jpg",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"warning"))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_17264 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto__ = tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),new cljs.core.Keyword(null,"layout","layout",-2120940921),(new qx.ui.mobile.layout.HBox()),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"stuff","stuff",-2051563643),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"qx-par","qx-par",29810498,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"greet?","greet?",1363328291)),cljs.core.list(new cljs.core.Symbol(null,"vbox","vbox",1147743762,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool"], null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"Hello"),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"World")),cljs.core.list(new cljs.core.Symbol(null,"image","image",1581806431,null),"identica/mmedia/earth-from-moon.jpg",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"warning")))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_17264,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_par_STAR_17268 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto__ = (cljs.core.truth_(tiltontec.model.core.md_get.call(null,tiltontec.model.core.qx_par.call(null,me__$1),new cljs.core.Keyword(null,"greet?","greet?",1363328291)))?tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),new cljs.core.Keyword(null,"layout","layout",-2120940921),(new qx.ui.mobile.layout.VBox()),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool",new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"Hello"),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"World"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_17268,me__$1,cache__$1,_STAR_par_STAR_17264,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
var _STAR_par_STAR_17270 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto__ = tiltontec.qxia.core.label.call(null,"Hello");
return cljs.core._conj.call(null,(function (){var x__7044__auto____$1 = tiltontec.qxia.core.label.call(null,"World");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$1);
})(),x__7044__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_17270;
}});})(_STAR_par_STAR_17268,me__$1,cache__$1,_STAR_par_STAR_17264,me,cache))
)):tiltontec.qxia.core.image.call(null,"identica/mmedia/earth-from-moon.jpg",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"warning"));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_17268;
}});})(_STAR_par_STAR_17264,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_17264;
}})));
});
hello_mobile.core.make_css_test = (function hello_mobile$core$make_css_test(){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),new cljs.core.Keyword(null,"layout","layout",-2120940921),(new qx.ui.mobile.layout.HBox()),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"Hello cool222",new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool"),cljs.core.list(new cljs.core.Symbol(null,"vbox","vbox",1147743762,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"world 2!",new cljs.core.Keyword(null,"flex","flex",-1425124628),(3),new cljs.core.Keyword(null,"css-class","css-class",-919455334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cool","coolfont"], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"world 3!",new cljs.core.Keyword(null,"flex","flex",-1425124628),(3),new cljs.core.Keyword(null,"css-class","css-class",-919455334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cool","coolfont"], null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_17274 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto__ = tiltontec.qxia.core.label.call(null,"Hello cool222",new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool");
return cljs.core._conj.call(null,(function (){var x__7044__auto____$1 = tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),new cljs.core.Keyword(null,"layout","layout",-2120940921),(new qx.ui.mobile.layout.VBox()),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"world 2!",new cljs.core.Keyword(null,"flex","flex",-1425124628),(3),new cljs.core.Keyword(null,"css-class","css-class",-919455334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cool","coolfont"], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"world 3!",new cljs.core.Keyword(null,"flex","flex",-1425124628),(3),new cljs.core.Keyword(null,"css-class","css-class",-919455334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cool","coolfont"], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7044__auto__,_STAR_par_STAR_17274,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_par_STAR_17276 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto____$1 = tiltontec.qxia.core.label.call(null,"world 2!",new cljs.core.Keyword(null,"flex","flex",-1425124628),(3),new cljs.core.Keyword(null,"css-class","css-class",-919455334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cool","coolfont"], null));
return cljs.core._conj.call(null,(function (){var x__7044__auto____$2 = tiltontec.qxia.core.label.call(null,"world 3!",new cljs.core.Keyword(null,"flex","flex",-1425124628),(3),new cljs.core.Keyword(null,"css-class","css-class",-919455334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cool","coolfont"], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$2);
})(),x__7044__auto____$1);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_17276;
}});})(x__7044__auto__,_STAR_par_STAR_17274,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$1);
})(),x__7044__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_17274;
}})));
});
