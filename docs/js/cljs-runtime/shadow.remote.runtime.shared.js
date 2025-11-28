goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__20599){
var map__20600 = p__20599;
var map__20600__$1 = cljs.core.__destructure_map(map__20600);
var runtime = map__20600__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20600__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_20663 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_20663)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__20601 = runtime;
var G__20602 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_20663);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__20601,G__20602) : shadow.remote.runtime.shared.process.call(null,G__20601,G__20602));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__20603,res){
var map__20604 = p__20603;
var map__20604__$1 = cljs.core.__destructure_map(map__20604);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20604__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20604__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__20605 = res;
var G__20605__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20605,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__20605);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20605__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__20605__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__20607 = arguments.length;
switch (G__20607) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__20608,msg,handlers,timeout_after_ms){
var map__20609 = p__20608;
var map__20609__$1 = cljs.core.__destructure_map(map__20609);
var runtime = map__20609__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20609__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20665 = arguments.length;
var i__5727__auto___20666 = (0);
while(true){
if((i__5727__auto___20666 < len__5726__auto___20665)){
args__5732__auto__.push((arguments[i__5727__auto___20666]));

var G__20667 = (i__5727__auto___20666 + (1));
i__5727__auto___20666 = G__20667;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__20615,ev,args){
var map__20616 = p__20615;
var map__20616__$1 = cljs.core.__destructure_map(map__20616);
var runtime = map__20616__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20616__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__20617 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__20620 = null;
var count__20621 = (0);
var i__20622 = (0);
while(true){
if((i__20622 < count__20621)){
var ext = chunk__20620.cljs$core$IIndexed$_nth$arity$2(null,i__20622);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20668 = seq__20617;
var G__20669 = chunk__20620;
var G__20670 = count__20621;
var G__20671 = (i__20622 + (1));
seq__20617 = G__20668;
chunk__20620 = G__20669;
count__20621 = G__20670;
i__20622 = G__20671;
continue;
} else {
var G__20672 = seq__20617;
var G__20673 = chunk__20620;
var G__20674 = count__20621;
var G__20675 = (i__20622 + (1));
seq__20617 = G__20672;
chunk__20620 = G__20673;
count__20621 = G__20674;
i__20622 = G__20675;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20617);
if(temp__5804__auto__){
var seq__20617__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20617__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20617__$1);
var G__20676 = cljs.core.chunk_rest(seq__20617__$1);
var G__20677 = c__5525__auto__;
var G__20678 = cljs.core.count(c__5525__auto__);
var G__20679 = (0);
seq__20617 = G__20676;
chunk__20620 = G__20677;
count__20621 = G__20678;
i__20622 = G__20679;
continue;
} else {
var ext = cljs.core.first(seq__20617__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20680 = cljs.core.next(seq__20617__$1);
var G__20681 = null;
var G__20682 = (0);
var G__20683 = (0);
seq__20617 = G__20680;
chunk__20620 = G__20681;
count__20621 = G__20682;
i__20622 = G__20683;
continue;
} else {
var G__20684 = cljs.core.next(seq__20617__$1);
var G__20685 = null;
var G__20686 = (0);
var G__20687 = (0);
seq__20617 = G__20684;
chunk__20620 = G__20685;
count__20621 = G__20686;
i__20622 = G__20687;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq20612){
var G__20613 = cljs.core.first(seq20612);
var seq20612__$1 = cljs.core.next(seq20612);
var G__20614 = cljs.core.first(seq20612__$1);
var seq20612__$2 = cljs.core.next(seq20612__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20613,G__20614,seq20612__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__20625,p__20626){
var map__20627 = p__20625;
var map__20627__$1 = cljs.core.__destructure_map(map__20627);
var runtime = map__20627__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20627__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__20628 = p__20626;
var map__20628__$1 = cljs.core.__destructure_map(map__20628);
var msg = map__20628__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20628__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__20629 = cljs.core.deref(state_ref);
var map__20629__$1 = cljs.core.__destructure_map(map__20629);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20629__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20629__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__20631,msg){
var map__20632 = p__20631;
var map__20632__$1 = cljs.core.__destructure_map(map__20632);
var runtime = map__20632__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20632__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__20633,key,p__20634){
var map__20635 = p__20633;
var map__20635__$1 = cljs.core.__destructure_map(map__20635);
var state = map__20635__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20635__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__20636 = p__20634;
var map__20636__$1 = cljs.core.__destructure_map(map__20636);
var spec = map__20636__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20636__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20636__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__20637,key,spec){
var map__20638 = p__20637;
var map__20638__$1 = cljs.core.__destructure_map(map__20638);
var runtime = map__20638__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20638__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___20688 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___20688 == null)){
} else {
var on_welcome_20689 = temp__5808__auto___20688;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_20689.cljs$core$IFn$_invoke$arity$0 ? on_welcome_20689.cljs$core$IFn$_invoke$arity$0() : on_welcome_20689.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__20639_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__20639_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__20640_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__20640_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__20641_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__20641_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__20642_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__20642_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__20643_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__20643_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__20644,key){
var map__20645 = p__20644;
var map__20645__$1 = cljs.core.__destructure_map(map__20645);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20645__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__20646,msg){
var map__20647 = p__20646;
var map__20647__$1 = cljs.core.__destructure_map(map__20647);
var runtime = map__20647__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20647__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__20648,p__20649){
var map__20650 = p__20648;
var map__20650__$1 = cljs.core.__destructure_map(map__20650);
var runtime = map__20650__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20650__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__20651 = p__20649;
var map__20651__$1 = cljs.core.__destructure_map(map__20651);
var msg = map__20651__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20651__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20651__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__20652 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__20654 = null;
var count__20655 = (0);
var i__20656 = (0);
while(true){
if((i__20656 < count__20655)){
var map__20661 = chunk__20654.cljs$core$IIndexed$_nth$arity$2(null,i__20656);
var map__20661__$1 = cljs.core.__destructure_map(map__20661);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20661__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__20692 = seq__20652;
var G__20693 = chunk__20654;
var G__20694 = count__20655;
var G__20695 = (i__20656 + (1));
seq__20652 = G__20692;
chunk__20654 = G__20693;
count__20655 = G__20694;
i__20656 = G__20695;
continue;
} else {
var G__20696 = seq__20652;
var G__20697 = chunk__20654;
var G__20698 = count__20655;
var G__20699 = (i__20656 + (1));
seq__20652 = G__20696;
chunk__20654 = G__20697;
count__20655 = G__20698;
i__20656 = G__20699;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20652);
if(temp__5804__auto__){
var seq__20652__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20652__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20652__$1);
var G__20700 = cljs.core.chunk_rest(seq__20652__$1);
var G__20701 = c__5525__auto__;
var G__20702 = cljs.core.count(c__5525__auto__);
var G__20703 = (0);
seq__20652 = G__20700;
chunk__20654 = G__20701;
count__20655 = G__20702;
i__20656 = G__20703;
continue;
} else {
var map__20662 = cljs.core.first(seq__20652__$1);
var map__20662__$1 = cljs.core.__destructure_map(map__20662);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20662__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__20704 = cljs.core.next(seq__20652__$1);
var G__20705 = null;
var G__20706 = (0);
var G__20707 = (0);
seq__20652 = G__20704;
chunk__20654 = G__20705;
count__20655 = G__20706;
i__20656 = G__20707;
continue;
} else {
var G__20708 = cljs.core.next(seq__20652__$1);
var G__20709 = null;
var G__20710 = (0);
var G__20711 = (0);
seq__20652 = G__20708;
chunk__20654 = G__20709;
count__20655 = G__20710;
i__20656 = G__20711;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
