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
cljs.core.reset_BANG_.call(null,hello_mobile.core.this_app,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.Mobile","tiltontec.qxia.base/m.Mobile",659048827),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/",new cljs.core.Keyword(null,"title","title",636505583),"Bingo!",new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword("tiltontec.qxia.base","m.Single","tiltontec.qxia.base/m.Single",1330847058),new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"u-name","u-name",1737043515),new cljs.core.Keyword(null,"label","label",1718410804),"Username",new cljs.core.Keyword(null,"required","required",1807647006),true),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.PasswordField","tiltontec.qxia.base/m.PasswordField",-559230758),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"required","required",1807647006),true))),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Button","tiltontec.qxia.base/m.Button",1808800880),new cljs.core.Keyword(null,"label","label",1718410804),"Login",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"gogo tap!"),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"login","login",1695749046,null),cljs.core.list(new cljs.core.Symbol(null,"fm!","fm!",-1177678085,null),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),new cljs.core.Symbol(null,"login","login",1695749046,null)),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ok?","ok?",2087841831,null),cljs.core.list(new cljs.core.Symbol(null,".validate",".validate",1492446340,null),cljs.core.list(new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"login","login",1695749046,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"says-ok","says-ok",2049241200),new cljs.core.Symbol(null,"ok?","ok?",2087841831,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),cljs.core.list(new cljs.core.Symbol(null,".getRouting",".getRouting",762678758,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], null),cljs.core.list(new cljs.core.Symbol(null,".executeGet",".executeGet",-1616874601,null),new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),"/overview")))))], null)))),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/overview",new cljs.core.Keyword(null,"title","title",636505583),"Overview",new cljs.core.Keyword(null,"showBackButton","showBackButton",632746224),true,new cljs.core.Keyword(null,"backButtonText","backButtonText",2126160537),"Back Up",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["action",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),cljs.core.list(new cljs.core.Symbol(null,".getRouting",".getRouting",762678758,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"gogo action!")))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_27231 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/overview",new cljs.core.Keyword(null,"title","title",636505583),"Overview",new cljs.core.Keyword(null,"showBackButton","showBackButton",632746224),true,new cljs.core.Keyword(null,"backButtonText","backButtonText",2126160537),"Back Up",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["action",((function (_STAR_par_STAR_27231,me,cache){
return (function (){
var rtg = this$.getRouting();
return cljs.core.println.call(null,"gogo action!");
});})(_STAR_par_STAR_27231,me,cache))
], null))),tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.NavigationPage","tiltontec.qxia.base/m.NavigationPage",-276720781),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/",new cljs.core.Keyword(null,"title","title",636505583),"Bingo!",new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword("tiltontec.qxia.base","m.Single","tiltontec.qxia.base/m.Single",1330847058),new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol(null,"c?kids","c?kids",-1889993626,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"u-name","u-name",1737043515),new cljs.core.Keyword(null,"label","label",1718410804),"Username",new cljs.core.Keyword(null,"required","required",1807647006),true),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.PasswordField","tiltontec.qxia.base/m.PasswordField",-559230758),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"required","required",1807647006),true))),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.Button","tiltontec.qxia.base/m.Button",1808800880),new cljs.core.Keyword(null,"label","label",1718410804),"Login",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),"gogo tap!"),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"login","login",1695749046,null),cljs.core.list(new cljs.core.Symbol(null,"fm!","fm!",-1177678085,null),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),new cljs.core.Symbol(null,"login","login",1695749046,null)),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ok?","ok?",2087841831,null),cljs.core.list(new cljs.core.Symbol(null,".validate",".validate",1492446340,null),cljs.core.list(new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"login","login",1695749046,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"says-ok","says-ok",2049241200),new cljs.core.Symbol(null,"ok?","ok?",2087841831,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),cljs.core.list(new cljs.core.Symbol(null,".getRouting",".getRouting",762678758,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], null),cljs.core.list(new cljs.core.Symbol(null,".executeGet",".executeGet",-1616874601,null),new cljs.core.Symbol(null,"rtg","rtg",-1116844160,null),"/overview")))))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_27231,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_par_STAR_27232 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me__$1;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.Button","tiltontec.qxia.base/m.Button",1808800880),new cljs.core.Keyword(null,"label","label",1718410804),"Login",new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",((function (_STAR_par_STAR_27232,me__$1,cache__$1,_STAR_par_STAR_27231,me,cache){
return (function (){
cljs.core.println.call(null,"gogo tap!");

var login = tiltontec.model.family.fm_BANG_.call(null,new cljs.core.Keyword(null,"login","login",55217519),me__$1);
if(cljs.core.truth_(login)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"login","login",1695749046,null)))].join('')));
}

