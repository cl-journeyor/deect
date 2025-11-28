goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22637 = arguments.length;
var i__5727__auto___22638 = (0);
while(true){
if((i__5727__auto___22638 < len__5726__auto___22637)){
args__5732__auto__.push((arguments[i__5727__auto___22638]));

var G__22641 = (i__5727__auto___22638 + (1));
i__5727__auto___22638 = G__22641;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22173){
var G__22174 = cljs.core.first(seq22173);
var seq22173__$1 = cljs.core.next(seq22173);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22174,seq22173__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22180 = cljs.core.seq(sources);
var chunk__22181 = null;
var count__22182 = (0);
var i__22183 = (0);
while(true){
if((i__22183 < count__22182)){
var map__22208 = chunk__22181.cljs$core$IIndexed$_nth$arity$2(null,i__22183);
var map__22208__$1 = cljs.core.__destructure_map(map__22208);
var src = map__22208__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22208__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22208__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22208__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22208__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22212){var e_22647 = e22212;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22647);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22647.message)].join('')));
}

var G__22648 = seq__22180;
var G__22649 = chunk__22181;
var G__22650 = count__22182;
var G__22651 = (i__22183 + (1));
seq__22180 = G__22648;
chunk__22181 = G__22649;
count__22182 = G__22650;
i__22183 = G__22651;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22180);
if(temp__5804__auto__){
var seq__22180__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22180__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22180__$1);
var G__22652 = cljs.core.chunk_rest(seq__22180__$1);
var G__22653 = c__5525__auto__;
var G__22654 = cljs.core.count(c__5525__auto__);
var G__22655 = (0);
seq__22180 = G__22652;
chunk__22181 = G__22653;
count__22182 = G__22654;
i__22183 = G__22655;
continue;
} else {
var map__22216 = cljs.core.first(seq__22180__$1);
var map__22216__$1 = cljs.core.__destructure_map(map__22216);
var src = map__22216__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22216__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22216__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22216__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22216__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22221){var e_22656 = e22221;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22656);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22656.message)].join('')));
}

var G__22657 = cljs.core.next(seq__22180__$1);
var G__22658 = null;
var G__22659 = (0);
var G__22660 = (0);
seq__22180 = G__22657;
chunk__22181 = G__22658;
count__22182 = G__22659;
i__22183 = G__22660;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22249 = cljs.core.seq(js_requires);
var chunk__22251 = null;
var count__22252 = (0);
var i__22253 = (0);
while(true){
if((i__22253 < count__22252)){
var js_ns = chunk__22251.cljs$core$IIndexed$_nth$arity$2(null,i__22253);
var require_str_22663 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22663);


var G__22664 = seq__22249;
var G__22665 = chunk__22251;
var G__22666 = count__22252;
var G__22667 = (i__22253 + (1));
seq__22249 = G__22664;
chunk__22251 = G__22665;
count__22252 = G__22666;
i__22253 = G__22667;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22249);
if(temp__5804__auto__){
var seq__22249__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22249__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22249__$1);
var G__22668 = cljs.core.chunk_rest(seq__22249__$1);
var G__22669 = c__5525__auto__;
var G__22670 = cljs.core.count(c__5525__auto__);
var G__22671 = (0);
seq__22249 = G__22668;
chunk__22251 = G__22669;
count__22252 = G__22670;
i__22253 = G__22671;
continue;
} else {
var js_ns = cljs.core.first(seq__22249__$1);
var require_str_22672 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22672);


