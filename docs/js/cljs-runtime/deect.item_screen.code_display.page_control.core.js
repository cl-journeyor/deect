goog.provide('deect.item_screen.code_display.page_control.core');
var render_fn__23218__auto___23414 = (function deect$item_screen$code_display$page_control$core$page_control(p__23404){
var map__23405 = p__23404;
var map__23405__$1 = cljs.core.__destructure_map(map__23405);
var selected_code_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23405__$1,new cljs.core.Keyword(null,"selected-code-key","selected-code-key",-504395578));
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__23406 = cljs.core.deref(deect.atoms.selected_code);
return (fexpr__23406.cljs$core$IFn$_invoke$arity$1 ? fexpr__23406.cljs$core$IFn$_invoke$arity$1(selected_code_key) : fexpr__23406.call(null,selected_code_key));
})());
var code_coll_last_index = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ccrec","ccrec",1801814798).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(deect.atoms.selected_lang_item)),lang)) - (1));
var update_page_BANG_ = (function (p__23407){
var map__23408 = p__23407;
var map__23408__$1 = cljs.core.__destructure_map(map__23408);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23408__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(deect.atoms.selected_code,(function (p1__23403_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23403_SHARP_,selected_code_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),lang,new cljs.core.Keyword(null,"page","page",849072397),value], null));
}));
});
var pc_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),"page-control-buttons",new cljs.core.Keyword(null,"text","text",-1790561697),"page-control-text"], null),new cljs.core.Keyword(null,"min","min",444991522),(0)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-control-container","div.page-control-container",1429862082),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reusable.page_control.page_control,(((code_coll_last_index < (0)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pc_props,new cljs.core.Keyword(null,"value","value",305978217),(0)),new cljs.core.Keyword(null,"max","max",61366548),(0)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pc_props,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__23409 = cljs.core.deref(deect.atoms.selected_code);
return (fexpr__23409.cljs$core$IFn$_invoke$arity$1 ? fexpr__23409.cljs$core$IFn$_invoke$arity$1(selected_code_key) : fexpr__23409.call(null,selected_code_key));
})())),new cljs.core.Keyword(null,"max","max",61366548),code_coll_last_index),new cljs.core.Keyword(null,"on-change","on-change",-732046149),update_page_BANG_))], null)], null);
});
deect.item_screen.code_display.page_control.core.page_control = reagent.impl.component.memo((function deect$item_screen$code_display$page_control$core$page_control(jsprops__23219__auto__){
var jsprops2__23220__auto__ = ({});
(jsprops2__23220__auto__.reagentRender = render_fn__23218__auto___23414);

Object.assign(jsprops2__23220__auto__,jsprops__23219__auto__);

return reagent.impl.component.functional_render(reagent.impl.template._STAR_current_default_compiler_STAR_,jsprops2__23220__auto__);
}));

(deect.item_screen.code_display.page_control.core.page_control.reagent_component = true);

(deect.item_screen.code_display.page_control.core.page_control.displayName = "page-control");

Object.defineProperty(deect.item_screen.code_display.page_control.core.page_control,"name",(function (){var obj23413 = ({"value":"page-control","writable":false});
return obj23413;
})());

//# sourceMappingURL=deect.item_screen.code_display.page_control.core.js.map
