(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_cate/goods_cate3"],{"0456":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=e("b2cd"),a=e("f57c"),s=e("26cb"),c=e("376f"),n=e("f9f5"),o=function(){e.e("components/parabolaBall/ParabolaBall").then(function(){return resolve(e("0a35"))}.bind(null,e)).catch(e.oe)},u=function(){e.e("components/productWindow/index").then(function(){return resolve(e("a234"))}.bind(null,e)).catch(e.oe)},h=function(){e.e("components/goodClass/index").then(function(){return resolve(e("051d"))}.bind(null,e)).catch(e.oe)},d=function(){e.e("components/cartList/index").then(function(){return resolve(e("78c0"))}.bind(null,e)).catch(e.oe)},l={computed:(0,s.mapGetters)(["isLogin","uid"]),components:{productWindow:u,goodClass:h,cartList:d,ParabalaBall:o},props:{},data:function(){return{categoryList:[],navActive:0,categoryTitle:"",categoryErList:[],tabLeft:0,isWidth:0,tabClick:0,iSlong:!0,tempArr:[],loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:10,cid:0,sid:0,isAuto:!1,isShowAuth:!1,attr:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],attrValue:"",storeName:"",id:0,cartData:{cartList:[],iScart:!1},cartCount:0,totalPrice:0,lengthCart:0,is_vip:0,cart_num:0,storeInfo:{},endLocation:{}}},onShow:function(){},onLoad:function(){var i=this;this.$nextTick((function(){t.createSelectorQuery().select("#cart").boundingClientRect((function(e){var r=t.getSystemInfoSync();r.windowTop;i.endLocation={x:e.left+t.upx2px(120)/2,y:e.top}})).exec()}))},mounted:function(){var i=this;i.lengthCart=i.cartData.cartList,t.getSystemInfo({success:function(t){i.isWidth=t.windowWidth/5}})},methods:{jumpIndex:function(){this.$emit("jumpIndex")},addCart:function(t){},subOrder:function(){var i=this,e=i.cartData.cartList,r=[];if(!e.length)return i.$util.Tips({title:"请选择产品"});e.forEach((function(t){r.push(t.id)})),t.navigateTo({url:"/pages/users/order_confirm/index?cartId="+r.join(",")}),i.cartData.iScart=!1},getTotalPrice:function(){var t=this,i=t.cartData.cartList,e=0;i.forEach((function(i){i.attrStatus&&i.status&&(e=t.$util.$h.Add(e,t.$util.$h.Mul(i.cart_num,i.truePrice)))})),t.$set(t,"totalPrice",e)},ChangeSubDel:function(t){var i=this,e=i.cartData.cartList,r=[];e.forEach((function(t){r.push(t.id)})),(0,a.cartDel)(r.join(",")).then((function(t){i.$set(i.cartData,"cartList",[]),i.cartData.iScart=!1,i.totalPrice=0,i.page=1,i.loadend=!1,i.tempArr=[],i.productslist(),i.getCartNum()}))},ChangeOneDel:function(t,i){var e=this,r=e.cartData.cartList;(0,a.cartDel)(t.toString()).then((function(t){r.splice(i,1),r.length||(e.cartData.iScart=!1,e.page=1,e.loadend=!1,e.tempArr=[],e.productslist()),e.getCartNum()}))},getCartList:function(t){var i=this;(0,a.vcartList)().then((function(e){i.$set(i.cartData,"cartList",e.data),e.data.length?i.$set(i.cartData,"iScart",!t&&!i.cartData.iScart):i.$set(i.cartData,"iScart",!1),i.getTotalPrice()}))},closeList:function(t){this.$set(this.cartData,"iScart",t),this.page=1,this.loadend=!1,this.tempArr=[],this.productslist()},getCartNum:function(){var t=this;(0,a.getCartCounts)().then((function(i){t.cartCount=i.data.count}))},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1)},DefaultSelect:function(){var t=this.attr.productAttr,i=[];for(var e in this.productValue)if(this.productValue[e].stock>0){i=this.attr.productAttr.length?e.split(","):[];break}for(var r=0;r<t.length;r++)this.$set(t[r],"index",i[r]);var a=this.productValue[i.join(",")];a&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeName),this.$set(this.attr.productSelect,"image",a.image),this.$set(this.attr.productSelect,"price",a.price),this.$set(this.attr.productSelect,"stock",a.stock),this.$set(this.attr.productSelect,"unique",a.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"vip_price",a.vip_price),this.$set(this,"attrValue",i.join(","))):!a&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeName),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price)):a||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeName),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",""),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price))},ChangeAttr:function(t){var i=this.productValue[t];i&&i.stock>0?(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"stock",i.stock),this.$set(this.attr.productSelect,"unique",i.unique),this.$set(this.attr.productSelect,"vip_price",i.vip_price),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",t)):i&&0==i.stock?(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"vip_price",i.vip_price),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue","")):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"vip_price",this.storeInfo.vip_price),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""))},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t)},onLoadFun:function(){},productslist:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="",(0,r.getProductslist)({page:t.page,limit:t.limit,type:1,cid:t.cid,sid:t.sid}).then((function(i){var e=i.data,r=e.length<t.limit;t.tempArr=t.$util.SplitArray(e,t.tempArr),t.$set(t,"tempArr",t.tempArr),t.loading=!1,t.loadend=r,t.loadTitle=r?"人家是有底线的~":"加载更多",t.page=t.page+1})).catch((function(i){t.loading=!1,t.loadTitle="加载更多"})))},ChangeCartNumDan:function(t,i,e){var r=this.tempArr[i],a=this.tempArr[i].stock;this.ChangeCartNum(t,r,a,0,e.id)},ChangeCartNumDuo:function(t){var i=this.productValue[this.attrValue];if(void 0!==i||this.attr.productAttr.length||(i=this.attr.productSelect),void 0!==i){var e=i.stock||0,r=this.attr.productSelect;this.ChangeCartNum(t,r,e,1,this.id)}},ChangeCartList:function(t,i){var e=this.cartData.cartList,r=e[i],a=e[i].trueStock;this.ChangeCartNum(t,r,a,0,r.product_id,i,1),e.length||(this.cartData.iScart=!1,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist())},ChangeCartNum:function(t,i,e,r,a,s,c){if(t){if(i.cart_num++,i.cart_num>e)return r?(this.$set(this.attr.productSelect,"cart_num",e||1),this.$set(this,"cart_num",e||1)):(i.cart_num=e||0,this.$set(this,"tempArr",this.tempArr),this.$set(this.cartData,"cartList",this.cartData.cartList)),this.$util.Tips({title:"该产品没有更多库存了"});r||(c?(this.goCat(0,a,1,1,i.product_attr_unique),this.getTotalPrice()):this.goCat(0,a,1))}else i.cart_num--,0==i.cart_num&&(this.cartData.cartList.splice(s,1),r&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1))),i.cart_num<0?r?(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)):(i.cart_num=0,this.$set(this,"tempArr",this.tempArr),this.$set(this.cartData,"cartList",this.cartData.cartList)):r||(c?(this.goCat(0,a,0,1,i.product_attr_unique),this.getTotalPrice()):this.goCat(0,a,0))},goCatNum:function(){this.goCat(1,this.id,1)},goCat:function(t,i,e,a,s){var c=this;if(t){var n=c.productValue[this.attrValue];if(c.attr.productAttr.length&&void 0===n)return c.$util.Tips({title:"产品库存不足，请选择其它属性"})}var o={product_id:i,num:t?c.attr.productSelect.cart_num:1,type:e,unique:t?c.attr.productSelect.unique:a?s:""};(0,r.postCartNum)(o).then((function(i){t&&(c.attr.cartAttr=!1,c.$util.Tips({title:"添加购物车成功"}),c.tempArr.forEach((function(t,i){if(t.id==c.id){var e=c.attr.productSelect.stock,r=parseInt(t.cart_num)+parseInt(c.attr.productSelect.cart_num);t.cart_num=r>e?e:r}}))),c.getCartNum(),a||c.getCartList(1)})).catch((function(t){return c.$util.Tips({title:t})}))},goCartDan:function(i,e){if(this.isLogin){if(!i.cart_button)return void(0,c.goShopDetail)(i,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(i.id)})}));this.tempArr[e].cart_num=1,this.$set(this,"tempArr",this.tempArr),this.goCat(0,i.id,1)}else this.getIsLogin()},goCartDuo:function(i){if(this.isLogin){if(!i.cart_button)return void(0,c.goShopDetail)(i,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(i.id)})}));t.showLoading({title:"加载中"}),this.storeName=i.store_name,this.getAttrs(i.id),this.$set(this,"id",i.id),this.$set(this.attr,"cartAttr",!0)}else this.getIsLogin()},getIsLogin:function(){(0,n.toLogin)()},getAttrs:function(i){var e=this;(0,r.getAttr)(i,0).then((function(i){t.hideLoading(),e.$set(e.attr,"productAttr",i.data.productAttr),e.$set(e,"productValue",i.data.productValue),e.$set(e,"is_vip",i.data.storeInfo.is_vip),e.$set(e,"storeInfo",i.data.storeInfo),e.DefaultSelect()}))},goDetail:function(i){this.isLogin?(0,c.goShopDetail)(i,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(i.id)})})):(0,n.toLogin)()},openTap:function(){this.iSlong=!1},closeTap:function(){this.iSlong=!0},getAllCategory:function(){var t=this;(0,r.getCategoryList)().then((function(i){var e=i.data;e.forEach((function(t){t.children.unshift({id:0,cate_name:"全部"})})),t.categoryTitle=e[0].cate_name,t.cid=e[0].id,t.sid=0,t.navActive=0,t.tabClick=0,t.categoryList=e,t.categoryErList=i.data[0].children?i.data[0].children:[],t.page=1,t.loadend=!1,t.tempArr=[],t.productslist()}))},tapNav:function(t,i){var e=this.categoryList[t];this.navActive=t,this.categoryTitle=e.cate_name,this.categoryErList=i.children?i.children:[],this.tabClick=0,this.tabLeft=0,this.cid=e.id,this.sid=0,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist()},longClick:function(t){this.categoryErList.length>3&&(this.tabLeft=(t-1)*(this.isWidth+6)),this.tabClick=t,this.iSlong=!0,this.sid=this.categoryErList[t].id,this.page=1,this.loadend=!1,this.tempArr=[],this.productslist()}},onReachBottom:function(){this.productslist()}};i.default=l}).call(this,e("543d")["default"])},"18ae":function(t,i,e){"use strict";e.r(i);var r=e("2795"),a=e("7e4b");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("a254");var c,n=e("f0c5"),o=Object(n["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);i["default"]=o.exports},2795:function(t,i,e){"use strict";var r;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return r}));var a=function(){var t=this,i=t.$createElement;t._self._c},s=[]},"69a5":function(t,i,e){},"7e4b":function(t,i,e){"use strict";e.r(i);var r=e("0456"),a=e.n(r);for(var s in r)"default"!==s&&function(t){e.d(i,t,(function(){return r[t]}))}(s);i["default"]=a.a},a254:function(t,i,e){"use strict";var r=e("69a5"),a=e.n(r);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/goods_cate/goods_cate3-create-component',
    {
        'pages/goods_cate/goods_cate3-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("18ae"))
        })
    },
    [['pages/goods_cate/goods_cate3-create-component']]
]);
