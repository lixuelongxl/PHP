(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d1a91a7"],{"0c9f":function(t,e,a){"use strict";a.d(e,"j",(function(){return i})),a.d(e,"o",(function(){return r})),a.d(e,"m",(function(){return s})),a.d(e,"l",(function(){return o})),a.d(e,"p",(function(){return c})),a.d(e,"r",(function(){return u})),a.d(e,"s",(function(){return l})),a.d(e,"v",(function(){return d})),a.d(e,"t",(function(){return h})),a.d(e,"u",(function(){return f})),a.d(e,"q",(function(){return m})),a.d(e,"n",(function(){return p})),a.d(e,"k",(function(){return g})),a.d(e,"e",(function(){return b})),a.d(e,"h",(function(){return v})),a.d(e,"f",(function(){return y})),a.d(e,"i",(function(){return x})),a.d(e,"g",(function(){return w})),a.d(e,"a",(function(){return C})),a.d(e,"c",(function(){return _})),a.d(e,"b",(function(){return O})),a.d(e,"d",(function(){return j})),a.d(e,"w",(function(){return L}));var n=a("6b6c");function i(t){return Object(n["a"])({url:"/statistic/product/get_basic",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/statistic/product/get_trend",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/statistic/product/get_product_ranking",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/statistic/product/get_excel",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/statistic/user/get_basic",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/statistic/user/get_trend",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/statistic/user/get_wechat",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/statistic/user/get_wechat_trend",method:"get",params:t})}function h(t){return Object(n["a"])({url:"/statistic/user/get_region",method:"get",params:t})}function f(t){return Object(n["a"])({url:"/statistic/user/get_sex",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/statistic/user/get_excel",method:"get",params:t})}function p(t){return Object(n["a"])({url:"/statistic/trade/top_trade",method:"get",params:t})}function g(t){return Object(n["a"])({url:"/statistic/trade/bottom_trade",method:"get",params:t})}function b(t){return Object(n["a"])({url:"/statistic/order/get_basic",method:"get",params:t})}function v(t){return Object(n["a"])({url:"/statistic/order/get_trend",method:"get",params:t})}function y(t){return Object(n["a"])({url:"/statistic/order/get_channel",method:"get",params:t})}function x(t){return Object(n["a"])({url:"/statistic/order/get_type",method:"get",params:t})}function w(t){return Object(n["a"])({url:"/statistic/flow/get_record",method:"get",params:t})}function C(t){return Object(n["a"])({url:"/statistic/balance/get_basic",method:"get",params:t})}function _(t){return Object(n["a"])({url:"/statistic/balance/get_trend",method:"get",params:t})}function O(t){return Object(n["a"])({url:"/statistic/balance/get_channel",method:"get",params:t})}function j(t){return Object(n["a"])({url:"/statistic/balance/get_type",method:"get",params:t})}function L(t,e){return Object(n["a"])({url:"app/wechat_qrcode/statistic/".concat(t),method:"get",params:e})}},"24c1":function(t,e,a){"use strict";var n=a("5ca7"),i=a.n(n);i.a},"3a79":function(t,e,a){},"3b2b":function(t,e,a){var n=a("7726"),i=a("5dbc"),r=a("86cc").f,s=a("9093").f,o=a("aae3"),c=a("0bfb"),u=n.RegExp,l=u,d=u.prototype,h=/a/g,f=/a/g,m=new u(h)!==h;if(a("9e1e")&&(!m||a("79e5")((function(){return f[a("2b4c")("match")]=!1,u(h)!=h||u(f)==f||"/a/i"!=u(h,"i")})))){u=function(t,e){var a=this instanceof u,n=o(t),r=void 0===e;return!a&&n&&t.constructor===u&&r?t:i(m?new l(n&&!r?t.source:t,e):l((n=t instanceof u)?t.source:t,n&&r?c.call(t):e),a?this:d,u)};for(var p=function(t){t in u||r(u,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=s(l),b=0;g.length>b;)p(g[b++]);d.constructor=u,u.prototype=d,a("2aba")(n,"RegExp",u)}a("7a56")("RegExp")},"5ca7":function(t,e,a){},"61f7":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return d}));a("8e6e"),a("ac6a"),a("456d");var n=a("ade3");a("6b54"),a("3b2b"),a("a481");function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var n in a)if(new RegExp("(".concat(n,")")).test(e)){var i=a[n]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?i:o(i))}return e}function o(t){return("00"+t).substr(t.length)}var c={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};var u=function(t,e){t.message=function(t){return e.replace("%s",t||"")}};function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r({required:!0,message:t,type:"string"},e)}function d(t){return h.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}u(l,"请输入%s"),u(d,"%s格式不正确");var h=Object.keys(c).reduce((function(t,e){return t[e]=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s="range"===e?{min:t[0],max:t[1]}:Object(n["a"])({},e,t);return r(r({message:a.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},s),i)},u(t[e],c[e]),t}),{})},"6d5b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("dateRadio",{on:{selectDate:t.onSelectDate}}),a("DatePicker",{staticClass:"mr20",staticStyle:{width:"200px"},attrs:{editable:!1,clearable:!1,value:t.timeVal,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-start",placeholder:"请选择时间",options:t.options},on:{"on-change":t.onchangeTime}})],1),t.cardLists.length>=0?a("cards-data",{attrs:{cardLists:t.cardLists}}):t._e(),a("Card",{attrs:{bordered:!1,"dis-hover":""}},[a("h3",[t._v("营业趋势")]),t.optionData?a("echarts-new",{attrs:{"option-data":t.optionData,styles:t.style,height:"100%",width:"100%"}}):t._e()],1),t.spinShow?a("Spin",{attrs:{size:"large",fix:""}}):t._e(),a("div",{staticClass:"code-row-bg"},[a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("div",{staticClass:"acea-row row-between-wrapper"},[a("h3",{staticClass:"header-title"},[t._v("订单来源分析")]),a("div",{staticClass:"change-style",on:{click:function(e){t.echartLeft=!t.echartLeft}}},[t._v("\n          切换样式\n        ")])]),a("div",{staticClass:"ech-box"},[t.echartLeft?a("echarts-from",{ref:"visitChart",attrs:{infoList:t.infoList,echartsTitle:"circle"}}):t._e(),a("Table",{directives:[{name:"show",rawName:"v-show",value:!t.echartLeft,expression:"!echartLeft"}],ref:"selection",attrs:{columns:t.columns,data:t.tabList,loading:t.loading,"no-data-text":"暂无数据","highlight-row":"","no-filtered-data-text":"暂无筛选结果"},scopedSlots:t._u([{key:"percent",fn:function(e){var n=e.row;return[a("div",{staticClass:"percent-box"},[a("div",{staticClass:"line"},[a("div",{staticClass:"bg"}),a("div",{staticClass:"percent",style:"width:"+n.percent+"%;"})]),a("div",{staticClass:"num"},[t._v(t._s(n.percent)+"%")])])]}}])})],1)]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("div",{staticClass:"acea-row row-between-wrapper"},[a("h3",{staticClass:"header-title"},[t._v("订单类型分析")]),a("div",{staticClass:"change-style",on:{click:function(e){t.echartRight=!t.echartRight}}},[t._v("\n          切换样式\n        ")])]),a("div",{staticClass:"ech-box"},[t.echartRight?a("echarts-from",{ref:"visitChart",attrs:{infoList:t.infoList2,echartsTitle:"circle"}}):t._e(),a("Table",{directives:[{name:"show",rawName:"v-show",value:!t.echartRight,expression:"!echartRight"}],ref:"selection",attrs:{columns:t.columns,data:t.tabList2,loading:t.loading2,"no-data-text":"暂无数据","highlight-row":"","no-filtered-data-text":"暂无筛选结果"},scopedSlots:t._u([{key:"percent",fn:function(e){var n=e.row;return[a("div",{staticClass:"percent-box"},[a("div",{staticClass:"line"},[a("div",{staticClass:"bg"}),a("div",{staticClass:"percent",style:"width:"+n.percent+"%;"})]),a("div",{staticClass:"num"},[t._v(t._s(n.percent)+"%")])])]}}])})],1)])],1)],1)},i=[],r=(a("7f7f"),a("96cf"),a("1da1")),s=(a("28a5"),a("a584")),o=a("c71e"),c=a("0c9f"),u=a("61f7"),l=a("9901"),d=a("fd73"),h={name:"index",components:{cardsData:s["a"],echartsNew:o["a"],echartsFrom:l["a"],dateRadio:d["a"]},data:function(){return{timeVal:[],style:{height:"400px"},infoList:{},infoList2:{},echartLeft:!0,echartRight:!1,loading:!1,loading2:!1,fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"本周",val:"week"},{text:"本月",val:"month"},{text:"本季度",val:"quarter"},{text:"本年",val:"year"}]},formValidate:{time:""},cardLists:[{col:6,count:0,name:"订单量",className:"md-rose"},{col:6,count:0,name:"订单销售额",className:"ios-speedometer-outline"},{col:6,count:0,name:"退款订单数",className:"ios-speedometer-outline"},{col:6,count:0,name:"退款金额",className:"md-rose"}],optionData:{},spinShow:!1,options:this.$timeOptions,columns:[{title:"序号",type:"index",width:60,align:"center"},{title:"来源",key:"name",minWidth:80,align:"center"},{title:"金额",width:180,key:"value",align:"center"},{title:"占比率",slot:"percent",minWidth:100,align:"center"}],tabList:[],tabList2:[]}},created:function(){var t=new Date,e=new Date;e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-29))),this.timeVal=[e,t],this.formValidate.time=Object(u["a"])(e,"yyyy/MM/dd")+"-"+Object(u["a"])(t,"yyyy/MM/dd"),this.onInit()},methods:{onInit:function(){this.getBasic(),this.getTrend(),this.getChannel(),this.getType()},onSelectDate:function(t){this.formValidate.time=t,this.onInit()},timeG:function(t){var e=new Date(t),a=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();return a},getBasic:function(){var t=this;Object(c["e"])(this.formValidate).then((function(e){var a=["pay_count","pay_price","refund_count","refund_price"];t.cardLists.map((function(t,n){t.count=e.data[a[n]]}))}))},getChannel:function(){var t=this;this.loading=!0,Object(c["f"])(this.formValidate).then((function(e){t.infoList=e.data,t.tabList=e.data.list,t.loading=!1}))},getType:function(){var t=this;this.loading2=!0,Object(c["i"])(this.formValidate).then((function(e){t.infoList2=e.data,t.tabList2=e.data.list,t.loading2=!1}))},selectChange:function(t){console.log(this.timeG(t.split(",")[0]),this.timeG(t.split(",")[1]))},onchangeTime:function(t){this.timeVal=t,this.formValidate.time=this.timeVal.join("-"),this.name=this.formValidate.time,this.getBasic(),this.getTrend()},getTrend:function(){var t=this;this.spinShow=!0,Object(c["h"])(this.formValidate).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){var n,i,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=a.data.series.map((function(t){return t.name})),i=a.data.xAxis,r=["#5B8FF9","#5AD8A6","#FFAB2B","#5D7092"],s=[],a.data.series.map((function(t,e){s.push({name:t.name,type:"line",data:t.data,itemStyle:{normal:{color:r[e]}},smooth:0})})),t.optionData={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{x:"center",data:n},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!0,axisLabel:{interval:0,rotate:40,textStyle:{color:"#000000"}},data:i},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}}},series:s},t.spinShow=!1;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg),t.spinShow=!1}))}}},f=h,m=(a("24c1"),a("2877")),p=Object(m["a"])(f,n,i,!1,null,"f8973474",null);e["default"]=p.exports},9901:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{height:"300px"},attrs:{id:t.echarts}})])},i=[],r=a("313e"),s=a.n(r),o={name:"index",props:{infoList:{type:Object,default:null},series:Array,echartsTitle:{type:String,default:""},yAxisData:{type:Array,default:function(){return[]}},bingXdata:Array},data:function(){return{infoLists:this.infoList,seriesArray:this.series}},watch:{infoList:{handler:function(t,e){this.infoLists=t,this.handleSetVisitChart()},deep:!0},series:{handler:function(t,e){this.seriesArray=t,this.handleSetVisitChart()},deep:!0}},computed:{echarts:function(){return"echarts"+Math.ceil(100*Math.random())}},mounted:function(){var t=this,e=this;e.$nextTick((function(){e.handleSetVisitChart(),window.addEventListener("resize",t.wsFunc)}))},methods:{wsFunc:function(){this.myChart.resize()},handleSetVisitChart:function(){this.myChart=s.a.init(document.getElementById(this.echarts));var t=null;t="circle"===this.echartsTitle?{tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"right",data:this.infoLists.bing_xdata||[]},series:[{name:"访问来源",type:"pie",radius:"70%",center:["50%","60%"],data:this.infoLists.bing_data||[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}:{tooltip:{trigger:"axis"},toolbox:{},legend:{data:this.infoLists.legend||[]},color:["#1495EB","#00CC66","#F9D249","#ff9900","#9860DF"],grid:{left:16,right:25,bottom:10,top:40,containLabel:!0},xAxis:[{type:"category",axisLine:{lineStyle:{color:"#D7DDE4"}},axisTick:{alignWithLabel:!0,lineStyle:{color:"#D7DDE4"}},splitLine:{show:!1,lineStyle:{color:"#F5F7F9"}},axisLabel:{interval:0,rotate:40,textStyle:{color:"#7F8B9C"}},data:this.infoLists.xAxis}],yAxis:this.yAxisData.length?this.yAxisData:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}},type:"value"},series:this.seriesArray},this.myChart.setOption(t,!0)},handleResize:function(){this.myChart.resize()}},beforeDestroy:function(){window.removeEventListener("resize",this.wsFunc),this.myChart&&(this.myChart.dispose(),this.myChart=null)}},c=o,u=a("2877"),l=Object(u["a"])(c,n,i,!1,null,"7db55952",null);e["a"]=l.exports},a584:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",{staticClass:"ivu-mt",attrs:{type:"flex",align:"middle",gutter:10}},t._l(t.cardLists,(function(e,n){return a("Col",{key:n,staticClass:"ivu-mb",attrs:{xl:e.col,lg:6,md:12,sm:24,xs:24}},[a("Card",{staticClass:"card_cent",attrs:{shadow:"",padding:0}},[a("div",{staticClass:"card_box"},[a("div",{staticClass:"card_box_cir",class:{one:n%5==0,two:n%5==1,three:n%5==2,four:n%5==3,five:n%5==4}},[a("div",{staticClass:"card_box_cir1",class:{one1:n%5==0,two1:n%5==1,three1:n%5==2,four1:n%5==3,five1:n%5==4}},[a("Icon",{attrs:{type:e.className}})],1)]),a("div",{staticClass:"card_box_txt"},[a("span",{staticClass:"sp1",domProps:{textContent:t._s(e.count||0)}}),a("span",{staticClass:"sp2",domProps:{textContent:t._s(e.name)}})])])])],1)})),1)],1)},i=[],r={name:"cards",data:function(){return{}},props:{cardLists:Array},methods:{},created:function(){}},s=r,o=(a("c65c"),a("2877")),c=Object(o["a"])(s,n,i,!1,null,"6f23132f",null);e["a"]=c.exports},c65c:function(t,e,a){"use strict";var n=a("3a79"),i=a.n(n);i.a},c71e:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{style:t.styles,attrs:{id:t.echarts}})])},i=[],r=a("313e"),s=a.n(r),o={name:"Index",props:{styles:{type:Object,default:null},optionData:{type:Object,default:null}},data:function(){return{myChart:null}},computed:{echarts:function(){return"echarts"+Math.ceil(100*Math.random())}},watch:{optionData:{handler:function(t,e){this.handleSetVisitChart()},deep:!0}},mounted:function(){var t=this,e=this;e.$nextTick((function(){e.handleSetVisitChart(),window.addEventListener("resize",t.wsFunc)}))},beforeDestroy:function(){window.removeEventListener("resize",this.wsFunc),this.myChart&&(this.myChart.dispose(),this.myChart=null)},methods:{wsFunc:function(){this.myChart.resize()},handleSetVisitChart:function(){this.myChart=s.a.init(document.getElementById(this.echarts));var t=null;t=this.optionData,this.myChart.setOption(t,!0)}}},c=o,u=a("2877"),l=Object(u["a"])(c,n,i,!1,null,"30045e34",null);e["a"]=l.exports},fd73:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("RadioGroup",{attrs:{type:"button"},on:{"on-change":t.onSelectTime},model:{value:t.selectIndexTime,callback:function(e){t.selectIndexTime=e},expression:"selectIndexTime"}},t._l(t.options.shortcuts,(function(e,n){return a("Radio",{key:n,attrs:{label:n}},[t._v(t._s(e.text))])})),1)},i=[],r=a("61f7"),s={filters:{formatDate:function(t){if(0!==t){var e=new Date(t);return Object(r["a"])(e,"yyyy/MM/dd")}}},data:function(){return{timeVal:[],options:this.$timeOptions,selectIndexTime:""}},methods:{onSelectTime:function(t){var e=[this.$options.filters.formatDate(this.dateToMs(this.$timeOptions.shortcuts[this.selectIndexTime].value()[0])),this.$options.filters.formatDate(this.dateToMs(this.$timeOptions.shortcuts[this.selectIndexTime].value()[1]))];this.$emit("selectDate",e.join("-"))},dateToMs:function(t){var e=new Date(t).getTime();return e}}},o=s,c=a("2877"),u=Object(c["a"])(o,n,i,!1,null,null,null);e["a"]=u.exports}}]);