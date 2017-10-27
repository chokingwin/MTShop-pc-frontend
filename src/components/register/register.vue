<template>
    <div class="login">
        <div class="wrapper" v-if="!isLoading">
            <div class="dialog dialog-shadow" style="display: block; margin-top: -316px;">
                <div class="title">
                    <h4>注册 Smartisan ID</h4>
                </div>
                <div class="content">
                    <form class="reg-form" name="form">
                        <ul class="common-form">
                            <li class="username">
                                <div class="input" style="opacity: 0.618;">
                                    <span class="icon">
                                        <i>手机号</i>
                                    </span>
                                    <span class="ccc">86</span>
                                    <span class="placeholder indent">手机号</span>
                                    <input type="text" name="mobile">
                                    <span class="warning">请输入手机号</span>
                                    <span class="warning">手机号格式错误</span>
                                    <span class="warning">该手机已经注册</span>
                                </div>
                            </li>
                            <li class="verification">
                                <div class="input">
                                    <span class="icon">
                                        <i>短信验证码</i>
                                    </span>
                                    <span class="placeholder">短信验证码</span>
                                    <input type="text" name="verification">
                                    <span class="warning">请输入验证码</span>
                                    <span class="warning">验证码错误</span>
                                    <span class="warning">验证码错误</span>
                                    <span class="warning">请重新获取验证码</span>
                                </div>
                                <div class="btn btn-default disabled">
                                    <a @click="resend">获取验证码</a>
                                </div>
                                <div class="btn btn-default disabled" style="display:none;">
                                    <a>重新发送
                                        <b>60</b>
                                    </a>
                                </div>
                            </li>
                            <li class="password">
                                <div class="input">
                                    <span class="icon">
                                        <i>密码</i>
                                    </span>
                                    <span class="placeholder">密码</span>
                                    <input type="password" name="password" id="password">
                                    <span class="m-eye"></span>
                                    <span class="warning">请输入密码</span>
                                    <span class="warning">密码格式错误</span>
                                </div>
                                <div class="tips" style="opacity: 0; display: none;">
                                    <span class="delta"></span>
                                    <span class="deltapatch"></span>
                                    <span class="warningicon"></span>
                                    <div class="verifycon">
                                        <p>密码长度 6~16 位，数字、字母和符号至少包含两种</p>
                                    </div>
                                </div>
                            </li>
                            <li class="password-repeat">
                                <div class="input">
                                    <span class="icon">
                                        <i>重复密码</i>
                                    </span>
                                    <span class="placeholder">重复密码</span>
                                    <input type="password" name="repassword" id="repassword">
                                    <span class="warning">请重复输入密码</span>
                                    <span class="warning">密码格式错误</span>
                                    <span class="warning">两次密码输入不一致</span>
                                </div>
                                <div class="tips" style="opacity: 0; display: none;">
                                    <span class="delta"></span>
                                    <span class="deltapatch"></span>
                                    <span class="warningicon"></span>
                                    <div class="verifycon">
                                        <p>密码长度 6~16 位，数字、字母和符号至少包含两种</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="btn-wrapper">
                            <p class="agreement" @click="agreed = !agreed">
                                <span class="checkbox" :class="{checked:agreed}">
                                    <a></a>
                                </span>我已阅读并同意遵守
                                <a href="javascript:;" target="_blank">法律声明</a> 和
                                <a href="javascript:;" target="_blank">隐私条款</a>
                            </p>
                            <div class="btn btn-primary disabled" @click="register">
                                <a>注册</a>
                            </div>
                            <div class="btn btn-primary" style="display:none;">
                                <a>
                                    <span class="btn-loading"></span>
                                </a>
                            </div>
                            <p class="tologin">
                                <a @click="toLogin">如果您已拥有 Smartisan ID，则可在此
                                    <span>登录</span>
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <loading v-if="isLoading"></loading>
        <copyright></copyright>
    </div>
</template>

<script type="text/ecmascript-6">
import loading from '../loading/loading';
import copyright from '../copyright/copyright';