var G__22673 = cljs.core.next(seq__22249__$1);
var G__22674 = null;
var G__22675 = (0);
var G__22676 = (0);
seq__22249 = G__22673;
chunk__22251 = G__22674;
count__22252 = G__22675;
i__22253 = G__22676;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22275){
var map__22276 = p__22275;
var map__22276__$1 = cljs.core.__destructure_map(map__22276);
var msg = map__22276__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22276__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22276__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22281(s__22282){
return (new cljs.core.LazySeq(null,(function (){
var s__22282__$1 = s__22282;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22282__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22289 = cljs.core.first(xs__6360__auto__);
var map__22289__$1 = cljs.core.__destructure_map(map__22289);
var src = map__22289__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22289__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22289__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__22282__$1,map__22289,map__22289__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22276,map__22276__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22281_$_iter__22283(s__22284){
return (new cljs.core.LazySeq(null,((function (s__22282__$1,map__22289,map__22289__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22276,map__22276__$1,msg,info,reload_info){
return (function (){
var s__22284__$1 = s__22284;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22284__$1);
if(temp__5804__auto____$1){
var s__22284__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22284__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22284__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22286 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22285 = (0);
while(true){
if((i__22285 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__22285);
cljs.core.chunk_append(b__22286,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22679 = (i__22285 + (1));
i__22285 = G__22679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22286),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22281_$_iter__22283(cljs.core.chunk_rest(s__22284__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22286),null);
}
} else {
var warning = cljs.core.first(s__22284__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22281_$_iter__22283(cljs.core.rest(s__22284__$2)));
}
} else {
return null;
}
break;
}
});})(s__22282__$1,map__22289,map__22289__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22276,map__22276__$1,msg,info,reload_info))
,null,null));
});})(s__22282__$1,map__22289,map__22289__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22276,map__22276__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22281(cljs.core.rest(s__22282__$1)));
} else {
var G__22680 = cljs.core.rest(s__22282__$1);
s__22282__$1 = G__22680;
continue;
}
} else {
var G__22681 = cljs.core.rest(s__22282__$1);
s__22282__$1 = G__22681;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22290_22682 = cljs.core.seq(warnings);
var chunk__22291_22683 = null;
var count__22292_22684 = (0);
var i__22293_22685 = (0);
while(true){
if((i__22293_22685 < count__22292_22684)){
var map__22296_22686 = chunk__22291_22683.cljs$core$IIndexed$_nth$arity$2(null,i__22293_22685);
var map__22296_22687__$1 = cljs.core.__destructure_map(map__22296_22686);
var w_22688 = map__22296_22687__$1;
var msg_22689__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22296_22687__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22296_22687__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22296_22687__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22296_22687__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22692)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22690),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22691),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22689__$1)].join(''));


var G__22697 = seq__22290_22682;
var G__22698 = chunk__22291_22683;
var G__22699 = count__22292_22684;
var G__22700 = (i__22293_22685 + (1));
seq__22290_22682 = G__22697;
chunk__22291_22683 = G__22698;
count__22292_22684 = G__22699;
i__22293_22685 = G__22700;
continue;
} else {
var temp__5804__auto___22701 = cljs.core.seq(seq__22290_22682);
if(temp__5804__auto___22701){
var seq__22290_22702__$1 = temp__5804__auto___22701;
if(cljs.core.chunked_seq_QMARK_(seq__22290_22702__$1)){
var c__5525__auto___22703 = cljs.core.chunk_first(seq__22290_22702__$1);
var G__22704 = cljs.core.chunk_rest(seq__22290_22702__$1);
var G__22705 = c__5525__auto___22703;
var G__22706 = cljs.core.count(c__5525__auto___22703);
var G__22707 = (0);
seq__22290_22682 = G__22704;
chunk__22291_22683 = G__22705;
count__22292_22684 = G__22706;
i__22293_22685 = G__22707;
continue;
} else {
var map__22297_22708 = cljs.core.first(seq__22290_22702__$1);
var map__22297_22709__$1 = cljs.core.__destructure_map(map__22297_22708);
var w_22710 = map__22297_22709__$1;
var msg_22711__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22297_22709__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22297_22709__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22297_22709__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22297_22709__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22714)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22712),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22713),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22711__$1)].join(''));


var G__22715 = cljs.core.next(seq__22290_22702__$1);
var G__22716 = null;
var G__22717 = (0);
var G__22718 = (0);
seq__22290_22682 = G__22715;
chunk__22291_22683 = G__22716;
count__22292_22684 = G__22717;
i__22293_22685 = G__22718;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22274_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22274_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__22299 = node_uri;
G__22299.setQuery(null);

G__22299.setPath(new$);

