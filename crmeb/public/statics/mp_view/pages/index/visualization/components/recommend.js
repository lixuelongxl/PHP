(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/recommend"],{1303:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("26cb");var i=n("376f"),o=n("b2cd"),s=a(n("5411"));function a(t){return t&&t.__esModule?t:{default:t}}var c=getApp(),l=function(){Promise.all([n.e("common/vendor"),n.e("components/goodList/index")]).then(function(){return resolve(n("9cc1"))}.bind(null,n)).catch(n.oe)},u={name:"goodList",props:{dataConfig:{type:Object,default:function(){}}},mixins:[s.default],components:{goodLists:l},created:function(){},mounted:function(){},watch:{dataConfig:{immediate:!0,handler:function(t,e){t&&(this.isShow=t.isShow.val,this.selectType=t.tabConfig.tabVal,this.$set(this,"selectId",t.selectConfig.activeValue||""),this.$set(this,"type",t.selectSortConfig.activeValue),this.salesOrder=1==t.goodsSort.type?"desc":"",this.newsOrder=2==t.goodsSort.type?"news":"",this.ids=t.ids?t.ids.join(","):"",this.numConfig=t.numConfig.val,this.titleInfo=t.titleInfo.list,this.productslist())}}},data:function(){return{circular:!0,interval:3e3,duration:500,bastList:[],name:this.$options.name,isShow:!0,isIframe:c.globalData.isIframe,selectType:0,selectId:"",salesOrder:"",newsOrder:"",ids:"",page:1,limit:this.$config.LIMIT,type:"",numConfig:0,titleInfo:[]}},methods:{productslist:function(){var t=this,e={};e=t.selectType?{page:t.page,limit:t.limit,type:t.type,ids:t.ids,selectType:t.selectType}:{page:t.page,limit:t.numConfig<=t.limit?t.numConfig:t.limit,type:t.type,newsOrder:t.newsOrder,salesOrder:t.salesOrder,selectId:t.selectId,selectType:t.selectType},(0,o.getHomeProducts)(e).then((function(e){t.bastList=e.data.list})).catch((function(e){t.$util.Tips({title:e})}))},gopage:function(e){t.navigateTo({url:e})},goDetail:function(e){var n=this;(0,i.goPage)().then((function(o){(0,i.goShopDetail)(e,n.uid).then((function(n){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})}))}))}}};e.default=u}).call(this,n("543d")["default"])},"4e7e":function(t,e,n){},"545e":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},s=[]},"63e0":function(t,e,n){"use strict";var i=n("4e7e"),o=n.n(i);o.a},7172:function(t,e,n){"use strict";n.r(e);var i=n("1303"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},7861:function(t,e,n){"use strict";n.r(e);var i=n("545e"),o=n("7172");for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("63e0");var a,c=n("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=l.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/recommend-create-component',
    {
        'pages/index/visualization/components/recommend-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7861"))
        })
    },
    [['pages/index/visualization/components/recommend-create-component']]
]);
