(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_cate/goods_cate"],{"0662":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c},s=[]},"129a":function(t,e,n){"use strict";n.r(e);var o=n("71f2"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=a.a},"47d3":function(t,e,n){"use strict";(function(t){n("ebf5");o(n("66fd"));var e=o(n("9d3f"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"71f2":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("5411")),a=n("c159"),s=n("26cb");function r(t){return t&&t.__esModule?t:{default:t}}var c=function(){Promise.all([n.e("common/vendor"),n.e("pages/goods_cate/goods_cate1")]).then(function(){return resolve(n("2955"))}.bind(null,n)).catch(n.oe)},i=function(){Promise.all([n.e("common/vendor"),n.e("pages/goods_cate/goods_cate2")]).then(function(){return resolve(n("d569"))}.bind(null,n)).catch(n.oe)},u=function(){Promise.all([n.e("common/vendor"),n.e("pages/goods_cate/goods_cate3")]).then(function(){return resolve(n("18ae"))}.bind(null,n)).catch(n.oe)},d=function(){Promise.all([n.e("common/vendor"),n.e("pages/index/visualization/components/tabBar")]).then(function(){return resolve(n("9f7a"))}.bind(null,n)).catch(n.oe)},l={computed:(0,s.mapGetters)(["isLogin","uid"]),components:{goodsCate1:c,goodsCate2:i,goodsCate3:u,tabBar:d},mixins:[o.default],data:function(){return{category:"",is_diy:t.getStorageSync("is_diy"),status:0}},onLoad:function(){this.classStyle()},onReady:function(){},onShow:function(){2==this.status||3==this.status?t.hideTabBar():1==this.status&&(this.is_diy?this.$refs.classOne.getNav():t.hideTabBar())},methods:{jumpIndex:function(){this.is_diy&&(t.getStorageSync("FOOTER_BAR")||t.showTabBar())},classStyle:function(){var e=this;(0,a.colorChange)("category").then((function(n){var o=n.data.status;e.status=n.data.status,e.category=o,2==o&&(e.isLogin&&(e.$refs.classTwo.getCartNum(),e.$refs.classTwo.getCartList(1)),e.$refs.classTwo.getAllCategory()),3==o&&(e.isLogin&&(e.$refs.classThree.getCartNum(),e.$refs.classThree.getCartList(1)),e.$refs.classThree.getAllCategory()),2==o||3==o?t.hideTabBar():e.is_diy?e.$refs.classOne.getNav():t.hideTabBar()}))}},onReachBottom:function(){2==this.category&&this.$refs.classTwo.productslist(),3==this.category&&this.$refs.classThree.productslist()}};e.default=l}).call(this,n("543d")["default"])},"9d3f":function(t,e,n){"use strict";n.r(e);var o=n("0662"),a=n("129a");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("b3ab");var r,c=n("f0c5"),i=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"9c0bffee",null,!1,o["a"],r);e["default"]=i.exports},b3ab:function(t,e,n){"use strict";var o=n("d551"),a=n.n(o);a.a},d551:function(t,e,n){}},[["47d3","common/runtime","common/vendor"]]]);