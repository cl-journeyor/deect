goog.provide('deect.app');
var render_fn__11998__auto___12070 = (function deect$app$app(){
if(cljs.core.truth_(cljs.core.deref(deect.atoms.selected_lang_item))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.item_screen.core.item_screen], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.index.core.index], null);
}
});
deect.app.app = reagent.impl.component.memo((function deect$app$app(jsprops__11999__auto__){
var jsprops2__12000__auto__ = ({});
(jsprops2__12000__auto__.reagentRender = render_fn__11998__auto___12070);

Object.assign(jsprops2__12000__auto__,jsprops__11999__auto__);

return reagent.impl.component.functional_render(reagent.impl.template._STAR_current_default_compiler_STAR_,jsprops2__12000__auto__);
}));

(deect.app.app.reagent_component = true);

(deect.app.app.displayName = "app");

Object.defineProperty(deect.app.app,"name",(function (){var obj12069 = ({"value":"app","writable":false});
return obj12069;
})());

//# sourceMappingURL=deect.app.js.map
