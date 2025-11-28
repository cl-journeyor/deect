goog.provide('deect.item_screen.core');
var render_fn__11998__auto___12211 = (function deect$item_screen$core$item_screen(){
var reset_atoms = (function deect$item_screen$core$item_screen_$_reset_atoms(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(deect.atoms.selected_lang_item,(function (_){
return null;
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(deect.atoms.selected_code,(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),null,new cljs.core.Keyword(null,"page","page",849072397),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),null,new cljs.core.Keyword(null,"page","page",849072397),(0)], null)], null);
}));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(deect.atoms.selected_lang_item)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.exit-button","button.exit-button",1820440206),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),reset_atoms], null),"\u00D7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-text","div.header-text",1711458510),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(deect.atoms.selected_lang_item))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.displays","main.displays",-677942395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.item_screen.code_display.core.code_display,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-code-key","selected-code-key",-504395578),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.item_screen.code_display.core.code_display,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-code-key","selected-code-key",-504395578),(1)], null)], null)], null)], null);
});
deect.item_screen.core.item_screen = reagent.impl.component.memo((function deect$item_screen$core$item_screen(jsprops__11999__auto__){
var jsprops2__12000__auto__ = ({});
(jsprops2__12000__auto__.reagentRender = render_fn__11998__auto___12211);

Object.assign(jsprops2__12000__auto__,jsprops__11999__auto__);

return reagent.impl.component.functional_render(reagent.impl.template._STAR_current_default_compiler_STAR_,jsprops2__12000__auto__);
}));

(deect.item_screen.core.item_screen.reagent_component = true);

(deect.item_screen.core.item_screen.displayName = "item-screen");

Object.defineProperty(deect.item_screen.core.item_screen,"name",(function (){var obj12210 = ({"value":"item-screen","writable":false});
return obj12210;
})());

//# sourceMappingURL=deect.item_screen.core.js.map
