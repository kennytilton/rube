// Compiled by ClojureScript 1.9.36 {}
goog.provide('tiltontec.qxia.widget');
goog.require('cljs.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
goog.require('tiltontec.model.macros');
goog.require('clojure.set');
goog.require('tiltontec.qxia.base');
goog.require('tiltontec.cell.integrity');
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","Mobile","tiltontec.qxia.types/Mobile",-143490810)], null),(function (_,me,new$,old,c){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
var app = new cljs.core.Keyword(null,"qx-me","qx-me",-388627059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var shower = new cljs.core.Keyword(null,"shower","shower",-1731894586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var pager = new cljs.core.Keyword(null,"pager","pager",1850229940).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
var routing = app.getRouting();
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__11143_11151 = cljs.core.seq.call(null,old);
var chunk__11144_11152 = null;
var count__11145_11153 = (0);
var i__11146_11154 = (0);
while(true){
if((i__11146_11154 < count__11145_11153)){
var page_11155 = cljs.core._nth.call(null,chunk__11144_11152,i__11146_11154);
var temp__4425__auto___11156 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_11155));
if(cljs.core.truth_(temp__4425__auto___11156)){
var ept_11157 = temp__4425__auto___11156;
routing.remove(ept_11157);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_11155));

var G__11158 = seq__11143_11151;
var G__11159 = chunk__11144_11152;
var G__11160 = count__11145_11153;
var G__11161 = (i__11146_11154 + (1));
seq__11143_11151 = G__11158;
chunk__11144_11152 = G__11159;
count__11145_11153 = G__11160;
i__11146_11154 = G__11161;
continue;
} else {
var temp__4425__auto___11162 = cljs.core.seq.call(null,seq__11143_11151);
if(temp__4425__auto___11162){
var seq__11143_11163__$1 = temp__4425__auto___11162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11143_11163__$1)){
var c__7021__auto___11164 = cljs.core.chunk_first.call(null,seq__11143_11163__$1);
var G__11165 = cljs.core.chunk_rest.call(null,seq__11143_11163__$1);
var G__11166 = c__7021__auto___11164;
var G__11167 = cljs.core.count.call(null,c__7021__auto___11164);
var G__11168 = (0);
seq__11143_11151 = G__11165;
chunk__11144_11152 = G__11166;
count__11145_11153 = G__11167;
i__11146_11154 = G__11168;
continue;
} else {
var page_11169 = cljs.core.first.call(null,seq__11143_11163__$1);
var temp__4425__auto___11170__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page_11169));
if(cljs.core.truth_(temp__4425__auto___11170__$1)){
var ept_11171 = temp__4425__auto___11170__$1;
routing.remove(ept_11171);
} else {
}

pager.removeDetail(tiltontec.qxia.base.qxme.call(null,page_11169));

var G__11172 = cljs.core.next.call(null,seq__11143_11163__$1);
var G__11173 = null;
var G__11174 = (0);
var G__11175 = (0);
seq__11143_11151 = G__11172;
chunk__11144_11152 = G__11173;
count__11145_11153 = G__11174;
i__11146_11154 = G__11175;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__11147 = cljs.core.seq.call(null,new$);
var chunk__11148 = null;
var count__11149 = (0);
var i__11150 = (0);
while(true){
if((i__11150 < count__11149)){
var page = cljs.core._nth.call(null,chunk__11148,i__11150);
var qx_page_11176 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_11176);

var temp__4425__auto___11177 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___11177)){
var ept_11178 = temp__4425__auto___11177;
routing.onGet(ept_11178,shower,qx_page_11176);
} else {
}

