<template>
    <div class="home">
        <m-header></m-header>
        <header-sub-shop></header-sub-shop>
        <div class="page-home">
            <div class="banner-3d">
                <div class="banner-3d-mask">
                    <a target="_blank" class="active" href="../events/?1023#/sale-1023"></a>
                    <a target="_blank" href="../shop/#/jianguopro" class=""></a>
                </div>
                <ul class="banner-3d-slides">
                    <li class="active">
                        <div class="banner-3d-shadow" style="transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;"></div>
                        <div class="banner-3d-box-1">
                            <img src="http://image.smartisanos.cn/resource/w/w1.png?x-oss-process=image/resize,w_1220/quality,Q_100">
                        </div>
                        <div class="banner-3d-box-mask">
                            <div class="banner-3d-box-2" style="transition: transform 0.3s ease-in-out;">
                                <img src="http://image.smartisanos.cn/resource/w/w22.png?x-oss-process=image/resize,w_1220/quality,Q_100">
                            </div>
                            <div class="banner-3d-box-3" style="transition: transform 0.3s ease-in-out;">
                                <img src="http://image.smartisanos.cn/resource/w/w3.png?x-oss-process=image/resize,w_1220/quality,Q_100">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="banner-3d-shadow" style="transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;"></div>
                        <div class="banner-3d-box-1">
                            <img src="http://image.smartisanos.cn/resource/1/1016c1.png?x-oss-process=image/resize,w_1220/quality,Q_100">
                        </div>
                        <div class="banner-3d-box-mask">
                            <div class="banner-3d-box-2" style="transition: transform 0.3s ease-in-out;">
                                <img src="http://image.smartisanos.cn/resource/1/1016c2.png?x-oss-process=image/resize,w_1220/quality,Q_100">
                            </div>
                            <div class="banner-3d-box-3" style="transition: transform 0.3s ease-in-out;">
                                <img src="http://image.smartisanos.cn/resource/1/1016c3.png?x-oss-process=image/resize,w_1220/quality,Q_100">
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="banner-3d-buttons banner-3d-buttons-show">
                    <li class="active"></li>
                    <li class=""></li>
                </ul>
            </div>
            <section class="activity-panel">
                <ul class="box">
                    <li>
                        <img src="http://image.smartisanos.cn/resource/01a771071479e715b92fb5757c2b9018.png?x-oss-process=image/resize,w_305/quality,Q_100">
                        <a class="cover-link" target="_blank" href="../shop/#/jianguopro/converge"></a>
                    </li>
                    <li>
                        <img src="http://image.smartisanos.cn/resource/7534721f839cc75237b582cdf3d2bd6b.jpg?x-oss-process=image/resize,w_305/quality,Q_100">
                        <a class="cover-link" target="_blank" href="../shop/#/backshell?id=67"></a>
                    </li>
                    <li>
                        <img src="http://image.smartisanos.cn/resource/049fa2b4b466de66012e125e038c4797.jpg?x-oss-process=image/resize,w_305/quality,Q_100">
                        <a class="cover-link" target="_blank" href="../shop/#/category?id=69"></a>
                    </li>
                    <li>
                        <img src="http://image.smartisanos.cn/resource/c9e13faf1a8cd9e4c0081c0e5f0b1379.jpg?x-oss-process=image/resize,w_305/quality,Q_100">
                        <a class="cover-link" target="_blank" href="../shop/#/item/1000327?id=100032701"></a>
                    </li>
                </ul>
            </section>
            <section class="hot-panel">
                <div class="box">
                    <header class="title-header">
                        <h5 class="title">热门商品</h5>
                    </header>
                    <div class="hot-wrapper">
                        <!-- <ul class="cell-list"> -->
                        <!-- <li></li> -->
                        <!-- <li></li> -->
                        <!-- <li></li> -->
                        <!-- <li></li> -->
                        <!-- </ul> -->
                        <ul class="hot-cell-list active">
                            <li class="product" v-for="(item,index) in hotPro" :key="index">
                                <product-item :productInfo="item"></product-item>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <floor-layout :title="'官方精选'" :data="floorPro1"></floor-layout>
            <floor-layout :title="'品牌精选'" :data="floorPro2"></floor-layout>
        </div>
        <m-footer></m-footer>
    </div>
</template>

<script type="text/ecmascript-6">
import header from '../header/header';
import footer from '../footer/footer';
import headerSubShop from '../header-sub-shop/header-sub-shop';
import productItem from '../product-item/product-item';
import floorLayout from '../floor-layout/floor-layout';
import hotPro from './mock-hot-pro';
import floorPro1 from './mock-floor-pro-1';
import floorPro2 from './mock-floor-pro-2';

