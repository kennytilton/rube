// Compiled by ClojureScript 1.7.48 {}
goog.provide('hello_mobile.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.qxia.base');
goog.require('tiltontec.qxia.core');
goog.require('tiltontec.model.base');
goog.require('tiltontec.model.core');
goog.require('tiltontec.model.family');
hello_mobile.core.this_app = cljs.core.atom.call(null,null);
hello_mobile.core.appinit = (function hello_mobile$core$appinit(this$,pager,shower){
return cljs.core.reset_BANG_.call(null,hello_mobile.core.this_app,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","Mobile","tiltontec.qxia.base/Mobile",1622995536),new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),this$,new cljs.core.Keyword(null,"pager","pager",1850229940),pager,new cljs.core.Keyword(null,"shower","shower",-1731894586),shower,new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/",new cljs.core.Keyword(null,"title","title",636505583),"Login!",new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),new cljs.core.Keyword(null,"layout","layout",-2120940921),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","qx.ui.mobile.layout.VBox","js/qx.ui.mobile.layout.VBox",-1527506437,null)),new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool",new cljs.core.Keyword(null,"value","value",305978217),"Hello,"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"value","value",305978217),"world."))),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Single","tiltontec.qxia.base/m.Single",1330847058),new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"u-name","u-name",1737043515),new cljs.core.Keyword(null,"label","label",1718410804),"Username",new cljs.core.Keyword(null,"value","value",305978217),"KennY",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username or e-mail",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Please share your user name"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.PasswordField","tiltontec.qxia.base/m.PasswordField",-559230758),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"value","value",305978217),"Zoommmmm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your password",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Password is required"))))),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Symbol("js","qx.ui.mobile.form.Button","js/qx.ui.mobile.form.Button",-546855986,null),new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Loginzilla!!!","identica/mmedia/games.png"], null),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"login","login",1695749046,null),cljs.core.list(new cljs.core.Symbol(null,"fm!","fm!",-1177678085,null),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,".validate",".validate",1492446340,null),cljs.core.list(new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"login","login",1695749046,null)))),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),cljs.core.list(new cljs.core.Symbol(null,".getRouting",".getRouting",762678758,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], null),cljs.core.list(new cljs.core.Symbol(null,".executeGet",".executeGet",-1616874601,null),new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),"/overview")))))], null)))),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/overview",new cljs.core.Keyword(null,"title","title",636505583),"Overview",new cljs.core.Keyword(null,"showButton","showButton",-1745795920),true,new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Knock-Knock",new cljs.core.Keyword(null,"buttonIcon","buttonIcon",1253122060),"identica/mmedia/games.png",new cljs.core.Keyword(null,"showBackButton","showBackButton",632746224),true,new cljs.core.Keyword(null,"backButtonText","backButtonText",2126160537),"Back Up (click broken but back key OK)",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["action",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null),new cljs.core.Symbol(null,"me","me",1501524834,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),cljs.core.list(new cljs.core.Symbol(null,".getRouting",".getRouting",762678758,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], null),cljs.core.list(new cljs.core.Symbol(null,"md-reset!","md-reset!",1664918226,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"greet?","greet?",1363328291),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"greet?","greet?",1363328291))))))], null),new cljs.core.Keyword(null,"greet?","greet?",1363328291),cljs.core.list(new cljs.core.Symbol(null,"c-in","c-in",517820292,null),false),new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"greet?","greet?",1363328291)),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),new cljs.core.Keyword(null,"layout","layout",-2120940921),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","qx.ui.mobile.layout.HBox","js/qx.ui.mobile.layout.HBox",499740199,null)),new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),new cljs.core.Keyword(null,"layout","layout",-2120940921),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","qx.ui.mobile.layout.VBox","js/qx.ui.mobile.layout.VBox",-1527506437,null)),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool",new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"value","value",305978217),"Hello,"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"value","value",305978217),"world."))),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Image","tiltontec.qxia.base/m.Image",2135364668),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"warning",new cljs.core.Keyword(null,"source","source",-433931539),"identica/mmedia/earth-from-moon.jpg")))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_27917 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/overview",new cljs.core.Keyword(null,"title","title",636505583),"Overview",new cljs.core.Keyword(null,"showButton","showButton",-1745795920),true,new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Knock-Knock",new cljs.core.Keyword(null,"buttonIcon","buttonIcon",1253122060),"identica/mmedia/games.png",new cljs.core.Keyword(null,"showBackButton","showBackButton",632746224),true,new cljs.core.Keyword(null,"backButtonText","backButtonText",2126160537),"Back Up (click broken but back key OK)",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["action",((function (_STAR_par_STAR_27917,me,cache){
return (function (event,me__$1){
var rtg = this$.getRouting();
return tiltontec.model.core.md_reset_BANG_.call(null,me__$1,new cljs.core.Keyword(null,"greet?","greet?",1363328291),cljs.core.not.call(null,tiltontec.model.base.md_get.call(null,me__$1,new cljs.core.Keyword(null,"greet?","greet?",1363328291))));
});})(_STAR_par_STAR_27917,me,cache))
], null),new cljs.core.Keyword(null,"greet?","greet?",1363328291),tiltontec.cell.core.c_in.call(null,false),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"greet?","greet?",1363328291)),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),new cljs.core.Keyword(null,"layout","layout",-2120940921),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","qx.ui.mobile.layout.HBox","js/qx.ui.mobile.layout.HBox",499740199,null)),new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),new cljs.core.Keyword(null,"layout","layout",-2120940921),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","qx.ui.mobile.layout.VBox","js/qx.ui.mobile.layout.VBox",-1527506437,null)),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool",new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"value","value",305978217),"Hello,"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"value","value",305978217),"world."))),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Image","tiltontec.qxia.base/m.Image",2135364668),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"warning",new cljs.core.Keyword(null,"source","source",-433931539),"identica/mmedia/earth-from-moon.jpg")))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_27917,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_par_STAR_27918 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me__$1;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_(tiltontec.model.base.md_get.call(null,me__$1,new cljs.core.Keyword(null,"greet?","greet?",1363328291)))?tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),new cljs.core.Keyword(null,"layout","layout",-2120940921),(new qx.ui.mobile.layout.HBox()),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),new cljs.core.Keyword(null,"layout","layout",-2120940921),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","qx.ui.mobile.layout.VBox","js/qx.ui.mobile.layout.VBox",-1527506437,null)),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool",new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"value","value",305978217),"Hello,"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"value","value",305978217),"world."))),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Image","tiltontec.qxia.base/m.Image",2135364668),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"warning",new cljs.core.Keyword(null,"source","source",-433931539),"identica/mmedia/earth-from-moon.jpg"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_27918,me__$1,cache__$1,_STAR_par_STAR_27917,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
var _STAR_par_STAR_27919 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me__$2;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.Image","tiltontec.qxia.base/m.Image",2135364668),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"warning",new cljs.core.Keyword(null,"source","source",-433931539),"identica/mmedia/earth-from-moon.jpg")),tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),new cljs.core.Keyword(null,"layout","layout",-2120940921),(new qx.ui.mobile.layout.VBox()),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool",new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"value","value",305978217),"Hello,"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"value","value",305978217),"world."))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_27919,me__$2,cache__$2,_STAR_par_STAR_27918,me__$1,cache__$1,_STAR_par_STAR_27917,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
var _STAR_par_STAR_27920 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me__$3;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"value","value",305978217),"world.")),tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"value","value",305978217),"Hello,"))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_27920;
}});})(_STAR_par_STAR_27919,me__$2,cache__$2,_STAR_par_STAR_27918,me__$1,cache__$1,_STAR_par_STAR_27917,me,cache))
)))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_27919;
}});})(_STAR_par_STAR_27918,me__$1,cache__$1,_STAR_par_STAR_27917,me,cache))
)):null))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_27918;
}});})(_STAR_par_STAR_27917,me,cache))
))),tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/",new cljs.core.Keyword(null,"title","title",636505583),"Login!",new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),new cljs.core.Keyword(null,"layout","layout",-2120940921),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol("js","qx.ui.mobile.layout.VBox","js/qx.ui.mobile.layout.VBox",-1527506437,null)),new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool",new cljs.core.Keyword(null,"value","value",305978217),"Hello,"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"value","value",305978217),"world."))),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Single","tiltontec.qxia.base/m.Single",1330847058),new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"u-name","u-name",1737043515),new cljs.core.Keyword(null,"label","label",1718410804),"Username",new cljs.core.Keyword(null,"value","value",305978217),"KennY",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username or e-mail",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Please share your user name"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.PasswordField","tiltontec.qxia.base/m.PasswordField",-559230758),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"value","value",305978217),"Zoommmmm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your password",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Password is required"))))),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Symbol("js","qx.ui.mobile.form.Button","js/qx.ui.mobile.form.Button",-546855986,null),new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Loginzilla!!!","identica/mmedia/games.png"], null),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"login","login",1695749046,null),cljs.core.list(new cljs.core.Symbol(null,"fm!","fm!",-1177678085,null),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,".validate",".validate",1492446340,null),cljs.core.list(new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"login","login",1695749046,null)))),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),cljs.core.list(new cljs.core.Symbol(null,".getRouting",".getRouting",762678758,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], null),cljs.core.list(new cljs.core.Symbol(null,".executeGet",".executeGet",-1616874601,null),new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),"/overview")))))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_27917,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_par_STAR_27921 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me__$1;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","Object","tiltontec.qxia.base/Object",-661570189),new cljs.core.Keyword(null,"class","class",-2030961996),qx.ui.mobile.form.Button,new cljs.core.Keyword(null,"qx-new-args","qx-new-args",-472417952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Loginzilla!!!","identica/mmedia/games.png"], null),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",((function (_STAR_par_STAR_27921,me__$1,cache__$1,_STAR_par_STAR_27917,me,cache){
return (function (){
var login = tiltontec.model.family.fm_BANG_.call(null,new cljs.core.Keyword(null,"login","login",55217519),me__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,login)).validate())){
var rtg = this$.getRouting();
return rtg.executeGet("/overview");
} else {
return null;
}
});})(_STAR_par_STAR_27921,me__$1,cache__$1,_STAR_par_STAR_27917,me,cache))
], null))),tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.Single","tiltontec.qxia.base/m.Single",1330847058),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"u-name","u-name",1737043515),new cljs.core.Keyword(null,"label","label",1718410804),"Username",new cljs.core.Keyword(null,"value","value",305978217),"KennY",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username or e-mail",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Please share your user name"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.PasswordField","tiltontec.qxia.base/m.PasswordField",-559230758),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"value","value",305978217),"Zoommmmm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your password",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Password is required"))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_27921,me__$1,cache__$1,_STAR_par_STAR_27917,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
var _STAR_par_STAR_27922 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me__$2;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"u-name","u-name",1737043515),new cljs.core.Keyword(null,"label","label",1718410804),"Username",new cljs.core.Keyword(null,"value","value",305978217),"KennY",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username or e-mail",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Please share your user name"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.PasswordField","tiltontec.qxia.base/m.PasswordField",-559230758),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"value","value",305978217),"Zoommmmm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your password",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Password is required"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_27922,me__$2,cache__$2,_STAR_par_STAR_27921,me__$1,cache__$1,_STAR_par_STAR_27917,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
var _STAR_par_STAR_27923 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me__$3;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.PasswordField","tiltontec.qxia.base/m.PasswordField",-559230758),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"value","value",305978217),"Zoommmmm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your password",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Password is required")),tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"u-name","u-name",1737043515),new cljs.core.Keyword(null,"label","label",1718410804),"Username",new cljs.core.Keyword(null,"value","value",305978217),"KennY",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username or e-mail",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Please share your user name"))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_27923;
}});})(_STAR_par_STAR_27922,me__$2,cache__$2,_STAR_par_STAR_27921,me__$1,cache__$1,_STAR_par_STAR_27917,me,cache))
)))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_27922;
}});})(_STAR_par_STAR_27921,me__$1,cache__$1,_STAR_par_STAR_27917,me,cache))
))),tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.Composite","tiltontec.qxia.base/m.Composite",-1059341839),new cljs.core.Keyword(null,"layout","layout",-2120940921),(new qx.ui.mobile.layout.VBox()),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool",new cljs.core.Keyword(null,"value","value",305978217),"Hello,"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"value","value",305978217),"world."))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_27921,me__$1,cache__$1,_STAR_par_STAR_27917,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
var _STAR_par_STAR_27924 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me__$2;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"value","value",305978217),"world.")),tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.Label","tiltontec.qxia.base/m.Label",-1164863734),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool",new cljs.core.Keyword(null,"value","value",305978217),"Hello,"))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_27924;
}});})(_STAR_par_STAR_27921,me__$1,cache__$1,_STAR_par_STAR_27917,me,cache))
)))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_27921;
}});})(_STAR_par_STAR_27917,me,cache))
)))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_27917;
}}))));
});
goog.exportSymbol('hello_mobile.core.appinit', hello_mobile.core.appinit);
