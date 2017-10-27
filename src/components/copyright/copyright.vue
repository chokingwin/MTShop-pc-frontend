<template>
    <div class="copyright">
        <div class="clearfix">
            <h2>Copyright ©
                <span copyright-year="">2017</span>,XXX XXX Co., Ltd. All Rights Reserved.</h2>
            <h3 class="company">XX科技有限公司</h3>
            <ul class="privacy">
                <li>
                    <a href="javascript:;">法律声明</a>
                </li>
                <li>
                    <a href="javascript:;">隐私条款</a>
                </li>
            </ul>
        </div>
        <h4>
            <a href="javascript:;" target="_blank">
                <span>京ICP备XXX号-1</span>
                <span>京ICP证XXX号</span>
                <span>京公网安备XXX</span>
            </a>
        </h4>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'copyright'
};
</script>

<style lang="stylus">
a
    color #5079d9
    cursor pointer

    &:hover
        color #395699

.copyright
    display block
    width 100%
    clear both
    color #434d55
    font-size 12px
    padding 0 0 60px
    position absolute
    bottom 0
    text-align center

    div
        display inline-block
        margin 0 auto

    h2
        float left
        height 15px
        line-height 15px
        color #757575

    h3
        float left
        margin-left 3px
        height 15px
        line-height 15px
        color #757575

    .privacy
        float left
        margin 0 0 0 9px

        li
            float left
            font-weight 300
            line-height 12px
            padding 1px 10px 0
            border-left 1px solid #ccc

    h4
        clear both
        padding 10px 0 0
</style>