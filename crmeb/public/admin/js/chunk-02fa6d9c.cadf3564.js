(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02fa6d9c"],{"59d9":function(t,e,n){},"5c01":function(t,e,n){"use strict";var i=n("59d9"),a=n.n(i);a.a},ec81:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Form",{attrs:{"label-width":80},nativeOn:{submit:function(t){t.preventDefault()}}},[n("FormItem",{attrs:{label:"协议内容："}},[n("WangEditor",{attrs:{content:t.agreement.content},on:{editorContent:t.getEditorContent}})],1),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:t.memberAgreementSave}},[t._v("保存")])],1)],1),t.spinShow?n("Spin",{attrs:{fix:""}}):t._e()],1)],1)},a=[],r=n("a069"),s=n("c24f"),o={components:{WangEditor:r["a"]},data:function(){return{ueConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},agreement:{content:"",id:0},spinShow:!1}},created:function(){this.memberAgreement()},methods:{getEditorContent:function(t){this.agreement.content=t},memberAgreement:function(){var t=this;this.spinShow=!0,Object(s["a"])().then((function(e){t.spinShow=!1;var n=e.data,i=(n.title,n.content),a=(n.status,n.id);t.agreement.content=i,t.agreement.id=a||0})).catch((function(e){t.$Message.error(e),t.spinShow=!1}))},memberAgreementSave:function(){var t=this;this.$Spin.show(),Object(s["b"])(this.agreement).then((function(e){t.$Spin.hide(),t.$Message.success("保存成功"),t.memberAgreement()})).catch((function(e){t.$Spin.hide(),t.$Message.error(e)}))}}},c=o,m=(n("5c01"),n("2877")),d=Object(m["a"])(c,i,a,!1,null,"6254bfc0",null);e["default"]=d.exports}}]);