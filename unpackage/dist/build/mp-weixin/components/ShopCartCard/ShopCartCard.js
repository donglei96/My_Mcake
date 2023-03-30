(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ShopCartCard/ShopCartCard"],{"01f2":function(o,e,t){"use strict";var r=t("5039"),n=t.n(r);n.a},1209:function(o,e,t){"use strict";var r=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(t("2eee")),c=r(t("c973")),a=r(t("9523")),i=t("1faf"),u=t("26cb");function s(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.push.apply(t,r)}return t}function d(o){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){(0,a.default)(o,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(t,e))}))}return o}var l={name:"UniappDemoShopCartCard",props:{good:{type:Object,required:!0},type:{type:String,default:"add"}},data:function(){return{isShowPicker:!1,curGoods:null,oldGoodsData:{id:this.good.id,count:this.good.count}}},computed:d(d(d({},(0,u.mapState)("user",{userId:function(o){return o.userId}})),(0,u.mapState)("shopCart",{addMoreList:function(o){return o.addMoreList},cartList:function(o){return o.cartList}})),{},{columns:function(){return this.good.list.length>0?[this.good.list]:(console.log([[this.good]]),[[this.good]])},typeChoiceText:function(){return console.log(this.curGoods),"".concat(this.curGoods.spec," ").concat(this.curGoods.weight?this.curGoods.weight:""," ").concat(this.curGoods.edible?"-"+this.curGoods.edible:"")},fitting:function(){return""===this.curGoods.fittings?"":"string"===typeof this.curGoods.fittings?this.curGoods.fittings:Array.isArray(this.curGoods.fittings)&&0===this.curGoods.fittings.length?"":"含".concat(this.curGoods.fittings[51].num).concat(this.curGoods.fittings[51].uname).concat(this.curGoods.fittings[51].name)}}),created:function(){this.curGoods=Object.create(this.good),void 0===this.good.count&&(console.log("%c shopcartcard.vue:传入的商品数据不携有count属性, 属于添加逻辑","padding:2px 4px;background-color:green;color:yellow;"),Object.defineProperty(this.curGoods,"count",{configurable:!0,enumerable:!0,writable:!0,value:1}))},mounted:function(){},methods:d(d(d(d({},(0,u.mapMutations)("shopCart",["reWriteCartList","updateCartListItem"])),(0,u.mapActions)(["chkAndGetToken"])),(0,u.mapActions)("shopCart",["initShopCart","getAddMore"])),{},{valChange:function(o){console.log("%c shopCartCard.vue:监听到对数量控制器操作, 值为:","color:white;background-color:black;padding:2px 4px;"),console.log(o.value),this.curGoods.count=o.value},showPicker:function(){this.isShowPicker=!0},close:function(){this.isShowPicker=!1},confirm:function(o){this.curGoods=Object.create(o.value[0]),void 0===this.good.count&&(console.log("%c shopcartcard.vue:传入的商品数据不携有count属性, 属于添加逻辑","padding:2px 4px;background-color:green;color:yellow;"),Object.defineProperty(this.curGoods,"count",{configurable:!0,enumerable:!0,writable:!0,value:1})),this.isShowPicker=!1},closeCard:function(){this.$bus.$emit("hiddenShopCartCard"),console.log("%c shopCartCard.vue:触发中央总线事件hiddenShopCartCard","color:white;background-color:black;padding:2px 4px;")},addShopCart:function(){var o=this;return(0,c.default)(n.default.mark((function e(){var t,r,c,a,u;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.$bus.$emit("showLoadingPage"),console.log("%c shopCartCard.vue:触发中央总线事件showLoadingPage","color:white;background-color:black;padding:2px 4px;"),e.next=4,o.chkAndGetToken().catch((function(o){return o}));case 4:if(t=e.sent,r="",1!==t.code){e.next=10;break}r=t.data["access-token"],e.next=11;break;case 10:return e.abrupt("return",console.error("shopCartCard.vue页面获取access-token失败"));case 11:if("modify"!==o.type){e.next=19;break}return console.log('%c shopCartCard.vue:检测到type值为"modify",执行修改逻辑',"padding:2px 4px;background-color:green;color:yellow;"),e.next=15,(0,i.reqModifyShopCartGoods)(o.userId,o.oldGoodsData.id,o.curGoods.id,o.curGoods.count,r).catch((function(o){return o}));case 15:c=e.sent,1===c.code?(o.reWriteCartList(c.data),o.$bus.$emit("addShopCartSuccess","修改购物车成功"),console.log("%c shopCartCard.vue:触发中央总线事件addShopCartSuccess","color:white;background-color:black;padding:2px 4px;")):(o.$bus.$emit("showToast",{type:"error",msg:c.msg||"修改购物车数据失败"}),console.log("%c shopCartCard.vue:触发中央总线事件showToast","color:white;background-color:black;padding:2px 4px;")),e.next=29;break;case 19:return console.log('%c shopCartCard.vue:检测到type值为"add",执行添加逻辑',"padding:2px 4px;background-color:green;color:yellow;"),e.next=22,(0,i.reqAddShopCart)(o.userId,o.curGoods.id,o.curGoods.count,r).catch((function(o){return o}));case 22:if(a=e.sent,1===a.code?(console.log(a.data),o.reWriteCartList(a.data),o.$bus.$emit("addShopCartSuccess","添加购物车成功"),console.log("%c shopCartCard.vue:触发中央总线事件addShopCartSuccess","color:white;background-color:black;padding:2px 4px;")):(o.$bus.$emit("addShopCartFail",a.msg),console.log("%c shopCartCard.vue:触发中央总线事件addShopCartFail","color:white;background-color:black;padding:2px 4px;")),0!==o.addMoreList.length){e.next=29;break}return e.next=27,o.getAddMore().catch((function(o){return o}));case 27:u=e.sent,1!==u.code&&(o.$bus.$emit("showToast",{type:"error",msg:u.msg}),console.log("%c shopCartCard.vue:触发中央总线事件showToast","color:white;background-color:black;padding:2px 4px;"));case 29:o.$bus.$emit("hiddenShopCartCard"),console.log("%c shopCartCard.vue:触发中央总线事件hiddenShopCartCard","color:white;background-color:black;padding:2px 4px;");case 31:case"end":return e.stop()}}),e)})))()}})};e.default=l},5039:function(o,e,t){},"5c90":function(o,e,t){"use strict";t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return r}));var r={"u-Image":function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u--image/u--image")]).then(t.bind(null,"de43"))},uLoadingIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(t.bind(null,"21b1"))},"u-Text":function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u--text/u--text")]).then(t.bind(null,"206c"))},uNumberBox:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-number-box/u-number-box")]).then(t.bind(null,"3bd0"))},uButton:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-button/u-button")]).then(t.bind(null,"a348"))},uPicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-picker/u-picker")]).then(t.bind(null,"5fcd"))}},n=function(){var o=this.$createElement,e=(this._self._c,Number(this.curGoods.index));this.$mp.data=Object.assign({},{$root:{m0:e}})},c=[]},a1ca:function(o,e,t){"use strict";t.r(e);var r=t("1209"),n=t.n(r);for(var c in r)["default"].indexOf(c)<0&&function(o){t.d(e,o,(function(){return r[o]}))}(c);e["default"]=n.a},eed2:function(o,e,t){"use strict";t.r(e);var r=t("5c90"),n=t("a1ca");for(var c in n)["default"].indexOf(c)<0&&function(o){t.d(e,o,(function(){return n[o]}))}(c);t("01f2");var a=t("f0c5"),i=Object(a["a"])(n["default"],r["b"],r["c"],!1,null,"0ecdc63a",null,!1,r["a"],void 0);e["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ShopCartCard/ShopCartCard-create-component',
    {
        'components/ShopCartCard/ShopCartCard-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("eed2"))
        })
    },
    [['components/ShopCartCard/ShopCartCard-create-component']]
]);