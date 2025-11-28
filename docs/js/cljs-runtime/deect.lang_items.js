goog.provide('deect.lang_items');
deect.lang_items.lang_item_type = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),null,new cljs.core.Keyword(null,"function","function",-2127255473),null,new cljs.core.Keyword(null,"syntax","syntax",-1637761676),null], null), null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
deect.lang_items.CodeCollRec = (function (clojure,csharp,java,javascript,python,__meta,__extmap,__hash){
this.clojure = clojure;
this.csharp = csharp;
this.java = java;
this.javascript = javascript;
this.python = python;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(deect.lang_items.CodeCollRec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(deect.lang_items.CodeCollRec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12058,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12062 = k12058;
var G__12062__$1 = (((G__12062 instanceof cljs.core.Keyword))?G__12062.fqn:null);
switch (G__12062__$1) {
case "clojure":
return self__.clojure;

break;
case "csharp":
return self__.csharp;

break;
case "java":
return self__.java;

break;
case "javascript":
return self__.javascript;

break;
case "python":
return self__.python;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12058,else__5303__auto__);

}
}));

(deect.lang_items.CodeCollRec.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12063){
var vec__12064 = p__12063;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12064,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12064,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(deect.lang_items.CodeCollRec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#deect.lang-items.CodeCollRec{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clojure","clojure",438975815),self__.clojure],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"csharp","csharp",-1699394557),self__.csharp],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"java","java",1958249105),self__.java],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"javascript","javascript",-45283711),self__.javascript],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"python","python",-1034889161),self__.python],null))], null),self__.__extmap));
}));

(deect.lang_items.CodeCollRec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12057){
var self__ = this;
var G__12057__$1 = this;
return (new cljs.core.RecordIter((0),G__12057__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clojure","clojure",438975815),new cljs.core.Keyword(null,"csharp","csharp",-1699394557),new cljs.core.Keyword(null,"java","java",1958249105),new cljs.core.Keyword(null,"javascript","javascript",-45283711),new cljs.core.Keyword(null,"python","python",-1034889161)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(deect.lang_items.CodeCollRec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(deect.lang_items.CodeCollRec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new deect.lang_items.CodeCollRec(self__.clojure,self__.csharp,self__.java,self__.javascript,self__.python,self__.__meta,self__.__extmap,self__.__hash));
}));

(deect.lang_items.CodeCollRec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(deect.lang_items.CodeCollRec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-2124685739 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(deect.lang_items.CodeCollRec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12059,other12060){
var self__ = this;
var this12059__$1 = this;
return (((!((other12060 == null)))) && ((((this12059__$1.constructor === other12060.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12059__$1.clojure,other12060.clojure)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12059__$1.csharp,other12060.csharp)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12059__$1.java,other12060.java)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12059__$1.javascript,other12060.javascript)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12059__$1.python,other12060.python)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12059__$1.__extmap,other12060.__extmap)))))))))))))));
}));

(deect.lang_items.CodeCollRec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"javascript","javascript",-45283711),null,new cljs.core.Keyword(null,"csharp","csharp",-1699394557),null,new cljs.core.Keyword(null,"clojure","clojure",438975815),null,new cljs.core.Keyword(null,"java","java",1958249105),null,new cljs.core.Keyword(null,"python","python",-1034889161),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new deect.lang_items.CodeCollRec(self__.clojure,self__.csharp,self__.java,self__.javascript,self__.python,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(deect.lang_items.CodeCollRec.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12058){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12067 = k12058;
var G__12067__$1 = (((G__12067 instanceof cljs.core.Keyword))?G__12067.fqn:null);
switch (G__12067__$1) {
case "clojure":
case "csharp":
case "java":
case "javascript":
case "python":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12058);

}
}));