var G__11179 = seq__11147;
var G__11180 = chunk__11148;
var G__11181 = count__11149;
var G__11182 = (i__11150 + (1));
seq__11147 = G__11179;
chunk__11148 = G__11180;
count__11149 = G__11181;
i__11150 = G__11182;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11147);
if(temp__4425__auto__){
var seq__11147__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11147__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__11147__$1);
var G__11183 = cljs.core.chunk_rest.call(null,seq__11147__$1);
var G__11184 = c__7021__auto__;
var G__11185 = cljs.core.count.call(null,c__7021__auto__);
var G__11186 = (0);
seq__11147 = G__11183;
chunk__11148 = G__11184;
count__11149 = G__11185;
i__11150 = G__11186;
continue;
} else {
var page = cljs.core.first.call(null,seq__11147__$1);
var qx_page_11187 = tiltontec.qxia.base.qxme.call(null,page);
pager.addDetail(qx_page_11187);

var temp__4425__auto___11188__$1 = new cljs.core.Keyword(null,"end-point","end-point",-1147460885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,page));
if(cljs.core.truth_(temp__4425__auto___11188__$1)){
var ept_11189 = temp__4425__auto___11188__$1;
routing.onGet(ept_11189,shower,qx_page_11187);
} else {
}

var G__11190 = cljs.core.next.call(null,seq__11147__$1);
var G__11191 = null;
var G__11192 = (0);
var G__11193 = (0);
seq__11147 = G__11190;
chunk__11148 = G__11191;
count__11149 = G__11192;
i__11150 = G__11193;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.Composite","tiltontec.qxia.types/m.Composite",1552799163),(function (me){
var temp__4425__auto__ = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4425__auto__)){
var lyo = temp__4425__auto__;
return tiltontec.qxia.base.qxme.call(null,me).setLayout(lyo);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225)], null),(function (_,me,new$,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
var qx_form = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__11194_11204 = cljs.core.seq.call(null,old);
var chunk__11195_11205 = null;
var count__11196_11206 = (0);
var i__11197_11207 = (0);
while(true){
if((i__11197_11207 < count__11196_11206)){
var k_11208 = cljs.core._nth.call(null,chunk__11195_11205,i__11197_11207);
var qxk_11209 = tiltontec.qxia.base.qxme.call(null,k_11208);
var label_11210 = tiltontec.model.core.md_get.call(null,k_11208,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_11209);

var G__11211 = seq__11194_11204;
var G__11212 = chunk__11195_11205;
var G__11213 = count__11196_11206;
var G__11214 = (i__11197_11207 + (1));
seq__11194_11204 = G__11211;
chunk__11195_11205 = G__11212;
count__11196_11206 = G__11213;
i__11197_11207 = G__11214;
continue;
} else {
var temp__4425__auto___11215 = cljs.core.seq.call(null,seq__11194_11204);
if(temp__4425__auto___11215){
var seq__11194_11216__$1 = temp__4425__auto___11215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11194_11216__$1)){
var c__7021__auto___11217 = cljs.core.chunk_first.call(null,seq__11194_11216__$1);
var G__11218 = cljs.core.chunk_rest.call(null,seq__11194_11216__$1);
var G__11219 = c__7021__auto___11217;
var G__11220 = cljs.core.count.call(null,c__7021__auto___11217);
var G__11221 = (0);
seq__11194_11204 = G__11218;
chunk__11195_11205 = G__11219;
count__11196_11206 = G__11220;
i__11197_11207 = G__11221;
continue;
} else {
var k_11222 = cljs.core.first.call(null,seq__11194_11216__$1);
var qxk_11223 = tiltontec.qxia.base.qxme.call(null,k_11222);
var label_11224 = tiltontec.model.core.md_get.call(null,k_11222,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.remove(qxk_11223);

var G__11225 = cljs.core.next.call(null,seq__11194_11216__$1);
var G__11226 = null;
var G__11227 = (0);
var G__11228 = (0);
seq__11194_11204 = G__11225;
chunk__11195_11205 = G__11226;
count__11196_11206 = G__11227;
i__11197_11207 = G__11228;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__4425__auto__ = new$;
if(cljs.core.truth_(temp__4425__auto__)){
var kids = temp__4425__auto__;
var seq__11198 = cljs.core.seq.call(null,kids);
var chunk__11199 = null;
var count__11200 = (0);
var i__11201 = (0);
while(true){
if((i__11201 < count__11200)){
var k = cljs.core._nth.call(null,chunk__11199,i__11201);
var G__11202_11229 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__11202_11229) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_11231 = tiltontec.qxia.base.qxme.call(null,k);
var label_11232 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_11231,label_11232);

}

var G__11233 = seq__11198;
var G__11234 = chunk__11199;
var G__11235 = count__11200;
var G__11236 = (i__11201 + (1));
seq__11198 = G__11233;
chunk__11199 = G__11234;
count__11200 = G__11235;
i__11201 = G__11236;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__11198);
if(temp__4425__auto____$1){
var seq__11198__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11198__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__11198__$1);
var G__11237 = cljs.core.chunk_rest.call(null,seq__11198__$1);
var G__11238 = c__7021__auto__;
var G__11239 = cljs.core.count.call(null,c__7021__auto__);
var G__11240 = (0);
seq__11198 = G__11237;
chunk__11199 = G__11238;
count__11200 = G__11239;
i__11201 = G__11240;
continue;
} else {
var k = cljs.core.first.call(null,seq__11198__$1);
var G__11203_11241 = (((tiltontec.cell.base.ia_type.call(null,k) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,k).fqn:null);
switch (G__11203_11241) {
case "tiltontec.qxia.types/m.RadioGroupStub":
tiltontec.qxia.base.form_build_radio_group_stub.call(null,me,k);

break;
default:
var qxk_11243 = tiltontec.qxia.base.qxme.call(null,k);
var label_11244 = tiltontec.model.core.md_get.call(null,k,new cljs.core.Keyword(null,"label","label",1718410804));
qx_form.add(qxk_11243,label_11244);

}

var G__11245 = cljs.core.next.call(null,seq__11198__$1);
var G__11246 = null;
var G__11247 = (0);
var G__11248 = (0);
seq__11198 = G__11245;
chunk__11199 = G__11246;
count__11200 = G__11247;
i__11201 = G__11248;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724),(function (me){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"qx-init-single-enqueues-qxme!!!!","qx-init-single-enqueues-qxme!!!!",-866757605));

return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"qx-init-single-does--qxme!!!!","qx-init-single-does--qxme!!!!",-770694528));

var kids = new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,kids))){
} else {
throw (new Error("Assert failed: (= 1 (count kids))"));
}

