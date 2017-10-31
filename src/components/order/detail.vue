<template>
    <div class="account-order-detail">
        <div class="gray-box clearfix">
            <div class="title">
                <h2>订单号：171030319498652</h2>
            </div>
            <div class="order-info-wrapper">
                <div class="order-status-inner order-process">
                    <div class="order-status-wrapper">
                        <div class="order-status-process">
                            <span class="status-process" style="width:0%"></span>
                            <div class="order-status-text status-first  status-done status-on" style="width:25%; left:-12.5%">
                                <h5>下单</h5>
                                <span class="point"></span>
                                <p>2017-10-30</p>
                                <p>11:18</p>
                            </div>
                            <div class="order-status-text    " style="width:25%; left:12.5%">
                                <h5>付款</h5>
                                <span class="point"></span>
                                <p> </p>
                                <p> </p>
                            </div>
                            <div class="order-status-text    " style="width:25%; left:37.5%">
                                <h5>配货</h5>
                                <span class="point"></span>
                                <p> </p>
                                <p> </p>
                            </div>
                            <div class="order-status-text    " style="width:25%; left:62.5%">
                                <h5>出库</h5>
                                <span class="point"></span>
                                <p> </p>
                                <p> </p>
                            </div>
                            <div class="order-status-text  status-last  " style="width:25%; left:87.5%">
                                <h5>交易成功</h5>
                                <span class="point"></span>
                                <p> </p>
                                <p> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="order-status-now">
                    <ul class="order-title clearfix">
                        <li>
                            <h3>订单状态：待付款</h3>
                        </li>
                        <li>
                            <p class="operation-panel">
                                <a class="blue-small-btn">现在付款</a>
                                <a class="white-gray-small-btn">取消订单</a>
                            </p>
                        </li>
                    </ul>
                    <p class="desc">您的付款时间还有
                        <span class="realtime"> 17 小时 54 分钟 30 秒</span>，超时后订单将自动取消。</p>
                </div>
            </div>
            <div class="box-inner clearfix">
                <div class="gray-sub-title cart-title">
                    <span class="name">商品名称</span>
                    <span class="subtotal">小计</span>
                    <span class="num">数量</span>
                    <span class="price">单价</span>
                </div>
                <div class="cart">
                    <div class="cart-items clearfix">
                        <div class="prod-info clearfix">
                            <div class="items-thumb">
                                <a href="" target="_blank" title="FIIL CARAT LITE（磨砂曜石黑）">
                                    <img src="http://image.smartisanos.cn/resource/99c548bfc9848a8c95f4e4f7f2bc1095.png?x-oss-process=image/resize,w_80/quality,Q_100/format,webp">
                                </a>
                            </div>
                            <div class="items-params clearfix">
                                <div class="name vh-center">
                                    <a href="" target="_blank" title="FIIL CARAT LITE（磨砂曜石黑）">FIIL CARAT LITE（磨砂曜石黑）</a>
                                </div>
                                <div class="detail"> </div>
                            </div>
                            <div class="subtotal">
                                <div class="subtotal-cell">
                                    <span class="bold-txt">¥ 299.00</span><br> </div>
                            </div>
                            <div class="num">1</div>
                            <div class="price">¥ 299.00</div>
                        </div>
                    </div>
                    <div class="cart-items clearfix">
                        <div class="prod-info clearfix">
                            <div class="items-thumb">
                                <a href="" target="_blank" title="Smartisan 卫衣 大爆炸（藏蓝色，S）">
                                    <img src="http://image.smartisanos.cn/resource/48e7963e09014366dfdc1fa5e1d3d43d.png?x-oss-process=image/resize,w_80/quality,Q_100/format,webp">
                                </a>
                            </div>
                            <div class="items-params clearfix">
                                <div class="name vh-center">
                                    <a href="" target="_blank" title="Smartisan 卫衣 大爆炸（藏蓝色，S）">Smartisan 卫衣 大爆炸（藏蓝色，S）</a>
                                </div>
                                <div class="detail"> </div>
                            </div>
                            <div class="subtotal">
                                <div class="subtotal-cell">
                                    <span class="bold-txt">¥ 498.00</span><br> </div>
                            </div>
                            <div class="num">2</div>
                            <div class="price">¥ 249.00</div>
                        </div>
                    </div>
                </div>
                <div class="order-discount-line">
                    <p>商品总计：
                        <strong>¥ 797.00</strong>
                    </p>
                    <p>运费：+
                        <strong>¥ 0.00</strong>
                    </p>
                    <p class="order-total">应付金额：
                        <span class="bold-txt red-txt">¥ 797.00</span>
                    </p>
                </div>
            </div>
            <div class="box-inner clearfix">
                <div class="gray-sub-title"> 收货信息 </div>
                <div class="gray-sub-con animation-address-con">
                    <div class="sub-info">
                        <p>姓名：XX</p>
                        <p>联系电话：136XXXX6593</p>
                        <p>详细地址：广东省广州市番禺区XXXX</p>
                    </div>
                </div>
                <div class="gray-sub-title"> 发票信息 </div>
                <div class="gray-sub-con animation-invoice-con ">
                    <div class="sub-info js-invoice-detail">
                        <p class="columns-btn-wrapper"> 发票类型：电子发票 </p>
                        <p>发票抬头：个人</p>
                        <p>发票内容：购买商品明细</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'orderDetail',
  data() {
    return {
      statusMenuIsSpread: false,
      timeMenuIsSpread: false
    };
  }
};
</script>

