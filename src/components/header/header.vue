<template>
    <div class="header">
        <div class="nav-global">
            <div class="container clearfix">
                <h1 class="nav-logo">
                    <a href="javascript:;" title="XX科技官网">XXX</a>
                </h1>
                <ul class="nav-aside">
                    <li class="nav-user">
                        <a>个人中心</a>
                    </li>

                    <li class="nav-cart theme-black-default">
                        <a href="">购物车</a>
                        <span class="cart-empty-num">
                            <i>0</i>
                        </span>
                        <div class="nav-cart-wrapper">
                            <div class="nav-cart-list">
                                <div>
                                    <div class="empty">
                                        <h3>购物车为空</h3>
                                        <p>您还没有选购任何商品，现在前往商城选购吧！</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="addcart-mask">
                            <div class="mask-y">
                                <div class="mask-x">
                                    <div class="mask-item"></div>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'header'
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
    background #1a1a1a
    background-image linear-gradient(#000, #121212)

    .nav-global
        position relative
        height 100px
        z-index 30

        .container
            width 1220px
            margin-left auto
            margin-right auto

            .nav-logo
                float left
                margin-left -5px
                padding 25px 0 0

                a
                    background-position 0 0
                    background url('//static.smartisanos.cn/index/assets/images/global-logo-red@2x.85550cd7bec73c98adacee227ba6a8a0.png') no-repeat 50% // static.smartisanos.cn/index/assets/images/global-logo-red@2x.85550cd7bec73c98adacee227ba6a8a0.png) no-repeat 50%;
                    background-size cover
                    display block
                    height 50px
                    width 50px
                    text-indent -9999px
                    transition none
                    text-decoration none

            .nav-aside
                float right
                box-sizing border-box
                position relative
                top 38px
                right 0

                &:before
                    background #242424
                    background hsla(0, 0%, 100%, 0.2)
                    content ' '
                    height 13px
                    width 1px
                    overflow hidden
                    position absolute
                    top 4px
                    left 0

                .nav-user
                    margin-left 41px
                    width 36px
                    position relative
                    float left

                    a
                        position relative
                        width 36px
                        height 20px
                        display block
                        text-indent -9999px

                    &:before
                        content ' '
                        background-position -155px 0
                        position absolute
                        left 8px
                        width 20px
                        top 0
                        height 20px
                        background url('//static.smartisanos.cn/index/assets/images/account-icon.32d87deb02b3d1c3cc5bcff0c26314ac.png') -5px 0 // static.smartisanos.cn/index/assets/images/account-icon.32d87deb02b3d1c3cc5bcff0c26314ac.png) -5px 0;
                        background-size 240px 107px
                        transition none

                .nav-cart
                    position relative
                    float left
                    margin-left 21px
                    width 61px

                    a
                        position absolute
                        left 0
                        top 0
                        bottom 0
                        right 0
                        display block
                        z-index 1
                        height 20px
                        text-indent -9999px
                        transition none

                        &:before
                            position absolute
                            left 0
                            top 0
                            bottom 0
                            content ' '
                            width 30px
                            background url('//static.smartisanos.cn/index/assets/images/account-icon.32d87deb02b3d1c3cc5bcff0c26314ac.png') 0 -22px // static.smartisanos.cn/index/assets/images/account-icon.32d87deb02b3d1c3cc5bcff0c26314ac.png) 0 -22px;
                            background-position -150px -22px

                    span
                        display block
                        position relative
                        margin-left 31px
                        margin-top -1px
                        min-width 30px
                        text-indent 0
                        line-height 20px

                        i
                            font-style normal
                            display inline-block
                            width 20px
                            height 20px
                            line-height 20px
                            border-radius 10px
                            color #fff
                            font-size 12px
                            text-align center
                            background #969696
                            background-image linear-gradient(#a4a4a4, #909090)
                            box-shadow inset 0 0 1px #838383, 0 1px 2px #838383

                    .nav-cart-wrapper
                        display none
</style>