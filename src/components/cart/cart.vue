<template>
    <div class="cart">
        <m-header></m-header>
        <div class="main">
            <div v-if="!isLoading" class="store-content page-cart">
                <div class="gray-box">
                    <div class="title">
                        <h2>购物清单</h2>
                    </div>
                    <div class="box-inner ui-cart" v-if="false">
                        <div class="empty-label">
                            <h3>您的购物车中还没有商品</h3>
                            <a class="link" href="/">现在选购</a>
                        </div>
                    </div>
                    <div class="box-inner ui-cart" v-if="true">
                        <div class="cart-table-title">
                            <span class="name">商品信息</span>
                            <span class="operation">操作</span>
                            <span class="subtotal">小计</span>
                            <span class="num">数量</span>
                            <span class="price">单价</span>
                        </div>
                        <div class="cart-table">
                            <div class="cart-group">
                                <div class="cart-top-items">
                                    <div class="cart-items clearfix">
                                        <!-- 商品勾选组件 -->
                                        <div class="items-choose">
                                            <span @click="toggleCheck" class="blue-checkbox-new checkbox-on">
                                                <a></a>
                                            </span>
                                        </div>
                                        <!-- 商品图片 -->
                                        <div class="items-thumb">
                                            <img ng-src="http://image.smartisanos.cn/resource/0540778097a009364f2dcbb8c5286451.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp" alt="Smartisan 快充移动电源 10000mAh" src="http://image.smartisanos.cn/resource/0540778097a009364f2dcbb8c5286451.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp">
                                            <a href="#/item/100029901" title="Smartisan 快充移动电源 10000mAh" target="_blank"></a>
                                        </div>
                                        <!-- 普通商品属性信息 -->
                                        <div class="name hide-row">
                                            <div class="name-table">
                                                <a href="#/item/100029901" title="Smartisan 快充移动电源 10000mAh" target="_blank">
                                                    Smartisan 快充移动电源 10000mAh
                                                </a>
                                                <ul class="attribute">
                                                    <li>灰色</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- 删除按钮 -->
                                        <div class="operation">
                                            <a class="items-delete-btn" @click="removeCart"></a>
                                        </div>
                                        <!-- 商品价格及数量 -->
                                        <div>
                                            <div class="subtotal">¥ 199.00</div>
                                            <div class="item-cols-num">
                                                <div class="select">
                                                    <span class="down" @click="down">-</span>
                                                    <span class="num">
                                                        <input type="text" v-model="value">
                                                    </span>
                                                    <span class="up" @click="up">+</span>
                                                </div>
                                            </div>
                                            <div class="price">¥ 199.00</div>
                                        </div>
                                    </div>
                                    <div class="cart-items clearfix">
                                        <!-- 商品勾选组件 -->
                                        <div class="items-choose">
                                            <span @click="toggleCheck" class="blue-checkbox-new">
                                                <a></a>
                                            </span>
                                        </div>
                                        <!-- 商品图片 -->
                                        <div class="items-thumb">
                                            <img ng-src="http://image.smartisanos.cn/resource/0540778097a009364f2dcbb8c5286451.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp" alt="Smartisan 快充移动电源 10000mAh" src="http://image.smartisanos.cn/resource/0540778097a009364f2dcbb8c5286451.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp">
                                            <a href="#/item/100029901" title="Smartisan 快充移动电源 10000mAh" target="_blank"></a>
                                        </div>
                                        <!-- 普通商品属性信息 -->
                                        <div class="name hide-row">
                                            <div class="name-table">
                                                <a href="#/item/100029901" title="Smartisan 快充移动电源 10000mAh" target="_blank">
                                                    Smartisan 快充移动电源 10000mAh
                                                </a>
                                                <ul class="attribute">
                                                    <li>灰色</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- 删除按钮 -->
                                        <div class="operation">
                                            <a class="items-delete-btn" @click="removeCart"></a>
                                        </div>
                                        <!-- 商品价格及数量 -->
                                        <div>
                                            <div class="subtotal">¥ 199.00</div>
                                            <div class="item-cols-num">
                                                <div class="select">
                                                    <span class="down" @click="down">-</span>
                                                    <span class="num">
                                                        <input type="text" v-model="value">
                                                    </span>
                                                    <span class="up" @click="up">+</span>
                                                </div>
                                            </div>
                                            <div class="price">¥ 199.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fix-bottom" v-if="true">
                        <div class="fix-bottom-inner">
                            <div class="cart-bar-operation">
                                <div>
                                    <div class="choose-all">
                                        <span @click="toggleCheck" class="blue-checkbox-new checkbox-on">
                                            <a></a>
                                        </span>全选</div>
                                    <div class="delete-choose-goods" @click="removeChooseCart">删除选中的商品</div>
                                </div>
                            </div>
                            <div class="shipping">
                                <div class="shipping-box">
                                    <div class="shipping-total shipping-num">
                                        <h4 :class="{'highlight': checkedCount > 0}">已选择
                                            <i>0</i> 件商品</h4>
                                        <h5>共计
                                            <i>3</i> 件商品</h5>
                                    </div>
                                    <div class="shipping-total shipping-price">
                                        <h4 :class="{'highlight': totalPrice > 0}">应付总额：
                                            <span>￥</span>
                                            <i>498.00</i>
                                        </h4>
                                        <h5 class="shipping-tips">应付总额不含运费</h5>
                                    </div>
                                </div>
                                <span @click="createOrder" class="blue-main-btn" :class="{'disabled-btn': !isChecked}">
                                    <a>现在结算</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <page-loading v-if="isLoading"></page-loading>
        </div>
        <m-footer></m-footer>
    </div>
