<template>
    <div class="payment">
        <m-header></m-header>
        <div class="main">
            <div class="content">
                <div class="gray-box clearfix">
                    <div class="title">
                        <h2>支付订单</h2>
                    </div>
                    <div class="box-inner order-info">
                        <h3>提交订单成功</h3>
                        <p class="payment-detail">请在
                            <span>24 小时内</span>完成支付，超时订单将自动取消。</p>
                        <p class="payment-detail">我们将在您完成支付后的 72 小时内发货</p>
                    </div>
                    <div class="box-inner choose-payment-box">
                        <ul class="tag-list clearfix">
                            <li class="tag-item" :class="{'select-tag':curTag==='online'}" @click="changePayment('online')">线上支付</li>
                            <li class="tag-item" :class="{'select-tag':curTag==='installment'}" @click="changePayment('installment')">分期付款</li>
                        </ul>
                        <ul class="con-list clearfix">
                            <li v-show="curTag==='online'">
                                <ul class="payment-list clearfix">
                                    <li :class="{selected:curOnlinePayment==='alipay'}" @click="changeOnlinePayment('alipay')">
                                        <img src="./alipay.png">
                                    </li>
                                    <li :class="{selected:curOnlinePayment==='weixinpay'}" @click="changeOnlinePayment('weixinpay')">
                                        <img src="./weixinpay.png">
                                    </li>
                                </ul>
                                <div class="payment-code-panel" :class="{'mg-left':curOnlinePayment==='weixinpay'}">
                                    <div class="payment-code-content" style="margin-left:28px">
                                        <div class="code-viewer">
                                            <img src="./qrcode.jpg">
                                        </div>
                                        <p>请使用{{payment}}扫一扫</p>
                                        <p>扫描二维码支付</p>
                                    </div>
                                </div>
                            </li>
                            <li v-show="curTag==='installment'">
                                <div class="installment-panel clearfix">
                                    <span>这里是花呗分期</span>
                                    <img src="./pay-mayihuabei.png">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="box-inner payment-checkout-panel clearfix">
                        <span class="prices"> 应付金额：
                            <em>
                                <span>¥ </span>797.00</em>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <m-footer></m-footer>
    </div>
</template>

<script type="text/ecmascript-6">
import header from '../header/header';
import footer from '../footer/footer';

export default {
  name: 'payment',
  components: {
    'm-header': header,
    'm-footer': footer
  },
  data() {
    return {
      curTag: 'online',
      curOnlinePayment: 'alipay',
      payment: '支付宝'
    };
  },
  methods: {
    changePayment(index) {
      this.curTag = index;
    },
    changeOnlinePayment(index) {
      this.curOnlinePayment = index;
      if (index === 'alipay') {
        this.payment = '支付宝';
      } else {
        this.payment = '微信';
      }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.fn-hide
    display none

.main
    min-height 527px

    .content
        clear both
        width 1220px
        min-height 600px
        padding 39px 0 25px
        margin 0 auto

        .gray-box
            margin 0 auto 60px
            overflow hidden
            border 1px solid #D1D1D1
            border-color rgba(0, 0, 0, 0.14)
            border-radius 8px
            box-shadow 0 3px 8px -6px rgba(0, 0, 0, 0.1)
            background #FFF

            .title
                height 60px
                padding 0 10px 0 28px
                background #F5F5F5
                background linear-gradient(#FFF, #F5F5F5)
                border-bottom 1px solid #DCDCDC
                border-radius 10px 10px 0 0
                box-shadow 0 1px 7px rgba(0, 0, 0, 0.06)
                line-height 60px
                color #646464

                h2
                    font-size 18px
                    font-weight 400
                    color #626262

            .order-info
                padding 60px 0 55px
                color #333

                h3
                    padding-bottom 14px
                    line-height 36px
                    text-align center
                    font-size 36px
                    color #212121
                    font-weight 500

                .payment-detail
                    text-align center
                    line-height 24px
                    font-size 14px
                    color #999

                    span
                        font-weight bolder
                        color #d44d44

            .choose-payment-box
                padding 0 30px 30px

                .tag-list
                    border-left 1px solid #e5e5e5
                    border-radius 6px 0 0

                    li
                        width 152px

                    .tag-item
                        float left
                        position relative
                        height 41px
                        background #fafafa
                        border-top 1px solid #e5e5e5
                        border-right 1px solid #e5e5e5
                        border-radius 6px 6px 0 0
                        line-height 41px
                        text-align center
                        color #9f9f9f
                        user-select none
                        cursor pointer

                        &.select-tag
                            position relative
                            z-index 10
                            background #FFF
                            border-bottom 1px solid #FFF
                            font-weight 700
                            color #626262

                .con-list
                    margin-top -1px
                    border 1px solid #E5E5E5
                    border-radius 0 6px 6px

                    .payment-list
                        padding 10px 28px 28px

                        li
                            float left
                            width 175px
                            height 50px
                            margin-top 20px
                            margin-right 10px
                            background #FAFAFA
                            border 1px solid #E5E5E5
                            border-radius 6px
                            box-sizing border-box
                            cursor pointer

                            img
                                display block
                                height 34px
                                margin 8px auto

                            &.selected
                                position relative
                                background #FFF
                                border-color #6A8FE5

                    .payment-code-panel
                        margin-top -10px
                        margin-bottom 28px

                        &.mg-left
                            margin-left 185px

                        .payment-code-content
                            position relative
                            width 175px
                            height 230px
                            padding 20px
                            box-sizing border-box
                            border 1px solid #E5E5E5
                            border-radius 6px
                            text-align center
                            box-shadow 0 1px 4px rgba(0, 0, 0, 0.1)

                            &:before
                                position absolute
                                content ''
                                width 0
                                height 0
                                top -11px
                                left 75px
                                border-left 11px solid transparent
                                border-right 11px solid transparent
                                border-bottom 11px solid #cbcbcb

                            &:after
                                position absolute
                                content ''
                                width 0
                                height 0
                                top -10px
                                left 76px
                                border-left 10px solid transparent
                                border-right 10px solid transparent
                                border-bottom 10px solid #fff

                            .code-viewer
                                margin-bottom 13px

                                img
                                    display block
                                    width 133px
                                    height 133px
                                    margin 0 auto

                            p
                                display block
                                padding-top 5px
                                color #A1A1A1
                                font-size 12px

                    .installment-panel
                        padding 10px 28px 28px

                        span
                            font-weight 700
                            height 80px
                            line-height 80px

            .payment-checkout-panel
                padding 10px 10px 10px 0
                line-height 60px
                background #f9f9f9
                border-top 1px solid #e5e5e5
                box-sizing border-box

                .prices
                    float right
                    line-height 24px
                    padding 6px 20px 6px 0
                    font-size 14px

                    em
                        margin-left 5px
                        font-size 24px
                        color #d44d44
                        font-weight 700
                        font-style normal

                        span
                            margin-right 4px
                            font-size 16px
</style>
