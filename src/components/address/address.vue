<template>
    <div class="account-address">
        <div class="gray-box clearfix">
            <div class="title">
                <h2>收货地址</h2>
                <span class="gray-blue-btn">
                    <a class="add">添加新地址</a>
                </span>
            </div>
            <div class="box-inner">
                <div class="gray-sub-title address-title">
                    <span class="name">姓名</span>
                    <span class="detail">详细地址</span>
                    <span class="telephone">电话</span>
                </div>
                <div class="address-list-item default-item">
                    <div class="name fn-left">
                        <div class="name-cell">陈威</div>
                    </div>
                    <div class="detail fn-left">
                        <div class="detail-cell">广东省 广州市 番禺区 大学城华南师范大学</div>
                    </div>
                    <div class="operation fn-right">
                        <div class="operation-cell">
                            <a class="gray-edit-btn">修改</a>
                            <span class="red-del-btn" style="width: 26px;">
                                <a style="display: block;">删除</a>
                                <em style="display: inline; width: 26px; opacity: 0;">删除</em>
                            </span>
                        </div>
                    </div>
                    <div class="default fn-right"> （默认地址） </div>
                    <div class="telephone fn-right">13631206593</div>
                </div>
                <div class="address-list-item ">
                    <div class="name fn-left">
                        <div class="name-cell">cwcw</div>
                    </div>
                    <div class="detail fn-left">
                        <div class="detail-cell">广东省 深圳市 罗湖区 fasdfasd 发生的发生大声道</div>
                    </div>
                    <div class="operation fn-right">
                        <div class="operation-cell">
                            <a class="gray-edit-btn">修改</a>
                            <span class="red-del-btn">
                                <a>删除</a>
                                <em>删除</em>
                            </span>
                        </div>
                    </div>
                    <div class="default fn-right">
                        <a>设为默认</a>
                    </div>
                    <div class="telephone fn-right">13631206593</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'address'
};
</script>

<style lang="stylus" scoped>
.fn-left, .fn-right
    display inline

.fn-left
    float left

.fn-right
    float right

.gray-box
    overflow hidden
    border 1px solid #D1D1D1
    border-color rgba(0, 0, 0, 0.14)
    border-radius 8px
    box-shadow 0 3px 8px -6px rgba(0, 0, 0, 0.1)
    background #fff

    .title
        position relative
        z-index 2
        height 60px
        padding 0 10px 0 28px
        background #F5F5F5
        background linear-gradient(#FFF, #F5F5F5)
        border-bottom 1px solid #DCDCDC
        border-radius 10px 10px 0 0
        box-shadow 0 1px 7px rgba(0, 0, 0, 0.06)
        line-height 60px
        color #646464

        h2
            float left
            font-size 18px
            font-weight 400
            color #626262

        span
            overflow hidden
            float right
            margin-top 11px

        .gray-blue-btn
            display inline-block
            height 38px
            padding 0
            border-radius 8px
            line-height 38px
            font-size 14px
            cursor pointer
            background #A2A2A2
            transition all 0.3s ease

            &:hover
                background #98AFEE

            a
                height 38px
                line-height 38px
                color #FFF

                &.add
                    padding 0 13px 0 38px
                    background url('./btn-icon-new.png') 0 -17px no-repeat
                    transition none

    .gray-sub-title
        height 38px
        padding 0 24px
        background #EEE
        border-top 1px solid #DBDBDB
        border-bottom 1px solid #DBDBDB
        line-height 38px
        font-size 12px
        color #666

    .address-title
        border-top none

        span
            display inline-block
            float left
            height 38px
            text-align center

            &.name
                width 126px
                text-align left

            &.detail
                text-align left

            &.telephone
                float right
                width 160px
                padding-right 191px

    .address-list-item
        height 75px
        padding 20px 0
        border-bottom 1px solid #CFCFCF
        line-height 24px

        &.default-item
            line-height 24px

        .name
            display table
            width 106px
            height 100%
            padding 0 20px 0 24px

            .name-cell
                display table-cell
                vertical-align middle

        .detail
            display table
            width 440px
            height 100%
            text-align left

            .detail-cell
                display table-cell
                vertical-align middle

        .operation
            display -webkit-box
            -webkit-box-pack center
            -webkit-box-align center
            width 135px
            padding 24px 0

            .operation-cell
                display flex
                text-align center

                .gray-edit-btn, .red-del-btn
                    width 26px
                    height 26px
                    border-radius 5px
                    overflow hidden

                .gray-edit-btn
                    margin-right 6px
                    display inline-block
                    background url('./btn-icon-new.png') -9px -112px no-repeat #A2A2A2
                    text-indent -9999em
                    cursor pointer

                    &:hover
                        background url('./btn-icon-new.png') -9px -112px no-repeat #98AFEE

                .red-del-btn
                    position relative
                    display inline-block
                    background #d84747
                    background linear-gradient(#f97474, #e05b5b)
                    line-height 26px
                    opacity 0.62
                    cursor pointer
                    transition none

                    &:hover
                        opacity 1

                    a
                        display block
                        width 26px
                        height 26px
                        background url('./btn-icon-new.png') -9px -262px no-repeat
                        text-indent -9999em
                        color #FFF
                        transition none

                    em
                        position absolute
                        left 0
                        top 0
                        display none
                        height 26px
                        text-indent 0
                        font-size 12px
                        color #FFF

        .default
            width 80px
            line-height 75px
            text-align center
            font-size 12px

            a
                visibility hidden
                transition none
                cursor pointer
                color #5079d9

                &:hover
                    color #395699

        .telephone
            width 160px
            height 100%
            line-height 75px
            text-align center
</style>
