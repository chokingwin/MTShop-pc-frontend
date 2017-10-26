<template>
    <div class="page-loading">
        页面加载中...</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'loading',
  data() {
    return {};
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.page-loading
    position relative
    margin 167px auto
    width 238px
    height 62px
    text-align center
    background #fff
    box-shadow 0 1px 2px rgba(0, 0, 0, 0.27)
    border-radius 7px
    line-height 66px
    font-size 14px
    color #999

    &:before
        content ' '
        display inline-block
        vertical-align middle
        margin -3px 14px 0 0
        width 18px
        height 18px
        background url('./loading.gif') no-repeat
</style>
