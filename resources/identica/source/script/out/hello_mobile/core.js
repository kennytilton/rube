// Compiled by ClojureScript 1.7.48 {}
goog.provide('hello_mobile.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.base');
goog.require('tiltontec.model.core');
goog.require('tiltontec.model.family');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.qxia.core');
goog.require('tiltontec.qxia.macros');
hello_mobile.core.this_app = cljs.core.atom.call(null,null);

hello_mobile.core.appinit = (function hello_mobile$core$appinit(this$,pager,shower){
return cljs.core.reset_BANG_.call(null,hello_mobile.core.this_app,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","Mobile","tiltontec.qxia.types/Mobile",-143490810),new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),this$,new cljs.core.Keyword(null,"pager","pager",1850229940),pager,new cljs.core.Keyword(null,"shower","shower",-1731894586),shower,new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"make-login","make-login",2012461006,null)),cljs.core.list(new cljs.core.Symbol(null,"make-overview","make-overview",-827027252,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_9319 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,hello_mobile.core.make_overview.call(null)),hello_mobile.core.make_login.call(null))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_9319;
}}))));
});
goog.exportSymbol('hello_mobile.core.appinit', hello_mobile.core.appinit);
hello_mobile.core.make_css_test = (function hello_mobile$core$make_css_test(){
return tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),new cljs.core.Keyword(null,"layout","layout",-2120940921),(new qx.ui.mobile.layout.HBox()),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"Hello cool222",new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool"),cljs.core.list(new cljs.core.Symbol(null,"vbox","vbox",1147743762,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"world 2!",new cljs.core.Keyword(null,"flex","flex",-1425124628),(3),new cljs.core.Keyword(null,"css-class","css-class",-919455334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cool","coolfont"], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"world 3!",new cljs.core.Keyword(null,"flex","flex",-1425124628),(3),new cljs.core.Keyword(null,"css-class","css-class",-919455334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cool","coolfont"], null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_9322 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),new cljs.core.Keyword(null,"layout","layout",-2120940921),(new qx.ui.mobile.layout.VBox()),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"world 2!",new cljs.core.Keyword(null,"flex","flex",-1425124628),(3),new cljs.core.Keyword(null,"css-class","css-class",-919455334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cool","coolfont"], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"world 3!",new cljs.core.Keyword(null,"flex","flex",-1425124628),(3),new cljs.core.Keyword(null,"css-class","css-class",-919455334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cool","coolfont"], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9322,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_par_STAR_9323 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me__$1;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.label.call(null,"world 3!",new cljs.core.Keyword(null,"flex","flex",-1425124628),(3),new cljs.core.Keyword(null,"css-class","css-class",-919455334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cool","coolfont"], null))),tiltontec.qxia.core.label.call(null,"world 2!",new cljs.core.Keyword(null,"flex","flex",-1425124628),(3),new cljs.core.Keyword(null,"css-class","css-class",-919455334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cool","coolfont"], null)))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_9323;
}});})(_STAR_par_STAR_9322,me,cache))
))),tiltontec.qxia.core.label.call(null,"Hello cool222",new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool"))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_9322;
}})));
});
hello_mobile.core.make_login_form = (function hello_mobile$core$make_login_form(){
return tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.types","m.TextField","tiltontec.qxia.types/m.TextField",1587442644),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"u-name","u-name",1737043515),new cljs.core.Keyword(null,"label","label",1718410804),"Username",new cljs.core.Keyword(null,"value","value",305978217),"KennY",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username or e-mail",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Please share your user name"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.types","m.PasswordField","tiltontec.qxia.types/m.PasswordField",-1705460348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"value","value",305978217),"Zoommmmm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your password",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Password is required"))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_9326 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.types","m.TextField","tiltontec.qxia.types/m.TextField",1587442644),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"u-name","u-name",1737043515),new cljs.core.Keyword(null,"label","label",1718410804),"Username",new cljs.core.Keyword(null,"value","value",305978217),"KennY",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username or e-mail",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Please share your user name"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.types","m.PasswordField","tiltontec.qxia.types/m.PasswordField",-1705460348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"value","value",305978217),"Zoommmmm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your password",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Password is required"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9326,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_par_STAR_9327 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me__$1;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.PasswordField","tiltontec.qxia.types/m.PasswordField",-1705460348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"value","value",305978217),"Zoommmmm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your password",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Password is required")),tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.TextField","tiltontec.qxia.types/m.TextField",1587442644),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"u-name","u-name",1737043515),new cljs.core.Keyword(null,"label","label",1718410804),"Username",new cljs.core.Keyword(null,"value","value",305978217),"KennY",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username or e-mail",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Please share your user name"))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_9327;
}});})(_STAR_par_STAR_9326,me,cache))
)))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_9326;
}})));
});
hello_mobile.core.make_login = (function hello_mobile$core$make_login(){
return tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/",new cljs.core.Keyword(null,"title","title",636505583),"Login!",new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"make-css-test","make-css-test",-210912868,null)),cljs.core.list(new cljs.core.Symbol(null,"make-login-form","make-login-form",1069109923,null)),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),"Loginzilla!!!",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"login","login",1695749046,null),cljs.core.list(new cljs.core.Symbol(null,"fm!","fm!",-1177678085,null),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,".validate",".validate",1492446340,null),cljs.core.list(new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"login","login",1695749046,null)))),cljs.core.list(new cljs.core.Symbol(null,"routing-get","routing-get",877560304,null),"/overview"))))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_9329 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.button.call(null,"Loginzilla!!!",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",((function (_STAR_par_STAR_9329,me,cache){
return (function (){
var login = tiltontec.model.family.fm_BANG_.call(null,new cljs.core.Keyword(null,"login","login",55217519),me);
if(cljs.core.truth_(new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,login)).validate())){
return tiltontec.qxia.core.routing_get.call(null,"/overview");
} else {
return null;
}
});})(_STAR_par_STAR_9329,me,cache))
], null))),hello_mobile.core.make_login_form.call(null)),hello_mobile.core.make_css_test.call(null))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_9329;
}})));
});
hello_mobile.core.make_overview = (function hello_mobile$core$make_overview(){
return tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/overview",new cljs.core.Keyword(null,"title","title",636505583),"Overview",new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"greet?","greet?",1363328291)),cljs.core.list(new cljs.core.Symbol(null,"hbox","hbox",1014079882,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"vbox","vbox",1147743762,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool"], null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"Hello"),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"World")),cljs.core.list(new cljs.core.Symbol(null,"image","image",1581806431,null),"identica/mmedia/earth-from-moon.jpg",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"warning"))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_9333 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_(tiltontec.model.base.md_get.call(null,me,new cljs.core.Keyword(null,"greet?","greet?",1363328291)))?tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),new cljs.core.Keyword(null,"layout","layout",-2120940921),(new qx.ui.mobile.layout.HBox()),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"vbox","vbox",1147743762,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool"], null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"Hello"),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"World")),cljs.core.list(new cljs.core.Symbol(null,"image","image",1581806431,null),"identica/mmedia/earth-from-moon.jpg",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"warning"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9333,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_par_STAR_9334 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me__$1;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.image.call(null,"identica/mmedia/earth-from-moon.jpg",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"warning")),tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),new cljs.core.Keyword(null,"layout","layout",-2120940921),(new qx.ui.mobile.layout.VBox()),new cljs.core.Keyword(null,"css-class","css-class",-919455334),"cool",new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"Hello"),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"World"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9334,me__$1,cache__$1,_STAR_par_STAR_9333,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
var _STAR_par_STAR_9335 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me__$2;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.label.call(null,"World")),tiltontec.qxia.core.label.call(null,"Hello"))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_9335;
}});})(_STAR_par_STAR_9334,me__$1,cache__$1,_STAR_par_STAR_9333,me,cache))
)))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_9334;
}});})(_STAR_par_STAR_9333,me,cache))
)):null))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_9333;
}})));
});
