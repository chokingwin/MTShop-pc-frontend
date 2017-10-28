<template>
    <div class="account-order">
        <div class="gray-box clearfix">
            <div class="title">
                <h2>我的订单</h2>
                <div class="gray-btn-menu sort-status-menu" :class="{'gray-btn-menu-on':statusMenuIsSpread}" @click="statusMenuIsSpread = !statusMenuIsSpread">
                    <span class="label"> <img src="http://static.smartisanos.cn/account/asset/img/i.gif?1508730261265" class="arrow"> 全部状态 </span>
                    <ul class="menu-list">
                        <li class="selected">
                            <a href="/account/#/order/list?time=-3month&amp;status=all">全部状态</a>
                        </li>
                        <li class="">
                            <a href="/account/#/order/list?time=-3month&amp;status=unfinished">未完成</a>
                        </li>
                        <li class="">
                            <a href="/account/#/order/list?time=-3month&amp;status=finish">已完成</a>
                        </li>
                        <li class="">
                            <a href="/account/#/order/list?time=-3month&amp;status=cancel">已关闭</a>
                        </li>
                    </ul>
                </div>
                <div class="gray-btn-menu sort-time-menu" :class="{'gray-btn-menu-on':timeMenuIsSpread}" @click="timeMenuIsSpread = !timeMenuIsSpread">
                    <span class="label"> <img src="http://static.smartisanos.cn/account/asset/img/i.gif?1508730261265" class="arrow"> 最近三个月 </span>
                    <ul class="menu-list">
                        <li class="selected">
                            <a href="/account/#/order/list?time=-3month&amp;status=all">最近三个月</a>
                        </li>
                        <li class="">
                            <a href="/account/#/order/list?time=2017&amp;status=all">今年内</a>
                        </li>
                        <li class="">
                            <a href="/account/#/order/list?time=2016&amp;status=all">2016 年</a>
                        </li>
                        <li class="">
                            <a href="/account/#/order/list?time=2015&amp;status=all">2015 年</a>
                        </li>
                        <li class="">
                            <a href="/account/#/order/list?time=2014&amp;status=all">2014 年</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="box-inner clearfix">
                <div class="gray-sub-title cart-title">
                    <span class="date">2015-11-26</span>
                    <span class="order-id"> 订单号：
                        <a href="javascript:;">151126311725338</a>
                    </span>
                    <span class="order-detail">
                        <a href="javascript:;">查看详情
                            <em class="icon-font"></em>
                        </a>
                    </span>
                    <span class="sub-total">应付总额</span>
                    <span class="operation">商品操作</span>
                    <span class="num">数量</span>
                    <span class="price">单价</span>
                </div>
                <div class="cart">
                    <div class="cart-items clearfix">
                        <div class="prod-info clearfix">
                            <div class="items-thumb">
                                <a href="javascript:;" target="_blank" title="S-1000 BASS（红色，低频增强线控版）">
                                    <img src="http://img01.smartisanos.cn/C8/100013608/4E9D59E3034476FD7A84E82881D3D068/80X80.jpg?1494344852">
                                </a>
                            </div>
                            <div class="items-params clearfix">
                                <div class="name vh-center">
                                    <a href="javascript:;" target="_blank" title="S-1000 BASS（红色，低频增强线控版）">S-1000 BASS（红色，低频增强线控版）</a>
                                </div>
                                <div class="detail"> </div>
                            </div>
                            <div class="operation">
                                <div class="operation-list"> </div>
                            </div>
                            <div class="num">1</div>
                            <div class="price">¥ 199.00</div>
                        </div>
                    </div>
                </div>
                <div class="prod-operation">
                    <div class="total">¥ 199.00</div>
                    <div class="status"> 已关闭 </div>
                </div>
            </div>
            <div class="box-inner clearfix">
                <div class="gray-sub-title cart-title">
                    <span class="date">2015-06-01</span>
                    <span class="order-id"> 订单号：
                        <a href="javascript:;">150601307441856</a>
                    </span>
                    <span class="order-detail">
                        <a href="javascript:;">查看详情
                            <em class="icon-font"></em>
                        </a>
                    </span>
                    <span class="sub-total">应付总额</span>
                    <span class="operation">商品操作</span>
                    <span class="num">数量</span>
                    <span class="price">单价</span>
                </div>
                <div class="cart">
                    <div class="cart-items clearfix">
                        <div class="prod-info clearfix">
                            <div class="items-thumb">
                                <span title="意外保修服务">
                                    <img src="http://img01.smartisanos.cn/59/1000001/100000101/DBC577F11569177D8A8AACAB3931E8D9/80X80.jpg?1494344852">
                                </span>
                            </div>
                            <div class="items-params clearfix">
                                <div class="name ">
                                    <span title="意外保修服务">意外保修服务</span>
                                </div>
                                <div class="detail"> 已自动通过您的 Smartisan T1 硬件注册。 </div>
                            </div>
                            <div class="operation">
                                <div class="operation-list"> </div>
                            </div>
                            <div class="num">1</div>
                            <div class="price">¥ 200.00</div>
                        </div>
                    </div>
                </div>
                <div class="prod-operation">
                    <div class="total">¥ 200.00</div>
                    <div class="status"> 已完成 </div>
                </div>
            </div>
            <div class="box-inner clearfix">
                <div class="gray-sub-title cart-title">
                    <span class="date">2015-01-06</span>
                    <span class="order-id"> 订单号：
                        <a href="javascript:;">215010649066379</a>
                    </span>
                    <span class="order-detail">
                        <a href="javascript:;">查看详情
                            <em class="icon-font"></em>
                        </a>
                    </span>
                    <span class="sub-total">应付总额</span>
                    <span class="operation">商品操作</span>
                    <span class="num">数量</span>
                    <span class="price">单价</span>
                </div>
                <div class="cart">
                    <div class="cart-items clearfix">
                        <div class="prod-info clearfix">
                            <div class="items-thumb">
                                <a href="javascript:;" target="_blank" title="JBL E30 白色 全新便携式头戴耳机"> <img src="http://img01.smartisanos.cn/A1/100001105/7062D4372DA3B9E22F8AAE56C8B33135/80X80.jpg?1494344852"> </a>
                            </div>
                            <div class="items-params clearfix">
                                <div class="name vh-center">
                                    <a href="javascript:;" target="_blank" title="JBL E30 白色 全新便携式头戴耳机">JBL E30 白色 全新便携式头戴耳机</a>
                                </div>
                                <div class="detail"> </div>
                            </div>
                            <div class="operation">
                                <div class="operation-list">
                                    <a class="white-gray-small-btn">发起售后</a>
                                </div>
                            </div>
                            <div class="num">1</div>
                            <div class="price">¥ 499.00</div>
                        </div>
                    </div>
                </div>
                <div class="prod-operation">
                    <div class="total">¥ 499.00</div>
                    <div class="status"> 已完成 </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'order',
  data() {
    return {
      statusMenuIsSpread: false,
      timeMenuIsSpread: false
    };
  }
};
</script>