var temp__4425__auto__ = new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,login)).validate();
if(cljs.core.truth_(temp__4425__auto__)){
var ok_QMARK_ = temp__4425__auto__;
cljs.core.println.call(null,new cljs.core.Keyword(null,"says-ok","says-ok",2049241200),ok_QMARK_);

var rtg = this$.getRouting();
return rtg.executeGet("/overview");
} else {
return null;
}
});})(_STAR_par_STAR_27232,me__$1,cache__$1,_STAR_par_STAR_27231,me,cache))
], null))),tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.Form","tiltontec.qxia.base/m.Form",1666310921),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword("tiltontec.qxia.base","m.Single","tiltontec.qxia.base/m.Single",1330847058),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.family","the-kids","tiltontec.model.family/the-kids",-869691941,null),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"u-name","u-name",1737043515),new cljs.core.Keyword(null,"label","label",1718410804),"Username",new cljs.core.Keyword(null,"required","required",1807647006),true),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.base","m.PasswordField","tiltontec.qxia.base/m.PasswordField",-559230758),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"required","required",1807647006),true))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_27232,me__$1,cache__$1,_STAR_par_STAR_27231,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
var _STAR_par_STAR_27233 = tiltontec.model.family._STAR_par_STAR_;
tiltontec.model.family._STAR_par_STAR_ = me__$2;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.PasswordField","tiltontec.qxia.base/m.PasswordField",-559230758),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"required","required",1807647006),true)),tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.base","m.TextField","tiltontec.qxia.base/m.TextField",-227782742),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"u-name","u-name",1737043515),new cljs.core.Keyword(null,"label","label",1718410804),"Username",new cljs.core.Keyword(null,"required","required",1807647006),true))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_27233;
}});})(_STAR_par_STAR_27232,me__$1,cache__$1,_STAR_par_STAR_27231,me,cache))
)))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_27232;
}});})(_STAR_par_STAR_27231,me,cache))
)))));
}finally {tiltontec.model.family._STAR_par_STAR_ = _STAR_par_STAR_27231;
}}))));

var routing = this$.getRouting();
var seq__27234 = cljs.core.seq.call(null,tiltontec.model.base.md_get.call(null,cljs.core.deref.call(null,hello_mobile.core.this_app),new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__27235 = null;
var count__27236 = (0);
var i__27237 = (0);
while(true){
if((i__27237 < count__27236)){
var page = cljs.core._nth.call(null,chunk__27235,i__27237);
var qx_page_27238 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
pager.addDetail([qx_page_27238]);

var temp__4425__auto___27239 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___27239)){
var ept_27240 = temp__4425__auto___27239;
routing.onGet(ept_27240,shower,qx_page_27238);
} else {
}

var G__27241 = seq__27234;
var G__27242 = chunk__27235;
var G__27243 = count__27236;
var G__27244 = (i__27237 + (1));
seq__27234 = G__27241;
chunk__27235 = G__27242;
count__27236 = G__27243;
i__27237 = G__27244;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27234);
if(temp__4425__auto__){
var seq__27234__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27234__$1)){
var c__5338__auto__ = cljs.core.chunk_first.call(null,seq__27234__$1);
var G__27245 = cljs.core.chunk_rest.call(null,seq__27234__$1);
var G__27246 = c__5338__auto__;
var G__27247 = cljs.core.count.call(null,c__5338__auto__);
var G__27248 = (0);
seq__27234 = G__27245;
chunk__27235 = G__27246;
count__27236 = G__27247;
i__27237 = G__27248;
continue;
} else {
var page = cljs.core.first.call(null,seq__27234__$1);
var qx_page_27249 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059));
pager.addDetail([qx_page_27249]);

var temp__4425__auto___27250__$1 = tiltontec.model.base.md_get.call(null,page,new cljs.core.Keyword(null,"end-point","end-point",-1147460885));
if(cljs.core.truth_(temp__4425__auto___27250__$1)){
var ept_27251 = temp__4425__auto___27250__$1;
routing.onGet(ept_27251,shower,qx_page_27249);
} else {
}

var G__27252 = cljs.core.next.call(null,seq__27234__$1);
var G__27253 = null;
var G__27254 = (0);
var G__27255 = (0);
seq__27234 = G__27252;
chunk__27235 = G__27253;
count__27236 = G__27254;
i__27237 = G__27255;
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