export default {
  name: 'login',
  components: {
    loading,
    copyright
  },
  data() {
    return {
      isLoading: false,
      agreed: true
    };
  },
  methods: {
    resend() {},
    register() {},
    toLogin() {
      this.$router.push({
        path: '/login'
      });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.input
    background #fff
    box-shadow 0 3px 5px -4px rgba(0, 0, 0, 0.4) inset, -1px 0 3px -2px rgba(0, 0, 0, 0.1) inset
    border #ccc solid 1px
    border-radius 6px
    font-size 18px
    height 46px
    line-height 46px
    opacity 0.618
    position relative
    transition opacity 0.3s ease-in

    &.focus
        opacity 1
        border 1px solid #6b93f2

    .icon
        background linear-gradient(#f8f8f8, #fafafa)
        border-radius 6px 0 0 6px
        border-right solid 1px #ccc
        box-shadow 1px 0 3px -1px rgba(0, 0, 0, 0.1)
        float left
        height 46px
        width 46px
        overflow hidden

        i
            background url('./dialog-input-icons.png') no-repeat
            background-position -1px 0
            cursor pointer
            display block
            height 46px
            text-indent -9999em
            width 46px

    .placeholder
        color #bebebe
        float left
        font-size 16px
        position absolute
        left 62px
        top 0

    input
        width 293px
        height 20px
        padding 12px 12px 12px 15px
        background rgba(255, 255, 255, 0)
        border none
        color #333
        font-size 16px
        height 34px
        padding 5px 15px
        width 290px
        position relative
        z-index 10

    .warning
        background #d16d62
        border-radius 4px
        color #fff
        display none
        font-size 12px
        font-weight 400
        height 26px
        line-height 26px
        margin 10px 0 0
        opacity 0
        padding 0 10px
        position absolute
        right 10px
        top 0
        z-index 10

.wrapper
    background-image url('./bg.png')
    background-size 100px
    background-repeat repeat
    min-height 800px
    min-width 630px
    position absolute
    top 0
    bottom 0
    left 0
    right 0

    .dialog
        width 450px
        border 1px solid #dadada
        border-radius 10px
        top 50%
        left 50%
        margin-left -225px
        position absolute
        background url('./dialog-gray-bg.png') #fff bottom repeat-x

        .title
            background linear-gradient(#fff, #f5f5f5)
            height auto
            overflow visible
            box-shadow 0 1px 4px rgba(0, 0, 0, 0.08)
            border-radius 13px 13px 0 0

            h4
                padding 0
                text-align center
                color #666
                border-bottom 1px solid #dcdcdc
                box-shadow none
                font-weight 700
                font-size 20px
                height 61px
                line-height 61px

        .content
            padding 30px 40px 24px

            .common-form
                li
                    clear both
                    margin-bottom 15px
                    position relative

                .username
                    .ccc
                        display inline-block
                        width 55px
                        text-align center
                        position relative
                        left 3px

                        &:before
                            content '+'
                            position relative
                            top -1px

                    .placeholder
                        &.indent
                            left 110px

                    input
                        width 158px
                        padding-left 0
                        padding-right 0

                .verification
                    .input
                        width 228px

                        .icon
                            i
                                background-position -97px 0

                    input
                        width 144px

                    .btn
                        border-radius 6px
                        clear both
                        cursor pointer
                        height 46px
                        line-height 46px
                        margin 0 0 12px
                        padding 1px
                        user-select none
                        text-align center
                        text-shadow rgba(255, 255, 255, 0.496094) 0 1px 0

                        &.btn-default
                            position absolute
                            top 0
                            right 0
                            width 130px
                            box-shadow none

                            a
                                background #ececec
                                background linear-gradient(#fafafa, #f5f5f5)
                                box-shadow inset 0 1px rgba(255, 255, 255, 0.3)
                                color #666
                                font-size 16px
                                text-shadow #fff 0 1px 0
                                transition background-color 0.3s ease

                .password
                    .input
                        .icon
                            i
                                background-position -49px 0

                .remember
                    margin 15px 5px 25px
                    height 12px

                    .auto
                        color #999
                        float left
                        font-size 12px
                        cursor pointer
                        padding-left 22px

                    .forgotpassword
                        margin-right 3px
                        float right
                        font-size 12px
                        width 50px
                        white-space nowrap

                    .registercloud
                        display inline-block
                        margin-right 8px
                        margin-left 0
                        float right
                        font-size 12px

                        &:after
                            content ''
                            display inline-block
                            width 1px
                            height 11px
                            background-color #e5e5e5
                            margin-left 9px
                            margin-top -2px
                            vertical-align middle

                .tips
                    width 349px
                    height 50px
                    position absolute
                    left 0
                    top 100%
                    z-index 20
                    border 1px solid #dadada
                    background-color #fff
                    border-radius 6px
                    box-shadow 0 9px 30px -6px rgba(0, 0, 0, 0.2), 0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 10px 20px -10px rgba(0, 0, 0, 0.04)

                    .delta
                        float left
                        width 20px
                        height 20px
                        position absolute
                        top -6px
                        left 67px
                        border 1px solid #dadada
                        background-color #fff
                        box-shadow none
                        background #fcfcfc
                        border-radius 3px
                        transform rotate(45deg)
                        z-index 3

                    .verifycon
                        z-index 30
                        width auto
                        padding 0 0 0 15px
                        line-height 50px
                        background #fff
                        color #999
                        border 0
                        box-shadow none
                        text-align left
                        left 0
                        border-radius 12px
                        font-size 14px
                        overflow hidden
                        position absolute
                        top 0

            .btn-wrapper
                margin 0 1px 0
                clear both

                p
                    color #cacaca
                    font-size 12px
                    text-align center

                .agreement
                    cursor pointer
                    padding 0
                    margin 15px 0 30px
                    text-align left
                    position relative
                    line-height 20px
                    color #999

                    .checkbox
                        float left
                        height 20px
                        width 20px
                        background url('./checkbox.png') 0 2px no-repeat
                        background-position 0 -18px
                        position relative
                        top -1px
                        left 0
                        margin-right 6px

                        &.checked
                            background-position 0 1px

                .btn
                    border-radius 6px
                    clear both
                    cursor pointer
                    height 46px
                    line-height 46px
                    margin 0 0 12px
                    padding 1px
                    -webkit-touch-callout none
                    user-select none
                    text-align center
                    text-shadow rgba(255, 255, 255, 0.496094) 0 1px 0

                    &.disabled
                        cursor not-allowed
                        opacity 0.4
                        pointer-events none

                        a
                            cursor not-allowed
                            pointer-events none

                    a
                        border none
                        border-radius 6px
                        cursor pointer
                        display block
                        font-size 18px

                .btn-primary
                    background #6383c6
                    background linear-gradient(#6383c6, #4262af)

                    a
                        background #5f7ed7
                        background linear-gradient(#6f97e5, #527ed9)
                        box-shadow inset 0 1px 2px #7ea1e8
                        color #fff
                        text-shadow #4f70b3 0 -1px 0

                        &:hover
                            background-image linear-gradient(#6B8BD3, #486AC2)

                .tologin
                    width 100%
                    margin 30px 0 0
                    padding-top 24px
                    border-top 1px solid #dadada
                    box-shadow 0 1px 0 rgba(255, 255, 255, 0.4) inset

                    a
                        color #999
                        display block

                        span
                            color #5079d9
                            padding 2px

            .info-wrapper
                margin 30px 0 0
                padding-top 23px
                text-align center
                font-size 14px
                position relative
                box-shadow 0 1px 0 rgba(255, 255, 255, 0.4) inset
                border-top 1px solid #d9d9d9

                li
                    color #999
                    font-size 12px
                    line-height 17px

                    .login-three
                        &:after
                            content ''
                            background-image url('./icons-hover.png')

                        li
                            width 20px
                            height 17px
                            margin-left 15px
                            float left
                            cursor pointer
                            background-image url('./icons.png')
                            background-size 81px 17px
                            background-position 1px 0
                            background-repeat no-repeat
                            transition all 0.15s ease

                            &:hover
                                background-image url('./icons-hover.png')

                        .text
                            background-image none
                            margin-left 0
                            width auto
                            font-size 100%
                            cursor default
                            color #999

                        .wechat
                            margin-left 10px

                        .weibo
                            background-position -30px 0

                        .qq
                            background-position -62px 0

                    &:first-child
                        float left

                    &:last-child
                        float right

                    a
                        color #999
                        font-size 12px
                        line-height 17px

                        &:hover
                            color #5079d9

                        gt
                            margin-top -1px

    .dialog-shadow
        box-shadow 0 9px 30px -6px rgba(0, 0, 0, 0.2), 0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 10px 20px -10px rgba(0, 0, 0, 0.04)
</style>