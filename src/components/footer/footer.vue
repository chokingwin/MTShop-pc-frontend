<template>
    <div class="footer">
        <div class="container">
            <div class="siteinfo">
                <ul class="nav-footer">
                    <li>
                        <h3>订单服务 </h3>
                        <ul>
                            <li>
                                <a href="javascript:;">购买指南</a>
                            </li>
                            <li>
                                <a href="javascript:;">支付方式</a>
                            </li>
                            <li>
                                <a href="javascript:;">送货政策</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>服务支持 </h3>
                        <ul>
                            <li>
                                <a href="javascript:;">售后服务</a>
                            </li>
                            <li>
                                <a href="javascript:;">维修门店</a>
                            </li>
                            <li>
                                <a href="javascript:;">零售门店</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>自助服务 </h3>
                        <ul>
                            <li>
                                <a href="javascript:;">热点咨询</a>
                            </li>
                            <li>
                                <a href="javascript:;">预约购买</a>
                            </li>
                            <li>
                                <a href="javascript:;">订单物流</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>媒体中心 </h3>
                        <ul>
                            <li>
                                <a href="javascript:;">新闻动态</a>
                            </li>
                            <li>
                                <a href="javascript:;">官方视频</a>
                            </li>
                            <li>
                                <a href="javascript:;">图片资源</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>关于公司 </h3>
                        <ul>
                            <li>
                                <a href="javascript:;">公司简介</a>
                            </li>
                            <li>
                                <a href="javascript:;">加入我们</a>
                            </li>
                            <li>
                                <a href="javascript:;">联系我们</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>关注我们</h3>
                        <ul>
                            <li>
                                <a href="javascript:;" target="_blank">新浪微博</a>
                            </li>
                            <li class="weixin">
                                <a href="javascript:;">官方微信</a>
                            </li>
                            <li>
                                <a href="javascript:;" target="_blank">官方贴吧</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="service">
                    <li class="tel">
                        <a href="tel:400XXX0909">400-XXX-0909</a>
                    </li>
                    <li class="time">周一至周日 9:00-18:00（仅收市话费）</li>
                    <li class="online">
                        <a href="javascript:;">
                            <span class="smartisan-icon info-question"></span>在线帮助
                        </a>
                    </li>
                </div>
                <div class="language-switch" :class="{active : isActive}">
                    <ul>
                        <li>
                            <a class="flag-en">English</a>
                        </li>
                    </ul>
                    <h3 @click="isActive = !isActive">
                        <a class="flag-cn">中文
                            <span class="smartisan-icon caret-down"></span>
                        </a>
                    </h3>
                </div>
            </div>
            <div class="copyright">
                <h4>
                    Copyright ©
                    <span>2017</span>, XXX XXX Co., Ltd. All Rights Reserved.</h4>
                <h5 class="company">XXX科技有限公司</h5>
                <ul class="privacy">
                    <li>
                        <a href="javascript:;">法律声明</a>
                    </li>
                    <li>
                        <a href="javascript:;">隐私条款</a>
                    </li>
                    <li class="devstore">
                        <a href="javascript:;">开发者中心</a>
                    </li>
                </ul>
                <h6>
                    <a href="javascript:;" target="_blank">
                        <span>京ICP备XXX号-1</span>
                        <span>京ICP备XXX号</span>
                        <span>京公网安备XXX</span>
                    </a>
                </h6>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'footer',
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footer
    background #fafafa
    border-top 1px solid #e6e6e6
    display block

    .container
        width 1220px
        height 354px
        margin 0 auto

        .siteinfo
            height 100px
            padding 100px 0 32px
            border-bottom 1px solid #e6e6e6
            position relative

            .nav-footer
                li
                    width 149px
                    line-height 1
                    float left

                    h3
                        color #646464
                        font-size 12px
                        padding 0 0 14px

                    li
                        color #c3c3c3
                        font-size 12px
                        padding 6px 0

                        a
                            color #969696
                            cursor pointer
                            text-decoration none
                            transition all 0.15s ease-out

                            &:hover
                                color #5079d9

            .service
                position absolute
                right 0
                overflow hidden
                line-height 34px

                li
                    clear both
                    width 241px
                    font-size 12px
                    line-height 18px
                    color #c3c3c3
                    text-align right

                    &.tel
                        font-size 30px
                        line-height 1

                        a
                            cursor default
                            color #646464
                            top -2px
                            position relative

                    &.time
                        margin-top 5px
                        right -4px
                        position relative

                    &.online
                        a
                            float right
                            width 102px
                            height 32px
                            line-height 32px
                            background linear-gradient(#fcfcfc, #f5f5f5)
                            cursor pointer
                            font-size 14px
                            padding 0 0 0 26px
                            margin-top 8px
                            text-align left
                            color #5079d9
                            border 1px solid #dcdcdc
                            border-radius 5px

                            &:hover
                                background #f5f5f5

                            .smartisan-icon
                                display inline-block
                                font-family SmartisanIconFont
                                vertical-align middle

                                &.info-question
                                    font-size 18px
                                    margin-right 6px
                                    top -1px
                                    position relative

            .language-switch
                position absolute
                right -20px
                bottom -50px
                width 118px
                z-index 21
                background hsla(0, 0%, 99%, 0)
                font-size 12px
                line-height 30px
                border-radius 0 0 8px 8px

                &.active
                    background #f5f5f5
                    box-shadow 0 2px 10px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.04)
                    opacity 1
                    visibility visible
                    transition opacity 0.25s ease

                    ul
                        background #f5f5f5
                        box-shadow 0 2px 10px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.04)
                        opacity 1
                        visibility visible
                        transition opacity 0.25s ease

                ul
                    position absolute
                    left 0
                    right 0
                    bottom 0
                    padding-bottom 51px
                    visibility hidden
                    opacity 0
                    border-radius 8px

                    li
                        border-bottom 1px solid #ebebeb

                        a
                            background #fff
                            position relative
                            display block
                            color #666
                            height 31px
                            line-height 33px
                            padding 10px 20px 10px 44px
                            border-radius 8px 8px 0 0
                            cursor pointer

                            &:hover
                                background #fafafa

                            &:before
                                position absolute
                                content ' '
                                width 16px
                                height 15px
                                left 19px
                                top 18px
                                background url('//static.smartisanos.cn/index/assets/images/flag.afd0e7c69a7b9639cbfe7dde4ec0f3b0.png') 0 0 no-repeat // static.smartisanos.cn/index/assets/images/flag.afd0e7c69a7b9639cbfe7dde4ec0f3b0.png) 0 0 no-repeat;
                                background-size 16px 80px
                                background-position 0 -30px

                h3
                    user-select none
                    position relative
                    z-index 1

                    a
                        color #45474b
                        display block
                        height 31px
                        line-height 33px
                        padding 10px 20px 10px 44px
                        position relative
                        cursor pointer

                        &:before
                            position absolute
                            content ' '
                            width 16px
                            height 15px
                            left 19px
                            top 18px
                            background url('//static.smartisanos.cn/index/assets/images/flag.afd0e7c69a7b9639cbfe7dde4ec0f3b0.png') 0 0 no-repeat // static.smartisanos.cn/index/assets/images/flag.afd0e7c69a7b9639cbfe7dde4ec0f3b0.png) 0 0 no-repeat;
                            background-size 16px 80px

                        .smartisan-icon
                            display inline-block
                            font-family SmartisanIconFont
                            vertical-align middle
                            position absolute
                            right 18px
                            margin-top -1px
                            -webkit-transform rotate(-180deg)
                            transform rotate(-180deg)
                            text-indent 0

        .copyright
            color #434d55
            font-size 12px
            padding 40px 0

            h4
                float left
                height 15px
                line-height 15px
                color #757575

            .company
                margin-left 3px
                float left
                height 15px
                line-height 15px
                color #757575

            .privacy
                float left
                margin 0 0 0 12px

                li
                    float left
                    line-height 12px
                    padding 1px 10px 0
                    border-left 1px solid #ccc

                    a
                        color #5079d9
                        cursor pointer
                        text-decoration none
                        transition all 0.15s ease-out

                        &:hover
                            color #395699

            h6
                clear both
                padding 10px 0 0
                height 15px

                a
                    color #bdbdbd
                    font-size 12px
                    height 12px
                    line-height 1
</style>