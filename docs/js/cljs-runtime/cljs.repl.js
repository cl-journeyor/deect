goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21460){
var map__21461 = p__21460;
var map__21461__$1 = cljs.core.__destructure_map(map__21461);
var m = map__21461__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21461__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21461__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21468_21701 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21469_21702 = null;
var count__21470_21703 = (0);
var i__21471_21704 = (0);
while(true){
if((i__21471_21704 < count__21470_21703)){
var f_21705 = chunk__21469_21702.cljs$core$IIndexed$_nth$arity$2(null,i__21471_21704);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21705], 0));


var G__21706 = seq__21468_21701;
var G__21707 = chunk__21469_21702;
var G__21708 = count__21470_21703;
var G__21709 = (i__21471_21704 + (1));
seq__21468_21701 = G__21706;
chunk__21469_21702 = G__21707;
count__21470_21703 = G__21708;
i__21471_21704 = G__21709;
continue;
} else {
var temp__5804__auto___21710 = cljs.core.seq(seq__21468_21701);
if(temp__5804__auto___21710){
var seq__21468_21711__$1 = temp__5804__auto___21710;
if(cljs.core.chunked_seq_QMARK_(seq__21468_21711__$1)){
var c__5525__auto___21712 = cljs.core.chunk_first(seq__21468_21711__$1);
var G__21713 = cljs.core.chunk_rest(seq__21468_21711__$1);
var G__21714 = c__5525__auto___21712;
var G__21715 = cljs.core.count(c__5525__auto___21712);
var G__21716 = (0);
seq__21468_21701 = G__21713;
chunk__21469_21702 = G__21714;
count__21470_21703 = G__21715;
i__21471_21704 = G__21716;
continue;
} else {
var f_21717 = cljs.core.first(seq__21468_21711__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21717], 0));


var G__21718 = cljs.core.next(seq__21468_21711__$1);
var G__21719 = null;
var G__21720 = (0);
var G__21721 = (0);
seq__21468_21701 = G__21718;
chunk__21469_21702 = G__21719;
count__21470_21703 = G__21720;
i__21471_21704 = G__21721;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21722 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21722], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21722)))?cljs.core.second(arglists_21722):arglists_21722)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21478_21723 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21479_21724 = null;
var count__21480_21725 = (0);
var i__21481_21726 = (0);
while(true){
if((i__21481_21726 < count__21480_21725)){
var vec__21573_21727 = chunk__21479_21724.cljs$core$IIndexed$_nth$arity$2(null,i__21481_21726);
var name_21728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21573_21727,(0),null);
var map__21576_21729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21573_21727,(1),null);
var map__21576_21730__$1 = cljs.core.__destructure_map(map__21576_21729);
var doc_21731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21576_21730__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21576_21730__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21728], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21732], 0));

if(cljs.core.truth_(doc_21731)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21731], 0));
} else {
}


var G__21735 = seq__21478_21723;
var G__21736 = chunk__21479_21724;
var G__21737 = count__21480_21725;
var G__21738 = (i__21481_21726 + (1));
seq__21478_21723 = G__21735;
chunk__21479_21724 = G__21736;
count__21480_21725 = G__21737;
i__21481_21726 = G__21738;
continue;
} else {
var temp__5804__auto___21740 = cljs.core.seq(seq__21478_21723);
if(temp__5804__auto___21740){
var seq__21478_21741__$1 = temp__5804__auto___21740;
if(cljs.core.chunked_seq_QMARK_(seq__21478_21741__$1)){
var c__5525__auto___21742 = cljs.core.chunk_first(seq__21478_21741__$1);
var G__21743 = cljs.core.chunk_rest(seq__21478_21741__$1);
var G__21744 = c__5525__auto___21742;
var G__21745 = cljs.core.count(c__5525__auto___21742);
var G__21746 = (0);
seq__21478_21723 = G__21743;
chunk__21479_21724 = G__21744;
count__21480_21725 = G__21745;
i__21481_21726 = G__21746;
continue;
} else {
var vec__21589_21747 = cljs.core.first(seq__21478_21741__$1);
var name_21748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21589_21747,(0),null);
var map__21592_21749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21589_21747,(1),null);
var map__21592_21750__$1 = cljs.core.__destructure_map(map__21592_21749);
var doc_21751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21592_21750__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21592_21750__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21748], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21752], 0));

if(cljs.core.truth_(doc_21751)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21751], 0));
} else {
}


var G__21753 = cljs.core.next(seq__21478_21741__$1);
var G__21754 = null;
var G__21755 = (0);
var G__21756 = (0);
seq__21478_21723 = G__21753;
chunk__21479_21724 = G__21754;
count__21480_21725 = G__21755;
i__21481_21726 = G__21756;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__21594 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21595 = null;
var count__21596 = (0);
var i__21597 = (0);
while(true){
if((i__21597 < count__21596)){
var role = chunk__21595.cljs$core$IIndexed$_nth$arity$2(null,i__21597);
var temp__5804__auto___21757__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21757__$1)){
var spec_21758 = temp__5804__auto___21757__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21758)], 0));
} else {
}