export default {
  name: 'home',
  components: {
    'm-header': header,
    'm-footer': footer,
    'header-sub-shop': headerSubShop,
    'product-item': productItem,
    'floor-layout': floorLayout
  },
  data() {
    return {
      hotPro: hotPro,
      floorPro1: floorPro1,
      floorPro2: floorPro2
    };
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.page-home
    position relative
    margin 0 auto
    padding 0 0 60px
    width 1222px

    .banner-3d
        position relative
        z-index 1
        perspective 3000px
        width 1220px
        margin auto

        &.animating
            .banner-3d-slides
                transform translateZ(10px)

            .banner-3d-shadow
                display block
                opacity 1

        .banner-3d-mask
            z-index 2
            position absolute
            left 0
            right 0
            top 0
            bottom 0

            a
                position absolute
                left 0
                right 0
                top 0
                bottom 0
                background fixed

                &.active
                    z-index 1

        .banner-3d-slides
            position relative
            height 500px
            transform-style preserve-3d
            transform translateZ(0)
            transition transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)

            li
                position absolute
                left 0
                right 0
                top 0
                bottom 0
                opacity 0
                display none
                transition all 1.5s ease

                &.active
                    display block
                    opacity 1
                    z-index 1

                    .banner-3d-shadow
                        display block
                        opacity 1
                        z-index 1

                .banner-3d-shadow
                    display none
                    position absolute
                    top -60px
                    bottom -60px
                    left -60px
                    right -60px
                    opacity 0
                    transition opacity 0.3s
                    background-repeat no-repeat
                    background-position center 0
                    pointer-events none

                .banner-3d-box-mask
                    position absolute
                    left 0
                    right 0
                    top 0
                    bottom 0
                    bottom 0
                    z-index 2

                .banner-3d-box-1, .banner-3d-box-2, .banner-3d-box-3
                    position absolute
                    left 0
                    right 0
                    top 0
                    bottom 0
                    background-repeat no-repeat
                    background-position 50%
                    background-size contain

                .banner-3d-box-1 img
                    top -27px

                .banner-3d-box-2, .banner-3d-box-3
                    border-radius 10px

                li
                    position absolute
                    left 0
                    right 0
                    top 0
                    bottom 0

                    img
                        border-radius 10px
                        width 100%
                        top -27px

                a
                    position absolute
                    left 0
                    right 0
                    top 0
                    bottom 0

        .banner-3d-buttons
            opacity 0
            position absolute
            left 50%
            bottom 28px
            width 300px
            height 18px
            margin-left -150px
            text-align center
            transform-style preserve-3d
            z-index 2
            transition opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            transform translateZ(60px)

            &.banner-3d-buttons-show
                opacity 1

            li
                position relative
                z-index 3
                display inline-block
                width 18px
                height 18px
                background url('./button.png') no-repeat
                background-size 100% auto
                cursor pointer

                &.active
                    background-position 0 -18px

.box
    overflow hidden
    position relative
    z-index 0
    margin-top 29px
    box-sizing border-box
    border 1px solid rgba(0, 0, 0, 0.14)
    border-radius 8px
    background #fff
    box-shadow 0 3px 8px -6px rgba(0, 0, 0, 0.1)

.activity-panel
    li
        float left
        position relative
        box-sizing border-box
        width 25%
        height 200px
        text-align center

        &:hover
            a
                box-shadow 0px 0px 20px 0px rgba(0, 0, 0, 0.1) inset

        img
            width 305px
            height 200px

        a
            display block
            position absolute
            top 0
            right 0
            bottom 0
            left 0
            z-index 4

.hot-panel
    overflow hidden
    position relative
    z-index 6

    .title-header
        display block
        position relative
        font-size 18px
        line-height 60px
        color #666
        background #fafafa

        &:after
            position absolute
            bottom -1px
            left 0
            z-index 10
            width 100%
            height 1px
            background rgba(0, 0, 0, 0.1)
            content ' '

        .title
            margin-left 30px

    .hot-wrapper
        overflow hidden
        position relative
        height 429px
        transition all 0.3s ease-in-out

        .cell-list
            li
                float left
                position relative
                box-sizing border-box
                width 25%
                height 429px
                text-align center

                &:first-child
                    &:before
                        border-left none

                &:before
                    position absolute
                    top 0
                    left 0
                    z-index 1
                    box-sizing border-box
                    border-left 1px solid #f2f2f2
                    border-left 1px solid rgba(0, 0, 0, 0.1)
                    width 100%
                    height 100%
                    content ''
                    pointer-events none

        .hot-cell-list
            visibility hidden
            float left
            position absolute
            top 0
            left 0
            width 100%
            height 100%
            opacity 0
            -webkit-transition opacity 0.3s
            transition opacity 0.3s

            &.active
                visibility visible
                opacity 1

            li.product
                float left
                position relative
                box-sizing border-box
                width 25%
                height 429px
                text-align center

                &:hover
                    box-shadow 0px 0px 20px 0px rgba(0, 0, 0, 0.1) inset

                &:first-child
                    &:before
                        border-left none

                &:before
                    position absolute
                    top 0
                    left 0
                    z-index 1
                    box-sizing border-box
                    border-left 1px solid #f2f2f2
                    border-left 1px solid rgba(0, 0, 0, 0.1)
                    width 100%
                    height 100%
                    content ''
                    pointer-events none
</style>
