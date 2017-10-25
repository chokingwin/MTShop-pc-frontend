<template>
  <div class="product-item">
    <img :src="curProPic">
    <div class="badge-container" v-if="productInfo.badge">
      <span class="badge discount">{{productInfo.badge}}</span>
    </div>
    <div class="info">
      <h6>{{productInfo.name}}</h6>
      <p>{{productInfo.desc}}</p>
    </div>
    <p class="price">
      <i>¥</i>
      <span>{{curPrice}}</span>
      <span class="original-price" v-if="curOriginalPrice">
        <i>¥</i>{{curOriginalPrice}}</span>
    </p>
    <ul class="dot-list" v-if="productInfo.color_pics !== null">
      <li v-for="(item,index) in productInfo.color_pics" :key="index" :class="{active:productInfo.cur_index===index}" @mouseenter="changeCurIndex(index)">
        <div class="outer">
          <span :style="{backgroundImage: 'url('+item+')'}"></span>
        </div>
      </li>
    </ul>
    <div class="operator">
      <span class="detail-btn">
        <a target="_blank" :href="curLink">查看详情</a>
      </span>
      <span class="cart-btn" :class="{disabled:productInfo.is_sold_out}">加入购物车</span>
    </div>
    <a class="cover-link" target="_blank" :href="curLink"></a>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'product-item',
  props: {
    productInfo: Object
  },
  computed: {
    curProPic() {
      return this.productInfo.pro_pics[this.productInfo.cur_index];
    },
    curPrice() {
      return this.productInfo.price[this.productInfo.cur_index];
    },
    curOriginalPrice() {
      return this.productInfo.original_price === null
        ? null
        : this.productInfo.original_price[this.productInfo.cur_index];
    },
    curLink() {
      return this.productInfo.link[this.productInfo.cur_index];
    }
  },
  data() {
    return {
      curIndex: 0
    };
  },
  methods: {
    changeCurIndex(index) {
      this.productInfo.cur_index = index;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.product-item
  &:hover
    .price
      opacity 0

    .operator
      visibility visible
      opacity 1

  img
    display block
    margin 50px auto
    width 206px
    height 206px

  .badge-container
    position absolute
    top 20px
    right 20px

    .badge
      display block
      position relative
      float right
      margin-left 10px
      box-sizing border-box
      border-radius 14px
      height 28px
      font-size 12px
      line-height 26px
      text-align center
      min-width 56px
      padding 0 10px

      &.discount
        border 1px solid #ffe57a
        color #e6b217
        background #fffbe5
        box-shadow 0 1px 3px 0 rgba(0, 0, 0, 0.05)

  .info
    position absolute
    top 274px
    left 0
    box-sizing border-box
    padding 0 10px
    width 100%

    h6
      overflow hidden
      font-size 16px
      line-height 1.2
      white-space nowrap
      text-overflow ellipsis
      color #424242

    p
      overflow hidden
      padding-top 7px
      font-size 12px
      line-height 1.2
      white-space nowrap
      text-overflow ellipsis
      color #b2b2b2

      &.is-promotion
        color #e04e4e

  .price
    display inline-block
    position absolute
    top 376px
    left 0
    width 100%
    font-family Arial
    font-size 18px
    line-height 1.2
    text-align center
    color #de4037

    i
      left 0
      font-weight 700
      font-size 14px
      font-style normal
      line-height 1.2

    span
      position relative
      font-weight 700

      &.original-price
        color #d2d2d2
        font-size 13px
        margin-left 3px
        font-weight 400
        position relative
        display inline-block

        &:before
          content ''
          display block
          position absolute
          width 100%
          border-top 1px solid #d2d2d2
          margin-top 8px

        i
          color #d2d2d2
          margin-right 2px
          font-weight 400

  .dot-list
    position absolute
    bottom 79px
    z-index 20
    width 100%
    height 18px
    text-align center

    li
      display inline-block
      position relative
      margin 0 6px
      box-sizing border-box
      width 16px
      height 16px
      text-align center
      vertical-align middle
      cursor pointer

      &.active
        .outer
          margin 0
          border 3px solid #b2b2b2
          width 16px
          height 16px

      .outer
        margin 1px
        box-sizing border-box
        border 1px solid #e5e5e5
        border-radius 50%
        width 14px
        height 14px

        span
          display inline-block
          overflow hidden
          position absolute
          top 0
          right 0
          bottom 0
          left 0
          margin auto
          box-sizing border-box
          border-radius 50%
          width 8px
          height 8px
          background-position 50%
          background-size contain

  .operator
    visibility hidden
    position absolute
    bottom 29px
    z-index 20
    width 100%
    font-size 0
    line-height 30px
    opacity 0

    span
      margin 0 5px
      box-sizing border-box
      width 100px
      height 30px
      line-height 28px
      vertical-align middle

      &.detail-btn
        display inline-block
        border 1px solid #e1e1e1
        border-radius 4px
        font-size 12px
        color #646464
        background-color #f9f9f9
        background-image -webkit-linear-gradient(top, #fff, #f9f9f9)
        background-image linear-gradient(180deg, #fff, #f9f9f9)
        cursor pointer

        &:hover
          background-image linear-gradient(180deg, #F5F5F5, #EEEEEE)

        a
          display block
          color #646464

      &.cart-btn
        display inline-block
        border 1px solid #5c81e3
        border-radius 4px
        font-size 12px
        color #fff
        background #678ee7
        background-image -webkit-linear-gradient(top, #678ee7, #5078df)
        background-image linear-gradient(180deg, #678ee7, #5078df)
        cursor pointer

        &:hover
          background-image linear-gradient(180deg, #6B8BD3, #486AC2)

        &.disabled
          cursor not-allowed

  .cover-link
    display block
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    z-index 4
</style>