var G__21759 = seq__21594;
var G__21760 = chunk__21595;
var G__21761 = count__21596;
var G__21762 = (i__21597 + (1));
seq__21594 = G__21759;
chunk__21595 = G__21760;
count__21596 = G__21761;
i__21597 = G__21762;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__21594);
if(temp__5804__auto____$1){
var seq__21594__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21594__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21594__$1);
var G__21763 = cljs.core.chunk_rest(seq__21594__$1);
var G__21764 = c__5525__auto__;
var G__21765 = cljs.core.count(c__5525__auto__);
var G__21766 = (0);
seq__21594 = G__21763;
chunk__21595 = G__21764;
count__21596 = G__21765;
i__21597 = G__21766;
continue;
} else {
var role = cljs.core.first(seq__21594__$1);
var temp__5804__auto___21767__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21767__$2)){
var spec_21768 = temp__5804__auto___21767__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21768)], 0));
} else {
}


var G__21769 = cljs.core.next(seq__21594__$1);
var G__21770 = null;
var G__21771 = (0);
var G__21772 = (0);
seq__21594 = G__21769;
chunk__21595 = G__21770;
count__21596 = G__21771;
i__21597 = G__21772;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21613 = datafied_throwable;
var map__21613__$1 = cljs.core.__destructure_map(map__21613);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21613__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21614 = cljs.core.last(via);
var map__21614__$1 = cljs.core.__destructure_map(map__21614);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21615 = data;
var map__21615__$1 = cljs.core.__destructure_map(map__21615);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21616 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__21616__$1 = cljs.core.__destructure_map(map__21616);
var top_data = map__21616__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21616__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21617 = phase;
var G__21617__$1 = (((G__21617 instanceof cljs.core.Keyword))?G__21617.fqn:null);
switch (G__21617__$1) {
case "read-source":
var map__21618 = data;
var map__21618__$1 = cljs.core.__destructure_map(map__21618);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21618__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21618__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21619 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__21619__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21619,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21619);
var G__21619__$2 = (cljs.core.truth_((function (){var fexpr__21620 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21620.cljs$core$IFn$_invoke$arity$1 ? fexpr__21620.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21620.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21619__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21619__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21619__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21619__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21621 = top_data;
var G__21621__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21621,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21621);
var G__21621__$2 = (cljs.core.truth_((function (){var fexpr__21622 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21622.cljs$core$IFn$_invoke$arity$1 ? fexpr__21622.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21622.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21621__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21621__$1);
var G__21621__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21621__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21621__$2);
var G__21621__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21621__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21621__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21621__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21621__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21623 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21623,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21623,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21623,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21623,(3),null);
var G__21626 = top_data;
var G__21626__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21626,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21626);
var G__21626__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21626__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21626__$1);
var G__21626__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21626__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21626__$2);
var G__21626__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21626__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21626__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21626__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21626__$4;
}

break;
case "execution":
var vec__21627 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21627,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21627,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21627,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21627,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21612_SHARP_){
var or__5002__auto__ = (p1__21612_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__21631 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21631.cljs$core$IFn$_invoke$arity$1 ? fexpr__21631.cljs$core$IFn$_invoke$arity$1(p1__21612_SHARP_) : fexpr__21631.call(null,p1__21612_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__21633 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21633__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21633,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21633);
var G__21633__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21633__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21633__$1);
var G__21633__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21633__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21633__$2);
var G__21633__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21633__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21633__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21633__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21633__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21617__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21646){
var map__21650 = p__21646;
var map__21650__$1 = cljs.core.__destructure_map(map__21650);
var triage_data = map__21650__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21650__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21650__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21650__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21650__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21650__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21650__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21650__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21650__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21651 = phase;
var G__21651__$1 = (((G__21651 instanceof cljs.core.Keyword))?G__21651.fqn:null);
switch (G__21651__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21655 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21656 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21657 = loc;
var G__21658 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21659_21778 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21660_21779 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21661_21780 = true;
var _STAR_print_fn_STAR__temp_val__21662_21781 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21661_21780);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21662_21781);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21644_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21644_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21660_21779);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21659_21778);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21655,G__21656,G__21657,G__21658) : format.call(null,G__21655,G__21656,G__21657,G__21658));

break;
case "macroexpansion":
var G__21663 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21664 = cause_type;
var G__21665 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21666 = loc;
var G__21667 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21663,G__21664,G__21665,G__21666,G__21667) : format.call(null,G__21663,G__21664,G__21665,G__21666,G__21667));

break;
case "compile-syntax-check":
var G__21668 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21669 = cause_type;
var G__21670 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21671 = loc;
var G__21672 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21668,G__21669,G__21670,G__21671,G__21672) : format.call(null,G__21668,G__21669,G__21670,G__21671,G__21672));

break;
case "compilation":
var G__21673 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21674 = cause_type;
var G__21675 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21676 = loc;
var G__21677 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21673,G__21674,G__21675,G__21676,G__21677) : format.call(null,G__21673,G__21674,G__21675,G__21676,G__21677));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21678 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21679 = symbol;
var G__21680 = loc;
var G__21681 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21682_21782 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21683_21783 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21684_21784 = true;
var _STAR_print_fn_STAR__temp_val__21685_21785 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21684_21784);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21685_21785);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21645_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21645_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21683_21783);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21682_21782);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21678,G__21679,G__21680,G__21681) : format.call(null,G__21678,G__21679,G__21680,G__21681));
} else {
var G__21695 = "Execution error%s at %s(%s).\n%s\n";
var G__21696 = cause_type;
var G__21697 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21698 = loc;
var G__21699 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21695,G__21696,G__21697,G__21698,G__21699) : format.call(null,G__21695,G__21696,G__21697,G__21698,G__21699));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21651__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