return G__22299;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22300){
var map__22301 = p__22300;
var map__22301__$1 = cljs.core.__destructure_map(map__22301);
var msg = map__22301__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22301__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22301__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22302 = cljs.core.seq(updates);
var chunk__22304 = null;
var count__22305 = (0);
var i__22306 = (0);
while(true){
if((i__22306 < count__22305)){
var path = chunk__22304.cljs$core$IIndexed$_nth$arity$2(null,i__22306);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22444_22719 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22448_22720 = null;
var count__22449_22721 = (0);
var i__22450_22722 = (0);
while(true){
if((i__22450_22722 < count__22449_22721)){
var node_22723 = chunk__22448_22720.cljs$core$IIndexed$_nth$arity$2(null,i__22450_22722);
if(cljs.core.not(node_22723.shadow$old)){
var path_match_22724 = shadow.cljs.devtools.client.browser.match_paths(node_22723.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22724)){
var new_link_22725 = (function (){var G__22480 = node_22723.cloneNode(true);
G__22480.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22724),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22480;
})();
(node_22723.shadow$old = true);

(new_link_22725.onload = ((function (seq__22444_22719,chunk__22448_22720,count__22449_22721,i__22450_22722,seq__22302,chunk__22304,count__22305,i__22306,new_link_22725,path_match_22724,node_22723,path,map__22301,map__22301__$1,msg,updates,reload_info){
return (function (e){
var seq__22481_22726 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22483_22727 = null;
var count__22484_22728 = (0);
var i__22485_22729 = (0);
while(true){
if((i__22485_22729 < count__22484_22728)){
var map__22499_22730 = chunk__22483_22727.cljs$core$IIndexed$_nth$arity$2(null,i__22485_22729);
var map__22499_22731__$1 = cljs.core.__destructure_map(map__22499_22730);
var task_22732 = map__22499_22731__$1;
var fn_str_22733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22499_22731__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22499_22731__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22735 = goog.getObjectByName(fn_str_22733,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22734)].join(''));

(fn_obj_22735.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22735.cljs$core$IFn$_invoke$arity$2(path,new_link_22725) : fn_obj_22735.call(null,path,new_link_22725));


var G__22736 = seq__22481_22726;
var G__22737 = chunk__22483_22727;
var G__22738 = count__22484_22728;
var G__22739 = (i__22485_22729 + (1));
seq__22481_22726 = G__22736;
chunk__22483_22727 = G__22737;
count__22484_22728 = G__22738;
i__22485_22729 = G__22739;
continue;
} else {
var temp__5804__auto___22740 = cljs.core.seq(seq__22481_22726);
if(temp__5804__auto___22740){
var seq__22481_22741__$1 = temp__5804__auto___22740;
if(cljs.core.chunked_seq_QMARK_(seq__22481_22741__$1)){
var c__5525__auto___22742 = cljs.core.chunk_first(seq__22481_22741__$1);
var G__22743 = cljs.core.chunk_rest(seq__22481_22741__$1);
var G__22744 = c__5525__auto___22742;
var G__22745 = cljs.core.count(c__5525__auto___22742);
var G__22746 = (0);
seq__22481_22726 = G__22743;
chunk__22483_22727 = G__22744;
count__22484_22728 = G__22745;
i__22485_22729 = G__22746;
continue;
} else {
var map__22500_22747 = cljs.core.first(seq__22481_22741__$1);
var map__22500_22748__$1 = cljs.core.__destructure_map(map__22500_22747);
var task_22749 = map__22500_22748__$1;
var fn_str_22750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22500_22748__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22500_22748__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22752 = goog.getObjectByName(fn_str_22750,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22751)].join(''));

(fn_obj_22752.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22752.cljs$core$IFn$_invoke$arity$2(path,new_link_22725) : fn_obj_22752.call(null,path,new_link_22725));


var G__22753 = cljs.core.next(seq__22481_22741__$1);
var G__22754 = null;
var G__22755 = (0);
var G__22756 = (0);
seq__22481_22726 = G__22753;
chunk__22483_22727 = G__22754;
count__22484_22728 = G__22755;
i__22485_22729 = G__22756;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22723);
});})(seq__22444_22719,chunk__22448_22720,count__22449_22721,i__22450_22722,seq__22302,chunk__22304,count__22305,i__22306,new_link_22725,path_match_22724,node_22723,path,map__22301,map__22301__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22724], 0));

goog.dom.insertSiblingAfter(new_link_22725,node_22723);


var G__22757 = seq__22444_22719;
var G__22758 = chunk__22448_22720;
var G__22759 = count__22449_22721;
var G__22760 = (i__22450_22722 + (1));
seq__22444_22719 = G__22757;
chunk__22448_22720 = G__22758;
count__22449_22721 = G__22759;
i__22450_22722 = G__22760;
continue;
} else {
var G__22761 = seq__22444_22719;
var G__22762 = chunk__22448_22720;
var G__22763 = count__22449_22721;
var G__22764 = (i__22450_22722 + (1));
seq__22444_22719 = G__22761;
chunk__22448_22720 = G__22762;
count__22449_22721 = G__22763;
i__22450_22722 = G__22764;
continue;
}
} else {
var G__22765 = seq__22444_22719;
var G__22766 = chunk__22448_22720;
var G__22767 = count__22449_22721;
var G__22768 = (i__22450_22722 + (1));
seq__22444_22719 = G__22765;
chunk__22448_22720 = G__22766;
count__22449_22721 = G__22767;
i__22450_22722 = G__22768;
continue;
}
} else {
var temp__5804__auto___22769 = cljs.core.seq(seq__22444_22719);
if(temp__5804__auto___22769){
var seq__22444_22770__$1 = temp__5804__auto___22769;
if(cljs.core.chunked_seq_QMARK_(seq__22444_22770__$1)){
var c__5525__auto___22771 = cljs.core.chunk_first(seq__22444_22770__$1);
var G__22772 = cljs.core.chunk_rest(seq__22444_22770__$1);
var G__22773 = c__5525__auto___22771;
var G__22774 = cljs.core.count(c__5525__auto___22771);
var G__22775 = (0);
seq__22444_22719 = G__22772;
chunk__22448_22720 = G__22773;
count__22449_22721 = G__22774;
i__22450_22722 = G__22775;
continue;
} else {
var node_22776 = cljs.core.first(seq__22444_22770__$1);
if(cljs.core.not(node_22776.shadow$old)){
var path_match_22777 = shadow.cljs.devtools.client.browser.match_paths(node_22776.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22777)){
var new_link_22778 = (function (){var G__22501 = node_22776.cloneNode(true);
G__22501.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22777),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22501;
})();
(node_22776.shadow$old = true);

(new_link_22778.onload = ((function (seq__22444_22719,chunk__22448_22720,count__22449_22721,i__22450_22722,seq__22302,chunk__22304,count__22305,i__22306,new_link_22778,path_match_22777,node_22776,seq__22444_22770__$1,temp__5804__auto___22769,path,map__22301,map__22301__$1,msg,updates,reload_info){
return (function (e){
var seq__22502_22779 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22504_22780 = null;
var count__22505_22781 = (0);
var i__22506_22782 = (0);
while(true){
if((i__22506_22782 < count__22505_22781)){
var map__22510_22783 = chunk__22504_22780.cljs$core$IIndexed$_nth$arity$2(null,i__22506_22782);
var map__22510_22784__$1 = cljs.core.__destructure_map(map__22510_22783);
var task_22785 = map__22510_22784__$1;
var fn_str_22786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22510_22784__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22510_22784__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22788 = goog.getObjectByName(fn_str_22786,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22787)].join(''));

(fn_obj_22788.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22788.cljs$core$IFn$_invoke$arity$2(path,new_link_22778) : fn_obj_22788.call(null,path,new_link_22778));


var G__22791 = seq__22502_22779;
var G__22792 = chunk__22504_22780;
var G__22793 = count__22505_22781;
var G__22794 = (i__22506_22782 + (1));
seq__22502_22779 = G__22791;
chunk__22504_22780 = G__22792;
count__22505_22781 = G__22793;
i__22506_22782 = G__22794;
continue;
} else {
var temp__5804__auto___22795__$1 = cljs.core.seq(seq__22502_22779);
if(temp__5804__auto___22795__$1){
var seq__22502_22796__$1 = temp__5804__auto___22795__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22502_22796__$1)){
var c__5525__auto___22797 = cljs.core.chunk_first(seq__22502_22796__$1);
var G__22798 = cljs.core.chunk_rest(seq__22502_22796__$1);
var G__22799 = c__5525__auto___22797;
var G__22800 = cljs.core.count(c__5525__auto___22797);
var G__22801 = (0);
seq__22502_22779 = G__22798;
chunk__22504_22780 = G__22799;
count__22505_22781 = G__22800;
i__22506_22782 = G__22801;
continue;
} else {
var map__22511_22802 = cljs.core.first(seq__22502_22796__$1);
var map__22511_22803__$1 = cljs.core.__destructure_map(map__22511_22802);
var task_22804 = map__22511_22803__$1;
var fn_str_22805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22511_22803__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22511_22803__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22807 = goog.getObjectByName(fn_str_22805,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22806)].join(''));

(fn_obj_22807.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22807.cljs$core$IFn$_invoke$arity$2(path,new_link_22778) : fn_obj_22807.call(null,path,new_link_22778));


var G__22808 = cljs.core.next(seq__22502_22796__$1);
var G__22809 = null;
var G__22810 = (0);
var G__22811 = (0);
seq__22502_22779 = G__22808;
chunk__22504_22780 = G__22809;
count__22505_22781 = G__22810;
i__22506_22782 = G__22811;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22776);
});})(seq__22444_22719,chunk__22448_22720,count__22449_22721,i__22450_22722,seq__22302,chunk__22304,count__22305,i__22306,new_link_22778,path_match_22777,node_22776,seq__22444_22770__$1,temp__5804__auto___22769,path,map__22301,map__22301__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22777], 0));

goog.dom.insertSiblingAfter(new_link_22778,node_22776);


var G__22812 = cljs.core.next(seq__22444_22770__$1);
var G__22813 = null;
var G__22814 = (0);
var G__22815 = (0);
seq__22444_22719 = G__22812;
chunk__22448_22720 = G__22813;
count__22449_22721 = G__22814;
i__22450_22722 = G__22815;
continue;
} else {
var G__22816 = cljs.core.next(seq__22444_22770__$1);
var G__22817 = null;
var G__22818 = (0);
var G__22819 = (0);
seq__22444_22719 = G__22816;
chunk__22448_22720 = G__22817;
count__22449_22721 = G__22818;
i__22450_22722 = G__22819;
continue;
}
} else {
var G__22820 = cljs.core.next(seq__22444_22770__$1);
var G__22821 = null;
var G__22822 = (0);
var G__22823 = (0);
seq__22444_22719 = G__22820;
chunk__22448_22720 = G__22821;
count__22449_22721 = G__22822;
i__22450_22722 = G__22823;
continue;
}
}
} else {
}
}
break;
}


