(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-columnGoods-HotNewGoods-index"],{"037b":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"empty-box"},[a("v-uni-image",{attrs:{src:"/static/images/empty-box.png"}}),a("v-uni-view",{staticClass:"txt"},[t._v(t._s(t.title))])],1)},o=[]},"0be3":function(t,e,a){"use strict";var i=a("14a5"),n=a.n(i);n.a},"14a5":function(t,e,a){var i=a("eba3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6b5c749e",i,!0,{sourceMap:!1,shadowMode:!1})},"255f":function(t,e,a){"use strict";var i=a("25ed"),n=a.n(i);n.a},"25ed":function(t,e,a){var i=a("989f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("034dc9cd",i,!0,{sourceMap:!1,shadowMode:!1})},"30ce":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".pictrueBox[data-v-3f1aaa8c]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-3f1aaa8c]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-3f1aaa8c]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-3f1aaa8c]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important}.home .homeCon .iconfont[data-v-3f1aaa8c]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-3f1aaa8c]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-3f1aaa8c]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"376f":function(t,e,a){"use strict";a("99af"),a("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.goShopDetail=n,e.goPage=o;var i=getApp();function n(t,e){return new Promise((function(a){t.activity&&"1"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.activity.id,"&time=").concat(t.activity.time,"&status=1")}):t.activity&&"2"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.activity.id,"&bargain=").concat(e)}):t.activity&&"3"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.activity.id)}):a(t)}))}function o(){return new Promise((function(t){if(0!=i.globalData.isIframe)return!1;t(!0)}))}},5133:function(t,e,a){var i=a("7aa6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("2e656a7b",i,!0,{sourceMap:!1,shadowMode:!1})},5268:function(t,e,a){var i=a("30ce");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1cd84f54",i,!0,{sourceMap:!1,shadowMode:!1})},"60e5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{title:{type:String,default:"暂无记录"}}};e.default=i},"62bb":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("26cb"),o=i(a("5411")),r={name:"Home",props:{},mixins:[o.default],data:function(){return{top:"545"}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=r},"65ab":function(t,e,a){"use strict";var i=a("b0b5"),n=a.n(i);n.a},"68a2":function(t,e,a){"use strict";var i=a("4ea4");a("99af"),a("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("e1c8")),o=i(a("9cc1")),r=i(a("8d18")),s=a("b2cd"),c=a("376f"),u=i(a("b60d")),d=i(a("5411")),l={name:"HotNewGoods",components:{GoodList:o.default,emptyPage:n.default,home:u.default,pageFooter:r.default},props:{},mixins:[d.default],data:function(){return{imgUrls:[],goodsList:[],name:"",icon:"",type:0,typeName:["","精品推荐","热门榜单","首发新品","促销单品"],autoplay:!0,circular:!0,interval:3e3,duration:500,page:1,limit:8,isScroll:!0,footerStatus:!1}},onLoad:function(t){uni.getStorageSync("FOOTER_BAR")&&(this.footerStatus=!0,uni.hideTabBar()),this.type=t.type,this.titleInfo(),this.name=t.name,uni.setNavigationBarTitle({title:t.name}),this.getIndexGroomList()},methods:{titleInfo:function(){"1"===this.type?this.icon="icon-jingpintuijian":"2"===this.type?this.icon="icon-remen":("3"===this.type||"4"===this.type)&&(this.icon="icon-xinpin")},goPages:function(t){var e=t.link||"";(0,c.goPage)().then((function(t){-1!=e.indexOf("http")?location.href=e:(["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(e),uni.navigateTo({url:e}))}))},getIndexGroomList:function(){if(this.isScroll){var t=this,e=this.type;(0,s.getGroomList)(e,{page:this.page,limit:this.limit}).then((function(e){t.imgUrls=e.data.banner,t.goodsList=t.goodsList.concat(e.data.list),t.isScroll=e.data.list.length>=t.limit,t.page++})).catch((function(e){t.$util.Tips({title:e})}))}},onReachBottom:function(){this.getIndexGroomList()}}};e.default=l},"6bbf":function(t,e,a){"use strict";a.r(e);var i=a("9e8d"),n=a("dc44");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("65ab");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"7a02ab41",null,!1,i["a"],r);e["default"]=c.exports},"74e86":function(t,e,a){"use strict";var i=a("5268"),n=a.n(i);n.a},"7aa6":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.empty-box[data-v-244d8f0e]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:%?200?%}.empty-box uni-image[data-v-244d8f0e]{width:%?414?%;height:%?240?%}.empty-box .txt[data-v-244d8f0e]{font-size:%?26?%;color:#999}',""]),t.exports=e},"8ad8":function(t,e,a){"use strict";a.r(e);var i=a("9950"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"8ca2":function(t,e){t.exports="data:image/png;base64,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"},"8d18":function(t,e,a){"use strict";a.r(e);var i=a("b6ad"),n=a("8ad8");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("255f");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"1993f683",null,!1,i["a"],r);e["default"]=c.exports},9780:function(t,e,a){"use strict";a.r(e);var i=a("f9d6"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"989f":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page-footer[data-v-1993f683]{position:fixed;bottom:0;z-index:30;display:flex;align-items:center;justify-content:space-around;width:100%;height:calc(98rpx+ constant(safe-area-inset-bottom));height:calc(%?98?% + env(safe-area-inset-bottom));box-sizing:border-box;border-top:solid %?1?% #f3f3f3;background-color:#fff;box-shadow:0 0 %?17?% %?1?% hsla(0,0%,80.8%,.32);padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.page-footer .foot-item[data-v-1993f683]{display:flex;width:-webkit-max-content;width:max-content;align-items:center;justify-content:center;flex-direction:column;position:relative}.page-footer .foot-item .count-num[data-v-1993f683]{position:absolute;display:flex;justify-content:center;align-items:center;width:%?40?%;height:%?40?%;top:%?0?%;right:%?-15?%;color:#fff;font-size:%?20?%;background-color:#fd502f;border-radius:50%;padding:%?4?%}.page-footer .foot-item uni-image[data-v-1993f683]{height:%?50?%;width:%?50?%;text-align:center;margin:0 auto}.page-footer .foot-item .txt[data-v-1993f683]{font-size:%?24?%}',""]),t.exports=e},9950:function(t,e,a){"use strict";(function(t){var i=a("4ea4");a("a9e3"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o=i(a("ade3")),r=i(a("5530")),s=a("26cb"),c=a("f37e"),u=a("f57c"),d=(n={name:"pageFooter",props:{noTop:{type:Boolean,default:!0},status:{type:Number|String,default:1},countNum:{type:Number|String,default:0}},computed:(0,r.default)({},(0,s.mapState)({configData:function(t){return t.app.pageFooter}}))},(0,o.default)(n,"computed",(0,s.mapGetters)(["isLogin","cartNum"])),(0,o.default)(n,"watch",{configData:{handler:function(t,e){var a=this,i=uni.createSelectorQuery().in(this);this.newData=t,this.$nextTick((function(){i.select("#target").boundingClientRect((function(t){uni.$emit("footHeight",t.height),t&&(a.footHeight=t.height+50)})).exec()}))},deep:!0},cartNum:function(t,e){this.$store.commit("indexData/setCartNum",t+""),t>0?uni.setTabBarBadge({index:Number(uni.getStorageSync("FOOTER_ADDCART")),text:t+""}):wx.hideTabBarRedDot({index:Number(uni.getStorageSync("FOOTER_ADDCART"))})}}),(0,o.default)(n,"created",(function(){var t=getCurrentPages(),e=t[t.length-1].route;this.activeRouter="/"+e})),(0,o.default)(n,"onShow",(function(){var t=this;(0,c.getNavigation)().then((function(e){uni.setStorageSync("pageFoot",e.data),t.$store.commit("FOOT_UPLOAD",e.data),t.newData=e.data,t.newData.status&&t.newData.status.status||uni.showTabBar()}))})),(0,o.default)(n,"mounted",(function(){this.newData=this.$store.state.app.pageFooter,this.newData.status&&this.newData.status.status?uni.hideTabBar():uni.showTabBar(),this.newData,this.isLogin&&this.getCartNum()})),(0,o.default)(n,"data",(function(){return{newData:{},activeRouter:"/",footHeight:0}})),(0,o.default)(n,"methods",{goRouter:function(t){var e=getCurrentPages();if(e.length)var a=e[e.length-1].$page.fullPath;else a="";t.link!=a&&uni.switchTab({url:t.link,fail:function(e){uni.redirectTo({url:t.link})}})},getCartNum:function(){var t=this,e=this;(0,u.getCartCounts)().then((function(a){e.cartCount=a.data.count,t.$store.commit("indexData/setCartNum",a.data.count>99?"...":a.data.count)}))}}),n);e.default=d}).call(this,a("5a52")["default"])},"9a3b":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"goodList"},[i("v-uni-scroll-view",{staticStyle:{height:"100%"},attrs:{"scroll-y":"true","scroll-with-animation":"true"}},[t._l(t.bastList,(function(e,n){return[i("v-uni-view",{key:n+"_0",staticClass:"item acea-row row-between-wrapper",attrs:{"hover-class":"none"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goDetail(e)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:e.image}}),e.activity&&"1"===e.activity.type?i("span",{staticClass:"pictrue_log pictrue_log_class"},[t._v("秒杀")]):t._e(),e.activity&&"2"===e.activity.type?i("span",{staticClass:"pictrue_log pictrue_log_class"},[t._v("砍价")]):t._e(),e.activity&&"3"===e.activity.type?i("span",{staticClass:"pictrue_log pictrue_log_class"},[t._v("拼团")]):t._e()],1),i("v-uni-view",{staticClass:"underline"},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"line1"},[t._v(t._s(e.store_name))]),i("v-uni-view",{staticClass:"money font-color"},[t._v("￥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))])],1),e.is_vip&&e.vip_price&&e.vip_price>0?i("v-uni-view",{staticClass:"vip-money acea-row row-middle"},[t._v("￥"+t._s(e.vip_price||0)),i("v-uni-image",{attrs:{src:a("8ca2")}}),i("v-uni-text",{staticClass:"num"},[t._v("已售"+t._s(e.sales)+t._s(e.unit_name))])],1):i("v-uni-view",{staticClass:"vip-money acea-row row-middle"},[i("v-uni-text",{staticClass:"num"},[t._v("已售"+t._s(e.sales)+t._s(e.unit_name))])],1)],1)],1)],1)]}))],2)],1)},o=[]},"9cc1":function(t,e,a){"use strict";a.r(e);var i=a("9a3b"),n=a("9780");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("0be3");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"80c712a4",null,!1,i["a"],r);e["default"]=c.exports},"9e8d":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"quality-recommend",style:t.colorStyle},[a("div",{staticClass:"slider-banner swiper"},[a("v-uni-view",{staticClass:"swiper"},[a("v-uni-swiper",{attrs:{"indicator-dots":"true",autoplay:t.autoplay,circular:t.circular,interval:t.interval,duration:t.duration,"indicator-color":"rgba(255,255,255,0.6)","indicator-active-color":"#fff"}},[t._l(t.imgUrls,(function(e,i){return[a("v-uni-swiper-item",[a("v-uni-image",{staticClass:"slide-image",attrs:{src:e.img},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goPages(e)}}})],1)]}))],2)],1)],1),a("div",{staticClass:"title acea-row row-center-wrapper"},[a("div",{staticClass:"line"}),a("div",{staticClass:"name"},[a("span",{staticClass:"iconfont",class:t.icon}),t._v(t._s(t.typeName[t.type]))]),a("div",{staticClass:"line"})]),a("v-uni-view",{staticClass:"wrapper"},[a("GoodList",{attrs:{bastList:t.goodsList,"is-sort":!1}}),t.goodsList.length>0&&!t.isScroll?a("v-uni-view",{staticClass:"txt-bar"},[t._v("我是有底线的~")]):t._e(),0!=t.goodsList.length||t.isScroll?t._e():a("emptyPage",{attrs:{title:"暂无数据~"}})],1),a("home"),t.footerStatus?a("pageFooter"):t._e()],1)},o=[]},b0b5:function(t,e,a){var i=a("f7b8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("7795d3c3",i,!0,{sourceMap:!1,shadowMode:!1})},b2cd:function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=o,e.getProductCode=r,e.collectAdd=s,e.collectDel=c,e.postCartAdd=u,e.getCategoryList=d,e.getProductslist=l,e.getProductHot=f,e.collectAll=p,e.getGroomList=v,e.getCollectUserList=g,e.getReplyList=m,e.getReplyConfig=h,e.getSearchKeyword=b,e.storeListApi=y,e.storeDiscountsList=A,e.postCartNum=w,e.create=x,e.getAgentAgreement=C,e.registerVerify=_,e.getCodeApi=L,e.getGoodsDetails=k,e.getAttr=D,e.getHomeProducts=R,e.getPresellProductDetail=B;var n=i(a("f75a"));function o(t){return n.default.get("product/detail/"+t,{},{noAuth:!0})}function r(t){return n.default.get("product/code/"+t,{})}function s(t,e){return n.default.post("collect/add",{id:t,product:void 0===e?"product":e})}function c(t,e){return n.default.post("collect/del",{id:t,category:void 0===e?"product":e})}function u(t){return n.default.post("cart/add",t)}function d(){return n.default.get("category",{},{noAuth:!0})}function l(t){return n.default.get("products",t,{noAuth:!0})}function f(t,e){return n.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})}function p(t,e){return n.default.post("collect/all",{id:t,category:void 0===e?"product":e})}function v(t,e){return n.default.get("groom/list/"+t,e,{noAuth:!0})}function g(t){return n.default.get("collect/user",t)}function m(t,e){return n.default.get("reply/list/"+t,e)}function h(t){return n.default.get("reply/config/"+t)}function b(){return n.default.get("search/keyword",{},{noAuth:!0})}function y(t){return n.default.get("store_list",t)}function A(t){return n.default.get("store_discounts/list/"+t,{},{noAuth:!0})}function w(t){return n.default.post("v2/set_cart_num",t)}function x(t){return n.default.post("agent/apply/".concat(t.id),t)}function C(t){return n.default.get("agent/get_agent_agreement",{},{noAuth:!0})}function _(t){return n.default.post("register/verify",t,{noAuth:!0})}function L(){return n.default.get("verify_code",{},{noAuth:!0})}function k(){return n.default.get("agent/apply/info",{},{noAuth:!0})}function D(t,e){return n.default.get("v2/get_attr/"+t+"/"+e)}function R(t){return n.default.get("home/products",t,{noAuth:!0})}function B(t){return n.default.get("advance/detail/"+t)}},b5bc:function(t,e,a){"use strict";a.r(e);var i=a("60e5"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},b60d:function(t,e,a){"use strict";a.r(e);var i=a("c819"),n=a("e6f5");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("74e86");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"3f1aaa8c",null,!1,i["a"],r);e["default"]=c.exports},b6ad:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{style:{height:t.footHeight+"px"}}),t.newData.bgColor?a("v-uni-view",[a("v-uni-view",{staticClass:"page-footer",style:{"background-color":t.newData.bgColor.color[0].item},attrs:{id:"target"}},t._l(t.newData.menuList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"foot-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goRouter(e)}}},[e.link==t.activeRouter?[a("v-uni-image",{attrs:{src:e.imgList[0]}}),a("v-uni-view",{staticClass:"txt",style:{color:t.newData.activeTxtColor.color[0].item}},[t._v(t._s(e.name))])]:[a("v-uni-image",{attrs:{src:e.imgList[1]}}),a("v-uni-view",{staticClass:"txt",style:{color:t.newData.txtColor.color[0].item}},[t._v(t._s(e.name))])],"/pages/order_addcart/order_addcart"===e.link&&t.$store.state.indexData.cartNum&&t.$store.state.indexData.cartNum>0?a("div",{staticClass:"count-num"},[t._v(t._s(t.$store.state.indexData.cartNum))]):t._e()],2)})),1)],1):t._e()],1)},o=[]},bd23:function(t,e,a){"use strict";var i=a("5133"),n=a.n(i);n.a},c819:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{style:t.colorStyle},[a("v-uni-view",{staticStyle:{"touch-action":"none"}},[a("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?a("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[a("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),a("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),a("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),a("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)],1)},o=[]},dc44:function(t,e,a){"use strict";a.r(e);var i=a("68a2"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},e1c8:function(t,e,a){"use strict";a.r(e);var i=a("037b"),n=a("b5bc");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("bd23");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"244d8f0e",null,!1,i["a"],r);e["default"]=c.exports},e6f5:function(t,e,a){"use strict";a.r(e);var i=a("62bb"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},eba3:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goodList .item[data-v-80c712a4]{position:relative;padding-left:%?30?%}.goodList .item .pictrue[data-v-80c712a4]{width:%?180?%;height:%?180?%;position:relative}.goodList .item .pictrue uni-image[data-v-80c712a4]{width:100%;height:100%;border-radius:%?20?%}.goodList .item .pictrue .numPic[data-v-80c712a4]{position:absolute;left:%?7?%;top:%?7?%;width:%?40?%;height:%?40?%;border-radius:50%}.goodList .item .underline[data-v-80c712a4]{padding:%?30?% %?30?% %?30?% 0;border-bottom:1px solid #f5f5f5}.goodList .item:nth-last-child(1) .underline[data-v-80c712a4]{border-bottom:0}.goodList .item .text[data-v-80c712a4]{font-size:%?30?%;color:#222;width:%?489?%}.goodList .item .text .money[data-v-80c712a4]{font-size:%?26?%;font-weight:700;margin-top:%?50?%}.goodList .item .text .money .num[data-v-80c712a4]{font-size:%?34?%}.goodList .item .text .vip-money[data-v-80c712a4]{font-size:%?24?%;color:#282828;font-weight:700;margin-top:%?15?%}.goodList .item .text .vip-money uni-image[data-v-80c712a4]{width:%?66?%;height:%?25?%;margin-right:%?8?%;margin-left:%?8?%}.goodList .item .text .vip-money .num[data-v-80c712a4]{font-size:%?22?%;color:#aaa;font-weight:400;margin-top:%?-2?%}.goodList .item .text .vip-money .num ~ .num[data-v-80c712a4]{margin-left:%?22?%}.goodList .item .iconfont[data-v-80c712a4]{position:absolute;right:%?30?%;width:%?50?%;height:%?50?%;border-radius:50%;font-size:%?30?%;bottom:%?38?%}',""]),t.exports=e},f7b8:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-7a02ab41] .empty-box{background-color:#f5f5f5}.swiper[data-v-7a02ab41],\r\nuni-swiper[data-v-7a02ab41],\r\nuni-swiper-item[data-v-7a02ab41],\r\n.slide-image[data-v-7a02ab41]{width:100%;height:%?280?%}.quality-recommend .wrapper[data-v-7a02ab41]{background:#fff}.quality-recommend .title[data-v-7a02ab41]{height:%?120?%;font-size:%?32?%;color:#282828;background-color:#f5f5f5}.quality-recommend .title .name[data-v-7a02ab41]{margin:0 %?20?%}.quality-recommend .title .name .iconfont[data-v-7a02ab41]{margin-right:%?10?%}.quality-recommend .title .line[data-v-7a02ab41]{width:%?230?%;height:%?2?%;background-color:#e9e9e9}.txt-bar[data-v-7a02ab41]{padding:%?20?% 0;text-align:center;font-size:%?26?%;color:#666;background-color:#f5f5f5}',""]),t.exports=e},f9d6:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("26cb"),n=a("376f"),o={computed:(0,i.mapGetters)(["uid"]),props:{status:{type:Number,default:0},bastList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(t){var e=this;(0,n.goPage)().then((function(a){(0,n.goShopDetail)(t,e.uid).then((function(e){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))}))}}};e.default=o}}]);