</template>

<script type="text/ecmascript-6">
import header from '../header/header';
import footer from '../footer/footer';
import pageLoading from '../loading/page-loading';

export default {
  name: 'cart',
  components: {
    'm-header': header,
    'm-footer': footer,
    'page-loading': pageLoading
  },
  computed: {
    isChecked() {
      return true;
    },
    checkedCount() {
      return 2;
    }
  },
  data() {
    return {
      isLoading: false,
      value: 1
    };
  },
  methods: {
    toggleCheck() {},
    removeChooseCart() {},
    createOrder() {},
    removeCart() {},
    up() {},
    down() {}
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.main
    background #ededed
    overflow hidden
    width 100%

.store-content
    clear both
    width 1220px
    min-height 600px
    padding 0 0 25px
    margin 0 auto

.hide-row
    overflow hidden
    word-break keep-all
    white-space nowrap
    text-overflow ellipsis

.gray-box
    overflow hidden
    background #fff
    border-radius 8px
    border 1px solid #dcdcdc
    border-color rgba(0, 0, 0, 0.14)
    box-shadow 0 3px 8px -6px rgba(0, 0, 0, 0.1)

    .title
        position relative
        z-index 10
        height 60px
        padding 0 10px 0 24px
        border-bottom 1px solid #d4d4d4
        border-radius 8px 8px 0 0
        box-shadow rgba(0, 0, 0, 0.06) 0 1px 7px
        background #f3f3f3
        background -webkit-linear-gradient(#fbfbfb, #ececec)
        background linear-gradient(#fbfbfb, #ececec)
        line-height 60px
        font-size 18px
        color #333

.blue-checkbox-new
    display inline-block
    position relative
    width 20px
    height 20px
    background url('./checkbox-new.png') no-repeat 0 -20px
    cursor pointer
    user-select none
    vertical-align middle

    &.checkbox-on
        background url('./checkbox-new.png') no-repeat 0 0

.blue-main-btn
    float right
    display block
    padding 1px
    margin 0 auto
    border-radius 9px
    background #015e94
    background linear-gradient(#688fe8, #5079e1)
    text-align center
    text-shadow rgba(255, 255, 255, 0.496094) 0 1px 0
    cursor pointer
    user-select none
    box-shadow 0 1px 3px rgba(0, 0, 0, 0.1), inset 0 -1px 2px rgba(0, 0, 0, 0.2)

    &.disabled-btn
        background #A9A9A9 !important
        background linear-gradient(#BFBFBF, #999) !important
        box-shadow none !important

        a
            background #B7B7B7
            background linear-gradient(#C3C3C3, #ABAAAA)
            box-shadow inset 0 1px 3px #CCC
            opacity 0.7
            cursor not-allowed
            transition none

    a
        display block
        border-radius 9px
        cursor pointer
        height 44px
        line-height 45px
        padding 2px 32px
        font-size 16px
        background #6C94F3
        background linear-gradient(#7EA3F5, #5A82F0)
        box-shadow none
        text-shadow none
        color #FFF
        transition all 0.3s ease

.page-cart
    padding-top 40px

    .ui-cart
        padding-bottom 91px

        .cart-table-title
            position relative
            z-index 1
            line-height 38px
            height 38px
            padding 0 0 0 30px
            font-size 12px
            background #eee
            border-bottom 1px solid #dbdbdb
            border-bottom-color rgba(0, 0, 0, 0.08)

            span
                float right
                text-align center
                color #838383

                &.name
                    float left
                    text-align left

                &.operation
                    width 137px

                &.subtotal
                    width 137px
                    text-align right

                &.num
                    width 137px

                &.price
                    width 137px

        .cart-table
            position reletive

        .cart-items
            position relative
            height 140px
            margin-left 74px
            border-top 1px dashed #eee

            &:first-child
                border-top none

            .items-choose
                position absolute
                left -74px
                top 0
                width 74px
                height 20px
                padding 60px 0 0 31px
                font-size 12px
                color #999

            .items-thumb
                position relative
                margin-top 30px
                overflow hidden
                width 80px
                height 80px
                float left

                img
                    width 80px
                    height 80px

                a
                    position absolute
                    left 0
                    right 0
                    top 0
                    bottom 0
                    border 1px solid #fff
                    border-radius 3px
                    border 0 solid rgba(255, 255, 255, 0.1)
                    box-shadow inset 0 0 0 1px rgba(0, 0, 0, 0.06)
                    cursor pointer

            .name
                float left
                width 380px
                margin-left 20px
                color #323232
                display table

                .attribute
                    color #999
                    font-size 12px
                    padding-top 4px
                    line-height 17px

                    li
                        float left
                        padding 0 10px
                        position relative

                        &:first-child
                            padding-left 0

                .name-table
                    display table-cell
                    vertical-align middle
                    height 140px

                    a
                        color #333
                        font-size 16px

            .operation
                overflow hidden
                float right
                width 137px
                text-align center
                color #666
                padding 58px 0 0
                font-size 12px
                line-height 24px

                .items-delete-btn
                    display block
                    width 24px
                    height 24px
                    margin 0 auto
                    color #C2C2C2
                    background url('./delete-btn-icon.jpg')
                    background-size 100% auto
                    transition none
                    cursor pointer

            .subtotal
                overflow hidden
                float right
                width 137px
                text-align right
                color #666
                line-height 140px
                font-weight 700

            .item-cols-num
                overflow hidden
                float right
                width 137px
                text-align center
                color #666
                padding-top 50px
                line-height 40px

            .select
                width 112px
                height 40px
                padding-top 4px
                margin 0 auto
                line-height 40px

                .down, .up
                    overflow hidden
                    float left
                    display inline-block
                    width 34px
                    height 37px
                    margin-right 5px
                    background url('./cart-updown.jpg') no-repeat
                    background-image url('./cart-updown.jpg')
                    background-size 100% auto
                    line-height 40px
                    text-indent -9999em
                    cursor pointer
                    user-select none

                .down
                    background-position 0 -60px

                .up
                    float right
                    margin 0
                    background-position 0 0

                .num
                    position relative
                    overflow hidden
                    float left
                    display inline-block
                    width 36px
                    height 18px
                    margin 7px 0 0
                    border none
                    border-radius 3px
                    line-height 18px
                    text-align center
                    font-size 14px

                    input
                        width 36px
                        height 18px
                        background-color transparent
                        border none
                        border-radius 3px
                        text-align center
                        line-height 18px
                        font-size 14px
                        padding 0

            .price
                overflow hidden
                float right
                width 137px
                text-align center
                color #666
                line-height 140px

    .gray-box
        position relative
        margin-bottom 30px

    .empty-label
        height 49px
        padding 385px 0 0 0
        background url('./cart-empty.png') no-repeat center 50px
        text-align center

        h3
            font-size 14px
            line-height 1.5
            color #8d8d8d
            margin-bottom 17px

        a
            width 151px
            line-height 38px
            height 38px
            border 1px solid #e5e5e5
            border-radius 4px
            display inline-block
            color #999
            font-size 12px
            background #f9f9f9
            background linear-gradient(#fff, #f0f0f0)

    .fix-bottom
        height 90px
        width 100%
        position absolute
        bottom 0
        z-index 1
        background-position center
        background #fdfdfd
        background -webkit-linear-gradient(#fdfdfd, #f9f9f9)
        background linear-gradient(#fdfdfd, #f9f9f9)
        border-top 1px solid #e9e9e9
        box-shadow 0 -3px 8px rgba(0, 0, 0, 0.04)
        border-radius 0 0 8px 8px

    .cart-bar-operation
        float left
        padding 35px 26px
        font-size 12px

    .shipping
        display inline-block
        float right
        padding 20px 30px

    .shipping-box
        display inline-block
        padding-top 1px
        margin-right 10px
        line-height 1.3

        .shipping-total
            display inline-block
            border-left 1px solid #e1e1e1
            padding 0 20px

            &:first-child
                border none

            h4
                color #323232
                font-size 100%
                font-weight 400

                i
                    font-size 18px
                    font-weight 700
                    font-style normal

            h5
                color #959595
                font-size 100%
                font-weight 400

                i
                    font-size 16px
                    font-weight 700
                    font-style normal

            &.shipping-num
                text-align right

                i
                    width 28px
                    display inline-block
                    text-align center

            .highlight
                i
                    color #d44d44

    .choose-all, .delete-choose-goods, .selected-count
        float left
        height 20px
        line-height 20px
        cursor pointer
        position relative

    .choose-all
        .blue-checkbox-new
            float left
            margin-right 9px

    .delete-choose-goods
        position relative
        margin-left 21px
        color #bbb

        &:before
            content ''
            position absolute
            left -11px
            top 4px
            height 12px
            width 1px
            background #e1e1e1
            cursor default
</style>
