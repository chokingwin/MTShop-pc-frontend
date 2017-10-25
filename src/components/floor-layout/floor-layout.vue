<template>
    <section class="floor-panel">
        <div class="box">
            <header class="title-header">
                <h5 class="title">{{title}}</h5>
            </header>
            <ul class="cell-list">
                <li class="product" :class="[index>4 ? 'border-top' : '', index===3 ? 'no-border-left' : '']" v-for="(item,index) in data" :key="index" v-if="item.name">
                    <template v-if="item.name">
                        <product-item :productInfo="item"></product-item>
                    </template>
                    <template v-else>
                        <product-item :productInfo="item"></product-item>
                    </template>
                </li>
                <li class="product double no-border-left" v-else>
                    <img :src="item.pic">
                    <a class="cover-link" target="_blank" :href="item.link"></a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
import productItem from '../product-item/product-item';
export default {
  name: 'floor-layout',
  props: {
    title: String,
    data: Array
  },
  components: {
    'product-item': productItem
  },
  computed: {},
  data() {
    return {};
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.floor-panel
    overflow hidden

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

    .cell-list
        li
            &.no-border-left
                &:before
                    border-left none !important

            &.border-top
                &:before
                    border-top 1px solid rgba(0, 0, 0, 0.1)

            &.product
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

                &.double
                    width 50%

                    a
                        display block
                        position absolute
                        top 0
                        right 0
                        bottom 0
                        left 0
                        z-index 4
</style>