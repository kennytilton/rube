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
var bingo = (new qx.ui.mobile.page.NavigationPage());
var over = (new identica.page.Overview());
bingo.setTitle("BingOMG");

bingo.addListener("initialize",((function (bingo,over){
return (function (){
var content = bingo.getContent();
var gogo = (new qx.ui.mobile.form.Button("Go!"));
gogo.addListener("tap",((function (content,gogo,bingo,over){
return (function (){
var rtg = this$.getRouting();
cljs.core.println.call(null,"gogo tap!");

return rtg.executeGet("/overview");
});})(content,gogo,bingo,over))
,bingo);

return content.add(gogo);
});})(bingo,over))
,this$);


pager.addDetail([bingo,over]);

var routing = this$.getRouting();
routing.onGet("/",shower,bingo);

return routing.onGet("/overview",shower,over);
});
goog.exportSymbol('tiltontec.qxia.core.appinit', tiltontec.qxia.core.appinit);
