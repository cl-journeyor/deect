goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17923 = (function (f,blockable,meta17924){
this.f = f;
this.blockable = blockable;
this.meta17924 = meta17924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17925,meta17924__$1){
var self__ = this;
var _17925__$1 = this;
return (new cljs.core.async.t_cljs$core$async17923(self__.f,self__.blockable,meta17924__$1));
}));

(cljs.core.async.t_cljs$core$async17923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17925){
var self__ = this;
var _17925__$1 = this;
return self__.meta17924;
}));

(cljs.core.async.t_cljs$core$async17923.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17923.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17924","meta17924",-1363012031,null)], null);
}));

(cljs.core.async.t_cljs$core$async17923.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17923");

(cljs.core.async.t_cljs$core$async17923.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17923");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17923.
 */
cljs.core.async.__GT_t_cljs$core$async17923 = (function cljs$core$async$__GT_t_cljs$core$async17923(f,blockable,meta17924){
return (new cljs.core.async.t_cljs$core$async17923(f,blockable,meta17924));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17919 = arguments.length;
switch (G__17919) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async17923(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17964 = arguments.length;
switch (G__17964) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17976 = arguments.length;
switch (G__17976) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17978 = arguments.length;
switch (G__17978) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19404 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19404) : fn1.call(null,val_19404));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19404) : fn1.call(null,val_19404));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17980 = arguments.length;
switch (G__17980) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___19406 = n;
var x_19407 = (0);
while(true){
if((x_19407 < n__5593__auto___19406)){
(a[x_19407] = x_19407);

var G__19408 = (x_19407 + (1));
x_19407 = G__19408;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17991 = (function (flag,meta17992){
this.flag = flag;
this.meta17992 = meta17992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17993,meta17992__$1){
var self__ = this;
var _17993__$1 = this;
return (new cljs.core.async.t_cljs$core$async17991(self__.flag,meta17992__$1));
}));

(cljs.core.async.t_cljs$core$async17991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17993){
var self__ = this;
var _17993__$1 = this;
return self__.meta17992;
}));

(cljs.core.async.t_cljs$core$async17991.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17991.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17992","meta17992",1613661468,null)], null);
}));

(cljs.core.async.t_cljs$core$async17991.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17991");

(cljs.core.async.t_cljs$core$async17991.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17991");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17991.
 */
cljs.core.async.__GT_t_cljs$core$async17991 = (function cljs$core$async$__GT_t_cljs$core$async17991(flag,meta17992){
return (new cljs.core.async.t_cljs$core$async17991(flag,meta17992));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async17991(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17995 = (function (flag,cb,meta17996){
this.flag = flag;
this.cb = cb;
this.meta17996 = meta17996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17997,meta17996__$1){
var self__ = this;
var _17997__$1 = this;
return (new cljs.core.async.t_cljs$core$async17995(self__.flag,self__.cb,meta17996__$1));
}));

(cljs.core.async.t_cljs$core$async17995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17997){
var self__ = this;
var _17997__$1 = this;
return self__.meta17996;
}));

(cljs.core.async.t_cljs$core$async17995.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17996","meta17996",-870496159,null)], null);
}));

