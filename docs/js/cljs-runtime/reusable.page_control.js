goog.provide('reusable.page_control');
var render_fn__23218__auto___23402 = (function reusable$page_control$page_control(p__23394){
var map__23395 = p__23394;
var map__23395__$1 = cljs.core.__destructure_map(map__23395);
var map__23396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23395__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var map__23396__$1 = cljs.core.__destructure_map(map__23396);
var self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23396__$1,new cljs.core.Keyword(null,"self","self",-1547428899));
var buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23396__$1,new cljs.core.Keyword(null,"buttons","buttons",-1953831197));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23396__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23395__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23395__$1,new cljs.core.Keyword(null,"value","value",305978217),(1));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23395__$1,new cljs.core.Keyword(null,"min","min",444991522),(1));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23395__$1,new cljs.core.Keyword(null,"max","max",61366548),(3));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23395__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_){
return null;
}));
var pages = cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2(min,(max + (1))));
var current = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(((cljs.core.contains_QMARK_(pages,value))?value:min));
var swap_current_BANG_ = (function (f){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,f);

var G__23397 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(current)], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__23397) : on_change.call(null,G__23397));
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),self], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),buttons,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return swap_current_BANG_(cljs.core.dec);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current),min)], null),"\u25C1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),text], null),cljs.core.deref(current)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),buttons,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return swap_current_BANG_(cljs.core.inc);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current),max)], null),"\u25B7"], null)], null);
});
reusable.page_control.page_control = reagent.impl.component.memo((function reusable$page_control$page_control(jsprops__23219__auto__){
var jsprops2__23220__auto__ = ({});
(jsprops2__23220__auto__.reagentRender = render_fn__23218__auto___23402);

Object.assign(jsprops2__23220__auto__,jsprops__23219__auto__);

return reagent.impl.component.functional_render(reagent.impl.template._STAR_current_default_compiler_STAR_,jsprops2__23220__auto__);
}));

(reusable.page_control.page_control.reagent_component = true);

(reusable.page_control.page_control.displayName = "page-control");

Object.defineProperty(reusable.page_control.page_control,"name",(function (){var obj23401 = ({"value":"page-control","writable":false});
return obj23401;
})());

//# sourceMappingURL=reusable.page_control.js.map
