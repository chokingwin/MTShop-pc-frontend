<template>
    <div class="header-sub-shop">
        <div class="nav-sub">
            <div class="nav-sub-wrapper">
                <div class="container">
                    <ul class="nav-list">
                        <li class="active">
                            <a href="javascript:;">首页</a>
                        </li>
                        <li>
                            <a href="javascript:;">全部商品</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'header-sub-shop',
  data() {
    return {};
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.nav-sub
    position relative
    z-index 20
    height 90px

    .nav-sub-wrapper
        padding 31px 0
        height 28px
        position relative

        .container
            width 1220px
            margin-left auto
            margin-right auto

            .nav-list
                float left
                height 28px
                line-height 28px

                li
                    position relative
                    float left
                    padding-left 2px

                    &:first-child
                        padding-left 0

                        a
                            padding-left 10px

                        &:before
                            content none

                    &.active
                        a
                            font-weight 700

                    a
                        display block
                        padding 0 20px
                        color #666

                        &:hover
                            color #5079d9

                    &:before
                        content ' '
                        position absolute
                        left 0
                        top 13px
                        width 2px
                        height 2px
                        background #bdbdbd
                        opacity 0.3
</style>