(cljs.core.async.t_cljs$core$async17995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17995");

(cljs.core.async.t_cljs$core$async17995.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17995.
 */
cljs.core.async.__GT_t_cljs$core$async17995 = (function cljs$core$async$__GT_t_cljs$core$async17995(flag,cb,meta17996){
return (new cljs.core.async.t_cljs$core$async17995(flag,cb,meta17996));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async17995(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17998_SHARP_){
var G__18000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17998_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18000) : fret.call(null,G__18000));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17999_SHARP_){
var G__18001 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17999_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18001) : fret.call(null,G__18001));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19409 = (i + (1));
i = G__19409;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19410 = arguments.length;
var i__5727__auto___19411 = (0);
while(true){
if((i__5727__auto___19411 < len__5726__auto___19410)){
args__5732__auto__.push((arguments[i__5727__auto___19411]));

var G__19412 = (i__5727__auto___19411 + (1));
i__5727__auto___19411 = G__19412;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18004){
var map__18005 = p__18004;
var map__18005__$1 = cljs.core.__destructure_map(map__18005);
var opts = map__18005__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18002){
var G__18003 = cljs.core.first(seq18002);
var seq18002__$1 = cljs.core.next(seq18002);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18003,seq18002__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18007 = arguments.length;
switch (G__18007) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17853__auto___19414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_18031){
var state_val_18032 = (state_18031[(1)]);
if((state_val_18032 === (7))){
var inst_18027 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
var statearr_18033_19415 = state_18031__$1;
(statearr_18033_19415[(2)] = inst_18027);

(statearr_18033_19415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (1))){
var state_18031__$1 = state_18031;
var statearr_18034_19416 = state_18031__$1;
(statearr_18034_19416[(2)] = null);

(statearr_18034_19416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (4))){
var inst_18010 = (state_18031[(7)]);
var inst_18010__$1 = (state_18031[(2)]);
var inst_18011 = (inst_18010__$1 == null);
var state_18031__$1 = (function (){var statearr_18035 = state_18031;
(statearr_18035[(7)] = inst_18010__$1);

return statearr_18035;
})();
if(cljs.core.truth_(inst_18011)){
var statearr_18036_19417 = state_18031__$1;
(statearr_18036_19417[(1)] = (5));

} else {
var statearr_18037_19418 = state_18031__$1;
(statearr_18037_19418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (13))){
var state_18031__$1 = state_18031;
var statearr_18038_19419 = state_18031__$1;
(statearr_18038_19419[(2)] = null);

(statearr_18038_19419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (6))){
var inst_18010 = (state_18031[(7)]);
var state_18031__$1 = state_18031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18031__$1,(11),to,inst_18010);
} else {
if((state_val_18032 === (3))){
var inst_18029 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18031__$1,inst_18029);
} else {
if((state_val_18032 === (12))){
var state_18031__$1 = state_18031;
var statearr_18039_19420 = state_18031__$1;
(statearr_18039_19420[(2)] = null);

(statearr_18039_19420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (2))){
var state_18031__$1 = state_18031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18031__$1,(4),from);
} else {
if((state_val_18032 === (11))){
var inst_18020 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
if(cljs.core.truth_(inst_18020)){
var statearr_18040_19421 = state_18031__$1;
(statearr_18040_19421[(1)] = (12));

} else {
var statearr_18041_19422 = state_18031__$1;
(statearr_18041_19422[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (9))){
var state_18031__$1 = state_18031;
var statearr_18042_19423 = state_18031__$1;
(statearr_18042_19423[(2)] = null);

(statearr_18042_19423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (5))){
var state_18031__$1 = state_18031;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18043_19424 = state_18031__$1;
(statearr_18043_19424[(1)] = (8));

} else {
var statearr_18044_19425 = state_18031__$1;
(statearr_18044_19425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (14))){
var inst_18025 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
var statearr_18045_19426 = state_18031__$1;
(statearr_18045_19426[(2)] = inst_18025);

(statearr_18045_19426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (10))){
var inst_18017 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
var statearr_18046_19427 = state_18031__$1;
(statearr_18046_19427[(2)] = inst_18017);

(statearr_18046_19427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (8))){
var inst_18014 = cljs.core.async.close_BANG_(to);
var state_18031__$1 = state_18031;
var statearr_18047_19428 = state_18031__$1;
(statearr_18047_19428[(2)] = inst_18014);

(statearr_18047_19428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17818__auto__ = null;
var cljs$core$async$state_machine__17818__auto____0 = (function (){
var statearr_18048 = [null,null,null,null,null,null,null,null];
(statearr_18048[(0)] = cljs$core$async$state_machine__17818__auto__);

(statearr_18048[(1)] = (1));

return statearr_18048;
});
var cljs$core$async$state_machine__17818__auto____1 = (function (state_18031){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_18031);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e18049){var ex__17821__auto__ = e18049;
var statearr_18050_19429 = state_18031;
(statearr_18050_19429[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_18031[(4)]))){
var statearr_18051_19430 = state_18031;
(statearr_18051_19430[(1)] = cljs.core.first((state_18031[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19431 = state_18031;
state_18031 = G__19431;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$state_machine__17818__auto__ = function(state_18031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17818__auto____1.call(this,state_18031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17818__auto____0;
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17818__auto____1;
return cljs$core$async$state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_18052 = f__17854__auto__();
(statearr_18052[(6)] = c__17853__auto___19414);

return statearr_18052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__18053){
var vec__18054 = p__18053;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18054,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18054,(1),null);
var job = vec__18054;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17853__auto___19432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_18061){
var state_val_18062 = (state_18061[(1)]);
if((state_val_18062 === (1))){
var state_18061__$1 = state_18061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18061__$1,(2),res,v);
} else {
if((state_val_18062 === (2))){
var inst_18058 = (state_18061[(2)]);
var inst_18059 = cljs.core.async.close_BANG_(res);
var state_18061__$1 = (function (){var statearr_18063 = state_18061;
(statearr_18063[(7)] = inst_18058);

return statearr_18063;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18061__$1,inst_18059);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____0 = (function (){
var statearr_18064 = [null,null,null,null,null,null,null,null];
(statearr_18064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__);

(statearr_18064[(1)] = (1));

return statearr_18064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____1 = (function (state_18061){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_18061);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e18065){var ex__17821__auto__ = e18065;
var statearr_18066_19433 = state_18061;
(statearr_18066_19433[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_18061[(4)]))){
var statearr_18067_19434 = state_18061;
(statearr_18067_19434[(1)] = cljs.core.first((state_18061[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19435 = state_18061;
state_18061 = G__19435;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__ = function(state_18061){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____1.call(this,state_18061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_18068 = f__17854__auto__();
(statearr_18068[(6)] = c__17853__auto___19432);

return statearr_18068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18069){
var vec__18070 = p__18069;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18070,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18070,(1),null);
var job = vec__18070;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___19436 = n;
var __19437 = (0);
while(true){
if((__19437 < n__5593__auto___19436)){
var G__18073_19438 = type;
var G__18073_19439__$1 = (((G__18073_19438 instanceof cljs.core.Keyword))?G__18073_19438.fqn:null);
switch (G__18073_19439__$1) {
case "compute":
var c__17853__auto___19441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19437,c__17853__auto___19441,G__18073_19438,G__18073_19439__$1,n__5593__auto___19436,jobs,results,process__$1,async){
return (function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = ((function (__19437,c__17853__auto___19441,G__18073_19438,G__18073_19439__$1,n__5593__auto___19436,jobs,results,process__$1,async){
return (function (state_18086){
var state_val_18087 = (state_18086[(1)]);
if((state_val_18087 === (1))){
var state_18086__$1 = state_18086;
var statearr_18088_19442 = state_18086__$1;
(statearr_18088_19442[(2)] = null);

(statearr_18088_19442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18087 === (2))){
var state_18086__$1 = state_18086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18086__$1,(4),jobs);
} else {
if((state_val_18087 === (3))){
var inst_18084 = (state_18086[(2)]);
var state_18086__$1 = state_18086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18086__$1,inst_18084);
} else {
if((state_val_18087 === (4))){
var inst_18076 = (state_18086[(2)]);
var inst_18077 = process__$1(inst_18076);
var state_18086__$1 = state_18086;
if(cljs.core.truth_(inst_18077)){
var statearr_18089_19443 = state_18086__$1;
(statearr_18089_19443[(1)] = (5));

} else {
var statearr_18090_19444 = state_18086__$1;
(statearr_18090_19444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18087 === (5))){
var state_18086__$1 = state_18086;
var statearr_18091_19445 = state_18086__$1;
(statearr_18091_19445[(2)] = null);

(statearr_18091_19445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18087 === (6))){
var state_18086__$1 = state_18086;
var statearr_18092_19446 = state_18086__$1;
(statearr_18092_19446[(2)] = null);

(statearr_18092_19446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18087 === (7))){
var inst_18082 = (state_18086[(2)]);
var state_18086__$1 = state_18086;
var statearr_18093_19447 = state_18086__$1;
(statearr_18093_19447[(2)] = inst_18082);

(statearr_18093_19447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19437,c__17853__auto___19441,G__18073_19438,G__18073_19439__$1,n__5593__auto___19436,jobs,results,process__$1,async))
;
return ((function (__19437,switch__17817__auto__,c__17853__auto___19441,G__18073_19438,G__18073_19439__$1,n__5593__auto___19436,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____0 = (function (){
var statearr_18094 = [null,null,null,null,null,null,null];
(statearr_18094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__);

(statearr_18094[(1)] = (1));

return statearr_18094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____1 = (function (state_18086){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_18086);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e18095){var ex__17821__auto__ = e18095;
var statearr_18096_19448 = state_18086;
(statearr_18096_19448[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_18086[(4)]))){
var statearr_18097_19449 = state_18086;
(statearr_18097_19449[(1)] = cljs.core.first((state_18086[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19450 = state_18086;
state_18086 = G__19450;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__ = function(state_18086){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____1.call(this,state_18086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__;
})()
;})(__19437,switch__17817__auto__,c__17853__auto___19441,G__18073_19438,G__18073_19439__$1,n__5593__auto___19436,jobs,results,process__$1,async))
})();
var state__17855__auto__ = (function (){var statearr_18098 = f__17854__auto__();
(statearr_18098[(6)] = c__17853__auto___19441);

return statearr_18098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
});})(__19437,c__17853__auto___19441,G__18073_19438,G__18073_19439__$1,n__5593__auto___19436,jobs,results,process__$1,async))
);


break;
case "async":
var c__17853__auto___19451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19437,c__17853__auto___19451,G__18073_19438,G__18073_19439__$1,n__5593__auto___19436,jobs,results,process__$1,async){
return (function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = ((function (__19437,c__17853__auto___19451,G__18073_19438,G__18073_19439__$1,n__5593__auto___19436,jobs,results,process__$1,async){
return (function (state_18111){
var state_val_18112 = (state_18111[(1)]);
if((state_val_18112 === (1))){
var state_18111__$1 = state_18111;
var statearr_18113_19452 = state_18111__$1;
(statearr_18113_19452[(2)] = null);

(statearr_18113_19452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (2))){
var state_18111__$1 = state_18111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18111__$1,(4),jobs);
} else {
if((state_val_18112 === (3))){
var inst_18109 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18111__$1,inst_18109);
} else {
if((state_val_18112 === (4))){
var inst_18101 = (state_18111[(2)]);
var inst_18102 = async(inst_18101);
var state_18111__$1 = state_18111;
if(cljs.core.truth_(inst_18102)){
var statearr_18114_19453 = state_18111__$1;
(statearr_18114_19453[(1)] = (5));

} else {
var statearr_18115_19454 = state_18111__$1;
(statearr_18115_19454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (5))){
var state_18111__$1 = state_18111;
var statearr_18116_19455 = state_18111__$1;
(statearr_18116_19455[(2)] = null);

(statearr_18116_19455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (6))){
var state_18111__$1 = state_18111;
var statearr_18117_19456 = state_18111__$1;
(statearr_18117_19456[(2)] = null);

(statearr_18117_19456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (7))){
var inst_18107 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
var statearr_18118_19457 = state_18111__$1;
(statearr_18118_19457[(2)] = inst_18107);

(statearr_18118_19457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19437,c__17853__auto___19451,G__18073_19438,G__18073_19439__$1,n__5593__auto___19436,jobs,results,process__$1,async))
;
return ((function (__19437,switch__17817__auto__,c__17853__auto___19451,G__18073_19438,G__18073_19439__$1,n__5593__auto___19436,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____0 = (function (){
var statearr_18119 = [null,null,null,null,null,null,null];
(statearr_18119[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__);

(statearr_18119[(1)] = (1));

return statearr_18119;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____1 = (function (state_18111){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_18111);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e18120){var ex__17821__auto__ = e18120;
var statearr_18121_19458 = state_18111;
(statearr_18121_19458[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_18111[(4)]))){
var statearr_18122_19459 = state_18111;
(statearr_18122_19459[(1)] = cljs.core.first((state_18111[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19460 = state_18111;
state_18111 = G__19460;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__ = function(state_18111){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____1.call(this,state_18111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__;
})()
;})(__19437,switch__17817__auto__,c__17853__auto___19451,G__18073_19438,G__18073_19439__$1,n__5593__auto___19436,jobs,results,process__$1,async))
})();
var state__17855__auto__ = (function (){var statearr_18123 = f__17854__auto__();
(statearr_18123[(6)] = c__17853__auto___19451);

return statearr_18123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
});})(__19437,c__17853__auto___19451,G__18073_19438,G__18073_19439__$1,n__5593__auto___19436,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18073_19439__$1)].join('')));

}

var G__19461 = (__19437 + (1));
__19437 = G__19461;
continue;
} else {
}
break;
}

var c__17853__auto___19462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_18145){
var state_val_18146 = (state_18145[(1)]);
if((state_val_18146 === (7))){
var inst_18141 = (state_18145[(2)]);
var state_18145__$1 = state_18145;
var statearr_18147_19463 = state_18145__$1;
(statearr_18147_19463[(2)] = inst_18141);

(statearr_18147_19463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18146 === (1))){
var state_18145__$1 = state_18145;
var statearr_18148_19465 = state_18145__$1;
(statearr_18148_19465[(2)] = null);

(statearr_18148_19465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18146 === (4))){
var inst_18126 = (state_18145[(7)]);
var inst_18126__$1 = (state_18145[(2)]);
var inst_18127 = (inst_18126__$1 == null);
var state_18145__$1 = (function (){var statearr_18149 = state_18145;
(statearr_18149[(7)] = inst_18126__$1);

return statearr_18149;
})();
if(cljs.core.truth_(inst_18127)){
var statearr_18150_19467 = state_18145__$1;
(statearr_18150_19467[(1)] = (5));

} else {
var statearr_18151_19468 = state_18145__$1;
(statearr_18151_19468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18146 === (6))){
var inst_18131 = (state_18145[(8)]);
var inst_18126 = (state_18145[(7)]);
var inst_18131__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18132 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18133 = [inst_18126,inst_18131__$1];
var inst_18134 = (new cljs.core.PersistentVector(null,2,(5),inst_18132,inst_18133,null));
var state_18145__$1 = (function (){var statearr_18152 = state_18145;
(statearr_18152[(8)] = inst_18131__$1);

return statearr_18152;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18145__$1,(8),jobs,inst_18134);
} else {
if((state_val_18146 === (3))){
var inst_18143 = (state_18145[(2)]);
var state_18145__$1 = state_18145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18145__$1,inst_18143);
} else {
if((state_val_18146 === (2))){
var state_18145__$1 = state_18145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18145__$1,(4),from);
} else {
if((state_val_18146 === (9))){
var inst_18138 = (state_18145[(2)]);
var state_18145__$1 = (function (){var statearr_18153 = state_18145;
(statearr_18153[(9)] = inst_18138);

return statearr_18153;
})();
var statearr_18154_19469 = state_18145__$1;
(statearr_18154_19469[(2)] = null);

(statearr_18154_19469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18146 === (5))){
var inst_18129 = cljs.core.async.close_BANG_(jobs);
var state_18145__$1 = state_18145;
var statearr_18155_19470 = state_18145__$1;
(statearr_18155_19470[(2)] = inst_18129);

(statearr_18155_19470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18146 === (8))){
var inst_18131 = (state_18145[(8)]);
var inst_18136 = (state_18145[(2)]);
var state_18145__$1 = (function (){var statearr_18156 = state_18145;
(statearr_18156[(10)] = inst_18136);

return statearr_18156;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18145__$1,(9),results,inst_18131);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____0 = (function (){
var statearr_18157 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18157[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__);

(statearr_18157[(1)] = (1));

return statearr_18157;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____1 = (function (state_18145){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_18145);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e18158){var ex__17821__auto__ = e18158;
var statearr_18159_19471 = state_18145;
(statearr_18159_19471[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_18145[(4)]))){
var statearr_18160_19472 = state_18145;
(statearr_18160_19472[(1)] = cljs.core.first((state_18145[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19473 = state_18145;
state_18145 = G__19473;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__ = function(state_18145){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____1.call(this,state_18145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_18161 = f__17854__auto__();
(statearr_18161[(6)] = c__17853__auto___19462);

return statearr_18161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));


var c__17853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_18199){
var state_val_18200 = (state_18199[(1)]);
if((state_val_18200 === (7))){
var inst_18195 = (state_18199[(2)]);
var state_18199__$1 = state_18199;
var statearr_18201_19474 = state_18199__$1;
(statearr_18201_19474[(2)] = inst_18195);

(statearr_18201_19474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (20))){
var state_18199__$1 = state_18199;
var statearr_18202_19475 = state_18199__$1;
(statearr_18202_19475[(2)] = null);

(statearr_18202_19475[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (1))){
var state_18199__$1 = state_18199;
var statearr_18203_19476 = state_18199__$1;
(statearr_18203_19476[(2)] = null);

(statearr_18203_19476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (4))){
var inst_18164 = (state_18199[(7)]);
var inst_18164__$1 = (state_18199[(2)]);
var inst_18165 = (inst_18164__$1 == null);
var state_18199__$1 = (function (){var statearr_18204 = state_18199;
(statearr_18204[(7)] = inst_18164__$1);

return statearr_18204;
})();
if(cljs.core.truth_(inst_18165)){
var statearr_18205_19477 = state_18199__$1;
(statearr_18205_19477[(1)] = (5));

} else {
var statearr_18206_19478 = state_18199__$1;
(statearr_18206_19478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (15))){
var inst_18177 = (state_18199[(8)]);
var state_18199__$1 = state_18199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18199__$1,(18),to,inst_18177);
} else {
if((state_val_18200 === (21))){
var inst_18190 = (state_18199[(2)]);
var state_18199__$1 = state_18199;
var statearr_18207_19479 = state_18199__$1;
(statearr_18207_19479[(2)] = inst_18190);

(statearr_18207_19479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (13))){
var inst_18192 = (state_18199[(2)]);
var state_18199__$1 = (function (){var statearr_18208 = state_18199;
(statearr_18208[(9)] = inst_18192);

return statearr_18208;
})();
var statearr_18209_19480 = state_18199__$1;
(statearr_18209_19480[(2)] = null);

(statearr_18209_19480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (6))){
var inst_18164 = (state_18199[(7)]);
var state_18199__$1 = state_18199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18199__$1,(11),inst_18164);
} else {
if((state_val_18200 === (17))){
var inst_18185 = (state_18199[(2)]);
var state_18199__$1 = state_18199;
if(cljs.core.truth_(inst_18185)){
var statearr_18210_19481 = state_18199__$1;
(statearr_18210_19481[(1)] = (19));

} else {
var statearr_18211_19482 = state_18199__$1;
(statearr_18211_19482[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (3))){
var inst_18197 = (state_18199[(2)]);
var state_18199__$1 = state_18199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18199__$1,inst_18197);
} else {
if((state_val_18200 === (12))){
var inst_18174 = (state_18199[(10)]);
var state_18199__$1 = state_18199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18199__$1,(14),inst_18174);
} else {
if((state_val_18200 === (2))){
var state_18199__$1 = state_18199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18199__$1,(4),results);
} else {
if((state_val_18200 === (19))){
var state_18199__$1 = state_18199;
var statearr_18212_19483 = state_18199__$1;
(statearr_18212_19483[(2)] = null);

(statearr_18212_19483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (11))){
var inst_18174 = (state_18199[(2)]);
var state_18199__$1 = (function (){var statearr_18213 = state_18199;
(statearr_18213[(10)] = inst_18174);

return statearr_18213;
})();
var statearr_18214_19484 = state_18199__$1;
(statearr_18214_19484[(2)] = null);

(statearr_18214_19484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (9))){
var state_18199__$1 = state_18199;
var statearr_18215_19485 = state_18199__$1;
(statearr_18215_19485[(2)] = null);

(statearr_18215_19485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (5))){
var state_18199__$1 = state_18199;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18216_19486 = state_18199__$1;
(statearr_18216_19486[(1)] = (8));

} else {
var statearr_18217_19487 = state_18199__$1;
(statearr_18217_19487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (14))){
var inst_18179 = (state_18199[(11)]);
var inst_18177 = (state_18199[(8)]);
var inst_18177__$1 = (state_18199[(2)]);
var inst_18178 = (inst_18177__$1 == null);
var inst_18179__$1 = cljs.core.not(inst_18178);
var state_18199__$1 = (function (){var statearr_18218 = state_18199;
(statearr_18218[(11)] = inst_18179__$1);

(statearr_18218[(8)] = inst_18177__$1);

return statearr_18218;
})();
if(inst_18179__$1){
var statearr_18219_19488 = state_18199__$1;
(statearr_18219_19488[(1)] = (15));

} else {
var statearr_18220_19489 = state_18199__$1;
(statearr_18220_19489[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (16))){
var inst_18179 = (state_18199[(11)]);
var state_18199__$1 = state_18199;
var statearr_18221_19490 = state_18199__$1;
(statearr_18221_19490[(2)] = inst_18179);

(statearr_18221_19490[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (10))){
var inst_18171 = (state_18199[(2)]);
var state_18199__$1 = state_18199;
var statearr_18222_19492 = state_18199__$1;
(statearr_18222_19492[(2)] = inst_18171);

(statearr_18222_19492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (18))){
var inst_18182 = (state_18199[(2)]);
var state_18199__$1 = state_18199;
var statearr_18223_19493 = state_18199__$1;
(statearr_18223_19493[(2)] = inst_18182);

(statearr_18223_19493[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (8))){
var inst_18168 = cljs.core.async.close_BANG_(to);
var state_18199__$1 = state_18199;
var statearr_18224_19496 = state_18199__$1;
(statearr_18224_19496[(2)] = inst_18168);

(statearr_18224_19496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____0 = (function (){
var statearr_18225 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18225[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__);

(statearr_18225[(1)] = (1));

return statearr_18225;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____1 = (function (state_18199){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_18199);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e18226){var ex__17821__auto__ = e18226;
var statearr_18227_19497 = state_18199;
(statearr_18227_19497[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_18199[(4)]))){
var statearr_18228_19498 = state_18199;
(statearr_18228_19498[(1)] = cljs.core.first((state_18199[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19499 = state_18199;
state_18199 = G__19499;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__ = function(state_18199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____1.call(this,state_18199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17818__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_18229 = f__17854__auto__();
(statearr_18229[(6)] = c__17853__auto__);

return statearr_18229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));

return c__17853__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18231 = arguments.length;
switch (G__18231) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18233 = arguments.length;
switch (G__18233) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18235 = arguments.length;
switch (G__18235) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17853__auto___19512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_18261){
var state_val_18262 = (state_18261[(1)]);
if((state_val_18262 === (7))){
var inst_18257 = (state_18261[(2)]);
var state_18261__$1 = state_18261;
var statearr_18263_19513 = state_18261__$1;
(statearr_18263_19513[(2)] = inst_18257);

(statearr_18263_19513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18262 === (1))){
var state_18261__$1 = state_18261;
var statearr_18264_19514 = state_18261__$1;
(statearr_18264_19514[(2)] = null);

(statearr_18264_19514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18262 === (4))){
var inst_18238 = (state_18261[(7)]);
var inst_18238__$1 = (state_18261[(2)]);
var inst_18239 = (inst_18238__$1 == null);
var state_18261__$1 = (function (){var statearr_18265 = state_18261;
(statearr_18265[(7)] = inst_18238__$1);

return statearr_18265;
})();
if(cljs.core.truth_(inst_18239)){
var statearr_18266_19515 = state_18261__$1;
(statearr_18266_19515[(1)] = (5));

} else {
var statearr_18267_19516 = state_18261__$1;
(statearr_18267_19516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18262 === (13))){
var state_18261__$1 = state_18261;
var statearr_18268_19517 = state_18261__$1;
(statearr_18268_19517[(2)] = null);

(statearr_18268_19517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18262 === (6))){
var inst_18238 = (state_18261[(7)]);
var inst_18244 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18238) : p.call(null,inst_18238));
var state_18261__$1 = state_18261;
if(cljs.core.truth_(inst_18244)){
var statearr_18269_19518 = state_18261__$1;
(statearr_18269_19518[(1)] = (9));

} else {
var statearr_18270_19519 = state_18261__$1;
(statearr_18270_19519[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18262 === (3))){
var inst_18259 = (state_18261[(2)]);
var state_18261__$1 = state_18261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18261__$1,inst_18259);
} else {
if((state_val_18262 === (12))){
var state_18261__$1 = state_18261;
var statearr_18271_19520 = state_18261__$1;
(statearr_18271_19520[(2)] = null);

(statearr_18271_19520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18262 === (2))){
var state_18261__$1 = state_18261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18261__$1,(4),ch);
} else {
if((state_val_18262 === (11))){
var inst_18238 = (state_18261[(7)]);
var inst_18248 = (state_18261[(2)]);
var state_18261__$1 = state_18261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18261__$1,(8),inst_18248,inst_18238);
} else {
if((state_val_18262 === (9))){
var state_18261__$1 = state_18261;
var statearr_18272_19524 = state_18261__$1;
(statearr_18272_19524[(2)] = tc);

(statearr_18272_19524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18262 === (5))){
var inst_18241 = cljs.core.async.close_BANG_(tc);
var inst_18242 = cljs.core.async.close_BANG_(fc);
var state_18261__$1 = (function (){var statearr_18273 = state_18261;
(statearr_18273[(8)] = inst_18241);

return statearr_18273;
})();
var statearr_18274_19525 = state_18261__$1;
(statearr_18274_19525[(2)] = inst_18242);

(statearr_18274_19525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18262 === (14))){
var inst_18255 = (state_18261[(2)]);
var state_18261__$1 = state_18261;
var statearr_18275_19526 = state_18261__$1;
(statearr_18275_19526[(2)] = inst_18255);

(statearr_18275_19526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18262 === (10))){
var state_18261__$1 = state_18261;
var statearr_18276_19527 = state_18261__$1;
(statearr_18276_19527[(2)] = fc);

(statearr_18276_19527[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18262 === (8))){
var inst_18250 = (state_18261[(2)]);
var state_18261__$1 = state_18261;
if(cljs.core.truth_(inst_18250)){
var statearr_18277_19528 = state_18261__$1;
(statearr_18277_19528[(1)] = (12));

} else {
var statearr_18278_19529 = state_18261__$1;
(statearr_18278_19529[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17818__auto__ = null;
var cljs$core$async$state_machine__17818__auto____0 = (function (){
var statearr_18279 = [null,null,null,null,null,null,null,null,null];
(statearr_18279[(0)] = cljs$core$async$state_machine__17818__auto__);

(statearr_18279[(1)] = (1));

return statearr_18279;
});
var cljs$core$async$state_machine__17818__auto____1 = (function (state_18261){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_18261);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e18280){var ex__17821__auto__ = e18280;
var statearr_18281_19530 = state_18261;
(statearr_18281_19530[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_18261[(4)]))){
var statearr_18282_19535 = state_18261;
(statearr_18282_19535[(1)] = cljs.core.first((state_18261[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19536 = state_18261;
state_18261 = G__19536;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$state_machine__17818__auto__ = function(state_18261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17818__auto____1.call(this,state_18261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17818__auto____0;
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17818__auto____1;
return cljs$core$async$state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_18283 = f__17854__auto__();
(statearr_18283[(6)] = c__17853__auto___19512);

return statearr_18283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_18305){
var state_val_18306 = (state_18305[(1)]);
if((state_val_18306 === (7))){
var inst_18301 = (state_18305[(2)]);
var state_18305__$1 = state_18305;
var statearr_18307_19537 = state_18305__$1;
(statearr_18307_19537[(2)] = inst_18301);

(statearr_18307_19537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18306 === (1))){
var inst_18284 = init;
var inst_18285 = inst_18284;
var state_18305__$1 = (function (){var statearr_18308 = state_18305;
(statearr_18308[(7)] = inst_18285);

return statearr_18308;
})();
var statearr_18309_19538 = state_18305__$1;
(statearr_18309_19538[(2)] = null);

(statearr_18309_19538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18306 === (4))){
var inst_18288 = (state_18305[(8)]);
var inst_18288__$1 = (state_18305[(2)]);
var inst_18289 = (inst_18288__$1 == null);
var state_18305__$1 = (function (){var statearr_18310 = state_18305;
(statearr_18310[(8)] = inst_18288__$1);

return statearr_18310;
})();
if(cljs.core.truth_(inst_18289)){
var statearr_18311_19539 = state_18305__$1;
(statearr_18311_19539[(1)] = (5));

} else {
var statearr_18312_19540 = state_18305__$1;
(statearr_18312_19540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18306 === (6))){
var inst_18292 = (state_18305[(9)]);
var inst_18285 = (state_18305[(7)]);
var inst_18288 = (state_18305[(8)]);
var inst_18292__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18285,inst_18288) : f.call(null,inst_18285,inst_18288));
var inst_18293 = cljs.core.reduced_QMARK_(inst_18292__$1);
var state_18305__$1 = (function (){var statearr_18313 = state_18305;
(statearr_18313[(9)] = inst_18292__$1);

return statearr_18313;
})();
if(inst_18293){
var statearr_18314_19541 = state_18305__$1;
(statearr_18314_19541[(1)] = (8));

} else {
var statearr_18315_19542 = state_18305__$1;
(statearr_18315_19542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18306 === (3))){
var inst_18303 = (state_18305[(2)]);
var state_18305__$1 = state_18305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18305__$1,inst_18303);
} else {
if((state_val_18306 === (2))){
var state_18305__$1 = state_18305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18305__$1,(4),ch);
} else {
if((state_val_18306 === (9))){
var inst_18292 = (state_18305[(9)]);
var inst_18285 = inst_18292;
var state_18305__$1 = (function (){var statearr_18316 = state_18305;
(statearr_18316[(7)] = inst_18285);

return statearr_18316;
})();
var statearr_18317_19543 = state_18305__$1;
(statearr_18317_19543[(2)] = null);

(statearr_18317_19543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18306 === (5))){
var inst_18285 = (state_18305[(7)]);
var state_18305__$1 = state_18305;
var statearr_18318_19544 = state_18305__$1;
(statearr_18318_19544[(2)] = inst_18285);

(statearr_18318_19544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18306 === (10))){
var inst_18299 = (state_18305[(2)]);
var state_18305__$1 = state_18305;
var statearr_18319_19545 = state_18305__$1;
(statearr_18319_19545[(2)] = inst_18299);

(statearr_18319_19545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18306 === (8))){
var inst_18292 = (state_18305[(9)]);
var inst_18295 = cljs.core.deref(inst_18292);
var state_18305__$1 = state_18305;
var statearr_18320_19546 = state_18305__$1;
(statearr_18320_19546[(2)] = inst_18295);

(statearr_18320_19546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17818__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17818__auto____0 = (function (){
var statearr_18321 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18321[(0)] = cljs$core$async$reduce_$_state_machine__17818__auto__);

(statearr_18321[(1)] = (1));

return statearr_18321;
});
var cljs$core$async$reduce_$_state_machine__17818__auto____1 = (function (state_18305){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_18305);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e18322){var ex__17821__auto__ = e18322;
var statearr_18323_19547 = state_18305;
(statearr_18323_19547[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_18305[(4)]))){
var statearr_18324_19548 = state_18305;
(statearr_18324_19548[(1)] = cljs.core.first((state_18305[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19549 = state_18305;
state_18305 = G__19549;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17818__auto__ = function(state_18305){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17818__auto____1.call(this,state_18305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17818__auto____0;
cljs$core$async$reduce_$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17818__auto____1;
return cljs$core$async$reduce_$_state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_18325 = f__17854__auto__();
(statearr_18325[(6)] = c__17853__auto__);

return statearr_18325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));

return c__17853__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_18331){
var state_val_18332 = (state_18331[(1)]);
if((state_val_18332 === (1))){
var inst_18326 = cljs.core.async.reduce(f__$1,init,ch);
var state_18331__$1 = state_18331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18331__$1,(2),inst_18326);
} else {
if((state_val_18332 === (2))){
var inst_18328 = (state_18331[(2)]);
var inst_18329 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18328) : f__$1.call(null,inst_18328));
var state_18331__$1 = state_18331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18331__$1,inst_18329);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17818__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17818__auto____0 = (function (){
var statearr_18333 = [null,null,null,null,null,null,null];
(statearr_18333[(0)] = cljs$core$async$transduce_$_state_machine__17818__auto__);

(statearr_18333[(1)] = (1));

return statearr_18333;
});
var cljs$core$async$transduce_$_state_machine__17818__auto____1 = (function (state_18331){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_18331);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e18334){var ex__17821__auto__ = e18334;
var statearr_18335_19550 = state_18331;
(statearr_18335_19550[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_18331[(4)]))){
var statearr_18336_19551 = state_18331;
(statearr_18336_19551[(1)] = cljs.core.first((state_18331[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19552 = state_18331;
state_18331 = G__19552;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17818__auto__ = function(state_18331){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17818__auto____1.call(this,state_18331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17818__auto____0;
cljs$core$async$transduce_$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17818__auto____1;
return cljs$core$async$transduce_$_state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_18337 = f__17854__auto__();
(statearr_18337[(6)] = c__17853__auto__);

return statearr_18337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));

return c__17853__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18339 = arguments.length;
switch (G__18339) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_18364){
var state_val_18365 = (state_18364[(1)]);
if((state_val_18365 === (7))){
var inst_18346 = (state_18364[(2)]);
var state_18364__$1 = state_18364;
var statearr_18366_19554 = state_18364__$1;
(statearr_18366_19554[(2)] = inst_18346);

(statearr_18366_19554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (1))){
var inst_18340 = cljs.core.seq(coll);
var inst_18341 = inst_18340;
var state_18364__$1 = (function (){var statearr_18367 = state_18364;
(statearr_18367[(7)] = inst_18341);

return statearr_18367;
})();
var statearr_18368_19555 = state_18364__$1;
(statearr_18368_19555[(2)] = null);

(statearr_18368_19555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (4))){
var inst_18341 = (state_18364[(7)]);
var inst_18344 = cljs.core.first(inst_18341);
var state_18364__$1 = state_18364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18364__$1,(7),ch,inst_18344);
} else {
if((state_val_18365 === (13))){
var inst_18358 = (state_18364[(2)]);
var state_18364__$1 = state_18364;
var statearr_18369_19556 = state_18364__$1;
(statearr_18369_19556[(2)] = inst_18358);

(statearr_18369_19556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (6))){
var inst_18349 = (state_18364[(2)]);
var state_18364__$1 = state_18364;
if(cljs.core.truth_(inst_18349)){
var statearr_18370_19561 = state_18364__$1;
(statearr_18370_19561[(1)] = (8));

} else {
var statearr_18371_19562 = state_18364__$1;
(statearr_18371_19562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (3))){
var inst_18362 = (state_18364[(2)]);
var state_18364__$1 = state_18364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18364__$1,inst_18362);
} else {
if((state_val_18365 === (12))){
var state_18364__$1 = state_18364;
var statearr_18372_19563 = state_18364__$1;
(statearr_18372_19563[(2)] = null);

(statearr_18372_19563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (2))){
var inst_18341 = (state_18364[(7)]);
var state_18364__$1 = state_18364;
if(cljs.core.truth_(inst_18341)){
var statearr_18373_19564 = state_18364__$1;
(statearr_18373_19564[(1)] = (4));

} else {
var statearr_18374_19565 = state_18364__$1;
(statearr_18374_19565[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (11))){
var inst_18355 = cljs.core.async.close_BANG_(ch);
var state_18364__$1 = state_18364;
var statearr_18375_19566 = state_18364__$1;
(statearr_18375_19566[(2)] = inst_18355);

(statearr_18375_19566[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (9))){
var state_18364__$1 = state_18364;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18376_19567 = state_18364__$1;
(statearr_18376_19567[(1)] = (11));

} else {
var statearr_18377_19568 = state_18364__$1;
(statearr_18377_19568[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (5))){
var inst_18341 = (state_18364[(7)]);
var state_18364__$1 = state_18364;
var statearr_18378_19569 = state_18364__$1;
(statearr_18378_19569[(2)] = inst_18341);

(statearr_18378_19569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (10))){
var inst_18360 = (state_18364[(2)]);
var state_18364__$1 = state_18364;
var statearr_18379_19570 = state_18364__$1;
(statearr_18379_19570[(2)] = inst_18360);

(statearr_18379_19570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (8))){
var inst_18341 = (state_18364[(7)]);
var inst_18351 = cljs.core.next(inst_18341);
var inst_18341__$1 = inst_18351;
var state_18364__$1 = (function (){var statearr_18380 = state_18364;
(statearr_18380[(7)] = inst_18341__$1);

return statearr_18380;
})();
var statearr_18381_19571 = state_18364__$1;
(statearr_18381_19571[(2)] = null);

(statearr_18381_19571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17818__auto__ = null;
var cljs$core$async$state_machine__17818__auto____0 = (function (){
var statearr_18382 = [null,null,null,null,null,null,null,null];
(statearr_18382[(0)] = cljs$core$async$state_machine__17818__auto__);

(statearr_18382[(1)] = (1));

return statearr_18382;
});
var cljs$core$async$state_machine__17818__auto____1 = (function (state_18364){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_18364);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e18383){var ex__17821__auto__ = e18383;
var statearr_18384_19572 = state_18364;
(statearr_18384_19572[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_18364[(4)]))){
var statearr_18385_19573 = state_18364;
(statearr_18385_19573[(1)] = cljs.core.first((state_18364[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19574 = state_18364;
state_18364 = G__19574;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$state_machine__17818__auto__ = function(state_18364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17818__auto____1.call(this,state_18364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17818__auto____0;
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17818__auto____1;
return cljs$core$async$state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_18386 = f__17854__auto__();
(statearr_18386[(6)] = c__17853__auto__);

return statearr_18386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));

return c__17853__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18388 = arguments.length;
switch (G__18388) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19576 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19576(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19577 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19577(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19578 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19578(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19579 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19579(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18389 = (function (ch,cs,meta18390){
this.ch = ch;
this.cs = cs;
this.meta18390 = meta18390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18391,meta18390__$1){
var self__ = this;
var _18391__$1 = this;
return (new cljs.core.async.t_cljs$core$async18389(self__.ch,self__.cs,meta18390__$1));
}));

(cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18391){
var self__ = this;
var _18391__$1 = this;
return self__.meta18390;
}));

(cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18389.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18390","meta18390",214656560,null)], null);
}));

(cljs.core.async.t_cljs$core$async18389.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18389");

(cljs.core.async.t_cljs$core$async18389.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18389");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18389.
 */
cljs.core.async.__GT_t_cljs$core$async18389 = (function cljs$core$async$__GT_t_cljs$core$async18389(ch,cs,meta18390){
return (new cljs.core.async.t_cljs$core$async18389(ch,cs,meta18390));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async18389(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17853__auto___19580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_18524){
var state_val_18525 = (state_18524[(1)]);
if((state_val_18525 === (7))){
var inst_18520 = (state_18524[(2)]);
var state_18524__$1 = state_18524;
var statearr_18526_19581 = state_18524__$1;
(statearr_18526_19581[(2)] = inst_18520);

(statearr_18526_19581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (20))){
var inst_18425 = (state_18524[(7)]);
var inst_18437 = cljs.core.first(inst_18425);
var inst_18438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18437,(0),null);
var inst_18439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18437,(1),null);
var state_18524__$1 = (function (){var statearr_18527 = state_18524;
(statearr_18527[(8)] = inst_18438);

return statearr_18527;
})();
if(cljs.core.truth_(inst_18439)){
var statearr_18528_19582 = state_18524__$1;
(statearr_18528_19582[(1)] = (22));

} else {
var statearr_18529_19583 = state_18524__$1;
(statearr_18529_19583[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (27))){
var inst_18469 = (state_18524[(9)]);
var inst_18474 = (state_18524[(10)]);
var inst_18467 = (state_18524[(11)]);
var inst_18394 = (state_18524[(12)]);
var inst_18474__$1 = cljs.core._nth(inst_18467,inst_18469);
var inst_18475 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18474__$1,inst_18394,done);
var state_18524__$1 = (function (){var statearr_18530 = state_18524;
(statearr_18530[(10)] = inst_18474__$1);

return statearr_18530;
})();
if(cljs.core.truth_(inst_18475)){
var statearr_18531_19584 = state_18524__$1;
(statearr_18531_19584[(1)] = (30));

} else {
var statearr_18532_19585 = state_18524__$1;
(statearr_18532_19585[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (1))){
var state_18524__$1 = state_18524;
var statearr_18533_19586 = state_18524__$1;
(statearr_18533_19586[(2)] = null);

(statearr_18533_19586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (24))){
var inst_18425 = (state_18524[(7)]);
var inst_18444 = (state_18524[(2)]);
var inst_18445 = cljs.core.next(inst_18425);
var inst_18403 = inst_18445;
var inst_18404 = null;
var inst_18405 = (0);
var inst_18406 = (0);
var state_18524__$1 = (function (){var statearr_18534 = state_18524;
(statearr_18534[(13)] = inst_18404);

(statearr_18534[(14)] = inst_18444);

(statearr_18534[(15)] = inst_18403);

(statearr_18534[(16)] = inst_18406);

(statearr_18534[(17)] = inst_18405);

return statearr_18534;
})();
var statearr_18535_19587 = state_18524__$1;
(statearr_18535_19587[(2)] = null);

(statearr_18535_19587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (39))){
var state_18524__$1 = state_18524;
var statearr_18539_19588 = state_18524__$1;
(statearr_18539_19588[(2)] = null);

(statearr_18539_19588[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (4))){
var inst_18394 = (state_18524[(12)]);
var inst_18394__$1 = (state_18524[(2)]);
var inst_18395 = (inst_18394__$1 == null);
var state_18524__$1 = (function (){var statearr_18540 = state_18524;
(statearr_18540[(12)] = inst_18394__$1);

return statearr_18540;
})();
if(cljs.core.truth_(inst_18395)){
var statearr_18541_19592 = state_18524__$1;
(statearr_18541_19592[(1)] = (5));

} else {
var statearr_18542_19593 = state_18524__$1;
(statearr_18542_19593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (15))){
var inst_18404 = (state_18524[(13)]);
var inst_18403 = (state_18524[(15)]);
var inst_18406 = (state_18524[(16)]);
var inst_18405 = (state_18524[(17)]);
var inst_18421 = (state_18524[(2)]);
var inst_18422 = (inst_18406 + (1));
var tmp18536 = inst_18404;
var tmp18537 = inst_18403;
var tmp18538 = inst_18405;
var inst_18403__$1 = tmp18537;
var inst_18404__$1 = tmp18536;
var inst_18405__$1 = tmp18538;
var inst_18406__$1 = inst_18422;
var state_18524__$1 = (function (){var statearr_18543 = state_18524;
(statearr_18543[(13)] = inst_18404__$1);

(statearr_18543[(15)] = inst_18403__$1);

(statearr_18543[(16)] = inst_18406__$1);

(statearr_18543[(17)] = inst_18405__$1);

(statearr_18543[(18)] = inst_18421);

return statearr_18543;
})();
var statearr_18544_19594 = state_18524__$1;
(statearr_18544_19594[(2)] = null);

(statearr_18544_19594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (21))){
var inst_18448 = (state_18524[(2)]);
var state_18524__$1 = state_18524;
var statearr_18548_19595 = state_18524__$1;
(statearr_18548_19595[(2)] = inst_18448);

(statearr_18548_19595[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (31))){
var inst_18474 = (state_18524[(10)]);
var inst_18478 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18474);
var state_18524__$1 = state_18524;
var statearr_18549_19596 = state_18524__$1;
(statearr_18549_19596[(2)] = inst_18478);

(statearr_18549_19596[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (32))){
var inst_18469 = (state_18524[(9)]);
var inst_18468 = (state_18524[(19)]);
var inst_18467 = (state_18524[(11)]);
var inst_18466 = (state_18524[(20)]);
var inst_18480 = (state_18524[(2)]);
var inst_18481 = (inst_18469 + (1));
var tmp18545 = inst_18468;
var tmp18546 = inst_18467;
var tmp18547 = inst_18466;
var inst_18466__$1 = tmp18547;
var inst_18467__$1 = tmp18546;
var inst_18468__$1 = tmp18545;
var inst_18469__$1 = inst_18481;
var state_18524__$1 = (function (){var statearr_18550 = state_18524;
(statearr_18550[(9)] = inst_18469__$1);

(statearr_18550[(19)] = inst_18468__$1);

(statearr_18550[(11)] = inst_18467__$1);

(statearr_18550[(21)] = inst_18480);

(statearr_18550[(20)] = inst_18466__$1);

return statearr_18550;
})();
var statearr_18551_19597 = state_18524__$1;
(statearr_18551_19597[(2)] = null);

(statearr_18551_19597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (40))){
var inst_18493 = (state_18524[(22)]);
var inst_18497 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18493);
var state_18524__$1 = state_18524;
var statearr_18552_19598 = state_18524__$1;
(statearr_18552_19598[(2)] = inst_18497);

(statearr_18552_19598[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (33))){
var inst_18484 = (state_18524[(23)]);
var inst_18486 = cljs.core.chunked_seq_QMARK_(inst_18484);
var state_18524__$1 = state_18524;
if(inst_18486){
var statearr_18553_19599 = state_18524__$1;
(statearr_18553_19599[(1)] = (36));

} else {
var statearr_18554_19600 = state_18524__$1;
(statearr_18554_19600[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (13))){
var inst_18415 = (state_18524[(24)]);
var inst_18418 = cljs.core.async.close_BANG_(inst_18415);
var state_18524__$1 = state_18524;
var statearr_18555_19604 = state_18524__$1;
(statearr_18555_19604[(2)] = inst_18418);

(statearr_18555_19604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (22))){
var inst_18438 = (state_18524[(8)]);
var inst_18441 = cljs.core.async.close_BANG_(inst_18438);
var state_18524__$1 = state_18524;
var statearr_18556_19605 = state_18524__$1;
(statearr_18556_19605[(2)] = inst_18441);

(statearr_18556_19605[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (36))){
var inst_18484 = (state_18524[(23)]);
var inst_18488 = cljs.core.chunk_first(inst_18484);
var inst_18489 = cljs.core.chunk_rest(inst_18484);
var inst_18490 = cljs.core.count(inst_18488);
var inst_18466 = inst_18489;
var inst_18467 = inst_18488;
var inst_18468 = inst_18490;
var inst_18469 = (0);
var state_18524__$1 = (function (){var statearr_18557 = state_18524;
(statearr_18557[(9)] = inst_18469);

(statearr_18557[(19)] = inst_18468);

(statearr_18557[(11)] = inst_18467);

(statearr_18557[(20)] = inst_18466);

return statearr_18557;
})();
var statearr_18558_19606 = state_18524__$1;
(statearr_18558_19606[(2)] = null);

(statearr_18558_19606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (41))){
var inst_18484 = (state_18524[(23)]);
var inst_18499 = (state_18524[(2)]);
var inst_18500 = cljs.core.next(inst_18484);
var inst_18466 = inst_18500;
var inst_18467 = null;
var inst_18468 = (0);
var inst_18469 = (0);
var state_18524__$1 = (function (){var statearr_18559 = state_18524;
(statearr_18559[(9)] = inst_18469);

(statearr_18559[(25)] = inst_18499);

(statearr_18559[(19)] = inst_18468);

(statearr_18559[(11)] = inst_18467);

(statearr_18559[(20)] = inst_18466);

return statearr_18559;
})();
var statearr_18560_19607 = state_18524__$1;
(statearr_18560_19607[(2)] = null);

(statearr_18560_19607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (43))){
var state_18524__$1 = state_18524;
var statearr_18561_19608 = state_18524__$1;
(statearr_18561_19608[(2)] = null);

(statearr_18561_19608[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (29))){
var inst_18508 = (state_18524[(2)]);
var state_18524__$1 = state_18524;
var statearr_18562_19609 = state_18524__$1;
(statearr_18562_19609[(2)] = inst_18508);

(statearr_18562_19609[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (44))){
var inst_18517 = (state_18524[(2)]);
var state_18524__$1 = (function (){var statearr_18563 = state_18524;
(statearr_18563[(26)] = inst_18517);

return statearr_18563;
})();
var statearr_18564_19610 = state_18524__$1;
(statearr_18564_19610[(2)] = null);

(statearr_18564_19610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (6))){
var inst_18458 = (state_18524[(27)]);
var inst_18457 = cljs.core.deref(cs);
var inst_18458__$1 = cljs.core.keys(inst_18457);
var inst_18459 = cljs.core.count(inst_18458__$1);
var inst_18460 = cljs.core.reset_BANG_(dctr,inst_18459);
var inst_18465 = cljs.core.seq(inst_18458__$1);
var inst_18466 = inst_18465;
var inst_18467 = null;
var inst_18468 = (0);
var inst_18469 = (0);
var state_18524__$1 = (function (){var statearr_18565 = state_18524;
(statearr_18565[(9)] = inst_18469);

(statearr_18565[(27)] = inst_18458__$1);

(statearr_18565[(19)] = inst_18468);

(statearr_18565[(11)] = inst_18467);

(statearr_18565[(20)] = inst_18466);

(statearr_18565[(28)] = inst_18460);

return statearr_18565;
})();
var statearr_18566_19611 = state_18524__$1;
(statearr_18566_19611[(2)] = null);

(statearr_18566_19611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (28))){
var inst_18484 = (state_18524[(23)]);
var inst_18466 = (state_18524[(20)]);
var inst_18484__$1 = cljs.core.seq(inst_18466);
var state_18524__$1 = (function (){var statearr_18567 = state_18524;
(statearr_18567[(23)] = inst_18484__$1);

return statearr_18567;
})();
if(inst_18484__$1){
var statearr_18568_19615 = state_18524__$1;
(statearr_18568_19615[(1)] = (33));

} else {
var statearr_18569_19616 = state_18524__$1;
(statearr_18569_19616[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (25))){
var inst_18469 = (state_18524[(9)]);
var inst_18468 = (state_18524[(19)]);
var inst_18471 = (inst_18469 < inst_18468);
var inst_18472 = inst_18471;
var state_18524__$1 = state_18524;
if(cljs.core.truth_(inst_18472)){
var statearr_18570_19617 = state_18524__$1;
(statearr_18570_19617[(1)] = (27));

} else {
var statearr_18571_19618 = state_18524__$1;
(statearr_18571_19618[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (34))){
var state_18524__$1 = state_18524;
var statearr_18572_19619 = state_18524__$1;
(statearr_18572_19619[(2)] = null);

(statearr_18572_19619[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (17))){
var state_18524__$1 = state_18524;
var statearr_18573_19620 = state_18524__$1;
(statearr_18573_19620[(2)] = null);

(statearr_18573_19620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (3))){
var inst_18522 = (state_18524[(2)]);
var state_18524__$1 = state_18524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18524__$1,inst_18522);
} else {
if((state_val_18525 === (12))){
var inst_18453 = (state_18524[(2)]);
var state_18524__$1 = state_18524;
var statearr_18574_19621 = state_18524__$1;
(statearr_18574_19621[(2)] = inst_18453);

(statearr_18574_19621[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (2))){
var state_18524__$1 = state_18524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18524__$1,(4),ch);
} else {
if((state_val_18525 === (23))){
var state_18524__$1 = state_18524;
var statearr_18575_19622 = state_18524__$1;
(statearr_18575_19622[(2)] = null);

(statearr_18575_19622[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (35))){
var inst_18506 = (state_18524[(2)]);
var state_18524__$1 = state_18524;
var statearr_18576_19623 = state_18524__$1;
(statearr_18576_19623[(2)] = inst_18506);

(statearr_18576_19623[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (19))){
var inst_18425 = (state_18524[(7)]);
var inst_18429 = cljs.core.chunk_first(inst_18425);
var inst_18430 = cljs.core.chunk_rest(inst_18425);
var inst_18431 = cljs.core.count(inst_18429);
var inst_18403 = inst_18430;
var inst_18404 = inst_18429;
var inst_18405 = inst_18431;
var inst_18406 = (0);
var state_18524__$1 = (function (){var statearr_18577 = state_18524;
(statearr_18577[(13)] = inst_18404);

(statearr_18577[(15)] = inst_18403);

(statearr_18577[(16)] = inst_18406);

(statearr_18577[(17)] = inst_18405);

return statearr_18577;
})();
var statearr_18578_19624 = state_18524__$1;
(statearr_18578_19624[(2)] = null);

(statearr_18578_19624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (11))){
var inst_18403 = (state_18524[(15)]);
var inst_18425 = (state_18524[(7)]);
var inst_18425__$1 = cljs.core.seq(inst_18403);
var state_18524__$1 = (function (){var statearr_18579 = state_18524;
(statearr_18579[(7)] = inst_18425__$1);

return statearr_18579;
})();
if(inst_18425__$1){
var statearr_18580_19625 = state_18524__$1;
(statearr_18580_19625[(1)] = (16));

} else {
var statearr_18581_19626 = state_18524__$1;
(statearr_18581_19626[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (9))){
var inst_18455 = (state_18524[(2)]);
var state_18524__$1 = state_18524;
var statearr_18582_19627 = state_18524__$1;
(statearr_18582_19627[(2)] = inst_18455);

(statearr_18582_19627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (5))){
var inst_18401 = cljs.core.deref(cs);
var inst_18402 = cljs.core.seq(inst_18401);
var inst_18403 = inst_18402;
var inst_18404 = null;
var inst_18405 = (0);
var inst_18406 = (0);
var state_18524__$1 = (function (){var statearr_18583 = state_18524;
(statearr_18583[(13)] = inst_18404);

(statearr_18583[(15)] = inst_18403);

(statearr_18583[(16)] = inst_18406);

(statearr_18583[(17)] = inst_18405);

return statearr_18583;
})();
var statearr_18584_19628 = state_18524__$1;
(statearr_18584_19628[(2)] = null);

(statearr_18584_19628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (14))){
var state_18524__$1 = state_18524;
var statearr_18585_19629 = state_18524__$1;
(statearr_18585_19629[(2)] = null);

(statearr_18585_19629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (45))){
var inst_18514 = (state_18524[(2)]);
var state_18524__$1 = state_18524;
var statearr_18586_19630 = state_18524__$1;
(statearr_18586_19630[(2)] = inst_18514);

(statearr_18586_19630[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (26))){
var inst_18458 = (state_18524[(27)]);
var inst_18510 = (state_18524[(2)]);
var inst_18511 = cljs.core.seq(inst_18458);
var state_18524__$1 = (function (){var statearr_18587 = state_18524;
(statearr_18587[(29)] = inst_18510);

return statearr_18587;
})();
if(inst_18511){
var statearr_18588_19631 = state_18524__$1;
(statearr_18588_19631[(1)] = (42));

} else {
var statearr_18589_19632 = state_18524__$1;
(statearr_18589_19632[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (16))){
var inst_18425 = (state_18524[(7)]);
var inst_18427 = cljs.core.chunked_seq_QMARK_(inst_18425);
var state_18524__$1 = state_18524;
if(inst_18427){
var statearr_18590_19633 = state_18524__$1;
(statearr_18590_19633[(1)] = (19));

} else {
var statearr_18591_19634 = state_18524__$1;
(statearr_18591_19634[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (38))){
var inst_18503 = (state_18524[(2)]);
var state_18524__$1 = state_18524;
var statearr_18592_19635 = state_18524__$1;
(statearr_18592_19635[(2)] = inst_18503);

(statearr_18592_19635[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (30))){
var state_18524__$1 = state_18524;
var statearr_18593_19636 = state_18524__$1;
(statearr_18593_19636[(2)] = null);

(statearr_18593_19636[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (10))){
var inst_18404 = (state_18524[(13)]);
var inst_18406 = (state_18524[(16)]);
var inst_18414 = cljs.core._nth(inst_18404,inst_18406);
var inst_18415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18414,(0),null);
var inst_18416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18414,(1),null);
var state_18524__$1 = (function (){var statearr_18594 = state_18524;
(statearr_18594[(24)] = inst_18415);

return statearr_18594;
})();
if(cljs.core.truth_(inst_18416)){
var statearr_18595_19637 = state_18524__$1;
(statearr_18595_19637[(1)] = (13));

} else {
var statearr_18596_19638 = state_18524__$1;
(statearr_18596_19638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (18))){
var inst_18451 = (state_18524[(2)]);
var state_18524__$1 = state_18524;
var statearr_18597_19639 = state_18524__$1;
(statearr_18597_19639[(2)] = inst_18451);

(statearr_18597_19639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (42))){
var state_18524__$1 = state_18524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18524__$1,(45),dchan);
} else {
if((state_val_18525 === (37))){
var inst_18493 = (state_18524[(22)]);
var inst_18484 = (state_18524[(23)]);
var inst_18394 = (state_18524[(12)]);
var inst_18493__$1 = cljs.core.first(inst_18484);
var inst_18494 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18493__$1,inst_18394,done);
var state_18524__$1 = (function (){var statearr_18598 = state_18524;
(statearr_18598[(22)] = inst_18493__$1);

return statearr_18598;
})();
if(cljs.core.truth_(inst_18494)){
var statearr_18599_19640 = state_18524__$1;
(statearr_18599_19640[(1)] = (39));

} else {
var statearr_18600_19641 = state_18524__$1;
(statearr_18600_19641[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18525 === (8))){
var inst_18406 = (state_18524[(16)]);
var inst_18405 = (state_18524[(17)]);
var inst_18408 = (inst_18406 < inst_18405);
var inst_18409 = inst_18408;
var state_18524__$1 = state_18524;
if(cljs.core.truth_(inst_18409)){
var statearr_18601_19642 = state_18524__$1;
(statearr_18601_19642[(1)] = (10));

} else {
var statearr_18602_19643 = state_18524__$1;
(statearr_18602_19643[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17818__auto__ = null;
var cljs$core$async$mult_$_state_machine__17818__auto____0 = (function (){
var statearr_18603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18603[(0)] = cljs$core$async$mult_$_state_machine__17818__auto__);

(statearr_18603[(1)] = (1));

return statearr_18603;
});
var cljs$core$async$mult_$_state_machine__17818__auto____1 = (function (state_18524){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_18524);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e18604){var ex__17821__auto__ = e18604;
var statearr_18605_19646 = state_18524;
(statearr_18605_19646[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_18524[(4)]))){
var statearr_18606_19647 = state_18524;
(statearr_18606_19647[(1)] = cljs.core.first((state_18524[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19648 = state_18524;
state_18524 = G__19648;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17818__auto__ = function(state_18524){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17818__auto____1.call(this,state_18524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17818__auto____0;
cljs$core$async$mult_$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17818__auto____1;
return cljs$core$async$mult_$_state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_18607 = f__17854__auto__();
(statearr_18607[(6)] = c__17853__auto___19580);

return statearr_18607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18609 = arguments.length;
switch (G__18609) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19651 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19651(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19653 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19653(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19654 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19654(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19655 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19655(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19660 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19660(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19664 = arguments.length;
var i__5727__auto___19665 = (0);
while(true){
if((i__5727__auto___19665 < len__5726__auto___19664)){
args__5732__auto__.push((arguments[i__5727__auto___19665]));

var G__19666 = (i__5727__auto___19665 + (1));
i__5727__auto___19665 = G__19666;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18614){
var map__18615 = p__18614;
var map__18615__$1 = cljs.core.__destructure_map(map__18615);
var opts = map__18615__$1;
var statearr_18616_19667 = state;
(statearr_18616_19667[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18617_19668 = state;
(statearr_18617_19668[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18618_19669 = state;
(statearr_18618_19669[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18610){
var G__18611 = cljs.core.first(seq18610);
var seq18610__$1 = cljs.core.next(seq18610);
var G__18612 = cljs.core.first(seq18610__$1);
var seq18610__$2 = cljs.core.next(seq18610__$1);
var G__18613 = cljs.core.first(seq18610__$2);
var seq18610__$3 = cljs.core.next(seq18610__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18611,G__18612,G__18613,seq18610__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18619 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18620){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18620 = meta18620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18621,meta18620__$1){
var self__ = this;
var _18621__$1 = this;
return (new cljs.core.async.t_cljs$core$async18619(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18620__$1));
}));

(cljs.core.async.t_cljs$core$async18619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18621){
var self__ = this;
var _18621__$1 = this;
return self__.meta18620;
}));

(cljs.core.async.t_cljs$core$async18619.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18619.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18619.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18619.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18619.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18619.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18619.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18619.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18620","meta18620",881519137,null)], null);
}));

(cljs.core.async.t_cljs$core$async18619.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18619");

(cljs.core.async.t_cljs$core$async18619.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18619");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18619.
 */
cljs.core.async.__GT_t_cljs$core$async18619 = (function cljs$core$async$__GT_t_cljs$core$async18619(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18620){
return (new cljs.core.async.t_cljs$core$async18619(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18620));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async18619(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__17853__auto___19670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_18689){
var state_val_18690 = (state_18689[(1)]);
if((state_val_18690 === (7))){
var inst_18649 = (state_18689[(2)]);
var state_18689__$1 = state_18689;
if(cljs.core.truth_(inst_18649)){
var statearr_18691_19671 = state_18689__$1;
(statearr_18691_19671[(1)] = (8));

} else {
var statearr_18692_19672 = state_18689__$1;
(statearr_18692_19672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (20))){
var inst_18642 = (state_18689[(7)]);
var state_18689__$1 = state_18689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18689__$1,(23),out,inst_18642);
} else {
if((state_val_18690 === (1))){
var inst_18625 = calc_state();
var inst_18626 = cljs.core.__destructure_map(inst_18625);
var inst_18627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18626,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18626,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18626,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18630 = inst_18625;
var state_18689__$1 = (function (){var statearr_18693 = state_18689;
(statearr_18693[(8)] = inst_18629);

(statearr_18693[(9)] = inst_18628);

(statearr_18693[(10)] = inst_18627);

(statearr_18693[(11)] = inst_18630);

return statearr_18693;
})();
var statearr_18694_19673 = state_18689__$1;
(statearr_18694_19673[(2)] = null);

(statearr_18694_19673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (24))){
var inst_18633 = (state_18689[(12)]);
var inst_18630 = inst_18633;
var state_18689__$1 = (function (){var statearr_18695 = state_18689;
(statearr_18695[(11)] = inst_18630);

return statearr_18695;
})();
var statearr_18696_19677 = state_18689__$1;
(statearr_18696_19677[(2)] = null);

(statearr_18696_19677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (4))){
var inst_18644 = (state_18689[(13)]);
var inst_18642 = (state_18689[(7)]);
var inst_18641 = (state_18689[(2)]);
var inst_18642__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18641,(0),null);
var inst_18643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18641,(1),null);
var inst_18644__$1 = (inst_18642__$1 == null);
var state_18689__$1 = (function (){var statearr_18697 = state_18689;
(statearr_18697[(13)] = inst_18644__$1);

(statearr_18697[(14)] = inst_18643);

(statearr_18697[(7)] = inst_18642__$1);

return statearr_18697;
})();
if(cljs.core.truth_(inst_18644__$1)){
var statearr_18698_19678 = state_18689__$1;
(statearr_18698_19678[(1)] = (5));

} else {
var statearr_18699_19679 = state_18689__$1;
(statearr_18699_19679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (15))){
var inst_18663 = (state_18689[(15)]);
var inst_18634 = (state_18689[(16)]);
var inst_18663__$1 = cljs.core.empty_QMARK_(inst_18634);
var state_18689__$1 = (function (){var statearr_18700 = state_18689;
(statearr_18700[(15)] = inst_18663__$1);

return statearr_18700;
})();
if(inst_18663__$1){
var statearr_18701_19680 = state_18689__$1;
(statearr_18701_19680[(1)] = (17));

} else {
var statearr_18702_19681 = state_18689__$1;
(statearr_18702_19681[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (21))){
var inst_18633 = (state_18689[(12)]);
var inst_18630 = inst_18633;
var state_18689__$1 = (function (){var statearr_18703 = state_18689;
(statearr_18703[(11)] = inst_18630);

return statearr_18703;
})();
var statearr_18704_19682 = state_18689__$1;
(statearr_18704_19682[(2)] = null);

(statearr_18704_19682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (13))){
var inst_18656 = (state_18689[(2)]);
var inst_18657 = calc_state();
var inst_18630 = inst_18657;
var state_18689__$1 = (function (){var statearr_18705 = state_18689;
(statearr_18705[(17)] = inst_18656);

(statearr_18705[(11)] = inst_18630);

return statearr_18705;
})();
var statearr_18706_19683 = state_18689__$1;
(statearr_18706_19683[(2)] = null);

(statearr_18706_19683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (22))){
var inst_18683 = (state_18689[(2)]);
var state_18689__$1 = state_18689;
var statearr_18707_19684 = state_18689__$1;
(statearr_18707_19684[(2)] = inst_18683);

(statearr_18707_19684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (6))){
var inst_18643 = (state_18689[(14)]);
var inst_18647 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18643,change);
var state_18689__$1 = state_18689;
var statearr_18708_19685 = state_18689__$1;
(statearr_18708_19685[(2)] = inst_18647);

(statearr_18708_19685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (25))){
var state_18689__$1 = state_18689;
var statearr_18709_19686 = state_18689__$1;
(statearr_18709_19686[(2)] = null);

(statearr_18709_19686[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (17))){
var inst_18643 = (state_18689[(14)]);
var inst_18635 = (state_18689[(18)]);
var inst_18665 = (inst_18635.cljs$core$IFn$_invoke$arity$1 ? inst_18635.cljs$core$IFn$_invoke$arity$1(inst_18643) : inst_18635.call(null,inst_18643));
var inst_18666 = cljs.core.not(inst_18665);
var state_18689__$1 = state_18689;
var statearr_18710_19687 = state_18689__$1;
(statearr_18710_19687[(2)] = inst_18666);

(statearr_18710_19687[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (3))){
var inst_18687 = (state_18689[(2)]);
var state_18689__$1 = state_18689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18689__$1,inst_18687);
} else {
if((state_val_18690 === (12))){
var state_18689__$1 = state_18689;
var statearr_18711_19688 = state_18689__$1;
(statearr_18711_19688[(2)] = null);

(statearr_18711_19688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (2))){
var inst_18633 = (state_18689[(12)]);
var inst_18630 = (state_18689[(11)]);
var inst_18633__$1 = cljs.core.__destructure_map(inst_18630);
var inst_18634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18633__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18633__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18633__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18689__$1 = (function (){var statearr_18712 = state_18689;
(statearr_18712[(12)] = inst_18633__$1);

(statearr_18712[(18)] = inst_18635);

(statearr_18712[(16)] = inst_18634);

return statearr_18712;
})();
return cljs.core.async.ioc_alts_BANG_(state_18689__$1,(4),inst_18636);
} else {
if((state_val_18690 === (23))){
var inst_18674 = (state_18689[(2)]);
var state_18689__$1 = state_18689;
if(cljs.core.truth_(inst_18674)){
var statearr_18713_19689 = state_18689__$1;
(statearr_18713_19689[(1)] = (24));

} else {
var statearr_18714_19690 = state_18689__$1;
(statearr_18714_19690[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (19))){
var inst_18669 = (state_18689[(2)]);
var state_18689__$1 = state_18689;
var statearr_18715_19691 = state_18689__$1;
(statearr_18715_19691[(2)] = inst_18669);

(statearr_18715_19691[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (11))){
var inst_18643 = (state_18689[(14)]);
var inst_18653 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18643);
var state_18689__$1 = state_18689;
var statearr_18716_19692 = state_18689__$1;
(statearr_18716_19692[(2)] = inst_18653);

(statearr_18716_19692[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (9))){
var inst_18643 = (state_18689[(14)]);
var inst_18660 = (state_18689[(19)]);
var inst_18634 = (state_18689[(16)]);
var inst_18660__$1 = (inst_18634.cljs$core$IFn$_invoke$arity$1 ? inst_18634.cljs$core$IFn$_invoke$arity$1(inst_18643) : inst_18634.call(null,inst_18643));
var state_18689__$1 = (function (){var statearr_18717 = state_18689;
(statearr_18717[(19)] = inst_18660__$1);

return statearr_18717;
})();
if(cljs.core.truth_(inst_18660__$1)){
var statearr_18718_19693 = state_18689__$1;
(statearr_18718_19693[(1)] = (14));

} else {
var statearr_18719_19694 = state_18689__$1;
(statearr_18719_19694[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (5))){
var inst_18644 = (state_18689[(13)]);
var state_18689__$1 = state_18689;
var statearr_18720_19695 = state_18689__$1;
(statearr_18720_19695[(2)] = inst_18644);

(statearr_18720_19695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (14))){
var inst_18660 = (state_18689[(19)]);
var state_18689__$1 = state_18689;
var statearr_18721_19696 = state_18689__$1;
(statearr_18721_19696[(2)] = inst_18660);

(statearr_18721_19696[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (26))){
var inst_18679 = (state_18689[(2)]);
var state_18689__$1 = state_18689;
var statearr_18722_19697 = state_18689__$1;
(statearr_18722_19697[(2)] = inst_18679);

(statearr_18722_19697[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (16))){
var inst_18671 = (state_18689[(2)]);
var state_18689__$1 = state_18689;
if(cljs.core.truth_(inst_18671)){
var statearr_18723_19701 = state_18689__$1;
(statearr_18723_19701[(1)] = (20));

} else {
var statearr_18724_19702 = state_18689__$1;
(statearr_18724_19702[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (10))){
var inst_18685 = (state_18689[(2)]);
var state_18689__$1 = state_18689;
var statearr_18725_19703 = state_18689__$1;
(statearr_18725_19703[(2)] = inst_18685);

(statearr_18725_19703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (18))){
var inst_18663 = (state_18689[(15)]);
var state_18689__$1 = state_18689;
var statearr_18726_19704 = state_18689__$1;
(statearr_18726_19704[(2)] = inst_18663);

(statearr_18726_19704[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18690 === (8))){
var inst_18642 = (state_18689[(7)]);
var inst_18651 = (inst_18642 == null);
var state_18689__$1 = state_18689;
if(cljs.core.truth_(inst_18651)){
var statearr_18727_19705 = state_18689__$1;
(statearr_18727_19705[(1)] = (11));

} else {
var statearr_18728_19706 = state_18689__$1;
(statearr_18728_19706[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17818__auto__ = null;
var cljs$core$async$mix_$_state_machine__17818__auto____0 = (function (){
var statearr_18729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18729[(0)] = cljs$core$async$mix_$_state_machine__17818__auto__);

(statearr_18729[(1)] = (1));

return statearr_18729;
});
var cljs$core$async$mix_$_state_machine__17818__auto____1 = (function (state_18689){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_18689);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e18730){var ex__17821__auto__ = e18730;
var statearr_18731_19707 = state_18689;
(statearr_18731_19707[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_18689[(4)]))){
var statearr_18732_19708 = state_18689;
(statearr_18732_19708[(1)] = cljs.core.first((state_18689[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19709 = state_18689;
state_18689 = G__19709;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17818__auto__ = function(state_18689){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17818__auto____1.call(this,state_18689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17818__auto____0;
cljs$core$async$mix_$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17818__auto____1;
return cljs$core$async$mix_$_state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_18733 = f__17854__auto__();
(statearr_18733[(6)] = c__17853__auto___19670);

return statearr_18733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19710 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19710(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19711 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19711(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19712 = (function() {
var G__19713 = null;
var G__19713__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19713__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19713 = function(p,v){
switch(arguments.length){
case 1:
return G__19713__1.call(this,p);
case 2:
return G__19713__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19713.cljs$core$IFn$_invoke$arity$1 = G__19713__1;
G__19713.cljs$core$IFn$_invoke$arity$2 = G__19713__2;
return G__19713;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18735 = arguments.length;
switch (G__18735) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19712(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19712(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18739 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18740){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18740 = meta18740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18741,meta18740__$1){
var self__ = this;
var _18741__$1 = this;
return (new cljs.core.async.t_cljs$core$async18739(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18740__$1));
}));

(cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18741){
var self__ = this;
var _18741__$1 = this;
return self__.meta18740;
}));

(cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18740","meta18740",660539765,null)], null);
}));

(cljs.core.async.t_cljs$core$async18739.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18739");

(cljs.core.async.t_cljs$core$async18739.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18739");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18739.
 */
cljs.core.async.__GT_t_cljs$core$async18739 = (function cljs$core$async$__GT_t_cljs$core$async18739(ch,topic_fn,buf_fn,mults,ensure_mult,meta18740){
return (new cljs.core.async.t_cljs$core$async18739(ch,topic_fn,buf_fn,mults,ensure_mult,meta18740));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18738 = arguments.length;
switch (G__18738) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18736_SHARP_){
if(cljs.core.truth_((p1__18736_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18736_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18736_SHARP_.call(null,topic)))){
return p1__18736_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18736_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18739(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__17853__auto___19719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_18813){
var state_val_18814 = (state_18813[(1)]);
if((state_val_18814 === (7))){
var inst_18809 = (state_18813[(2)]);
var state_18813__$1 = state_18813;
var statearr_18815_19720 = state_18813__$1;
(statearr_18815_19720[(2)] = inst_18809);

(statearr_18815_19720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (20))){
var state_18813__$1 = state_18813;
var statearr_18816_19721 = state_18813__$1;
(statearr_18816_19721[(2)] = null);

(statearr_18816_19721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (1))){
var state_18813__$1 = state_18813;
var statearr_18817_19722 = state_18813__$1;
(statearr_18817_19722[(2)] = null);

(statearr_18817_19722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (24))){
var inst_18792 = (state_18813[(7)]);
var inst_18801 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18792);
var state_18813__$1 = state_18813;
var statearr_18818_19723 = state_18813__$1;
(statearr_18818_19723[(2)] = inst_18801);

(statearr_18818_19723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (4))){
var inst_18744 = (state_18813[(8)]);
var inst_18744__$1 = (state_18813[(2)]);
var inst_18745 = (inst_18744__$1 == null);
var state_18813__$1 = (function (){var statearr_18819 = state_18813;
(statearr_18819[(8)] = inst_18744__$1);

return statearr_18819;
})();
if(cljs.core.truth_(inst_18745)){
var statearr_18820_19724 = state_18813__$1;
(statearr_18820_19724[(1)] = (5));

} else {
var statearr_18821_19725 = state_18813__$1;
(statearr_18821_19725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (15))){
var inst_18786 = (state_18813[(2)]);
var state_18813__$1 = state_18813;
var statearr_18822_19726 = state_18813__$1;
(statearr_18822_19726[(2)] = inst_18786);

(statearr_18822_19726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (21))){
var inst_18806 = (state_18813[(2)]);
var state_18813__$1 = (function (){var statearr_18823 = state_18813;
(statearr_18823[(9)] = inst_18806);

return statearr_18823;
})();
var statearr_18824_19727 = state_18813__$1;
(statearr_18824_19727[(2)] = null);

(statearr_18824_19727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (13))){
var inst_18768 = (state_18813[(10)]);
var inst_18770 = cljs.core.chunked_seq_QMARK_(inst_18768);
var state_18813__$1 = state_18813;
if(inst_18770){
var statearr_18825_19728 = state_18813__$1;
(statearr_18825_19728[(1)] = (16));

} else {
var statearr_18826_19729 = state_18813__$1;
(statearr_18826_19729[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (22))){
var inst_18798 = (state_18813[(2)]);
var state_18813__$1 = state_18813;
if(cljs.core.truth_(inst_18798)){
var statearr_18827_19730 = state_18813__$1;
(statearr_18827_19730[(1)] = (23));

} else {
var statearr_18828_19731 = state_18813__$1;
(statearr_18828_19731[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (6))){
var inst_18744 = (state_18813[(8)]);
var inst_18794 = (state_18813[(11)]);
var inst_18792 = (state_18813[(7)]);
var inst_18792__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18744) : topic_fn.call(null,inst_18744));
var inst_18793 = cljs.core.deref(mults);
var inst_18794__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18793,inst_18792__$1);
var state_18813__$1 = (function (){var statearr_18829 = state_18813;
(statearr_18829[(11)] = inst_18794__$1);

(statearr_18829[(7)] = inst_18792__$1);

return statearr_18829;
})();
if(cljs.core.truth_(inst_18794__$1)){
var statearr_18830_19732 = state_18813__$1;
(statearr_18830_19732[(1)] = (19));

} else {
var statearr_18831_19733 = state_18813__$1;
(statearr_18831_19733[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (25))){
var inst_18803 = (state_18813[(2)]);
var state_18813__$1 = state_18813;
var statearr_18832_19734 = state_18813__$1;
(statearr_18832_19734[(2)] = inst_18803);

(statearr_18832_19734[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (17))){
var inst_18768 = (state_18813[(10)]);
var inst_18777 = cljs.core.first(inst_18768);
var inst_18778 = cljs.core.async.muxch_STAR_(inst_18777);
var inst_18779 = cljs.core.async.close_BANG_(inst_18778);
var inst_18780 = cljs.core.next(inst_18768);
var inst_18754 = inst_18780;
var inst_18755 = null;
var inst_18756 = (0);
var inst_18757 = (0);
var state_18813__$1 = (function (){var statearr_18833 = state_18813;
(statearr_18833[(12)] = inst_18755);

(statearr_18833[(13)] = inst_18779);

(statearr_18833[(14)] = inst_18756);

(statearr_18833[(15)] = inst_18754);

(statearr_18833[(16)] = inst_18757);

return statearr_18833;
})();
var statearr_18834_19735 = state_18813__$1;
(statearr_18834_19735[(2)] = null);

(statearr_18834_19735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (3))){
var inst_18811 = (state_18813[(2)]);
var state_18813__$1 = state_18813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18813__$1,inst_18811);
} else {
if((state_val_18814 === (12))){
var inst_18788 = (state_18813[(2)]);
var state_18813__$1 = state_18813;
var statearr_18835_19740 = state_18813__$1;
(statearr_18835_19740[(2)] = inst_18788);

(statearr_18835_19740[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (2))){
var state_18813__$1 = state_18813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18813__$1,(4),ch);
} else {
if((state_val_18814 === (23))){
var state_18813__$1 = state_18813;
var statearr_18836_19741 = state_18813__$1;
(statearr_18836_19741[(2)] = null);

(statearr_18836_19741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (19))){
var inst_18744 = (state_18813[(8)]);
var inst_18794 = (state_18813[(11)]);
var inst_18796 = cljs.core.async.muxch_STAR_(inst_18794);
var state_18813__$1 = state_18813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18813__$1,(22),inst_18796,inst_18744);
} else {
if((state_val_18814 === (11))){
var inst_18768 = (state_18813[(10)]);
var inst_18754 = (state_18813[(15)]);
var inst_18768__$1 = cljs.core.seq(inst_18754);
var state_18813__$1 = (function (){var statearr_18837 = state_18813;
(statearr_18837[(10)] = inst_18768__$1);

return statearr_18837;
})();
if(inst_18768__$1){
var statearr_18838_19742 = state_18813__$1;
(statearr_18838_19742[(1)] = (13));

} else {
var statearr_18839_19743 = state_18813__$1;
(statearr_18839_19743[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (9))){
var inst_18790 = (state_18813[(2)]);
var state_18813__$1 = state_18813;
var statearr_18840_19744 = state_18813__$1;
(statearr_18840_19744[(2)] = inst_18790);

(statearr_18840_19744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (5))){
var inst_18751 = cljs.core.deref(mults);
var inst_18752 = cljs.core.vals(inst_18751);
var inst_18753 = cljs.core.seq(inst_18752);
var inst_18754 = inst_18753;
var inst_18755 = null;
var inst_18756 = (0);
var inst_18757 = (0);
var state_18813__$1 = (function (){var statearr_18841 = state_18813;
(statearr_18841[(12)] = inst_18755);

(statearr_18841[(14)] = inst_18756);

(statearr_18841[(15)] = inst_18754);

(statearr_18841[(16)] = inst_18757);

return statearr_18841;
})();
var statearr_18842_19745 = state_18813__$1;
(statearr_18842_19745[(2)] = null);

(statearr_18842_19745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (14))){
var state_18813__$1 = state_18813;
var statearr_18846_19746 = state_18813__$1;
(statearr_18846_19746[(2)] = null);

(statearr_18846_19746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (16))){
var inst_18768 = (state_18813[(10)]);
var inst_18772 = cljs.core.chunk_first(inst_18768);
var inst_18773 = cljs.core.chunk_rest(inst_18768);
var inst_18774 = cljs.core.count(inst_18772);
var inst_18754 = inst_18773;
var inst_18755 = inst_18772;
var inst_18756 = inst_18774;
var inst_18757 = (0);
var state_18813__$1 = (function (){var statearr_18847 = state_18813;
(statearr_18847[(12)] = inst_18755);

(statearr_18847[(14)] = inst_18756);

(statearr_18847[(15)] = inst_18754);

(statearr_18847[(16)] = inst_18757);

return statearr_18847;
})();
var statearr_18848_19747 = state_18813__$1;
(statearr_18848_19747[(2)] = null);

(statearr_18848_19747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (10))){
var inst_18755 = (state_18813[(12)]);
var inst_18756 = (state_18813[(14)]);
var inst_18754 = (state_18813[(15)]);
var inst_18757 = (state_18813[(16)]);
var inst_18762 = cljs.core._nth(inst_18755,inst_18757);
var inst_18763 = cljs.core.async.muxch_STAR_(inst_18762);
var inst_18764 = cljs.core.async.close_BANG_(inst_18763);
var inst_18765 = (inst_18757 + (1));
var tmp18843 = inst_18755;
var tmp18844 = inst_18756;
var tmp18845 = inst_18754;
var inst_18754__$1 = tmp18845;
var inst_18755__$1 = tmp18843;
var inst_18756__$1 = tmp18844;
var inst_18757__$1 = inst_18765;
var state_18813__$1 = (function (){var statearr_18849 = state_18813;
(statearr_18849[(12)] = inst_18755__$1);

(statearr_18849[(17)] = inst_18764);

(statearr_18849[(14)] = inst_18756__$1);

(statearr_18849[(15)] = inst_18754__$1);

(statearr_18849[(16)] = inst_18757__$1);

return statearr_18849;
})();
var statearr_18850_19748 = state_18813__$1;
(statearr_18850_19748[(2)] = null);

(statearr_18850_19748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (18))){
var inst_18783 = (state_18813[(2)]);
var state_18813__$1 = state_18813;
var statearr_18851_19749 = state_18813__$1;
(statearr_18851_19749[(2)] = inst_18783);

(statearr_18851_19749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18814 === (8))){
var inst_18756 = (state_18813[(14)]);
var inst_18757 = (state_18813[(16)]);
var inst_18759 = (inst_18757 < inst_18756);
var inst_18760 = inst_18759;
var state_18813__$1 = state_18813;
if(cljs.core.truth_(inst_18760)){
var statearr_18852_19750 = state_18813__$1;
(statearr_18852_19750[(1)] = (10));

} else {
var statearr_18853_19751 = state_18813__$1;
(statearr_18853_19751[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17818__auto__ = null;
var cljs$core$async$state_machine__17818__auto____0 = (function (){
var statearr_18854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18854[(0)] = cljs$core$async$state_machine__17818__auto__);

(statearr_18854[(1)] = (1));

return statearr_18854;
});
var cljs$core$async$state_machine__17818__auto____1 = (function (state_18813){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_18813);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e18855){var ex__17821__auto__ = e18855;
var statearr_18856_19752 = state_18813;
(statearr_18856_19752[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_18813[(4)]))){
var statearr_18857_19753 = state_18813;
(statearr_18857_19753[(1)] = cljs.core.first((state_18813[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19754 = state_18813;
state_18813 = G__19754;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$state_machine__17818__auto__ = function(state_18813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17818__auto____1.call(this,state_18813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17818__auto____0;
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17818__auto____1;
return cljs$core$async$state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_18858 = f__17854__auto__();
(statearr_18858[(6)] = c__17853__auto___19719);

return statearr_18858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18860 = arguments.length;
switch (G__18860) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18862 = arguments.length;
switch (G__18862) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18864 = arguments.length;
switch (G__18864) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17853__auto___19758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_18907){
var state_val_18908 = (state_18907[(1)]);
if((state_val_18908 === (7))){
var state_18907__$1 = state_18907;
var statearr_18909_19759 = state_18907__$1;
(statearr_18909_19759[(2)] = null);

(statearr_18909_19759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (1))){
var state_18907__$1 = state_18907;
var statearr_18910_19760 = state_18907__$1;
(statearr_18910_19760[(2)] = null);

(statearr_18910_19760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (4))){
var inst_18867 = (state_18907[(7)]);
var inst_18868 = (state_18907[(8)]);
var inst_18870 = (inst_18868 < inst_18867);
var state_18907__$1 = state_18907;
if(cljs.core.truth_(inst_18870)){
var statearr_18911_19761 = state_18907__$1;
(statearr_18911_19761[(1)] = (6));

} else {
var statearr_18912_19762 = state_18907__$1;
(statearr_18912_19762[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (15))){
var inst_18893 = (state_18907[(9)]);
var inst_18898 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18893);
var state_18907__$1 = state_18907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18907__$1,(17),out,inst_18898);
} else {
if((state_val_18908 === (13))){
var inst_18893 = (state_18907[(9)]);
var inst_18893__$1 = (state_18907[(2)]);
var inst_18894 = cljs.core.some(cljs.core.nil_QMARK_,inst_18893__$1);
var state_18907__$1 = (function (){var statearr_18913 = state_18907;
(statearr_18913[(9)] = inst_18893__$1);

return statearr_18913;
})();
if(cljs.core.truth_(inst_18894)){
var statearr_18914_19763 = state_18907__$1;
(statearr_18914_19763[(1)] = (14));

} else {
var statearr_18915_19764 = state_18907__$1;
(statearr_18915_19764[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (6))){
var state_18907__$1 = state_18907;
var statearr_18916_19765 = state_18907__$1;
(statearr_18916_19765[(2)] = null);

(statearr_18916_19765[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (17))){
var inst_18900 = (state_18907[(2)]);
var state_18907__$1 = (function (){var statearr_18918 = state_18907;
(statearr_18918[(10)] = inst_18900);

return statearr_18918;
})();
var statearr_18919_19766 = state_18907__$1;
(statearr_18919_19766[(2)] = null);

(statearr_18919_19766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (3))){
var inst_18905 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18907__$1,inst_18905);
} else {
if((state_val_18908 === (12))){
var _ = (function (){var statearr_18920 = state_18907;
(statearr_18920[(4)] = cljs.core.rest((state_18907[(4)])));

return statearr_18920;
})();
var state_18907__$1 = state_18907;
var ex18917 = (state_18907__$1[(2)]);
var statearr_18921_19767 = state_18907__$1;
(statearr_18921_19767[(5)] = ex18917);


if((ex18917 instanceof Object)){
var statearr_18922_19768 = state_18907__$1;
(statearr_18922_19768[(1)] = (11));

(statearr_18922_19768[(5)] = null);

} else {
throw ex18917;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (2))){
var inst_18866 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18867 = cnt;
var inst_18868 = (0);
var state_18907__$1 = (function (){var statearr_18923 = state_18907;
(statearr_18923[(7)] = inst_18867);

(statearr_18923[(8)] = inst_18868);

(statearr_18923[(11)] = inst_18866);

return statearr_18923;
})();
var statearr_18924_19769 = state_18907__$1;
(statearr_18924_19769[(2)] = null);

(statearr_18924_19769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (11))){
var inst_18872 = (state_18907[(2)]);
var inst_18873 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18907__$1 = (function (){var statearr_18925 = state_18907;
(statearr_18925[(12)] = inst_18872);

return statearr_18925;
})();
var statearr_18926_19770 = state_18907__$1;
(statearr_18926_19770[(2)] = inst_18873);

(statearr_18926_19770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (9))){
var inst_18868 = (state_18907[(8)]);
var _ = (function (){var statearr_18927 = state_18907;
(statearr_18927[(4)] = cljs.core.cons((12),(state_18907[(4)])));

return statearr_18927;
})();
var inst_18879 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18868) : chs__$1.call(null,inst_18868));
var inst_18880 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18868) : done.call(null,inst_18868));
var inst_18881 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18879,inst_18880);
var ___$1 = (function (){var statearr_18928 = state_18907;
(statearr_18928[(4)] = cljs.core.rest((state_18907[(4)])));

return statearr_18928;
})();
var state_18907__$1 = state_18907;
var statearr_18929_19773 = state_18907__$1;
(statearr_18929_19773[(2)] = inst_18881);

(statearr_18929_19773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (5))){
var inst_18891 = (state_18907[(2)]);
var state_18907__$1 = (function (){var statearr_18930 = state_18907;
(statearr_18930[(13)] = inst_18891);

return statearr_18930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18907__$1,(13),dchan);
} else {
if((state_val_18908 === (14))){
var inst_18896 = cljs.core.async.close_BANG_(out);
var state_18907__$1 = state_18907;
var statearr_18931_19774 = state_18907__$1;
(statearr_18931_19774[(2)] = inst_18896);

(statearr_18931_19774[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (16))){
var inst_18903 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
var statearr_18932_19775 = state_18907__$1;
(statearr_18932_19775[(2)] = inst_18903);

(statearr_18932_19775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (10))){
var inst_18868 = (state_18907[(8)]);
var inst_18884 = (state_18907[(2)]);
var inst_18885 = (inst_18868 + (1));
var inst_18868__$1 = inst_18885;
var state_18907__$1 = (function (){var statearr_18933 = state_18907;
(statearr_18933[(8)] = inst_18868__$1);

(statearr_18933[(14)] = inst_18884);

return statearr_18933;
})();
var statearr_18934_19776 = state_18907__$1;
(statearr_18934_19776[(2)] = null);

(statearr_18934_19776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (8))){
var inst_18889 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
var statearr_18935_19777 = state_18907__$1;
(statearr_18935_19777[(2)] = inst_18889);

(statearr_18935_19777[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17818__auto__ = null;
var cljs$core$async$state_machine__17818__auto____0 = (function (){
var statearr_18936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18936[(0)] = cljs$core$async$state_machine__17818__auto__);

(statearr_18936[(1)] = (1));

return statearr_18936;
});
var cljs$core$async$state_machine__17818__auto____1 = (function (state_18907){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_18907);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e18937){var ex__17821__auto__ = e18937;
var statearr_18938_19778 = state_18907;
(statearr_18938_19778[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_18907[(4)]))){
var statearr_18939_19779 = state_18907;
(statearr_18939_19779[(1)] = cljs.core.first((state_18907[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19780 = state_18907;
state_18907 = G__19780;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$state_machine__17818__auto__ = function(state_18907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17818__auto____1.call(this,state_18907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17818__auto____0;
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17818__auto____1;
return cljs$core$async$state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_18940 = f__17854__auto__();
(statearr_18940[(6)] = c__17853__auto___19758);

return statearr_18940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18943 = arguments.length;
switch (G__18943) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17853__auto___19782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_18975){
var state_val_18976 = (state_18975[(1)]);
if((state_val_18976 === (7))){
var inst_18955 = (state_18975[(7)]);
var inst_18954 = (state_18975[(8)]);
var inst_18954__$1 = (state_18975[(2)]);
var inst_18955__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18954__$1,(0),null);
var inst_18956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18954__$1,(1),null);
var inst_18957 = (inst_18955__$1 == null);
var state_18975__$1 = (function (){var statearr_18977 = state_18975;
(statearr_18977[(7)] = inst_18955__$1);

(statearr_18977[(9)] = inst_18956);

(statearr_18977[(8)] = inst_18954__$1);

return statearr_18977;
})();
if(cljs.core.truth_(inst_18957)){
var statearr_18978_19784 = state_18975__$1;
(statearr_18978_19784[(1)] = (8));

} else {
var statearr_18979_19785 = state_18975__$1;
(statearr_18979_19785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (1))){
var inst_18944 = cljs.core.vec(chs);
var inst_18945 = inst_18944;
var state_18975__$1 = (function (){var statearr_18980 = state_18975;
(statearr_18980[(10)] = inst_18945);

return statearr_18980;
})();
var statearr_18981_19786 = state_18975__$1;
(statearr_18981_19786[(2)] = null);

(statearr_18981_19786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (4))){
var inst_18945 = (state_18975[(10)]);
var state_18975__$1 = state_18975;
return cljs.core.async.ioc_alts_BANG_(state_18975__$1,(7),inst_18945);
} else {
if((state_val_18976 === (6))){
var inst_18971 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
var statearr_18982_19787 = state_18975__$1;
(statearr_18982_19787[(2)] = inst_18971);

(statearr_18982_19787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (3))){
var inst_18973 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18975__$1,inst_18973);
} else {
if((state_val_18976 === (2))){
var inst_18945 = (state_18975[(10)]);
var inst_18947 = cljs.core.count(inst_18945);
var inst_18948 = (inst_18947 > (0));
var state_18975__$1 = state_18975;
if(cljs.core.truth_(inst_18948)){
var statearr_18984_19788 = state_18975__$1;
(statearr_18984_19788[(1)] = (4));

} else {
var statearr_18985_19789 = state_18975__$1;
(statearr_18985_19789[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (11))){
var inst_18945 = (state_18975[(10)]);
var inst_18964 = (state_18975[(2)]);
var tmp18983 = inst_18945;
var inst_18945__$1 = tmp18983;
var state_18975__$1 = (function (){var statearr_18986 = state_18975;
(statearr_18986[(11)] = inst_18964);

(statearr_18986[(10)] = inst_18945__$1);

return statearr_18986;
})();
var statearr_18987_19790 = state_18975__$1;
(statearr_18987_19790[(2)] = null);

(statearr_18987_19790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (9))){
var inst_18955 = (state_18975[(7)]);
var state_18975__$1 = state_18975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18975__$1,(11),out,inst_18955);
} else {
if((state_val_18976 === (5))){
var inst_18969 = cljs.core.async.close_BANG_(out);
var state_18975__$1 = state_18975;
var statearr_18988_19793 = state_18975__$1;
(statearr_18988_19793[(2)] = inst_18969);

(statearr_18988_19793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (10))){
var inst_18967 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
var statearr_18989_19794 = state_18975__$1;
(statearr_18989_19794[(2)] = inst_18967);

(statearr_18989_19794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (8))){
var inst_18955 = (state_18975[(7)]);
var inst_18945 = (state_18975[(10)]);
var inst_18956 = (state_18975[(9)]);
var inst_18954 = (state_18975[(8)]);
var inst_18959 = (function (){var cs = inst_18945;
var vec__18950 = inst_18954;
var v = inst_18955;
var c = inst_18956;
return (function (p1__18941_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18941_SHARP_);
});
})();
var inst_18960 = cljs.core.filterv(inst_18959,inst_18945);
var inst_18945__$1 = inst_18960;
var state_18975__$1 = (function (){var statearr_18990 = state_18975;
(statearr_18990[(10)] = inst_18945__$1);

return statearr_18990;
})();
var statearr_18991_19795 = state_18975__$1;
(statearr_18991_19795[(2)] = null);

(statearr_18991_19795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17818__auto__ = null;
var cljs$core$async$state_machine__17818__auto____0 = (function (){
var statearr_18992 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18992[(0)] = cljs$core$async$state_machine__17818__auto__);

(statearr_18992[(1)] = (1));

return statearr_18992;
});
var cljs$core$async$state_machine__17818__auto____1 = (function (state_18975){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_18975);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e18993){var ex__17821__auto__ = e18993;
var statearr_18994_19796 = state_18975;
(statearr_18994_19796[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_18975[(4)]))){
var statearr_18995_19797 = state_18975;
(statearr_18995_19797[(1)] = cljs.core.first((state_18975[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19798 = state_18975;
state_18975 = G__19798;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$state_machine__17818__auto__ = function(state_18975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17818__auto____1.call(this,state_18975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17818__auto____0;
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17818__auto____1;
return cljs$core$async$state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_18996 = f__17854__auto__();
(statearr_18996[(6)] = c__17853__auto___19782);

return statearr_18996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18998 = arguments.length;
switch (G__18998) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17853__auto___19806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_19022){
var state_val_19023 = (state_19022[(1)]);
if((state_val_19023 === (7))){
var inst_19004 = (state_19022[(7)]);
var inst_19004__$1 = (state_19022[(2)]);
var inst_19005 = (inst_19004__$1 == null);
var inst_19006 = cljs.core.not(inst_19005);
var state_19022__$1 = (function (){var statearr_19024 = state_19022;
(statearr_19024[(7)] = inst_19004__$1);

return statearr_19024;
})();
if(inst_19006){
var statearr_19025_19807 = state_19022__$1;
(statearr_19025_19807[(1)] = (8));

} else {
var statearr_19026_19808 = state_19022__$1;
(statearr_19026_19808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (1))){
var inst_18999 = (0);
var state_19022__$1 = (function (){var statearr_19027 = state_19022;
(statearr_19027[(8)] = inst_18999);

return statearr_19027;
})();
var statearr_19028_19809 = state_19022__$1;
(statearr_19028_19809[(2)] = null);

(statearr_19028_19809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (4))){
var state_19022__$1 = state_19022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19022__$1,(7),ch);
} else {
if((state_val_19023 === (6))){
var inst_19017 = (state_19022[(2)]);
var state_19022__$1 = state_19022;
var statearr_19029_19810 = state_19022__$1;
(statearr_19029_19810[(2)] = inst_19017);

(statearr_19029_19810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (3))){
var inst_19019 = (state_19022[(2)]);
var inst_19020 = cljs.core.async.close_BANG_(out);
var state_19022__$1 = (function (){var statearr_19030 = state_19022;
(statearr_19030[(9)] = inst_19019);

return statearr_19030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19022__$1,inst_19020);
} else {
if((state_val_19023 === (2))){
var inst_18999 = (state_19022[(8)]);
var inst_19001 = (inst_18999 < n);
var state_19022__$1 = state_19022;
if(cljs.core.truth_(inst_19001)){
var statearr_19031_19812 = state_19022__$1;
(statearr_19031_19812[(1)] = (4));

} else {
var statearr_19032_19813 = state_19022__$1;
(statearr_19032_19813[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (11))){
var inst_18999 = (state_19022[(8)]);
var inst_19009 = (state_19022[(2)]);
var inst_19010 = (inst_18999 + (1));
var inst_18999__$1 = inst_19010;
var state_19022__$1 = (function (){var statearr_19033 = state_19022;
(statearr_19033[(8)] = inst_18999__$1);

(statearr_19033[(10)] = inst_19009);

return statearr_19033;
})();
var statearr_19034_19814 = state_19022__$1;
(statearr_19034_19814[(2)] = null);

(statearr_19034_19814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (9))){
var state_19022__$1 = state_19022;
var statearr_19035_19819 = state_19022__$1;
(statearr_19035_19819[(2)] = null);

(statearr_19035_19819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (5))){
var state_19022__$1 = state_19022;
var statearr_19036_19820 = state_19022__$1;
(statearr_19036_19820[(2)] = null);

(statearr_19036_19820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (10))){
var inst_19014 = (state_19022[(2)]);
var state_19022__$1 = state_19022;
var statearr_19037_19821 = state_19022__$1;
(statearr_19037_19821[(2)] = inst_19014);

(statearr_19037_19821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (8))){
var inst_19004 = (state_19022[(7)]);
var state_19022__$1 = state_19022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19022__$1,(11),out,inst_19004);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17818__auto__ = null;
var cljs$core$async$state_machine__17818__auto____0 = (function (){
var statearr_19038 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19038[(0)] = cljs$core$async$state_machine__17818__auto__);

(statearr_19038[(1)] = (1));

return statearr_19038;
});
var cljs$core$async$state_machine__17818__auto____1 = (function (state_19022){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_19022);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e19039){var ex__17821__auto__ = e19039;
var statearr_19040_19822 = state_19022;
(statearr_19040_19822[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_19022[(4)]))){
var statearr_19041_19823 = state_19022;
(statearr_19041_19823[(1)] = cljs.core.first((state_19022[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19824 = state_19022;
state_19022 = G__19824;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$state_machine__17818__auto__ = function(state_19022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17818__auto____1.call(this,state_19022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17818__auto____0;
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17818__auto____1;
return cljs$core$async$state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_19042 = f__17854__auto__();
(statearr_19042[(6)] = c__17853__auto___19806);

return statearr_19042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19047 = (function (f,ch,meta19045,_,fn1,meta19048){
this.f = f;
this.ch = ch;
this.meta19045 = meta19045;
this._ = _;
this.fn1 = fn1;
this.meta19048 = meta19048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19049,meta19048__$1){
var self__ = this;
var _19049__$1 = this;
return (new cljs.core.async.t_cljs$core$async19047(self__.f,self__.ch,self__.meta19045,self__._,self__.fn1,meta19048__$1));
}));

(cljs.core.async.t_cljs$core$async19047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19049){
var self__ = this;
var _19049__$1 = this;
return self__.meta19048;
}));

(cljs.core.async.t_cljs$core$async19047.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19043_SHARP_){
var G__19050 = (((p1__19043_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19043_SHARP_) : self__.f.call(null,p1__19043_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19050) : f1.call(null,G__19050));
});
}));

(cljs.core.async.t_cljs$core$async19047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19045","meta19045",92820709,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19044","cljs.core.async/t_cljs$core$async19044",1527250770,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19048","meta19048",-812654544,null)], null);
}));

(cljs.core.async.t_cljs$core$async19047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19047");

(cljs.core.async.t_cljs$core$async19047.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19047.
 */
cljs.core.async.__GT_t_cljs$core$async19047 = (function cljs$core$async$__GT_t_cljs$core$async19047(f,ch,meta19045,_,fn1,meta19048){
return (new cljs.core.async.t_cljs$core$async19047(f,ch,meta19045,_,fn1,meta19048));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19044 = (function (f,ch,meta19045){
this.f = f;
this.ch = ch;
this.meta19045 = meta19045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19046,meta19045__$1){
var self__ = this;
var _19046__$1 = this;
return (new cljs.core.async.t_cljs$core$async19044(self__.f,self__.ch,meta19045__$1));
}));

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19046){
var self__ = this;
var _19046__$1 = this;
return self__.meta19045;
}));

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async19047(self__.f,self__.ch,self__.meta19045,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19051 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19051) : self__.f.call(null,G__19051));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19044.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19045","meta19045",92820709,null)], null);
}));

(cljs.core.async.t_cljs$core$async19044.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19044");

(cljs.core.async.t_cljs$core$async19044.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19044");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19044.
 */
cljs.core.async.__GT_t_cljs$core$async19044 = (function cljs$core$async$__GT_t_cljs$core$async19044(f,ch,meta19045){
return (new cljs.core.async.t_cljs$core$async19044(f,ch,meta19045));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19044(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19052 = (function (f,ch,meta19053){
this.f = f;
this.ch = ch;
this.meta19053 = meta19053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19054,meta19053__$1){
var self__ = this;
var _19054__$1 = this;
return (new cljs.core.async.t_cljs$core$async19052(self__.f,self__.ch,meta19053__$1));
}));

(cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19054){
var self__ = this;
var _19054__$1 = this;
return self__.meta19053;
}));

(cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19053","meta19053",1014913504,null)], null);
}));

(cljs.core.async.t_cljs$core$async19052.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19052");

(cljs.core.async.t_cljs$core$async19052.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19052");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19052.
 */
cljs.core.async.__GT_t_cljs$core$async19052 = (function cljs$core$async$__GT_t_cljs$core$async19052(f,ch,meta19053){
return (new cljs.core.async.t_cljs$core$async19052(f,ch,meta19053));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19052(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19055 = (function (p,ch,meta19056){
this.p = p;
this.ch = ch;
this.meta19056 = meta19056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19057,meta19056__$1){
var self__ = this;
var _19057__$1 = this;
return (new cljs.core.async.t_cljs$core$async19055(self__.p,self__.ch,meta19056__$1));
}));

(cljs.core.async.t_cljs$core$async19055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19057){
var self__ = this;
var _19057__$1 = this;
return self__.meta19056;
}));

(cljs.core.async.t_cljs$core$async19055.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19055.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19055.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19055.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19056","meta19056",-828047164,null)], null);
}));

(cljs.core.async.t_cljs$core$async19055.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19055");

(cljs.core.async.t_cljs$core$async19055.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19055");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19055.
 */
cljs.core.async.__GT_t_cljs$core$async19055 = (function cljs$core$async$__GT_t_cljs$core$async19055(p,ch,meta19056){
return (new cljs.core.async.t_cljs$core$async19055(p,ch,meta19056));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async19055(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19059 = arguments.length;
switch (G__19059) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17853__auto___19832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_19080){
var state_val_19081 = (state_19080[(1)]);
if((state_val_19081 === (7))){
var inst_19076 = (state_19080[(2)]);
var state_19080__$1 = state_19080;
var statearr_19082_19833 = state_19080__$1;
(statearr_19082_19833[(2)] = inst_19076);

(statearr_19082_19833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (1))){
var state_19080__$1 = state_19080;
var statearr_19083_19834 = state_19080__$1;
(statearr_19083_19834[(2)] = null);

(statearr_19083_19834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (4))){
var inst_19062 = (state_19080[(7)]);
var inst_19062__$1 = (state_19080[(2)]);
var inst_19063 = (inst_19062__$1 == null);
var state_19080__$1 = (function (){var statearr_19084 = state_19080;
(statearr_19084[(7)] = inst_19062__$1);

return statearr_19084;
})();
if(cljs.core.truth_(inst_19063)){
var statearr_19085_19835 = state_19080__$1;
(statearr_19085_19835[(1)] = (5));

} else {
var statearr_19086_19836 = state_19080__$1;
(statearr_19086_19836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (6))){
var inst_19062 = (state_19080[(7)]);
var inst_19067 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19062) : p.call(null,inst_19062));
var state_19080__$1 = state_19080;
if(cljs.core.truth_(inst_19067)){
var statearr_19087_19837 = state_19080__$1;
(statearr_19087_19837[(1)] = (8));

} else {
var statearr_19088_19838 = state_19080__$1;
(statearr_19088_19838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (3))){
var inst_19078 = (state_19080[(2)]);
var state_19080__$1 = state_19080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19080__$1,inst_19078);
} else {
if((state_val_19081 === (2))){
var state_19080__$1 = state_19080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19080__$1,(4),ch);
} else {
if((state_val_19081 === (11))){
var inst_19070 = (state_19080[(2)]);
var state_19080__$1 = state_19080;
var statearr_19089_19839 = state_19080__$1;
(statearr_19089_19839[(2)] = inst_19070);

(statearr_19089_19839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (9))){
var state_19080__$1 = state_19080;
var statearr_19090_19840 = state_19080__$1;
(statearr_19090_19840[(2)] = null);

(statearr_19090_19840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (5))){
var inst_19065 = cljs.core.async.close_BANG_(out);
var state_19080__$1 = state_19080;
var statearr_19091_19841 = state_19080__$1;
(statearr_19091_19841[(2)] = inst_19065);

(statearr_19091_19841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (10))){
var inst_19073 = (state_19080[(2)]);
var state_19080__$1 = (function (){var statearr_19092 = state_19080;
(statearr_19092[(8)] = inst_19073);

return statearr_19092;
})();
var statearr_19093_19842 = state_19080__$1;
(statearr_19093_19842[(2)] = null);

(statearr_19093_19842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (8))){
var inst_19062 = (state_19080[(7)]);
var state_19080__$1 = state_19080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19080__$1,(11),out,inst_19062);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17818__auto__ = null;
var cljs$core$async$state_machine__17818__auto____0 = (function (){
var statearr_19094 = [null,null,null,null,null,null,null,null,null];
(statearr_19094[(0)] = cljs$core$async$state_machine__17818__auto__);

(statearr_19094[(1)] = (1));

return statearr_19094;
});
var cljs$core$async$state_machine__17818__auto____1 = (function (state_19080){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_19080);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e19095){var ex__17821__auto__ = e19095;
var statearr_19096_19843 = state_19080;
(statearr_19096_19843[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_19080[(4)]))){
var statearr_19097_19844 = state_19080;
(statearr_19097_19844[(1)] = cljs.core.first((state_19080[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19845 = state_19080;
state_19080 = G__19845;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$state_machine__17818__auto__ = function(state_19080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17818__auto____1.call(this,state_19080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17818__auto____0;
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17818__auto____1;
return cljs$core$async$state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_19098 = f__17854__auto__();
(statearr_19098[(6)] = c__17853__auto___19832);

return statearr_19098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19100 = arguments.length;
switch (G__19100) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_19162){
var state_val_19163 = (state_19162[(1)]);
if((state_val_19163 === (7))){
var inst_19158 = (state_19162[(2)]);
var state_19162__$1 = state_19162;
var statearr_19164_19847 = state_19162__$1;
(statearr_19164_19847[(2)] = inst_19158);

(statearr_19164_19847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (20))){
var inst_19128 = (state_19162[(7)]);
var inst_19139 = (state_19162[(2)]);
var inst_19140 = cljs.core.next(inst_19128);
var inst_19114 = inst_19140;
var inst_19115 = null;
var inst_19116 = (0);
var inst_19117 = (0);
var state_19162__$1 = (function (){var statearr_19165 = state_19162;
(statearr_19165[(8)] = inst_19139);

(statearr_19165[(9)] = inst_19116);

(statearr_19165[(10)] = inst_19114);

(statearr_19165[(11)] = inst_19115);

(statearr_19165[(12)] = inst_19117);

return statearr_19165;
})();
var statearr_19166_19848 = state_19162__$1;
(statearr_19166_19848[(2)] = null);

(statearr_19166_19848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (1))){
var state_19162__$1 = state_19162;
var statearr_19167_19849 = state_19162__$1;
(statearr_19167_19849[(2)] = null);

(statearr_19167_19849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (4))){
var inst_19103 = (state_19162[(13)]);
var inst_19103__$1 = (state_19162[(2)]);
var inst_19104 = (inst_19103__$1 == null);
var state_19162__$1 = (function (){var statearr_19168 = state_19162;
(statearr_19168[(13)] = inst_19103__$1);

return statearr_19168;
})();
if(cljs.core.truth_(inst_19104)){
var statearr_19169_19850 = state_19162__$1;
(statearr_19169_19850[(1)] = (5));

} else {
var statearr_19170_19851 = state_19162__$1;
(statearr_19170_19851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (15))){
var state_19162__$1 = state_19162;
var statearr_19174_19852 = state_19162__$1;
(statearr_19174_19852[(2)] = null);

(statearr_19174_19852[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (21))){
var state_19162__$1 = state_19162;
var statearr_19175_19857 = state_19162__$1;
(statearr_19175_19857[(2)] = null);

(statearr_19175_19857[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (13))){
var inst_19116 = (state_19162[(9)]);
var inst_19114 = (state_19162[(10)]);
var inst_19115 = (state_19162[(11)]);
var inst_19117 = (state_19162[(12)]);
var inst_19124 = (state_19162[(2)]);
var inst_19125 = (inst_19117 + (1));
var tmp19171 = inst_19116;
var tmp19172 = inst_19114;
var tmp19173 = inst_19115;
var inst_19114__$1 = tmp19172;
var inst_19115__$1 = tmp19173;
var inst_19116__$1 = tmp19171;
var inst_19117__$1 = inst_19125;
var state_19162__$1 = (function (){var statearr_19176 = state_19162;
(statearr_19176[(9)] = inst_19116__$1);

(statearr_19176[(14)] = inst_19124);

(statearr_19176[(10)] = inst_19114__$1);

(statearr_19176[(11)] = inst_19115__$1);

(statearr_19176[(12)] = inst_19117__$1);

return statearr_19176;
})();
var statearr_19177_19858 = state_19162__$1;
(statearr_19177_19858[(2)] = null);

(statearr_19177_19858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (22))){
var state_19162__$1 = state_19162;
var statearr_19178_19859 = state_19162__$1;
(statearr_19178_19859[(2)] = null);

(statearr_19178_19859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (6))){
var inst_19103 = (state_19162[(13)]);
var inst_19112 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19103) : f.call(null,inst_19103));
var inst_19113 = cljs.core.seq(inst_19112);
var inst_19114 = inst_19113;
var inst_19115 = null;
var inst_19116 = (0);
var inst_19117 = (0);
var state_19162__$1 = (function (){var statearr_19179 = state_19162;
(statearr_19179[(9)] = inst_19116);

(statearr_19179[(10)] = inst_19114);

(statearr_19179[(11)] = inst_19115);

(statearr_19179[(12)] = inst_19117);

return statearr_19179;
})();
var statearr_19180_19860 = state_19162__$1;
(statearr_19180_19860[(2)] = null);

(statearr_19180_19860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (17))){
var inst_19128 = (state_19162[(7)]);
var inst_19132 = cljs.core.chunk_first(inst_19128);
var inst_19133 = cljs.core.chunk_rest(inst_19128);
var inst_19134 = cljs.core.count(inst_19132);
var inst_19114 = inst_19133;
var inst_19115 = inst_19132;
var inst_19116 = inst_19134;
var inst_19117 = (0);
var state_19162__$1 = (function (){var statearr_19181 = state_19162;
(statearr_19181[(9)] = inst_19116);

(statearr_19181[(10)] = inst_19114);

(statearr_19181[(11)] = inst_19115);

(statearr_19181[(12)] = inst_19117);

return statearr_19181;
})();
var statearr_19182_19861 = state_19162__$1;
(statearr_19182_19861[(2)] = null);

(statearr_19182_19861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (3))){
var inst_19160 = (state_19162[(2)]);
var state_19162__$1 = state_19162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19162__$1,inst_19160);
} else {
if((state_val_19163 === (12))){
var inst_19148 = (state_19162[(2)]);
var state_19162__$1 = state_19162;
var statearr_19183_19862 = state_19162__$1;
(statearr_19183_19862[(2)] = inst_19148);

(statearr_19183_19862[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (2))){
var state_19162__$1 = state_19162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19162__$1,(4),in$);
} else {
if((state_val_19163 === (23))){
var inst_19156 = (state_19162[(2)]);
var state_19162__$1 = state_19162;
var statearr_19184_19863 = state_19162__$1;
(statearr_19184_19863[(2)] = inst_19156);

(statearr_19184_19863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (19))){
var inst_19143 = (state_19162[(2)]);
var state_19162__$1 = state_19162;
var statearr_19185_19868 = state_19162__$1;
(statearr_19185_19868[(2)] = inst_19143);

(statearr_19185_19868[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (11))){
var inst_19128 = (state_19162[(7)]);
var inst_19114 = (state_19162[(10)]);
var inst_19128__$1 = cljs.core.seq(inst_19114);
var state_19162__$1 = (function (){var statearr_19186 = state_19162;
(statearr_19186[(7)] = inst_19128__$1);

return statearr_19186;
})();
if(inst_19128__$1){
var statearr_19187_19869 = state_19162__$1;
(statearr_19187_19869[(1)] = (14));

} else {
var statearr_19188_19870 = state_19162__$1;
(statearr_19188_19870[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (9))){
var inst_19150 = (state_19162[(2)]);
var inst_19151 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19162__$1 = (function (){var statearr_19189 = state_19162;
(statearr_19189[(15)] = inst_19150);

return statearr_19189;
})();
if(cljs.core.truth_(inst_19151)){
var statearr_19190_19871 = state_19162__$1;
(statearr_19190_19871[(1)] = (21));

} else {
var statearr_19191_19872 = state_19162__$1;
(statearr_19191_19872[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (5))){
var inst_19106 = cljs.core.async.close_BANG_(out);
var state_19162__$1 = state_19162;
var statearr_19192_19873 = state_19162__$1;
(statearr_19192_19873[(2)] = inst_19106);

(statearr_19192_19873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (14))){
var inst_19128 = (state_19162[(7)]);
var inst_19130 = cljs.core.chunked_seq_QMARK_(inst_19128);
var state_19162__$1 = state_19162;
if(inst_19130){
var statearr_19193_19878 = state_19162__$1;
(statearr_19193_19878[(1)] = (17));

} else {
var statearr_19194_19879 = state_19162__$1;
(statearr_19194_19879[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (16))){
var inst_19146 = (state_19162[(2)]);
var state_19162__$1 = state_19162;
var statearr_19195_19880 = state_19162__$1;
(statearr_19195_19880[(2)] = inst_19146);

(statearr_19195_19880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19163 === (10))){
var inst_19115 = (state_19162[(11)]);
var inst_19117 = (state_19162[(12)]);
var inst_19122 = cljs.core._nth(inst_19115,inst_19117);
var state_19162__$1 = state_19162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19162__$1,(13),out,inst_19122);
} else {
if((state_val_19163 === (18))){
var inst_19128 = (state_19162[(7)]);
var inst_19137 = cljs.core.first(inst_19128);
var state_19162__$1 = state_19162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19162__$1,(20),out,inst_19137);
} else {
if((state_val_19163 === (8))){
var inst_19116 = (state_19162[(9)]);
var inst_19117 = (state_19162[(12)]);
var inst_19119 = (inst_19117 < inst_19116);
var inst_19120 = inst_19119;
var state_19162__$1 = state_19162;
if(cljs.core.truth_(inst_19120)){
var statearr_19196_19881 = state_19162__$1;
(statearr_19196_19881[(1)] = (10));

} else {
var statearr_19197_19882 = state_19162__$1;
(statearr_19197_19882[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17818__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17818__auto____0 = (function (){
var statearr_19198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19198[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17818__auto__);

(statearr_19198[(1)] = (1));

return statearr_19198;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17818__auto____1 = (function (state_19162){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_19162);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e19199){var ex__17821__auto__ = e19199;
var statearr_19200_19883 = state_19162;
(statearr_19200_19883[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_19162[(4)]))){
var statearr_19201_19884 = state_19162;
(statearr_19201_19884[(1)] = cljs.core.first((state_19162[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19885 = state_19162;
state_19162 = G__19885;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17818__auto__ = function(state_19162){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17818__auto____1.call(this,state_19162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17818__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17818__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_19202 = f__17854__auto__();
(statearr_19202[(6)] = c__17853__auto__);

return statearr_19202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));

return c__17853__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19204 = arguments.length;
switch (G__19204) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19206 = arguments.length;
switch (G__19206) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19208 = arguments.length;
switch (G__19208) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17853__auto___19893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_19232){
var state_val_19233 = (state_19232[(1)]);
if((state_val_19233 === (7))){
var inst_19227 = (state_19232[(2)]);
var state_19232__$1 = state_19232;
var statearr_19234_19894 = state_19232__$1;
(statearr_19234_19894[(2)] = inst_19227);

(statearr_19234_19894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19233 === (1))){
var inst_19209 = null;
var state_19232__$1 = (function (){var statearr_19235 = state_19232;
(statearr_19235[(7)] = inst_19209);

return statearr_19235;
})();
var statearr_19236_19895 = state_19232__$1;
(statearr_19236_19895[(2)] = null);

(statearr_19236_19895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19233 === (4))){
var inst_19212 = (state_19232[(8)]);
var inst_19212__$1 = (state_19232[(2)]);
var inst_19213 = (inst_19212__$1 == null);
var inst_19214 = cljs.core.not(inst_19213);
var state_19232__$1 = (function (){var statearr_19237 = state_19232;
(statearr_19237[(8)] = inst_19212__$1);

return statearr_19237;
})();
if(inst_19214){
var statearr_19238_19896 = state_19232__$1;
(statearr_19238_19896[(1)] = (5));

} else {
var statearr_19239_19897 = state_19232__$1;
(statearr_19239_19897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19233 === (6))){
var state_19232__$1 = state_19232;
var statearr_19240_19899 = state_19232__$1;
(statearr_19240_19899[(2)] = null);

(statearr_19240_19899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19233 === (3))){
var inst_19229 = (state_19232[(2)]);
var inst_19230 = cljs.core.async.close_BANG_(out);
var state_19232__$1 = (function (){var statearr_19241 = state_19232;
(statearr_19241[(9)] = inst_19229);

return statearr_19241;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19232__$1,inst_19230);
} else {
if((state_val_19233 === (2))){
var state_19232__$1 = state_19232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19232__$1,(4),ch);
} else {
if((state_val_19233 === (11))){
var inst_19212 = (state_19232[(8)]);
var inst_19221 = (state_19232[(2)]);
var inst_19209 = inst_19212;
var state_19232__$1 = (function (){var statearr_19242 = state_19232;
(statearr_19242[(10)] = inst_19221);

(statearr_19242[(7)] = inst_19209);

return statearr_19242;
})();
var statearr_19243_19900 = state_19232__$1;
(statearr_19243_19900[(2)] = null);

(statearr_19243_19900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19233 === (9))){
var inst_19212 = (state_19232[(8)]);
var state_19232__$1 = state_19232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19232__$1,(11),out,inst_19212);
} else {
if((state_val_19233 === (5))){
var inst_19212 = (state_19232[(8)]);
var inst_19209 = (state_19232[(7)]);
var inst_19216 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19212,inst_19209);
var state_19232__$1 = state_19232;
if(inst_19216){
var statearr_19245_19901 = state_19232__$1;
(statearr_19245_19901[(1)] = (8));

} else {
var statearr_19246_19902 = state_19232__$1;
(statearr_19246_19902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19233 === (10))){
var inst_19224 = (state_19232[(2)]);
var state_19232__$1 = state_19232;
var statearr_19247_19906 = state_19232__$1;
(statearr_19247_19906[(2)] = inst_19224);

(statearr_19247_19906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19233 === (8))){
var inst_19209 = (state_19232[(7)]);
var tmp19244 = inst_19209;
var inst_19209__$1 = tmp19244;
var state_19232__$1 = (function (){var statearr_19248 = state_19232;
(statearr_19248[(7)] = inst_19209__$1);

return statearr_19248;
})();
var statearr_19249_19907 = state_19232__$1;
(statearr_19249_19907[(2)] = null);

(statearr_19249_19907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17818__auto__ = null;
var cljs$core$async$state_machine__17818__auto____0 = (function (){
var statearr_19250 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19250[(0)] = cljs$core$async$state_machine__17818__auto__);

(statearr_19250[(1)] = (1));

return statearr_19250;
});
var cljs$core$async$state_machine__17818__auto____1 = (function (state_19232){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_19232);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e19251){var ex__17821__auto__ = e19251;
var statearr_19252_19908 = state_19232;
(statearr_19252_19908[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_19232[(4)]))){
var statearr_19253_19909 = state_19232;
(statearr_19253_19909[(1)] = cljs.core.first((state_19232[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19910 = state_19232;
state_19232 = G__19910;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$state_machine__17818__auto__ = function(state_19232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17818__auto____1.call(this,state_19232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17818__auto____0;
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17818__auto____1;
return cljs$core$async$state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_19254 = f__17854__auto__();
(statearr_19254[(6)] = c__17853__auto___19893);

return statearr_19254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19256 = arguments.length;
switch (G__19256) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17853__auto___19912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_19294){
var state_val_19295 = (state_19294[(1)]);
if((state_val_19295 === (7))){
var inst_19290 = (state_19294[(2)]);
var state_19294__$1 = state_19294;
var statearr_19296_19913 = state_19294__$1;
(statearr_19296_19913[(2)] = inst_19290);

(statearr_19296_19913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (1))){
var inst_19257 = (new Array(n));
var inst_19258 = inst_19257;
var inst_19259 = (0);
var state_19294__$1 = (function (){var statearr_19297 = state_19294;
(statearr_19297[(7)] = inst_19258);

(statearr_19297[(8)] = inst_19259);

return statearr_19297;
})();
var statearr_19298_19914 = state_19294__$1;
(statearr_19298_19914[(2)] = null);

(statearr_19298_19914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (4))){
var inst_19262 = (state_19294[(9)]);
var inst_19262__$1 = (state_19294[(2)]);
var inst_19263 = (inst_19262__$1 == null);
var inst_19264 = cljs.core.not(inst_19263);
var state_19294__$1 = (function (){var statearr_19299 = state_19294;
(statearr_19299[(9)] = inst_19262__$1);

return statearr_19299;
})();
if(inst_19264){
var statearr_19300_19916 = state_19294__$1;
(statearr_19300_19916[(1)] = (5));

} else {
var statearr_19301_19917 = state_19294__$1;
(statearr_19301_19917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (15))){
var inst_19284 = (state_19294[(2)]);
var state_19294__$1 = state_19294;
var statearr_19302_19918 = state_19294__$1;
(statearr_19302_19918[(2)] = inst_19284);

(statearr_19302_19918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (13))){
var state_19294__$1 = state_19294;
var statearr_19303_19919 = state_19294__$1;
(statearr_19303_19919[(2)] = null);

(statearr_19303_19919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (6))){
var inst_19259 = (state_19294[(8)]);
var inst_19280 = (inst_19259 > (0));
var state_19294__$1 = state_19294;
if(cljs.core.truth_(inst_19280)){
var statearr_19304_19924 = state_19294__$1;
(statearr_19304_19924[(1)] = (12));

} else {
var statearr_19305_19925 = state_19294__$1;
(statearr_19305_19925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (3))){
var inst_19292 = (state_19294[(2)]);
var state_19294__$1 = state_19294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19294__$1,inst_19292);
} else {
if((state_val_19295 === (12))){
var inst_19258 = (state_19294[(7)]);
var inst_19282 = cljs.core.vec(inst_19258);
var state_19294__$1 = state_19294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19294__$1,(15),out,inst_19282);
} else {
if((state_val_19295 === (2))){
var state_19294__$1 = state_19294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19294__$1,(4),ch);
} else {
if((state_val_19295 === (11))){
var inst_19274 = (state_19294[(2)]);
var inst_19275 = (new Array(n));
var inst_19258 = inst_19275;
var inst_19259 = (0);
var state_19294__$1 = (function (){var statearr_19306 = state_19294;
(statearr_19306[(7)] = inst_19258);

(statearr_19306[(10)] = inst_19274);

(statearr_19306[(8)] = inst_19259);

return statearr_19306;
})();
var statearr_19307_19929 = state_19294__$1;
(statearr_19307_19929[(2)] = null);

(statearr_19307_19929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (9))){
var inst_19258 = (state_19294[(7)]);
var inst_19272 = cljs.core.vec(inst_19258);
var state_19294__$1 = state_19294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19294__$1,(11),out,inst_19272);
} else {
if((state_val_19295 === (5))){
var inst_19258 = (state_19294[(7)]);
var inst_19267 = (state_19294[(11)]);
var inst_19262 = (state_19294[(9)]);
var inst_19259 = (state_19294[(8)]);
var inst_19266 = (inst_19258[inst_19259] = inst_19262);
var inst_19267__$1 = (inst_19259 + (1));
var inst_19268 = (inst_19267__$1 < n);
var state_19294__$1 = (function (){var statearr_19308 = state_19294;
(statearr_19308[(11)] = inst_19267__$1);

(statearr_19308[(12)] = inst_19266);

return statearr_19308;
})();
if(cljs.core.truth_(inst_19268)){
var statearr_19309_19936 = state_19294__$1;
(statearr_19309_19936[(1)] = (8));

} else {
var statearr_19310_19937 = state_19294__$1;
(statearr_19310_19937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (14))){
var inst_19287 = (state_19294[(2)]);
var inst_19288 = cljs.core.async.close_BANG_(out);
var state_19294__$1 = (function (){var statearr_19312 = state_19294;
(statearr_19312[(13)] = inst_19287);

return statearr_19312;
})();
var statearr_19313_19938 = state_19294__$1;
(statearr_19313_19938[(2)] = inst_19288);

(statearr_19313_19938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (10))){
var inst_19278 = (state_19294[(2)]);
var state_19294__$1 = state_19294;
var statearr_19314_19939 = state_19294__$1;
(statearr_19314_19939[(2)] = inst_19278);

(statearr_19314_19939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (8))){
var inst_19258 = (state_19294[(7)]);
var inst_19267 = (state_19294[(11)]);
var tmp19311 = inst_19258;
var inst_19258__$1 = tmp19311;
var inst_19259 = inst_19267;
var state_19294__$1 = (function (){var statearr_19315 = state_19294;
(statearr_19315[(7)] = inst_19258__$1);

(statearr_19315[(8)] = inst_19259);

return statearr_19315;
})();
var statearr_19316_19940 = state_19294__$1;
(statearr_19316_19940[(2)] = null);

(statearr_19316_19940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17818__auto__ = null;
var cljs$core$async$state_machine__17818__auto____0 = (function (){
var statearr_19317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19317[(0)] = cljs$core$async$state_machine__17818__auto__);

(statearr_19317[(1)] = (1));

return statearr_19317;
});
var cljs$core$async$state_machine__17818__auto____1 = (function (state_19294){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_19294);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e19318){var ex__17821__auto__ = e19318;
var statearr_19319_19945 = state_19294;
(statearr_19319_19945[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_19294[(4)]))){
var statearr_19320_19946 = state_19294;
(statearr_19320_19946[(1)] = cljs.core.first((state_19294[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19947 = state_19294;
state_19294 = G__19947;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$state_machine__17818__auto__ = function(state_19294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17818__auto____1.call(this,state_19294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17818__auto____0;
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17818__auto____1;
return cljs$core$async$state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_19321 = f__17854__auto__();
(statearr_19321[(6)] = c__17853__auto___19912);

return statearr_19321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19323 = arguments.length;
switch (G__19323) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17853__auto___19951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17854__auto__ = (function (){var switch__17817__auto__ = (function (state_19368){
var state_val_19369 = (state_19368[(1)]);
if((state_val_19369 === (7))){
var inst_19364 = (state_19368[(2)]);
var state_19368__$1 = state_19368;
var statearr_19370_19953 = state_19368__$1;
(statearr_19370_19953[(2)] = inst_19364);

(statearr_19370_19953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19369 === (1))){
var inst_19324 = [];
var inst_19325 = inst_19324;
var inst_19326 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19368__$1 = (function (){var statearr_19371 = state_19368;
(statearr_19371[(7)] = inst_19326);

(statearr_19371[(8)] = inst_19325);

return statearr_19371;
})();
var statearr_19372_19954 = state_19368__$1;
(statearr_19372_19954[(2)] = null);

(statearr_19372_19954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19369 === (4))){
var inst_19329 = (state_19368[(9)]);
var inst_19329__$1 = (state_19368[(2)]);
var inst_19330 = (inst_19329__$1 == null);
var inst_19331 = cljs.core.not(inst_19330);
var state_19368__$1 = (function (){var statearr_19373 = state_19368;
(statearr_19373[(9)] = inst_19329__$1);

return statearr_19373;
})();
if(inst_19331){
var statearr_19374_19955 = state_19368__$1;
(statearr_19374_19955[(1)] = (5));

} else {
var statearr_19375_19956 = state_19368__$1;
(statearr_19375_19956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19369 === (15))){
var inst_19325 = (state_19368[(8)]);
var inst_19356 = cljs.core.vec(inst_19325);
var state_19368__$1 = state_19368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19368__$1,(18),out,inst_19356);
} else {
if((state_val_19369 === (13))){
var inst_19351 = (state_19368[(2)]);
var state_19368__$1 = state_19368;
var statearr_19376_19957 = state_19368__$1;
(statearr_19376_19957[(2)] = inst_19351);

(statearr_19376_19957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19369 === (6))){
var inst_19325 = (state_19368[(8)]);
var inst_19353 = inst_19325.length;
var inst_19354 = (inst_19353 > (0));
var state_19368__$1 = state_19368;
if(cljs.core.truth_(inst_19354)){
var statearr_19377_19958 = state_19368__$1;
(statearr_19377_19958[(1)] = (15));

} else {
var statearr_19378_19959 = state_19368__$1;
(statearr_19378_19959[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19369 === (17))){
var inst_19361 = (state_19368[(2)]);
var inst_19362 = cljs.core.async.close_BANG_(out);
var state_19368__$1 = (function (){var statearr_19379 = state_19368;
(statearr_19379[(10)] = inst_19361);

return statearr_19379;
})();
var statearr_19380_19960 = state_19368__$1;
(statearr_19380_19960[(2)] = inst_19362);

(statearr_19380_19960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19369 === (3))){
var inst_19366 = (state_19368[(2)]);
var state_19368__$1 = state_19368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19368__$1,inst_19366);
} else {
if((state_val_19369 === (12))){
var inst_19325 = (state_19368[(8)]);
var inst_19344 = cljs.core.vec(inst_19325);
var state_19368__$1 = state_19368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19368__$1,(14),out,inst_19344);
} else {
if((state_val_19369 === (2))){
var state_19368__$1 = state_19368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19368__$1,(4),ch);
} else {
if((state_val_19369 === (11))){
var inst_19333 = (state_19368[(11)]);
var inst_19329 = (state_19368[(9)]);
var inst_19325 = (state_19368[(8)]);
var inst_19341 = inst_19325.push(inst_19329);
var tmp19381 = inst_19325;
var inst_19325__$1 = tmp19381;
var inst_19326 = inst_19333;
var state_19368__$1 = (function (){var statearr_19382 = state_19368;
(statearr_19382[(7)] = inst_19326);

(statearr_19382[(8)] = inst_19325__$1);

(statearr_19382[(12)] = inst_19341);

return statearr_19382;
})();
var statearr_19383_19961 = state_19368__$1;
(statearr_19383_19961[(2)] = null);

(statearr_19383_19961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19369 === (9))){
var inst_19326 = (state_19368[(7)]);
var inst_19337 = cljs.core.keyword_identical_QMARK_(inst_19326,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19368__$1 = state_19368;
var statearr_19384_19962 = state_19368__$1;
(statearr_19384_19962[(2)] = inst_19337);

(statearr_19384_19962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19369 === (5))){
var inst_19333 = (state_19368[(11)]);
var inst_19329 = (state_19368[(9)]);
var inst_19334 = (state_19368[(13)]);
var inst_19326 = (state_19368[(7)]);
var inst_19333__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19329) : f.call(null,inst_19329));
var inst_19334__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19333__$1,inst_19326);
var state_19368__$1 = (function (){var statearr_19385 = state_19368;
(statearr_19385[(11)] = inst_19333__$1);

(statearr_19385[(13)] = inst_19334__$1);

return statearr_19385;
})();
if(inst_19334__$1){
var statearr_19386_19967 = state_19368__$1;
(statearr_19386_19967[(1)] = (8));

} else {
var statearr_19387_19968 = state_19368__$1;
(statearr_19387_19968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19369 === (14))){
var inst_19333 = (state_19368[(11)]);
var inst_19329 = (state_19368[(9)]);
var inst_19346 = (state_19368[(2)]);
var inst_19347 = [];
var inst_19348 = inst_19347.push(inst_19329);
var inst_19325 = inst_19347;
var inst_19326 = inst_19333;
var state_19368__$1 = (function (){var statearr_19388 = state_19368;
(statearr_19388[(14)] = inst_19348);

(statearr_19388[(15)] = inst_19346);

(statearr_19388[(7)] = inst_19326);

(statearr_19388[(8)] = inst_19325);

return statearr_19388;
})();
var statearr_19389_19969 = state_19368__$1;
(statearr_19389_19969[(2)] = null);

(statearr_19389_19969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19369 === (16))){
var state_19368__$1 = state_19368;
var statearr_19390_19970 = state_19368__$1;
(statearr_19390_19970[(2)] = null);

(statearr_19390_19970[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19369 === (10))){
var inst_19339 = (state_19368[(2)]);
var state_19368__$1 = state_19368;
if(cljs.core.truth_(inst_19339)){
var statearr_19391_19971 = state_19368__$1;
(statearr_19391_19971[(1)] = (11));

} else {
var statearr_19392_19972 = state_19368__$1;
(statearr_19392_19972[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19369 === (18))){
var inst_19358 = (state_19368[(2)]);
var state_19368__$1 = state_19368;
var statearr_19393_19973 = state_19368__$1;
(statearr_19393_19973[(2)] = inst_19358);

(statearr_19393_19973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19369 === (8))){
var inst_19334 = (state_19368[(13)]);
var state_19368__$1 = state_19368;
var statearr_19394_19974 = state_19368__$1;
(statearr_19394_19974[(2)] = inst_19334);

(statearr_19394_19974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17818__auto__ = null;
var cljs$core$async$state_machine__17818__auto____0 = (function (){
var statearr_19395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19395[(0)] = cljs$core$async$state_machine__17818__auto__);

(statearr_19395[(1)] = (1));

return statearr_19395;
});
var cljs$core$async$state_machine__17818__auto____1 = (function (state_19368){
while(true){
var ret_value__17819__auto__ = (function (){try{while(true){
var result__17820__auto__ = switch__17817__auto__(state_19368);
if(cljs.core.keyword_identical_QMARK_(result__17820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17820__auto__;
}
break;
}
}catch (e19396){var ex__17821__auto__ = e19396;
var statearr_19397_19975 = state_19368;
(statearr_19397_19975[(2)] = ex__17821__auto__);


if(cljs.core.seq((state_19368[(4)]))){
var statearr_19398_19976 = state_19368;
(statearr_19398_19976[(1)] = cljs.core.first((state_19368[(4)])));

} else {
throw ex__17821__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19977 = state_19368;
state_19368 = G__19977;
continue;
} else {
return ret_value__17819__auto__;
}
break;
}
});
cljs$core$async$state_machine__17818__auto__ = function(state_19368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17818__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17818__auto____1.call(this,state_19368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17818__auto____0;
cljs$core$async$state_machine__17818__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17818__auto____1;
return cljs$core$async$state_machine__17818__auto__;
})()
})();
var state__17855__auto__ = (function (){var statearr_19399 = f__17854__auto__();
(statearr_19399[(6)] = c__17853__auto___19951);

return statearr_19399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17855__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