(deect.lang_items.CodeCollRec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12057){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12068 = cljs.core.keyword_identical_QMARK_;
var expr__12069 = k__5309__auto__;
if(cljs.core.truth_((pred__12068.cljs$core$IFn$_invoke$arity$2 ? pred__12068.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clojure","clojure",438975815),expr__12069) : pred__12068.call(null,new cljs.core.Keyword(null,"clojure","clojure",438975815),expr__12069)))){
return (new deect.lang_items.CodeCollRec(G__12057,self__.csharp,self__.java,self__.javascript,self__.python,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12068.cljs$core$IFn$_invoke$arity$2 ? pred__12068.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"csharp","csharp",-1699394557),expr__12069) : pred__12068.call(null,new cljs.core.Keyword(null,"csharp","csharp",-1699394557),expr__12069)))){
return (new deect.lang_items.CodeCollRec(self__.clojure,G__12057,self__.java,self__.javascript,self__.python,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12068.cljs$core$IFn$_invoke$arity$2 ? pred__12068.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"java","java",1958249105),expr__12069) : pred__12068.call(null,new cljs.core.Keyword(null,"java","java",1958249105),expr__12069)))){
return (new deect.lang_items.CodeCollRec(self__.clojure,self__.csharp,G__12057,self__.javascript,self__.python,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12068.cljs$core$IFn$_invoke$arity$2 ? pred__12068.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"javascript","javascript",-45283711),expr__12069) : pred__12068.call(null,new cljs.core.Keyword(null,"javascript","javascript",-45283711),expr__12069)))){
return (new deect.lang_items.CodeCollRec(self__.clojure,self__.csharp,self__.java,G__12057,self__.python,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12068.cljs$core$IFn$_invoke$arity$2 ? pred__12068.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"python","python",-1034889161),expr__12069) : pred__12068.call(null,new cljs.core.Keyword(null,"python","python",-1034889161),expr__12069)))){
return (new deect.lang_items.CodeCollRec(self__.clojure,self__.csharp,self__.java,self__.javascript,G__12057,self__.__meta,self__.__extmap,null));
} else {
return (new deect.lang_items.CodeCollRec(self__.clojure,self__.csharp,self__.java,self__.javascript,self__.python,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12057),null));
}
}
}
}
}
}));

(deect.lang_items.CodeCollRec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clojure","clojure",438975815),self__.clojure,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"csharp","csharp",-1699394557),self__.csharp,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"java","java",1958249105),self__.java,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"javascript","javascript",-45283711),self__.javascript,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"python","python",-1034889161),self__.python,null))], null),self__.__extmap));
}));

(deect.lang_items.CodeCollRec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12057){
var self__ = this;
var this__5299__auto____$1 = this;
return (new deect.lang_items.CodeCollRec(self__.clojure,self__.csharp,self__.java,self__.javascript,self__.python,G__12057,self__.__extmap,self__.__hash));
}));

(deect.lang_items.CodeCollRec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(deect.lang_items.CodeCollRec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clojure","clojure",2079507342,null),new cljs.core.Symbol(null,"csharp","csharp",-58863030,null),new cljs.core.Symbol(null,"java","java",-696186664,null),new cljs.core.Symbol(null,"javascript","javascript",1595247816,null),new cljs.core.Symbol(null,"python","python",605642366,null)], null);
}));

(deect.lang_items.CodeCollRec.cljs$lang$type = true);

(deect.lang_items.CodeCollRec.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"deect.lang-items/CodeCollRec",null,(1),null));
}));

(deect.lang_items.CodeCollRec.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"deect.lang-items/CodeCollRec");
}));

/**
 * Positional factory function for deect.lang-items/CodeCollRec.
 */
deect.lang_items.__GT_CodeCollRec = (function deect$lang_items$__GT_CodeCollRec(clojure__$1,csharp,java,javascript,python){
return (new deect.lang_items.CodeCollRec(clojure__$1,csharp,java,javascript,python,null,null,null));
});

/**
 * Factory function for deect.lang-items/CodeCollRec, taking a map of keywords to field values.
 */