var form = cljs.core.first.call(null,kids);
var qx_form = tiltontec.qxia.base.qxme.call(null,form);
if(cljs.core.truth_(qx_form)){
} else {
throw (new Error("Assert failed: qx-form"));
}

tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"qx-init-single-gets-qxme!!!!","qx-init-single-gets-qxme!!!!",-168440823));

return cljs.core.swap_BANG_.call(null,me,cljs.core.assoc,new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),(new qx.ui.mobile.form.renderer.Single(qx_form)));
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_initialize,new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),(function (page){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"page-deferring","page-deferring",-18481214));

return qx_page.addListener("initialize",((function (qx_page){
return (function (){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"page-fires","page-fires",-379326855));

var temp__4425__auto___11253 = tiltontec.model.core.md_getx.call(null,new cljs.core.Keyword(null,"ini-nav","ini-nav",1436917737),page,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4425__auto___11253)){
var kids_11254 = temp__4425__auto___11253;
var content_11255 = qx_page.getContent();
var seq__11249_11256 = cljs.core.seq.call(null,kids_11254);
var chunk__11250_11257 = null;
var count__11251_11258 = (0);
var i__11252_11259 = (0);
while(true){
if((i__11252_11259 < count__11251_11258)){
var k_11260 = cljs.core._nth.call(null,chunk__11250_11257,i__11252_11259);
var qxk_11261 = tiltontec.qxia.base.qxme.call(null,k_11260);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_11260));

content_11255.add(qxk_11261);

var G__11262 = seq__11249_11256;
var G__11263 = chunk__11250_11257;
var G__11264 = count__11251_11258;
var G__11265 = (i__11252_11259 + (1));
seq__11249_11256 = G__11262;
chunk__11250_11257 = G__11263;
count__11251_11258 = G__11264;
i__11252_11259 = G__11265;
continue;
} else {
var temp__4425__auto___11266__$1 = cljs.core.seq.call(null,seq__11249_11256);
if(temp__4425__auto___11266__$1){
var seq__11249_11267__$1 = temp__4425__auto___11266__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11249_11267__$1)){
var c__7021__auto___11268 = cljs.core.chunk_first.call(null,seq__11249_11267__$1);
var G__11269 = cljs.core.chunk_rest.call(null,seq__11249_11267__$1);
var G__11270 = c__7021__auto___11268;
var G__11271 = cljs.core.count.call(null,c__7021__auto___11268);
var G__11272 = (0);
seq__11249_11256 = G__11269;
chunk__11250_11257 = G__11270;
count__11251_11258 = G__11271;
i__11252_11259 = G__11272;
continue;
} else {
var k_11273 = cljs.core.first.call(null,seq__11249_11267__$1);
var qxk_11274 = tiltontec.qxia.base.qxme.call(null,k_11273);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"qxme","qxme",-1288515198),new cljs.core.Keyword(null,"navpage-initialize-add","navpage-initialize-add",1958684224),tiltontec.cell.base.ia_type.call(null,k_11273));

content_11255.add(qxk_11274);

var G__11275 = cljs.core.next.call(null,seq__11249_11267__$1);
var G__11276 = null;
var G__11277 = (0);
var G__11278 = (0);
seq__11249_11256 = G__11275;
chunk__11250_11257 = G__11276;
count__11251_11258 = G__11277;
i__11252_11259 = G__11278;
continue;
}
} else {
}
}
break;
}
} else {
}

