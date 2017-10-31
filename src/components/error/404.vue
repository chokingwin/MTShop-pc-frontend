<template>
  <div class="error">
    <m-header></m-header>
    <div class="main">
      <div class="error-page">
        <div class="section">
          <div class="container">
            <div class="error">
              <h2>注意</h2>
              <div class="error-img i404"></div>
              <h5>抱歉，您输入的地址有误，请稍后再试。</h5>
              <h6>
                <span class="sec">{{num}}</span> 秒后系统会自动转入
                <a href="#/">首页</a>
              </h6>
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
import footer from '../footer/footer';
let flag;
export default {
  name: 'error404',
  components: {
    'm-header': header,
    'm-footer': footer
  },
  mounted() {
    flag = setInterval(this.curNum, 1000);
  },
  destroyed () {
    clearInterval(flag);
  },
  data() {
    return {
      num: 10
    };
  },
  methods: {
    curNum() {
      if (this.num > 0) {
        --this.num;
      } else {
        clearInterval(flag);
        this.$router.push({
          path: '/'
        });
      }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.main
  min-height 800px
  background #ededed
  overflow hidden
  width 100%

  .error-page
    background #ededed
    background url('./con-bg.jpg') repeat-x

    .section
      padding-top 50px
      padding-bottom 50px

      .container
        width 1220px
        margin-left auto
        margin-right auto

        .error
          background #fff
          border-radius 8px
          text-align center
          margin 0 auto 50px
          height 650px
          box-shadow 0 1px 3px rgba(0, 0, 0, 0.27), 0 1px 0 #dcdcdc, 0 -1px 0 #ddd

          h2
            color #626262
            text-align left
            padding 0 0 0 40px
            border-bottom 1px solid #cecece
            line-height 60px
            height 60px
            font-weight 500

          .error-img
            width 427px
            height 330px
            margin 80px auto 0
            background url('./status-error.jpg') top no-repeat

            &.i404
              background-image url('./404.png')

          h5
            line-height 60px
            height 60px
            color #75757d
            font-weight 500

          h6
            padding 0 0 80px
            font-size 14px
            color #999
            font-weight 400

            a
              color #5079d9
              cursor pointer
              transition all 0.15s ease-out
              text-decoration none
</style>