deect.lang_items.map__GT_CodeCollRec = (function deect$lang_items$map__GT_CodeCollRec(G__12061){
var extmap__5342__auto__ = (function (){var G__12071 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12061,new cljs.core.Keyword(null,"clojure","clojure",438975815),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"csharp","csharp",-1699394557),new cljs.core.Keyword(null,"java","java",1958249105),new cljs.core.Keyword(null,"javascript","javascript",-45283711),new cljs.core.Keyword(null,"python","python",-1034889161)], 0));
if(cljs.core.record_QMARK_(G__12061)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12071);
} else {
return G__12071;
}
})();
return (new deect.lang_items.CodeCollRec(new cljs.core.Keyword(null,"clojure","clojure",438975815).cljs$core$IFn$_invoke$arity$1(G__12061),new cljs.core.Keyword(null,"csharp","csharp",-1699394557).cljs$core$IFn$_invoke$arity$1(G__12061),new cljs.core.Keyword(null,"java","java",1958249105).cljs$core$IFn$_invoke$arity$1(G__12061),new cljs.core.Keyword(null,"javascript","javascript",-45283711).cljs$core$IFn$_invoke$arity$1(G__12061),new cljs.core.Keyword(null,"python","python",-1034889161).cljs$core$IFn$_invoke$arity$1(G__12061),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
deect.lang_items.LangItem = (function (name,type,ccrec,__meta,__extmap,__hash){
this.name = name;
this.type = type;
this.ccrec = ccrec;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(deect.lang_items.LangItem.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(deect.lang_items.LangItem.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12073,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12077 = k12073;
var G__12077__$1 = (((G__12077 instanceof cljs.core.Keyword))?G__12077.fqn:null);
switch (G__12077__$1) {
case "name":
return self__.name;

break;
case "type":
return self__.type;

break;
case "ccrec":
return self__.ccrec;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12073,else__5303__auto__);

}
}));

(deect.lang_items.LangItem.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12078){
var vec__12079 = p__12078;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12079,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12079,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(deect.lang_items.LangItem.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#deect.lang-items.LangItem{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ccrec","ccrec",1801814798),self__.ccrec],null))], null),self__.__extmap));
}));

(deect.lang_items.LangItem.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12072){
var self__ = this;
var G__12072__$1 = this;
return (new cljs.core.RecordIter((0),G__12072__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ccrec","ccrec",1801814798)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(deect.lang_items.LangItem.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(deect.lang_items.LangItem.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new deect.lang_items.LangItem(self__.name,self__.type,self__.ccrec,self__.__meta,self__.__extmap,self__.__hash));
}));

(deect.lang_items.LangItem.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(deect.lang_items.LangItem.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (10330151 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(deect.lang_items.LangItem.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12074,other12075){
var self__ = this;
var this12074__$1 = this;
return (((!((other12075 == null)))) && ((((this12074__$1.constructor === other12075.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12074__$1.name,other12075.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12074__$1.type,other12075.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12074__$1.ccrec,other12075.ccrec)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12074__$1.__extmap,other12075.__extmap)))))))))));
}));

(deect.lang_items.LangItem.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"ccrec","ccrec",1801814798),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new deect.lang_items.LangItem(self__.name,self__.type,self__.ccrec,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(deect.lang_items.LangItem.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12073){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12082 = k12073;
var G__12082__$1 = (((G__12082 instanceof cljs.core.Keyword))?G__12082.fqn:null);
switch (G__12082__$1) {
case "name":
case "type":
case "ccrec":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12073);

}
}));

(deect.lang_items.LangItem.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12072){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12083 = cljs.core.keyword_identical_QMARK_;
var expr__12084 = k__5309__auto__;
if(cljs.core.truth_((pred__12083.cljs$core$IFn$_invoke$arity$2 ? pred__12083.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__12084) : pred__12083.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__12084)))){
return (new deect.lang_items.LangItem(G__12072,self__.type,self__.ccrec,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12083.cljs$core$IFn$_invoke$arity$2 ? pred__12083.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__12084) : pred__12083.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__12084)))){
return (new deect.lang_items.LangItem(self__.name,G__12072,self__.ccrec,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12083.cljs$core$IFn$_invoke$arity$2 ? pred__12083.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ccrec","ccrec",1801814798),expr__12084) : pred__12083.call(null,new cljs.core.Keyword(null,"ccrec","ccrec",1801814798),expr__12084)))){
return (new deect.lang_items.LangItem(self__.name,self__.type,G__12072,self__.__meta,self__.__extmap,null));
} else {
return (new deect.lang_items.LangItem(self__.name,self__.type,self__.ccrec,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12072),null));
}
}
}
}));

(deect.lang_items.LangItem.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ccrec","ccrec",1801814798),self__.ccrec,null))], null),self__.__extmap));
}));

(deect.lang_items.LangItem.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12072){
var self__ = this;
var this__5299__auto____$1 = this;
return (new deect.lang_items.LangItem(self__.name,self__.type,self__.ccrec,G__12072,self__.__extmap,self__.__hash));
}));

(deect.lang_items.LangItem.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(deect.lang_items.LangItem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"String","String",-2070057435,null)], null)),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"ccrec","ccrec",-852620971,null)], null);
}));

