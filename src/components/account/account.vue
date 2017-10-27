<template>
    <div class="item">
        <m-header></m-header>
        <header-sub-shop></header-sub-shop>
        <div v-if="!pageLoading" class="main">
            <div class="content clearfix">
                <div class="account-wrapper">
                    <div class="account-sidebar">
                        <div class="gray-box avatar clearfix">
                            <img src="https://account.smartisan.com/files/00/14/42/0a/avatar.png?1509084000" alt="avatar" width="168" height="168">
                            <h5></h5>
                            <div class="box-inner">
                                <ul class="account-nav">
                                    <li @click="changeMenu('order/list')">
                                        <a href="javascript:;">我的订单</a>
                                    </li>
                                    <li @click="changeMenu('information')" class="current">
                                        <a href="javascript:;">账户资料</a>
                                    </li>
                                    <li @click="changeMenu('address/list')">
                                        <a href="javascript:;">收货地址</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="account-content">
                        <router-view/>
                    </div>
                </div>
            </div>
        </div>
        <loading v-if="pageLoading"></loading>
        <m-footer></m-footer>
    </div>
</template>

<script type="text/ecmascript-6">
import header from '../header/header';
import headerSubShop from '../header-sub-shop/header-sub-shop';
import footer from '../footer/footer';
import loading from '../loading/page-loading';

export default {
  name: 'item',
  components: {
    'm-header': header,
    'header-sub-shop': headerSubShop,
    'm-footer': footer,
    loading: loading
  },
  data() {
    return {
      pageLoading: false
    };
  },
  methods: {
    changeMenu(index) {
      this.$router.push({
        path: '/account/' + index
      });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.main
    .content
        clear both
        width 1220px
        min-height 600px
        padding 0 0 25px
        margin 0 auto

        .account-wrapper
            position relative
            min-height 550px

            .account-sidebar
                position absolute
                left 0
                top 0
                width 210px

                .gray-box
                    overflow hidden
                    border 1px solid #d1d1d1
                    border-color rgba(0, 0, 0, 0.14)
                    border-radius 8px
                    box-shadow 0 3px 8px -6px rgba(0, 0, 0, 0.1)
                    background #fff

                .avatar
                    padding-top 20px
                    margin 0 0 20px
                    border-radius 10px
                    text-align center

                    h5
                        font-size 18px
                        line-height 48px
                        font-weight 700

                    .box-inner
                        .account-nav
                            padding-top 15px

                            li
                                position relative
                                height 48px
                                border-top 1px solid #EBEBEB
                                line-height 48px

                                a
                                    display block
                                    height 48px
                                    padding 0 30px
                                    color #666
                                    transition none

                                    &:hover
                                        background-color #98AFEE
                                        color #FFF

                                &.current
                                    a
                                        position relative
                                        top -1px
                                        z-index 1
                                        height 50px
                                        background-color #98AFEE
                                        line-height 50px
                                        color #FFF

            .account-content
                margin-left 230px
</style>
