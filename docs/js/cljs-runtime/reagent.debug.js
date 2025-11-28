goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__22277__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22278__i = 0, G__22278__a = new Array(arguments.length -  0);
while (G__22278__i < G__22278__a.length) {G__22278__a[G__22278__i] = arguments[G__22278__i + 0]; ++G__22278__i;}
  args = new cljs.core.IndexedSeq(G__22278__a,0,null);
} 
return G__22277__delegate.call(this,args);};
G__22277.cljs$lang$maxFixedArity = 0;
G__22277.cljs$lang$applyTo = (function (arglist__22279){
var args = cljs.core.seq(arglist__22279);
return G__22277__delegate(args);
});
G__22277.cljs$core$IFn$_invoke$arity$variadic = G__22277__delegate;
return G__22277;
})()
);

(o.error = (function() { 
var G__22280__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22287__i = 0, G__22287__a = new Array(arguments.length -  0);
while (G__22287__i < G__22287__a.length) {G__22287__a[G__22287__i] = arguments[G__22287__i + 0]; ++G__22287__i;}
  args = new cljs.core.IndexedSeq(G__22287__a,0,null);
} 
return G__22280__delegate.call(this,args);};
G__22280.cljs$lang$maxFixedArity = 0;
G__22280.cljs$lang$applyTo = (function (arglist__22288){
var args = cljs.core.seq(arglist__22288);
return G__22280__delegate(args);
});
G__22280.cljs$core$IFn$_invoke$arity$variadic = G__22280__delegate;
return G__22280;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