(deect.lang_items.LangItem.cljs$lang$type = true);

(deect.lang_items.LangItem.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"deect.lang-items/LangItem",null,(1),null));
}));

(deect.lang_items.LangItem.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"deect.lang-items/LangItem");
}));

/**
 * Positional factory function for deect.lang-items/LangItem.
 */
deect.lang_items.__GT_LangItem = (function deect$lang_items$__GT_LangItem(name,type,ccrec){
return (new deect.lang_items.LangItem(name,type,ccrec,null,null,null));
});

/**
 * Factory function for deect.lang-items/LangItem, taking a map of keywords to field values.
 */
deect.lang_items.map__GT_LangItem = (function deect$lang_items$map__GT_LangItem(G__12076){
var extmap__5342__auto__ = (function (){var G__12086 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12076,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ccrec","ccrec",1801814798)], 0));
if(cljs.core.record_QMARK_(G__12076)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12086);
} else {
return G__12086;
}
})();
return (new deect.lang_items.LangItem(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__12076),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__12076),new cljs.core.Keyword(null,"ccrec","ccrec",1801814798).cljs$core$IFn$_invoke$arity$1(G__12076),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

deect.lang_items.ml_str = (function deect$lang_items$ml_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12097 = arguments.length;
var i__5727__auto___12098 = (0);
while(true){
if((i__5727__auto___12098 < len__5726__auto___12097)){
args__5732__auto__.push((arguments[i__5727__auto___12098]));

var G__12099 = (i__5727__auto___12098 + (1));
i__5727__auto___12098 = G__12099;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",args);
}));

(deect.lang_items.ml_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(deect.lang_items.ml_str.cljs$lang$applyTo = (function (seq12087){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12087));
}));