return qx_page;
});})(qx_page))
);
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995)], null),(function (_,page,newk,oldk,___$1){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"nav-page-grabs-kids-obs","nav-page-grabs-kids-obs",2045747190));

if(cljs.core.not_EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),page], null),(function (opcode,defer_info){
var qx_page = tiltontec.qxia.base.qxme.call(null,page);
var content = qx_page.getContent();
content.removeAll();

var seq__11279 = cljs.core.seq.call(null,newk);
var chunk__11280 = null;
var count__11281 = (0);
var i__11282 = (0);
while(true){
if((i__11282 < count__11281)){
var k = cljs.core._nth.call(null,chunk__11280,i__11282);
var qxk_11283 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_11283);

var G__11284 = seq__11279;
var G__11285 = chunk__11280;
var G__11286 = count__11281;
var G__11287 = (i__11282 + (1));
seq__11279 = G__11284;
chunk__11280 = G__11285;
count__11281 = G__11286;
i__11282 = G__11287;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11279);
if(temp__4425__auto__){
var seq__11279__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11279__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__11279__$1);
var G__11288 = cljs.core.chunk_rest.call(null,seq__11279__$1);
var G__11289 = c__7021__auto__;
var G__11290 = cljs.core.count.call(null,c__7021__auto__);
var G__11291 = (0);
seq__11279 = G__11288;
chunk__11280 = G__11289;
count__11281 = G__11290;
i__11282 = G__11291;
continue;
} else {
var k = cljs.core.first.call(null,seq__11279__$1);
var qxk_11292 = tiltontec.qxia.base.qxme.call(null,k);
content.add(qxk_11292);

var G__11293 = cljs.core.next.call(null,seq__11279__$1);
var G__11294 = null;
var G__11295 = (0);
var G__11296 = (0);
seq__11279 = G__11293;
chunk__11280 = G__11294;
count__11281 = G__11295;
i__11282 = G__11296;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),new cljs.core.Keyword("tiltontec.qxia.types","m.Input","tiltontec.qxia.types/m.Input",-509810846)], null),(function (_,me,new_fn,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(new_fn)){
var form = tiltontec.qxia.base.qxme.call(null,tiltontec.model.core.qx_par.call(null,me));
if(cljs.core.truth_(form)){
} else {
throw (new Error("Assert failed: form"));
}

var vmgr = form.getValidationManager();
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"validmgr-add","validmgr-add",101529472),tiltontec.cell.base.ia_type.call(null,me));

