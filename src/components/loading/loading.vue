<template>
    <div class="loading">
    </div>
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
.loading
    background: url(./loading-global.gif) no-repeat;
    height: 32px;
    margin-left: -16px;
    margin-top: -16px;
    padding: 0;
    width: 32px;
    position: fixed;
    top: 50%;
    left: 50%;
</style>
