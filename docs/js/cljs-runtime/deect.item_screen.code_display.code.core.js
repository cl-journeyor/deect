goog.provide('deect.item_screen.code_display.code.core');
var render_fn__23218__auto___23368 = (function deect$item_screen$code_display$code$core$code(p__23359){
var map__23360 = p__23359;
var map__23360__$1 = cljs.core.__destructure_map(map__23360);
var selected_code_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23360__$1,new cljs.core.Keyword(null,"selected-code-key","selected-code-key",-504395578));
var map__23361 = (function (){var fexpr__23362 = cljs.core.deref(deect.atoms.selected_code);
return (fexpr__23362.cljs$core$IFn$_invoke$arity$1 ? fexpr__23362.cljs$core$IFn$_invoke$arity$1(selected_code_key) : fexpr__23362.call(null,selected_code_key));
})();
var map__23361__$1 = cljs.core.__destructure_map(map__23361);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23361__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23361__$1,new cljs.core.Keyword(null,"page","page",849072397));
if(cljs.core.truth_(lang)){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23363 = new cljs.core.Keyword(null,"ccrec","ccrec",1801814798).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(deect.atoms.selected_lang_item));
return (lang.cljs$core$IFn$_invoke$arity$1 ? lang.cljs$core$IFn$_invoke$arity$1(G__23363) : lang.call(null,G__23363));
})(),page);
if(cljs.core.truth_(temp__5802__auto__)){
var content = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.display-content","pre.display-content",1281939516),content], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.display-message","div.display-message",236345005),"Not supported"], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.display-message","div.display-message",236345005),"Click a language from above"], null);
}
});
deect.item_screen.code_display.code.core.code = reagent.impl.component.memo((function deect$item_screen$code_display$code$core$code(jsprops__23219__auto__){
var jsprops2__23220__auto__ = ({});
(jsprops2__23220__auto__.reagentRender = render_fn__23218__auto___23368);

Object.assign(jsprops2__23220__auto__,jsprops__23219__auto__);

return reagent.impl.component.functional_render(reagent.impl.template._STAR_current_default_compiler_STAR_,jsprops2__23220__auto__);
}));

(deect.item_screen.code_display.code.core.code.reagent_component = true);

(deect.item_screen.code_display.code.core.code.displayName = "code");

Object.defineProperty(deect.item_screen.code_display.code.core.code,"name",(function (){var obj23367 = ({"value":"code","writable":false});
return obj23367;
})());

//# sourceMappingURL=deect.item_screen.code_display.code.core.js.map
