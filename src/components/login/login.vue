<template>
    <div class="login">
        <div class="wrapper" v-if="!isLoading">
            <div class="dialog dialog-shadow" style="display: block; margin-top: -324px;">
                <div class="title">
                    <h4>使用 Smartisan ID 登录官网</h4>
                </div>
                <div class="content" style="height: auto;">
                    <form class="login-form" name="form">
                        <ul class="common-form">
                            <li class="username border-1p">
                                <div class="input" style="opacity: 0.618;">
                                    <span class="icon">
                                        <i>手机号/邮箱</i>
                                    </span>
                                    <!-- <span class="placeholder">手机号/邮箱</span> -->
                                    <input type="text" name="username" autocomplete="username" v-model="username">
                                    <span class="warning">请输入手机号/邮箱</span>
                                    <span class="warning">手机号/邮箱格式错误</span>
                                    <span class="warning">手机号/邮箱不存在</span>
                                </div>
                            </li>
                            <li class="password">
                                <div class="input">
                                    <span class="icon">
                                        <i>密码</i>
                                    </span>
                                    <!-- <span class="placeholder">密码</span> -->
                                    <input type="password" name="password" autocomplete="current-password" v-model="password">
                                    <span class="m-eye"></span>
                                    <span class="warning">请输入密码</span>
                                    <span class="warning">密码错误</span>
                                </div>
                            </li>
                            <li class="remember">
                                <div class="auto" @click="remembered = !remembered">
                                    <span class="checkbox" :class="{checked:remembered}">
                                        <a></a>
                                    </span> 自动登录</div>
                                <a class="forgotpassword" @click="forgotPassword">忘记密码？</a>
                                <a class="registercloud" @click="toRegister">注册 Smartisan ID</a>
                            </li>
                        </ul>
                        <div class="btn-wrapper" @click="postData">
                            <div class="btn btn-primary disabled">
                                <a>登录</a>
                            </div>
                        </div>
                        <div class="info-wrapper clearfix">
                            <ul>
                                <li>
                                    <ul class="login-three">
                                        <li class="text">其他账号登录：</li>
                                        <li class="wechat"></li>
                                        <li class="weibo"></li>
                                        <li class="qq"></li>
                                    </ul>
                                </li>
                                <li>
                                    <a>国际手机号登录
                                        <span class="smartisan-icon gt"></span>
                                    </a>
                                </li>
                            </ul>
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
import * as types from '../../store/mutation-types';

export default {
  name: 'login',
  components: {
    loading,
    copyright
  },
  data() {
    return {
      isLoading: false,
      remembered: true,
      username: '',
      password: ''
    };
  },
  methods: {
    forgotPassword() {},
    toRegister() {
      this.$router.push({
        path: '/register'
      });
    },
    postData() {
      let vm = this;
      let params = {
        url: 'token/user',
        type: 'post',
        params: {
          username: vm.username,
          password: vm.password
        },
        sCallback(data) {
          if (data.errorCode === 0) {
            vm.$store.commit(types.LOGIN, data.data);
            let redirect = decodeURIComponent(
              vm.$route.query.redirect || '/account/information'
            );
            vm.$router.push({
              path: redirect
            });
          } else {
            console.log('帐号或密码错误!');
          }
        },
        eCallback(e) {}
      };
      this.http.request(params);
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
            position relative
            background-image url('./smartisan.png')
            background-size 160px
            background-position top center
            background-repeat no-repeat
            height 92px
            margin 23px 0 50px
            padding 75px 0 0
            -webkit-box-shadow none
            -moz-box-shadow none
            box-shadow none

            h4
                position absolute
                bottom 0
                width 100%
                text-align center
                margin 0
                padding 0
                border-bottom 0
                -webkit-box-shadow none
                -moz-box-shadow none
                box-shadow none
                line-height 1em
                height auto
                color #333
                font-weight 400
                font-size 20px

        .content
            padding 0 40px 22px

            .common-form
                li
                    clear both
                    margin-bottom 15px
                    position relative

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

                        .checkbox
                            float left
                            height 20px
                            width 20px
                            background url('./checkbox.png') 0 2px no-repeat
                            background-position 0 -18px
                            position absolute
                            top -4px
                            left -2px

                            &.checked
                                background-position 0 1px

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

            .btn-wrapper
                margin 30px 0 0

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