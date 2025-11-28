goog.provide('deect.index.core');
var render_fn__11998__auto___12093 = (function deect$index$core$index(){
var lang_items = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var fetch_lis = (function (){
return fetch("data/lang-items.json").then((function (p1__12082_SHARP_){
return p1__12082_SHARP_.text();
})).then((function (t){
sessionStorage.setItem("lang-items",t);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lang_items,(function (_){
return deect.utils.raw__GT_map(t);
}));
})).catch((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lang_items,(function (_){
return new cljs.core.Keyword(null,"fetch-error","fetch-error",1710778920);
}));
}));
});
var temp__5802__auto___12094 = sessionStorage.getItem("lang-items");
if(cljs.core.truth_(temp__5802__auto___12094)){
var raw_lis_12095 = temp__5802__auto___12094;
try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lang_items,(function (_){
return deect.utils.raw__GT_map(raw_lis_12095);
}));
}catch (e12083){if((e12083 instanceof SyntaxError)){
var __12096 = e12083;
fetch_lis();
} else {
throw e12083;

}
}} else {
fetch_lis();
}

return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.index","div.index",899698939),(function (){var G__12084 = cljs.core.deref(lang_items);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__12084)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Loading..."], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fetch-error","fetch-error",1710778920),G__12084)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Unexpected error"], null);
} else {
var iter__5480__auto__ = (function deect$index$core$index_$_iter__12085(s__12086){
return (new cljs.core.LazySeq(null,(function (){
var s__12086__$1 = s__12086;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12086__$1);
if(temp__5804__auto__){
var s__12086__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12086__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12086__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12088 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12087 = (0);
while(true){
if((i__12087 < size__5479__auto__)){
var li = cljs.core._nth(c__5478__auto__,i__12087);
cljs.core.chunk_append(b__12088,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.index.index_button.core.index_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(li),new cljs.core.Keyword(null,"lang-item","lang-item",1424667244),li], null)], null));

var G__12097 = (i__12087 + (1));
i__12087 = G__12097;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12088),deect$index$core$index_$_iter__12085(cljs.core.chunk_rest(s__12086__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12088),null);
}
} else {
var li = cljs.core.first(s__12086__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.index.index_button.core.index_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(li),new cljs.core.Keyword(null,"lang-item","lang-item",1424667244),li], null)], null),deect$index$core$index_$_iter__12085(cljs.core.rest(s__12086__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(lang_items));

}
}
})()], null);
});
});
deect.index.core.index = reagent.impl.component.memo((function deect$index$core$index(jsprops__11999__auto__){
var jsprops2__12000__auto__ = ({});
(jsprops2__12000__auto__.reagentRender = render_fn__11998__auto___12093);

Object.assign(jsprops2__12000__auto__,jsprops__11999__auto__);

return reagent.impl.component.functional_render(reagent.impl.template._STAR_current_default_compiler_STAR_,jsprops2__12000__auto__);
}));

(deect.index.core.index.reagent_component = true);

(deect.index.core.index.displayName = "index");

Object.defineProperty(deect.index.core.index,"name",(function (){var obj12092 = ({"value":"index","writable":false});
return obj12092;
})());

//# sourceMappingURL=deect.index.core.js.map
