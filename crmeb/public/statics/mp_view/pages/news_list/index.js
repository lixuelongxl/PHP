(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news_list/index"],{2827:function(t,e,i){"use strict";i.r(e);var n=i("a916"),a=i("3daf");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("bf03");var c,r=i("f0c5"),o=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);e["default"]=o.exports},"3daf":function(t,e,i){"use strict";i.r(e);var n=i("8329"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},6559:function(t,e,i){"use strict";(function(t){i("ebf5");n(i("66fd"));var e=n(i("2827"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},8329:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("c159"),a=s(i("5411"));function s(t){return t&&t.__esModule?t:{default:t}}var c=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("b60d"))}.bind(null,i)).catch(i.oe)},r={components:{home:c},mixins:[a.default],data:function(){return{coutList:[],imgUrls:[],articleList:[],indicatorDots:!1,circular:!0,autoplay:!0,interval:3e3,duration:500,navList:[],active:0,page:1,limit:8,status:!1,scrollLeft:0,activeCou:0}},onShow:function(){this.getArticleHot(),this.getArticleBanner(),this.getArticleCate(),this.status=!1,this.page=1,this.articleList=[]},onReachBottom:function(){this.getCidArticle(this.activeCou)},methods:{getArticleHot:function(){var t=this;(0,n.getArticleHotList)().then((function(e){t.$set(t,"articleList",e.data)}))},getArticleBanner:function(){var t=this;(0,n.getArticleBannerList)().then((function(e){t.imgUrls=e.data}))},getCidArticle:function(t,e){var i=this;e&&(i.status=!1,this.activeCou=t,this.$set(this,"articleList",[]),i.page=1);var a=i.limit,s=i.page,c=i.articleList;i.status||(0,n.getArticleList)(i.activeCou,{page:s,limit:a}).then((function(t){var e=[],n=t.length;e=c.concat(t.data),i.page++,i.$set(i,"articleList",e),i.status=a>n,i.page=i.page}))},getArticleCate:function(){var t=this;(0,n.getArticleCategoryList)().then((function(e){t.$set(t,"navList",e.data)}))},tabSelect:function(t,e,i){this.active=t,this.scrollLeft=60*e,0==this.active?(this.$set(this,"coutList",[]),this.$set(this,"articleList",[]),this.getArticleHot()):(this.$set(this,"articleList",[]),this.$set(this,"coutList",[]),i.children.length&&(this.page=1,this.status=!1,this.activeCou=i.children[0].id||0,this.coutList=i.children||[],this.$set(this,"articleList",[]),this.getCidArticle(this.activeCou)))}}};e.default=r},a916:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},s=[]},be01:function(t,e,i){},bf03:function(t,e,i){"use strict";var n=i("be01"),a=i.n(n);a.a}},[["6559","common/runtime","common/vendor"]]]);