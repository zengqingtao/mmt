(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/productDetails/detail"],{"20ed":function(t,e,o){"use strict";var a=o("80bd"),r=o.n(a);r.a},3310:function(t,e,o){"use strict";o.r(e);var a=o("d113"),r=o.n(a);for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);e["default"]=r.a},"80bd":function(t,e,o){},a41f:function(t,e,o){"use strict";o.r(e);var a=o("bef0"),r=o("3310");for(var i in r)"default"!==i&&function(t){o.d(e,t,function(){return r[t]})}(i);o("20ed");var n=o("2877"),u=Object(n["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},bef0:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=(t._self._c,Number(t.goodList.shop_price)),a=Number(t.goodList.market_price),r=Number(t.goodList.shop_price),i=Number(t.goodList.market_price),n=Number(t.goodList.market_price),u=Number(t.goodList.shop_price);t.$mp.data=Object.assign({},{$root:{m0:o,m1:a,m2:r,m3:i,m4:n,m5:u}})},r=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return r})},d113:function(t,e,o){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{indicatorDots:!0,autoplay:!0,interval:3e3,goodList:[]}},onLoad:function(){this.getGoodList()},methods:{getGoodList:function(){var e=this;t.request({url:this.$globalVariable.hostUrl+"/goods/goodsInfo",method:"POST",data:{goods_id:2915},header:this.$globalVariable.requestHeader,success:function(t){e.goodList=t.data.result,console.log(o("123res:",e.goodList," at pages\\productDetails\\detail.vue:128"))},fail:function(t){}})}}};e.default=a}).call(this,o("6e42")["default"],o("0de9")["default"])}},[["d639","common/runtime","common/vendor"]]]);