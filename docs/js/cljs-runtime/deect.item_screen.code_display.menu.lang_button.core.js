goog.provide('deect.item_screen.code_display.menu.lang_button.core');
var render_fn__11998__auto___12183 = (function deect$item_screen$code_display$menu$lang_button$core$lang_button(p__12175){
var map__12176 = p__12175;
var map__12176__$1 = cljs.core.__destructure_map(map__12176);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12176__$1,new cljs.core.Keyword(null,"group","group",582596132));
var lang_keyword = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12176__$1,new cljs.core.Keyword(null,"lang-keyword","lang-keyword",691941429));
var lang_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12176__$1,new cljs.core.Keyword(null,"lang-name","lang-name",-433803018));
var show_code = (function deect$item_screen$code_display$menu$lang_button$core$lang_button_$_show_code(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(deect.atoms.selected_code,(function (prev){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev,group,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),lang_keyword,new cljs.core.Keyword(null,"page","page",849072397),(0)], null));
}));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.lang-button","button.lang-button",1822622821),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),lang_name,new cljs.core.Keyword(null,"on-click","on-click",1632826543),show_code,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lang_keyword,new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(deect.atoms.selected_code),group)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.lang-button-icon","img.lang-button-icon",546676732),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["/images/",cljs.core.name(lang_keyword),".png"].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),lang_name], null)], null)], null);
});
deect.item_screen.code_display.menu.lang_button.core.lang_button = reagent.impl.component.memo((function deect$item_screen$code_display$menu$lang_button$core$lang_button(jsprops__11999__auto__){
var jsprops2__12000__auto__ = ({});
(jsprops2__12000__auto__.reagentRender = render_fn__11998__auto___12183);

Object.assign(jsprops2__12000__auto__,jsprops__11999__auto__);

return reagent.impl.component.functional_render(reagent.impl.template._STAR_current_default_compiler_STAR_,jsprops2__12000__auto__);
}));

(deect.item_screen.code_display.menu.lang_button.core.lang_button.reagent_component = true);

(deect.item_screen.code_display.menu.lang_button.core.lang_button.displayName = "lang-button");

Object.defineProperty(deect.item_screen.code_display.menu.lang_button.core.lang_button,"name",(function (){var obj12180 = ({"value":"lang-button","writable":false});
return obj12180;
})());

//# sourceMappingURL=deect.item_screen.code_display.menu.lang_button.core.js.map
