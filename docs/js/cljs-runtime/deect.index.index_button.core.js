goog.provide('deect.index.index_button.core');
var render_fn__11998__auto___12081 = (function deect$index$index_button$core$index_button(p__12073){
var map__12074 = p__12073;
var map__12074__$1 = cljs.core.__destructure_map(map__12074);
var lang_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12074__$1,new cljs.core.Keyword(null,"lang-item","lang-item",1424667244));
var fetch_ccrec = (function deect$index$index_button$core$index_button_$_fetch_ccrec(){
return fetch(["data/code-coll-recs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(lang_item)),".json"].join('')).then((function (p1__12072_SHARP_){
return p1__12072_SHARP_.text();
})).then((function (t){
sessionStorage.setItem(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(lang_item),t);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(deect.atoms.selected_lang_item,(function (_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lang_item,new cljs.core.Keyword(null,"ccrec","ccrec",1801814798),deect.utils.raw__GT_map(t));
}));
})).catch((function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Couldn't fetch the selected record."], 0));
}));
});
var handler = (function deect$index$index_button$core$index_button_$_handler(){
var temp__5802__auto__ = sessionStorage.getItem(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(lang_item));
if(cljs.core.truth_(temp__5802__auto__)){
var raw_ccrec = temp__5802__auto__;
try{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(deect.atoms.selected_lang_item,(function (_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lang_item,new cljs.core.Keyword(null,"ccrec","ccrec",1801814798),deect.utils.raw__GT_map(raw_ccrec));
}));
}catch (e12076){if((e12076 instanceof SyntaxError)){
var _ = e12076;
return fetch_ccrec();
} else {
throw e12076;

}
}} else {
return fetch_ccrec();
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["index-button ",cljs.core.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(lang_item))].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lang_item)], null);
});
deect.index.index_button.core.index_button = reagent.impl.component.memo((function deect$index$index_button$core$index_button(jsprops__11999__auto__){
var jsprops2__12000__auto__ = ({});
(jsprops2__12000__auto__.reagentRender = render_fn__11998__auto___12081);

Object.assign(jsprops2__12000__auto__,jsprops__11999__auto__);

return reagent.impl.component.functional_render(reagent.impl.template._STAR_current_default_compiler_STAR_,jsprops2__12000__auto__);
}));

(deect.index.index_button.core.index_button.reagent_component = true);

(deect.index.index_button.core.index_button.displayName = "index-button");

Object.defineProperty(deect.index.index_button.core.index_button,"name",(function (){var obj12080 = ({"value":"index-button","writable":false});
return obj12080;
})());

//# sourceMappingURL=deect.index.index_button.core.js.map