return vmgr.add(tiltontec.qxia.base.qxme.call(null,me),new_fn);
} else {
return null;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.qxia.base.qx_property_observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword("tiltontec.qxia.types","m.SelectBox","tiltontec.qxia.types/m.SelectBox",-663708114)], null),(function (_,me,new$,___$1,___$2){
if(cljs.core.truth_(new$)){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"3-post-assembly","3-post-assembly",-607469254),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(tiltontec.qxia.base.qxme.call(null,me).getModel())){
} else {
throw (new Error("Assert failed: (.getModel (qxme me))"));
}

return tiltontec.qxia.base.qxme.call(null,me).setSelection(new$);
}));
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.qxia.types","qx.Object","tiltontec.qxia.types/qx.Object",-1295429520)], null),(function (_,me,newk,oldk,___$1){
var G__11297 = (((tiltontec.cell.base.ia_type.call(null,me) instanceof cljs.core.Keyword))?tiltontec.cell.base.ia_type.call(null,me).fqn:null);
switch (G__11297) {
case "tiltontec.qxia.types/m.Single":
return null;

break;
case "tiltontec.qxia.types/m.RadioGroupStub":
return null;

break;
default:


return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),((function (G__11297){
return (function (opcode,defer_info){
return tiltontec.qxia.widget.kids_refresh.call(null,me,newk,oldk);
});})(G__11297))
);

}
}));
tiltontec.qxia.widget.kids_refresh = (function tiltontec$qxia$widget$kids_refresh(me,newk,oldk){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
} else {
var lostks_11315 = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks_11315)){
} else {
var seq__11307_11316 = cljs.core.seq.call(null,lostks_11315);
var chunk__11308_11317 = null;
var count__11309_11318 = (0);
var i__11310_11319 = (0);
while(true){
if((i__11310_11319 < count__11309_11318)){
var kid_11320 = cljs.core._nth.call(null,chunk__11308_11317,i__11310_11319);
var qxk_11321 = tiltontec.qxia.base.qxme.call(null,kid_11320);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_11320,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_11321);
}

qxk_11321.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_11320);

var G__11322 = seq__11307_11316;
var G__11323 = chunk__11308_11317;
var G__11324 = count__11309_11318;
var G__11325 = (i__11310_11319 + (1));
seq__11307_11316 = G__11322;
chunk__11308_11317 = G__11323;
count__11309_11318 = G__11324;
i__11310_11319 = G__11325;
continue;
} else {
var temp__4425__auto___11326 = cljs.core.seq.call(null,seq__11307_11316);
if(temp__4425__auto___11326){
var seq__11307_11327__$1 = temp__4425__auto___11326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11307_11327__$1)){
var c__7021__auto___11328 = cljs.core.chunk_first.call(null,seq__11307_11327__$1);
var G__11329 = cljs.core.chunk_rest.call(null,seq__11307_11327__$1);
var G__11330 = c__7021__auto___11328;
var G__11331 = cljs.core.count.call(null,c__7021__auto___11328);
var G__11332 = (0);
seq__11307_11316 = G__11329;
chunk__11308_11317 = G__11330;
count__11309_11318 = G__11331;
i__11310_11319 = G__11332;
continue;
} else {
var kid_11333 = cljs.core.first.call(null,seq__11307_11327__$1);
var qxk_11334 = tiltontec.qxia.base.qxme.call(null,kid_11333);
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type_QMARK_,kid_11333,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)], null))){
} else {
tiltontec.qxia.base.qxme.call(null,me).drop(qxk_11334);
}

qxk_11334.destroy();

tiltontec.cell.evaluate.not_to_be.call(null,kid_11333);

var G__11335 = cljs.core.next.call(null,seq__11307_11327__$1);
var G__11336 = null;
var G__11337 = (0);
var G__11338 = (0);
seq__11307_11316 = G__11335;
chunk__11308_11317 = G__11336;
count__11309_11318 = G__11337;
i__11310_11319 = G__11338;
continue;
}
} else {
}
}
break;
}
}
}

