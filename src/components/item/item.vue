<template>
    <div class="item">
        <m-header></m-header>
        <header-sub-shop></header-sub-shop>
        <div class="main">
            <loading v-if="pageLoading"></loading>
            <div class="store-content page-item" v-if="!pageLoading">
                <div class="gray-box clearfix">
                    <div class="gallery-wrapper">
                        <div class="gallery">
                            <div class="thumbnail">
                                <ul>
                                    <li @click="activeThumbnail" class="on">
                                        <img src="http://image.smartisanos.cn/resource/3859ea627faeb07b34b55c1ce736012b.png?x-oss-process=image/resize,w_54/quality,Q_90/format,webp">
                                    </li>
                                    <li @click="activeThumbnail">
                                        <img src="http://image.smartisanos.cn/resource/3e436871bd837b7789b7288a9a0bd10f.png?x-oss-process=image/resize,w_54/quality,Q_90/format,webp">
                                    </li>
                                    <li @click="activeThumbnail">
                                        <img src="http://image.smartisanos.cn/resource/33700b04fb18a9b668e4b6fa61099d71.png?x-oss-process=image/resize,w_54/quality,Q_90/format,webp">
                                    </li>
                                    <li @click="activeThumbnail">
                                        <img src="http://image.smartisanos.cn/resource/22da1d44e913c9f9b4b4c3425686812a.png?x-oss-process=image/resize,w_54/quality,Q_90/format,webp">
                                    </li>
                                    <li @click="activeThumbnail">
                                        <img src="http://image.smartisanos.cn/resource/b5e5a357c210670bec0df31c23c4a1b1.png?x-oss-process=image/resize,w_54/quality,Q_90/format,webp">
                                    </li>
                                </ul>
                            </div>
                            <div class="thumb">
                                <ul>
                                    <li class="on"><img src="http://image.smartisanos.cn/resource/3859ea627faeb07b34b55c1ce736012b.png?x-oss-process=image/resize,w_440/quality,Q_90/format,webp"></li>
                                    <li class=""><img src="http://image.smartisanos.cn/resource/3e436871bd837b7789b7288a9a0bd10f.png?x-oss-process=image/resize,w_440/quality,Q_90/format,webp"></li>
                                    <li class=""><img src="http://image.smartisanos.cn/resource/33700b04fb18a9b668e4b6fa61099d71.png?x-oss-process=image/resize,w_440/quality,Q_90/format,webp"></li>
                                    <li class=""><img src="http://image.smartisanos.cn/resource/22da1d44e913c9f9b4b4c3425686812a.png?x-oss-process=image/resize,w_440/quality,Q_90/format,webp"></li>
                                    <li class=""><img src="http://image.smartisanos.cn/resource/b5e5a357c210670bec0df31c23c4a1b1.png?x-oss-process=image/resize,w_440/quality,Q_90/format,webp"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="banner">
                        <div class="sku-custom-title">
                            <div class="params-price">
                                <span>
                                    <em>¥</em>
                                    <i>249.00</i>
                                </span>
                            </div>
                            <div class="params-info">
                                <h4>Smartisan 卫衣 大爆炸</h4>
                                <h6>风格简洁、舒适服帖</h6>
                            </div>
                        </div>
                        <div class="sku-dynamic-params-panel">
                            <div class="sku-dynamic-params clearfix">
                                <span class="params-name">颜色</span>
                                <ul class="params-colors">
                                    <li class="true" @click="chooseParams">
                                        <a title="黑色">
                                            <i><img src="http://img01.smartisanos.cn/attr/v2/1000339/DDDD334EE9E667503425B40CC9C0320B/20X20.jpg"></i>
                                        </a>
                                    </li>
                                    <li class="cur" @click="chooseParams">
                                        <a title="花灰色">
                                            <i><img src="http://img01.smartisanos.cn/attr/v2/1000339/DAAB83312CD86EA464FDC1CB447B37C4/20X20.jpg"></i>
                                        </a>
                                    </li>
                                    <li class="true" @click="chooseParams">
                                        <a title="藏蓝色">
                                            <i><img src="http://img01.smartisanos.cn/attr/v2/1000339/C7AB93C2D0B8D95951186FDCB809894E/20X20.jpg"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="sku-dynamic-params clearfix">
                                <span class="params-name">尺码</span>
                                <ul class="params-normal">
                                    <li class="cur params-text" @click="chooseParams">
                                        <a title="S">
                                            <span>S</span>
                                        </a>
                                    </li>
                                    <li class="true params-text" @click="chooseParams">
                                        <a title="M">
                                            <span>M</span>
                                        </a>
                                    </li>
                                    <li class="true params-text" @click="chooseParams">
                                        <a title="L">
                                            <span>L</span>
                                        </a>
                                    </li>
                                    <li class="true params-text" @click="chooseParams">
                                        <a title="XL">
                                            <span>XL</span>
                                        </a>
                                    </li>
                                    <li class="true params-text" @click="chooseParams">
                                        <a title="XXL">
                                            <span>XXL</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="sku-dynamic-params clearfix">
                                <div class="params-name">数量</div>
                                <div class="params-detail clearfix">
                                    <div class="item-num">
                                        <span class="down down-disabled" @click="downNum">-</span>
                                        <span class="num">
                                            <input type="text" v-model.number="curNum">
                                        </span>
                                        <span class="up" @click="upNum">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sku-status">
                            <div class="cart-operation-wrapper clearfix">
                                <span class="blue-title-btn" @click="addCart">
                                    <a>加入购物车</a>
                                </span>
                                <span class="green-title-btn">
                                    <a>已加入购物车</a>
                                </span>
                                <span class="gray-title-btn" @click="goToCheckout">
                                    <a>现在购买</a>
                                </span>
                            </div>
                            <div class="sku-custom-tips"></div>
                            <div class="cart-tip-diag gray-box clearfix absolute">
                                <h4>已添加至购物车</h4>
                                <span class="light-gray-btn" @click="hideCartTipDiag">
                                    <a>继续购买</a>
                                </span>
                                <span class="blue-btn" @click="jumpToCart">
                                    <a>现在结算</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gray-box clearfix" ref="itemInfoBox">
                    <div class="title">
                        <h2>产品信息</h2>
                    </div>
                    <div class="item-info">
                        <img src="http://image.smartisanos.cn/resource/ec6dafed3c75ab3d65c062bc4a28624a.png?x-oss-process=image/resize,w_1220/indexcrop,y_1440,i_0/quality,Q_100/format,webp">
                        <img src="http://image.smartisanos.cn/resource/ec6dafed3c75ab3d65c062bc4a28624a.png?x-oss-process=image/resize,w_1220/indexcrop,y_1440,i_1/quality,Q_100/format,webp">
                        <img src="http://image.smartisanos.cn/resource/ec6dafed3c75ab3d65c062bc4a28624a.png?x-oss-process=image/resize,w_1220/indexcrop,y_1440,i_2/quality,Q_100/format,webp">
                        <img src="http://image.smartisanos.cn/resource/ec6dafed3c75ab3d65c062bc4a28624a.png?x-oss-process=image/resize,w_1220/indexcrop,y_1440,i_3/quality,Q_100/format,webp">
                        <img src="http://image.smartisanos.cn/resource/ec6dafed3c75ab3d65c062bc4a28624a.png?x-oss-process=image/resize,w_1220/indexcrop,y_1440,i_4/quality,Q_100/format,webp">
                        <img src="http://image.smartisanos.cn/resource/ec6dafed3c75ab3d65c062bc4a28624a.png?x-oss-process=image/resize,w_1220/indexcrop,y_1440,i_5/quality,Q_100/format,webp">
                        <img src="http://image.smartisanos.cn/resource/ec6dafed3c75ab3d65c062bc4a28624a.png?x-oss-process=image/resize,w_1220/indexcrop,y_1440,i_6/quality,Q_100/format,webp">
                        <img src="http://image.smartisanos.cn/resource/ec6dafed3c75ab3d65c062bc4a28624a.png?x-oss-process=image/resize,w_1220/indexcrop,y_1440,i_7/quality,Q_100/format,webp">
                        <img src="http://image.smartisanos.cn/resource/ec6dafed3c75ab3d65c062bc4a28624a.png?x-oss-process=image/resize,w_1220/indexcrop,y_1440,i_8/quality,Q_100/format,webp">
                        <img src="http://image.smartisanos.cn/resource/ec6dafed3c75ab3d65c062bc4a28624a.png?x-oss-process=image/resize,w_1220/indexcrop,y_1440,i_9/quality,Q_100/format,webp">
                    </div>
                </div>
                <div class="fixed-nav" :class="{active:showparamsFixedNav}">
                    <div class="fixed-nav-inner">
                        <div class="nav-thumb">
                            <img class="fixed-preview" src="http://image.smartisanos.cn/resource/48e7963e09014366dfdc1fa5e1d3d43d.png?x-oss-process=image/resize,w_54/quality,Q_90/format,webp">
                        </div>
                        <div class="nav-item">
                            <p class="nav-item-name">Smartisan 卫衣 大爆炸</p>
                            <div class="nav-item-price">
                                <span class="discount-price">
                                    <em ng-bind="'¥'">¥</em>
                                    <i>249.00</i>
                                </span>
                            </div>
                        </div>
                        <div class="nav-item-action">
                            <ul>
                                <li>
                                    <span>
                                        <a class="add-cart" @click="addCart">加入购物车</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
      pageLoading: false,
      curNum: 1,
      data: {
        maxNum: 10
      },
      showparamsFixedNav: false
    };
  },
  mounted() {
    let productCategoryId = this.$route.params.productCategoryId;
    let productId = this.$route.query.productId;
    console.log(productCategoryId);
    console.log(productId);
    this._loadData(productId);
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    _loadData(id) {
      let vm = this;
      let params = {
        url: 'product/' + id,
        type: 'get',
        sCallback(data) {
          vm.data = data;
        },
        eCallback(e) {}
      };
      this.http.request(params);
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let infoBoxoffSet = this.$refs.itemInfoBox.offsetTop;

      // 参数导航是否显示
      if (infoBoxoffSet - scrollTop < 10) {
        this.showparamsFixedNav = true;
      } else {
        this.showparamsFixedNav = false;
      }
    },
    activeThumbnail() {},
    chooseParams() {},
    downNum() {
      if (this.curNum === 1) return;
      this.curNum = this.curNum - 1;
      this.data.curNum = this.curNum;
    },
    upNum() {
      if (this.curNum >= this.data.maxNum) return;
      this.curNum = this.curNum + 1;
      this.data.curNum = this.curNum;
    },
    addCart() {},
    goToCheckout() {},
    hideCartTipDiag() {},
    jumpToCart() {}
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.gray-box
    overflow hidden
    background #fff
    border-radius 8px
    border 1px solid #dcdcdc
    border-color rgba(0, 0, 0, 0.14)
    box-shadow 0 3px 8px -6px rgba(0, 0, 0, 0.1)

.main
    background #ededed
    overflow hidden
    width 100%
    min-height 100%

    .store-content
        clear both
        width 1220px
        min-height 600px
        padding 0 0 25px
        margin 0 auto

        &.page-item
            img
                max-width 100%
                height auto

            .banner
                display tabel-cell
                vertical-align middle

            .gray-box
                margin-bottom 20px

                &:first-child
                    width 1098px
                    padding 60px
                    display table

                .gallery-wrapper
                    display table-cell
                    vertical-align top

                    .gallery
                        float left
                        width 540px
                        display table-cell

                        .thumbnail
                            display table-cell
                            vertical-align middle

                            li
                                width 54px
                                height 54px
                                margin-top 10px
                                padding 12px
                                border 1px solid #f0f0f0
                                border 1px solid rgba(0, 0, 0, 0.06)
                                border-radius 5px
                                cursor pointer

                                &:first-child
                                    margin-top 0

                                &.on
                                    padding 10px
                                    border 3px solid #ccc
                                    border 3px solid rgba(0, 0, 0, 0.2)

                                img
                                    display block

                        .thumb
                            display table-cell
                            vertical-align middle

                            ul
                                margin-left 20px
                                width 440px
                                height 440px
                                position relative

                                li
                                    position absolute
                                    left 0
                                    right 0
                                    top 0
                                    bottom 0
                                    display none
                                    opacity 0
                                    text-align center
                                    user-select none

                                    img
                                        display block

                                    &.on
                                        animation thumb-change 0.35s ease-out 1
                                        position relative
                                        display block
                                        z-index 1
                                        opacity 1

                .banner
                    width 450px
                    margin-left 10px
                    transition all 0.15s ease-out

                    .sku-custom-title
                        overflow hidden
                        padding 8px 8px 18px 10px
                        position relative

                        .params-info
                            width 360px

                            h4
                                font-size 24px
                                line-height 1.25
                                color #000
                                margin-bottom 13px

                            h6
                                font-size 14px
                                line-height 1.5
                                color #bdbdbd

                        .params-price
                            position absolute
                            right 8px
                            bottom 8px

                            span
                                display block
                                color #d44d44
                                font-weight 700
                                font-size 16px
                                line-height 20px
                                text-align right

                                em
                                    font-style normal

                                i
                                    font-style normal
                                    font-weight bold
                                    padding-left 2px
                                    font-size 24px

                    .sku-dynamic-params-panel
                        padding 29px 0 8px 10px
                        border-top 1px solid #ebebeb

                        .sku-dynamic-params
                            margin-bottom 19px

                            .params-name
                                float left
                                padding-right 20px
                                font-size 14px
                                color #8d8d8d
                                line-height 36px

                            .params-colors
                                float left
                                line-height 36px
                                margin -10px 0 0 -10px
                                width 402px

                                li
                                    float left
                                    margin 10px 0 0 10px

                                    &.cur
                                        a
                                            border-color #B2B2B2
                                            box-shadow inset 0 0 0 1px #B2B2B2

                                            &:hover
                                                box-shadow inset 0 0 0 1px #B2B2B2

                                    a
                                        display block
                                        width 26px
                                        height 26px
                                        border 2px solid #E5E5E5
                                        padding 3px
                                        text-align center
                                        color #757575
                                        border-radius 50%
                                        cursor pointer

                                        &:hover
                                            box-shadow inset 0 0 0 1px #e5e5e5

                                    i
                                        position relative
                                        display block
                                        width 100%
                                        border-radius 50%
                                        font-style normal

                                    img
                                        position relative
                                        display block
                                        width 100%
                                        border-radius 50%

                            .params-normal
                                float left
                                line-height 36px
                                margin -10px 0 0 -10px
                                width 402px

                                li
                                    float left
                                    margin 10px 0 0 10px

                                    &.cur
                                        a
                                            border 1px solid #999
                                            border 0 solid rgba(226, 226, 226, 1)
                                            box-shadow inset 0 0 0 2px #B2B2B2

                                            &:hover
                                                box-shadow inset 0 0 0 2px #B2B2B2

                                    a
                                        display block
                                        min-width 16px
                                        padding 0 10px
                                        text-align center
                                        color #757575
                                        border 1px solid #dbdbdb
                                        border 0 solid rgba(226, 226, 226, 1)
                                        border-radius 3px
                                        box-shadow inset 0 0 0 1px #dbdbdb
                                        cursor pointer

                                        &:hover
                                            box-shadow inset 0 0 0 1px #dbdbdb, 0 0 0px 1px #dbdbdb

                            .params-detail
                                line-height 36px
                                float left
                                width 392px

                                .item-num
                                    float left
                                    min-width 128px

                                    .down, .up
                                        position relative
                                        float left
                                        display inline-block
                                        width 36px
                                        height 36px
                                        line-height 40px
                                        text-indent -9999em
                                        cursor pointer
                                        -moz-user-select -moz-none
                                        -khtml-user-select none
                                        -webkit-user-select none
                                        -ms-user-select none
                                        -o-user-select none
                                        user-select none

                                    .down:before
                                        content ''
                                        position absolute
                                        left -4px
                                        right -4px
                                        top 0
                                        height 45px
                                        background url('./cart-updown-item.png') no-repeat
                                        -webkit-background-size 100% auto
                                        background-size 100% auto
                                        background-position 0 -60px

                                    .up:before
                                        content ''
                                        position absolute
                                        left -4px
                                        right -4px
                                        top 0
                                        height 45px
                                        background url('./cart-updown-item.png') no-repeat
                                        -webkit-background-size 100% auto
                                        background-size 100% auto

                                    .num
                                        position relative
                                        overflow hidden
                                        float left
                                        display inline-block
                                        width 56px
                                        height 18px
                                        margin 10px 0 0
                                        border none
                                        border-radius 3px
                                        line-height 18px
                                        text-align center
                                        font-size 14px

                                    input
                                        width 56px
                                        height 18px
                                        background-color transparent
                                        border none
                                        border-radius 3px
                                        text-align center
                                        font-size 14px
                                        line-height 18px
                                        padding 0

                                    .unit
                                        position relative
                                        overflow hidden
                                        float left
                                        display inline-block
                                        width 56px
                                        height 18px
                                        margin 10px 0 0 10px
                                        border none
                                        border-radius 3px
                                        line-height 18px
                                        text-align center
                                        font-size 14px

                    .sku-status
                        position relative
                        border-top 1px solid #ebebeb
                        padding 30px 0 0 10px

                        .blue-title-btn
                            float left
                            display inline-block
                            width 143px
                            height 48px
                            line-height 48px
                            text-align center
                            border-radius 7px
                            border 1px solid #5c81e3
                            background-color #5c85e5
                            background-image linear-gradient(#779ae9, #5078df)
                            color #fff
                            cursor pointer

                            &:hover
                                background-image linear-gradient(#6B8BD3, #486AC2)

                            a
                                color #fff

                        .green-title-btn
                            width 143px
                            height 48px
                            line-height 48px
                            text-align center
                            border-radius 7px
                            border 1px solid #76a03c
                            background-color #7cb437
                            background-image -webkit-linear-gradient(#95c550, #7cb437)
                            background-image linear-gradient(#95c550, #7cb437)
                            color #fff
                            cursor not-allowed
                            display none

                            a
                                cursor not-allowed
                                color #fff

                        .gray-title-btn
                            display inline-block
                            margin-left 20px
                            width 143px
                            height 48px
                            line-height 48px
                            text-align center
                            background #fafafa
                            background -webkit-linear-gradient(#fff, #fafafa)
                            background linear-gradient(#fff, #fafafa)
                            border 1px solid #e0e0e0
                            border-radius 7px
                            color #8c8c8c
                            cursor pointer

                            &:hover
                                background-image linear-gradient(#F5F5F5, #EEEEEE)

                        .sku-custom-tips
                            margin-top 20px
                            color #999
                            font-size 12px

                        .cart-tip-diag
                            display none
                            width 320px
                            overflow hidden
                            clear both
                            border 1px solid #DCDCDC

                            &.absolute
                                position absolute
                                bottom -30px
                                left 0

                            h4
                                padding-left 50px
                                background url('./addcart-action-title-icon.png') 18px 13px no-repeat
                                font-size 20px
                                color #333
                                line-height 50px
                                font-weight 400

                            .light-gray-btn
                                float left
                                height 36px
                                margin 10px 0 10px 51px
                                background #EEE
                                color #333
                                display inline-block
                                padding 0 20px
                                border-radius 8px
                                line-height 38px
                                font-size 14px
                                cursor pointer

                            .blue-btn
                                display inline-block
                                height 38px
                                padding 0 20px
                                border-radius 8px
                                line-height 38px
                                font-size 14px
                                cursor pointer
                                height 36px
                                float left
                                height 36px
                                margin 10px 0 10px 51px
                                background #688DE8
                                line-height 36px
                                color #FFF
                                margin 10px 0 10px 26px

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

                .item-info
                    overflow hidden
                    margin-bottom -6px
                    border-radius 0 0 10px 10px

                    img
                        display block
                        width 1220px
                        max-width inherit
                        margin-left -1px

            .fixed-nav
                opacity 0
                display none
                position fixed
                top 0
                left 0
                height 80px
                width 100%
                z-index 110
                background #f7f7f7
                border-bottom #d3d3d3 solid 1px
                box-shadow 0 0 13px rgba(0, 0, 0, 0.2)
                transition all 1.5s ease

                &.active
                    display block
                    opacity 1

                .fixed-nav-inner
                    width 1220px
                    margin 0 auto
                    overflow hidden

                    .nav-thumb
                        float left
                        width 70px

                        .fixed-preview
                            margin 10px 10px 0 0
                            width 60px
                            height 60px

                    .nav-item
                        float left
                        padding 10px 0

                        .nav-item-name
                            line-height 30px

                        .nav-item-price
                            .discount-price
                                color #d44d44
                                font-weight 700

                                em, i
                                    font-style normal

                    .nav-item-action
                        float right

                        ul
                            overflow hidden

                            li
                                float left

                                a
                                    margin 23px 10px
                                    padding 0 10px
                                    font-size 14px
                                    display block
                                    line-height 30px
                                    color #999
                                    opacity 1
                                    border 1px solid #f7f7f7
                                    border-radius 8px
                                    cursor pointer

                                    &.add-cart
                                        margin 18px 0 0 20px
                                        padding 5px 15px
                                        border-radius 7px
                                        border 1px solid #5c81e3
                                        background-color #5c85e5
                                        background-image linear-gradient(#779ae9, #5078df)
                                        display block
                                        color #fff
                                        font-size 14px
</style>