deect.lang_items.lang_items = new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new deect.lang_items.LangItem("Addition \u00A6 Add",new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(+ 2 3)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 + 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 + 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 + 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 + 3"], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("And",new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(and :expression1 :expression2)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["booleanExpr1 && booleanExpr2"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["booleanExpr1 && booleanExpr2"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expression1 && expression2"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expression1 and expression2"], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Big integer",new cljs.core.Keyword(null,"data-type","data-type",-326421468).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";;; Type.","clojure.lang.BigInt","",";;; Literal.","123N"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Fully-qualified type","System.Numerics.BigInteger","","// Instance","BigInteger.Parse(\"123\")"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Fully-qualified type","java.math.BigInteger","","// Instance","new BigInteger(\"123\")"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Type","// bigint","","// Literal","123n"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["# Type","# int","","# Literal","123"], 0))], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Boolean \u00A6 Bool",new cljs.core.Keyword(null,"data-type","data-type",-326421468).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";;; Type.","java.lang.Boolean","",";;; Literals.","false","true"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Fully-qualified type","System.Boolean","","// Type","bool","","// Literals","false","true"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Class","java.lang.Boolean","","// Primitive type","boolean","","// Literals","false","true"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Type","// boolean","","// Literals","false","true"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["# Type","# bool","","# Literals","False","True"], 0))], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Comment",new cljs.core.Keyword(null,"syntax","syntax",-1637761676).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["; Comment."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["// Single-line comment",deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/*","Multiline","comment","*/"], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["// Single-line comment",deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/*","Multiline","comment","*/"], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["// Single-line comment",deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/*","Multiline","comment","*/"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["# Comment"], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Decimal",new cljs.core.Keyword(null,"data-type","data-type",-326421468).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";;; Type.","java.math.BigDecimal","",";;; Literal.","123.456M"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Fully-qualified type","System.Decimal","","// Type","decimal","","// Literal","123.456M"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Fully-qualified type","java.math.BigDecimal","","// Instance","new BigDecimal(\"123.456\")"], 0))], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["# Class","# decimal.Decimal","","# Instance","Decimal('123.456')"], 0))], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Division \u00A6 Divide",new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(/ 2 3.0)",deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";;; Returns a ratio when the remainder from dividing two",";;; integers is not zero.","(/ 2 3)"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 / 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 / 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 / 3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 / 3",deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["# Integer division","2 // 3"], 0))], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Equality \u00A6 Equal to",new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(= 2 3)",deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";;; Semantic number equality.","(== 2 3.0)"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 == 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 == 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 === 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 == 3"], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("if",new cljs.core.Keyword(null,"syntax","syntax",-1637761676).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(if :expression","  :truthy-return","  :falsy-return)"], 0)),deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";;; Returns nil if falsy.","(when :expression","  :body)"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (booleanExpr)","{","    // Body","}"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (booleanExpr) {","    // Body","}"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (expression) {","    // Body","}"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if expression:","    pass"], 0))], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("if-else",new cljs.core.Keyword(null,"syntax","syntax",-1637761676).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(if :expression","  :truthy-return","  :falsy-return)"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (booleanExpr)","{","    // Body","}","else","{","    // Body","}"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (booleanExpr) {","    // Body","}","else {","    // Body","}"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (expression) {","    // Body","}","else {","    // Body","}"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if expression:","    pass","else:","    pass"], 0))], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Inequality \u00A6 Not equal",new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(not= 2 3)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 != 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 != 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 !== 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 != 3"], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Modulus \u00A6 Modulo \u00A6 Mod \u00A6 Remainder",new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mod 2 3)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 % 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 % 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 % 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 % 3"], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Multiplication \u00A6 Multiply",new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(* 2 3)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 * 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 * 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 * 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 * 3"], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Not",new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(not :expression)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!booleanExpr"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!booleanExpr"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!expression"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["not expression"], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Null \u00A6 No value",new cljs.core.Keyword(null,"syntax","syntax",-1637761676).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nil"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["null"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["null"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["undefined","null"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["None"], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Or",new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(or :expression1 :expression2)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["booleanExpr1 || booleanExpr2"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["booleanExpr1 || booleanExpr2"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expression1 || expression2"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expression1 or expression2"], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Print",new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(println :value)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Console.WriteLine(val);"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["System.out.println(value);"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["console.log(value);"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["print(value)"], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("String",new cljs.core.Keyword(null,"data-type","data-type",-326421468).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";;; Type.","java.lang.String","",";;; Literal.","\"Hello\""], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Fully-qualified type","System.String","","// Type","string","","// Literal","\"Hello\""], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Fully-qualified type","java.lang.String","","// Type","String","","// Literal","\"Hello\""], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Type","// string","","// Literal","'Hello'"], 0)),deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Type","// string","","// Literal","\"Hello\""], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["# Type","# str","","# Literal","'Hello'"], 0))], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("String concatenation",new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(str :a :b)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Any of the operands must be a string","\"a\" + 1"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Any of the operands must be a string","\"a\" + 1"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Any of the operands must be a string","'a' + 1"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["# Both operands must be strings","'a' + str(1)"], 0))], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("String interpolation",new cljs.core.Keyword(null,"syntax","syntax",-1637761676).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$\"The value: {val}\""], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`The value: ${ value }`"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["f'The value: { value }'"], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Subtraction \u00A6 Subtract",new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(- 2 3)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 - 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 - 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 - 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2 - 3"], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Ternary operator \u00A6 Ternary expression",new cljs.core.Keyword(null,"syntax","syntax",-1637761676).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(if :expression","  :truthy-return","  :falsy-return)"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["booleanExpr ? trueReturn : falseReturn"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["booleanExpr ? trueReturn : falseReturn"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expression ? truthyReturn : falsyReturn"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["truthy_return if expression else falsy_return"], null),null,null,null)),null,null,null)),(new deect.lang_items.LangItem("Variable (Declaration and assignment of a local variable)",new cljs.core.Keyword(null,"syntax","syntax",-1637761676).cljs$core$IFn$_invoke$arity$1(deect.lang_items.lang_item_type),(new deect.lang_items.CodeCollRec(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";; Local bindings cannot be reassigned.",";; Replace nil with any desired value.","(let [my-value nil]","  :body)"], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Replace object with any desired type.","// Replace null with any desired value.","object myVar = null;"], 0)),deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// var is valid when the compiler can determine the type","// of the value","var myVar = \"value\";"], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Replace Object with any desired type.","// Replace null with any desired value.","Object myVar = null;"], 0)),deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// var is valid when the compiler can determine the type","// of the value","var myVar = \"value\";"], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Replace undefined with any desired value","let myVar = undefined;"], 0)),deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["// Declaration and assignment of a constant.","// Replace undefined with any desired value.","const myConst = undefined;"], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deect.lang_items.ml_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["# Replace None with any desired value","my_var = None"], 0))], null),null,null,null)),null,null,null))], null);

//# sourceMappingURL=deect.lang_items.js.map
