goog.provide('deect.item_screen.code_display.core');
var render_fn__11998__auto___12206 = (function deect$item_screen$code_display$core$code_display(p__12200){
var map__12201 = p__12200;
var map__12201__$1 = cljs.core.__destructure_map(map__12201);
var selected_code_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12201__$1,new cljs.core.Keyword(null,"selected-code-key","selected-code-key",-504395578));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["code-display-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_code_key)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.item_screen.code_display.menu.core.menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-code-key","selected-code-key",-504395578),selected_code_key], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.item_screen.code_display.code.core.code,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-code-key","selected-code-key",-504395578),selected_code_key], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.item_screen.code_display.page_control.core.page_control,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-code-key","selected-code-key",-504395578),selected_code_key], null)], null)], null);
});
deect.item_screen.code_display.core.code_display = reagent.impl.component.memo((function deect$item_screen$code_display$core$code_display(jsprops__11999__auto__){
var jsprops2__12000__auto__ = ({});
(jsprops2__12000__auto__.reagentRender = render_fn__11998__auto___12206);

Object.assign(jsprops2__12000__auto__,jsprops__11999__auto__);

return reagent.impl.component.functional_render(reagent.impl.template._STAR_current_default_compiler_STAR_,jsprops2__12000__auto__);
}));

(deect.item_screen.code_display.core.code_display.reagent_component = true);

(deect.item_screen.code_display.core.code_display.displayName = "code-display");

Object.defineProperty(deect.item_screen.code_display.core.code_display,"name",(function (){var obj12205 = ({"value":"code-display","writable":false});
return obj12205;
})());

//# sourceMappingURL=deect.item_screen.code_display.core.js.map