<style lang="stylus" scoped>
.gray-box
    margin-bottom 20px
    overflow hidden
    border 1px solid #D1D1D1
    border-color rgba(0, 0, 0, 0.14)
    border-radius 8px
    box-shadow 0 3px 8px -6px rgba(0, 0, 0, 0.1)
    background #fff

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
        position relative
        z-index 2

        h2
            float left
            font-size 18px
            font-weight 400
            color #626262

    .order-info-wrapper
        overflow hidden
        padding-bottom 40px

        .order-process
            .order-status-wrapper
                position relative
                top 1px
                z-index 2
                overflow hidden
                height 130px
                margin 30px auto 0

                .order-status-process
                    width 860px
                    height 38px
                    margin 35px auto 0
                    position relative
                    background url('./order-process-new.png') 0 -307px repeat-x

                    .status-process
                        display block
                        height 38px
                        background url('./order-process-new.png') 0 -257px repeat-x

            .order-status-text
                position absolute
                left 0
                top -33px
                width 200px
                height 130px
                line-height 16px
                text-align center
                font-size 12px
                color #666

                h5
                    font-size 14px
                    color #999
                    position relative
                    top 10px

                .point
                    display block
                    width 38px
                    height 38px
                    margin 18px auto 5px
                    background url('./order-process-new.png') 0 -158px no-repeat

                p
                    color #999

            .status-done
                span
                    &.point
                        background url('./order-process-new.png') 0 -108px no-repeat

            .status-first
                span
                    &.point
                        background url('./order-process-new.png') 0 -58px no-repeat

            .status-on
                background url('./order-status-bottom-arrow.png') center bottom no-repeat

                span
                    &.point
                        background url('./order-process-new.png') 0 -8px no-repeat

                h5
                    font-size 18px
                    color #666

        .order-status-now
            background #F6F6F6
            border 1px solid #dadada
            border-radius 5px
            padding 22px 30px 20px
            margin 0 30px
            line-height 38px

            &>:last-child
                padding-bottom 0

            ul.order-title
                li
                    &:first-child
                        float left

                    &:last-child
                        float right

                    h3
                        font-size 18px
                        color #666

                    p
                        color #b4b4b4

            .blue-small-btn, .orange-small-btn, .white-gray-small-btn
                display inline-block
                height 30px
                padding 0 13px
                border-radius 4px
                line-height 30px
                font-size 12px
                cursor pointer
                margin-left 5px

            .blue-small-btn
                background #6383C6
                background linear-gradient(#7EA3F5, #5A82F0)
                box-shadow 0 1px 2px rgba(255, 255, 255, 0.1) inset, 0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.1)
                color #FFF

                &:hover
                    background-image linear-gradient(180deg, #6B8BD3, #486AC2)

            .white-gray-small-btn
                background #F0F0F0
                background linear-gradient(#FFF, #F0F0F0)
                box-shadow 0 0 0 1px rgba(0, 0, 0, 0.1) inset, 0 1px 3px rgba(0, 0, 0, 0.1)
                color #666

                &:hover
                    background linear-gradient(rgb(249, 249, 249), rgb(227, 227, 227))

            p
                line-height 1.6em
                padding-bottom 12px

            .desc
                border-top 1px solid #dcdcdc
                margin-top 20px
                padding-top 26px

            .realtime
                color #d44d44

    .gray-sub-title
        height 38px
        padding 0 0 0 29px
        background #EEE
        border-top 1px solid #DBDBDB
        border-bottom 1px solid #DBDBDB
        line-height 38px
        font-size 12px
        color #666

        .cart-title
            padding 0 0 0 29px

        span
            float right
            text-align center

            &.name
                float left
                text-align left

            &.subtotal
                width 129px
                padding-right 29px
                text-align right

            &.num
                width 82px

            &.price
                width 85px
                padding-right 30px
                text-align right

    .cart
        float none
        width auto
        border-right none
        padding 0

        .cart-items
            position relative
            height 110px
            padding 0
            border-top 1px solid #EFEFEF

            &:first-child
                border-top none

            .prod-info
                position relative
                padding 15px 0 15px 111px
                margin-left 0

                .items-thumb
                    position absolute
                    left 30px
                    top 15px
                    width 78px
                    height 78px
                    border 1px solid #EBEBEB
                    border-radius 3px

                    img
                        width 78px
                        height 78px
                        border 0

                .items-params
                    float left
                    height 50px
                    padding 15px 0
                    margin-left 29px
                    border-bottom none
                    line-height 25px

                    .name
                        width 340px
                        text-overflow ellipsis
                        white-space nowrap
                        overflow hidden
                        text-align left
                        color #666

                        a
                            color #666
                            cursor pointer
                            transition all 0.3s ease

                    .vh-center
                        height auto
                        line-height 50px

                .detail
                    font-size 12px
                    color #999

                .subtotal
                    float right
                    display table
                    width 129px
                    height 80px
                    line-height 24px
                    padding-right 29px
                    text-align right

                    .subtotal-cell
                        display table-cell
                        vertical-align middle

                .num
                    width 82px
                    float right
                    line-height 80px
                    text-align center

                .price
                    float right
                    line-height 80px
                    text-align right
                    font-weight 700
                    width 85px
                    padding-right 30px

    .order-discount-line
        padding 21px 30px
        border-top 1px solid #EFEFEF
        text-align right

        p
            height 30px
            line-height 30px

            &.order-total
                height 54px
                line-height 54px
                font-size 18px

    .bold-txt
        font-weight 700

    .red-txt
        color #d44d44

    .gray-sub-con
        padding 20px 30px
        line-height 38px
        word-wrap break-word
        word-spacing normal
        word-break break-all

        .sub-info
            transition all 0.3s ease-out
            transition-delay 0.5s

    .animation-address-on
        height 115px
        position relative
        overflow hidden
        height 115px
        transition height 0.3s ease-out
</style>