var G__22824 = seq__22302;
var G__22825 = chunk__22304;
var G__22826 = count__22305;
var G__22827 = (i__22306 + (1));
seq__22302 = G__22824;
chunk__22304 = G__22825;
count__22305 = G__22826;
i__22306 = G__22827;
continue;
} else {
var G__22828 = seq__22302;
var G__22829 = chunk__22304;
var G__22830 = count__22305;
var G__22831 = (i__22306 + (1));
seq__22302 = G__22828;
chunk__22304 = G__22829;
count__22305 = G__22830;
i__22306 = G__22831;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22302);
if(temp__5804__auto__){
var seq__22302__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22302__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22302__$1);
var G__22832 = cljs.core.chunk_rest(seq__22302__$1);
var G__22833 = c__5525__auto__;
var G__22834 = cljs.core.count(c__5525__auto__);
var G__22835 = (0);
seq__22302 = G__22832;
chunk__22304 = G__22833;
count__22305 = G__22834;
i__22306 = G__22835;
continue;
} else {
var path = cljs.core.first(seq__22302__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22512_22836 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22516_22837 = null;
var count__22517_22838 = (0);
var i__22518_22839 = (0);
while(true){
if((i__22518_22839 < count__22517_22838)){
var node_22840 = chunk__22516_22837.cljs$core$IIndexed$_nth$arity$2(null,i__22518_22839);
if(cljs.core.not(node_22840.shadow$old)){
var path_match_22841 = shadow.cljs.devtools.client.browser.match_paths(node_22840.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22841)){
var new_link_22842 = (function (){var G__22550 = node_22840.cloneNode(true);
G__22550.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22841),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22550;
})();
(node_22840.shadow$old = true);

(new_link_22842.onload = ((function (seq__22512_22836,chunk__22516_22837,count__22517_22838,i__22518_22839,seq__22302,chunk__22304,count__22305,i__22306,new_link_22842,path_match_22841,node_22840,path,seq__22302__$1,temp__5804__auto__,map__22301,map__22301__$1,msg,updates,reload_info){
return (function (e){
var seq__22551_22843 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22553_22844 = null;
var count__22554_22845 = (0);
var i__22555_22846 = (0);
while(true){
if((i__22555_22846 < count__22554_22845)){
var map__22559_22847 = chunk__22553_22844.cljs$core$IIndexed$_nth$arity$2(null,i__22555_22846);
var map__22559_22848__$1 = cljs.core.__destructure_map(map__22559_22847);
var task_22849 = map__22559_22848__$1;
var fn_str_22850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22559_22848__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22559_22848__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22852 = goog.getObjectByName(fn_str_22850,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22851)].join(''));

(fn_obj_22852.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22852.cljs$core$IFn$_invoke$arity$2(path,new_link_22842) : fn_obj_22852.call(null,path,new_link_22842));


var G__22853 = seq__22551_22843;
var G__22854 = chunk__22553_22844;
var G__22855 = count__22554_22845;
var G__22856 = (i__22555_22846 + (1));
seq__22551_22843 = G__22853;
chunk__22553_22844 = G__22854;
count__22554_22845 = G__22855;
i__22555_22846 = G__22856;
continue;
} else {
var temp__5804__auto___22857__$1 = cljs.core.seq(seq__22551_22843);
if(temp__5804__auto___22857__$1){
var seq__22551_22858__$1 = temp__5804__auto___22857__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22551_22858__$1)){
var c__5525__auto___22859 = cljs.core.chunk_first(seq__22551_22858__$1);
var G__22860 = cljs.core.chunk_rest(seq__22551_22858__$1);
var G__22861 = c__5525__auto___22859;
var G__22862 = cljs.core.count(c__5525__auto___22859);
var G__22863 = (0);
seq__22551_22843 = G__22860;
chunk__22553_22844 = G__22861;
count__22554_22845 = G__22862;
i__22555_22846 = G__22863;
continue;
} else {
var map__22560_22864 = cljs.core.first(seq__22551_22858__$1);
var map__22560_22865__$1 = cljs.core.__destructure_map(map__22560_22864);
var task_22866 = map__22560_22865__$1;
var fn_str_22867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22560_22865__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22560_22865__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22869 = goog.getObjectByName(fn_str_22867,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22868)].join(''));

(fn_obj_22869.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22869.cljs$core$IFn$_invoke$arity$2(path,new_link_22842) : fn_obj_22869.call(null,path,new_link_22842));


var G__22870 = cljs.core.next(seq__22551_22858__$1);
var G__22871 = null;
var G__22872 = (0);
var G__22873 = (0);
seq__22551_22843 = G__22870;
chunk__22553_22844 = G__22871;
count__22554_22845 = G__22872;
i__22555_22846 = G__22873;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22840);
});})(seq__22512_22836,chunk__22516_22837,count__22517_22838,i__22518_22839,seq__22302,chunk__22304,count__22305,i__22306,new_link_22842,path_match_22841,node_22840,path,seq__22302__$1,temp__5804__auto__,map__22301,map__22301__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22841], 0));

goog.dom.insertSiblingAfter(new_link_22842,node_22840);


var G__22874 = seq__22512_22836;
var G__22875 = chunk__22516_22837;
var G__22876 = count__22517_22838;
var G__22877 = (i__22518_22839 + (1));
seq__22512_22836 = G__22874;
chunk__22516_22837 = G__22875;
count__22517_22838 = G__22876;
i__22518_22839 = G__22877;
continue;
} else {
var G__22878 = seq__22512_22836;
var G__22879 = chunk__22516_22837;
var G__22880 = count__22517_22838;
var G__22881 = (i__22518_22839 + (1));
seq__22512_22836 = G__22878;
chunk__22516_22837 = G__22879;
count__22517_22838 = G__22880;
i__22518_22839 = G__22881;
continue;
}
} else {
var G__22886 = seq__22512_22836;
var G__22887 = chunk__22516_22837;
var G__22888 = count__22517_22838;
var G__22889 = (i__22518_22839 + (1));
seq__22512_22836 = G__22886;
chunk__22516_22837 = G__22887;
count__22517_22838 = G__22888;
i__22518_22839 = G__22889;
continue;
}
} else {
var temp__5804__auto___22890__$1 = cljs.core.seq(seq__22512_22836);
if(temp__5804__auto___22890__$1){
var seq__22512_22891__$1 = temp__5804__auto___22890__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22512_22891__$1)){
var c__5525__auto___22892 = cljs.core.chunk_first(seq__22512_22891__$1);
var G__22893 = cljs.core.chunk_rest(seq__22512_22891__$1);
var G__22894 = c__5525__auto___22892;
var G__22895 = cljs.core.count(c__5525__auto___22892);
var G__22896 = (0);
seq__22512_22836 = G__22893;
chunk__22516_22837 = G__22894;
count__22517_22838 = G__22895;
i__22518_22839 = G__22896;
continue;
} else {
var node_22897 = cljs.core.first(seq__22512_22891__$1);
if(cljs.core.not(node_22897.shadow$old)){
var path_match_22898 = shadow.cljs.devtools.client.browser.match_paths(node_22897.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22898)){
var new_link_22899 = (function (){var G__22561 = node_22897.cloneNode(true);
G__22561.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22898),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22561;
})();
(node_22897.shadow$old = true);

(new_link_22899.onload = ((function (seq__22512_22836,chunk__22516_22837,count__22517_22838,i__22518_22839,seq__22302,chunk__22304,count__22305,i__22306,new_link_22899,path_match_22898,node_22897,seq__22512_22891__$1,temp__5804__auto___22890__$1,path,seq__22302__$1,temp__5804__auto__,map__22301,map__22301__$1,msg,updates,reload_info){
return (function (e){
var seq__22562_22902 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22564_22903 = null;
var count__22565_22904 = (0);
var i__22566_22905 = (0);
while(true){
if((i__22566_22905 < count__22565_22904)){
var map__22570_22906 = chunk__22564_22903.cljs$core$IIndexed$_nth$arity$2(null,i__22566_22905);
var map__22570_22907__$1 = cljs.core.__destructure_map(map__22570_22906);
var task_22908 = map__22570_22907__$1;
var fn_str_22909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22570_22907__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22570_22907__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22911 = goog.getObjectByName(fn_str_22909,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22910)].join(''));

(fn_obj_22911.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22911.cljs$core$IFn$_invoke$arity$2(path,new_link_22899) : fn_obj_22911.call(null,path,new_link_22899));


var G__22912 = seq__22562_22902;
var G__22913 = chunk__22564_22903;
var G__22914 = count__22565_22904;
var G__22915 = (i__22566_22905 + (1));
seq__22562_22902 = G__22912;
chunk__22564_22903 = G__22913;
count__22565_22904 = G__22914;
i__22566_22905 = G__22915;
continue;
} else {
var temp__5804__auto___22916__$2 = cljs.core.seq(seq__22562_22902);
if(temp__5804__auto___22916__$2){
var seq__22562_22917__$1 = temp__5804__auto___22916__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22562_22917__$1)){
var c__5525__auto___22918 = cljs.core.chunk_first(seq__22562_22917__$1);
var G__22919 = cljs.core.chunk_rest(seq__22562_22917__$1);
var G__22920 = c__5525__auto___22918;
var G__22921 = cljs.core.count(c__5525__auto___22918);
var G__22922 = (0);
seq__22562_22902 = G__22919;
chunk__22564_22903 = G__22920;
count__22565_22904 = G__22921;
i__22566_22905 = G__22922;
continue;
} else {
var map__22571_22923 = cljs.core.first(seq__22562_22917__$1);
var map__22571_22924__$1 = cljs.core.__destructure_map(map__22571_22923);
var task_22925 = map__22571_22924__$1;
var fn_str_22926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571_22924__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22571_22924__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22928 = goog.getObjectByName(fn_str_22926,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22927)].join(''));

(fn_obj_22928.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22928.cljs$core$IFn$_invoke$arity$2(path,new_link_22899) : fn_obj_22928.call(null,path,new_link_22899));


var G__22929 = cljs.core.next(seq__22562_22917__$1);
var G__22930 = null;
var G__22931 = (0);
var G__22932 = (0);
seq__22562_22902 = G__22929;
chunk__22564_22903 = G__22930;
count__22565_22904 = G__22931;
i__22566_22905 = G__22932;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22897);
});})(seq__22512_22836,chunk__22516_22837,count__22517_22838,i__22518_22839,seq__22302,chunk__22304,count__22305,i__22306,new_link_22899,path_match_22898,node_22897,seq__22512_22891__$1,temp__5804__auto___22890__$1,path,seq__22302__$1,temp__5804__auto__,map__22301,map__22301__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22898], 0));

