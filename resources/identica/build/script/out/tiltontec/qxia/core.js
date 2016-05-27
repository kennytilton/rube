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
tiltontec.qxia.core.appinit = (function tiltontec$qxia$core$appinit(this$,pager,shower){
cljs.core.println.call(null,[cljs.core.str("the app is "),cljs.core.str(this$),cljs.core.str(", pager is "),cljs.core.str(pager),cljs.core.str(", shower is "),cljs.core.str(shower)].join(''));

var login = (new identica.Bingo());
var over = (new identica.page.Overview());
cljs.core.println.call(null,[cljs.core.str("login is "),cljs.core.str(login)].join(''));

cljs.core.println.call(null,[cljs.core.str("over is "),cljs.core.str(over)].join(''));

pager.addDetail([login,over]);

var routing = this$.getRouting();
cljs.core.println.call(null,[cljs.core.str("routing is "),cljs.core.str(routing)].join(''));

routing.onGet("/",shower,login);

return routing.onGet("/overview",shower,over);
});
goog.exportSymbol('tiltontec.qxia.core.appinit', tiltontec.qxia.core.appinit);