var new_ks = ((cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound))?newk:clojure.set.difference.call(null,cljs.core.set.call(null,newk),cljs.core.set.call(null,oldk)));
if(cljs.core.empty_QMARK_.call(null,new_ks)){
return null;
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newks!!!!!!!","compo-newks!!!!!!!",1607733632),tiltontec.cell.base.ia_type.call(null,me),cljs.core.count.call(null,new_ks));

var seq__11311 = cljs.core.seq.call(null,new_ks);
var chunk__11312 = null;
var count__11313 = (0);
var i__11314 = (0);
while(true){
if((i__11314 < count__11313)){
var k = cljs.core._nth.call(null,chunk__11312,i__11314);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__11339 = seq__11311;
var G__11340 = chunk__11312;
var G__11341 = count__11313;
var G__11342 = (i__11314 + (1));
seq__11311 = G__11339;
chunk__11312 = G__11340;
count__11313 = G__11341;
i__11314 = G__11342;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11311);
if(temp__4425__auto__){
var seq__11311__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11311__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__11311__$1);
var G__11343 = cljs.core.chunk_rest.call(null,seq__11311__$1);
var G__11344 = c__7021__auto__;
var G__11345 = cljs.core.count.call(null,c__7021__auto__);
var G__11346 = (0);
seq__11311 = G__11343;
chunk__11312 = G__11344;
count__11313 = G__11345;
i__11314 = G__11346;
continue;
} else {
var k = cljs.core.first.call(null,seq__11311__$1);
if(cljs.core.truth_(tiltontec.cell.base.ia_type_QMARK_.call(null,k,new cljs.core.Keyword("tiltontec.qxia.widget","m.Form","tiltontec.qxia.widget/m.Form",-664926146)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"addk","addk",-135835531),new cljs.core.Keyword(null,"compo-newk-add","compo-newk-add",1109141498),tiltontec.cell.base.ia_type.call(null,me),tiltontec.cell.base.ia_type.call(null,k));

tiltontec.qxia.base.qx_add_kid.call(null,me,k);
}

var G__11347 = cljs.core.next.call(null,seq__11311__$1);
var G__11348 = null;
var G__11349 = (0);
var G__11350 = (0);
seq__11311 = G__11347;
chunk__11312 = G__11348;
count__11313 = G__11349;
i__11314 = G__11350;
continue;
}
} else {
return null;
}
}
break;
}
}
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slot-data","slot-data",1146367809),new cljs.core.Keyword("tiltontec.qxia.types","m.Picker","tiltontec.qxia.types/m.Picker",-1343372926)], null),(function (_,me,new$,old,c){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
var p = tiltontec.qxia.base.qxme.call(null,me);
if(cljs.core.not_EQ_.call(null,old,tiltontec.cell.base.unbound)){
var seq__11351_11359 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,old)));
var chunk__11352_11360 = null;
var count__11353_11361 = (0);
var i__11354_11362 = (0);
while(true){
if((i__11354_11362 < count__11353_11361)){
var n_11363 = cljs.core._nth.call(null,chunk__11352_11360,i__11354_11362);
p.removeSlot(n_11363);

var G__11364 = seq__11351_11359;
var G__11365 = chunk__11352_11360;
var G__11366 = count__11353_11361;
var G__11367 = (i__11354_11362 + (1));
seq__11351_11359 = G__11364;
chunk__11352_11360 = G__11365;
count__11353_11361 = G__11366;
i__11354_11362 = G__11367;
continue;
} else {
var temp__4425__auto___11368 = cljs.core.seq.call(null,seq__11351_11359);
if(temp__4425__auto___11368){
var seq__11351_11369__$1 = temp__4425__auto___11368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11351_11369__$1)){
var c__7021__auto___11370 = cljs.core.chunk_first.call(null,seq__11351_11369__$1);
var G__11371 = cljs.core.chunk_rest.call(null,seq__11351_11369__$1);
var G__11372 = c__7021__auto___11370;
var G__11373 = cljs.core.count.call(null,c__7021__auto___11370);
var G__11374 = (0);
seq__11351_11359 = G__11371;
chunk__11352_11360 = G__11372;
count__11353_11361 = G__11373;
i__11354_11362 = G__11374;
continue;
} else {
var n_11375 = cljs.core.first.call(null,seq__11351_11369__$1);
p.removeSlot(n_11375);

var G__11376 = cljs.core.next.call(null,seq__11351_11369__$1);
var G__11377 = null;
var G__11378 = (0);
var G__11379 = (0);
seq__11351_11359 = G__11376;
chunk__11352_11360 = G__11377;
count__11353_11361 = G__11378;
i__11354_11362 = G__11379;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__11355 = cljs.core.seq.call(null,new$);
var chunk__11356 = null;
var count__11357 = (0);
var i__11358 = (0);
while(true){
if((i__11358 < count__11357)){
var sd = cljs.core._nth.call(null,chunk__11356,i__11358);
var da_11380 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_11380);

var G__11381 = seq__11355;
var G__11382 = chunk__11356;
var G__11383 = count__11357;
var G__11384 = (i__11358 + (1));
seq__11355 = G__11381;
chunk__11356 = G__11382;
count__11357 = G__11383;
i__11358 = G__11384;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11355);
if(temp__4425__auto__){
var seq__11355__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11355__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__11355__$1);
var G__11385 = cljs.core.chunk_rest.call(null,seq__11355__$1);
var G__11386 = c__7021__auto__;
var G__11387 = cljs.core.count.call(null,c__7021__auto__);
var G__11388 = (0);
seq__11355 = G__11385;
chunk__11356 = G__11386;
count__11357 = G__11387;
i__11358 = G__11388;
continue;
} else {
var sd = cljs.core.first.call(null,seq__11355__$1);
var da_11389 = (new qx.data.Array(cljs.core.clj__GT_js.call(null,sd)));
p.addSlot(da_11389);

var G__11390 = cljs.core.next.call(null,seq__11355__$1);
var G__11391 = null;
var G__11392 = (0);
var G__11393 = (0);
seq__11355 = G__11390;
chunk__11356 = G__11391;
count__11357 = G__11392;
i__11358 = G__11393;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator-fn","validator-fn",-1098691070),new cljs.core.Keyword("tiltontec.qxia.types","m.Input","tiltontec.qxia.types/m.Input",-509810846)], null),(function (_,me,new_fn,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(new_fn)){
var form = tiltontec.qxia.base.qxme.call(null,tiltontec.model.core.qx_par.call(null,me));
if(cljs.core.truth_(form)){
} else {
throw (new Error("Assert failed: form"));
}

var vmgr = form.getValidationManager();
return vmgr.add(tiltontec.qxia.base.qxme.call(null,me),new_fn);
} else {
return null;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("tiltontec.qxia.types","m.MValue","tiltontec.qxia.types/m.MValue",-994870885)], null),(function (_,me,new$,old,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
return tiltontec.qxia.base.qxme.call(null,me).setValue(new$);
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawing","drawing",1181749528),new cljs.core.Keyword("tiltontec.qxia.types","m.Canvas","tiltontec.qxia.types/m.Canvas",-1210794783)], null),(function (_,me,new_fn,___$1,___$2){
if(cljs.core.truth_(new_fn)){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
return new_fn.call(null,me);
}));
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword("tiltontec.qxia.types","m.Widget","tiltontec.qxia.types/m.Widget",2103465403)], null),(function (_,me,new_anchor,___$1){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2-post-make-qx","2-post-make-qx",57273184),me], null),(function (opcode,defer_info){
if(cljs.core.truth_(new_anchor)){
return tiltontec.qxia.base.qxme.call(null,me).setAnchor(tiltontec.qxia.base.qxme.call(null,new_anchor));
} else {
return null;
}
}));
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("tiltontec.qxia.types","TextField","tiltontec.qxia.types/TextField",953963089)], null),(function (_,me,new$,___$1,___$2){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-make-qx","post-make-qx",-332979639),me], null),(function (opcode,defer_info){
return tiltontec.qxia.base.qxme.call(null,me).setValue(new$);
}));
}));