<style lang="stylus" scoped>
a
    color #5079d9
    cursor pointer
    transition all 0.3s ease

.white-gray-small-btn
    display inline-block
    height 30px
    padding 0 13px
    border-radius 4px
    line-height 30px
    font-size 12px
    cursor pointer
    background #F0F0F0
    background linear-gradient(#FFF, #F0F0F0)
    box-shadow 0 0 0 1px rgba(0, 0, 0, 0.1) inset, 0 1px 3px rgba(0, 0, 0, 0.1)
    color #666

    &:hover
        background linear-gradient(rgb(249, 249, 249), rgb(227, 227, 227))

.gray-btn-menu-on
    .menu-list
        display block !important

.gray-btn-menu
    display inline-block
    margin 10px 0 0 10px
    height 36px
    background #F2F2F2
    background linear-gradient(#FFF, #F5F5F5)
    border 1px solid #DBDDE2
    border-radius 4px
    line-height 36px
    cursor pointer
    transition none
    overflow visible
    float right
    position relative

    .label
        position relative
        z-index 1
        display block
        padding 0 13px 0 16px
        text-align left
        color #666
        overflow visible !important
        float none !important
        margin-top 0 !important
        user-select none

        &:hover
            background linear-gradient(rgb(249, 249, 249), rgb(227, 227, 227))

        .arrow
            float right
            width 10px
            height 7px
            margin 16px 0 0 6px
            background url('./btn-icon-new.png') -15px -571px no-repeat

    .menu-list
        display none
        position absolute
        right -1px
        top -1px
        width 100%
        padding 38px 0 6px
        background #FFF
        border 1px solid #dbdde2
        border-radius 4px
        box-shadow 0 1px 3px 0 #EEE

        li
            height 24px
            line-height 24px
            padding 0 3px 3px
            text-align left
            font-size 12px

            &:hover
                a
                    background rgb(199, 199, 202)
                    color #fff

            a
                display block
                padding 0 15px
                border-radius 3px
                color #999

            &.selected
                a
                    background #8F9096
                    color #FFF
                    cursor default

.sort-status-menu
    width 112px

.sort-time-menu
    width 118px

.gray-box
    margin-bottom 20px
    overflow hidden
    border 1px solid #D1D1D1
    border-color rgba(0, 0, 0, 0.14)
    border-radius 8px
    box-shadow 0 3px 8px -6px rgba(0, 0, 0, 0.1)
    background #fff

    .title
        position relative
        z-index 2
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
            float left
            font-size 18px
            font-weight 400
            color #626262

        span
            overflow hidden
            float right
            margin-top 11px

        .gray-blue-btn
            display inline-block
            height 38px
            padding 0
            border-radius 8px
            line-height 38px
            font-size 14px
            cursor pointer
            background #A2A2A2
            transition all 0.3s ease

            &:hover
                background #98AFEE

            a
                height 38px
                line-height 38px
                color #FFF

                &.add
                    padding 0 13px 0 38px
                    background url('./btn-icon-new.png') 0 -17px no-repeat
                    transition none

    .box-inner
        &:first-child
            .gray-sub-title
                border-top none

        .gray-sub-title
            height 38px
            padding 0 24px
            background #EEE
            border-top 1px solid #DBDBDB
            border-bottom 1px solid #DBDBDB
            line-height 38px
            font-size 12px
            color #666

            span
                float right
                text-align center

                &.date
                    float left
                    text-align left
                    width 108px
                    padding-left 6px

                &.order-id
                    float left
                    text-align left

                &.order-detail
                    width 82px
                    padding-left 24px
                    text-align center

                &.sub-total
                    width 102px
                    padding-right 18px
                    border-left 1px solid #DBDBDB
                    text-align right

                &.operation
                    width 95px
                    height 38px
                    padding-right 23px

                &.num
                    width 70px

                &.price
                    width 85px
                    padding-right 27px
                    text-align right

            a
                float right
                color #5079d9
                cursor pointer
                transition all 0.3s ease

                &:hover
                    color #395699

        .cart
            float left
            width 737px
            padding 0
            border-right 1px solid #EBEBEB

            .cart-items
                position relative
                border-top 1px solid #EFEFEF
                height 110px
                padding 0

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

                    .items-params
                        float left
                        height 50px
                        padding 15px 0
                        margin-left 29px
                        border-bottom none
                        line-height 25px

                        .vh-center
                            height auto
                            line-height 50px

                        .name
                            text-overflow ellipsis
                            white-space nowrap
                            overflow hidden
                            float left
                            color #666
                            width 435px
                            height 44px
                            text-align left
                            float none
                            width 220px
                            height 25px
                            line-height 25px

                            a
                                color #666

                        .detail
                            font-size 12px
                            color #999

                    .operation
                        float right
                        display table
                        width 95px
                        height 80px
                        padding-right 23px
                        line-height 25px

                        .operation-list
                            display table-cell
                            vertical-align middle

                    .num
                        float right
                        line-height 80px
                        text-align center
                        width 70px

                    .price
                        float right
                        line-height 80px
                        width 85px
                        padding-right 27px
                        text-align right
                        font-weight 700

        .prod-operation
            float right
            display table
            height 110px

            .total
                display table-cell
                padding-right 18px
                line-height 14px
                text-align right
                vertical-align middle
                font-weight 700

            .status
                display table-cell
                width 80px
                padding 0 24px
                text-align center
                vertical-align middle
</style>
