<template>
    <div class="home">
        <m-header></m-header>
        <header-sub-shop></header-sub-shop>
        <div class="main">
            <div v-if="!isLoading" class="store-content">
                <div class="sku-box">
                    <div class="sort-option">
                        <ul class="line clearfix">
                            <li>
                                <a class="active" @click="gortSort('sort')">综合排序</a>
                            </li>
                            <li>
                                <a class="" @click="gortSort('sales')">销量排序</a>
                            </li>
                            <li>
                                <a class="" @click="gortSort('price_low')">价格低到高</a>
                            </li>
                            <li>
                                <a class="" @click="gortSort('price_high')">价格高到低</a>
                            </li>
                        </ul>
                    </div>
                    <div class="gray-box clearfix">
                        <div class="item-box">
                            <div class="item" v-for="(item,index) in categoryPro" :key="index">
                                <product-item :productInfo="item"></product-item>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="shopping-service">
                    <ul class="shopping-info gray-box">
                        <li class="online-services" open-service-window="">
                            <span class="online"></span>
                            <h5>在线客服</h5>
                            <h6>周一至周日 9:00-18:00</h6>
                        </li>
                        <li>
                            <span class="return-goods"></span>
                            <h5>7 天无理由退货</h5>
                            <h6>7 天无理由退货 请放心购买</h6>
                        </li>
                        <li>
                            <span class="exchange-goods"></span>
                            <h5>15 天免费换货</h5>
                            <h6>15 天内如遇质量问题 免费换货</h6>
                        </li>
                        <li>
                            <span class="delivery-goods"></span>
                            <h5 class="ng-binding">满 150 元免运费</h5>
                            <h6>全场使用顺丰快递</h6>
                        </li>
                    </ul>
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
import headerSubShop from '../header-sub-shop/header-sub-shop';
import productItem from '../product-item/product-item';
import pageLoading from '../loading/page-loading';
import categoryPro from './mock-category-pro';

export default {
  name: 'home',
  components: {
    'm-header': header,
    'm-footer': footer,
    'header-sub-shop': headerSubShop,
    'product-item': productItem,
    'page-loading': pageLoading
  },
  data() {
    return {
      isLoading: false,
      categoryPro: categoryPro
    };
  },
  methods: {
    gortSort(index) {}
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.main
    background #ededed
    overflow hidden
    width 100%
    min-height 700px

.gray-box
    overflow hidden
    background #fff
    border-radius 8px
    border 1px solid #dcdcdc
    border-color rgba(0, 0, 0, 0.14)
    box-shadow 0 3px 8px -6px rgba(0, 0, 0, 0.1)

.store-content
    clear both
    width 1220px
    min-height 600px
    padding 0 0 25px
    margin 0 auto

    .gray-box
        margin-bottom 0

    .sku-box
        position relative
        clear both

        .sort-option
            border-top 1px solid #D8D8D8
            color #999

            ul
                height 60px
                line-height 60px

                li
                    position relative
                    float left
                    padding-left 42px

                    &:first-child
                        padding-left 9px

                    &:before
                        content ' '
                        display block
                        position absolute
                        left 20px
                        top 50%
                        width 2px
                        height 2px
                        margin-top -1px
                        background #C7C7C7

                    a
                        display block
                        font-size 12px
                        color #999
                        cursor pointer
                        transition all 0.15s ease-out

                        &:hover
                            color #5683EA

                        &.active
                            color #5683EA

        .item-box
            clear both
            overflow hidden
            margin 0 -1px -1px -1px

            .item
                position relative
                float left
                border-right 1px solid #efefef
                border-bottom 1px solid #efefef
                width 25%
                height 429px
                background #fff
                box-sizing border-box
                text-align center

    .shopping-info
        margin 10px 0 0 0
        overflow hidden
        background #fff
        text-align center

        li
            float left
            width 304px
            height 153px
            text-align center

            span
                margin 33px auto 5px
                display block
                width 32px
                height 36px
                background url('./shopping-info.png') no-repeat top left
                transition all 0.15s ease

                &.online
                    width 36px
                    background-position top left
                    opacity 0.625

                &.return-goods
                    background-position -50px 0
                    opacity 0.625

                &.exchange-goods
                    background-position -100px 0
                    opacity 0.625

                &.delivery-goods
                    background-position -150px 0
                    opacity 0.625

            h5
                color #000
                font-size 15px
                line-height 25px

            h6
                color #A8A8A8
                font-size 12px
                line-height 24px
</style>
