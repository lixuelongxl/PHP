(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59df07e2"],{"1f7b":function(t,e,i){"use strict";var o=i("6265"),n=i.n(o);n.a},6265:function(t,e,i){},7174:function(t,e,i){"use strict";var o=i("cc90"),n=i.n(o);n.a},7624:function(t,e,i){"use strict";e["a"]=["em-smile","em-laughing","em-blush","em-smiley","em-relaxed","em-smirk","em-heart_eyes","em-kissing_heart","em-kissing_closed_eyes","em-flushed","em-relieved","em-satisfied","em-grin","em-wink","em-stuck_out_tongue_winking_eye","em-stuck_out_tongue_closed_eyes","em-grinning","em-kissing","em-kissing_smiling_eyes","em-stuck_out_tongue","em-sleeping","em-worried","em-frowning","em-anguished","em-open_mouth","em-grimacing","em-confused","em-hushed","em-expressionless","em-unamused","em-sweat_smile","em-sweat","em-disappointed_relieved","em-weary","em-pensive","em-disappointed","em-confounded","em-fearful","em-cold_sweat","em-persevere","em-cry","em-sob","em-joy","em-astonished","em-scream","em-tired_face","em-angry","em-rage","em-triumph","em-sleepy","em-yum","em-mask","em-sunglasses","em-dizzy_face","em-imp","em-smiling_imp","em-neutral_face","em-no_mouth","em-innocent","em-alien"]},cc90:function(t,e,i){},eea8:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"chat-room"},[i("div",{staticClass:"room",class:{win:!t.chatOptions.popup},on:{click:t.roomClick}},[i("div",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"head"},[i("div",{staticClass:"image"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.serviceData&&t.serviceData.avatar,expression:"serviceData && serviceData.avatar"}]})]),i("div",{staticClass:"name"},[t._v(t._s(t.serviceData&&t.serviceData.nickname))]),i("div",{class:["iconfont",t.muted?"icon-shengyinjingyinxianxing":"icon-shengyinyinliang"],on:{click:function(e){e.stopPropagation(),t.muted=!t.muted}}}),i("div",{staticClass:"iconfont icon-guanbi5",on:{click:function(e){return e.stopPropagation(),t.close(e)}}})]),i("div",{staticClass:"main"},[i("div",{staticClass:"chat"},[i("div",{ref:"record",staticClass:"record",on:{scroll:t.onScroll}},[i("div",{ref:"scrollBox",attrs:{id:"chat_scroll"}},[i("Spin",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]},[i("Icon",{staticClass:"demo-spin-icon-load",attrs:{type:"ios-loading",size:"18"}}),i("div",[t._v("Loading")])],1),i("ul",[t._l(t.records,(function(e){return[i("li",{key:e.id,class:{right:e.uid===t.serviceData.tourist_uid},attrs:{id:"chat_"+e.id}},[e.show?i("div",{staticClass:"time-tag"},[t._v("\n                                            "+t._s(e.add_time)+"\n                                        ")]):t._e(),i("div",{staticClass:"avatar"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}]})]),i("div",{ref:"chatContent",refInFor:!0,staticClass:"content"},[1===e.msn_type?i("div",{staticClass:"text",domProps:{innerHTML:t._s(e.msn)}}):t._e(),2===e.msn_type?i("div",{staticClass:"image"},[i("div",{staticClass:"text"},[i("i",{class:"em "+e.msn})])]):t._e(),3===e.msn_type?i("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"image"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.msn,expression:"item.msn"}]})]):t._e(),5===e.msn_type?i("div",{staticClass:"goods"},[i("div",{staticClass:"thumb"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.productInfo.image,expression:"item.productInfo.image"}]})]),i("div",{staticClass:"intro"},[i("div",{staticClass:"name"},[t._v("\n                                                        "+t._s(e.productInfo.store_name)+"\n                                                    ")]),i("div",{staticClass:"attr"},[i("span",[t._v("库存："+t._s(e.productInfo.stock))]),i("span",[t._v("销量："+t._s(e.productInfo.sales))])]),i("div",{staticClass:"group"},[i("div",{staticClass:"money"},[t._v("\n                                                            ￥"+t._s(e.productInfo.price)+"\n                                                        ")]),i("span",{staticStyle:{cursor:"pointer"},on:{click:function(i){return i.stopPropagation(),t.onLook(e.productInfo.id)}}},[t._v("查看商品 >")])])])]):t._e(),6===e.msn_type?t._l(e.orderInfo.cartInfo,(function(o){return i("div",{key:o.id,staticClass:"order"},[i("div",{staticClass:"thumb"},[i("img",{attrs:{src:o.productInfo.image}})]),i("div",{staticClass:"intro"},[i("div",{staticClass:"name"},[t._v("\n                                                            订单ID："+t._s(e.orderInfo.order_id)+"\n                                                        ")]),i("div",{staticClass:"attr"},[t._v("商品数量："+t._s(o.cart_num))]),i("div",{staticClass:"group"},[i("div",{staticClass:"money"},[t._v("\n                                                                ￥"+t._s(o.productInfo.price)+"\n                                                            ")]),i("nuxt-link",{attrs:{target:"_blank",to:{path:"/order_detail",query:{orderId:e.orderInfo.order_id}}}},[t._v("查看订单 >")])],1)])])})):t._e()],2)])]}))],2)],1)]),i("div",{staticClass:"editor"},[i("div",{staticClass:"editor-hd"},[i("div",[i("button",{staticClass:"emoji-btn",attrs:{title:"表情"},on:{click:function(e){return e.stopPropagation(),t.emojiSwitch(e)}}},[i("span",{staticClass:"iconfont iconbiaoqing1"})]),t.kufuToken?i("button",{attrs:{title:"图片"}},[i("Upload",{attrs:{"show-upload-list":!1,action:t.uploadAction,"before-upload":t.beforeUpload,format:["jpg","jpeg","png","gif"],"on-format-error":t.handleFormatError,data:t.uploadData,"on-success":t.uploadSuccess,"on-error":t.uploadError}},[i("span",{staticClass:"iconfont icontupian1"})])],1):t._e()]),t.emojiShow?i("div",{staticClass:"emoji-panel"},t._l(t.emojiList,(function(e,o){return i("i",{key:o,staticClass:"em",class:e,on:{click:function(i){return i.stopPropagation(),t.selectEmoji(e)}}})})),0):t._e()]),i("div",{staticClass:"editor-bd"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.chatCont,expression:"chatCont"}],attrs:{placeholder:"请输入文字内容"},domProps:{value:t.chatCont},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ctrlEnter(e)},input:function(e){e.target.composing||(t.chatCont=e.target.value)}}})]),i("div",{staticClass:"editor-ft"},[i("button",{attrs:{disabled:!t.chatCont},on:{click:function(e){return e.stopPropagation(),t.sendMessage(e)}}},[t._v("发送")])])])]),i("div",{staticClass:"notice"},[t.notice?i("div",{staticClass:"rich",domProps:{innerHTML:t._s(t.notice)}}):t._e(),t._m(0)])]),i("audio",{ref:"audio",attrs:{src:t.audioSrc}})]),t.change?i("feed-back",{attrs:{change:t.change},on:{closeChange:function(e){return t.closeChange(e)}}}):t._e()],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"copy"},[i("a",{attrs:{href:"http://www.crmeb.com/",target:"_blank"}},[t._v("CRMEB提供技术支持")])])}],s=i("2909"),a=(i("28a5"),i("a481"),i("ac6a"),i("f9db"),i("7624")),r=i("49ea"),c=i("d708"),d=i("a78e"),u=i.n(d),l=i("42e3"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"feedback",class:!0===t.change?"on":""},[i("div",{staticClass:"feedback-header acea-row"},[i("span",{staticClass:"sp1"},[t._v("商城客服已离线")]),i("div",[i("Icon",{attrs:{type:"md-close",color:"#fff",size:"18"},on:{click:t.close}})],1)]),t.isShow?t._e():i("div",[i("div",{staticClass:"feedback-conent mb20"},[i("div",{staticClass:"ft",domProps:{textContent:t._s(t.notice)}})]),i("div",[i("Form",{ref:"formItem",staticClass:"pl15",attrs:{model:t.formItem,rules:t.ruleValidate}},[i("FormItem",{attrs:{prop:"rela_name"}},[i("Input",{attrs:{placeholder:"请输入您的姓名"},model:{value:t.formItem.rela_name,callback:function(e){t.$set(t.formItem,"rela_name",e)},expression:"formItem.rela_name"}})],1),i("FormItem",{attrs:{prop:"phone"}},[i("Input",{attrs:{placeholder:"请输入您的联系电话"},model:{value:t.formItem.phone,callback:function(e){t.$set(t.formItem,"phone",e)},expression:"formItem.phone"}})],1),i("FormItem",{attrs:{prop:"content"}},[i("Input",{staticClass:"mb10",attrs:{type:"textarea",placeholder:"请输入留言内容"},model:{value:t.formItem.content,callback:function(e){t.$set(t.formItem,"content",e)},expression:"formItem.content"}})],1),i("FormItem",[i("Button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formItem")}}},[t._v("提交留言")])],1)],1)],1)]),t.isShow?i("div",{staticClass:"sure"},[i("div",{staticClass:"sure-yuan"},[i("Icon",{attrs:{type:"md-checkmark",color:"#fff",size:"30"}})],1),i("div",{staticClass:"sp1 mb10"},[t._v("提交成功")]),i("div",{staticClass:"sp2 mb30"},[t._v("您的信息提交成功，我们会尽快与您取得联系！")]),i("Button",{attrs:{type:"primary"},on:{click:t.close}},[t._v("好的")])],1):t._e()]),i("div",{directives:[{name:"show",rawName:"v-show",value:!0===t.change,expression:"change === true"}],staticClass:"maskModel",on:{touchmove:function(t){t.preventDefault()}}})])},f=[],h=(i("7f7f"),{name:"feedback",props:{change:Boolean},data:function(){return{isShow:!1,formItem:{rela_name:"",content:"",phone:""},notice:"",ruleValidate:{rela_name:[{required:!0,message:"请输入您的姓名",trigger:"blur"}],content:[{required:!0,message:"请输入留言内容",trigger:"blur"}],phone:[{required:!0,message:"请填写手机号码",trigger:"change"},{pattern:/^1[3456789]\d{9}$/,message:"手机号码格式不正确",trigger:"blur"}]}}},mounted:function(){this.getNotice()},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate((function(t){t&&Object(l["i"])(e.formItem).then((function(t){e.isShow=!0})).cache((function(t){e.$Message.error(t.msg)}))}))},close:function(){this.$emit("closeChange",!1)},getNotice:function(){var t=this;Object(l["h"])().then((function(e){t.notice=e.data.feedback})).cache((function(e){t.$Message.error(e.msg)}))}}}),p=h,v=(i("7174"),i("2877")),g=Object(v["a"])(p,m,f,!1,null,"7dea573a",null),_=g.exports,k=function(t,e){e=1*e||1;var i=[];return t.forEach((function(t,o){o%e===0&&i.push([]),i[i.length-1].push(t)})),i},w={name:"ChatRoom",auth:!1,components:{feedBack:_},props:{chatOptions:{type:Object,default:function(){return{show:!1}}}},directives:{drag:{inserted:function(t){var e=0,i=0,o=0,n=0,s=!1;t.onmousedown=function(a){return e=a.clientX,i=a.clientY,o=t.parentNode.offsetLeft,n=t.parentNode.offsetTop,s=!0,t.style.cursor="move",window.onmousemove=function(a){if(0!=s){var r=a.clientX,c=a.clientY,d=r-(e-o),u=c-(i-n);t.parentNode.style.left=d+"px",t.parentNode.style.top=u+"px"}},window.onmouseup=function(){s=!1,t.style.cursor="default",window.onmousemove=null,window.onmouseup=null},!1}}}},data:function(){return{locations:"".concat(location.origin),change:!1,emojiGroup:k(a["a"],20),emojiList:a["a"],emojiShow:!1,recordList:[],limit:20,loading:!1,finished:!1,chatCont:"",service:null,serviceData:{},uploadAction:"",notice:"",audio:null,muted:!1,audioSrc:"",upperId:0,uploadData:{},is_tourist:1,text:"",isLoad:!1,page:1,tourist_avatar:"",tourist_uid:"",toUid:"",kufuToken:""}},watch:{muted:function(t){this.audio.muted=t}},computed:{records:function(){var t=this;return this.recordList.map((function(e,i){return i&&new Date(e.add_time)-new Date(t.recordList[i-1].add_time)>=3e5?e.show=!0:e.show=!1,e}))}},created:function(){-1!=location.href.indexOf("kefu")&&(this.uploadAction=c["a"].apiBaseURL.replace(/adminapi/,"kefuapi")+"/tourist/upload");var t=u.a.get("auth._token.local1");this.kufuToken=t?t.split("Bearer ")[1]:""},mounted:function(){var t=this,e=this;window.addEventListener("click",(function(){e.emojiShow=!1})),this.$wechat._isMobile()&&this.$router.replace("/kefu/mobile_user_chat"),this.getNotice(),r["a"].then((function(e){t.kufuToken&&e.send({type:"login",data:t.kufuToken}),t.getService(),e.$on(["reply","chat"],(function(e){1==e.msn_type&&(e.msn=t.replace_em(e.msn)),t.recordList.push(e),setTimeout((function(e){t.$nextTick((function(){this.$refs.record.scrollTop=this.$refs.record.scrollHeight-this.$refs.record.clientHeight}))}),300)})),e.$on("to_transfer",(function(i){t.toUid=i.toUid,e.send({data:{id:t.toUid},type:"to_chat"})})),e.$on("socket_error",(function(){t.$Message.error("连接失败")})),e.$on("err_tip",(function(e){t.$Message.error(e.msg)})),e.$on("success",(function(e){t.is_tourist=0}))})),this.text=this.replace_em("[em-smiling_imp]")},beforeDestroy:function(){this.socket.close()},methods:{onLook:function(t){window.open("".concat(location.origin,"/home/goods_detail/").concat(t))},closeChange:function(t){this.change=t},sendMsg:function(t,e){var i={type:"chat",data:{msn:t,type:e,is_tourist:this.is_tourist,to_uid:this.toUid,tourist_uid:this.tourist_uid,tourist_avatar:this.tourist_avatar,form_type:this.$wechat.isWeixin()?1:3}};r["a"].then((function(t){t.send(i)}))},getService:function(){var t=this;Object(l["L"])({token:this.kufuToken||""}).then((function(e){t.serviceData=e.data,t.upperId=0,t.toUid=e.data.uid,t.tourist_uid=e.data.tourist_uid,t.tourist_avatar=e.data.tourist_avatar;var i={data:{id:e.data.uid,tourist_uid:t.tourist_uid},type:"to_chat"};r["a"].then((function(t){t.send(i)})),t.kufuToken&&t.getRecordList()})).catch((function(e){t.$Message.error(e.msg),t.change=!0}))},roomClick:function(t){},ctrlEnter:function(t){13==t.keyCode&&t.preventDefault(),this.chatCont.trim()&&this.sendMessage()},close:function(){this.$emit("chat-close")},selectEmoji:function(t){var e="[".concat(t,"]");this.chatCont+=e,this.emojiShow=!1},replace_em:function(t){return t=t.replace(/\[em-([a-z_]*)\]/g,"<span class='em em-$1'/></span>"),t},onScroll:function(t){t.target.scrollTop<=30&&this.kufuToken&&this.getRecordList()},getRecordList:function(){var t=this;this.loading||this.finished||(this.loading=!0,Object(l["e"])({uid:this.serviceData.uid,limit:this.limit,upperId:this.upperId,token:this.kufuToken}).then((function(e){if(0===e.data.length)return t.loading=!1;e.data.forEach((function(e){1==e.msn_type&&(e.msn=t.replace_em(e.msn))}));var i="";i=0==t.upperId?"chat_".concat(e.data[e.data.length-1].id):"chat_".concat(t.recordList[0].id),t.recordList=[].concat(Object(s["a"])(e.data),Object(s["a"])(t.recordList)),t.upperId=e.data.length>0?e.data[0].id:0,t.loading=!1,t.finished=e.data.length<t.limit,t.$nextTick((function(){this.setPageScrollTo(i)}))})).catch((function(e){t.$Message.error(e.msg),t.loading=!1})))},setPageScrollTo:function(t){var e=this;this.$nextTick((function(){if(t)setTimeout((function(){var i=parseFloat(document.getElementById(t).offsetTop)-60;e.$refs.record.scrollTop=i}),0);else{var i=document.querySelector("#chat_scroll");e.$refs.record.scrollTop=i.offsetHeight,setTimeout((function(t){e.$refs.record.scrollTop!=e.$refs.scrollBox.offsetHeight&&(e.$refs.record.scrollTop=document.querySelector("#chat_scroll").offsetHeight)}),300)}}))},emojiSwitch:function(){this.emojiShow=!this.emojiShow},sendMessage:function(){this.sendMsg(this.chatCont,1),this.chatCont=""},chat:function(t){var e=this;t.uid!=this.$auth.user.uid&&this.audio&&this.audio.play(),this.recordList.push(t),this.$nextTick((function(){e.$refs.record.scrollTop=e.$refs.record.scrollHeight-e.$refs.record.clientHeight}))},sendGoods:function(){var t=this;this.chatOptions.goodsId&&r["a"].then((function(e){e.send({data:{msn:t.chatOptions.goodsId,type:5,to_uid:t.toUid},type:"to_chat"})}))},sendOrder:function(){var t=this;this.chatOptions.orderId&&r["a"].then((function(e){e.send({data:{msn:t.chatOptions.orderId,type:6,to_uid:t.toUid},type:"to_chat"})}))},chatEnd:function(){navigator.userAgent.indexOf("MSIE")>0?navigator.userAgent.indexOf("MSIE 6.0")>0?(window.opener=null,window.close()):(window.open("","_top"),window.top.close()):navigator.userAgent.indexOf("Firefox")>0?window.location.href="about:blank ":(window.opener=null,window.open("","_self",""),window.close())},getNotice:function(){var t=this;Object(l["j"])().then((function(e){t.notice=e.data.content}))},beforeUpload:function(t){var e=this;this.uploadData={filename:t,token:this.kufuToken};var i=new Promise((function(t){e.$nextTick((function(){t(!0)}))}));return i},handleFormatError:function(t){this.$Message.error("上传图片只能是 jpg、jpg、jpeg、gif 格式!")},uploadSuccess:function(t){this.sendMsg(t.data.url,3)},uploadError:function(t){this.$Message.error(t)}}},y=w,C=(i("1f7b"),Object(v["a"])(y,o,n,!1,null,"523d8c80",null));e["default"]=C.exports},f9db:function(t,e,i){}}]);