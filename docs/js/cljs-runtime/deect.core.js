goog.provide('deect.core');
deect.core.mount_root = (function deect$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.app.app], null),document.getElementById("app"));
});
deect.core.init_BANG_ = (function deect$core$init_BANG_(){
return deect.core.mount_root();
});
goog.exportSymbol('deect.core.init_BANG_', deect.core.init_BANG_);

//# sourceMappingURL=deect.core.js.map
