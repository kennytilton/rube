// Compiled by ClojureScript 1.7.48 {}
goog.provide('tiltontec.qxia.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.base');
goog.require('tiltontec.model.family');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.qxia.core.booya = (function tiltontec$qxia$core$booya(tag){
return cljs.core.println.call(null,[cljs.core.str("booya 11 "),cljs.core.str(tag)].join(''));
});
goog.exportSymbol('tiltontec.qxia.core.booya', tiltontec.qxia.core.booya);
tiltontec.qxia.core.appinit = (function tiltontec$qxia$core$appinit(this$){
cljs.core.println.call(null,[cljs.core.str("the app is "),cljs.core.str(this$)].join(''));

var login = (new identica.Bingo());
return cljs.core.println.call(null,[cljs.core.str("login is "),cljs.core.str(login)].join(''));
});
goog.exportSymbol('tiltontec.qxia.core.appinit', tiltontec.qxia.core.appinit);
