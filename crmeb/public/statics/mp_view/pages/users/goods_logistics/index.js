(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/goods_logistics/index"],{"1af8":function(t,e,n){"use strict";(function(t){n("ebf5");o(n("66fd"));var e=o(n("573c"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"27d4":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"421b":function(t,e,n){"use strict";n.r(e);var o=n("b3d0"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},"512c":function(t,e,n){"use strict";var o=n("9e77"),r=n.n(o);r.a},"573c":function(t,e,n){"use strict";n.r(e);var o=n("27d4"),r=n("421b");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("512c");var c,u=n("f0c5"),s=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,"2cdceef6",null,!1,o["a"],c);e["default"]=s.exports},"9e77":function(t,e,n){},b3d0:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("f57c"),r=n("b2cd"),i=(s(n("8c57")),n("f9f5")),c=n("26cb"),u=s(n("5411"));function s(t){return t&&t.__esModule?t:{default:t}}var d=function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("1024"))}.bind(null,n)).catch(n.oe)},a=function(){n.e("components/Authorize").then(function(){return resolve(n("97f9"))}.bind(null,n)).catch(n.oe)},f={components:{recommend:d,authorize:a},mixins:[u.default],data:function(){return{orderId:"",product:[],orderInfo:{},expressList:[],hostProduct:[]}},computed:(0,c.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&(this.getExpress(),this.get_host_product())},deep:!0}},onLoad:function(t){if(!t.orderId)return this.$util.Tips({title:"缺少订单号"});this.orderId=t.orderId,this.type=t.type,this.isLogin?(this.getExpress(),this.get_host_product()):(0,i.toLogin)()},onReady:function(){},methods:{onLoadFun:function(){this.getExpress(),this.get_host_product()},copyOrderId:function(){t.setClipboardData({data:this.orderInfo.delivery_id})},getExpress:function(){var t=this,e=this;(0,o.express)(e.orderId,e.type).then((function(t){var n=t.data.express.result||{};e.$set(e,"product",t.data.order.cartInfo||[]),e.$set(e,"orderInfo",t.data.order),e.$set(e,"expressList",n.list||[])})).catch((function(e){t.$util.Tips({title:e})}))},get_host_product:function(){var t=this;(0,r.getProductHot)().then((function(e){t.$set(t,"hostProduct",e.data)}))}}};e.default=f}).call(this,n("543d")["default"])}},[["1af8","common/runtime","common/vendor"]]]);