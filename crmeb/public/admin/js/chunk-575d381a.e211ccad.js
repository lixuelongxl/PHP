(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-575d381a"],{"0c6b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Row",{attrs:{type:"flex"}},[n("Col",t._b({},"Col",t.grid,!1),[n("Button",{staticClass:"mr20",attrs:{type:"primary"},on:{click:t.goIndex}},[t._v("配置分类")]),n("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.configureAdd}},[t._v("添加配置")])],1)],1),n("Divider",{attrs:{dashed:""}}),n("Table",{ref:"table",attrs:{columns:t.columns1,data:t.classList,loading:t.loading,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"values",fn:function(e){var a=e.row;e.index;return["text"===a.type||"textarea"===a.type||"radio"===a.type||"checkbox"===a.type?n("span",[t._v(t._s(a.value))]):t._e(),"upload"===a.type&&3===a.upload_type?n("div",{staticClass:"valBox acea-row"},[a.value instanceof Array?n("div",t._l(a.value,(function(e,a){return n("div",{key:a,staticClass:"valPicbox acea-row row-column-around"},[n("div",{staticClass:"valPicbox_pic"},[n("Icon",{attrs:{type:"md-document"}})],1),n("span",{staticClass:"valPicbox_sp"},[t._v(t._s(e.filename))])])})),0):t._e()]):t._e(),"upload"===a.type&&3!==a.upload_type?n("div",{staticClass:"valBox acea-row"},[a.value instanceof Array?n("div",t._l(a.value,(function(e,a){return n("div",{key:a,staticClass:"valPicbox acea-row row-column-around"},[n("div",{staticClass:"valPicbox_pic"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.filepath,expression:"item.filepath"}]})]),n("span",{staticClass:"valPicbox_sp"},[t._v(t._s(e.filename))])])})),0):t._e()]):t._e()]}},{key:"statuss",fn:function(e){var a=e.row;e.index;return[n("i-switch",{attrs:{value:a.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(a)}},model:{value:a.status,callback:function(e){t.$set(a,"status",e)},expression:"row.status"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(e){var a=e.row,r=e.index;return[n("a",{on:{click:function(e){return t.edit(a)}}},[t._v("编辑")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.del(a,"删除分类",r)}}},[t._v("删除")])]}}])})],1),n("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:"添加配置字段","mask-closable":!1,"z-index":1,width:"700"},model:{value:t.modals2,callback:function(e){t.modals2=e},expression:"modals2"}},[n("Tabs",{staticClass:"tabsName",on:{"on-click":t.onhangeTab},model:{value:t.typeFrom.type,callback:function(e){t.$set(t.typeFrom,"type",e)},expression:"typeFrom.type"}},[n("TabPane",{attrs:{label:"文本框 ",name:"0"}}),n("TabPane",{attrs:{label:"多行文本框",name:"1"}}),n("TabPane",{attrs:{label:"单选框",name:"2"}}),n("TabPane",{attrs:{label:"文件上传",name:"3"}}),n("TabPane",{attrs:{label:"多选框",name:"4"}}),n("TabPane",{attrs:{label:"下拉框",name:"5"}})],1),0!=t.rules.length?n("form-create",{ref:"fc",staticClass:"formBox",attrs:{rule:t.rules,handleIcon:"false"},on:{"on-submit":t.onSubmit}}):t._e()],1),n("edit-from",{ref:"edits",attrs:{FromData:t.FromData},on:{submitFail:t.submitFail}})],1)},r=[],o=(n("96cf"),n("1da1")),i=n("8593"),u=n("9860"),s=n.n(u),c=n("31b4"),l=n("6b6c"),d={name:"list",components:{formCreate:s.a.$form(),editFrom:c["a"]},data:function(){return{modals2:!1,grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,formValidate:{tab_id:0,page:1,limit:20},total:0,columns1:[{title:"ID",key:"id",width:80},{title:"配置名称",key:"info",minWidth:130},{title:"字段变量",key:"menu_name",minWidth:140},{title:"字段类型",key:"type",minWidth:90},{title:"值",slot:"values",minWidth:230},{title:"是否显示",slot:"statuss",minWidth:90},{title:"操作",slot:"action",fixed:"right",minWidth:120}],FromData:null,FromRequestData:{},modalTitleSs:"",classList:[],num:0,typeFrom:{type:0,tab_id:this.$route.params.id},rules:[]}},watch:{$route:{handler:function(t,e){this.getList()},deep:!0}},mounted:function(){this.getList()},methods:{onhangeTab:function(t){this.typeFrom.type=t,this.classAdd()},classAdd:function(){var t=this;Object(i["l"])(this.typeFrom).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!1!==n.data.status){e.next=2;break}return e.abrupt("return",t.$authLapse(n.data));case 2:a=n.data||{},t.FromRequestData={action:a.action,method:a.method},t.rules=a.rules,t.modals2=!0;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},edit:function(t){var e=this;Object(i["m"])(t.id).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==n.data.status){t.next=2;break}return t.abrupt("return",e.$authLapse(n.data));case 2:a=n.data||{},e.FromRequestData={action:a.action,method:a.method},e.rules=a.rules,e.$refs.edits.modals=!0,e.modals2=!0;case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},onSubmit:function(t){var e=this;Object(l["a"])({url:this.FromRequestData.action,method:this.FromRequestData.method,data:t}).then((function(t){e.$Message.success(t.msg),setTimeout((function(){e.modals2=!1}),1e3),setTimeout((function(){e.getList()}),1500)})).catch((function(t){e.$Message.error(t.msg)}))},submitFail:function(){this.getList()},goIndex:function(){this.$router.push({path:"/admin/system/config/system_config_tab/index"})},configureAdd:function(){this.classAdd()},getList:function(){var t=this;this.loading=!0,this.formValidate.tab_id=this.$route.params.id,Object(i["n"])(this.formValidate).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=n.data,t.classList=a.list,t.total=a.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},del:function(t,e,n){var a=this,r={title:e,num:n,url:"/setting/config/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(r).then((function(t){a.$Message.success(t.msg),a.classList.splice(n,1)})).catch((function(t){a.$Message.error(t.msg)}))},onchangeIsShow:function(t){var e=this;Object(i["k"])(t.id,t.status).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(n.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))}}},f=d,m=(n("54a0"),n("2877")),p=Object(m["a"])(f,a,r,!1,null,"0a7d3eca",null);e["default"]=p.exports},"31b4":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.FromData?n("div",[n("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:t.FromData.title,"z-index":1,width:"700"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[["/marketing/coupon/save.html"===t.FromData.action?n("div",{staticClass:"radio acea-row row-middle"},[n("div",{staticClass:"name ivu-form-item-content"},[t._v("优惠券类型")]),n("Radio-group",{on:{"on-change":t.couponsType},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[n("Radio",{attrs:{label:0}},[t._v("通用券")]),n("Radio",{attrs:{label:1}},[t._v("品类券")]),n("Radio",{attrs:{label:2}},[t._v("商品券")])],1)],1):t._e()],n("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:t.config,rule:Array.from(t.FromData.rules),handleIcon:"false"},on:{"on-submit":t.onSubmit}})],2)],1):t._e()},r=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("ade3")),i=n("9860"),u=n.n(i),s=n("6b6c"),c=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"edit",components:{formCreate:u.a.$form()},computed:d({},Object(c["e"])("userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null},update:{type:Boolean,default:!0}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(t,e){200===t.status?e.url=t.data.src:this.Message.error(t.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(t){var e=this,n={};n=t,Object(s["a"])({url:this.FromData.action,method:this.FromData.method,data:n}).then((function(t){e.update&&e.$parent.getList(),e.$Message.success(t.msg),e.modals=!1,setTimeout((function(){e.$emit("submitFail")}),1e3)})).catch((function(t){e.$Message.error(t.msg)}))},cancel:function(){this.type=0}}},m=f,p=(n("3fad"),n("2877")),h=Object(p["a"])(m,a,r,!1,null,"b7e28f56",null);e["a"]=h.exports},"3f82":function(t,e,n){},"3fad":function(t,e,n){"use strict";var a=n("723a"),r=n.n(a);r.a},"54a0":function(t,e,n){"use strict";var a=n("3f82"),r=n.n(a);r.a},"723a":function(t,e,n){},8593:function(t,e,n){"use strict";n.d(e,"j",(function(){return r})),n.d(e,"h",(function(){return o})),n.d(e,"i",(function(){return i})),n.d(e,"P",(function(){return u})),n.d(e,"n",(function(){return s})),n.d(e,"l",(function(){return c})),n.d(e,"m",(function(){return l})),n.d(e,"k",(function(){return d})),n.d(e,"D",(function(){return f})),n.d(e,"v",(function(){return m})),n.d(e,"C",(function(){return p})),n.d(e,"A",(function(){return h})),n.d(e,"x",(function(){return b})),n.d(e,"y",(function(){return g})),n.d(e,"z",(function(){return v})),n.d(e,"B",(function(){return y})),n.d(e,"M",(function(){return O})),n.d(e,"Q",(function(){return _})),n.d(e,"o",(function(){return j})),n.d(e,"d",(function(){return w})),n.d(e,"f",(function(){return k})),n.d(e,"c",(function(){return x})),n.d(e,"e",(function(){return T})),n.d(e,"g",(function(){return F})),n.d(e,"r",(function(){return $})),n.d(e,"p",(function(){return P})),n.d(e,"q",(function(){return C})),n.d(e,"G",(function(){return D})),n.d(e,"H",(function(){return R})),n.d(e,"L",(function(){return S})),n.d(e,"K",(function(){return E})),n.d(e,"a",(function(){return L})),n.d(e,"b",(function(){return M})),n.d(e,"t",(function(){return I})),n.d(e,"O",(function(){return A})),n.d(e,"w",(function(){return G})),n.d(e,"S",(function(){return B})),n.d(e,"R",(function(){return z})),n.d(e,"E",(function(){return q})),n.d(e,"F",(function(){return W})),n.d(e,"u",(function(){return V})),n.d(e,"I",(function(){return J})),n.d(e,"J",(function(){return N})),n.d(e,"s",(function(){return U})),n.d(e,"N",(function(){return H}));var a=n("6b6c");function r(t){return Object(a["a"])({url:"setting/config_class",method:"get",params:t})}function o(t){return Object(a["a"])({url:"setting/config_class/create",method:"get"})}function i(t){return Object(a["a"])({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function u(t){return Object(a["a"])({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function s(t){return Object(a["a"])({url:"setting/config",method:"get",params:t})}function c(t){return Object(a["a"])({url:"setting/config/create",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function d(t,e){return Object(a["a"])({url:"setting/config/set_status/".concat(t,"/").concat(e),method:"PUT"})}function f(t){return Object(a["a"])({url:"setting/group",method:"get",params:t})}function m(t){return Object(a["a"])({url:t.url,method:t.method,data:t.datas})}function p(t){return Object(a["a"])({url:"setting/group/".concat(t),method:"get"})}function h(t,e){return Object(a["a"])({url:e,method:"get",params:t})}function b(t,e){return Object(a["a"])({url:e,method:"get",params:t})}function g(t,e){return Object(a["a"])({url:e,method:"get",params:t})}function v(t,e){return Object(a["a"])({url:e,method:"get",params:t})}function y(t){return Object(a["a"])({url:t,method:"PUT"})}function O(t){return Object(a["a"])({url:"system/log/search_admin",method:"GET"})}function _(t){return Object(a["a"])({url:"system/log",method:"GET",params:t})}function j(){return Object(a["a"])({url:"system/file",method:"GET"})}function w(){return Object(a["a"])({url:"system/backup",method:"GET"})}function k(t){return Object(a["a"])({url:"system/backup/read",method:"GET",params:t})}function x(t){return Object(a["a"])({url:"system/backup/backup",method:"put",data:t})}function T(t){return Object(a["a"])({url:"system/backup/optimize",method:"put",data:t})}function F(t){return Object(a["a"])({url:"system/backup/repair",method:"put",data:t})}function $(t){return Object(a["a"])({url:"system/backup/file_list",method:"GET"})}function P(t){return Object(a["a"])({url:"backup/download",method:"get",params:t})}function C(t){return Object(a["a"])({url:"system/backup/import",method:"POST",data:t})}function D(t){return Object(a["a"])({url:"system/file/opendir",method:"GET",params:t})}function R(t){return Object(a["a"])({url:"system/file/openfile?filepath=".concat(t),method:"GET"})}function S(t){return Object(a["a"])({url:"system/file/savefile",method:"post",data:t})}function E(t){return Object(a["a"])({url:"system/replace_site_url",method:"post",data:t})}function L(){return Object(a["a"])({url:"auth",method:"get"})}function M(t){return Object(a["a"])({url:"auth_apply",method:"post",data:t})}function I(){return Object(a["a"])({url:"setting/get_kf_adv",method:"get"})}function A(t){return Object(a["a"])({url:"setting/set_kf_adv",method:"post",data:t})}function G(){return Object(a["a"])({url:"setting/group_all",method:"get"})}function B(t){return Object(a["a"])({url:"system/version_list",method:"get",params:t})}function z(t){return Object(a["a"])({url:"system/version_crate/".concat(t),method:"get"})}function q(t){return Object(a["a"])({url:"setting/group_data/save_all",method:"POST",data:t})}function W(t){return Object(a["a"])({url:"diy/open_adv/add",method:"POST",data:t})}function V(){return Object(a["a"])({url:"diy/open_adv/info",method:"get"})}function J(t){return Object(a["a"])({url:"setting/config/get_system/".concat(t),method:"get"})}function N(t){return Object(a["a"])({url:"setting/config/save_basics",method:"POST",data:t})}function U(){return Object(a["a"])({url:"setting/get_user_agreement",method:"get"})}function H(t){return Object(a["a"])({url:"setting/set_user_agreement",method:"post",data:t})}}}]);