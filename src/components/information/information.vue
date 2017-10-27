<template>
  <div class="account-user-info">
    <div class="gray-box clearfix">
      <div class="title">
        <h2>账户资料</h2>
      </div>
      <div class="box-inner">
        <div class="status-box clearfix account-avatar-box">
          <div class="account-avatar-image">
            <img src="https://account.smartisan.com/files/00/14/42/0a/avatar.png?1509084000">
          </div>
          <div class="safe-center-title">
            <h3>修改头像</h3>
          </div>
          <a class="blue-small-btn">上传图片</a>
        </div>
        <div class="status-box fn-clear safe-status-warning">
          <div class="safe-center-title">
            <h3>账户昵称</h3>
          </div>
          <p>未设置。</p>
          <div class="safe-todo">
            <a href="javascript:;" target="_blank">现在设置</a>
          </div>
        </div>
        <div class="status-box clearfix safe-status-ok">
          <div class="safe-center-title">
            <h3>手机验证</h3>
          </div>
          <p>您验证的手机：136****6593</p>
          <div class="safe-todo">
            <a href="javascript:;" target="_blank">修改</a>
          </div>
        </div>
        <div class="status-box clearfix safe-status-ok">
          <div class="safe-center-title">
            <h3>登录密码</h3>
          </div>
          <p>互联网账号存在被盗风险，建议您定期更改密码以保护账户安全。</p>
          <div class="safe-todo">
            <a href="javascript:;" target="_blank">修改</a>
          </div>
        </div>
        <div class="status-box clearfix safe-status-ok">
          <div class="safe-center-title">
            <h3>邮箱验证</h3>
          </div>
          <p>您验证的邮箱：22****21@qq.com</p>
          <div class="safe-todo">
            <a href="javascript:;" target="_blank">修改</a>
          </div>
        </div>
        <div class="status-box clearfix safe-status-warning">
          <div class="safe-center-title">
            <h3>安全问题</h3>
          </div>
          <p>未设置安全问题。</p>
          <div class="safe-todo">
            <a href="javascript:;" target="_blank">现在设置</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'information'
};
</script>

<style lang="stylus">
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

  .status-box
    position relative
    height 60px
    padding-bottom 30px
    margin 0 30px 30px
    border-bottom #dadada solid 1px
    line-height 30px

    .safe-center-title
      font-size 18px
      font-weight 400
      color #333

    h3
      font-size 18px
      font-weight 400
      color #333

    p
      clear both
      width 420px
      color #999
      float left

    .safe-todo
      position absolute
      right 15px
      top 50%
      margin-top -30px
      text-align right

      a
        display block
        color #5079d9
        cursor pointer
        transition all 0.3s ease

        &:hover
          color #395699

  .safe-status-ok
    padding-left 55px
    background url('./safe-status.png') 21px 5px no-repeat

  .safe-status-warning
    padding-left 55px
    background url('./safe-status-problem.png') 21px 5px no-repeat

  .blue-small-btn
    display inline-block
    height 30px
    padding 0 13px
    border-radius 4px
    line-height 30px
    font-size 12px
    cursor pointer
    background #6383C6
    background linear-gradient(#7EA3F5, #5A82F0)
    box-shadow 0 1px 2px rgba(255, 255, 255, 0.1) inset, 0 0 0 1px rgba(0, 0, 0, 0.2) inset, 0 1px 3px rgba(0, 0, 0, 0.1)
    color #FFF

    &:hover
      background-image linear-gradient(#6B8BD3, #486AC2)

  .account-avatar-box
    height 124px
    padding 0 0 0 120px

    .account-avatar-image
      position absolute
      left 20px
      top 50%
      margin-top -40px

      img
        width 80px
        height 80px
        border-radius 2px

    .safe-center-title
      padding 29px 0 4px
</style>