goog.dom.insertSiblingAfter(new_link_22899,node_22897);


var G__22933 = cljs.core.next(seq__22512_22891__$1);
var G__22934 = null;
var G__22935 = (0);
var G__22936 = (0);
seq__22512_22836 = G__22933;
chunk__22516_22837 = G__22934;
count__22517_22838 = G__22935;
i__22518_22839 = G__22936;
continue;
} else {
var G__22937 = cljs.core.next(seq__22512_22891__$1);
var G__22938 = null;
var G__22939 = (0);
var G__22940 = (0);
seq__22512_22836 = G__22937;
chunk__22516_22837 = G__22938;
count__22517_22838 = G__22939;
i__22518_22839 = G__22940;
continue;
}
} else {
var G__22941 = cljs.core.next(seq__22512_22891__$1);
var G__22942 = null;
var G__22943 = (0);
var G__22944 = (0);
seq__22512_22836 = G__22941;
chunk__22516_22837 = G__22942;
count__22517_22838 = G__22943;
i__22518_22839 = G__22944;
continue;
}
}
} else {
}
}
break;
}


var G__22945 = cljs.core.next(seq__22302__$1);
var G__22946 = null;
var G__22947 = (0);
var G__22948 = (0);
seq__22302 = G__22945;
chunk__22304 = G__22946;
count__22305 = G__22947;
i__22306 = G__22948;
continue;
} else {
var G__22949 = cljs.core.next(seq__22302__$1);
var G__22950 = null;
var G__22951 = (0);
var G__22952 = (0);
seq__22302 = G__22949;
chunk__22304 = G__22950;
count__22305 = G__22951;
i__22306 = G__22952;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__22577 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__22577) : success.call(null,G__22577));
}catch (e22576){var e = e22576;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__22578,success,fail){
var map__22579 = p__22578;
var map__22579__$1 = cljs.core.__destructure_map(map__22579);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22579__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__22581 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__22581) : success.call(null,G__22581));
}catch (e22580){var e = e22580;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22582,done,error){
var map__22583 = p__22582;
var map__22583__$1 = cljs.core.__destructure_map(map__22583);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22583__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22590,done,error){
var map__22591 = p__22590;
var map__22591__$1 = cljs.core.__destructure_map(map__22591);
var msg = map__22591__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22591__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22591__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22591__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22595){
var map__22597 = p__22595;
var map__22597__$1 = cljs.core.__destructure_map(map__22597);
var src = map__22597__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22597__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22607 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22607) : done.call(null,G__22607));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22610){
var map__22611 = p__22610;
var map__22611__$1 = cljs.core.__destructure_map(map__22611);
var msg__$1 = map__22611__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22611__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22613){var ex = e22613;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22616){
var map__22617 = p__22616;
var map__22617__$1 = cljs.core.__destructure_map(map__22617);
var env = map__22617__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22617__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22630){
var map__22631 = p__22630;
var map__22631__$1 = cljs.core.__destructure_map(map__22631);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22631__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22631__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22632){
var map__22633 = p__22632;
var map__22633__$1 = cljs.core.__destructure_map(map__22633);
var svc = map__22633__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22633__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
