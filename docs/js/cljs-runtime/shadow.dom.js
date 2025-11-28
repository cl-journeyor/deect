goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16066 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16066(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16067 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16067(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__15721 = coll;
var G__15722 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__15721,G__15722) : shadow.dom.lazy_native_coll_seq.call(null,G__15721,G__15722));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__15731 = arguments.length;
switch (G__15731) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__15733 = arguments.length;
switch (G__15733) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__15735 = arguments.length;
switch (G__15735) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__15737 = arguments.length;
switch (G__15737) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__15739 = arguments.length;
switch (G__15739) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__15741 = arguments.length;
switch (G__15741) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e15744){if((e15744 instanceof Object)){
var e = e15744;
return console.log("didnt support attachEvent",el,e);
} else {
throw e15744;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__15749 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__15750 = null;
var count__15751 = (0);
var i__15752 = (0);
while(true){
if((i__15752 < count__15751)){
var el = chunk__15750.cljs$core$IIndexed$_nth$arity$2(null,i__15752);
var handler_16074__$1 = ((function (seq__15749,chunk__15750,count__15751,i__15752,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15749,chunk__15750,count__15751,i__15752,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16074__$1);


var G__16075 = seq__15749;
var G__16076 = chunk__15750;
var G__16077 = count__15751;
var G__16078 = (i__15752 + (1));
seq__15749 = G__16075;
chunk__15750 = G__16076;
count__15751 = G__16077;
i__15752 = G__16078;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15749);
if(temp__5804__auto__){
var seq__15749__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15749__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15749__$1);
var G__16079 = cljs.core.chunk_rest(seq__15749__$1);
var G__16080 = c__5525__auto__;
var G__16081 = cljs.core.count(c__5525__auto__);
var G__16082 = (0);
seq__15749 = G__16079;
chunk__15750 = G__16080;
count__15751 = G__16081;
i__15752 = G__16082;
continue;
} else {
var el = cljs.core.first(seq__15749__$1);
var handler_16083__$1 = ((function (seq__15749,chunk__15750,count__15751,i__15752,el,seq__15749__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15749,chunk__15750,count__15751,i__15752,el,seq__15749__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16083__$1);


var G__16084 = cljs.core.next(seq__15749__$1);
var G__16085 = null;
var G__16086 = (0);
var G__16087 = (0);
seq__15749 = G__16084;
chunk__15750 = G__16085;
count__15751 = G__16086;
i__15752 = G__16087;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__15762 = arguments.length;
switch (G__15762) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__15763 = cljs.core.seq(events);
var chunk__15764 = null;
var count__15765 = (0);
var i__15766 = (0);
while(true){
if((i__15766 < count__15765)){
var vec__15773 = chunk__15764.cljs$core$IIndexed$_nth$arity$2(null,i__15766);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15773,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15773,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16089 = seq__15763;
var G__16090 = chunk__15764;
var G__16091 = count__15765;
var G__16092 = (i__15766 + (1));
seq__15763 = G__16089;
chunk__15764 = G__16090;
count__15765 = G__16091;
i__15766 = G__16092;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15763);
if(temp__5804__auto__){
var seq__15763__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15763__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15763__$1);
var G__16093 = cljs.core.chunk_rest(seq__15763__$1);
var G__16094 = c__5525__auto__;
var G__16095 = cljs.core.count(c__5525__auto__);
var G__16096 = (0);
seq__15763 = G__16093;
chunk__15764 = G__16094;
count__15765 = G__16095;
i__15766 = G__16096;
continue;
} else {
var vec__15776 = cljs.core.first(seq__15763__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15776,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15776,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16097 = cljs.core.next(seq__15763__$1);
var G__16098 = null;
var G__16099 = (0);
var G__16100 = (0);
seq__15763 = G__16097;
chunk__15764 = G__16098;
count__15765 = G__16099;
i__15766 = G__16100;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__15779 = cljs.core.seq(styles);
var chunk__15780 = null;
var count__15781 = (0);
var i__15782 = (0);
while(true){
if((i__15782 < count__15781)){
var vec__15789 = chunk__15780.cljs$core$IIndexed$_nth$arity$2(null,i__15782);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15789,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15789,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16101 = seq__15779;
var G__16102 = chunk__15780;
var G__16103 = count__15781;
var G__16104 = (i__15782 + (1));
seq__15779 = G__16101;
chunk__15780 = G__16102;
count__15781 = G__16103;
i__15782 = G__16104;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15779);
if(temp__5804__auto__){
var seq__15779__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15779__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15779__$1);
var G__16105 = cljs.core.chunk_rest(seq__15779__$1);
var G__16106 = c__5525__auto__;
var G__16107 = cljs.core.count(c__5525__auto__);
var G__16108 = (0);
seq__15779 = G__16105;
chunk__15780 = G__16106;
count__15781 = G__16107;
i__15782 = G__16108;
continue;
} else {
var vec__15792 = cljs.core.first(seq__15779__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15792,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15792,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16109 = cljs.core.next(seq__15779__$1);
var G__16110 = null;
var G__16111 = (0);
var G__16112 = (0);
seq__15779 = G__16109;
chunk__15780 = G__16110;
count__15781 = G__16111;
i__15782 = G__16112;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__15795_16113 = key;
var G__15795_16114__$1 = (((G__15795_16113 instanceof cljs.core.Keyword))?G__15795_16113.fqn:null);
switch (G__15795_16114__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16116 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_16116,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_16116,"aria-");
}
})())){
el.setAttribute(ks_16116,value);
} else {
(el[ks_16116] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__15796){
var map__15797 = p__15796;
var map__15797__$1 = cljs.core.__destructure_map(map__15797);
var props = map__15797__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15797__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__15798 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15798,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15798,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15798,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__15801 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__15801,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__15801;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__15803 = arguments.length;
switch (G__15803) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__15805){
var vec__15806 = p__15805;
var seq__15807 = cljs.core.seq(vec__15806);
var first__15808 = cljs.core.first(seq__15807);
var seq__15807__$1 = cljs.core.next(seq__15807);
var nn = first__15808;
var first__15808__$1 = cljs.core.first(seq__15807__$1);
var seq__15807__$2 = cljs.core.next(seq__15807__$1);
var np = first__15808__$1;
var nc = seq__15807__$2;
var node = vec__15806;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15809 = nn;
var G__15810 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15809,G__15810) : create_fn.call(null,G__15809,G__15810));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15811 = nn;
var G__15812 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15811,G__15812) : create_fn.call(null,G__15811,G__15812));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__15813 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15813,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15813,(1),null);
var seq__15818_16118 = cljs.core.seq(node_children);
var chunk__15819_16119 = null;
var count__15820_16120 = (0);
var i__15821_16121 = (0);
while(true){
if((i__15821_16121 < count__15820_16120)){
var child_struct_16122 = chunk__15819_16119.cljs$core$IIndexed$_nth$arity$2(null,i__15821_16121);
var children_16123 = shadow.dom.dom_node(child_struct_16122);
if(cljs.core.seq_QMARK_(children_16123)){
var seq__15834_16124 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16123));
var chunk__15836_16125 = null;
var count__15837_16126 = (0);
var i__15838_16127 = (0);
while(true){
if((i__15838_16127 < count__15837_16126)){
var child_16128 = chunk__15836_16125.cljs$core$IIndexed$_nth$arity$2(null,i__15838_16127);
if(cljs.core.truth_(child_16128)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16128);


var G__16129 = seq__15834_16124;
var G__16130 = chunk__15836_16125;
var G__16131 = count__15837_16126;
var G__16132 = (i__15838_16127 + (1));
seq__15834_16124 = G__16129;
chunk__15836_16125 = G__16130;
count__15837_16126 = G__16131;
i__15838_16127 = G__16132;
continue;
} else {
var G__16133 = seq__15834_16124;
var G__16134 = chunk__15836_16125;
var G__16135 = count__15837_16126;
var G__16136 = (i__15838_16127 + (1));
seq__15834_16124 = G__16133;
chunk__15836_16125 = G__16134;
count__15837_16126 = G__16135;
i__15838_16127 = G__16136;
continue;
}
} else {
var temp__5804__auto___16137 = cljs.core.seq(seq__15834_16124);
if(temp__5804__auto___16137){
var seq__15834_16139__$1 = temp__5804__auto___16137;
if(cljs.core.chunked_seq_QMARK_(seq__15834_16139__$1)){
var c__5525__auto___16140 = cljs.core.chunk_first(seq__15834_16139__$1);
var G__16141 = cljs.core.chunk_rest(seq__15834_16139__$1);
var G__16142 = c__5525__auto___16140;
var G__16143 = cljs.core.count(c__5525__auto___16140);
var G__16144 = (0);
seq__15834_16124 = G__16141;
chunk__15836_16125 = G__16142;
count__15837_16126 = G__16143;
i__15838_16127 = G__16144;
continue;
} else {
var child_16145 = cljs.core.first(seq__15834_16139__$1);
if(cljs.core.truth_(child_16145)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16145);


var G__16146 = cljs.core.next(seq__15834_16139__$1);
var G__16147 = null;
var G__16148 = (0);
var G__16149 = (0);
seq__15834_16124 = G__16146;
chunk__15836_16125 = G__16147;
count__15837_16126 = G__16148;
i__15838_16127 = G__16149;
continue;
} else {
var G__16151 = cljs.core.next(seq__15834_16139__$1);
var G__16152 = null;
var G__16153 = (0);
var G__16154 = (0);
seq__15834_16124 = G__16151;
chunk__15836_16125 = G__16152;
count__15837_16126 = G__16153;
i__15838_16127 = G__16154;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16123);
}


var G__16155 = seq__15818_16118;
var G__16156 = chunk__15819_16119;
var G__16157 = count__15820_16120;
var G__16158 = (i__15821_16121 + (1));
seq__15818_16118 = G__16155;
chunk__15819_16119 = G__16156;
count__15820_16120 = G__16157;
i__15821_16121 = G__16158;
continue;
} else {
var temp__5804__auto___16159 = cljs.core.seq(seq__15818_16118);
if(temp__5804__auto___16159){
var seq__15818_16160__$1 = temp__5804__auto___16159;
if(cljs.core.chunked_seq_QMARK_(seq__15818_16160__$1)){
var c__5525__auto___16161 = cljs.core.chunk_first(seq__15818_16160__$1);
var G__16162 = cljs.core.chunk_rest(seq__15818_16160__$1);
var G__16163 = c__5525__auto___16161;
var G__16164 = cljs.core.count(c__5525__auto___16161);
var G__16165 = (0);
seq__15818_16118 = G__16162;
chunk__15819_16119 = G__16163;
count__15820_16120 = G__16164;
i__15821_16121 = G__16165;
continue;
} else {
var child_struct_16166 = cljs.core.first(seq__15818_16160__$1);
var children_16167 = shadow.dom.dom_node(child_struct_16166);
if(cljs.core.seq_QMARK_(children_16167)){
var seq__15840_16168 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16167));
var chunk__15842_16169 = null;
var count__15843_16170 = (0);
var i__15844_16171 = (0);
while(true){
if((i__15844_16171 < count__15843_16170)){
var child_16172 = chunk__15842_16169.cljs$core$IIndexed$_nth$arity$2(null,i__15844_16171);
if(cljs.core.truth_(child_16172)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16172);


var G__16185 = seq__15840_16168;
var G__16186 = chunk__15842_16169;
var G__16187 = count__15843_16170;
var G__16188 = (i__15844_16171 + (1));
seq__15840_16168 = G__16185;
chunk__15842_16169 = G__16186;
count__15843_16170 = G__16187;
i__15844_16171 = G__16188;
continue;
} else {
var G__16189 = seq__15840_16168;
var G__16190 = chunk__15842_16169;
var G__16191 = count__15843_16170;
var G__16192 = (i__15844_16171 + (1));
seq__15840_16168 = G__16189;
chunk__15842_16169 = G__16190;
count__15843_16170 = G__16191;
i__15844_16171 = G__16192;
continue;
}
} else {
var temp__5804__auto___16193__$1 = cljs.core.seq(seq__15840_16168);
if(temp__5804__auto___16193__$1){
var seq__15840_16194__$1 = temp__5804__auto___16193__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15840_16194__$1)){
var c__5525__auto___16196 = cljs.core.chunk_first(seq__15840_16194__$1);
var G__16197 = cljs.core.chunk_rest(seq__15840_16194__$1);
var G__16198 = c__5525__auto___16196;
var G__16199 = cljs.core.count(c__5525__auto___16196);
var G__16200 = (0);
seq__15840_16168 = G__16197;
chunk__15842_16169 = G__16198;
count__15843_16170 = G__16199;
i__15844_16171 = G__16200;
continue;
} else {
var child_16201 = cljs.core.first(seq__15840_16194__$1);
if(cljs.core.truth_(child_16201)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16201);


var G__16202 = cljs.core.next(seq__15840_16194__$1);
var G__16203 = null;
var G__16204 = (0);
var G__16205 = (0);
seq__15840_16168 = G__16202;
chunk__15842_16169 = G__16203;
count__15843_16170 = G__16204;
i__15844_16171 = G__16205;
continue;
} else {
var G__16206 = cljs.core.next(seq__15840_16194__$1);
var G__16207 = null;
var G__16208 = (0);
var G__16209 = (0);
seq__15840_16168 = G__16206;
chunk__15842_16169 = G__16207;
count__15843_16170 = G__16208;
i__15844_16171 = G__16209;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16167);
}


var G__16210 = cljs.core.next(seq__15818_16160__$1);
var G__16211 = null;
var G__16212 = (0);
var G__16213 = (0);
seq__15818_16118 = G__16210;
chunk__15819_16119 = G__16211;
count__15820_16120 = G__16212;
i__15821_16121 = G__16213;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__15847 = cljs.core.seq(node);
var chunk__15848 = null;
var count__15849 = (0);
var i__15850 = (0);
while(true){
if((i__15850 < count__15849)){
var n = chunk__15848.cljs$core$IIndexed$_nth$arity$2(null,i__15850);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16228 = seq__15847;
var G__16229 = chunk__15848;
var G__16230 = count__15849;
var G__16231 = (i__15850 + (1));
seq__15847 = G__16228;
chunk__15848 = G__16229;
count__15849 = G__16230;
i__15850 = G__16231;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15847);
if(temp__5804__auto__){
var seq__15847__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15847__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15847__$1);
var G__16232 = cljs.core.chunk_rest(seq__15847__$1);
var G__16233 = c__5525__auto__;
var G__16234 = cljs.core.count(c__5525__auto__);
var G__16235 = (0);
seq__15847 = G__16232;
chunk__15848 = G__16233;
count__15849 = G__16234;
i__15850 = G__16235;
continue;
} else {
var n = cljs.core.first(seq__15847__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16236 = cljs.core.next(seq__15847__$1);
var G__16237 = null;
var G__16238 = (0);
var G__16239 = (0);
seq__15847 = G__16236;
chunk__15848 = G__16237;
count__15849 = G__16238;
i__15850 = G__16239;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__15852 = arguments.length;
switch (G__15852) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__15854 = arguments.length;
switch (G__15854) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__15856 = arguments.length;
switch (G__15856) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16243 = arguments.length;
var i__5727__auto___16244 = (0);
while(true){
if((i__5727__auto___16244 < len__5726__auto___16243)){
args__5732__auto__.push((arguments[i__5727__auto___16244]));

var G__16245 = (i__5727__auto___16244 + (1));
i__5727__auto___16244 = G__16245;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__15858_16246 = cljs.core.seq(nodes);
var chunk__15859_16247 = null;
var count__15860_16248 = (0);
var i__15861_16249 = (0);
while(true){
if((i__15861_16249 < count__15860_16248)){
var node_16250 = chunk__15859_16247.cljs$core$IIndexed$_nth$arity$2(null,i__15861_16249);
fragment.appendChild(shadow.dom._to_dom(node_16250));


var G__16251 = seq__15858_16246;
var G__16252 = chunk__15859_16247;
var G__16253 = count__15860_16248;
var G__16254 = (i__15861_16249 + (1));
seq__15858_16246 = G__16251;
chunk__15859_16247 = G__16252;
count__15860_16248 = G__16253;
i__15861_16249 = G__16254;
continue;
} else {
var temp__5804__auto___16255 = cljs.core.seq(seq__15858_16246);
if(temp__5804__auto___16255){
var seq__15858_16256__$1 = temp__5804__auto___16255;
if(cljs.core.chunked_seq_QMARK_(seq__15858_16256__$1)){
var c__5525__auto___16257 = cljs.core.chunk_first(seq__15858_16256__$1);
var G__16258 = cljs.core.chunk_rest(seq__15858_16256__$1);
var G__16259 = c__5525__auto___16257;
var G__16260 = cljs.core.count(c__5525__auto___16257);
var G__16261 = (0);
seq__15858_16246 = G__16258;
chunk__15859_16247 = G__16259;
count__15860_16248 = G__16260;
i__15861_16249 = G__16261;
continue;
} else {
var node_16262 = cljs.core.first(seq__15858_16256__$1);
fragment.appendChild(shadow.dom._to_dom(node_16262));


var G__16263 = cljs.core.next(seq__15858_16256__$1);
var G__16264 = null;
var G__16265 = (0);
var G__16266 = (0);
seq__15858_16246 = G__16263;
chunk__15859_16247 = G__16264;
count__15860_16248 = G__16265;
i__15861_16249 = G__16266;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq15857){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15857));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__15865_16267 = cljs.core.seq(scripts);
var chunk__15866_16268 = null;
var count__15867_16269 = (0);
var i__15868_16270 = (0);
while(true){
if((i__15868_16270 < count__15867_16269)){
var vec__15875_16271 = chunk__15866_16268.cljs$core$IIndexed$_nth$arity$2(null,i__15868_16270);
var script_tag_16272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15875_16271,(0),null);
var script_body_16273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15875_16271,(1),null);
eval(script_body_16273);


var G__16274 = seq__15865_16267;
var G__16275 = chunk__15866_16268;
var G__16276 = count__15867_16269;
var G__16277 = (i__15868_16270 + (1));
seq__15865_16267 = G__16274;
chunk__15866_16268 = G__16275;
count__15867_16269 = G__16276;
i__15868_16270 = G__16277;
continue;
} else {
var temp__5804__auto___16278 = cljs.core.seq(seq__15865_16267);
if(temp__5804__auto___16278){
var seq__15865_16279__$1 = temp__5804__auto___16278;
if(cljs.core.chunked_seq_QMARK_(seq__15865_16279__$1)){
var c__5525__auto___16280 = cljs.core.chunk_first(seq__15865_16279__$1);
var G__16281 = cljs.core.chunk_rest(seq__15865_16279__$1);
var G__16282 = c__5525__auto___16280;
var G__16283 = cljs.core.count(c__5525__auto___16280);
var G__16284 = (0);
seq__15865_16267 = G__16281;
chunk__15866_16268 = G__16282;
count__15867_16269 = G__16283;
i__15868_16270 = G__16284;
continue;
} else {
var vec__15878_16285 = cljs.core.first(seq__15865_16279__$1);
var script_tag_16286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15878_16285,(0),null);
var script_body_16287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15878_16285,(1),null);
eval(script_body_16287);


var G__16288 = cljs.core.next(seq__15865_16279__$1);
var G__16289 = null;
var G__16290 = (0);
var G__16291 = (0);
seq__15865_16267 = G__16288;
chunk__15866_16268 = G__16289;
count__15867_16269 = G__16290;
i__15868_16270 = G__16291;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__15881){
var vec__15882 = p__15881;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15882,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15882,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__15886 = arguments.length;
switch (G__15886) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__15887 = cljs.core.seq(style_keys);
var chunk__15888 = null;
var count__15889 = (0);
var i__15890 = (0);
while(true){
if((i__15890 < count__15889)){
var it = chunk__15888.cljs$core$IIndexed$_nth$arity$2(null,i__15890);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16293 = seq__15887;
var G__16294 = chunk__15888;
var G__16295 = count__15889;
var G__16296 = (i__15890 + (1));
seq__15887 = G__16293;
chunk__15888 = G__16294;
count__15889 = G__16295;
i__15890 = G__16296;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15887);
if(temp__5804__auto__){
var seq__15887__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15887__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15887__$1);
var G__16297 = cljs.core.chunk_rest(seq__15887__$1);
var G__16298 = c__5525__auto__;
var G__16299 = cljs.core.count(c__5525__auto__);
var G__16300 = (0);
seq__15887 = G__16297;
chunk__15888 = G__16298;
count__15889 = G__16299;
i__15890 = G__16300;
continue;
} else {
var it = cljs.core.first(seq__15887__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16301 = cljs.core.next(seq__15887__$1);
var G__16302 = null;
var G__16303 = (0);
var G__16304 = (0);
seq__15887 = G__16301;
chunk__15888 = G__16302;
count__15889 = G__16303;
i__15890 = G__16304;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15892,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15896 = k15892;
var G__15896__$1 = (((G__15896 instanceof cljs.core.Keyword))?G__15896.fqn:null);
switch (G__15896__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15892,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15897){
var vec__15898 = p__15897;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15898,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15898,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15891){
var self__ = this;
var G__15891__$1 = this;
return (new cljs.core.RecordIter((0),G__15891__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15893,other15894){
var self__ = this;
var this15893__$1 = this;
return (((!((other15894 == null)))) && ((((this15893__$1.constructor === other15894.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15893__$1.x,other15894.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15893__$1.y,other15894.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15893__$1.__extmap,other15894.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15892){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15904 = k15892;
var G__15904__$1 = (((G__15904 instanceof cljs.core.Keyword))?G__15904.fqn:null);
switch (G__15904__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15892);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15891){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15905 = cljs.core.keyword_identical_QMARK_;
var expr__15906 = k__5309__auto__;
if(cljs.core.truth_((pred__15905.cljs$core$IFn$_invoke$arity$2 ? pred__15905.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15906) : pred__15905.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__15906)))){
return (new shadow.dom.Coordinate(G__15891,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15905.cljs$core$IFn$_invoke$arity$2 ? pred__15905.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15906) : pred__15905.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__15906)))){
return (new shadow.dom.Coordinate(self__.x,G__15891,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15891),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15891){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__15891,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__15895){
var extmap__5342__auto__ = (function (){var G__15908 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15895,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__15895)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15908);
} else {
return G__15908;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__15895),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__15895),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15910,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15914 = k15910;
var G__15914__$1 = (((G__15914 instanceof cljs.core.Keyword))?G__15914.fqn:null);
switch (G__15914__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15910,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15915){
var vec__15916 = p__15915;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15916,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15916,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15909){
var self__ = this;
var G__15909__$1 = this;
return (new cljs.core.RecordIter((0),G__15909__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15911,other15912){
var self__ = this;
var this15911__$1 = this;
return (((!((other15912 == null)))) && ((((this15911__$1.constructor === other15912.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15911__$1.w,other15912.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15911__$1.h,other15912.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15911__$1.__extmap,other15912.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15910){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15919 = k15910;
var G__15919__$1 = (((G__15919 instanceof cljs.core.Keyword))?G__15919.fqn:null);
switch (G__15919__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15910);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15909){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15920 = cljs.core.keyword_identical_QMARK_;
var expr__15921 = k__5309__auto__;
if(cljs.core.truth_((pred__15920.cljs$core$IFn$_invoke$arity$2 ? pred__15920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15921) : pred__15920.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15921)))){
return (new shadow.dom.Size(G__15909,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15920.cljs$core$IFn$_invoke$arity$2 ? pred__15920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15921) : pred__15920.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15921)))){
return (new shadow.dom.Size(self__.w,G__15909,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15909),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15909){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15909,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15913){
var extmap__5342__auto__ = (function (){var G__15927 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15913,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15913)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15927);
} else {
return G__15927;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15913),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15913),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__16389 = (i + (1));
var G__16390 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16389;
ret = G__16390;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15935){
var vec__15936 = p__15935;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15944 = arguments.length;
switch (G__15944) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16396 = ps;
var G__16397 = (i + (1));
el__$1 = G__16396;
i = G__16397;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15948 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15948,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15948,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15948,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15953_16398 = cljs.core.seq(props);
var chunk__15954_16399 = null;
var count__15955_16400 = (0);
var i__15956_16401 = (0);
while(true){
if((i__15956_16401 < count__15955_16400)){
var vec__16013_16402 = chunk__15954_16399.cljs$core$IIndexed$_nth$arity$2(null,i__15956_16401);
var k_16403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16013_16402,(0),null);
var v_16404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16013_16402,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16403);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16403),v_16404);


var G__16407 = seq__15953_16398;
var G__16408 = chunk__15954_16399;
var G__16409 = count__15955_16400;
var G__16410 = (i__15956_16401 + (1));
seq__15953_16398 = G__16407;
chunk__15954_16399 = G__16408;
count__15955_16400 = G__16409;
i__15956_16401 = G__16410;
continue;
} else {
var temp__5804__auto___16411 = cljs.core.seq(seq__15953_16398);
if(temp__5804__auto___16411){
var seq__15953_16412__$1 = temp__5804__auto___16411;
if(cljs.core.chunked_seq_QMARK_(seq__15953_16412__$1)){
var c__5525__auto___16413 = cljs.core.chunk_first(seq__15953_16412__$1);
var G__16414 = cljs.core.chunk_rest(seq__15953_16412__$1);
var G__16415 = c__5525__auto___16413;
var G__16416 = cljs.core.count(c__5525__auto___16413);
var G__16417 = (0);
seq__15953_16398 = G__16414;
chunk__15954_16399 = G__16415;
count__15955_16400 = G__16416;
i__15956_16401 = G__16417;
continue;
} else {
var vec__16019_16439 = cljs.core.first(seq__15953_16412__$1);
var k_16440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16019_16439,(0),null);
var v_16441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16019_16439,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16440);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16440),v_16441);


var G__16442 = cljs.core.next(seq__15953_16412__$1);
var G__16443 = null;
var G__16444 = (0);
var G__16445 = (0);
seq__15953_16398 = G__16442;
chunk__15954_16399 = G__16443;
count__15955_16400 = G__16444;
i__15956_16401 = G__16445;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16025 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16025,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16025,(1),null);
var seq__16028_16446 = cljs.core.seq(node_children);
var chunk__16030_16447 = null;
var count__16031_16448 = (0);
var i__16032_16449 = (0);
while(true){
if((i__16032_16449 < count__16031_16448)){
var child_struct_16450 = chunk__16030_16447.cljs$core$IIndexed$_nth$arity$2(null,i__16032_16449);
if((!((child_struct_16450 == null)))){
if(typeof child_struct_16450 === 'string'){
var text_16451 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16451),child_struct_16450].join(''));
} else {
var children_16452 = shadow.dom.svg_node(child_struct_16450);
if(cljs.core.seq_QMARK_(children_16452)){
var seq__16046_16453 = cljs.core.seq(children_16452);
var chunk__16048_16454 = null;
var count__16049_16455 = (0);
var i__16050_16456 = (0);
while(true){
if((i__16050_16456 < count__16049_16455)){
var child_16457 = chunk__16048_16454.cljs$core$IIndexed$_nth$arity$2(null,i__16050_16456);
if(cljs.core.truth_(child_16457)){
node.appendChild(child_16457);


var G__16458 = seq__16046_16453;
var G__16459 = chunk__16048_16454;
var G__16460 = count__16049_16455;
var G__16461 = (i__16050_16456 + (1));
seq__16046_16453 = G__16458;
chunk__16048_16454 = G__16459;
count__16049_16455 = G__16460;
i__16050_16456 = G__16461;
continue;
} else {
var G__16462 = seq__16046_16453;
var G__16463 = chunk__16048_16454;
var G__16464 = count__16049_16455;
var G__16465 = (i__16050_16456 + (1));
seq__16046_16453 = G__16462;
chunk__16048_16454 = G__16463;
count__16049_16455 = G__16464;
i__16050_16456 = G__16465;
continue;
}
} else {
var temp__5804__auto___16466 = cljs.core.seq(seq__16046_16453);
if(temp__5804__auto___16466){
var seq__16046_16467__$1 = temp__5804__auto___16466;
if(cljs.core.chunked_seq_QMARK_(seq__16046_16467__$1)){
var c__5525__auto___16469 = cljs.core.chunk_first(seq__16046_16467__$1);
var G__16470 = cljs.core.chunk_rest(seq__16046_16467__$1);
var G__16471 = c__5525__auto___16469;
var G__16472 = cljs.core.count(c__5525__auto___16469);
var G__16473 = (0);
seq__16046_16453 = G__16470;
chunk__16048_16454 = G__16471;
count__16049_16455 = G__16472;
i__16050_16456 = G__16473;
continue;
} else {
var child_16474 = cljs.core.first(seq__16046_16467__$1);
if(cljs.core.truth_(child_16474)){
node.appendChild(child_16474);


var G__16475 = cljs.core.next(seq__16046_16467__$1);
var G__16476 = null;
var G__16477 = (0);
var G__16478 = (0);
seq__16046_16453 = G__16475;
chunk__16048_16454 = G__16476;
count__16049_16455 = G__16477;
i__16050_16456 = G__16478;
continue;
} else {
var G__16479 = cljs.core.next(seq__16046_16467__$1);
var G__16480 = null;
var G__16481 = (0);
var G__16482 = (0);
seq__16046_16453 = G__16479;
chunk__16048_16454 = G__16480;
count__16049_16455 = G__16481;
i__16050_16456 = G__16482;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16452);
}
}


var G__16483 = seq__16028_16446;
var G__16484 = chunk__16030_16447;
var G__16485 = count__16031_16448;
var G__16486 = (i__16032_16449 + (1));
seq__16028_16446 = G__16483;
chunk__16030_16447 = G__16484;
count__16031_16448 = G__16485;
i__16032_16449 = G__16486;
continue;
} else {
var G__16487 = seq__16028_16446;
var G__16488 = chunk__16030_16447;
var G__16489 = count__16031_16448;
var G__16490 = (i__16032_16449 + (1));
seq__16028_16446 = G__16487;
chunk__16030_16447 = G__16488;
count__16031_16448 = G__16489;
i__16032_16449 = G__16490;
continue;
}
} else {
var temp__5804__auto___16491 = cljs.core.seq(seq__16028_16446);
if(temp__5804__auto___16491){
var seq__16028_16493__$1 = temp__5804__auto___16491;
if(cljs.core.chunked_seq_QMARK_(seq__16028_16493__$1)){
var c__5525__auto___16494 = cljs.core.chunk_first(seq__16028_16493__$1);
var G__16495 = cljs.core.chunk_rest(seq__16028_16493__$1);
var G__16496 = c__5525__auto___16494;
var G__16497 = cljs.core.count(c__5525__auto___16494);
var G__16498 = (0);
seq__16028_16446 = G__16495;
chunk__16030_16447 = G__16496;
count__16031_16448 = G__16497;
i__16032_16449 = G__16498;
continue;
} else {
var child_struct_16499 = cljs.core.first(seq__16028_16493__$1);
if((!((child_struct_16499 == null)))){
if(typeof child_struct_16499 === 'string'){
var text_16500 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16500),child_struct_16499].join(''));
} else {
var children_16501 = shadow.dom.svg_node(child_struct_16499);
if(cljs.core.seq_QMARK_(children_16501)){
var seq__16054_16502 = cljs.core.seq(children_16501);
var chunk__16056_16503 = null;
var count__16057_16504 = (0);
var i__16058_16505 = (0);
while(true){
if((i__16058_16505 < count__16057_16504)){
var child_16507 = chunk__16056_16503.cljs$core$IIndexed$_nth$arity$2(null,i__16058_16505);
if(cljs.core.truth_(child_16507)){
node.appendChild(child_16507);


var G__16508 = seq__16054_16502;
var G__16509 = chunk__16056_16503;
var G__16510 = count__16057_16504;
var G__16511 = (i__16058_16505 + (1));
seq__16054_16502 = G__16508;
chunk__16056_16503 = G__16509;
count__16057_16504 = G__16510;
i__16058_16505 = G__16511;
continue;
} else {
var G__16512 = seq__16054_16502;
var G__16513 = chunk__16056_16503;
var G__16514 = count__16057_16504;
var G__16515 = (i__16058_16505 + (1));
seq__16054_16502 = G__16512;
chunk__16056_16503 = G__16513;
count__16057_16504 = G__16514;
i__16058_16505 = G__16515;
continue;
}
} else {
var temp__5804__auto___16516__$1 = cljs.core.seq(seq__16054_16502);
if(temp__5804__auto___16516__$1){
var seq__16054_16517__$1 = temp__5804__auto___16516__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16054_16517__$1)){
var c__5525__auto___16518 = cljs.core.chunk_first(seq__16054_16517__$1);
var G__16519 = cljs.core.chunk_rest(seq__16054_16517__$1);
var G__16520 = c__5525__auto___16518;
var G__16521 = cljs.core.count(c__5525__auto___16518);
var G__16522 = (0);
seq__16054_16502 = G__16519;
chunk__16056_16503 = G__16520;
count__16057_16504 = G__16521;
i__16058_16505 = G__16522;
continue;
} else {
var child_16523 = cljs.core.first(seq__16054_16517__$1);
if(cljs.core.truth_(child_16523)){
node.appendChild(child_16523);


var G__16524 = cljs.core.next(seq__16054_16517__$1);
var G__16525 = null;
var G__16526 = (0);
var G__16527 = (0);
seq__16054_16502 = G__16524;
chunk__16056_16503 = G__16525;
count__16057_16504 = G__16526;
i__16058_16505 = G__16527;
continue;
} else {
var G__16529 = cljs.core.next(seq__16054_16517__$1);
var G__16530 = null;
var G__16531 = (0);
var G__16532 = (0);
seq__16054_16502 = G__16529;
chunk__16056_16503 = G__16530;
count__16057_16504 = G__16531;
i__16058_16505 = G__16532;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16501);
}
}


var G__16534 = cljs.core.next(seq__16028_16493__$1);
var G__16535 = null;
var G__16536 = (0);
var G__16537 = (0);
seq__16028_16446 = G__16534;
chunk__16030_16447 = G__16535;
count__16031_16448 = G__16536;
i__16032_16449 = G__16537;
continue;
} else {
var G__16538 = cljs.core.next(seq__16028_16493__$1);
var G__16539 = null;
var G__16540 = (0);
var G__16541 = (0);
seq__16028_16446 = G__16538;
chunk__16030_16447 = G__16539;
count__16031_16448 = G__16540;
i__16032_16449 = G__16541;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16549 = arguments.length;
var i__5727__auto___16550 = (0);
while(true){
if((i__5727__auto___16550 < len__5726__auto___16549)){
args__5732__auto__.push((arguments[i__5727__auto___16550]));

var G__16551 = (i__5727__auto___16550 + (1));
i__5727__auto___16550 = G__16551;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16063){
var G__16064 = cljs.core.first(seq16063);
var seq16063__$1 = cljs.core.next(seq16063);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16064,seq16063__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
