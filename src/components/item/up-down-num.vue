<template>
    <div class="up-down-num">
        <div class="params-name">{{spec.name}}</div>
        <div class="params-detail clearfix">
            <div class="item-num">
                <span class="down down-disabled" @click="downNum">-</span>
                <span class="num">
                    <input type="text" v-model.number="spec.curNum">
                </span>
                <span class="up" @click="upNum">+</span>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'up-down-num',
  props: {
    p_num: Number,
    spec: Object
  },
  data() {
    return {
      num: 1
    };
  },
  methods: {
    downNum() {
      if (this.spec.curNum === 1) return;
      this.spec.curNum = Number(this.spec.curNum) - 1;
      this.changeParams();
    },
    upNum() {
      if (this.spec.curNum >= this.spec.maxNum) return;
      this.spec.curNum = Number(this.spec.curNum) + 1;
      this.changeParams();
    },
    changeParams() {
      this.$emit('changeParams', {
        spec_id: this.spec.spec_id,
        value: this.spec.curNum
      });
    }
  }
};
</script>

<style>

</style>


